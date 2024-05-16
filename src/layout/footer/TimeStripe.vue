<template>
  <div
    v-show="timeStripeShow"
    ref="timeStripeRef"
    class="time-stripe"
    :style="{ '--left': `${offsetLeft}px` }"
  ></div>
</template>

<script lang="ts" setup>
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'

import { useTimeTrack } from '@/hooks/useTimeTrack'
import { useVideo } from '@/hooks/useVideo'
import emitter from '@/utils/eventBus'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()

const { getOffsetXfromCurrentTime } = useTimeTrack()
const { videoPauseByAuto } = useVideo()

const offsetX = ref(0)
// 时间线的偏移距离（起始点为3
const offsetLeft = computed(() => {
  return 3 + offsetX.value
})
const timeStripeShow = ref(true)
const timeStripeRunSpeed = computed(() => {
  return trackStore.spaceGap / (trackStore.timeGap * 1000)
})

emitter.on('videoClipOpen', () => {
  timeStripeShow.value = false
})

watch(
  () => playerStore.currentTime,
  (newVal) => {
    if (!playerStore.playing) {
      offsetX.value = getOffsetXfromCurrentTime(newVal)
      if (!timeStripeShow.value) {
        timeStripeShow.value = true
      }
    }
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    offsetX.value = getOffsetXfromCurrentTime(playerStore.currentTime)
  },
)

watch(
  () => playerStore.playing,
  (newVal) => {
    newVal && timeStripeRun()
  },
)

function timeStripeRun() {
  const offsetXMax = getOffsetXfromCurrentTime(playerStore.endTime)

  if (offsetX.value >= offsetXMax) {
    offsetX.value = getOffsetXfromCurrentTime(playerStore.startTime)
  }
  const preOffsetX = offsetX.value

  let startTimeStamp, preTimeStamp
  let done = false

  function step(timestamp) {
    if (startTimeStamp === undefined) startTimeStamp = timestamp

    const elapsed = timestamp - startTimeStamp

    if (preTimeStamp !== timestamp) {
      const runed = timeStripeRunSpeed.value * elapsed
      offsetX.value =
        preOffsetX + runed > offsetXMax ? offsetXMax : preOffsetX + runed
      if (!playerStore.playing) {
        done = true
      }
    }

    if (offsetX.value == offsetXMax) {
      videoPauseByAuto()
    } else {
      preTimeStamp = timestamp
      if (!done) window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}
</script>

<style lang="scss" scoped>
.time-stripe {
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(var(--left));
  width: 13px;
  background-image: url('@/assets/img/time-stripe.svg');
  z-index: 10;
}
</style>
