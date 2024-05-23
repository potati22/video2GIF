import {
  i as y,
  p,
  x as ne,
  h as se,
  y as oe,
  z as re,
  j as g,
  A as H,
  B as N,
  C as Z,
  r as P,
  G as ce,
  d as ae,
  H as ue,
  k as ie,
  I as B,
  J as de,
} from './index-2989de58.js'
function fe(e) {
  return e == null
}
function Ne(e) {
  return e === void 0
}
class le extends Error {
  constructor(n) {
    super(n), (this.name = 'ElementPlusError')
  }
}
function Oe(e, n) {
  throw new le(`[${e}] ${n}`)
}
function Re(e, n) {}
const Ae = 'update:modelValue',
  Ue = 'change',
  ke = 'input',
  De = (
    { from: e, replacement: n, scope: s, version: o, ref: c, type: i = 'API' },
    f,
  ) => {
    y(
      () => p(f),
      (m) => {},
      { immediate: !0 },
    )
  },
  M = { prefix: Math.floor(Math.random() * 1e4), current: 0 },
  ve = Symbol('elIdInjection'),
  Ee = () => (oe() ? re(ve, M) : M),
  Ke = (e) => {
    const n = Ee(),
      s = ne()
    return se(() => p(e) || `${s.value}-id-${n.prefix}-${n.current++}`)
  }
let E = []
const G = (e) => {
    const n = e
    n.key === Z.esc && E.forEach((s) => s(n))
  },
  pe = (e) => {
    g(() => {
      E.length === 0 && document.addEventListener('keydown', G), H && E.push(e)
    }),
      N(() => {
        ;(E = E.filter((n) => n !== e)),
          E.length === 0 && H && document.removeEventListener('keydown', G)
      })
  },
  w = 'focus-trap.focus-after-trapped',
  L = 'focus-trap.focus-after-released',
  me = 'focus-trap.focusout-prevented',
  J = { cancelable: !0, bubbles: !1 },
  Te = { cancelable: !0, bubbles: !1 },
  W = 'focusAfterTrapped',
  q = 'focusAfterReleased',
  Fe = Symbol('elFocusTrap'),
  O = P(),
  I = P(0),
  R = P(0)
let F = 0
const ee = (e) => {
    const n = [],
      s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const c = o.tagName === 'INPUT' && o.type === 'hidden'
          return o.disabled || o.hidden || c
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0 || o === document.activeElement
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
        },
      })
    for (; s.nextNode(); ) n.push(s.currentNode)
    return n
  },
  Y = (e, n) => {
    for (const s of e) if (!_e(s, n)) return s
  },
  _e = (e, n) => {
    if (getComputedStyle(e).visibility === 'hidden') return !0
    for (; e; ) {
      if (n && e === n) return !1
      if (getComputedStyle(e).display === 'none') return !0
      e = e.parentElement
    }
    return !1
  },
  be = (e) => {
    const n = ee(e),
      s = Y(n, e),
      o = Y(n.reverse(), e)
    return [s, o]
  },
  ye = (e) => e instanceof HTMLInputElement && 'select' in e,
  v = (e, n) => {
    if (e && e.focus) {
      const s = document.activeElement
      e.focus({ preventScroll: !0 }),
        (R.value = window.performance.now()),
        e !== s && ye(e) && n && e.select()
    }
  }
