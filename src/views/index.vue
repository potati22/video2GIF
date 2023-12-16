<template>
  <button @click="record">点击录制</button>
  <video :src="videoSrc" controls width="700"></video>
  <button @click="videoProcess">处理视频</button>
  <div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

const videoSrc = ref('/static/capture.mp4')
const ffmpeg = new FFmpeg()
const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

onMounted(() => {})

async function record() {
  // 提示用户去选择和授权需要捕获的内容，并将其展示在一个MediaStream里
  const stream = await navigator.mediaDevices.getDisplayMedia()
  const [video] = stream.getVideoTracks() // 获取视频

  // 用于分析MediaStream
  const recorder = new MediaRecorder(stream)
  recorder.start() // 开始记录

  video.addEventListener('ended', () => {
    recorder.stop()
  })

  recorder.addEventListener('dataavailable', (evt) => {
    videoSrc.value = URL.createObjectURL(evt.data)
    /* const a = document.createElement('a')
    a.href = URL.createObjectURL(evt.data)
    a.download = 'capture.mp4'
    a.click() */
  })
}

async function videoProcess() {
  console.log('我来了')
  ffmpeg.on('log', (e) => {
    console.log(e.message)
  })
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })
  // const uint8arry = await fetchFile(videoSrc.value)
  const uint8arry = await fetchFile('/static/capture.mp4')
  await ffmpeg.writeFile('enhypen.mp4', uint8arry)
  await ffmpeg.exec([
    '-i',
    'enhypen.mp4',
    '-vf',
    'crop=500:500:0:0',
    'enhypen2.mp4',
  ])
  const final = await ffmpeg.readFile('enhypen2.mp4', 'binary')
  console.log(
    URL.createObjectURL(
      new Blob([(final as Uint8Array).buffer], { type: 'video/mp4' }),
    ),
  )
}
</script>

<style scoped></style>
