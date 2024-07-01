import {
  B as P,
  V as me,
  k as se,
  W as ve,
  C as pe,
  X as j,
  x as ye,
  Y as Z,
  Z as Ce,
  $ as Q,
  j as q,
  a0 as Ee,
  a1 as be,
  a2 as ge,
  a3 as Te,
  a4 as K,
  a5 as J,
  a6 as X,
  d as H,
  a as z,
  l as g,
  a7 as Se,
  a8 as he,
  a9 as we,
  A as ee,
  i as k,
  o as O,
  c as G,
  m as W,
  aa as S,
  q as o,
  ab as Ae,
  w as D,
  ac as x,
  ad as Le,
  ae as De,
  af as F,
  p as le,
  H as ae,
  ag as Me,
  ah as ke,
  ai as Ie,
  r as M,
  aj as Be,
  J as Ne,
  z as Oe,
  ak as $e,
  al as oe,
  am as Re,
  I as Ye,
  an as _e,
  ao as ze,
  ap as He,
  aq as Ue,
  ar as We,
  as as Ve,
  at as Xe,
} from './index-1a4f7b41.js'
import {
  t as Ke,
  F as Ge,
  U as ie,
  u as te,
  i as je,
  a as ne,
  E as qe,
} from './focus-trap-4db1b527.js'
let U
const xe = (e) => {
    var n
    if (!P) return 0
    if (U !== void 0) return U
    const t = document.createElement('div')
    ;(t.className = `${e}-scrollbar__wrap`),
      (t.style.visibility = 'hidden'),
      (t.style.width = '100px'),
      (t.style.position = 'absolute'),
      (t.style.top = '-9999px'),
      document.body.appendChild(t)
    const d = t.offsetWidth
    t.style.overflow = 'scroll'
    const l = document.createElement('div')
    ;(l.style.width = '100%'), t.appendChild(l)
    const u = l.offsetWidth
    return (n = t.parentNode) == null || n.removeChild(t), (U = d - u), U
  },
  Fe =
    (...e) =>
    (n) => {
      e.forEach((t) => {
        me(t) ? t(n) : (t.value = n)
      })
    }
