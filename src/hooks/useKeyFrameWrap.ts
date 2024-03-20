import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'

import { useTimeTrack } from '@/hooks/useTimeTrack'
import { useVideo } from '@/hooks/useVideo'

const clipping = ref(false)
const clipLeft = ref(0)
const clipRight = ref(0)

export function useKeyFrameWrap() {
  const trackStore = useTrackStore()
  const playerStore = usePlayerStore()

  const { getCurrentTimefromOffsetX, getOffsetXfromCurrentTime } =
    useTimeTrack()
  const { videoSkip } = useVideo()

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

  function restoreClip() {
    playerStore.changeStartTime(0)
    playerStore.changeEndTime(playerStore.duration)
    clipLeft.value = 0
    clipRight.value = 0
  }

  return {
    trackStore,
    playerStore,
    clipping,
    clipLeft,
    clipRight,
    changeStartTimeByClipLeft,
    changeEndTimeByClipRight,
    resetClip,
    restoreClip,
  }
}
