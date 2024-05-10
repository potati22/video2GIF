import { usePlayerStore } from '@/store/modules/player'

export function useVideo() {
  const playerStore = usePlayerStore()

  async function videoCreate(videoUrl: string): Promise<true> {
    return new Promise((resolve) => {
      const video = document.createElement('video')
      playerStore.setVideoRef(video)

      video.oncanplaythrough = () => {
        video.oncanplaythrough = null

        if (video.duration === Infinity) {
          video.ontimeupdate = () => {
            video.ontimeupdate = videoOnUpateTime
            video.currentTime = 0
            // 此时可以获取正确的duration值
            playerStore.initPlayer()
          }
          video.currentTime = 1e101
        } else {
          video.ontimeupdate = videoOnUpateTime
          playerStore.initPlayer()
        }

        resolve(true)
      }

      // 先让video自动播放，保证pixi能获取到帧数据
      // 当pixi创建完texture之后，再对texture设置autoPlay为false
      video.muted = true
      video.autoplay = true
      video.src = videoUrl
    })
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
    videoCreate,
    videoPlay,
    videoPause,
    videoPauseByAuto,
    videoSkip,
  }
}
