<template>
  <Layout></Layout>
</template>

<script lang="ts" setup>
import Layout from '@/layout/index.vue'
import ffmanager from '@/utils/ffmpegManager'

// 第一次进入该网站 需要先加载ffmpeg
onMounted(() => {
  const loading = ElLoading.service({
    lock: true,
    text: '需要一段时间初始化网站资源，请耐心等候(如果加载时间超过5分钟，请刷新重试)',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  ffmanager
    .init()
    .finally(() => loading.close())
    .catch(() => {
      ElMessage({
        message: 'ffmpeg无法加载',
        type: 'error',
      })
    })
})
</script>
