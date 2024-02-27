<template>
  <div class="timeline-box">
    <canvas
      ref="timeLineRef"
      :width="trackStore.canvasWidth"
      height="20"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'

import { useTimeTrack } from '@/hooks/useTimeTrack'

import emitter from '@/utils/bus'
import { formatTime3 } from '@/utils/formatTime'
import { VIDEOSKIP } from '@/utils/eventName'

import type { Ref } from 'vue'

const playerStore = usePlayerStore()
const trackStore = useTrackStore()

const { getCurrentTimefromOffsetX } = useTimeTrack()

const timeLineRef: Ref<HTMLCanvasElement> = ref()
let timeLineCtx: CanvasRenderingContext2D

watch([() => playerStore.duration, () => trackStore.scaleLevel], () => {
  nextTick(() => {
    drawTimeLine(
      timeLineCtx,
      playerStore.duration,
      trackStore.timeGap,
      trackStore.spaceGap,
    )
  })
})

onMounted(() => {
  timeLineCtx = timeLineRef.value.getContext('2d')
  timeLineRef.value.addEventListener('mousedown', clickToCurrenTime)
})

function clickToCurrenTime(e: MouseEvent) {
  if (e.offsetX > trackStore.trackWidth) return
  emitter.emit(VIDEOSKIP, getCurrentTimefromOffsetX(e.offsetX))
}

function drawTimeLine(
  ctx: CanvasRenderingContext2D,
  duration: number,
  timeGap: number,
  spaceGap: number,
) {
  // 当canvas的Width变化时 会自动清空画布 无需手动调用clearRect

  const spaceGapNum = Math.ceil(duration / timeGap)

  // 绘制刻度线
  for (let i = 0; i <= spaceGapNum; ++i) {
    ctx.moveTo(i * spaceGap, 15)
    ctx.lineTo(i * spaceGap, 20)
  }
  ctx.lineWidth = 1
  ctx.strokeStyle = 'rgba(180, 195, 211)'
  ctx.stroke()

  // 绘制刻度数
  ctx.fillStyle = '#b4c3d3'
  ctx.textBaseline = 'top'
  for (let i = 0; i <= spaceGapNum; ++i) {
    ctx.fillText(formatTime3(i * timeGap), i * spaceGap, 1)
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
</style>
