<template>
  <div class="row">
    <PotButton class="btn" @click="openDialog">导出GIF</PotButton>
    <a
      ref="gifDownloadRef"
      :href="gifSrc"
      download="name.gif"
      style="display: none"
    ></a>
  </div>
  <Dialog
    v-model:is-dialog-show="downloading"
    :original-w="originalW"
    :original-h="originalH"
    @confirm="downloadGIF"
  ></Dialog>
</template>

<script setup lang="ts">
import Dialog from './dialog.vue'
import { Video2D } from '@/2d/Video'
import { createGIF } from './generateGIF'

import type { Ref } from 'vue'

const downloading = ref(false)
let originalW = ref(0)
let originalH = ref(0)

const gifSrc = ref('')
const gifDownloadRef: Ref<HTMLAnchorElement> = ref()

onUnmounted(() => {
  gifSrc.value && URL.revokeObjectURL(gifSrc.value)
})

function openDialog() {
  if (!Video2D.isLoaded) {
    ElMessage({
      message: '工作区没有视频资源',
      type: 'warning',
    })
    return
  }
  originalW.value = Video2D.videoTexture.frame.width
  originalH.value = Video2D.videoTexture.frame.height
  downloading.value = true
}

async function downloadGIF(finalW: number, finalH: number) {
  gifSrc.value && URL.revokeObjectURL(gifSrc.value)

  const loading = ElLoading.service({
    lock: true,
    text: '🏃‍♀️Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  try {
    gifSrc.value = await createGIF(finalW, finalH)
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
