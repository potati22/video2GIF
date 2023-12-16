import { defineStore } from 'pinia'

// 用于记录视频裁剪起始位置+尺寸
interface IClipPositionStore {
  x: number
  y: number
  width: number
  height: number
  cliping: boolean // 是否开启裁剪功能
}

export const useClipPositionStore = defineStore('clip-position', {
  state: (): IClipPositionStore => {
    return {
      x: 0,
      y: 0,
      width: 150,
      height: 150,
      cliping: false,
    }
  },
  getters: {},
  actions: {
    changeClipPosX(x: number) {
      this.x = x
    },
    changeClipPosY(y: number) {
      this.y = y
    },
    changeCliping(flag: boolean) {
      this.cliping = flag
    },
  },
})
