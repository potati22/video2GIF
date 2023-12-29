<template>
  <div class="content">
    <slot></slot>
    <canvas
      id="mask"
      :width="props.canvasWidth"
      :height="props.canvasHeight"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  canvasWidth: {
    type: Number,
    default: 300,
  },
  canvasHeight: {
    type: Number,
    default: 300,
  },
  clipWidth: {
    type: Number,
    default: 150,
  },
  clipHeight: {
    type: Number,
    default: 150,
  },
  cliping: {
    type: Boolean,
    default: false,
  },
  clipped: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['changeClipX', 'changeClipY'])

const mousePoint = {
  preX: 0,
  preY: 0,
}
const clipPoint = {
  x: 0,
  y: 0,
}
let clipCanMove = false
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

watch(
  () => props.cliping,
  (newVal) => {
    if (newVal) {
      startClip()
    } else {
      closeClip()
    }
  },
)

function startClip() {
  canvas = document.getElementById('mask') as HTMLCanvasElement
  ctx = canvas.getContext('2d')
  ctx.fillStyle = 'rgba(0, 0, 0, .5)'
  ctx.fillRect(0, 0, props.canvasWidth, props.canvasHeight)
  ctx.clearRect(clipPoint.x, clipPoint.y, props.clipWidth, props.clipHeight)

  canvas.addEventListener('mousedown', mouseDown)
  canvas.addEventListener('mousemove', mouseMove)
  canvas.addEventListener('mouseup', mouseUp)
}

function closeClip() {
  if (props.clipped) {
    ctx.clearRect(0, 0, props.canvasWidth, props.canvasHeight)
    ctx.fillStyle = '#212123'
    ctx.fillRect(0, 0, props.canvasWidth, props.canvasHeight)
    ctx.clearRect(clipPoint.x, clipPoint.y, props.clipWidth, props.clipHeight)
  } else {
    ctx.clearRect(0, 0, props.canvasWidth, props.canvasHeight)
  }
  canvas.removeEventListener('mousedown', mouseDown)
  canvas.removeEventListener('mousemove', mouseMove)
  canvas.removeEventListener('mouseup', mouseUp)
}

function reDrawClip(x: number, y: number, width: number, height: number) {
  ctx.clearRect(0, 0, props.canvasWidth, props.canvasHeight)
  ctx.fillStyle = 'rgba(0, 0, 0, .5)'
  ctx.fillRect(0, 0, props.canvasWidth, props.canvasHeight)
  ctx.clearRect(x, y, width, height)
}

function mouseDown(e: MouseEvent) {
  // 鼠标必须在clip范围内点击，才能够移动clip
  if (
    e.offsetX > clipPoint.x &&
    e.offsetX < clipPoint.x + props.clipWidth &&
    e.offsetY > clipPoint.y &&
    e.offsetY < clipPoint.y + props.clipHeight
  ) {
    clipCanMove = true
    // mousePoint只记录移动的起始点，在一次完整移动中，都以起始点为参照
    mousePoint.preX = e.offsetX
    mousePoint.preY = e.offsetY
  }
}

function mouseUp(e: MouseEvent) {
  if (!clipCanMove) return
  // 松开鼠标，即代表一次移动结束，记录此时clip的原点
  clipCanMove = false
  clipPoint.x = e.offsetX - mousePoint.preX + clipPoint.x
  clipPoint.y = e.offsetY - mousePoint.preY + clipPoint.y
  emits('changeClipX', clipPoint.x)
  emits('changeClipY', clipPoint.y)
}

function mouseMove(e: MouseEvent) {
  if (!clipCanMove) return
  // 代表移动过程中，当前clip的原点坐标
  const curClipPosX = e.offsetX - mousePoint.preX + clipPoint.x
  const curClipPosY = e.offsetY - mousePoint.preY + clipPoint.y
  // 画布原点的取值范围 0 ~ validMaxX 0~validMaxY
  const validMaxX = props.canvasWidth - props.clipWidth
  const validMaxY = props.canvasHeight - props.clipHeight
  // clip不能超出画布
  if (
    curClipPosX < 0 ||
    curClipPosX > validMaxX ||
    curClipPosY < 0 ||
    curClipPosY > validMaxY
  ) {
    // 如果超出了，则立即停止移动
    clipCanMove = false
    clipPoint.x = curClipPosX
    clipPoint.y = curClipPosY
    if (curClipPosX < 0) clipPoint.x = 0
    if (curClipPosX > validMaxX) clipPoint.x = validMaxX
    if (curClipPosY < 0) clipPoint.y = 0
    if (curClipPosY > validMaxY) clipPoint.y = validMaxY
    emits('changeClipX', clipPoint.x)
    emits('changeClipY', clipPoint.y)
  } else {
    reDrawClip(curClipPosX, curClipPosY, props.clipWidth, props.clipHeight)
  }
}

watch(
  () => props.clipWidth,
  (newVal) => {
    // clip不能超出画布
    if (clipPoint.x + newVal >= props.canvasWidth) return
    reDrawClip(clipPoint.x, clipPoint.y, newVal, props.clipHeight)
  },
)

watch(
  () => props.clipHeight,
  (newVal) => {
    // clip不能超出画布
    if (clipPoint.y + newVal >= props.canvasHeight) return
    reDrawClip(clipPoint.x, clipPoint.y, props.clipWidth, newVal)
  },
)
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
