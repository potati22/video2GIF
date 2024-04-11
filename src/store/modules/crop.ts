import { defineStore } from 'pinia'

import { CropInstance } from '@/components/Crop/crop'

export const useCropStore = defineStore('crop', () => {
  const cropSquare = ref(false) // 是否1：1宽高比
  const cropping = ref(false)
  const cropped = ref(false)

  const cropRef: Ref<CropInstance> = ref()
  // video的真实裁剪数据
  const cropX = ref(0)
  const cropY = ref(0)
  const cropW = ref(400)
  const cropH = ref(400)

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
    setCropRef,
    changeCropData,
    changeCropping,
    changeCropped,
    changeCropSquare,
  }
})
