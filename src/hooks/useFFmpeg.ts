import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import domtoimage from 'dom-to-image-more'

import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'
import { useEditorStore } from '@/store/modules/editor'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

const ffmpeg = new FFmpeg()

let isFFmpegInited: boolean = false

async function initFFmpeg() {
  isFFmpegInited = await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })
  return isFFmpegInited
}

async function writeVideo(src: string) {
  if (!isFFmpegInited) {
    console.error('initFFmpeg() first plz')
    return
  }

  const videoName = 'enhypen.mp4'

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
  const gifCropName = 'enhypen2.gif'

  await ffmpeg.exec([
    '-ss',
    `${start}`,
    '-t',
    `${end - start}`,
    '-i',
    videoName,
    '-vf',
    `crop=${w}:${h}:${x}:${y}`,
    '-s',
    `150x${gifH}`,
    gifCropName,
  ])

  return gifCropName
}

async function textInGIF(gifCropName: string, gifH: number) {
  const gifTextName = 'enhypen3.gif'

  const watermarkUrl = await divToImage()
  const logouint8arry = await fetchFile(watermarkUrl)
  await ffmpeg.writeFile('logo.png', logouint8arry)

  await ffmpeg.exec([
    '-i',
    gifCropName,
    '-i',
    'logo.png',
    '-filter_complex',
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
  const cropStore = useCropStore()
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

    await ffmpeg.createDir('key')

    await ffmpeg.exec([
      '-i',
      videoName,
      '-vf',
      'fps=1/0.5',
      '-s',
      '100x50',
      `key/frame-%02d.jpeg`,
    ])

    const keyFramesList = await ffmpeg.listDir('key')
    const res: Array<Blob> = []

    for (let i = 2; i < keyFramesList.length; ++i) {
      const final = await ffmpeg.readFile(
        `key/${keyFramesList[i].name}`,
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
