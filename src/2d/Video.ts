import { Container, Sprite, Texture, Graphics } from 'pixi.js'

class Video {
  container: Container
  isLoaded: boolean

  videoTexture: Texture
  videoSprite: Sprite
  videoResource: HTMLVideoElement
  private firstFrameHeight: number
  private currentFrameHeight: number
  private videoMask: Graphics

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
    this.resolveVideoHeightChange()

    this.isLoaded = true
  }

  // 录制的视频可能会出现 前几帧的画面比后面的画面尺寸大 的情况
  // 目前不知道是哪里的原因：texture、sprite的尺寸会变 但container的尺寸不变（保持最大）
  // 当前通过给container加上mask来解决
  private resolveVideoHeightChange() {
    this.firstFrameHeight = this.videoSprite.height
    this.videoMask = new Graphics()
    this.videoMask.rect(0, 0, this.videoSprite.width, this.videoSprite.height)
    this.videoMask.fill(0xff0000)
    this.container.addChild(this.videoMask)
    this.container.mask = this.videoMask

    this.videoResource.onresize = () => {
      if (
        !this.currentFrameHeight &&
        this.videoSprite.height < this.firstFrameHeight
      ) {
        this.currentFrameHeight = this.videoSprite.height
        this.videoMask.height = this.videoSprite.height
      }
    }
  }

  resizeVideo(sw: number, sh: number) {
    if (!this.isLoaded) return

    this.container.updateLocalTransform()
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
