import {
  d,
  u as _,
  c as u,
  a as l,
  w as p,
  E as m,
  f as g,
  e as f,
  b as v,
  g as h,
  o as x,
  h as k,
  _ as b,
} from './index-1a4f7b41.js'
/* empty css               */ const w = { class: 'row' },
  y = d({
    __name: 'index',
    setup(R) {
      const a = _()
      async function n() {
        a.videoSrc && URL.revokeObjectURL(a.videoSrc)
        const t = m.service({
          lock: !0,
          text: '👩🏻‍💻Working...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        s()
          .then((e) => c(e))
          .then((e) => (a.changeVideoSrc(e), g.writeVideo(e)))
          .then(() => f.emit('videoRecorded', t))
          .catch(() => {
            t.close(), v({ message: '发生错误', type: 'warning' })
          })
      }
      function s() {
        return navigator.mediaDevices.getDisplayMedia({ video: !0 })
      }
      function c(t) {
        return new Promise((e) => {
          const o = new MediaRecorder(t)
          o.addEventListener('dataavailable', (r) => {
            clearTimeout(i), e(URL.createObjectURL(r.data))
          }),
            setTimeout(() => {
              o.start()
            }, 1e3)
          const i = setTimeout(() => {
            o.stop(), t.getTracks().forEach((r) => r.stop())
          }, 11e3)
        })
      }
      return (t, e) => {
        const o = h
        return (
          x(),
          u('div', w, [
            l(
              o,
              { class: 'btn', onClick: n },
              { default: p(() => [k('录制屏幕（最长10秒左右）')]), _: 1 },
            ),
          ])
        )
      }
    },
  })
const T = b(y, [['__scopeId', 'data-v-e074903d']])
export { T as default }
