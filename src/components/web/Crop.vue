<template>
  <slot></slot>
  <div
    ref="wrapRef"
    class="wrap-outer"
    :style="{
      '--x': `${Rx * 100}%`,
      '--y': `${Ry * 100}%`,
      '--w': `${Rw * 100}%`,
      '--h': `${Rh * 100}%`,
      '--x-w': `${Rx * 100 + Rw * 100}%`,
      '--y-h': `${Ry * 100 + Rh * 100}%`,
    }"
  >
    <div v-show="cropping" class="wrap-box cliping"></div>
    <div
      v-show="cropping"
      ref="cropRef"
      class="crop-box"
      :style="{
        translate: `${wrapWidth * Rx}px ${wrapHeight * Ry}px`,
        width: `${Rw * 100}%`,
        height: `${Rh * 100}%`,
      }"
    >
      <div ref="moveRef" class="move-point">
        <PotIcon icon-class="move" />
      </div>
      <div ref="tmRef" class="scale-point tm"></div>
      <div ref="lmRef" class="scale-point lm"></div>
      <div ref="rmRef" class="scale-point rm"></div>
      <div ref="bmRef" class="scale-point bm"></div>
    </div>
    <div v-show="!cropping && cropped" class="wrap-box clipped"></div>
    <div
      v-show="!cropping && cropped"
      class="crop-box-copy"
      :style="{
        translate: `${wrapWidth * Rx}px ${wrapHeight * Ry}px`,
        width: `${Rw * 100}%`,
        height: `${Rh * 100}%`,
      }"
    >
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cropSquare = ref(false) // 是否1：1宽高比
const cropping = ref(false)
const cropped = ref(false)

const wrapWidth = ref(0)
const wrapHeight = ref(0)

const cropBoxTransX = ref(0)
const cropBoxTransY = ref(0)
const cropBoxTransW = ref(0)
const cropBoxTransH = ref(0)

function changeCropping(state: boolean) {
  cropping.value = state
}

function changeCropped(state: boolean) {
  cropped.value = state
}

function changeCropSquare(state: boolean) {
  cropSquare.value = state
}

function changeCropBox(x: number, y: number, w: number, h: number) {
  cropBoxTransX.value = x
  cropBoxTransY.value = y
  cropBoxTransW.value = w
  cropBoxTransH.value = h
}

function resetCropBox() {
  cropBoxTransX.value = Math.floor(Rx.value * wrapWidth.value)
  cropBoxTransY.value = Math.floor(Ry.value * wrapHeight.value)
  cropBoxTransW.value = Math.floor(Rw.value * wrapWidth.value)
  cropBoxTransH.value = Math.floor(Rh.value * wrapHeight.value)
}

defineExpose({
  wrapWidth,
  wrapHeight,
  cropBoxTransX,
  cropBoxTransY,
  cropBoxTransW,
  cropBoxTransH,
  changeCropping,
  changeCropped,
  changeCropSquare,
  changeCropBox,
  resetCropBox,
})

const emits = defineEmits<{
  (e: 'croppingChange', state: boolean): void
  (e: 'croppedChange', state: boolean): void
  (e: 'cropSquareChange', state: boolean): void
}>()

watch(cropping, (newVal) => {
  emits('croppingChange', newVal)
})

watch(cropped, (newVal) => {
  emits('croppedChange', newVal)
})

watch(cropSquare, (newVal) => {
  emits('cropSquareChange', newVal)
})

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

watch(cropSquare, (newVal) => {
  if (!newVal) return
  if (cropBoxTransW.value > cropBoxTransH.value) {
    cropBoxTransW.value = cropBoxTransH.value
  } else {
    cropBoxTransH.value = cropBoxTransW.value
  }
})

let wrapBoxResizeObserver: ResizeObserver

const cropRef = ref()
const wrapRef = ref()
const moveRef = ref()
const tmRef = ref()
const bmRef = ref()
const lmRef = ref()
const rmRef = ref()

onMounted(() => {
  let flag = 0 // 用于初始化Rw和Rh 使其不为0
  wrapBoxResizeObserver = new ResizeObserver((e) => {
    wrapWidth.value = Math.floor(e[0].contentRect.width)
    wrapHeight.value = Math.floor(e[0].contentRect.height)
    if (flag === 0 && wrapWidth.value !== 0) {
      // 触发响应watch 给Rw和Rh赋值
      cropBoxTransW.value = 100
      cropBoxTransH.value = 100
      ++flag
    }
  })
  wrapBoxResizeObserver.observe(unref(wrapRef), {
    box: 'content-box',
  })
  registerAll()
  registerCrop()
  registerTM()
  registerBM()
  registerLM()
  registerRM()
})

