<template>
  <div class="download-box">
    <div class="row">
      <HButton
        class="btn"
        @click="
          () =>
            videoToGIF(
              cropStore.cropData.x,
              cropStore.cropData.y,
              cropStore.cropData.width,
              cropStore.cropData.height,
            )
        "
        >导出GIF</HButton
      >
    </div>
    <div class="row">
      <HButton class="btn" @click="extractKeyFrame">获取关键帧</HButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFFmpeg } from '@/hooks/useFFmpeg'
import { useCropStore } from '@/store/modules/crop'

const cropStore = useCropStore()

const { videoToGIF, extractKeyFrame } = useFFmpeg()
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
