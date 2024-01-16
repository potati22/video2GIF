<template>
  <div class="download-box">
    <div class="row">
      <HButton class="btn" @click="() => videoToGIF(x, y, width, height)"
        >导出GIF</HButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVideo } from '@/hooks/useVideo'
import { useFFmpeg } from '@/hooks/useFFmpeg'

const { getRealClipPos } = useVideo()
const { videoToGIF } = useFFmpeg()

const { x, y, width, height } = getRealClipPos()
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
