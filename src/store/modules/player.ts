import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const videoWidth = ref(0)
  const videoHeight = ref(0)
  const clientWidth = ref(0)
  const clientHeight = ref(0)
  const duration = ref(0)
  const currentTime = ref(0)
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
  }

  function changeCurrenTime(cu: number) {
    currentTime.value = Number(cu.toFixed(2))
  }

  function changePlaying(state: boolean) {
    playing.value = state
  }

  /* function videoSkip(time: number) {
    currentTime.value = time
  } */

  return {
    videoWidth,
    videoHeight,
    clientWidth,
    clientHeight,
    duration,
    currentTime,
    playing,
    initPlayer,
    changeCurrenTime,
    changePlaying,
  }
})
