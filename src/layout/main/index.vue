<template>
  <div class="video-box">
    <div class="options">
      <RouterView></RouterView>
    </div>
    <div class="play"><Play /></div>
  </div>
</template>

<script lang="ts" setup>
import Play from './components/Play.vue'
</script>

<style lang="scss" scoped>
.video-box {
  width: 100%;
  height: 100%;
  display: flex;
}
.options {
  min-width: 300px;
  border-right: 1px solid var(--el-border-color);
  background-color: var(--el-bg-color);
}
.play {
  flex-grow: 1;
  height: 100%;
}
</style>
