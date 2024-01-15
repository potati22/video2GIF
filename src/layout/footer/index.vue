<template>
  <div class="footer-wrapper">
    <div ref="controlLine" class="control-line"></div>
    <Control @change-scale-level="(e) => (scaleLevel = e)" />
    <div class="panel-box">
      <TimeLine :scale-level="scaleLevel" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Control from './components/Control.vue'
import TimeLine from './components/TimeLine.vue'

const controlLine = ref()
let lineCanMove = false
let viewInnerHeight = 0
const scaleLevel = ref(3)

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
.footer-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 5px;
  left: 0;
  right: 0;
}
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

.panel-box {
  position: relative;
  flex-grow: 1;
  width: 100%;
  overflow: auto;
}
.panel-box::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}
.panel-box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #74808c;
}
</style>
