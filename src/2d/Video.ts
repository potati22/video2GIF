import { Container, Sprite, Assets } from 'pixi.js'

class Video {
  resource: HTMLVideoElement
  isLoaded: boolean
  container: Container
  originalWidth: number
  originalHeight: number

  constructor() {
    this.container = new Container()
  }

  async loadVideo() {
    const texture = await Assets.load({
      src: '/capture.mp4',
      data: {
        preload: true,
        autoPlay: false,
      },
    })

    this.resource = texture.source.resource

    const sprite = new Sprite(texture)

    this.container.addChild(sprite)
    this.originalHeight = this.container.height
    this.originalWidth = this.container.width
    this.isLoaded = true
  }

  adjustVideo(sw: number, sh: number) {
    if (!this.isLoaded) return

    // 让背景图和舞台大小适应 因为项目特点高度一定小于宽度 所以以高度为基准
    this.container.scale = sh / this.originalHeight
  }
}

export const Video2D = new Video()
