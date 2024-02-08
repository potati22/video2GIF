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
import { usePlayerStore } from '@/store/modules/player'
import { useFFmpeg } from '@/hooks/useFFmpeg'

import type { Ref } from 'vue'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()
const { extractKeyFrame } = useFFmpeg()

const keyFrameRef: Ref<HTMLCanvasElement> = ref()
let keyFrameCtx: CanvasRenderingContext2D

let keyFrames: Blob[] = []

onMounted(() => {
  keyFrameCtx = keyFrameRef.value.getContext('2d')
})

watch(
  () => playerStore.videoSrc,
  () => {
    initKeyFrames()
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    if (keyFrames.length === 0) return
    drawKeyFrames()
  },
)

async function initKeyFrames() {
  const loading = ElLoading.service({
    lock: true,
    text: '👩🏻‍💻Working...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  try {
    keyFrames = await extractKeyFrame()
  } catch (err) {
    ElMessage({
      message: 'ffmpeg错误了',
      type: 'error',
    })
    console.log(err)
    loading.close()
    return
  }

  drawKeyFrames()
  loading.close()
}

async function drawKeyFrames() {
  const pickKeyFrameGap = (trackStore.timeGap * 2) / (trackStore.spaceGap / 100)
  const startPos = 100 / pickKeyFrameGap

  for (let i = 0; i < keyFrames.length; i = i + pickKeyFrameGap) {
    const bitmap = await createImageBitmap(keyFrames[i])
    keyFrameCtx.drawImage(bitmap, i * startPos, 0)
    if (
      i + pickKeyFrameGap >= keyFrames.length &&
      i * startPos + 100 < trackStore.trackWidth
    ) {
      keyFrameCtx.drawImage(bitmap, i * startPos + 100, 0)
    }
  }
}
</script>
