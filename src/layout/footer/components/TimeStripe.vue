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

const clipStore = useClipStore()
const playerStore = usePlayerStore()
const trackStore = useTrackStore()

const offsetX = ref(0)
// 时间线的偏移距离（起始点为3
const offsetLeft = computed(() => {
  return 3 + offsetX.value
})

watch(
  () => playerStore.currentTime,
  (newVal) => {
    if (!playerStore.playing) {
      offsetX.value = trackStore.getOffsetXfromCurrentTime(newVal)
      clipStore.clipping && clipStore.changeClipping(false)
    } else {
      timeStripeRun(newVal)
    }
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    offsetX.value = trackStore.getOffsetXfromCurrentTime(
      playerStore.currentTime,
    )
  },
)

function timeStripeRun(time: number) {
  // 当timeStripe位于最后时，重新播放，需重置timeStripe的位置
  if (time == playerStore.startTime) {
    offsetX.value = trackStore.getOffsetXfromCurrentTime(playerStore.startTime)
  }

  // final 为 currentTime 应对应的 offsetX
  const final = trackStore.getOffsetXfromCurrentTime(time)

  let timer = null
  // 每delay毫秒 timeStripe 就移动1px
  // 直到timeStripe移动到final位置
  function cb() {
    if (offsetX.value < final) {
      offsetX.value = offsetX.value + 1
    } else {
      clearInterval(timer)
    }
  }
  const delay = (trackStore.timeGap / trackStore.spaceGap) * 1000
  timer = setInterval(cb, delay)
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
