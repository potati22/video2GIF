<template>
  <div
    ref="editorRef"
    class="editor-box"
    :style="{
      '--scale': editorStore.editorScale,
      '--x': `${editorX}px`,
      '--y': `${editorY}px`,
    }"
  >
    <div class="content" contenteditable="true" @input="isInputing">
      {{ editorStore.editorText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEditorStore } from '@/store/modules/editor'

import type { Ref } from 'vue'

const editorStore = useEditorStore()

const editorRef: Ref<HTMLDivElement> = ref()
const editorX = ref(0)
const editorY = ref(0)

onMounted(() => {
  registerEditor()
})

function registerEditor() {
  let editorCanMove = false

  function mouseDown() {
    editorCanMove = true
  }

  function moveMove(e: MouseEvent) {
    if (!editorCanMove) return
    editorX.value += e.movementX
    editorY.value += e.movementY
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
.editor-box {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  max-width: 200px;
  cursor: move;
  transform-origin: 0 0;
  transform: translate(var(--x), var(--y)) scale(var(--scale));
}
.editor-box:hover {
  border: 1px solid var(--pot-text-color-yellow);
}
.content {
  line-height: 1;
  color: red;
  cursor: text;
}
</style>
