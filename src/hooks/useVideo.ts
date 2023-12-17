interface IVideoInstance {
  clipPos: {
    x: number
    y: number
    width: number
    height: number
  }
  clientWidth: number
  clientHeight: number
  cliping: boolean
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
  clientWidth: 150,
  clientHeight: 150,
  cliping: false,
  playing: false,
  paused: true,
  startTimesStamp: '0',
  endTimesStamp: '0',
})
let video: HTMLMediaElement

export function useVideo() {
  // 注册video事件
  function videoInit(videoRef: Ref<HTMLMediaElement>) {
    if (video) throw '已经初始化过一次video了'
    onMounted(() => {
      video = unref(videoRef)
      video.onloadedmetadata = function (e) {
        videoInstance.clientWidth = (e.target as HTMLMediaElement).clientWidth
        videoInstance.clientHeight = (e.target as HTMLMediaElement).clientHeight
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
