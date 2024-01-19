import { defineStore } from 'pinia'
import { usePlayerStore } from '@/store/modules/player'

export const useCropStore = defineStore('crop', () => {
  const playerStore = usePlayerStore()

  const cropX = ref(0)
  const cropY = ref(0)
  const cropW = ref(100)
  const cropH = ref(100)
  // video的缩放比例
  const radio = computed(() => {
    return playerStore.videoHeight / playerStore.clientHeight
  })
  // video的真实裁剪数据
  const cropData = computed(() => {
    return {
      x: Math.floor(cropX.value * radio.value),
      y: Math.floor(cropY.value * radio.value),
      width: Math.floor(cropW.value * radio.value),
      height: Math.floor(cropH.value * radio.value),
    }
  })
  const square = ref(false) // 是否1：1宽高比
  const cropping = ref(false)
  const cropped = ref(false)

  function cropStrat() {
    cropping.value = true
  }

  function cropConfirm(x: number, y: number, w: number, h: number) {
    cropping.value = false
    cropped.value = true
    cropX.value = x
    cropY.value = y
    cropW.value = w
    cropH.value = h
  }

  function cropCancel() {
    cropping.value = false
  }

  function cropReset() {
    cropping.value = false
    cropped.value = false
    cropX.value = 0
    cropY.value = 0
    cropW.value = 100
    cropH.value = 100
  }

  function changeSquare(res: boolean) {
    square.value = res
  }

  return {
    cropX,
    cropY,
    cropW,
    cropH,
    radio,
    cropData,
    square,
    cropping,
    cropped,
    cropStrat,
    cropConfirm,
    cropCancel,
    cropReset,
    changeSquare,
  }
})
