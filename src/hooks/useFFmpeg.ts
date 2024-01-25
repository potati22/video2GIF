import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import { usePlayerStore } from '@/store/modules/player'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

export function useFFmpeg() {
  const ffmpeg = new FFmpeg()
  const playerStore = usePlayerStore()

  async function videoToGIF(
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
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

    const uint8arry = await fetchFile('/static/capture.mp4')
    await ffmpeg.writeFile('enhypen.mp4', uint8arry)
    await ffmpeg.exec([
      '-t',
      '3',
      '-ss',
      '00:00:02',
      '-i',
      'enhypen.mp4',
      '-vf',
      `crop=${width}:${height}:${x}:${y}`,
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
    loading.close()
    return res
  }

  return {
    videoToGIF,
    extractKeyFrame,
  }
}
