import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const videoRef: Ref<HTMLVideoElement> = ref(null)
  const videoSrc = ref('') // /capture.mp4

  const duration = ref(0)
  const currentTime = ref(0)
  const startTime = ref(0)
  const endTime = ref(0)
  const playing = ref(false)

  function changeVideoSrc(src: string) {
    videoSrc.value = src
  }

  function changeStartTime(cu: number) {
    startTime.value = cu
  }

  function changeEndTime(cu: number) {
    endTime.value = cu
  }

  function initPlayer() {
    duration.value = Number(videoRef.value.duration.toFixed(2))
    currentTime.value = 0
    startTime.value = 0
    endTime.value = duration.value
    playing.value = false
  }

  async function videoCreate(): Promise<true> {
    return new Promise((resolve) => {
      const video = document.createElement('video')
      videoRef.value = video

      video.oncanplaythrough = () => {
        video.oncanplaythrough = null

        if (video.duration === Infinity) {
          video.ontimeupdate = () => {
            video.ontimeupdate = videoOnUpateTime
            video.currentTime = 0
            // 此时可以获取正确的duration值
            initPlayer()
            resolve(true)
          }
          video.currentTime = 1e101
        } else {
          video.ontimeupdate = videoOnUpateTime
          initPlayer()
          resolve(true)
        }
      }

      // 先让video自动播放，保证pixi能获取到帧数据
      // 当pixi创建完texture之后，再对texture设置autoPlay为false
      video.muted = true
      video.autoplay = true
      video.src = videoSrc.value
    })
  }

  // 监听video的currentTime变化
  function videoOnUpateTime() {
    const time = Number(videoRef.value.currentTime.toFixed(2))
    currentTime.value = time
  }

  function videoPlay() {
    // 当前时间 等于 最晚时间 时, 重置当前时间为 最早时间
    if (currentTime.value >= endTime.value) {
      videoRef.value.currentTime = startTime.value
    }
    playing.value = true
    videoRef.value.play()
  }

  function videoPause() {
    playing.value = false
    videoRef.value.pause()
  }

  function videoPauseByAuto() {
    playing.value = false
    videoRef.value.pause()
    videoRef.value.currentTime = endTime.value
  }

  function videoSkip(time: number) {
    videoRef.value.currentTime = time
  }

  return {
    videoRef,
    videoSrc,
    duration,
    currentTime,
    startTime,
    endTime,
    playing,
    changeVideoSrc,
    changeEndTime,
    changeStartTime,
    videoCreate,
    videoPause,
    videoPauseByAuto,
    videoPlay,
    videoSkip,
  }
})
