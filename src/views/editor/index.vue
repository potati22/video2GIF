<template>
  <div class="text-box">
    <div class="text-block-col">
      <p>文本内容:</p>
      <textarea v-model="textContent" rows="3" maxlength="50"></textarea>
    </div>
    <div class="text-block-row">
      <span>文本颜色:</span>
      <el-color-picker v-model="textColor" />
    </div>
    <div class="text-block-row">
      <span>文本大小:</span>
      <el-input-number v-model="textSize" :min="26" :max="104" />
    </div>
    <div class="text-block-row">
      <span>文本加粗:</span>
      <PotSwitch v-model="textIsBold"></PotSwitch>
    </div>
    <PotButton v-show="!hasText" class="btn" type="yellow" @click="addText"
      >添加文本</PotButton
    >
    <PotButton v-show="hasText" class="btn" @click="deleteText"
      >删除文本</PotButton
    >
  </div>
</template>

<script lang="ts" setup>
import { Video2D } from '@/2d/Video'
import emitter from '@/utils/eventBus'

let text

const hasText = ref(false)
const textContent = ref('')
const textColor = ref('#ffffff')
const textSize = ref(26)
const textIsBold = ref(false)

emitter.on('videoLoaded', async () => {
  text = null
  hasText.value = false
  textContent.value = ''
  textColor.value = '#ffffff'
  textSize.value = 26
  textIsBold.value = false
})

watch(textContent, (newVal) => {
  if (!hasText.value) return
  text.text = newVal
})

watch(textColor, (newVal) => {
  if (!hasText.value) return
  text.style.fill = newVal
})

watch(textSize, (newVal) => {
  if (!hasText.value) return
  text.style.fontSize = newVal
})

watch(textIsBold, (newVal) => {
  if (!hasText.value) return
  text.style.fontWeight = newVal ? 'bold' : 'normal'
})

function addText() {
  if (!Video2D.isLoaded) {
    ElMessage({
      message: '工作区没有视频资源',
      type: 'warning',
    })
    return
  }
  hasText.value = true
  text = Video2D.addText(textContent.value, {
    fill: textColor.value,
    fontWeight: textIsBold.value ? 'bold' : 'normal',
    fontSize: textSize.value,
  })
}

function deleteText() {
  hasText.value = false
  Video2D.deleteText(text)
  text = null
}
</script>

<style lang="scss" scoped>
.text-box {
  width: 250px;
}
.text-block-col,
.text-block-row {
  color: #f9f9f9;
}
.text-block-col {
  margin-bottom: 15px;
  p {
    margin-bottom: 15px;
    font-weight: bold;
  }
}
.text-block-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  span {
    margin-right: 15px;
    font-weight: bold;
  }
}
textarea {
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border: 1px solid #f9f9f9;
  resize: none;
}
textarea:focus-visible {
  outline: none;
}
.btn {
  width: 100%;
}
</style>
