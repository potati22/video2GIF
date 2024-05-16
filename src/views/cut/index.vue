<template>
  <div class="row">
    <PotButton class="start" @click="cropStart">开始裁剪</PotButton>
  </div>
  <el-dialog
    v-model="cropping"
    width="700"
    title="裁剪"
    :close-on-click-modal="false"
  >
    <div class="crop-box">
      <Crop
        ref="cropRef"
        :height="imgHeight"
        :width="imgWidth"
        :crop-square="false"
      >
        <img :src="imgSrc" />
      </Crop>
    </div>
    <template #footer>
      <div>
        <PotButton type="yellow" style="margin-right: 20px" @click="cropConfirm"
          >确定</PotButton
        >
        <PotButton @click="cropCancel">取消</PotButton>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import Crop from '@/components/Crop/crop.vue'

import { usePlayerStore } from '@/store/modules/player'
import emitter from '@/utils/eventBus'

import type { Ref } from 'vue'
import type { CropInstance } from '@/components/Crop/crop'

const playerStore = usePlayerStore()

const cropping = ref(false)

const imgSrc: Ref<string> = ref('')
const imgWidth: Ref<number> = ref(0)
const imgHeight: number = 300
let imgScale: number = 1 // imageSize / videoSize

watch(cropping, (newVal) => {
  if (!newVal) return
  imgScale = imgHeight / playerStore.videoRef.videoHeight
  const res = videoToImage(
    playerStore.videoRef,
    playerStore.videoRef.videoWidth,
    playerStore.videoRef.videoHeight,
    imgScale,
  )
  imgSrc.value = res.src
  imgWidth.value = res.width
})

function videoToImage(
  video: HTMLVideoElement,
  videoWidth: number,
  videoHeight: number,
  scale: number,
) {
  const canvas = document.createElement('canvas')
  canvas.width = videoWidth * scale
  canvas.height = videoHeight * scale

  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

  return {
    src: canvas.toDataURL('image/png'),
    width: canvas.width,
    height: canvas.height,
  }
}

const cropRef: Ref<CropInstance> = ref()
const cropTemp = {
  x: 0,
  y: 0,
  w: 200,
  h: 200,
}

function cropStart() {
  cropping.value = true
}

function cropConfirm() {
  cropping.value = false
  cropTemp.x = cropRef.value.cropBoxTransX
  cropTemp.y = cropRef.value.cropBoxTransY
  cropTemp.w = cropRef.value.cropBoxTransW
  cropTemp.h = cropRef.value.cropBoxTransH
  emitter.emit('videoCrop', {
    x: (cropTemp.x / imgScale) << 0,
    y: (cropTemp.y / imgScale) << 0,
    w: (cropTemp.w / imgScale) << 0,
    h: (cropTemp.h / imgScale) << 0,
  })
}

function cropCancel() {
  cropping.value = false
  cropRef.value.changeCropBox(cropTemp.x, cropTemp.y, cropTemp.w, cropTemp.h)
}
</script>

<style lang="scss" scoped>
.row {
  width: 250px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.start {
  width: 250px;
  height: 36px;
}
.crop-box {
  display: flex;
  justify-content: center;
}
</style>
