<template>
  <div ref="wrapRef" class="wrap-box"></div>
  <div
    ref="cropRef"
    class="crop-box"
    :style="{
      transform: `translate(${wrapWidth * Rw}px, ${wrapHeight * Rh}px)`,
    }"
  >
    <div class="scale-point tl"></div>
    <div class="scale-point tm"></div>
    <div class="scale-point tr"></div>
    <div class="scale-point cl"></div>
    <div class="scale-point cr"></div>
    <div class="scale-point bl"></div>
    <div class="scale-point bm"></div>
    <div class="scale-point br"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  cropTop: {
    type: Number,
    default: 0,
  },
  cropLeft: {
    type: Number,
    default: 0,
  },
})

const cropRef = ref()
const wrapRef = ref()
let cropBoxTransX = 0
let cropBoxTransY = 0
let wrapBoxResizeObserver: ResizeObserver
const wrapWidth = ref()
const wrapHeight = ref()
const Rw = ref(0)
const Rh = ref(0)

let cropCanmove = ref(false)

onMounted(() => {
  wrapWidth.value = wrapRef.value.clientWidth
  wrapHeight.value = wrapRef.value.clientHeight
  wrapBoxResizeObserver = new ResizeObserver((e) => {
    wrapWidth.value = Math.floor(e[0].contentRect.width)
    wrapHeight.value = Math.floor(e[0].contentRect.height)
  })
  wrapBoxResizeObserver.observe(unref(wrapRef), {
    box: 'content-box',
  })
  cropRef.value.addEventListener('mousedown', mouseDown)
  cropRef.value.addEventListener('mousemove', mouseMove)
  cropRef.value.addEventListener('mouseup', mouseUp)
  console.log(cropRef)
})

function mouseDown() {
  cropCanmove.value = true
}

function mouseUp() {
  cropCanmove.value = false
}

function mouseMove(e: MouseEvent) {
  if (!cropCanmove.value) return
  const x = cropBoxTransX + e.movementX
  const y = cropBoxTransY + e.movementY
  const maxX = wrapWidth.value - cropRef.value.clientWidth
  const maxY = wrapHeight.value - cropRef.value.clientHeight
  if (x <= 0 || x >= maxX || y <= 0 || y >= maxY) return
  cropBoxTransX = x
  cropBoxTransY = y
  Rw.value = Math.round((cropBoxTransX / wrapWidth.value) * 100) / 100
  Rh.value = Math.round((cropBoxTransY / wrapHeight.value) * 100) / 100
}
</script>

<style lang="scss" scoped>
.wrap-box {
  box-sizing: content-box;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 1, 1, 0.8);
}
.crop-box {
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid var(--my-color);
}
.cliping {
  clip-path: polygon(20px 20px, 100px 20px, 100px 100px, 20px 100px);
}

.scale-point {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid var(--my-color);
  transform: translate(-50%, -50%);
  background-color: rgba(1, 1, 1, 1);
}
.scale-point:hover {
  background-color: var(--my-color);
}
.tm:hover,
.bm:hover {
  cursor: ns-resize;
}
.cl:hover,
.cr:hover {
  cursor: ew-resize;
}
.tl:hover,
.br:hover {
  cursor: nwse-resize;
}
.tr:hover,
.bl:hover {
  cursor: nesw-resize;
}
.tl,
.tm,
.tr {
  top: 0;
}
.cl,
.cr {
  top: 50%;
}
.bl,
.bm,
.br {
  top: 100%;
}
.tl,
.cl,
.bl {
  left: 0;
}
.tm,
.bm {
  left: 50%;
}
.tr,
.cr,
.br {
  left: 100%;
}
</style>
