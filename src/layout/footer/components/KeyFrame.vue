<template>
  <div class="keyframe-box">
    <canvas
      ref="keyFrameRef"
      :width="trackStore.trackWidth"
      height="50"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import emitter from '@/utils/bus'

import { useTrackStore } from '@/store/modules/track'

import type { Ref } from 'vue'

const trackStore = useTrackStore()

const keyFrameRef: Ref<HTMLCanvasElement> = ref()
let keyFrameCtx: CanvasRenderingContext2D

onMounted(() => {
  keyFrameCtx = keyFrameRef.value.getContext('2d')
})

emitter.on('keyFrames', async (res: Blob[]) => {
  for (let i = 0; i < res.length; ++i) {
    const bitmap = await createImageBitmap(res[i])
    keyFrameCtx.drawImage(bitmap, 2 * i * 100, 0)
    keyFrameCtx.drawImage(bitmap, (2 * i + 1) * 100, 0)
  }
})
</script>

<style lang="scss" scoped>
.keyframe-box {
  display: inline-block;
  min-width: calc(100% - 20px);
  height: 50px;
  margin: 10px 10px;
  background-color: #1b1e22;
}
</style>
