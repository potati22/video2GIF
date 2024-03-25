import { useClipStore } from '@/store/modules/clip'
import { useTrackStore } from '@/store/modules/track'
import { usePlayerStore } from '@/store/modules/player'

import { useTimeTrack } from '@/hooks/useTimeTrack'
import { useVideo } from '@/hooks/useVideo'

export function useKeyFrameWrap() {
  const clipStore = useClipStore()
  const trackStore = useTrackStore()
  const playerStore = usePlayerStore()

  const { getCurrentTimefromOffsetX, getOffsetXfromCurrentTime } =
    useTimeTrack()
  const { videoSkip } = useVideo()

  function changeStartTimeByClipLeft(offset: number) {
    const currentTime = getCurrentTimefromOffsetX(offset)
    playerStore.changeStartTime(currentTime)
    videoSkip(currentTime)
  }

  function changeEndTimeByClipRight(offset: number) {
    const currentTime = getCurrentTimefromOffsetX(
      trackStore.trackWidth - offset,
    )
    playerStore.changeEndTime(currentTime)
    videoSkip(currentTime)
  }

  function resetClip() {
    clipStore.clipRef.changeClipLeft(
      getOffsetXfromCurrentTime(playerStore.startTime),
    )
    clipStore.clipRef.changeClipRight(
      trackStore.trackWidth - getOffsetXfromCurrentTime(playerStore.endTime),
    )
  }

  function restoreClip() {
    playerStore.changeStartTime(0)
    playerStore.changeEndTime(playerStore.duration)
    clipStore.clipRef.changeClipLeft(0)
    clipStore.clipRef.changeClipRight(0)
  }

  return {
    clipStore,
    trackStore,
    playerStore,
    changeStartTimeByClipLeft,
    changeEndTimeByClipRight,
    resetClip,
    restoreClip,
  }
}
