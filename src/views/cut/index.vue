<template>
  <div class="row">
    <PotButton class="start" @click="cropStart">开始裁剪</PotButton>
  </div>
  <el-dialog
    v-model="cropping"
    width="700"
    title="裁剪"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <div class="crop-box">
      <Crop
        v-model:crop-x="cropX"
        v-model:crop-y="cropY"
        v-model:crop-w="cropW"
        v-model:crop-h="cropH"
        :content-h="imgHeight"
        :content-w="imgWidth"
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

const cropX = ref(0)
const cropY = ref(0)
const cropW = ref(200)
const cropH = ref(200)
const cropCache = {
  x: 0,
  y: 0,
  w: 200,
  h: 200,
}

function cropStart() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源',
      type: 'warning',
    })
    return
  }
  cropping.value = true
}

function cropConfirm() {
  cropping.value = false
  emitter.emit('videoCrop', {
    x: (cropX.value / imgScale) << 0,
    y: (cropY.value / imgScale) << 0,
    w: (cropW.value / imgScale) << 0,
    h: (cropH.value / imgScale) << 0,
  })
  cropCache.x = cropX.value
  cropCache.y = cropY.value
  cropCache.w = cropW.value
  cropCache.h = cropH.value
}

function cropCancel() {
  cropping.value = false
  cropX.value = cropCache.x
  cropY.value = cropCache.y
  cropW.value = cropCache.w
  cropH.value = cropCache.h
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
