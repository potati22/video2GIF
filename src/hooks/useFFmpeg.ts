import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

export function useFFmpeg() {
  const ffmpeg = new FFmpeg()
  const playerStore = usePlayerStore()
  const cropStore = useCropStore()

  async function videoToGIF() {
    const loading = ElLoading.service({
      lock: true,
      text: '🏃‍♀️Loading...',
      background: 'rgba(0, 0, 0, 0.7)',
    })

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })

    const uint8arry = await fetchFile(playerStore.videoSrc)
    await ffmpeg.writeFile('enhypen.mp4', uint8arry)
    await ffmpeg.exec([
      '-ss',
      `${playerStore.startTime}`,
      '-t',
      `${playerStore.endTime - playerStore.startTime}`,
      '-i',
      'enhypen.mp4',
      '-vf',
      `crop=${cropStore.cropData.width}:${cropStore.cropData.height}:${cropStore.cropData.x}:${cropStore.cropData.y}`,
      '-s',
      '150x150',
      'enhypen2.gif',
    ])
    const final = await ffmpeg.readFile('enhypen2.gif', 'binary')
    console.log(
      URL.createObjectURL(
        new Blob([(final as Uint8Array).buffer], { type: 'image/gif' }),
      ),
    )
    loading.close()
  }

  async function extractKeyFrame() {
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })

    const uint8arry = await fetchFile(playerStore.videoSrc)
    await ffmpeg.writeFile('enhypen.mp4', uint8arry)

    await ffmpeg.createDir('key')

    await ffmpeg.exec([
      '-i',
      'enhypen.mp4',
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

    /* console.log(
      URL.createObjectURL(
        new Blob([(final as Uint8Array).buffer], { type: 'image/jpeg' }),
      ),
    ) */
    return res
  }

  return {
    videoToGIF,
    extractKeyFrame,
  }
}
