<template>
  <div class="row">
    <PotButton class="btn" @click="downloadGIF">导出GIF</PotButton>
    <a
      ref="gifDownloadRef"
      :href="gifSrc"
      download="name.gif"
      style="display: none"
    ></a>
  </div>
  <div class="row">
    <PotButton class="btn" @click="testSubtitles">测试字幕</PotButton>
  </div>
</template>

<script setup lang="ts">
import { useFFmpeg } from '@/hooks/useFFmpeg'
import { usePlayerStore } from '@/store/modules/player'

import type { Ref } from 'vue'

const playerStore = usePlayerStore()

const { videoToGIF, addSubtitles } = useFFmpeg()

const gifSrc = ref('')
const gifDownloadRef: Ref<HTMLAnchorElement> = ref()

onUnmounted(() => {
  gifSrc.value && URL.revokeObjectURL(gifSrc.value)
})

async function testSubtitles() {
  const startTime = performance.now()
  console.log('start')
  await addSubtitles()
  const endTime = performance.now()
  console.log('end', endTime - startTime)
}

async function downloadGIF() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源~',
      type: 'warning',
    })
    return
  }

  gifSrc.value && URL.revokeObjectURL(gifSrc.value)

  const loading = ElLoading.service({
    lock: true,
    text: '🏃‍♀️Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  try {
    gifSrc.value = await videoToGIF()
  } catch (err) {
    ElMessage({
      message: 'ffmpeg错误了',
      type: 'error',
    })
    console.log(err)
    return
  } finally {
    loading.close()
  }

  // 解决GIF无法下载问题
  setTimeout(() => {
    gifDownloadRef.value.click()
  }, 0)
}
</script>

<style lang="scss" scoped>
.row {
  width: 250px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.btn {
  width: 250px;
  height: 36px;
}
</style>
