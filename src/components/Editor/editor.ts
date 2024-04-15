import type Editor from './editor.vue'

export interface EditorProps {
  editoring: boolean
  editored: boolean
  baseHeight: number
}

export type EditorInstance = InstanceType<typeof Editor>
