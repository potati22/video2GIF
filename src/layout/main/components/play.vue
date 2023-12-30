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
        <Clip
          class="clip-box"
          :canvas-width="videoInstance.clientWidth"
          :canvas-height="videoInstance.clientHeight"
          :clip-width="videoInstance.clipPos.width"
          :clip-height="videoInstance.clipPos.height"
          :cliping="videoInstance.cliping"
          :clipped="videoInstance.clipped"
          @change-clip-x="(x) => (videoInstance.clipPos.x = x)"
          @change-clip-y="(y) => (videoInstance.clipPos.y = y)"
        >
          <video
            ref="myVideo"
            src="/static/capture.mp4"
            :height="videoHeight"
          ></video>
        </Clip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Clip from '@/components/clip.vue'
import { useVideo } from '@/hooks/useVideo'

import type { Ref } from 'vue'

const innerBox: Ref<HTMLElement> = ref()
const workAreaHeight = ref(0)
const workAreaWidth = ref(0)
const videoHeight = ref(0)
let innerBoxResizeObserver: ResizeObserver
let videoResizeObserver: ResizeObserver

const myVideo: Ref<HTMLVideoElement> = ref()
const { videoInstance, videoInit } = useVideo()
videoInit(myVideo)

onMounted(() => {
  innerBoxResizeObserver = new ResizeObserver((e) => {
    const H = Math.floor(e[0].contentRect.height)
    const W = Math.floor(e[0].contentRect.width)
    if (2 * H > W) {
      workAreaWidth.value = W
      workAreaHeight.value = Math.floor(W / 2)
      videoHeight.value = Math.floor(workAreaHeight.value / 1.2)
      videoInstance.clientHeight = videoHeight.value
    } else {
      workAreaHeight.value = H
      workAreaWidth.value = 2 * H
      videoHeight.value = Math.floor(workAreaHeight.value / 1.2)
      videoInstance.clientHeight = videoHeight.value
    }
  })
  innerBoxResizeObserver.observe(unref(innerBox), {
    box: 'content-box',
  })
  videoResizeObserver = new ResizeObserver((e) => {
    videoInstance.clientWidth = Math.ceil(e[0].contentRect.width)
  })
  videoResizeObserver.observe(unref(myVideo), {
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
</style>
