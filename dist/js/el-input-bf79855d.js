import {
  A as ke,
  bj as Jn,
  bk as _t,
  bl as Gn,
  h as T,
  bm as Bt,
  y as At,
  bn,
  a5 as j,
  S as Re,
  i as W,
  j as _e,
  ag as yn,
  p as i,
  ax as et,
  r as V,
  B as st,
  bo as Qn,
  bp as eo,
  x as to,
  a4 as pe,
  au as Q,
  H as ot,
  aw as no,
  bq as oo,
  z as ae,
  aS as Ne,
  aC as ro,
  at as hn,
  a7 as Gt,
  br as ao,
  J as ht,
  d as X,
  bs as io,
  al as so,
  X as Ie,
  bt as lo,
  bu as uo,
  bv as co,
  bw as po,
  I as $e,
  am as rt,
  ap as wn,
  o as _,
  c as Z,
  ae as D,
  F as wt,
  a9 as q,
  k as ce,
  l as Le,
  ab as Y,
  w as J,
  ac as mt,
  ad as Pe,
  an as je,
  a as he,
  bx as fo,
  by as Ge,
  a3 as Tt,
  aa as Qe,
  m as En,
  G as Ee,
  bz as Mt,
  as as Pt,
  bA as vo,
  aQ as mo,
  bB as go,
  bC as xn,
  aU as Ot,
  ah as bo,
  C as Qt,
  av as yo,
  aq as ho,
  ar as wo,
  bD as Eo,
  bE as xo,
  bF as To,
  a8 as Oo,
  ay as Io,
  bG as gt,
  bH as So,
  aW as bt,
  aX as Co,
  bI as Ao,
  bJ as Po,
  bK as Ro,
} from './index-2989de58.js'
import {
  c as No,
  u as Tn,
  U as Te,
  d as It,
  b as Oe,
  i as ko,
  E as Fo,
  C as On,
  I as Et,
  t as _o,
} from './focus-trap-3713deb7.js'
const ye =
    (e, t, { checkForDefaultPrevented: n = !0 } = {}) =>
    (r) => {
      const a = e == null ? void 0 : e(r)
      if (n === !1 || !a) return t == null ? void 0 : t(r)
    },
  Bo = () => ke && /firefox/i.test(window.navigator.userAgent)
var Mo = /\s/
function Vo(e) {
  for (var t = e.length; t-- && Mo.test(e.charAt(t)); );
  return t
}
var $o = /^\s+/
function Lo(e) {
  return e && e.slice(0, Vo(e) + 1).replace($o, '')
}
var en = 0 / 0,
  Do = /^[-+]0x[0-9a-f]+$/i,
  jo = /^0b[01]+$/i,
  zo = /^0o[0-7]+$/i,
  Ho = parseInt
function tn(e) {
  if (typeof e == 'number') return e
  if (Jn(e)) return en
  if (_t(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = _t(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = Lo(e)
  var n = jo.test(e)
  return n || zo.test(e) ? Ho(e.slice(2), n ? 2 : 8) : Do.test(e) ? en : +e
}
var Wo = function () {
  return Gn.Date.now()
}
const Ft = Wo
var Ko = 'Expected a function',
  Uo = Math.max,
  qo = Math.min
function Si(e, t, n) {
  var o,
    r,
    a,
    s,
    l,
    u,
    c = 0,
    v = !1,
    d = !1,
    w = !0
  if (typeof e != 'function') throw new TypeError(Ko)
  ;(t = tn(t) || 0),
    _t(n) &&
      ((v = !!n.leading),
      (d = 'maxWait' in n),
      (a = d ? Uo(tn(n.maxWait) || 0, t) : a),
      (w = 'trailing' in n ? !!n.trailing : w))
  function h(I) {
    var S = o,
      R = r
    return (o = r = void 0), (c = I), (s = e.apply(R, S)), s
  }
  function y(I) {
    return (c = I), (l = setTimeout(p, t)), v ? h(I) : s
  }
  function f(I) {
    var S = I - u,
      R = I - c,
      L = t - S
    return d ? qo(L, a - R) : L
  }
  function C(I) {
    var S = I - u,
      R = I - c
    return u === void 0 || S >= t || S < 0 || (d && R >= a)
  }
  function p() {
    var I = Ft()
    if (C(I)) return O(I)
    l = setTimeout(p, f(I))
  }
  function O(I) {
    return (l = void 0), w && o ? h(I) : ((o = r = void 0), s)
  }
  function N() {
    l !== void 0 && clearTimeout(l), (c = 0), (o = u = r = l = void 0)
  }
  function E() {
    return l === void 0 ? s : O(Ft())
  }
  function P() {
    var I = Ft(),
      S = C(I)
    if (((o = arguments), (r = this), (u = I), S)) {
      if (l === void 0) return y(u)
      if (d) return clearTimeout(l), (l = setTimeout(p, t)), h(u)
    }
    return l === void 0 && (l = setTimeout(p, t)), s
  }
  return (P.cancel = N), (P.flush = E), P
}
const Yo = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),
  Xo = ['class', 'style'],
  Zo = /^on[A-Z]/,
  Jo = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n } = e,
      o = T(() => ((n == null ? void 0 : n.value) || []).concat(Xo)),
      r = At()
    return r
      ? T(() => {
          var a
          return Bt(
            Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(
              ([s]) => !o.value.includes(s) && !(t && Zo.test(s)),
            ),
          )
        })
      : T(() => ({}))
  },
  Go = bn({ type: j(Boolean), default: null }),
  Qo = bn({ type: j(Function) }),
  In = (e) => {
    const t = `update:${e}`,
      n = `onUpdate:${e}`,
      o = [t],
      r = { [e]: Go, [n]: Qo }
    return {
      useModelToggle: ({
        indicator: s,
        toggleReason: l,
        shouldHideWhenRouteChanges: u,
        shouldProceed: c,
        onShow: v,
        onHide: d,
      }) => {
        const w = At(),
          { emit: h } = w,
          y = w.props,
          f = T(() => Re(y[n])),
          C = T(() => y[e] === null),
          p = (S) => {
            s.value !== !0 &&
              ((s.value = !0), l && (l.value = S), Re(v) && v(S))
          },
          O = (S) => {
            s.value !== !1 &&
              ((s.value = !1), l && (l.value = S), Re(d) && d(S))
          },
          N = (S) => {
            if (y.disabled === !0 || (Re(c) && !c())) return
            const R = f.value && ke
            R && h(t, !0), (C.value || !R) && p(S)
          },
          E = (S) => {
            if (y.disabled === !0 || !ke) return
            const R = f.value && ke
            R && h(t, !1), (C.value || !R) && O(S)
          },
          P = (S) => {
            yn(S) &&
              (y.disabled && S
                ? f.value && h(t, !1)
                : s.value !== S && (S ? p() : O()))
          },
          I = () => {
            s.value ? E() : N()
          }
        return (
          W(() => y[e], P),
          u &&
            w.appContext.config.globalProperties.$route !== void 0 &&
            W(
              () => ({ ...w.proxy.$route }),
              () => {
                u.value && s.value && E()
              },
            ),
          _e(() => {
            P(y[e])
          }),
          { hide: E, show: N, toggle: I, hasUpdateHandler: f }
        )
      },
      useModelToggleProps: r,
      useModelToggleEmits: o,
    }
  }
