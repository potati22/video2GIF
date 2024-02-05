<template>
  <div class="control-box">
    <div class="left-box">
      <HSvgIcon icon-class="back" @click="clipBack" />
    </div>
    <div class="center-box">
      <span>{{ formatTime3(playerStore.currentTime) }}</span>
      <HSvgIcon
        v-show="!playerStore.playing"
        icon-class="play"
        @click="videoPlay"
      />
      <HSvgIcon
        v-show="playerStore.playing"
        icon-class="pause"
        @click="videoPause"
      />

      <span>{{ formatTime3(playerStore.duration) }}</span>
    </div>
    <div class="right-box">
      <HSvgIcon icon-class="reduce-btn" @click="trackStore.reduceScaleLevel" />
      <progress max="3" :value="trackStore.scaleLevel"></progress>
      <HSvgIcon icon-class="add-btn" @click="trackStore.addScaleLevel" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import emitter from '@/utils/bus'
import { formatTime3 } from '@/utils/formatTime'
import { VIDEOPLAY, VIDEOPAUSE, CLIPBACK } from '@/utils/eventName'

import { usePlayerStore } from '@/store/modules/player'
import { useTrackStore } from '@/store/modules/track'

const playerStore = usePlayerStore()
const trackStore = useTrackStore()

function videoPlay() {
  emitter.emit(VIDEOPLAY)
}

function videoPause() {
  emitter.emit(VIDEOPAUSE)
}

function clipBack() {
  emitter.emit(CLIPBACK)
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
