<template>
  <div class="download-box">
    <div class="row">
      <HButton class="btn" @click="videoProcess">导出GIF</HButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVideo } from '@/hooks/useVideo'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

const { getRealClipPos } = useVideo()

const ffmpeg = new FFmpeg()
const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'

async function videoProcess() {
  const loading = ElLoading.service({
    lock: true,
    text: '🏃‍♀️Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  const { x, y, width, height } = getRealClipPos()
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })
  const uint8arry = await fetchFile('/static/capture.mp4')
  await ffmpeg.writeFile('enhypen.mp4', uint8arry)
  await ffmpeg.exec([
    '-t',
    '3',
    '-ss',
    '00:00:02',
    '-i',
    'enhypen.mp4',
    '-vf',
    `crop=${width}:${height}:${x}:${y}`,
    'enhypen2.gif',
  ])
  const final = await ffmpeg.readFile('enhypen2.gif', 'binary')
  console.log(
    URL.createObjectURL(
      new Blob([(final as Uint8Array).buffer], { type: 'image/gif' }),
    ),
  )
  loading.close()
}
</script>

<style lang="scss" scoped>
.download-box {
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
