import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const videoRef: Ref<HTMLVideoElement> = ref(null)
  const videoSrc = ref('/capture.mp4') // /capture.mp4
  const videoHeight = ref(0)
  const duration = ref(0)
  const currentTime = ref(0)
  const startTime = ref(0)
  const endTime = ref(0)
  const playing = ref(false)

  function setVideoRef(video: HTMLVideoElement) {
    videoRef.value = video
  }

  function initPlayer(vH: number, du: number) {
    videoHeight.value = vH
    duration.value = Number(du.toFixed(2))
    currentTime.value = 0
    startTime.value = 0
    endTime.value = duration.value
    playing.value = false
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

  function changeVideoSrc(src: string) {
    videoSrc.value = src
  }

  return {
    videoRef,
    videoSrc,
    videoHeight,
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
