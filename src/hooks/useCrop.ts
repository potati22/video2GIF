import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'

export function useCrop() {
  const playerStore = usePlayerStore()
  const cropStore = useCropStore()

  function cropStart() {
    cropStore.changeCropping(true)
  }

  function cropConfirm() {
    cropStore.changeCropping(false)
    cropStore.changeCropped(true)
    cropStore.changeCropData(
      cropStore.cropRef.cropBoxTransX,
      cropStore.cropRef.cropBoxTransY,
      cropStore.cropRef.cropBoxTransW,
      cropStore.cropRef.cropBoxTransH,
    )
  }

  function cropCancel() {
    cropStore.changeCropping(false)
    cropStore.cropRef.changeCropBox(
      cropStore.cropX,
      cropStore.cropY,
      cropStore.cropW,
      cropStore.cropH,
    )
  }

  function cropReset() {
    cropStore.changeCropping(false)
    cropStore.changeCropped(false)
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
