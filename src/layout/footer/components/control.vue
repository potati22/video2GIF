<template>
  <div class="control-box">
    <div class="left-box">
      <HSvgIcon icon-class="back" />
      <HSvgIcon icon-class="split" />
      <HSvgIcon icon-class="delete" />
      <HSvgIcon icon-class="play" @click="videoPlay" />
      <HSvgIcon icon-class="pause" @click="videoPause" />
    </div>
    <div class="right-box">
      <HSvgIcon icon-class="reduce-btn" />
      <progress max="100" value="70"></progress>
      <HSvgIcon icon-class="add-btn" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'
const { videoPlay, videoPause } = useVideo()
</script>

<style lang="scss" scoped>
.control-box {
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid var(--el-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.svg-icon {
  font-size: 25px;
  margin-right: 10px;
}
.right-box {
  display: flex;
  align-items: center;
}
progress {
  margin-right: 10px;
  height: 6px;
  background-color: var(--my-color);
}
progress::-webkit-progress-value {
  background-color: var(--my-color);
}
</style>
