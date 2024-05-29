import { defineStore } from 'pinia'
import { usePlayerStore } from '@/store/modules/player'

// 时间轴缩放程度配置
const timeLineSpecStore = [
  {
    timeGap: 2, // 时间间隔，s
    spaceGap: 100, // 空间间隔，即一段的长度，px
  },
  {
    timeGap: 1,
    spaceGap: 100,
  },
  {
    timeGap: 1,
    spaceGap: 200,
  },
]

const timeLineSpecMin = 0
const timeLineSpecMax = timeLineSpecStore.length - 1

export const useTrackStore = defineStore('track', () => {
  const playerStore = usePlayerStore()

  const scaleLevel = ref(1)
  const timeGap = computed(() => {
    return timeLineSpecStore[scaleLevel.value].timeGap
  })
  const spaceGap = computed(() => {
    return timeLineSpecStore[scaleLevel.value].spaceGap
  })
  const canvasWidth = computed(() => {
    return spaceGap.value * (playerStore.duration / timeGap.value + 2)
  })
  const trackWidth = computed(() => {
    return spaceGap.value * (playerStore.duration / timeGap.value)
  })

  function reduceScaleLevel() {
    if (playerStore.playing) return
    scaleLevel.value - 1 >= timeLineSpecMin && --scaleLevel.value
  }

  function addScaleLevel() {
    if (playerStore.playing) return
    scaleLevel.value + 1 <= timeLineSpecMax && ++scaleLevel.value
  }

  function getCurrentTimefromOffsetX(offsetX: number) {
    if (playerStore.duration === 0) return 0
    const R = offsetX / trackWidth.value
    return Number((R * playerStore.duration).toFixed(2))
  }

  function getOffsetXfromCurrentTime(time: number) {
    if (playerStore.duration === 0) return 0
    // 当前时间 / 总时长 = offsetX / 真实总轴长
    const R = time / playerStore.duration
    return Math.floor(R * trackWidth.value)
  }

  return {
    scaleLevel,
    timeGap,
    spaceGap,
    canvasWidth,
    trackWidth,
    reduceScaleLevel,
    addScaleLevel,
    getCurrentTimefromOffsetX,
    getOffsetXfromCurrentTime,
  }
})
