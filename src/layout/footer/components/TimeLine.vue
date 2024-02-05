<template>
  <div class="timeline-box">
    <canvas
      ref="timeLineRef"
      :width="trackStore.canvasWidth"
      height="20"
    ></canvas>
  </div>
  <div
    v-show="!clipStore.clipping"
    ref="timeStripeRef"
    class="time-stripe"
    :style="{ '--left': `${offsetLeft}px` }"
  ></div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/store/modules/player'
import { useTrackStore } from '@/store/modules/track'
import { useClipStore } from '@/store/modules/clip'

import emitter from '@/utils/bus'
import { formatTime3 } from '@/utils/formatTime'
import { VIDEOSKIP, CLIPLEFT, CLIPRIGHT } from '@/utils/eventName'

import type { Ref } from 'vue'

const playerStore = usePlayerStore()
const trackStore = useTrackStore()
const clipStore = useClipStore()

const timeLineRef: Ref<HTMLCanvasElement> = ref()
const timeStripeRef: Ref<HTMLElement> = ref()

let timeLineCtx: CanvasRenderingContext2D

// 记录鼠标在时间轴x方向上的点击位置
const offsetX = ref(0)
// 时间线的偏移距离（起始点为3
const offsetLeft = computed(() => {
  return 3 + offsetX.value
})

onMounted(() => {
  timeLineCtx = timeLineRef.value.getContext('2d')
  timeLineRef.value.addEventListener('mousedown', (e) => {
    if (e.offsetX > trackStore.trackWidth) return
    offsetXToCurrentTime(e.offsetX)
  })
})

emitter.on(CLIPLEFT, () => {
  const offsetX = clipStore.clipLeft
  offsetXToCurrentTime(offsetX)
  playerStore.changeStartTime(getCurrentTimefromOffsetX(offsetX))
})

emitter.on(CLIPRIGHT, () => {
  const offestX = trackStore.trackWidth - clipStore.clipRight
  offsetXToCurrentTime(offestX)
  playerStore.changeEndTime(getCurrentTimefromOffsetX(offestX))
})

// 当时间轴比例变化时，需要重绘时间轴
watch(
  () => trackStore.scaleLevel,
  () => {
    nextTick(() =>
      redrawTimeLine(getOffsetXfromCurrentTime(playerStore.currentTime)),
    )
  },
)

// 当视频的总时长改变时，需要重绘时间轴
watch(
  () => playerStore.duration,
  () => {
    nextTick(() => redrawTimeLine(0))
  },
)

// 视频播放时 监听currentTime变化
watch(
  () => playerStore.currentTime,
  (newVal) => {
    if (!playerStore.playing) return
    currentTimeToOffsetX(newVal)
  },
)

// 将 在时间轴上选择的时刻 转换为 视频的currentTime
function getCurrentTimefromOffsetX(offsetX: number) {
  const R = offsetX / (playerStore.duration * trackStore.spaceGap)
  return Number((R * playerStore.duration).toFixed(2))
}

function getOffsetXfromCurrentTime(time: number) {
  // 当前时间 / 总时长 = offsetX / 真实总轴长
  const R = time / playerStore.duration
  return Math.floor(R * trackStore.trackWidth)
}

// 将 视频的currentTime 转换为 在时间轴上选择的时刻
function currentTimeToOffsetX(time: number) {
  // 当timeStripe位于最后时，重新播放，需重置timeStripe的位置
  if (time === playerStore.startTime)
    offsetX.value = getOffsetXfromCurrentTime(playerStore.startTime)

  // final 为 currentTime 应对应的 offsetX
  const final = getOffsetXfromCurrentTime(time)

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

function offsetXToCurrentTime(pos: number) {
  offsetX.value = pos
  emitter.emit(VIDEOSKIP, getCurrentTimefromOffsetX(offsetX.value))
}

function redrawTimeLine(timeStripePos: number) {
  drawTimeLine()
  offsetX.value = timeStripePos
}

function drawTimeLine() {
  // 当canvas的Width变化时 会自动清空画布 无需手动调用clearRect

  const spaceGapNum = Math.ceil(playerStore.duration / trackStore.timeGap)

  // 绘制刻度线
  for (let i = 0; i <= spaceGapNum; ++i) {
    timeLineCtx.moveTo(i * trackStore.spaceGap, 15)
    timeLineCtx.lineTo(i * trackStore.spaceGap, 20)
  }
  timeLineCtx.lineWidth = 1
  timeLineCtx.strokeStyle = 'rgba(180, 195, 211)'
  timeLineCtx.stroke()

  // 绘制刻度数
  timeLineCtx.fillStyle = '#b4c3d3'
  timeLineCtx.textBaseline = 'top'
  for (let i = 0; i <= spaceGapNum; ++i) {
    timeLineCtx.fillText(
      formatTime3(i * trackStore.timeGap),
      i * trackStore.spaceGap,
      1,
    )
  }
}
</script>

<style lang="scss" scoped>
.timeline-box {
  display: inline-block;
  min-width: calc(100% - 20px);
  height: 20px;
  margin: 10px 10px;
  border-bottom: 1px solid rgba(180, 195, 211, 0.1);
}
canvas {
  cursor: pointer;
}
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
