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
          <video ref="myVideo" src="/static/capture.mp4"></video>
          <Crop></Crop>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Crop from './crop.vue'
import { useVideo } from '@/hooks/useVideo'

import type { Ref } from 'vue'

const innerBox: Ref<HTMLElement> = ref()
const workAreaHeight = ref(0)
const workAreaWidth = ref(0)

let innerBoxResizeObserver: ResizeObserver

const myVideo: Ref<HTMLVideoElement> = ref()
const { videoInit } = useVideo()
videoInit(myVideo)

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
  display: inline-block;
  height: 80%;
  position: relative;
}
video {
  height: 100%;
  object-fit: contain;
}
</style>
