<template>
  <div
    v-show="!clipStore.clipping"
    ref="timeStripeRef"
    class="time-stripe"
    :style="{ '--left': `${offsetLeft}px` }"
  ></div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/store/modules/player'
import { useClipStore } from '@/store/modules/clip'
import { useTrackStore } from '@/store/modules/track'
import { useTimeTrack } from '@/hooks/useTimeTrack'

import emitter from '@/utils/bus'
import { VIDEOPLAY } from '@/utils/eventName'

const clipStore = useClipStore()
const playerStore = usePlayerStore()
const trackStore = useTrackStore()

const { getOffsetXfromCurrentTime } = useTimeTrack()

const offsetX = ref(0)
// 时间线的偏移距离（起始点为3
const offsetLeft = computed(() => {
  return 3 + offsetX.value
})

watch(
  () => playerStore.currentTime,
  (newVal) => {
    if (!playerStore.playing) {
      offsetX.value = getOffsetXfromCurrentTime(newVal)
      clipStore.clipping && clipStore.changeClipping(false)
    }
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    offsetX.value = getOffsetXfromCurrentTime(playerStore.currentTime)
  },
)

emitter.on(VIDEOPLAY, timeStripeRun)

function timeStripeRun() {
  const offsetXMax = getOffsetXfromCurrentTime(playerStore.endTime)
  const step = trackStore.spaceGap / trackStore.timeGap / 50

  if (offsetX.value == offsetXMax) {
    offsetX.value = getOffsetXfromCurrentTime(playerStore.startTime)
  }

  let timer = null
  function cb() {
    if (offsetX.value >= offsetXMax || !playerStore.playing) {
      clearInterval(timer)
      return
    }
    offsetX.value += step
  }
  timer = setInterval(cb, 20)
}
</script>

<style lang="scss" scoped>
.time-stripe {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--left);
  width: 13px;
  background-image: url('@/assets/img/time-stripe.svg');
  z-index: 10;
}
</style>
