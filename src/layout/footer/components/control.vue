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
      <HSvgIcon icon-class="reduce-btn" @click="reduceScaleLevel" />
      <progress max="3" :value="scaleLevel"></progress>
      <HSvgIcon icon-class="add-btn" @click="addScaleLevel" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVideo } from '@/hooks/useVideo'
const { videoPlay, videoPause } = useVideo()

const emit = defineEmits(['changeScaleLevel'])

const scaleLevel = ref(4)

function reduceScaleLevel() {
  const res = scaleLevel.value - 1
  if (res < 1) return
  scaleLevel.value = res
  emit('changeScaleLevel', res)
}

function addScaleLevel() {
  const res = scaleLevel.value + 1
  if (res > 3) return
  scaleLevel.value = res
  emit('changeScaleLevel', res)
}
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
