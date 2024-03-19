import { useCropStore } from '@/store/modules/crop'
import { usePlayerStore } from '@/store/modules/player'

const cropsquare = ref(false) // 是否1：1宽高比
const cropping = ref(false)
const cropped = ref(false)

const wrapWidth = ref(0)
const wrapHeight = ref(0)

const cropBoxTransX = ref(0)
const cropBoxTransY = ref(0)
const cropBoxTransW = ref(0)
const cropBoxTransH = ref(0)

const Rx = ref(0)
const Ry = ref(0)
const Rw = ref(0)
const Rh = ref(0)

watch(cropBoxTransX, () => {
  Rx.value = cropBoxTransX.value / wrapWidth.value
})

watch(cropBoxTransY, () => {
  Ry.value = cropBoxTransY.value / wrapHeight.value
})

watch(cropBoxTransW, () => {
  Rw.value = cropBoxTransW.value / wrapWidth.value
})

watch(cropBoxTransH, () => {
  Rh.value = cropBoxTransH.value / wrapHeight.value
})

export function useCrop() {
  const cropStore = useCropStore()
  const playerStore = usePlayerStore()

  function cropStart() {
    resetCropBoxTrans()
    cropping.value = true
  }

  function cropConfirm() {
    cropping.value = false
    cropped.value = true
    playerStore.changeVideoClientHeight(wrapHeight.value)
    cropStore.changeCropData(
      cropBoxTransX.value,
      cropBoxTransY.value,
      cropBoxTransW.value,
      cropBoxTransH.value,
    )
  }

  function cropCancel() {
    cropping.value = false
    cropBoxTransX.value = cropStore.cropX
    cropBoxTransY.value = cropStore.cropY
    cropBoxTransW.value = cropStore.cropW
    cropBoxTransH.value = cropStore.cropH
  }

  function cropReset() {
    cropping.value = false
    cropped.value = false
    cropBoxTransX.value = 0
    cropBoxTransY.value = 0
    cropBoxTransW.value = 100
    cropBoxTransH.value = 100
    cropStore.changeCropData(0, 0, 100, 100)
  }

  function cropSquareOn() {
    cropsquare.value = true
    if (cropBoxTransW.value > cropBoxTransH.value) {
      cropBoxTransW.value = cropBoxTransH.value
    } else {
      cropBoxTransH.value = cropBoxTransW.value
    }
  }

  function resetCropBoxTrans() {
    cropBoxTransX.value = Math.floor(Rx.value * wrapWidth.value)
    cropBoxTransY.value = Math.floor(Ry.value * wrapHeight.value)
    cropBoxTransW.value = Math.floor(Rw.value * wrapWidth.value)
    cropBoxTransH.value = Math.floor(Rh.value * wrapHeight.value)
  }

  return {
    cropsquare,
    cropping,
    cropped,
    wrapWidth,
    wrapHeight,
    cropBoxTransX,
    cropBoxTransY,
    cropBoxTransW,
    cropBoxTransH,
    Rx,
    Ry,
    Rw,
    Rh,
    cropStart,
    cropConfirm,
    cropCancel,
    cropReset,
    cropSquareOn,
  }
}
