import { usePlayerStore } from '@/store/modules/player'
import { useTrackStore } from '@/store/modules/track'

export function useTimeTrack() {
  const playerStore = usePlayerStore()
  const trackStore = useTrackStore()

  function getCurrentTimefromOffsetX(offsetX: number) {
    if (playerStore.duration === 0) return 0
    const R = offsetX / (playerStore.duration * trackStore.spaceGap)
    return Number((R * playerStore.duration).toFixed(2))
  }

  function getOffsetXfromCurrentTime(time: number) {
    if (playerStore.duration === 0) return 0
    // 当前时间 / 总时长 = offsetX / 真实总轴长
    const R = time / playerStore.duration
    return Math.floor(R * trackStore.trackWidth)
  }

  return {
    getCurrentTimefromOffsetX,
    getOffsetXfromCurrentTime,
  }
}
