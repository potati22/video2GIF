<template>
  <div v-show="videoInstance.cliping" class="wrap-outer">
    <div
      ref="wrapRef"
      class="wrap-box cliping"
      :style="{
        '--x': `${Rx * 100}%`,
        '--y': `${Ry * 100}%`,
        '--w': `${Rw * 100}%`,
        '--h': `${Rh * 100}%`,
        '--x-w': `${Rx * 100 + Rw * 100}%`,
        '--y-h': `${Ry * 100 + Rh * 100}%`,
      }"
    ></div>
    <div
      ref="cropRef"
      class="crop-box"
      :style="{
        transform: `translate(${wrapWidth * Rx}px, ${wrapHeight * Ry}px)`,
        width: `${wrapWidth * Rw}px`,
        height: `${wrapHeight * Rh}px`,
      }"
    >
      <div ref="moveRef" class="move-point">
        <HSvgIcon icon-class="move" />
      </div>
      <div ref="tmRef" class="scale-point tm"></div>
      <div ref="lmRef" class="scale-point lm"></div>
      <div ref="rmRef" class="scale-point rm"></div>
      <div ref="bmRef" class="scale-point bm"></div>
    </div>
  </div>
  <div
    v-show="!videoInstance.cliping && videoInstance.clipped"
    class="wrap-box clipped"
    :style="{
      '--x': `${Rx * 100}%`,
      '--y': `${Ry * 100}%`,
      '--w': `${Rw * 100}%`,
      '--h': `${Rh * 100}%`,
      '--x-w': `${Rx * 100 + Rw * 100}%`,
      '--y-h': `${Ry * 100 + Rh * 100}%`,
    }"
  ></div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'

const { videoInstance, clipApplyOn, clipCancelOn, clipResetOn } = useVideo()

let wrapBoxResizeObserver: ResizeObserver

const cropRef = ref()
const wrapRef = ref()
const moveRef = ref()
const tmRef = ref()
const bmRef = ref()
const lmRef = ref()
const rmRef = ref()

const wrapWidth = ref(0)
const wrapHeight = ref(0)
const cropBoxTransX = ref(0) // 记录每一次成功偏移的x
const cropBoxTransY = ref(0) // 记录每一次成功偏移的y
const cropBoxTransW = ref(0)
const cropBoxTransH = ref(0)
const Rx = ref(0)
const Ry = ref(0)
const Rw = ref(0)
const Rh = ref(0)

const cropCanchange = ref(false)
const cropCanmove = ref(false)

clipApplyOn(cropBoxTransX, cropBoxTransY, cropBoxTransW, cropBoxTransH)
clipCancelOn(() => {
  cropBoxTransX.value = videoInstance.clipPos.x
  cropBoxTransY.value = videoInstance.clipPos.y
  cropBoxTransW.value = videoInstance.clipPos.width
  cropBoxTransH.value = videoInstance.clipPos.height
})
clipResetOn(() => {
  cropBoxTransX.value = 0
  cropBoxTransY.value = 0
  cropBoxTransW.value = 100
  cropBoxTransH.value = 100
})

watch(cropBoxTransX, () => {
  Rx.value = ((cropBoxTransX.value / wrapWidth.value) * 100) / 100
})

watch(cropBoxTransY, () => {
  Ry.value = ((cropBoxTransY.value / wrapHeight.value) * 100) / 100
})

watch(cropBoxTransW, () => {
  Rw.value = ((cropBoxTransW.value / wrapWidth.value) * 100) / 100
})

watch(cropBoxTransH, () => {
  Rh.value = ((cropBoxTransH.value / wrapHeight.value) * 100) / 100
})

onMounted(() => {
  let flag = 0 // 用于初始化Rw和Rh
  wrapBoxResizeObserver = new ResizeObserver((e) => {
    wrapWidth.value = Math.floor(e[0].contentRect.width)
    wrapHeight.value = Math.floor(e[0].contentRect.height)
    if (flag === 0 && wrapWidth.value !== 0) {
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

function openMove() {
  cropCanmove.value = true
}

function closeMove() {
  cropCanmove.value = false
}

function openChange() {
  cropCanchange.value = true
}

function closeChange() {
  cropCanchange.value = false
}

function registerCrop() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanmove.value) return
    const x = cropBoxTransX.value + e.movementX
    const y = cropBoxTransY.value + e.movementY
    const maxX = wrapWidth.value - cropRef.value.clientWidth
    const maxY = wrapHeight.value - cropRef.value.clientHeight
    if (x <= 0 || x >= maxX || y <= 0 || y >= maxY) return
    cropBoxTransX.value = x
    cropBoxTransY.value = y
  }

  moveRef.value.addEventListener('mousedown', openMove)
  moveRef.value.addEventListener('mousemove', mouseMove)
  moveRef.value.addEventListener('mouseup', closeMove)
}

function registerTM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const h = cropBoxTransH.value - e.movementY
    const y = cropBoxTransY.value + e.movementY
    const maxH = wrapHeight.value
    const maxY = wrapHeight.value - h
    if (h < 0 || h >= maxH || y < 0 || y >= maxY) return
    cropBoxTransH.value = h
    cropBoxTransY.value = y
  }

  tmRef.value.addEventListener('mousedown', openChange)
  tmRef.value.addEventListener('mousemove', mouseMove)
  tmRef.value.addEventListener('mouseup', closeChange)
}

function registerBM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const h = cropBoxTransH.value + e.movementY
    const maxH = wrapHeight.value - cropBoxTransY.value
    if (h < 0 || h >= maxH) return
    cropBoxTransH.value = h
  }

  bmRef.value.addEventListener('mousedown', openChange)
  bmRef.value.addEventListener('mousemove', mouseMove)
  bmRef.value.addEventListener('mouseup', closeChange)
}

function registerLM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const w = cropBoxTransW.value - e.movementX
    const x = cropBoxTransX.value + e.movementX
    const maxW = wrapWidth.value
    const maxX = wrapWidth.value - w
    if (w < 0 || w >= maxW || x < 0 || x >= maxX) return
    cropBoxTransW.value = w
    cropBoxTransX.value = x
  }

  lmRef.value.addEventListener('mousedown', openChange)
  lmRef.value.addEventListener('mousemove', mouseMove)
  lmRef.value.addEventListener('mouseup', closeChange)
}

function registerRM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange.value) return
    const w = cropBoxTransW.value + e.movementX
    const maxW = wrapWidth.value - cropBoxTransX.value
    if (w < 0 || w >= maxW) return
    cropBoxTransW.value = w
  }

  rmRef.value.addEventListener('mousedown', openChange)
  rmRef.value.addEventListener('mousemove', mouseMove)
  rmRef.value.addEventListener('mouseup', closeChange)
}

function registerAll() {
  cropRef.value.addEventListener('mouseup', () => {
    closeChange()
  })
  wrapRef.value.addEventListener('mouseup', () => {
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.crop-box {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid var(--my-color);
}
.cliping {
  background-color: rgba(1, 1, 1, 0.8);
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
.clipped {
  background-color: var(--el-bg-color);
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

.move-point {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--my-color);
  font-size: 24px;
}
.scale-point {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid var(--my-color);
  transform: translate(-50%, -50%);
  background-color: rgba(1, 1, 1, 1);
}
.scale-point:hover {
  background-color: var(--my-color);
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
</style>
