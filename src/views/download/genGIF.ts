import { usePlayerStore } from '@/store/modules/player'
import { MainStage } from '@/2d/Stage'
import { Video2D } from '@/2d/Video'
import ffmanager from '@/utils/ffmpegManager'

interface GIFConfig {
  videosrc: string
  videoclip: {
    start: number
    end: number
  }
  videocrop: {
    x: number
    y: number
    w: number
    h: number
  }
  texts?: {
    pos: {
      x: number
      y: number
    }
    dataurl: string
  }[]
}

async function createGIFJson() {
  const playerStore = usePlayerStore()

  const GIFJson = {} as GIFConfig
  GIFJson.videosrc = playerStore.videoSrc
  GIFJson.videoclip = {
    start: playerStore.startTime,
    end: playerStore.endTime,
  }
  GIFJson.videocrop = {
    x: Video2D.videoTexture.frame.x,
    y: Video2D.videoTexture.frame.y,
    w: Video2D.videoTexture.frame.width,
    h: Video2D.videoTexture.frame.height,
  }
  GIFJson.texts = await textToPng()

  return GIFJson
}

async function textToPng() {
  const texts = []
  for (const item of Video2D.texts) {
    const res = await MainStage.app.renderer.extract.base64(item)
    texts.push({
      dataurl: res,
      pos: {
        x: item.x,
        y: item.y,
      },
    })
  }
  return texts
}

export async function createGIF(finalW: number, finalH: number) {
  const GIFJson = await createGIFJson()
  const GIF = await ffmanager
    .videoToGIF(
      GIFJson.videoclip.start,
      GIFJson.videoclip.end,
      GIFJson.videocrop.w,
      GIFJson.videocrop.h,
      GIFJson.videocrop.x,
      GIFJson.videocrop.y,
    )
    .then((gif) => {
      return GIFJson.texts.length == 0
        ? gif
        : ffmanager.watermarkInGIF(
            gif,
            GIFJson.texts[0].dataurl,
            GIFJson.texts[0].pos.x,
            GIFJson.texts[0].pos.y,
          )
    })
    .then((gif) => ffmanager.resizeGIF(gif, finalW, finalH))
    .then((gif) => ffmanager.readGIF(gif))

  return GIF
}
