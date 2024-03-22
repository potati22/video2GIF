import { CropInstance } from '@/layout/main/components/Crop'
import type { Ref } from 'vue'

export function useCrop(cropRef: Ref<CropInstance>) {
  function cropStart() {
    cropRef.value.resetCropBox()
    cropRef.value.changeCropping(true)
  }

  function cropConfirm() {
    cropRef.value.changeCropping(false)
    cropRef.value.changeCropped(true)
    return {
      wrapHeight: cropRef.value.wrapHeight,
      cropBoxTransX: cropRef.value.cropBoxTransX,
      cropBoxTransY: cropRef.value.cropBoxTransY,
      cropBoxTransW: cropRef.value.cropBoxTransW,
      cropBoxTransH: cropRef.value.cropBoxTransH,
    }
  }

  function cropCancel(x: number, y: number, w: number, h: number) {
    cropRef.value.changeCropping(false)
    cropRef.value.changeCropBox(x, y, w, h)
  }

  function cropReset() {
    cropRef.value.changeCropping(false)
    cropRef.value.changeCropped(false)
    cropRef.value.changeCropBox(0, 0, 100, 100)
    return {
      cropBoxTransX: 0,
      cropBoxTransY: 0,
      cropBoxTransW: 100,
      cropBoxTransH: 100,
    }
  }

  function cropSquareOn() {
    cropRef.value.changeCropSquare(true)
  }

  return {
    cropStart,
    cropConfirm,
    cropCancel,
    cropReset,
    cropSquareOn,
  }
}
