import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const videoSrc = ref('/capture.mp4') // /capture.mp4
  const videoHeight = ref(0)
  const clientHeight = ref(0)
  const duration = ref(0)
  const currentTime = ref(0)
  const startTime = ref(0)
  const endTime = ref(0)
  const playing = ref(false)

  // video的缩放比例
  const radio = computed(() => {
    return videoHeight.value / clientHeight.value
  })

  function initPlayer(vH: number, cH: number, du: number) {
    videoHeight.value = vH
    clientHeight.value = cH
    duration.value = Number(du.toFixed(2))
    currentTime.value = 0
    startTime.value = 0
    endTime.value = duration.value
    playing.value = false
  }

  function changeVideoClientH(cH: number) {
    clientHeight.value = cH
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
    videoSrc,
    videoHeight,
    clientHeight,
    radio,
    duration,
    currentTime,
    startTime,
    endTime,
    playing,
    initPlayer,
    changeVideoClientH,
    changeCurrentTime,
    changeStartTime,
    changeEndTime,
    changePlaying,
    changeVideoSrc,
  }
})
