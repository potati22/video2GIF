import type Crop from './crop.vue'

export interface CropProps {
  cropping: boolean
  cropped: boolean
  cropSquare: boolean
  baseHeight: number
}

export type CropEmits = {
  'update:cropSquare': [value: boolean]
}

export type CropInstance = InstanceType<typeof Crop>
