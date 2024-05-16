import type Crop from './crop.vue'

export interface CropProps {
  cropSquare: boolean
  contentW: number
  contentH: number
  cropX: number
  cropY: number
  cropW: number
  cropH: number
}

export type CropEmits = {
  'update:cropSquare': [value: boolean]
  'update:cropX': [value: number]
  'update:cropY': [value: number]
  'update:cropW': [value: number]
  'update:cropH': [value: number]
}

export type CropInstance = InstanceType<typeof Crop>
