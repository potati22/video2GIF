import { useEditorStore } from '@/store/modules/editor'

export function useEditor() {
  const editorStore = useEditorStore()

  function incEditorTextSize() {
    editorStore.changeEditorTextSize(2)
  }

  function decEditorTextSize() {
    editorStore.changeEditorTextSize(-2)
  }

  function confirmEditorText() {
    const { x, y, w, h } = editorStore.editorRef.getEditorData()
    editorStore.changeEditorTextData(x, y, w, h)
    editorStore.changeEditoring(false)
    editorStore.changeEditored(true)
  }

  function deleteEditorText() {
    editorStore.changeEditoring(false)
    editorStore.changeEditored(false)
  }

  function cancelEditorText() {
    editorStore.changeEditoring(false)
  }

  return {
    editorStore,
    incEditorTextSize,
    decEditorTextSize,
    confirmEditorText,
    deleteEditorText,
    cancelEditorText,
  }
}
