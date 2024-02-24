import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

export function useFFmpeg() {
  const ffmpeg = new FFmpeg()
  const playerStore = usePlayerStore()
  const cropStore = useCropStore()
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
    await initFFmpeg()

    const uint8arry = await fetchFile(playerStore.videoSrc)
    await ffmpeg.writeFile(writeGIFName, uint8arry)
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
      '150x150',
      readGIFName,
    ])
    const final = await ffmpeg.readFile(readGIFName, 'binary')

    return URL.createObjectURL(
      new Blob([(final as Uint8Array).buffer], { type: 'image/gif' }),
    )
  }

  async function extractKeyFrame() {
    await initFFmpeg()

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
    /* await ffmpeg.exec([
      '-i',
      'enhypen.mp4',
      '-vf',
      `select='eq(pict_type\,I)'`,
      '-vsync',
      '2',
      '-s',
      '100x50',
      `key/frame-%02d.jpeg`,
    ]) */

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
