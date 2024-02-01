<template>
  <div class="keyframe-box" :style="{ width: trackStore.canvasWidth + 'px' }">
    <div v-show="playerStore.videoSrc" id="keyFramesWrap" class="wrap">
      <div
        class="select-box"
        :style="{
          left: clipStore.clipLeft + 'px',
          right: clipStore.clipRight + 'px',
        }"
      >
        <div ref="leftRef" class="select-left"></div>
        <div ref="rightRef" class="select-right"></div>
      </div>
      <canvas
        ref="keyFrameRef"
        :width="trackStore.trackWidth"
        height="50"
      ></canvas>
    </div>
  </div>
  <div
    v-show="loading"
    v-loading="loading"
    :element-loading-spinner="svg"
    element-loading-background="rgba(0, 0, 0, 0.5)"
    class="loading-box"
    :style="{ width: trackStore.canvasWidth + 'px' }"
  ></div>
</template>

<script lang="ts" setup>
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'
import { useClipStore } from '@/store/modules/clip'
import { useFFmpeg } from '@/hooks/useFFmpeg'

import emitter from '@/utils/bus'

import type { Ref } from 'vue'

const loading = ref(false)
const svg =
  '<svg t="1706184199716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4528" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"><path d="M512 337.322667a26.666667 26.666667 0 0 1-26.666667-26.666667V197.333333a26.666667 26.666667 0 1 1 53.333334 0v113.322667c0 14.762667-11.946667 26.666667-26.666667 26.666667z" fill="#fded70" p-id="4529"></path><path d="M424.661333 360.746667a26.666667 26.666667 0 0 1-36.394666-9.728l-56.661334-98.133334a26.666667 26.666667 0 0 1 46.122667-26.666666l56.661333 98.133333a26.624 26.624 0 0 1-9.728 36.394667z" fill="#fded70" opacity=".9" p-id="4530"></path><path d="M360.746667 424.661333a26.624 26.624 0 0 1-36.394667 9.728l-98.133333-56.661333a26.624 26.624 0 1 1 26.666666-46.122667l98.133334 56.661334c12.714667 7.338667 17.066667 23.68 9.728 36.394666z" fill="#fded70" opacity=".85" p-id="4531"></path><path d="M337.322667 512c0 14.72-11.946667 26.666667-26.666667 26.666667H197.333333a26.666667 26.666667 0 1 1 0-53.333334h113.322667c14.762667 0 26.666667 11.946667 26.666667 26.666667z" fill="#fded70" opacity=".8" p-id="4532"></path><path d="M360.746667 599.338667a26.666667 26.666667 0 0 1-9.728 36.394666l-98.133334 56.661334a26.666667 26.666667 0 0 1-26.666666-46.122667l98.133333-56.661333a26.624 26.624 0 0 1 36.394667 9.728z" fill="#fded70" opacity=".75" p-id="4533"></path><path d="M424.661333 663.253333a26.624 26.624 0 0 1 9.728 36.394667l-56.661333 98.133333a26.624 26.624 0 1 1-46.122667-26.666666l56.661334-98.133334a26.666667 26.666667 0 0 1 36.394666-9.728z" fill="#fded70" opacity=".7" p-id="4534"></path><path d="M512 686.677333c14.72 0 26.666667 11.946667 26.666667 26.666667v113.322667a26.666667 26.666667 0 1 1-53.333334 0v-113.322667c0-14.762667 11.946667-26.666667 26.666667-26.666667z" fill="#fded70" opacity=".65" p-id="4535"></path><path d="M599.338667 663.253333a26.666667 26.666667 0 0 1 36.394666 9.728l56.661334 98.133334a26.666667 26.666667 0 0 1-46.122667 26.666666l-56.661333-98.133333a26.624 26.624 0 0 1 9.728-36.394667z" fill="#fded70" opacity=".6" p-id="4536"></path><path d="M663.253333 599.338667a26.624 26.624 0 0 1 36.394667-9.728l98.133333 56.661333a26.624 26.624 0 1 1-26.666666 46.122667l-98.133334-56.661334a26.666667 26.666667 0 0 1-9.728-36.394666z" fill="#fded70" opacity=".55" p-id="4537"></path><path d="M686.677333 512c0-14.72 11.946667-26.666667 26.666667-26.666667h113.322667a26.666667 26.666667 0 1 1 0 53.333334h-113.322667a26.666667 26.666667 0 0 1-26.666667-26.666667z" fill="#fded70" opacity=".5" p-id="4538"></path><path d="M663.253333 424.661333a26.666667 26.666667 0 0 1 9.728-36.394666l98.133334-56.661334a26.666667 26.666667 0 0 1 26.666666 46.122667l-98.133333 56.661333a26.624 26.624 0 0 1-36.394667-9.728z" fill="#fded70" opacity=".4" p-id="4539"></path><path d="M599.338667 360.746667a26.624 26.624 0 0 1-9.728-36.394667l56.661333-98.133333a26.624 26.624 0 1 1 46.122667 26.666666l-56.661334 98.133334a26.666667 26.666667 0 0 1-36.394666 9.728z" fill="#fded70" opacity=".3" p-id="4540"></path></svg>'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()
