<template>
  <div class="outer-box">
    <div ref="innerBox" class="inner-box">
      <div
        class="work-area"
        :style="{
          '--height': workAreaHeight + 'px',
          '--width': workAreaWidth + 'px',
        }"
      >
        <div class="video-outer">
          <video ref="video" :src="playerStore.videoSrc"></video>
          <Crop></Crop>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Crop from './Crop.vue'

import emitter from '@/utils/bus'

import { usePlayerStore } from '@/store/modules/player'

import type { Ref } from 'vue'

const playerStore = usePlayerStore()

const innerBox: Ref<HTMLElement> = ref()
const workAreaHeight = ref(0)
const workAreaWidth = ref(0)

let innerBoxResizeObserver: ResizeObserver

const video: Ref<HTMLVideoElement> = ref()

onMounted(() => {
  innerBoxResizeObserver = new ResizeObserver((e) => {
    const H = Math.floor(e[0].contentRect.height)
    const W = Math.floor(e[0].contentRect.width)
    if (2 * H > W) {
      workAreaWidth.value = W
      workAreaHeight.value = Math.floor(W / 2)
    } else {
      workAreaHeight.value = H
      workAreaWidth.value = 2 * H
    }
  })
  innerBoxResizeObserver.observe(unref(innerBox), {
    box: 'content-box',
  })

  // 初始化video
  video.value.onloadedmetadata = () => {
    if (video.value.duration === Infinity) {
      video.value.ontimeupdate = () => {
        video.value.ontimeupdate = () => {
          playerStore.changeCurrenTime(video.value.currentTime)
        }
        video.value.currentTime = 0
        // 此时可以获取正确的duration值
        playerStore.initPlayer(
          video.value.videoWidth,
          video.value.videoHeight,
          video.value.clientWidth,
          video.value.clientHeight,
          video.value.duration,
        )
      }
      video.value.currentTime = 1e101
    } else {
      playerStore.initPlayer(
        video.value.videoWidth,
        video.value.videoHeight,
        video.value.clientWidth,
        video.value.clientHeight,
        video.value.duration,
      )
    }
  }
  video.value.onended = () => {
    playerStore.changePlaying(false)
  }
})

emitter.on('videoPlay', () => {
  playerStore.changePlaying(true)
  video.value.play()
})

emitter.on('videoPause', () => {
  playerStore.changePlaying(false)
  video.value.pause()
})

emitter.on('videoSkip', (time: number) => {
  video.value.currentTime = time
})

onUnmounted(() => {
  innerBoxResizeObserver.unobserve(unref(innerBox))
})
</script>

<style lang="scss" scoped>
.outer-box {
  padding: 32px;
  height: 100%;
  box-sizing: border-box;
}
.inner-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.work-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--width);
  height: var(--height);
  background-color: var(--el-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-outer {
  display: inline-block; // 行内块元素 宽度只能为内容宽度 故为video宽度
  height: 80%;
  position: relative;
  background-color: var(--el-bg-color);
}
video {
  height: 100%;
  background-image: url('@/assets/img/no-video.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
