import domtoimage from 'dom-to-image-more'
import { useEditorStore } from '@/store/modules/editor'

export function useEditor() {
  const editorStore = useEditorStore()

  function incEditorTextSize() {
    editorStore.changeEditorTextSize(2)
  }

  function decEditorTextSize() {
    editorStore.changeEditorTextSize(-2)
  }

  function openEditor() {
    editorStore.changeEditoring(true)
  }

  function closeEditor() {
    editorStore.changeEditoring(false)
  }

  function confirmEditorText() {
    const { x, y, w, h, bw, bh } = editorStore.editorRef.getEditorData()
    editorStore.changeEditorTextData(x, y, w, h, bw, bh)
    editorStore.changeEditoring(false)
    editorStore.changeEditored(true)
  }

  function deleteEditorText() {
    editorStore.changeEditoring(false)
    editorStore.changeEditored(false)
  }

  function divToImage() {
    const node = document.getElementById('textPic')
    domtoimage.toPng(node).then(function (dataUrl) {
      const link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = dataUrl
      link.click()
    })
  }

  return {
    editorStore,
    openEditor,
    closeEditor,
    incEditorTextSize,
    decEditorTextSize,
    confirmEditorText,
    deleteEditorText,
    divToImage,
  }
}