const clipStore = useClipStore()

const { extractKeyFrame } = useFFmpeg()

let keyFrames: Blob[] = []

const keyFrameRef: Ref<HTMLCanvasElement> = ref()
let keyFrameCtx: CanvasRenderingContext2D

const leftRef = ref()
const rightRef = ref()
let leftFlag = false
let rightFlag = false

onMounted(() => {
  keyFrameCtx = keyFrameRef.value.getContext('2d')
  registerLeft()
  registerRight()
  registerAll()
})

watch(
  () => playerStore.videoSrc,
  (newVal) => {
    if (!newVal) return
    initKeyFrame()
  },
)

watch(
  () => trackStore.scaleLevel,
  () => {
    if (keyFrames.length === 0) return
    drawKeyFrames()
  },
)

async function initKeyFrame() {
  loading.value = true
  try {
    keyFrames = await extractKeyFrame()
  } catch (err) {
    ElMessage({
      message: 'ffmpeg错误了',
      type: 'error',
    })
    console.log(err)
    loading.value = false
    return
  }
  drawKeyFrames()
  loading.value = false
}

async function drawKeyFrames() {
  const pickKeyFrameGap = (trackStore.timeGap * 2) / (trackStore.spaceGap / 100)
  const startPos = 100 / pickKeyFrameGap

  for (let i = 0; i < keyFrames.length; i = i + pickKeyFrameGap) {
    const bitmap = await createImageBitmap(keyFrames[i])
    keyFrameCtx.drawImage(bitmap, i * startPos, 0)
    if (
      i + pickKeyFrameGap >= keyFrames.length &&
      i * startPos + 100 < trackStore.trackWidth
    ) {
      keyFrameCtx.drawImage(bitmap, i * startPos + 100, 0)
    }
  }
}

function closeMove() {
  clipStore.changeClipping(false)
  if (leftFlag) {
    leftFlag = false
    emitter.emit('clip-left')
  }
  if (rightFlag) {
    rightFlag = false
    emitter.emit('clip-right')
  }
}

function registerAll() {
  window.addEventListener('mouseup', closeMove)
}

function registerLeft() {
  function mouseDown() {
    clipStore.changeClipping(true)
    leftFlag = true
    rightFlag = false
  }

  function mouseMove(e: MouseEvent) {
    if (!clipStore.clipping) return

    let offsetLeft = clipStore.clipLeft + e.movementX
    if (offsetLeft < 0) return
    clipStore.changeClipLeft(offsetLeft)
  }

  leftRef.value.addEventListener('mousedown', mouseDown)
  leftRef.value.addEventListener('mousemove', mouseMove)
}

function registerRight() {
  function mouseDown() {
    clipStore.changeClipping(true)
    leftFlag = false
    rightFlag = true
  }

  function mouseMove(e: MouseEvent) {
    if (!clipStore.clipping) return

    let offsetRight = clipStore.clipRight - e.movementX
    if (offsetRight < 0) return
    clipStore.changeClipRight(offsetRight)
  }

  rightRef.value.addEventListener('mousedown', mouseDown)
  rightRef.value.addEventListener('mousemove', mouseMove)
}
</script>

<style lang="scss" scoped>
.keyframe-box {
  min-width: calc(100% - 20px);
  height: 52px;
  margin: 10px 10px;
  background-color: #1b1e22;
}
.loading-box {
  max-width: calc(100% - 10px);
  margin: 10px 0px 10px 10px;
  height: 52px;
  position: relative;
  top: -62px;
}
.wrap {
  position: relative;
  height: 50px;
  display: inline-block;
}
.select-box {
  position: absolute;
  height: 50px;
  border: 1px solid var(--my-color);
}
.select-left {
  width: 15px;
  height: 50px;
  background-color: var(--my-color);
  position: absolute;
  background-image: url('@/assets/img/spots.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}
.select-right {
  width: 15px;
  height: 50px;
  background-color: var(--my-color);
  position: absolute;
  right: 0;
  background-image: url('@/assets/img/spots.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}

.select-left:hover,
.select-right:hover {
  cursor: ew-resize;
}
</style>
