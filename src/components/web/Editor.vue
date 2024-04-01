<template>
  <div v-show="editoring || editored" ref="outerRef" class="editor-outer">
    <div
      ref="editorRef"
      class="editor-box"
      :style="{
        '--fs': `${editorTextSize * scale}px`,
        '--maxW': `${outerClientWidth}px`,
        '--maxH': `${outerClientHeight}px`,
        '--pad': `${20 * scale}px`,
        '--x': `${editorX * scale}px`,
        '--y': `${editorY * scale}px`,
      }"
    >
      <div class="content" :contenteditable="editoring">新增文本</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'

const props = defineProps({
  editoring: {
    type: Boolean,
    default: false,
  },
  editored: {
    type: Boolean,
    default: false,
  },
  editorTextSize: {
    type: Number,
    default: 14,
  },
})

const outerRef: Ref<HTMLDivElement> = ref()
let editorOuterResizeObserver: ResizeObserver
// 真实数据
const outerWidth = ref(100)
const outerHeight = ref(100)
// 展示数据
const outerClientWidth = ref(0)
const outerClientHeight = ref(0)

// 布局发生改变时
const scale = computed(() => {
  return outerClientHeight.value / outerHeight.value
})

const editorRef: Ref<HTMLDivElement> = ref()
const editorX = ref(0)
const editorY = ref(0)

function getEditorData() {
  return {
    x: editorX.value,
    y: editorY.value,
    w: editorRef.value.clientWidth,
    h: editorRef.value.clientHeight,
  }
}

defineExpose({
  getEditorData,
})

onMounted(() => {
  let flag
  editorOuterResizeObserver = new ResizeObserver((e) => {
    if (props.editoring && !flag) {
      outerHeight.value = Math.floor(e[0].contentRect.height)
      outerWidth.value = Math.floor(e[0].contentRect.width)
      flag = true
      console.log('??')
    }
    outerClientWidth.value = Math.floor(e[0].contentRect.width)
    outerClientHeight.value = Math.floor(e[0].contentRect.height)
  })
  editorOuterResizeObserver.observe(unref(outerRef), { box: 'content-box' })
  registerEditor()
})

function registerEditor() {
  let editorCanMove = false

  function mouseDown() {
    if (!props.editoring) return
    editorCanMove = true
  }

  function moveMove(e: MouseEvent) {
    if (!editorCanMove) return
    const x = editorX.value + e.movementX
    const y = editorY.value + e.movementY
    const maxX = outerClientWidth.value - editorRef.value.clientWidth - 3
    const maxY = outerClientHeight.value - editorRef.value.clientHeight - 3
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
  padding: var(--pad);
  border: 1px solid rgba(0, 0, 0, 0);
  max-width: var(--maxW);
  max-height: var(--maxH);
  cursor: move;
  transform-origin: 0 0;
  transform: translate(var(--x), var(--y));
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
