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
        <Crop>
          <video ref="video" :src="playerStore.videoSrc"></video>
        </Crop>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Crop from './Crop.vue'

import emitter from '@/utils/bus'
import { VIDEOPLAY, VIDEOPAUSE, VIDEOSKIP } from '@/utils/eventName'

import { usePlayerStore } from '@/store/modules/player'

import type { Ref } from 'vue'

const playerStore = usePlayerStore()

const outerBox: Ref<HTMLElement> = ref()
const workAreaHeight = ref(0)
const workAreaWidth = ref(0)

const video: Ref<HTMLVideoElement> = ref()

emitter.on(VIDEOPLAY, videoPlay)

emitter.on(VIDEOPAUSE, videoPause)

emitter.on(VIDEOSKIP, (time: number) => {
  video.value.currentTime = time
})

onMounted(() => {
  controlWorkArea()
  video.value.onloadedmetadata = videoOnLoadedMetaData
})

// 监听outerBox的变化
// 保证工作区的长宽比恒为2：1
function controlWorkArea() {
  const outerBoxResizeObserver: ResizeObserver = new ResizeObserver((e) => {
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
  outerBoxResizeObserver.observe(unref(outerBox), {
    box: 'content-box',
  })

  onUnmounted(() => {
    outerBoxResizeObserver.unobserve(unref(outerBox))
  })
}

// 初始化player
function videoOnLoadedMetaData() {
  if (video.value.duration === Infinity) {
    video.value.ontimeupdate = () => {
      video.value.ontimeupdate = videoOnUpateTime
      video.value.currentTime = 0
      // 此时可以获取正确的duration值
      playerStore.initPlayer(
        video.value.videoHeight,
        video.value.clientHeight,
        video.value.duration,
      )
    }
    video.value.currentTime = 1e101
  } else {
    playerStore.initPlayer(
      video.value.videoHeight,
      video.value.clientHeight,
      video.value.duration,
    )
  }
}

// 监听video的currentTime变化
function videoOnUpateTime() {
  const currentTime = Number(video.value.currentTime.toFixed(2))

  if (playerStore.playing && currentTime >= playerStore.endTime - 0.15) {
    playerStore.changeCurrentTime(playerStore.endTime)
    // 如果不使用setTimeout：
    // 修改currenTime后 watch中回调函数会被添加到微任务队列
    // 而videoPause先执行 导致playing为false  currentTimeToOffsetX无法执行
    setTimeout(() => {
      videoPause()
      video.value.currentTime = playerStore.endTime
    }, 0)
    return
  }

  playerStore.changeCurrentTime(currentTime)
}

function videoPlay() {
  // 当前时间 等于 最晚时间 时, 重置当前时间为 最早时间
  if (playerStore.currentTime >= playerStore.endTime) {
    video.value.currentTime = playerStore.startTime
  }
  playerStore.changePlaying(true)
  video.value.play()
}

function videoPause() {
  playerStore.changePlaying(false)
  video.value.pause()
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