In('modelValue')
const Sn = (e) => {
  const t = At()
  return T(() => {
    var n, o
    return (o =
      (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null
      ? void 0
      : o[e]
  })
}
var ee = 'top',
  ie = 'bottom',
  se = 'right',
  te = 'left',
  $t = 'auto',
  lt = [ee, ie, se, te],
  ze = 'start',
  at = 'end',
  er = 'clippingParents',
  Cn = 'viewport',
  Je = 'popper',
  tr = 'reference',
  nn = lt.reduce(function (e, t) {
    return e.concat([t + '-' + ze, t + '-' + at])
  }, []),
  Lt = [].concat(lt, [$t]).reduce(function (e, t) {
    return e.concat([t, t + '-' + ze, t + '-' + at])
  }, []),
  nr = 'beforeRead',
  or = 'read',
  rr = 'afterRead',
  ar = 'beforeMain',
  ir = 'main',
  sr = 'afterMain',
  lr = 'beforeWrite',
  ur = 'write',
  cr = 'afterWrite',
  pr = [nr, or, rr, ar, ir, sr, lr, ur, cr]
function ve(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function de(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function He(e) {
  var t = de(e).Element
  return e instanceof t || e instanceof Element
}
function re(e) {
  var t = de(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function Dt(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = de(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function dr(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (n) {
    var o = t.styles[n] || {},
      r = t.attributes[n] || {},
      a = t.elements[n]
    !re(a) ||
      !ve(a) ||
      (Object.assign(a.style, o),
      Object.keys(r).forEach(function (s) {
        var l = r[s]
        l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? '' : l)
      }))
  })
}
function fr(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (o) {
        var r = t.elements[o],
          a = t.attributes[o] || {},
          s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
          l = s.reduce(function (u, c) {
            return (u[c] = ''), u
          }, {})
        !re(r) ||
          !ve(r) ||
          (Object.assign(r.style, l),
          Object.keys(a).forEach(function (u) {
            r.removeAttribute(u)
          }))
      })
    }
  )
}
var An = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: dr,
  effect: fr,
  requires: ['computeStyles'],
}
function fe(e) {
  return e.split('-')[0]
}
var Fe = Math.max,
  St = Math.min,
  We = Math.round
function Ke(e, t) {
  t === void 0 && (t = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    r = 1
  if (re(e) && t) {
    var a = e.offsetHeight,
      s = e.offsetWidth
    s > 0 && (o = We(n.width) / s || 1), a > 0 && (r = We(n.height) / a || 1)
  }
  return {
    width: n.width / o,
    height: n.height / r,
    top: n.top / r,
    right: n.right / o,
    bottom: n.bottom / r,
    left: n.left / o,
    x: n.left / o,
    y: n.top / r,
  }
}
function jt(e) {
  var t = Ke(e),
    n = e.offsetWidth,
    o = e.offsetHeight
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
  )
}
function Pn(e, t) {
  var n = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (n && Dt(n)) {
    var o = t
    do {
      if (o && e.isSameNode(o)) return !0
      o = o.parentNode || o.host
    } while (o)
  }
  return !1
}
function we(e) {
  return de(e).getComputedStyle(e)
}
function vr(e) {
  return ['table', 'td', 'th'].indexOf(ve(e)) >= 0
}
function Se(e) {
  return ((He(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function Rt(e) {
  return ve(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Dt(e) ? e.host : null) || Se(e)
}
function on(e) {
  return !re(e) || we(e).position === 'fixed' ? null : e.offsetParent
}
function mr(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    n = navigator.userAgent.indexOf('Trident') !== -1
  if (n && re(e)) {
    var o = we(e)
    if (o.position === 'fixed') return null
  }
  var r = Rt(e)
  for (Dt(r) && (r = r.host); re(r) && ['html', 'body'].indexOf(ve(r)) < 0; ) {
    var a = we(r)
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === 'filter') ||
      (t && a.filter && a.filter !== 'none')
    )
      return r
    r = r.parentNode
  }
  return null
}
function ut(e) {
  for (var t = de(e), n = on(e); n && vr(n) && we(n).position === 'static'; )
    n = on(n)
  return n &&
    (ve(n) === 'html' || (ve(n) === 'body' && we(n).position === 'static'))
    ? t
    : n || mr(e) || t
}
function zt(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function tt(e, t, n) {
  return Fe(e, St(t, n))
}
function gr(e, t, n) {
  var o = tt(e, t, n)
  return o > n ? n : o
}
function Rn() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Nn(e) {
  return Object.assign({}, Rn(), e)
}
function kn(e, t) {
  return t.reduce(function (n, o) {
    return (n[o] = e), n
  }, {})
}
var br = function (e, t) {
  return (
    (e =
      typeof e == 'function'
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Nn(typeof e != 'number' ? e : kn(e, lt))
  )
}
function yr(e) {
  var t,
    n = e.state,
    o = e.name,
    r = e.options,
    a = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    l = fe(n.placement),
    u = zt(l),
    c = [te, se].indexOf(l) >= 0,
    v = c ? 'height' : 'width'
  if (!(!a || !s)) {
    var d = br(r.padding, n),
      w = jt(a),
      h = u === 'y' ? ee : te,
      y = u === 'y' ? ie : se,
      f =
        n.rects.reference[v] + n.rects.reference[u] - s[u] - n.rects.popper[v],
      C = s[u] - n.rects.reference[u],
      p = ut(a),
      O = p ? (u === 'y' ? p.clientHeight || 0 : p.clientWidth || 0) : 0,
      N = f / 2 - C / 2,
      E = d[h],
      P = O - w[v] - d[y],
      I = O / 2 - w[v] / 2 + N,
      S = tt(E, I, P),
      R = u
    n.modifiersData[o] = ((t = {}), (t[R] = S), (t.centerOffset = S - I), t)
  }
}
function hr(e) {
  var t = e.state,
    n = e.options,
    o = n.element,
    r = o === void 0 ? '[data-popper-arrow]' : o
  r != null &&
    ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) ||
      !Pn(t.elements.popper, r) ||
      (t.elements.arrow = r))
}
var wr = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: yr,
  effect: hr,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function Ue(e) {
  return e.split('-')[1]
}
var Er = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function xr(e) {
  var t = e.x,
    n = e.y,
    o = window,
    r = o.devicePixelRatio || 1
  return { x: We(t * r) / r || 0, y: We(n * r) / r || 0 }
}
function rn(e) {
  var t,
    n = e.popper,
    o = e.popperRect,
    r = e.placement,
    a = e.variation,
    s = e.offsets,
    l = e.position,
    u = e.gpuAcceleration,
    c = e.adaptive,
    v = e.roundOffsets,
    d = e.isFixed,
    w = s.x,
    h = w === void 0 ? 0 : w,
    y = s.y,
    f = y === void 0 ? 0 : y,
    C = typeof v == 'function' ? v({ x: h, y: f }) : { x: h, y: f }
  ;(h = C.x), (f = C.y)
  var p = s.hasOwnProperty('x'),
    O = s.hasOwnProperty('y'),
    N = te,
    E = ee,
    P = window
  if (c) {
    var I = ut(n),
      S = 'clientHeight',
      R = 'clientWidth'
    if (
      (I === de(n) &&
        ((I = Se(n)),
        we(I).position !== 'static' &&
          l === 'absolute' &&
          ((S = 'scrollHeight'), (R = 'scrollWidth'))),
      (I = I),
      r === ee || ((r === te || r === se) && a === at))
    ) {
      E = ie
      var L = d && I === P && P.visualViewport ? P.visualViewport.height : I[S]
      ;(f -= L - o.height), (f *= u ? 1 : -1)
    }
    if (r === te || ((r === ee || r === ie) && a === at)) {
      N = se
      var B = d && I === P && P.visualViewport ? P.visualViewport.width : I[R]
      ;(h -= B - o.width), (h *= u ? 1 : -1)
    }
  }
  var M = Object.assign({ position: l }, c && Er),
    H = v === !0 ? xr({ x: h, y: f }) : { x: h, y: f }
  if (((h = H.x), (f = H.y), u)) {
    var m
    return Object.assign(
      {},
      M,
      ((m = {}),
      (m[E] = O ? '0' : ''),
      (m[N] = p ? '0' : ''),
      (m.transform =
        (P.devicePixelRatio || 1) <= 1
          ? 'translate(' + h + 'px, ' + f + 'px)'
          : 'translate3d(' + h + 'px, ' + f + 'px, 0)'),
      m),
    )
  }
  return Object.assign(
    {},
    M,
    ((t = {}),
    (t[E] = O ? f + 'px' : ''),
    (t[N] = p ? h + 'px' : ''),
    (t.transform = ''),
    t),
  )
}
function Tr(e) {
  var t = e.state,
    n = e.options,
    o = n.gpuAcceleration,
    r = o === void 0 ? !0 : o,
    a = n.adaptive,
    s = a === void 0 ? !0 : a,
    l = n.roundOffsets,
    u = l === void 0 ? !0 : l,
    c = {
      placement: fe(t.placement),
      variation: Ue(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      rn(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: u,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        rn(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: u,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
var Fn = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: Tr,
    data: {},
  },
  yt = { passive: !0 }
function Or(e) {
  var t = e.state,
    n = e.instance,
    o = e.options,
    r = o.scroll,
    a = r === void 0 ? !0 : r,
    s = o.resize,
    l = s === void 0 ? !0 : s,
    u = de(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    a &&
      c.forEach(function (v) {
        v.addEventListener('scroll', n.update, yt)
      }),
    l && u.addEventListener('resize', n.update, yt),
    function () {
      a &&
        c.forEach(function (v) {
          v.removeEventListener('scroll', n.update, yt)
        }),
        l && u.removeEventListener('resize', n.update, yt)
    }
  )
}
var _n = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: Or,
    data: {},
  },
  Ir = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function xt(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ir[t]
  })
}
var Sr = { start: 'end', end: 'start' }
function an(e) {
  return e.replace(/start|end/g, function (t) {
    return Sr[t]
  })
}
function Ht(e) {
  var t = de(e),
    n = t.pageXOffset,
    o = t.pageYOffset
  return { scrollLeft: n, scrollTop: o }
}
function Wt(e) {
  return Ke(Se(e)).left + Ht(e).scrollLeft
}
function Cr(e) {
  var t = de(e),
    n = Se(e),
    o = t.visualViewport,
    r = n.clientWidth,
    a = n.clientHeight,
    s = 0,
    l = 0
  return (
    o &&
      ((r = o.width),
      (a = o.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((s = o.offsetLeft), (l = o.offsetTop))),
    { width: r, height: a, x: s + Wt(e), y: l }
  )
}
function Ar(e) {
  var t,
    n = Se(e),
    o = Ht(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = Fe(
      n.scrollWidth,
      n.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0,
    ),
    s = Fe(
      n.scrollHeight,
      n.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0,
    ),
    l = -o.scrollLeft + Wt(e),
    u = -o.scrollTop
  return (
    we(r || n).direction === 'rtl' &&
      (l += Fe(n.clientWidth, r ? r.clientWidth : 0) - a),
    { width: a, height: s, x: l, y: u }
  )
}
function Kt(e) {
  var t = we(e),
    n = t.overflow,
    o = t.overflowX,
    r = t.overflowY
  return /auto|scroll|overlay|hidden/.test(n + r + o)
}
function Bn(e) {
  return ['html', 'body', '#document'].indexOf(ve(e)) >= 0
    ? e.ownerDocument.body
    : re(e) && Kt(e)
    ? e
    : Bn(Rt(e))
}
function nt(e, t) {
  var n
  t === void 0 && (t = [])
  var o = Bn(e),
    r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = de(o),
    s = r ? [a].concat(a.visualViewport || [], Kt(o) ? o : []) : o,
    l = t.concat(s)
  return r ? l : l.concat(nt(Rt(s)))
}
function Vt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function Pr(e) {
  var t = Ke(e)
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function sn(e, t) {
  return t === Cn ? Vt(Cr(e)) : He(t) ? Pr(t) : Vt(Ar(Se(e)))
}
function Rr(e) {
  var t = nt(Rt(e)),
    n = ['absolute', 'fixed'].indexOf(we(e).position) >= 0,
    o = n && re(e) ? ut(e) : e
  return He(o)
    ? t.filter(function (r) {
        return He(r) && Pn(r, o) && ve(r) !== 'body'
      })
    : []
}
function Nr(e, t, n) {
  var o = t === 'clippingParents' ? Rr(e) : [].concat(t),
    r = [].concat(o, [n]),
    a = r[0],
    s = r.reduce(
      function (l, u) {
        var c = sn(e, u)
        return (
          (l.top = Fe(c.top, l.top)),
          (l.right = St(c.right, l.right)),
          (l.bottom = St(c.bottom, l.bottom)),
          (l.left = Fe(c.left, l.left)),
          l
        )
      },
      sn(e, a),
    )
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  )
}
function Mn(e) {
  var t = e.reference,
    n = e.element,
    o = e.placement,
    r = o ? fe(o) : null,
    a = o ? Ue(o) : null,
    s = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    u
  switch (r) {
    case ee:
      u = { x: s, y: t.y - n.height }
      break
    case ie:
      u = { x: s, y: t.y + t.height }
      break
    case se:
      u = { x: t.x + t.width, y: l }
      break
    case te:
      u = { x: t.x - n.width, y: l }
      break
    default:
      u = { x: t.x, y: t.y }
  }
  var c = r ? zt(r) : null
  if (c != null) {
    var v = c === 'y' ? 'height' : 'width'
    switch (a) {
      case ze:
        u[c] = u[c] - (t[v] / 2 - n[v] / 2)
        break
      case at:
        u[c] = u[c] + (t[v] / 2 - n[v] / 2)
        break
    }
  }
  return u
}
function it(e, t) {
  t === void 0 && (t = {})
  var n = t,
    o = n.placement,
    r = o === void 0 ? e.placement : o,
    a = n.boundary,
    s = a === void 0 ? er : a,
    l = n.rootBoundary,
    u = l === void 0 ? Cn : l,
    c = n.elementContext,
    v = c === void 0 ? Je : c,
    d = n.altBoundary,
    w = d === void 0 ? !1 : d,
    h = n.padding,
    y = h === void 0 ? 0 : h,
    f = Nn(typeof y != 'number' ? y : kn(y, lt)),
    C = v === Je ? tr : Je,
    p = e.rects.popper,
    O = e.elements[w ? C : v],
    N = Nr(He(O) ? O : O.contextElement || Se(e.elements.popper), s, u),
    E = Ke(e.elements.reference),
    P = Mn({ reference: E, element: p, strategy: 'absolute', placement: r }),
    I = Vt(Object.assign({}, p, P)),
    S = v === Je ? I : E,
    R = {
      top: N.top - S.top + f.top,
      bottom: S.bottom - N.bottom + f.bottom,
      left: N.left - S.left + f.left,
      right: S.right - N.right + f.right,
    },
    L = e.modifiersData.offset
  if (v === Je && L) {
    var B = L[r]
    Object.keys(R).forEach(function (M) {
      var H = [se, ie].indexOf(M) >= 0 ? 1 : -1,
        m = [ee, ie].indexOf(M) >= 0 ? 'y' : 'x'
      R[M] += B[m] * H
    })
  }
  return R
}
function kr(e, t) {
  t === void 0 && (t = {})
  var n = t,
    o = n.placement,
    r = n.boundary,
    a = n.rootBoundary,
    s = n.padding,
    l = n.flipVariations,
    u = n.allowedAutoPlacements,
    c = u === void 0 ? Lt : u,
    v = Ue(o),
    d = v
      ? l
        ? nn
        : nn.filter(function (y) {
            return Ue(y) === v
          })
      : lt,
    w = d.filter(function (y) {
      return c.indexOf(y) >= 0
    })
  w.length === 0 && (w = d)
  var h = w.reduce(function (y, f) {
    return (
      (y[f] = it(e, { placement: f, boundary: r, rootBoundary: a, padding: s })[
        fe(f)
      ]),
      y
    )
  }, {})
  return Object.keys(h).sort(function (y, f) {
    return h[y] - h[f]
  })
}
function Fr(e) {
  if (fe(e) === $t) return []
  var t = xt(e)
  return [an(e), t, an(t)]
}
function _r(e) {
  var t = e.state,
    n = e.options,
    o = e.name
  if (!t.modifiersData[o]._skip) {
    for (
      var r = n.mainAxis,
        a = r === void 0 ? !0 : r,
        s = n.altAxis,
        l = s === void 0 ? !0 : s,
        u = n.fallbackPlacements,
        c = n.padding,
        v = n.boundary,
        d = n.rootBoundary,
        w = n.altBoundary,
        h = n.flipVariations,
        y = h === void 0 ? !0 : h,
        f = n.allowedAutoPlacements,
        C = t.options.placement,
        p = fe(C),
        O = p === C,
        N = u || (O || !y ? [xt(C)] : Fr(C)),
        E = [C].concat(N).reduce(function (me, le) {
          return me.concat(
            fe(le) === $t
              ? kr(t, {
                  placement: le,
                  boundary: v,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: y,
                  allowedAutoPlacements: f,
                })
              : le,
          )
        }, []),
        P = t.rects.reference,
        I = t.rects.popper,
        S = new Map(),
        R = !0,
        L = E[0],
        B = 0;
      B < E.length;
      B++
    ) {
      var M = E[B],
        H = fe(M),
        m = Ue(M) === ze,
        x = [ee, ie].indexOf(H) >= 0,
        A = x ? 'width' : 'height',
        k = it(t, {
          placement: M,
          boundary: v,
          rootBoundary: d,
          altBoundary: w,
          padding: c,
        }),
        b = x ? (m ? se : te) : m ? ie : ee
      P[A] > I[A] && (b = xt(b))
      var $ = xt(b),
        z = []
      if (
        (a && z.push(k[H] <= 0),
        l && z.push(k[b] <= 0, k[$] <= 0),
        z.every(function (me) {
          return me
        }))
      ) {
        ;(L = M), (R = !1)
        break
      }
      S.set(M, z)
    }
    if (R)
      for (
        var G = y ? 3 : 1,
          K = function (me) {
            var le = E.find(function (Be) {
              var Ce = S.get(Be)
              if (Ce)
                return Ce.slice(0, me).every(function (oe) {
                  return oe
                })
            })
            if (le) return (L = le), 'break'
          },
          ne = G;
        ne > 0;
        ne--
      ) {
        var xe = K(ne)
        if (xe === 'break') break
      }
    t.placement !== L &&
      ((t.modifiersData[o]._skip = !0), (t.placement = L), (t.reset = !0))
  }
}
var Br = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: _r,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
}
function ln(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  )
}
function un(e) {
  return [ee, se, ie, te].some(function (t) {
    return e[t] >= 0
  })
}
function Mr(e) {
  var t = e.state,
    n = e.name,
    o = t.rects.reference,
    r = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    s = it(t, { elementContext: 'reference' }),
    l = it(t, { altBoundary: !0 }),
    u = ln(s, o),
    c = ln(l, r, a),
    v = un(u),
    d = un(c)
  ;(t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: v,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': v,
      'data-popper-escaped': d,
    }))
}
var Vr = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: Mr,
}
function $r(e, t, n) {
  var o = fe(e),
    r = [te, ee].indexOf(o) >= 0 ? -1 : 1,
    a = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    s = a[0],
    l = a[1]
  return (
    (s = s || 0),
    (l = (l || 0) * r),
    [te, se].indexOf(o) >= 0 ? { x: l, y: s } : { x: s, y: l }
  )
}
function Lr(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    r = n.offset,
    a = r === void 0 ? [0, 0] : r,
    s = Lt.reduce(function (v, d) {
      return (v[d] = $r(d, t.rects, a)), v
    }, {}),
    l = s[t.placement],
    u = l.x,
    c = l.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[o] = s)
}
var Dr = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: Lr,
}
function jr(e) {
  var t = e.state,
    n = e.name
  t.modifiersData[n] = Mn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
var Vn = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: jr, data: {} }
function zr(e) {
  return e === 'x' ? 'y' : 'x'
}
function Hr(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    r = n.mainAxis,
    a = r === void 0 ? !0 : r,
    s = n.altAxis,
    l = s === void 0 ? !1 : s,
    u = n.boundary,
    c = n.rootBoundary,
    v = n.altBoundary,
    d = n.padding,
    w = n.tether,
    h = w === void 0 ? !0 : w,
    y = n.tetherOffset,
    f = y === void 0 ? 0 : y,
    C = it(t, { boundary: u, rootBoundary: c, padding: d, altBoundary: v }),
    p = fe(t.placement),
    O = Ue(t.placement),
    N = !O,
    E = zt(p),
    P = zr(E),
    I = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    R = t.rects.popper,
    L =
      typeof f == 'function'
        ? f(Object.assign({}, t.rects, { placement: t.placement }))
        : f,
    B =
      typeof L == 'number'
        ? { mainAxis: L, altAxis: L }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    H = { x: 0, y: 0 }
  if (I) {
    if (a) {
      var m,
        x = E === 'y' ? ee : te,
        A = E === 'y' ? ie : se,
        k = E === 'y' ? 'height' : 'width',
        b = I[E],
        $ = b + C[x],
        z = b - C[A],
        G = h ? -R[k] / 2 : 0,
        K = O === ze ? S[k] : R[k],
        ne = O === ze ? -R[k] : -S[k],
        xe = t.elements.arrow,
        me = h && xe ? jt(xe) : { width: 0, height: 0 },
        le = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Rn(),
        Be = le[x],
        Ce = le[A],
        oe = tt(0, S[k], me[k]),
        Zt = N ? S[k] / 2 - G - oe - Be - B.mainAxis : K - oe - Be - B.mainAxis,
        Nt = N
          ? -S[k] / 2 + G + oe + Ce + B.mainAxis
          : ne + oe + Ce + B.mainAxis,
        ge = t.elements.arrow && ut(t.elements.arrow),
        qe = ge ? (E === 'y' ? ge.clientTop || 0 : ge.clientLeft || 0) : 0,
        Ye = (m = M == null ? void 0 : M[E]) != null ? m : 0,
        ct = b + Zt - Ye - qe,
        pt = b + Nt - Ye,
        Xe = tt(h ? St($, ct) : $, b, h ? Fe(z, pt) : z)
      ;(I[E] = Xe), (H[E] = Xe - b)
    }
    if (l) {
      var dt,
        ft = E === 'x' ? ee : te,
        kt = E === 'x' ? ie : se,
        be = I[P],
        Me = P === 'y' ? 'height' : 'width',
        Ze = be + C[ft],
        vt = be - C[kt],
        Ve = [ee, te].indexOf(p) !== -1,
        g = (dt = M == null ? void 0 : M[P]) != null ? dt : 0,
        F = Ve ? Ze : be - S[Me] - R[Me] - g + B.altAxis,
        U = Ve ? be + S[Me] + R[Me] - g - B.altAxis : vt,
        Ae = h && Ve ? gr(F, be, U) : tt(h ? F : Ze, be, h ? U : vt)
      ;(I[P] = Ae), (H[P] = Ae - be)
    }
    t.modifiersData[o] = H
  }
}
var Wr = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Hr,
  requiresIfExists: ['offset'],
}
function Kr(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function Ur(e) {
  return e === de(e) || !re(e) ? Ht(e) : Kr(e)
}
function qr(e) {
  var t = e.getBoundingClientRect(),
    n = We(t.width) / e.offsetWidth || 1,
    o = We(t.height) / e.offsetHeight || 1
  return n !== 1 || o !== 1
}
function Yr(e, t, n) {
  n === void 0 && (n = !1)
  var o = re(t),
    r = re(t) && qr(t),
    a = Se(t),
    s = Ke(e, r),
    l = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 }
  return (
    (o || (!o && !n)) &&
      ((ve(t) !== 'body' || Kt(a)) && (l = Ur(t)),
      re(t)
        ? ((u = Ke(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : a && (u.x = Wt(a))),
    {
      x: s.left + l.scrollLeft - u.x,
      y: s.top + l.scrollTop - u.y,
      width: s.width,
      height: s.height,
    }
  )
}
function Xr(e) {
  var t = new Map(),
    n = new Set(),
    o = []
  e.forEach(function (a) {
    t.set(a.name, a)
  })
  function r(a) {
    n.add(a.name)
    var s = [].concat(a.requires || [], a.requiresIfExists || [])
    s.forEach(function (l) {
      if (!n.has(l)) {
        var u = t.get(l)
        u && r(u)
      }
    }),
      o.push(a)
  }
  return (
    e.forEach(function (a) {
      n.has(a.name) || r(a)
    }),
    o
  )
}
function Zr(e) {
  var t = Xr(e)
  return pr.reduce(function (n, o) {
    return n.concat(
      t.filter(function (r) {
        return r.phase === o
      }),
    )
  }, [])
}
function Jr(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            ;(t = void 0), n(e())
          })
        })),
      t
    )
  }
}
function Gr(e) {
  var t = e.reduce(function (n, o) {
    var r = n[o.name]
    return (
      (n[o.name] = r
        ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data),
          })
        : o),
      n
    )
  }, {})
  return Object.keys(t).map(function (n) {
    return t[n]
  })
}
var cn = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function pn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == 'function')
  })
}
function Ut(e) {
  e === void 0 && (e = {})
  var t = e,
    n = t.defaultModifiers,
    o = n === void 0 ? [] : n,
    r = t.defaultOptions,
    a = r === void 0 ? cn : r
  return function (s, l, u) {
    u === void 0 && (u = a)
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, cn, a),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      v = [],
      d = !1,
      w = {
        state: c,
        setOptions: function (f) {
          var C = typeof f == 'function' ? f(c.options) : f
          y(),
            (c.options = Object.assign({}, a, c.options, C)),
            (c.scrollParents = {
              reference: He(s)
                ? nt(s)
                : s.contextElement
                ? nt(s.contextElement)
                : [],
              popper: nt(l),
            })
          var p = Zr(Gr([].concat(o, c.options.modifiers)))
          return (
            (c.orderedModifiers = p.filter(function (O) {
              return O.enabled
            })),
            h(),
            w.update()
          )
        },
        forceUpdate: function () {
          if (!d) {
            var f = c.elements,
              C = f.reference,
              p = f.popper
            if (pn(C, p)) {
              ;(c.rects = {
                reference: Yr(C, ut(p), c.options.strategy === 'fixed'),
                popper: jt(p),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (R) {
                  return (c.modifiersData[R.name] = Object.assign({}, R.data))
                })
              for (var O = 0; O < c.orderedModifiers.length; O++) {
                if (c.reset === !0) {
                  ;(c.reset = !1), (O = -1)
                  continue
                }
                var N = c.orderedModifiers[O],
                  E = N.fn,
                  P = N.options,
                  I = P === void 0 ? {} : P,
                  S = N.name
                typeof E == 'function' &&
                  (c = E({ state: c, options: I, name: S, instance: w }) || c)
              }
            }
          }
        },
        update: Jr(function () {
          return new Promise(function (f) {
            w.forceUpdate(), f(c)
          })
        }),
        destroy: function () {
          y(), (d = !0)
        },
      }
    if (!pn(s, l)) return w
    w.setOptions(u).then(function (f) {
      !d && u.onFirstUpdate && u.onFirstUpdate(f)
    })
    function h() {
      c.orderedModifiers.forEach(function (f) {
        var C = f.name,
          p = f.options,
          O = p === void 0 ? {} : p,
          N = f.effect
        if (typeof N == 'function') {
          var E = N({ state: c, name: C, instance: w, options: O }),
            P = function () {}
          v.push(E || P)
        }
      })
    }
    function y() {
      v.forEach(function (f) {
        return f()
      }),
        (v = [])
    }
    return w
  }
}
Ut()
var Qr = [_n, Vn, Fn, An]
Ut({ defaultModifiers: Qr })
var ea = [_n, Vn, Fn, An, Dr, Br, Wr, wr, Vr],
  ta = Ut({ defaultModifiers: ea })
