<template>
  <div ref="outerBox" class="outer-box">
    <div
      ref="videoBox"
      class="work-area"
      :style="{
        '--height': workAreaHeight + 'px',
        '--width': workAreaWidth + 'px',
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/store/modules/player'
import { useGlobalResizeObserver } from '@/hooks/useGlobalResizeObserver'

import { MainStage } from '@/2d/Stage'
import { Video2D } from '@/2d/Video'

import emitter from '@/utils/eventBus'

import type { Ref } from 'vue'

const playerStore = usePlayerStore()

const outerBox: Ref<HTMLElement> = ref()
const videoBox: Ref<HTMLElement> = ref()
const workAreaHeight = ref(0)
const workAreaWidth = ref(0)

// 监听outerBox的变化
// 保证工作区的长宽比恒为2：1
useGlobalResizeObserver(
  outerBox,
  {
    box: 'content-box',
  },
  (e) => {
    const H = Math.floor(e.contentRect.height)
    const W = Math.floor(e.contentRect.width)
    if (2 * H <= W) {
      workAreaHeight.value = H
      workAreaWidth.value = 2 * H
    } else {
      workAreaWidth.value = W
      workAreaHeight.value = Math.floor(W / 2)
    }
    MainStage.resize()
  },
)

onMounted(async () => {
  await MainStage.init({
    background: '#212123',
    resizeTo: videoBox.value,
  })
  videoBox.value.appendChild(MainStage.app.canvas)

  await MainStage.loadBackground('./no-video.png')
  MainStage.resizeBackground(
    MainStage.app.screen.width,
    MainStage.app.screen.height,
  )

  MainStage.addChild(Video2D.container, Video2D.resizeVideo.bind(Video2D))

  // 浏览器第一次加载video时 可能会有页面奔溃问题
  MainStage.app.canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault()
    console.log('WebGL context lost')
    ElMessage({
      type: 'info',
      message: '第一次加载视频失败，刷新浏览器重试即可',
    })
  })
})

emitter.on('videoCrop', ({ x, y, w, h }) => {
  Video2D.cropVideo(x, y, w, h)
  Video2D.resizeVideo(MainStage.app.screen.width, MainStage.app.screen.height)
})

emitter.on('videoRecorded', async (loading) => {
  MainStage.background.visible = false

  await playerStore.videoCreate()
  Video2D.loadVideo(playerStore.videoRef)
  Video2D.resizeVideo(MainStage.app.screen.width, MainStage.app.screen.height)
  emitter.emit('videoLoaded', loading)
})
</script>

<style lang="scss" scoped>
.outer-box {
  padding: 32px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.work-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--width);
  height: var(--height);
  background-color: var(--pot-bg-color-block);
}

video {
  display: none;
}
</style>
