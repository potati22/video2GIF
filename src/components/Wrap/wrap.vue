<template>
  <div class="wrap-box" :style="{ width: wrapWidth + 'px' }">
    <div class="wrap">
      <div
        class="select-box"
        :style="{
          left: clipLeft + 'px',
          right: clipRight + 'px',
        }"
      >
        <div ref="leftRef" class="select-left"></div>
        <div ref="rightRef" class="select-right"></div>
      </div>
      <slot></slot>
      <div
        class="shadow"
        :style="{
          '--left': clipLeft + 'px',
          '--right': wrapWidth - clipRight + 'px',
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WrapProps, WrapEmits } from './wrap'

const props = withDefaults(defineProps<WrapProps>(), {
  wrapWidth: 0,
})

const emits = defineEmits<WrapEmits>()

const leftRef = ref()
const rightRef = ref()
const clipLeft = ref(0)
const clipRight = ref(0)

let leftFlag = false
let rightFlag = false
let clipping = false

function changeClipLeft(offset: number) {
  clipLeft.value = offset
}

function changeClipRight(offset: number) {
  clipRight.value = offset
}

defineExpose({
  clipLeft,
  clipRight,
  changeClipLeft,
  changeClipRight,
})

onMounted(() => {
  registerLeft()
  registerRight()
  registerAll()
})

function registerAll() {
  window.addEventListener('mouseup', () => {
    leftFlag && emits('clipLeftChange', clipLeft.value)
    rightFlag && emits('clipRightChange', clipRight.value)
    leftFlag = rightFlag = false
    clipping = false
    emits('clippingChange', clipping)
  })
}

function registerLeft() {
  function mouseDown() {
    clipping = true
    leftFlag = true
    rightFlag = false
    emits('clippingChange', clipping)
  }

  function mouseMove(e: MouseEvent) {
    if (!clipping) return

    let offsetLeft = clipLeft.value + e.movementX
    if (offsetLeft < 0) return
    if (offsetLeft + clipRight.value > props.wrapWidth - 100) return
    clipLeft.value = offsetLeft
  }

  leftRef.value.addEventListener('mousedown', mouseDown)
  leftRef.value.addEventListener('mousemove', mouseMove)
}

function registerRight() {
  function mouseDown() {
    clipping = true
    leftFlag = false
    rightFlag = true
    emits('clippingChange', clipping)
  }

  function mouseMove(e: MouseEvent) {
    if (!clipping) return

    let offsetRight = clipRight.value - e.movementX
    if (offsetRight < 0) return
    if (offsetRight + clipLeft.value > props.wrapWidth - 100) return
    clipRight.value = offsetRight
  }

  rightRef.value.addEventListener('mousedown', mouseDown)
  rightRef.value.addEventListener('mousemove', mouseMove)
}
</script>

<style lang="scss" scoped>
.wrap-box {
  min-width: calc(100% - 20px);
  height: 52px;
  margin: 10px 10px;
  background-color: var(--pot-bg-color-block-darker);
}
.wrap {
  position: relative;
  height: 52px;
  display: inline-block;
}
.select-box {
  position: absolute;
  height: 50px;
  border: 1px solid var(--pot-text-color-yellow);
}
.select-left {
  width: 15px;
  height: 50px;
  background-color: var(--pot-text-color-yellow);
  position: absolute;
  background-image: url('@/assets/img/spots.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}
.select-right {
  width: 15px;
  height: 50px;
  background-color: var(--pot-text-color-yellow);
  position: absolute;
  right: 0;
  background-image: url('@/assets/img/spots.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}
.select-left:hover,
.select-right:hover {
  cursor: ew-resize;
}
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.8);
  clip-path: polygon(
    0 0,
    0 100%,
    var(--left) 100%,
    var(--left) 0,
    var(--right) 0,
    var(--right) 100%,
    100% 100%,
    100% 0
  );
}
</style>
