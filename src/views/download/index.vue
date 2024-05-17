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
  <el-dialog
    v-model="downloading"
    width="500"
    title="调整GIF"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <div class="gif-box">
      <div class="gif-row">
        <span class="text">调整尺寸：</span>
        <el-slider v-model="scale" :step="10" :min="minScale" :max="100" />
      </div>
      <div class="gif-row">
        <span class="text">原始尺寸：</span>
        <span>{{ originalW }} X {{ originalH }}</span>
      </div>
      <div class="gif-row">
        <span class="text">最终尺寸：</span>
        <span>{{ finalW }} X {{ finalH }}</span>
      </div>
    </div>
    <template #footer>
      <div>
        <PotButton type="yellow" style="margin-right: 20px" @click="confirm"
          >确定</PotButton
        >
        <PotButton @click="cancel">取消</PotButton>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useFFmpeg } from '@/hooks/useFFmpeg'
import { Video2D } from '@/2d/Video'

import type { Ref } from 'vue'

const { videoToGIF } = useFFmpeg()

const downloading = ref(false)
const scale = ref(100)
let originalW = ref(0)
let originalH = ref(0)
const minScale = computed(() => {
  return ((150 / originalH.value) * 100) << 0
})
const finalW = computed(() => {
  return (originalW.value * (scale.value / 100)) << 0
})
const finalH = computed(() => {
  return (originalH.value * (scale.value / 100)) << 0
})

const gifSrc = ref('')
const gifDownloadRef: Ref<HTMLAnchorElement> = ref()

onUnmounted(() => {
  gifSrc.value && URL.revokeObjectURL(gifSrc.value)
})

async function downloadGIF() {
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

async function confirm() {
  downloading.value = false
  gifSrc.value && URL.revokeObjectURL(gifSrc.value)

  const loading = ElLoading.service({
    lock: true,
    text: '🏃‍♀️Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  try {
    gifSrc.value = await videoToGIF(finalW.value, finalH.value)
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

function cancel() {
  downloading.value = false
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
.gif-box {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.gif-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.text {
  font-weight: bold;
  margin-right: 20px;
}
.el-slider {
  width: 70%;
  --el-slider-main-bg-color: var(--pot-color-yellow);
}
</style>
