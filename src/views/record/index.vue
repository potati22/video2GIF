<template>
  <div class="row">
    <PotButton class="btn" @click="record">录制屏幕（最长10秒左右）</PotButton>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/modules/player'
import emitter from '@/utils/eventBus'

const playerStore = usePlayerStore()

function record() {
  // 主动释放之前创建的URL对象 否则只会在document卸载时自动释放
  if (playerStore.videoSrc) URL.revokeObjectURL(playerStore.videoSrc)

  const loading = ElLoading.service({
    lock: true,
    text: '👩🏻‍💻Working...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  playerStore.changeVideoSrc('/heli.webm')
  emitter.emit('videoRecorded', loading)
  /* askForRecord()
    .then((videoStream) => recording(videoStream))
    .then((videoSrc) => {
      playerStore.changeVideoSrc(videoSrc)
      emitter.emit('videoRecorded', loading)
    })
    .catch(() => {
      loading.close()
      ElMessage({
        message: '发生错误',
        type: 'warning',
      })
    }) */
}

// 提示用户去选择和授权需要捕获的内容，并将其展示在一个MediaStream里
function askForRecord() {
  return navigator.mediaDevices.getDisplayMedia({
    video: true,
  })
}

// 录制视频内容
function recording(stream: MediaStream): Promise<string> {
  return new Promise((resolve) => {
    // 对指定的MediaStream对象进行录制
    const recorder = new MediaRecorder(stream)

    // dataavailable事件比stop事件先触发
    recorder.addEventListener('dataavailable', (evt) => {
      clearTimeout(stopTimer)
      resolve(URL.createObjectURL(evt.data))
    })

    // 延迟开始录制，可解决视频开头几帧与后面帧画面高度不一致的问题
    setTimeout(() => {
      recorder.start() // 开始记录
    }, 1000)

    // 录制10s后自动断开
    const stopTimer = setTimeout(() => {
      recorder.stop() // recoder.stop后 录制停止 但流没有停止
      stream.getTracks().forEach((item) => item.stop()) // 选项卡的录制标志与流有关
    }, 11000)
  })
}
</script>

<style lang="scss" scoped>
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
