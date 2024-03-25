<template>
  <div class="footer-wrapper">
    <div ref="controlLine" class="control-line"></div>
    <Control />
    <div class="panel-box">
      <TimeLine />
      <TimeStripe />
      <KeyFrame />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Control from './Control.vue'
import TimeLine from './TimeLine.vue'
import TimeStripe from './TimeStripe.vue'
import KeyFrame from './KeyFrame.vue'

const controlLine = ref()
let lineCanMove = false

const emits = defineEmits(['changeFooterHeight'])

onMounted(() => {
  registerControlLine()
  registerAll()
})

function registerControlLine() {
  function mouseDown() {
    lineCanMove = true
  }

  controlLine.value.addEventListener('mousedown', mouseDown)
}

function registerAll() {
  function mousemove(e: MouseEvent) {
    if (!lineCanMove) return
    if (e.clientY < 350 || window.innerHeight - e.clientY < 250) return
    emits('changeFooterHeight', window.innerHeight - e.clientY)
  }

  function mouseup() {
    lineCanMove = false
  }

  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)
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
  background-color: var(--pot-border-color);
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
  width: 0px;
}
.panel-box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #74808c;
}
</style>
