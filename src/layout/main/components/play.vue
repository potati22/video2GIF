<template>
  <Clip :canvas-height="videoHeight" :canvas-width="videoWidth">
    <video ref="myVideo" src="/static/capture.mp4" height="500"></video>
  </Clip>
</template>

<script lang="ts" setup>
import Clip from '@/components/clip.vue'

import type { Ref } from 'vue'

const myVideo: Ref<HTMLMediaElement> = ref()
const videoWidth = ref(0)
const videoHeight = ref(500)

onMounted(() => {
  myVideo.value.onloadedmetadata = function (e) {
    videoWidth.value = (e.target as HTMLMediaElement).clientWidth
    videoHeight.value = (e.target as HTMLMediaElement).clientHeight
  }
})
</script>
