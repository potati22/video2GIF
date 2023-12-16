<template>
  <div class="content">
    <slot></slot>
    <canvas
      id="mask"
      :width="props.canvasWidth"
      :height="props.canvasHeight"
    ></canvas>
    <!-- <input v-model="clipPos.width" />
    <input v-model="clipPos.height" />
    <div>{{ clipPos }}</div> -->
  </div>
</template>

<script lang="ts" setup>
import { useClipPositionStore } from '@/store/modules/clipPosition'

const clipPositionStore = useClipPositionStore()

const props = defineProps({
  canvasWidth: {
    type: Number,
    default: 300,
  },
  canvasHeight: {
    type: Number,
    default: 300,
  },
})

const mousePoint = {
  preX: 0,
  preY: 0,
}
let clipCanMove = false
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

watch(
  () => clipPositionStore.cliping,
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
  ctx.clearRect(
    clipPositionStore.x,
    clipPositionStore.y,
    clipPositionStore.width,
    clipPositionStore.height,
  )

  canvas.addEventListener('mousedown', mouseDown)
  canvas.addEventListener('mousemove', mouseMove)
  canvas.addEventListener('mouseup', mouseUp)
}

function closeClip() {
  ctx.clearRect(0, 0, props.canvasWidth, props.canvasHeight)
  canvas.removeEventListener('mousedown', mouseDown)
  canvas.removeEventListener('mousemove', mouseMove)
  canvas.removeEventListener('mouseup', mouseUp)
  canvas = null
  ctx = null
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
    e.offsetX > clipPositionStore.x &&
    e.offsetX < clipPositionStore.x + clipPositionStore.width &&
    e.offsetY > clipPositionStore.y &&
    e.offsetY < clipPositionStore.y + clipPositionStore.height
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
  clipPositionStore.changeClipPosX(
    e.offsetX - mousePoint.preX + clipPositionStore.x,
  )
  clipPositionStore.changeClipPosY(
    e.offsetY - mousePoint.preY + clipPositionStore.y,
  )
}

function mouseMove(e: MouseEvent) {
  if (!clipCanMove) return
  // 代表移动过程中，当前clip的原点坐标
  const curClipPosX = e.offsetX - mousePoint.preX + clipPositionStore.x
  const curClipPosY = e.offsetY - mousePoint.preY + clipPositionStore.y
  // 画布原点的取值范围 0 ~ validMaxX 0~validMaxY
  const validMaxX = props.canvasWidth - clipPositionStore.width
  const validMaxY = props.canvasHeight - clipPositionStore.height
  // clip不能超出画布
  if (
    curClipPosX < 0 ||
    curClipPosX > validMaxX ||
    curClipPosY < 0 ||
    curClipPosY > validMaxY
  ) {
    // 如果超出了，则立即停止移动
    clipCanMove = false
    clipPositionStore.changeClipPosX(curClipPosX)
    clipPositionStore.changeClipPosY(curClipPosY)
    if (curClipPosX < 0) clipPositionStore.changeClipPosX(0)
    if (curClipPosX > validMaxX) clipPositionStore.changeClipPosX(validMaxX)
    if (curClipPosY < 0) clipPositionStore.changeClipPosY(0)
    if (curClipPosY > validMaxY) clipPositionStore.changeClipPosY(validMaxY)
  } else {
    reDrawClip(
      curClipPosX,
      curClipPosY,
      clipPositionStore.width,
      clipPositionStore.height,
    )
  }
}

watch(
  () => clipPositionStore.width,
  (newVal) => {
    newVal = Number(newVal)
    // clip不能超出画布
    if (clipPositionStore.x + newVal >= props.canvasWidth) return
    reDrawClip(
      clipPositionStore.x,
      clipPositionStore.y,
      newVal,
      clipPositionStore.height,
    )
  },
)

watch(
  () => clipPositionStore.height,
  (newVal) => {
    newVal = Number(newVal)
    // clip不能超出画布
    if (clipPositionStore.y + newVal >= props.canvasHeight) return
    reDrawClip(
      clipPositionStore.x,
      clipPositionStore.y,
      clipPositionStore.width,
      newVal,
    )
  },
)
</script>

<style lang="scss" scoped>
.content {
  position: relative;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
