<template>
  <div class="keyframe-box" :style="{ width: trackStore.canvasWidth + 'px' }">
    <div class="wrap">
      <canvas
        ref="keyFrameRef"
        :width="trackStore.trackWidth"
        height="50"
      ></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'
import { useFFmpeg } from '@/hooks/useFFmpeg'

import type { Ref } from 'vue'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()
const { extractKeyFrame } = useFFmpeg()
let keyFrames: Blob[] = []

const keyFrameRef: Ref<HTMLCanvasElement> = ref()
let keyFrameCtx: CanvasRenderingContext2D

onMounted(() => {
  keyFrameCtx = keyFrameRef.value.getContext('2d')
  // if (playerStore.videoSrc) initKeyFrame()
})

watch(
  () => playerStore.videoSrc,
  (newVal) => {
    if (!newVal) return
    initKeyFrame()
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    if (keyFrames.length === 0) return
    drawKeyFrames()
  },
)

async function initKeyFrame() {
  keyFrames = await extractKeyFrame()
  drawKeyFrames()
}

async function drawKeyFrames() {
  const pickKeyFrameGap = (trackStore.timeGap * 2) / (trackStore.spaceGap / 100)
  const startPos = 100 / pickKeyFrameGap

  for (let i = 0; i < keyFrames.length; i = i + pickKeyFrameGap) {
    const bitmap = await createImageBitmap(keyFrames[i])
    keyFrameCtx.drawImage(bitmap, i * startPos, 0)
  }
}
</script>

<style lang="scss" scoped>
.keyframe-box {
  min-width: calc(100% - 20px);
  height: 52px;
  margin: 10px 10px;
  background-color: #1b1e22;
}
.wrap {
  position: relative;
  height: 50px;
  display: inline-block;
  border: 1px solid var(--my-color);
}
.wrap::before {
  content: '';
  width: 15px;
  height: 50px;
  background-color: var(--my-color);
  position: absolute;
  left: 0;
  background-image: url('@/assets/img/spots.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}
.wrap::after {
  content: '';
  width: 15px;
  height: 50px;
  background-color: var(--my-color);
  position: absolute;
  right: 0;
  background-image: url('@/assets/img/spots.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
