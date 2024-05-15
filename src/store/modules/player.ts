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

  function setVideoRef(video: HTMLVideoElement) {
    videoRef.value = video
  }

  function initPlayer() {
    duration.value = Number(videoRef.value.duration.toFixed(2))
    changeCurrentTime(0)
    changeStartTime(0)
    changeEndTime(duration.value)
    changePlaying(false)
  }

  function changeCurrentTime(cu: number) {
    currentTime.value = cu
  }

  function changeStartTime(cu: number) {
    startTime.value = cu
  }

  function changeEndTime(cu: number) {
    endTime.value = cu
  }

  function changePlaying(state: boolean) {
    playing.value = state
  }

  return {
    videoRef,
    videoSrc,
    duration,
    currentTime,
    startTime,
    endTime,
    playing,
    setVideoRef,
    initPlayer,
    changeCurrentTime,
    changeStartTime,
    changeEndTime,
    changePlaying,
    changeVideoSrc,
  }
})
