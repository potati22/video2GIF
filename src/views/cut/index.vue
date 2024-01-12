<template>
  <div class="cut-box">
    <div v-show="!videoInstance.cliping" class="row">
      <HButton class="btn start" @click="clipStartEmit">开始裁剪</HButton>
    </div>
    <div v-show="videoInstance.cliping" class="row">
      <span>宽高比：</span>
      <div
        :class="['square', videoInstance.square ? 'square-selected' : '']"
        @click="SquareTurnOnEmit"
      >
        1:1
      </div>
    </div>
    <div v-show="videoInstance.cliping" class="row">
      <HButton class="btn cancel" @click="clipCancelEmit">取消</HButton>
      <HButton class="btn apply" @click="clipApplyEmit">确认</HButton>
    </div>
    <div v-show="videoInstance.cliping" class="row">
      <HButton class="btn reset" @click="clipResetEmit">重置</HButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'

const {
  videoInstance,
  clipStartEmit,
  clipApplyEmit,
  clipCancelEmit,
  clipResetEmit,
  SquareTurnOnEmit,
} = useVideo()
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
