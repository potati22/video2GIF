import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const editorText = ref('摩西哈')
  const editorScale = ref(1)

  function changeEditorText(str: string) {
    editorText.value = str
  }

  function addEditorScale(step: number) {
    editorScale.value += step
  }

  function delEditorScale(step: number) {
    editorScale.value -= step
  }

  return {
    editorText,
    editorScale,
    changeEditorText,
    addEditorScale,
    delEditorScale,
  }
})
