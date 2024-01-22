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

export const useTrackStore = defineStore('track', () => {
  const playerStore = usePlayerStore()

  const scaleLevel = ref(3)
  const timeGap = computed(() => {
    return timeLineSpecStore[scaleLevel.value - 1].timeGap
  })
  const spaceGap = computed(() => {
    return timeLineSpecStore[scaleLevel.value - 1].spaceGap
  })
  const canvasWidth = computed(() => {
    return spaceGap.value * (playerStore.duration / timeGap.value + 2)
  })
  const trackWidth = computed(() => {
    return spaceGap.value * (playerStore.duration / timeGap.value)
  })

  function reduceScaleLevel() {
    const level = scaleLevel.value - 1
    if (level < 1) return
    scaleLevel.value = level
  }

  function addScaleLevel() {
    const level = scaleLevel.value + 1
    if (level > 3) return
    scaleLevel.value = level
  }

  return {
    scaleLevel,
    timeGap,
    spaceGap,
    canvasWidth,
    trackWidth,
    reduceScaleLevel,
    addScaleLevel,
  }
})
