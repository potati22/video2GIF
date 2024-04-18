import {
  g as y,
  d as R,
  h as k,
  u as B,
  i as T,
  j as V,
  c as I,
  k as C,
  v as h,
  l as r,
  m as s,
  a as o,
  w as t,
  n as P,
  F as q,
  b as m,
  e as D,
  p as E,
  o as N,
  f as n,
  q as F,
  r as H,
  s as W,
  _ as X,
} from './index-4a1dc37e.js'
/* empty css               */ function Y() {
  const e = y()
  function c() {
    e.changeCropping(!0)
  }
  function p() {
    e.changeCropping(!1),
      e.changeCropped(!0),
      e.changeCropData(
        e.cropRef.cropBoxTransX,
        e.cropRef.cropBoxTransY,
        e.cropRef.cropBoxTransW,
        e.cropRef.cropBoxTransH,
      )
  }
  function a() {
    e.changeCropping(!1),
      e.cropRef.changeCropBox(e.cropX, e.cropY, e.cropW, e.cropH)
  }
  function d() {
    e.changeCropping(!1),
      e.changeCropped(!1),
      e.cropRef.changeCropBox(0, 0, 400, 400),
      e.changeCropData(0, 0, 400, 400)
  }
  return {
    cropStore: e,
    cropStart: c,
    cropConfirm: p,
    cropCancel: a,
    cropReset: d,
  }
}
const j = (e) => (F('data-v-beb84fbf'), (e = e()), H(), e),
  z = { class: 'row' },
  A = { class: 'row' },
  G = j(() => s('span', null, '宽高比：', -1)),
  M = { class: 'row' },
  U = { class: 'row' },
  J = R({
    __name: 'index',
    setup(e) {
      const c = k(),
        p = B(),
        {
          cropStore: a,
          cropStart: d,
          cropConfirm: v,
          cropCancel: S,
          cropReset: f,
        } = Y()
      T(
        () => p.videoSrcAlreadyChange,
        () => {
          f()
        },
      )
      const u = V({
        get() {
          return a.cropSquare ? '1:1' : 'free'
        },
        set(_) {
          const i = _ === '1:1'
          a.changeCropSquare(i)
        },
      })
      function x() {
        if (!p.videoSrc) {
          m({ message: '工作区没有视频资源~', type: 'warning' })
          return
        }
        if (c.editoring || c.editored) {
          m({ message: '请先删除文本资源再进行裁剪', type: 'warning' })
          return
        }
        d()
      }
      return (_, i) => {
        const l = D,
          g = W,
          b = E
        return (
          N(),
          I(
            q,
            null,
            [
              C(
                s(
                  'div',
                  z,
                  [
                    o(
                      l,
                      { class: 'btn start', onClick: x },
                      { default: t(() => [n('开始裁剪')]), _: 1 },
                    ),
                  ],
                  512,
                ),
                [[h, !r(a).cropping]],
              ),
              C(
                s(
                  'div',
                  null,
                  [
                    s('div', A, [
                      G,
                      o(
                        b,
                        {
                          modelValue: r(u),
                          'onUpdate:modelValue':
                            i[0] ||
                            (i[0] = (w) => (P(u) ? (u.value = w) : null)),
                        },
                        {
                          default: t(() => [
                            o(
                              g,
                              { value: '1:1' },
                              { default: t(() => [n('1:1')]), _: 1 },
                            ),
                            o(
                              g,
                              { value: 'free' },
                              { default: t(() => [n('自由')]), _: 1 },
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['modelValue'],
                      ),
                    ]),
                    s('div', M, [
                      o(
                        l,
                        { class: 'btn cancel', onClick: r(S) },
                        { default: t(() => [n('取消')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      o(
                        l,
                        { type: 'yellow', class: 'btn apply', onClick: r(v) },
                        { default: t(() => [n('确认')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ]),
                    s('div', U, [
                      o(
                        l,
                        { class: 'btn reset', onClick: r(f) },
                        { default: t(() => [n('重置')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ]),
                  ],
                  512,
                ),
                [[h, r(a).cropping]],
              ),
            ],
            64,
          )
        )
      }
    },
  })
const O = X(J, [['__scopeId', 'data-v-beb84fbf']])
export { O as default }