const na = (e, t, n = {}) => {
  const o = {
      name: 'updateState',
      enabled: !0,
      phase: 'write',
      fn: ({ state: u }) => {
        const c = oa(u)
        Object.assign(s.value, c)
      },
      requires: ['computeStyles'],
    },
    r = T(() => {
      const { onFirstUpdate: u, placement: c, strategy: v, modifiers: d } = i(n)
      return {
        onFirstUpdate: u,
        placement: c || 'bottom',
        strategy: v || 'absolute',
        modifiers: [...(d || []), o, { name: 'applyStyles', enabled: !1 }],
      }
    }),
    a = et(),
    s = V({
      styles: {
        popper: { position: i(r).strategy, left: '0', top: '0' },
        arrow: { position: 'absolute' },
      },
      attributes: {},
    }),
    l = () => {
      a.value && (a.value.destroy(), (a.value = void 0))
    }
  return (
    W(
      r,
      (u) => {
        const c = i(a)
        c && c.setOptions(u)
      },
      { deep: !0 },
    ),
    W([e, t], ([u, c]) => {
      l(), !(!u || !c) && (a.value = ta(u, c, i(r)))
    }),
    st(() => {
      l()
    }),
    {
      state: T(() => {
        var u
        return { ...(((u = i(a)) == null ? void 0 : u.state) || {}) }
      }),
      styles: T(() => i(s).styles),
      attributes: T(() => i(s).attributes),
      update: () => {
        var u
        return (u = i(a)) == null ? void 0 : u.update()
      },
      forceUpdate: () => {
        var u
        return (u = i(a)) == null ? void 0 : u.forceUpdate()
      },
      instanceRef: T(() => i(a)),
    }
  )
}
function oa(e) {
  const t = Object.keys(e.elements),
    n = Bt(t.map((r) => [r, e.styles[r] || {}])),
    o = Bt(t.map((r) => [r, e.attributes[r]]))
  return { styles: n, attributes: o }
}
function dn() {
  let e
  const t = (o, r) => {
      n(), (e = window.setTimeout(o, r))
    },
    n = () => window.clearTimeout(e)
  return Qn(() => n()), { registerTimeout: t, cancelTimeout: n }
}
let fn
const $n = () => {
    const e = to(),
      t = No(),
      n = T(() => `${e.value}-popper-container-${t.prefix}`),
      o = T(() => `#${n.value}`)
    return { id: n, selector: o }
  },
  ra = (e) => {
    const t = document.createElement('div')
    return (t.id = e), document.body.appendChild(t), t
  },
  aa = () => {
    const { id: e, selector: t } = $n()
    return (
      eo(() => {
        ke && !fn && !document.body.querySelector(t.value) && (fn = ra(e.value))
      }),
      { id: e, selector: t }
    )
  },
  ia = pe({
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 },
  }),
  sa = ({ showAfter: e, hideAfter: t, autoClose: n, open: o, close: r }) => {
    const { registerTimeout: a } = dn(),
      { registerTimeout: s, cancelTimeout: l } = dn()
    return {
      onOpen: (v) => {
        a(() => {
          o(v)
          const d = i(n)
          Q(d) &&
            d > 0 &&
            s(() => {
              r(v)
            }, d)
        }, i(e))
      },
      onClose: (v) => {
        l(),
          a(() => {
            r(v)
          }, i(t))
      },
    }
  },
  Ln = Symbol('elForwardRef'),
  la = (e) => {
    ot(Ln, {
      setForwardRef: (n) => {
        e.value = n
      },
    })
  },
  ua = (e) => ({
    mounted(t) {
      e(t)
    },
    updated(t) {
      e(t)
    },
    unmounted() {
      e(null)
    },
  })
