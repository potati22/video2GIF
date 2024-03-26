import { usePlayerStore } from '@/store/modules/player'

export function useVideo() {
  const playerStore = usePlayerStore()

  function videoOnLoadedMetaData() {
    if (playerStore.videoRef.duration === Infinity) {
      playerStore.videoRef.ontimeupdate = () => {
        playerStore.videoRef.ontimeupdate = videoOnUpateTime
        playerStore.videoRef.currentTime = 0
        // 此时可以获取正确的duration值
        playerStore.initPlayer(
          playerStore.videoRef.videoHeight,
          playerStore.videoRef.clientHeight,
          playerStore.videoRef.duration,
        )
      }
      playerStore.videoRef.currentTime = 1e101
    } else {
      playerStore.initPlayer(
        playerStore.videoRef.videoHeight,
        playerStore.videoRef.clientHeight,
        playerStore.videoRef.duration,
      )
    }
  }

  // 监听video的currentTime变化
  function videoOnUpateTime() {
    const currentTime = Number(playerStore.videoRef.currentTime.toFixed(2))

    if (playerStore.playing && currentTime >= playerStore.endTime) {
      videoPause()
      playerStore.videoRef.currentTime = playerStore.endTime
      return
    }

    playerStore.changeCurrentTime(currentTime)
  }

  function videoPause() {
    playerStore.changePlaying(false)
    playerStore.videoRef.pause()
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

  return { videoOnLoadedMetaData, videoPlay, videoPause, videoSkip }
}
