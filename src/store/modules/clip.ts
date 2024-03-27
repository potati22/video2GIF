import { defineStore } from 'pinia'

import { WrapInstance } from '@/components/web/Wrap'

export const useClipStore = defineStore('clip', () => {
  const clipRef: Ref<WrapInstance> = ref()

  const clipping = ref(false)

  function setClipRef(clip: WrapInstance) {
    clipRef.value = clip
  }

  function changeClipping(state: boolean) {
    clipping.value = state
  }

  return { clipRef, clipping, setClipRef, changeClipping }
})
