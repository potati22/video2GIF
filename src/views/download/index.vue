<template>
  <div class="download-box">
    <div class="row">
      <HButton class="btn" @click="downloadGIF">导出GIF</HButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFFmpeg } from '@/hooks/useFFmpeg'
import { useCropStore } from '@/store/modules/crop'
import { usePlayerStore } from '@/store/modules/player'

const cropStore = useCropStore()
const playerStore = usePlayerStore()

const { videoToGIF } = useFFmpeg()

function downloadGIF() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源~',
      type: 'warning',
    })
    return
  }

  videoToGIF(
    cropStore.cropData.x,
    cropStore.cropData.y,
    cropStore.cropData.width,
    cropStore.cropData.height,
  )
}
</script>

<style lang="scss" scoped>
.download-box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
