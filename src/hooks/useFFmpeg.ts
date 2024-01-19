import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

let isLoaded

export function useFFmpeg() {
  const ffmpeg = new FFmpeg()

  // 加载FFmpeg-core 大约31mb
  async function load() {
    isLoaded = await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })
    console.log('ffmpeg 已完成初始化~')
  }

  async function videoToGIF(
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    if (!isLoaded) {
      console.log(' ffmpeg 还没初始化好')
      return
    }
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
    if (!isLoaded) {
      console.log(' ffmpeg 还没初始化好')
      return
    }
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
      '-ss',
      '4',
      '-i',
      'enhypen.mp4',
      '-s',
      '960x540',
      '-f',
      'image2',
      '-frames',
      '1',
      `frame-1.jpeg`,
    ])
    const final = await ffmpeg.readFile('frame-1.jpeg', 'binary')
    console.log(
      URL.createObjectURL(
        new Blob([(final as Uint8Array).buffer], { type: 'image/jpeg' }),
      ),
    )
  }

  return {
    load,
    videoToGIF,
    extractKeyFrame,
  }
}