function ca(e) {
  const t = V()
  function n() {
    if (e.value == null) return
    const { selectionStart: r, selectionEnd: a, value: s } = e.value
    if (r == null || a == null) return
    const l = s.slice(0, Math.max(0, r)),
      u = s.slice(Math.max(0, a))
    t.value = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: l,
      afterTxt: u,
    }
  }
  function o() {
    if (e.value == null || t.value == null) return
    const { value: r } = e.value,
      { beforeTxt: a, afterTxt: s, selectionStart: l } = t.value
    if (a == null || s == null || l == null) return
    let u = r.length
    if (r.endsWith(s)) u = r.length - s.length
    else if (r.startsWith(a)) u = a.length
    else {
      const c = a[l - 1],
        v = r.indexOf(c, l - 1)
      v !== -1 && (u = v + 1)
    }
    e.value.setSelectionRange(u, u)
  }
  return [n, o]
}
function pa(e, { afterFocus: t, beforeBlur: n, afterBlur: o } = {}) {
  const r = At(),
    { emit: a } = r,
    s = et(),
    l = V(!1),
    u = (d) => {
      l.value || ((l.value = !0), a('focus', d), t == null || t())
    },
    c = (d) => {
      var w
      ;(Re(n) && n(d)) ||
        (d.relatedTarget &&
          (w = s.value) != null &&
          w.contains(d.relatedTarget)) ||
        ((l.value = !1), a('blur', d), o == null || o())
    },
    v = () => {
      var d
      ;(d = e.value) == null || d.focus()
    }
  return (
    W(s, (d) => {
      d && d.setAttribute('tabindex', '-1')
    }),
    no(s, 'click', v),
    { wrapperRef: s, isFocused: l, handleFocus: u, handleBlur: c }
  )
}
const qt = Symbol('formContextKey'),
  Ct = Symbol('formItemContextKey'),
  Dn = (e, t = {}) => {
    const n = V(void 0),
      o = t.prop ? n : Sn('size'),
      r = t.global ? n : oo(),
      a = t.form ? { size: void 0 } : ae(qt, void 0),
      s = t.formItem ? { size: void 0 } : ae(Ct, void 0)
    return T(
      () =>
        o.value ||
        i(e) ||
        (s == null ? void 0 : s.size) ||
        (a == null ? void 0 : a.size) ||
        r.value ||
        '',
    )
  },
  jn = (e) => {
    const t = Sn('disabled'),
      n = ae(qt, void 0)
    return T(() => t.value || i(e) || (n == null ? void 0 : n.disabled) || !1)
  },
  zn = () => {
    const e = ae(qt, void 0),
      t = ae(Ct, void 0)
    return { form: e, formItem: t }
  },
  da = (
    e,
    { formItemContext: t, disableIdGeneration: n, disableIdManagement: o },
  ) => {
    n || (n = V(!1)), o || (o = V(!1))
    const r = V()
    let a
    const s = T(() => {
      var l
      return !!(
        !e.label &&
        t &&
        t.inputIds &&
        ((l = t.inputIds) == null ? void 0 : l.length) <= 1
      )
    })
    return (
      _e(() => {
        a = W(
          [Ne(e, 'id'), n],
          ([l, u]) => {
            const c = l ?? (u ? void 0 : Tn().value)
            c !== r.value &&
              (t != null &&
                t.removeInputId &&
                (r.value && t.removeInputId(r.value),
                !(o != null && o.value) && !u && c && t.addInputId(c)),
              (r.value = c))
          },
          { immediate: !0 },
        )
      }),
      ro(() => {
        a && a(),
          t != null && t.removeInputId && r.value && t.removeInputId(r.value)
      }),
      { isLabeledByFormItem: s, inputId: r }
    )
  }
