import {
  d,
  u as i,
  c as _,
  a as l,
  w as p,
  E as u,
  b as m,
  e as g,
  o as v,
  f,
  _ as x,
} from './index-4a1dc37e.js'
/* empty css               */ const k = { class: 'row' },
  b = d({
    __name: 'index',
    setup(h) {
      const o = i()
      async function r() {
        const s = u.service({
          lock: !0,
          text: '👩🏻‍💻Working...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        let t
        o.videoSrc && URL.revokeObjectURL(o.videoSrc)
        const a = await navigator.mediaDevices
          .getDisplayMedia({ video: !0 })
          .then((e) => e)
          .catch(() => null)
        if (a) t = a
        else {
          s.close(), m({ message: '你拒绝了屏幕共享', type: 'warning' })
          return
        }
        const c = new MediaRecorder(t)
        c.addEventListener('dataavailable', (e) => {
          o.changeVideoSrc(URL.createObjectURL(e.data)),
            clearTimeout(n),
            s.close()
        }),
          c.start()
        const n = setTimeout(() => {
          c.stop(), t.getTracks().forEach((e) => e.stop())
        }, 1e4)
      }
      return (s, t) => {
        const a = g
        return (
          v(),
          _('div', k, [
            l(
              a,
              { class: 'btn', onClick: r },
              { default: p(() => [f('录制屏幕（最长10秒左右）')]), _: 1 },
            ),
          ])
        )
      }
    },
  })
const E = x(b, [['__scopeId', 'data-v-75e5d1d3']])
export { E as default }
