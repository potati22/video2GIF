import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import domtoimage from 'dom-to-image-more'

import { usePlayerStore } from '@/store/modules/player'
import { useEditorStore } from '@/store/modules/editor'

const ffmpeg = new FFmpeg()

let isFFmpegInited: boolean = false
const keyFrameFolder = 'key' // 用于保存关键帧的文件夹

async function initFFmpeg() {
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

  isFFmpegInited = await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })

  await ffmpeg.createDir(keyFrameFolder)

  return isFFmpegInited
}

async function writeVideo(src: string) {
  if (!isFFmpegInited) throw new Error('先初始化FFmpeg')

  const videoName = 'video.mp4'

  const uint8arry = await fetchFile(src)
  await ffmpeg.writeFile(videoName, uint8arry)

  return videoName
}

async function cropInVideo(
  videoName: string,
  start: number,
  end: number,
  w: number,
  h: number,
  x: number,
  y: number,
  gifH: number,
) {
  const gifCropName = 'crop.gif'

  await ffmpeg.exec([
    '-ss', // 开始时间
    `${start}`,
    '-t', // 持续时间
    `${end - start}`,
    '-i', // 指定视频
    videoName,
    '-vf', // 编辑操作
    `crop=${w}:${h}:${x}:${y}`,
    '-s', // 输出大小
    `150x${gifH}`,
    gifCropName,
  ])

  return gifCropName
}

async function textInGIF(gifCropName: string, gifH: number) {
  const gifTextName = 'text.gif'
  const picTextName = 'logo.png'

  const watermarkUrl = await divToImage()
  const logouint8arry = await fetchFile(watermarkUrl)
  await ffmpeg.writeFile(picTextName, logouint8arry)

  await ffmpeg.exec([
    '-i',
    gifCropName,
    '-i',
    picTextName,
    '-filter_complex', // 滤镜
    `[1:v]scale=150:${gifH}[scaled];[0:v][scaled]overlay=0:0`,
    gifTextName,
  ])

  return gifTextName
}

async function divToImage(): Promise<string> {
  return new Promise((resolve, reject) => {
    const node = document.getElementById('textPic')
    domtoimage.toPng(node).then((dataUrl) => {
      resolve(dataUrl)
    }, reject)
  })
}

export function useFFmpeg() {
  const playerStore = usePlayerStore()
  const editorStore = useEditorStore()

  async function videoToGIF() {
    let finalGif: string = ''
    const gifH = Math.floor((150 * cropStore.cropH) / cropStore.cropW)

    const videoName = await writeVideo(playerStore.videoSrc)
    finalGif = await cropInVideo(
      videoName,
      playerStore.startTime,
      playerStore.endTime,
      cropStore.cropW,
      cropStore.cropH,
      cropStore.cropX,
      cropStore.cropY,
      gifH,
    )

    if (editorStore.editored) finalGif = await textInGIF(finalGif, gifH)

    const final = await ffmpeg.readFile(finalGif, 'binary')
    return URL.createObjectURL(
      new Blob([final as Uint8Array], { type: 'image/gif' }),
    )
  }

  async function extractKeyFrame() {
    const videoName = await writeVideo(playerStore.videoSrc)

    await ffmpeg.exec([
      '-i',
      videoName,
      '-vf',
      'fps=1/0.5',
      '-s',
      '100x50',
      `${keyFrameFolder}/frame-%02d.jpeg`,
    ])

    const keyFramesList = await ffmpeg.listDir(keyFrameFolder)
    const res: Array<Blob> = []

    for (let i = 2; i < keyFramesList.length; ++i) {
      const final = await ffmpeg.readFile(
        `${keyFrameFolder}/${keyFramesList[i].name}`,
        'binary',
      )
      res.push(new Blob([final as Uint8Array], { type: 'image/jpeg' }))
    }

    return res
  }

  return {
    initFFmpeg,
    videoToGIF,
    extractKeyFrame,
  }
}
