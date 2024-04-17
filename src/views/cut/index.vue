<template>
  <div v-show="!cropStore.cropping" class="row">
    <PotButton class="btn start" @click="start">开始裁剪</PotButton>
  </div>
  <div v-show="cropStore.cropping">
    <div class="row">
      <span>宽高比：</span>
      <PotRadioGroup v-model="sizeType">
        <PotRadio value="1:1">1:1</PotRadio>
        <PotRadio value="free">自由</PotRadio>
      </PotRadioGroup>
    </div>
    <div class="row">
      <PotButton class="btn cancel" @click="cropCancel">取消</PotButton>
      <PotButton type="yellow" class="btn apply" @click="cropConfirm"
        >确认</PotButton
      >
    </div>
    <div class="row">
      <PotButton class="btn reset" @click="cropReset">重置</PotButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/store/modules/player'
import { useEditorStore } from '@/store/modules/editor'

import { useCrop } from '@/hooks/useCrop'

const editorStore = useEditorStore()
const playerStore = usePlayerStore()

const { cropStore, cropStart, cropConfirm, cropCancel, cropReset } = useCrop()

watch(
  () => playerStore.videoSrcAlreadyChange,
  () => {
    cropReset()
  },
)

const sizeType = computed({
  get() {
    return cropStore.cropSquare ? '1:1' : 'free'
  },
  set(newVal) {
    const state = newVal === '1:1' ? true : false
    cropStore.changeCropSquare(state)
  },
})

function start() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源~',
      type: 'warning',
    })
    return
  }
  if (editorStore.editoring || editorStore.editored) {
    ElMessage({
      message: '请先删除文本资源再进行裁剪',
      type: 'warning',
    })
    return
  }
  cropStart()
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
  height: 36px;
}
.start {
  width: 250px;
}
.apply {
  width: 120px;
}
.cancel {
  width: 120px;
  margin-right: 10px;
}
.reset {
  width: 250px;
}
</style>
