import {
  d as q,
  i as M,
  j as B,
  r as p,
  k as j,
  o as U,
  c as V,
  l as z,
  m as l,
  a as R,
  p as b,
  q as v,
  s as A,
  t as G,
  v as J,
  _ as N,
  u as K,
  w as W,
  x as C,
  F as O,
  b as Q,
  g as Z,
  h as L,
  e as ee,
} from './index-f246c644.js'
import { E as oe } from './el-overlay-9d7012cf.js'
/* empty css               */ import './focus-trap-c8be6e9c.js'
const te = (g) => (G('data-v-09b34ddf'), (g = g()), J(), g),
  ne = te(() => l('div', { class: 'wrap-box' }, null, -1)),
  re = q({
    __name: 'crop',
    props: {
      cropSquare: { type: Boolean, default: !1 },
      contentW: { default: 0 },
      contentH: { default: 0 },
      cropX: { default: 0 },
      cropY: { default: 0 },
      cropW: { default: 200 },
      cropH: { default: 200 },
    },
    emits: [
      'update:cropSquare',
      'update:cropX',
      'update:cropY',
      'update:cropW',
      'update:cropH',
    ],
    setup(g, { emit: h }) {
      const e = g,
        c = h,
        E = M(() => ({
          '--x': `${e.cropX}px`,
          '--y': `${e.cropY}px`,
          '--w': `${e.cropW}px`,
          '--h': `${e.cropH}px`,
          '--x-w': `${e.cropX + e.cropW}px`,
          '--y-h': `${e.cropY + e.cropH}px`,
        })),
        _ = M(() => ({
          transform: `translate(${e.cropX}px, ${e.cropY}px)`,
          width: `${e.cropW}px`,
          height: `${e.cropH}px`,
        }))
      B(
        () => e.cropSquare,
        (a) => {
          a &&
            (e.cropW > e.cropH
              ? c('update:cropW', e.cropH)
              : c('update:cropH', e.cropW))
        },
      )
      const $ = p(),
        i = p(),
        d = p(),
        m = p(),
        f = p(),
        u = p()
      j(() => {
        F(), H(), n(), P(), T(), D()
      })
      let x = !1,
        X = !1
      function k() {
        X = !0
      }
      function y() {
        X = !1
      }
      function t() {
        ;(x = !0), c('update:cropSquare', !1)
      }
      function w() {
        x = !1
      }
      function H() {
        function a(s) {
          if (!X) return
          const o = e.cropX + s.movementX,
            r = e.cropY + s.movementY,
            Y = e.contentW - e.cropW,
            S = e.contentH - e.cropH
          o <= 0 ||
            o >= Y ||
            r <= 0 ||
            r >= S ||
            (c('update:cropX', o), c('update:cropY', r))
        }
        i.value.addEventListener('mousedown', k),
          i.value.addEventListener('mousemove', a)
      }
      function n() {
        function a(s) {
          if (!x) return
          const o = e.cropH - s.movementY,
            r = e.cropY + s.movementY,
            Y = e.contentH,
            S = e.contentH - o
          o < 0 ||
            o >= Y ||
            r < 0 ||
            r >= S ||
            (c('update:cropH', o), c('update:cropY', r))
        }
        d.value.addEventListener('mousedown', t),
          d.value.addEventListener('mousemove', a)
      }
      function P() {
        function a(s) {
          if (!x) return
          const o = e.cropH + s.movementY,
            r = e.contentH - e.cropY
          o < 0 || o >= r || c('update:cropH', o)
        }
        m.value.addEventListener('mousedown', t),
          m.value.addEventListener('mousemove', a)
      }
      function T() {
        function a(s) {
          if (!x) return
          const o = e.cropW - s.movementX,
            r = e.cropX + s.movementX,
            Y = e.contentW,
            S = e.contentW - o
          o < 0 ||
            o >= Y ||
            r < 0 ||
            r >= S ||
            (c('update:cropW', o), c('update:cropX', r))
        }
        f.value.addEventListener('mousedown', t),
          f.value.addEventListener('mousemove', a)
      }
      function D() {
        function a(s) {
          if (!x) return
          const o = e.cropW + s.movementX,
            r = e.contentW - e.cropX
          o < 0 || o >= r || c('update:cropW', o)
        }
        u.value.addEventListener('mousedown', t),
          u.value.addEventListener('mousemove', a)
      }
      function F() {
        window.addEventListener('mouseup', () => {
          y(), w()
        })
      }
      return (a, s) => {
        const o = A
        return (
          U(),
          V(
            'div',
            { ref_key: 'wrapRef', ref: $, class: 'wrap-outer', style: b(v(E)) },
            [
              z(a.$slots, 'default', {}, void 0, !0),
              ne,
              l(
                'div',
                { class: 'crop-box', style: b(v(_)) },
                [
                  l(
                    'div',
                    { ref_key: 'moveRef', ref: i, class: 'move-point' },
                    [R(o, { 'icon-class': 'move' })],
                    512,
                  ),
                  l(
                    'div',
                    { ref_key: 'tmRef', ref: d, class: 'scale-point tm' },
                    null,
                    512,
                  ),
                  l(
                    'div',
                    { ref_key: 'lmRef', ref: f, class: 'scale-point lm' },
                    null,
                    512,
                  ),
                  l(
                    'div',
                    { ref_key: 'rmRef', ref: u, class: 'scale-point rm' },
                    null,
                    512,
                  ),
                  l(
                    'div',
                    { ref_key: 'bmRef', ref: m, class: 'scale-point bm' },
                    null,
                    512,
                  ),
                ],
                4,
              ),
            ],
            4,
          )
        )
      }
    },
  })
