import type Crop from './crop.vue'

export interface CropProps {
  cropSquare: boolean
  width: number
  height: number
}

export type CropEmits = {
  'update:cropSquare': [value: boolean]
}

export type CropInstance = InstanceType<typeof Crop>
