<template>
  <div class="control-box">
    <div class="left-box">
      <PotIcon
        icon-class="back"
        @click="() => emitter.emit('videoClipReset')"
      />
    </div>
    <div class="center-box">
      <span>{{ formatTime3(playerStore.currentTime) }}</span>
      <PotIcon
        v-show="!playerStore.playing"
        icon-class="play"
        @click="playerStore.videoPlay"
      />
      <PotIcon
        v-show="playerStore.playing"
        icon-class="pause"
        @click="playerStore.videoPause"
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
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'

import { formatTime3 } from '@/utils/formatTime'
import emitter from '@/utils/eventBus'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()
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
