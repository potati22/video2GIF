<template>
  <div class="timeline-box">
    <canvas ref="canvasRef" :width="canvasWidth" :height="20"></canvas>
  </div>
  <div
    ref="timeStripeRef"
    class="time-stripe"
    :style="{ '--left': `${offsetLeft}px` }"
  ></div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { useVideo } from '@/hooks/useVideo'

const props = defineProps({
  // 时间轴缩放程度
  scaleLevel: {
    type: Number,
    default: 3,
  },
})

// 时间轴缩放程度配置
const drawConfig = ref({
  timeGap: 1, // 时间间隔，s
  spaceGap: 200, // 空间间隔，即一段的长度，px
})

const canvasRef: Ref<HTMLCanvasElement> = ref()
let ctx: CanvasRenderingContext2D
const timeStripeRef = ref()

// 记录鼠标在时间轴x方向上的点击位置
const offsetX = ref(0)
// 时间线的偏移距离（起始点为3
const offsetLeft = computed(() => {
  return 3 + offsetX.value
})

const { videoInstance, videoSkip } = useVideo()

// 时间轴段数：duration / timeGap + 2 （2是虚假段数，不会对其进行刻度数绘制，只是为了增大长度
// 时间轴长度：时间轴段数 * spaceGap
const canvasWidth = computed(() => {
  return (
    drawConfig.value.spaceGap *
    (videoInstance.duration / drawConfig.value.timeGap + 2)
  )
})
// 真实总轴长 = (总时长 / timeGap) * spaceGap
// 即timeStripe可运动的范围为： 0 ~ 真实总轴长
const realTimeLineLen = computed(() => {
  return (
    (videoInstance.duration / drawConfig.value.timeGap) *
    drawConfig.value.spaceGap
  )
})

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  canvasRef.value.addEventListener('mousedown', (e) => {
    console.log(realTimeLineLen.value)
    if (e.offsetX > realTimeLineLen.value) return
    offsetX.value = e.offsetX
    offsetXToCurrentTime(e.offsetX)
  })
  document.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.keyCode === 39) {
      offsetX.value = offsetX.value + 1
    } else if (e.keyCode === 37) {
      offsetX.value = offsetX.value - 1
    }
    offsetXToCurrentTime(offsetX.value)
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
      offsetX.value = getOffsetXfromCurrentTime(videoInstance.currentTime)
    })
  },
)

// 当视频的总时长改变时，需要重绘时间轴
watch(
  () => videoInstance.duration,
  () => {
    nextTick(() => {
      drawTimeLine()
    })
  },
)

watch(
  () => videoInstance.currentTime,
  (newVal) => {
    if (!videoInstance.playing) return
    currentTimeToOffsetX(newVal)
  },
)

// 将 在时间轴上选择的时刻 转换为 视频的currentTime
function offsetXToCurrentTime(offsetX: number) {
  const R = offsetX / (videoInstance.duration * drawConfig.value.spaceGap)
  videoSkip(Number((R * videoInstance.duration).toFixed(2)))
}

// 将 视频的currentTime 转换为 在时间轴上选择的时刻
function currentTimeToOffsetX(time: number) {
  // 当timeStripe位于最后时，重新播放，需重置timeStripe的位置
  if (time === 0) offsetX.value = 0

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
  const delay = (drawConfig.value.timeGap / drawConfig.value.spaceGap) * 1000
  timer = setInterval(cb, delay)
}

function getOffsetXfromCurrentTime(time: number) {
  // 当前时间 / 总时长 = offsetX / 真实总轴长
  const R = time / videoInstance.duration
  return Math.floor(R * realTimeLineLen.value)
}

function drawTimeLine() {
  // ctx.clearRect(0, 0, canvasWidth.value, 20) 当canvas的Width变化时 会自动清空画布

  // 需要刻画的真实时间轴段数
  const num = Math.ceil(videoInstance.duration / drawConfig.value.timeGap)

  // 绘制刻度线
  for (let i = 0; i <= num; ++i) {
    ctx.moveTo(i * drawConfig.value.spaceGap, 15)
    ctx.lineTo(i * drawConfig.value.spaceGap, 20)
  }
  ctx.lineWidth = 1
  ctx.strokeStyle = 'rgba(180, 195, 211)'
  ctx.stroke()

  // 绘制刻度数
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

function formatTimeLine(s: number) {
  if (s < 10) return `00:0${s}`
  return `00:${s}`
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
  background-image: url('@/assets/icons/time-stripe.svg');
}
</style>
