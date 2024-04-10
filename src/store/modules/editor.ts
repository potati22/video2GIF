import { defineStore } from 'pinia'

import { EditorInstance } from '@/components/Editor/editor'

export const useEditorStore = defineStore('editor', () => {
  const editorRef: Ref<EditorInstance> = ref()
  const editoring = ref(false)
  const editored = ref(false)

  function setEditorRef(editor: EditorInstance) {
    editorRef.value = editor
  }

  function changeEditoring(state: boolean) {
    editoring.value = state
  }

  function changeEditored(state: boolean) {
    editored.value = state
  }

  return {
    editorRef,
    editoring,
    editored,
    setEditorRef,
    changeEditoring,
    changeEditored,
  }
})
