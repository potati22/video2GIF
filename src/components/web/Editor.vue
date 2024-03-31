<template>
  <div v-show="editorStore.editoring" ref="outerRef" class="editor-outer">
    <div
      ref="editorRef"
      class="editor-box"
      :style="{
        '--fs': `${editorStore.editorTextSize}px`,
        '--maxW': `${outerWidth}px`,
        '--maxH': `${outerHeight}px`,
        '--scale': scale,
        '--x': `${editorX}px`,
        '--y': `${editorY}px`,
      }"
    >
      <div class="content" contenteditable="true" @input="isInputing">
        {{ editorStore.editorText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEditorStore } from '@/store/modules/editor'

import type { Ref } from 'vue'

const editorStore = useEditorStore()

const outerRef: Ref<HTMLDivElement> = ref()
let editorOuterResizeObserver: ResizeObserver
const outerWidth = ref(0)
const outerHeight = ref(0)
let outerHeight1 = 0
const scale = computed(() => {
  return outerHeight.value / outerHeight1
})

const editorRef: Ref<HTMLDivElement> = ref()
const editorX = ref(0)
const editorY = ref(0)

onMounted(() => {
  let flag
  editorOuterResizeObserver = new ResizeObserver((e) => {
    if (editorStore.editoring && !flag) {
      outerHeight1 = Math.floor(e[0].contentRect.height)
      flag = true
      console.log(outerHeight1)
    }
    outerWidth.value = Math.floor(e[0].contentRect.width)
    outerHeight.value = Math.floor(e[0].contentRect.height)
  })
  editorOuterResizeObserver.observe(unref(outerRef), { box: 'content-box' })
  registerEditor()
})

function registerEditor() {
  let editorCanMove = false

  function mouseDown() {
    editorCanMove = true
  }

  function moveMove(e: MouseEvent) {
    if (!editorCanMove) return
    const x = editorX.value + e.movementX
    const y = editorY.value + e.movementY
    const maxX = outerWidth.value - editorRef.value.clientWidth - 3
    const maxY = outerHeight.value - editorRef.value.clientHeight - 3
    if (x <= 0 || x >= maxX || y <= 0 || y >= maxY) return
    editorX.value = x
    editorY.value = y
  }

  function moveUp() {
    editorCanMove = false
  }

  editorRef.value.addEventListener('mousedown', mouseDown)
  editorRef.value.addEventListener('mousemove', moveMove)
  window.addEventListener('mouseup', moveUp)
}

function isInputing(e) {
  editorStore.changeEditorText(e.target.innerText)
}
</script>

<style lang="scss" scoped>
.editor-outer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.editor-box {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  max-width: var(--maxW);
  max-height: var(--maxH);
  cursor: move;
  transform-origin: 0 0;
  transform: scale(var(--scale)) translate(var(--x), var(--y));
}
.editor-box:hover {
  border-color: var(--pot-text-color-yellow);
}
.content {
  line-height: 1;
  color: red;
  cursor: text;
  font-size: var(--fs);
}
</style>