const ce = N(re, [['__scopeId', 'data-v-09b34ddf']]),
  ae = { class: 'row' },
  se = { class: 'crop-box' },
  pe = ['src'],
  I = 300,
  ue = q({
    __name: 'index',
    setup(g) {
      const h = K(),
        e = p(!1),
        c = p(''),
        E = p(0)
      let _ = 1
      B(e, (y) => {
        if (!y) return
        _ = I / h.videoRef.videoHeight
        const t = $(
          h.videoRef,
          h.videoRef.videoWidth,
          h.videoRef.videoHeight,
          _,
        )
        ;(c.value = t.src), (E.value = t.width)
      })
      function $(y, t, w, H) {
        const n = document.createElement('canvas')
        return (
          (n.width = t * H),
          (n.height = w * H),
          n.getContext('2d').drawImage(y, 0, 0, n.width, n.height),
          { src: n.toDataURL('image/png'), width: n.width, height: n.height }
        )
      }
      const i = p(0),
        d = p(0),
        m = p(200),
        f = p(200),
        u = { x: 0, y: 0, w: 200, h: 200 }
      function x() {
        if (!h.videoSrc) {
          Q({ message: '工作区没有视频资源', type: 'warning' })
          return
        }
        e.value = !0
      }
      function X() {
        ;(e.value = !1),
          ee.emit('videoCrop', {
            x: (i.value / _) << 0,
            y: (d.value / _) << 0,
            w: (m.value / _) << 0,
            h: (f.value / _) << 0,
          }),
          (u.x = i.value),
          (u.y = d.value),
          (u.w = m.value),
          (u.h = f.value)
      }
      function k() {
        ;(e.value = !1),
          (i.value = u.x),
          (d.value = u.y),
          (m.value = u.w),
          (f.value = u.h)
      }
      return (y, t) => {
        const w = Z,
          H = oe
        return (
          U(),
          V(
            O,
            null,
            [
              l('div', ae, [
                R(
                  w,
                  { class: 'start', onClick: x },
                  { default: W(() => [L('开始裁剪')]), _: 1 },
                ),
              ]),
              R(
                H,
                {
                  modelValue: v(e),
                  'onUpdate:modelValue':
                    t[4] || (t[4] = (n) => (C(e) ? (e.value = n) : null)),
                  width: '700',
                  title: '裁剪',
                  'close-on-click-modal': !1,
                  'show-close': !1,
                },
                {
                  footer: W(() => [
                    l('div', null, [
                      R(
                        w,
                        {
                          type: 'yellow',
                          style: { 'margin-right': '20px' },
                          onClick: X,
                        },
                        { default: W(() => [L('确定')]), _: 1 },
                      ),
                      R(
                        w,
                        { onClick: k },
                        { default: W(() => [L('取消')]), _: 1 },
                      ),
                    ]),
                  ]),
                  default: W(() => [
                    l('div', se, [
                      R(
                        ce,
                        {
                          'crop-x': v(i),
                          'onUpdate:cropX':
                            t[0] ||
                            (t[0] = (n) => (C(i) ? (i.value = n) : null)),
                          'crop-y': v(d),
                          'onUpdate:cropY':
                            t[1] ||
                            (t[1] = (n) => (C(d) ? (d.value = n) : null)),
                          'crop-w': v(m),
                          'onUpdate:cropW':
                            t[2] ||
                            (t[2] = (n) => (C(m) ? (m.value = n) : null)),
                          'crop-h': v(f),
                          'onUpdate:cropH':
                            t[3] ||
                            (t[3] = (n) => (C(f) ? (f.value = n) : null)),
                          'content-h': I,
                          'content-w': v(E),
                          'crop-square': !1,
                        },
                        {
                          default: W(() => [
                            l('img', { src: v(c) }, null, 8, pe),
                          ]),
                          _: 1,
                        },
                        8,
                        ['crop-x', 'crop-y', 'crop-w', 'crop-h', 'content-w'],
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
            ],
            64,
          )
        )
      }
    },
  })
const fe = N(ue, [['__scopeId', 'data-v-9e109901']])
export { fe as default }
