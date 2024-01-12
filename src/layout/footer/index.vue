<template>
  <div ref="controlLine" class="control-line"></div>
  <Control />
  <div class="frame-box"></div>
</template>

<script lang="ts" setup>
import Control from './components/Control.vue'

const controlLine = ref()
let lineCanMove = false
let viewInnerHeight = 0

const emits = defineEmits(['changeFooterHeight'])

onMounted(() => {
  controlLine.value.addEventListener('mousedown', mouseDown)
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)
})
function mouseDown(e: MouseEvent) {
  viewInnerHeight = e.view.innerHeight
  lineCanMove = true
}

function mouseup() {
  lineCanMove = false
}

function mousemove(e: MouseEvent) {
  if (!lineCanMove) return
  if (e.clientY < 350 || viewInnerHeight - e.clientY < 250) return
  emits('changeFooterHeight', viewInnerHeight - e.clientY)
}
</script>

<style lang="scss" scoped>
.control-line {
  position: relative;
  height: 1px;
  background-color: var(--el-border-color);
}

.control-line:active,
.control-line:hover {
  background-color: #4c4d4f;
}
.control-line::before {
  width: 100%;
  height: 10px;
  cursor: ns-resize;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsla(0, 0%, 100%, 0);
}
</style>
