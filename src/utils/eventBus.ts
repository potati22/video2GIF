import mitt from 'mitt'

type Event = {
  videoCrop: {
    x: number
    y: number
    w: number
    h: number
  }
  videoRecorded: any
  videoLoaded: any
}

const emitter = mitt<Event>()

export default emitter
