import mitt from 'mitt'

type Event = {
  videoCrop: {
    x: number
    y: number
    w: number
    h: number
  }
  videoChange: any
}

const emitter = mitt<Event>()

export default emitter