const cropCanchange = ref(false)
const cropCanmove = ref(false)

function openMove() {
  cropCanmove.value = true
}

function closeMove() {
  cropCanmove.value = false
}

function openChange() {
  cropCanchange.value = true
  cropSquare.value = false
}

function closeChange() {
  cropCanchange.value = false
}

function registerCrop() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanmove.value) return
    const x = cropBoxTransX.value + e.movementX
    const y = cropBoxTransY.value + e.movementY
    const maxX = wrapWidth.value - cropRef.value.clientWidth - 3
    const maxY = wrapHeight.value - cropRef.value.clientHeight - 3
    if (x <= 0 || x >= maxX || y <= 0 || y >= maxY) return
    cropBoxTransX.value = x
    cropBoxTransY.value = y
  }

  moveRef.value.addEventListener('mousedown', openMove)
  moveRef.value.addEventListener('mousemove', mouseMove)
}

function registerTM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const h = cropBoxTransH.value - e.movementY
    const y = cropBoxTransY.value + e.movementY
    const maxH = wrapHeight.value - 3
    const maxY = wrapHeight.value - h - 3
    if (h < 0 || h >= maxH || y < 0 || y >= maxY) return
    cropBoxTransH.value = h
    cropBoxTransY.value = y
  }

  tmRef.value.addEventListener('mousedown', openChange)
  tmRef.value.addEventListener('mousemove', mouseMove)
}

function registerBM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const h = cropBoxTransH.value + e.movementY
    const maxH = wrapHeight.value - cropBoxTransY.value - 3
    if (h < 0 || h >= maxH) return
    cropBoxTransH.value = h
  }

  bmRef.value.addEventListener('mousedown', openChange)
  bmRef.value.addEventListener('mousemove', mouseMove)
}

function registerLM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const w = cropBoxTransW.value - e.movementX
    const x = cropBoxTransX.value + e.movementX
    const maxW = wrapWidth.value - 3
    const maxX = wrapWidth.value - w - 3
    if (w < 0 || w >= maxW || x < 0 || x >= maxX) return
    cropBoxTransW.value = w
    cropBoxTransX.value = x
  }

  lmRef.value.addEventListener('mousedown', openChange)
  lmRef.value.addEventListener('mousemove', mouseMove)
}

function registerRM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const w = cropBoxTransW.value + e.movementX
    const maxW = wrapWidth.value - cropBoxTransX.value - 3
    if (w < 0 || w >= maxW) return
    cropBoxTransW.value = w
  }

  rmRef.value.addEventListener('mousedown', openChange)
  rmRef.value.addEventListener('mousemove', mouseMove)
}

function registerAll() {
  window.addEventListener('mouseup', () => {
    closeMove()
    closeChange()
  })
}
</script>

<style lang="scss" scoped>
.wrap-outer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.wrap-box {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -1px;
  bottom: -1px;
  clip-path: polygon(
    0 0,
    0 100%,
    var(--x) 100%,
    var(--x) var(--y),
    var(--x-w) var(--y),
    var(--x-w) var(--y-h),
    var(--x) var(--y-h),
    var(--x) 100%,
    100% 100%,
    100% 0
  );
}
.cliping {
  background-color: rgba(1, 1, 1, 0.8);
}
.clipped {
  background-color: var(--pot-bg-color-block);
}

.crop-box {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid var(--pot-text-color-yellow);
}
.crop-box-copy {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
}
.move-point {
  width: 100%;
  height: 100%;
  color: var(--pot-text-color-yellow);
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scale-point {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid var(--pot-text-color-yellow);
  transform: translate(-50%, -50%);
  background-color: rgba(1, 1, 1, 1);
}
.scale-point:hover {
  background-color: var(--pot-text-color-yellow);
}
.tm:hover,
.bm:hover {
  cursor: ns-resize;
}
.lm:hover,
.rm:hover {
  cursor: ew-resize;
}

.tm {
  top: 0;
}
.lm,
.rm {
  top: 50%;
}

.bm {
  top: 100%;
}
.lm {
  left: 0;
}
.tm,
.bm {
  left: 50%;
}
.rm {
  left: 100%;
}

.tm::after,
.bm::after {
  position: absolute;
  content: '';
  width: 1000%;
  height: 400%;
  transform: translate(-50%, -10px);
}

.lm::after,
.rm::after {
  position: absolute;
  content: '';
  height: 1000%;
  width: 400%;
  transform: translate(-10px, -50%);
}
</style>
