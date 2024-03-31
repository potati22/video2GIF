<template>
  <div v-show="!cropStore.cropping" class="row">
    <PotButton class="btn start" @click="start">开始裁剪</PotButton>
  </div>
  <div v-show="cropStore.cropping">
    <div class="row">
      <span>宽高比：</span>
      <PotRadio
        v-model="sizeRadio"
        name="sizeRadio"
        :options="sizeRadioOptions"
      ></PotRadio>
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
import { useEditorStore } from '@/store/modules/editor'

import { useCrop } from '@/hooks/useCrop'

const editorStore = useEditorStore()

const {
  playerStore,
  cropStore,
  cropStart,
  cropConfirm,
  cropCancel,
  cropReset,
  cropSquareOn,
} = useCrop()

watch(
  () => playerStore.videoSrc,
  () => {
    cropReset()
  },
)

const sizeRadio = ref('free')
const sizeRadioOptions = [
  {
    label: '1:1',
    value: '1:1',
    id: 1,
  },
  {
    label: '自由',
    value: 'free',
    id: 0,
  },
]

watch(sizeRadio, (newVal) => {
  if (newVal === '1:1') {
    cropSquareOn()
  }
})

watch(
  () => cropStore.cropSquare,
  (newVal) => {
    if (newVal) return
    sizeRadio.value = 'free'
  },
)

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
