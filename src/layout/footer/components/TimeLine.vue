<template>
  <div class="timeline-box">
    <canvas ref="canvasRef" :width="canvasWidth" :height="20"></canvas>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { useVideo } from '@/hooks/useVideo'

const props = defineProps({
  scaleLevel: {
    type: Number,
    default: 3,
  },
})

const drawConfig = ref({
  timeGap: 1,
  spaceGap: 200,
})

const { videoInstance, videoSkip } = useVideo()

const canvasWidth = computed(() => {
  return (
    drawConfig.value.spaceGap *
    (Math.ceil(videoInstance.duration) / drawConfig.value.timeGap + 2)
  )
})

const canvasRef: Ref<HTMLCanvasElement> = ref()
let ctx: CanvasRenderingContext2D
let currentTime = 0

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  canvasRef.value.addEventListener('mousedown', (e) => {
    skipTimeLine(e.offsetX)
  })
})

watch(
  () => props.scaleLevel,
  (newVal) => {
    switch (newVal) {
      case 3:
        drawConfig.value.timeGap = 1
        drawConfig.value.spaceGap = 200
        break
      case 2:
        drawConfig.value.timeGap = 1
        drawConfig.value.spaceGap = 100
        break
      case 1:
        drawConfig.value.timeGap = 2
        drawConfig.value.spaceGap = 100
        break
    }
    nextTick(() => {
      drawTimeLine()
    })
  },
)

function drawTimeLine() {
  ctx.clearRect(0, 0, canvasWidth.value, 20)
  console.log(canvasWidth.value)
  const num = Math.ceil(videoInstance.duration) / drawConfig.value.timeGap
  for (let i = 0; i <= num; ++i) {
    ctx.moveTo(i * drawConfig.value.spaceGap, 15)
    ctx.lineTo(i * drawConfig.value.spaceGap, 20)
  }
  ctx.lineWidth = 1
  ctx.strokeStyle = 'rgba(180, 195, 211)'
  ctx.stroke()
  ctx.fillStyle = '#b4c3d3'
  ctx.textBaseline = 'top'
  for (let i = 0; i <= num; ++i) {
    ctx.fillText(
      formatTimeLine(i * drawConfig.value.timeGap),
      i * drawConfig.value.spaceGap,
      1,
    )
  }
}

function skipTimeLine(offsetX: number) {
  const R = offsetX / (videoInstance.duration * drawConfig.value.spaceGap)
  currentTime = Number((R * videoInstance.duration).toFixed(2))
  videoSkip(currentTime)
}

function formatTimeLine(s: number) {
  if (s < 10) return `00:0${s}`
  return `00:${s}`
}
</script>

<style lang="scss" scoped>
.timeline-box {
  display: inline-block;
  height: 20px;
  margin: 10px 10px;
  border-bottom: 1px solid rgba(180, 195, 211, 0.1);
}
canvas {
  cursor: pointer;
}
</style>
