import { MainStage } from '@/2d/Stage'
import { Video2D } from '@/2d/Video'

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

export function useGif() {
  const GIFJson: GIFConfig = {
    videosrc: '',
    videoclip: {
      start: 0,
      end: 0,
    },
    videocrop: {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
    },
    texts: [],
  }

  async function createGIFJson(
    videosrc: string,
    starttime: number,
    endtime: number,
  ) {
    GIFJson.videosrc = videosrc
    GIFJson.videoclip.start = starttime
    GIFJson.videoclip.end = endtime
    GIFJson.videocrop.x = Video2D.videoTexture.frame.x
    GIFJson.videocrop.y = Video2D.videoTexture.frame.y
    GIFJson.videocrop.w = Video2D.videoTexture.frame.width
    GIFJson.videocrop.h = Video2D.videoTexture.frame.height
    await textToPng()
    return GIFJson
  }

  async function textToPng() {
    for (const item of Video2D.texts) {
      const res = await MainStage.app.renderer.extract.base64(item)
      GIFJson.texts.push({
        dataurl: res,
        pos: {
          x: item.x,
          y: item.y,
        },
      })
    }
  }

  return {
    createGIFJson,
  }
}
