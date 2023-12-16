<template>
  <div class="video-box">
    <div class="play"><Play /></div>
    <div class="position"><Position /></div>
  </div>
</template>

<script lang="ts" setup>
import Play from './components/play.vue'
import Position from './components/position.vue'
</script>

<style lang="scss" scoped>
.video-box {
  width: 100%;
  height: 100%;
  display: flex;
}
.play {
  flex-grow: 1;
  height: 100%;
  border-right: 1px solid var(--el-border-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.position {
  width: 500px;
}
</style>
