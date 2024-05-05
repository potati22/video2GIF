import { Application, Sprite, Assets } from 'pixi.js'
import type { ApplicationOptions, Container } from 'pixi.js'

type adjustFn = (sw: number, sh: number) => void

class Stage {
  app: Application
  isInited: boolean
  resizeQueue: adjustFn[] = []

  background: Sprite
  backgroundIsShow: boolean
  backgroundOriginalWidth: number
  backgroundOriginalHeight: number

  constructor() {
    this.app = new Application()
    this.isInited = false
  }

  async init(options: Partial<ApplicationOptions>) {
    if (this.isInited) return
    await this.app.init(options)
    this.isInited = true
  }

  async loadBackground(imageUrl: string) {
    const texture = await Assets.load(imageUrl)
    this.background = new Sprite(texture)
    this.backgroundOriginalWidth = this.background.width
    this.backgroundOriginalHeight = this.background.height
    this.backgroundIsShow = true

    this.addChild(this.background, this.adjustBackground.bind(this))
  }

  adjustBackground(sw: number, sh: number) {
    if (!this.backgroundIsShow) return

    // 让背景图和舞台大小适应 因为项目特点高度一定小于宽度 所以以高度为基准
    this.background.scale = sh / this.backgroundOriginalHeight
    // 背景图水平垂直居中
    this.background.x = sw / 2 - this.background.width / 2
    this.background.y = sh / 2 - this.background.height / 2
  }

  resize() {
    if (!this.isInited) return
    this.app.resize()
    this.resizeQueue.forEach((fn) =>
      fn(this.app.screen.width, this.app.screen.height),
    )
  }

  addChild(ct: Container, autoResizeFn: adjustFn | undefined = undefined) {
    this.app.stage.addChild(ct)
    if (autoResizeFn) {
      // 初始化执行一次
      autoResizeFn(this.app.screen.width, this.app.screen.height)
      this.resizeQueue.push(autoResizeFn)
    }
  }
}

export const MainStage = new Stage()
