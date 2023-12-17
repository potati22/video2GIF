<template>
  <div class="control-box">
    <SvgIcon icon-class="play" @click="videoPlay" />
    <SvgIcon icon-class="pause" @click="videoPause" />
  </div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'
const { videoPlay, videoPause } = useVideo()
</script>

<style lang="scss" scoped>
.control-box {
  height: 40px;
  padding-left: 20px;
  border-bottom: 1px solid var(--el-border-color);
  font-size: 25px;
  display: flex;
  align-items: center;
}
.svg-icon {
  margin-right: 10px;
}
</style>
