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
  cliping: boolean
  clipped: boolean
  playing: boolean
  paused: boolean
  startTimesStamp: string
  endTimesStamp: string
}

const videoInstance: IVideoInstance = reactive({
  clipPos: {
    x: 0,
    y: 0,
    width: 150,
    height: 150,
  },
  realWidth: 0,
  realHeight: 0,
  clientWidth: 0,
  clientHeight: 0,
  cliping: false,
  clipped: false,
  playing: false,
  paused: true,
  startTimesStamp: '0',
  endTimesStamp: '0',
})
let video: HTMLVideoElement

export function useVideo() {
  // 注册video事件
  function videoInit(videoRef: Ref<HTMLVideoElement>) {
    if (video) throw '已经初始化过一次video了'
    onMounted(() => {
      video = unref(videoRef)
      video.onloadedmetadata = function (e) {
        videoInstance.realWidth = video.videoWidth
        videoInstance.realHeight = video.videoHeight
        videoInstance.clientWidth = (e.target as HTMLVideoElement).clientWidth
        videoInstance.clientHeight = (e.target as HTMLVideoElement).clientHeight
      }
    })
  }

  // 播放
  function videoPlay() {
    video.play()
  }

  // 暂停
  function videoPause() {
    video.pause()
  }

  return {
    videoInstance,
    videoInit,
    videoPlay,
    videoPause,
  }
}
