<template>
  <div class="control-box">
    <div class="left-box">
      <PotIcon icon-class="back" @click="restoreClip" />
    </div>
    <div class="center-box">
      <span>{{ formatTime3(playerStore.currentTime) }}</span>
      <PotIcon
        v-show="!playerStore.playing"
        icon-class="play"
        @click="videoPlay"
      />
      <PotIcon
        v-show="playerStore.playing"
        icon-class="pause"
        @click="videoPause"
      />
      <span>{{ formatTime3(playerStore.duration) }}</span>
    </div>
    <div class="right-box">
      <PotIcon icon-class="reduce-btn" @click="trackStore.reduceScaleLevel" />
      <progress max="3" :value="trackStore.scaleLevel"></progress>
      <PotIcon icon-class="add-btn" @click="trackStore.addScaleLevel" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useKeyFrameWrap } from '@/hooks/useKeyFrameWrap'
import { useVideo } from '@/hooks/useVideo'

import { formatTime3 } from '@/utils/formatTime'

const { videoPlay, videoPause } = useVideo()
const { trackStore, playerStore, restoreClip } = useKeyFrameWrap()
</script>

<style lang="scss" scoped>
.control-box {
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid var(--pot-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pot-icon {
  font-size: 25px;
}
.left-box {
  .pot-icon {
    margin-right: 10px;
  }
}
.center-box {
  display: flex;
  align-items: center;
  .pot-icon {
    margin: 0 15px;
  }
}
.right-box {
  display: flex;
  align-items: center;
  .pot-icon {
    cursor: pointer;
  }
}
progress {
  margin: 0 10px;
  height: 6px;
  background-color: var(--pot-text-color-yellow);
}
progress::-webkit-progress-value {
  background-color: var(--pot-text-color-yellow);
}
</style>
