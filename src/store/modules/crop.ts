import { defineStore } from 'pinia'
import { usePlayerStore } from '@/store/modules/player'

export const useCropStore = defineStore('crop', () => {
  const playerStore = usePlayerStore()

  const cropX = ref(0)
  const cropY = ref(0)
  const cropW = ref(100)
  const cropH = ref(100)
  // video的真实裁剪数据
  const cropData = computed(() => {
    return {
      x: Math.floor(cropX.value * playerStore.radio),
      y: Math.floor(cropY.value * playerStore.radio),
      width: Math.floor(cropW.value * playerStore.radio),
      height: Math.floor(cropH.value * playerStore.radio),
    }
  })

  function changeCropData(x: number, y: number, w: number, h: number) {
    cropX.value = x
    cropY.value = y
    cropW.value = w
    cropH.value = h
  }

  return {
    cropX,
    cropY,
    cropW,
    cropH,
    cropData,
    changeCropData,
  }
})
