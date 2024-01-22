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
import { useFFmpeg } from '@/hooks/useFFmpeg'

import type { Ref } from 'vue'

const trackStore = useTrackStore()
const { extractKeyFrame } = useFFmpeg()
let keyFrames: Blob[] = []

const keyFrameRef: Ref<HTMLCanvasElement> = ref()
let keyFrameCtx: CanvasRenderingContext2D

onMounted(() => {
  keyFrameCtx = keyFrameRef.value.getContext('2d')
})

initKeyFrame()

watch(
  () => trackStore.scaleLevel,
  (newVal) => {
    drawKeyFrames(newVal)
  },
)

async function initKeyFrame() {
  keyFrames = await extractKeyFrame()
  drawKeyFrames(trackStore.scaleLevel)
}

function drawKeyFrames(item: number) {
  switch (item) {
    case 1:
      drawKeyFrames1(keyFrames)
      break
    case 2:
      drawKeyFrames2(keyFrames)
      break
    case 3:
      drawKeyFrames3(keyFrames)
      break
  }
}

async function drawKeyFrames3(res: Blob[]) {
  for (let i = 0; i < res.length; ++i) {
    const bitmap = await createImageBitmap(res[i])
    keyFrameCtx.drawImage(bitmap, 2 * i * 100, 0)
    keyFrameCtx.drawImage(bitmap, (2 * i + 1) * 100, 0)
    if (i === res.length - 1) {
      keyFrameCtx.drawImage(bitmap, (2 * i + 2) * 100, 0)
      keyFrameCtx.drawImage(bitmap, (2 * i + 3) * 100, 0)
    }
  }
}

async function drawKeyFrames2(res: Blob[]) {
  for (let i = 0; i < res.length; ++i) {
    const bitmap = await createImageBitmap(res[i])
    keyFrameCtx.drawImage(bitmap, i * 100, 0)
    if (i === res.length - 1) {
      keyFrameCtx.drawImage(bitmap, (i + 1) * 100, 0)
    }
  }
}

async function drawKeyFrames1(res: Blob[]) {
  for (let i = 0; i < res.length; i = i + 2) {
    const bitmap = await createImageBitmap(res[i])
    keyFrameCtx.drawImage(bitmap, i * 50, 0)
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
