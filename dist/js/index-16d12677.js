import {
  d,
  u as _,
  c as l,
  a as u,
  w as p,
  E as m,
  e as g,
  b as v,
  f,
  o as x,
  g as k,
  _ as h,
} from './index-2989de58.js'
/* empty css               */ const b = { class: 'row' },
  R = d({
    __name: 'index',
    setup(w) {
      const a = _()
      function c() {
        a.videoSrc && URL.revokeObjectURL(a.videoSrc)
        const e = m.service({
          lock: !0,
          text: '👩🏻‍💻Working...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        s()
          .then((t) => n(t))
          .then((t) => {
            a.changeVideoSrc(t), g.emit('videoRecorded', e)
          })
          .catch(() => {
            e.close(), v({ message: '发生错误', type: 'warning' })
          })
      }
      function s() {
        return navigator.mediaDevices.getDisplayMedia({ video: !0 })
      }
      function n(e) {
        return new Promise((t) => {
          const o = new MediaRecorder(e)
          o.addEventListener('dataavailable', (r) => {
            clearTimeout(i), t(URL.createObjectURL(r.data))
          }),
            setTimeout(() => {
              o.start()
            }, 1e3)
          const i = setTimeout(() => {
            o.stop(), e.getTracks().forEach((r) => r.stop())
          }, 11e3)
        })
      }
      return (e, t) => {
        const o = f
        return (
          x(),
          l('div', b, [
            u(
              o,
              { class: 'btn', onClick: c },
              { default: p(() => [k('录制屏幕（最长10秒左右）')]), _: 1 },
            ),
          ])
        )
      }
    },
  })
const L = h(R, [['__scopeId', 'data-v-7a209dd3']])
export { L as default }
