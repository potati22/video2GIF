<template>
  <div class="control-box">
    <div class="left-box">
      <HSvgIcon icon-class="back" />
      <HSvgIcon icon-class="split" />
      <HSvgIcon icon-class="delete" />
    </div>
    <div class="center-box">
      <span>{{ formatTime(videoInstance.currentTime) }}</span>
      <HSvgIcon
        v-show="!videoInstance.playing"
        icon-class="play"
        @click="videoPlay"
      />
      <HSvgIcon
        v-show="videoInstance.playing"
        icon-class="pause"
        @click="videoPause"
      />

      <span>{{ formatTime(videoInstance.duration) }}</span>
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
const { videoInstance, videoPlay, videoPause } = useVideo()

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

function formatTime(time: number) {
  const str = time.toString().split('.')
  const integer = Number(str[0])
  const decimals = str[1]

  const minute = Math.floor(integer / 60)
  const second = integer % 60

  const minuteStr = minute < 10 ? `0${minute}` : `${minute}`
  const secondStr = integer < 10 ? `0${second}` : `${second}`
  const millisecondStr = decimals
    ? decimals.length === 1
      ? `${decimals}0`
      : `${decimals}`
    : '00'

  return minuteStr + ':' + secondStr + '.' + millisecondStr
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
}
.left-box {
  .svg-icon {
    margin-right: 10px;
  }
}
.center-box {
  display: flex;
  align-items: center;
  .svg-icon {
    margin: 0 15px;
  }
}
.right-box {
  display: flex;
  align-items: center;
  .svg-icon {
    cursor: pointer;
  }
}
progress {
  margin: 0 10px;
  height: 6px;
  background-color: var(--my-color);
}
progress::-webkit-progress-value {
  background-color: var(--my-color);
}
</style>
