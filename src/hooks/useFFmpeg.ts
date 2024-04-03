import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import domtoimage from 'dom-to-image-more'

import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'
import { useEditorStore } from '@/store/modules/editor'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

const ffmpeg = new FFmpeg()

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
  const writeGIFName = 'enhypen.mp4'
  const readGIFName = 'enhypen2.gif'

  async function initFFmpeg() {
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })
  }

  async function videoToGIF() {
    const uint8arry = await fetchFile(playerStore.videoSrc)
    await ffmpeg.writeFile(writeGIFName, uint8arry)

    const finalY = Math.floor(
      (150 * cropStore.cropData.height) / cropStore.cropData.width,
    )

    await ffmpeg.exec([
      '-ss',
      `${playerStore.startTime}`,
      '-t',
      `${playerStore.endTime - playerStore.startTime}`,
      '-i',
      writeGIFName,
      '-vf',
      `crop=${cropStore.cropData.width}:${cropStore.cropData.height}:${cropStore.cropData.x}:${cropStore.cropData.y}`,
      '-s',
      `150x${finalY}`,
      readGIFName,
    ])

    if (editorStore.editored) {
      const watermarkUrl = await divToImage()
      const logouint8arry = await fetchFile(watermarkUrl)
      await ffmpeg.writeFile('logo.png', logouint8arry)
      await ffmpeg.exec([
        '-i',
        readGIFName,
        '-i',
        'logo.png',
        '-filter_complex',
        `[1:v]scale=150:${finalY}[scaled];[0:v][scaled]overlay=0:0`,
        'output.gif',
      ])
    }

    const finalGif = editorStore.editored ? 'output.gif' : readGIFName
    const final = await ffmpeg.readFile(finalGif, 'binary')

    return URL.createObjectURL(
      new Blob([(final as Uint8Array).buffer], { type: 'image/gif' }),
    )
  }

  /* async function addSubtitles() {
    const watermarkUrl = await divToImage()

    const uint8arry = await fetchFile(playerStore.videoSrc)
    await ffmpeg.writeFile('my.mp4', uint8arry)

    const logouint8arry = await fetchFile(watermarkUrl)
    await ffmpeg.writeFile('logo.png', logouint8arry)

    await ffmpeg.exec([
      '-ss',
      `${playerStore.startTime}`,
      '-t',
      `${playerStore.endTime - playerStore.startTime}`,
      '-i',
      'my.mp4',
      '-vf',
      `crop=${cropStore.cropData.width}:${cropStore.cropData.height}:${cropStore.cropData.x}:${cropStore.cropData.y}`,
      '-s',
      `150x150`,
      readGIFName,
    ])

    await ffmpeg.exec([
      '-i',
      readGIFName,
      '-i',
      'logo.png',
      '-filter_complex',
      `[1:v]scale=150:150[scaled];[0:v][scaled]overlay=0:0`,
      'output.gif',
    ])

    const final = await ffmpeg.readFile('output.gif', 'binary')

    console.log(
      URL.createObjectURL(
        new Blob([(final as Uint8Array).buffer], { type: 'image/gif' }),
      ),
    )
  } */

  async function extractKeyFrame() {
    const uint8arry = await fetchFile(playerStore.videoSrc)
    await ffmpeg.writeFile(writeGIFName, uint8arry)

    await ffmpeg.createDir('key')

    await ffmpeg.exec([
      '-i',
      writeGIFName,
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
      res.push(new Blob([(final as Uint8Array).buffer], { type: 'image/jpeg' }))
    }

    return res
  }

  return {
    initFFmpeg,
    videoToGIF,
    extractKeyFrame,
  }
}
