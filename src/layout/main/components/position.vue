<template>
  <div>
    <el-button @click="startClip">开始裁剪</el-button>
    <el-button @click="closeClip">确定裁剪</el-button>
    <el-row>
      <span>宽：</span>
      <el-input v-model="clipPositionStore.width" />
    </el-row>
    <el-row>
      <span>高：</span>
      <el-input v-model="clipPositionStore.height" />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useClipPositionStore } from '@/store/modules/clipPosition.ts'

const clipPositionStore = useClipPositionStore()

function startClip() {
  clipPositionStore.changeCliping(true)
}

function closeClip() {
  clipPositionStore.changeCliping(false)
}
</script>
