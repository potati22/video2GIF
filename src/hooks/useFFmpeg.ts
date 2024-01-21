import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

export function useFFmpeg() {
  const ffmpeg = new FFmpeg()

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

  async function extractKeyFrame(frames: number) {
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

    for (let i = 0; i <= frames; ++i) {
      await ffmpeg.exec([
        '-ss',
        `${i}`,
        '-i',
        'enhypen.mp4',
        '-s',
        '100x50',
        '-f',
        'image2',
        '-frames',
        '1',
        `frame-${i}.jpeg`,
      ])
    }

    const res: Array<Blob> = []

    for (let i = 0; i <= frames; ++i) {
      const final = await ffmpeg.readFile(`frame-${i}.jpeg`, 'binary')
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
