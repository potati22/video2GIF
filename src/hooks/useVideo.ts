import { usePlayerStore } from '@/store/modules/player'

export function useVideo() {
  const playerStore = usePlayerStore()

  function videoInit(video: HTMLVideoElement) {
    playerStore.setVideoRef(video)

    if (playerStore.videoRef.duration === Infinity) {
      playerStore.videoRef.ontimeupdate = () => {
        playerStore.videoRef.ontimeupdate = videoOnUpateTime
        playerStore.videoRef.currentTime = 0
        // 此时可以获取正确的duration值
        playerStore.initPlayer()
      }
      playerStore.videoRef.currentTime = 1e101
    } else {
      playerStore.initPlayer()
    }
  }

  // 监听video的currentTime变化
  function videoOnUpateTime() {
    const currentTime = Number(playerStore.videoRef.currentTime.toFixed(2))

    playerStore.changeCurrentTime(currentTime)
  }

  function videoPause() {
    playerStore.changePlaying(false)
    playerStore.videoRef.pause()
  }

  function videoPauseByAuto() {
    playerStore.changePlaying(false)
    playerStore.videoRef.pause()
    playerStore.videoRef.currentTime = playerStore.endTime
  }

  function videoPlay() {
    // 当前时间 等于 最晚时间 时, 重置当前时间为 最早时间
    if (playerStore.currentTime >= playerStore.endTime) {
      playerStore.videoRef.currentTime = playerStore.startTime
    }
    playerStore.changePlaying(true)
    playerStore.videoRef.play()
  }

  function videoSkip(time: number) {
    playerStore.videoRef.currentTime = time
  }

  return {
    playerStore,
    videoInit,
    videoPlay,
    videoPause,
    videoPauseByAuto,
    videoSkip,
  }
}
