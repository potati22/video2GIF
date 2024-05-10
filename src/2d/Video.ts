import { Container, Sprite, Texture } from 'pixi.js'

class Video {
  container: Container
  isLoaded: boolean

  videoTexture: Texture
  videoSprite: Sprite
  videoResource: HTMLVideoElement

  constructor() {
    this.container = new Container()
  }

  async loadVideo(video: HTMLVideoElement) {
    this.isLoaded = false

    this.videoTexture = Texture.from(video)
    // @ts-ignore: autoPlay为VideoSource成员 可以访问
    this.videoTexture.source.autoPlay = false
    // @ts-ignore: preload为VideoSource成员 可以访问
    // this.videoTexture.source.preload = true

    this.videoResource = this.videoTexture.source.resource
    this.videoSprite = new Sprite(this.videoTexture)
    this.container.addChild(this.videoSprite)

    this.isLoaded = true
  }

  resizeVideo(sw: number, sh: number) {
    if (!this.isLoaded) return

    // 让video的显示高度为工作区高度的0.8
    this.container.scale = (sh * 0.8) / this.videoSprite.height

    // 让video水平垂直居中
    this.container.x = sw / 2 - this.container.width / 2
    this.container.y = sh / 2 - this.container.height / 2
  }

  cropVideo(x: number, y: number, w: number, h: number) {
    this.videoTexture.frame.x = x
    this.videoTexture.frame.y = y
    this.videoTexture.frame.width = w
    this.videoTexture.frame.height = h
    this.videoTexture.noFrame = false
    this.videoTexture.updateUvs()

    this.container.removeChild(this.videoSprite)

    this.videoSprite = new Sprite(this.videoTexture)
    this.container.addChild(this.videoSprite)
  }
}

export const Video2D = new Video()
