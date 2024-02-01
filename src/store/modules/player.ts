import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const videoSrc = ref('/public/static/capture.mp4')
  const videoWidth = ref(0)
  const videoHeight = ref(0)
  const clientWidth = ref(0)
  const clientHeight = ref(0)
  const duration = ref(0)
  const currentTime = ref(0)
  const startTime = ref(0)
  const endTime = ref(0)
  const playing = ref(false)

  function initPlayer(
    vW: number,
    vH: number,
    cW: number,
    cH: number,
    du: number,
  ) {
    videoWidth.value = vW
    videoHeight.value = vH
    clientWidth.value = cW
    clientHeight.value = cH
    duration.value = Number(du.toFixed(2))
    endTime.value = duration.value
  }

  function changeCurrenTime(cu: number) {
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
    videoSrc,
    videoWidth,
    videoHeight,
    clientWidth,
    clientHeight,
    duration,
    currentTime,
    startTime,
    endTime,
    playing,
    initPlayer,
    changeCurrenTime,
    changeStartTime,
    changeEndTime,
    changePlaying,
    changeVideoSrc,
  }
})
