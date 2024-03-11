import {
  d as i,
  u as d,
  c as _,
  a as l,
  b as p,
  w as u,
  E as g,
  e as m,
  f as v,
  o as b,
  g as f,
  _ as x,
} from './index-ae618909.js'
/* empty css               */ const h = { class: 'record-box' },
  k = { class: 'row' },
  y = i({
    __name: 'index',
    setup(w) {
      const o = d()
      async function r() {
        const s = g.service({
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
        const a = v
        return (
          b(),
          _('div', h, [
            l('div', k, [
              p(
                a,
                { class: 'btn', onClick: r },
                { default: u(() => [f('录制屏幕（最长10秒左右）')]), _: 1 },
              ),
            ]),
          ])
        )
      }
    },
  })
const R = x(y, [['__scopeId', 'data-v-8b504bc7']])
export { R as default }
