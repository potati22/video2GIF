<template>
  <div ref="wrapRef" class="wrap-outer" :style="wrapStyle">
    <slot></slot>
    <div class="wrap-box"></div>
    <div class="crop-box" :style="cropStyle">
      <div ref="moveRef" class="move-point">
        <PotIcon icon-class="move" />
      </div>
      <div ref="tmRef" class="scale-point tm"></div>
      <div ref="lmRef" class="scale-point lm"></div>
      <div ref="rmRef" class="scale-point rm"></div>
      <div ref="bmRef" class="scale-point bm"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CropProps, CropEmits } from './crop'
import type { Ref } from 'vue'

const props = withDefaults(defineProps<CropProps>(), {
  cropSquare: false,
  contentW: 0,
  contentH: 0,
  cropX: 0,
  cropY: 0,
  cropW: 200,
  cropH: 200,
})

const emits = defineEmits<CropEmits>()

const wrapStyle = computed(() => {
  return {
    '--x': `${props.cropX}px`,
    '--y': `${props.cropY}px`,
    '--w': `${props.cropW}px`,
    '--h': `${props.cropH}px`,
    '--x-w': `${props.cropX + props.cropW}px`,
    '--y-h': `${props.cropY + props.cropH}px`,
  }
})

const cropStyle = computed(() => {
  return {
    transform: `translate(${props.cropX}px, ${props.cropY}px)`,
    width: `${props.cropW}px`,
    height: `${props.cropH}px`,
  }
})

watch(
  () => props.cropSquare,
  (newVal) => {
    if (!newVal) return
    if (props.cropW > props.cropH) {
      emits('update:cropW', props.cropH)
    } else {
      emits('update:cropH', props.cropW)
    }
  },
)

const wrapRef: Ref<HTMLDivElement> = ref()
const moveRef: Ref<HTMLDivElement> = ref()
const tmRef: Ref<HTMLDivElement> = ref()
const bmRef: Ref<HTMLDivElement> = ref()
const lmRef: Ref<HTMLDivElement> = ref()
const rmRef: Ref<HTMLDivElement> = ref()

onMounted(() => {
  registerAll()
  registerCrop()
  registerTM()
  registerBM()
  registerLM()
  registerRM()
})

let cropCanchange = false
let cropCanmove = false

function openMove() {
  cropCanmove = true
}

function closeMove() {
  cropCanmove = false
}

function openChange() {
  cropCanchange = true
  emits('update:cropSquare', false)
}

function closeChange() {
  cropCanchange = false
}

function registerCrop() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanmove) return
    const x = props.cropX + e.movementX
    const y = props.cropY + e.movementY
    const maxX = props.contentW - props.cropW
    const maxY = props.contentH - props.cropH
    if (x <= 0 || x >= maxX || y <= 0 || y >= maxY) return
    emits('update:cropX', x)
    emits('update:cropY', y)
  }

  moveRef.value.addEventListener('mousedown', openMove)
  moveRef.value.addEventListener('mousemove', mouseMove)
}

function registerTM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange) return
    const h = props.cropH - e.movementY
    const y = props.cropY + e.movementY
    const maxH = props.contentH
    const maxY = props.contentH - h
    if (h < 0 || h >= maxH || y < 0 || y >= maxY) return
    emits('update:cropH', h)
    emits('update:cropY', y)
  }

  tmRef.value.addEventListener('mousedown', openChange)
  tmRef.value.addEventListener('mousemove', mouseMove)
}

function registerBM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange) return
    const h = props.cropH + e.movementY
    const maxH = props.contentH - props.cropY
    if (h < 0 || h >= maxH) return
    emits('update:cropH', h)
  }

  bmRef.value.addEventListener('mousedown', openChange)
  bmRef.value.addEventListener('mousemove', mouseMove)
}

function registerLM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange) return
    const w = props.cropW - e.movementX
    const x = props.cropX + e.movementX
    const maxW = props.contentW
    const maxX = props.contentW - w
    if (w < 0 || w >= maxW || x < 0 || x >= maxX) return
    emits('update:cropW', w)
    emits('update:cropX', x)
  }

  lmRef.value.addEventListener('mousedown', openChange)
  lmRef.value.addEventListener('mousemove', mouseMove)
}

function registerRM() {
  function mouseMove(e: MouseEvent) {
    if (!cropCanchange) return
    const w = props.cropW + e.movementX
    const maxW = props.contentW - props.cropX
    if (w < 0 || w >= maxW) return
    emits('update:cropW', w)
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
  display: inline-block;
  position: relative;
}

.wrap-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

.crop-box {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid var(--pot-text-color-yellow);
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
