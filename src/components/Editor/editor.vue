<template>
  <div
    v-show="editoring || editored"
    id="textPic"
    ref="outerRef"
    class="editor-outer"
  >
    <div ref="editorRef" class="editor-box" :style="editorStyle">
      <div class="content" :contenteditable="editoring">{{ editoContent }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { EditorProps } from './editor'

const props = withDefaults(defineProps<EditorProps>(), {
  editoring: false,
  editored: false,
  baseHeight: 0,
})

const outerRef: Ref<HTMLDivElement> = ref()
let editorOuterResizeObserver: ResizeObserver
// 实时数据
const outerClientWidth = ref(0)
const outerClientHeight = ref(0)

// 布局发生改变时
const scale = computed(() => {
  return outerClientHeight.value / props.baseHeight
})

const editorRef: Ref<HTMLDivElement> = ref()
const editorX = ref(0)
const editorY = ref(0)
const editorTextSize = ref(14)
const editorPadding = ref(20)
const editoContent = ref('新增文本')
const editorTextColor = ref('#fded70')
const editorTextWeight = ref('normal')

const editorStyle = computed(() => {
  return {
    '--fs': `${Math.floor(editorTextSize.value * scale.value)}px`,
    '--x': `${Math.floor(editorX.value * scale.value)}px`,
    '--y': `${Math.floor(editorY.value * scale.value)}px`,
    '--pad': `${Math.floor(editorPadding.value * scale.value)}px`,
    '--color': `${editorTextColor.value}`,
    '--weight': `${editorTextWeight.value}`,
    '--maxW': `${outerClientWidth.value}px`,
  }
})

function changeEditorTextSize(step: number) {
  editorTextSize.value += step
}

function changeEditorTextColor(color: string) {
  editorTextColor.value = color
}

function changeEditorTextWeight(value: 'normal' | 'bold') {
  editorTextWeight.value = value
}

function resetEditor() {
  editorX.value = 0
  editorY.value = 0
  editoContent.value = '新增文本'
}

defineExpose({
  changeEditorTextSize,
  changeEditorTextColor,
  changeEditorTextWeight,
  resetEditor,
})

onMounted(() => {
  let dataIsInited = false
  editorOuterResizeObserver = new ResizeObserver((e) => {
    outerClientWidth.value = Math.floor(e[0].contentRect.width)
    outerClientHeight.value = Math.floor(e[0].contentRect.height)
    if (!dataIsInited && outerClientHeight.value !== 0) {
      dataIsInited = true
      editorTextSize.value = Math.floor(
        (14 * props.baseHeight) / outerClientHeight.value,
      )
      editorPadding.value = Math.floor(
        (20 * props.baseHeight) / outerClientHeight.value,
      )
    }
  })
  editorOuterResizeObserver.observe(unref(outerRef), { box: 'content-box' })
  registerEditor()
})

onUnmounted(() => {
  editorOuterResizeObserver.unobserve(unref(outerRef))
})

function registerEditor() {
  let editorCanMove = false

  function mouseDown() {
    if (!props.editoring) return
    editorCanMove = true
  }

  function moveMove(e: MouseEvent) {
    if (!editorCanMove) return
    const x = editorX.value * scale.value + e.movementX
    const y = editorY.value * scale.value + e.movementY
    const maxX = outerClientWidth.value - editorRef.value.clientWidth - 3
    const maxY = outerClientHeight.value - editorRef.value.clientHeight - 3
    if (x <= 0 || x >= maxX || y <= 0 || y >= maxY) return
    editorX.value += Math.floor(e.movementX / scale.value)
    editorY.value += Math.floor(e.movementY / scale.value)
  }

  function moveUp() {
    editorCanMove = false
  }

  editorRef.value.addEventListener('mousedown', mouseDown)
  editorRef.value.addEventListener('mousemove', moveMove)
  window.addEventListener('mouseup', moveUp)
}
</script>

<style lang="scss" scoped>
.editor-outer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.editor-box {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--pad);
  border: 1px solid rgba(0, 0, 0, 0);
  max-width: var(--maxW);
  cursor: move;
  transform-origin: 0 0;
  transform: translate(var(--x), var(--y));
}
.editor-box:hover {
  border-color: var(--pot-text-color-yellow);
}
.content {
  line-height: 1;
  color: var(--color);
  font-weight: var(--weight);
  cursor: text;
  font-size: var(--fs);
}
</style>
