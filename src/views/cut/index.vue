<template>
  <div class="cut-box">
    <div v-show="!cropping" class="row">
      <PotButton class="btn start" @click="start">开始裁剪</PotButton>
    </div>
    <div v-show="cropping">
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
  </div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/store/modules/player'
import { useCrop } from '@/hooks/useCrop'

const playerStore = usePlayerStore()

const {
  cropping,
  cropsquare,
  cropStart,
  cropConfirm,
  cropCancel,
  cropReset,
  cropSquareOn,
} = useCrop()

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

watch(cropsquare, (newVal) => {
  if (newVal === false) {
    sizeRadio.value = 'free'
  }
})

function start() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源~',
      type: 'warning',
    })
    return
  }
  cropStart()
}
</script>

<style lang="scss" scoped>
.cut-box {
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
