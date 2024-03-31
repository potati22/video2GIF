<template>
  <div v-show="!editorStore.editoring" class="row" @click="openEditor">
    <PotButton class="btn">开始编辑</PotButton>
  </div>
  <div v-show="editorStore.editoring">
    <div class="row">
      <PotButton
        class="btn scale"
        @click="() => editorStore.changeEditorTextSize(2)"
        >放大文本</PotButton
      >
      <PotButton
        class="btn scale"
        @click="() => editorStore.changeEditorTextSize(-2)"
        >缩小文本</PotButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEditorStore } from '@/store/modules/editor'
import { useCropStore } from '@/store/modules/crop'

const editorStore = useEditorStore()
const cropStore = useCropStore()

function openEditor() {
  if (!cropStore.cropped) {
    ElMessage({
      message: '请先裁剪视频',
      type: 'warning',
    })
    return
  }
  editorStore.changeEditoring(true)
}
</script>

<style lang="scss" scoped>
.row {
  width: 250px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.btn {
  width: 250px;
  height: 36px;
}
.scale {
  width: 120px;
}
.scale:first-child {
  margin-right: 10px;
}
</style>
