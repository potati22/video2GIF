import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'

export function useCrop() {
  const playerStore = usePlayerStore()
  const cropStore = useCropStore()

  function cropStart() {
    cropStore.cropRef.resetCropBox()
    cropStore.cropRef.changeCropping(true)
  }

  function cropConfirm() {
    cropStore.cropRef.changeCropping(false)
    cropStore.cropRef.changeCropped(true)
    cropStore.changeCropData(
      cropStore.cropRef.cropBoxTransX,
      cropStore.cropRef.cropBoxTransY,
      cropStore.cropRef.cropBoxTransW,
      cropStore.cropRef.cropBoxTransH,
    )
    playerStore.changeVideoClientHeight(cropStore.cropRef.wrapHeight)
  }

  function cropCancel() {
    cropStore.cropRef.changeCropping(false)
    cropStore.cropRef.changeCropBox(
      cropStore.cropX,
      cropStore.cropY,
      cropStore.cropW,
      cropStore.cropH,
    )
  }

  function cropReset() {
    cropStore.cropRef.changeCropping(false)
    cropStore.cropRef.changeCropped(false)
    cropStore.cropRef.changeCropBox(0, 0, 100, 100)
    cropStore.changeCropData(0, 0, 100, 100)
  }

  function cropSquareOn() {
    cropStore.cropRef.changeCropSquare(true)
  }

  return {
    playerStore,
    cropStore,
    cropStart,
    cropConfirm,
    cropCancel,
    cropReset,
    cropSquareOn,
  }
}
