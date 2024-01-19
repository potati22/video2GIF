import { defineStore } from 'pinia'

let video: HTMLVideoElement

export const usePlayerStore = defineStore('player', () => {
  const videoWidth = ref(0)
  const videoHeight = ref(0)
  const clientWidth = ref(0)
  const clientHeight = ref(0)
  const duration = ref(0)
  const currentTime = ref(0)
  const playing = ref(false)

  function initPlayer(videoRef: Ref<HTMLVideoElement>) {
    onMounted(() => {
      video = unref(videoRef)
      video.onloadedmetadata = () => {
        videoWidth.value = video.videoWidth
        videoHeight.value = video.videoHeight
        clientWidth.value = video.clientWidth
        clientHeight.value = video.clientHeight
        if (video.duration === Infinity) {
          video.ontimeupdate = () => {
            this.ontimeupdate = () => {
              currentTime.value = Number(video.currentTime.toFixed(2))
            }
            video.currentTime = 0
            // 此时可以获取正确的duration值
            duration.value = Number(video.duration.toFixed(2))
          }
          video.currentTime = 1e101
        } else {
          duration.value = Number(video.duration.toFixed(2))
        }
      }
      video.onended = () => {
        playing.value = false
      }
    })
  }

  function videoPlay() {
    console.log(video)
    playing.value = true
    video.play()
  }

  function videoPause() {
    playing.value = false
    video.pause()
  }

  function videoSkip(time: number) {
    currentTime.value = time
  }

  return {
    videoWidth,
    videoHeight,
    clientWidth,
    clientHeight,
    duration,
    currentTime,
    playing,
    initPlayer,
    videoPlay,
    videoPause,
    videoSkip,
  }
})
