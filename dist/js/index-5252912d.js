import {
  d as _,
  u,
  g as f,
  aN as p,
  K as n,
  X as g,
  c as m,
  a as v,
  w as y,
  m as b,
  l as w,
  b as o,
  E as x,
  e as k,
  o as h,
  f as L,
  _ as R,
} from './index-4a1dc37e.js'
/* empty css               */ const S = { class: 'row' },
  F = ['href'],
  U = _({
    __name: 'index',
    setup(B) {
      const r = u(),
        c = f(),
        { videoToGIF: l } = p(),
        e = n(''),
        a = n()
      g(() => {
        e.value && URL.revokeObjectURL(e.value)
      })
      async function i() {
        if (!r.videoSrc) {
          o({ message: '工作区没有视频资源~', type: 'warning' })
          return
        }
        if (!c.cropped) {
          o({ message: '先去裁剪吧', type: 'warning' })
          return
        }
        e.value && URL.revokeObjectURL(e.value)
        const t = x.service({
          lock: !0,
          text: '🏃‍♀️Loading...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
          e.value = await l()
        } catch (s) {
          o({ message: 'ffmpeg错误了', type: 'error' }), console.log(s)
          return
        } finally {
          t.close()
        }
        setTimeout(() => {
          a.value.click()
        }, 0)
      }
      return (t, s) => {
        const d = k
        return (
          h(),
          m('div', S, [
            v(
              d,
              { class: 'btn', onClick: i },
              { default: y(() => [L('导出GIF')]), _: 1 },
            ),
            b(
              'a',
              {
                ref_key: 'gifDownloadRef',
                ref: a,
                href: w(e),
                download: 'name.gif',
                style: { display: 'none' },
              },
              null,
              8,
              F,
            ),
          ])
        )
      }
    },
  })
const I = R(U, [['__scopeId', 'data-v-77ccb33b']])
export { I as default }
