import {
  d as _,
  u,
  y as f,
  r as t,
  z as p,
  c as g,
  a as n,
  b as v,
  w as m,
  k as y,
  e as c,
  E as x,
  f as k,
  o as w,
  g as h,
  _ as b,
} from './index-ae618909.js'
/* empty css               */ const L = { class: 'download-box' },
  R = { class: 'row' },
  F = ['href'],
  U = _({
    __name: 'index',
    setup(B) {
      const r = u(),
        { videoToGIF: l } = f(),
        e = t(''),
        o = t()
      p(() => {
        e.value && URL.revokeObjectURL(e.value)
      })
      async function d() {
        if (!r.videoSrc) {
          c({ message: '工作区没有视频资源~', type: 'warning' })
          return
        }
        e.value && URL.revokeObjectURL(e.value)
        const a = x.service({
          lock: !0,
          text: '🏃‍♀️Loading...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
          e.value = await l()
        } catch (s) {
          c({ message: 'ffmpeg错误了', type: 'error' }), console.log(s)
          return
        } finally {
          a.close()
        }
        setTimeout(() => {
          o.value.click()
        }, 0)
      }
      return (a, s) => {
        const i = k
        return (
          w(),
          g('div', L, [
            n('div', R, [
              v(
                i,
                { class: 'btn', onClick: d },
                { default: m(() => [h('导出GIF')]), _: 1 },
              ),
              n(
                'a',
                {
                  ref_key: 'gifDownloadRef',
                  ref: o,
                  href: y(e),
                  download: 'name.gif',
                  style: { display: 'none' },
                },
                null,
                8,
                F,
              ),
            ]),
          ])
        )
      }
    },
  })
const S = b(U, [['__scopeId', 'data-v-da87e0c1']])
export { S as default }
