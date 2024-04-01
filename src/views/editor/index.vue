<template>
  <div v-show="!editorStore.editoring" class="row" @click="openEditor">
    <PotButton class="btn">开始编辑</PotButton>
  </div>
  <div v-show="editorStore.editoring">
    <div class="row">
      <PotButton class="btn scale" @click="incEditorTextSize">放大</PotButton>
      <PotButton class="btn scale" @click="decEditorTextSize">缩小</PotButton>
    </div>
    <div class="row">
      <PotButton type="yellow" class="btn" @click="confirmEditorText"
        >确认文本</PotButton
      >
    </div>
    <div class="row">
      <PotButton class="btn" @click="deleteEditorText">删除文本</PotButton>
    </div>
    <div class="row">
      <PotButton class="btn" @click="cancelEditorText">取消</PotButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCropStore } from '@/store/modules/crop'

import { useEditor } from '@/hooks/useEditor'

const cropStore = useCropStore()
const {
  editorStore,
  incEditorTextSize,
  decEditorTextSize,
  confirmEditorText,
  deleteEditorText,
  cancelEditorText,
} = useEditor()

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
  width: 100%;
  height: 36px;
}
.btn:nth-child(2) {
  margin-left: 10px;
}
.scale {
  width: 120px;
}
</style>
