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
  const loading = ElLoading.service({
    lock: true,
    text: '👩🏻‍💻Working...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  let alreadyRecord = false
  let videoBlob: Blob

  if (playerStore.videoSrc) {
    // 主动释放之前创建的URL对象 否则只会在document卸载时自动释放
    URL.revokeObjectURL(playerStore.videoSrc)
  }

  // 提示用户去选择和授权需要捕获的内容，并将其展示在一个MediaStream里
  const [stream, hasError] = await navigator.mediaDevices
    .getDisplayMedia({
      video: true,
    })
    .then((res) => [res, null])
    .catch((err) => [null, err])

  if (hasError) {
    loading.close()
    ElMessage({
      message: '你拒绝了屏幕共享',
      type: 'warning',
    })
    return
  }

  // 对指定的MediaStream对象进行录制
  const recorder = new MediaRecorder(stream)

  recorder.addEventListener('dataavailable', (evt) => {
    if (alreadyRecord) return
    alreadyRecord = true // 保证只记录一次
    loading.close()

    // dataavailable事件比stop事件先触发 所以生成关键帧的函数(具体是网络通信时)会阻塞stop事件 导致浏览器的屏幕录制不能及时停止
    videoBlob = evt.data
  })

  // 主动stop之后需清除自动stop
  recorder.addEventListener('stop', () => {
    playerStore.changeVideoSrc(URL.createObjectURL(videoBlob))
    clearTimeout(stopTimer)
  })

  recorder.start() // 开始记录

  // 录制10s后自动断开
  const stopTimer = setTimeout(() => {
    recorder.stop()
  }, 10000)
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
