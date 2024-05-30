<template>
  <el-dialog
    v-model="isDialogShow"
    width="500"
    title="调整GIF"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <div class="gif-box">
      <div class="gif-row">
        <span class="text">调整尺寸：</span>
        <el-slider v-model="scale" :step="10" :min="minScale" :max="100" />
      </div>
      <div class="gif-row">
        <span class="text">原始尺寸：</span>
        <span>{{ originalW }} X {{ originalH }}</span>
      </div>
      <div class="gif-row">
        <span class="text">最终尺寸：</span>
        <span>{{ finalW }} X {{ finalH }}</span>
      </div>
    </div>
    <template #footer>
      <div>
        <PotButton type="yellow" style="margin-right: 20px" @click="confirm"
          >确定</PotButton
        >
        <PotButton @click="cancel">取消</PotButton>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'

interface DialogProps {
  originalW: number
  originalH: number
}

type DialogEmits = {
  confirm: [w: number, h: number]
  cancel: []
}

const props = withDefaults(defineProps<DialogProps>(), {
  originalW: 0,
  originalH: 0,
})

const emits = defineEmits<DialogEmits>()

const isDialogShow = defineModel<boolean>('isDialogShow')

const scale = ref(100)
const minScale = computed(() => {
  return ((150 / props.originalH) * 100) << 0
})
const finalW = computed(() => {
  return (props.originalW * (scale.value / 100)) << 0
})
const finalH = computed(() => {
  return (props.originalH * (scale.value / 100)) << 0
})

function confirm() {
  emits('confirm', finalW.value, finalH.value)
  isDialogShow.value = false
}

function cancel() {
  emits('cancel')
  isDialogShow.value = false
}
</script>

<style lang="scss" scoped>
.gif-box {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.gif-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.text {
  font-weight: bold;
  margin-right: 20px;
}
.el-slider {
  width: 70%;
  --el-slider-main-bg-color: var(--pot-color-yellow);
}
</style>
