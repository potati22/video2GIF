<template>
  <Wrap
    v-model:clip-left="clipLeft"
    v-model:clip-right="clipRight"
    :wrap-width="trackStore.trackWidth"
    @clip-left-change="changeStartTimeByClipLeft"
    @clip-right-change="changeEndTimeByClipRight"
    @clip-open="() => emitter.emit('videoClipOpen')"
  >
    <slot></slot>
  </Wrap>
</template>

<script lang="ts" setup>
import Wrap from '@/components/Wrap/wrap.vue'

import emitter from '@/utils/eventBus'
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'
import { useTimeTrack } from '@/hooks/useTimeTrack'
import { useVideo } from '@/hooks/useVideo'

const trackStore = useTrackStore()
const playerStore = usePlayerStore()

const { getCurrentTimefromOffsetX, getOffsetXfromCurrentTime } = useTimeTrack()
const { videoSkip } = useVideo()

const clipLeft = ref(0)
const clipRight = ref(0)

function changeStartTimeByClipLeft() {
  const currentTime = getCurrentTimefromOffsetX(clipLeft.value)
  playerStore.changeStartTime(currentTime)
  videoSkip(currentTime)
}

function changeEndTimeByClipRight() {
  const currentTime = getCurrentTimefromOffsetX(
    trackStore.trackWidth - clipRight.value,
  )
  playerStore.changeEndTime(currentTime)
  videoSkip(currentTime)
}

function resetClip() {
  clipLeft.value = getOffsetXfromCurrentTime(playerStore.startTime)
  clipRight.value =
    trackStore.trackWidth - getOffsetXfromCurrentTime(playerStore.endTime)
}

emitter.on('videoLoaded', () => {
  resetClip()
})

emitter.on('videoClipReset', () => {
  playerStore.changeStartTime(0)
  playerStore.changeEndTime(playerStore.duration)
  clipLeft.value = 0
  clipRight.value = 0
})

watch(
  () => trackStore.scaleLevel,
  () => {
    resetClip()
  },
)
</script>
