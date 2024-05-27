export class FFCommand {
  // 生成视频关键帧
  genKeyFrame(videoName: string, keyFrameFolder: string) {
    return [
      '-i',
      videoName,
      '-vf',
      'fps=1/0.5',
      '-s',
      '100x50',
      `${keyFrameFolder}/frame-%02d.jpeg`,
    ]
  }

  // 视频裁剪尺寸、时长，生成GIF
  videoToGIF(
    videoName: string,
    start: number,
    end: number,
    w: number,
    h: number,
    x: number,
    y: number,
    gifName: string,
  ) {
    return [
      '-ss', // 开始时间
      `${start}`,
      '-t', // 持续时间
      `${end - start}`,
      '-i', // 指定视频
      videoName,
      '-vf', // 编辑操作
      `crop=${w}:${h}:${x}:${y}`,
      gifName,
    ]
  }

  // GIF增加图片水印
  watermarkInGIF(
    gifInputName: string,
    wmName: string,
    wmX: number,
    wmY: number,
    gifOutputName: string,
  ) {
    return [
      '-i',
      gifInputName,
      '-i',
      wmName,
      '-filter_complex', // 滤镜
      `overlay=${wmX}:${wmY}`,
      gifOutputName,
    ]
  }

  // GIF调整大小
  resizeGIF(gifInputName: string, w: number, h: number, gifOutputName: string) {
    return ['-i', gifInputName, '-s', `${w}x${h}`, gifOutputName]
  }
}