var V = ((e) => (
  (e[(e.TEXT = 1)] = 'TEXT'),
  (e[(e.CLASS = 2)] = 'CLASS'),
  (e[(e.STYLE = 4)] = 'STYLE'),
  (e[(e.PROPS = 8)] = 'PROPS'),
  (e[(e.FULL_PROPS = 16)] = 'FULL_PROPS'),
  (e[(e.HYDRATE_EVENTS = 32)] = 'HYDRATE_EVENTS'),
  (e[(e.STABLE_FRAGMENT = 64)] = 'STABLE_FRAGMENT'),
  (e[(e.KEYED_FRAGMENT = 128)] = 'KEYED_FRAGMENT'),
  (e[(e.UNKEYED_FRAGMENT = 256)] = 'UNKEYED_FRAGMENT'),
  (e[(e.NEED_PATCH = 512)] = 'NEED_PATCH'),
  (e[(e.DYNAMIC_SLOTS = 1024)] = 'DYNAMIC_SLOTS'),
  (e[(e.HOISTED = -1)] = 'HOISTED'),
  (e[(e.BAIL = -2)] = 'BAIL'),
  e
))(V || {})
const Pe = (e, n, t) => {
    let d = { offsetX: 0, offsetY: 0 }
    const l = (a) => {
        const m = a.clientX,
          c = a.clientY,
          { offsetX: f, offsetY: p } = d,
          y = e.value.getBoundingClientRect(),
          r = y.left,
          v = y.top,
          I = y.width,
          $ = y.height,
          R = document.documentElement.clientWidth,
          B = document.documentElement.clientHeight,
          Y = -r + f,
          _ = -v + p,
          N = R - r - I + f,
          h = B - v - $ + p,
          T = (w) => {
            const s = Math.min(Math.max(f + w.clientX - m, Y), N),
              b = Math.min(Math.max(p + w.clientY - c, _), h)
            ;(d = { offsetX: s, offsetY: b }),
              e.value &&
                (e.value.style.transform = `translate(${j(s)}, ${j(b)})`)
          },
          E = () => {
            document.removeEventListener('mousemove', T),
              document.removeEventListener('mouseup', E)
          }
        document.addEventListener('mousemove', T),
          document.addEventListener('mouseup', E)
      },
      u = () => {
        n.value && e.value && n.value.addEventListener('mousedown', l)
      },
      i = () => {
        n.value && e.value && n.value.removeEventListener('mousedown', l)
      }
    se(() => {
      ve(() => {
        t.value ? u() : i()
      })
    }),
      pe(() => {
        i()
      })
  },
  Ze = (e, n = {}) => {
    ye(e) ||
      Ke('[useLockscreen]', 'You need to pass a ref param to this function')
    const t = n.ns || Z('popup'),
      d = Ce(() => t.bm('parent', 'hidden'))
    if (!P || Q(document.body, d.value)) return
    let l = 0,
      u = !1,
      i = '0'
    const a = () => {
      setTimeout(() => {
        Te(document == null ? void 0 : document.body, d.value),
          u && document && (document.body.style.width = i)
      }, 200)
    }
    q(e, (m) => {
      if (!m) {
        a()
        return
      }
      ;(u = !Q(document.body, d.value)),
        u && (i = document.body.style.width),
        (l = xe(t.namespace.value))
      const c =
          document.documentElement.clientHeight < document.body.scrollHeight,
        f = Ee(document.body, 'overflowY')
      l > 0 &&
        (c || f === 'scroll') &&
        u &&
        (document.body.style.width = `calc(100% - ${l}px)`),
        be(document.body, d.value)
    }),
      ge(() => a())
  },
  re = (e) => {
    if (!e) return { onClick: K, onMousedown: K, onMouseup: K }
    let n = !1,
      t = !1
    return {
      onClick: (i) => {
        n && t && e(i), (n = t = !1)
      },
      onMousedown: (i) => {
        n = i.target === i.currentTarget
      },
      onMouseup: (i) => {
        t = i.target === i.currentTarget
      },
    }
  },
  Je = J({
    mask: { type: Boolean, default: !0 },
    customMaskEvent: { type: Boolean, default: !1 },
    overlayClass: { type: X([String, Array, Object]) },
    zIndex: { type: X([String, Number]) },
  }),
  Qe = { click: (e) => e instanceof MouseEvent },
  eo = 'overlay'
