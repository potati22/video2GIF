<template>
  <KeyFrameWrap>
    <canvas
      ref="keyFrameRef"
      :width="trackStore.trackWidth"
      height="50"
    ></canvas>
  </KeyFrameWrap>
</template>

<script lang="ts" setup>
import KeyFrameWrap from './KeyFrameWrap.vue'

import { useTrackStore } from '@/store/modules/track'
import { useFFmpeg } from '@/hooks/useFFmpeg'
import emitter from '@/utils/eventBus'

import type { Ref } from 'vue'

const trackStore = useTrackStore()
const { extractKeyFrame } = useFFmpeg()

const keyFrameRef: Ref<HTMLCanvasElement> = ref()
let keyFrameCtx: CanvasRenderingContext2D

let keyFrames: Blob[] = []

onMounted(() => {
  keyFrameCtx = keyFrameRef.value.getContext('2d')
})

emitter.on('videoLoaded', async (loading) => {
  await getKeyFrames()
  drawKeyFrames()
  loading.close()
})

watch(
  () => trackStore.scaleLevel,
  () => {
    drawKeyFrames()
  },
)

async function getKeyFrames() {
  keyFrames = await extractKeyFrame()
    .then((res) => res)
    .catch((err) => {
      ElMessage({
        message: '关键帧预览图生成失败',
        type: 'error',
      })
      console.log(err)
      return []
    })
}

async function drawKeyFrames() {
  if (keyFrames.length === 0) return
  /**
   * 每0.5秒生成一张100*50大小图片
   * trackStore.timeGap * 2: 1个timpGap需要表达k张图片的信息
   * trackStore.spaceGap / 100 : 1个timeGap可以绘制n张图片
   * pickKeyFrameGap：每隔几张图片选择一张图片进行绘制
   */
  const pickKeyFrameGap = (trackStore.timeGap * 2) / (trackStore.spaceGap / 100)
  const startPos = 100 / pickKeyFrameGap

  for (let i = 0; i < keyFrames.length; i = i + pickKeyFrameGap) {
    const bitmap = await createImageBitmap(keyFrames[i])
    keyFrameCtx.drawImage(bitmap, i * startPos, 0)
    // 没有可以选择的图片，但轨道还没绘制到底，则重复绘制上一张图片
    if (
      i + pickKeyFrameGap >= keyFrames.length &&
      i * startPos + 100 < trackStore.trackWidth
    ) {
      keyFrameCtx.drawImage(bitmap, i * startPos + 100, 0)
    }
  }
}
</script>
