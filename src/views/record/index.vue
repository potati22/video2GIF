<template>
  <div class="record-box">
    <div class="row">
      <HButton class="btn" @click="record">录制屏幕（最长10秒左右）</HButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/modules/player'

const playerStore = usePlayerStore()

async function record() {
  if (playerStore.videoSrc) {
    // 主动释放之前创建的URL对象 否则只会在document卸载时自动释放
    URL.revokeObjectURL(playerStore.videoSrc)
  }

  // 提示用户去选择和授权需要捕获的内容，并将其展示在一个MediaStream里
  const stream = await navigator.mediaDevices.getDisplayMedia()

  // 对指定的MediaStream对象进行录制
  const recorder = new MediaRecorder(stream)
  recorder.start() // 开始记录

  // 录制10s后自动断开
  setTimeout(() => {
    recorder.stop()
  }, 10000)

  recorder.addEventListener('dataavailable', (evt) => {
    playerStore.changeVideoSrc(URL.createObjectURL(evt.data))
  })
}
</script>

<style lang="scss" scoped>
.record-box {
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