let ue
const fa = `
  height:0 !important;
  visibility:hidden !important;
  ${Bo() ? '' : 'overflow:hidden !important;'}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  va = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
  ]
function ma(e) {
  const t = window.getComputedStyle(e),
    n = t.getPropertyValue('box-sizing'),
    o =
      Number.parseFloat(t.getPropertyValue('padding-bottom')) +
      Number.parseFloat(t.getPropertyValue('padding-top')),
    r =
      Number.parseFloat(t.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(t.getPropertyValue('border-top-width'))
  return {
    contextStyle: va.map((s) => `${s}:${t.getPropertyValue(s)}`).join(';'),
    paddingSize: o,
    borderSize: r,
    boxSizing: n,
  }
}
function vn(e, t = 1, n) {
  var o
  ue ||
    ((ue = document.createElement('textarea')), document.body.appendChild(ue))
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: l } = ma(e)
  ue.setAttribute('style', `${l};${fa}`),
    (ue.value = e.value || e.placeholder || '')
  let u = ue.scrollHeight
  const c = {}
  s === 'border-box' ? (u = u + a) : s === 'content-box' && (u = u - r),
    (ue.value = '')
  const v = ue.scrollHeight - r
  if (Q(t)) {
    let d = v * t
    s === 'border-box' && (d = d + r + a),
      (u = Math.max(d, u)),
      (c.minHeight = `${d}px`)
  }
  if (Q(n)) {
    let d = v * n
    s === 'border-box' && (d = d + r + a), (u = Math.min(d, u))
  }
  return (
    (c.height = `${u}px`),
    (o = ue.parentNode) == null || o.removeChild(ue),
    (ue = void 0),
    c
  )
}
const ga = pe({
    id: { type: String, default: void 0 },
    size: hn,
    disabled: Boolean,
    modelValue: { type: j([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: {
      type: String,
      values: ['none', 'both', 'horizontal', 'vertical'],
    },
    autosize: { type: j([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: Gt },
    prefixIcon: { type: Gt },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: j([Object, Array, String]), default: () => ao({}) },
    autofocus: { type: Boolean, default: !1 },
  }),
  ba = {
    [Te]: (e) => ht(e),
    input: (e) => ht(e),
    change: (e) => ht(e),
    focus: (e) => e instanceof FocusEvent,
    blur: (e) => e instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (e) => e instanceof MouseEvent,
    mouseenter: (e) => e instanceof MouseEvent,
    keydown: (e) => e instanceof Event,
    compositionstart: (e) => e instanceof CompositionEvent,
    compositionupdate: (e) => e instanceof CompositionEvent,
    compositionend: (e) => e instanceof CompositionEvent,
  },
  ya = ['role'],
  ha = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
    'form',
    'autofocus',
  ],
  wa = [
    'id',
    'tabindex',
    'disabled',
    'readonly',
    'autocomplete',
    'aria-label',
    'placeholder',
    'form',
    'autofocus',
  ],
  Ea = X({ name: 'ElInput', inheritAttrs: !1 }),
  xa = X({
    ...Ea,
    props: ga,
    emits: ba,
    setup(e, { expose: t, emit: n }) {
      const o = e,
        r = io(),
        a = so(),
        s = T(() => {
          const g = {}
          return (
            o.containerRole === 'combobox' &&
              ((g['aria-haspopup'] = r['aria-haspopup']),
              (g['aria-owns'] = r['aria-owns']),
              (g['aria-expanded'] = r['aria-expanded'])),
            g
          )
        }),
        l = T(() => [
          o.type === 'textarea' ? C.b() : f.b(),
          f.m(h.value),
          f.is('disabled', y.value),
          f.is('exceed', me.value),
          {
            [f.b('group')]: a.prepend || a.append,
            [f.bm('group', 'append')]: a.append,
            [f.bm('group', 'prepend')]: a.prepend,
            [f.m('prefix')]: a.prefix || o.prefixIcon,
            [f.m('suffix')]:
              a.suffix || o.suffixIcon || o.clearable || o.showPassword,
            [f.bm('suffix', 'password-clear')]: G.value && K.value,
          },
          r.class,
        ]),
        u = T(() => [f.e('wrapper'), f.is('focus', B.value)]),
        c = Jo({ excludeKeys: T(() => Object.keys(s.value)) }),
        { form: v, formItem: d } = zn(),
        { inputId: w } = da(o, { formItemContext: d }),
        h = Dn(),
        y = jn(),
        f = Ie('input'),
        C = Ie('textarea'),
        p = et(),
        O = et(),
        N = V(!1),
        E = V(!1),
        P = V(!1),
        I = V(),
        S = et(o.inputStyle),
        R = T(() => p.value || O.value),
        {
          wrapperRef: L,
          isFocused: B,
          handleFocus: M,
          handleBlur: H,
        } = pa(R, {
          afterBlur() {
            var g
            o.validateEvent &&
              ((g = d == null ? void 0 : d.validate) == null ||
                g.call(d, 'blur').catch((F) => It()))
          },
        }),
        m = T(() => {
          var g
          return (g = v == null ? void 0 : v.statusIcon) != null ? g : !1
        }),
        x = T(() => (d == null ? void 0 : d.validateState) || ''),
        A = T(() => x.value && lo[x.value]),
        k = T(() => (P.value ? uo : co)),
        b = T(() => [r.style, o.inputStyle]),
        $ = T(() => [o.inputStyle, S.value, { resize: o.resize }]),
        z = T(() => (Oe(o.modelValue) ? '' : String(o.modelValue))),
        G = T(
          () =>
            o.clearable &&
            !y.value &&
            !o.readonly &&
            !!z.value &&
            (B.value || N.value),
        ),
        K = T(
          () =>
            o.showPassword &&
            !y.value &&
            !o.readonly &&
            !!z.value &&
            (!!z.value || B.value),
        ),
        ne = T(
          () =>
            o.showWordLimit &&
            !!c.value.maxlength &&
            (o.type === 'text' || o.type === 'textarea') &&
            !y.value &&
            !o.readonly &&
            !o.showPassword,
        ),
        xe = T(() => z.value.length),
        me = T(() => !!ne.value && xe.value > Number(c.value.maxlength)),
        le = T(
          () =>
            !!a.suffix ||
            !!o.suffixIcon ||
            G.value ||
            o.showPassword ||
            ne.value ||
            (!!x.value && m.value),
        ),
        [Be, Ce] = ca(p)
      po(O, (g) => {
        if ((Nt(), !ne.value || o.resize !== 'both')) return
        const F = g[0],
          { width: U } = F.contentRect
        I.value = { right: `calc(100% - ${U + 15 + 6}px)` }
      })
      const oe = () => {
          const { type: g, autosize: F } = o
          if (!(!ke || g !== 'textarea' || !O.value))
            if (F) {
              const U = Mt(F) ? F.minRows : void 0,
                Ae = Mt(F) ? F.maxRows : void 0,
                Jt = vn(O.value, U, Ae)
              ;(S.value = { overflowY: 'hidden', ...Jt }),
                $e(() => {
                  O.value.offsetHeight, (S.value = Jt)
                })
            } else S.value = { minHeight: vn(O.value).minHeight }
        },
        Nt = ((g) => {
          let F = !1
          return () => {
            var U
            if (F || !o.autosize) return
            ;((U = O.value) == null ? void 0 : U.offsetParent) === null ||
              (g(), (F = !0))
          }
        })(oe),
        ge = () => {
          const g = R.value,
            F = o.formatter ? o.formatter(z.value) : z.value
          !g || g.value === F || (g.value = F)
        },
        qe = async (g) => {
          Be()
          let { value: F } = g.target
          if ((o.formatter && (F = o.parser ? o.parser(F) : F), !E.value)) {
            if (F === z.value) {
              ge()
              return
            }
            n(Te, F), n('input', F), await $e(), ge(), Ce()
          }
        },
        Ye = (g) => {
          n('change', g.target.value)
        },
        ct = (g) => {
          n('compositionstart', g), (E.value = !0)
        },
        pt = (g) => {
          var F
          n('compositionupdate', g)
          const U = (F = g.target) == null ? void 0 : F.value,
            Ae = U[U.length - 1] || ''
          E.value = !Yo(Ae)
        },
        Xe = (g) => {
          n('compositionend', g), E.value && ((E.value = !1), qe(g))
        },
        dt = () => {
          ;(P.value = !P.value), ft()
        },
        ft = async () => {
          var g
          await $e(), (g = R.value) == null || g.focus()
        },
        kt = () => {
          var g
          return (g = R.value) == null ? void 0 : g.blur()
        },
        be = (g) => {
          ;(N.value = !1), n('mouseleave', g)
        },
        Me = (g) => {
          ;(N.value = !0), n('mouseenter', g)
        },
        Ze = (g) => {
          n('keydown', g)
        },
        vt = () => {
          var g
          ;(g = R.value) == null || g.select()
        },
        Ve = () => {
          n(Te, ''), n('change', ''), n('clear'), n('input', '')
        }
      return (
        W(
          () => o.modelValue,
          () => {
            var g
            $e(() => oe()),
              o.validateEvent &&
                ((g = d == null ? void 0 : d.validate) == null ||
                  g.call(d, 'change').catch((F) => It()))
          },
        ),
        W(z, () => ge()),
        W(
          () => o.type,
          async () => {
            await $e(), ge(), oe()
          },
        ),
        _e(() => {
          !o.formatter && o.parser, ge(), $e(oe)
        }),
        t({
          input: p,
          textarea: O,
          ref: R,
          textareaStyle: $,
          autosize: Ne(o, 'autosize'),
          focus: ft,
          blur: kt,
          select: vt,
          clear: Ve,
          resizeTextarea: oe,
        }),
        (g, F) =>
          rt(
            (_(),
            Z(
              'div',
              je(i(s), {
                class: i(l),
                style: i(b),
                role: g.containerRole,
                onMouseenter: Me,
                onMouseleave: be,
              }),
              [
                D(' input '),
                g.type !== 'textarea'
                  ? (_(),
                    Z(
                      wt,
                      { key: 0 },
                      [
                        D(' prepend slot '),
                        g.$slots.prepend
                          ? (_(),
                            Z(
                              'div',
                              { key: 0, class: q(i(f).be('group', 'prepend')) },
                              [ce(g.$slots, 'prepend')],
                              2,
                            ))
                          : D('v-if', !0),
                        Le(
                          'div',
                          { ref_key: 'wrapperRef', ref: L, class: q(i(u)) },
                          [
                            D(' prefix slot '),
                            g.$slots.prefix || g.prefixIcon
                              ? (_(),
                                Z(
                                  'span',
                                  { key: 0, class: q(i(f).e('prefix')) },
                                  [
                                    Le(
                                      'span',
                                      { class: q(i(f).e('prefix-inner')) },
                                      [
                                        ce(g.$slots, 'prefix'),
                                        g.prefixIcon
                                          ? (_(),
                                            Y(
                                              i(Pe),
                                              {
                                                key: 0,
                                                class: q(i(f).e('icon')),
                                              },
                                              {
                                                default: J(() => [
                                                  (_(), Y(mt(g.prefixIcon))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['class'],
                                            ))
                                          : D('v-if', !0),
                                      ],
                                      2,
                                    ),
                                  ],
                                  2,
                                ))
                              : D('v-if', !0),
                            Le(
                              'input',
                              je(
                                {
                                  id: i(w),
                                  ref_key: 'input',
                                  ref: p,
                                  class: i(f).e('inner'),
                                },
                                i(c),
                                {
                                  type: g.showPassword
                                    ? P.value
                                      ? 'text'
                                      : 'password'
                                    : g.type,
                                  disabled: i(y),
                                  formatter: g.formatter,
                                  parser: g.parser,
                                  readonly: g.readonly,
                                  autocomplete: g.autocomplete,
                                  tabindex: g.tabindex,
                                  'aria-label': g.label,
                                  placeholder: g.placeholder,
                                  style: g.inputStyle,
                                  form: o.form,
                                  autofocus: o.autofocus,
                                  onCompositionstart: ct,
                                  onCompositionupdate: pt,
                                  onCompositionend: Xe,
                                  onInput: qe,
                                  onFocus:
                                    F[0] ||
                                    (F[0] = (...U) => i(M) && i(M)(...U)),
                                  onBlur:
                                    F[1] ||
                                    (F[1] = (...U) => i(H) && i(H)(...U)),
                                  onChange: Ye,
                                  onKeydown: Ze,
                                },
                              ),
                              null,
                              16,
                              ha,
                            ),
                            D(' suffix slot '),
                            i(le)
                              ? (_(),
                                Z(
                                  'span',
                                  { key: 1, class: q(i(f).e('suffix')) },
                                  [
                                    Le(
                                      'span',
                                      { class: q(i(f).e('suffix-inner')) },
                                      [
                                        !i(G) || !i(K) || !i(ne)
                                          ? (_(),
                                            Z(
                                              wt,
                                              { key: 0 },
                                              [
                                                ce(g.$slots, 'suffix'),
                                                g.suffixIcon
                                                  ? (_(),
                                                    Y(
                                                      i(Pe),
                                                      {
                                                        key: 0,
                                                        class: q(
                                                          i(f).e('icon'),
                                                        ),
                                                      },
                                                      {
                                                        default: J(() => [
                                                          (_(),
                                                          Y(mt(g.suffixIcon))),
                                                        ]),
                                                        _: 1,
                                                      },
                                                      8,
                                                      ['class'],
                                                    ))
                                                  : D('v-if', !0),
                                              ],
                                              64,
                                            ))
                                          : D('v-if', !0),
                                        i(G)
                                          ? (_(),
                                            Y(
                                              i(Pe),
                                              {
                                                key: 1,
                                                class: q([
                                                  i(f).e('icon'),
                                                  i(f).e('clear'),
                                                ]),
                                                onMousedown: Ge(i(Tt), [
                                                  'prevent',
                                                ]),
                                                onClick: Ve,
                                              },
                                              {
                                                default: J(() => [he(i(fo))]),
                                                _: 1,
                                              },
                                              8,
                                              ['class', 'onMousedown'],
                                            ))
                                          : D('v-if', !0),
                                        i(K)
                                          ? (_(),
                                            Y(
                                              i(Pe),
                                              {
                                                key: 2,
                                                class: q([
                                                  i(f).e('icon'),
                                                  i(f).e('password'),
                                                ]),
                                                onClick: dt,
                                              },
                                              {
                                                default: J(() => [
                                                  (_(), Y(mt(i(k)))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['class'],
                                            ))
                                          : D('v-if', !0),
                                        i(ne)
                                          ? (_(),
                                            Z(
                                              'span',
                                              {
                                                key: 3,
                                                class: q(i(f).e('count')),
                                              },
                                              [
                                                Le(
                                                  'span',
                                                  {
                                                    class: q(
                                                      i(f).e('count-inner'),
                                                    ),
                                                  },
                                                  Qe(i(xe)) +
                                                    ' / ' +
                                                    Qe(i(c).maxlength),
                                                  3,
                                                ),
                                              ],
                                              2,
                                            ))
                                          : D('v-if', !0),
                                        i(x) && i(A) && i(m)
                                          ? (_(),
                                            Y(
                                              i(Pe),
                                              {
                                                key: 4,
                                                class: q([
                                                  i(f).e('icon'),
                                                  i(f).e('validateIcon'),
                                                  i(f).is(
                                                    'loading',
                                                    i(x) === 'validating',
                                                  ),
                                                ]),
                                              },
                                              {
                                                default: J(() => [
                                                  (_(), Y(mt(i(A)))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['class'],
                                            ))
                                          : D('v-if', !0),
                                      ],
                                      2,
                                    ),
                                  ],
                                  2,
                                ))
                              : D('v-if', !0),
                          ],
                          2,
                        ),
                        D(' append slot '),
                        g.$slots.append
                          ? (_(),
                            Z(
                              'div',
                              { key: 1, class: q(i(f).be('group', 'append')) },
                              [ce(g.$slots, 'append')],
                              2,
                            ))
                          : D('v-if', !0),
                      ],
                      64,
                    ))
                  : (_(),
                    Z(
                      wt,
                      { key: 1 },
                      [
                        D(' textarea '),
                        Le(
                          'textarea',
                          je(
                            {
                              id: i(w),
                              ref_key: 'textarea',
                              ref: O,
                              class: i(C).e('inner'),
                            },
                            i(c),
                            {
                              tabindex: g.tabindex,
                              disabled: i(y),
                              readonly: g.readonly,
                              autocomplete: g.autocomplete,
                              style: i($),
                              'aria-label': g.label,
                              placeholder: g.placeholder,
                              form: o.form,
                              autofocus: o.autofocus,
                              onCompositionstart: ct,
                              onCompositionupdate: pt,
                              onCompositionend: Xe,
                              onInput: qe,
                              onFocus:
                                F[2] || (F[2] = (...U) => i(M) && i(M)(...U)),
                              onBlur:
                                F[3] || (F[3] = (...U) => i(H) && i(H)(...U)),
                              onChange: Ye,
                              onKeydown: Ze,
                            },
                          ),
                          null,
                          16,
                          wa,
                        ),
                        i(ne)
                          ? (_(),
                            Z(
                              'span',
                              {
                                key: 0,
                                style: En(I.value),
                                class: q(i(f).e('count')),
                              },
                              Qe(i(xe)) + ' / ' + Qe(i(c).maxlength),
                              7,
                            ))
                          : D('v-if', !0),
                      ],
                      64,
                    )),
              ],
              16,
              ya,
            )),
            [[wn, g.type !== 'hidden']],
          )
      )
    },
  })
var Ta = Ee(xa, [['__file', 'input.vue']])
const Oa = Pt(Ta),
  Yt = Symbol('popper'),
  Hn = Symbol('popperContent'),
  Ia = [
    'dialog',
    'grid',
    'group',
    'listbox',
    'menu',
    'navigation',
    'tooltip',
    'tree',
  ],
  Wn = pe({ role: { type: String, values: Ia, default: 'tooltip' } }),
  Sa = X({ name: 'ElPopper', inheritAttrs: !1 }),
  Ca = X({
    ...Sa,
    props: Wn,
    setup(e, { expose: t }) {
      const n = e,
        o = V(),
        r = V(),
        a = V(),
        s = V(),
        l = T(() => n.role),
        u = {
          triggerRef: o,
          popperInstanceRef: r,
          contentRef: a,
          referenceRef: s,
          role: l,
        }
      return t(u), ot(Yt, u), (c, v) => ce(c.$slots, 'default')
    },
  })
var Aa = Ee(Ca, [['__file', 'popper.vue']])
const Kn = pe({ arrowOffset: { type: Number, default: 5 } }),
  Pa = X({ name: 'ElPopperArrow', inheritAttrs: !1 }),
  Ra = X({
    ...Pa,
    props: Kn,
    setup(e, { expose: t }) {
      const n = e,
        o = Ie('popper'),
        { arrowOffset: r, arrowRef: a, arrowStyle: s } = ae(Hn, void 0)
      return (
        W(
          () => n.arrowOffset,
          (l) => {
            r.value = l
          },
        ),
        st(() => {
          a.value = void 0
        }),
        t({ arrowRef: a }),
        (l, u) => (
          _(),
          Z(
            'span',
            {
              ref_key: 'arrowRef',
              ref: a,
              class: q(i(o).e('arrow')),
              style: En(i(s)),
              'data-popper-arrow': '',
            },
            null,
            6,
          )
        )
      )
    },
  })
var Na = Ee(Ra, [['__file', 'arrow.vue']])
const ka = 'ElOnlyChild',
  Fa = X({
    name: ka,
    setup(e, { slots: t, attrs: n }) {
      var o
      const r = ae(Ln),
        a = ua((o = r == null ? void 0 : r.setForwardRef) != null ? o : Tt)
      return () => {
        var s
        const l = (s = t.default) == null ? void 0 : s.call(t, n)
        if (!l || l.length > 1) return null
        const u = Un(l)
        return u ? rt(vo(u, n), [[a]]) : null
      }
    },
  })
function Un(e) {
  if (!e) return null
  const t = e
  for (const n of t) {
    if (Mt(n))
      switch (n.type) {
        case go:
          continue
        case mo:
        case 'svg':
          return mn(n)
        case wt:
          return Un(n.children)
        default:
          return n
      }
    return mn(n)
  }
  return null
}
function mn(e) {
  const t = Ie('only-child')
  return he('span', { class: t.e('content') }, [e])
}
const qn = pe({
    virtualRef: { type: j(Object) },
    virtualTriggering: Boolean,
    onMouseenter: { type: j(Function) },
    onMouseleave: { type: j(Function) },
    onClick: { type: j(Function) },
    onKeydown: { type: j(Function) },
    onFocus: { type: j(Function) },
    onBlur: { type: j(Function) },
    onContextmenu: { type: j(Function) },
    id: String,
    open: Boolean,
  }),
  _a = X({ name: 'ElPopperTrigger', inheritAttrs: !1 }),
  Ba = X({
    ..._a,
    props: qn,
    setup(e, { expose: t }) {
      const n = e,
        { role: o, triggerRef: r } = ae(Yt, void 0)
      la(r)
      const a = T(() => (l.value ? n.id : void 0)),
        s = T(() => {
          if (o && o.value === 'tooltip') return n.open && n.id ? n.id : void 0
        }),
        l = T(() => {
          if (o && o.value !== 'tooltip') return o.value
        }),
        u = T(() => (l.value ? `${n.open}` : void 0))
      let c
      return (
        _e(() => {
          W(
            () => n.virtualRef,
            (v) => {
              v && (r.value = xn(v))
            },
            { immediate: !0 },
          ),
            W(
              r,
              (v, d) => {
                c == null || c(),
                  (c = void 0),
                  Ot(v) &&
                    ([
                      'onMouseenter',
                      'onMouseleave',
                      'onClick',
                      'onKeydown',
                      'onFocus',
                      'onBlur',
                      'onContextmenu',
                    ].forEach((w) => {
                      var h
                      const y = n[w]
                      y &&
                        (v.addEventListener(w.slice(2).toLowerCase(), y),
                        (h = d == null ? void 0 : d.removeEventListener) ==
                          null || h.call(d, w.slice(2).toLowerCase(), y))
                    }),
                    (c = W(
                      [a, s, l, u],
                      (w) => {
                        ;[
                          'aria-controls',
                          'aria-describedby',
                          'aria-haspopup',
                          'aria-expanded',
                        ].forEach((h, y) => {
                          Oe(w[y])
                            ? v.removeAttribute(h)
                            : v.setAttribute(h, w[y])
                        })
                      },
                      { immediate: !0 },
                    ))),
                  Ot(d) &&
                    [
                      'aria-controls',
                      'aria-describedby',
                      'aria-haspopup',
                      'aria-expanded',
                    ].forEach((w) => d.removeAttribute(w))
              },
              { immediate: !0 },
            )
        }),
        st(() => {
          c == null || c(), (c = void 0)
        }),
        t({ triggerRef: r }),
        (v, d) =>
          v.virtualTriggering
            ? D('v-if', !0)
            : (_(),
              Y(
                i(Fa),
                je({ key: 0 }, v.$attrs, {
                  'aria-controls': i(a),
                  'aria-describedby': i(s),
                  'aria-expanded': i(u),
                  'aria-haspopup': i(l),
                }),
                { default: J(() => [ce(v.$slots, 'default')]), _: 3 },
                16,
                [
                  'aria-controls',
                  'aria-describedby',
                  'aria-expanded',
                  'aria-haspopup',
                ],
              ))
      )
    },
  })
var Ma = Ee(Ba, [['__file', 'trigger.vue']])
const Va = ['fixed', 'absolute'],
  $a = pe({
    boundariesPadding: { type: Number, default: 0 },
    fallbackPlacements: { type: j(Array), default: void 0 },
    gpuAcceleration: { type: Boolean, default: !0 },
    offset: { type: Number, default: 12 },
    placement: { type: String, values: Lt, default: 'bottom' },
    popperOptions: { type: j(Object), default: () => ({}) },
    strategy: { type: String, values: Va, default: 'absolute' },
  }),
  Yn = pe({
    ...$a,
    id: String,
    style: { type: j([String, Array, Object]) },
    className: { type: j([String, Array, Object]) },
    effect: { type: String, default: 'dark' },
    visible: Boolean,
    enterable: { type: Boolean, default: !0 },
    pure: Boolean,
    focusOnShow: { type: Boolean, default: !1 },
    trapping: { type: Boolean, default: !1 },
    popperClass: { type: j([String, Array, Object]) },
    popperStyle: { type: j([String, Array, Object]) },
    referenceEl: { type: j(Object) },
    triggerTargetEl: { type: j(Object) },
    stopPopperMouseEvent: { type: Boolean, default: !0 },
    ariaLabel: { type: String, default: void 0 },
    virtualTriggering: Boolean,
    zIndex: Number,
  }),
  La = {
    mouseenter: (e) => e instanceof MouseEvent,
    mouseleave: (e) => e instanceof MouseEvent,
    focus: () => !0,
    blur: () => !0,
    close: () => !0,
  },
  Da = (e, t = []) => {
    const { placement: n, strategy: o, popperOptions: r } = e,
      a = { placement: n, strategy: o, ...r, modifiers: [...za(e), ...t] }
    return Ha(a, r == null ? void 0 : r.modifiers), a
  },
  ja = (e) => {
    if (ke) return xn(e)
  }
function za(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e
  return [
    { name: 'offset', options: { offset: [0, t ?? 12] } },
    {
      name: 'preventOverflow',
      options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
    },
    { name: 'flip', options: { padding: 5, fallbackPlacements: o } },
    { name: 'computeStyles', options: { gpuAcceleration: n } },
  ]
}
function Ha(e, t) {
  t && (e.modifiers = [...e.modifiers, ...(t ?? [])])
}
const Wa = 0,
  Ka = (e) => {
    const {
        popperInstanceRef: t,
        contentRef: n,
        triggerRef: o,
        role: r,
      } = ae(Yt, void 0),
      a = V(),
      s = V(),
      l = T(() => ({ name: 'eventListeners', enabled: !!e.visible })),
      u = T(() => {
        var p
        const O = i(a),
          N = (p = i(s)) != null ? p : Wa
        return {
          name: 'arrow',
          enabled: !ko(O),
          options: { element: O, padding: N },
        }
      }),
      c = T(() => ({
        onFirstUpdate: () => {
          y()
        },
        ...Da(e, [i(u), i(l)]),
      })),
      v = T(() => ja(e.referenceEl) || i(o)),
      {
        attributes: d,
        state: w,
        styles: h,
        update: y,
        forceUpdate: f,
        instanceRef: C,
      } = na(v, n, c)
    return (
      W(C, (p) => (t.value = p)),
      _e(() => {
        W(
          () => {
            var p
            return (p = i(v)) == null ? void 0 : p.getBoundingClientRect()
          },
          () => {
            y()
          },
        )
      }),
      {
        attributes: d,
        arrowRef: a,
        contentRef: n,
        instanceRef: C,
        state: w,
        styles: h,
        role: r,
        forceUpdate: f,
        update: y,
      }
    )
  },
  Ua = (e, { attributes: t, styles: n, role: o }) => {
    const { nextZIndex: r } = bo(),
      a = Ie('popper'),
      s = T(() => i(t).popper),
      l = V(Q(e.zIndex) ? e.zIndex : r()),
      u = T(() => [a.b(), a.is('pure', e.pure), a.is(e.effect), e.popperClass]),
      c = T(() => [{ zIndex: i(l) }, i(n).popper, e.popperStyle || {}]),
      v = T(() => (o.value === 'dialog' ? 'false' : void 0)),
      d = T(() => i(n).arrow || {})
    return {
      ariaModal: v,
      arrowStyle: d,
      contentAttrs: s,
      contentClass: u,
      contentStyle: c,
      contentZIndex: l,
      updateZIndex: () => {
        l.value = Q(e.zIndex) ? e.zIndex : r()
      },
    }
  },
  qa = (e, t) => {
    const n = V(!1),
      o = V()
    return {
      focusStartRef: o,
      trapped: n,
      onFocusAfterReleased: (c) => {
        var v
        ;((v = c.detail) == null ? void 0 : v.focusReason) !== 'pointer' &&
          ((o.value = 'first'), t('blur'))
      },
      onFocusAfterTrapped: () => {
        t('focus')
      },
      onFocusInTrap: (c) => {
        e.visible &&
          !n.value &&
          (c.target && (o.value = c.target), (n.value = !0))
      },
      onFocusoutPrevented: (c) => {
        e.trapping ||
          (c.detail.focusReason === 'pointer' && c.preventDefault(),
          (n.value = !1))
      },
      onReleaseRequested: () => {
        ;(n.value = !1), t('close')
      },
    }
  },
  Ya = X({ name: 'ElPopperContent' }),
  Xa = X({
    ...Ya,
    props: Yn,
    emits: La,
    setup(e, { expose: t, emit: n }) {
      const o = e,
        {
          focusStartRef: r,
          trapped: a,
          onFocusAfterReleased: s,
          onFocusAfterTrapped: l,
          onFocusInTrap: u,
          onFocusoutPrevented: c,
          onReleaseRequested: v,
        } = qa(o, n),
        {
          attributes: d,
          arrowRef: w,
          contentRef: h,
          styles: y,
          instanceRef: f,
          role: C,
          update: p,
        } = Ka(o),
        {
          ariaModal: O,
          arrowStyle: N,
          contentAttrs: E,
          contentClass: P,
          contentStyle: I,
          updateZIndex: S,
        } = Ua(o, { styles: y, attributes: d, role: C }),
        R = ae(Ct, void 0),
        L = V()
      ot(Hn, { arrowStyle: N, arrowRef: w, arrowOffset: L }),
        R &&
          (R.addInputId || R.removeInputId) &&
          ot(Ct, { ...R, addInputId: Tt, removeInputId: Tt })
      let B
      const M = (m = !0) => {
          p(), m && S()
        },
        H = () => {
          M(!1),
            o.visible && o.focusOnShow
              ? (a.value = !0)
              : o.visible === !1 && (a.value = !1)
        }
      return (
        _e(() => {
          W(
            () => o.triggerTargetEl,
            (m, x) => {
              B == null || B(), (B = void 0)
              const A = i(m || h.value),
                k = i(x || h.value)
              Ot(A) &&
                (B = W(
                  [C, () => o.ariaLabel, O, () => o.id],
                  (b) => {
                    ;['role', 'aria-label', 'aria-modal', 'id'].forEach(
                      ($, z) => {
                        Oe(b[z])
                          ? A.removeAttribute($)
                          : A.setAttribute($, b[z])
                      },
                    )
                  },
                  { immediate: !0 },
                )),
                k !== A &&
                  Ot(k) &&
                  ['role', 'aria-label', 'aria-modal', 'id'].forEach((b) => {
                    k.removeAttribute(b)
                  })
            },
            { immediate: !0 },
          ),
            W(() => o.visible, H, { immediate: !0 })
        }),
        st(() => {
          B == null || B(), (B = void 0)
        }),
        t({
          popperContentRef: h,
          popperInstanceRef: f,
          updatePopper: M,
          contentStyle: I,
        }),
        (m, x) => (
          _(),
          Z(
            'div',
            je({ ref_key: 'contentRef', ref: h }, i(E), {
              style: i(I),
              class: i(P),
              tabindex: '-1',
              onMouseenter: x[0] || (x[0] = (A) => m.$emit('mouseenter', A)),
              onMouseleave: x[1] || (x[1] = (A) => m.$emit('mouseleave', A)),
            }),
            [
              he(
                i(Fo),
                {
                  trapped: i(a),
                  'trap-on-focus-in': !0,
                  'focus-trap-el': i(h),
                  'focus-start-el': i(r),
                  onFocusAfterTrapped: i(l),
                  onFocusAfterReleased: i(s),
                  onFocusin: i(u),
                  onFocusoutPrevented: i(c),
                  onReleaseRequested: i(v),
                },
                { default: J(() => [ce(m.$slots, 'default')]), _: 3 },
                8,
                [
                  'trapped',
                  'focus-trap-el',
                  'focus-start-el',
                  'onFocusAfterTrapped',
                  'onFocusAfterReleased',
                  'onFocusin',
                  'onFocusoutPrevented',
                  'onReleaseRequested',
                ],
              ),
            ],
            16,
          )
        )
      )
    },
  })
var Za = Ee(Xa, [['__file', 'content.vue']])
const Ja = Pt(Aa),
  Xt = Symbol('elTooltip'),
  Xn = pe({
    ...ia,
    ...Yn,
    appendTo: { type: j([String, Object]) },
    content: { type: String, default: '' },
    rawContent: { type: Boolean, default: !1 },
    persistent: Boolean,
    ariaLabel: String,
    visible: { type: j(Boolean), default: null },
    transition: String,
    teleported: { type: Boolean, default: !0 },
    disabled: Boolean,
  }),
  Zn = pe({
    ...qn,
    disabled: Boolean,
    trigger: { type: j([String, Array]), default: 'hover' },
    triggerKeys: { type: j(Array), default: () => [Qt.enter, Qt.space] },
  }),
  {
    useModelToggleProps: Ga,
    useModelToggleEmits: Qa,
    useModelToggle: ei,
  } = In('visible'),
  ti = pe({
    ...Wn,
    ...Ga,
    ...Xn,
    ...Zn,
    ...Kn,
    showArrow: { type: Boolean, default: !0 },
  }),
  ni = [...Qa, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
  oi = (e, t) => (yo(e) ? e.includes(t) : e === t),
  De = (e, t, n) => (o) => {
    oi(i(e), t) && n(o)
  },
  ri = X({ name: 'ElTooltipTrigger' }),
  ai = X({
    ...ri,
    props: Zn,
    setup(e, { expose: t }) {
      const n = e,
        o = Ie('tooltip'),
        {
          controlled: r,
          id: a,
          open: s,
          onOpen: l,
          onClose: u,
          onToggle: c,
        } = ae(Xt, void 0),
        v = V(null),
        d = () => {
          if (i(r) || n.disabled) return !0
        },
        w = Ne(n, 'trigger'),
        h = ye(d, De(w, 'hover', l)),
        y = ye(d, De(w, 'hover', u)),
        f = ye(
          d,
          De(w, 'click', (E) => {
            E.button === 0 && c(E)
          }),
        ),
        C = ye(d, De(w, 'focus', l)),
        p = ye(d, De(w, 'focus', u)),
        O = ye(
          d,
          De(w, 'contextmenu', (E) => {
            E.preventDefault(), c(E)
          }),
        ),
        N = ye(d, (E) => {
          const { code: P } = E
          n.triggerKeys.includes(P) && (E.preventDefault(), c(E))
        })
      return (
        t({ triggerRef: v }),
        (E, P) => (
          _(),
          Y(
            i(Ma),
            {
              id: i(a),
              'virtual-ref': E.virtualRef,
              open: i(s),
              'virtual-triggering': E.virtualTriggering,
              class: q(i(o).e('trigger')),
              onBlur: i(p),
              onClick: i(f),
              onContextmenu: i(O),
              onFocus: i(C),
              onMouseenter: i(h),
              onMouseleave: i(y),
              onKeydown: i(N),
            },
            { default: J(() => [ce(E.$slots, 'default')]), _: 3 },
            8,
            [
              'id',
              'virtual-ref',
              'open',
              'virtual-triggering',
              'class',
              'onBlur',
              'onClick',
              'onContextmenu',
              'onFocus',
              'onMouseenter',
              'onMouseleave',
              'onKeydown',
            ],
          )
        )
      )
    },
  })
var ii = Ee(ai, [['__file', 'trigger.vue']])
const si = X({ name: 'ElTooltipContent', inheritAttrs: !1 }),
  li = X({
    ...si,
    props: Xn,
    setup(e, { expose: t }) {
      const n = e,
        { selector: o } = $n(),
        r = Ie('tooltip'),
        a = V(null),
        s = V(!1),
        {
          controlled: l,
          id: u,
          open: c,
          trigger: v,
          onClose: d,
          onOpen: w,
          onShow: h,
          onHide: y,
          onBeforeShow: f,
          onBeforeHide: C,
        } = ae(Xt, void 0),
        p = T(() => n.transition || `${r.namespace.value}-fade-in-linear`),
        O = T(() => n.persistent)
      st(() => {
        s.value = !0
      })
      const N = T(() => (i(O) ? !0 : i(c))),
        E = T(() => (n.disabled ? !1 : i(c))),
        P = T(() => n.appendTo || o.value),
        I = T(() => {
          var b
          return (b = n.style) != null ? b : {}
        }),
        S = T(() => !i(c)),
        R = () => {
          y()
        },
        L = () => {
          if (i(l)) return !0
        },
        B = ye(L, () => {
          n.enterable && i(v) === 'hover' && w()
        }),
        M = ye(L, () => {
          i(v) === 'hover' && d()
        }),
        H = () => {
          var b, $
          ;($ = (b = a.value) == null ? void 0 : b.updatePopper) == null ||
            $.call(b),
            f == null || f()
        },
        m = () => {
          C == null || C()
        },
        x = () => {
          h(),
            (k = Eo(
              T(() => {
                var b
                return (b = a.value) == null ? void 0 : b.popperContentRef
              }),
              () => {
                if (i(l)) return
                i(v) !== 'hover' && d()
              },
            ))
        },
        A = () => {
          n.virtualTriggering || d()
        }
      let k
      return (
        W(
          () => i(c),
          (b) => {
            b || k == null || k()
          },
          { flush: 'post' },
        ),
        W(
          () => n.content,
          () => {
            var b, $
            ;($ = (b = a.value) == null ? void 0 : b.updatePopper) == null ||
              $.call(b)
          },
        ),
        t({ contentRef: a }),
        (b, $) => (
          _(),
          Y(
            wo,
            { disabled: !b.teleported, to: i(P) },
            [
              he(
                ho,
                {
                  name: i(p),
                  onAfterLeave: R,
                  onBeforeEnter: H,
                  onAfterEnter: x,
                  onBeforeLeave: m,
                },
                {
                  default: J(() => [
                    i(N)
                      ? rt(
                          (_(),
                          Y(
                            i(Za),
                            je(
                              {
                                key: 0,
                                id: i(u),
                                ref_key: 'contentRef',
                                ref: a,
                              },
                              b.$attrs,
                              {
                                'aria-label': b.ariaLabel,
                                'aria-hidden': i(S),
                                'boundaries-padding': b.boundariesPadding,
                                'fallback-placements': b.fallbackPlacements,
                                'gpu-acceleration': b.gpuAcceleration,
                                offset: b.offset,
                                placement: b.placement,
                                'popper-options': b.popperOptions,
                                strategy: b.strategy,
                                effect: b.effect,
                                enterable: b.enterable,
                                pure: b.pure,
                                'popper-class': b.popperClass,
                                'popper-style': [b.popperStyle, i(I)],
                                'reference-el': b.referenceEl,
                                'trigger-target-el': b.triggerTargetEl,
                                visible: i(E),
                                'z-index': b.zIndex,
                                onMouseenter: i(B),
                                onMouseleave: i(M),
                                onBlur: A,
                                onClose: i(d),
                              },
                            ),
                            {
                              default: J(() => [
                                s.value
                                  ? D('v-if', !0)
                                  : ce(b.$slots, 'default', { key: 0 }),
                              ]),
                              _: 3,
                            },
                            16,
                            [
                              'id',
                              'aria-label',
                              'aria-hidden',
                              'boundaries-padding',
                              'fallback-placements',
                              'gpu-acceleration',
                              'offset',
                              'placement',
                              'popper-options',
                              'strategy',
                              'effect',
                              'enterable',
                              'pure',
                              'popper-class',
                              'popper-style',
                              'reference-el',
                              'trigger-target-el',
                              'visible',
                              'z-index',
                              'onMouseenter',
                              'onMouseleave',
                              'onClose',
                            ],
                          )),
                          [[wn, i(E)]],
                        )
                      : D('v-if', !0),
                  ]),
                  _: 3,
                },
                8,
                ['name'],
              ),
            ],
            8,
            ['disabled', 'to'],
          )
        )
      )
    },
  })
var ui = Ee(li, [['__file', 'content.vue']])
const ci = ['innerHTML'],
  pi = { key: 1 },
  di = X({ name: 'ElTooltip' }),
  fi = X({
    ...di,
    props: ti,
    emits: ni,
    setup(e, { expose: t, emit: n }) {
      const o = e
      aa()
      const r = Tn(),
        a = V(),
        s = V(),
        l = () => {
          var p
          const O = i(a)
          O && ((p = O.popperInstanceRef) == null || p.update())
        },
        u = V(!1),
        c = V(),
        {
          show: v,
          hide: d,
          hasUpdateHandler: w,
        } = ei({ indicator: u, toggleReason: c }),
        { onOpen: h, onClose: y } = sa({
          showAfter: Ne(o, 'showAfter'),
          hideAfter: Ne(o, 'hideAfter'),
          autoClose: Ne(o, 'autoClose'),
          open: v,
          close: d,
        }),
        f = T(() => yn(o.visible) && !w.value)
      ot(Xt, {
        controlled: f,
        id: r,
        open: xo(u),
        trigger: Ne(o, 'trigger'),
        onOpen: (p) => {
          h(p)
        },
        onClose: (p) => {
          y(p)
        },
        onToggle: (p) => {
          i(u) ? y(p) : h(p)
        },
        onShow: () => {
          n('show', c.value)
        },
        onHide: () => {
          n('hide', c.value)
        },
        onBeforeShow: () => {
          n('before-show', c.value)
        },
        onBeforeHide: () => {
          n('before-hide', c.value)
        },
        updatePopper: l,
      }),
        W(
          () => o.disabled,
          (p) => {
            p && u.value && (u.value = !1)
          },
        )
      const C = (p) => {
        var O, N
        const E =
            (N = (O = s.value) == null ? void 0 : O.contentRef) == null
              ? void 0
              : N.popperContentRef,
          P = (p == null ? void 0 : p.relatedTarget) || document.activeElement
        return E && E.contains(P)
      }
      return (
        To(() => u.value && d()),
        t({
          popperRef: a,
          contentRef: s,
          isFocusInsideContent: C,
          updatePopper: l,
          onOpen: h,
          onClose: y,
          hide: d,
        }),
        (p, O) => (
          _(),
          Y(
            i(Ja),
            { ref_key: 'popperRef', ref: a, role: p.role },
            {
              default: J(() => [
                he(
                  ii,
                  {
                    disabled: p.disabled,
                    trigger: p.trigger,
                    'trigger-keys': p.triggerKeys,
                    'virtual-ref': p.virtualRef,
                    'virtual-triggering': p.virtualTriggering,
                  },
                  {
                    default: J(() => [
                      p.$slots.default
                        ? ce(p.$slots, 'default', { key: 0 })
                        : D('v-if', !0),
                    ]),
                    _: 3,
                  },
                  8,
                  [
                    'disabled',
                    'trigger',
                    'trigger-keys',
                    'virtual-ref',
                    'virtual-triggering',
                  ],
                ),
                he(
                  ui,
                  {
                    ref_key: 'contentRef',
                    ref: s,
                    'aria-label': p.ariaLabel,
                    'boundaries-padding': p.boundariesPadding,
                    content: p.content,
                    disabled: p.disabled,
                    effect: p.effect,
                    enterable: p.enterable,
                    'fallback-placements': p.fallbackPlacements,
                    'hide-after': p.hideAfter,
                    'gpu-acceleration': p.gpuAcceleration,
                    offset: p.offset,
                    persistent: p.persistent,
                    'popper-class': p.popperClass,
                    'popper-style': p.popperStyle,
                    placement: p.placement,
                    'popper-options': p.popperOptions,
                    pure: p.pure,
                    'raw-content': p.rawContent,
                    'reference-el': p.referenceEl,
                    'trigger-target-el': p.triggerTargetEl,
                    'show-after': p.showAfter,
                    strategy: p.strategy,
                    teleported: p.teleported,
                    transition: p.transition,
                    'virtual-triggering': p.virtualTriggering,
                    'z-index': p.zIndex,
                    'append-to': p.appendTo,
                  },
                  {
                    default: J(() => [
                      ce(p.$slots, 'content', {}, () => [
                        p.rawContent
                          ? (_(),
                            Z(
                              'span',
                              { key: 0, innerHTML: p.content },
                              null,
                              8,
                              ci,
                            ))
                          : (_(), Z('span', pi, Qe(p.content), 1)),
                      ]),
                      p.showArrow
                        ? (_(),
                          Y(
                            i(Na),
                            { key: 0, 'arrow-offset': p.arrowOffset },
                            null,
                            8,
                            ['arrow-offset'],
                          ))
                        : D('v-if', !0),
                    ]),
                    _: 3,
                  },
                  8,
                  [
                    'aria-label',
                    'boundaries-padding',
                    'content',
                    'disabled',
                    'effect',
                    'enterable',
                    'fallback-placements',
                    'hide-after',
                    'gpu-acceleration',
                    'offset',
                    'persistent',
                    'popper-class',
                    'popper-style',
                    'placement',
                    'popper-options',
                    'pure',
                    'raw-content',
                    'reference-el',
                    'trigger-target-el',
                    'show-after',
                    'strategy',
                    'teleported',
                    'transition',
                    'virtual-triggering',
                    'z-index',
                    'append-to',
                  ],
                ),
              ]),
              _: 3,
            },
            8,
            ['role'],
          )
        )
      )
    },
  })
var vi = Ee(fi, [['__file', 'tooltip.vue']])
const Ci = Pt(vi),
  mi = 100,
  gi = 600,
  gn = {
    beforeMount(e, t) {
      const n = t.value,
        { interval: o = mi, delay: r = gi } = Re(n) ? {} : n
      let a, s
      const l = () => (Re(n) ? n() : n.handler()),
        u = () => {
          s && (clearTimeout(s), (s = void 0)),
            a && (clearInterval(a), (a = void 0))
        }
      e.addEventListener('mousedown', (c) => {
        c.button === 0 &&
          (u(),
          l(),
          document.addEventListener('mouseup', () => u(), { once: !0 }),
          (s = setTimeout(() => {
            a = setInterval(() => {
              l()
            }, o)
          }, r)))
      })
    },
  },
  bi = pe({
    id: { type: String, default: void 0 },
    step: { type: Number, default: 1 },
    stepStrictly: Boolean,
    max: { type: Number, default: Number.POSITIVE_INFINITY },
    min: { type: Number, default: Number.NEGATIVE_INFINITY },
    modelValue: Number,
    readonly: Boolean,
    disabled: Boolean,
    size: hn,
    controls: { type: Boolean, default: !0 },
    controlsPosition: { type: String, default: '', values: ['', 'right'] },
    valueOnClear: {
      type: [String, Number, null],
      validator: (e) => e === null || Q(e) || ['min', 'max'].includes(e),
      default: null,
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10),
    },
    validateEvent: { type: Boolean, default: !0 },
  }),
  yi = {
    [On]: (e, t) => t !== e,
    blur: (e) => e instanceof FocusEvent,
    focus: (e) => e instanceof FocusEvent,
    [Et]: (e) => Q(e) || Oe(e),
    [Te]: (e) => Q(e) || Oe(e),
  },
  hi = ['aria-label', 'onKeydown'],
  wi = ['aria-label', 'onKeydown'],
  Ei = X({ name: 'ElInputNumber' }),
  xi = X({
    ...Ei,
    props: bi,
    emits: yi,
    setup(e, { expose: t, emit: n }) {
      const o = e,
        { t: r } = Oo(),
        a = Ie('input-number'),
        s = V(),
        l = Io({ currentValue: o.modelValue, userInput: null }),
        { formItem: u } = zn(),
        c = T(() => Q(o.modelValue) && o.modelValue <= o.min),
        v = T(() => Q(o.modelValue) && o.modelValue >= o.max),
        d = T(() => {
          const m = p(o.step)
          return gt(o.precision)
            ? Math.max(p(o.modelValue), m)
            : (m > o.precision, o.precision)
        }),
        w = T(() => o.controls && o.controlsPosition === 'right'),
        h = Dn(),
        y = jn(),
        f = T(() => {
          if (l.userInput !== null) return l.userInput
          let m = l.currentValue
          if (Oe(m)) return ''
          if (Q(m)) {
            if (Number.isNaN(m)) return ''
            gt(o.precision) || (m = m.toFixed(o.precision))
          }
          return m
        }),
        C = (m, x) => {
          if ((gt(x) && (x = d.value), x === 0)) return Math.round(m)
          let A = String(m)
          const k = A.indexOf('.')
          if (k === -1 || !A.replace('.', '').split('')[k + x]) return m
          const z = A.length
          return (
            A.charAt(z - 1) === '5' &&
              (A = `${A.slice(0, Math.max(0, z - 1))}6`),
            Number.parseFloat(Number(A).toFixed(x))
          )
        },
        p = (m) => {
          if (Oe(m)) return 0
          const x = m.toString(),
            A = x.indexOf('.')
          let k = 0
          return A !== -1 && (k = x.length - A - 1), k
        },
        O = (m, x = 1) => (Q(m) ? C(m + o.step * x) : l.currentValue),
        N = () => {
          if (o.readonly || y.value || v.value) return
          const m = Number(f.value) || 0,
            x = O(m)
          I(x), n(Et, l.currentValue)
        },
        E = () => {
          if (o.readonly || y.value || c.value) return
          const m = Number(f.value) || 0,
            x = O(m, -1)
          I(x), n(Et, l.currentValue)
        },
        P = (m, x) => {
          const {
            max: A,
            min: k,
            step: b,
            precision: $,
            stepStrictly: z,
            valueOnClear: G,
          } = o
          A < k && _o('InputNumber', 'min should not be greater than max.')
          let K = Number(m)
          if (Oe(m) || Number.isNaN(K)) return null
          if (m === '') {
            if (G === null) return null
            K = ht(G) ? { min: k, max: A }[G] : G
          }
          return (
            z && (K = C(Math.round(K / b) * b, $)),
            gt($) || (K = C(K, $)),
            (K > A || K < k) && ((K = K > A ? A : k), x && n(Te, K)),
            K
          )
        },
        I = (m, x = !0) => {
          var A
          const k = l.currentValue,
            b = P(m)
          if (!x) {
            n(Te, b)
            return
          }
          k !== b &&
            ((l.userInput = null),
            n(Te, b),
            n(On, b, k),
            o.validateEvent &&
              ((A = u == null ? void 0 : u.validate) == null ||
                A.call(u, 'change').catch(($) => It())),
            (l.currentValue = b))
        },
        S = (m) => {
          l.userInput = m
          const x = m === '' ? null : Number(m)
          n(Et, x), I(x, !1)
        },
        R = (m) => {
          const x = m !== '' ? Number(m) : ''
          ;((Q(x) && !Number.isNaN(x)) || m === '') && I(x),
            (l.userInput = null)
        },
        L = () => {
          var m, x
          ;(x = (m = s.value) == null ? void 0 : m.focus) == null || x.call(m)
        },
        B = () => {
          var m, x
          ;(x = (m = s.value) == null ? void 0 : m.blur) == null || x.call(m)
        },
        M = (m) => {
          n('focus', m)
        },
        H = (m) => {
          var x
          ;(l.userInput = null),
            n('blur', m),
            o.validateEvent &&
              ((x = u == null ? void 0 : u.validate) == null ||
                x.call(u, 'blur').catch((A) => It()))
        }
      return (
        W(
          () => o.modelValue,
          (m, x) => {
            const A = P(m, !0)
            l.userInput === null && A !== x && (l.currentValue = A)
          },
          { immediate: !0 },
        ),
        _e(() => {
          var m
          const { min: x, max: A, modelValue: k } = o,
            b = (m = s.value) == null ? void 0 : m.input
          if (
            (b.setAttribute('role', 'spinbutton'),
            Number.isFinite(A)
              ? b.setAttribute('aria-valuemax', String(A))
              : b.removeAttribute('aria-valuemax'),
            Number.isFinite(x)
              ? b.setAttribute('aria-valuemin', String(x))
              : b.removeAttribute('aria-valuemin'),
            b.setAttribute(
              'aria-valuenow',
              l.currentValue || l.currentValue === 0
                ? String(l.currentValue)
                : '',
            ),
            b.setAttribute('aria-disabled', String(y.value)),
            !Q(k) && k != null)
          ) {
            let $ = Number(k)
            Number.isNaN($) && ($ = null), n(Te, $)
          }
        }),
        So(() => {
          var m, x
          const A = (m = s.value) == null ? void 0 : m.input
          A == null ||
            A.setAttribute(
              'aria-valuenow',
              `${(x = l.currentValue) != null ? x : ''}`,
            )
        }),
        t({ focus: L, blur: B }),
        (m, x) => (
          _(),
          Z(
            'div',
            {
              class: q([
                i(a).b(),
                i(a).m(i(h)),
                i(a).is('disabled', i(y)),
                i(a).is('without-controls', !m.controls),
                i(a).is('controls-right', i(w)),
              ]),
              onDragstart: x[1] || (x[1] = Ge(() => {}, ['prevent'])),
            },
            [
              m.controls
                ? rt(
                    (_(),
                    Z(
                      'span',
                      {
                        key: 0,
                        role: 'button',
                        'aria-label': i(r)('el.inputNumber.decrease'),
                        class: q([
                          i(a).e('decrease'),
                          i(a).is('disabled', i(c)),
                        ]),
                        onKeydown: bt(E, ['enter']),
                      },
                      [
                        he(i(Pe), null, {
                          default: J(() => [
                            i(w)
                              ? (_(), Y(i(Co), { key: 0 }))
                              : (_(), Y(i(Ao), { key: 1 })),
                          ]),
                          _: 1,
                        }),
                      ],
                      42,
                      hi,
                    )),
                    [[i(gn), E]],
                  )
                : D('v-if', !0),
              m.controls
                ? rt(
                    (_(),
                    Z(
                      'span',
                      {
                        key: 1,
                        role: 'button',
                        'aria-label': i(r)('el.inputNumber.increase'),
                        class: q([
                          i(a).e('increase'),
                          i(a).is('disabled', i(v)),
                        ]),
                        onKeydown: bt(N, ['enter']),
                      },
                      [
                        he(i(Pe), null, {
                          default: J(() => [
                            i(w)
                              ? (_(), Y(i(Po), { key: 0 }))
                              : (_(), Y(i(Ro), { key: 1 })),
                          ]),
                          _: 1,
                        }),
                      ],
                      42,
                      wi,
                    )),
                    [[i(gn), N]],
                  )
                : D('v-if', !0),
              he(
                i(Oa),
                {
                  id: m.id,
                  ref_key: 'input',
                  ref: s,
                  type: 'number',
                  step: m.step,
                  'model-value': i(f),
                  placeholder: m.placeholder,
                  readonly: m.readonly,
                  disabled: i(y),
                  size: i(h),
                  max: m.max,
                  min: m.min,
                  name: m.name,
                  label: m.label,
                  'validate-event': !1,
                  onWheel: x[0] || (x[0] = Ge(() => {}, ['prevent'])),
                  onKeydown: [
                    bt(Ge(N, ['prevent']), ['up']),
                    bt(Ge(E, ['prevent']), ['down']),
                  ],
                  onBlur: H,
                  onFocus: M,
                  onInput: S,
                  onChange: R,
                },
                null,
                8,
                [
                  'id',
                  'step',
                  'model-value',
                  'placeholder',
                  'readonly',
                  'disabled',
                  'size',
                  'max',
                  'min',
                  'name',
                  'label',
                  'onKeydown',
                ],
              ),
            ],
            34,
          )
        )
      )
    },
  })
var Ti = Ee(xi, [['__file', 'input-number.vue']])
const Ai = Pt(Ti)
export {
  Lt as E,
  Ci as a,
  da as b,
  Dn as c,
  Si as d,
  Ai as e,
  jn as f,
  pa as g,
  Oa as h,
  zn as u,
}