function z(e, n) {
  const s = [...e],
    o = e.indexOf(n)
  return o !== -1 && s.splice(o, 1), s
}
const Pe = () => {
    let e = []
    return {
      push: (o) => {
        const c = e[0]
        c && o !== c && c.pause(), (e = z(e, o)), e.unshift(o)
      },
      remove: (o) => {
        var c, i
        ;(e = z(e, o)),
          (i = (c = e[0]) == null ? void 0 : c.resume) == null || i.call(c)
      },
    }
  },
  Ie = (e, n = !1) => {
    const s = document.activeElement
    for (const o of e) if ((v(o, n), document.activeElement !== s)) return
  },
  Q = Pe(),
  he = () => I.value > R.value,
  _ = () => {
    ;(O.value = 'pointer'), (I.value = window.performance.now())
  },
  X = () => {
    ;(O.value = 'keyboard'), (I.value = window.performance.now())
  },
  Ce = () => (
    g(() => {
      F === 0 &&
        (document.addEventListener('mousedown', _),
        document.addEventListener('touchstart', _),
        document.addEventListener('keydown', X)),
        F++
    }),
    N(() => {
      F--,
        F <= 0 &&
          (document.removeEventListener('mousedown', _),
          document.removeEventListener('touchstart', _),
          document.removeEventListener('keydown', X))
    }),
    {
      focusReason: O,
      lastUserFocusTimestamp: I,
      lastAutomatedFocusTimestamp: R,
    }
  ),
  b = (e) => new CustomEvent(me, { ...Te, detail: e }),
  Se = ae({
    name: 'ElFocusTrap',
    inheritAttrs: !1,
    props: {
      loop: Boolean,
      trapped: Boolean,
      focusTrapEl: Object,
      focusStartEl: { type: [Object, String], default: 'first' },
    },
    emits: [
      W,
      q,
      'focusin',
      'focusout',
      'focusout-prevented',
      'release-requested',
    ],
    setup(e, { emit: n }) {
      const s = P()
      let o, c
      const { focusReason: i } = Ce()
      pe((t) => {
        e.trapped && !f.paused && n('release-requested', t)
      })
      const f = {
          paused: !1,
          pause() {
            this.paused = !0
          },
          resume() {
            this.paused = !1
          },
        },
        m = (t) => {
          if ((!e.loop && !e.trapped) || f.paused) return
          const {
              key: r,
              altKey: a,
              ctrlKey: u,
              metaKey: d,
              currentTarget: V,
              shiftKey: $,
            } = t,
            { loop: j } = e,
            te = r === Z.tab && !a && !u && !d,
            T = document.activeElement
          if (te && T) {
            const h = V,
              [C, S] = be(h)
            if (C && S) {
              if (!$ && T === S) {
                const l = b({ focusReason: i.value })
                n('focusout-prevented', l),
                  l.defaultPrevented || (t.preventDefault(), j && v(C, !0))
              } else if ($ && [C, h].includes(T)) {
                const l = b({ focusReason: i.value })
                n('focusout-prevented', l),
                  l.defaultPrevented || (t.preventDefault(), j && v(S, !0))
              }
            } else if (T === h) {
              const l = b({ focusReason: i.value })
              n('focusout-prevented', l),
                l.defaultPrevented || t.preventDefault()
            }
          }
        }
      ue(Fe, { focusTrapRef: s, onKeydown: m }),
        y(
          () => e.focusTrapEl,
          (t) => {
            t && (s.value = t)
          },
          { immediate: !0 },
        ),
        y([s], ([t], [r]) => {
          t &&
            (t.addEventListener('keydown', m),
            t.addEventListener('focusin', k),
            t.addEventListener('focusout', D)),
            r &&
              (r.removeEventListener('keydown', m),
              r.removeEventListener('focusin', k),
              r.removeEventListener('focusout', D))
        })
      const A = (t) => {
          n(W, t)
        },
        U = (t) => n(q, t),
        k = (t) => {
          const r = p(s)
          if (!r) return
          const a = t.target,
            u = t.relatedTarget,
            d = a && r.contains(a)
          e.trapped || (u && r.contains(u)) || (o = u),
            d && n('focusin', t),
            !f.paused && e.trapped && (d ? (c = a) : v(c, !0))
        },
        D = (t) => {
          const r = p(s)
          if (!(f.paused || !r))
            if (e.trapped) {
              const a = t.relatedTarget
              !fe(a) &&
                !r.contains(a) &&
                setTimeout(() => {
                  if (!f.paused && e.trapped) {
                    const u = b({ focusReason: i.value })
                    n('focusout-prevented', u), u.defaultPrevented || v(c, !0)
                  }
                }, 0)
            } else {
              const a = t.target
              ;(a && r.contains(a)) || n('focusout', t)
            }
        }
      async function K() {
        await B()
        const t = p(s)
        if (t) {
          Q.push(f)
          const r = t.contains(document.activeElement)
            ? o
            : document.activeElement
          if (((o = r), !t.contains(r))) {
            const u = new Event(w, J)
            t.addEventListener(w, A),
              t.dispatchEvent(u),
              u.defaultPrevented ||
                B(() => {
                  let d = e.focusStartEl
                  de(d) ||
                    (v(d), document.activeElement !== d && (d = 'first')),
                    d === 'first' && Ie(ee(t), !0),
                    (document.activeElement === r || d === 'container') && v(t)
                })
          }
        }
      }
      function x() {
        const t = p(s)
        if (t) {
          t.removeEventListener(w, A)
          const r = new CustomEvent(L, {
            ...J,
            detail: { focusReason: i.value },
          })
          t.addEventListener(L, U),
            t.dispatchEvent(r),
            !r.defaultPrevented &&
              (i.value == 'keyboard' ||
                !he() ||
                t.contains(document.activeElement)) &&
              v(o ?? document.body),
            t.removeEventListener(L, U),
            Q.remove(f)
        }
      }
      return (
        g(() => {
          e.trapped && K(),
            y(
              () => e.trapped,
              (t) => {
                t ? K() : x()
              },
            )
        }),
        N(() => {
          e.trapped && x()
        }),
        { onKeydown: m }
      )
    },
  })
function we(e, n, s, o, c, i) {
  return ie(e.$slots, 'default', { handleKeydown: e.onKeydown })
}
var xe = ce(Se, [
  ['render', we],
  ['__file', 'focus-trap.vue'],
])
export {
  Ue as C,
  xe as E,
  Fe as F,
  ke as I,
  Ae as U,
  De as a,
  fe as b,
  Ee as c,
  Re as d,
  Ne as i,
  Oe as t,
  Ke as u,
}
