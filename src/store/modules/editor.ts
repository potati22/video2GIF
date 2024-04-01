import { defineStore } from 'pinia'

import { EditorInstance } from '@/components/web/Editor'

export const useEditorStore = defineStore('editor', () => {
  const editorRef: Ref<EditorInstance> = ref()
  const editoring = ref(false)
  const editored = ref(false)

  const editorTextSize = ref(14)
  const editorTextData = ref({
    x: 0,
    y: 0,
    w: 100,
    h: 100,
  })

  function setEditorRef(editor: EditorInstance) {
    editorRef.value = editor
  }

  function changeEditoring(state: boolean) {
    editoring.value = state
  }

  function changeEditored(state: boolean) {
    editored.value = state
  }

  function changeEditorTextSize(step: number) {
    if (editorTextSize.value + step < 14) return
    editorTextSize.value += step
  }

  function changeEditorTextData(x: number, y: number, w: number, h: number) {
    editorTextData.value.x = x
    editorTextData.value.y = y
    editorTextData.value.w = w
    editorTextData.value.h = h
  }

  return {
    editorRef,
    editoring,
    editored,
    editorTextSize,
    setEditorRef,
    changeEditoring,
    changeEditored,
    changeEditorTextSize,
    changeEditorTextData,
  }
})
