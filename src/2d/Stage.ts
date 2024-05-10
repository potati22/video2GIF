import { Application, Sprite, Assets, Container } from 'pixi.js'
import { ApplicationOptions } from 'pixi.js'

type adjustFn = (sw: number, sh: number) => void

class Stage {
  app: Application
  isInited: boolean
  resizeQueue: Map<Container, adjustFn>

  background: Container
  backgroundSprite: Sprite

  constructor() {
    this.app = new Application()
    this.isInited = false
    this.resizeQueue = new Map()
  }

  async init(options: Partial<ApplicationOptions>) {
    if (this.isInited) return
    await this.app.init(options)
    this.isInited = true
  }

  resize() {
    if (!this.isInited) return
    this.app.resize()
    this.resizeQueue.forEach((fn) =>
      fn(this.app.screen.width, this.app.screen.height),
    )
  }

  addChild(ct: Container, autoResizeFn?: adjustFn) {
    this.app.stage.addChild(ct)
    if (autoResizeFn) this.resizeQueue.set(ct, autoResizeFn)
  }

  removeChild(ct: Container) {
    this.app.stage.removeChild(ct)
    if (this.resizeQueue.has(ct)) this.resizeQueue.delete(ct)
  }

  async loadBackground(imageUrl: string) {
    this.background = new Container()

    const texture = await Assets.load(imageUrl)
    this.backgroundSprite = new Sprite(texture)

    this.background.addChild(this.backgroundSprite)

    this.addChild(this.background, this.resizeBackground.bind(this))
  }

  resizeBackground(sw: number, sh: number) {
    if (!this.background.visible) return

    // 让背景图和舞台大小适应 因为舞台高度小于宽度 所以以高度为基准
    this.background.scale = sh / this.backgroundSprite.height
    // 背景图水平垂直居中
    this.background.x = sw / 2 - this.background.width / 2
    this.background.y = sh / 2 - this.background.height / 2
  }
}

export const MainStage = new Stage()
