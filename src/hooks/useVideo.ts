import { usePlayerStore } from '@/store/modules/player'

import type { Ref } from 'vue'

const video: Ref<HTMLVideoElement> = ref(null)

export function useVideo() {
  const playerStore = usePlayerStore()

  // onMounted使用
  function initVideo(videoRef: Ref<HTMLVideoElement>) {
    video.value = videoRef?.value
    video.value.onloadedmetadata = videoOnLoadedMetaData
  }

  function videoOnLoadedMetaData() {
    if (video.value.duration === Infinity) {
      video.value.ontimeupdate = () => {
        video.value.ontimeupdate = videoOnUpateTime
        video.value.currentTime = 0
        // 此时可以获取正确的duration值
        playerStore.initPlayer(
          video.value.videoHeight,
          video.value.clientHeight,
          video.value.duration,
        )
      }
      video.value.currentTime = 1e101
    } else {
      playerStore.initPlayer(
        video.value.videoHeight,
        video.value.clientHeight,
        video.value.duration,
      )
    }
  }

  // 监听video的currentTime变化
  function videoOnUpateTime() {
    const currentTime = Number(video.value.currentTime.toFixed(2))

    if (playerStore.playing && currentTime >= playerStore.endTime - 0.15) {
      videoPause()
      video.value.currentTime = playerStore.endTime
      return
    }

    playerStore.changeCurrentTime(currentTime)
  }

  function videoPause() {
    if (!video.value) {
      console.error('请传入videoRef')
      return
    }
    playerStore.changePlaying(false)
    video.value.pause()
  }

  function videoPlay() {
    if (!video.value) {
      console.error('请传入videoRef')
      return
    }
    // 当前时间 等于 最晚时间 时, 重置当前时间为 最早时间
    if (playerStore.currentTime >= playerStore.endTime) {
      video.value.currentTime = playerStore.startTime
    }
    playerStore.changePlaying(true)
    video.value.play()
  }

  function videoSkip(time: number) {
    if (!video.value) {
      console.error('请传入videoRef')
      return
    }
    video.value.currentTime = time
  }

  return {
    video,
    initVideo,
    videoPlay,
    videoPause,
    videoSkip,
  }
}
