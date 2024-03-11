import {
  d as g,
  h as y,
  u as O,
  r as k,
  i as u,
  c as N,
  j as p,
  v as f,
  k as d,
  a as e,
  b as t,
  w as l,
  l as P,
  e as E,
  m as o,
  C as T,
  n as V,
  p as I,
  q,
  f as B,
  s as z,
  o as A,
  g as r,
  t as U,
  x as M,
  S as j,
  _ as D,
} from './index-f9d078f6.js'
/* empty css               */ const F = (a) => (
    U('data-v-200037d8'), (a = a()), M(), a
  ),
  L = { class: 'cut-box' },
  Q = { class: 'row' },
  G = { class: 'row' },
  H = F(() => e('span', null, '宽高比：', -1)),
  J = { class: 'row' },
  K = { class: 'row' },
  W = g({
    __name: 'index',
    setup(a) {
      const n = y(),
        m = O(),
        s = k('free'),
        v = [
          { label: '1:1', value: '1:1', id: 1 },
          { label: '自由', value: 'free', id: 0 },
        ]
      u(s, (c) => {
        c === '1:1' && w()
      }),
        u(
          () => n.square,
          (c) => {
            c === !1 && (s.value = 'free')
          },
        )
      function C() {
        if (!m.videoSrc) {
          E({ message: '工作区没有视频资源~', type: 'warning' })
          return
        }
        o.emit(T)
      }
      function R() {
        o.emit(V)
      }
      function S() {
        o.emit(I)
      }
      function h() {
        o.emit(q)
      }
      function w() {
        n.changeSquare(!0), o.emit(j)
      }
      return (c, _) => {
        const i = B,
          x = z
        return (
          A(),
          N('div', L, [
            p(
              e(
                'div',
                Q,
                [
                  t(
                    i,
                    { class: 'btn start', onClick: C },
                    { default: l(() => [r('开始裁剪')]), _: 1 },
                  ),
                ],
                512,
              ),
              [[f, !d(n).cropping]],
            ),
            p(
              e(
                'div',
                null,
                [
                  e('div', G, [
                    H,
                    t(
                      x,
                      {
                        modelValue: d(s),
                        'onUpdate:modelValue':
                          _[0] || (_[0] = (b) => (P(s) ? (s.value = b) : null)),
                        name: 'sizeRadio',
                        options: v,
                      },
                      null,
                      8,
                      ['modelValue'],
                    ),
                  ]),
                  e('div', J, [
                    t(
                      i,
                      { class: 'btn cancel', onClick: S },
                      { default: l(() => [r('取消')]), _: 1 },
                    ),
                    t(
                      i,
                      { type: 'yellow', class: 'btn apply', onClick: R },
                      { default: l(() => [r('确认')]), _: 1 },
                    ),
                  ]),
                  e('div', K, [
                    t(
                      i,
                      { class: 'btn reset', onClick: h },
                      { default: l(() => [r('重置')]), _: 1 },
                    ),
                  ]),
                ],
                512,
              ),
              [[f, d(n).cropping]],
            ),
          ])
        )
      }
    },
  })
const Z = D(W, [['__scopeId', 'data-v-200037d8']])
export { Z as default }
