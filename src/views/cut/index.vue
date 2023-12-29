<template>
  <div class="cut-box">
    <div v-show="!videoInstance.cliping" class="row">
      <HButton class="btn start" @click="startClip">开始裁剪</HButton>
    </div>
    <div v-show="videoInstance.cliping" class="row">
      <span>宽高比：</span>
      <HInput v-model.number="videoInstance.clipPos.width" class="inp" />
      <span style="margin: 0 5px">:</span>
      <HInput v-model.number="videoInstance.clipPos.height" class="inp" />
    </div>
    <div v-show="videoInstance.cliping" class="row">
      <HButton class="btn cancel" @click="cancelClip">取消</HButton>
      <HButton class="btn apply" @click="applyClip">确认</HButton>
    </div>
    <div v-show="videoInstance.cliping" class="row">
      <HButton class="btn reset" @click="resetClip">重置</HButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'

const { videoInstance } = useVideo()

function startClip() {
  if (videoInstance.cliping) return
  videoInstance.cliping = true
}

function applyClip() {
  videoInstance.cliping = false
  videoInstance.clipped = true
}

function cancelClip() {
  videoInstance.cliping = false
}

function resetClip() {
  videoInstance.clipped = false
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
}
.btn {
  height: 36px;
}
.start {
  width: 250px;
}
.inp {
  width: 64px;
  height: 36px;
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
