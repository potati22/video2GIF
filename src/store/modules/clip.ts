import { defineStore } from 'pinia'

export const useClipStore = defineStore('clip', () => {
  const clipping = ref(false)
  const clipped = ref(false)
  const clipLeft = ref(0)
  const clipRight = ref(0)

  function changeClipping(state: boolean) {
    clipping.value = state
  }

  function changeClipLeft(n: number) {
    clipLeft.value = n
  }

  function changeClipRight(n: number) {
    clipRight.value = n
  }

  return {
    clipping,
    clipped,
    clipLeft,
    clipRight,
    changeClipping,
    changeClipLeft,
    changeClipRight,
  }
})
