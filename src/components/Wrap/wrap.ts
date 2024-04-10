import type Wrap from './wrap.vue'

export interface WrapProps {
  wrapWidth: number
}

export type WrapEmits = {
  clippingChange: [state: boolean]
  clipLeftChange: [offset: number]
  clipRightChange: [offset: number]
}

export type WrapInstance = InstanceType<typeof Wrap>
