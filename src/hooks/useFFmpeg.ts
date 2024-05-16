import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

import { useGif } from '@/hooks/useGif'

import { usePlayerStore } from '@/store/modules/player'

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
    /* '-s', // 输出大小
    `150x${gifH}`, */
    gifCropName,
  ])

  return gifCropName
}

async function textInGIF(
  gifCropName: string,
  watermarkUrl: string,
  watermarkX: number,
  watermarkY: number,
) {
  const gifTextName = 'text.gif'
  const picTextName = 'logo.png'

  const logouint8arry = await fetchFile(watermarkUrl)
  await ffmpeg.writeFile(picTextName, logouint8arry)

  await ffmpeg.exec([
    '-i',
    gifCropName,
    '-i',
    picTextName,
    '-filter_complex', // 滤镜
    /* `[1:v]scale=150:${gifH}[scaled];[0:v][scaled]overlay=${watermarkX}:${watermarkX}`, */
    `overlay=${watermarkX}:${watermarkY}`,
    gifTextName,
  ])

  return gifTextName
}

export function useFFmpeg() {
  const playerStore = usePlayerStore()
  const { createGIFJson } = useGif()

  async function videoToGIF() {
    const GIFJson = await createGIFJson(
      playerStore.videoSrc,
      playerStore.startTime,
      playerStore.endTime,
    )
    let finalGif: string = ''

    const videoName = await writeVideo(GIFJson.videosrc)
    finalGif = await cropInVideo(
      videoName,
      GIFJson.videoclip.start,
      GIFJson.videoclip.end,
      GIFJson.videocrop.w,
      GIFJson.videocrop.h,
      GIFJson.videocrop.x,
      GIFJson.videocrop.y,
    )

    if (GIFJson.texts.length)
      finalGif = await textInGIF(
        finalGif,
        GIFJson.texts[0].dataurl,
        GIFJson.texts[0].pos.x,
        GIFJson.texts[0].pos.y,
      )

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
