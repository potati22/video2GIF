<template>
  <div ref="outerBox" class="outer-box">
    <div
      class="work-area"
      :style="{
        '--height': workAreaHeight + 'px',
        '--width': workAreaWidth + 'px',
      }"
    >
      <div class="video-outer">
        <Crop
          ref="cropRef"
          @cropping-change="(state) => cropStore.changeCropping(state)"
          @cropped-change="(state) => cropStore.changeCropped(state)"
          @crop-square-change="(state) => cropStore.changeCropSquare(state)"
        >
          <video ref="videoRef" :src="playerStore.videoSrc"></video>
          <template #text>
            <Editor></Editor>
          </template>
        </Crop>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Crop from '@/components/web/Crop.vue'
import Editor from '@/components/web/Editor.vue'

import { usePlayerStore } from '@/store/modules/player'
import { useCropStore } from '@/store/modules/crop'
import { useVideo } from '@/hooks/useVideo'

import type { Ref } from 'vue'
import { CropInstance } from '@/components/web/Crop'

const playerStore = usePlayerStore()
const cropStore = useCropStore()
const { videoOnLoadedMetaData } = useVideo()

const videoRef: Ref<HTMLVideoElement> = ref()
const cropRef: Ref<CropInstance> = ref()

const outerBox: Ref<HTMLElement> = ref()
const workAreaHeight = ref(0)
const workAreaWidth = ref(0)

onMounted(() => {
  playerStore.setVideoRef(unref(videoRef))
  playerStore.videoRef.onloadedmetadata = videoOnLoadedMetaData

  cropStore.setCropRef(unref(cropRef))

  controlWorkArea()
})

// 监听outerBox的变化
// 保证工作区的长宽比恒为2：1
function controlWorkArea() {
  const outerBoxResizeObserver: ResizeObserver = new ResizeObserver((e) => {
    const H = Math.floor(e[0].contentRect.height)
    const W = Math.floor(e[0].contentRect.width)
    if (2 * H <= W) {
      workAreaHeight.value = H
      workAreaWidth.value = 2 * H
    } else {
      workAreaWidth.value = W
      workAreaHeight.value = Math.floor(W / 2)
    }
  })
  outerBoxResizeObserver.observe(unref(outerBox), {
    box: 'content-box',
  })

  onUnmounted(() => {
    outerBoxResizeObserver.unobserve(unref(outerBox))
  })
}
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-outer {
  display: inline-block; // 行内块元素 宽度只能为内容宽度 故为video宽度
  height: 80%;
  position: relative;
  background-color: var(--pot-bg-color-block);
}
video {
  height: 100%;
  background-image: url('@/assets/img/no-video.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
