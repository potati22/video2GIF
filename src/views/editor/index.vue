<template>
  <div v-show="!editorStore.editoring" class="row" @click="openEditorCover">
    <PotButton class="btn">开始编辑</PotButton>
  </div>
  <div v-show="editorStore.editoring">
    <div class="row">
      <span class="label">字体大小：</span>
      <PotButton class="btn scale" @click="incEditorTextSize">放大</PotButton>
      <PotButton class="btn scale" @click="decEditorTextSize">缩小</PotButton>
    </div>
    <div class="row">
      <span class="label">字体加粗：</span>
      <PotSwitch v-model="textIsBold"></PotSwitch>
    </div>
    <div class="row">
      <span class="label">字体颜色：</span>
      <el-color-picker v-model="textColor" />
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
      <PotButton class="btn" @click="closeEditor">取消</PotButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCropStore } from '@/store/modules/crop'
import { useEditor } from '@/hooks/useEditor'

const cropStore = useCropStore()
const {
  editorStore,
  openEditor,
  closeEditor,
  incEditorTextSize,
  decEditorTextSize,
  changeEditorTextWeight,
  changeEditorTextColor,
  confirmEditorText,
  deleteEditorText,
} = useEditor()

const textIsBold = ref(false)
watch(textIsBold, (newVal) => {
  const value = newVal ? 'bold' : 'normal'
  changeEditorTextWeight(value)
})

const textColor = ref('')
watch(textColor, (newVal) => {
  changeEditorTextColor(newVal)
})

function openEditorCover() {
  if (!cropStore.cropped) {
    ElMessage({
      message: '请先裁剪视频',
      type: 'warning',
    })
    return
  }
  openEditor()
}
</script>

<style lang="scss" scoped>
.row {
  width: 250px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.label {
  margin-right: 10px;
}
.btn {
  width: 100%;
  height: 36px;
}
.btn:nth-of-type(2) {
  margin-left: 10px;
}
.scale {
  width: 80px;
}
</style>
