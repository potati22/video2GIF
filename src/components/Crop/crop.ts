import type Crop from './crop.vue'

export interface CropProps {
  cropping: boolean
  cropped: boolean
  baseHeight: number
}

export type CropEmits = {
  cropSquareChange: [value: boolean]
}

export type CropInstance = InstanceType<typeof Crop>
