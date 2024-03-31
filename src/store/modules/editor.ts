import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const editoring = ref(false)
  const editored = ref(false)

  const editorText = ref('摩西哈')
  const editorTextSize = ref(14)

  function changeEditoring(state: boolean) {
    editoring.value = state
  }

  function changeEditored(state: boolean) {
    editored.value = state
  }

  function changeEditorText(str: string) {
    editorText.value = str
  }

  function changeEditorTextSize(step: number) {
    if (editorTextSize.value + step < 14) return
    editorTextSize.value += step
  }

  return {
    editoring,
    editored,
    editorText,
    editorTextSize,
    changeEditoring,
    changeEditored,
    changeEditorText,
    changeEditorTextSize,
  }
})
