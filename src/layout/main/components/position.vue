<template>
  <div class="pos-box">
    <div class="xny-box">
      <div>X：{{ videoInstance.clipPos.x }}</div>
      <div>Y：{{ videoInstance.clipPos.y }}</div>
    </div>
    <el-row>
      <span>W：</span>
      <el-input
        v-model.number="videoInstance.clipPos.width"
        placeholder="W: "
      />
    </el-row>
    <el-row>
      <span>H：</span>
      <el-input
        v-model.number="videoInstance.clipPos.height"
        placeholder="H: "
      />
    </el-row>
    <el-button class="btn-box" type="primary" @click="startClip"
      >开始裁剪</el-button
    >
    <el-button class="btn-box" type="primary" @click="closeClip"
      >确定裁剪</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'

const { videoInstance } = useVideo()

function startClip() {
  videoInstance.cliping = true
}

function closeClip() {
  videoInstance.cliping = false
}
</script>

<style lang="scss" scoped>
.pos-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-around;
}
.xny-box {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-row {
  width: 300px;
  height: 30px;
  flex-wrap: nowrap;
  align-items: center;
  span {
    width: 30px;
  }
}
.btn-box {
  width: 300px;
  height: 50px;
}
</style>
