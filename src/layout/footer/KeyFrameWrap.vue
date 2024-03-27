<template>
  <Wrap
    ref="wrapRef"
    :wrap-width="trackStore.trackWidth"
    @clip-left-change="changeStartTimeByClipLeft"
    @clip-right-change="changeEndTimeByClipRight"
    @clipping-change="(state) => clipStore.changeClipping(state)"
  >
    <slot></slot>
  </Wrap>
</template>

<script lang="ts" setup>
import Wrap from '@/components/web/Wrap.vue'

import { useKeyFrameWrap } from '@/hooks/useKeyFrameWrap'

import type { Ref } from 'vue'
import { WrapInstance } from '@/components/web/Wrap'

const {
  clipStore,
  trackStore,
  playerStore,
  changeStartTimeByClipLeft,
  changeEndTimeByClipRight,
  resetClip,
} = useKeyFrameWrap()

const wrapRef: Ref<WrapInstance> = ref()

onMounted(() => {
  clipStore.setClipRef(unref(wrapRef))
})

watch([() => playerStore.videoSrc, () => trackStore.scaleLevel], () => {
  resetClip()
})
</script>
