import emitter from '@/utils/bus'

interface IVideoInstance {
  clipPos: {
    x: number
    y: number
    width: number
    height: number
  }
  realWidth: number
  realHeight: number
  clientWidth: number
  clientHeight: number
  radio: number
  square: boolean
  cliping: boolean
  clipped: boolean
  playing: boolean
  startTimesStamp: string
  endTimesStamp: string
  duration: number
  currentTime: number
}

const videoInstance: IVideoInstance = reactive({
  clipPos: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  radio: 0, // realHeight / clientHeight
  square: false, // 是否1：1宽高比
  realWidth: 0,
  realHeight: 0,
  clientWidth: 0,
  clientHeight: 0,
  cliping: false,
  clipped: false,
  playing: false,
  startTimesStamp: '0',
  endTimesStamp: '0',
  duration: 0,
  currentTime: 0,
})
let video: HTMLVideoElement

export function useVideo() {
  // 注册video事件
  function videoInit(videoRef: Ref<HTMLVideoElement>) {
    if (video) throw '已经初始化过一次video了'
    onMounted(() => {
      video = unref(videoRef)
      video.onloadedmetadata = function () {
        videoInstance.realWidth = video.videoWidth
        videoInstance.realHeight = video.videoHeight
        videoInstance.clientWidth = video.clientWidth
        videoInstance.clientHeight = video.clientHeight
        if (video.duration === Infinity) {
          // 解决媒体流式传输无法得到duration值
          video.ontimeupdate = function () {
            this.ontimeupdate = () => {
              videoInstance.currentTime = Number(video.currentTime.toFixed(2))
            }
            video.currentTime = 0
            // 此时可以获取正确的duration值
            videoInstance.duration = 23
          }
          video.currentTime = 1e101
        }
      }
    })
  }

  // 播放
  function videoPlay() {
    videoInstance.playing = true
    video.play()
  }

  // 暂停
  function videoPause() {
    videoInstance.playing = false
    video.pause()
  }

  function videoSkip(time: number) {
    video.currentTime = time
  }

  // 开始裁剪
  function clipStartEmit() {
    videoInstance.cliping = true
  }

  // 确认裁剪
  function clipApplyEmit() {
    emitter.emit('clip-apply')
    videoInstance.cliping = false
    videoInstance.clipped = true
  }

  function clipApplyOn(
    x: Ref<number>,
    y: Ref<number>,
    width: Ref<number>,
    height: Ref<number>,
  ) {
    emitter.on('clip-apply', () => {
      videoInstance.clipPos.x = x.value
      videoInstance.clipPos.y = y.value
      videoInstance.clipPos.width = width.value
      videoInstance.clipPos.height = height.value
    })
  }

  // 取消裁剪
  function clipCancelEmit() {
    emitter.emit('clip-cancel')
    videoInstance.cliping = false
  }

  function clipCancelOn(cb: () => void) {
    emitter.on('clip-cancel', () => {
      cb()
    })
  }

  // 重置裁剪
  function clipResetEmit() {
    emitter.emit('clip-reset')
    videoInstance.cliping = false
    videoInstance.clipped = false
  }

  function clipResetOn(cb?: () => void) {
    emitter.on('clip-reset', () => {
      cb && cb()
      videoInstance.clipPos.x = 0
      videoInstance.clipPos.y = 0
      videoInstance.clipPos.width = 0
      videoInstance.clipPos.height = 0
    })
  }

  // 获得video真实裁剪数据
  function getRealClipPos() {
    const r = videoInstance.realHeight / videoInstance.clientHeight
    videoInstance.radio = r
    return {
      x: Math.floor(videoInstance.clipPos.x * r),
      y: Math.floor(videoInstance.clipPos.y * r),
      width: Math.floor(videoInstance.clipPos.width * r),
      height: Math.floor(videoInstance.clipPos.height * r),
    }
  }

  function SquareTurnOnEmit() {
    videoInstance.square = true
    emitter.emit('square-on')
  }

  function SquareTurnOnOn(cb: () => void) {
    emitter.on('square-on', () => {
      cb()
    })
  }

  function SquareTurnOff() {
    videoInstance.square = false
  }

  return {
    videoInstance,
    videoInit,
    videoPlay,
    videoPause,
    videoSkip,
    clipStartEmit,
    clipApplyEmit,
    clipCancelEmit,
    clipResetEmit,
    clipApplyOn,
    clipCancelOn,
    clipResetOn,
    getRealClipPos,
    SquareTurnOnEmit,
    SquareTurnOnOn,
    SquareTurnOff,
  }
}
