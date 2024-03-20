<template>
  <div class="keyframe-box" :style="{ width: trackStore.trackWidth + 'px' }">
    <div v-show="playerStore.videoSrc" class="wrap">
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
          '--right': trackStore.trackWidth - clipRight + 'px',
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useKeyFrameWrap } from '@/hooks/useKeyFrameWrap'

const {
  playerStore,
  trackStore,
  clipping,
  clipLeft,
  clipRight,
  changeStartTimeByClipLeft,
  changeEndTimeByClipRight,
  resetClip,
} = useKeyFrameWrap()

const leftRef = ref()
const rightRef = ref()
let leftFlag = false
let rightFlag = false

watch([() => playerStore.videoSrc, () => trackStore.scaleLevel], () => {
  resetClip()
})

onMounted(() => {
  registerLeft()
  registerRight()
  registerAll()
})

function registerAll() {
  window.addEventListener('mouseup', () => {
    leftFlag && changeStartTimeByClipLeft()
    rightFlag && changeEndTimeByClipRight()
    leftFlag = rightFlag = false
    // clipping.value = false 该语句放在TimeStripe中进行 保证TimeStripe到达最终位置后再显示
  })
}

function registerLeft() {
  function mouseDown() {
    clipping.value = true
    leftFlag = true
    rightFlag = false
  }

  function mouseMove(e: MouseEvent) {
    if (!clipping.value) return

    let offsetLeft = clipLeft.value + e.movementX
    if (offsetLeft < 0) return
    if (offsetLeft + clipRight.value > trackStore.trackWidth - 100) return
    clipLeft.value = offsetLeft
  }

  leftRef.value.addEventListener('mousedown', mouseDown)
  leftRef.value.addEventListener('mousemove', mouseMove)
}

function registerRight() {
  function mouseDown() {
    clipping.value = true
    leftFlag = false
    rightFlag = true
  }

  function mouseMove(e: MouseEvent) {
    if (!clipping.value) return

    let offsetRight = clipRight.value - e.movementX
    if (offsetRight < 0) return
    if (offsetRight + clipLeft.value > trackStore.trackWidth - 100) return
    clipRight.value = offsetRight
  }

  rightRef.value.addEventListener('mousedown', mouseDown)
  rightRef.value.addEventListener('mousemove', mouseMove)
}
</script>

<style lang="scss" scoped>
.keyframe-box {
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