var oo = H({
  name: 'ElOverlay',
  props: Je,
  emits: Qe,
  setup(e, { slots: n, emit: t }) {
    const d = Z(eo),
      l = (m) => {
        t('click', m)
      },
      {
        onClick: u,
        onMousedown: i,
        onMouseup: a,
      } = re(e.customMaskEvent ? void 0 : l)
    return () =>
      e.mask
        ? z(
            'div',
            {
              class: [d.b(), e.overlayClass],
              style: { zIndex: e.zIndex },
              onClick: u,
              onMousedown: i,
              onMouseup: a,
            },
            [g(n, 'default')],
            V.STYLE | V.CLASS | V.PROPS,
            ['onClick', 'onMouseup', 'onMousedown'],
          )
        : Se(
            'div',
            {
              class: e.overlayClass,
              style: {
                zIndex: e.zIndex,
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
            [g(n, 'default')],
          )
  },
})
const to = oo,
  ue = Symbol('dialogInjectionKey'),
  de = J({
    center: Boolean,
    alignCenter: Boolean,
    closeIcon: { type: he },
    customClass: { type: String, default: '' },
    draggable: Boolean,
    fullscreen: Boolean,
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' },
    ariaLevel: { type: String, default: '2' },
  }),
  no = { close: () => !0 },
  so = ['aria-level'],
  lo = ['aria-label'],
  ao = ['id'],
  io = H({ name: 'ElDialogContent' }),
  ro = H({
    ...io,
    props: de,
    emits: no,
    setup(e) {
      const n = e,
        { t } = we(),
        { Close: d } = Me,
        { dialogRef: l, headerRef: u, bodyId: i, ns: a, style: m } = ee(ue),
        { focusTrapRef: c } = ee(Ge),
        f = k(() => [
          a.b(),
          a.is('fullscreen', n.fullscreen),
          a.is('draggable', n.draggable),
          a.is('align-center', n.alignCenter),
          { [a.m('center')]: n.center },
          n.customClass,
        ]),
        p = Fe(c, l),
        y = k(() => n.draggable)
      return (
        Pe(l, u, y),
        (r, v) => (
          O(),
          G(
            'div',
            { ref: o(p), class: S(o(f)), style: le(o(m)), tabindex: '-1' },
            [
              W(
                'header',
                { ref_key: 'headerRef', ref: u, class: S(o(a).e('header')) },
                [
                  g(r.$slots, 'header', {}, () => [
                    W(
                      'span',
                      {
                        role: 'heading',
                        'aria-level': r.ariaLevel,
                        class: S(o(a).e('title')),
                      },
                      Ae(r.title),
                      11,
                      so,
                    ),
                  ]),
                  r.showClose
                    ? (O(),
                      G(
                        'button',
                        {
                          key: 0,
                          'aria-label': o(t)('el.dialog.close'),
                          class: S(o(a).e('headerbtn')),
                          type: 'button',
                          onClick: v[0] || (v[0] = (I) => r.$emit('close')),
                        },
                        [
                          z(
                            o(De),
                            { class: S(o(a).e('close')) },
                            {
                              default: D(() => [
                                (O(), x(Le(r.closeIcon || o(d)))),
                              ]),
                              _: 1,
                            },
                            8,
                            ['class'],
                          ),
                        ],
                        10,
                        lo,
                      ))
                    : F('v-if', !0),
                ],
                2,
              ),
              W(
                'div',
                { id: o(i), class: S(o(a).e('body')) },
                [g(r.$slots, 'default')],
                10,
                ao,
              ),
              r.$slots.footer
                ? (O(),
                  G(
                    'footer',
                    { key: 0, class: S(o(a).e('footer')) },
                    [g(r.$slots, 'footer')],
                    2,
                  ))
                : F('v-if', !0),
            ],
            6,
          )
        )
      )
    },
  })
var uo = ae(ro, [['__file', 'dialog-content.vue']])
const co = J({
    ...de,
    appendToBody: Boolean,
    appendTo: { type: X(String), default: 'body' },
    beforeClose: { type: X(Function) },
    destroyOnClose: Boolean,
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    top: { type: String },
    modelValue: Boolean,
    modalClass: String,
    width: { type: [String, Number] },
    zIndex: { type: Number },
    trapFocus: { type: Boolean, default: !1 },
    headerAriaLevel: { type: String, default: '2' },
  }),
  fo = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [ie]: (e) => ke(e),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0,
  },
  mo = (e, n) => {
    var t
    const l = Oe().emit,
      { nextZIndex: u } = Ie()
    let i = ''
    const a = te(),
      m = te(),
      c = M(!1),
      f = M(!1),
      p = M(!1),
      y = M((t = e.zIndex) != null ? t : u())
    let r, v
    const I = Be('namespace', $e),
      $ = k(() => {
        const C = {},
          L = `--${I.value}-dialog`
        return (
          e.fullscreen ||
            (e.top && (C[`${L}-margin-top`] = e.top),
            e.width && (C[`${L}-width`] = j(e.width))),
          C
        )
      }),
      R = k(() => (e.alignCenter ? { display: 'flex' } : {}))
    function B() {
      l('opened')
    }
    function Y() {
      l('closed'), l(ie, !1), e.destroyOnClose && (p.value = !1)
    }
    function _() {
      l('close')
    }
    function N() {
      v == null || v(),
        r == null || r(),
        e.openDelay && e.openDelay > 0
          ? ({ stop: r } = oe(() => w(), e.openDelay))
          : w()
    }
    function h() {
      r == null || r(),
        v == null || v(),
        e.closeDelay && e.closeDelay > 0
          ? ({ stop: v } = oe(() => s(), e.closeDelay))
          : s()
    }
    function T() {
      function C(L) {
        L || ((f.value = !0), (c.value = !1))
      }
      e.beforeClose ? e.beforeClose(C) : h()
    }
    function E() {
      e.closeOnClickModal && T()
    }
    function w() {
      P && (c.value = !0)
    }
    function s() {
      c.value = !1
    }
    function b() {
      l('openAutoFocus')
    }
    function A() {
      l('closeAutoFocus')
    }
    function ce(C) {
      var L
      ;((L = C.detail) == null ? void 0 : L.focusReason) === 'pointer' &&
        C.preventDefault()
    }
    e.lockScroll && Ze(c)
    function fe() {
      e.closeOnPressEscape && T()
    }
    return (
      q(
        () => e.modelValue,
        (C) => {
          C
            ? ((f.value = !1),
              N(),
              (p.value = !0),
              (y.value = je(e.zIndex) ? u() : y.value++),
              Ne(() => {
                l('open'), n.value && (n.value.scrollTop = 0)
              }))
            : c.value && h()
        },
      ),
      q(
        () => e.fullscreen,
        (C) => {
          n.value &&
            (C
              ? ((i = n.value.style.transform), (n.value.style.transform = ''))
              : (n.value.style.transform = i))
        },
      ),
      se(() => {
        e.modelValue && ((c.value = !0), (p.value = !0), N())
      }),
      {
        afterEnter: B,
        afterLeave: Y,
        beforeLeave: _,
        handleClose: T,
        onModalClick: E,
        close: h,
        doClose: s,
        onOpenAutoFocus: b,
        onCloseAutoFocus: A,
        onCloseRequested: fe,
        onFocusoutPrevented: ce,
        titleId: a,
        bodyId: m,
        closed: f,
        style: $,
        overlayDialogStyle: R,
        rendered: p,
        visible: c,
        zIndex: y,
      }
    )
  },
  vo = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  po = H({ name: 'ElDialog', inheritAttrs: !1 }),
  yo = H({
    ...po,
    props: co,
    emits: fo,
    setup(e, { expose: n }) {
      const t = e,
        d = Re()
      ne(
        {
          scope: 'el-dialog',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/dialog.html#slots',
        },
        k(() => !!d.title),
      ),
        ne(
          {
            scope: 'el-dialog',
            from: 'custom-class',
            replacement: 'class',
            version: '2.3.0',
            ref: 'https://element-plus.org/en-US/component/dialog.html#attributes',
            type: 'Attribute',
          },
          k(() => !!t.customClass),
        )
      const l = Z('dialog'),
        u = M(),
        i = M(),
        a = M(),
        {
          visible: m,
          titleId: c,
          bodyId: f,
          style: p,
          overlayDialogStyle: y,
          rendered: r,
          zIndex: v,
          afterEnter: I,
          afterLeave: $,
          beforeLeave: R,
          handleClose: B,
          onModalClick: Y,
          onOpenAutoFocus: _,
          onCloseAutoFocus: N,
          onCloseRequested: h,
          onFocusoutPrevented: T,
        } = mo(t, u)
      Ye(ue, {
        dialogRef: u,
        headerRef: i,
        bodyId: f,
        ns: l,
        rendered: r,
        style: p,
      })
      const E = re(Y),
        w = k(() => t.draggable && !t.fullscreen)
      return (
        n({ visible: m, dialogContentRef: a }),
        (s, b) => (
          O(),
          x(
            Ve,
            {
              to: s.appendTo,
              disabled: s.appendTo !== 'body' ? !1 : !s.appendToBody,
            },
            [
              z(
                We,
                {
                  name: 'dialog-fade',
                  onAfterEnter: o(I),
                  onAfterLeave: o($),
                  onBeforeLeave: o(R),
                  persisted: '',
                },
                {
                  default: D(() => [
                    _e(
                      z(
                        o(to),
                        {
                          'custom-mask-event': '',
                          mask: s.modal,
                          'overlay-class': s.modalClass,
                          'z-index': o(v),
                        },
                        {
                          default: D(() => [
                            W(
                              'div',
                              {
                                role: 'dialog',
                                'aria-modal': 'true',
                                'aria-label': s.title || void 0,
                                'aria-labelledby': s.title ? void 0 : o(c),
                                'aria-describedby': o(f),
                                class: S(
                                  `${o(l).namespace.value}-overlay-dialog`,
                                ),
                                style: le(o(y)),
                                onClick:
                                  b[0] ||
                                  (b[0] = (...A) =>
                                    o(E).onClick && o(E).onClick(...A)),
                                onMousedown:
                                  b[1] ||
                                  (b[1] = (...A) =>
                                    o(E).onMousedown && o(E).onMousedown(...A)),
                                onMouseup:
                                  b[2] ||
                                  (b[2] = (...A) =>
                                    o(E).onMouseup && o(E).onMouseup(...A)),
                              },
                              [
                                z(
                                  o(qe),
                                  {
                                    loop: '',
                                    trapped: o(m),
                                    'focus-start-el': 'container',
                                    onFocusAfterTrapped: o(_),
                                    onFocusAfterReleased: o(N),
                                    onFocusoutPrevented: o(T),
                                    onReleaseRequested: o(h),
                                  },
                                  {
                                    default: D(() => [
                                      o(r)
                                        ? (O(),
                                          x(
                                            uo,
                                            ze(
                                              {
                                                key: 0,
                                                ref_key: 'dialogContentRef',
                                                ref: a,
                                              },
                                              s.$attrs,
                                              {
                                                'custom-class': s.customClass,
                                                center: s.center,
                                                'align-center': s.alignCenter,
                                                'close-icon': s.closeIcon,
                                                draggable: o(w),
                                                fullscreen: s.fullscreen,
                                                'show-close': s.showClose,
                                                title: s.title,
                                                'aria-level': s.headerAriaLevel,
                                                onClose: o(B),
                                              },
                                            ),
                                            He(
                                              {
                                                header: D(() => [
                                                  s.$slots.title
                                                    ? g(s.$slots, 'title', {
                                                        key: 1,
                                                      })
                                                    : g(s.$slots, 'header', {
                                                        key: 0,
                                                        close: o(B),
                                                        titleId: o(c),
                                                        titleClass:
                                                          o(l).e('title'),
                                                      }),
                                                ]),
                                                default: D(() => [
                                                  g(s.$slots, 'default'),
                                                ]),
                                                _: 2,
                                              },
                                              [
                                                s.$slots.footer
                                                  ? {
                                                      name: 'footer',
                                                      fn: D(() => [
                                                        g(s.$slots, 'footer'),
                                                      ]),
                                                    }
                                                  : void 0,
                                              ],
                                            ),
                                            1040,
                                            [
                                              'custom-class',
                                              'center',
                                              'align-center',
                                              'close-icon',
                                              'draggable',
                                              'fullscreen',
                                              'show-close',
                                              'title',
                                              'aria-level',
                                              'onClose',
                                            ],
                                          ))
                                        : F('v-if', !0),
                                    ]),
                                    _: 3,
                                  },
                                  8,
                                  [
                                    'trapped',
                                    'onFocusAfterTrapped',
                                    'onFocusAfterReleased',
                                    'onFocusoutPrevented',
                                    'onReleaseRequested',
                                  ],
                                ),
                              ],
                              46,
                              vo,
                            ),
                          ]),
                          _: 3,
                        },
                        8,
                        ['mask', 'overlay-class', 'z-index'],
                      ),
                      [[Ue, o(m)]],
                    ),
                  ]),
                  _: 3,
                },
                8,
                ['onAfterEnter', 'onAfterLeave', 'onBeforeLeave'],
              ),
            ],
            8,
            ['to', 'disabled'],
          )
        )
      )
    },
  })
var Co = ae(yo, [['__file', 'dialog.vue']])
const go = Xe(Co)
export { go as E }
