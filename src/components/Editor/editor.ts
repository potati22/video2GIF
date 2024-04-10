import type Editor from './editor.vue'

export interface EditorProps {
  editoring: boolean
  editored: boolean
}

export type EditorInstance = InstanceType<typeof Editor>
