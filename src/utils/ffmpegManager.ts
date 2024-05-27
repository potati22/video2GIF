import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import { FFCommand } from '@/utils/ffmpegCommand'

class FFManager {
  private ffmpeg: FFmpeg
  private isInited: boolean
  private isVideoWrited: boolean
  private nameConfig = {
    keyFrameFolder: 'key',
    videoName: 'video.mp4',
    gif1: 'crop.gif',
    gif2: 'watermark.gif',
    gif3: 'resize.gif',
  }
  private baseCommand = new FFCommand()

  constructor() {
    this.ffmpeg = new FFmpeg()
    this.isInited = false
    this.isVideoWrited = false
  }

  async init() {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'
    this.isInited = await this.ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })
  }

  // 项目中一次只能读取一个video
  async writeVideo(src: string) {
    if (!this.isInited) throw new Error('先初始化FFmpeg')

    const uint8arry = await fetchFile(src)
    await this.ffmpeg.writeFile(this.nameConfig.videoName, uint8arry)
    this.isVideoWrited = true
  }

  async genKeyFrame() {
    if (!this.isVideoWrited) throw new Error('先读取Video')

    const keyFrameFolder = this.nameConfig.keyFrameFolder
    const command = this.baseCommand.genKeyFrame(
      this.nameConfig.videoName,
      keyFrameFolder,
    )
    await this.ffmpeg.createDir(keyFrameFolder)
    await this.ffmpeg.exec(command)

    const keyFramesList = await this.ffmpeg.listDir(keyFrameFolder)
    const res: Array<Blob> = []

    for (let i = 2; i < keyFramesList.length; ++i) {
      const final = await this.ffmpeg.readFile(
        `${keyFrameFolder}/${keyFramesList[i].name}`,
        'binary',
      )
      res.push(new Blob([final as Uint8Array], { type: 'image/jpeg' }))
    }

    return res
  }

  async videoToGIF(
    start: number,
    end: number,
    w: number,
    h: number,
    x: number,
    y: number,
  ) {
    if (!this.isVideoWrited) throw new Error('先读取Video')

    const command = this.baseCommand.videoToGIF(
      this.nameConfig.videoName,
      start,
      end,
      w,
      h,
      x,
      y,
      this.nameConfig.gif1,
    )
    await this.ffmpeg.exec(command)

    return this.nameConfig.gif1
  }

  async watermarkInGIF(
    gifName: string,
    watermarkUrl: string,
    watermarkX: number,
    watermarkY: number,
  ) {
    const wmName = 'logo.png'

    const logouint8arry = await fetchFile(watermarkUrl)
    await this.ffmpeg.writeFile(wmName, logouint8arry)

    const command = this.baseCommand.watermarkInGIF(
      gifName,
      wmName,
      watermarkX,
      watermarkY,
      this.nameConfig.gif2,
    )
    await this.ffmpeg.exec(command)

    return this.nameConfig.gif2
  }

  async resizeGIF(gifName: string, w: number, h: number) {
    const command = this.baseCommand.resizeGIF(
      gifName,
      w,
      h,
      this.nameConfig.gif3,
    )
    await this.ffmpeg.exec(command)

    return this.nameConfig.gif3
  }

  async readGIF(gifName: string) {
    const file = await this.ffmpeg.readFile(gifName, 'binary')
    return URL.createObjectURL(
      new Blob([file as Uint8Array], { type: 'image/gif' }),
    )
  }
}

export default new FFManager()
