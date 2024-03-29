<template>
  <div v-show="!editoring" class="row" @click="openEditor">
    <PotButton class="btn start">开始编辑</PotButton>
  </div>
  <div v-show="editoring" class="row">
    <PotButton class="btn start" @click="() => editorStore.addEditorScale(0.2)"
      >放大文本</PotButton
    >
    <PotButton class="btn start" @click="() => editorStore.delEditorScale(0.2)"
      >缩小文本</PotButton
    >
  </div>
</template>

<script lang="ts" setup>
import { useEditorStore } from '@/store/modules/editor'

const editorStore = useEditorStore()

const editoring = ref(false)

function openEditor() {
  editoring.value = true
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
  height: 36px;
}
.start {
  width: 250px;
}
.apply {
  width: 120px;
}
.cancel {
  width: 120px;
  margin-right: 10px;
}
.reset {
  width: 250px;
}
</style>
