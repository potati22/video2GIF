<template>
  <div class="cut-box">
    <div v-show="!cropStore.cropping" class="row">
      <HButton class="btn start" @click="start">开始裁剪</HButton>
    </div>
    <div v-show="cropStore.cropping">
      <div class="row">
        <span>宽高比：</span>
        <div
          :class="['square', cropStore.square ? 'square-selected' : '']"
          @click="squareTurnOn"
        >
          1:1
        </div>
      </div>
      <div class="row">
        <HButton class="btn cancel" @click="cancel">取消</HButton>
        <HButton class="btn apply" @click="confirm">确认</HButton>
      </div>
      <div class="row">
        <HButton class="btn reset" @click="reset">重置</HButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import emitter from '@/utils/bus'

import { useCropStore } from '@/store/modules/crop'
import { usePlayerStore } from '@/store/modules/player'

const cropStore = useCropStore()
const playerStore = usePlayerStore()

function start() {
  if (!playerStore.videoSrc) {
    ElMessage({
      message: '工作区没有视频资源~',
      type: 'warning',
    })
    return
  }
  emitter.emit('cropStart')
}

function confirm() {
  emitter.emit('cropConfirm')
}

function cancel() {
  emitter.emit('cropCancel')
}

function reset() {
  emitter.emit('cropReset')
}

function squareTurnOn() {
  cropStore.changeSquare(true)
  emitter.emit('squareTurnOn')
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
.square {
  width: 40px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  padding: 0 12px;
  margin: 5px;
  background-color: var(--h-btn-bg-color);
  color: var(--h-btn-color);
  border-radius: 4px;
  cursor: pointer;
}
.square:hover {
  background-color: var(--h-btn-bg-color-hover);
}
.square:focus {
  background-color: var(--h-inp-bg-color-focus);
  color: var(--h-inp-color);
}
.square-selected {
  background-color: var(--h-inp-bg-color-focus);
  color: var(--h-inp-color);
}
.btn {
  height: 36px;
}
.start {
  width: 250px;
}
.apply {
  width: 120px;
  background-color: var(--h-btn-bg-color-bright);
  color: var(--h-bth-color-bright);
}
.apply:hover {
  background-color: var(--h-btn-bg-color-bright-hover);
}
.cancel {
  width: 120px;
  margin-right: 10px;
}
.reset {
  width: 250px;
}
</style>
