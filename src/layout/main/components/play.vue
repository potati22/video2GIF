<template>
  <Clip
    :canvas-width="videoInstance.clientWidth"
    :canvas-height="videoInstance.clientHeight"
    :clip-width="videoInstance.clipPos.width"
    :clip-height="videoInstance.clipPos.height"
    :cliping="videoInstance.cliping"
    @change-clip-x="(x) => (videoInstance.clipPos.x = x)"
    @change-clip-y="(y) => (videoInstance.clipPos.y = y)"
  >
    <video ref="myVideo" src="/static/capture.mp4" height="500"></video>
  </Clip>
</template>

<script lang="ts" setup>
import Clip from '@/components/clip.vue'
import { useVideo } from '@/hooks/useVideo'

import type { Ref } from 'vue'

const myVideo: Ref<HTMLMediaElement> = ref()

const { videoInit, videoInstance } = useVideo()

videoInit(myVideo)
</script>
