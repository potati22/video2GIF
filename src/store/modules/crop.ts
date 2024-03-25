import { defineStore } from 'pinia'
import { usePlayerStore } from '@/store/modules/player'

import { CropInstance } from '@/layout/main/components/Crop'

export const useCropStore = defineStore('crop', () => {
  const playerStore = usePlayerStore()

  const cropSquare = ref(false) // 是否1：1宽高比
  const cropping = ref(false)
  const cropped = ref(false)

  const cropRef: Ref<CropInstance> = ref()
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

  function setCropRef(crop: CropInstance) {
    cropRef.value = crop
  }

  function changeCropData(x: number, y: number, w: number, h: number) {
    cropX.value = x
    cropY.value = y
    cropW.value = w
    cropH.value = h
  }

  function changeCropping(state: boolean) {
    cropping.value = state
  }

  function changeCropped(state: boolean) {
    cropped.value = state
  }

  function changeCropSquare(state: boolean) {
    cropSquare.value = state
  }

  return {
    cropRef,
    cropSquare,
    cropping,
    cropped,
    cropX,
    cropY,
    cropW,
    cropH,
    cropData,
    setCropRef,
    changeCropData,
    changeCropping,
    changeCropped,
    changeCropSquare,
  }
})
