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
import { useVideo } from '@/hooks/useVideo'
import { useGlobalResizeObserver } from '@/hooks/core/useGlobalResizeObserver'

import { MainStage } from '@/2d/Stage'
import { Video2D } from '@/2d/Video'

import emitter from '@/utils/eventBus'

import type { Ref } from 'vue'

const { playerStore, videoInit } = useVideo()

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

  await MainStage.loadBackground('/no-video.png')
  MainStage.addChild(Video2D.container, Video2D.adjustVideo.bind(Video2D))
})

emitter.on('videoCrop', ({ x, y, w, h }) => {
  Video2D.cropVideo(x, y, w, h)
  Video2D.adjustVideo(MainStage.app.screen.width, MainStage.app.screen.height)
})

emitter.on('videoChange', async (loading) => {
  MainStage.background.visible = false

  await Video2D.loadVideo(playerStore.videoSrc)
  videoInit(Video2D.videoResource)
  console.log('kkkk')
  loading.close()
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
