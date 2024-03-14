<template>
  <div class="keyframe-box" :style="{ width: trackStore.canvasWidth + 'px' }">
    <div v-show="playerStore.videoSrc" class="wrap">
      <div
        class="select-box"
        :style="{
          left: clipStore.clipLeft + 'px',
          right: clipStore.clipRight + 'px',
        }"
      >
        <div ref="leftRef" class="select-left"></div>
        <div ref="rightRef" class="select-right"></div>
      </div>
      <slot></slot>
      <div
        class="shadow"
        :style="{
          '--left': clipStore.clipLeft + 'px',
          '--right': trackStore.trackWidth - clipStore.clipRight + 'px',
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'
import { useClipStore } from '@/store/modules/clip'
import { useTimeTrack } from '@/hooks/useTimeTrack'
import { useVideo } from '@/hooks/useVideo'

import emitter from '@/utils/bus'
import { CLIPBACK } from '@/utils/eventName'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()
const clipStore = useClipStore()

const { getCurrentTimefromOffsetX, getOffsetXfromCurrentTime } = useTimeTrack()
const { videoSkip } = useVideo()

const leftRef = ref()
const rightRef = ref()
let leftFlag = false
let rightFlag = false

watch(
  () => playerStore.videoSrc,
  () => {
    clipStore.clipRest()
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    clipStore.changeClipLeft(getOffsetXfromCurrentTime(playerStore.startTime))
    clipStore.changeClipRight(
      trackStore.trackWidth - getOffsetXfromCurrentTime(playerStore.endTime),
    )
  },
)

emitter.on(CLIPBACK, () => {
  playerStore.changeStartTime(0)
  playerStore.changeEndTime(playerStore.duration)
  clipStore.clipRest()
})

onMounted(() => {
  registerLeft()
  registerRight()
  registerAll()
})

function registerAll() {
  window.addEventListener('mouseup', () => {
    if (leftFlag) {
      const currentTime = getCurrentTimefromOffsetX(clipStore.clipLeft)
      videoSkip(currentTime)
      playerStore.changeStartTime(currentTime)
    }
    if (rightFlag) {
      const currentTime = getCurrentTimefromOffsetX(
        trackStore.trackWidth - clipStore.clipRight,
      )
      videoSkip(currentTime)

      playerStore.changeEndTime(currentTime)
    }
    leftFlag = rightFlag = false
  })
}

function registerLeft() {
  function mouseDown() {
    clipStore.changeClipping(true)
    leftFlag = true
    rightFlag = false
  }

  function mouseMove(e: MouseEvent) {
    if (!clipStore.clipping) return

    let offsetLeft = clipStore.clipLeft + e.movementX
    if (offsetLeft < 0) return
    if (offsetLeft + clipStore.clipRight > trackStore.trackWidth - 100) return
    clipStore.changeClipLeft(offsetLeft)
  }

  leftRef.value.addEventListener('mousedown', mouseDown)
  leftRef.value.addEventListener('mousemove', mouseMove)
}

function registerRight() {
  function mouseDown() {
    clipStore.changeClipping(true)
    leftFlag = false
    rightFlag = true
  }

  function mouseMove(e: MouseEvent) {
    if (!clipStore.clipping) return

    let offsetRight = clipStore.clipRight - e.movementX
    if (offsetRight < 0) return
    if (offsetRight + clipStore.clipLeft > trackStore.trackWidth - 100) return
    clipStore.changeClipRight(offsetRight)
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
