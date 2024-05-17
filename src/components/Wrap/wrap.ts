import type Wrap from './wrap.vue'

export interface WrapProps {
  wrapWidth: number
  clipLeft: number
  clipRight: number
}

export type WrapEmits = {
  clipOpen: []
  clipLeftChange: [offset: number]
  clipRightChange: [offset: number]
  'update:clipLeft': [value: number]
  'update:clipRight': [value: number]
}

export type WrapInstance = InstanceType<typeof Wrap>
