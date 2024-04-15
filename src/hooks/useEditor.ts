import { useEditorStore } from '@/store/modules/editor'

export function useEditor() {
  const editorStore = useEditorStore()

  function incEditorTextSize() {
    editorStore.editorRef.changeEditorTextSize(2)
  }

  function decEditorTextSize() {
    editorStore.editorRef.changeEditorTextSize(-2)
  }

  function changeEditorTextWeight(value: 'normal' | 'bold') {
    editorStore.editorRef.changeEditorTextWeight(value)
  }

  function changeEditorTextColor(color: string) {
    editorStore.editorRef.changeEditorTextColor(color)
  }

  function openEditor() {
    editorStore.changeEditoring(true)
  }

  function closeEditor() {
    editorStore.changeEditoring(false)
  }

  function confirmEditorText() {
    editorStore.changeEditoring(false)
    editorStore.changeEditored(true)
  }

  function deleteEditorText() {
    editorStore.changeEditoring(false)
    editorStore.changeEditored(false)
    editorStore.editorRef.resetEditor()
  }

  return {
    editorStore,
    openEditor,
    closeEditor,
    incEditorTextSize,
    decEditorTextSize,
    changeEditorTextWeight,
    changeEditorTextColor,
    confirmEditorText,
    deleteEditorText,
  }
}
