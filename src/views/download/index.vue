<template>
  <div class="download-box">
    <div class="row">
      <HButton class="btn" @click="downloadGIF">导出GIF</HButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFFmpeg } from '@/hooks/useFFmpeg'
import { usePlayerStore } from '@/store/modules/player'

const playerStore = usePlayerStore()

const { videoToGIF } = useFFmpeg()

async function downloadGIF() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源~',
      type: 'warning',
    })
    return
  }

  const loading = ElLoading.service({
    lock: true,
    text: '🏃‍♀️Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  let res

  try {
    res = await videoToGIF()
  } catch (err) {
    ElMessage({
      message: 'ffmpeg错误了',
      type: 'error',
    })
    console.log(err)
    loading.close()
    return
  }

  loading.close()

  const d = document.createElement('a')
  d.href = res
  d.download = 'my.gif'
  document.body.appendChild(d)
  d.click()
  document.body.removeChild(d)
  URL.revokeObjectURL(res)
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
