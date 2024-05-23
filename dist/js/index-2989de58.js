var $f = Object.defineProperty
var Nf = (e, t, s) =>
  t in e
    ? $f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (e[t] = s)
var Pt = (e, t, s) => (Nf(e, typeof t != 'symbol' ? t + '' : t, s), s),
  dl = (e, t, s) => {
    if (!t.has(e)) throw TypeError('Cannot ' + s)
  }
var dt = (e, t, s) => (
    dl(e, t, 'read from private field'), s ? s.call(e) : t.get(e)
  ),
  ns = (e, t, s) => {
    if (t.has(e))
      throw TypeError('Cannot add the same private member more than once')
    t instanceof WeakSet ? t.add(e) : t.set(e, s)
  },
  $n = (e, t, s, n) => (
    dl(e, t, 'write to private field'), n ? n.call(e, s) : t.set(e, s), s
  )
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === 'childList')
        for (const o of r.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(i) {
    const r = {}
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const r = s(i)
    fetch(i.href, r)
  }
})()
/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ca(e, t) {
  const s = new Set(e.split(','))
  return t ? (n) => s.has(n.toLowerCase()) : (n) => s.has(n)
}
const Tt = {},
  cn = [],
  ne = () => {},
  Df = () => !1,
  pr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ha = (e) => e.startsWith('onUpdate:'),
  Ft = Object.assign,
  ua = (e, t) => {
    const s = e.indexOf(t)
    s > -1 && e.splice(s, 1)
  },
  zf = Object.prototype.hasOwnProperty,
  mt = (e, t) => zf.call(e, t),
  tt = Array.isArray,
  hn = (e) => vi(e) === '[object Map]',
  Eh = (e) => vi(e) === '[object Set]',
  Vf = (e) => vi(e) === '[object RegExp]',
  it = (e) => typeof e == 'function',
  wt = (e) => typeof e == 'string',
  Mn = (e) => typeof e == 'symbol',
  xt = (e) => e !== null && typeof e == 'object',
  Ph = (e) => (xt(e) || it(e)) && it(e.then) && it(e.catch),
  Th = Object.prototype.toString,
  vi = (e) => Th.call(e),
  Uf = (e) => vi(e).slice(8, -1),
  Mh = (e) => vi(e) === '[object Object]',
  da = (e) =>
    wt(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Qn = ca(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  mr = (e) => {
    const t = Object.create(null)
    return (s) => t[s] || (t[s] = e(s))
  },
  Hf = /-(\w)/g,
  Fe = mr((e) => e.replace(Hf, (t, s) => (s ? s.toUpperCase() : ''))),
  Gf = /\B([A-Z])/g,
  Ss = mr((e) => e.replace(Gf, '-$1').toLowerCase()),
  gr = mr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  $r = mr((e) => (e ? `on${gr(e)}` : '')),
  ws = (e, t) => !Object.is(e, t),
  un = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t)
  },
  tr = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s })
  },
  xo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Wf = (e) => {
    const t = wt(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let fl
const fa = () =>
  fl ||
  (fl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function me(e) {
  if (tt(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        i = wt(n) ? Kf(n) : me(n)
      if (i) for (const r in i) t[r] = i[r]
    }
    return t
  } else if (wt(e) || xt(e)) return e
}
const jf = /;(?![^(]*\))/g,
  Yf = /:([^]+)/,
  Xf = /\/\*[^]*?\*\//g
function Kf(e) {
  const t = {}
  return (
    e
      .replace(Xf, '')
      .split(jf)
      .forEach((s) => {
        if (s) {
          const n = s.split(Yf)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function Bt(e) {
  let t = ''
  if (wt(e)) t = e
  else if (tt(e))
    for (let s = 0; s < e.length; s++) {
      const n = Bt(e[s])
      n && (t += n + ' ')
    }
  else if (xt(e)) for (const s in e) e[s] && (t += s + ' ')
  return t.trim()
}
const qf =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Zf = ca(qf)
function Ih(e) {
  return !!e || e === ''
}
const yn = (e) =>
    wt(e)
      ? e
      : e == null
      ? ''
      : tt(e) || (xt(e) && (e.toString === Th || !it(e.toString)))
      ? JSON.stringify(e, Rh, 2)
      : String(e),
  Rh = (e, t) =>
    t && t.__v_isRef
      ? Rh(e, t.value)
      : hn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (s, [n, i], r) => ((s[Nr(n, r) + ' =>'] = i), s),
            {},
          ),
        }
      : Eh(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((s) => Nr(s)) }
      : Mn(t)
      ? Nr(t)
      : xt(t) && !tt(t) && !Mh(t)
      ? String(t)
      : t,
  Nr = (e, t = '') => {
    var s
    return Mn(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  }
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let fe
class kh {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = fe),
      !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const s = fe
      try {
        return (fe = this), t()
      } finally {
        fe = s
      }
    }
  }
  on() {
    fe = this
  }
  off() {
    fe = this.parent
  }
  stop(t) {
    if (this._active) {
      let s, n
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop()
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]()
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Lh(e) {
  return new kh(e)
}
function Qf(e, t = fe) {
  t && t.active && t.effects.push(e)
}
function pa() {
  return fe
}
function Bh(e) {
  fe && fe.cleanups.push(e)
}
let Hs
class ma {
  constructor(t, s, n, i) {
    ;(this.fn = t),
      (this.trigger = s),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Qf(this, i)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), Xs()
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t]
        if (s.computed && (Jf(s.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ks()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = xs,
      s = Hs
    try {
      return (xs = !0), (Hs = this), this._runnings++, pl(this), this.fn()
    } finally {
      ml(this), this._runnings--, (Hs = s), (xs = t)
    }
  }
  stop() {
    var t
    this.active &&
      (pl(this),
      ml(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function Jf(e) {
  return e.value
}
function pl(e) {
  e._trackId++, (e._depsLength = 0)
}
function ml(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Oh(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Oh(e, t) {
  const s = e.get(t)
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let xs = !0,
  bo = 0
const Fh = []
function Xs() {
  Fh.push(xs), (xs = !1)
}
function Ks() {
  const e = Fh.pop()
  xs = e === void 0 ? !0 : e
}
function ga() {
  bo++
}
function _a() {
  for (bo--; !bo && vo.length; ) vo.shift()()
}
function $h(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const n = e.deps[e._depsLength]
    n !== t ? (n && Oh(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const vo = []
function Nh(e, t, s) {
  ga()
  for (const n of e.keys()) {
    let i
    n._dirtyLevel < t &&
      (i ?? (i = e.get(n) === n._trackId)) &&
      (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0),
      (n._dirtyLevel = t)),
      n._shouldSchedule &&
        (i ?? (i = e.get(n) === n._trackId)) &&
        (n.trigger(),
        (!n._runnings || n.allowRecurse) &&
          n._dirtyLevel !== 2 &&
          ((n._shouldSchedule = !1), n.scheduler && vo.push(n.scheduler)))
  }
  _a()
}
const Dh = (e, t) => {
    const s = new Map()
    return (s.cleanup = e), (s.computed = t), s
  },
  er = new WeakMap(),
  Gs = Symbol(''),
  wo = Symbol('')
function ce(e, t, s) {
  if (xs && Hs) {
    let n = er.get(e)
    n || er.set(e, (n = new Map()))
    let i = n.get(s)
    i || n.set(s, (i = Dh(() => n.delete(s)))), $h(Hs, i)
  }
}
function Qe(e, t, s, n, i, r) {
  const o = er.get(e)
  if (!o) return
  let a = []
  if (t === 'clear') a = [...o.values()]
  else if (s === 'length' && tt(e)) {
    const l = Number(n)
    o.forEach((h, c) => {
      ;(c === 'length' || (!Mn(c) && c >= l)) && a.push(h)
    })
  } else
    switch ((s !== void 0 && a.push(o.get(s)), t)) {
      case 'add':
        tt(e)
          ? da(s) && a.push(o.get('length'))
          : (a.push(o.get(Gs)), hn(e) && a.push(o.get(wo)))
        break
      case 'delete':
        tt(e) || (a.push(o.get(Gs)), hn(e) && a.push(o.get(wo)))
        break
      case 'set':
        hn(e) && a.push(o.get(Gs))
        break
    }
  ga()
  for (const l of a) l && Nh(l, 4)
  _a()
}
function tp(e, t) {
  var s
  return (s = er.get(e)) == null ? void 0 : s.get(t)
}
const ep = ca('__proto__,__v_isRef,__isVue'),
  zh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Mn),
  ),
  gl = sp()
function sp() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...s) {
        const n = gt(this)
        for (let r = 0, o = this.length; r < o; r++) ce(n, 'get', r + '')
        const i = n[t](...s)
        return i === -1 || i === !1 ? n[t](...s.map(gt)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...s) {
        Xs(), ga()
        const n = gt(this)[t].apply(this, s)
        return _a(), Ks(), n
      }
    }),
    e
  )
}
function np(e) {
  const t = gt(this)
  return ce(t, 'has', e), t.hasOwnProperty(e)
}
class Vh {
  constructor(t = !1, s = !1) {
    ;(this._isReadonly = t), (this._shallow = s)
  }
  get(t, s, n) {
    const i = this._isReadonly,
      r = this._shallow
    if (s === '__v_isReactive') return !i
    if (s === '__v_isReadonly') return i
    if (s === '__v_isShallow') return r
    if (s === '__v_raw')
      return n === (i ? (r ? gp : Wh) : r ? Gh : Hh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0
    const o = tt(t)
    if (!i) {
      if (o && mt(gl, s)) return Reflect.get(gl, s, n)
      if (s === 'hasOwnProperty') return np
    }
    const a = Reflect.get(t, s, n)
    return (Mn(s) ? zh.has(s) : ep(s)) || (i || ce(t, 'get', s), r)
      ? a
      : It(a)
      ? o && da(s)
        ? a
        : a.value
      : xt(a)
      ? i
        ? va(a)
        : In(a)
      : a
  }
}
class Uh extends Vh {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, s, n, i) {
    let r = t[s]
    if (!this._shallow) {
      const l = xn(r)
      if (
        (!sr(n) && !xn(n) && ((r = gt(r)), (n = gt(n))),
        !tt(t) && It(r) && !It(n))
      )
        return l ? !1 : ((r.value = n), !0)
    }
    const o = tt(t) && da(s) ? Number(s) < t.length : mt(t, s),
      a = Reflect.set(t, s, n, i)
    return (
      t === gt(i) && (o ? ws(n, r) && Qe(t, 'set', s, n) : Qe(t, 'add', s, n)),
      a
    )
  }
  deleteProperty(t, s) {
    const n = mt(t, s)
    t[s]
    const i = Reflect.deleteProperty(t, s)
    return i && n && Qe(t, 'delete', s, void 0), i
  }
  has(t, s) {
    const n = Reflect.has(t, s)
    return (!Mn(s) || !zh.has(s)) && ce(t, 'has', s), n
  }
  ownKeys(t) {
    return ce(t, 'iterate', tt(t) ? 'length' : Gs), Reflect.ownKeys(t)
  }
}
class ip extends Vh {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, s) {
    return !0
  }
  deleteProperty(t, s) {
    return !0
  }
}
const rp = new Uh(),
  op = new ip(),
  ap = new Uh(!0),
  ya = (e) => e,
  _r = (e) => Reflect.getPrototypeOf(e)
function Pi(e, t, s = !1, n = !1) {
  e = e.__v_raw
  const i = gt(e),
    r = gt(t)
  s || (ws(t, r) && ce(i, 'get', t), ce(i, 'get', r))
  const { has: o } = _r(i),
    a = n ? ya : s ? Aa : li
  if (o.call(i, t)) return a(e.get(t))
  if (o.call(i, r)) return a(e.get(r))
  e !== i && e.get(t)
}
function Ti(e, t = !1) {
  const s = this.__v_raw,
    n = gt(s),
    i = gt(e)
  return (
    t || (ws(e, i) && ce(n, 'has', e), ce(n, 'has', i)),
    e === i ? s.has(e) : s.has(e) || s.has(i)
  )
}
function Mi(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ce(gt(e), 'iterate', Gs), Reflect.get(e, 'size', e)
  )
}
function _l(e) {
  e = gt(e)
  const t = gt(this)
  return _r(t).has.call(t, e) || (t.add(e), Qe(t, 'add', e, e)), this
}
function yl(e, t) {
  t = gt(t)
  const s = gt(this),
    { has: n, get: i } = _r(s)
  let r = n.call(s, e)
  r || ((e = gt(e)), (r = n.call(s, e)))
  const o = i.call(s, e)
  return (
    s.set(e, t), r ? ws(t, o) && Qe(s, 'set', e, t) : Qe(s, 'add', e, t), this
  )
}
function xl(e) {
  const t = gt(this),
    { has: s, get: n } = _r(t)
  let i = s.call(t, e)
  i || ((e = gt(e)), (i = s.call(t, e))), n && n.call(t, e)
  const r = t.delete(e)
  return i && Qe(t, 'delete', e, void 0), r
}
function bl() {
  const e = gt(this),
    t = e.size !== 0,
    s = e.clear()
  return t && Qe(e, 'clear', void 0, void 0), s
}
function Ii(e, t) {
  return function (n, i) {
    const r = this,
      o = r.__v_raw,
      a = gt(o),
      l = t ? ya : e ? Aa : li
    return (
      !e && ce(a, 'iterate', Gs), o.forEach((h, c) => n.call(i, l(h), l(c), r))
    )
  }
}
function Ri(e, t, s) {
  return function (...n) {
    const i = this.__v_raw,
      r = gt(i),
      o = hn(r),
      a = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      h = i[e](...n),
      c = s ? ya : t ? Aa : li
    return (
      !t && ce(r, 'iterate', l ? wo : Gs),
      {
        next() {
          const { value: u, done: d } = h.next()
          return d
            ? { value: u, done: d }
            : { value: a ? [c(u[0]), c(u[1])] : c(u), done: d }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function is(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function lp() {
  const e = {
      get(r) {
        return Pi(this, r)
      },
      get size() {
        return Mi(this)
      },
      has: Ti,
      add: _l,
      set: yl,
      delete: xl,
      clear: bl,
      forEach: Ii(!1, !1),
    },
    t = {
      get(r) {
        return Pi(this, r, !1, !0)
      },
      get size() {
        return Mi(this)
      },
      has: Ti,
      add: _l,
      set: yl,
      delete: xl,
      clear: bl,
      forEach: Ii(!1, !0),
    },
    s = {
      get(r) {
        return Pi(this, r, !0)
      },
      get size() {
        return Mi(this, !0)
      },
      has(r) {
        return Ti.call(this, r, !0)
      },
      add: is('add'),
      set: is('set'),
      delete: is('delete'),
      clear: is('clear'),
      forEach: Ii(!0, !1),
    },
    n = {
      get(r) {
        return Pi(this, r, !0, !0)
      },
      get size() {
        return Mi(this, !0)
      },
      has(r) {
        return Ti.call(this, r, !0)
      },
      add: is('add'),
      set: is('set'),
      delete: is('delete'),
      clear: is('clear'),
      forEach: Ii(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      ;(e[r] = Ri(r, !1, !1)),
        (s[r] = Ri(r, !0, !1)),
        (t[r] = Ri(r, !1, !0)),
        (n[r] = Ri(r, !0, !0))
    }),
    [e, s, t, n]
  )
}
const [cp, hp, up, dp] = lp()
function xa(e, t) {
  const s = t ? (e ? dp : up) : e ? hp : cp
  return (n, i, r) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
      ? e
      : i === '__v_raw'
      ? n
      : Reflect.get(mt(s, i) && i in n ? s : n, i, r)
}
const fp = { get: xa(!1, !1) },
  pp = { get: xa(!1, !0) },
  mp = { get: xa(!0, !1) },
  Hh = new WeakMap(),
  Gh = new WeakMap(),
  Wh = new WeakMap(),
  gp = new WeakMap()
function _p(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function yp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _p(Uf(e))
}
function In(e) {
  return xn(e) ? e : wa(e, !1, rp, fp, Hh)
}
function ba(e) {
  return wa(e, !1, ap, pp, Gh)
}
function va(e) {
  return wa(e, !0, op, mp, Wh)
}
function wa(e, t, s, n, i) {
  if (!xt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = i.get(e)
  if (r) return r
  const o = yp(e)
  if (o === 0) return e
  const a = new Proxy(e, o === 2 ? n : s)
  return i.set(e, a), a
}
function bs(e) {
  return xn(e) ? bs(e.__v_raw) : !!(e && e.__v_isReactive)
}
function xn(e) {
  return !!(e && e.__v_isReadonly)
}
function sr(e) {
  return !!(e && e.__v_isShallow)
}
function jh(e) {
  return bs(e) || xn(e)
}
function gt(e) {
  const t = e && e.__v_raw
  return t ? gt(t) : e
}
function yr(e) {
  return Object.isExtensible(e) && tr(e, '__v_skip', !0), e
}
const li = (e) => (xt(e) ? In(e) : e),
  Aa = (e) => (xt(e) ? va(e) : e)
class Yh {
  constructor(t, s, n, i) {
    ;(this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ma(
        () => t(this._value),
        () => Xi(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = n)
  }
  get value() {
    const t = gt(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        ws(t._value, (t._value = t.effect.run())) &&
        Xi(t, 4),
      Xh(t),
      t.effect._dirtyLevel >= 2 && Xi(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function xp(e, t, s = !1) {
  let n, i
  const r = it(e)
  return (
    r ? ((n = e), (i = ne)) : ((n = e.get), (i = e.set)),
    new Yh(n, i, r || !i, s)
  )
}
function Xh(e) {
  var t
  xs &&
    Hs &&
    ((e = gt(e)),
    $h(
      Hs,
      (t = e.dep) != null
        ? t
        : (e.dep = Dh(() => (e.dep = void 0), e instanceof Yh ? e : void 0)),
    ))
}
function Xi(e, t = 4, s) {
  e = gt(e)
  const n = e.dep
  n && Nh(n, t)
}
function It(e) {
  return !!(e && e.__v_isRef === !0)
}
function ht(e) {
  return Kh(e, !1)
}
function bp(e) {
  return Kh(e, !0)
}
function Kh(e, t) {
  return It(e) ? e : new vp(e, t)
}
class vp {
  constructor(t, s) {
    ;(this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : gt(t)),
      (this._value = s ? t : li(t))
  }
  get value() {
    return Xh(this), this._value
  }
  set value(t) {
    const s = this.__v_isShallow || sr(t) || xn(t)
    ;(t = s ? t : gt(t)),
      ws(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = s ? t : li(t)), Xi(this, 4))
  }
}
function F(e) {
  return It(e) ? e.value : e
}
const wp = {
  get: (e, t, s) => F(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t]
    return It(i) && !It(s) ? ((i.value = s), !0) : Reflect.set(e, t, s, n)
  },
}
function qh(e) {
  return bs(e) ? e : new Proxy(e, wp)
}
function Zh(e) {
  const t = tt(e) ? new Array(e.length) : {}
  for (const s in e) t[s] = Qh(e, s)
  return t
}
class Ap {
  constructor(t, s, n) {
    ;(this._object = t),
      (this._key = s),
      (this._defaultValue = n),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return tp(gt(this._object), this._key)
  }
}
class Sp {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function jw(e, t, s) {
  return It(e)
    ? e
    : it(e)
    ? new Sp(e)
    : xt(e) && arguments.length > 1
    ? Qh(e, t, s)
    : ht(e)
}
function Qh(e, t, s) {
  const n = e[t]
  return It(n) ? n : new Ap(e, t, s)
}
/**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function vs(e, t, s, n) {
  let i
  try {
    i = n ? e(...n) : e()
  } catch (r) {
    xr(r, t, s)
  }
  return i
}
function Ce(e, t, s, n) {
  if (it(e)) {
    const r = vs(e, t, s, n)
    return (
      r &&
        Ph(r) &&
        r.catch((o) => {
          xr(o, t, s)
        }),
      r
    )
  }
  const i = []
  for (let r = 0; r < e.length; r++) i.push(Ce(e[r], t, s, n))
  return i
}
function xr(e, t, s, n = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let r = t.parent
    const o = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${s}`
    for (; r; ) {
      const h = r.ec
      if (h) {
        for (let c = 0; c < h.length; c++) if (h[c](e, o, a) === !1) return
      }
      r = r.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      vs(l, null, 10, [e, o, a])
      return
    }
  }
  Cp(e, s, i, n)
}
function Cp(e, t, s, n = !0) {
  console.error(e)
}
let ci = !1,
  Ao = !1
const Kt = []
let Ge = 0
const dn = []
let cs = null,
  Ds = 0
const Jh = Promise.resolve()
let Sa = null
function qs(e) {
  const t = Sa || Jh
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ep(e) {
  let t = Ge + 1,
    s = Kt.length
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      i = Kt[n],
      r = hi(i)
    r < e || (r === e && i.pre) ? (t = n + 1) : (s = n)
  }
  return t
}
function Ca(e) {
  ;(!Kt.length || !Kt.includes(e, ci && e.allowRecurse ? Ge + 1 : Ge)) &&
    (e.id == null ? Kt.push(e) : Kt.splice(Ep(e.id), 0, e), tu())
}
function tu() {
  !ci && !Ao && ((Ao = !0), (Sa = Jh.then(su)))
}
function Pp(e) {
  const t = Kt.indexOf(e)
  t > Ge && Kt.splice(t, 1)
}
function Tp(e) {
  tt(e)
    ? dn.push(...e)
    : (!cs || !cs.includes(e, e.allowRecurse ? Ds + 1 : Ds)) && dn.push(e),
    tu()
}
function vl(e, t, s = ci ? Ge + 1 : 0) {
  for (; s < Kt.length; s++) {
    const n = Kt[s]
    if (n && n.pre) {
      if (e && n.id !== e.uid) continue
      Kt.splice(s, 1), s--, n()
    }
  }
}
function eu(e) {
  if (dn.length) {
    const t = [...new Set(dn)].sort((s, n) => hi(s) - hi(n))
    if (((dn.length = 0), cs)) {
      cs.push(...t)
      return
    }
    for (cs = t, Ds = 0; Ds < cs.length; Ds++) cs[Ds]()
    ;(cs = null), (Ds = 0)
  }
}
const hi = (e) => (e.id == null ? 1 / 0 : e.id),
  Mp = (e, t) => {
    const s = hi(e) - hi(t)
    if (s === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return s
  }
function su(e) {
  ;(Ao = !1), (ci = !0), Kt.sort(Mp)
  const t = ne
  try {
    for (Ge = 0; Ge < Kt.length; Ge++) {
      const s = Kt[Ge]
      s && s.active !== !1 && vs(s, null, 14)
    }
  } finally {
    ;(Ge = 0),
      (Kt.length = 0),
      eu(),
      (ci = !1),
      (Sa = null),
      (Kt.length || dn.length) && su()
  }
}
function Ip(e, t, ...s) {
  if (e.isUnmounted) return
  const n = e.vnode.props || Tt
  let i = s
  const r = t.startsWith('update:'),
    o = r && t.slice(7)
  if (o && o in n) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: u, trim: d } = n[c] || Tt
    d && (i = s.map((f) => (wt(f) ? f.trim() : f))), u && (i = s.map(xo))
  }
  let a,
    l = n[(a = $r(t))] || n[(a = $r(Fe(t)))]
  !l && r && (l = n[(a = $r(Ss(t)))]), l && Ce(l, e, 6, i)
  const h = n[a + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Ce(h, e, 6, i)
  }
}
function nu(e, t, s = !1) {
  const n = t.emitsCache,
    i = n.get(e)
  if (i !== void 0) return i
  const r = e.emits
  let o = {},
    a = !1
  if (!it(e)) {
    const l = (h) => {
      const c = nu(h, t, !0)
      c && ((a = !0), Ft(o, c))
    }
    !s && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !r && !a
    ? (xt(e) && n.set(e, null), null)
    : (tt(r) ? r.forEach((l) => (o[l] = null)) : Ft(o, r),
      xt(e) && n.set(e, o),
      o)
}
function br(e, t) {
  return !e || !pr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, Ss(t)) || mt(e, t))
}
let Ot = null,
  vr = null
function nr(e) {
  const t = Ot
  return (Ot = e), (vr = (e && e.type.__scopeId) || null), t
}
function iu(e) {
  vr = e
}
function ru() {
  vr = null
}
function Xt(e, t = Ot, s) {
  if (!t || e._n) return e
  const n = (...i) => {
    n._d && Ol(-1)
    const r = nr(t)
    let o
    try {
      o = e(...i)
    } finally {
      nr(r), n._d && Ol(1)
    }
    return o
  }
  return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function Dr(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    props: r,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: h,
    render: c,
    renderCache: u,
    data: d,
    setupState: f,
    ctx: p,
    inheritAttrs: g,
  } = e
  let m, b
  const y = nr(e)
  try {
    if (s.shapeFlag & 4) {
      const w = i || n,
        M = w
      ;(m = He(c.call(M, w, u, r, f, d, p))), (b = l)
    } else {
      const w = t
      ;(m = He(
        w.length > 1 ? w(r, { attrs: l, slots: a, emit: h }) : w(r, null),
      )),
        (b = t.props ? l : Rp(l))
    }
  } catch (w) {
    ;(ei.length = 0), xr(w, e, 1), (m = ct(Ee))
  }
  let v = m
  if (b && g !== !1) {
    const w = Object.keys(b),
      { shapeFlag: M } = v
    w.length && M & 7 && (o && w.some(ha) && (b = kp(b, o)), (v = ts(v, b)))
  }
  return (
    s.dirs && ((v = ts(v)), (v.dirs = v.dirs ? v.dirs.concat(s.dirs) : s.dirs)),
    s.transition && (v.transition = s.transition),
    (m = v),
    nr(y),
    m
  )
}
const Rp = (e) => {
    let t
    for (const s in e)
      (s === 'class' || s === 'style' || pr(s)) && ((t || (t = {}))[s] = e[s])
    return t
  },
  kp = (e, t) => {
    const s = {}
    for (const n in e) (!ha(n) || !(n.slice(9) in t)) && (s[n] = e[n])
    return s
  }
function Lp(e, t, s) {
  const { props: n, children: i, component: r } = e,
    { props: o, children: a, patchFlag: l } = t,
    h = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (s && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return n ? wl(n, o, h) : !!o
    if (l & 8) {
      const c = t.dynamicProps
      for (let u = 0; u < c.length; u++) {
        const d = c[u]
        if (o[d] !== n[d] && !br(h, d)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : n === o
      ? !1
      : n
      ? o
        ? wl(n, o, h)
        : !0
      : !!o
  return !1
}
function wl(e, t, s) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let i = 0; i < n.length; i++) {
    const r = n[i]
    if (t[r] !== e[r] && !br(s, r)) return !0
  }
  return !1
}
function Bp({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = s), (t = t.parent)
    else break
  }
}
const Ea = 'components'
function Op(e, t) {
  return lu(Ea, e, !0, t) || e
}
const ou = Symbol.for('v-ndc')
function au(e) {
  return wt(e) ? lu(Ea, e, !1) || e : e || ou
}
function lu(e, t, s = !0, n = !1) {
  const i = Ot || zt
  if (i) {
    const r = i.type
    if (e === Ea) {
      const a = ko(r, !1)
      if (a && (a === t || a === Fe(t) || a === gr(Fe(t)))) return r
    }
    const o = Al(i[e] || r[e], t) || Al(i.appContext[e], t)
    return !o && n ? r : o
  }
}
function Al(e, t) {
  return e && (e[t] || e[Fe(t)] || e[gr(Fe(t))])
}
const cu = (e) => e.__isSuspense
function Fp(e, t) {
  t && t.pendingBranch
    ? tt(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Tp(e)
}
const $p = Symbol.for('v-scx'),
  Np = () => Vt($p)
function Yw(e, t) {
  return Pa(e, null, t)
}
const ki = {}
function Zt(e, t, s) {
  return Pa(e, t, s)
}
function Pa(
  e,
  t,
  { immediate: s, deep: n, flush: i, once: r, onTrack: o, onTrigger: a } = Tt,
) {
  if (t && r) {
    const k = t
    t = (...E) => {
      k(...E), M()
    }
  }
  const l = zt,
    h = (k) => (n === !0 ? k : zs(k, n === !1 ? 1 : void 0))
  let c,
    u = !1,
    d = !1
  if (
    (It(e)
      ? ((c = () => e.value), (u = sr(e)))
      : bs(e)
      ? ((c = () => h(e)), (u = !0))
      : tt(e)
      ? ((d = !0),
        (u = e.some((k) => bs(k) || sr(k))),
        (c = () =>
          e.map((k) => {
            if (It(k)) return k.value
            if (bs(k)) return h(k)
            if (it(k)) return vs(k, l, 2)
          })))
      : it(e)
      ? t
        ? (c = () => vs(e, l, 2))
        : (c = () => (f && f(), Ce(e, l, 3, [p])))
      : (c = ne),
    t && n)
  ) {
    const k = c
    c = () => zs(k())
  }
  let f,
    p = (k) => {
      f = v.onStop = () => {
        vs(k, l, 4), (f = v.onStop = void 0)
      }
    },
    g
  if (Er)
    if (
      ((p = ne),
      t ? s && Ce(t, l, 3, [c(), d ? [] : void 0, p]) : c(),
      i === 'sync')
    ) {
      const k = Np()
      g = k.__watcherHandles || (k.__watcherHandles = [])
    } else return ne
  let m = d ? new Array(e.length).fill(ki) : ki
  const b = () => {
    if (!(!v.active || !v.dirty))
      if (t) {
        const k = v.run()
        ;(n || u || (d ? k.some((E, C) => ws(E, m[C])) : ws(k, m))) &&
          (f && f(),
          Ce(t, l, 3, [k, m === ki ? void 0 : d && m[0] === ki ? [] : m, p]),
          (m = k))
      } else v.run()
  }
  b.allowRecurse = !!t
  let y
  i === 'sync'
    ? (y = b)
    : i === 'post'
    ? (y = () => Ut(b, l && l.suspense))
    : ((b.pre = !0), l && (b.id = l.uid), (y = () => Ca(b)))
  const v = new ma(c, ne, y),
    w = pa(),
    M = () => {
      v.stop(), w && ua(w.effects, v)
    }
  return (
    t
      ? s
        ? b()
        : (m = v.run())
      : i === 'post'
      ? Ut(v.run.bind(v), l && l.suspense)
      : v.run(),
    g && g.push(M),
    M
  )
}
function Dp(e, t, s) {
  const n = this.proxy,
    i = wt(e) ? (e.includes('.') ? hu(n, e) : () => n[e]) : e.bind(n, n)
  let r
  it(t) ? (r = t) : ((r = t.handler), (s = t))
  const o = wi(this),
    a = Pa(i, r.bind(n), s)
  return o(), a
}
function hu(e, t) {
  const s = t.split('.')
  return () => {
    let n = e
    for (let i = 0; i < s.length && n; i++) n = n[s[i]]
    return n
  }
}
function zs(e, t, s = 0, n) {
  if (!xt(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (s >= t) return e
    s++
  }
  if (((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), It(e))) zs(e.value, t, s, n)
  else if (tt(e)) for (let i = 0; i < e.length; i++) zs(e[i], t, s, n)
  else if (Eh(e) || hn(e))
    e.forEach((i) => {
      zs(i, t, s, n)
    })
  else if (Mh(e)) for (const i in e) zs(e[i], t, s, n)
  return e
}
function bn(e, t) {
  if (Ot === null) return e
  const s = Pr(Ot) || Ot.proxy,
    n = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [r, o, a, l = Tt] = t[i]
    r &&
      (it(r) && (r = { mounted: r, updated: r }),
      r.deep && zs(o),
      n.push({
        dir: r,
        instance: s,
        value: o,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }))
  }
  return e
}
function Ms(e, t, s, n) {
  const i = e.dirs,
    r = t && t.dirs
  for (let o = 0; o < i.length; o++) {
    const a = i[o]
    r && (a.oldValue = r[o].value)
    let l = a.dir[n]
    l && (Xs(), Ce(l, s, 8, [e.el, a, e, t]), Ks())
  }
}
const hs = Symbol('_leaveCb'),
  Li = Symbol('_enterCb')
function zp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Te(() => {
      e.isMounted = !0
    }),
    Ta(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const ve = [Function, Array],
  uu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ve,
    onEnter: ve,
    onAfterEnter: ve,
    onEnterCancelled: ve,
    onBeforeLeave: ve,
    onLeave: ve,
    onAfterLeave: ve,
    onLeaveCancelled: ve,
    onBeforeAppear: ve,
    onAppear: ve,
    onAfterAppear: ve,
    onAppearCancelled: ve,
  },
  Vp = {
    name: 'BaseTransition',
    props: uu,
    setup(e, { slots: t }) {
      const s = Cs(),
        n = zp()
      let i
      return () => {
        const r = t.default && fu(t.default(), !0)
        if (!r || !r.length) return
        let o = r[0]
        if (r.length > 1) {
          for (const g of r)
            if (g.type !== Ee) {
              o = g
              break
            }
        }
        const a = gt(e),
          { mode: l } = a
        if (n.isLeaving) return zr(o)
        const h = Sl(o)
        if (!h) return zr(o)
        const c = So(h, a, n, s)
        ir(h, c)
        const u = s.subTree,
          d = u && Sl(u)
        let f = !1
        const { getTransitionKey: p } = h.type
        if (p) {
          const g = p()
          i === void 0 ? (i = g) : g !== i && ((i = g), (f = !0))
        }
        if (d && d.type !== Ee && (!ms(h, d) || f)) {
          const g = So(d, a, n, s)
          if ((ir(d, g), l === 'out-in'))
            return (
              (n.isLeaving = !0),
              (g.afterLeave = () => {
                ;(n.isLeaving = !1),
                  s.update.active !== !1 && ((s.effect.dirty = !0), s.update())
              }),
              zr(o)
            )
          l === 'in-out' &&
            h.type !== Ee &&
            (g.delayLeave = (m, b, y) => {
              const v = du(n, d)
              ;(v[String(d.key)] = d),
                (m[hs] = () => {
                  b(), (m[hs] = void 0), delete c.delayedLeave
                }),
                (c.delayedLeave = y)
            })
        }
        return o
      }
    },
  },
  Up = Vp
function du(e, t) {
  const { leavingVNodes: s } = e
  let n = s.get(t.type)
  return n || ((n = Object.create(null)), s.set(t.type, n)), n
}
function So(e, t, s, n) {
  const {
      appear: i,
      mode: r,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: h,
      onEnterCancelled: c,
      onBeforeLeave: u,
      onLeave: d,
      onAfterLeave: f,
      onLeaveCancelled: p,
      onBeforeAppear: g,
      onAppear: m,
      onAfterAppear: b,
      onAppearCancelled: y,
    } = t,
    v = String(e.key),
    w = du(s, e),
    M = (C, S) => {
      C && Ce(C, n, 9, S)
    },
    k = (C, S) => {
      const P = S[1]
      M(C, S),
        tt(C) ? C.every((Y) => Y.length <= 1) && P() : C.length <= 1 && P()
    },
    E = {
      mode: r,
      persisted: o,
      beforeEnter(C) {
        let S = a
        if (!s.isMounted)
          if (i) S = g || a
          else return
        C[hs] && C[hs](!0)
        const P = w[v]
        P && ms(e, P) && P.el[hs] && P.el[hs](), M(S, [C])
      },
      enter(C) {
        let S = l,
          P = h,
          Y = c
        if (!s.isMounted)
          if (i) (S = m || l), (P = b || h), (Y = y || c)
          else return
        let V = !1
        const D = (C[Li] = (G) => {
          V ||
            ((V = !0),
            G ? M(Y, [C]) : M(P, [C]),
            E.delayedLeave && E.delayedLeave(),
            (C[Li] = void 0))
        })
        S ? k(S, [C, D]) : D()
      },
      leave(C, S) {
        const P = String(e.key)
        if ((C[Li] && C[Li](!0), s.isUnmounting)) return S()
        M(u, [C])
        let Y = !1
        const V = (C[hs] = (D) => {
          Y ||
            ((Y = !0),
            S(),
            D ? M(p, [C]) : M(f, [C]),
            (C[hs] = void 0),
            w[P] === e && delete w[P])
        })
        ;(w[P] = e), d ? k(d, [C, V]) : V()
      },
      clone(C) {
        return So(C, t, s, n)
      },
    }
  return E
}
function zr(e) {
  if (wr(e)) return (e = ts(e)), (e.children = null), e
}
function Sl(e) {
  return wr(e) ? (e.children ? e.children[0] : void 0) : e
}
function ir(e, t) {
  e.shapeFlag & 6 && e.component
    ? ir(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function fu(e, t = !1, s) {
  let n = [],
    i = 0
  for (let r = 0; r < e.length; r++) {
    let o = e[r]
    const a = s == null ? o.key : String(s) + String(o.key != null ? o.key : r)
    o.type === ee
      ? (o.patchFlag & 128 && i++, (n = n.concat(fu(o.children, t, a))))
      : (t || o.type !== Ee) && n.push(a != null ? ts(o, { key: a }) : o)
  }
  if (i > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2
  return n
}
/*! #__NO_SIDE_EFFECTS__ */ function st(e, t) {
  return it(e) ? (() => Ft({ name: e.name }, t, { setup: e }))() : e
}
const fn = (e) => !!e.type.__asyncLoader,
  wr = (e) => e.type.__isKeepAlive,
  Hp = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const s = Cs(),
        n = s.ctx
      if (!n.renderer)
        return () => {
          const y = t.default && t.default()
          return y && y.length === 1 ? y[0] : y
        }
      const i = new Map(),
        r = new Set()
      let o = null
      const a = s.suspense,
        {
          renderer: {
            p: l,
            m: h,
            um: c,
            o: { createElement: u },
          },
        } = n,
        d = u('div')
      ;(n.activate = (y, v, w, M, k) => {
        const E = y.component
        h(y, v, w, 0, a),
          l(E.vnode, y, v, w, E, a, M, y.slotScopeIds, k),
          Ut(() => {
            ;(E.isDeactivated = !1), E.a && un(E.a)
            const C = y.props && y.props.onVnodeMounted
            C && we(C, E.parent, y)
          }, a)
      }),
        (n.deactivate = (y) => {
          const v = y.component
          h(y, d, null, 1, a),
            Ut(() => {
              v.da && un(v.da)
              const w = y.props && y.props.onVnodeUnmounted
              w && we(w, v.parent, y), (v.isDeactivated = !0)
            }, a)
        })
      function f(y) {
        Vr(y), c(y, s, a, !0)
      }
      function p(y) {
        i.forEach((v, w) => {
          const M = ko(v.type)
          M && (!y || !y(M)) && g(w)
        })
      }
      function g(y) {
        const v = i.get(y)
        !o || !ms(v, o) ? f(v) : o && Vr(o), i.delete(y), r.delete(y)
      }
      Zt(
        () => [e.include, e.exclude],
        ([y, v]) => {
          y && p((w) => Yn(y, w)), v && p((w) => !Yn(v, w))
        },
        { flush: 'post', deep: !0 },
      )
      let m = null
      const b = () => {
        m != null && i.set(m, Ur(s.subTree))
      }
      return (
        Te(b),
        mu(b),
        Ta(() => {
          i.forEach((y) => {
            const { subTree: v, suspense: w } = s,
              M = Ur(v)
            if (y.type === M.type && y.key === M.key) {
              Vr(M)
              const k = M.component.da
              k && Ut(k, w)
              return
            }
            f(y)
          })
        }),
        () => {
          if (((m = null), !t.default)) return null
          const y = t.default(),
            v = y[0]
          if (y.length > 1) return (o = null), y
          if (!Ws(v) || (!(v.shapeFlag & 4) && !(v.shapeFlag & 128)))
            return (o = null), v
          let w = Ur(v)
          const M = w.type,
            k = ko(fn(w) ? w.type.__asyncResolved || {} : M),
            { include: E, exclude: C, max: S } = e
          if ((E && (!k || !Yn(E, k))) || (C && k && Yn(C, k)))
            return (o = w), v
          const P = w.key == null ? M : w.key,
            Y = i.get(P)
          return (
            w.el && ((w = ts(w)), v.shapeFlag & 128 && (v.ssContent = w)),
            (m = P),
            Y
              ? ((w.el = Y.el),
                (w.component = Y.component),
                w.transition && ir(w, w.transition),
                (w.shapeFlag |= 512),
                r.delete(P),
                r.add(P))
              : (r.add(P),
                S && r.size > parseInt(S, 10) && g(r.values().next().value)),
            (w.shapeFlag |= 256),
            (o = w),
            cu(v.type) ? v : w
          )
        }
      )
    },
  },
  Gp = Hp
function Yn(e, t) {
  return tt(e)
    ? e.some((s) => Yn(s, t))
    : wt(e)
    ? e.split(',').includes(t)
    : Vf(e)
    ? e.test(t)
    : !1
}
function Wp(e, t) {
  pu(e, 'a', t)
}
function jp(e, t) {
  pu(e, 'da', t)
}
function pu(e, t, s = zt) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let i = s
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((Ar(t, n, s), s)) {
    let i = s.parent
    for (; i && i.parent; ) wr(i.parent.vnode) && Yp(n, t, s, i), (i = i.parent)
  }
}
function Yp(e, t, s, n) {
  const i = Ar(t, e, n, !0)
  Ma(() => {
    ua(n[t], i)
  }, s)
}
function Vr(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function Ur(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function Ar(e, t, s = zt, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          if (s.isUnmounted) return
          Xs()
          const a = wi(s),
            l = Ce(t, s, e, o)
          return a(), Ks(), l
        })
    return n ? i.unshift(r) : i.push(r), r
  }
}
const es =
    (e) =>
    (t, s = zt) =>
      (!Er || e === 'sp') && Ar(e, (...n) => t(...n), s),
  Xp = es('bm'),
  Te = es('m'),
  Kp = es('bu'),
  mu = es('u'),
  Ta = es('bum'),
  Ma = es('um'),
  qp = es('sp'),
  Zp = es('rtg'),
  Qp = es('rtc')
function Jp(e, t = zt) {
  Ar('ec', e, t)
}
function tm(e, t, s, n) {
  let i
  const r = s && s[n]
  if (tt(e) || wt(e)) {
    i = new Array(e.length)
    for (let o = 0, a = e.length; o < a; o++)
      i[o] = t(e[o], o, void 0, r && r[o])
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o])
  } else if (xt(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (o, a) => t(o, a, void 0, r && r[a]))
    else {
      const o = Object.keys(e)
      i = new Array(o.length)
      for (let a = 0, l = o.length; a < l; a++) {
        const h = o[a]
        i[a] = t(e[h], h, a, r && r[a])
      }
    }
  else i = []
  return s && (s[n] = i), i
}
function Xw(e, t) {
  for (let s = 0; s < t.length; s++) {
    const n = t[s]
    if (tt(n)) for (let i = 0; i < n.length; i++) e[n[i].name] = n[i].fn
    else
      n &&
        (e[n.name] = n.key
          ? (...i) => {
              const r = n.fn(...i)
              return r && (r.key = n.key), r
            }
          : n.fn)
  }
  return e
}
function ye(e, t, s = {}, n, i) {
  if (Ot.isCE || (Ot.parent && fn(Ot.parent) && Ot.parent.isCE))
    return t !== 'default' && (s.name = t), ct('slot', s, n && n())
  let r = e[t]
  r && r._c && (r._d = !1), J()
  const o = r && gu(r(s)),
    a = pe(
      ee,
      { key: s.key || (o && o.key) || `_${t}` },
      o || (n ? n() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    r && r._c && (r._d = !0),
    a
  )
}
function gu(e) {
  return e.some((t) =>
    Ws(t) ? !(t.type === Ee || (t.type === ee && !gu(t.children))) : !0,
  )
    ? e
    : null
}
const Co = (e) => (e ? (Ru(e) ? Pr(e) || e.proxy : Co(e.parent)) : null),
  Jn = Ft(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Co(e.parent),
    $root: (e) => Co(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ia(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ca(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = qs.bind(e.proxy)),
    $watch: (e) => Dp.bind(e),
  }),
  Hr = (e, t) => e !== Tt && !e.__isScriptSetup && mt(e, t),
  em = {
    get({ _: e }, t) {
      const {
        ctx: s,
        setupState: n,
        data: i,
        props: r,
        accessCache: o,
        type: a,
        appContext: l,
      } = e
      let h
      if (t[0] !== '$') {
        const f = o[t]
        if (f !== void 0)
          switch (f) {
            case 1:
              return n[t]
            case 2:
              return i[t]
            case 4:
              return s[t]
            case 3:
              return r[t]
          }
        else {
          if (Hr(n, t)) return (o[t] = 1), n[t]
          if (i !== Tt && mt(i, t)) return (o[t] = 2), i[t]
          if ((h = e.propsOptions[0]) && mt(h, t)) return (o[t] = 3), r[t]
          if (s !== Tt && mt(s, t)) return (o[t] = 4), s[t]
          Eo && (o[t] = 0)
        }
      }
      const c = Jn[t]
      let u, d
      if (c) return t === '$attrs' && ce(e, 'get', t), c(e)
      if ((u = a.__cssModules) && (u = u[t])) return u
      if (s !== Tt && mt(s, t)) return (o[t] = 4), s[t]
      if (((d = l.config.globalProperties), mt(d, t))) return d[t]
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: i, ctx: r } = e
      return Hr(i, t)
        ? ((i[t] = s), !0)
        : n !== Tt && mt(n, t)
        ? ((n[t] = s), !0)
        : mt(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((r[t] = s), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: i,
          propsOptions: r,
        },
      },
      o,
    ) {
      let a
      return (
        !!s[o] ||
        (e !== Tt && mt(e, o)) ||
        Hr(t, o) ||
        ((a = r[0]) && mt(a, o)) ||
        mt(n, o) ||
        mt(Jn, o) ||
        mt(i.config.globalProperties, o)
      )
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : mt(s, 'value') && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      )
    },
  }
function sm() {
  return _u().slots
}
function Kw() {
  return _u().attrs
}
function _u() {
  const e = Cs()
  return e.setupContext || (e.setupContext = Lu(e))
}
function Cl(e) {
  return tt(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e
}
let Eo = !0
function nm(e) {
  const t = Ia(e),
    s = e.proxy,
    n = e.ctx
  ;(Eo = !1), t.beforeCreate && El(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: h,
    created: c,
    beforeMount: u,
    mounted: d,
    beforeUpdate: f,
    updated: p,
    activated: g,
    deactivated: m,
    beforeDestroy: b,
    beforeUnmount: y,
    destroyed: v,
    unmounted: w,
    render: M,
    renderTracked: k,
    renderTriggered: E,
    errorCaptured: C,
    serverPrefetch: S,
    expose: P,
    inheritAttrs: Y,
    components: V,
    directives: D,
    filters: G,
  } = t
  if ((h && im(h, n, null), o))
    for (const lt in o) {
      const _t = o[lt]
      it(_t) && (n[lt] = _t.bind(s))
    }
  if (i) {
    const lt = i.call(s, s)
    xt(lt) && (e.data = In(lt))
  }
  if (((Eo = !0), r))
    for (const lt in r) {
      const _t = r[lt],
        K = it(_t) ? _t.bind(s, s) : it(_t.get) ? _t.get.bind(s, s) : ne,
        et = !it(_t) && it(_t.set) ? _t.set.bind(s) : ne,
        xe = Z({ get: K, set: et })
      Object.defineProperty(n, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (at) => (xe.value = at),
      })
    }
  if (a) for (const lt in a) yu(a[lt], n, s, lt)
  if (l) {
    const lt = it(l) ? l.call(s) : l
    Reflect.ownKeys(lt).forEach((_t) => {
      mn(_t, lt[_t])
    })
  }
  c && El(c, e, 'c')
  function X(lt, _t) {
    tt(_t) ? _t.forEach((K) => lt(K.bind(s))) : _t && lt(_t.bind(s))
  }
  if (
    (X(Xp, u),
    X(Te, d),
    X(Kp, f),
    X(mu, p),
    X(Wp, g),
    X(jp, m),
    X(Jp, C),
    X(Qp, k),
    X(Zp, E),
    X(Ta, y),
    X(Ma, w),
    X(qp, S),
    tt(P))
  )
    if (P.length) {
      const lt = e.exposed || (e.exposed = {})
      P.forEach((_t) => {
        Object.defineProperty(lt, _t, {
          get: () => s[_t],
          set: (K) => (s[_t] = K),
        })
      })
    } else e.exposed || (e.exposed = {})
  M && e.render === ne && (e.render = M),
    Y != null && (e.inheritAttrs = Y),
    V && (e.components = V),
    D && (e.directives = D)
}
function im(e, t, s = ne) {
  tt(e) && (e = Po(e))
  for (const n in e) {
    const i = e[n]
    let r
    xt(i)
      ? 'default' in i
        ? (r = Vt(i.from || n, i.default, !0))
        : (r = Vt(i.from || n))
      : (r = Vt(i)),
      It(r)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (t[n] = r)
  }
}
function El(e, t, s) {
  Ce(tt(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function yu(e, t, s, n) {
  const i = n.includes('.') ? hu(s, n) : () => s[n]
  if (wt(e)) {
    const r = t[e]
    it(r) && Zt(i, r)
  } else if (it(e)) Zt(i, e.bind(s))
  else if (xt(e))
    if (tt(e)) e.forEach((r) => yu(r, t, s, n))
    else {
      const r = it(e.handler) ? e.handler.bind(s) : t[e.handler]
      it(r) && Zt(i, r, e)
    }
}
function Ia(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = r.get(t)
  let l
  return (
    a
      ? (l = a)
      : !i.length && !s && !n
      ? (l = t)
      : ((l = {}), i.length && i.forEach((h) => rr(l, h, o, !0)), rr(l, t, o)),
    xt(t) && r.set(t, l),
    l
  )
}
function rr(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t
  r && rr(e, r, s, !0), i && i.forEach((o) => rr(e, o, s, !0))
  for (const o in t)
    if (!(n && o === 'expose')) {
      const a = rm[o] || (s && s[o])
      e[o] = a ? a(e[o], t[o]) : t[o]
    }
  return e
}
const rm = {
  data: Pl,
  props: Tl,
  emits: Tl,
  methods: Xn,
  computed: Xn,
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  components: Xn,
  directives: Xn,
  watch: am,
  provide: Pl,
  inject: om,
}
function Pl(e, t) {
  return t
    ? e
      ? function () {
          return Ft(
            it(e) ? e.call(this, this) : e,
            it(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function om(e, t) {
  return Xn(Po(e), Po(t))
}
function Po(e) {
  if (tt(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s]
    return t
  }
  return e
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Xn(e, t) {
  return e ? Ft(Object.create(null), e, t) : t
}
function Tl(e, t) {
  return e
    ? tt(e) && tt(t)
      ? [...new Set([...e, ...t])]
      : Ft(Object.create(null), Cl(e), Cl(t ?? {}))
    : t
}
function am(e, t) {
  if (!e) return t
  if (!t) return e
  const s = Ft(Object.create(null), e)
  for (const n in t) s[n] = Jt(e[n], t[n])
  return s
}
function xu() {
  return {
    app: null,
    config: {
      isNativeTag: Df,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let lm = 0
function cm(e, t) {
  return function (n, i = null) {
    it(n) || (n = Ft({}, n)), i != null && !xt(i) && (i = null)
    const r = xu(),
      o = new WeakSet()
    let a = !1
    const l = (r.app = {
      _uid: lm++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Bm,
      get config() {
        return r.config
      },
      set config(h) {},
      use(h, ...c) {
        return (
          o.has(h) ||
            (h && it(h.install)
              ? (o.add(h), h.install(l, ...c))
              : it(h) && (o.add(h), h(l, ...c))),
          l
        )
      },
      mixin(h) {
        return r.mixins.includes(h) || r.mixins.push(h), l
      },
      component(h, c) {
        return c ? ((r.components[h] = c), l) : r.components[h]
      },
      directive(h, c) {
        return c ? ((r.directives[h] = c), l) : r.directives[h]
      },
      mount(h, c, u) {
        if (!a) {
          const d = ct(n, i)
          return (
            (d.appContext = r),
            u === !0 ? (u = 'svg') : u === !1 && (u = void 0),
            c && t ? t(d, h) : e(d, h, u),
            (a = !0),
            (l._container = h),
            (h.__vue_app__ = l),
            Pr(d.component) || d.component.proxy
          )
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(h, c) {
        return (r.provides[h] = c), l
      },
      runWithContext(h) {
        const c = pn
        pn = l
        try {
          return h()
        } finally {
          pn = c
        }
      },
    })
    return l
  }
}
let pn = null
function mn(e, t) {
  if (zt) {
    let s = zt.provides
    const n = zt.parent && zt.parent.provides
    n === s && (s = zt.provides = Object.create(n)), (s[e] = t)
  }
}
function Vt(e, t, s = !1) {
  const n = zt || Ot
  if (n || pn) {
    const i = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : pn._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return s && it(t) ? t.call(n && n.proxy) : t
  }
}
function hm() {
  return !!(zt || Ot || pn)
}
function um(e, t, s, n = !1) {
  const i = {},
    r = {}
  tr(r, Cr, 1), (e.propsDefaults = Object.create(null)), bu(e, t, i, r)
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0)
  s ? (e.props = n ? i : ba(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r)
}
function dm(e, t, s, n) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    a = gt(i),
    [l] = e.propsOptions
  let h = !1
  if ((n || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps
      for (let u = 0; u < c.length; u++) {
        let d = c[u]
        if (br(e.emitsOptions, d)) continue
        const f = t[d]
        if (l)
          if (mt(r, d)) f !== r[d] && ((r[d] = f), (h = !0))
          else {
            const p = Fe(d)
            i[p] = To(l, a, p, f, e, !1)
          }
        else f !== r[d] && ((r[d] = f), (h = !0))
      }
    }
  } else {
    bu(e, t, i, r) && (h = !0)
    let c
    for (const u in a)
      (!t || (!mt(t, u) && ((c = Ss(u)) === u || !mt(t, c)))) &&
        (l
          ? s &&
            (s[u] !== void 0 || s[c] !== void 0) &&
            (i[u] = To(l, a, u, void 0, e, !0))
          : delete i[u])
    if (r !== a) for (const u in r) (!t || !mt(t, u)) && (delete r[u], (h = !0))
  }
  h && Qe(e, 'set', '$attrs')
}
function bu(e, t, s, n) {
  const [i, r] = e.propsOptions
  let o = !1,
    a
  if (t)
    for (let l in t) {
      if (Qn(l)) continue
      const h = t[l]
      let c
      i && mt(i, (c = Fe(l)))
        ? !r || !r.includes(c)
          ? (s[c] = h)
          : ((a || (a = {}))[c] = h)
        : br(e.emitsOptions, l) ||
          ((!(l in n) || h !== n[l]) && ((n[l] = h), (o = !0)))
    }
  if (r) {
    const l = gt(s),
      h = a || Tt
    for (let c = 0; c < r.length; c++) {
      const u = r[c]
      s[u] = To(i, l, u, h[u], e, !mt(h, u))
    }
  }
  return o
}
function To(e, t, s, n, i, r) {
  const o = e[s]
  if (o != null) {
    const a = mt(o, 'default')
    if (a && n === void 0) {
      const l = o.default
      if (o.type !== Function && !o.skipFactory && it(l)) {
        const { propsDefaults: h } = i
        if (s in h) n = h[s]
        else {
          const c = wi(i)
          ;(n = h[s] = l.call(null, t)), c()
        }
      } else n = l
    }
    o[0] && (r && !a ? (n = !1) : o[1] && (n === '' || n === Ss(s)) && (n = !0))
  }
  return n
}
function vu(e, t, s = !1) {
  const n = t.propsCache,
    i = n.get(e)
  if (i) return i
  const r = e.props,
    o = {},
    a = []
  let l = !1
  if (!it(e)) {
    const c = (u) => {
      l = !0
      const [d, f] = vu(u, t, !0)
      Ft(o, d), f && a.push(...f)
    }
    !s && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!r && !l) return xt(e) && n.set(e, cn), cn
  if (tt(r))
    for (let c = 0; c < r.length; c++) {
      const u = Fe(r[c])
      Ml(u) && (o[u] = Tt)
    }
  else if (r)
    for (const c in r) {
      const u = Fe(c)
      if (Ml(u)) {
        const d = r[c],
          f = (o[u] = tt(d) || it(d) ? { type: d } : Ft({}, d))
        if (f) {
          const p = kl(Boolean, f.type),
            g = kl(String, f.type)
          ;(f[0] = p > -1),
            (f[1] = g < 0 || p < g),
            (p > -1 || mt(f, 'default')) && a.push(u)
        }
      }
    }
  const h = [o, a]
  return xt(e) && n.set(e, h), h
}
function Ml(e) {
  return e[0] !== '$' && !Qn(e)
}
function Il(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function Rl(e, t) {
  return Il(e) === Il(t)
}
function kl(e, t) {
  return tt(t) ? t.findIndex((s) => Rl(s, e)) : it(t) && Rl(t, e) ? 0 : -1
}
const wu = (e) => e[0] === '_' || e === '$stable',
  Ra = (e) => (tt(e) ? e.map(He) : [He(e)]),
  fm = (e, t, s) => {
    if (t._n) return t
    const n = Xt((...i) => Ra(t(...i)), s)
    return (n._c = !1), n
  },
  Au = (e, t, s) => {
    const n = e._ctx
    for (const i in e) {
      if (wu(i)) continue
      const r = e[i]
      if (it(r)) t[i] = fm(i, r, n)
      else if (r != null) {
        const o = Ra(r)
        t[i] = () => o
      }
    }
  },
  Su = (e, t) => {
    const s = Ra(t)
    e.slots.default = () => s
  },
  pm = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? ((e.slots = gt(t)), tr(t, '_', s)) : Au(t, (e.slots = {}))
    } else (e.slots = {}), t && Su(e, t)
    tr(e.slots, Cr, 1)
  },
  mm = (e, t, s) => {
    const { vnode: n, slots: i } = e
    let r = !0,
      o = Tt
    if (n.shapeFlag & 32) {
      const a = t._
      a
        ? s && a === 1
          ? (r = !1)
          : (Ft(i, t), !s && a === 1 && delete i._)
        : ((r = !t.$stable), Au(t, i)),
        (o = t)
    } else t && (Su(e, t), (o = { default: 1 }))
    if (r) for (const a in i) !wu(a) && o[a] == null && delete i[a]
  }
function Mo(e, t, s, n, i = !1) {
  if (tt(e)) {
    e.forEach((d, f) => Mo(d, t && (tt(t) ? t[f] : t), s, n, i))
    return
  }
  if (fn(n) && !i) return
  const r = n.shapeFlag & 4 ? Pr(n.component) || n.component.proxy : n.el,
    o = i ? null : r,
    { i: a, r: l } = e,
    h = t && t.r,
    c = a.refs === Tt ? (a.refs = {}) : a.refs,
    u = a.setupState
  if (
    (h != null &&
      h !== l &&
      (wt(h)
        ? ((c[h] = null), mt(u, h) && (u[h] = null))
        : It(h) && (h.value = null)),
    it(l))
  )
    vs(l, a, 12, [o, c])
  else {
    const d = wt(l),
      f = It(l)
    if (d || f) {
      const p = () => {
        if (e.f) {
          const g = d ? (mt(u, l) ? u[l] : c[l]) : l.value
          i
            ? tt(g) && ua(g, r)
            : tt(g)
            ? g.includes(r) || g.push(r)
            : d
            ? ((c[l] = [r]), mt(u, l) && (u[l] = c[l]))
            : ((l.value = [r]), e.k && (c[e.k] = l.value))
        } else
          d
            ? ((c[l] = o), mt(u, l) && (u[l] = o))
            : f && ((l.value = o), e.k && (c[e.k] = o))
      }
      o ? ((p.id = -1), Ut(p, s)) : p()
    }
  }
}
function gm() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != 'boolean' &&
    (fa().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1)
}
const Ut = Fp
function _m(e) {
  return ym(e)
}
function ym(e, t) {
  gm()
  const s = fa()
  s.__VUE__ = !0
  const {
      insert: n,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: a,
      createComment: l,
      setText: h,
      setElementText: c,
      parentNode: u,
      nextSibling: d,
      setScopeId: f = ne,
      insertStaticContent: p,
    } = e,
    g = (
      _,
      x,
      A,
      I = null,
      T = null,
      B = null,
      z = void 0,
      O = null,
      $ = !!x.dynamicChildren,
    ) => {
      if (_ === x) return
      _ && !ms(_, x) && ((I = R(_)), at(_, T, B, !0), (_ = null)),
        x.patchFlag === -2 && (($ = !1), (x.dynamicChildren = null))
      const { type: L, ref: H, shapeFlag: Q } = x
      switch (L) {
        case Sr:
          m(_, x, A, I)
          break
        case Ee:
          b(_, x, A, I)
          break
        case Wr:
          _ == null && y(x, A, I, z)
          break
        case ee:
          V(_, x, A, I, T, B, z, O, $)
          break
        default:
          Q & 1
            ? M(_, x, A, I, T, B, z, O, $)
            : Q & 6
            ? D(_, x, A, I, T, B, z, O, $)
            : (Q & 64 || Q & 128) && L.process(_, x, A, I, T, B, z, O, $, W)
      }
      H != null && T && Mo(H, _ && _.ref, B, x || _, !x)
    },
    m = (_, x, A, I) => {
      if (_ == null) n((x.el = a(x.children)), A, I)
      else {
        const T = (x.el = _.el)
        x.children !== _.children && h(T, x.children)
      }
    },
    b = (_, x, A, I) => {
      _ == null ? n((x.el = l(x.children || '')), A, I) : (x.el = _.el)
    },
    y = (_, x, A, I) => {
      ;[_.el, _.anchor] = p(_.children, x, A, I, _.el, _.anchor)
    },
    v = ({ el: _, anchor: x }, A, I) => {
      let T
      for (; _ && _ !== x; ) (T = d(_)), n(_, A, I), (_ = T)
      n(x, A, I)
    },
    w = ({ el: _, anchor: x }) => {
      let A
      for (; _ && _ !== x; ) (A = d(_)), i(_), (_ = A)
      i(x)
    },
    M = (_, x, A, I, T, B, z, O, $) => {
      x.type === 'svg' ? (z = 'svg') : x.type === 'math' && (z = 'mathml'),
        _ == null ? k(x, A, I, T, B, z, O, $) : S(_, x, T, B, z, O, $)
    },
    k = (_, x, A, I, T, B, z, O) => {
      let $, L
      const { props: H, shapeFlag: Q, transition: q, dirs: rt } = _
      if (
        (($ = _.el = o(_.type, B, H && H.is, H)),
        Q & 8
          ? c($, _.children)
          : Q & 16 && C(_.children, $, null, I, T, Gr(_, B), z, O),
        rt && Ms(_, null, I, 'created'),
        E($, _, _.scopeId, z, I),
        H)
      ) {
        for (const At in H)
          At !== 'value' &&
            !Qn(At) &&
            r($, At, null, H[At], B, _.children, I, T, Lt)
        'value' in H && r($, 'value', null, H.value, B),
          (L = H.onVnodeBeforeMount) && we(L, I, _)
      }
      rt && Ms(_, null, I, 'beforeMount')
      const pt = xm(T, q)
      pt && q.beforeEnter($),
        n($, x, A),
        ((L = H && H.onVnodeMounted) || pt || rt) &&
          Ut(() => {
            L && we(L, I, _), pt && q.enter($), rt && Ms(_, null, I, 'mounted')
          }, T)
    },
    E = (_, x, A, I, T) => {
      if ((A && f(_, A), I)) for (let B = 0; B < I.length; B++) f(_, I[B])
      if (T) {
        let B = T.subTree
        if (x === B) {
          const z = T.vnode
          E(_, z, z.scopeId, z.slotScopeIds, T.parent)
        }
      }
    },
    C = (_, x, A, I, T, B, z, O, $ = 0) => {
      for (let L = $; L < _.length; L++) {
        const H = (_[L] = O ? us(_[L]) : He(_[L]))
        g(null, H, x, A, I, T, B, z, O)
      }
    },
    S = (_, x, A, I, T, B, z) => {
      const O = (x.el = _.el)
      let { patchFlag: $, dynamicChildren: L, dirs: H } = x
      $ |= _.patchFlag & 16
      const Q = _.props || Tt,
        q = x.props || Tt
      let rt
      if (
        (A && Is(A, !1),
        (rt = q.onVnodeBeforeUpdate) && we(rt, A, x, _),
        H && Ms(x, _, A, 'beforeUpdate'),
        A && Is(A, !0),
        L
          ? P(_.dynamicChildren, L, O, A, I, Gr(x, T), B)
          : z || _t(_, x, O, null, A, I, Gr(x, T), B, !1),
        $ > 0)
      ) {
        if ($ & 16) Y(O, x, Q, q, A, I, T)
        else if (
          ($ & 2 && Q.class !== q.class && r(O, 'class', null, q.class, T),
          $ & 4 && r(O, 'style', Q.style, q.style, T),
          $ & 8)
        ) {
          const pt = x.dynamicProps
          for (let At = 0; At < pt.length; At++) {
            const Mt = pt[At],
              $t = Q[Mt],
              Me = q[Mt]
            ;(Me !== $t || Mt === 'value') &&
              r(O, Mt, $t, Me, T, _.children, A, I, Lt)
          }
        }
        $ & 1 && _.children !== x.children && c(O, x.children)
      } else !z && L == null && Y(O, x, Q, q, A, I, T)
      ;((rt = q.onVnodeUpdated) || H) &&
        Ut(() => {
          rt && we(rt, A, x, _), H && Ms(x, _, A, 'updated')
        }, I)
    },
    P = (_, x, A, I, T, B, z) => {
      for (let O = 0; O < x.length; O++) {
        const $ = _[O],
          L = x[O],
          H =
            $.el && ($.type === ee || !ms($, L) || $.shapeFlag & 70)
              ? u($.el)
              : A
        g($, L, H, null, I, T, B, z, !0)
      }
    },
    Y = (_, x, A, I, T, B, z) => {
      if (A !== I) {
        if (A !== Tt)
          for (const O in A)
            !Qn(O) && !(O in I) && r(_, O, A[O], null, z, x.children, T, B, Lt)
        for (const O in I) {
          if (Qn(O)) continue
          const $ = I[O],
            L = A[O]
          $ !== L && O !== 'value' && r(_, O, L, $, z, x.children, T, B, Lt)
        }
        'value' in I && r(_, 'value', A.value, I.value, z)
      }
    },
    V = (_, x, A, I, T, B, z, O, $) => {
      const L = (x.el = _ ? _.el : a('')),
        H = (x.anchor = _ ? _.anchor : a(''))
      let { patchFlag: Q, dynamicChildren: q, slotScopeIds: rt } = x
      rt && (O = O ? O.concat(rt) : rt),
        _ == null
          ? (n(L, A, I), n(H, A, I), C(x.children || [], A, H, T, B, z, O, $))
          : Q > 0 && Q & 64 && q && _.dynamicChildren
          ? (P(_.dynamicChildren, q, A, T, B, z, O),
            (x.key != null || (T && x === T.subTree)) && ka(_, x, !0))
          : _t(_, x, A, H, T, B, z, O, $)
    },
    D = (_, x, A, I, T, B, z, O, $) => {
      ;(x.slotScopeIds = O),
        _ == null
          ? x.shapeFlag & 512
            ? T.ctx.activate(x, A, I, z, $)
            : G(x, A, I, T, B, z, $)
          : ut(_, x, $)
    },
    G = (_, x, A, I, T, B, z) => {
      const O = (_.component = Mm(_, I, T))
      if ((wr(_) && (O.ctx.renderer = W), Im(O), O.asyncDep)) {
        if ((T && T.registerDep(O, X), !_.el)) {
          const $ = (O.subTree = ct(Ee))
          b(null, $, x, A)
        }
      } else X(O, _, x, A, T, B, z)
    },
    ut = (_, x, A) => {
      const I = (x.component = _.component)
      if (Lp(_, x, A))
        if (I.asyncDep && !I.asyncResolved) {
          lt(I, x, A)
          return
        } else (I.next = x), Pp(I.update), (I.effect.dirty = !0), I.update()
      else (x.el = _.el), (I.vnode = x)
    },
    X = (_, x, A, I, T, B, z) => {
      const O = () => {
          if (_.isMounted) {
            let { next: H, bu: Q, u: q, parent: rt, vnode: pt } = _
            {
              const en = Cu(_)
              if (en) {
                H && ((H.el = pt.el), lt(_, H, z)),
                  en.asyncDep.then(() => {
                    _.isUnmounted || O()
                  })
                return
              }
            }
            let At = H,
              Mt
            Is(_, !1),
              H ? ((H.el = pt.el), lt(_, H, z)) : (H = pt),
              Q && un(Q),
              (Mt = H.props && H.props.onVnodeBeforeUpdate) &&
                we(Mt, rt, H, pt),
              Is(_, !0)
            const $t = Dr(_),
              Me = _.subTree
            ;(_.subTree = $t),
              g(Me, $t, u(Me.el), R(Me), _, T, B),
              (H.el = $t.el),
              At === null && Bp(_, $t.el),
              q && Ut(q, T),
              (Mt = H.props && H.props.onVnodeUpdated) &&
                Ut(() => we(Mt, rt, H, pt), T)
          } else {
            let H
            const { el: Q, props: q } = x,
              { bm: rt, m: pt, parent: At } = _,
              Mt = fn(x)
            if (
              (Is(_, !1),
              rt && un(rt),
              !Mt && (H = q && q.onVnodeBeforeMount) && we(H, At, x),
              Is(_, !0),
              Q && bt)
            ) {
              const $t = () => {
                ;(_.subTree = Dr(_)), bt(Q, _.subTree, _, T, null)
              }
              Mt
                ? x.type.__asyncLoader().then(() => !_.isUnmounted && $t())
                : $t()
            } else {
              const $t = (_.subTree = Dr(_))
              g(null, $t, A, I, _, T, B), (x.el = $t.el)
            }
            if ((pt && Ut(pt, T), !Mt && (H = q && q.onVnodeMounted))) {
              const $t = x
              Ut(() => we(H, At, $t), T)
            }
            ;(x.shapeFlag & 256 ||
              (At && fn(At.vnode) && At.vnode.shapeFlag & 256)) &&
              _.a &&
              Ut(_.a, T),
              (_.isMounted = !0),
              (x = A = I = null)
          }
        },
        $ = (_.effect = new ma(O, ne, () => Ca(L), _.scope)),
        L = (_.update = () => {
          $.dirty && $.run()
        })
      ;(L.id = _.uid), Is(_, !0), L()
    },
    lt = (_, x, A) => {
      x.component = _
      const I = _.vnode.props
      ;(_.vnode = x),
        (_.next = null),
        dm(_, x.props, I, A),
        mm(_, x.children, A),
        Xs(),
        vl(_),
        Ks()
    },
    _t = (_, x, A, I, T, B, z, O, $ = !1) => {
      const L = _ && _.children,
        H = _ ? _.shapeFlag : 0,
        Q = x.children,
        { patchFlag: q, shapeFlag: rt } = x
      if (q > 0) {
        if (q & 128) {
          et(L, Q, A, I, T, B, z, O, $)
          return
        } else if (q & 256) {
          K(L, Q, A, I, T, B, z, O, $)
          return
        }
      }
      rt & 8
        ? (H & 16 && Lt(L, T, B), Q !== L && c(A, Q))
        : H & 16
        ? rt & 16
          ? et(L, Q, A, I, T, B, z, O, $)
          : Lt(L, T, B, !0)
        : (H & 8 && c(A, ''), rt & 16 && C(Q, A, I, T, B, z, O, $))
    },
    K = (_, x, A, I, T, B, z, O, $) => {
      ;(_ = _ || cn), (x = x || cn)
      const L = _.length,
        H = x.length,
        Q = Math.min(L, H)
      let q
      for (q = 0; q < Q; q++) {
        const rt = (x[q] = $ ? us(x[q]) : He(x[q]))
        g(_[q], rt, A, null, T, B, z, O, $)
      }
      L > H ? Lt(_, T, B, !0, !1, Q) : C(x, A, I, T, B, z, O, $, Q)
    },
    et = (_, x, A, I, T, B, z, O, $) => {
      let L = 0
      const H = x.length
      let Q = _.length - 1,
        q = H - 1
      for (; L <= Q && L <= q; ) {
        const rt = _[L],
          pt = (x[L] = $ ? us(x[L]) : He(x[L]))
        if (ms(rt, pt)) g(rt, pt, A, null, T, B, z, O, $)
        else break
        L++
      }
      for (; L <= Q && L <= q; ) {
        const rt = _[Q],
          pt = (x[q] = $ ? us(x[q]) : He(x[q]))
        if (ms(rt, pt)) g(rt, pt, A, null, T, B, z, O, $)
        else break
        Q--, q--
      }
      if (L > Q) {
        if (L <= q) {
          const rt = q + 1,
            pt = rt < H ? x[rt].el : I
          for (; L <= q; )
            g(null, (x[L] = $ ? us(x[L]) : He(x[L])), A, pt, T, B, z, O, $), L++
        }
      } else if (L > q) for (; L <= Q; ) at(_[L], T, B, !0), L++
      else {
        const rt = L,
          pt = L,
          At = new Map()
        for (L = pt; L <= q; L++) {
          const he = (x[L] = $ ? us(x[L]) : He(x[L]))
          he.key != null && At.set(he.key, L)
        }
        let Mt,
          $t = 0
        const Me = q - pt + 1
        let en = !1,
          cl = 0
        const Fn = new Array(Me)
        for (L = 0; L < Me; L++) Fn[L] = 0
        for (L = rt; L <= Q; L++) {
          const he = _[L]
          if ($t >= Me) {
            at(he, T, B, !0)
            continue
          }
          let ze
          if (he.key != null) ze = At.get(he.key)
          else
            for (Mt = pt; Mt <= q; Mt++)
              if (Fn[Mt - pt] === 0 && ms(he, x[Mt])) {
                ze = Mt
                break
              }
          ze === void 0
            ? at(he, T, B, !0)
            : ((Fn[ze - pt] = L + 1),
              ze >= cl ? (cl = ze) : (en = !0),
              g(he, x[ze], A, null, T, B, z, O, $),
              $t++)
        }
        const hl = en ? bm(Fn) : cn
        for (Mt = hl.length - 1, L = Me - 1; L >= 0; L--) {
          const he = pt + L,
            ze = x[he],
            ul = he + 1 < H ? x[he + 1].el : I
          Fn[L] === 0
            ? g(null, ze, A, ul, T, B, z, O, $)
            : en && (Mt < 0 || L !== hl[Mt] ? xe(ze, A, ul, 2) : Mt--)
        }
      }
    },
    xe = (_, x, A, I, T = null) => {
      const { el: B, type: z, transition: O, children: $, shapeFlag: L } = _
      if (L & 6) {
        xe(_.component.subTree, x, A, I)
        return
      }
      if (L & 128) {
        _.suspense.move(x, A, I)
        return
      }
      if (L & 64) {
        z.move(_, x, A, W)
        return
      }
      if (z === ee) {
        n(B, x, A)
        for (let Q = 0; Q < $.length; Q++) xe($[Q], x, A, I)
        n(_.anchor, x, A)
        return
      }
      if (z === Wr) {
        v(_, x, A)
        return
      }
      if (I !== 2 && L & 1 && O)
        if (I === 0) O.beforeEnter(B), n(B, x, A), Ut(() => O.enter(B), T)
        else {
          const { leave: Q, delayLeave: q, afterLeave: rt } = O,
            pt = () => n(B, x, A),
            At = () => {
              Q(B, () => {
                pt(), rt && rt()
              })
            }
          q ? q(B, pt, At) : At()
        }
      else n(B, x, A)
    },
    at = (_, x, A, I = !1, T = !1) => {
      const {
        type: B,
        props: z,
        ref: O,
        children: $,
        dynamicChildren: L,
        shapeFlag: H,
        patchFlag: Q,
        dirs: q,
      } = _
      if ((O != null && Mo(O, null, A, _, !0), H & 256)) {
        x.ctx.deactivate(_)
        return
      }
      const rt = H & 1 && q,
        pt = !fn(_)
      let At
      if ((pt && (At = z && z.onVnodeBeforeUnmount) && we(At, x, _), H & 6))
        De(_.component, A, I)
      else {
        if (H & 128) {
          _.suspense.unmount(A, I)
          return
        }
        rt && Ms(_, null, x, 'beforeUnmount'),
          H & 64
            ? _.type.remove(_, x, A, T, W, I)
            : L && (B !== ee || (Q > 0 && Q & 64))
            ? Lt(L, x, A, !1, !0)
            : ((B === ee && Q & 384) || (!T && H & 16)) && Lt($, x, A),
          I && Qt(_)
      }
      ;((pt && (At = z && z.onVnodeUnmounted)) || rt) &&
        Ut(() => {
          At && we(At, x, _), rt && Ms(_, null, x, 'unmounted')
        }, A)
    },
    Qt = (_) => {
      const { type: x, el: A, anchor: I, transition: T } = _
      if (x === ee) {
        be(A, I)
        return
      }
      if (x === Wr) {
        w(_)
        return
      }
      const B = () => {
        i(A), T && !T.persisted && T.afterLeave && T.afterLeave()
      }
      if (_.shapeFlag & 1 && T && !T.persisted) {
        const { leave: z, delayLeave: O } = T,
          $ = () => z(A, B)
        O ? O(_.el, B, $) : $()
      } else B()
    },
    be = (_, x) => {
      let A
      for (; _ !== x; ) (A = d(_)), i(_), (_ = A)
      i(x)
    },
    De = (_, x, A) => {
      const { bum: I, scope: T, update: B, subTree: z, um: O } = _
      I && un(I),
        T.stop(),
        B && ((B.active = !1), at(z, _, x, A)),
        O && Ut(O, x),
        Ut(() => {
          _.isUnmounted = !0
        }, x),
        x &&
          x.pendingBranch &&
          !x.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === x.pendingId &&
          (x.deps--, x.deps === 0 && x.resolve())
    },
    Lt = (_, x, A, I = !1, T = !1, B = 0) => {
      for (let z = B; z < _.length; z++) at(_[z], x, A, I, T)
    },
    R = (_) =>
      _.shapeFlag & 6
        ? R(_.component.subTree)
        : _.shapeFlag & 128
        ? _.suspense.next()
        : d(_.anchor || _.el)
  let U = !1
  const N = (_, x, A) => {
      _ == null
        ? x._vnode && at(x._vnode, null, null, !0)
        : g(x._vnode || null, _, x, null, null, null, A),
        U || ((U = !0), vl(), eu(), (U = !1)),
        (x._vnode = _)
    },
    W = { p: g, um: at, m: xe, r: Qt, mt: G, mc: C, pc: _t, pbc: P, n: R, o: e }
  let yt, bt
  return (
    t && ([yt, bt] = t(W)), { render: N, hydrate: yt, createApp: cm(N, yt) }
  )
}
function Gr({ type: e, props: t }, s) {
  return (s === 'svg' && e === 'foreignObject') ||
    (s === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : s
}
function Is({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s
}
function xm(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function ka(e, t, s = !1) {
  const n = e.children,
    i = t.children
  if (tt(n) && tt(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r]
      let a = i[r]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = us(i[r])), (a.el = o.el)),
        s || ka(o, a)),
        a.type === Sr && (a.el = o.el)
    }
}
function bm(e) {
  const t = e.slice(),
    s = [0]
  let n, i, r, o, a
  const l = e.length
  for (n = 0; n < l; n++) {
    const h = e[n]
    if (h !== 0) {
      if (((i = s[s.length - 1]), e[i] < h)) {
        ;(t[n] = i), s.push(n)
        continue
      }
      for (r = 0, o = s.length - 1; r < o; )
        (a = (r + o) >> 1), e[s[a]] < h ? (r = a + 1) : (o = a)
      h < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), (s[r] = n))
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; ) (s[r] = o), (o = t[o])
  return s
}
function Cu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Cu(t)
}
const vm = (e) => e.__isTeleport,
  ti = (e) => e && (e.disabled || e.disabled === ''),
  Ll = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Bl = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Io = (e, t) => {
    const s = e && e.to
    return wt(s) ? (t ? t(s) : null) : s
  },
  wm = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, s, n, i, r, o, a, l, h) {
      const {
          mc: c,
          pc: u,
          pbc: d,
          o: { insert: f, querySelector: p, createText: g, createComment: m },
        } = h,
        b = ti(t.props)
      let { shapeFlag: y, children: v, dynamicChildren: w } = t
      if (e == null) {
        const M = (t.el = g('')),
          k = (t.anchor = g(''))
        f(M, s, n), f(k, s, n)
        const E = (t.target = Io(t.props, p)),
          C = (t.targetAnchor = g(''))
        E &&
          (f(C, E),
          o === 'svg' || Ll(E)
            ? (o = 'svg')
            : (o === 'mathml' || Bl(E)) && (o = 'mathml'))
        const S = (P, Y) => {
          y & 16 && c(v, P, Y, i, r, o, a, l)
        }
        b ? S(s, k) : E && S(E, C)
      } else {
        t.el = e.el
        const M = (t.anchor = e.anchor),
          k = (t.target = e.target),
          E = (t.targetAnchor = e.targetAnchor),
          C = ti(e.props),
          S = C ? s : k,
          P = C ? M : E
        if (
          (o === 'svg' || Ll(k)
            ? (o = 'svg')
            : (o === 'mathml' || Bl(k)) && (o = 'mathml'),
          w
            ? (d(e.dynamicChildren, w, S, i, r, o, a), ka(e, t, !0))
            : l || u(e, t, S, P, i, r, o, a, !1),
          b)
        )
          C
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Bi(t, s, M, h, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Y = (t.target = Io(t.props, p))
          Y && Bi(t, Y, null, h, 0)
        } else C && Bi(t, k, E, h, 1)
      }
      Eu(t)
    },
    remove(e, t, s, n, { um: i, o: { remove: r } }, o) {
      const {
        shapeFlag: a,
        children: l,
        anchor: h,
        targetAnchor: c,
        target: u,
        props: d,
      } = e
      if ((u && r(c), o && r(h), a & 16)) {
        const f = o || !ti(d)
        for (let p = 0; p < l.length; p++) {
          const g = l[p]
          i(g, t, s, f, !!g.dynamicChildren)
        }
      }
    },
    move: Bi,
    hydrate: Am,
  }
function Bi(e, t, s, { o: { insert: n }, m: i }, r = 2) {
  r === 0 && n(e.targetAnchor, t, s)
  const { el: o, anchor: a, shapeFlag: l, children: h, props: c } = e,
    u = r === 2
  if ((u && n(o, t, s), (!u || ti(c)) && l & 16))
    for (let d = 0; d < h.length; d++) i(h[d], t, s, 2)
  u && n(a, t, s)
}
function Am(
  e,
  t,
  s,
  n,
  i,
  r,
  { o: { nextSibling: o, parentNode: a, querySelector: l } },
  h,
) {
  const c = (t.target = Io(t.props, l))
  if (c) {
    const u = c._lpa || c.firstChild
    if (t.shapeFlag & 16)
      if (ti(t.props))
        (t.anchor = h(o(e), t, a(e), s, n, i, r)), (t.targetAnchor = u)
      else {
        t.anchor = o(e)
        let d = u
        for (; d; )
          if (
            ((d = o(d)), d && d.nodeType === 8 && d.data === 'teleport anchor')
          ) {
            ;(t.targetAnchor = d),
              (c._lpa = t.targetAnchor && o(t.targetAnchor))
            break
          }
        h(u, t, c, s, n, i, r)
      }
    Eu(t)
  }
  return t.anchor && o(t.anchor)
}
const qw = wm
function Eu(e) {
  const t = e.ctx
  if (t && t.ut) {
    let s = e.children[0].el
    for (; s && s !== e.targetAnchor; )
      s.nodeType === 1 && s.setAttribute('data-v-owner', t.uid),
        (s = s.nextSibling)
    t.ut()
  }
}
const ee = Symbol.for('v-fgt'),
  Sr = Symbol.for('v-txt'),
  Ee = Symbol.for('v-cmt'),
  Wr = Symbol.for('v-stc'),
  ei = []
let Le = null
function J(e = !1) {
  ei.push((Le = e ? null : []))
}
function Sm() {
  ei.pop(), (Le = ei[ei.length - 1] || null)
}
let ui = 1
function Ol(e) {
  ui += e
}
function Pu(e) {
  return (
    (e.dynamicChildren = ui > 0 ? Le || cn : null),
    Sm(),
    ui > 0 && Le && Le.push(e),
    e
  )
}
function ft(e, t, s, n, i, r) {
  return Pu(nt(e, t, s, n, i, r, !0))
}
function pe(e, t, s, n, i) {
  return Pu(ct(e, t, s, n, i, !0))
}
function Ws(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ms(e, t) {
  return e.type === t.type && e.key === t.key
}
const Cr = '__vInternal',
  Tu = ({ key: e }) => e ?? null,
  Ki = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? wt(e) || It(e) || it(e)
        ? { i: Ot, r: e, k: t, f: !!s }
        : e
      : null
  )
function nt(
  e,
  t = null,
  s = null,
  n = 0,
  i = null,
  r = e === ee ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Tu(t),
    ref: t && Ki(t),
    scopeId: vr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot,
  }
  return (
    a
      ? (La(l, s), r & 128 && e.normalize(l))
      : s && (l.shapeFlag |= wt(s) ? 8 : 16),
    ui > 0 &&
      !o &&
      Le &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      Le.push(l),
    l
  )
}
const ct = Cm
function Cm(e, t = null, s = null, n = 0, i = null, r = !1) {
  if (((!e || e === ou) && (e = Ee), Ws(e))) {
    const a = ts(e, t, !0)
    return (
      s && La(a, s),
      ui > 0 &&
        !r &&
        Le &&
        (a.shapeFlag & 6 ? (Le[Le.indexOf(e)] = a) : Le.push(a)),
      (a.patchFlag |= -2),
      a
    )
  }
  if ((Lm(e) && (e = e.__vccOpts), t)) {
    t = Em(t)
    let { class: a, style: l } = t
    a && !wt(a) && (t.class = Bt(a)),
      xt(l) && (jh(l) && !tt(l) && (l = Ft({}, l)), (t.style = me(l)))
  }
  const o = wt(e) ? 1 : cu(e) ? 128 : vm(e) ? 64 : xt(e) ? 4 : it(e) ? 2 : 0
  return nt(e, t, s, n, i, o, r, !0)
}
function Em(e) {
  return e ? (jh(e) || Cr in e ? Ft({}, e) : e) : null
}
function ts(e, t, s = !1) {
  const { props: n, ref: i, patchFlag: r, children: o } = e,
    a = t ? Iu(n || {}, t) : n
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Tu(a),
    ref:
      t && t.ref
        ? s && i
          ? tt(i)
            ? i.concat(Ki(t))
            : [i, Ki(t)]
          : Ki(t)
        : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ee ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ts(e.ssContent),
    ssFallback: e.ssFallback && ts(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Mu(e = ' ', t = 0) {
  return ct(Sr, null, e, t)
}
function Oi(e = '', t = !1) {
  return t ? (J(), pe(Ee, null, e)) : ct(Ee, null, e)
}
function He(e) {
  return e == null || typeof e == 'boolean'
    ? ct(Ee)
    : tt(e)
    ? ct(ee, null, e.slice())
    : typeof e == 'object'
    ? us(e)
    : ct(Sr, null, String(e))
}
function us(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ts(e)
}
function La(e, t) {
  let s = 0
  const { shapeFlag: n } = e
  if (t == null) t = null
  else if (tt(t)) s = 16
  else if (typeof t == 'object')
    if (n & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), La(e, i()), i._c && (i._d = !0))
      return
    } else {
      s = 32
      const i = t._
      !i && !(Cr in t)
        ? (t._ctx = Ot)
        : i === 3 &&
          Ot &&
          (Ot.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    it(t)
      ? ((t = { default: t, _ctx: Ot }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [Mu(t)])) : (s = 8))
  ;(e.children = t), (e.shapeFlag |= s)
}
function Iu(...e) {
  const t = {}
  for (let s = 0; s < e.length; s++) {
    const n = e[s]
    for (const i in n)
      if (i === 'class')
        t.class !== n.class && (t.class = Bt([t.class, n.class]))
      else if (i === 'style') t.style = me([t.style, n.style])
      else if (pr(i)) {
        const r = t[i],
          o = n[i]
        o &&
          r !== o &&
          !(tt(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o)
      } else i !== '' && (t[i] = n[i])
  }
  return t
}
function we(e, t, s, n = null) {
  Ce(e, t, 7, [s, n])
}
const Pm = xu()
let Tm = 0
function Mm(e, t, s) {
  const n = e.type,
    i = (t ? t.appContext : e.appContext) || Pm,
    r = {
      uid: Tm++,
      vnode: e,
      type: n,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new kh(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vu(n, i),
      emitsOptions: nu(n, i),
      emit: null,
      emitted: null,
      propsDefaults: Tt,
      inheritAttrs: n.inheritAttrs,
      ctx: Tt,
      data: Tt,
      props: Tt,
      attrs: Tt,
      slots: Tt,
      refs: Tt,
      setupState: Tt,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Ip.bind(null, r)),
    e.ce && e.ce(r),
    r
  )
}
let zt = null
const Cs = () => zt || Ot
let or, Ro
{
  const e = fa(),
    t = (s, n) => {
      let i
      return (
        (i = e[s]) || (i = e[s] = []),
        i.push(n),
        (r) => {
          i.length > 1 ? i.forEach((o) => o(r)) : i[0](r)
        }
      )
    }
  ;(or = t('__VUE_INSTANCE_SETTERS__', (s) => (zt = s))),
    (Ro = t('__VUE_SSR_SETTERS__', (s) => (Er = s)))
}
const wi = (e) => {
    const t = zt
    return (
      or(e),
      e.scope.on(),
      () => {
        e.scope.off(), or(t)
      }
    )
  },
  Fl = () => {
    zt && zt.scope.off(), or(null)
  }
function Ru(e) {
  return e.vnode.shapeFlag & 4
}
let Er = !1
function Im(e, t = !1) {
  t && Ro(t)
  const { props: s, children: n } = e.vnode,
    i = Ru(e)
  um(e, s, i, t), pm(e, n)
  const r = i ? Rm(e, t) : void 0
  return t && Ro(!1), r
}
function Rm(e, t) {
  const s = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = yr(new Proxy(e.ctx, em)))
  const { setup: n } = s
  if (n) {
    const i = (e.setupContext = n.length > 1 ? Lu(e) : null),
      r = wi(e)
    Xs()
    const o = vs(n, e, 0, [e.props, i])
    if ((Ks(), r(), Ph(o))) {
      if ((o.then(Fl, Fl), t))
        return o
          .then((a) => {
            $l(e, a, t)
          })
          .catch((a) => {
            xr(a, e, 0)
          })
      e.asyncDep = o
    } else $l(e, o, t)
  } else ku(e, t)
}
function $l(e, t, s) {
  it(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : xt(t) && (e.setupState = qh(t)),
    ku(e, s)
}
let Nl
function ku(e, t, s) {
  const n = e.type
  if (!e.render) {
    if (!t && Nl && !n.render) {
      const i = n.template || Ia(e).template
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = n,
          h = Ft(Ft({ isCustomElement: r, delimiters: a }, o), l)
        n.render = Nl(i, h)
      }
    }
    e.render = n.render || ne
  }
  {
    const i = wi(e)
    Xs()
    try {
      nm(e)
    } finally {
      Ks(), i()
    }
  }
}
function km(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return ce(e, 'get', '$attrs'), t[s]
      },
    }))
  )
}
function Lu(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  return {
    get attrs() {
      return km(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Pr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(qh(yr(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s]
          if (s in Jn) return Jn[s](e)
        },
        has(t, s) {
          return s in t || s in Jn
        },
      }))
    )
}
function ko(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Lm(e) {
  return it(e) && '__vccOpts' in e
}
const Z = (e, t) => xp(e, t, Er)
function gs(e, t, s) {
  const n = arguments.length
  return n === 2
    ? xt(t) && !tt(t)
      ? Ws(t)
        ? ct(e, null, [t])
        : ct(e, t)
      : ct(e, null, t)
    : (n > 3
        ? (s = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Ws(s) && (s = [s]),
      ct(e, t, s))
}
const Bm = '3.4.18',
  Om = ne
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Fm = 'http://www.w3.org/2000/svg',
  $m = 'http://www.w3.org/1998/Math/MathML',
  ds = typeof document < 'u' ? document : null,
  Dl = ds && ds.createElement('template'),
  Nm = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, s, n) => {
      const i =
        t === 'svg'
          ? ds.createElementNS(Fm, e)
          : t === 'mathml'
          ? ds.createElementNS($m, e)
          : ds.createElement(e, s ? { is: s } : void 0)
      return (
        e === 'select' &&
          n &&
          n.multiple != null &&
          i.setAttribute('multiple', n.multiple),
        i
      )
    },
    createText: (e) => ds.createTextNode(e),
    createComment: (e) => ds.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ds.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, s, n, i, r) {
      const o = s ? s.previousSibling : t.lastChild
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), s),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Dl.innerHTML =
          n === 'svg'
            ? `<svg>${e}</svg>`
            : n === 'mathml'
            ? `<math>${e}</math>`
            : e
        const a = Dl.content
        if (n === 'svg' || n === 'mathml') {
          const l = a.firstChild
          for (; l.firstChild; ) a.appendChild(l.firstChild)
          a.removeChild(l)
        }
        t.insertBefore(a, s)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ]
    },
  },
  rs = 'transition',
  Nn = 'animation',
  di = Symbol('_vtc'),
  Ai = (e, { slots: t }) => gs(Up, Dm(e), t)
Ai.displayName = 'Transition'
const Bu = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
Ai.props = Ft({}, uu, Bu)
const Rs = (e, t = []) => {
    tt(e) ? e.forEach((s) => s(...t)) : e && e(...t)
  },
  zl = (e) => (e ? (tt(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Dm(e) {
  const t = {}
  for (const V in e) V in Bu || (t[V] = e[V])
  if (e.css === !1) return t
  const {
      name: s = 'v',
      type: n,
      duration: i,
      enterFromClass: r = `${s}-enter-from`,
      enterActiveClass: o = `${s}-enter-active`,
      enterToClass: a = `${s}-enter-to`,
      appearFromClass: l = r,
      appearActiveClass: h = o,
      appearToClass: c = a,
      leaveFromClass: u = `${s}-leave-from`,
      leaveActiveClass: d = `${s}-leave-active`,
      leaveToClass: f = `${s}-leave-to`,
    } = e,
    p = zm(i),
    g = p && p[0],
    m = p && p[1],
    {
      onBeforeEnter: b,
      onEnter: y,
      onEnterCancelled: v,
      onLeave: w,
      onLeaveCancelled: M,
      onBeforeAppear: k = b,
      onAppear: E = y,
      onAppearCancelled: C = v,
    } = t,
    S = (V, D, G) => {
      ks(V, D ? c : a), ks(V, D ? h : o), G && G()
    },
    P = (V, D) => {
      ;(V._isLeaving = !1), ks(V, u), ks(V, f), ks(V, d), D && D()
    },
    Y = (V) => (D, G) => {
      const ut = V ? E : y,
        X = () => S(D, V, G)
      Rs(ut, [D, X]),
        Vl(() => {
          ks(D, V ? l : r), os(D, V ? c : a), zl(ut) || Ul(D, n, g, X)
        })
    }
  return Ft(t, {
    onBeforeEnter(V) {
      Rs(b, [V]), os(V, r), os(V, o)
    },
    onBeforeAppear(V) {
      Rs(k, [V]), os(V, l), os(V, h)
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(V, D) {
      V._isLeaving = !0
      const G = () => P(V, D)
      os(V, u),
        Hm(),
        os(V, d),
        Vl(() => {
          V._isLeaving && (ks(V, u), os(V, f), zl(w) || Ul(V, n, m, G))
        }),
        Rs(w, [V, G])
    },
    onEnterCancelled(V) {
      S(V, !1), Rs(v, [V])
    },
    onAppearCancelled(V) {
      S(V, !0), Rs(C, [V])
    },
    onLeaveCancelled(V) {
      P(V), Rs(M, [V])
    },
  })
}
function zm(e) {
  if (e == null) return null
  if (xt(e)) return [jr(e.enter), jr(e.leave)]
  {
    const t = jr(e)
    return [t, t]
  }
}
function jr(e) {
  return Wf(e)
}
function os(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)),
    (e[di] || (e[di] = new Set())).add(t)
}
function ks(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n))
  const s = e[di]
  s && (s.delete(t), s.size || (e[di] = void 0))
}
function Vl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Vm = 0
function Ul(e, t, s, n) {
  const i = (e._endId = ++Vm),
    r = () => {
      i === e._endId && n()
    }
  if (s) return setTimeout(r, s)
  const { type: o, timeout: a, propCount: l } = Um(e, t)
  if (!o) return n()
  const h = o + 'end'
  let c = 0
  const u = () => {
      e.removeEventListener(h, d), r()
    },
    d = (f) => {
      f.target === e && ++c >= l && u()
    }
  setTimeout(() => {
    c < l && u()
  }, a + 1),
    e.addEventListener(h, d)
}
function Um(e, t) {
  const s = window.getComputedStyle(e),
    n = (p) => (s[p] || '').split(', '),
    i = n(`${rs}Delay`),
    r = n(`${rs}Duration`),
    o = Hl(i, r),
    a = n(`${Nn}Delay`),
    l = n(`${Nn}Duration`),
    h = Hl(a, l)
  let c = null,
    u = 0,
    d = 0
  t === rs
    ? o > 0 && ((c = rs), (u = o), (d = r.length))
    : t === Nn
    ? h > 0 && ((c = Nn), (u = h), (d = l.length))
    : ((u = Math.max(o, h)),
      (c = u > 0 ? (o > h ? rs : Nn) : null),
      (d = c ? (c === rs ? r.length : l.length) : 0))
  const f =
    c === rs && /\b(transform|all)(,|$)/.test(n(`${rs}Property`).toString())
  return { type: c, timeout: u, propCount: d, hasTransform: f }
}
function Hl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((s, n) => Gl(s) + Gl(e[n])))
}
function Gl(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Hm() {
  return document.body.offsetHeight
}
function Gm(e, t, s) {
  const n = e[di]
  n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : s
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const fi = Symbol('_vod'),
  vn = {
    beforeMount(e, { value: t }, { transition: s }) {
      ;(e[fi] = e.style.display === 'none' ? '' : e.style.display),
        s && t ? s.beforeEnter(e) : Dn(e, t)
    },
    mounted(e, { value: t }, { transition: s }) {
      s && t && s.enter(e)
    },
    updated(e, { value: t, oldValue: s }, { transition: n }) {
      ;(!t == !s && e.style.display === e[fi]) ||
        (n
          ? t
            ? (n.beforeEnter(e), Dn(e, !0), n.enter(e))
            : n.leave(e, () => {
                Dn(e, !1)
              })
          : Dn(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Dn(e, t)
    },
  }
function Dn(e, t) {
  e.style.display = t ? e[fi] : 'none'
}
const Wm = Symbol(''),
  jm = /(^|;)\s*display\s*:/
function Ym(e, t, s) {
  const n = e.style,
    i = wt(s),
    r = n.display
  let o = !1
  if (s && !i) {
    if (t && !wt(t)) for (const a in t) s[a] == null && Lo(n, a, '')
    for (const a in s) a === 'display' && (o = !0), Lo(n, a, s[a])
  } else if (i) {
    if (t !== s) {
      const a = n[Wm]
      a && (s += ';' + a), (n.cssText = s), (o = jm.test(s))
    }
  } else t && e.removeAttribute('style')
  fi in e && ((e[fi] = o ? n.display : ''), (n.display = r))
}
const Wl = /\s*!important$/
function Lo(e, t, s) {
  if (tt(s)) s.forEach((n) => Lo(e, t, n))
  else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s)
  else {
    const n = Xm(e, t)
    Wl.test(s)
      ? e.setProperty(Ss(n), s.replace(Wl, ''), 'important')
      : (e[n] = s)
  }
}
const jl = ['Webkit', 'Moz', 'ms'],
  Yr = {}
function Xm(e, t) {
  const s = Yr[t]
  if (s) return s
  let n = Fe(t)
  if (n !== 'filter' && n in e) return (Yr[t] = n)
  n = gr(n)
  for (let i = 0; i < jl.length; i++) {
    const r = jl[i] + n
    if (r in e) return (Yr[t] = r)
  }
  return t
}
const Yl = 'http://www.w3.org/1999/xlink'
function Km(e, t, s, n, i) {
  if (n && t.startsWith('xlink:'))
    s == null
      ? e.removeAttributeNS(Yl, t.slice(6, t.length))
      : e.setAttributeNS(Yl, t, s)
  else {
    const r = Zf(t)
    s == null || (r && !Ih(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? '' : s)
  }
}
function qm(e, t, s, n, i, r, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    n && o(n, i, r), (e[t] = s ?? '')
    return
  }
  const a = e.tagName
  if (t === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
    e._value = s
    const h = a === 'OPTION' ? e.getAttribute('value') : e.value,
      c = s ?? ''
    h !== c && (e.value = c), s == null && e.removeAttribute(t)
    return
  }
  let l = !1
  if (s === '' || s == null) {
    const h = typeof e[t]
    h === 'boolean'
      ? (s = Ih(s))
      : s == null && h === 'string'
      ? ((s = ''), (l = !0))
      : h === 'number' && ((s = 0), (l = !0))
  }
  try {
    e[t] = s
  } catch {}
  l && e.removeAttribute(t)
}
function nn(e, t, s, n) {
  e.addEventListener(t, s, n)
}
function Zm(e, t, s, n) {
  e.removeEventListener(t, s, n)
}
const Xl = Symbol('_vei')
function Qm(e, t, s, n, i = null) {
  const r = e[Xl] || (e[Xl] = {}),
    o = r[t]
  if (n && o) o.value = n
  else {
    const [a, l] = Jm(t)
    if (n) {
      const h = (r[t] = sg(n, i))
      nn(e, a, h, l)
    } else o && (Zm(e, a, o, l), (r[t] = void 0))
  }
}
const Kl = /(?:Once|Passive|Capture)$/
function Jm(e) {
  let t
  if (Kl.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Kl)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Ss(e.slice(2)), t]
}
let Xr = 0
const tg = Promise.resolve(),
  eg = () => Xr || (tg.then(() => (Xr = 0)), (Xr = Date.now()))
function sg(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= s.attached) return
    Ce(ng(n, s.value), t, 5, [n])
  }
  return (s.value = e), (s.attached = eg()), s
}
function ng(e, t) {
  if (tt(t)) {
    const s = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0)
      }),
      t.map((n) => (i) => !i._stopped && n && n(i))
    )
  } else return t
}
const ql = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ig = (e, t, s, n, i, r, o, a, l) => {
    const h = i === 'svg'
    t === 'class'
      ? Gm(e, n, h)
      : t === 'style'
      ? Ym(e, s, n)
      : pr(t)
      ? ha(t) || Qm(e, t, s, n, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : rg(e, t, n, h)
        )
      ? qm(e, t, n, r, o, a, l)
      : (t === 'true-value'
          ? (e._trueValue = n)
          : t === 'false-value' && (e._falseValue = n),
        Km(e, t, n, h))
  }
function rg(e, t, s, n) {
  if (n)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && ql(t) && it(s))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const i = e.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE')
      return !1
  }
  return ql(t) && wt(s) ? !1 : t in e
}
const Zl = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return tt(t) ? (s) => un(t, s) : t
}
function og(e) {
  e.target.composing = !0
}
function Ql(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Kr = Symbol('_assign'),
  Zw = {
    created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
      e[Kr] = Zl(i)
      const r = n || (i.props && i.props.type === 'number')
      nn(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return
        let a = e.value
        s && (a = a.trim()), r && (a = xo(a)), e[Kr](a)
      }),
        s &&
          nn(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (nn(e, 'compositionstart', og),
          nn(e, 'compositionend', Ql),
          nn(e, 'change', Ql))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: s, trim: n, number: i } },
      r,
    ) {
      if (((e[Kr] = Zl(r)), e.composing)) return
      const o = i || e.type === 'number' ? xo(e.value) : e.value,
        a = t ?? ''
      o !== a &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (s || (n && e.value.trim() === a))) ||
          (e.value = a))
    },
  },
  ag = ['ctrl', 'shift', 'alt', 'meta'],
  lg = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ag.some((s) => e[`${s}Key`] && !t.includes(s)),
  },
  cg = (e, t) => {
    const s = e._withMods || (e._withMods = {}),
      n = t.join('.')
    return (
      s[n] ||
      (s[n] = (i, ...r) => {
        for (let o = 0; o < t.length; o++) {
          const a = lg[t[o]]
          if (a && a(i, t)) return
        }
        return e(i, ...r)
      })
    )
  },
  hg = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Qw = (e, t) => {
    const s = e._withKeys || (e._withKeys = {}),
      n = t.join('.')
    return (
      s[n] ||
      (s[n] = (i) => {
        if (!('key' in i)) return
        const r = Ss(i.key)
        if (t.some((o) => o === r || hg[o] === r)) return e(i)
      })
    )
  },
  ug = Ft({ patchProp: ig }, Nm)
let Jl
function Ou() {
  return Jl || (Jl = _m(ug))
}
const tc = (...e) => {
    Ou().render(...e)
  },
  Fu = (...e) => {
    const t = Ou().createApp(...e),
      { mount: s } = t
    return (
      (t.mount = (n) => {
        const i = fg(n)
        if (!i) return
        const r = t._component
        !it(r) && !r.render && !r.template && (r.template = i.innerHTML),
          (i.innerHTML = '')
        const o = s(i, !1, dg(i))
        return (
          i instanceof Element &&
            (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  }
function dg(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function fg(e) {
  return wt(e) ? document.querySelector(e) : e
}
var pg = !1,
  ec
const Zs = typeof window < 'u',
  mg = (e) => typeof e == 'string',
  $u = () => {},
  gg =
    Zs &&
    ((ec = window == null ? void 0 : window.navigator) == null
      ? void 0
      : ec.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent)
function Ba(e) {
  return typeof e == 'function' ? e() : F(e)
}
function _g(e) {
  return e
}
function Oa(e) {
  return pa() ? (Bh(e), !0) : !1
}
function yg(e, t = !0) {
  Cs() ? Te(e) : t ? e() : qs(e)
}
function xg(e, t, s = {}) {
  const { immediate: n = !0 } = s,
    i = ht(!1)
  let r = null
  function o() {
    r && (clearTimeout(r), (r = null))
  }
  function a() {
    ;(i.value = !1), o()
  }
  function l(...h) {
    o(),
      (i.value = !0),
      (r = setTimeout(() => {
        ;(i.value = !1), (r = null), e(...h)
      }, Ba(t)))
  }
  return (
    n && ((i.value = !0), Zs && l()),
    Oa(a),
    { isPending: va(i), start: l, stop: a }
  )
}
function an(e) {
  var t
  const s = Ba(e)
  return (t = s == null ? void 0 : s.$el) != null ? t : s
}
const Fa = Zs ? window : void 0
function qi(...e) {
  let t, s, n, i
  if (
    (mg(e[0]) || Array.isArray(e[0])
      ? (([s, n, i] = e), (t = Fa))
      : ([t, s, n, i] = e),
    !t)
  )
    return $u
  Array.isArray(s) || (s = [s]), Array.isArray(n) || (n = [n])
  const r = [],
    o = () => {
      r.forEach((c) => c()), (r.length = 0)
    },
    a = (c, u, d, f) => (
      c.addEventListener(u, d, f), () => c.removeEventListener(u, d, f)
    ),
    l = Zt(
      () => [an(t), Ba(i)],
      ([c, u]) => {
        o(), c && r.push(...s.flatMap((d) => n.map((f) => a(c, d, f, u))))
      },
      { immediate: !0, flush: 'post' },
    ),
    h = () => {
      l(), o()
    }
  return Oa(h), h
}
let sc = !1
function Jw(e, t, s = {}) {
  const {
    window: n = Fa,
    ignore: i = [],
    capture: r = !0,
    detectIframe: o = !1,
  } = s
  if (!n) return
  gg &&
    !sc &&
    ((sc = !0),
    Array.from(n.document.body.children).forEach((d) =>
      d.addEventListener('click', $u),
    ))
  let a = !0
  const l = (d) =>
      i.some((f) => {
        if (typeof f == 'string')
          return Array.from(n.document.querySelectorAll(f)).some(
            (p) => p === d.target || d.composedPath().includes(p),
          )
        {
          const p = an(f)
          return p && (d.target === p || d.composedPath().includes(p))
        }
      }),
    c = [
      qi(
        n,
        'click',
        (d) => {
          const f = an(e)
          if (!(!f || f === d.target || d.composedPath().includes(f))) {
            if ((d.detail === 0 && (a = !l(d)), !a)) {
              a = !0
              return
            }
            t(d)
          }
        },
        { passive: !0, capture: r },
      ),
      qi(
        n,
        'pointerdown',
        (d) => {
          const f = an(e)
          f && (a = !d.composedPath().includes(f) && !l(d))
        },
        { passive: !0 },
      ),
      o &&
        qi(n, 'blur', (d) => {
          var f
          const p = an(e)
          ;((f = n.document.activeElement) == null ? void 0 : f.tagName) ===
            'IFRAME' &&
            !(p != null && p.contains(n.document.activeElement)) &&
            t(d)
        }),
    ].filter(Boolean)
  return () => c.forEach((d) => d())
}
function bg(e, t = !1) {
  const s = ht(),
    n = () => (s.value = !!e())
  return n(), yg(n, t), s
}
const nc =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  ic = '__vueuse_ssr_handlers__'
nc[ic] = nc[ic] || {}
var rc = Object.getOwnPropertySymbols,
  vg = Object.prototype.hasOwnProperty,
  wg = Object.prototype.propertyIsEnumerable,
  Ag = (e, t) => {
    var s = {}
    for (var n in e) vg.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n])
    if (e != null && rc)
      for (var n of rc(e)) t.indexOf(n) < 0 && wg.call(e, n) && (s[n] = e[n])
    return s
  }
function Sg(e, t, s = {}) {
  const n = s,
    { window: i = Fa } = n,
    r = Ag(n, ['window'])
  let o
  const a = bg(() => i && 'ResizeObserver' in i),
    l = () => {
      o && (o.disconnect(), (o = void 0))
    },
    h = Zt(
      () => an(e),
      (u) => {
        l(), a.value && i && u && ((o = new ResizeObserver(t)), o.observe(u, r))
      },
      { immediate: !0, flush: 'post' },
    ),
    c = () => {
      l(), h()
    }
  return Oa(c), { isSupported: a, stop: c }
}
var oc
;(function (e) {
  ;(e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE')
})(oc || (oc = {}))
var Cg = Object.defineProperty,
  ac = Object.getOwnPropertySymbols,
  Eg = Object.prototype.hasOwnProperty,
  Pg = Object.prototype.propertyIsEnumerable,
  lc = (e, t, s) =>
    t in e
      ? Cg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Tg = (e, t) => {
    for (var s in t || (t = {})) Eg.call(t, s) && lc(e, s, t[s])
    if (ac) for (var s of ac(t)) Pg.call(t, s) && lc(e, s, t[s])
    return e
  }
const Mg = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
}
Tg({ linear: _g }, Mg)
var Ig =
  typeof global == 'object' && global && global.Object === Object && global
const Rg = Ig
var kg = typeof self == 'object' && self && self.Object === Object && self,
  Lg = Rg || kg || Function('return this')()
const $a = Lg
var Bg = $a.Symbol
const wn = Bg
var Nu = Object.prototype,
  Og = Nu.hasOwnProperty,
  Fg = Nu.toString,
  zn = wn ? wn.toStringTag : void 0
function $g(e) {
  var t = Og.call(e, zn),
    s = e[zn]
  try {
    e[zn] = void 0
    var n = !0
  } catch {}
  var i = Fg.call(e)
  return n && (t ? (e[zn] = s) : delete e[zn]), i
}
var Ng = Object.prototype,
  Dg = Ng.toString
function zg(e) {
  return Dg.call(e)
}
var Vg = '[object Null]',
  Ug = '[object Undefined]',
  cc = wn ? wn.toStringTag : void 0
function Du(e) {
  return e == null
    ? e === void 0
      ? Ug
      : Vg
    : cc && cc in Object(e)
    ? $g(e)
    : zg(e)
}
function Hg(e) {
  return e != null && typeof e == 'object'
}
var Gg = '[object Symbol]'
function Na(e) {
  return typeof e == 'symbol' || (Hg(e) && Du(e) == Gg)
}
function Wg(e, t) {
  for (var s = -1, n = e == null ? 0 : e.length, i = Array(n); ++s < n; )
    i[s] = t(e[s], s, e)
  return i
}
var jg = Array.isArray
const Da = jg
var Yg = 1 / 0,
  hc = wn ? wn.prototype : void 0,
  uc = hc ? hc.toString : void 0
function zu(e) {
  if (typeof e == 'string') return e
  if (Da(e)) return Wg(e, zu) + ''
  if (Na(e)) return uc ? uc.call(e) : ''
  var t = e + ''
  return t == '0' && 1 / e == -Yg ? '-0' : t
}
function Vu(e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var Xg = '[object AsyncFunction]',
  Kg = '[object Function]',
  qg = '[object GeneratorFunction]',
  Zg = '[object Proxy]'
function Qg(e) {
  if (!Vu(e)) return !1
  var t = Du(e)
  return t == Kg || t == qg || t == Xg || t == Zg
}
var Jg = $a['__core-js_shared__']
const qr = Jg
var dc = (function () {
  var e = /[^.]+$/.exec((qr && qr.keys && qr.keys.IE_PROTO) || '')
  return e ? 'Symbol(src)_1.' + e : ''
})()
function t0(e) {
  return !!dc && dc in e
}
var e0 = Function.prototype,
  s0 = e0.toString
function n0(e) {
  if (e != null) {
    try {
      return s0.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var i0 = /[\\^$.*+?()[\]{}|]/g,
  r0 = /^\[object .+?Constructor\]$/,
  o0 = Function.prototype,
  a0 = Object.prototype,
  l0 = o0.toString,
  c0 = a0.hasOwnProperty,
  h0 = RegExp(
    '^' +
      l0
        .call(c0)
        .replace(i0, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  )
function u0(e) {
  if (!Vu(e) || t0(e)) return !1
  var t = Qg(e) ? h0 : r0
  return t.test(n0(e))
}
function d0(e, t) {
  return e == null ? void 0 : e[t]
}
function Uu(e, t) {
  var s = d0(e, t)
  return u0(s) ? s : void 0
}
function f0(e, t) {
  return e === t || (e !== e && t !== t)
}
var p0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  m0 = /^\w*$/
function g0(e, t) {
  if (Da(e)) return !1
  var s = typeof e
  return s == 'number' || s == 'symbol' || s == 'boolean' || e == null || Na(e)
    ? !0
    : m0.test(e) || !p0.test(e) || (t != null && e in Object(t))
}
var _0 = Uu(Object, 'create')
const pi = _0
function y0() {
  ;(this.__data__ = pi ? pi(null) : {}), (this.size = 0)
}
function x0(e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var b0 = '__lodash_hash_undefined__',
  v0 = Object.prototype,
  w0 = v0.hasOwnProperty
function A0(e) {
  var t = this.__data__
  if (pi) {
    var s = t[e]
    return s === b0 ? void 0 : s
  }
  return w0.call(t, e) ? t[e] : void 0
}
var S0 = Object.prototype,
  C0 = S0.hasOwnProperty
function E0(e) {
  var t = this.__data__
  return pi ? t[e] !== void 0 : C0.call(t, e)
}
var P0 = '__lodash_hash_undefined__'
function T0(e, t) {
  var s = this.__data__
  return (
    (this.size += this.has(e) ? 0 : 1),
    (s[e] = pi && t === void 0 ? P0 : t),
    this
  )
}
function js(e) {
  var t = -1,
    s = e == null ? 0 : e.length
  for (this.clear(); ++t < s; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
js.prototype.clear = y0
js.prototype.delete = x0
js.prototype.get = A0
js.prototype.has = E0
js.prototype.set = T0
function M0() {
  ;(this.__data__ = []), (this.size = 0)
}
function Tr(e, t) {
  for (var s = e.length; s--; ) if (f0(e[s][0], t)) return s
  return -1
}
var I0 = Array.prototype,
  R0 = I0.splice
function k0(e) {
  var t = this.__data__,
    s = Tr(t, e)
  if (s < 0) return !1
  var n = t.length - 1
  return s == n ? t.pop() : R0.call(t, s, 1), --this.size, !0
}
function L0(e) {
  var t = this.__data__,
    s = Tr(t, e)
  return s < 0 ? void 0 : t[s][1]
}
function B0(e) {
  return Tr(this.__data__, e) > -1
}
function O0(e, t) {
  var s = this.__data__,
    n = Tr(s, e)
  return n < 0 ? (++this.size, s.push([e, t])) : (s[n][1] = t), this
}
function Rn(e) {
  var t = -1,
    s = e == null ? 0 : e.length
  for (this.clear(); ++t < s; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Rn.prototype.clear = M0
Rn.prototype.delete = k0
Rn.prototype.get = L0
Rn.prototype.has = B0
Rn.prototype.set = O0
var F0 = Uu($a, 'Map')
const $0 = F0
function N0() {
  ;(this.size = 0),
    (this.__data__ = {
      hash: new js(),
      map: new ($0 || Rn)(),
      string: new js(),
    })
}
function D0(e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null
}
function Mr(e, t) {
  var s = e.__data__
  return D0(t) ? s[typeof t == 'string' ? 'string' : 'hash'] : s.map
}
function z0(e) {
  var t = Mr(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
function V0(e) {
  return Mr(this, e).get(e)
}
function U0(e) {
  return Mr(this, e).has(e)
}
function H0(e, t) {
  var s = Mr(this, e),
    n = s.size
  return s.set(e, t), (this.size += s.size == n ? 0 : 1), this
}
function Qs(e) {
  var t = -1,
    s = e == null ? 0 : e.length
  for (this.clear(); ++t < s; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Qs.prototype.clear = N0
Qs.prototype.delete = z0
Qs.prototype.get = V0
Qs.prototype.has = U0
Qs.prototype.set = H0
var G0 = 'Expected a function'
function za(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(G0)
  var s = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      r = s.cache
    if (r.has(i)) return r.get(i)
    var o = e.apply(this, n)
    return (s.cache = r.set(i, o) || r), o
  }
  return (s.cache = new (za.Cache || Qs)()), s
}
za.Cache = Qs
var W0 = 500
function j0(e) {
  var t = za(e, function (n) {
      return s.size === W0 && s.clear(), n
    }),
    s = t.cache
  return t
}
var Y0 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  X0 = /\\(\\)?/g,
  K0 = j0(function (e) {
    var t = []
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(Y0, function (s, n, i, r) {
        t.push(i ? r.replace(X0, '$1') : n || s)
      }),
      t
    )
  })
const q0 = K0
function Z0(e) {
  return e == null ? '' : zu(e)
}
function Q0(e, t) {
  return Da(e) ? e : g0(e, t) ? [e] : q0(Z0(e))
}
var J0 = 1 / 0
function t_(e) {
  if (typeof e == 'string' || Na(e)) return e
  var t = e + ''
  return t == '0' && 1 / e == -J0 ? '-0' : t
}
function e_(e, t) {
  t = Q0(t, e)
  for (var s = 0, n = t.length; e != null && s < n; ) e = e[t_(t[s++])]
  return s && s == n ? e : void 0
}
function s_(e, t, s) {
  var n = e == null ? void 0 : e_(e, t)
  return n === void 0 ? s : n
}
function n_(e) {
  for (var t = -1, s = e == null ? 0 : e.length, n = {}; ++t < s; ) {
    var i = e[t]
    n[i[0]] = i[1]
  }
  return n
}
const i_ = (e) => e === void 0,
  t6 = (e) => typeof e == 'boolean',
  mi = (e) => typeof e == 'number',
  r_ = (e) => (typeof Element > 'u' ? !1 : e instanceof Element),
  o_ = (e) => (wt(e) ? !Number.isNaN(Number(e)) : !1),
  fc = (e) => Object.keys(e),
  Hu = (e = '') => e.split(' ').filter((t) => !!t.trim()),
  e6 = (e, t) => {
    if (!e || !t) return !1
    if (t.includes(' ')) throw new Error('className should not contain space.')
    return e.classList.contains(t)
  },
  pc = (e, t) => {
    !e || !t.trim() || e.classList.add(...Hu(t))
  },
  ar = (e, t) => {
    !e || !t.trim() || e.classList.remove(...Hu(t))
  },
  Vn = (e, t) => {
    var s
    if (!Zs || !e || !t) return ''
    let n = Fe(t)
    n === 'float' && (n = 'cssFloat')
    try {
      const i = e.style[n]
      if (i) return i
      const r =
        (s = document.defaultView) == null ? void 0 : s.getComputedStyle(e, '')
      return r ? r[n] : ''
    } catch {
      return e.style[n]
    }
  }
function a_(e, t = 'px') {
  if (!e) return ''
  if (mi(e) || o_(e)) return `${e}${t}`
  if (wt(e)) return e
}
/*! Element Plus Icons Vue v2.3.1 */ var l_ = st({
    name: 'ArrowDown',
    __name: 'arrow-down',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z',
            }),
          ],
        )
      )
    },
  }),
  s6 = l_,
  c_ = st({
    name: 'ArrowUp',
    __name: 'arrow-up',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0',
            }),
          ],
        )
      )
    },
  }),
  n6 = c_,
  h_ = st({
    name: 'CircleCheck',
    __name: 'circle-check',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
            }),
            nt('path', {
              fill: 'currentColor',
              d: 'M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z',
            }),
          ],
        )
      )
    },
  }),
  u_ = h_,
  d_ = st({
    name: 'CircleCloseFilled',
    __name: 'circle-close-filled',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z',
            }),
          ],
        )
      )
    },
  }),
  Gu = d_,
  f_ = st({
    name: 'CircleClose',
    __name: 'circle-close',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'm466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z',
            }),
            nt('path', {
              fill: 'currentColor',
              d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
            }),
          ],
        )
      )
    },
  }),
  p_ = f_,
  m_ = st({
    name: 'Close',
    __name: 'close',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
            }),
          ],
        )
      )
    },
  }),
  Wu = m_,
  g_ = st({
    name: 'Hide',
    __name: 'hide',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z',
            }),
            nt('path', {
              fill: 'currentColor',
              d: 'M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z',
            }),
          ],
        )
      )
    },
  }),
  i6 = g_,
  __ = st({
    name: 'InfoFilled',
    __name: 'info-filled',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z',
            }),
          ],
        )
      )
    },
  }),
  ju = __,
  y_ = st({
    name: 'Loading',
    __name: 'loading',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z',
            }),
          ],
        )
      )
    },
  }),
  x_ = y_,
  b_ = st({
    name: 'Minus',
    __name: 'minus',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64',
            }),
          ],
        )
      )
    },
  }),
  r6 = b_,
  v_ = st({
    name: 'Plus',
    __name: 'plus',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z',
            }),
          ],
        )
      )
    },
  }),
  o6 = v_,
  w_ = st({
    name: 'SuccessFilled',
    __name: 'success-filled',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z',
            }),
          ],
        )
      )
    },
  }),
  Yu = w_,
  A_ = st({
    name: 'View',
    __name: 'view',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160',
            }),
          ],
        )
      )
    },
  }),
  a6 = A_,
  S_ = st({
    name: 'WarningFilled',
    __name: 'warning-filled',
    setup(e) {
      return (t, s) => (
        J(),
        ft(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
          [
            nt('path', {
              fill: 'currentColor',
              d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4',
            }),
          ],
        )
      )
    },
  }),
  Xu = S_
const Ku = '__epPropKey',
  lr = (e) => e,
  C_ = (e) => xt(e) && !!e[Ku],
  qu = (e, t) => {
    if (!xt(e) || C_(e)) return e
    const { values: s, required: n, default: i, type: r, validator: o } = e,
      l = {
        type: r,
        required: !!n,
        validator:
          s || o
            ? (h) => {
                let c = !1,
                  u = []
                if (
                  (s &&
                    ((u = Array.from(s)),
                    mt(e, 'default') && u.push(i),
                    c || (c = u.includes(h))),
                  o && (c || (c = o(h))),
                  !c && u.length > 0)
                ) {
                  const d = [...new Set(u)]
                    .map((f) => JSON.stringify(f))
                    .join(', ')
                  Om(
                    `Invalid prop: validation failed${
                      t ? ` for prop "${t}"` : ''
                    }. Expected one of [${d}], got value ${JSON.stringify(h)}.`,
                  )
                }
                return c
              }
            : void 0,
        [Ku]: !0,
      }
    return mt(e, 'default') && (l.default = i), l
  },
  Va = (e) => n_(Object.entries(e).map(([t, s]) => [t, qu(s, t)])),
  E_ = lr([String, Object, Function]),
  l6 = { Close: Wu },
  P_ = {
    Close: Wu,
    SuccessFilled: Yu,
    InfoFilled: ju,
    WarningFilled: Xu,
    CircleCloseFilled: Gu,
  },
  mc = { success: Yu, warning: Xu, error: Gu, info: ju },
  c6 = { validating: x_, success: u_, error: p_ },
  Ua = (e, t) => {
    if (
      ((e.install = (s) => {
        for (const n of [e, ...Object.values(t ?? {})]) s.component(n.name, n)
      }),
      t)
    )
      for (const [s, n] of Object.entries(t)) e[s] = n
    return e
  },
  T_ = (e, t) => (
    (e.install = (s) => {
      ;(e._context = s._context), (s.config.globalProperties[t] = e)
    }),
    e
  ),
  Ir = (e) => ((e.install = ne), e),
  M_ = {
    tab: 'Tab',
    enter: 'Enter',
    space: 'Space',
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    esc: 'Escape',
    delete: 'Delete',
    backspace: 'Backspace',
    numpadEnter: 'NumpadEnter',
    pageUp: 'PageUp',
    pageDown: 'PageDown',
    home: 'Home',
    end: 'End',
  },
  I_ = ['', 'default', 'small', 'large'],
  R_ = (e) => e
var k_ = {
  name: 'en',
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Clear',
      defaultLabel: 'color picker',
      description:
        'current color is {color}. press enter to select a new color.',
    },
    datepicker: {
      now: 'Now',
      today: 'Today',
      cancel: 'Cancel',
      clear: 'Clear',
      confirm: 'OK',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      selectDate: 'Select date',
      selectTime: 'Select time',
      startDate: 'Start Date',
      startTime: 'Start Time',
      endDate: 'End Date',
      endTime: 'End Time',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      week: 'week',
      weeks: {
        sun: 'Sun',
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat',
      },
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec',
      },
    },
    inputNumber: { decrease: 'decrease number', increase: 'increase number' },
    select: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      placeholder: 'Select',
    },
    dropdown: { toggleDropdown: 'Toggle Dropdown' },
    cascader: {
      noMatch: 'No matching data',
      loading: 'Loading',
      placeholder: 'Select',
      noData: 'No data',
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      page: 'Page',
      prev: 'Go to previous page',
      next: 'Go to next page',
      currentPage: 'page {pager}',
      prevPages: 'Previous {pager} pages',
      nextPages: 'Next {pager} pages',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details',
    },
    dialog: { close: 'Close this dialog' },
    drawer: { close: 'Close this dialog' },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input',
      close: 'Close this dialog',
    },
    upload: {
      deleteTip: 'press delete to remove',
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value',
    },
    table: {
      emptyText: 'No Data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All',
      sumText: 'Sum',
    },
    tree: { emptyText: 'No Data' },
    transfer: {
      noMatch: 'No matching data',
      noData: 'No data',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Enter keyword',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} checked',
    },
    image: { error: 'FAILED' },
    pageHeader: { title: 'Back' },
    popconfirm: { confirmButtonText: 'Yes', cancelButtonText: 'No' },
  },
}
const L_ = (e) => (t, s) => B_(t, s, F(e)),
  B_ = (e, t, s) =>
    s_(s, e, e).replace(/\{(\w+)\}/g, (n, i) => {
      var r
      return `${(r = t == null ? void 0 : t[i]) != null ? r : `{${i}}`}`
    }),
  O_ = (e) => {
    const t = Z(() => F(e).name),
      s = It(e) ? e : ht(e)
    return { lang: t, locale: s, t: L_(e) }
  },
  Zu = Symbol('localeContextKey'),
  F_ = (e) => {
    const t = e || Vt(Zu, ht())
    return O_(Z(() => t.value || k_))
  },
  Zi = 'el',
  $_ = 'is-',
  Ls = (e, t, s, n, i) => {
    let r = `${e}-${t}`
    return s && (r += `-${s}`), n && (r += `__${n}`), i && (r += `--${i}`), r
  },
  Qu = Symbol('namespaceContextKey'),
  N_ = (e) => {
    const t = e || (Cs() ? Vt(Qu, ht(Zi)) : ht(Zi))
    return Z(() => F(t) || Zi)
  },
  Es = (e, t) => {
    const s = N_(t)
    return {
      namespace: s,
      b: (g = '') => Ls(s.value, e, g, '', ''),
      e: (g) => (g ? Ls(s.value, e, '', g, '') : ''),
      m: (g) => (g ? Ls(s.value, e, '', '', g) : ''),
      be: (g, m) => (g && m ? Ls(s.value, e, g, m, '') : ''),
      em: (g, m) => (g && m ? Ls(s.value, e, '', g, m) : ''),
      bm: (g, m) => (g && m ? Ls(s.value, e, g, '', m) : ''),
      bem: (g, m, b) => (g && m && b ? Ls(s.value, e, g, m, b) : ''),
      is: (g, ...m) => {
        const b = m.length >= 1 ? m[0] : !0
        return g && b ? `${$_}${g}` : ''
      },
      cssVar: (g) => {
        const m = {}
        for (const b in g) g[b] && (m[`--${s.value}-${b}`] = g[b])
        return m
      },
      cssVarName: (g) => `--${s.value}-${g}`,
      cssVarBlock: (g) => {
        const m = {}
        for (const b in g) g[b] && (m[`--${s.value}-${e}-${b}`] = g[b])
        return m
      },
      cssVarBlockName: (g) => `--${s.value}-${e}-${g}`,
    }
  },
  gc = ht(0),
  Ju = 2e3,
  td = Symbol('zIndexContextKey'),
  D_ = (e) => {
    const t = e || (Cs() ? Vt(td, void 0) : void 0),
      s = Z(() => {
        const r = F(t)
        return mi(r) ? r : Ju
      }),
      n = Z(() => s.value + gc.value)
    return {
      initialZIndex: s,
      currentZIndex: n,
      nextZIndex: () => (gc.value++, n.value),
    }
  },
  h6 = qu({ type: String, values: I_, required: !1 }),
  ed = Symbol('size'),
  u6 = () => {
    const e = Vt(ed, {})
    return Z(() => F(e.size) || '')
  },
  sd = Symbol(),
  cr = ht()
function nd(e, t = void 0) {
  const s = Cs() ? Vt(sd, cr) : cr
  return e
    ? Z(() => {
        var n, i
        return (i = (n = s.value) == null ? void 0 : n[e]) != null ? i : t
      })
    : s
}
function id(e, t) {
  const s = nd(),
    n = Es(
      e,
      Z(() => {
        var a
        return ((a = s.value) == null ? void 0 : a.namespace) || Zi
      }),
    ),
    i = F_(
      Z(() => {
        var a
        return (a = s.value) == null ? void 0 : a.locale
      }),
    ),
    r = D_(
      Z(() => {
        var a
        return ((a = s.value) == null ? void 0 : a.zIndex) || Ju
      }),
    ),
    o = Z(() => {
      var a
      return F(t) || ((a = s.value) == null ? void 0 : a.size) || ''
    })
  return z_(Z(() => F(s) || {})), { ns: n, locale: i, zIndex: r, size: o }
}
const z_ = (e, t, s = !1) => {
    var n
    const i = !!Cs(),
      r = i ? nd() : void 0,
      o = (n = t == null ? void 0 : t.provide) != null ? n : i ? mn : void 0
    if (!o) return
    const a = Z(() => {
      const l = F(e)
      return r != null && r.value ? V_(r.value, l) : l
    })
    return (
      o(sd, a),
      o(
        Zu,
        Z(() => a.value.locale),
      ),
      o(
        Qu,
        Z(() => a.value.namespace),
      ),
      o(
        td,
        Z(() => a.value.zIndex),
      ),
      o(ed, { size: Z(() => a.value.size || '') }),
      (s || !cr.value) && (cr.value = a.value),
      a
    )
  },
  V_ = (e, t) => {
    var s
    const n = [...new Set([...fc(e), ...fc(t)])],
      i = {}
    for (const r of n) i[r] = (s = t[r]) != null ? s : e[r]
    return i
  },
  _c = {}
var Ps = (e, t) => {
  const s = e.__vccOpts || e
  for (const [n, i] of t) s[n] = i
  return s
}
const U_ = Va({
    size: { type: lr([Number, String]) },
    color: { type: String },
  }),
  H_ = st({ name: 'ElIcon', inheritAttrs: !1 }),
  G_ = st({
    ...H_,
    props: U_,
    setup(e) {
      const t = e,
        s = Es('icon'),
        n = Z(() => {
          const { size: i, color: r } = t
          return !i && !r
            ? {}
            : { fontSize: i_(i) ? void 0 : a_(i), '--color': r }
        })
      return (i, r) => (
        J(),
        ft(
          'i',
          Iu({ class: F(s).b(), style: F(n) }, i.$attrs),
          [ye(i.$slots, 'default')],
          16,
        )
      )
    },
  })
var W_ = Ps(G_, [['__file', 'icon.vue']])
const yc = Ua(W_),
  j_ = Va({
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger'],
      default: 'danger',
    },
  }),
  Y_ = ['textContent'],
  X_ = st({ name: 'ElBadge' }),
  K_ = st({
    ...X_,
    props: j_,
    setup(e, { expose: t }) {
      const s = e,
        n = Es('badge'),
        i = Z(() =>
          s.isDot
            ? ''
            : mi(s.value) && mi(s.max)
            ? s.max < s.value
              ? `${s.max}+`
              : `${s.value}`
            : `${s.value}`,
        )
      return (
        t({ content: i }),
        (r, o) => (
          J(),
          ft(
            'div',
            { class: Bt(F(n).b()) },
            [
              ye(r.$slots, 'default'),
              ct(
                Ai,
                {
                  name: `${F(n).namespace.value}-zoom-in-center`,
                  persisted: '',
                },
                {
                  default: Xt(() => [
                    bn(
                      nt(
                        'sup',
                        {
                          class: Bt([
                            F(n).e('content'),
                            F(n).em('content', r.type),
                            F(n).is('fixed', !!r.$slots.default),
                            F(n).is('dot', r.isDot),
                          ]),
                          textContent: yn(F(i)),
                        },
                        null,
                        10,
                        Y_,
                      ),
                      [[vn, !r.hidden && (F(i) || r.isDot)]],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['name'],
              ),
            ],
            2,
          )
        )
      )
    },
  })
var q_ = Ps(K_, [['__file', 'badge.vue']])
const Z_ = Ua(q_)
function Ha(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
const Q_ = st({ name: 'ElContainer' }),
  J_ = st({
    ...Q_,
    props: { direction: { type: String } },
    setup(e) {
      const t = e,
        s = sm(),
        n = Es('container'),
        i = Z(() =>
          t.direction === 'vertical'
            ? !0
            : t.direction === 'horizontal'
            ? !1
            : s && s.default
            ? s.default().some((o) => {
                const a = o.type.name
                return a === 'ElHeader' || a === 'ElFooter'
              })
            : !1,
        )
      return (r, o) => (
        J(),
        ft(
          'section',
          { class: Bt([F(n).b(), F(n).is('vertical', F(i))]) },
          [ye(r.$slots, 'default')],
          2,
        )
      )
    },
  })
var ty = Ps(J_, [['__file', 'container.vue']])
const ey = st({ name: 'ElAside' }),
  sy = st({
    ...ey,
    props: { width: { type: String, default: null } },
    setup(e) {
      const t = e,
        s = Es('aside'),
        n = Z(() => (t.width ? s.cssVarBlock({ width: t.width }) : {}))
      return (i, r) => (
        J(),
        ft(
          'aside',
          { class: Bt(F(s).b()), style: me(F(n)) },
          [ye(i.$slots, 'default')],
          6,
        )
      )
    },
  })
var rd = Ps(sy, [['__file', 'aside.vue']])
const ny = st({ name: 'ElFooter' }),
  iy = st({
    ...ny,
    props: { height: { type: String, default: null } },
    setup(e) {
      const t = e,
        s = Es('footer'),
        n = Z(() => (t.height ? s.cssVarBlock({ height: t.height }) : {}))
      return (i, r) => (
        J(),
        ft(
          'footer',
          { class: Bt(F(s).b()), style: me(F(n)) },
          [ye(i.$slots, 'default')],
          6,
        )
      )
    },
  })
var od = Ps(iy, [['__file', 'footer.vue']])
const ry = st({ name: 'ElHeader' }),
  oy = st({
    ...ry,
    props: { height: { type: String, default: null } },
    setup(e) {
      const t = e,
        s = Es('header'),
        n = Z(() => (t.height ? s.cssVarBlock({ height: t.height }) : {}))
      return (i, r) => (
        J(),
        ft(
          'header',
          { class: Bt(F(s).b()), style: me(F(n)) },
          [ye(i.$slots, 'default')],
          6,
        )
      )
    },
  })
var ad = Ps(oy, [['__file', 'header.vue']])
const ay = st({ name: 'ElMain' }),
  ly = st({
    ...ay,
    setup(e) {
      const t = Es('main')
      return (s, n) => (
        J(), ft('main', { class: Bt(F(t).b()) }, [ye(s.$slots, 'default')], 2)
      )
    },
  })
var ld = Ps(ly, [['__file', 'main.vue']])
const cy = Ua(ty, { Aside: rd, Footer: od, Header: ad, Main: ld }),
  hy = Ir(rd),
  uy = Ir(od),
  dy = Ir(ad),
  fy = Ir(ld)
function py(e) {
  let t
  const s = ht(!1),
    n = In({ ...e, originalPosition: '', originalOverflow: '', visible: !1 })
  function i(d) {
    n.text = d
  }
  function r() {
    const d = n.parent,
      f = u.ns
    if (!d.vLoadingAddClassList) {
      let p = d.getAttribute('loading-number')
      ;(p = Number.parseInt(p) - 1),
        p
          ? d.setAttribute('loading-number', p.toString())
          : (ar(d, f.bm('parent', 'relative')),
            d.removeAttribute('loading-number')),
        ar(d, f.bm('parent', 'hidden'))
    }
    o(), c.unmount()
  }
  function o() {
    var d, f
    ;(f = (d = u.$el) == null ? void 0 : d.parentNode) == null ||
      f.removeChild(u.$el)
  }
  function a() {
    var d
    ;(e.beforeClose && !e.beforeClose()) ||
      ((s.value = !0),
      clearTimeout(t),
      (t = window.setTimeout(l, 400)),
      (n.visible = !1),
      (d = e.closed) == null || d.call(e))
  }
  function l() {
    if (!s.value) return
    const d = n.parent
    ;(s.value = !1), (d.vLoadingAddClassList = void 0), r()
  }
  const c = Fu(
      st({
        name: 'ElLoading',
        setup(d, { expose: f }) {
          const { ns: p, zIndex: g } = id('loading')
          return (
            f({ ns: p, zIndex: g }),
            () => {
              const m = n.spinner || n.svg,
                b = gs(
                  'svg',
                  {
                    class: 'circular',
                    viewBox: n.svgViewBox ? n.svgViewBox : '0 0 50 50',
                    ...(m ? { innerHTML: m } : {}),
                  },
                  [
                    gs('circle', {
                      class: 'path',
                      cx: '25',
                      cy: '25',
                      r: '20',
                      fill: 'none',
                    }),
                  ],
                ),
                y = n.text ? gs('p', { class: p.b('text') }, [n.text]) : void 0
              return gs(
                Ai,
                { name: p.b('fade'), onAfterLeave: l },
                {
                  default: Xt(() => [
                    bn(
                      ct(
                        'div',
                        {
                          style: { backgroundColor: n.background || '' },
                          class: [
                            p.b('mask'),
                            n.customClass,
                            n.fullscreen ? 'is-fullscreen' : '',
                          ],
                        },
                        [gs('div', { class: p.b('spinner') }, [b, y])],
                      ),
                      [[vn, n.visible]],
                    ),
                  ]),
                },
              )
            }
          )
        },
      }),
    ),
    u = c.mount(document.createElement('div'))
  return {
    ...Zh(n),
    setText: i,
    removeElLoadingChild: o,
    close: a,
    handleAfterLeave: l,
    vm: u,
    get $el() {
      return u.$el
    },
  }
}
let Fi
const Bo = function (e = {}) {
    if (!Zs) return
    const t = my(e)
    if (t.fullscreen && Fi) return Fi
    const s = py({
      ...t,
      closed: () => {
        var i
        ;(i = t.closed) == null || i.call(t), t.fullscreen && (Fi = void 0)
      },
    })
    gy(t, t.parent, s),
      xc(t, t.parent, s),
      (t.parent.vLoadingAddClassList = () => xc(t, t.parent, s))
    let n = t.parent.getAttribute('loading-number')
    return (
      n ? (n = `${Number.parseInt(n) + 1}`) : (n = '1'),
      t.parent.setAttribute('loading-number', n),
      t.parent.appendChild(s.$el),
      qs(() => (s.visible.value = t.visible)),
      t.fullscreen && (Fi = s),
      s
    )
  },
  my = (e) => {
    var t, s, n, i
    let r
    return (
      wt(e.target)
        ? (r =
            (t = document.querySelector(e.target)) != null ? t : document.body)
        : (r = e.target || document.body),
      {
        parent: r === document.body || e.body ? document.body : r,
        background: e.background || '',
        svg: e.svg || '',
        svgViewBox: e.svgViewBox || '',
        spinner: e.spinner || !1,
        text: e.text || '',
        fullscreen:
          r === document.body && ((s = e.fullscreen) != null ? s : !0),
        lock: (n = e.lock) != null ? n : !1,
        customClass: e.customClass || '',
        visible: (i = e.visible) != null ? i : !0,
        target: r,
      }
    )
  },
  gy = async (e, t, s) => {
    const { nextZIndex: n } = s.vm.zIndex || s.vm._.exposed.zIndex,
      i = {}
    if (e.fullscreen)
      (s.originalPosition.value = Vn(document.body, 'position')),
        (s.originalOverflow.value = Vn(document.body, 'overflow')),
        (i.zIndex = n())
    else if (e.parent === document.body) {
      ;(s.originalPosition.value = Vn(document.body, 'position')), await qs()
      for (const r of ['top', 'left']) {
        const o = r === 'top' ? 'scrollTop' : 'scrollLeft'
        i[r] = `${
          e.target.getBoundingClientRect()[r] +
          document.body[o] +
          document.documentElement[o] -
          Number.parseInt(Vn(document.body, `margin-${r}`), 10)
        }px`
      }
      for (const r of ['height', 'width'])
        i[r] = `${e.target.getBoundingClientRect()[r]}px`
    } else s.originalPosition.value = Vn(t, 'position')
    for (const [r, o] of Object.entries(i)) s.$el.style[r] = o
  },
  xc = (e, t, s) => {
    const n = s.vm.ns || s.vm._.exposed.ns
    ;['absolute', 'fixed', 'sticky'].includes(s.originalPosition.value)
      ? ar(t, n.bm('parent', 'relative'))
      : pc(t, n.bm('parent', 'relative')),
      e.fullscreen && e.lock
        ? pc(t, n.bm('parent', 'hidden'))
        : ar(t, n.bm('parent', 'hidden'))
  },
  Oo = Symbol('ElLoading'),
  bc = (e, t) => {
    var s, n, i, r
    const o = t.instance,
      a = (d) => (xt(t.value) ? t.value[d] : void 0),
      l = (d) => {
        const f = (wt(d) && (o == null ? void 0 : o[d])) || d
        return f && ht(f)
      },
      h = (d) => l(a(d) || e.getAttribute(`element-loading-${Ss(d)}`)),
      c = (s = a('fullscreen')) != null ? s : t.modifiers.fullscreen,
      u = {
        text: h('text'),
        svg: h('svg'),
        svgViewBox: h('svgViewBox'),
        spinner: h('spinner'),
        background: h('background'),
        customClass: h('customClass'),
        fullscreen: c,
        target: (n = a('target')) != null ? n : c ? void 0 : e,
        body: (i = a('body')) != null ? i : t.modifiers.body,
        lock: (r = a('lock')) != null ? r : t.modifiers.lock,
      }
    e[Oo] = { options: u, instance: Bo(u) }
  },
  _y = (e, t) => {
    for (const s of Object.keys(t)) It(t[s]) && (t[s].value = e[s])
  },
  vc = {
    mounted(e, t) {
      t.value && bc(e, t)
    },
    updated(e, t) {
      const s = e[Oo]
      t.oldValue !== t.value &&
        (t.value && !t.oldValue
          ? bc(e, t)
          : t.value && t.oldValue
          ? xt(t.value) && _y(t.value, s.options)
          : s == null || s.instance.close())
    },
    unmounted(e) {
      var t
      ;(t = e[Oo]) == null || t.instance.close()
    },
  },
  yy = {
    install(e) {
      e.directive('loading', vc), (e.config.globalProperties.$loading = Bo)
    },
    directive: vc,
    service: Bo,
  },
  cd = ['success', 'info', 'warning', 'error'],
  ie = R_({
    customClass: '',
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: '',
    message: '',
    onClose: void 0,
    showClose: !1,
    type: 'info',
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: Zs ? document.body : void 0,
  }),
  xy = Va({
    customClass: { type: String, default: ie.customClass },
    center: { type: Boolean, default: ie.center },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: ie.dangerouslyUseHTMLString,
    },
    duration: { type: Number, default: ie.duration },
    icon: { type: E_, default: ie.icon },
    id: { type: String, default: ie.id },
    message: { type: lr([String, Object, Function]), default: ie.message },
    onClose: { type: lr(Function), required: !1 },
    showClose: { type: Boolean, default: ie.showClose },
    type: { type: String, values: cd, default: ie.type },
    offset: { type: Number, default: ie.offset },
    zIndex: { type: Number, default: ie.zIndex },
    grouping: { type: Boolean, default: ie.grouping },
    repeatNum: { type: Number, default: ie.repeatNum },
  }),
  by = { destroy: () => !0 },
  Be = ba([]),
  vy = (e) => {
    const t = Be.findIndex((i) => i.id === e),
      s = Be[t]
    let n
    return t > 0 && (n = Be[t - 1]), { current: s, prev: n }
  },
  wy = (e) => {
    const { prev: t } = vy(e)
    return t ? t.vm.exposed.bottom.value : 0
  },
  Ay = (e, t) => (Be.findIndex((n) => n.id === e) > 0 ? 20 : t),
  Sy = ['id'],
  Cy = ['innerHTML'],
  Ey = st({ name: 'ElMessage' }),
  Py = st({
    ...Ey,
    props: xy,
    emits: by,
    setup(e, { expose: t }) {
      const s = e,
        { Close: n } = P_,
        { ns: i, zIndex: r } = id('message'),
        { currentZIndex: o, nextZIndex: a } = r,
        l = ht(),
        h = ht(!1),
        c = ht(0)
      let u
      const d = Z(() =>
          s.type ? (s.type === 'error' ? 'danger' : s.type) : 'info',
        ),
        f = Z(() => {
          const E = s.type
          return { [i.bm('icon', E)]: E && mc[E] }
        }),
        p = Z(() => s.icon || mc[s.type] || ''),
        g = Z(() => wy(s.id)),
        m = Z(() => Ay(s.id, s.offset) + g.value),
        b = Z(() => c.value + m.value),
        y = Z(() => ({ top: `${m.value}px`, zIndex: o.value }))
      function v() {
        s.duration !== 0 &&
          ({ stop: u } = xg(() => {
            M()
          }, s.duration))
      }
      function w() {
        u == null || u()
      }
      function M() {
        h.value = !1
      }
      function k({ code: E }) {
        E === M_.esc && M()
      }
      return (
        Te(() => {
          v(), a(), (h.value = !0)
        }),
        Zt(
          () => s.repeatNum,
          () => {
            w(), v()
          },
        ),
        qi(document, 'keydown', k),
        Sg(l, () => {
          c.value = l.value.getBoundingClientRect().height
        }),
        t({ visible: h, bottom: b, close: M }),
        (E, C) => (
          J(),
          pe(
            Ai,
            {
              name: F(i).b('fade'),
              onBeforeLeave: E.onClose,
              onAfterLeave: C[0] || (C[0] = (S) => E.$emit('destroy')),
              persisted: '',
            },
            {
              default: Xt(() => [
                bn(
                  nt(
                    'div',
                    {
                      id: E.id,
                      ref_key: 'messageRef',
                      ref: l,
                      class: Bt([
                        F(i).b(),
                        { [F(i).m(E.type)]: E.type && !E.icon },
                        F(i).is('center', E.center),
                        F(i).is('closable', E.showClose),
                        E.customClass,
                      ]),
                      style: me(F(y)),
                      role: 'alert',
                      onMouseenter: w,
                      onMouseleave: v,
                    },
                    [
                      E.repeatNum > 1
                        ? (J(),
                          pe(
                            F(Z_),
                            {
                              key: 0,
                              value: E.repeatNum,
                              type: F(d),
                              class: Bt(F(i).e('badge')),
                            },
                            null,
                            8,
                            ['value', 'type', 'class'],
                          ))
                        : Oi('v-if', !0),
                      F(p)
                        ? (J(),
                          pe(
                            F(yc),
                            { key: 1, class: Bt([F(i).e('icon'), F(f)]) },
                            { default: Xt(() => [(J(), pe(au(F(p))))]), _: 1 },
                            8,
                            ['class'],
                          ))
                        : Oi('v-if', !0),
                      ye(E.$slots, 'default', {}, () => [
                        E.dangerouslyUseHTMLString
                          ? (J(),
                            ft(
                              ee,
                              { key: 1 },
                              [
                                Oi(
                                  " Caution here, message could've been compromised, never use user's input as message ",
                                ),
                                nt(
                                  'p',
                                  {
                                    class: Bt(F(i).e('content')),
                                    innerHTML: E.message,
                                  },
                                  null,
                                  10,
                                  Cy,
                                ),
                              ],
                              2112,
                            ))
                          : (J(),
                            ft(
                              'p',
                              { key: 0, class: Bt(F(i).e('content')) },
                              yn(E.message),
                              3,
                            )),
                      ]),
                      E.showClose
                        ? (J(),
                          pe(
                            F(yc),
                            {
                              key: 2,
                              class: Bt(F(i).e('closeBtn')),
                              onClick: cg(M, ['stop']),
                            },
                            { default: Xt(() => [ct(F(n))]), _: 1 },
                            8,
                            ['class', 'onClick'],
                          ))
                        : Oi('v-if', !0),
                    ],
                    46,
                    Sy,
                  ),
                  [[vn, h.value]],
                ),
              ]),
              _: 3,
            },
            8,
            ['name', 'onBeforeLeave'],
          )
        )
      )
    },
  })
var Ty = Ps(Py, [['__file', 'message.vue']])
let My = 1
const hd = (e) => {
    const t = !e || wt(e) || Ws(e) || it(e) ? { message: e } : e,
      s = { ...ie, ...t }
    if (!s.appendTo) s.appendTo = document.body
    else if (wt(s.appendTo)) {
      let n = document.querySelector(s.appendTo)
      r_(n) || (n = document.body), (s.appendTo = n)
    }
    return s
  },
  Iy = (e) => {
    const t = Be.indexOf(e)
    if (t === -1) return
    Be.splice(t, 1)
    const { handler: s } = e
    s.close()
  },
  Ry = ({ appendTo: e, ...t }, s) => {
    const n = `message_${My++}`,
      i = t.onClose,
      r = document.createElement('div'),
      o = {
        ...t,
        id: n,
        onClose: () => {
          i == null || i(), Iy(c)
        },
        onDestroy: () => {
          tc(null, r)
        },
      },
      a = ct(
        Ty,
        o,
        it(o.message) || Ws(o.message)
          ? { default: it(o.message) ? o.message : () => o.message }
          : null,
      )
    ;(a.appContext = s || An._context),
      tc(a, r),
      e.appendChild(r.firstElementChild)
    const l = a.component,
      c = {
        id: n,
        vnode: a,
        vm: l,
        handler: {
          close: () => {
            l.exposed.visible.value = !1
          },
        },
        props: a.component.props,
      }
    return c
  },
  An = (e = {}, t) => {
    if (!Zs) return { close: () => {} }
    if (mi(_c.max) && Be.length >= _c.max) return { close: () => {} }
    const s = hd(e)
    if (s.grouping && Be.length) {
      const i = Be.find(({ vnode: r }) => {
        var o
        return ((o = r.props) == null ? void 0 : o.message) === s.message
      })
      if (i) return (i.props.repeatNum += 1), (i.props.type = s.type), i.handler
    }
    const n = Ry(s, t)
    return Be.push(n), n.handler
  }
cd.forEach((e) => {
  An[e] = (t = {}, s) => {
    const n = hd(t)
    return An({ ...n, type: e }, s)
  }
})
function ky(e) {
  for (const t of Be) (!e || e === t.props.type) && t.handler.close()
}
An.closeAll = ky
An._context = null
const Ga = T_(An, '$message')
const Ly = '' + new URL('../assets/logo-4800e564.png', import.meta.url).href
const Xe = (e, t) => {
    const s = e.__vccOpts || e
    for (const [n, i] of t) s[n] = i
    return s
  },
  By = {},
  ud = (e) => (iu('data-v-6dc9eed8'), (e = e()), ru(), e),
  Oy = { class: 'img-box' },
  Fy = ud(() => nt('img', { src: Ly }, null, -1)),
  $y = ud(() => nt('div', null, 'hamseung', -1)),
  Ny = [Fy, $y]
function Dy(e, t) {
  return J(), ft('div', Oy, Ny)
}
const zy = Xe(By, [
    ['render', Dy],
    ['__scopeId', 'data-v-6dc9eed8'],
  ]),
  Si = (e, t) => {
    if (
      ((e.install = (s) => {
        for (const n of [e, ...Object.values(t ?? {})]) s.component(n.name, n)
      }),
      t)
    )
      for (const [s, n] of Object.entries(t)) e[s] = n
    return e
  },
  Vy = st({
    name: 'PotButton',
    __name: 'button',
    props: { type: { default: void 0 } },
    setup(e) {
      const t = e,
        s = Z(() => ({ [`pot-button--${t.type}`]: t.type })),
        n = Z(() =>
          t.type
            ? t.type.replace(t.type.charAt(0), t.type.charAt(0).toUpperCase())
            : 'Default',
        )
      return (i, r) => (
        J(),
        ft(
          'button',
          { ref: 'buttonRef', class: Bt(['pot-button', s.value]) },
          [ye(i.$slots, 'default', {}, () => [Mu(yn(n.value), 1)])],
          2,
        )
      )
    },
  }),
  d6 = Si(Vy),
  Uy = { class: 'pot-icon' },
  Hy = ['xlink:href'],
  Gy = st({
    name: 'PotIcon',
    __name: 'icon',
    props: { iconClass: { default: '' } },
    setup(e) {
      const t = e,
        s = Z(() => `#icon-${t.iconClass}`)
      return (n, i) => (
        J(), ft('svg', Uy, [nt('use', { 'xlink:href': s.value }, null, 8, Hy)])
      )
    },
  }),
  dd = Si(Gy),
  fd = Symbol('radio-group')
function Wy(e, t) {
  const s = Vt(e, t)
  if (!s) throw new Error('该组件的上游组件需注入正确的值')
  return s
}
const jy = ['name', 'value'],
  Yy = st({
    name: 'PotRadio',
    __name: 'radio',
    props: { value: { default: '' } },
    setup(e) {
      const t = e,
        s = Wy(fd)
      function n(i) {
        const r = i.target
        s.changeRadioValue(r.value)
      }
      return (i, r) => (
        J(),
        ft(
          'label',
          {
            class: Bt([
              'pot-radio',
              { 'pot-radio_checked': t.value === F(s).checkedValue.value },
            ]),
          },
          [
            nt(
              'input',
              { type: 'radio', name: F(s).name, value: t.value, onFocus: n },
              null,
              40,
              jy,
            ),
            ye(i.$slots, 'default'),
          ],
          2,
        )
      )
    },
  }),
  wc = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function Xy(e) {
  return `${e}-${wc.prefix}-${wc.current++}`
}
const Ky = { class: 'pot-radio-group' },
  qy = st({
    name: 'PotRadioGroup',
    __name: 'radio-group',
    props: { modelValue: { default: '' } },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const s = e,
        n = t,
        i = Z(() => s.modelValue)
      return (
        mn(fd, {
          name: Xy('radio-group-name'),
          changeRadioValue: (r) => {
            n('update:modelValue', r)
          },
          checkedValue: i,
        }),
        (r, o) => (J(), ft('div', Ky, [ye(r.$slots, 'default')]))
      )
    },
  })
Si(Yy)
Si(qy)
const Zy = st({
    name: 'PotSwitch',
    __name: 'switch',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const s = e,
        n = t
      function i() {
        n('update:modelValue', !s.modelValue)
      }
      return (r, o) => (
        J(),
        ft(
          'div',
          {
            class: Bt([
              'pot-switch',
              [s.modelValue ? 'pot-switch_on' : 'pot-switch_off'],
            ]),
            onClick: i,
          },
          [
            nt(
              'div',
              {
                class: Bt([
                  'pot-switch--core',
                  [
                    s.modelValue
                      ? 'pot-switch--core_on'
                      : 'pot-switch--core_off',
                  ],
                ]),
              },
              null,
              2,
            ),
          ],
          2,
        )
      )
    },
  }),
  f6 = Si(Zy)
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const rn = typeof window < 'u'
function Qy(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const vt = Object.assign
function Zr(e, t) {
  const s = {}
  for (const n in t) {
    const i = t[n]
    s[n] = $e(i) ? i.map(e) : e(i)
  }
  return s
}
const si = () => {},
  $e = Array.isArray,
  Jy = /\/$/,
  t1 = (e) => e.replace(Jy, '')
function Qr(e, t, s = '/') {
  let n,
    i = {},
    r = '',
    o = ''
  const a = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((n = t.slice(0, l)),
      (r = t.slice(l + 1, a > -1 ? a : t.length)),
      (i = e(r))),
    a > -1 && ((n = n || t.slice(0, a)), (o = t.slice(a, t.length))),
    (n = i1(n ?? t, s)),
    { fullPath: n + (r && '?') + r + o, path: n, query: i, hash: o }
  )
}
function e1(e, t) {
  const s = t.query ? e(t.query) : ''
  return t.path + (s && '?') + s + (t.hash || '')
}
function Ac(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function s1(e, t, s) {
  const n = t.matched.length - 1,
    i = s.matched.length - 1
  return (
    n > -1 &&
    n === i &&
    Sn(t.matched[n], s.matched[i]) &&
    pd(t.params, s.params) &&
    e(t.query) === e(s.query) &&
    t.hash === s.hash
  )
}
function Sn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function pd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const s in e) if (!n1(e[s], t[s])) return !1
  return !0
}
function n1(e, t) {
  return $e(e) ? Sc(e, t) : $e(t) ? Sc(t, e) : e === t
}
function Sc(e, t) {
  return $e(t)
    ? e.length === t.length && e.every((s, n) => s === t[n])
    : e.length === 1 && e[0] === t
}
function i1(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const s = t.split('/'),
    n = e.split('/'),
    i = n[n.length - 1]
  ;(i === '..' || i === '.') && n.push('')
  let r = s.length - 1,
    o,
    a
  for (o = 0; o < n.length; o++)
    if (((a = n[o]), a !== '.'))
      if (a === '..') r > 1 && r--
      else break
  return (
    s.slice(0, r).join('/') +
    '/' +
    n.slice(o - (o === n.length ? 1 : 0)).join('/')
  )
}
var gi
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(gi || (gi = {}))
var ni
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(ni || (ni = {}))
function r1(e) {
  if (!e)
    if (rn) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), t1(e)
}
const o1 = /^[^#]+#/
function a1(e, t) {
  return e.replace(o1, '#') + t
}
function l1(e, t) {
  const s = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0),
  }
}
const Rr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function c1(e) {
  let t
  if ('el' in e) {
    const s = e.el,
      n = typeof s == 'string' && s.startsWith('#'),
      i =
        typeof s == 'string'
          ? n
            ? document.getElementById(s.slice(1))
            : document.querySelector(s)
          : s
    if (!i) return
    t = l1(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function Cc(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Fo = new Map()
function h1(e, t) {
  Fo.set(e, t)
}
function u1(e) {
  const t = Fo.get(e)
  return Fo.delete(e), t
}
let d1 = () => location.protocol + '//' + location.host
function md(e, t) {
  const { pathname: s, search: n, hash: i } = t,
    r = e.indexOf('#')
  if (r > -1) {
    let a = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = i.slice(a)
    return l[0] !== '/' && (l = '/' + l), Ac(l, '')
  }
  return Ac(s, e) + n + i
}
function f1(e, t, s, n) {
  let i = [],
    r = [],
    o = null
  const a = ({ state: d }) => {
    const f = md(e, location),
      p = s.value,
      g = t.value
    let m = 0
    if (d) {
      if (((s.value = f), (t.value = d), o && o === p)) {
        o = null
        return
      }
      m = g ? d.position - g.position : 0
    } else n(f)
    i.forEach((b) => {
      b(s.value, p, {
        delta: m,
        type: gi.pop,
        direction: m ? (m > 0 ? ni.forward : ni.back) : ni.unknown,
      })
    })
  }
  function l() {
    o = s.value
  }
  function h(d) {
    i.push(d)
    const f = () => {
      const p = i.indexOf(d)
      p > -1 && i.splice(p, 1)
    }
    return r.push(f), f
  }
  function c() {
    const { history: d } = window
    d.state && d.replaceState(vt({}, d.state, { scroll: Rr() }), '')
  }
  function u() {
    for (const d of r) d()
    ;(r = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: l, listen: h, destroy: u }
  )
}
function Ec(e, t, s, n = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: i ? Rr() : null,
  }
}
function p1(e) {
  const { history: t, location: s } = window,
    n = { value: md(e, s) },
    i = { value: t.state }
  i.value ||
    r(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function r(l, h, c) {
    const u = e.indexOf('#'),
      d =
        u > -1
          ? (s.host && document.querySelector('base') ? e : e.slice(u)) + l
          : d1() + e + l
    try {
      t[c ? 'replaceState' : 'pushState'](h, '', d), (i.value = h)
    } catch (f) {
      console.error(f), s[c ? 'replace' : 'assign'](d)
    }
  }
  function o(l, h) {
    const c = vt({}, t.state, Ec(i.value.back, l, i.value.forward, !0), h, {
      position: i.value.position,
    })
    r(l, c, !0), (n.value = l)
  }
  function a(l, h) {
    const c = vt({}, i.value, t.state, { forward: l, scroll: Rr() })
    r(c.current, c, !0)
    const u = vt({}, Ec(n.value, l, null), { position: c.position + 1 }, h)
    r(l, u, !1), (n.value = l)
  }
  return { location: n, state: i, push: a, replace: o }
}
function m1(e) {
  e = r1(e)
  const t = p1(e),
    s = f1(e, t.state, t.location, t.replace)
  function n(r, o = !0) {
    o || s.pauseListeners(), history.go(r)
  }
  const i = vt(
    { location: '', base: e, go: n, createHref: a1.bind(null, e) },
    t,
    s,
  )
  return (
    Object.defineProperty(i, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  )
}
function g1(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    m1(e)
  )
}
function _1(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function gd(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const as = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  _d = Symbol('')
var Pc
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Pc || (Pc = {}))
function Cn(e, t) {
  return vt(new Error(), { type: e, [_d]: !0 }, t)
}
function Ke(e, t) {
  return e instanceof Error && _d in e && (t == null || !!(e.type & t))
}
const Tc = '[^/]+?',
  y1 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  x1 = /[.+*?^${}()[\]/\\]/g
function b1(e, t) {
  const s = vt({}, y1, t),
    n = []
  let i = s.start ? '^' : ''
  const r = []
  for (const h of e) {
    const c = h.length ? [] : [90]
    s.strict && !h.length && (i += '/')
    for (let u = 0; u < h.length; u++) {
      const d = h[u]
      let f = 40 + (s.sensitive ? 0.25 : 0)
      if (d.type === 0)
        u || (i += '/'), (i += d.value.replace(x1, '\\$&')), (f += 40)
      else if (d.type === 1) {
        const { value: p, repeatable: g, optional: m, regexp: b } = d
        r.push({ name: p, repeatable: g, optional: m })
        const y = b || Tc
        if (y !== Tc) {
          f += 10
          try {
            new RegExp(`(${y})`)
          } catch (w) {
            throw new Error(
              `Invalid custom RegExp for param "${p}" (${y}): ` + w.message,
            )
          }
        }
        let v = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`
        u || (v = m && h.length < 2 ? `(?:/${v})` : '/' + v),
          m && (v += '?'),
          (i += v),
          (f += 20),
          m && (f += -8),
          g && (f += -20),
          y === '.*' && (f += -50)
      }
      c.push(f)
    }
    n.push(c)
  }
  if (s.strict && s.end) {
    const h = n.length - 1
    n[h][n[h].length - 1] += 0.7000000000000001
  }
  s.strict || (i += '/?'), s.end ? (i += '$') : s.strict && (i += '(?:/|$)')
  const o = new RegExp(i, s.sensitive ? '' : 'i')
  function a(h) {
    const c = h.match(o),
      u = {}
    if (!c) return null
    for (let d = 1; d < c.length; d++) {
      const f = c[d] || '',
        p = r[d - 1]
      u[p.name] = f && p.repeatable ? f.split('/') : f
    }
    return u
  }
  function l(h) {
    let c = '',
      u = !1
    for (const d of e) {
      ;(!u || !c.endsWith('/')) && (c += '/'), (u = !1)
      for (const f of d)
        if (f.type === 0) c += f.value
        else if (f.type === 1) {
          const { value: p, repeatable: g, optional: m } = f,
            b = p in h ? h[p] : ''
          if ($e(b) && !g)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const y = $e(b) ? b.join('/') : b
          if (!y)
            if (m)
              d.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0))
            else throw new Error(`Missing required param "${p}"`)
          c += y
        }
    }
    return c || '/'
  }
  return { re: o, score: n, keys: r, parse: a, stringify: l }
}
function v1(e, t) {
  let s = 0
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s]
    if (n) return n
    s++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function w1(e, t) {
  let s = 0
  const n = e.score,
    i = t.score
  for (; s < n.length && s < i.length; ) {
    const r = v1(n[s], i[s])
    if (r) return r
    s++
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (Mc(n)) return 1
    if (Mc(i)) return -1
  }
  return i.length - n.length
}
function Mc(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const A1 = { type: 0, value: '' },
  S1 = /[a-zA-Z0-9_]/
function C1(e) {
  if (!e) return [[]]
  if (e === '/') return [[A1]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(f) {
    throw new Error(`ERR (${s})/"${h}": ${f}`)
  }
  let s = 0,
    n = s
  const i = []
  let r
  function o() {
    r && i.push(r), (r = [])
  }
  let a = 0,
    l,
    h = '',
    c = ''
  function u() {
    h &&
      (s === 0
        ? r.push({ type: 0, value: h })
        : s === 1 || s === 2 || s === 3
        ? (r.length > 1 &&
            (l === '*' || l === '+') &&
            t(
              `A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`,
            ),
          r.push({
            type: 1,
            value: h,
            regexp: c,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (h = ''))
  }
  function d() {
    h += l
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && s !== 2)) {
      ;(n = s), (s = 4)
      continue
    }
    switch (s) {
      case 0:
        l === '/' ? (h && u(), o()) : l === ':' ? (u(), (s = 1)) : d()
        break
      case 4:
        d(), (s = n)
        break
      case 1:
        l === '('
          ? (s = 2)
          : S1.test(l)
          ? d()
          : (u(), (s = 0), l !== '*' && l !== '?' && l !== '+' && a--)
        break
      case 2:
        l === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + l)
            : (s = 3)
          : (c += l)
        break
      case 3:
        u(), (s = 0), l !== '*' && l !== '?' && l !== '+' && a--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${h}"`), u(), o(), i
}
function E1(e, t, s) {
  const n = b1(C1(e.path), s),
    i = vt(n, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function P1(e, t) {
  const s = [],
    n = new Map()
  t = kc({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(c) {
    return n.get(c)
  }
  function r(c, u, d) {
    const f = !d,
      p = T1(c)
    p.aliasOf = d && d.record
    const g = kc(t, c),
      m = [p]
    if ('alias' in c) {
      const v = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const w of v)
        m.push(
          vt({}, p, {
            components: d ? d.record.components : p.components,
            path: w,
            aliasOf: d ? d.record : p,
          }),
        )
    }
    let b, y
    for (const v of m) {
      const { path: w } = v
      if (u && w[0] !== '/') {
        const M = u.record.path,
          k = M[M.length - 1] === '/' ? '' : '/'
        v.path = u.record.path + (w && k + w)
      }
      if (
        ((b = E1(v, u, g)),
        d
          ? d.alias.push(b)
          : ((y = y || b),
            y !== b && y.alias.push(b),
            f && c.name && !Rc(b) && o(c.name)),
        p.children)
      ) {
        const M = p.children
        for (let k = 0; k < M.length; k++) r(M[k], b, d && d.children[k])
      }
      ;(d = d || b),
        ((b.record.components && Object.keys(b.record.components).length) ||
          b.record.name ||
          b.record.redirect) &&
          l(b)
    }
    return y
      ? () => {
          o(y)
        }
      : si
  }
  function o(c) {
    if (gd(c)) {
      const u = n.get(c)
      u &&
        (n.delete(c),
        s.splice(s.indexOf(u), 1),
        u.children.forEach(o),
        u.alias.forEach(o))
    } else {
      const u = s.indexOf(c)
      u > -1 &&
        (s.splice(u, 1),
        c.record.name && n.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o))
    }
  }
  function a() {
    return s
  }
  function l(c) {
    let u = 0
    for (
      ;
      u < s.length &&
      w1(c, s[u]) >= 0 &&
      (c.record.path !== s[u].record.path || !yd(c, s[u]));

    )
      u++
    s.splice(u, 0, c), c.record.name && !Rc(c) && n.set(c.record.name, c)
  }
  function h(c, u) {
    let d,
      f = {},
      p,
      g
    if ('name' in c && c.name) {
      if (((d = n.get(c.name)), !d)) throw Cn(1, { location: c })
      ;(g = d.record.name),
        (f = vt(
          Ic(
            u.params,
            d.keys.filter((y) => !y.optional).map((y) => y.name),
          ),
          c.params &&
            Ic(
              c.params,
              d.keys.map((y) => y.name),
            ),
        )),
        (p = d.stringify(f))
    } else if ('path' in c)
      (p = c.path),
        (d = s.find((y) => y.re.test(p))),
        d && ((f = d.parse(p)), (g = d.record.name))
    else {
      if (((d = u.name ? n.get(u.name) : s.find((y) => y.re.test(u.path))), !d))
        throw Cn(1, { location: c, currentLocation: u })
      ;(g = d.record.name),
        (f = vt({}, u.params, c.params)),
        (p = d.stringify(f))
    }
    const m = []
    let b = d
    for (; b; ) m.unshift(b.record), (b = b.parent)
    return { name: g, path: p, params: f, matched: m, meta: I1(m) }
  }
  return (
    e.forEach((c) => r(c)),
    {
      addRoute: r,
      resolve: h,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: i,
    }
  )
}
function Ic(e, t) {
  const s = {}
  for (const n of t) n in e && (s[n] = e[n])
  return s
}
function T1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: M1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
}
function M1(e) {
  const t = {},
    s = e.props || !1
  if ('component' in e) t.default = s
  else for (const n in e.components) t[n] = typeof s == 'object' ? s[n] : s
  return t
}
function Rc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function I1(e) {
  return e.reduce((t, s) => vt(t, s.meta), {})
}
function kc(e, t) {
  const s = {}
  for (const n in e) s[n] = n in t ? t[n] : e[n]
  return s
}
function yd(e, t) {
  return t.children.some((s) => s === e || yd(e, s))
}
const xd = /#/g,
  R1 = /&/g,
  k1 = /\//g,
  L1 = /=/g,
  B1 = /\?/g,
  bd = /\+/g,
  O1 = /%5B/g,
  F1 = /%5D/g,
  vd = /%5E/g,
  $1 = /%60/g,
  wd = /%7B/g,
  N1 = /%7C/g,
  Ad = /%7D/g,
  D1 = /%20/g
function Wa(e) {
  return encodeURI('' + e)
    .replace(N1, '|')
    .replace(O1, '[')
    .replace(F1, ']')
}
function z1(e) {
  return Wa(e).replace(wd, '{').replace(Ad, '}').replace(vd, '^')
}
function $o(e) {
  return Wa(e)
    .replace(bd, '%2B')
    .replace(D1, '+')
    .replace(xd, '%23')
    .replace(R1, '%26')
    .replace($1, '`')
    .replace(wd, '{')
    .replace(Ad, '}')
    .replace(vd, '^')
}
function V1(e) {
  return $o(e).replace(L1, '%3D')
}
function U1(e) {
  return Wa(e).replace(xd, '%23').replace(B1, '%3F')
}
function H1(e) {
  return e == null ? '' : U1(e).replace(k1, '%2F')
}
function hr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function G1(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < n.length; ++i) {
    const r = n[i].replace(bd, ' '),
      o = r.indexOf('='),
      a = hr(o < 0 ? r : r.slice(0, o)),
      l = o < 0 ? null : hr(r.slice(o + 1))
    if (a in t) {
      let h = t[a]
      $e(h) || (h = t[a] = [h]), h.push(l)
    } else t[a] = l
  }
  return t
}
function Lc(e) {
  let t = ''
  for (let s in e) {
    const n = e[s]
    if (((s = V1(s)), n == null)) {
      n !== void 0 && (t += (t.length ? '&' : '') + s)
      continue
    }
    ;($e(n) ? n.map((r) => r && $o(r)) : [n && $o(n)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? '&' : '') + s), r != null && (t += '=' + r))
    })
  }
  return t
}
function W1(e) {
  const t = {}
  for (const s in e) {
    const n = e[s]
    n !== void 0 &&
      (t[s] = $e(n)
        ? n.map((i) => (i == null ? null : '' + i))
        : n == null
        ? n
        : '' + n)
  }
  return t
}
const j1 = Symbol(''),
  Bc = Symbol(''),
  kr = Symbol(''),
  ja = Symbol(''),
  No = Symbol('')
function Un() {
  let e = []
  function t(n) {
    return (
      e.push(n),
      () => {
        const i = e.indexOf(n)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function s() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: s }
}
function fs(e, t, s, n, i) {
  const r = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || [])
  return () =>
    new Promise((o, a) => {
      const l = (u) => {
          u === !1
            ? a(Cn(4, { from: s, to: t }))
            : u instanceof Error
            ? a(u)
            : _1(u)
            ? a(Cn(2, { from: t, to: u }))
            : (r &&
                n.enterCallbacks[i] === r &&
                typeof u == 'function' &&
                r.push(u),
              o())
        },
        h = e.call(n && n.instances[i], t, s, l)
      let c = Promise.resolve(h)
      e.length < 3 && (c = c.then(l)), c.catch((u) => a(u))
    })
}
function Jr(e, t, s, n) {
  const i = []
  for (const r of e)
    for (const o in r.components) {
      let a = r.components[o]
      if (!(t !== 'beforeRouteEnter' && !r.instances[o]))
        if (Y1(a)) {
          const h = (a.__vccOpts || a)[t]
          h && i.push(fs(h, s, n, r, o))
        } else {
          let l = a()
          i.push(() =>
            l.then((h) => {
              if (!h)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${r.path}"`),
                )
              const c = Qy(h) ? h.default : h
              r.components[o] = c
              const d = (c.__vccOpts || c)[t]
              return d && fs(d, s, n, r, o)()
            }),
          )
        }
    }
  return i
}
function Y1(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function Oc(e) {
  const t = Vt(kr),
    s = Vt(ja),
    n = Z(() => t.resolve(F(e.to))),
    i = Z(() => {
      const { matched: l } = n.value,
        { length: h } = l,
        c = l[h - 1],
        u = s.matched
      if (!c || !u.length) return -1
      const d = u.findIndex(Sn.bind(null, c))
      if (d > -1) return d
      const f = Fc(l[h - 2])
      return h > 1 && Fc(c) === f && u[u.length - 1].path !== f
        ? u.findIndex(Sn.bind(null, l[h - 2]))
        : d
    }),
    r = Z(() => i.value > -1 && Z1(s.params, n.value.params)),
    o = Z(
      () =>
        i.value > -1 &&
        i.value === s.matched.length - 1 &&
        pd(s.params, n.value.params),
    )
  function a(l = {}) {
    return q1(l)
      ? t[F(e.replace) ? 'replace' : 'push'](F(e.to)).catch(si)
      : Promise.resolve()
  }
  return {
    route: n,
    href: Z(() => n.value.href),
    isActive: r,
    isExactActive: o,
    navigate: a,
  }
}
const X1 = st({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Oc,
    setup(e, { slots: t }) {
      const s = In(Oc(e)),
        { options: n } = Vt(kr),
        i = Z(() => ({
          [$c(e.activeClass, n.linkActiveClass, 'router-link-active')]:
            s.isActive,
          [$c(
            e.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active',
          )]: s.isExactActive,
        }))
      return () => {
        const r = t.default && t.default(s)
        return e.custom
          ? r
          : gs(
              'a',
              {
                'aria-current': s.isExactActive ? e.ariaCurrentValue : null,
                href: s.href,
                onClick: s.navigate,
                class: i.value,
              },
              r,
            )
      }
    },
  }),
  K1 = X1
function q1(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Z1(e, t) {
  for (const s in t) {
    const n = t[s],
      i = e[s]
    if (typeof n == 'string') {
      if (n !== i) return !1
    } else if (!$e(i) || i.length !== n.length || n.some((r, o) => r !== i[o]))
      return !1
  }
  return !0
}
function Fc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const $c = (e, t, s) => e ?? t ?? s,
  Q1 = st({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: s }) {
      const n = Vt(No),
        i = Z(() => e.route || n.value),
        r = Vt(Bc, 0),
        o = Z(() => {
          let h = F(r)
          const { matched: c } = i.value
          let u
          for (; (u = c[h]) && !u.components; ) h++
          return h
        }),
        a = Z(() => i.value.matched[o.value])
      mn(
        Bc,
        Z(() => o.value + 1),
      ),
        mn(j1, a),
        mn(No, i)
      const l = ht()
      return (
        Zt(
          () => [l.value, a.value, e.name],
          ([h, c, u], [d, f, p]) => {
            c &&
              ((c.instances[u] = h),
              f &&
                f !== c &&
                h &&
                h === d &&
                (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards),
                c.updateGuards.size || (c.updateGuards = f.updateGuards))),
              h &&
                c &&
                (!f || !Sn(c, f) || !d) &&
                (c.enterCallbacks[u] || []).forEach((g) => g(h))
          },
          { flush: 'post' },
        ),
        () => {
          const h = i.value,
            c = e.name,
            u = a.value,
            d = u && u.components[c]
          if (!d) return Nc(s.default, { Component: d, route: h })
          const f = u.props[c],
            p = f
              ? f === !0
                ? h.params
                : typeof f == 'function'
                ? f(h)
                : f
              : null,
            m = gs(
              d,
              vt({}, p, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (u.instances[c] = null)
                },
                ref: l,
              }),
            )
          return Nc(s.default, { Component: m, route: h }) || m
        }
      )
    },
  })
function Nc(e, t) {
  if (!e) return null
  const s = e(t)
  return s.length === 1 ? s[0] : s
}
const J1 = Q1
function tx(e) {
  const t = P1(e.routes, e),
    s = e.parseQuery || G1,
    n = e.stringifyQuery || Lc,
    i = e.history,
    r = Un(),
    o = Un(),
    a = Un(),
    l = bp(as)
  let h = as
  rn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const c = Zr.bind(null, (R) => '' + R),
    u = Zr.bind(null, H1),
    d = Zr.bind(null, hr)
  function f(R, U) {
    let N, W
    return (
      gd(R) ? ((N = t.getRecordMatcher(R)), (W = U)) : (W = R), t.addRoute(W, N)
    )
  }
  function p(R) {
    const U = t.getRecordMatcher(R)
    U && t.removeRoute(U)
  }
  function g() {
    return t.getRoutes().map((R) => R.record)
  }
  function m(R) {
    return !!t.getRecordMatcher(R)
  }
  function b(R, U) {
    if (((U = vt({}, U || l.value)), typeof R == 'string')) {
      const x = Qr(s, R, U.path),
        A = t.resolve({ path: x.path }, U),
        I = i.createHref(x.fullPath)
      return vt(x, A, {
        params: d(A.params),
        hash: hr(x.hash),
        redirectedFrom: void 0,
        href: I,
      })
    }
    let N
    if ('path' in R) N = vt({}, R, { path: Qr(s, R.path, U.path).path })
    else {
      const x = vt({}, R.params)
      for (const A in x) x[A] == null && delete x[A]
      ;(N = vt({}, R, { params: u(x) })), (U.params = u(U.params))
    }
    const W = t.resolve(N, U),
      yt = R.hash || ''
    W.params = c(d(W.params))
    const bt = e1(n, vt({}, R, { hash: z1(yt), path: W.path })),
      _ = i.createHref(bt)
    return vt(
      { fullPath: bt, hash: yt, query: n === Lc ? W1(R.query) : R.query || {} },
      W,
      { redirectedFrom: void 0, href: _ },
    )
  }
  function y(R) {
    return typeof R == 'string' ? Qr(s, R, l.value.path) : vt({}, R)
  }
  function v(R, U) {
    if (h !== R) return Cn(8, { from: U, to: R })
  }
  function w(R) {
    return E(R)
  }
  function M(R) {
    return w(vt(y(R), { replace: !0 }))
  }
  function k(R) {
    const U = R.matched[R.matched.length - 1]
    if (U && U.redirect) {
      const { redirect: N } = U
      let W = typeof N == 'function' ? N(R) : N
      return (
        typeof W == 'string' &&
          ((W = W.includes('?') || W.includes('#') ? (W = y(W)) : { path: W }),
          (W.params = {})),
        vt(
          { query: R.query, hash: R.hash, params: 'path' in W ? {} : R.params },
          W,
        )
      )
    }
  }
  function E(R, U) {
    const N = (h = b(R)),
      W = l.value,
      yt = R.state,
      bt = R.force,
      _ = R.replace === !0,
      x = k(N)
    if (x)
      return E(
        vt(y(x), {
          state: typeof x == 'object' ? vt({}, yt, x.state) : yt,
          force: bt,
          replace: _,
        }),
        U || N,
      )
    const A = N
    A.redirectedFrom = U
    let I
    return (
      !bt &&
        s1(n, W, N) &&
        ((I = Cn(16, { to: A, from: W })), xe(W, W, !0, !1)),
      (I ? Promise.resolve(I) : P(A, W))
        .catch((T) => (Ke(T) ? (Ke(T, 2) ? T : et(T)) : _t(T, A, W)))
        .then((T) => {
          if (T) {
            if (Ke(T, 2))
              return E(
                vt({ replace: _ }, y(T.to), {
                  state: typeof T.to == 'object' ? vt({}, yt, T.to.state) : yt,
                  force: bt,
                }),
                U || A,
              )
          } else T = V(A, W, !0, _, yt)
          return Y(A, W, T), T
        })
    )
  }
  function C(R, U) {
    const N = v(R, U)
    return N ? Promise.reject(N) : Promise.resolve()
  }
  function S(R) {
    const U = be.values().next().value
    return U && typeof U.runWithContext == 'function'
      ? U.runWithContext(R)
      : R()
  }
  function P(R, U) {
    let N
    const [W, yt, bt] = ex(R, U)
    N = Jr(W.reverse(), 'beforeRouteLeave', R, U)
    for (const x of W)
      x.leaveGuards.forEach((A) => {
        N.push(fs(A, R, U))
      })
    const _ = C.bind(null, R, U)
    return (
      N.push(_),
      Lt(N)
        .then(() => {
          N = []
          for (const x of r.list()) N.push(fs(x, R, U))
          return N.push(_), Lt(N)
        })
        .then(() => {
          N = Jr(yt, 'beforeRouteUpdate', R, U)
          for (const x of yt)
            x.updateGuards.forEach((A) => {
              N.push(fs(A, R, U))
            })
          return N.push(_), Lt(N)
        })
        .then(() => {
          N = []
          for (const x of bt)
            if (x.beforeEnter)
              if ($e(x.beforeEnter))
                for (const A of x.beforeEnter) N.push(fs(A, R, U))
              else N.push(fs(x.beforeEnter, R, U))
          return N.push(_), Lt(N)
        })
        .then(
          () => (
            R.matched.forEach((x) => (x.enterCallbacks = {})),
            (N = Jr(bt, 'beforeRouteEnter', R, U)),
            N.push(_),
            Lt(N)
          ),
        )
        .then(() => {
          N = []
          for (const x of o.list()) N.push(fs(x, R, U))
          return N.push(_), Lt(N)
        })
        .catch((x) => (Ke(x, 8) ? x : Promise.reject(x)))
    )
  }
  function Y(R, U, N) {
    a.list().forEach((W) => S(() => W(R, U, N)))
  }
  function V(R, U, N, W, yt) {
    const bt = v(R, U)
    if (bt) return bt
    const _ = U === as,
      x = rn ? history.state : {}
    N &&
      (W || _
        ? i.replace(R.fullPath, vt({ scroll: _ && x && x.scroll }, yt))
        : i.push(R.fullPath, yt)),
      (l.value = R),
      xe(R, U, N, _),
      et()
  }
  let D
  function G() {
    D ||
      (D = i.listen((R, U, N) => {
        if (!De.listening) return
        const W = b(R),
          yt = k(W)
        if (yt) {
          E(vt(yt, { replace: !0 }), W).catch(si)
          return
        }
        h = W
        const bt = l.value
        rn && h1(Cc(bt.fullPath, N.delta), Rr()),
          P(W, bt)
            .catch((_) =>
              Ke(_, 12)
                ? _
                : Ke(_, 2)
                ? (E(_.to, W)
                    .then((x) => {
                      Ke(x, 20) && !N.delta && N.type === gi.pop && i.go(-1, !1)
                    })
                    .catch(si),
                  Promise.reject())
                : (N.delta && i.go(-N.delta, !1), _t(_, W, bt)),
            )
            .then((_) => {
              ;(_ = _ || V(W, bt, !1)),
                _ &&
                  (N.delta && !Ke(_, 8)
                    ? i.go(-N.delta, !1)
                    : N.type === gi.pop && Ke(_, 20) && i.go(-1, !1)),
                Y(W, bt, _)
            })
            .catch(si)
      }))
  }
  let ut = Un(),
    X = Un(),
    lt
  function _t(R, U, N) {
    et(R)
    const W = X.list()
    return (
      W.length ? W.forEach((yt) => yt(R, U, N)) : console.error(R),
      Promise.reject(R)
    )
  }
  function K() {
    return lt && l.value !== as
      ? Promise.resolve()
      : new Promise((R, U) => {
          ut.add([R, U])
        })
  }
  function et(R) {
    return (
      lt ||
        ((lt = !R),
        G(),
        ut.list().forEach(([U, N]) => (R ? N(R) : U())),
        ut.reset()),
      R
    )
  }
  function xe(R, U, N, W) {
    const { scrollBehavior: yt } = e
    if (!rn || !yt) return Promise.resolve()
    const bt =
      (!N && u1(Cc(R.fullPath, 0))) ||
      ((W || !N) && history.state && history.state.scroll) ||
      null
    return qs()
      .then(() => yt(R, U, bt))
      .then((_) => _ && c1(_))
      .catch((_) => _t(_, R, U))
  }
  const at = (R) => i.go(R)
  let Qt
  const be = new Set(),
    De = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: p,
      hasRoute: m,
      getRoutes: g,
      resolve: b,
      options: e,
      push: w,
      replace: M,
      go: at,
      back: () => at(-1),
      forward: () => at(1),
      beforeEach: r.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: X.add,
      isReady: K,
      install(R) {
        const U = this
        R.component('RouterLink', K1),
          R.component('RouterView', J1),
          (R.config.globalProperties.$router = U),
          Object.defineProperty(R.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => F(l),
          }),
          rn &&
            !Qt &&
            l.value === as &&
            ((Qt = !0), w(i.location).catch((yt) => {}))
        const N = {}
        for (const yt in as)
          Object.defineProperty(N, yt, {
            get: () => l.value[yt],
            enumerable: !0,
          })
        R.provide(kr, U), R.provide(ja, ba(N)), R.provide(No, l)
        const W = R.unmount
        be.add(R),
          (R.unmount = function () {
            be.delete(R),
              be.size < 1 &&
                ((h = as),
                D && D(),
                (D = null),
                (l.value = as),
                (Qt = !1),
                (lt = !1)),
              W()
          })
      },
    }
  function Lt(R) {
    return R.reduce((U, N) => U.then(() => S(N)), Promise.resolve())
  }
  return De
}
function ex(e, t) {
  const s = [],
    n = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < r; o++) {
    const a = t.matched[o]
    a && (e.matched.find((h) => Sn(h, a)) ? n.push(a) : s.push(a))
    const l = e.matched[o]
    l && (t.matched.find((h) => Sn(h, l)) || i.push(l))
  }
  return [s, n, i]
}
function sx() {
  return Vt(kr)
}
function nx() {
  return Vt(ja)
}
const ix = (e) => (iu('data-v-763cd14c'), (e = e()), ru(), e),
  rx = { class: 'menu' },
  ox = ['onClick'],
  ax = ix(() => nt('div', { class: 'placeholder' }, null, -1)),
  lx = st({
    __name: 'index',
    setup(e) {
      const t = sx(),
        s = nx(),
        n = ht('')
      Zt(
        () => s.path,
        (o) => {
          n.value = o
        },
      )
      const i = [
        { id: 1, icon: 'record', title: '录制', path: '/record' },
        { id: 2, icon: 'cut', title: '裁剪', path: '/cut' },
        { id: 3, icon: 'editor-text', title: '文本', path: '/editor' },
        { id: 4, icon: 'download', title: '保存', path: '/download' },
      ]
      function r(o) {
        t.replace(o)
      }
      return (o, a) => {
        const l = dd
        return (
          J(),
          ft(
            ee,
            null,
            [
              nt('div', rx, [
                (J(),
                ft(
                  ee,
                  null,
                  tm(i, (h) =>
                    nt(
                      'div',
                      {
                        key: h.id,
                        class: Bt(['menu-item', { chosen: F(n) === h.path }]),
                        onClick: (c) => r(h.path),
                      },
                      [
                        ct(l, { 'icon-class': h.icon }, null, 8, [
                          'icon-class',
                        ]),
                        nt('span', null, yn(h.title), 1),
                      ],
                      10,
                      ox,
                    ),
                  ),
                  64,
                )),
              ]),
              ax,
            ],
            64,
          )
        )
      }
    },
  })
const cx = Xe(lx, [['__scopeId', 'data-v-763cd14c']])
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Sd
const Lr = (e) => (Sd = e),
  Cd = Symbol()
function Do(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  )
}
var ii
;(function (e) {
  ;(e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function')
})(ii || (ii = {}))
function hx() {
  const e = Lh(!0),
    t = e.run(() => ht({}))
  let s = [],
    n = []
  const i = yr({
    install(r) {
      Lr(i),
        (i._a = r),
        r.provide(Cd, i),
        (r.config.globalProperties.$pinia = i),
        n.forEach((o) => s.push(o)),
        (n = [])
    },
    use(r) {
      return !this._a && !pg ? n.push(r) : s.push(r), this
    },
    _p: s,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return i
}
const Ed = () => {}
function Dc(e, t, s, n = Ed) {
  e.push(t)
  const i = () => {
    const r = e.indexOf(t)
    r > -1 && (e.splice(r, 1), n())
  }
  return !s && pa() && Bh(i), i
}
function sn(e, ...t) {
  e.slice().forEach((s) => {
    s(...t)
  })
}
const ux = (e) => e()
function zo(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((s, n) => e.set(n, s)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const s in t) {
    if (!t.hasOwnProperty(s)) continue
    const n = t[s],
      i = e[s]
    Do(i) && Do(n) && e.hasOwnProperty(s) && !It(n) && !bs(n)
      ? (e[s] = zo(i, n))
      : (e[s] = n)
  }
  return e
}
const dx = Symbol()
function fx(e) {
  return !Do(e) || !e.hasOwnProperty(dx)
}
const { assign: ls } = Object
function px(e) {
  return !!(It(e) && e.effect)
}
function mx(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t,
    a = s.state.value[e]
  let l
  function h() {
    a || (s.state.value[e] = i ? i() : {})
    const c = Zh(s.state.value[e])
    return ls(
      c,
      r,
      Object.keys(o || {}).reduce(
        (u, d) => (
          (u[d] = yr(
            Z(() => {
              Lr(s)
              const f = s._s.get(e)
              return o[d].call(f, f)
            }),
          )),
          u
        ),
        {},
      ),
    )
  }
  return (l = Pd(e, h, t, s, n, !0)), l
}
function Pd(e, t, s = {}, n, i, r) {
  let o
  const a = ls({ actions: {} }, s),
    l = { deep: !0 }
  let h,
    c,
    u = [],
    d = [],
    f
  const p = n.state.value[e]
  !r && !p && (n.state.value[e] = {}), ht({})
  let g
  function m(C) {
    let S
    ;(h = c = !1),
      typeof C == 'function'
        ? (C(n.state.value[e]),
          (S = { type: ii.patchFunction, storeId: e, events: f }))
        : (zo(n.state.value[e], C),
          (S = { type: ii.patchObject, payload: C, storeId: e, events: f }))
    const P = (g = Symbol())
    qs().then(() => {
      g === P && (h = !0)
    }),
      (c = !0),
      sn(u, S, n.state.value[e])
  }
  const b = r
    ? function () {
        const { state: S } = s,
          P = S ? S() : {}
        this.$patch((Y) => {
          ls(Y, P)
        })
      }
    : Ed
  function y() {
    o.stop(), (u = []), (d = []), n._s.delete(e)
  }
  function v(C, S) {
    return function () {
      Lr(n)
      const P = Array.from(arguments),
        Y = [],
        V = []
      function D(X) {
        Y.push(X)
      }
      function G(X) {
        V.push(X)
      }
      sn(d, { args: P, name: C, store: M, after: D, onError: G })
      let ut
      try {
        ut = S.apply(this && this.$id === e ? this : M, P)
      } catch (X) {
        throw (sn(V, X), X)
      }
      return ut instanceof Promise
        ? ut
            .then((X) => (sn(Y, X), X))
            .catch((X) => (sn(V, X), Promise.reject(X)))
        : (sn(Y, ut), ut)
    }
  }
  const w = {
      _p: n,
      $id: e,
      $onAction: Dc.bind(null, d),
      $patch: m,
      $reset: b,
      $subscribe(C, S = {}) {
        const P = Dc(u, C, S.detached, () => Y()),
          Y = o.run(() =>
            Zt(
              () => n.state.value[e],
              (V) => {
                ;(S.flush === 'sync' ? c : h) &&
                  C({ storeId: e, type: ii.direct, events: f }, V)
              },
              ls({}, l, S),
            ),
          )
        return P
      },
      $dispose: y,
    },
    M = In(w)
  n._s.set(e, M)
  const E = ((n._a && n._a.runWithContext) || ux)(() =>
    n._e.run(() => (o = Lh()).run(t)),
  )
  for (const C in E) {
    const S = E[C]
    if ((It(S) && !px(S)) || bs(S))
      r ||
        (p && fx(S) && (It(S) ? (S.value = p[C]) : zo(S, p[C])),
        (n.state.value[e][C] = S))
    else if (typeof S == 'function') {
      const P = v(C, S)
      ;(E[C] = P), (a.actions[C] = S)
    }
  }
  return (
    ls(M, E),
    ls(gt(M), E),
    Object.defineProperty(M, '$state', {
      get: () => n.state.value[e],
      set: (C) => {
        m((S) => {
          ls(S, C)
        })
      },
    }),
    n._p.forEach((C) => {
      ls(
        M,
        o.run(() => C({ store: M, app: n._a, pinia: n, options: a })),
      )
    }),
    p && r && s.hydrate && s.hydrate(M.$state, p),
    (h = !0),
    (c = !0),
    M
  )
}
function Td(e, t, s) {
  let n, i
  const r = typeof t == 'function'
  typeof e == 'string' ? ((n = e), (i = r ? s : t)) : ((i = e), (n = e.id))
  function o(a, l) {
    const h = hm()
    return (
      (a = a || (h ? Vt(Cd, null) : null)),
      a && Lr(a),
      (a = Sd),
      a._s.has(n) || (r ? Pd(n, t, i, a) : mx(n, i, a)),
      a._s.get(n)
    )
  }
  return (o.$id = n), o
}
const Js = Td('player', () => {
  const e = ht(null),
    t = ht(''),
    s = ht(0),
    n = ht(0),
    i = ht(0),
    r = ht(0),
    o = ht(!1)
  function a(p) {
    t.value = p
  }
  function l(p) {
    e.value = p
  }
  function h() {
    ;(s.value = Number(e.value.duration.toFixed(2))),
      c(0),
      u(0),
      d(s.value),
      f(!1)
  }
  function c(p) {
    n.value = p
  }
  function u(p) {
    i.value = p
  }
  function d(p) {
    r.value = p
  }
  function f(p) {
    o.value = p
  }
  return {
    videoRef: e,
    videoSrc: t,
    duration: s,
    currentTime: n,
    startTime: i,
    endTime: r,
    playing: o,
    setVideoRef: l,
    initPlayer: h,
    changeCurrentTime: c,
    changeStartTime: u,
    changeEndTime: d,
    changePlaying: f,
    changeVideoSrc: a,
  }
})
function Ci() {
  const e = Js()
  async function t(a) {
    return new Promise((l) => {
      const h = document.createElement('video')
      e.setVideoRef(h),
        (h.oncanplaythrough = () => {
          ;(h.oncanplaythrough = null),
            h.duration === 1 / 0
              ? ((h.ontimeupdate = () => {
                  ;(h.ontimeupdate = s),
                    (h.currentTime = 0),
                    e.initPlayer(),
                    l(!0)
                }),
                (h.currentTime = 1e101))
              : ((h.ontimeupdate = s), e.initPlayer(), l(!0))
        }),
        (h.muted = !0),
        (h.autoplay = !0),
        (h.src = a)
    })
  }
  function s() {
    const a = Number(e.videoRef.currentTime.toFixed(2))
    e.changeCurrentTime(a)
  }
  function n() {
    e.changePlaying(!1), e.videoRef.pause()
  }
  function i() {
    e.changePlaying(!1),
      e.videoRef.pause(),
      (e.videoRef.currentTime = e.endTime)
  }
  function r() {
    e.currentTime >= e.endTime && (e.videoRef.currentTime = e.startTime),
      e.changePlaying(!0),
      e.videoRef.play()
  }
  function o(a) {
    e.videoRef.currentTime = a
  }
  return {
    playerStore: e,
    videoCreate: t,
    videoPlay: r,
    videoPause: n,
    videoPauseByAuto: i,
    videoSkip: o,
  }
}
const zc = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function gx(e) {
  return `${e}-${zc.prefix}-${zc.current++}`
}
function _x(e, t = 500) {
  let s = null
  return function (...n) {
    s ||
      (s = setTimeout(() => {
        e.apply(this, n), (s = null)
      }, t))
  }
}
const Vo = 'gro-key',
  Md = {},
  Vc = new ResizeObserver((e) => {
    for (const t of e) {
      const s = t.target.getAttribute(Vo)
      Md[s](t)
    }
  })
function yx(e, t, s, n = 0) {
  let i
  Te(() => {
    i = F(e)
    const r = gx(Vo)
    i.setAttribute(Vo, r),
      n !== 0 && (s = _x(s, n)),
      (Md[r] = s),
      Vc.observe(i, t)
  }),
    Ma(() => {
      Vc.unobserve(i)
    })
}
const xx = 'modulepreload',
  bx = function (e, t) {
    return new URL(e, t).href
  },
  Uc = {},
  ys = function (t, s, n) {
    if (!s || s.length === 0) return t()
    const i = document.getElementsByTagName('link')
    return Promise.all(
      s.map((r) => {
        if (((r = bx(r, n)), r in Uc)) return
        Uc[r] = !0
        const o = r.endsWith('.css'),
          a = o ? '[rel="stylesheet"]' : ''
        if (!!n)
          for (let c = i.length - 1; c >= 0; c--) {
            const u = i[c]
            if (u.href === r && (!o || u.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${r}"]${a}`)) return
        const h = document.createElement('link')
        if (
          ((h.rel = o ? 'stylesheet' : xx),
          o || ((h.as = 'script'), (h.crossOrigin = '')),
          (h.href = r),
          document.head.appendChild(h),
          o)
        )
          return new Promise((c, u) => {
            h.addEventListener('load', c),
              h.addEventListener('error', () =>
                u(new Error(`Unable to preload CSS for ${r}`)),
              )
          })
      }),
    )
      .then(() => t())
      .catch((r) => {
        const o = new Event('vite:preloadError', { cancelable: !0 })
        if (((o.payload = r), window.dispatchEvent(o), !o.defaultPrevented))
          throw r
      })
  }
var ot = ((e) => (
  (e.Application = 'application'),
  (e.WebGLPipes = 'webgl-pipes'),
  (e.WebGLPipesAdaptor = 'webgl-pipes-adaptor'),
  (e.WebGLSystem = 'webgl-system'),
  (e.WebGPUPipes = 'webgpu-pipes'),
  (e.WebGPUPipesAdaptor = 'webgpu-pipes-adaptor'),
  (e.WebGPUSystem = 'webgpu-system'),
  (e.CanvasSystem = 'canvas-system'),
  (e.CanvasPipesAdaptor = 'canvas-pipes-adaptor'),
  (e.CanvasPipes = 'canvas-pipes'),
  (e.Asset = 'asset'),
  (e.LoadParser = 'load-parser'),
  (e.ResolveParser = 'resolve-parser'),
  (e.CacheParser = 'cache-parser'),
  (e.DetectionParser = 'detection-parser'),
  (e.MaskEffect = 'mask-effect'),
  (e.BlendMode = 'blend-mode'),
  (e.TextureSource = 'texture-source'),
  (e.Environment = 'environment'),
  e
))(ot || {})
const Uo = (e) => {
    if (typeof e == 'function' || (typeof e == 'object' && e.extension)) {
      if (!e.extension)
        throw new Error('Extension class must have an extension object')
      e = {
        ...(typeof e.extension != 'object'
          ? { type: e.extension }
          : e.extension),
        ref: e,
      }
    }
    if (typeof e == 'object') e = { ...e }
    else throw new Error('Invalid extension type')
    return typeof e.type == 'string' && (e.type = [e.type]), e
  },
  $i = (e, t) => Uo(e).priority ?? t,
  Pe = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...e) {
      return (
        e.map(Uo).forEach((t) => {
          t.type.forEach((s) => {
            var n, i
            return (i = (n = this._removeHandlers)[s]) == null
              ? void 0
              : i.call(n, t)
          })
        }),
        this
      )
    },
    add(...e) {
      return (
        e.map(Uo).forEach((t) => {
          t.type.forEach((s) => {
            var r, o
            const n = this._addHandlers,
              i = this._queue
            n[s]
              ? (o = n[s]) == null || o.call(n, t)
              : ((i[s] = i[s] || []), (r = i[s]) == null || r.push(t))
          })
        }),
        this
      )
    },
    handle(e, t, s) {
      var o
      const n = this._addHandlers,
        i = this._removeHandlers
      if (n[e] || i[e])
        throw new Error(`Extension type ${e} already has a handler`)
      ;(n[e] = t), (i[e] = s)
      const r = this._queue
      return (
        r[e] && ((o = r[e]) == null || o.forEach((a) => t(a)), delete r[e]),
        this
      )
    },
    handleByMap(e, t) {
      return this.handle(
        e,
        (s) => {
          s.name && (t[s.name] = s.ref)
        },
        (s) => {
          s.name && delete t[s.name]
        },
      )
    },
    handleByNamedList(e, t, s = -1) {
      return this.handle(
        e,
        (n) => {
          t.findIndex((r) => r.name === n.name) >= 0 ||
            (t.push({ name: n.name, value: n.ref }),
            t.sort((r, o) => $i(o.value, s) - $i(r.value, s)))
        },
        (n) => {
          const i = t.findIndex((r) => r.name === n.name)
          i !== -1 && t.splice(i, 1)
        },
      )
    },
    handleByList(e, t, s = -1) {
      return this.handle(
        e,
        (n) => {
          t.includes(n.ref) ||
            (t.push(n.ref), t.sort((i, r) => $i(r, s) - $i(i, s)))
        },
        (n) => {
          const i = t.indexOf(n.ref)
          i !== -1 && t.splice(i, 1)
        },
      )
    },
  },
  vx = {
    extension: { type: ot.Environment, name: 'browser', priority: -1 },
    test: () => !0,
    load: async () => {
      await ys(
        () => import('./browserAll-927462cc.js'),
        [
          './browserAll-927462cc.js',
          './init-8c629002.js',
          './colorToUniform-f839a808.js',
          './CanvasPool-3a305dd3.js',
          './batchSamplersUniformGroup-913fcf01.js',
        ],
        import.meta.url,
      )
    },
  },
  wx = {
    extension: { type: ot.Environment, name: 'webworker', priority: 0 },
    test: () => typeof self < 'u' && self.WorkerGlobalScope !== void 0,
    load: async () => {
      await ys(
        () => import('./webworkerAll-cf2d9c41.js'),
        [
          './webworkerAll-cf2d9c41.js',
          './init-8c629002.js',
          './colorToUniform-f839a808.js',
          './CanvasPool-3a305dd3.js',
          './batchSamplersUniformGroup-913fcf01.js',
        ],
        import.meta.url,
      )
    },
  }
class oe {
  constructor(t, s, n) {
    ;(this._x = s || 0), (this._y = n || 0), (this._observer = t)
  }
  clone(t) {
    return new oe(t ?? this._observer, this._x, this._y)
  }
  set(t = 0, s = t) {
    return (
      (this._x !== t || this._y !== s) &&
        ((this._x = t), (this._y = s), this._observer._onUpdate(this)),
      this
    )
  }
  copyFrom(t) {
    return (
      (this._x !== t.x || this._y !== t.y) &&
        ((this._x = t.x), (this._y = t.y), this._observer._onUpdate(this)),
      this
    )
  }
  copyTo(t) {
    return t.set(this._x, this._y), t
  }
  equals(t) {
    return t.x === this._x && t.y === this._y
  }
  toString() {
    return `[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`
  }
  get x() {
    return this._x
  }
  set x(t) {
    this._x !== t && ((this._x = t), this._observer._onUpdate(this))
  }
  get y() {
    return this._y
  }
  set y(t) {
    this._y !== t && ((this._y = t), this._observer._onUpdate(this))
  }
}
var Id = { exports: {} }
;(function (e) {
  var t = Object.prototype.hasOwnProperty,
    s = '~'
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (s = !1))
  function i(l, h, c) {
    ;(this.fn = l), (this.context = h), (this.once = c || !1)
  }
  function r(l, h, c, u, d) {
    if (typeof c != 'function')
      throw new TypeError('The listener must be a function')
    var f = new i(c, u || l, d),
      p = s ? s + h : h
    return (
      l._events[p]
        ? l._events[p].fn
          ? (l._events[p] = [l._events[p], f])
          : l._events[p].push(f)
        : ((l._events[p] = f), l._eventsCount++),
      l
    )
  }
  function o(l, h) {
    --l._eventsCount === 0 ? (l._events = new n()) : delete l._events[h]
  }
  function a() {
    ;(this._events = new n()), (this._eventsCount = 0)
  }
  ;(a.prototype.eventNames = function () {
    var h = [],
      c,
      u
    if (this._eventsCount === 0) return h
    for (u in (c = this._events)) t.call(c, u) && h.push(s ? u.slice(1) : u)
    return Object.getOwnPropertySymbols
      ? h.concat(Object.getOwnPropertySymbols(c))
      : h
  }),
    (a.prototype.listeners = function (h) {
      var c = s ? s + h : h,
        u = this._events[c]
      if (!u) return []
      if (u.fn) return [u.fn]
      for (var d = 0, f = u.length, p = new Array(f); d < f; d++) p[d] = u[d].fn
      return p
    }),
    (a.prototype.listenerCount = function (h) {
      var c = s ? s + h : h,
        u = this._events[c]
      return u ? (u.fn ? 1 : u.length) : 0
    }),
    (a.prototype.emit = function (h, c, u, d, f, p) {
      var g = s ? s + h : h
      if (!this._events[g]) return !1
      var m = this._events[g],
        b = arguments.length,
        y,
        v
      if (m.fn) {
        switch ((m.once && this.removeListener(h, m.fn, void 0, !0), b)) {
          case 1:
            return m.fn.call(m.context), !0
          case 2:
            return m.fn.call(m.context, c), !0
          case 3:
            return m.fn.call(m.context, c, u), !0
          case 4:
            return m.fn.call(m.context, c, u, d), !0
          case 5:
            return m.fn.call(m.context, c, u, d, f), !0
          case 6:
            return m.fn.call(m.context, c, u, d, f, p), !0
        }
        for (v = 1, y = new Array(b - 1); v < b; v++) y[v - 1] = arguments[v]
        m.fn.apply(m.context, y)
      } else {
        var w = m.length,
          M
        for (v = 0; v < w; v++)
          switch (
            (m[v].once && this.removeListener(h, m[v].fn, void 0, !0), b)
          ) {
            case 1:
              m[v].fn.call(m[v].context)
              break
            case 2:
              m[v].fn.call(m[v].context, c)
              break
            case 3:
              m[v].fn.call(m[v].context, c, u)
              break
            case 4:
              m[v].fn.call(m[v].context, c, u, d)
              break
            default:
              if (!y)
                for (M = 1, y = new Array(b - 1); M < b; M++)
                  y[M - 1] = arguments[M]
              m[v].fn.apply(m[v].context, y)
          }
      }
      return !0
    }),
    (a.prototype.on = function (h, c, u) {
      return r(this, h, c, u, !1)
    }),
    (a.prototype.once = function (h, c, u) {
      return r(this, h, c, u, !0)
    }),
    (a.prototype.removeListener = function (h, c, u, d) {
      var f = s ? s + h : h
      if (!this._events[f]) return this
      if (!c) return o(this, f), this
      var p = this._events[f]
      if (p.fn)
        p.fn === c && (!d || p.once) && (!u || p.context === u) && o(this, f)
      else {
        for (var g = 0, m = [], b = p.length; g < b; g++)
          (p[g].fn !== c || (d && !p[g].once) || (u && p[g].context !== u)) &&
            m.push(p[g])
        m.length ? (this._events[f] = m.length === 1 ? m[0] : m) : o(this, f)
      }
      return this
    }),
    (a.prototype.removeAllListeners = function (h) {
      var c
      return (
        h
          ? ((c = s ? s + h : h), this._events[c] && o(this, c))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      )
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.addListener = a.prototype.on),
    (a.prefixed = s),
    (a.EventEmitter = a),
    (e.exports = a)
})(Id)
var Ax = Id.exports
const ss = Ha(Ax),
  Sx = Math.PI * 2,
  Cx = 180 / Math.PI,
  Ex = Math.PI / 180
class qt {
  constructor(t = 0, s = 0) {
    ;(this.x = 0), (this.y = 0), (this.x = t), (this.y = s)
  }
  clone() {
    return new qt(this.x, this.y)
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this
  }
  copyTo(t) {
    return t.set(this.x, this.y), t
  }
  equals(t) {
    return t.x === this.x && t.y === this.y
  }
  set(t = 0, s = t) {
    return (this.x = t), (this.y = s), this
  }
  toString() {
    return `[pixi.js/math:Point x=${this.x} y=${this.y}]`
  }
  static get shared() {
    return (to.x = 0), (to.y = 0), to
  }
}
const to = new qt()
class St {
  constructor(t = 1, s = 0, n = 0, i = 1, r = 0, o = 0) {
    ;(this.array = null),
      (this.a = t),
      (this.b = s),
      (this.c = n),
      (this.d = i),
      (this.tx = r),
      (this.ty = o)
  }
  fromArray(t) {
    ;(this.a = t[0]),
      (this.b = t[1]),
      (this.c = t[3]),
      (this.d = t[4]),
      (this.tx = t[2]),
      (this.ty = t[5])
  }
  set(t, s, n, i, r, o) {
    return (
      (this.a = t),
      (this.b = s),
      (this.c = n),
      (this.d = i),
      (this.tx = r),
      (this.ty = o),
      this
    )
  }
  toArray(t, s) {
    this.array || (this.array = new Float32Array(9))
    const n = s || this.array
    return (
      t
        ? ((n[0] = this.a),
          (n[1] = this.b),
          (n[2] = 0),
          (n[3] = this.c),
          (n[4] = this.d),
          (n[5] = 0),
          (n[6] = this.tx),
          (n[7] = this.ty),
          (n[8] = 1))
        : ((n[0] = this.a),
          (n[1] = this.c),
          (n[2] = this.tx),
          (n[3] = this.b),
          (n[4] = this.d),
          (n[5] = this.ty),
          (n[6] = 0),
          (n[7] = 0),
          (n[8] = 1)),
      n
    )
  }
  apply(t, s) {
    s = s || new qt()
    const n = t.x,
      i = t.y
    return (
      (s.x = this.a * n + this.c * i + this.tx),
      (s.y = this.b * n + this.d * i + this.ty),
      s
    )
  }
  applyInverse(t, s) {
    s = s || new qt()
    const n = this.a,
      i = this.b,
      r = this.c,
      o = this.d,
      a = this.tx,
      l = this.ty,
      h = 1 / (n * o + r * -i),
      c = t.x,
      u = t.y
    return (
      (s.x = o * h * c + -r * h * u + (l * r - a * o) * h),
      (s.y = n * h * u + -i * h * c + (-l * n + a * i) * h),
      s
    )
  }
  translate(t, s) {
    return (this.tx += t), (this.ty += s), this
  }
  scale(t, s) {
    return (
      (this.a *= t),
      (this.d *= s),
      (this.c *= t),
      (this.b *= s),
      (this.tx *= t),
      (this.ty *= s),
      this
    )
  }
  rotate(t) {
    const s = Math.cos(t),
      n = Math.sin(t),
      i = this.a,
      r = this.c,
      o = this.tx
    return (
      (this.a = i * s - this.b * n),
      (this.b = i * n + this.b * s),
      (this.c = r * s - this.d * n),
      (this.d = r * n + this.d * s),
      (this.tx = o * s - this.ty * n),
      (this.ty = o * n + this.ty * s),
      this
    )
  }
  append(t) {
    const s = this.a,
      n = this.b,
      i = this.c,
      r = this.d
    return (
      (this.a = t.a * s + t.b * i),
      (this.b = t.a * n + t.b * r),
      (this.c = t.c * s + t.d * i),
      (this.d = t.c * n + t.d * r),
      (this.tx = t.tx * s + t.ty * i + this.tx),
      (this.ty = t.tx * n + t.ty * r + this.ty),
      this
    )
  }
  appendFrom(t, s) {
    const n = t.a,
      i = t.b,
      r = t.c,
      o = t.d,
      a = t.tx,
      l = t.ty,
      h = s.a,
      c = s.b,
      u = s.c,
      d = s.d
    return (
      (this.a = n * h + i * u),
      (this.b = n * c + i * d),
      (this.c = r * h + o * u),
      (this.d = r * c + o * d),
      (this.tx = a * h + l * u + s.tx),
      (this.ty = a * c + l * d + s.ty),
      this
    )
  }
  setTransform(t, s, n, i, r, o, a, l, h) {
    return (
      (this.a = Math.cos(a + h) * r),
      (this.b = Math.sin(a + h) * r),
      (this.c = -Math.sin(a - l) * o),
      (this.d = Math.cos(a - l) * o),
      (this.tx = t - (n * this.a + i * this.c)),
      (this.ty = s - (n * this.b + i * this.d)),
      this
    )
  }
  prepend(t) {
    const s = this.tx
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const n = this.a,
        i = this.c
      ;(this.a = n * t.a + this.b * t.c),
        (this.b = n * t.b + this.b * t.d),
        (this.c = i * t.a + this.d * t.c),
        (this.d = i * t.b + this.d * t.d)
    }
    return (
      (this.tx = s * t.a + this.ty * t.c + t.tx),
      (this.ty = s * t.b + this.ty * t.d + t.ty),
      this
    )
  }
  decompose(t) {
    const s = this.a,
      n = this.b,
      i = this.c,
      r = this.d,
      o = t.pivot,
      a = -Math.atan2(-i, r),
      l = Math.atan2(n, s),
      h = Math.abs(a + l)
    return (
      h < 1e-5 || Math.abs(Sx - h) < 1e-5
        ? ((t.rotation = l), (t.skew.x = t.skew.y = 0))
        : ((t.rotation = 0), (t.skew.x = a), (t.skew.y = l)),
      (t.scale.x = Math.sqrt(s * s + n * n)),
      (t.scale.y = Math.sqrt(i * i + r * r)),
      (t.position.x = this.tx + (o.x * s + o.y * i)),
      (t.position.y = this.ty + (o.x * n + o.y * r)),
      t
    )
  }
  invert() {
    const t = this.a,
      s = this.b,
      n = this.c,
      i = this.d,
      r = this.tx,
      o = t * i - s * n
    return (
      (this.a = i / o),
      (this.b = -s / o),
      (this.c = -n / o),
      (this.d = t / o),
      (this.tx = (n * this.ty - i * r) / o),
      (this.ty = -(t * this.ty - s * r) / o),
      this
    )
  }
  isIdentity() {
    return (
      this.a === 1 &&
      this.b === 0 &&
      this.c === 0 &&
      this.d === 1 &&
      this.tx === 0 &&
      this.ty === 0
    )
  }
  identity() {
    return (
      (this.a = 1),
      (this.b = 0),
      (this.c = 0),
      (this.d = 1),
      (this.tx = 0),
      (this.ty = 0),
      this
    )
  }
  clone() {
    const t = new St()
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    )
  }
  copyTo(t) {
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    )
  }
  copyFrom(t) {
    return (
      (this.a = t.a),
      (this.b = t.b),
      (this.c = t.c),
      (this.d = t.d),
      (this.tx = t.tx),
      (this.ty = t.ty),
      this
    )
  }
  equals(t) {
    return (
      t.a === this.a &&
      t.b === this.b &&
      t.c === this.c &&
      t.d === this.d &&
      t.tx === this.tx &&
      t.ty === this.ty
    )
  }
  toString() {
    return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
  }
  static get IDENTITY() {
    return Tx.identity()
  }
  static get shared() {
    return Px.identity()
  }
}
const Px = new St(),
  Tx = new St(),
  Os = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  Fs = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  $s = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  Ns = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  Ho = [],
  Rd = [],
  Ni = Math.sign
function Mx() {
  for (let e = 0; e < 16; e++) {
    const t = []
    Ho.push(t)
    for (let s = 0; s < 16; s++) {
      const n = Ni(Os[e] * Os[s] + $s[e] * Fs[s]),
        i = Ni(Fs[e] * Os[s] + Ns[e] * Fs[s]),
        r = Ni(Os[e] * $s[s] + $s[e] * Ns[s]),
        o = Ni(Fs[e] * $s[s] + Ns[e] * Ns[s])
      for (let a = 0; a < 16; a++)
        if (Os[a] === n && Fs[a] === i && $s[a] === r && Ns[a] === o) {
          t.push(a)
          break
        }
    }
  }
  for (let e = 0; e < 16; e++) {
    const t = new St()
    t.set(Os[e], Fs[e], $s[e], Ns[e], 0, 0), Rd.push(t)
  }
}
Mx()
const Rt = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: (e) => Os[e],
    uY: (e) => Fs[e],
    vX: (e) => $s[e],
    vY: (e) => Ns[e],
    inv: (e) => (e & 8 ? e & 15 : -e & 7),
    add: (e, t) => Ho[e][t],
    sub: (e, t) => Ho[e][Rt.inv(t)],
    rotate180: (e) => e ^ 4,
    isVertical: (e) => (e & 3) === 2,
    byDirection: (e, t) =>
      Math.abs(e) * 2 <= Math.abs(t)
        ? t >= 0
          ? Rt.S
          : Rt.N
        : Math.abs(t) * 2 <= Math.abs(e)
        ? e > 0
          ? Rt.E
          : Rt.W
        : t > 0
        ? e > 0
          ? Rt.SE
          : Rt.SW
        : e > 0
        ? Rt.NE
        : Rt.NW,
    matrixAppendRotationInv: (e, t, s = 0, n = 0) => {
      const i = Rd[Rt.inv(t)]
      ;(i.tx = s), (i.ty = n), e.append(i)
    },
  },
  Di = [new qt(), new qt(), new qt(), new qt()]
class Ht {
  constructor(t = 0, s = 0, n = 0, i = 0) {
    ;(this.type = 'rectangle'),
      (this.x = Number(t)),
      (this.y = Number(s)),
      (this.width = Number(n)),
      (this.height = Number(i))
  }
  get left() {
    return this.x
  }
  get right() {
    return this.x + this.width
  }
  get top() {
    return this.y
  }
  get bottom() {
    return this.y + this.height
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom
  }
  static get EMPTY() {
    return new Ht(0, 0, 0, 0)
  }
  clone() {
    return new Ht(this.x, this.y, this.width, this.height)
  }
  copyFromBounds(t) {
    return (
      (this.x = t.minX),
      (this.y = t.minY),
      (this.width = t.maxX - t.minX),
      (this.height = t.maxY - t.minY),
      this
    )
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.width = t.width),
      (this.height = t.height),
      this
    )
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  contains(t, s) {
    return this.width <= 0 || this.height <= 0
      ? !1
      : t >= this.x &&
          t < this.x + this.width &&
          s >= this.y &&
          s < this.y + this.height
  }
  strokeContains(t, s, n) {
    const { width: i, height: r } = this
    if (i <= 0 || r <= 0) return !1
    const o = this.x,
      a = this.y,
      l = o - n / 2,
      h = o + i + n / 2,
      c = a - n / 2,
      u = a + r + n / 2,
      d = o + n / 2,
      f = o + i - n / 2,
      p = a + n / 2,
      g = a + r - n / 2
    return (
      t >= l &&
      t <= h &&
      s >= c &&
      s <= u &&
      !(t > d && t < f && s > p && s < g)
    )
  }
  intersects(t, s) {
    if (!s) {
      const C = this.x < t.x ? t.x : this.x
      if ((this.right > t.right ? t.right : this.right) <= C) return !1
      const P = this.y < t.y ? t.y : this.y
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > P
    }
    const n = this.left,
      i = this.right,
      r = this.top,
      o = this.bottom
    if (i <= n || o <= r) return !1
    const a = Di[0].set(t.left, t.top),
      l = Di[1].set(t.left, t.bottom),
      h = Di[2].set(t.right, t.top),
      c = Di[3].set(t.right, t.bottom)
    if (h.x <= a.x || l.y <= a.y) return !1
    const u = Math.sign(s.a * s.d - s.b * s.c)
    if (
      u === 0 ||
      (s.apply(a, a),
      s.apply(l, l),
      s.apply(h, h),
      s.apply(c, c),
      Math.max(a.x, l.x, h.x, c.x) <= n ||
        Math.min(a.x, l.x, h.x, c.x) >= i ||
        Math.max(a.y, l.y, h.y, c.y) <= r ||
        Math.min(a.y, l.y, h.y, c.y) >= o)
    )
      return !1
    const d = u * (l.y - a.y),
      f = u * (a.x - l.x),
      p = d * n + f * r,
      g = d * i + f * r,
      m = d * n + f * o,
      b = d * i + f * o
    if (
      Math.max(p, g, m, b) <= d * a.x + f * a.y ||
      Math.min(p, g, m, b) >= d * c.x + f * c.y
    )
      return !1
    const y = u * (a.y - h.y),
      v = u * (h.x - a.x),
      w = y * n + v * r,
      M = y * i + v * r,
      k = y * n + v * o,
      E = y * i + v * o
    return !(
      Math.max(w, M, k, E) <= y * a.x + v * a.y ||
      Math.min(w, M, k, E) >= y * c.x + v * c.y
    )
  }
  pad(t = 0, s = t) {
    return (
      (this.x -= t),
      (this.y -= s),
      (this.width += t * 2),
      (this.height += s * 2),
      this
    )
  }
  fit(t) {
    const s = Math.max(this.x, t.x),
      n = Math.min(this.x + this.width, t.x + t.width),
      i = Math.max(this.y, t.y),
      r = Math.min(this.y + this.height, t.y + t.height)
    return (
      (this.x = s),
      (this.width = Math.max(n - s, 0)),
      (this.y = i),
      (this.height = Math.max(r - i, 0)),
      this
    )
  }
  ceil(t = 1, s = 0.001) {
    const n = Math.ceil((this.x + this.width - s) * t) / t,
      i = Math.ceil((this.y + this.height - s) * t) / t
    return (
      (this.x = Math.floor((this.x + s) * t) / t),
      (this.y = Math.floor((this.y + s) * t) / t),
      (this.width = n - this.x),
      (this.height = i - this.y),
      this
    )
  }
  enlarge(t) {
    const s = Math.min(this.x, t.x),
      n = Math.max(this.x + this.width, t.x + t.width),
      i = Math.min(this.y, t.y),
      r = Math.max(this.y + this.height, t.y + t.height)
    return (
      (this.x = s),
      (this.width = n - s),
      (this.y = i),
      (this.height = r - i),
      this
    )
  }
  getBounds(t) {
    return (t = t || new Ht()), t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
  }
}
const eo = { default: -1 }
function Gt(e = 'default') {
  return eo[e] === void 0 && (eo[e] = -1), ++eo[e]
}
const Hc = {},
  ge = '8.0.0'
function _e(e, t, s = 3) {
  if (Hc[t]) return
  let n = new Error().stack
  typeof n > 'u'
    ? console.warn(
        'PixiJS Deprecation Warning: ',
        `${t}
Deprecated since v${e}`,
      )
    : ((n = n
        .split(
          `
`,
        )
        .splice(s).join(`
`)),
      console.groupCollapsed
        ? (console.groupCollapsed(
            '%cPixiJS Deprecation Warning: %c%s',
            'color:#614108;background:#fffbe6',
            'font-weight:normal;color:#614108;background:#fffbe6',
            `${t}
Deprecated since v${e}`,
          ),
          console.warn(n),
          console.groupEnd())
        : (console.warn(
            'PixiJS Deprecation Warning: ',
            `${t}
Deprecated since v${e}`,
          ),
          console.warn(n))),
    (Hc[t] = !0)
}
const kd = () => {}
function p6(e) {
  return (
    (e += e === 0 ? 1 : 0),
    --e,
    (e |= e >>> 1),
    (e |= e >>> 2),
    (e |= e >>> 4),
    (e |= e >>> 8),
    (e |= e >>> 16),
    e + 1
  )
}
function Gc(e) {
  return !(e & (e - 1)) && !!e
}
function Ix(e) {
  const t = {}
  for (const s in e) e[s] !== void 0 && (t[s] = e[s])
  return t
}
const Wc = Object.create(null)
function Rx(e) {
  const t = Wc[e]
  return t === void 0 && (Wc[e] = Gt('resource')), t
}
const Ld = class Bd extends ss {
  constructor(t = {}) {
    super(),
      (this._resourceType = 'textureSampler'),
      (this._touched = 0),
      (this._maxAnisotropy = 1),
      (this.destroyed = !1),
      (t = { ...Bd.defaultOptions, ...t }),
      (this.addressMode = t.addressMode),
      (this.addressModeU = t.addressModeU ?? this.addressModeU),
      (this.addressModeV = t.addressModeV ?? this.addressModeV),
      (this.addressModeW = t.addressModeW ?? this.addressModeW),
      (this.scaleMode = t.scaleMode),
      (this.magFilter = t.magFilter ?? this.magFilter),
      (this.minFilter = t.minFilter ?? this.minFilter),
      (this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter),
      (this.lodMinClamp = t.lodMinClamp),
      (this.lodMaxClamp = t.lodMaxClamp),
      (this.compare = t.compare),
      (this.maxAnisotropy = t.maxAnisotropy ?? 1)
  }
  set addressMode(t) {
    ;(this.addressModeU = t), (this.addressModeV = t), (this.addressModeW = t)
  }
  get addressMode() {
    return this.addressModeU
  }
  set wrapMode(t) {
    _e(ge, 'TextureStyle.wrapMode is now TextureStyle.addressMode'),
      (this.addressMode = t)
  }
  get wrapMode() {
    return this.addressMode
  }
  set scaleMode(t) {
    ;(this.magFilter = t), (this.minFilter = t), (this.mipmapFilter = t)
  }
  get scaleMode() {
    return this.magFilter
  }
  set maxAnisotropy(t) {
    ;(this._maxAnisotropy = Math.min(t, 16)),
      this._maxAnisotropy > 1 && (this.scaleMode = 'linear')
  }
  get maxAnisotropy() {
    return this._maxAnisotropy
  }
  get _resourceId() {
    return this._sharedResourceId || this._generateResourceId()
  }
  update() {
    this.emit('change', this), (this._sharedResourceId = null)
  }
  _generateResourceId() {
    const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`
    return (this._sharedResourceId = Rx(t)), this._resourceId
  }
  destroy() {
    ;(this.destroyed = !0),
      this.emit('destroy', this),
      this.emit('change', this),
      this.removeAllListeners()
  }
}
Ld.defaultOptions = { addressMode: 'clamp-to-edge', scaleMode: 'linear' }
let kx = Ld
const Od = class Fd extends ss {
  constructor(t = {}) {
    super(),
      (this.options = t),
      (this.uid = Gt('textureSource')),
      (this._resourceType = 'textureSource'),
      (this._resourceId = Gt('resource')),
      (this.uploadMethodId = 'unknown'),
      (this._resolution = 1),
      (this.pixelWidth = 1),
      (this.pixelHeight = 1),
      (this.width = 1),
      (this.height = 1),
      (this.sampleCount = 1),
      (this.mipLevelCount = 1),
      (this.autoGenerateMipmaps = !1),
      (this.format = 'rgba8unorm'),
      (this.dimension = '2d'),
      (this.antialias = !1),
      (this._touched = 0),
      (this._batchTick = -1),
      (this._textureBindLocation = -1),
      (t = { ...Fd.defaultOptions, ...t }),
      (this.label = t.label ?? ''),
      (this.resource = t.resource),
      (this.autoGarbageCollect = t.autoGarbageCollect),
      (this._resolution = t.resolution),
      t.width
        ? (this.pixelWidth = t.width * this._resolution)
        : (this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1),
      t.height
        ? (this.pixelHeight = t.height * this._resolution)
        : (this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1),
      (this.width = this.pixelWidth / this._resolution),
      (this.height = this.pixelHeight / this._resolution),
      (this.format = t.format),
      (this.dimension = t.dimensions),
      (this.mipLevelCount = t.mipLevelCount),
      (this.autoGenerateMipmaps = t.autoGenerateMipmaps),
      (this.sampleCount = t.sampleCount),
      (this.antialias = t.antialias),
      (this.alphaMode = t.alphaMode),
      (this.style = new kx(Ix(t))),
      (this.destroyed = !1),
      this._refreshPOT()
  }
  get source() {
    return this
  }
  get style() {
    return this._style
  }
  set style(t) {
    var s, n
    this.style !== t &&
      ((s = this._style) == null || s.off('change', this._onStyleChange, this),
      (this._style = t),
      (n = this._style) == null || n.on('change', this._onStyleChange, this),
      this._onStyleChange())
  }
  get addressMode() {
    return this._style.addressMode
  }
  set addressMode(t) {
    this._style.addressMode = t
  }
  get repeatMode() {
    return this._style.addressMode
  }
  set repeatMode(t) {
    this._style.addressMode = t
  }
  get magFilter() {
    return this._style.magFilter
  }
  set magFilter(t) {
    this._style.magFilter = t
  }
  get minFilter() {
    return this._style.minFilter
  }
  set minFilter(t) {
    this._style.minFilter = t
  }
  get mipmapFilter() {
    return this._style.mipmapFilter
  }
  set mipmapFilter(t) {
    this._style.mipmapFilter = t
  }
  get lodMinClamp() {
    return this._style.lodMinClamp
  }
  set lodMinClamp(t) {
    this._style.lodMinClamp = t
  }
  get lodMaxClamp() {
    return this._style.lodMaxClamp
  }
  set lodMaxClamp(t) {
    this._style.lodMaxClamp = t
  }
  _onStyleChange() {
    this.emit('styleChange', this)
  }
  update() {
    if (this.resource) {
      const t = this._resolution
      if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return
    }
    this.emit('update', this)
  }
  destroy() {
    ;(this.destroyed = !0),
      this.emit('destroy', this),
      this.emit('change', this),
      this._style && (this._style.destroy(), (this._style = null)),
      (this.uploadMethodId = null),
      (this.resource = null),
      this.removeAllListeners()
  }
  unload() {
    ;(this._resourceId = Gt('resource')),
      this.emit('change', this),
      this.emit('unload', this)
  }
  get resourceWidth() {
    const { resource: t } = this
    return t.naturalWidth || t.videoWidth || t.displayWidth || t.width
  }
  get resourceHeight() {
    const { resource: t } = this
    return t.naturalHeight || t.videoHeight || t.displayHeight || t.height
  }
  get resolution() {
    return this._resolution
  }
  set resolution(t) {
    this._resolution !== t &&
      ((this._resolution = t),
      (this.width = this.pixelWidth / t),
      (this.height = this.pixelHeight / t))
  }
  resize(t, s, n) {
    ;(n = n || this._resolution), (t = t || this.width), (s = s || this.height)
    const i = Math.round(t * n),
      r = Math.round(s * n)
    return (
      (this.width = i / n),
      (this.height = r / n),
      (this._resolution = n),
      this.pixelWidth === i && this.pixelHeight === r
        ? !1
        : (this._refreshPOT(),
          (this.pixelWidth = i),
          (this.pixelHeight = r),
          this.emit('resize', this),
          (this._resourceId = Gt('resource')),
          this.emit('change', this),
          !0)
    )
  }
  updateMipmaps() {
    this.autoGenerateMipmaps &&
      this.mipLevelCount > 1 &&
      this.emit('updateMipmaps', this)
  }
  set wrapMode(t) {
    this._style.wrapMode = t
  }
  get wrapMode() {
    return this._style.wrapMode
  }
  set scaleMode(t) {
    this._style.scaleMode = t
  }
  get scaleMode() {
    return this._style.scaleMode
  }
  _refreshPOT() {
    this.isPowerOfTwo = Gc(this.pixelWidth) && Gc(this.pixelHeight)
  }
  static test(t) {
    throw new Error('Unimplemented')
  }
}
Od.defaultOptions = {
  resolution: 1,
  format: 'bgra8unorm',
  alphaMode: 'premultiply-alpha-on-upload',
  dimensions: '2d',
  mipLevelCount: 1,
  autoGenerateMipmaps: !1,
  sampleCount: 1,
  antialias: !1,
  autoGarbageCollect: !1,
}
let Ts = Od
class Ya extends Ts {
  constructor(t) {
    const s = t.resource || new Float32Array(t.width * t.height * 4)
    let n = t.format
    n ||
      (s instanceof Float32Array
        ? (n = 'rgba32float')
        : s instanceof Int32Array || s instanceof Uint32Array
        ? (n = 'rgba32uint')
        : s instanceof Int16Array || s instanceof Uint16Array
        ? (n = 'rgba16uint')
        : (s instanceof Int8Array, (n = 'bgra8unorm'))),
      super({ ...t, resource: s, format: n }),
      (this.uploadMethodId = 'buffer')
  }
  static test(t) {
    return (
      t instanceof Int8Array ||
      t instanceof Uint8Array ||
      t instanceof Uint8ClampedArray ||
      t instanceof Int16Array ||
      t instanceof Uint16Array ||
      t instanceof Int32Array ||
      t instanceof Uint32Array ||
      t instanceof Float32Array
    )
  }
}
Ya.extension = ot.TextureSource
const jc = new St()
class Lx {
  constructor(t, s) {
    ;(this.mapCoord = new St()),
      (this.uClampFrame = new Float32Array(4)),
      (this.uClampOffset = new Float32Array(2)),
      (this._textureID = -1),
      (this._updateID = 0),
      (this.clampOffset = 0),
      typeof s > 'u'
        ? (this.clampMargin = t.width < 10 ? 0 : 0.5)
        : (this.clampMargin = s),
      (this.isSimple = !1),
      (this.texture = t)
  }
  get texture() {
    return this._texture
  }
  set texture(t) {
    var s
    this.texture !== t &&
      ((s = this._texture) == null ||
        s.removeListener('update', this.update, this),
      (this._texture = t),
      this._texture.addListener('update', this.update, this),
      this.update())
  }
  multiplyUvs(t, s) {
    s === void 0 && (s = t)
    const n = this.mapCoord
    for (let i = 0; i < t.length; i += 2) {
      const r = t[i],
        o = t[i + 1]
      ;(s[i] = r * n.a + o * n.c + n.tx), (s[i + 1] = r * n.b + o * n.d + n.ty)
    }
    return s
  }
  update() {
    const t = this._texture
    this._updateID++
    const s = t.uvs
    this.mapCoord.set(
      s.x1 - s.x0,
      s.y1 - s.y0,
      s.x3 - s.x0,
      s.y3 - s.y0,
      s.x0,
      s.y0,
    )
    const n = t.orig,
      i = t.trim
    i &&
      (jc.set(
        n.width / i.width,
        0,
        0,
        n.height / i.height,
        -i.x / i.width,
        -i.y / i.height,
      ),
      this.mapCoord.append(jc))
    const r = t.source,
      o = this.uClampFrame,
      a = this.clampMargin / r._resolution,
      l = this.clampOffset
    return (
      (o[0] = (t.frame.x + a + l) / r.width),
      (o[1] = (t.frame.y + a + l) / r.height),
      (o[2] = (t.frame.x + t.frame.width - a + l) / r.width),
      (o[3] = (t.frame.y + t.frame.height - a + l) / r.height),
      (this.uClampOffset[0] = l / r.pixelWidth),
      (this.uClampOffset[1] = l / r.pixelHeight),
      (this.isSimple =
        t.frame.width === r.width &&
        t.frame.height === r.height &&
        t.rotate === 0),
      !0
    )
  }
}
class Et extends ss {
  constructor({
    source: t,
    label: s,
    frame: n,
    orig: i,
    trim: r,
    defaultAnchor: o,
    defaultBorders: a,
    rotate: l,
    dynamic: h,
  } = {}) {
    if (
      (super(),
      (this.uid = Gt('texture')),
      (this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }),
      (this.frame = new Ht()),
      (this.noFrame = !1),
      (this.dynamic = !1),
      (this.isTexture = !0),
      (this.label = s),
      (this.source = (t == null ? void 0 : t.source) ?? new Ts()),
      (this.noFrame = !n),
      n)
    )
      this.frame.copyFrom(n)
    else {
      const { width: c, height: u } = this._source
      ;(this.frame.width = c), (this.frame.height = u)
    }
    ;(this.orig = i || this.frame),
      (this.trim = r),
      (this.rotate = l ?? 0),
      (this.defaultAnchor = o),
      (this.defaultBorders = a),
      (this.destroyed = !1),
      (this.dynamic = h || !1),
      this.updateUvs()
  }
  set source(t) {
    this._source && this._source.off('resize', this.update, this),
      (this._source = t),
      t.on('resize', this.update, this),
      this.emit('update', this)
  }
  get source() {
    return this._source
  }
  get textureMatrix() {
    return (
      this._textureMatrix || (this._textureMatrix = new Lx(this)),
      this._textureMatrix
    )
  }
  get width() {
    return this.orig.width
  }
  get height() {
    return this.orig.height
  }
  updateUvs() {
    const { uvs: t, frame: s } = this,
      { width: n, height: i } = this._source,
      r = s.x / n,
      o = s.y / i,
      a = s.width / n,
      l = s.height / i
    let h = this.rotate
    if (h) {
      const c = a / 2,
        u = l / 2,
        d = r + c,
        f = o + u
      ;(h = Rt.add(h, Rt.NW)),
        (t.x0 = d + c * Rt.uX(h)),
        (t.y0 = f + u * Rt.uY(h)),
        (h = Rt.add(h, 2)),
        (t.x1 = d + c * Rt.uX(h)),
        (t.y1 = f + u * Rt.uY(h)),
        (h = Rt.add(h, 2)),
        (t.x2 = d + c * Rt.uX(h)),
        (t.y2 = f + u * Rt.uY(h)),
        (h = Rt.add(h, 2)),
        (t.x3 = d + c * Rt.uX(h)),
        (t.y3 = f + u * Rt.uY(h))
    } else
      (t.x0 = r),
        (t.y0 = o),
        (t.x1 = r + a),
        (t.y1 = o),
        (t.x2 = r + a),
        (t.y2 = o + l),
        (t.x3 = r),
        (t.y3 = o + l)
  }
  destroy(t = !1) {
    this._source && t && (this._source.destroy(), (this._source = null)),
      (this._textureMatrix = null),
      (this.destroyed = !0),
      this.emit('destroy', this),
      this.removeAllListeners()
  }
  update() {
    this.noFrame &&
      ((this.frame.width = this._source.width),
      (this.frame.height = this._source.height)),
      this.updateUvs(),
      this.emit('update', this)
  }
  get baseTexture() {
    return _e(ge, 'Texture.baseTexture is now Texture.source'), this._source
  }
}
Et.EMPTY = new Et({ label: 'EMPTY', source: new Ts({ label: 'EMPTY' }) })
Et.EMPTY.destroy = kd
Et.WHITE = new Et({
  source: new Ya({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: 'premultiply-alpha-on-upload',
    label: 'WHITE',
  }),
  label: 'WHITE',
})
Et.WHITE.destroy = kd
function Bx(e, t, s, n) {
  const { width: i, height: r } = s.orig,
    o = s.trim
  if (o) {
    const a = o.width,
      l = o.height
    ;(e.minX = o.x - t._x * i - n),
      (e.maxX = e.minX + a),
      (e.minY = o.y - t._y * r - n),
      (e.maxY = e.minY + l)
  } else
    (e.minX = -t._x * i - n),
      (e.maxX = e.minX + i),
      (e.minY = -t._y * r - n),
      (e.maxY = e.minY + r)
}
var Ox = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  qe = function (e) {
    return typeof e == 'string' ? e.length > 0 : typeof e == 'number'
  },
  Dt = function (e, t, s) {
    return (
      t === void 0 && (t = 0),
      s === void 0 && (s = Math.pow(10, t)),
      Math.round(s * e) / s + 0
    )
  },
  Se = function (e, t, s) {
    return (
      t === void 0 && (t = 0),
      s === void 0 && (s = 1),
      e > s ? s : e > t ? e : t
    )
  },
  $d = function (e) {
    return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360
  },
  Yc = function (e) {
    return {
      r: Se(e.r, 0, 255),
      g: Se(e.g, 0, 255),
      b: Se(e.b, 0, 255),
      a: Se(e.a),
    }
  },
  so = function (e) {
    return { r: Dt(e.r), g: Dt(e.g), b: Dt(e.b), a: Dt(e.a, 3) }
  },
  Fx = /^#([0-9a-f]{3,8})$/i,
  zi = function (e) {
    var t = e.toString(16)
    return t.length < 2 ? '0' + t : t
  },
  Nd = function (e) {
    var t = e.r,
      s = e.g,
      n = e.b,
      i = e.a,
      r = Math.max(t, s, n),
      o = r - Math.min(t, s, n),
      a = o
        ? r === t
          ? (s - n) / o
          : r === s
          ? 2 + (n - t) / o
          : 4 + (t - s) / o
        : 0
    return {
      h: 60 * (a < 0 ? a + 6 : a),
      s: r ? (o / r) * 100 : 0,
      v: (r / 255) * 100,
      a: i,
    }
  },
  Dd = function (e) {
    var t = e.h,
      s = e.s,
      n = e.v,
      i = e.a
    ;(t = (t / 360) * 6), (s /= 100), (n /= 100)
    var r = Math.floor(t),
      o = n * (1 - s),
      a = n * (1 - (t - r) * s),
      l = n * (1 - (1 - t + r) * s),
      h = r % 6
    return {
      r: 255 * [n, a, o, o, l, n][h],
      g: 255 * [l, n, n, a, o, o][h],
      b: 255 * [o, o, l, n, n, a][h],
      a: i,
    }
  },
  Xc = function (e) {
    return { h: $d(e.h), s: Se(e.s, 0, 100), l: Se(e.l, 0, 100), a: Se(e.a) }
  },
  Kc = function (e) {
    return { h: Dt(e.h), s: Dt(e.s), l: Dt(e.l), a: Dt(e.a, 3) }
  },
  qc = function (e) {
    return Dd(
      ((s = (t = e).s),
      {
        h: t.h,
        s:
          (s *= ((n = t.l) < 50 ? n : 100 - n) / 100) > 0
            ? ((2 * s) / (n + s)) * 100
            : 0,
        v: n + s,
        a: t.a,
      }),
    )
    var t, s, n
  },
  ri = function (e) {
    return {
      h: (t = Nd(e)).h,
      s:
        (i = ((200 - (s = t.s)) * (n = t.v)) / 100) > 0 && i < 200
          ? ((s * n) / 100 / (i <= 100 ? i : 200 - i)) * 100
          : 0,
      l: i / 2,
      a: t.a,
    }
    var t, s, n, i
  },
  $x =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Nx =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Dx =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  zx =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Go = {
    string: [
      [
        function (e) {
          var t = Fx.exec(e)
          return t
            ? (e = t[1]).length <= 4
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? Dt(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : e.length === 6 || e.length === 8
              ? {
                  r: parseInt(e.substr(0, 2), 16),
                  g: parseInt(e.substr(2, 2), 16),
                  b: parseInt(e.substr(4, 2), 16),
                  a:
                    e.length === 8
                      ? Dt(parseInt(e.substr(6, 2), 16) / 255, 2)
                      : 1,
                }
              : null
            : null
        },
        'hex',
      ],
      [
        function (e) {
          var t = Dx.exec(e) || zx.exec(e)
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : Yc({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
            : null
        },
        'rgb',
      ],
      [
        function (e) {
          var t = $x.exec(e) || Nx.exec(e)
          if (!t) return null
          var s,
            n,
            i = Xc({
              h:
                ((s = t[1]),
                (n = t[2]),
                n === void 0 && (n = 'deg'),
                Number(s) * (Ox[n] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            })
          return qc(i)
        },
        'hsl',
      ],
    ],
    object: [
      [
        function (e) {
          var t = e.r,
            s = e.g,
            n = e.b,
            i = e.a,
            r = i === void 0 ? 1 : i
          return qe(t) && qe(s) && qe(n)
            ? Yc({ r: Number(t), g: Number(s), b: Number(n), a: Number(r) })
            : null
        },
        'rgb',
      ],
      [
        function (e) {
          var t = e.h,
            s = e.s,
            n = e.l,
            i = e.a,
            r = i === void 0 ? 1 : i
          if (!qe(t) || !qe(s) || !qe(n)) return null
          var o = Xc({ h: Number(t), s: Number(s), l: Number(n), a: Number(r) })
          return qc(o)
        },
        'hsl',
      ],
      [
        function (e) {
          var t = e.h,
            s = e.s,
            n = e.v,
            i = e.a,
            r = i === void 0 ? 1 : i
          if (!qe(t) || !qe(s) || !qe(n)) return null
          var o = (function (a) {
            return {
              h: $d(a.h),
              s: Se(a.s, 0, 100),
              v: Se(a.v, 0, 100),
              a: Se(a.a),
            }
          })({ h: Number(t), s: Number(s), v: Number(n), a: Number(r) })
          return Dd(o)
        },
        'hsv',
      ],
    ],
  },
  Zc = function (e, t) {
    for (var s = 0; s < t.length; s++) {
      var n = t[s][0](e)
      if (n) return [n, t[s][1]]
    }
    return [null, void 0]
  },
  Vx = function (e) {
    return typeof e == 'string'
      ? Zc(e.trim(), Go.string)
      : typeof e == 'object' && e !== null
      ? Zc(e, Go.object)
      : [null, void 0]
  },
  no = function (e, t) {
    var s = ri(e)
    return { h: s.h, s: Se(s.s + 100 * t, 0, 100), l: s.l, a: s.a }
  },
  io = function (e) {
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255
  },
  Qc = function (e, t) {
    var s = ri(e)
    return { h: s.h, s: s.s, l: Se(s.l + 100 * t, 0, 100), a: s.a }
  },
  Wo = (function () {
    function e(t) {
      ;(this.parsed = Vx(t)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 })
    }
    return (
      (e.prototype.isValid = function () {
        return this.parsed !== null
      }),
      (e.prototype.brightness = function () {
        return Dt(io(this.rgba), 2)
      }),
      (e.prototype.isDark = function () {
        return io(this.rgba) < 0.5
      }),
      (e.prototype.isLight = function () {
        return io(this.rgba) >= 0.5
      }),
      (e.prototype.toHex = function () {
        return (
          (t = so(this.rgba)),
          (s = t.r),
          (n = t.g),
          (i = t.b),
          (o = (r = t.a) < 1 ? zi(Dt(255 * r)) : ''),
          '#' + zi(s) + zi(n) + zi(i) + o
        )
        var t, s, n, i, r, o
      }),
      (e.prototype.toRgb = function () {
        return so(this.rgba)
      }),
      (e.prototype.toRgbString = function () {
        return (
          (t = so(this.rgba)),
          (s = t.r),
          (n = t.g),
          (i = t.b),
          (r = t.a) < 1
            ? 'rgba(' + s + ', ' + n + ', ' + i + ', ' + r + ')'
            : 'rgb(' + s + ', ' + n + ', ' + i + ')'
        )
        var t, s, n, i, r
      }),
      (e.prototype.toHsl = function () {
        return Kc(ri(this.rgba))
      }),
      (e.prototype.toHslString = function () {
        return (
          (t = Kc(ri(this.rgba))),
          (s = t.h),
          (n = t.s),
          (i = t.l),
          (r = t.a) < 1
            ? 'hsla(' + s + ', ' + n + '%, ' + i + '%, ' + r + ')'
            : 'hsl(' + s + ', ' + n + '%, ' + i + '%)'
        )
        var t, s, n, i, r
      }),
      (e.prototype.toHsv = function () {
        return (
          (t = Nd(this.rgba)),
          { h: Dt(t.h), s: Dt(t.s), v: Dt(t.v), a: Dt(t.a, 3) }
        )
        var t
      }),
      (e.prototype.invert = function () {
        return Ve({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a,
        })
        var t
      }),
      (e.prototype.saturate = function (t) {
        return t === void 0 && (t = 0.1), Ve(no(this.rgba, t))
      }),
      (e.prototype.desaturate = function (t) {
        return t === void 0 && (t = 0.1), Ve(no(this.rgba, -t))
      }),
      (e.prototype.grayscale = function () {
        return Ve(no(this.rgba, -1))
      }),
      (e.prototype.lighten = function (t) {
        return t === void 0 && (t = 0.1), Ve(Qc(this.rgba, t))
      }),
      (e.prototype.darken = function (t) {
        return t === void 0 && (t = 0.1), Ve(Qc(this.rgba, -t))
      }),
      (e.prototype.rotate = function (t) {
        return t === void 0 && (t = 15), this.hue(this.hue() + t)
      }),
      (e.prototype.alpha = function (t) {
        return typeof t == 'number'
          ? Ve({ r: (s = this.rgba).r, g: s.g, b: s.b, a: t })
          : Dt(this.rgba.a, 3)
        var s
      }),
      (e.prototype.hue = function (t) {
        var s = ri(this.rgba)
        return typeof t == 'number'
          ? Ve({ h: t, s: s.s, l: s.l, a: s.a })
          : Dt(s.h)
      }),
      (e.prototype.isEqual = function (t) {
        return this.toHex() === Ve(t).toHex()
      }),
      e
    )
  })(),
  Ve = function (e) {
    return e instanceof Wo ? e : new Wo(e)
  },
  Jc = [],
  Ux = function (e) {
    e.forEach(function (t) {
      Jc.indexOf(t) < 0 && (t(Wo, Go), Jc.push(t))
    })
  }
function Hx(e, t) {
  var s = {
      white: '#ffffff',
      bisque: '#ffe4c4',
      blue: '#0000ff',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      azure: '#f0ffff',
      whitesmoke: '#f5f5f5',
      papayawhip: '#ffefd5',
      plum: '#dda0dd',
      blanchedalmond: '#ffebcd',
      black: '#000000',
      gold: '#ffd700',
      goldenrod: '#daa520',
      gainsboro: '#dcdcdc',
      cornsilk: '#fff8dc',
      cornflowerblue: '#6495ed',
      burlywood: '#deb887',
      aquamarine: '#7fffd4',
      beige: '#f5f5dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkkhaki: '#bdb76b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      peachpuff: '#ffdab9',
      darkmagenta: '#8b008b',
      darkred: '#8b0000',
      darkorchid: '#9932cc',
      darkorange: '#ff8c00',
      darkslateblue: '#483d8b',
      gray: '#808080',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      wheat: '#f5deb3',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      ghostwhite: '#f8f8ff',
      darkviolet: '#9400d3',
      magenta: '#ff00ff',
      green: '#008000',
      dodgerblue: '#1e90ff',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      blueviolet: '#8a2be2',
      forestgreen: '#228b22',
      lawngreen: '#7cfc00',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      fuchsia: '#ff00ff',
      brown: '#a52a2a',
      maroon: '#800000',
      mediumblue: '#0000cd',
      lightcoral: '#f08080',
      darkturquoise: '#00ced1',
      lightcyan: '#e0ffff',
      ivory: '#fffff0',
      lightyellow: '#ffffe0',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      linen: '#faf0e6',
      mediumaquamarine: '#66cdaa',
      lemonchiffon: '#fffacd',
      lime: '#00ff00',
      khaki: '#f0e68c',
      mediumseagreen: '#3cb371',
      limegreen: '#32cd32',
      mediumspringgreen: '#00fa9a',
      lightskyblue: '#87cefa',
      lightblue: '#add8e6',
      midnightblue: '#191970',
      lightpink: '#ffb6c1',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      mintcream: '#f5fffa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      navajowhite: '#ffdead',
      navy: '#000080',
      mediumvioletred: '#c71585',
      powderblue: '#b0e0e6',
      palegoldenrod: '#eee8aa',
      oldlace: '#fdf5e6',
      paleturquoise: '#afeeee',
      mediumturquoise: '#48d1cc',
      mediumorchid: '#ba55d3',
      rebeccapurple: '#663399',
      lightsteelblue: '#b0c4de',
      mediumslateblue: '#7b68ee',
      thistle: '#d8bfd8',
      tan: '#d2b48c',
      orchid: '#da70d6',
      mediumpurple: '#9370db',
      purple: '#800080',
      pink: '#ffc0cb',
      skyblue: '#87ceeb',
      springgreen: '#00ff7f',
      palegreen: '#98fb98',
      red: '#ff0000',
      yellow: '#ffff00',
      slateblue: '#6a5acd',
      lavenderblush: '#fff0f5',
      peru: '#cd853f',
      palevioletred: '#db7093',
      violet: '#ee82ee',
      teal: '#008080',
      slategray: '#708090',
      slategrey: '#708090',
      aliceblue: '#f0f8ff',
      darkseagreen: '#8fbc8f',
      darkolivegreen: '#556b2f',
      greenyellow: '#adff2f',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      tomato: '#ff6347',
      silver: '#c0c0c0',
      sienna: '#a0522d',
      lavender: '#e6e6fa',
      lightgreen: '#90ee90',
      orange: '#ffa500',
      orangered: '#ff4500',
      steelblue: '#4682b4',
      royalblue: '#4169e1',
      turquoise: '#40e0d0',
      yellowgreen: '#9acd32',
      salmon: '#fa8072',
      saddlebrown: '#8b4513',
      sandybrown: '#f4a460',
      rosybrown: '#bc8f8f',
      darksalmon: '#e9967a',
      lightgoldenrodyellow: '#fafad2',
      snow: '#fffafa',
      lightgrey: '#d3d3d3',
      lightgray: '#d3d3d3',
      dimgray: '#696969',
      dimgrey: '#696969',
      olivedrab: '#6b8e23',
      olive: '#808000',
    },
    n = {}
  for (var i in s) n[s[i]] = i
  var r = {}
  ;(e.prototype.toName = function (o) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return 'transparent'
    var a,
      l,
      h = n[this.toHex()]
    if (h) return h
    if (o != null && o.closest) {
      var c = this.toRgb(),
        u = 1 / 0,
        d = 'black'
      if (!r.length) for (var f in s) r[f] = new e(s[f]).toRgb()
      for (var p in s) {
        var g =
          ((a = c),
          (l = r[p]),
          Math.pow(a.r - l.r, 2) +
            Math.pow(a.g - l.g, 2) +
            Math.pow(a.b - l.b, 2))
        g < u && ((u = g), (d = p))
      }
      return d
    }
  }),
    t.string.push([
      function (o) {
        var a = o.toLowerCase(),
          l = a === 'transparent' ? '#0000' : s[a]
        return l ? new e(l).toRgb() : null
      },
      'name',
    ])
}
Ux([Hx])
const En = class Kn {
  constructor(t = 16777215) {
    ;(this._value = null),
      (this._components = new Float32Array(4)),
      this._components.fill(1),
      (this._int = 16777215),
      (this.value = t)
  }
  get red() {
    return this._components[0]
  }
  get green() {
    return this._components[1]
  }
  get blue() {
    return this._components[2]
  }
  get alpha() {
    return this._components[3]
  }
  setValue(t) {
    return (this.value = t), this
  }
  set value(t) {
    if (t instanceof Kn)
      (this._value = this._cloneSource(t._value)),
        (this._int = t._int),
        this._components.set(t._components)
    else {
      if (t === null) throw new Error('Cannot set Color#value to null')
      ;(this._value === null || !this._isSourceEqual(this._value, t)) &&
        (this._normalize(t), (this._value = this._cloneSource(t)))
    }
  }
  get value() {
    return this._value
  }
  _cloneSource(t) {
    return typeof t == 'string' ||
      typeof t == 'number' ||
      t instanceof Number ||
      t === null
      ? t
      : Array.isArray(t) || ArrayBuffer.isView(t)
      ? t.slice(0)
      : typeof t == 'object' && t !== null
      ? { ...t }
      : t
  }
  _isSourceEqual(t, s) {
    const n = typeof t
    if (n !== typeof s) return !1
    if (n === 'number' || n === 'string' || t instanceof Number) return t === s
    if (
      (Array.isArray(t) && Array.isArray(s)) ||
      (ArrayBuffer.isView(t) && ArrayBuffer.isView(s))
    )
      return t.length !== s.length ? !1 : t.every((r, o) => r === s[o])
    if (t !== null && s !== null) {
      const r = Object.keys(t),
        o = Object.keys(s)
      return r.length !== o.length ? !1 : r.every((a) => t[a] === s[a])
    }
    return t === s
  }
  toRgba() {
    const [t, s, n, i] = this._components
    return { r: t, g: s, b: n, a: i }
  }
  toRgb() {
    const [t, s, n] = this._components
    return { r: t, g: s, b: n }
  }
  toRgbaString() {
    const [t, s, n] = this.toUint8RgbArray()
    return `rgba(${t},${s},${n},${this.alpha})`
  }
  toUint8RgbArray(t) {
    const [s, n, i] = this._components
    return (
      this._arrayRgb || (this._arrayRgb = []),
      (t = t || this._arrayRgb),
      (t[0] = Math.round(s * 255)),
      (t[1] = Math.round(n * 255)),
      (t[2] = Math.round(i * 255)),
      t
    )
  }
  toArray(t) {
    this._arrayRgba || (this._arrayRgba = []), (t = t || this._arrayRgba)
    const [s, n, i, r] = this._components
    return (t[0] = s), (t[1] = n), (t[2] = i), (t[3] = r), t
  }
  toRgbArray(t) {
    this._arrayRgb || (this._arrayRgb = []), (t = t || this._arrayRgb)
    const [s, n, i] = this._components
    return (t[0] = s), (t[1] = n), (t[2] = i), t
  }
  toNumber() {
    return this._int
  }
  toBgrNumber() {
    const [t, s, n] = this.toUint8RgbArray()
    return (n << 16) + (s << 8) + t
  }
  toLittleEndianNumber() {
    const t = this._int
    return (t >> 16) + (t & 65280) + ((t & 255) << 16)
  }
  multiply(t) {
    const [s, n, i, r] = Kn._temp.setValue(t)._components
    return (
      (this._components[0] *= s),
      (this._components[1] *= n),
      (this._components[2] *= i),
      (this._components[3] *= r),
      this._refreshInt(),
      (this._value = null),
      this
    )
  }
  premultiply(t, s = !0) {
    return (
      s &&
        ((this._components[0] *= t),
        (this._components[1] *= t),
        (this._components[2] *= t)),
      (this._components[3] = t),
      this._refreshInt(),
      (this._value = null),
      this
    )
  }
  toPremultiplied(t, s = !0) {
    if (t === 1) return (255 << 24) + this._int
    if (t === 0) return s ? 0 : this._int
    let n = (this._int >> 16) & 255,
      i = (this._int >> 8) & 255,
      r = this._int & 255
    return (
      s &&
        ((n = (n * t + 0.5) | 0),
        (i = (i * t + 0.5) | 0),
        (r = (r * t + 0.5) | 0)),
      ((t * 255) << 24) + (n << 16) + (i << 8) + r
    )
  }
  toHex() {
    const t = this._int.toString(16)
    return `#${'000000'.substring(0, 6 - t.length) + t}`
  }
  toHexa() {
    const s = Math.round(this._components[3] * 255).toString(16)
    return this.toHex() + '00'.substring(0, 2 - s.length) + s
  }
  setAlpha(t) {
    return (this._components[3] = this._clamp(t)), this
  }
  _normalize(t) {
    let s, n, i, r
    if (
      (typeof t == 'number' || t instanceof Number) &&
      t >= 0 &&
      t <= 16777215
    ) {
      const o = t
      ;(s = ((o >> 16) & 255) / 255),
        (n = ((o >> 8) & 255) / 255),
        (i = (o & 255) / 255),
        (r = 1)
    } else if (
      (Array.isArray(t) || t instanceof Float32Array) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t)), ([s, n, i, r = 1] = t)
    else if (
      (t instanceof Uint8Array || t instanceof Uint8ClampedArray) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t, 0, 255)),
        ([s, n, i, r = 255] = t),
        (s /= 255),
        (n /= 255),
        (i /= 255),
        (r /= 255)
    else if (typeof t == 'string' || typeof t == 'object') {
      if (typeof t == 'string') {
        const a = Kn.HEX_PATTERN.exec(t)
        a && (t = `#${a[2]}`)
      }
      const o = Ve(t)
      o.isValid() &&
        (({ r: s, g: n, b: i, a: r } = o.rgba),
        (s /= 255),
        (n /= 255),
        (i /= 255))
    }
    if (s !== void 0)
      (this._components[0] = s),
        (this._components[1] = n),
        (this._components[2] = i),
        (this._components[3] = r),
        this._refreshInt()
    else throw new Error(`Unable to convert color ${t}`)
  }
  _refreshInt() {
    this._clamp(this._components)
    const [t, s, n] = this._components
    this._int = ((t * 255) << 16) + ((s * 255) << 8) + ((n * 255) | 0)
  }
  _clamp(t, s = 0, n = 1) {
    return typeof t == 'number'
      ? Math.min(Math.max(t, s), n)
      : (t.forEach((i, r) => {
          t[r] = Math.min(Math.max(i, s), n)
        }),
        t)
  }
  static isColorLike(t) {
    return (
      typeof t == 'number' ||
      typeof t == 'string' ||
      t instanceof Number ||
      t instanceof Kn ||
      Array.isArray(t) ||
      t instanceof Uint8Array ||
      t instanceof Uint8ClampedArray ||
      t instanceof Float32Array ||
      (t.r !== void 0 && t.g !== void 0 && t.b !== void 0) ||
      (t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.l !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.v !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0)
    )
  }
}
En.shared = new En()
En._temp = new En()
En.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i
let le = En
const Gx = { cullArea: null, cullable: !1, cullableChildren: !0 }
function Wx(e, t, s) {
  const n = e.length
  let i
  if (t >= n || s === 0) return
  s = t + s > n ? n - t : s
  const r = n - s
  for (i = t; i < r; ++i) e[i] = e[i + s]
  e.length = r
}
const jx = {
  allowChildren: !0,
  removeChildren(e = 0, t) {
    const s = t ?? this.children.length,
      n = s - e,
      i = []
    if (n > 0 && n <= s) {
      for (let r = s - 1; r >= e; r--) {
        const o = this.children[r]
        o &&
          (this.renderGroup && this.renderGroup.removeChild(o),
          i.push(o),
          (o.parent = null))
      }
      Wx(this.children, e, s)
      for (let r = 0; r < i.length; ++r)
        this.emit('childRemoved', i[r], this, r), i[r].emit('removed', this)
      return i
    } else if (n === 0 && this.children.length === 0) return i
    throw new RangeError(
      'removeChildren: numeric values are outside the acceptable range.',
    )
  },
  removeChildAt(e) {
    const t = this.getChildAt(e)
    return this.removeChild(t)
  },
  getChildAt(e) {
    if (e < 0 || e >= this.children.length)
      throw new Error(`getChildAt: Index (${e}) does not exist.`)
    return this.children[e]
  },
  setChildIndex(e, t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(
        `The index ${t} supplied is out of bounds ${this.children.length}`,
      )
    this.getChildIndex(e), this.addChildAt(e, t)
  },
  getChildIndex(e) {
    const t = this.children.indexOf(e)
    if (t === -1)
      throw new Error('The supplied Container must be a child of the caller')
    return t
  },
  addChildAt(e, t) {
    this.allowChildren ||
      _e(
        ge,
        'addChildAt: Only Containers will be allowed to add children in v8.0.0',
      )
    const { children: s } = this
    if (t < 0 || t > s.length)
      throw new Error(
        `${e}addChildAt: The index ${t} supplied is out of bounds ${s.length}`,
      )
    if (e.parent) {
      const n = e.parent.children.indexOf(e)
      if (e.parent === this && n === t) return e
      n !== -1 && e.parent.children.splice(n, 1)
    }
    return (
      t === s.length ? s.push(e) : s.splice(t, 0, e),
      (e.parent = this),
      (e.didChange = !0),
      (e.didViewUpdate = !1),
      (e._updateFlags = 15),
      this.renderGroup && this.renderGroup.addChild(e),
      this.sortableChildren && (this.sortDirty = !0),
      this.emit('childAdded', e, this, t),
      e.emit('added', this),
      e
    )
  },
  swapChildren(e, t) {
    if (e === t) return
    const s = this.getChildIndex(e),
      n = this.getChildIndex(t)
    ;(this.children[s] = t), (this.children[n] = e)
  },
  removeFromParent() {
    var e
    ;(e = this.parent) == null || e.removeChild(this)
  },
}
class Yx {
  constructor(t) {
    ;(this.pipe = 'filter'),
      (this.priority = 1),
      (this.filters = t == null ? void 0 : t.filters),
      (this.filterArea = t == null ? void 0 : t.filterArea)
  }
  destroy() {
    for (let t = 0; t < this.filters.length; t++) this.filters[t].destroy()
    ;(this.filters = null), (this.filterArea = null)
  }
}
class Xa {
  constructor(t, s) {
    ;(this._pool = []),
      (this._count = 0),
      (this._index = 0),
      (this._classType = t),
      s && this.prepopulate(s)
  }
  prepopulate(t) {
    for (let s = 0; s < t; s++)
      this._pool[this._index++] = new this._classType()
    this._count += t
  }
  get(t) {
    var n
    let s
    return (
      this._index > 0
        ? (s = this._pool[--this._index])
        : (s = new this._classType()),
      (n = s.init) == null || n.call(s, t),
      s
    )
  }
  return(t) {
    var s
    ;(s = t.reset) == null || s.call(t), (this._pool[this._index++] = t)
  }
  get totalSize() {
    return this._count
  }
  get totalFree() {
    return this._index
  }
  get totalUsed() {
    return this._count - this._index
  }
}
class Xx {
  constructor() {
    this._poolsByClass = new Map()
  }
  prepopulate(t, s) {
    this.getPool(t).prepopulate(s)
  }
  get(t, s) {
    return this.getPool(t).get(s)
  }
  return(t) {
    this.getPool(t.constructor).return(t)
  }
  getPool(t) {
    return (
      this._poolsByClass.has(t) || this._poolsByClass.set(t, new Xa(t)),
      this._poolsByClass.get(t)
    )
  }
  stats() {
    const t = {}
    return (
      this._poolsByClass.forEach((s) => {
        const n = t[s._classType.name]
          ? s._classType.name + s._classType.ID
          : s._classType.name
        t[n] = { free: s.totalFree, used: s.totalUsed, size: s.totalSize }
      }),
      t
    )
  }
}
const Re = new Xx()
class Kx {
  constructor() {
    ;(this._effectClasses = []), (this._tests = []), (this._initialized = !1)
  }
  init() {
    this._initialized ||
      ((this._initialized = !0),
      this._effectClasses.forEach((t) => {
        this.add({ test: t.test, maskClass: t })
      }))
  }
  add(t) {
    this._tests.push(t)
  }
  getMaskEffect(t) {
    this._initialized || this.init()
    for (let s = 0; s < this._tests.length; s++) {
      const n = this._tests[s]
      if (n.test(t)) return Re.get(n.maskClass, t)
    }
    return t
  }
  returnMaskEffect(t) {
    Re.return(t)
  }
}
const jo = new Kx()
Pe.handleByList(ot.MaskEffect, jo._effectClasses)
const qx = {
    _mask: null,
    _filters: null,
    effects: [],
    addEffect(e) {
      this.effects.indexOf(e) === -1 &&
        (this.effects.push(e),
        this.effects.sort((s, n) => s.priority - n.priority),
        this.renderGroup && (this.renderGroup.structureDidChange = !0),
        this._updateIsSimple())
    },
    removeEffect(e) {
      const t = this.effects.indexOf(e)
      t !== -1 &&
        (this.effects.splice(t, 1),
        !this.isRenderGroupRoot &&
          this.renderGroup &&
          (this.renderGroup.structureDidChange = !0),
        this._updateIsSimple())
    },
    set mask(e) {
      if (
        (this._mask || (this._mask = { mask: null, effect: null }),
        this._mask.mask === e ||
          (this._mask.effect &&
            (this.removeEffect(this._mask.effect),
            jo.returnMaskEffect(this._mask.effect),
            (this._mask.effect = null)),
          (this._mask.mask = e),
          e == null))
      )
        return
      const t = jo.getMaskEffect(e)
      ;(this._mask.effect = t), this.addEffect(t)
    },
    get mask() {
      var e
      return (e = this._mask) == null ? void 0 : e.mask
    },
    set filters(e) {
      !Array.isArray(e) && e && (e = [e]),
        (e = e),
        this._filters ||
          (this._filters = { filters: null, effect: null, filterArea: null })
      const t = (e == null ? void 0 : e.length) > 0,
        s = (this._filters.effect && !t) || (!this._filters.effect && t)
      if (
        ((e = Array.isArray(e) ? e.slice(0) : e),
        (this._filters.filters = Object.freeze(e)),
        s)
      )
        if (t) {
          const n = Re.get(Yx)
          ;(this._filters.effect = n), this.addEffect(n)
        } else {
          const n = this._filters.effect
          this.removeEffect(n),
            (n.filterArea = null),
            (n.filters = null),
            (this._filters.effect = null),
            Re.return(n)
        }
      t &&
        ((this._filters.effect.filters = e),
        (this._filters.effect.filterArea = this.filterArea))
    },
    get filters() {
      var e
      return (e = this._filters) == null ? void 0 : e.filters
    },
    set filterArea(e) {
      this._filters ||
        (this._filters = { filters: null, effect: null, filterArea: null }),
        (this._filters.filterArea = e)
    },
    get filterArea() {
      var e
      return (e = this._filters) == null ? void 0 : e.filterArea
    },
  },
  Zx = {
    label: null,
    get name() {
      return (
        _e(
          ge,
          'Container.name property has been removed, use Container.label instead',
        ),
        this.label
      )
    },
    set name(e) {
      _e(
        ge,
        'Container.name property has been removed, use Container.label instead',
      ),
        (this.label = e)
    },
    getChildByName(e, t = !1) {
      return this.getChildByLabel(e, t)
    },
    getChildByLabel(e, t = !1) {
      const s = this.children
      for (let n = 0; n < s.length; n++) {
        const i = s[n]
        if (i.label === e || (e instanceof RegExp && e.test(i.label))) return i
      }
      if (t)
        for (let n = 0; n < s.length; n++) {
          const r = s[n].getChildByLabel(e, !0)
          if (r) return r
        }
      return null
    },
    getChildrenByLabel(e, t = !1, s = []) {
      const n = this.children
      for (let i = 0; i < n.length; i++) {
        const r = n[i]
        ;(r.label === e || (e instanceof RegExp && e.test(r.label))) &&
          s.push(r)
      }
      if (t)
        for (let i = 0; i < n.length; i++) n[i].getChildrenByLabel(e, !0, s)
      return s
    },
  },
  th = new St()
class je {
  constructor(t = 1 / 0, s = 1 / 0, n = -1 / 0, i = -1 / 0) {
    ;(this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.matrix = th),
      (this.minX = t),
      (this.minY = s),
      (this.maxX = n),
      (this.maxY = i)
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY
  }
  get rectangle() {
    this._rectangle || (this._rectangle = new Ht())
    const t = this._rectangle
    return (
      this.minX > this.maxX || this.minY > this.maxY
        ? ((t.x = 0), (t.y = 0), (t.width = 0), (t.height = 0))
        : t.copyFromBounds(this),
      t
    )
  }
  clear() {
    return (
      (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.matrix = th),
      this
    )
  }
  set(t, s, n, i) {
    ;(this.minX = t), (this.minY = s), (this.maxX = n), (this.maxY = i)
  }
  addFrame(t, s, n, i, r) {
    r || (r = this.matrix)
    const o = r.a,
      a = r.b,
      l = r.c,
      h = r.d,
      c = r.tx,
      u = r.ty
    let d = this.minX,
      f = this.minY,
      p = this.maxX,
      g = this.maxY,
      m = o * t + l * s + c,
      b = a * t + h * s + u
    m < d && (d = m),
      b < f && (f = b),
      m > p && (p = m),
      b > g && (g = b),
      (m = o * n + l * s + c),
      (b = a * n + h * s + u),
      m < d && (d = m),
      b < f && (f = b),
      m > p && (p = m),
      b > g && (g = b),
      (m = o * t + l * i + c),
      (b = a * t + h * i + u),
      m < d && (d = m),
      b < f && (f = b),
      m > p && (p = m),
      b > g && (g = b),
      (m = o * n + l * i + c),
      (b = a * n + h * i + u),
      m < d && (d = m),
      b < f && (f = b),
      m > p && (p = m),
      b > g && (g = b),
      (this.minX = d),
      (this.minY = f),
      (this.maxX = p),
      (this.maxY = g)
  }
  addRect(t, s) {
    this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, s)
  }
  addBounds(t, s) {
    this.addFrame(t.minX, t.minY, t.maxX, t.maxY, s)
  }
  addBoundsMask(t) {
    ;(this.minX = this.minX > t.minX ? this.minX : t.minX),
      (this.minY = this.minY > t.minY ? this.minY : t.minY),
      (this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX),
      (this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY)
  }
  applyMatrix(t) {
    const s = this.minX,
      n = this.minY,
      i = this.maxX,
      r = this.maxY,
      { a: o, b: a, c: l, d: h, tx: c, ty: u } = t
    let d = o * s + l * n + c,
      f = a * s + h * n + u
    ;(this.minX = d),
      (this.minY = f),
      (this.maxX = d),
      (this.maxY = f),
      (d = o * i + l * n + c),
      (f = a * i + h * n + u),
      (this.minX = d < this.minX ? d : this.minX),
      (this.minY = f < this.minY ? f : this.minY),
      (this.maxX = d > this.maxX ? d : this.maxX),
      (this.maxY = f > this.maxY ? f : this.maxY),
      (d = o * s + l * r + c),
      (f = a * s + h * r + u),
      (this.minX = d < this.minX ? d : this.minX),
      (this.minY = f < this.minY ? f : this.minY),
      (this.maxX = d > this.maxX ? d : this.maxX),
      (this.maxY = f > this.maxY ? f : this.maxY),
      (d = o * i + l * r + c),
      (f = a * i + h * r + u),
      (this.minX = d < this.minX ? d : this.minX),
      (this.minY = f < this.minY ? f : this.minY),
      (this.maxX = d > this.maxX ? d : this.maxX),
      (this.maxY = f > this.maxY ? f : this.maxY)
  }
  fit(t) {
    return (
      this.minX < t.left && (this.minX = t.left),
      this.maxX > t.right && (this.maxX = t.right),
      this.minY < t.top && (this.minY = t.top),
      this.maxY > t.bottom && (this.maxY = t.bottom),
      this
    )
  }
  fitBounds(t, s, n, i) {
    return (
      this.minX < t && (this.minX = t),
      this.maxX > s && (this.maxX = s),
      this.minY < n && (this.minY = n),
      this.maxY > i && (this.maxY = i),
      this
    )
  }
  pad(t, s = t) {
    return (
      (this.minX -= t),
      (this.maxX += t),
      (this.minY -= s),
      (this.maxY += s),
      this
    )
  }
  ceil() {
    return (
      (this.minX = Math.floor(this.minX)),
      (this.minY = Math.floor(this.minY)),
      (this.maxX = Math.ceil(this.maxX)),
      (this.maxY = Math.ceil(this.maxY)),
      this
    )
  }
  clone() {
    return new je(this.minX, this.minY, this.maxX, this.maxY)
  }
  scale(t, s = t) {
    return (
      (this.minX *= t),
      (this.minY *= s),
      (this.maxX *= t),
      (this.maxY *= s),
      this
    )
  }
  get x() {
    return this.minX
  }
  set x(t) {
    const s = this.maxX - this.minX
    ;(this.minX = t), (this.maxX = t + s)
  }
  get y() {
    return this.minY
  }
  set y(t) {
    const s = this.maxY - this.minY
    ;(this.minY = t), (this.maxY = t + s)
  }
  get width() {
    return this.maxX - this.minX
  }
  set width(t) {
    this.maxX = this.minX + t
  }
  get height() {
    return this.maxY - this.minY
  }
  set height(t) {
    this.maxY = this.minY + t
  }
  get left() {
    return this.minX
  }
  get right() {
    return this.maxX
  }
  get top() {
    return this.minY
  }
  get bottom() {
    return this.maxY
  }
  get isPositive() {
    return this.maxX - this.minX > 0 && this.maxY - this.minY > 0
  }
  get isValid() {
    return this.minX + this.minY !== 1 / 0
  }
  addVertexData(t, s, n, i) {
    let r = this.minX,
      o = this.minY,
      a = this.maxX,
      l = this.maxY
    i || (i = this.matrix)
    const h = i.a,
      c = i.b,
      u = i.c,
      d = i.d,
      f = i.tx,
      p = i.ty
    for (let g = s; g < n; g += 2) {
      const m = t[g],
        b = t[g + 1],
        y = h * m + u * b + f,
        v = c * m + d * b + p
      ;(r = y < r ? y : r),
        (o = v < o ? v : o),
        (a = y > a ? y : a),
        (l = v > l ? v : l)
    }
    ;(this.minX = r), (this.minY = o), (this.maxX = a), (this.maxY = l)
  }
  containsPoint(t, s) {
    return this.minX <= t && this.minY <= s && this.maxX >= t && this.maxY >= s
  }
  toString() {
    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`
  }
}
const Je = new Xa(St),
  Pn = new Xa(je)
function zd(e, t, s) {
  s.clear()
  let n, i
  return (
    e.parent
      ? t
        ? (n = e.parent.worldTransform)
        : ((i = Je.get().identity()), (n = ur(e, i)))
      : (n = St.IDENTITY),
    Vd(e, s, n, t),
    i && Je.return(i),
    s.isValid || s.set(0, 0, 0, 0),
    s
  )
}
function Vd(e, t, s, n) {
  var a, l
  if (!e.visible || !e.measurable) return
  let i
  n
    ? (i = e.worldTransform)
    : (e.updateLocalTransform(),
      (i = Je.get()),
      i.appendFrom(e.localTransform, s))
  const r = t,
    o = !!e.effects.length
  if ((o && (t = Pn.get().clear()), e.boundsArea)) t.addRect(e.boundsArea, i)
  else {
    e.addBounds && ((t.matrix = i), e.addBounds(t))
    for (let h = 0; h < e.children.length; h++) Vd(e.children[h], t, i, n)
  }
  if (o) {
    for (let h = 0; h < e.effects.length; h++)
      (l = (a = e.effects[h]).addBounds) == null || l.call(a, t)
    r.addBounds(t, St.IDENTITY), Pn.return(t)
  }
  n || Je.return(i)
}
function ur(e, t) {
  const s = e.parent
  return (
    s && (ur(s, t), s.updateLocalTransform(), t.append(s.localTransform)), t
  )
}
let ro = 0
const eh = 500
function Wt(...e) {
  ro !== eh &&
    (ro++,
    ro === eh
      ? console.warn(
          'PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.',
        )
      : console.warn('PixiJS Warning: ', ...e))
}
function Ud(e, t, s) {
  return (
    t.clear(),
    s || (s = St.IDENTITY),
    Hd(e, t, s, e, !0),
    t.isValid || t.set(0, 0, 0, 0),
    t
  )
}
function Hd(e, t, s, n, i) {
  var l, h
  let r
  if (i) (r = Je.get()), (r = s.copyTo(r))
  else {
    if (!e.visible || !e.measurable) return
    e.updateLocalTransform()
    const c = e.localTransform
    ;(r = Je.get()), r.appendFrom(c, s)
  }
  const o = t,
    a = !!e.effects.length
  if ((a && (t = Pn.get().clear()), e.boundsArea)) t.addRect(e.boundsArea, r)
  else {
    e.renderPipeId && ((t.matrix = r), e.addBounds(t))
    const c = e.children
    for (let u = 0; u < c.length; u++) Hd(c[u], t, r, n, !1)
  }
  if (a) {
    for (let c = 0; c < e.effects.length; c++)
      (h = (l = e.effects[c]).addLocalBounds) == null || h.call(l, t, n)
    o.addBounds(t, St.IDENTITY), Pn.return(t)
  }
  Je.return(r)
}
function Gd(e, t) {
  const s = e.children
  for (let n = 0; n < s.length; n++) {
    const i = s[n],
      r = ((i.uid & 255) << 24) | (i._didChangeId & 16777215)
    t.data[t.index] !== r && ((t.data[t.index] = r), (t.didChange = !0)),
      t.index++,
      i.children.length && Gd(i, t)
  }
  return t.didChange
}
const Qx = new St(),
  Jx = {
    _localBoundsCacheId: -1,
    _localBoundsCacheData: null,
    _setWidth(e, t) {
      const s = Math.sign(this.scale.x) || 1
      t !== 0 ? (this.scale.x = (e / t) * s) : (this.scale.x = s)
    },
    _setHeight(e, t) {
      const s = Math.sign(this.scale.y) || 1
      t !== 0 ? (this.scale.y = (e / t) * s) : (this.scale.y = s)
    },
    getLocalBounds() {
      this._localBoundsCacheData ||
        (this._localBoundsCacheData = {
          data: [],
          index: 1,
          didChange: !1,
          localBounds: new je(),
        })
      const e = this._localBoundsCacheData
      return (
        (e.index = 1),
        (e.didChange = !1),
        e.data[0] !== this._didChangeId >> 12 &&
          ((e.didChange = !0), (e.data[0] = this._didChangeId >> 12)),
        Gd(this, e),
        e.didChange && Ud(this, e.localBounds, Qx),
        e.localBounds
      )
    },
    getBounds(e, t) {
      return zd(this, e, t || new je())
    },
  },
  tb = {
    _onRender: null,
    set onRender(e) {
      const t = this.renderGroup
      if (!e) {
        this._onRender && (t == null || t.removeOnRender(this)),
          (this._onRender = null)
        return
      }
      this._onRender || t == null || t.addOnRender(this), (this._onRender = e)
    },
    get onRender() {
      return this._onRender
    },
  },
  eb = {
    _zIndex: 0,
    sortDirty: !1,
    sortableChildren: !1,
    get zIndex() {
      return this._zIndex
    },
    set zIndex(e) {
      this._zIndex !== e && ((this._zIndex = e), this.depthOfChildModified())
    },
    depthOfChildModified() {
      this.parent &&
        ((this.parent.sortableChildren = !0), (this.parent.sortDirty = !0)),
        this.renderGroup &&
          !this.isRenderGroupRoot &&
          (this.renderGroup.structureDidChange = !0)
    },
    sortChildren() {
      this.sortDirty && ((this.sortDirty = !1), this.children.sort(sb))
    },
  }
function sb(e, t) {
  return e._zIndex - t._zIndex
}
const nb = {
  getGlobalPosition(e = new qt(), t = !1) {
    return (
      this.parent
        ? this.parent.toGlobal(this._position, e, t)
        : ((e.x = this._position.x), (e.y = this._position.y)),
      e
    )
  },
  toGlobal(e, t, s = !1) {
    if (!s) {
      this.updateLocalTransform()
      const n = ur(this, new St())
      return n.append(this.localTransform), n.apply(e, t)
    }
    return this.worldTransform.apply(e, t)
  },
  toLocal(e, t, s, n) {
    if ((t && (e = t.toGlobal(e, s, n)), !n)) {
      this.updateLocalTransform()
      const i = ur(this, new St())
      return i.append(this.localTransform), i.applyInverse(e, s)
    }
    return this.worldTransform.applyInverse(e, s)
  },
}
class Wd {
  constructor() {
    ;(this.uid = Gt('instructionSet')),
      (this.instructions = []),
      (this.instructionSize = 0)
  }
  reset() {
    this.instructionSize = 0
  }
  add(t) {
    this.instructions[this.instructionSize++] = t
  }
  log() {
    ;(this.instructions.length = this.instructionSize),
      console.table(this.instructions, ['type', 'action'])
  }
}
class ib {
  constructor(t) {
    ;(this.renderPipeId = 'renderGroup'),
      (this.root = null),
      (this.canBundle = !1),
      (this.renderGroupParent = null),
      (this.renderGroupChildren = []),
      (this._children = []),
      (this.worldTransform = new St()),
      (this.worldColorAlpha = 4294967295),
      (this.worldColor = 16777215),
      (this.worldAlpha = 1),
      (this.childrenToUpdate = Object.create(null)),
      (this.updateTick = 0),
      (this.childrenRenderablesToUpdate = { list: [], index: 0 }),
      (this.structureDidChange = !0),
      (this.instructionSet = new Wd()),
      (this._onRenderContainers = []),
      (this.root = t),
      this.addChild(t)
  }
  get localTransform() {
    return this.root.localTransform
  }
  addRenderGroupChild(t) {
    t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t),
      (t.renderGroupParent = this),
      this.onChildUpdate(t.root),
      this.renderGroupChildren.push(t)
  }
  _removeRenderGroupChild(t) {
    t.root.didChange && this._removeChildFromUpdate(t.root)
    const s = this.renderGroupChildren.indexOf(t)
    s > -1 && this.renderGroupChildren.splice(s, 1),
      (t.renderGroupParent = null)
  }
  addChild(t) {
    if (
      ((this.structureDidChange = !0),
      t !== this.root &&
        (this._children.push(t),
        (t.updateTick = -1),
        t.parent === this.root
          ? (t.relativeRenderGroupDepth = 1)
          : (t.relativeRenderGroupDepth =
              t.parent.relativeRenderGroupDepth + 1)),
      t.renderGroup)
    ) {
      if (t.renderGroup.root === t) {
        this.addRenderGroupChild(t.renderGroup)
        return
      }
    } else (t.renderGroup = this), (t.didChange = !0)
    t._onRender &&
      (t.isRenderGroupRoot
        ? t.renderGroup.root === t && this.addOnRender(t)
        : this.addOnRender(t))
    const s = t.children
    t.isRenderGroupRoot || this.onChildUpdate(t)
    for (let n = 0; n < s.length; n++) this.addChild(s[n])
  }
  removeChild(t) {
    if (
      ((this.structureDidChange = !0),
      t._onRender &&
        (t.isRenderGroupRoot
          ? t.renderGroup.root === t && this.removeOnRender(t)
          : this.removeOnRender(t)),
      t.renderGroup.root !== t)
    ) {
      const n = t.children
      for (let i = 0; i < n.length; i++) this.removeChild(n[i])
      t.didChange && t.renderGroup._removeChildFromUpdate(t),
        (t.renderGroup = null)
    } else this._removeRenderGroupChild(t.renderGroup)
    const s = this._children.indexOf(t)
    s > -1 && this._children.splice(s, 1)
  }
  onChildUpdate(t) {
    let s = this.childrenToUpdate[t.relativeRenderGroupDepth]
    s ||
      (s = this.childrenToUpdate[t.relativeRenderGroupDepth] =
        { index: 0, list: [] }),
      (s.list[s.index++] = t)
  }
  updateRenderable(t) {
    t.globalDisplayStatus < 7 ||
      ((t.didViewUpdate = !1),
      this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))
  }
  onChildViewUpdate(t) {
    this.childrenRenderablesToUpdate.list[
      this.childrenRenderablesToUpdate.index++
    ] = t
  }
  _removeChildFromUpdate(t) {
    const s = this.childrenToUpdate[t.relativeRenderGroupDepth]
    if (!s) return
    const n = s.list.indexOf(t)
    n > -1 && s.list.splice(n, 1), s.index--
  }
  get isRenderable() {
    return this.root.localDisplayStatus === 7 && this.worldAlpha > 0
  }
  addOnRender(t) {
    this._onRenderContainers.push(t)
  }
  removeOnRender(t) {
    this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1)
  }
  runOnRender() {
    for (let t = 0; t < this._onRenderContainers.length; t++)
      this._onRenderContainers[t]._onRender()
  }
}
function rb(e, t, s = {}) {
  for (const n in t) !s[n] && t[n] !== void 0 && (e[n] = t[n])
}
const oo = new oe(null),
  ao = new oe(null),
  lo = new oe(null, 1, 1),
  sh = 1,
  ob = 2,
  co = 4
class Yt extends ss {
  constructor(t = {}) {
    var s, n
    super(),
      (this.uid = Gt('renderable')),
      (this._updateFlags = 15),
      (this.isRenderGroupRoot = !1),
      (this.renderGroup = null),
      (this.didChange = !1),
      (this.didViewUpdate = !1),
      (this.relativeRenderGroupDepth = 0),
      (this.children = []),
      (this.parent = null),
      (this.includeInBuild = !0),
      (this.measurable = !0),
      (this.isSimple = !0),
      (this.updateTick = -1),
      (this.localTransform = new St()),
      (this.relativeGroupTransform = new St()),
      (this.groupTransform = this.relativeGroupTransform),
      (this.destroyed = !1),
      (this._position = new oe(this, 0, 0)),
      (this._scale = lo),
      (this._pivot = ao),
      (this._skew = oo),
      (this._cx = 1),
      (this._sx = 0),
      (this._cy = 0),
      (this._sy = 1),
      (this._rotation = 0),
      (this.localColor = 16777215),
      (this.localAlpha = 1),
      (this.groupAlpha = 1),
      (this.groupColor = 16777215),
      (this.groupColorAlpha = 4294967295),
      (this.localBlendMode = 'inherit'),
      (this.groupBlendMode = 'normal'),
      (this.localDisplayStatus = 7),
      (this.globalDisplayStatus = 7),
      (this._didChangeId = 0),
      (this._didLocalTransformChangeId = -1),
      rb(this, t, { children: !0, parent: !0, effects: !0 }),
      (s = t.children) == null || s.forEach((i) => this.addChild(i)),
      (this.effects = []),
      (n = t.parent) == null || n.addChild(this)
  }
  static mixin(t) {
    Object.defineProperties(Yt.prototype, Object.getOwnPropertyDescriptors(t))
  }
  addChild(...t) {
    if (
      (this.allowChildren ||
        _e(
          ge,
          'addChild: Only Containers will be allowed to add children in v8.0.0',
        ),
      t.length > 1)
    ) {
      for (let n = 0; n < t.length; n++) this.addChild(t[n])
      return t[0]
    }
    const s = t[0]
    return s.parent === this
      ? (this.children.splice(this.children.indexOf(s), 1),
        this.children.push(s),
        this.renderGroup &&
          !this.isRenderGroupRoot &&
          (this.renderGroup.structureDidChange = !0),
        s)
      : (s.parent && s.parent.removeChild(s),
        this.children.push(s),
        this.sortableChildren && (this.sortDirty = !0),
        (s.parent = this),
        (s.didChange = !0),
        (s.didViewUpdate = !1),
        (s._updateFlags = 15),
        this.renderGroup && this.renderGroup.addChild(s),
        this.emit('childAdded', s, this, this.children.length - 1),
        s.emit('added', this),
        (this._didChangeId += 4096),
        s._zIndex !== 0 && s.depthOfChildModified(),
        s)
  }
  removeChild(...t) {
    if (t.length > 1) {
      for (let i = 0; i < t.length; i++) this.removeChild(t[i])
      return t[0]
    }
    const s = t[0],
      n = this.children.indexOf(s)
    return (
      n > -1 &&
        ((this._didChangeId += 4096),
        this.children.splice(n, 1),
        this.renderGroup && this.renderGroup.removeChild(s),
        (s.parent = null),
        this.emit('childRemoved', s, this, n),
        s.emit('removed', this)),
      s
    )
  }
  _onUpdate(t) {
    if (
      (t && t === this._skew && this._updateSkew(),
      this._didChangeId++,
      !this.didChange)
    )
      if (((this.didChange = !0), this.isRenderGroupRoot)) {
        const s = this.renderGroup.renderGroupParent
        s && s.onChildUpdate(this)
      } else this.renderGroup && this.renderGroup.onChildUpdate(this)
  }
  set isRenderGroup(t) {
    if (this.isRenderGroupRoot && t === !1)
      throw new Error('[Pixi] cannot undo a render group just yet')
    t && this.enableRenderGroup()
  }
  get isRenderGroup() {
    return this.isRenderGroupRoot
  }
  enableRenderGroup() {
    if (this.renderGroup && this.renderGroup.root === this) return
    this.isRenderGroupRoot = !0
    const t = this.renderGroup
    if ((t && t.removeChild(this), (this.renderGroup = new ib(this)), t)) {
      for (let s = 0; s < t.renderGroupChildren.length; s++) {
        const n = t.renderGroupChildren[s]
        let i = n.root
        for (; i; ) {
          if (i === this) {
            this.renderGroup.addRenderGroupChild(n)
            break
          }
          i = i.parent
        }
      }
      t.addRenderGroupChild(this.renderGroup)
    }
    this._updateIsSimple(), (this.groupTransform = St.IDENTITY)
  }
  _updateIsSimple() {
    this.isSimple = !this.isRenderGroupRoot && this.effects.length === 0
  }
  get worldTransform() {
    return (
      this._worldTransform || (this._worldTransform = new St()),
      this.renderGroup &&
        (this.isRenderGroupRoot
          ? this._worldTransform.copyFrom(this.renderGroup.worldTransform)
          : this._worldTransform.appendFrom(
              this.relativeGroupTransform,
              this.renderGroup.worldTransform,
            )),
      this._worldTransform
    )
  }
  get x() {
    return this._position.x
  }
  set x(t) {
    this._position.x = t
  }
  get y() {
    return this._position.y
  }
  set y(t) {
    this._position.y = t
  }
  get position() {
    return this._position
  }
  set position(t) {
    this._position.copyFrom(t)
  }
  get rotation() {
    return this._rotation
  }
  set rotation(t) {
    this._rotation !== t && ((this._rotation = t), this._onUpdate(this._skew))
  }
  get angle() {
    return this.rotation * Cx
  }
  set angle(t) {
    this.rotation = t * Ex
  }
  get pivot() {
    return this._pivot === ao && (this._pivot = new oe(this, 0, 0)), this._pivot
  }
  set pivot(t) {
    this._pivot === ao && (this._pivot = new oe(this, 0, 0)),
      typeof t == 'number' ? this._pivot.set(t) : this._pivot.copyFrom(t)
  }
  get skew() {
    return this._skew === oo && (this._skew = new oe(this, 0, 0)), this._skew
  }
  set skew(t) {
    this._skew === oo && (this._skew = new oe(this, 0, 0)),
      this._skew.copyFrom(t)
  }
  get scale() {
    return this._scale === lo && (this._scale = new oe(this, 1, 1)), this._scale
  }
  set scale(t) {
    this._scale === lo && (this._scale = new oe(this, 0, 0)),
      typeof t == 'number' ? this._scale.set(t) : this._scale.copyFrom(t)
  }
  get width() {
    return Math.abs(this.scale.x * this.getLocalBounds().width)
  }
  set width(t) {
    const s = this.getLocalBounds().width
    this._setWidth(t, s)
  }
  get height() {
    return Math.abs(this.scale.y * this.getLocalBounds().height)
  }
  set height(t) {
    const s = this.getLocalBounds().height
    this._setHeight(t, s)
  }
  getSize(t) {
    t || (t = {})
    const s = this.getLocalBounds()
    return (
      (t.width = Math.abs(this.scale.x * s.width)),
      (t.height = Math.abs(this.scale.y * s.height)),
      t
    )
  }
  setSize(t, s) {
    const n = this.getLocalBounds()
    let i, r
    typeof t != 'object'
      ? ((i = t), (r = s ?? t))
      : ((i = t.width), (r = t.height ?? t.width)),
      i !== void 0 && this._setWidth(i, n.width),
      r !== void 0 && this._setHeight(r, n.height)
  }
  _updateSkew() {
    const t = this._rotation,
      s = this._skew
    ;(this._cx = Math.cos(t + s._y)),
      (this._sx = Math.sin(t + s._y)),
      (this._cy = -Math.sin(t - s._x)),
      (this._sy = Math.cos(t - s._x))
  }
  updateTransform(t) {
    return (
      this.position.set(
        typeof t.x == 'number' ? t.x : this.position.x,
        typeof t.y == 'number' ? t.y : this.position.y,
      ),
      this.scale.set(
        typeof t.scaleX == 'number' ? t.scaleX || 1 : this.scale.x,
        typeof t.scaleY == 'number' ? t.scaleY || 1 : this.scale.y,
      ),
      (this.rotation =
        typeof t.rotation == 'number' ? t.rotation : this.rotation),
      this.skew.set(
        typeof t.skewX == 'number' ? t.skewX : this.skew.x,
        typeof t.skewY == 'number' ? t.skewY : this.skew.y,
      ),
      this.pivot.set(
        typeof t.pivotX == 'number' ? t.pivotX : this.pivot.x,
        typeof t.pivotY == 'number' ? t.pivotY : this.pivot.y,
      ),
      this
    )
  }
  setFromMatrix(t) {
    t.decompose(this)
  }
  updateLocalTransform() {
    if ((this._didLocalTransformChangeId & 15) === this._didChangeId) return
    this._didLocalTransformChangeId = this._didChangeId
    const t = this.localTransform,
      s = this._scale,
      n = this._pivot,
      i = this._position,
      r = s._x,
      o = s._y,
      a = n._x,
      l = n._y
    ;(t.a = this._cx * r),
      (t.b = this._sx * r),
      (t.c = this._cy * o),
      (t.d = this._sy * o),
      (t.tx = i._x - (a * t.a + l * t.c)),
      (t.ty = i._y - (a * t.b + l * t.d))
  }
  set alpha(t) {
    t !== this.localAlpha &&
      ((this.localAlpha = t), (this._updateFlags |= sh), this._onUpdate())
  }
  get alpha() {
    return this.localAlpha
  }
  set tint(t) {
    const n = le.shared.setValue(t ?? 16777215).toBgrNumber()
    n !== this.localColor &&
      ((this.localColor = n), (this._updateFlags |= sh), this._onUpdate())
  }
  get tint() {
    const t = this.localColor
    return ((t & 255) << 16) + (t & 65280) + ((t >> 16) & 255)
  }
  set blendMode(t) {
    this.localBlendMode !== t &&
      (this.renderGroup &&
        !this.isRenderGroupRoot &&
        (this.renderGroup.structureDidChange = !0),
      (this._updateFlags |= ob),
      (this.localBlendMode = t),
      this._onUpdate())
  }
  get blendMode() {
    return this.localBlendMode
  }
  get visible() {
    return !!(this.localDisplayStatus & 2)
  }
  set visible(t) {
    const s = t ? 1 : 0
    ;(this.localDisplayStatus & 2) >> 1 !== s &&
      (this.renderGroup &&
        !this.isRenderGroupRoot &&
        (this.renderGroup.structureDidChange = !0),
      (this._updateFlags |= co),
      (this.localDisplayStatus ^= 2),
      this._onUpdate())
  }
  get culled() {
    return !(this.localDisplayStatus & 4)
  }
  set culled(t) {
    const s = t ? 1 : 0
    ;(this.localDisplayStatus & 4) >> 2 !== s &&
      (this.renderGroup &&
        !this.isRenderGroupRoot &&
        (this.renderGroup.structureDidChange = !0),
      (this._updateFlags |= co),
      (this.localDisplayStatus ^= 4),
      this._onUpdate())
  }
  get renderable() {
    return !!(this.localDisplayStatus & 1)
  }
  set renderable(t) {
    const s = t ? 1 : 0
    ;(this.localDisplayStatus & 1) !== s &&
      ((this._updateFlags |= co),
      (this.localDisplayStatus ^= 1),
      this.renderGroup &&
        !this.isRenderGroupRoot &&
        (this.renderGroup.structureDidChange = !0),
      this._onUpdate())
  }
  get isRenderable() {
    return this.localDisplayStatus === 7 && this.groupAlpha > 0
  }
  destroy(t = !1) {
    if (this.destroyed) return
    ;(this.destroyed = !0),
      this.removeFromParent(),
      (this.parent = null),
      (this._mask = null),
      (this._filters = null),
      (this.effects = null),
      (this._position = null),
      (this._scale = null),
      (this._pivot = null),
      (this._skew = null),
      this.emit('destroyed', this),
      this.removeAllListeners()
    const s = typeof t == 'boolean' ? t : t == null ? void 0 : t.children,
      n = this.removeChildren(0, this.children.length)
    if (s) for (let i = 0; i < n.length; ++i) n[i].destroy(t)
  }
}
Yt.mixin(jx)
Yt.mixin(nb)
Yt.mixin(tb)
Yt.mixin(Jx)
Yt.mixin(qx)
Yt.mixin(Zx)
Yt.mixin(eb)
Yt.mixin(Gx)
class As extends Yt {
  constructor(t = Et.EMPTY) {
    t instanceof Et && (t = { texture: t })
    const {
      texture: s,
      anchor: n,
      roundPixels: i,
      width: r,
      height: o,
      ...a
    } = t
    super({ label: 'Sprite', ...a }),
      (this.renderPipeId = 'sprite'),
      (this.batched = !0),
      (this._didSpriteUpdate = !1),
      (this._bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
      (this._sourceBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
      (this._boundsDirty = !0),
      (this._sourceBoundsDirty = !0),
      (this._roundPixels = 0),
      (this._anchor = new oe({
        _onUpdate: () => {
          this.onViewUpdate()
        },
      })),
      n
        ? (this.anchor = n)
        : s.defaultAnchor && (this.anchor = s.defaultAnchor),
      (this.texture = s),
      (this.allowChildren = !1),
      (this.roundPixels = i ?? !1),
      r && (this.width = r),
      o && (this.height = o)
  }
  static from(t, s = !1) {
    return t instanceof Et ? new As(t) : new As(Et.from(t, s))
  }
  set texture(t) {
    t || (t = Et.EMPTY)
    const s = this._texture
    s !== t &&
      (s && s.dynamic && s.off('update', this.onViewUpdate, this),
      t.dynamic && t.on('update', this.onViewUpdate, this),
      (this._texture = t),
      this.onViewUpdate())
  }
  get texture() {
    return this._texture
  }
  get bounds() {
    return (
      this._boundsDirty && (this._updateBounds(), (this._boundsDirty = !1)),
      this._bounds
    )
  }
  get sourceBounds() {
    return (
      this._sourceBoundsDirty &&
        (this._updateSourceBounds(), (this._sourceBoundsDirty = !1)),
      this._sourceBounds
    )
  }
  containsPoint(t) {
    const s = this.sourceBounds
    return t.x >= s.maxX && t.x <= s.minX && t.y >= s.maxY && t.y <= s.minY
  }
  addBounds(t) {
    const s = this._texture.trim ? this.sourceBounds : this.bounds
    t.addFrame(s.minX, s.minY, s.maxX, s.maxY)
  }
  onViewUpdate() {
    ;(this._didChangeId += 4096),
      (this._didSpriteUpdate = !0),
      (this._sourceBoundsDirty = this._boundsDirty = !0),
      !this.didViewUpdate &&
        ((this.didViewUpdate = !0),
        this.renderGroup && this.renderGroup.onChildViewUpdate(this))
  }
  _updateBounds() {
    Bx(this._bounds, this._anchor, this._texture, 0)
  }
  _updateSourceBounds() {
    const t = this._anchor,
      s = this._texture,
      n = this._sourceBounds,
      { width: i, height: r } = s.orig
    ;(n.maxX = -t._x * i),
      (n.minX = n.maxX + i),
      (n.maxY = -t._y * r),
      (n.minY = n.maxY + r)
  }
  destroy(t = !1) {
    if (
      (super.destroy(t),
      typeof t == 'boolean' ? t : t == null ? void 0 : t.texture)
    ) {
      const n = typeof t == 'boolean' ? t : t == null ? void 0 : t.textureSource
      this._texture.destroy(n)
    }
    ;(this._texture = null),
      (this._bounds = null),
      (this._sourceBounds = null),
      (this._anchor = null)
  }
  get anchor() {
    return this._anchor
  }
  set anchor(t) {
    typeof t == 'number' ? this._anchor.set(t) : this._anchor.copyFrom(t)
  }
  get roundPixels() {
    return !!this._roundPixels
  }
  set roundPixels(t) {
    this._roundPixels = t ? 1 : 0
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width
  }
  set width(t) {
    this._setWidth(t, this._texture.orig.width)
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height
  }
  set height(t) {
    this._setHeight(t, this._texture.orig.height)
  }
  getSize(t) {
    return (
      t || (t = {}),
      (t.width = Math.abs(this.scale.x) * this._texture.orig.width),
      (t.height = Math.abs(this.scale.y) * this._texture.orig.height),
      t
    )
  }
  setSize(t, s) {
    let n, i
    typeof t != 'object'
      ? ((n = t), (i = s ?? t))
      : ((n = t.width), (i = t.height ?? t.width)),
      n !== void 0 && this._setWidth(n, this._texture.orig.width),
      i !== void 0 && this._setHeight(i, this._texture.orig.height)
  }
}
const ab = new je()
function jd(e, t, s) {
  const n = ab
  ;(e.measurable = !0), zd(e, s, n), t.addBoundsMask(n), (e.measurable = !1)
}
function Yd(e, t, s) {
  const n = Pn.get()
  e.measurable = !0
  const i = Je.get().identity(),
    r = Xd(e, s, i)
  Ud(e, n, r),
    (e.measurable = !1),
    t.addBoundsMask(n),
    Je.return(i),
    Pn.return(n)
}
function Xd(e, t, s) {
  return e
    ? (e !== t &&
        (Xd(e.parent, t, s),
        e.updateLocalTransform(),
        s.append(e.localTransform)),
      s)
    : (Wt('Mask bounds, renderable is not inside the root container'), s)
}
class Kd {
  constructor(t) {
    ;(this.priority = 0),
      (this.pipe = 'alphaMask'),
      t != null && t.mask && this.init(t.mask)
  }
  init(t) {
    ;(this.mask = t),
      (this.renderMaskToTexture = !(t instanceof As)),
      (this.mask.renderable = this.renderMaskToTexture),
      (this.mask.includeInBuild = !this.renderMaskToTexture),
      (this.mask.measurable = !1)
  }
  reset() {
    ;(this.mask.measurable = !0), (this.mask = null)
  }
  addBounds(t, s) {
    jd(this.mask, t, s)
  }
  addLocalBounds(t, s) {
    Yd(this.mask, t, s)
  }
  containsPoint(t, s) {
    const n = this.mask
    return s(n, t)
  }
  destroy() {
    this.reset()
  }
  static test(t) {
    return t instanceof As
  }
}
Kd.extension = ot.MaskEffect
class qd {
  constructor(t) {
    ;(this.priority = 0),
      (this.pipe = 'colorMask'),
      t != null && t.mask && this.init(t.mask)
  }
  init(t) {
    this.mask = t
  }
  destroy() {}
  static test(t) {
    return typeof t == 'number'
  }
}
qd.extension = ot.MaskEffect
class Zd {
  constructor(t) {
    ;(this.priority = 0),
      (this.pipe = 'stencilMask'),
      t != null && t.mask && this.init(t.mask)
  }
  init(t) {
    ;(this.mask = t),
      (this.mask.includeInBuild = !1),
      (this.mask.measurable = !1)
  }
  reset() {
    ;(this.mask.measurable = !0),
      (this.mask.includeInBuild = !0),
      (this.mask = null)
  }
  addBounds(t, s) {
    jd(this.mask, t, s)
  }
  addLocalBounds(t, s) {
    Yd(this.mask, t, s)
  }
  containsPoint(t, s) {
    const n = this.mask
    return s(n, t)
  }
  destroy() {
    this.reset()
  }
  static test(t) {
    return t instanceof Yt
  }
}
Zd.extension = ot.MaskEffect
const lb = {
  createCanvas: (e, t) => {
    const s = document.createElement('canvas')
    return (s.width = e), (s.height = t), s
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (e, t) => fetch(e, t),
  parseXML: (e) => new DOMParser().parseFromString(e, 'text/xml'),
}
let nh = lb
const jt = {
  get() {
    return nh
  },
  set(e) {
    nh = e
  },
}
class Qd extends Ts {
  constructor(t) {
    t.resource || (t.resource = jt.get().createCanvas()),
      t.width ||
        ((t.width = t.resource.width),
        t.autoDensity || (t.width /= t.resolution)),
      t.height ||
        ((t.height = t.resource.height),
        t.autoDensity || (t.height /= t.resolution)),
      super(t),
      (this.uploadMethodId = 'image'),
      (this.autoDensity = t.autoDensity)
    const s = t.resource
    ;(this.pixelWidth !== s.width || this.pixelWidth !== s.height) &&
      this.resizeCanvas(),
      (this.transparent = !!t.transparent)
  }
  resizeCanvas() {
    this.autoDensity &&
      ((this.resource.style.width = `${this.width}px`),
      (this.resource.style.height = `${this.height}px`)),
      (this.resource.width !== this.pixelWidth ||
        this.resource.height !== this.pixelHeight) &&
        ((this.resource.width = this.pixelWidth),
        (this.resource.height = this.pixelHeight))
  }
  resize(t = this.width, s = this.height, n = this._resolution) {
    const i = super.resize(t, s, n)
    return i && this.resizeCanvas(), i
  }
  static test(t) {
    return (
      (globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
      (globalThis.OffscreenCanvas && t instanceof OffscreenCanvas)
    )
  }
}
Qd.extension = ot.TextureSource
class Ei extends Ts {
  constructor(t) {
    if (
      t.resource &&
      globalThis.HTMLImageElement &&
      t.resource instanceof HTMLImageElement
    ) {
      const s = jt.get().createCanvas(t.resource.width, t.resource.height)
      s.getContext('2d').drawImage(t.resource, 0, 0),
        (t.resource = s),
        Wt(
          'ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.',
        )
    }
    super(t), (this.uploadMethodId = 'image'), (this.autoGarbageCollect = !0)
  }
  static test(t) {
    return (
      (globalThis.HTMLImageElement && t instanceof HTMLImageElement) ||
      (typeof ImageBitmap < 'u' && t instanceof ImageBitmap)
    )
  }
}
Ei.extension = ot.TextureSource
var Yo = ((e) => (
  (e[(e.INTERACTION = 50)] = 'INTERACTION'),
  (e[(e.HIGH = 25)] = 'HIGH'),
  (e[(e.NORMAL = 0)] = 'NORMAL'),
  (e[(e.LOW = -25)] = 'LOW'),
  (e[(e.UTILITY = -50)] = 'UTILITY'),
  e
))(Yo || {})
class ho {
  constructor(t, s = null, n = 0, i = !1) {
    ;(this.next = null),
      (this.previous = null),
      (this._destroyed = !1),
      (this._fn = t),
      (this._context = s),
      (this.priority = n),
      (this._once = i)
  }
  match(t, s = null) {
    return this._fn === t && this._context === s
  }
  emit(t) {
    this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t))
    const s = this.next
    return (
      this._once && this.destroy(!0), this._destroyed && (this.next = null), s
    )
  }
  connect(t) {
    ;(this.previous = t),
      t.next && (t.next.previous = this),
      (this.next = t.next),
      (t.next = this)
  }
  destroy(t = !1) {
    ;(this._destroyed = !0),
      (this._fn = null),
      (this._context = null),
      this.previous && (this.previous.next = this.next),
      this.next && (this.next.previous = this.previous)
    const s = this.next
    return (this.next = t ? null : s), (this.previous = null), s
  }
}
const Jd = class ue {
  constructor() {
    ;(this.autoStart = !1),
      (this.deltaTime = 1),
      (this.lastTime = -1),
      (this.speed = 1),
      (this.started = !1),
      (this._requestId = null),
      (this._maxElapsedMS = 100),
      (this._minElapsedMS = 0),
      (this._protected = !1),
      (this._lastFrame = -1),
      (this._head = new ho(null, null, 1 / 0)),
      (this.deltaMS = 1 / ue.targetFPMS),
      (this.elapsedMS = 1 / ue.targetFPMS),
      (this._tick = (t) => {
        ;(this._requestId = null),
          this.started &&
            (this.update(t),
            this.started &&
              this._requestId === null &&
              this._head.next &&
              (this._requestId = requestAnimationFrame(this._tick)))
      })
  }
  _requestIfNeeded() {
    this._requestId === null &&
      this._head.next &&
      ((this.lastTime = performance.now()),
      (this._lastFrame = this.lastTime),
      (this._requestId = requestAnimationFrame(this._tick)))
  }
  _cancelIfNeeded() {
    this._requestId !== null &&
      (cancelAnimationFrame(this._requestId), (this._requestId = null))
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start()
  }
  add(t, s, n = Yo.NORMAL) {
    return this._addListener(new ho(t, s, n))
  }
  addOnce(t, s, n = Yo.NORMAL) {
    return this._addListener(new ho(t, s, n, !0))
  }
  _addListener(t) {
    let s = this._head.next,
      n = this._head
    if (!s) t.connect(n)
    else {
      for (; s; ) {
        if (t.priority > s.priority) {
          t.connect(n)
          break
        }
        ;(n = s), (s = s.next)
      }
      t.previous || t.connect(n)
    }
    return this._startIfPossible(), this
  }
  remove(t, s) {
    let n = this._head.next
    for (; n; ) n.match(t, s) ? (n = n.destroy()) : (n = n.next)
    return this._head.next || this._cancelIfNeeded(), this
  }
  get count() {
    if (!this._head) return 0
    let t = 0,
      s = this._head
    for (; (s = s.next); ) t++
    return t
  }
  start() {
    this.started || ((this.started = !0), this._requestIfNeeded())
  }
  stop() {
    this.started && ((this.started = !1), this._cancelIfNeeded())
  }
  destroy() {
    if (!this._protected) {
      this.stop()
      let t = this._head.next
      for (; t; ) t = t.destroy(!0)
      this._head.destroy(), (this._head = null)
    }
  }
  update(t = performance.now()) {
    let s
    if (t > this.lastTime) {
      if (
        ((s = this.elapsedMS = t - this.lastTime),
        s > this._maxElapsedMS && (s = this._maxElapsedMS),
        (s *= this.speed),
        this._minElapsedMS)
      ) {
        const r = (t - this._lastFrame) | 0
        if (r < this._minElapsedMS) return
        this._lastFrame = t - (r % this._minElapsedMS)
      }
      ;(this.deltaMS = s), (this.deltaTime = this.deltaMS * ue.targetFPMS)
      const n = this._head
      let i = n.next
      for (; i; ) i = i.emit(this)
      n.next || this._cancelIfNeeded()
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0
    this.lastTime = t
  }
  get FPS() {
    return 1e3 / this.elapsedMS
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS
  }
  set minFPS(t) {
    const s = Math.min(this.maxFPS, t),
      n = Math.min(Math.max(0, s) / 1e3, ue.targetFPMS)
    this._maxElapsedMS = 1 / n
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
  }
  set maxFPS(t) {
    if (t === 0) this._minElapsedMS = 0
    else {
      const s = Math.max(this.minFPS, t)
      this._minElapsedMS = 1 / (s / 1e3)
    }
  }
  static get shared() {
    if (!ue._shared) {
      const t = (ue._shared = new ue())
      ;(t.autoStart = !0), (t._protected = !0)
    }
    return ue._shared
  }
  static get system() {
    if (!ue._system) {
      const t = (ue._system = new ue())
      ;(t.autoStart = !0), (t._protected = !0)
    }
    return ue._system
  }
}
Jd.targetFPMS = 0.06
let Vi = Jd,
  uo
async function tf() {
  return (
    uo ??
      (uo = (async () => {
        var o
        const t = document.createElement('canvas').getContext('webgl')
        if (!t) return 'premultiply-alpha-on-upload'
        const s = await new Promise((a) => {
          const l = document.createElement('video')
          ;(l.onloadeddata = () => a(l)),
            (l.onerror = () => a(null)),
            (l.autoplay = !1),
            (l.crossOrigin = 'anonymous'),
            (l.preload = 'auto'),
            (l.src =
              'data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM='),
            l.load()
        })
        if (!s) return 'premultiply-alpha-on-upload'
        const n = t.createTexture()
        t.bindTexture(t.TEXTURE_2D, n)
        const i = t.createFramebuffer()
        t.bindFramebuffer(t.FRAMEBUFFER, i),
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            n,
            0,
          ),
          t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE),
          t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, s)
        const r = new Uint8Array(4)
        return (
          t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, r),
          t.deleteFramebuffer(i),
          t.deleteTexture(n),
          (o = t.getExtension('WEBGL_lose_context')) == null || o.loseContext(),
          r[0] <= r[3] ? 'premultiplied-alpha' : 'premultiply-alpha-on-upload'
        )
      })()),
    uo
  )
}
const Br = class ef extends Ts {
  constructor(t) {
    super(t),
      (this.isReady = !1),
      (this.uploadMethodId = 'video'),
      (t = { ...ef.defaultOptions, ...t }),
      (this._autoUpdate = !0),
      (this._isConnectedToTicker = !1),
      (this._updateFPS = t.updateFPS || 0),
      (this._msToNextUpdate = 0),
      (this.autoPlay = t.autoPlay !== !1),
      (this.alphaMode = t.alphaMode ?? 'premultiply-alpha-on-upload'),
      (this._videoFrameRequestCallback =
        this._videoFrameRequestCallback.bind(this)),
      (this._videoFrameRequestCallbackHandle = null),
      (this._load = null),
      (this._resolve = null),
      (this._reject = null),
      (this._onCanPlay = this._onCanPlay.bind(this)),
      (this._onCanPlayThrough = this._onCanPlayThrough.bind(this)),
      (this._onError = this._onError.bind(this)),
      (this._onPlayStart = this._onPlayStart.bind(this)),
      (this._onPlayStop = this._onPlayStop.bind(this)),
      (this._onSeeked = this._onSeeked.bind(this)),
      t.autoLoad !== !1 && this.load()
  }
  updateFrame() {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const t = Vi.shared.elapsedMS * this.resource.playbackRate
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - t)
      }
      ;(!this._updateFPS || this._msToNextUpdate <= 0) &&
        (this._msToNextUpdate = this._updateFPS
          ? Math.floor(1e3 / this._updateFPS)
          : 0),
        this.isValid && this.update()
    }
  }
  _videoFrameRequestCallback() {
    this.updateFrame(),
      this.destroyed
        ? (this._videoFrameRequestCallbackHandle = null)
        : (this._videoFrameRequestCallbackHandle =
            this.resource.requestVideoFrameCallback(
              this._videoFrameRequestCallback,
            ))
  }
  get isValid() {
    return !!this.resource.videoWidth && !!this.resource.videoHeight
  }
  async load() {
    if (this._load) return this._load
    const t = this.resource,
      s = this.options
    return (
      (t.readyState === t.HAVE_ENOUGH_DATA ||
        t.readyState === t.HAVE_FUTURE_DATA) &&
        t.width &&
        t.height &&
        (t.complete = !0),
      t.addEventListener('play', this._onPlayStart),
      t.addEventListener('pause', this._onPlayStop),
      t.addEventListener('seeked', this._onSeeked),
      this._isSourceReady()
        ? this._mediaReady()
        : (s.preload || t.addEventListener('canplay', this._onCanPlay),
          t.addEventListener('canplaythrough', this._onCanPlayThrough),
          t.addEventListener('error', this._onError, !0)),
      (this.alphaMode = await tf()),
      (this._load = new Promise((n, i) => {
        this.isValid
          ? n(this)
          : ((this._resolve = n),
            (this._reject = i),
            s.preloadTimeoutMs !== void 0 &&
              (this._preloadTimeout = setTimeout(() => {
                this._onError(
                  new ErrorEvent(
                    `Preload exceeded timeout of ${s.preloadTimeoutMs}ms`,
                  ),
                )
              })),
            t.load())
      })),
      this._load
    )
  }
  _onError(t) {
    this.resource.removeEventListener('error', this._onError, !0),
      this.emit('error', t),
      this._reject &&
        (this._reject(t), (this._reject = null), (this._resolve = null))
  }
  _isSourcePlaying() {
    const t = this.resource
    return !t.paused && !t.ended
  }
  _isSourceReady() {
    return this.resource.readyState > 2
  }
  _onPlayStart() {
    this.isValid || this._mediaReady(), this._configureAutoUpdate()
  }
  _onPlayStop() {
    this._configureAutoUpdate()
  }
  _onSeeked() {
    this._autoUpdate &&
      !this._isSourcePlaying() &&
      ((this._msToNextUpdate = 0),
      this.updateFrame(),
      (this._msToNextUpdate = 0))
  }
  _onCanPlay() {
    this.resource.removeEventListener('canplay', this._onCanPlay),
      this._mediaReady()
  }
  _onCanPlayThrough() {
    this.resource.removeEventListener('canplaythrough', this._onCanPlay),
      this._preloadTimeout &&
        (clearTimeout(this._preloadTimeout), (this._preloadTimeout = void 0)),
      this._mediaReady()
  }
  _mediaReady() {
    const t = this.resource
    this.isValid &&
      ((this.isReady = !0), this.resize(t.videoWidth, t.videoHeight)),
      (this._msToNextUpdate = 0),
      this.updateFrame(),
      (this._msToNextUpdate = 0),
      this._resolve &&
        (this._resolve(this), (this._resolve = null), (this._reject = null)),
      this._isSourcePlaying()
        ? this._onPlayStart()
        : this.autoPlay && this.resource.play()
  }
  destroy() {
    this._configureAutoUpdate()
    const t = this.resource
    t &&
      (t.removeEventListener('play', this._onPlayStart),
      t.removeEventListener('pause', this._onPlayStop),
      t.removeEventListener('seeked', this._onSeeked),
      t.removeEventListener('canplay', this._onCanPlay),
      t.removeEventListener('canplaythrough', this._onCanPlayThrough),
      t.removeEventListener('error', this._onError, !0),
      t.pause(),
      (t.src = ''),
      t.load()),
      super.destroy()
  }
  get autoUpdate() {
    return this._autoUpdate
  }
  set autoUpdate(t) {
    t !== this._autoUpdate &&
      ((this._autoUpdate = t), this._configureAutoUpdate())
  }
  get updateFPS() {
    return this._updateFPS
  }
  set updateFPS(t) {
    t !== this._updateFPS &&
      ((this._updateFPS = t), this._configureAutoUpdate())
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying()
      ? !this._updateFPS && this.resource.requestVideoFrameCallback
        ? (this._isConnectedToTicker &&
            (Vi.shared.remove(this.updateFrame, this),
            (this._isConnectedToTicker = !1),
            (this._msToNextUpdate = 0)),
          this._videoFrameRequestCallbackHandle === null &&
            (this._videoFrameRequestCallbackHandle =
              this.resource.requestVideoFrameCallback(
                this._videoFrameRequestCallback,
              )))
        : (this._videoFrameRequestCallbackHandle !== null &&
            (this.resource.cancelVideoFrameCallback(
              this._videoFrameRequestCallbackHandle,
            ),
            (this._videoFrameRequestCallbackHandle = null)),
          this._isConnectedToTicker ||
            (Vi.shared.add(this.updateFrame, this),
            (this._isConnectedToTicker = !0),
            (this._msToNextUpdate = 0)))
      : (this._videoFrameRequestCallbackHandle !== null &&
          (this.resource.cancelVideoFrameCallback(
            this._videoFrameRequestCallbackHandle,
          ),
          (this._videoFrameRequestCallbackHandle = null)),
        this._isConnectedToTicker &&
          (Vi.shared.remove(this.updateFrame, this),
          (this._isConnectedToTicker = !1),
          (this._msToNextUpdate = 0)))
  }
  static test(t) {
    return (
      (globalThis.HTMLVideoElement && t instanceof HTMLVideoElement) ||
      (globalThis.VideoFrame && t instanceof VideoFrame)
    )
  }
}
Br.extension = ot.TextureSource
Br.defaultOptions = {
  ...Ts.defaultOptions,
  autoLoad: !0,
  autoPlay: !0,
  updateFPS: 0,
  crossorigin: !0,
  loop: !1,
  muted: !0,
  playsinline: !0,
  preload: !1,
}
Br.MIME_TYPES = { ogv: 'video/ogg', mov: 'video/quicktime', m4v: 'video/mp4' }
let Qi = Br
const ke = (e, t, s = !1) => (
  Array.isArray(e) || (e = [e]),
  t ? e.map((n) => (typeof n == 'string' || s ? t(n) : n)) : e
)
class cb {
  constructor() {
    ;(this._parsers = []),
      (this._cache = new Map()),
      (this._cacheMap = new Map())
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear()
  }
  has(t) {
    return this._cache.has(t)
  }
  get(t) {
    const s = this._cache.get(t)
    return s || Wt(`[Assets] Asset id ${t} was not found in the Cache`), s
  }
  set(t, s) {
    const n = ke(t)
    let i
    for (let l = 0; l < this.parsers.length; l++) {
      const h = this.parsers[l]
      if (h.test(s)) {
        i = h.getCacheableAssets(n, s)
        break
      }
    }
    const r = new Map(Object.entries(i || {}))
    i ||
      n.forEach((l) => {
        r.set(l, s)
      })
    const o = [...r.keys()],
      a = { cacheKeys: o, keys: n }
    n.forEach((l) => {
      this._cacheMap.set(l, a)
    }),
      o.forEach((l) => {
        const h = i ? i[l] : s
        this._cache.has(l) &&
          this._cache.get(l) !== h &&
          Wt('[Cache] already has key:', l),
          this._cache.set(l, r.get(l))
      })
  }
  remove(t) {
    if (!this._cacheMap.has(t)) {
      Wt(`[Assets] Asset id ${t} was not found in the Cache`)
      return
    }
    const s = this._cacheMap.get(t)
    s.cacheKeys.forEach((i) => {
      this._cache.delete(i)
    }),
      s.keys.forEach((i) => {
        this._cacheMap.delete(i)
      })
  }
  get parsers() {
    return this._parsers
  }
}
const se = new cb(),
  Xo = []
Pe.handleByList(ot.TextureSource, Xo)
function hb(e = {}) {
  const t = e && e.resource,
    s = t ? e.resource : e,
    n = t ? e : { resource: e }
  for (let i = 0; i < Xo.length; i++) {
    const r = Xo[i]
    if (r.test(s)) return new r(n)
  }
  throw new Error(`Could not find a source type for resource: ${n.resource}`)
}
function ub(e = {}, t = !1) {
  const s = e && e.resource,
    n = s ? e.resource : e,
    i = s ? e : { resource: e }
  if (!t && se.has(n)) return se.get(n)
  const r = new Et({ source: hb(i) })
  return (
    r.on('destroy', () => {
      se.has(n) && se.remove(n)
    }),
    t || se.set(n, r),
    r
  )
}
function db(e, t = !1) {
  return typeof e == 'string'
    ? se.get(e)
    : e instanceof Ts
    ? new Et({ source: e })
    : ub(e, t)
}
Et.from = db
Pe.add(Kd, qd, Zd, Qi, Ei, Qd, Ya)
var tn = ((e) => (
  (e[(e.Low = 0)] = 'Low'),
  (e[(e.Normal = 1)] = 'Normal'),
  (e[(e.High = 2)] = 'High'),
  e
))(tn || {})
function Ie(e) {
  if (typeof e != 'string')
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)
}
function Hn(e) {
  return e.split('?')[0].split('#')[0]
}
function fb(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function pb(e, t, s) {
  return e.replace(new RegExp(fb(t), 'g'), s)
}
function mb(e, t) {
  let s = '',
    n = 0,
    i = -1,
    r = 0,
    o = -1
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length) o = e.charCodeAt(a)
    else {
      if (o === 47) break
      o = 47
    }
    if (o === 47) {
      if (!(i === a - 1 || r === 1))
        if (i !== a - 1 && r === 2) {
          if (
            s.length < 2 ||
            n !== 2 ||
            s.charCodeAt(s.length - 1) !== 46 ||
            s.charCodeAt(s.length - 2) !== 46
          ) {
            if (s.length > 2) {
              const l = s.lastIndexOf('/')
              if (l !== s.length - 1) {
                l === -1
                  ? ((s = ''), (n = 0))
                  : ((s = s.slice(0, l)),
                    (n = s.length - 1 - s.lastIndexOf('/'))),
                  (i = a),
                  (r = 0)
                continue
              }
            } else if (s.length === 2 || s.length === 1) {
              ;(s = ''), (n = 0), (i = a), (r = 0)
              continue
            }
          }
          t && (s.length > 0 ? (s += '/..') : (s = '..'), (n = 2))
        } else
          s.length > 0
            ? (s += `/${e.slice(i + 1, a)}`)
            : (s = e.slice(i + 1, a)),
            (n = a - i - 1)
      ;(i = a), (r = 0)
    } else o === 46 && r !== -1 ? ++r : (r = -1)
  }
  return s
}
const Ye = {
  toPosix(e) {
    return pb(e, '\\', '/')
  },
  isUrl(e) {
    return /^https?:/.test(this.toPosix(e))
  },
  isDataUrl(e) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
      e,
    )
  },
  isBlobUrl(e) {
    return e.startsWith('blob:')
  },
  hasProtocol(e) {
    return /^[^/:]+:/.test(this.toPosix(e))
  },
  getProtocol(e) {
    Ie(e), (e = this.toPosix(e))
    const t = /^file:\/\/\//.exec(e)
    if (t) return t[0]
    const s = /^[^/:]+:\/{0,2}/.exec(e)
    return s ? s[0] : ''
  },
  toAbsolute(e, t, s) {
    if ((Ie(e), this.isDataUrl(e) || this.isBlobUrl(e))) return e
    const n = Hn(this.toPosix(t ?? jt.get().getBaseUrl())),
      i = Hn(this.toPosix(s ?? this.rootname(n)))
    return (
      (e = this.toPosix(e)),
      e.startsWith('/')
        ? Ye.join(i, e.slice(1))
        : this.isAbsolute(e)
        ? e
        : this.join(n, e)
    )
  },
  normalize(e) {
    if ((Ie(e), e.length === 0)) return '.'
    if (this.isDataUrl(e) || this.isBlobUrl(e)) return e
    e = this.toPosix(e)
    let t = ''
    const s = e.startsWith('/')
    this.hasProtocol(e) && ((t = this.rootname(e)), (e = e.slice(t.length)))
    const n = e.endsWith('/')
    return (e = mb(e, !1)), e.length > 0 && n && (e += '/'), s ? `/${e}` : t + e
  },
  isAbsolute(e) {
    return (
      Ie(e), (e = this.toPosix(e)), this.hasProtocol(e) ? !0 : e.startsWith('/')
    )
  },
  join(...e) {
    if (e.length === 0) return '.'
    let t
    for (let s = 0; s < e.length; ++s) {
      const n = e[s]
      if ((Ie(n), n.length > 0))
        if (t === void 0) t = n
        else {
          const i = e[s - 1] ?? ''
          this.joinExtensions.includes(this.extname(i).toLowerCase())
            ? (t += `/../${n}`)
            : (t += `/${n}`)
        }
    }
    return t === void 0 ? '.' : this.normalize(t)
  },
  dirname(e) {
    if ((Ie(e), e.length === 0)) return '.'
    e = this.toPosix(e)
    let t = e.charCodeAt(0)
    const s = t === 47
    let n = -1,
      i = !0
    const r = this.getProtocol(e),
      o = e
    e = e.slice(r.length)
    for (let a = e.length - 1; a >= 1; --a)
      if (((t = e.charCodeAt(a)), t === 47)) {
        if (!i) {
          n = a
          break
        }
      } else i = !1
    return n === -1
      ? s
        ? '/'
        : this.isUrl(o)
        ? r + e
        : r
      : s && n === 1
      ? '//'
      : r + e.slice(0, n)
  },
  rootname(e) {
    Ie(e), (e = this.toPosix(e))
    let t = ''
    if (
      (e.startsWith('/') ? (t = '/') : (t = this.getProtocol(e)), this.isUrl(e))
    ) {
      const s = e.indexOf('/', t.length)
      s !== -1 ? (t = e.slice(0, s)) : (t = e), t.endsWith('/') || (t += '/')
    }
    return t
  },
  basename(e, t) {
    Ie(e), t && Ie(t), (e = Hn(this.toPosix(e)))
    let s = 0,
      n = -1,
      i = !0,
      r
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return ''
      let o = t.length - 1,
        a = -1
      for (r = e.length - 1; r >= 0; --r) {
        const l = e.charCodeAt(r)
        if (l === 47) {
          if (!i) {
            s = r + 1
            break
          }
        } else
          a === -1 && ((i = !1), (a = r + 1)),
            o >= 0 &&
              (l === t.charCodeAt(o)
                ? --o === -1 && (n = r)
                : ((o = -1), (n = a)))
      }
      return s === n ? (n = a) : n === -1 && (n = e.length), e.slice(s, n)
    }
    for (r = e.length - 1; r >= 0; --r)
      if (e.charCodeAt(r) === 47) {
        if (!i) {
          s = r + 1
          break
        }
      } else n === -1 && ((i = !1), (n = r + 1))
    return n === -1 ? '' : e.slice(s, n)
  },
  extname(e) {
    Ie(e), (e = Hn(this.toPosix(e)))
    let t = -1,
      s = 0,
      n = -1,
      i = !0,
      r = 0
    for (let o = e.length - 1; o >= 0; --o) {
      const a = e.charCodeAt(o)
      if (a === 47) {
        if (!i) {
          s = o + 1
          break
        }
        continue
      }
      n === -1 && ((i = !1), (n = o + 1)),
        a === 46
          ? t === -1
            ? (t = o)
            : r !== 1 && (r = 1)
          : t !== -1 && (r = -1)
    }
    return t === -1 ||
      n === -1 ||
      r === 0 ||
      (r === 1 && t === n - 1 && t === s + 1)
      ? ''
      : e.slice(t, n)
  },
  parse(e) {
    Ie(e)
    const t = { root: '', dir: '', base: '', ext: '', name: '' }
    if (e.length === 0) return t
    e = Hn(this.toPosix(e))
    let s = e.charCodeAt(0)
    const n = this.isAbsolute(e)
    let i
    ;(t.root = this.rootname(e)), n || this.hasProtocol(e) ? (i = 1) : (i = 0)
    let r = -1,
      o = 0,
      a = -1,
      l = !0,
      h = e.length - 1,
      c = 0
    for (; h >= i; --h) {
      if (((s = e.charCodeAt(h)), s === 47)) {
        if (!l) {
          o = h + 1
          break
        }
        continue
      }
      a === -1 && ((l = !1), (a = h + 1)),
        s === 46
          ? r === -1
            ? (r = h)
            : c !== 1 && (c = 1)
          : r !== -1 && (c = -1)
    }
    return (
      r === -1 || a === -1 || c === 0 || (c === 1 && r === a - 1 && r === o + 1)
        ? a !== -1 &&
          (o === 0 && n
            ? (t.base = t.name = e.slice(1, a))
            : (t.base = t.name = e.slice(o, a)))
        : (o === 0 && n
            ? ((t.name = e.slice(1, r)), (t.base = e.slice(1, a)))
            : ((t.name = e.slice(o, r)), (t.base = e.slice(o, a))),
          (t.ext = e.slice(r, a))),
      (t.dir = this.dirname(e)),
      t
    )
  },
  sep: '/',
  delimiter: ':',
  joinExtensions: ['.html'],
}
function sf(e, t, s, n, i) {
  const r = t[s]
  for (let o = 0; o < r.length; o++) {
    const a = r[o]
    s < t.length - 1
      ? sf(e.replace(n[s], a), t, s + 1, n, i)
      : i.push(e.replace(n[s], a))
  }
}
function gb(e) {
  const t = /\{(.*?)\}/g,
    s = e.match(t),
    n = []
  if (s) {
    const i = []
    s.forEach((r) => {
      const o = r.substring(1, r.length - 1).split(',')
      i.push(o)
    }),
      sf(e, i, 0, s, n)
  } else n.push(e)
  return n
}
const dr = (e) => !Array.isArray(e)
class kn {
  constructor() {
    ;(this._defaultBundleIdentifierOptions = {
      connector: '-',
      createBundleAssetId: (t, s) => `${t}${this._bundleIdConnector}${s}`,
      extractAssetIdFromBundle: (t, s) =>
        s.replace(`${t}${this._bundleIdConnector}`, ''),
    }),
      (this._bundleIdConnector =
        this._defaultBundleIdentifierOptions.connector),
      (this._createBundleAssetId =
        this._defaultBundleIdentifierOptions.createBundleAssetId),
      (this._extractAssetIdFromBundle =
        this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._parsers = []),
      (this._resolverHash = {}),
      (this._bundles = {})
  }
  setBundleIdentifier(t) {
    if (
      ((this._bundleIdConnector = t.connector ?? this._bundleIdConnector),
      (this._createBundleAssetId =
        t.createBundleAssetId ?? this._createBundleAssetId),
      (this._extractAssetIdFromBundle =
        t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
      this._extractAssetIdFromBundle(
        'foo',
        this._createBundleAssetId('foo', 'bar'),
      ) !== 'bar')
    )
      throw new Error(
        '[Resolver] GenerateBundleAssetId are not working correctly',
      )
  }
  prefer(...t) {
    t.forEach((s) => {
      this._preferredOrder.push(s),
        s.priority || (s.priority = Object.keys(s.params))
    }),
      (this._resolverHash = {})
  }
  set basePath(t) {
    this._basePath = t
  }
  get basePath() {
    return this._basePath
  }
  set rootPath(t) {
    this._rootPath = t
  }
  get rootPath() {
    return this._rootPath
  }
  get parsers() {
    return this._parsers
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._resolverHash = {}),
      (this._rootPath = null),
      (this._basePath = null),
      (this._manifest = null),
      (this._bundles = {}),
      (this._defaultSearchParams = null)
  }
  setDefaultSearchParams(t) {
    if (typeof t == 'string') this._defaultSearchParams = t
    else {
      const s = t
      this._defaultSearchParams = Object.keys(s)
        .map((n) => `${encodeURIComponent(n)}=${encodeURIComponent(s[n])}`)
        .join('&')
    }
  }
  getAlias(t) {
    const { alias: s, src: n } = t
    return ke(
      s || n,
      (r) =>
        typeof r == 'string'
          ? r
          : Array.isArray(r)
          ? r.map((o) => (o == null ? void 0 : o.src) ?? o)
          : r != null && r.src
          ? r.src
          : r,
      !0,
    )
  }
  addManifest(t) {
    this._manifest &&
      Wt('[Resolver] Manifest already exists, this will be overwritten'),
      (this._manifest = t),
      t.bundles.forEach((s) => {
        this.addBundle(s.name, s.assets)
      })
  }
  addBundle(t, s) {
    const n = []
    let i = s
    Array.isArray(s) ||
      (i = Object.entries(s).map(([r, o]) =>
        typeof o == 'string' || Array.isArray(o)
          ? { alias: r, src: o }
          : { alias: r, ...o },
      )),
      i.forEach((r) => {
        const o = r.src,
          a = r.alias
        let l
        if (typeof a == 'string') {
          const h = this._createBundleAssetId(t, a)
          n.push(h), (l = [a, h])
        } else {
          const h = a.map((c) => this._createBundleAssetId(t, c))
          n.push(...h), (l = [...a, ...h])
        }
        this.add({ ...r, alias: l, src: o })
      }),
      (this._bundles[t] = n)
  }
  add(t) {
    const s = []
    Array.isArray(t) ? s.push(...t) : s.push(t)
    let n
    ;(n = (r) => {
      this.hasKey(r) && Wt(`[Resolver] already has key: ${r} overwriting`)
    }),
      ke(s).forEach((r) => {
        const { src: o } = r
        let { data: a, format: l, loadParser: h } = r
        const c = ke(o).map((f) =>
            typeof f == 'string' ? gb(f) : Array.isArray(f) ? f : [f],
          ),
          u = this.getAlias(r)
        Array.isArray(u) ? u.forEach(n) : n(u)
        const d = []
        c.forEach((f) => {
          f.forEach((p) => {
            let g = {}
            if (typeof p != 'object') {
              g.src = p
              for (let m = 0; m < this._parsers.length; m++) {
                const b = this._parsers[m]
                if (b.test(p)) {
                  g = b.parse(p)
                  break
                }
              }
            } else
              (a = p.data ?? a),
                (l = p.format ?? l),
                (h = p.loadParser ?? h),
                (g = { ...g, ...p })
            if (!u)
              throw new Error(
                `[Resolver] alias is undefined for this asset: ${g.src}`,
              )
            ;(g = this._buildResolvedAsset(g, {
              aliases: u,
              data: a,
              format: l,
              loadParser: h,
            })),
              d.push(g)
          })
        }),
          u.forEach((f) => {
            this._assetMap[f] = d
          })
      })
  }
  resolveBundle(t) {
    const s = dr(t)
    t = ke(t)
    const n = {}
    return (
      t.forEach((i) => {
        const r = this._bundles[i]
        if (r) {
          const o = this.resolve(r),
            a = {}
          for (const l in o) {
            const h = o[l]
            a[this._extractAssetIdFromBundle(i, l)] = h
          }
          n[i] = a
        }
      }),
      s ? n[t[0]] : n
    )
  }
  resolveUrl(t) {
    const s = this.resolve(t)
    if (typeof t != 'string') {
      const n = {}
      for (const i in s) n[i] = s[i].src
      return n
    }
    return s.src
  }
  resolve(t) {
    const s = dr(t)
    t = ke(t)
    const n = {}
    return (
      t.forEach((i) => {
        if (!this._resolverHash[i])
          if (this._assetMap[i]) {
            let r = this._assetMap[i]
            const o = this._getPreferredOrder(r)
            o == null ||
              o.priority.forEach((a) => {
                o.params[a].forEach((l) => {
                  const h = r.filter((c) => (c[a] ? c[a] === l : !1))
                  h.length && (r = h)
                })
              }),
              (this._resolverHash[i] = r[0])
          } else
            this._resolverHash[i] = this._buildResolvedAsset(
              { alias: [i], src: i },
              {},
            )
        n[i] = this._resolverHash[i]
      }),
      s ? n[t[0]] : n
    )
  }
  hasKey(t) {
    return !!this._assetMap[t]
  }
  hasBundle(t) {
    return !!this._bundles[t]
  }
  _getPreferredOrder(t) {
    for (let s = 0; s < t.length; s++) {
      const n = t[0],
        i = this._preferredOrder.find((r) => r.params.format.includes(n.format))
      if (i) return i
    }
    return this._preferredOrder[0]
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams) return t
    const s = /\?/.test(t) ? '&' : '?'
    return `${t}${s}${this._defaultSearchParams}`
  }
  _buildResolvedAsset(t, s) {
    const { aliases: n, data: i, loadParser: r, format: o } = s
    return (
      (this._basePath || this._rootPath) &&
        (t.src = Ye.toAbsolute(t.src, this._basePath, this._rootPath)),
      (t.alias = n ?? t.alias ?? [t.src]),
      (t.src = this._appendDefaultSearchParams(t.src)),
      (t.data = { ...(i || {}), ...t.data }),
      (t.loadParser = r ?? t.loadParser),
      (t.format = o ?? t.format ?? _b(t.src)),
      t
    )
  }
}
kn.RETINA_PREFIX = /@([0-9\.]+)x/
function _b(e) {
  return e.split('.').pop().split('?').shift().split('#').shift()
}
const ih = (e, t) => {
    const s = t.split('?')[1]
    return s && (e += `?${s}`), e
  },
  nf = class qn {
    constructor(t, s) {
      ;(this.linkedSheets = []),
        (this._texture = t instanceof Et ? t : null),
        (this.textureSource = t.source),
        (this.textures = {}),
        (this.animations = {}),
        (this.data = s)
      const n = parseFloat(s.meta.scale)
      n
        ? ((this.resolution = n), (t.source.resolution = this.resolution))
        : (this.resolution = t.source._resolution),
        (this._frames = this.data.frames),
        (this._frameKeys = Object.keys(this._frames)),
        (this._batchIndex = 0),
        (this._callback = null)
    }
    parse() {
      return new Promise((t) => {
        ;(this._callback = t),
          (this._batchIndex = 0),
          this._frameKeys.length <= qn.BATCH_SIZE
            ? (this._processFrames(0),
              this._processAnimations(),
              this._parseComplete())
            : this._nextBatch()
      })
    }
    _processFrames(t) {
      let s = t
      const n = qn.BATCH_SIZE
      for (; s - t < n && s < this._frameKeys.length; ) {
        const i = this._frameKeys[s],
          r = this._frames[i],
          o = r.frame
        if (o) {
          let a = null,
            l = null
          const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame,
            c = new Ht(
              0,
              0,
              Math.floor(h.w) / this.resolution,
              Math.floor(h.h) / this.resolution,
            )
          r.rotated
            ? (a = new Ht(
                Math.floor(o.x) / this.resolution,
                Math.floor(o.y) / this.resolution,
                Math.floor(o.h) / this.resolution,
                Math.floor(o.w) / this.resolution,
              ))
            : (a = new Ht(
                Math.floor(o.x) / this.resolution,
                Math.floor(o.y) / this.resolution,
                Math.floor(o.w) / this.resolution,
                Math.floor(o.h) / this.resolution,
              )),
            r.trimmed !== !1 &&
              r.spriteSourceSize &&
              (l = new Ht(
                Math.floor(r.spriteSourceSize.x) / this.resolution,
                Math.floor(r.spriteSourceSize.y) / this.resolution,
                Math.floor(o.w) / this.resolution,
                Math.floor(o.h) / this.resolution,
              )),
            (this.textures[i] = new Et({
              source: this.textureSource,
              frame: a,
              orig: c,
              trim: l,
              rotate: r.rotated ? 2 : 0,
              defaultAnchor: r.anchor,
              defaultBorders: r.borders,
              label: i.toString(),
            }))
        }
        s++
      }
    }
    _processAnimations() {
      const t = this.data.animations || {}
      for (const s in t) {
        this.animations[s] = []
        for (let n = 0; n < t[s].length; n++) {
          const i = t[s][n]
          this.animations[s].push(this.textures[i])
        }
      }
    }
    _parseComplete() {
      const t = this._callback
      ;(this._callback = null),
        (this._batchIndex = 0),
        t.call(this, this.textures)
    }
    _nextBatch() {
      this._processFrames(this._batchIndex * qn.BATCH_SIZE),
        this._batchIndex++,
        setTimeout(() => {
          this._batchIndex * qn.BATCH_SIZE < this._frameKeys.length
            ? this._nextBatch()
            : (this._processAnimations(), this._parseComplete())
        }, 0)
    }
    destroy(t = !1) {
      var s
      for (const n in this.textures) this.textures[n].destroy()
      ;(this._frames = null),
        (this._frameKeys = null),
        (this.data = null),
        (this.textures = null),
        t &&
          ((s = this._texture) == null || s.destroy(),
          this.textureSource.destroy()),
        (this._texture = null),
        (this.textureSource = null),
        (this.linkedSheets = [])
    }
  }
nf.BATCH_SIZE = 1e3
let rh = nf
const yb = [
  'jpg',
  'png',
  'jpeg',
  'avif',
  'webp',
  'basis',
  'etc2',
  'bc7',
  'bc6h',
  'bc5',
  'bc4',
  'bc3',
  'bc2',
  'bc1',
  'eac',
  'astc',
]
function rf(e, t, s) {
  const n = {}
  if (
    (e.forEach((i) => {
      n[i] = t
    }),
    Object.keys(t.textures).forEach((i) => {
      n[i] = t.textures[i]
    }),
    !s)
  ) {
    const i = Ye.dirname(e[0])
    t.linkedSheets.forEach((r, o) => {
      const a = rf([`${i}/${t.data.meta.related_multi_packs[o]}`], r, !0)
      Object.assign(n, a)
    })
  }
  return n
}
const xb = {
  extension: ot.Asset,
  cache: {
    test: (e) => e instanceof rh,
    getCacheableAssets: (e, t) => rf(e, t, !1),
  },
  resolver: {
    test: (e) => {
      const s = e.split('?')[0].split('.'),
        n = s.pop(),
        i = s.pop()
      return n === 'json' && yb.includes(i)
    },
    parse: (e) => {
      var s
      const t = e.split('.')
      return {
        resolution: parseFloat(
          ((s = kn.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) ?? '1',
        ),
        format: t[t.length - 2],
        src: e,
      }
    },
  },
  loader: {
    name: 'spritesheetLoader',
    extension: { type: ot.LoadParser, priority: tn.Normal },
    async testParse(e, t) {
      return Ye.extname(t.src).toLowerCase() === '.json' && !!e.frames
    },
    async parse(e, t, s) {
      var h, c
      const { texture: n, imageFilename: i } =
        (t == null ? void 0 : t.data) ?? {}
      let r = Ye.dirname(t.src)
      r && r.lastIndexOf('/') !== r.length - 1 && (r += '/')
      let o
      if (n instanceof Et) o = n
      else {
        const u = ih(r + (i ?? e.meta.image), t.src)
        o = (await s.load([u]))[u]
      }
      const a = new rh(o.source, e)
      await a.parse()
      const l =
        (h = e == null ? void 0 : e.meta) == null
          ? void 0
          : h.related_multi_packs
      if (Array.isArray(l)) {
        const u = []
        for (const f of l) {
          if (typeof f != 'string') continue
          let p = r + f
          ;((c = t.data) != null && c.ignoreMultiPack) ||
            ((p = ih(p, t.src)),
            u.push(s.load({ src: p, data: { ignoreMultiPack: !0 } })))
        }
        const d = await Promise.all(u)
        ;(a.linkedSheets = d),
          d.forEach((f) => {
            f.linkedSheets = [a].concat(a.linkedSheets.filter((p) => p !== f))
          })
      }
      return a
    },
    async unload(e, t, s) {
      await s.unload(e.textureSource._sourceOrigin), e.destroy(!1)
    },
  },
}
Pe.add(xb)
class bb {
  constructor(t) {
    ;(this.resources = Object.create(null)), (this._dirty = !0)
    let s = 0
    for (const n in t) {
      const i = t[n]
      this.setResource(i, s++)
    }
    this._updateKey()
  }
  _updateKey() {
    if (!this._dirty) return
    this._dirty = !1
    const t = []
    let s = 0
    for (const n in this.resources) t[s++] = this.resources[n]._resourceId
    this._key = t.join('|')
  }
  setResource(t, s) {
    var i, r
    const n = this.resources[s]
    t !== n &&
      (n &&
        ((i = t.off) == null ||
          i.call(t, 'change', this.onResourceChange, this)),
      (r = t.on) == null || r.call(t, 'change', this.onResourceChange, this),
      (this.resources[s] = t),
      (this._dirty = !0))
  }
  getResource(t) {
    return this.resources[t]
  }
  _touch(t) {
    const s = this.resources
    for (const n in s) s[n]._touched = t
  }
  destroy() {
    var s
    const t = this.resources
    for (const n in t) {
      const i = t[n]
      ;(s = i.off) == null || s.call(i, 'change', this.onResourceChange, this)
    }
    this.resources = null
  }
  onResourceChange(t) {
    if (((this._dirty = !0), t.destroyed)) {
      const s = this.resources
      for (const n in s) s[n] === t && (s[n] = null)
    } else this._updateKey()
  }
}
const Ko = []
Pe.handleByNamedList(ot.Environment, Ko)
async function vb(e) {
  if (e)
    for (let t = 0; t < Ko.length; t++) {
      const s = Ko[t]
      if (s.value.test()) {
        await s.value.load()
        return
      }
    }
}
let Gn
function wb() {
  if (typeof Gn == 'boolean') return Gn
  try {
    Gn =
      new Function(
        'param1',
        'param2',
        'param3',
        'return param1[param2] === param3;',
      )({ a: 'b' }, 'a', 'b') === !0
  } catch {
    Gn = !1
  }
  return Gn
}
var Ka = { exports: {} }
Ka.exports = Or
Ka.exports.default = Or
function Or(e, t, s) {
  s = s || 2
  var n = t && t.length,
    i = n ? t[0] * s : e.length,
    r = of(e, 0, i, s, !0),
    o = []
  if (!r || r.next === r.prev) return o
  var a, l, h, c, u, d, f
  if ((n && (r = Pb(e, t, r, s)), e.length > 80 * s)) {
    ;(a = h = e[0]), (l = c = e[1])
    for (var p = s; p < i; p += s)
      (u = e[p]),
        (d = e[p + 1]),
        u < a && (a = u),
        d < l && (l = d),
        u > h && (h = u),
        d > c && (c = d)
    ;(f = Math.max(h - a, c - l)), (f = f !== 0 ? 32767 / f : 0)
  }
  return _i(r, o, s, a, l, f, 0), o
}
function of(e, t, s, n, i) {
  var r, o
  if (i === Qo(e, t, s, n) > 0)
    for (r = t; r < s; r += n) o = oh(r, e[r], e[r + 1], o)
  else for (r = s - n; r >= t; r -= n) o = oh(r, e[r], e[r + 1], o)
  return o && Fr(o, o.next) && (xi(o), (o = o.next)), o
}
function Ys(e, t) {
  if (!e) return e
  t || (t = e)
  var s = e,
    n
  do
    if (
      ((n = !1), !s.steiner && (Fr(s, s.next) || kt(s.prev, s, s.next) === 0))
    ) {
      if ((xi(s), (s = t = s.prev), s === s.next)) break
      n = !0
    } else s = s.next
  while (n || s !== t)
  return t
}
function _i(e, t, s, n, i, r, o) {
  if (e) {
    !o && r && kb(e, n, i, r)
    for (var a = e, l, h; e.prev !== e.next; ) {
      if (((l = e.prev), (h = e.next), r ? Sb(e, n, i, r) : Ab(e))) {
        t.push((l.i / s) | 0),
          t.push((e.i / s) | 0),
          t.push((h.i / s) | 0),
          xi(e),
          (e = h.next),
          (a = h.next)
        continue
      }
      if (((e = h), e === a)) {
        o
          ? o === 1
            ? ((e = Cb(Ys(e), t, s)), _i(e, t, s, n, i, r, 2))
            : o === 2 && Eb(e, t, s, n, i, r)
          : _i(Ys(e), t, s, n, i, r, 1)
        break
      }
    }
  }
}
function Ab(e) {
  var t = e.prev,
    s = e,
    n = e.next
  if (kt(t, s, n) >= 0) return !1
  for (
    var i = t.x,
      r = s.x,
      o = n.x,
      a = t.y,
      l = s.y,
      h = n.y,
      c = i < r ? (i < o ? i : o) : r < o ? r : o,
      u = a < l ? (a < h ? a : h) : l < h ? l : h,
      d = i > r ? (i > o ? i : o) : r > o ? r : o,
      f = a > l ? (a > h ? a : h) : l > h ? l : h,
      p = n.next;
    p !== t;

  ) {
    if (
      p.x >= c &&
      p.x <= d &&
      p.y >= u &&
      p.y <= f &&
      ln(i, a, r, l, o, h, p.x, p.y) &&
      kt(p.prev, p, p.next) >= 0
    )
      return !1
    p = p.next
  }
  return !0
}
function Sb(e, t, s, n) {
  var i = e.prev,
    r = e,
    o = e.next
  if (kt(i, r, o) >= 0) return !1
  for (
    var a = i.x,
      l = r.x,
      h = o.x,
      c = i.y,
      u = r.y,
      d = o.y,
      f = a < l ? (a < h ? a : h) : l < h ? l : h,
      p = c < u ? (c < d ? c : d) : u < d ? u : d,
      g = a > l ? (a > h ? a : h) : l > h ? l : h,
      m = c > u ? (c > d ? c : d) : u > d ? u : d,
      b = qo(f, p, t, s, n),
      y = qo(g, m, t, s, n),
      v = e.prevZ,
      w = e.nextZ;
    v && v.z >= b && w && w.z <= y;

  ) {
    if (
      (v.x >= f &&
        v.x <= g &&
        v.y >= p &&
        v.y <= m &&
        v !== i &&
        v !== o &&
        ln(a, c, l, u, h, d, v.x, v.y) &&
        kt(v.prev, v, v.next) >= 0) ||
      ((v = v.prevZ),
      w.x >= f &&
        w.x <= g &&
        w.y >= p &&
        w.y <= m &&
        w !== i &&
        w !== o &&
        ln(a, c, l, u, h, d, w.x, w.y) &&
        kt(w.prev, w, w.next) >= 0)
    )
      return !1
    w = w.nextZ
  }
  for (; v && v.z >= b; ) {
    if (
      v.x >= f &&
      v.x <= g &&
      v.y >= p &&
      v.y <= m &&
      v !== i &&
      v !== o &&
      ln(a, c, l, u, h, d, v.x, v.y) &&
      kt(v.prev, v, v.next) >= 0
    )
      return !1
    v = v.prevZ
  }
  for (; w && w.z <= y; ) {
    if (
      w.x >= f &&
      w.x <= g &&
      w.y >= p &&
      w.y <= m &&
      w !== i &&
      w !== o &&
      ln(a, c, l, u, h, d, w.x, w.y) &&
      kt(w.prev, w, w.next) >= 0
    )
      return !1
    w = w.nextZ
  }
  return !0
}
function Cb(e, t, s) {
  var n = e
  do {
    var i = n.prev,
      r = n.next.next
    !Fr(i, r) &&
      af(i, n, n.next, r) &&
      yi(i, r) &&
      yi(r, i) &&
      (t.push((i.i / s) | 0),
      t.push((n.i / s) | 0),
      t.push((r.i / s) | 0),
      xi(n),
      xi(n.next),
      (n = e = r)),
      (n = n.next)
  } while (n !== e)
  return Ys(n)
}
function Eb(e, t, s, n, i, r) {
  var o = e
  do {
    for (var a = o.next.next; a !== o.prev; ) {
      if (o.i !== a.i && Ob(o, a)) {
        var l = lf(o, a)
        ;(o = Ys(o, o.next)),
          (l = Ys(l, l.next)),
          _i(o, t, s, n, i, r, 0),
          _i(l, t, s, n, i, r, 0)
        return
      }
      a = a.next
    }
    o = o.next
  } while (o !== e)
}
function Pb(e, t, s, n) {
  var i = [],
    r,
    o,
    a,
    l,
    h
  for (r = 0, o = t.length; r < o; r++)
    (a = t[r] * n),
      (l = r < o - 1 ? t[r + 1] * n : e.length),
      (h = of(e, a, l, n, !1)),
      h === h.next && (h.steiner = !0),
      i.push(Bb(h))
  for (i.sort(Tb), r = 0; r < i.length; r++) s = Mb(i[r], s)
  return s
}
function Tb(e, t) {
  return e.x - t.x
}
function Mb(e, t) {
  var s = Ib(e, t)
  if (!s) return t
  var n = lf(s, e)
  return Ys(n, n.next), Ys(s, s.next)
}
function Ib(e, t) {
  var s = t,
    n = e.x,
    i = e.y,
    r = -1 / 0,
    o
  do {
    if (i <= s.y && i >= s.next.y && s.next.y !== s.y) {
      var a = s.x + ((i - s.y) * (s.next.x - s.x)) / (s.next.y - s.y)
      if (
        a <= n &&
        a > r &&
        ((r = a), (o = s.x < s.next.x ? s : s.next), a === n)
      )
        return o
    }
    s = s.next
  } while (s !== t)
  if (!o) return null
  var l = o,
    h = o.x,
    c = o.y,
    u = 1 / 0,
    d
  s = o
  do
    n >= s.x &&
      s.x >= h &&
      n !== s.x &&
      ln(i < c ? n : r, i, h, c, i < c ? r : n, i, s.x, s.y) &&
      ((d = Math.abs(i - s.y) / (n - s.x)),
      yi(s, e) &&
        (d < u || (d === u && (s.x > o.x || (s.x === o.x && Rb(o, s))))) &&
        ((o = s), (u = d))),
      (s = s.next)
  while (s !== l)
  return o
}
function Rb(e, t) {
  return kt(e.prev, e, t.prev) < 0 && kt(t.next, e, e.next) < 0
}
function kb(e, t, s, n) {
  var i = e
  do
    i.z === 0 && (i.z = qo(i.x, i.y, t, s, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next)
  while (i !== e)
  ;(i.prevZ.nextZ = null), (i.prevZ = null), Lb(i)
}
function Lb(e) {
  var t,
    s,
    n,
    i,
    r,
    o,
    a,
    l,
    h = 1
  do {
    for (s = e, e = null, r = null, o = 0; s; ) {
      for (o++, n = s, a = 0, t = 0; t < h && (a++, (n = n.nextZ), !!n); t++);
      for (l = h; a > 0 || (l > 0 && n); )
        a !== 0 && (l === 0 || !n || s.z <= n.z)
          ? ((i = s), (s = s.nextZ), a--)
          : ((i = n), (n = n.nextZ), l--),
          r ? (r.nextZ = i) : (e = i),
          (i.prevZ = r),
          (r = i)
      s = n
    }
    ;(r.nextZ = null), (h *= 2)
  } while (o > 1)
  return e
}
function qo(e, t, s, n, i) {
  return (
    (e = ((e - s) * i) | 0),
    (t = ((t - n) * i) | 0),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    e | (t << 1)
  )
}
function Bb(e) {
  var t = e,
    s = e
  do (t.x < s.x || (t.x === s.x && t.y < s.y)) && (s = t), (t = t.next)
  while (t !== e)
  return s
}
function ln(e, t, s, n, i, r, o, a) {
  return (
    (i - o) * (t - a) >= (e - o) * (r - a) &&
    (e - o) * (n - a) >= (s - o) * (t - a) &&
    (s - o) * (r - a) >= (i - o) * (n - a)
  )
}
function Ob(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !Fb(e, t) &&
    ((yi(e, t) &&
      yi(t, e) &&
      $b(e, t) &&
      (kt(e.prev, e, t.prev) || kt(e, t.prev, t))) ||
      (Fr(e, t) && kt(e.prev, e, e.next) > 0 && kt(t.prev, t, t.next) > 0))
  )
}
function kt(e, t, s) {
  return (t.y - e.y) * (s.x - t.x) - (t.x - e.x) * (s.y - t.y)
}
function Fr(e, t) {
  return e.x === t.x && e.y === t.y
}
function af(e, t, s, n) {
  var i = Hi(kt(e, t, s)),
    r = Hi(kt(e, t, n)),
    o = Hi(kt(s, n, e)),
    a = Hi(kt(s, n, t))
  return !!(
    (i !== r && o !== a) ||
    (i === 0 && Ui(e, s, t)) ||
    (r === 0 && Ui(e, n, t)) ||
    (o === 0 && Ui(s, e, n)) ||
    (a === 0 && Ui(s, t, n))
  )
}
function Ui(e, t, s) {
  return (
    t.x <= Math.max(e.x, s.x) &&
    t.x >= Math.min(e.x, s.x) &&
    t.y <= Math.max(e.y, s.y) &&
    t.y >= Math.min(e.y, s.y)
  )
}
function Hi(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0
}
function Fb(e, t) {
  var s = e
  do {
    if (
      s.i !== e.i &&
      s.next.i !== e.i &&
      s.i !== t.i &&
      s.next.i !== t.i &&
      af(s, s.next, e, t)
    )
      return !0
    s = s.next
  } while (s !== e)
  return !1
}
function yi(e, t) {
  return kt(e.prev, e, e.next) < 0
    ? kt(e, t, e.next) >= 0 && kt(e, e.prev, t) >= 0
    : kt(e, t, e.prev) < 0 || kt(e, e.next, t) < 0
}
function $b(e, t) {
  var s = e,
    n = !1,
    i = (e.x + t.x) / 2,
    r = (e.y + t.y) / 2
  do
    s.y > r != s.next.y > r &&
      s.next.y !== s.y &&
      i < ((s.next.x - s.x) * (r - s.y)) / (s.next.y - s.y) + s.x &&
      (n = !n),
      (s = s.next)
  while (s !== e)
  return n
}
function lf(e, t) {
  var s = new Zo(e.i, e.x, e.y),
    n = new Zo(t.i, t.x, t.y),
    i = e.next,
    r = t.prev
  return (
    (e.next = t),
    (t.prev = e),
    (s.next = i),
    (i.prev = s),
    (n.next = s),
    (s.prev = n),
    (r.next = n),
    (n.prev = r),
    n
  )
}
function oh(e, t, s, n) {
  var i = new Zo(e, t, s)
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  )
}
function xi(e) {
  ;(e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ)
}
function Zo(e, t, s) {
  ;(this.i = e),
    (this.x = t),
    (this.y = s),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1)
}
Or.deviation = function (e, t, s, n) {
  var i = t && t.length,
    r = i ? t[0] * s : e.length,
    o = Math.abs(Qo(e, 0, r, s))
  if (i)
    for (var a = 0, l = t.length; a < l; a++) {
      var h = t[a] * s,
        c = a < l - 1 ? t[a + 1] * s : e.length
      o -= Math.abs(Qo(e, h, c, s))
    }
  var u = 0
  for (a = 0; a < n.length; a += 3) {
    var d = n[a] * s,
      f = n[a + 1] * s,
      p = n[a + 2] * s
    u += Math.abs(
      (e[d] - e[p]) * (e[f + 1] - e[d + 1]) -
        (e[d] - e[f]) * (e[p + 1] - e[d + 1]),
    )
  }
  return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o)
}
function Qo(e, t, s, n) {
  for (var i = 0, r = t, o = s - n; r < s; r += n)
    (i += (e[o] - e[r]) * (e[r + 1] + e[o + 1])), (o = r)
  return i
}
Or.flatten = function (e) {
  for (
    var t = e[0][0].length,
      s = { vertices: [], holes: [], dimensions: t },
      n = 0,
      i = 0;
    i < e.length;
    i++
  ) {
    for (var r = 0; r < e[i].length; r++)
      for (var o = 0; o < t; o++) s.vertices.push(e[i][r][o])
    i > 0 && ((n += e[i - 1].length), s.holes.push(n))
  }
  return s
}
var Nb = Ka.exports
const Db = Ha(Nb)
var cf = ((e) => (
  (e[(e.NONE = 0)] = 'NONE'),
  (e[(e.COLOR = 16384)] = 'COLOR'),
  (e[(e.STENCIL = 1024)] = 'STENCIL'),
  (e[(e.DEPTH = 256)] = 'DEPTH'),
  (e[(e.COLOR_DEPTH = 16640)] = 'COLOR_DEPTH'),
  (e[(e.COLOR_STENCIL = 17408)] = 'COLOR_STENCIL'),
  (e[(e.DEPTH_STENCIL = 1280)] = 'DEPTH_STENCIL'),
  (e[(e.ALL = 17664)] = 'ALL'),
  e
))(cf || {})
class zb {
  constructor(t) {
    ;(this.items = []), (this._name = t)
  }
  emit(t, s, n, i, r, o, a, l) {
    const { name: h, items: c } = this
    for (let u = 0, d = c.length; u < d; u++) c[u][h](t, s, n, i, r, o, a, l)
    return this
  }
  add(t) {
    return t[this._name] && (this.remove(t), this.items.push(t)), this
  }
  remove(t) {
    const s = this.items.indexOf(t)
    return s !== -1 && this.items.splice(s, 1), this
  }
  contains(t) {
    return this.items.indexOf(t) !== -1
  }
  removeAll() {
    return (this.items.length = 0), this
  }
  destroy() {
    this.removeAll(), (this.items = null), (this._name = null)
  }
  get empty() {
    return this.items.length === 0
  }
  get name() {
    return this._name
  }
}
const Vb = [
    'init',
    'destroy',
    'contextChange',
    'resolutionChange',
    'reset',
    'renderEnd',
    'renderStart',
    'render',
    'update',
    'postrender',
    'prerender',
  ],
  hf = class uf extends ss {
    constructor(t) {
      super(),
        (this.runners = Object.create(null)),
        (this.renderPipes = Object.create(null)),
        (this._initOptions = {}),
        (this._systemsHash = Object.create(null)),
        (this.type = t.type),
        (this.name = t.name)
      const s = [...Vb, ...(t.runners ?? [])]
      this._addRunners(...s),
        this._addSystems(t.systems),
        this._addPipes(t.renderPipes, t.renderPipeAdaptors),
        this._unsafeEvalCheck()
    }
    async init(t = {}) {
      for (const s in this._systemsHash)
        t = { ...this._systemsHash[s].constructor.defaultOptions, ...t }
      ;(t = { ...uf.defaultOptions, ...t }),
        (this._roundPixels = t.roundPixels ? 1 : 0)
      for (let s = 0; s < this.runners.init.items.length; s++)
        await this.runners.init.items[s].init(t)
      this._initOptions = t
    }
    render(t, s) {
      let n = t
      if (
        (n instanceof Yt &&
          ((n = { container: n }),
          s &&
            (_e(
              ge,
              'passing a second argument is deprecated, please use render options instead',
            ),
            (n.target = s.renderTexture))),
        n.target || (n.target = this.view.renderTarget),
        n.target === this.view.renderTarget &&
          ((this._lastObjectRendered = n.container),
          (n.clearColor = this.background.colorRgba)),
        n.clearColor)
      ) {
        const i = Array.isArray(n.clearColor) && n.clearColor.length === 4
        n.clearColor = i
          ? n.clearColor
          : le.shared.setValue(n.clearColor).toArray()
      }
      n.transform ||
        (n.container.updateLocalTransform(),
        (n.transform = n.container.localTransform)),
        this.runners.prerender.emit(n),
        this.runners.renderStart.emit(n),
        this.runners.render.emit(n),
        this.runners.renderEnd.emit(n),
        this.runners.postrender.emit(n)
    }
    resize(t, s, n) {
      this.view.resize(t, s, n),
        this.emit('resize', this.view.screen.width, this.view.screen.height)
    }
    clear(t = {}) {
      const s = this
      t.target || (t.target = s.renderTarget.renderTarget),
        t.clearColor || (t.clearColor = this.background.colorRgba),
        t.clear ?? (t.clear = cf.ALL)
      const { clear: n, clearColor: i, target: r } = t
      le.shared.setValue(i ?? this.background.colorRgba),
        s.renderTarget.clear(r, n, le.shared.toArray())
    }
    get resolution() {
      return this.view.resolution
    }
    set resolution(t) {
      ;(this.view.resolution = t), this.runners.resolutionChange.emit(t)
    }
    get width() {
      return this.view.texture.frame.width
    }
    get height() {
      return this.view.texture.frame.height
    }
    get canvas() {
      return this.view.canvas
    }
    get lastObjectRendered() {
      return this._lastObjectRendered
    }
    get renderingToScreen() {
      return this.renderTarget.renderingToScreen
    }
    get screen() {
      return this.view.screen
    }
    _addRunners(...t) {
      t.forEach((s) => {
        this.runners[s] = new zb(s)
      })
    }
    _addSystems(t) {
      let s
      for (s in t) {
        const n = t[s]
        this._addSystem(n.value, n.name)
      }
    }
    _addSystem(t, s) {
      const n = new t(this)
      if (this[s]) throw new Error(`Whoops! The name "${s}" is already in use`)
      ;(this[s] = n), (this._systemsHash[s] = n)
      for (const i in this.runners) this.runners[i].add(n)
      return this
    }
    _addPipes(t, s) {
      const n = s.reduce((i, r) => ((i[r.name] = r.value), i), {})
      t.forEach((i) => {
        const r = i.value,
          o = i.name,
          a = n[o]
        this.renderPipes[o] = new r(this, a ? new a() : null)
      })
    }
    destroy(t = !1) {
      this.runners.destroy.items.reverse(),
        this.runners.destroy.emit(t),
        Object.values(this.runners).forEach((s) => {
          s.destroy()
        }),
        (this._systemsHash = null),
        (this.renderPipes = null)
    }
    generateTexture(t) {
      return this.textureGenerator.generateTexture(t)
    }
    get roundPixels() {
      return !!this._roundPixels
    }
    _unsafeEvalCheck() {
      if (!wb())
        throw new Error(
          'Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.',
        )
    }
  }
hf.defaultOptions = {
  resolution: 1,
  failIfMajorPerformanceCaveat: !1,
  roundPixels: !1,
}
let df = hf,
  Gi
function Ub(e) {
  return (
    Gi !== void 0 ||
      (Gi = (() => {
        var s
        const t = {
          stencil: !0,
          failIfMajorPerformanceCaveat:
            e ?? df.defaultOptions.failIfMajorPerformanceCaveat,
        }
        try {
          if (!jt.get().getWebGLRenderingContext()) return !1
          let i = jt.get().createCanvas().getContext('webgl', t)
          const r = !!(
            (s = i == null ? void 0 : i.getContextAttributes()) != null &&
            s.stencil
          )
          if (i) {
            const o = i.getExtension('WEBGL_lose_context')
            o && o.loseContext()
          }
          return (i = null), r
        } catch {
          return !1
        }
      })()),
    Gi
  )
}
let Wi
async function Hb(e = {}) {
  return (
    Wi !== void 0 ||
      (Wi = await (async () => {
        if (!jt.get().getNavigator().gpu) return !1
        try {
          return (
            await (await navigator.gpu.requestAdapter(e)).requestDevice(), !0
          )
        } catch {
          return !1
        }
      })()),
    Wi
  )
}
const ah = ['webgl', 'webgpu', 'canvas']
async function Gb(e) {
  let t = []
  e.preference
    ? (t.push(e.preference),
      ah.forEach((r) => {
        r !== e.preference && t.push(r)
      }))
    : (t = ah.slice())
  let s
  await vb(e.manageImports ?? !0)
  let n = {}
  for (let r = 0; r < t.length; r++) {
    const o = t[r]
    if (o === 'webgpu' && (await Hb())) {
      const { WebGPURenderer: a } = await ys(
        () => import('./WebGPURenderer-e2c59192.js'),
        [
          './WebGPURenderer-e2c59192.js',
          './colorToUniform-f839a808.js',
          './SharedSystems-b5f35142.js',
          './CanvasPool-3a305dd3.js',
        ],
        import.meta.url,
      )
      ;(s = a), (n = { ...e, ...e.webgpu })
      break
    } else if (
      o === 'webgl' &&
      Ub(
        e.failIfMajorPerformanceCaveat ??
          df.defaultOptions.failIfMajorPerformanceCaveat,
      )
    ) {
      const { WebGLRenderer: a } = await ys(
        () => import('./WebGLRenderer-01ad1f94.js'),
        [
          './WebGLRenderer-01ad1f94.js',
          './colorToUniform-f839a808.js',
          './batchSamplersUniformGroup-913fcf01.js',
          './SharedSystems-b5f35142.js',
        ],
        import.meta.url,
      )
      ;(s = a), (n = { ...e, ...e.webgl })
      break
    } else if (o === 'canvas')
      throw ((n = { ...e }), new Error('CanvasRenderer is not yet implemented'))
  }
  if ((delete n.webgpu, delete n.webgl, !s))
    throw new Error('No available renderer for the current environment')
  const i = new s()
  return await i.init(n), i
}
const ff = class Jo {
  constructor(...t) {
    ;(this.stage = new Yt()),
      t[0] !== void 0 &&
        _e(
          ge,
          'Application constructor options are deprecated, please use Application.init() instead.',
        )
  }
  async init(t) {
    ;(t = { ...t }),
      (this.renderer = await Gb(t)),
      Jo._plugins.forEach((s) => {
        s.init.call(this, t)
      })
  }
  render() {
    this.renderer.render({ container: this.stage })
  }
  get canvas() {
    return this.renderer.canvas
  }
  get view() {
    return (
      _e(
        ge,
        'Application.view is deprecated, please use Application.canvas instead.',
      ),
      this.renderer.canvas
    )
  }
  get screen() {
    return this.renderer.screen
  }
  destroy(t = !1, s = !1) {
    const n = Jo._plugins.slice(0)
    n.reverse(),
      n.forEach((i) => {
        i.destroy.call(this)
      }),
      this.stage.destroy(s),
      (this.stage = null),
      this.renderer.destroy(t),
      (this.renderer = null)
  }
}
ff._plugins = []
let pf = ff
Pe.handleByList(ot.Application, pf._plugins)
class Wb {
  constructor(t, s = !1) {
    ;(this._loader = t),
      (this._assetList = []),
      (this._isLoading = !1),
      (this._maxConcurrent = 1),
      (this.verbose = s)
  }
  add(t) {
    t.forEach((s) => {
      this._assetList.push(s)
    }),
      this.verbose &&
        console.log('[BackgroundLoader] assets: ', this._assetList),
      this._isActive && !this._isLoading && this._next()
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0
      const t = [],
        s = Math.min(this._assetList.length, this._maxConcurrent)
      for (let n = 0; n < s; n++) t.push(this._assetList.pop())
      await this._loader.load(t), (this._isLoading = !1), this._next()
    }
  }
  get active() {
    return this._isActive
  }
  set active(t) {
    this._isActive !== t &&
      ((this._isActive = t), t && !this._isLoading && this._next())
  }
}
const jb = {
  extension: ot.CacheParser,
  test: (e) => Array.isArray(e) && e.every((t) => t instanceof Et),
  getCacheableAssets: (e, t) => {
    const s = {}
    return (
      e.forEach((n) => {
        t.forEach((i, r) => {
          s[n + (r === 0 ? '' : r + 1)] = i
        })
      }),
      s
    )
  },
}
async function mf(e) {
  if ('Image' in globalThis)
    return new Promise((t) => {
      const s = new Image()
      ;(s.onload = () => {
        t(!0)
      }),
        (s.onerror = () => {
          t(!1)
        }),
        (s.src = e)
    })
  if ('createImageBitmap' in globalThis && 'fetch' in globalThis) {
    try {
      const t = await (await fetch(e)).blob()
      await createImageBitmap(t)
    } catch {
      return !1
    }
    return !0
  }
  return !1
}
const Yb = {
    extension: { type: ot.DetectionParser, priority: 1 },
    test: async () =>
      mf(
        'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
      ),
    add: async (e) => [...e, 'avif'],
    remove: async (e) => e.filter((t) => t !== 'avif'),
  },
  lh = ['png', 'jpg', 'jpeg'],
  Xb = {
    extension: { type: ot.DetectionParser, priority: -1 },
    test: () => Promise.resolve(!0),
    add: async (e) => [...e, ...lh],
    remove: async (e) => e.filter((t) => !lh.includes(t)),
  },
  Kb =
    'WorkerGlobalScope' in globalThis &&
    globalThis instanceof globalThis.WorkerGlobalScope
function qa(e) {
  return Kb ? !1 : document.createElement('video').canPlayType(e) !== ''
}
const qb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () => qa('video/mp4'),
    add: async (e) => [...e, 'mp4', 'm4v'],
    remove: async (e) => e.filter((t) => t !== 'mp4' && t !== 'm4v'),
  },
  Zb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () => qa('video/ogg'),
    add: async (e) => [...e, 'ogv'],
    remove: async (e) => e.filter((t) => t !== 'ogv'),
  },
  Qb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () => qa('video/webm'),
    add: async (e) => [...e, 'webm'],
    remove: async (e) => e.filter((t) => t !== 'webm'),
  },
  Jb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () =>
      mf(
        'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
      ),
    add: async (e) => [...e, 'webp'],
    remove: async (e) => e.filter((t) => t !== 'webp'),
  }
class tv {
  constructor() {
    ;(this._parsers = []),
      (this._parsersValidated = !1),
      (this.parsers = new Proxy(this._parsers, {
        set: (t, s, n) => ((this._parsersValidated = !1), (t[s] = n), !0),
      })),
      (this.promiseCache = {})
  }
  reset() {
    ;(this._parsersValidated = !1), (this.promiseCache = {})
  }
  _getLoadPromiseAndParser(t, s) {
    const n = { promise: null, parser: null }
    return (
      (n.promise = (async () => {
        var o, a
        let i = null,
          r = null
        if (
          (s.loadParser &&
            ((r = this._parserHash[s.loadParser]),
            r ||
              Wt(
                `[Assets] specified load parser "${s.loadParser}" not found while loading ${t}`,
              )),
          !r)
        ) {
          for (let l = 0; l < this.parsers.length; l++) {
            const h = this.parsers[l]
            if (h.load && (o = h.test) != null && o.call(h, t, s, this)) {
              r = h
              break
            }
          }
          if (!r)
            return (
              Wt(
                `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`,
              ),
              null
            )
        }
        ;(i = await r.load(t, s, this)), (n.parser = r)
        for (let l = 0; l < this.parsers.length; l++) {
          const h = this.parsers[l]
          h.parse &&
            h.parse &&
            (await ((a = h.testParse) == null
              ? void 0
              : a.call(h, i, s, this))) &&
            ((i = (await h.parse(i, s, this)) || i), (n.parser = h))
        }
        return i
      })()),
      n
    )
  }
  async load(t, s) {
    this._parsersValidated || this._validateParsers()
    let n = 0
    const i = {},
      r = dr(t),
      o = ke(t, (h) => ({ alias: [h], src: h })),
      a = o.length,
      l = o.map(async (h) => {
        const c = Ye.toAbsolute(h.src)
        if (!i[h.src])
          try {
            this.promiseCache[c] ||
              (this.promiseCache[c] = this._getLoadPromiseAndParser(c, h)),
              (i[h.src] = await this.promiseCache[c].promise),
              s && s(++n / a)
          } catch (u) {
            throw (
              (delete this.promiseCache[c],
              delete i[h.src],
              new Error(`[Loader.load] Failed to load ${c}.
${u}`))
            )
          }
      })
    return await Promise.all(l), r ? i[o[0].src] : i
  }
  async unload(t) {
    const n = ke(t, (i) => ({ alias: [i], src: i })).map(async (i) => {
      var a, l
      const r = Ye.toAbsolute(i.src),
        o = this.promiseCache[r]
      if (o) {
        const h = await o.promise
        delete this.promiseCache[r],
          await ((l = (a = o.parser) == null ? void 0 : a.unload) == null
            ? void 0
            : l.call(a, h, i, this))
      }
    })
    await Promise.all(n)
  }
  _validateParsers() {
    ;(this._parsersValidated = !0),
      (this._parserHash = this._parsers
        .filter((t) => t.name)
        .reduce(
          (t, s) => (
            s.name
              ? t[s.name] && Wt(`[Assets] loadParser name conflict "${s.name}"`)
              : Wt('[Assets] loadParser should have a name'),
            { ...t, [s.name]: s }
          ),
          {},
        ))
  }
}
function Ln(e, t) {
  if (Array.isArray(t)) {
    for (const s of t) if (e.startsWith(`data:${s}`)) return !0
    return !1
  }
  return e.startsWith(`data:${t}`)
}
function Bn(e, t) {
  const s = e.split('?')[0],
    n = Ye.extname(s).toLowerCase()
  return Array.isArray(t) ? t.includes(n) : n === t
}
const ev = '.json',
  sv = 'application/json',
  nv = {
    extension: { type: ot.LoadParser, priority: tn.Low },
    name: 'loadJson',
    test(e) {
      return Ln(e, sv) || Bn(e, ev)
    },
    async load(e) {
      return await (await jt.get().fetch(e)).json()
    },
  },
  iv = '.txt',
  rv = 'text/plain',
  ov = {
    name: 'loadTxt',
    extension: { type: ot.LoadParser, priority: tn.Low },
    test(e) {
      return Ln(e, rv) || Bn(e, iv)
    },
    async load(e) {
      return await (await jt.get().fetch(e)).text()
    },
  },
  av = [
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  lv = ['.ttf', '.otf', '.woff', '.woff2'],
  cv = ['font/ttf', 'font/otf', 'font/woff', 'font/woff2'],
  hv = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i
function uv(e) {
  const t = Ye.extname(e),
    i = Ye.basename(e, t)
      .replace(/(-|_)/g, ' ')
      .toLowerCase()
      .split(' ')
      .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
  let r = i.length > 0
  for (const a of i)
    if (!a.match(hv)) {
      r = !1
      break
    }
  let o = i.join(' ')
  return r || (o = `"${o.replace(/[\\"]/g, '\\$&')}"`), o
}
const dv = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/
function fv(e) {
  return dv.test(e) ? e : encodeURI(e)
}
const pv = {
  extension: { type: ot.LoadParser, priority: tn.Low },
  name: 'loadWebFont',
  test(e) {
    return Ln(e, cv) || Bn(e, lv)
  },
  async load(e, t) {
    var n, i, r
    const s = jt.get().getFontFaceSet()
    if (s) {
      const o = [],
        a = ((n = t.data) == null ? void 0 : n.family) ?? uv(e),
        l = ((r = (i = t.data) == null ? void 0 : i.weights) == null
          ? void 0
          : r.filter((c) => av.includes(c))) ?? ['normal'],
        h = t.data ?? {}
      for (let c = 0; c < l.length; c++) {
        const u = l[c],
          d = new FontFace(a, `url(${fv(e)})`, { ...h, weight: u })
        await d.load(), s.add(d), o.push(d)
      }
      return (
        se.set(`${a}-and-url`, { url: e, fontFaces: o }),
        o.length === 1 ? o[0] : o
      )
    }
    return (
      Wt('[loadWebFont] FontFace API is not supported. Skipping loading font'),
      null
    )
  },
  unload(e) {
    ;(Array.isArray(e) ? e : [e]).forEach((t) => {
      se.remove(t.family), jt.get().getFontFaceSet().delete(t)
    })
  },
}
var mv = _v,
  fo = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
  gv = /([astvzqmhlc])([^astvzqmhlc]*)/gi
function _v(e) {
  var t = []
  return (
    e.replace(gv, function (s, n, i) {
      var r = n.toLowerCase()
      for (
        i = xv(i),
          r == 'm' &&
            i.length > 2 &&
            (t.push([n].concat(i.splice(0, 2))),
            (r = 'l'),
            (n = n == 'm' ? 'l' : 'L'));
        ;

      ) {
        if (i.length == fo[r]) return i.unshift(n), t.push(i)
        if (i.length < fo[r]) throw new Error('malformed path data')
        t.push([n].concat(i.splice(0, fo[r])))
      }
    }),
    t
  )
}
var yv = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi
function xv(e) {
  var t = e.match(yv)
  return t ? t.map(Number) : []
}
const bv = Ha(mv)
function vv(e, t) {
  const s = bv(e),
    n = []
  let i = null,
    r = 0,
    o = 0
  for (let a = 0; a < s.length; a++) {
    const l = s[a],
      h = l[0],
      c = l
    switch (h) {
      case 'M':
        ;(r = c[1]), (o = c[2]), t.moveTo(r, o)
        break
      case 'm':
        ;(r += c[1]), (o += c[2]), t.moveTo(r, o)
        break
      case 'H':
        ;(r = c[1]), t.lineTo(r, o)
        break
      case 'h':
        ;(r += c[1]), t.lineTo(r, o)
        break
      case 'V':
        ;(o = c[1]), t.lineTo(r, o)
        break
      case 'v':
        ;(o += c[1]), t.lineTo(r, o)
        break
      case 'L':
        ;(r = c[1]), (o = c[2]), t.lineTo(r, o)
        break
      case 'l':
        ;(r += c[1]), (o += c[2]), t.lineTo(r, o)
        break
      case 'C':
        ;(r = c[5]), (o = c[6]), t.bezierCurveTo(c[1], c[2], c[3], c[4], r, o)
        break
      case 'c':
        t.bezierCurveTo(
          r + c[1],
          o + c[2],
          r + c[3],
          o + c[4],
          r + c[5],
          o + c[6],
        ),
          (r += c[5]),
          (o += c[6])
        break
      case 'S':
        ;(r = c[3]), (o = c[4]), t.bezierCurveToShort(c[1], c[2], r, o)
        break
      case 's':
        t.bezierCurveToShort(r + c[1], o + c[2], r + c[3], o + c[4]),
          (r += c[3]),
          (o += c[4])
        break
      case 'Q':
        ;(r = c[3]), (o = c[4]), t.quadraticCurveTo(c[1], c[2], r, o)
        break
      case 'q':
        t.quadraticCurveTo(r + c[1], o + c[2], r + c[3], o + c[4]),
          (r += c[3]),
          (o += c[4])
        break
      case 'T':
        ;(r = c[1]), (o = c[2]), t.quadraticCurveToShort(r, o)
        break
      case 't':
        ;(r += c[1]), (o += c[2]), t.quadraticCurveToShort(r, o)
        break
      case 'A':
        ;(r = c[6]), (o = c[7]), t.arcToSvg(c[1], c[2], c[3], c[4], c[5], r, o)
        break
      case 'a':
        ;(r += c[6]),
          (o += c[7]),
          t.arcToSvg(c[1], c[2], c[3], c[4], c[5], r, o)
        break
      case 'Z':
      case 'z':
        t.closePath(),
          n.length > 0 &&
            ((i = n.pop()),
            i ? ((r = i.startX), (o = i.startY)) : ((r = 0), (o = 0))),
          (i = null)
        break
      default:
        Wt(`Unknown SVG path command: ${h}`)
    }
    h !== 'Z' &&
      h !== 'z' &&
      i === null &&
      ((i = { startX: r, startY: o }), n.push(i))
  }
  return t
}
class Za {
  constructor(t = 0, s = 0, n = 0) {
    ;(this.type = 'circle'), (this.x = t), (this.y = s), (this.radius = n)
  }
  clone() {
    return new Za(this.x, this.y, this.radius)
  }
  contains(t, s) {
    if (this.radius <= 0) return !1
    const n = this.radius * this.radius
    let i = this.x - t,
      r = this.y - s
    return (i *= i), (r *= r), i + r <= n
  }
  strokeContains(t, s, n) {
    if (this.radius === 0) return !1
    const i = this.x - t,
      r = this.y - s,
      o = this.radius,
      a = n / 2,
      l = Math.sqrt(i * i + r * r)
    return l < o + a && l > o - a
  }
  getBounds(t) {
    return (
      (t = t || new Ht()),
      (t.x = this.x - this.radius),
      (t.y = this.y - this.radius),
      (t.width = this.radius * 2),
      (t.height = this.radius * 2),
      t
    )
  }
  copyFrom(t) {
    return (this.x = t.x), (this.y = t.y), (this.radius = t.radius), this
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
  }
}
class Qa {
  constructor(t = 0, s = 0, n = 0, i = 0) {
    ;(this.type = 'ellipse'),
      (this.x = t),
      (this.y = s),
      (this.halfWidth = n),
      (this.halfHeight = i)
  }
  clone() {
    return new Qa(this.x, this.y, this.halfWidth, this.halfHeight)
  }
  contains(t, s) {
    if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1
    let n = (t - this.x) / this.halfWidth,
      i = (s - this.y) / this.halfHeight
    return (n *= n), (i *= i), n + i <= 1
  }
  strokeContains(t, s, n) {
    const { halfWidth: i, halfHeight: r } = this
    if (i <= 0 || r <= 0) return !1
    const o = n / 2,
      a = i - o,
      l = r - o,
      h = i + o,
      c = r + o,
      u = t - this.x,
      d = s - this.y,
      f = (u * u) / (a * a) + (d * d) / (l * l),
      p = (u * u) / (h * h) + (d * d) / (c * c)
    return f > 1 && p <= 1
  }
  getBounds() {
    return new Ht(
      this.x - this.halfWidth,
      this.y - this.halfHeight,
      this.halfWidth * 2,
      this.halfHeight * 2,
    )
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.halfWidth = t.halfWidth),
      (this.halfHeight = t.halfHeight),
      this
    )
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`
  }
}
function wv(e, t, s, n, i, r) {
  const o = e - s,
    a = t - n,
    l = i - s,
    h = r - n,
    c = o * l + a * h,
    u = l * l + h * h
  let d = -1
  u !== 0 && (d = c / u)
  let f, p
  d < 0
    ? ((f = s), (p = n))
    : d > 1
    ? ((f = i), (p = r))
    : ((f = s + d * l), (p = n + d * h))
  const g = e - f,
    m = t - p
  return g * g + m * m
}
class oi {
  constructor(...t) {
    this.type = 'polygon'
    let s = Array.isArray(t[0]) ? t[0] : t
    if (typeof s[0] != 'number') {
      const n = []
      for (let i = 0, r = s.length; i < r; i++) n.push(s[i].x, s[i].y)
      s = n
    }
    ;(this.points = s), (this.closePath = !0)
  }
  clone() {
    const t = this.points.slice(),
      s = new oi(t)
    return (s.closePath = this.closePath), s
  }
  contains(t, s) {
    let n = !1
    const i = this.points.length / 2
    for (let r = 0, o = i - 1; r < i; o = r++) {
      const a = this.points[r * 2],
        l = this.points[r * 2 + 1],
        h = this.points[o * 2],
        c = this.points[o * 2 + 1]
      l > s != c > s && t < (h - a) * ((s - l) / (c - l)) + a && (n = !n)
    }
    return n
  }
  strokeContains(t, s, n) {
    const i = n / 2,
      r = i * i,
      { points: o } = this,
      a = o.length - (this.closePath ? 0 : 2)
    for (let l = 0; l < a; l += 2) {
      const h = o[l],
        c = o[l + 1],
        u = o[(l + 2) % o.length],
        d = o[(l + 3) % o.length]
      if (wv(t, s, h, c, u, d) <= r) return !0
    }
    return !1
  }
  getBounds(t) {
    t = t || new Ht()
    const s = this.points
    let n = 1 / 0,
      i = -1 / 0,
      r = 1 / 0,
      o = -1 / 0
    for (let a = 0, l = s.length; a < l; a += 2) {
      const h = s[a],
        c = s[a + 1]
      ;(n = h < n ? h : n),
        (i = h > i ? h : i),
        (r = c < r ? c : r),
        (o = c > o ? c : o)
    }
    return (t.x = n), (t.width = i - n), (t.y = r), (t.height = o - r), t
  }
  copyFrom(t) {
    return (
      (this.points = t.points.slice()), (this.closePath = t.closePath), this
    )
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  toString() {
    return `[pixi.js/math:PolygoncloseStroke=${
      this.closePath
    }points=${this.points.reduce((t, s) => `${t}, ${s}`, '')}]`
  }
  get lastX() {
    return this.points[this.points.length - 2]
  }
  get lastY() {
    return this.points[this.points.length - 1]
  }
  get x() {
    return this.points[this.points.length - 2]
  }
  get y() {
    return this.points[this.points.length - 1]
  }
}
const ji = (e, t, s, n, i, r) => {
  const o = e - s,
    a = t - n,
    l = Math.sqrt(o * o + a * a)
  return l >= i - r && l <= i + r
}
class Ja {
  constructor(t = 0, s = 0, n = 0, i = 0, r = 20) {
    ;(this.type = 'roundedRectangle'),
      (this.x = t),
      (this.y = s),
      (this.width = n),
      (this.height = i),
      (this.radius = r)
  }
  getBounds(t) {
    return (
      (t = t || new Ht()),
      (t.x = this.x),
      (t.y = this.y),
      (t.width = this.width),
      (t.height = this.height),
      t
    )
  }
  clone() {
    return new Ja(this.x, this.y, this.width, this.height, this.radius)
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.width = t.width),
      (this.height = t.height),
      this
    )
  }
  copyTo(t) {
    return t.copyFrom(this), t
  }
  contains(t, s) {
    if (this.width <= 0 || this.height <= 0) return !1
    if (
      t >= this.x &&
      t <= this.x + this.width &&
      s >= this.y &&
      s <= this.y + this.height
    ) {
      const n = Math.max(
        0,
        Math.min(this.radius, Math.min(this.width, this.height) / 2),
      )
      if (
        (s >= this.y + n && s <= this.y + this.height - n) ||
        (t >= this.x + n && t <= this.x + this.width - n)
      )
        return !0
      let i = t - (this.x + n),
        r = s - (this.y + n)
      const o = n * n
      if (
        i * i + r * r <= o ||
        ((i = t - (this.x + this.width - n)), i * i + r * r <= o) ||
        ((r = s - (this.y + this.height - n)), i * i + r * r <= o) ||
        ((i = t - (this.x + n)), i * i + r * r <= o)
      )
        return !0
    }
    return !1
  }
  strokeContains(t, s, n) {
    const { x: i, y: r, width: o, height: a, radius: l } = this,
      h = n / 2,
      c = i + l,
      u = r + l,
      d = o - l * 2,
      f = a - l * 2,
      p = i + o,
      g = r + a
    return (((t >= i - h && t <= i + h) || (t >= p - h && t <= p + h)) &&
      s >= u &&
      s <= u + f) ||
      (((s >= r - h && s <= r + h) || (s >= g - h && s <= g + h)) &&
        t >= c &&
        t <= c + d)
      ? !0
      : (t < c && s < u && ji(t, s, c, u, l, h)) ||
          (t > p - l && s < u && ji(t, s, p - l, u, l, h)) ||
          (t > p - l && s > g - l && ji(t, s, p - l, g - l, l, h)) ||
          (t < c && s > g - l && ji(t, s, c, g - l, l, h))
  }
  toString() {
    return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
  }
}
var ae = ((e) => (
  (e[(e.MAP_READ = 1)] = 'MAP_READ'),
  (e[(e.MAP_WRITE = 2)] = 'MAP_WRITE'),
  (e[(e.COPY_SRC = 4)] = 'COPY_SRC'),
  (e[(e.COPY_DST = 8)] = 'COPY_DST'),
  (e[(e.INDEX = 16)] = 'INDEX'),
  (e[(e.VERTEX = 32)] = 'VERTEX'),
  (e[(e.UNIFORM = 64)] = 'UNIFORM'),
  (e[(e.STORAGE = 128)] = 'STORAGE'),
  (e[(e.INDIRECT = 256)] = 'INDIRECT'),
  (e[(e.QUERY_RESOLVE = 512)] = 'QUERY_RESOLVE'),
  (e[(e.STATIC = 1024)] = 'STATIC'),
  e
))(ae || {})
class bi extends ss {
  constructor(t) {
    let { data: s, size: n } = t
    const { usage: i, label: r, shrinkToFit: o } = t
    super(),
      (this.uid = Gt('buffer')),
      (this._resourceType = 'buffer'),
      (this._resourceId = Gt('resource')),
      (this._touched = 0),
      (this._updateID = 1),
      (this.shrinkToFit = !0),
      (this.destroyed = !1),
      s instanceof Array && (s = new Float32Array(s)),
      (this._data = s),
      (n = n ?? (s == null ? void 0 : s.byteLength))
    const a = !!s
    ;(this.descriptor = { size: n, usage: i, mappedAtCreation: a, label: r }),
      (this.shrinkToFit = o ?? !0)
  }
  get data() {
    return this._data
  }
  set data(t) {
    this.setDataWithSize(t, t.length, !0)
  }
  get static() {
    return !!(this.descriptor.usage & ae.STATIC)
  }
  set static(t) {
    t
      ? (this.descriptor.usage |= ae.STATIC)
      : (this.descriptor.usage &= ~ae.STATIC)
  }
  setDataWithSize(t, s, n) {
    if (
      (this._updateID++,
      (this._updateSize = s * t.BYTES_PER_ELEMENT),
      this._data === t)
    ) {
      n && this.emit('update', this)
      return
    }
    const i = this._data
    if (((this._data = t), i.length !== t.length)) {
      !this.shrinkToFit && t.byteLength < i.byteLength
        ? n && this.emit('update', this)
        : ((this.descriptor.size = t.byteLength),
          (this._resourceId = Gt('resource')),
          this.emit('change', this))
      return
    }
    n && this.emit('update', this)
  }
  update(t) {
    ;(this._updateSize = t ?? this._updateSize),
      this._updateID++,
      this.emit('update', this)
  }
  destroy() {
    ;(this.destroyed = !0),
      this.emit('destroy', this),
      this.emit('change', this),
      (this._data = null),
      (this.descriptor = null),
      this.removeAllListeners()
  }
}
function gf(e, t) {
  if (!(e instanceof bi)) {
    let s = t ? ae.INDEX : ae.VERTEX
    e instanceof Array &&
      (t
        ? ((e = new Uint32Array(e)), (s = ae.INDEX | ae.COPY_DST))
        : ((e = new Float32Array(e)), (s = ae.VERTEX | ae.COPY_DST))),
      (e = new bi({
        data: e,
        label: t ? 'index-mesh-buffer' : 'vertex-mesh-buffer',
        usage: s,
      }))
  }
  return e
}
function Av(e, t, s) {
  const n = e.getAttribute(t)
  if (!n) return (s.minX = 0), (s.minY = 0), (s.maxX = 0), (s.maxY = 0), s
  const i = n.buffer.data
  let r = 1 / 0,
    o = 1 / 0,
    a = -1 / 0,
    l = -1 / 0
  const h = i.BYTES_PER_ELEMENT,
    c = (n.offset || 0) / h,
    u = (n.stride || 2 * 4) / h
  for (let d = c; d < i.length; d += u) {
    const f = i[d],
      p = i[d + 1]
    f > a && (a = f), p > l && (l = p), f < r && (r = f), p < o && (o = p)
  }
  return (s.minX = r), (s.minY = o), (s.maxX = a), (s.maxY = l), s
}
function Sv(e) {
  return (
    (e instanceof bi || Array.isArray(e) || e.BYTES_PER_ELEMENT) &&
      (e = { buffer: e }),
    (e.buffer = gf(e.buffer, !1)),
    e
  )
}
class Cv extends ss {
  constructor(t) {
    const { attributes: s, indexBuffer: n, topology: i } = t
    super(),
      (this.uid = Gt('geometry')),
      (this._layoutKey = 0),
      (this.instanceCount = 1),
      (this._bounds = new je()),
      (this._boundsDirty = !0),
      (this.attributes = s),
      (this.buffers = []),
      (this.instanceCount = t.instanceCount || 1)
    for (const r in s) {
      const o = (s[r] = Sv(s[r]))
      this.buffers.indexOf(o.buffer) === -1 &&
        (this.buffers.push(o.buffer),
        o.buffer.on('update', this.onBufferUpdate, this),
        o.buffer.on('change', this.onBufferUpdate, this))
    }
    n && ((this.indexBuffer = gf(n, !0)), this.buffers.push(this.indexBuffer)),
      (this.topology = i || 'triangle-list')
  }
  onBufferUpdate() {
    ;(this._boundsDirty = !0), this.emit('update', this)
  }
  getAttribute(t) {
    return this.attributes[t]
  }
  getIndex() {
    return this.indexBuffer
  }
  getBuffer(t) {
    return this.getAttribute(t).buffer
  }
  getSize() {
    for (const t in this.attributes) {
      const s = this.attributes[t]
      return s.buffer.data.length / (s.stride / 4 || s.size)
    }
    return 0
  }
  get bounds() {
    return this._boundsDirty
      ? ((this._boundsDirty = !1), Av(this, 'aPosition', this._bounds))
      : this._bounds
  }
  destroy(t = !1) {
    this.emit('destroy', this),
      this.removeAllListeners(),
      t && this.buffers.forEach((s) => s.destroy()),
      (this.attributes = null),
      (this.buffers = null),
      (this.indexBuffer = null),
      (this._bounds = null)
  }
}
const Ev = new Float32Array(1),
  Pv = new Uint32Array(1)
class Tv extends Cv {
  constructor() {
    const s = new bi({
        data: Ev,
        label: 'attribute-batch-buffer',
        usage: ae.VERTEX | ae.COPY_DST,
        shrinkToFit: !1,
      }),
      n = new bi({
        data: Pv,
        label: 'index-batch-buffer',
        usage: ae.INDEX | ae.COPY_DST,
        shrinkToFit: !1,
      }),
      i = 6 * 4
    super({
      attributes: {
        aPosition: {
          buffer: s,
          format: 'float32x2',
          stride: i,
          offset: 0,
          location: 1,
        },
        aUV: {
          buffer: s,
          format: 'float32x2',
          stride: i,
          offset: 2 * 4,
          location: 3,
        },
        aColor: {
          buffer: s,
          format: 'unorm8x4',
          stride: i,
          offset: 4 * 4,
          location: 0,
        },
        aTextureIdAndRound: {
          buffer: s,
          format: 'uint16x2',
          stride: i,
          offset: 5 * 4,
          location: 2,
        },
      },
      indexBuffer: n,
    })
  }
}
const _f = 16,
  yf = {}
function Mv(e, t) {
  let s = 0
  for (let n = 0; n < t; n++) s = (s * 31 + e[n].uid) >>> 0
  return yf[s] || Iv(e, s)
}
function Iv(e, t) {
  const s = {}
  let n = 0
  for (let r = 0; r < _f; r++) {
    const o = r < e.length ? e[r] : Et.EMPTY.source
    ;(s[n++] = o.source), (s[n++] = o.style)
  }
  const i = new bb(s)
  return (yf[t] = i), i
}
class ch {
  constructor(t) {
    typeof t == 'number'
      ? (this.rawBinaryData = new ArrayBuffer(t))
      : t instanceof Uint8Array
      ? (this.rawBinaryData = t.buffer)
      : (this.rawBinaryData = t),
      (this.uint32View = new Uint32Array(this.rawBinaryData)),
      (this.float32View = new Float32Array(this.rawBinaryData)),
      (this.size = this.rawBinaryData.byteLength)
  }
  get int8View() {
    return (
      this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
      this._int8View
    )
  }
  get uint8View() {
    return (
      this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
      this._uint8View
    )
  }
  get int16View() {
    return (
      this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
      this._int16View
    )
  }
  get int32View() {
    return (
      this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
      this._int32View
    )
  }
  get float64View() {
    return (
      this._float64Array ||
        (this._float64Array = new Float64Array(this.rawBinaryData)),
      this._float64Array
    )
  }
  get bigUint64View() {
    return (
      this._bigUint64Array ||
        (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)),
      this._bigUint64Array
    )
  }
  view(t) {
    return this[`${t}View`]
  }
  destroy() {
    ;(this.rawBinaryData = null),
      (this._int8View = null),
      (this._uint8View = null),
      (this._int16View = null),
      (this.uint16View = null),
      (this._int32View = null),
      (this.uint32View = null),
      (this.float32View = null)
  }
  static sizeOf(t) {
    switch (t) {
      case 'int8':
      case 'uint8':
        return 1
      case 'int16':
      case 'uint16':
        return 2
      case 'int32':
      case 'uint32':
      case 'float32':
        return 4
      default:
        throw new Error(`${t} isn't a valid view type`)
    }
  }
}
function hh(e, t) {
  const s = (e.byteLength / 8) | 0,
    n = new Float64Array(e, 0, s)
  new Float64Array(t, 0, s).set(n)
  const r = e.byteLength - s * 8
  if (r > 0) {
    const o = new Uint8Array(e, s * 8, r)
    new Uint8Array(t, s * 8, r).set(o)
  }
}
const Rv = { normal: 'normal-npm', add: 'add-npm', screen: 'screen-npm' }
var kv = ((e) => (
  (e[(e.DISABLED = 0)] = 'DISABLED'),
  (e[(e.RENDERING_MASK_ADD = 1)] = 'RENDERING_MASK_ADD'),
  (e[(e.MASK_ACTIVE = 2)] = 'MASK_ACTIVE'),
  (e[(e.RENDERING_MASK_REMOVE = 3)] = 'RENDERING_MASK_REMOVE'),
  (e[(e.NONE = 4)] = 'NONE'),
  e
))(kv || {})
function uh(e, t) {
  return (t.alphaMode === 'no-premultiply-alpha' && Rv[e]) || e
}
class dh {
  constructor() {
    ;(this.ids = Object.create(null)), (this.textures = []), (this.count = 0)
  }
  clear() {
    for (let t = 0; t < this.count; t++) {
      const s = this.textures[t]
      ;(this.textures[t] = null), (this.ids[s.uid] = null)
    }
    this.count = 0
  }
}
class fh {
  constructor() {
    ;(this.renderPipeId = 'batch'),
      (this.action = 'startBatch'),
      (this.start = 0),
      (this.size = 0),
      (this.blendMode = 'normal'),
      (this.canBundle = !0)
  }
  destroy() {
    ;(this.textures = null),
      (this.gpuBindGroup = null),
      (this.bindGroup = null),
      (this.batcher = null)
  }
}
let Wn = 0
const xf = class bf {
  constructor(t = {}) {
    ;(this.uid = Gt('batcher')),
      (this.dirty = !0),
      (this.batchIndex = 0),
      (this.batches = []),
      (this._vertexSize = 6),
      (this._elements = []),
      (this._batchPool = []),
      (this._batchPoolIndex = 0),
      (this._textureBatchPool = []),
      (this._textureBatchPoolIndex = 0),
      (t = { ...bf.defaultOptions, ...t })
    const { vertexSize: s, indexSize: n } = t
    ;(this.attributeBuffer = new ch(s * this._vertexSize * 4)),
      (this.indexBuffer = new Uint16Array(n))
  }
  begin() {
    ;(this.batchIndex = 0),
      (this.elementSize = 0),
      (this.elementStart = 0),
      (this.indexSize = 0),
      (this.attributeSize = 0),
      (this._batchPoolIndex = 0),
      (this._textureBatchPoolIndex = 0),
      (this._batchIndexStart = 0),
      (this._batchIndexSize = 0),
      (this.dirty = !0)
  }
  add(t) {
    ;(this._elements[this.elementSize++] = t),
      (t.indexStart = this.indexSize),
      (t.location = this.attributeSize),
      (t.batcher = this),
      (this.indexSize += t.indexSize),
      (this.attributeSize += t.vertexSize * this._vertexSize)
  }
  checkAndUpdateTexture(t, s) {
    const n = t.batch.textures.ids[s._source.uid]
    return !n && n !== 0 ? !1 : ((t.textureId = n), (t.texture = s), !0)
  }
  updateElement(t) {
    ;(this.dirty = !0),
      t.packAttributes(
        this.attributeBuffer.float32View,
        this.attributeBuffer.uint32View,
        t.location,
        t.textureId,
      )
  }
  break(t) {
    const s = this._elements
    let n = this._textureBatchPool[this._textureBatchPoolIndex++] || new dh()
    if ((n.clear(), !s[this.elementStart])) return
    const i = s[this.elementStart]
    let r = uh(i.blendMode, i.texture._source)
    this.attributeSize * 4 > this.attributeBuffer.size &&
      this._resizeAttributeBuffer(this.attributeSize * 4),
      this.indexSize > this.indexBuffer.length &&
        this._resizeIndexBuffer(this.indexSize)
    const o = this.attributeBuffer.float32View,
      a = this.attributeBuffer.uint32View,
      l = this.indexBuffer
    let h = this._batchIndexSize,
      c = this._batchIndexStart,
      u = 'startBatch',
      d = this._batchPool[this._batchPoolIndex++] || new fh()
    for (let f = this.elementStart; f < this.elementSize; ++f) {
      const p = s[f]
      s[f] = null
      const m = p.texture._source,
        b = uh(p.blendMode, m),
        y = r !== b
      if (m._batchTick === Wn && !y) {
        ;(p.textureId = m._textureBindLocation),
          (h += p.indexSize),
          p.packAttributes(o, a, p.location, p.textureId),
          p.packIndex(l, p.indexStart, p.location / this._vertexSize),
          (p.batch = d)
        continue
      }
      ;(m._batchTick = Wn),
        (n.count >= _f || y) &&
          (this._finishBatch(d, c, h - c, n, r, t, u),
          (u = 'renderBatch'),
          (c = h),
          (r = b),
          (n =
            this._textureBatchPool[this._textureBatchPoolIndex++] || new dh()),
          n.clear(),
          (d = this._batchPool[this._batchPoolIndex++] || new fh()),
          ++Wn),
        (p.textureId = m._textureBindLocation = n.count),
        (n.ids[m.uid] = n.count),
        (n.textures[n.count++] = m),
        (p.batch = d),
        (h += p.indexSize),
        p.packAttributes(o, a, p.location, p.textureId),
        p.packIndex(l, p.indexStart, p.location / this._vertexSize)
    }
    n.count > 0 && (this._finishBatch(d, c, h - c, n, r, t, u), (c = h), ++Wn),
      (this.elementStart = this.elementSize),
      (this._batchIndexStart = c),
      (this._batchIndexSize = h)
  }
  _finishBatch(t, s, n, i, r, o, a) {
    ;(t.gpuBindGroup = null),
      (t.action = a),
      (t.batcher = this),
      (t.textures = i),
      (t.blendMode = r),
      (t.start = s),
      (t.size = n),
      ++Wn,
      o.add(t)
  }
  finish(t) {
    this.break(t)
  }
  ensureAttributeBuffer(t) {
    t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4)
  }
  ensureIndexBuffer(t) {
    t <= this.indexBuffer.length || this._resizeIndexBuffer(t)
  }
  _resizeAttributeBuffer(t) {
    const s = Math.max(t, this.attributeBuffer.size * 2),
      n = new ch(s)
    hh(this.attributeBuffer.rawBinaryData, n.rawBinaryData),
      (this.attributeBuffer = n)
  }
  _resizeIndexBuffer(t) {
    const s = this.indexBuffer
    let n = Math.max(t, s.length * 1.5)
    n += n % 2
    const i = n > 65535 ? new Uint32Array(n) : new Uint16Array(n)
    if (i.BYTES_PER_ELEMENT !== s.BYTES_PER_ELEMENT)
      for (let r = 0; r < s.length; r++) i[r] = s[r]
    else hh(s.buffer, i.buffer)
    this.indexBuffer = i
  }
  destroy() {
    for (let t = 0; t < this.batches.length; t++) this.batches[t].destroy()
    this.batches = null
    for (let t = 0; t < this._elements.length; t++)
      this._elements[t].batch = null
    ;(this._elements = null),
      (this.indexBuffer = null),
      this.attributeBuffer.destroy(),
      (this.attributeBuffer = null)
  }
}
xf.defaultOptions = { vertexSize: 4, indexSize: 6 }
let Lv = xf
function Bv(e, t, s, n, i, r, o, a = null) {
  let l = 0
  ;(s *= t), (i *= r)
  const h = a.a,
    c = a.b,
    u = a.c,
    d = a.d,
    f = a.tx,
    p = a.ty
  for (; l < o; ) {
    const g = e[s],
      m = e[s + 1]
    ;(n[i] = h * g + u * m + f),
      (n[i + 1] = c * g + d * m + p),
      (i += r),
      (s += t),
      l++
  }
}
function Ov(e, t, s, n) {
  let i = 0
  for (t *= s; i < n; ) (e[t] = 0), (e[t + 1] = 0), (t += s), i++
}
function vf(e, t, s, n, i) {
  const r = t.a,
    o = t.b,
    a = t.c,
    l = t.d,
    h = t.tx,
    c = t.ty
  ;(s = s || 0), (n = n || 2), (i = i || e.length / n - s)
  let u = s * n
  for (let d = 0; d < i; d++) {
    const f = e[u],
      p = e[u + 1]
    ;(e[u] = r * f + a * p + h), (e[u + 1] = o * f + l * p + c), (u += n)
  }
}
function Fv(e, t) {
  if (e === 16777215 || !t) return t
  if (t === 16777215 || !e) return e
  const s = (e >> 16) & 255,
    n = (e >> 8) & 255,
    i = e & 255,
    r = (t >> 16) & 255,
    o = (t >> 8) & 255,
    a = t & 255,
    l = (s * r) / 255,
    h = (n * o) / 255,
    c = (i * a) / 255
  return (l << 16) + (h << 8) + c
}
class wf {
  constructor() {
    ;(this.batcher = null),
      (this.batch = null),
      (this.applyTransform = !0),
      (this.roundPixels = 0)
  }
  get blendMode() {
    return this.applyTransform ? this.renderable.groupBlendMode : 'normal'
  }
  packIndex(t, s, n) {
    const i = this.geometryData.indices
    for (let r = 0; r < this.indexSize; r++)
      t[s++] = i[r + this.indexOffset] + n - this.vertexOffset
  }
  packAttributes(t, s, n, i) {
    const r = this.geometryData,
      o = this.renderable,
      a = r.vertices,
      l = r.uvs,
      h = this.vertexOffset * 2,
      c = (this.vertexOffset + this.vertexSize) * 2,
      u = this.color,
      d = (u >> 16) | (u & 65280) | ((u & 255) << 16)
    if (this.applyTransform) {
      const f = Fv(d, o.groupColor) + ((this.alpha * o.groupAlpha * 255) << 24),
        p = o.groupTransform,
        g = (i << 16) | (this.roundPixels & 65535),
        m = p.a,
        b = p.b,
        y = p.c,
        v = p.d,
        w = p.tx,
        M = p.ty
      for (let k = h; k < c; k += 2) {
        const E = a[k],
          C = a[k + 1]
        ;(t[n] = m * E + y * C + w),
          (t[n + 1] = b * E + v * C + M),
          (t[n + 2] = l[k]),
          (t[n + 3] = l[k + 1]),
          (s[n + 4] = f),
          (s[n + 5] = g),
          (n += 6)
      }
    } else {
      const f = d + ((this.alpha * 255) << 24)
      for (let p = h; p < c; p += 2)
        (t[n] = a[p]),
          (t[n + 1] = a[p + 1]),
          (t[n + 2] = l[p]),
          (t[n + 3] = l[p + 1]),
          (s[n + 4] = f),
          (s[n + 5] = i << 16),
          (n += 6)
    }
  }
  get vertSize() {
    return this.vertexSize
  }
  copyTo(t) {
    ;(t.indexOffset = this.indexOffset),
      (t.indexSize = this.indexSize),
      (t.vertexOffset = this.vertexOffset),
      (t.vertexSize = this.vertexSize),
      (t.color = this.color),
      (t.alpha = this.alpha),
      (t.texture = this.texture),
      (t.geometryData = this.geometryData)
  }
  reset() {
    this.applyTransform = !0
  }
}
const po = {
    build(e, t) {
      let s, n, i, r, o, a
      if (e.type === 'circle') {
        const w = e
        ;(s = w.x), (n = w.y), (o = a = w.radius), (i = r = 0)
      } else if (e.type === 'ellipse') {
        const w = e
        ;(s = w.x),
          (n = w.y),
          (o = w.halfWidth),
          (a = w.halfHeight),
          (i = r = 0)
      } else {
        const w = e,
          M = w.width / 2,
          k = w.height / 2
        ;(s = w.x + M),
          (n = w.y + k),
          (o = a = Math.max(0, Math.min(w.radius, Math.min(M, k)))),
          (i = M - o),
          (r = k - a)
      }
      if (!(o >= 0 && a >= 0 && i >= 0 && r >= 0)) return t
      const l = Math.ceil(2.3 * Math.sqrt(o + a)),
        h = l * 8 + (i ? 4 : 0) + (r ? 4 : 0)
      if (h === 0) return t
      if (l === 0)
        return (
          (t[0] = t[6] = s + i),
          (t[1] = t[3] = n + r),
          (t[2] = t[4] = s - i),
          (t[5] = t[7] = n - r),
          t
        )
      let c = 0,
        u = l * 4 + (i ? 2 : 0) + 2,
        d = u,
        f = h,
        p = i + o,
        g = r,
        m = s + p,
        b = s - p,
        y = n + g
      if (((t[c++] = m), (t[c++] = y), (t[--u] = y), (t[--u] = b), r)) {
        const w = n - g
        ;(t[d++] = b), (t[d++] = w), (t[--f] = w), (t[--f] = m)
      }
      for (let w = 1; w < l; w++) {
        const M = (Math.PI / 2) * (w / l),
          k = i + Math.cos(M) * o,
          E = r + Math.sin(M) * a,
          C = s + k,
          S = s - k,
          P = n + E,
          Y = n - E
        ;(t[c++] = C),
          (t[c++] = P),
          (t[--u] = P),
          (t[--u] = S),
          (t[d++] = S),
          (t[d++] = Y),
          (t[--f] = Y),
          (t[--f] = C)
      }
      ;(p = i), (g = r + a), (m = s + p), (b = s - p), (y = n + g)
      const v = n - g
      return (
        (t[c++] = m),
        (t[c++] = y),
        (t[--f] = v),
        (t[--f] = m),
        i && ((t[c++] = b), (t[c++] = y), (t[--f] = v), (t[--f] = b)),
        t
      )
    },
    triangulate(e, t, s, n, i, r) {
      if (e.length === 0) return
      let o = 0,
        a = 0
      for (let c = 0; c < e.length; c += 2) (o += e[c]), (a += e[c + 1])
      ;(o /= e.length / 2), (a /= e.length / 2)
      let l = n
      ;(t[l * s] = o), (t[l * s + 1] = a)
      const h = l++
      for (let c = 0; c < e.length; c += 2)
        (t[l * s] = e[c]),
          (t[l * s + 1] = e[c + 1]),
          c > 0 && ((i[r++] = l), (i[r++] = h), (i[r++] = l - 1)),
          l++
      ;(i[r++] = h + 1), (i[r++] = h), (i[r++] = l - 1)
    },
  },
  $v = 1e-4,
  ph = 1e-4
function Nv(e) {
  const t = e.length
  if (t < 6) return 1
  let s = 0
  for (let n = 0, i = e[t - 2], r = e[t - 1]; n < t; n += 2) {
    const o = e[n],
      a = e[n + 1]
    ;(s += (o - i) * (a + r)), (i = o), (r = a)
  }
  return s < 0 ? -1 : 1
}
function mh(e, t, s, n, i, r, o, a) {
  const l = e - s * i,
    h = t - n * i,
    c = e + s * r,
    u = t + n * r
  let d, f
  o ? ((d = n), (f = -s)) : ((d = -n), (f = s))
  const p = l + d,
    g = h + f,
    m = c + d,
    b = u + f
  return a.push(p, g), a.push(m, b), 2
}
function Bs(e, t, s, n, i, r, o, a) {
  const l = s - e,
    h = n - t
  let c = Math.atan2(l, h),
    u = Math.atan2(i - e, r - t)
  a && c < u ? (c += Math.PI * 2) : !a && c > u && (u += Math.PI * 2)
  let d = c
  const f = u - c,
    p = Math.abs(f),
    g = Math.sqrt(l * l + h * h),
    m = (((15 * p * Math.sqrt(g)) / Math.PI) >> 0) + 1,
    b = f / m
  if (((d += b), a)) {
    o.push(e, t), o.push(s, n)
    for (let y = 1, v = d; y < m; y++, v += b)
      o.push(e, t), o.push(e + Math.sin(v) * g, t + Math.cos(v) * g)
    o.push(e, t), o.push(i, r)
  } else {
    o.push(s, n), o.push(e, t)
    for (let y = 1, v = d; y < m; y++, v += b)
      o.push(e + Math.sin(v) * g, t + Math.cos(v) * g), o.push(e, t)
    o.push(i, r), o.push(e, t)
  }
  return m * 2
}
function Dv(e, t, s, n, i, r, o, a, l) {
  const h = $v
  if (e.length === 0) return
  const c = t
  let u = c.alignment
  if (t.alignment !== 0.5) {
    let at = Nv(e)
    s && (at *= -1), (u = (u - 0.5) * at + 0.5)
  }
  const d = new qt(e[0], e[1]),
    f = new qt(e[e.length - 2], e[e.length - 1]),
    p = n,
    g = Math.abs(d.x - f.x) < h && Math.abs(d.y - f.y) < h
  if (p) {
    ;(e = e.slice()),
      g && (e.pop(), e.pop(), f.set(e[e.length - 2], e[e.length - 1]))
    const at = (d.x + f.x) * 0.5,
      Qt = (f.y + d.y) * 0.5
    e.unshift(at, Qt), e.push(at, Qt)
  }
  const m = i,
    b = e.length / 2
  let y = e.length
  const v = m.length / 2,
    w = c.width / 2,
    M = w * w,
    k = c.miterLimit * c.miterLimit
  let E = e[0],
    C = e[1],
    S = e[2],
    P = e[3],
    Y = 0,
    V = 0,
    D = -(C - P),
    G = E - S,
    ut = 0,
    X = 0,
    lt = Math.sqrt(D * D + G * G)
  ;(D /= lt), (G /= lt), (D *= w), (G *= w)
  const _t = u,
    K = (1 - _t) * 2,
    et = _t * 2
  p ||
    (c.cap === 'round'
      ? (y +=
          Bs(
            E - D * (K - et) * 0.5,
            C - G * (K - et) * 0.5,
            E - D * K,
            C - G * K,
            E + D * et,
            C + G * et,
            m,
            !0,
          ) + 2)
      : c.cap === 'square' && (y += mh(E, C, D, G, K, et, !0, m))),
    m.push(E - D * K, C - G * K),
    m.push(E + D * et, C + G * et)
  for (let at = 1; at < b - 1; ++at) {
    ;(E = e[(at - 1) * 2]),
      (C = e[(at - 1) * 2 + 1]),
      (S = e[at * 2]),
      (P = e[at * 2 + 1]),
      (Y = e[(at + 1) * 2]),
      (V = e[(at + 1) * 2 + 1]),
      (D = -(C - P)),
      (G = E - S),
      (lt = Math.sqrt(D * D + G * G)),
      (D /= lt),
      (G /= lt),
      (D *= w),
      (G *= w),
      (ut = -(P - V)),
      (X = S - Y),
      (lt = Math.sqrt(ut * ut + X * X)),
      (ut /= lt),
      (X /= lt),
      (ut *= w),
      (X *= w)
    const Qt = S - E,
      be = C - P,
      De = S - Y,
      Lt = V - P,
      R = Qt * De + be * Lt,
      U = be * De - Lt * Qt,
      N = U < 0
    if (Math.abs(U) < 0.001 * Math.abs(R)) {
      m.push(S - D * K, P - G * K),
        m.push(S + D * et, P + G * et),
        R >= 0 &&
          (c.join === 'round'
            ? (y +=
                Bs(S, P, S - D * K, P - G * K, S - ut * K, P - X * K, m, !1) +
                4)
            : (y += 2),
          m.push(S - ut * et, P - X * et),
          m.push(S + ut * K, P + X * K))
      continue
    }
    const W = (-D + E) * (-G + P) - (-D + S) * (-G + C),
      yt = (-ut + Y) * (-X + P) - (-ut + S) * (-X + V),
      bt = (Qt * yt - De * W) / U,
      _ = (Lt * W - be * yt) / U,
      x = (bt - S) * (bt - S) + (_ - P) * (_ - P),
      A = S + (bt - S) * K,
      I = P + (_ - P) * K,
      T = S - (bt - S) * et,
      B = P - (_ - P) * et,
      z = Math.min(Qt * Qt + be * be, De * De + Lt * Lt),
      O = N ? K : et,
      $ = z + O * O * M
    x <= $
      ? c.join === 'bevel' || x / M > k
        ? (N
            ? (m.push(A, I),
              m.push(S + D * et, P + G * et),
              m.push(A, I),
              m.push(S + ut * et, P + X * et))
            : (m.push(S - D * K, P - G * K),
              m.push(T, B),
              m.push(S - ut * K, P - X * K),
              m.push(T, B)),
          (y += 2))
        : c.join === 'round'
        ? N
          ? (m.push(A, I),
            m.push(S + D * et, P + G * et),
            (y +=
              Bs(S, P, S + D * et, P + G * et, S + ut * et, P + X * et, m, !0) +
              4),
            m.push(A, I),
            m.push(S + ut * et, P + X * et))
          : (m.push(S - D * K, P - G * K),
            m.push(T, B),
            (y +=
              Bs(S, P, S - D * K, P - G * K, S - ut * K, P - X * K, m, !1) + 4),
            m.push(S - ut * K, P - X * K),
            m.push(T, B))
        : (m.push(A, I), m.push(T, B))
      : (m.push(S - D * K, P - G * K),
        m.push(S + D * et, P + G * et),
        c.join === 'round'
          ? N
            ? (y +=
                Bs(
                  S,
                  P,
                  S + D * et,
                  P + G * et,
                  S + ut * et,
                  P + X * et,
                  m,
                  !0,
                ) + 2)
            : (y +=
                Bs(S, P, S - D * K, P - G * K, S - ut * K, P - X * K, m, !1) +
                2)
          : c.join === 'miter' &&
            x / M <= k &&
            (N ? (m.push(T, B), m.push(T, B)) : (m.push(A, I), m.push(A, I)),
            (y += 2)),
        m.push(S - ut * K, P - X * K),
        m.push(S + ut * et, P + X * et),
        (y += 2))
  }
  ;(E = e[(b - 2) * 2]),
    (C = e[(b - 2) * 2 + 1]),
    (S = e[(b - 1) * 2]),
    (P = e[(b - 1) * 2 + 1]),
    (D = -(C - P)),
    (G = E - S),
    (lt = Math.sqrt(D * D + G * G)),
    (D /= lt),
    (G /= lt),
    (D *= w),
    (G *= w),
    m.push(S - D * K, P - G * K),
    m.push(S + D * et, P + G * et),
    p ||
      (c.cap === 'round'
        ? (y +=
            Bs(
              S - D * (K - et) * 0.5,
              P - G * (K - et) * 0.5,
              S - D * K,
              P - G * K,
              S + D * et,
              P + G * et,
              m,
              !1,
            ) + 2)
        : c.cap === 'square' && (y += mh(S, P, D, G, K, et, !1, m)))
  const xe = ph * ph
  for (let at = v; at < y + v - 2; ++at)
    (E = m[at * 2]),
      (C = m[at * 2 + 1]),
      (S = m[(at + 1) * 2]),
      (P = m[(at + 1) * 2 + 1]),
      (Y = m[(at + 2) * 2]),
      (V = m[(at + 2) * 2 + 1]),
      !(Math.abs(E * (P - V) + S * (V - C) + Y * (C - P)) < xe) &&
        a.push(at, at + 1, at + 2)
}
function Af(e, t, s, n, i, r, o) {
  const a = Db(e, t, 2)
  if (!a) return
  for (let h = 0; h < a.length; h += 3)
    (r[o++] = a[h] + i), (r[o++] = a[h + 1] + i), (r[o++] = a[h + 2] + i)
  let l = i * n
  for (let h = 0; h < e.length; h += 2)
    (s[l] = e[h]), (s[l + 1] = e[h + 1]), (l += n)
}
const zv = [],
  Vv = {
    build(e, t) {
      for (let s = 0; s < e.points.length; s++) t[s] = e.points[s]
      return t
    },
    triangulate(e, t, s, n, i, r) {
      Af(e, zv, t, s, n, i, r)
    },
  },
  Uv = {
    build(e, t) {
      const s = e,
        n = s.x,
        i = s.y,
        r = s.width,
        o = s.height
      return (
        r >= 0 &&
          o >= 0 &&
          ((t[0] = n),
          (t[1] = i),
          (t[2] = n + r),
          (t[3] = i),
          (t[4] = n + r),
          (t[5] = i + o),
          (t[6] = n),
          (t[7] = i + o)),
        t
      )
    },
    triangulate(e, t, s, n, i, r) {
      let o = 0
      ;(n *= s),
        (t[n + o] = e[0]),
        (t[n + o + 1] = e[1]),
        (o += s),
        (t[n + o] = e[2]),
        (t[n + o + 1] = e[3]),
        (o += s),
        (t[n + o] = e[6]),
        (t[n + o + 1] = e[7]),
        (o += s),
        (t[n + o] = e[4]),
        (t[n + o + 1] = e[5]),
        (o += s)
      const a = n / s
      ;(i[r++] = a),
        (i[r++] = a + 1),
        (i[r++] = a + 2),
        (i[r++] = a + 1),
        (i[r++] = a + 3),
        (i[r++] = a + 2)
    },
  },
  Hv = {
    build(e, t) {
      return (
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.x2),
        (t[3] = e.y2),
        (t[4] = e.x3),
        (t[5] = e.y3),
        t
      )
    },
    triangulate(e, t, s, n, i, r) {
      let o = 0
      ;(n *= s),
        (t[n + o] = e[0]),
        (t[n + o + 1] = e[1]),
        (o += s),
        (t[n + o] = e[2]),
        (t[n + o + 1] = e[3]),
        (o += s),
        (t[n + o] = e[4]),
        (t[n + o + 1] = e[5])
      const a = n / s
      ;(i[r++] = a), (i[r++] = a + 1), (i[r++] = a + 2)
    },
  },
  tl = {
    rectangle: Uv,
    polygon: Vv,
    triangle: Hv,
    circle: po,
    ellipse: po,
    roundedRectangle: po,
  },
  Gv = new Ht()
function Wv(e, t) {
  const { geometryData: s, batches: n } = t
  ;(n.length = 0),
    (s.indices.length = 0),
    (s.vertices.length = 0),
    (s.uvs.length = 0)
  for (let i = 0; i < e.instructions.length; i++) {
    const r = e.instructions[i]
    if (r.action === 'texture') jv(r.data, n, s)
    else if (r.action === 'fill' || r.action === 'stroke') {
      const o = r.action === 'stroke',
        a = r.data.path.shapePath,
        l = r.data.style,
        h = r.data.hole
      o && h && gh(h.shapePath, l, null, !0, n, s), gh(a, l, h, o, n, s)
    }
  }
}
function jv(e, t, s) {
  const { vertices: n, uvs: i, indices: r } = s,
    o = r.length,
    a = n.length / 2,
    l = [],
    h = tl.rectangle,
    c = Gv,
    u = e.image
  ;(c.x = e.dx), (c.y = e.dy), (c.width = e.dw), (c.height = e.dh)
  const d = e.transform
  h.build(c, l), d && vf(l, d), h.triangulate(l, n, 2, a, r, o)
  const f = u.uvs
  i.push(f.x0, f.y0, f.x1, f.y1, f.x3, f.y3, f.x2, f.y2)
  const p = Re.get(wf)
  ;(p.indexOffset = o),
    (p.indexSize = r.length - o),
    (p.vertexOffset = a),
    (p.vertexSize = n.length / 2 - a),
    (p.color = e.style),
    (p.alpha = e.alpha),
    (p.texture = u),
    (p.geometryData = s),
    t.push(p)
}
function gh(e, t, s, n, i, r) {
  const { vertices: o, uvs: a, indices: l } = r,
    h = e.shapePrimitives.length - 1
  e.shapePrimitives.forEach(({ shape: c, transform: u }, d) => {
    const f = l.length,
      p = o.length / 2,
      g = [],
      m = tl[c.type]
    if ((m.build(c, g), u && vf(g, u), n)) {
      const w = c.closePath ?? !0
      Dv(g, t, !1, w, o, 2, p, l)
    } else if (s && h === d) {
      h !== 0 &&
        console.warn('[Pixi Graphics] only the last shape have be cut out')
      const w = [],
        M = g.slice()
      Yv(s.shapePath).forEach((E) => {
        w.push(M.length / 2), M.push(...E)
      }),
        Af(M, w, o, 2, p, l, f)
    } else m.triangulate(g, o, 2, p, l, f)
    const b = a.length / 2,
      y = t.texture
    if (y !== Et.WHITE) {
      const w = t.matrix
      u && w.append(u.clone().invert()),
        Bv(o, 2, p, a, b, 2, o.length / 2 - p, w)
    } else Ov(a, b, 2, o.length / 2 - p)
    const v = Re.get(wf)
    ;(v.indexOffset = f),
      (v.indexSize = l.length - f),
      (v.vertexOffset = p),
      (v.vertexSize = o.length / 2 - p),
      (v.color = t.color),
      (v.alpha = t.alpha),
      (v.texture = y),
      (v.geometryData = r),
      i.push(v)
  })
}
function Yv(e) {
  if (!e) return []
  const t = e.shapePrimitives,
    s = []
  for (let n = 0; n < t.length; n++) {
    const i = t[n].shape,
      r = []
    tl[i.type].build(i, r), s.push(r)
  }
  return s
}
class Xv {
  constructor() {
    ;(this.batches = []),
      (this.geometryData = { vertices: [], uvs: [], indices: [] })
  }
}
class Kv {
  constructor() {
    ;(this.geometry = new Tv()), (this.instructions = new Wd())
  }
  init() {
    this.instructions.reset()
  }
}
const el = class ta {
  constructor() {
    ;(this._activeBatchers = []),
      (this._gpuContextHash = {}),
      (this._graphicsDataContextHash = Object.create(null)),
      (this._needsContextNeedsRebuild = [])
  }
  init(t) {
    ta.defaultOptions.bezierSmoothness =
      (t == null ? void 0 : t.bezierSmoothness) ??
      ta.defaultOptions.bezierSmoothness
  }
  prerender() {
    this._returnActiveBatchers()
  }
  getContextRenderData(t) {
    return (
      this._graphicsDataContextHash[t.uid] || this._initContextRenderData(t)
    )
  }
  updateGpuContext(t) {
    let s = this._gpuContextHash[t.uid] || this._initContext(t)
    if (t.dirty) {
      s ? this._cleanGraphicsContextData(t) : (s = this._initContext(t)),
        Wv(t, s)
      const n = t.batchMode
      t.customShader || n === 'no-batch'
        ? (s.isBatchable = !1)
        : n === 'auto' &&
          (s.isBatchable = s.geometryData.vertices.length < 400),
        (t.dirty = !1)
    }
    return s
  }
  getGpuContext(t) {
    return this._gpuContextHash[t.uid] || this._initContext(t)
  }
  _returnActiveBatchers() {
    for (let t = 0; t < this._activeBatchers.length; t++)
      Re.return(this._activeBatchers[t])
    this._activeBatchers.length = 0
  }
  _initContextRenderData(t) {
    const s = Re.get(Kv),
      { batches: n, geometryData: i } = this._gpuContextHash[t.uid],
      r = i.vertices.length,
      o = i.indices.length
    for (let c = 0; c < n.length; c++) n[c].applyTransform = !1
    const a = Re.get(Lv)
    this._activeBatchers.push(a),
      a.ensureAttributeBuffer(r),
      a.ensureIndexBuffer(o),
      a.begin()
    for (let c = 0; c < n.length; c++) {
      const u = n[c]
      a.add(u)
    }
    a.finish(s.instructions)
    const l = s.geometry
    l.indexBuffer.setDataWithSize(a.indexBuffer, a.indexSize, !0),
      l.buffers[0].setDataWithSize(
        a.attributeBuffer.float32View,
        a.attributeSize,
        !0,
      )
    const h = a.batches
    for (let c = 0; c < h.length; c++) {
      const u = h[c]
      u.bindGroup = Mv(u.textures.textures, u.textures.count)
    }
    return (this._graphicsDataContextHash[t.uid] = s), s
  }
  _initContext(t) {
    const s = new Xv()
    return (
      (this._gpuContextHash[t.uid] = s),
      t.on('update', this.onGraphicsContextUpdate, this),
      t.on('destroy', this.onGraphicsContextDestroy, this),
      this._gpuContextHash[t.uid]
    )
  }
  onGraphicsContextUpdate(t) {
    this._needsContextNeedsRebuild.push(t)
  }
  onGraphicsContextDestroy(t) {
    this._cleanGraphicsContextData(t),
      t.off('update', this.onGraphicsContextUpdate, this),
      t.off('destroy', this.onGraphicsContextDestroy, this),
      (this._gpuContextHash[t.uid] = null)
  }
  _cleanGraphicsContextData(t) {
    const s = this._gpuContextHash[t.uid]
    s.isBatchable ||
      (this._graphicsDataContextHash[t.uid] &&
        (Re.return(this.getContextRenderData(t)),
        (this._graphicsDataContextHash[t.uid] = null))),
      s.batches &&
        s.batches.forEach((n) => {
          Re.return(n)
        })
  }
  destroy() {
    for (const t of this._needsContextNeedsRebuild)
      this._gpuContextHash[t.uid] && this.onGraphicsContextDestroy(t)
    this._needsContextNeedsRebuild.length = 0
  }
}
el.extension = {
  type: [ot.WebGLSystem, ot.WebGPUSystem, ot.CanvasSystem],
  name: 'graphicsContext',
}
el.defaultOptions = { bezierSmoothness: 0.5 }
let Sf = el
const qv = 8,
  Yi = 11920929e-14,
  Zv = 1
function Cf(e, t, s, n, i, r, o, a, l, h) {
  const u = Math.min(0.99, Math.max(0, h ?? Sf.defaultOptions.bezierSmoothness))
  let d = (Zv - u) / 1
  return (d *= d), Qv(t, s, n, i, r, o, a, l, e, d), e
}
function Qv(e, t, s, n, i, r, o, a, l, h) {
  ea(e, t, s, n, i, r, o, a, l, h, 0), l.push(o, a)
}
function ea(e, t, s, n, i, r, o, a, l, h, c) {
  if (c > qv) return
  const u = (e + s) / 2,
    d = (t + n) / 2,
    f = (s + i) / 2,
    p = (n + r) / 2,
    g = (i + o) / 2,
    m = (r + a) / 2,
    b = (u + f) / 2,
    y = (d + p) / 2,
    v = (f + g) / 2,
    w = (p + m) / 2,
    M = (b + v) / 2,
    k = (y + w) / 2
  if (c > 0) {
    let E = o - e,
      C = a - t
    const S = Math.abs((s - o) * C - (n - a) * E),
      P = Math.abs((i - o) * C - (r - a) * E)
    if (S > Yi && P > Yi) {
      if ((S + P) * (S + P) <= h * (E * E + C * C)) {
        l.push(M, k)
        return
      }
    } else if (S > Yi) {
      if (S * S <= h * (E * E + C * C)) {
        l.push(M, k)
        return
      }
    } else if (P > Yi) {
      if (P * P <= h * (E * E + C * C)) {
        l.push(M, k)
        return
      }
    } else if (
      ((E = M - (e + o) / 2), (C = k - (t + a) / 2), E * E + C * C <= h)
    ) {
      l.push(M, k)
      return
    }
  }
  ea(e, t, u, d, b, y, M, k, l, h, c + 1),
    ea(M, k, v, w, g, m, o, a, l, h, c + 1)
}
const Jv = 8,
  t2 = 11920929e-14,
  e2 = 1
function s2(e, t, s, n, i, r, o, a) {
  const h = Math.min(0.99, Math.max(0, a ?? Sf.defaultOptions.bezierSmoothness))
  let c = (e2 - h) / 1
  return (c *= c), n2(t, s, n, i, r, o, e, c), e
}
function n2(e, t, s, n, i, r, o, a) {
  sa(o, e, t, s, n, i, r, a, 0), o.push(i, r)
}
function sa(e, t, s, n, i, r, o, a, l) {
  if (l > Jv) return
  const h = (t + n) / 2,
    c = (s + i) / 2,
    u = (n + r) / 2,
    d = (i + o) / 2,
    f = (h + u) / 2,
    p = (c + d) / 2
  let g = r - t,
    m = o - s
  const b = Math.abs((n - r) * m - (i - o) * g)
  if (b > t2) {
    if (b * b <= a * (g * g + m * m)) {
      e.push(f, p)
      return
    }
  } else if (
    ((g = f - (t + r) / 2), (m = p - (s + o) / 2), g * g + m * m <= a)
  ) {
    e.push(f, p)
    return
  }
  sa(e, t, s, h, c, f, p, a, l + 1), sa(e, f, p, u, d, r, o, a, l + 1)
}
function Ef(e, t, s, n, i, r, o, a) {
  let l = Math.abs(i - r)
  ;((!o && i > r) || (o && r > i)) && (l = 2 * Math.PI - l),
    (a = a || Math.max(6, Math.floor(6 * Math.pow(n, 1 / 3) * (l / Math.PI)))),
    (a = Math.max(a, 3))
  let h = l / a,
    c = i
  h *= o ? -1 : 1
  for (let u = 0; u < a + 1; u++) {
    const d = Math.cos(c),
      f = Math.sin(c),
      p = t + d * n,
      g = s + f * n
    e.push(p, g), (c += h)
  }
}
function i2(e, t, s, n, i, r) {
  const o = e[e.length - 2],
    l = e[e.length - 1] - s,
    h = o - t,
    c = i - s,
    u = n - t,
    d = Math.abs(l * u - h * c)
  if (d < 1e-8 || r === 0) {
    ;(e[e.length - 2] !== t || e[e.length - 1] !== s) && e.push(t, s)
    return
  }
  const f = l * l + h * h,
    p = c * c + u * u,
    g = l * c + h * u,
    m = (r * Math.sqrt(f)) / d,
    b = (r * Math.sqrt(p)) / d,
    y = (m * g) / f,
    v = (b * g) / p,
    w = m * u + b * h,
    M = m * c + b * l,
    k = h * (b + y),
    E = l * (b + y),
    C = u * (m + v),
    S = c * (m + v),
    P = Math.atan2(E - M, k - w),
    Y = Math.atan2(S - M, C - w)
  Ef(e, w + t, M + s, r, P, Y, h * c > u * l)
}
const ai = Math.PI * 2,
  mo = { centerX: 0, centerY: 0, ang1: 0, ang2: 0 },
  go = ({ x: e, y: t }, s, n, i, r, o, a, l) => {
    ;(e *= s), (t *= n)
    const h = i * e - r * t,
      c = r * e + i * t
    return (l.x = h + o), (l.y = c + a), l
  }
function r2(e, t) {
  const s =
      t === -1.5707963267948966
        ? -0.551915024494
        : 1.3333333333333333 * Math.tan(t / 4),
    n = t === 1.5707963267948966 ? 0.551915024494 : s,
    i = Math.cos(e),
    r = Math.sin(e),
    o = Math.cos(e + t),
    a = Math.sin(e + t)
  return [
    { x: i - r * n, y: r + i * n },
    { x: o + a * n, y: a - o * n },
    { x: o, y: a },
  ]
}
const _h = (e, t, s, n) => {
    const i = e * n - t * s < 0 ? -1 : 1
    let r = e * s + t * n
    return r > 1 && (r = 1), r < -1 && (r = -1), i * Math.acos(r)
  },
  o2 = (e, t, s, n, i, r, o, a, l, h, c, u, d) => {
    const f = Math.pow(i, 2),
      p = Math.pow(r, 2),
      g = Math.pow(c, 2),
      m = Math.pow(u, 2)
    let b = f * p - f * m - p * g
    b < 0 && (b = 0),
      (b /= f * m + p * g),
      (b = Math.sqrt(b) * (o === a ? -1 : 1))
    const y = ((b * i) / r) * u,
      v = ((b * -r) / i) * c,
      w = h * y - l * v + (e + s) / 2,
      M = l * y + h * v + (t + n) / 2,
      k = (c - y) / i,
      E = (u - v) / r,
      C = (-c - y) / i,
      S = (-u - v) / r,
      P = _h(1, 0, k, E)
    let Y = _h(k, E, C, S)
    a === 0 && Y > 0 && (Y -= ai),
      a === 1 && Y < 0 && (Y += ai),
      (d.centerX = w),
      (d.centerY = M),
      (d.ang1 = P),
      (d.ang2 = Y)
  }
function a2(e, t, s, n, i, r, o, a = 0, l = 0, h = 0) {
  if (r === 0 || o === 0) return
  const c = Math.sin((a * ai) / 360),
    u = Math.cos((a * ai) / 360),
    d = (u * (t - n)) / 2 + (c * (s - i)) / 2,
    f = (-c * (t - n)) / 2 + (u * (s - i)) / 2
  if (d === 0 && f === 0) return
  ;(r = Math.abs(r)), (o = Math.abs(o))
  const p = Math.pow(d, 2) / Math.pow(r, 2) + Math.pow(f, 2) / Math.pow(o, 2)
  p > 1 && ((r *= Math.sqrt(p)), (o *= Math.sqrt(p))),
    o2(t, s, n, i, r, o, l, h, c, u, d, f, mo)
  let { ang1: g, ang2: m } = mo
  const { centerX: b, centerY: y } = mo
  let v = Math.abs(m) / (ai / 4)
  Math.abs(1 - v) < 1e-7 && (v = 1)
  const w = Math.max(Math.ceil(v), 1)
  m /= w
  let M = e[e.length - 2],
    k = e[e.length - 1]
  const E = { x: 0, y: 0 }
  for (let C = 0; C < w; C++) {
    const S = r2(g, m),
      { x: P, y: Y } = go(S[0], r, o, u, c, b, y, E),
      { x: V, y: D } = go(S[1], r, o, u, c, b, y, E),
      { x: G, y: ut } = go(S[2], r, o, u, c, b, y, E)
    Cf(e, M, k, P, Y, V, D, G, ut), (M = G), (k = ut), (g += m)
  }
}
function l2(e, t, s) {
  const n = (o, a) => {
      const l = a.x - o.x,
        h = a.y - o.y,
        c = Math.sqrt(l * l + h * h),
        u = l / c,
        d = h / c
      return { len: c, nx: u, ny: d }
    },
    i = (o, a) => {
      o === 0 ? e.moveTo(a.x, a.y) : e.lineTo(a.x, a.y)
    }
  let r = t[t.length - 1]
  for (let o = 0; o < t.length; o++) {
    const a = t[o % t.length],
      l = a.radius ?? s
    if (l <= 0) {
      i(o, a), (r = a)
      continue
    }
    const h = t[(o + 1) % t.length],
      c = n(a, r),
      u = n(a, h)
    if (c.len < 1e-4 || u.len < 1e-4) {
      i(o, a), (r = a)
      continue
    }
    let d = Math.asin(c.nx * u.ny - c.ny * u.nx),
      f = 1,
      p = !1
    c.nx * u.nx - c.ny * -u.ny < 0
      ? d < 0
        ? (d = Math.PI + d)
        : ((d = Math.PI - d), (f = -1), (p = !0))
      : d > 0 && ((f = -1), (p = !0))
    const g = d / 2
    let m,
      b = Math.abs((Math.cos(g) * l) / Math.sin(g))
    b > Math.min(c.len / 2, u.len / 2)
      ? ((b = Math.min(c.len / 2, u.len / 2)),
        (m = Math.abs((b * Math.sin(g)) / Math.cos(g))))
      : (m = l)
    const y = a.x + u.nx * b + -u.ny * m * f,
      v = a.y + u.ny * b + u.nx * m * f,
      w = Math.atan2(c.ny, c.nx) + (Math.PI / 2) * f,
      M = Math.atan2(u.ny, u.nx) - (Math.PI / 2) * f
    o === 0 && e.moveTo(y + Math.cos(w) * m, v + Math.sin(w) * m),
      e.arc(y, v, m, w, M, p),
      (r = a)
  }
}
function c2(e, t, s, n) {
  const i = (a, l) => Math.sqrt((a.x - l.x) ** 2 + (a.y - l.y) ** 2),
    r = (a, l, h) => ({ x: a.x + (l.x - a.x) * h, y: a.y + (l.y - a.y) * h }),
    o = t.length
  for (let a = 0; a < o; a++) {
    const l = t[(a + 1) % o],
      h = l.radius ?? s
    if (h <= 0) {
      a === 0 ? e.moveTo(l.x, l.y) : e.lineTo(l.x, l.y)
      continue
    }
    const c = t[a],
      u = t[(a + 2) % o],
      d = i(c, l)
    let f
    if (d < 1e-4) f = l
    else {
      const m = Math.min(d / 2, h)
      f = r(l, c, m / d)
    }
    const p = i(u, l)
    let g
    if (p < 1e-4) g = l
    else {
      const m = Math.min(p / 2, h)
      g = r(l, u, m / p)
    }
    a === 0 ? e.moveTo(f.x, f.y) : e.lineTo(f.x, f.y),
      e.quadraticCurveTo(l.x, l.y, g.x, g.y, n)
  }
}
const h2 = new Ht()
class u2 {
  constructor(t) {
    ;(this.shapePrimitives = []),
      (this._currentPoly = null),
      (this._bounds = new je()),
      (this._graphicsPath2D = t)
  }
  moveTo(t, s) {
    return this.startPoly(t, s), this
  }
  lineTo(t, s) {
    this._ensurePoly()
    const n = this._currentPoly.points,
      i = n[n.length - 2],
      r = n[n.length - 1]
    return (i !== t || r !== s) && n.push(t, s), this
  }
  arc(t, s, n, i, r, o) {
    this._ensurePoly(!1)
    const a = this._currentPoly.points
    return Ef(a, t, s, n, i, r, o), this
  }
  arcTo(t, s, n, i, r) {
    this._ensurePoly()
    const o = this._currentPoly.points
    return i2(o, t, s, n, i, r), this
  }
  arcToSvg(t, s, n, i, r, o, a) {
    const l = this._currentPoly.points
    return (
      a2(
        l,
        this._currentPoly.lastX,
        this._currentPoly.lastY,
        o,
        a,
        t,
        s,
        n,
        i,
        r,
      ),
      this
    )
  }
  bezierCurveTo(t, s, n, i, r, o, a) {
    this._ensurePoly()
    const l = this._currentPoly
    return (
      Cf(this._currentPoly.points, l.lastX, l.lastY, t, s, n, i, r, o, a), this
    )
  }
  quadraticCurveTo(t, s, n, i, r) {
    this._ensurePoly()
    const o = this._currentPoly
    return s2(this._currentPoly.points, o.lastX, o.lastY, t, s, n, i, r), this
  }
  closePath() {
    return this.endPoly(!0), this
  }
  addPath(t, s) {
    this.endPoly(), s && !s.isIdentity() && ((t = t.clone(!0)), t.transform(s))
    for (let n = 0; n < t.instructions.length; n++) {
      const i = t.instructions[n]
      this[i.action](...i.data)
    }
    return this
  }
  finish(t = !1) {
    this.endPoly(t)
  }
  rect(t, s, n, i, r) {
    return this.drawShape(new Ht(t, s, n, i), r), this
  }
  circle(t, s, n, i) {
    return this.drawShape(new Za(t, s, n), i), this
  }
  poly(t, s, n) {
    const i = new oi(t)
    return (i.closePath = s), this.drawShape(i, n), this
  }
  regularPoly(t, s, n, i, r = 0, o) {
    i = Math.max(i | 0, 3)
    const a = (-1 * Math.PI) / 2 + r,
      l = (Math.PI * 2) / i,
      h = []
    for (let c = 0; c < i; c++) {
      const u = c * l + a
      h.push(t + n * Math.cos(u), s + n * Math.sin(u))
    }
    return this.poly(h, !0, o), this
  }
  roundPoly(t, s, n, i, r, o = 0, a) {
    if (((i = Math.max(i | 0, 3)), r <= 0))
      return this.regularPoly(t, s, n, i, o)
    const l = n * Math.sin(Math.PI / i) - 0.001
    r = Math.min(r, l)
    const h = (-1 * Math.PI) / 2 + o,
      c = (Math.PI * 2) / i,
      u = ((i - 2) * Math.PI) / i / 2
    for (let d = 0; d < i; d++) {
      const f = d * c + h,
        p = t + n * Math.cos(f),
        g = s + n * Math.sin(f),
        m = f + Math.PI + u,
        b = f - Math.PI - u,
        y = p + r * Math.cos(m),
        v = g + r * Math.sin(m),
        w = p + r * Math.cos(b),
        M = g + r * Math.sin(b)
      d === 0 ? this.moveTo(y, v) : this.lineTo(y, v),
        this.quadraticCurveTo(p, g, w, M, a)
    }
    return this.closePath()
  }
  roundShape(t, s, n = !1, i) {
    return t.length < 3
      ? this
      : (n ? c2(this, t, s, i) : l2(this, t, s), this.closePath())
  }
  filletRect(t, s, n, i, r) {
    if (r === 0) return this.rect(t, s, n, i)
    const o = Math.min(n, i) / 2,
      a = Math.min(o, Math.max(-o, r)),
      l = t + n,
      h = s + i,
      c = a < 0 ? -a : 0,
      u = Math.abs(a)
    return this.moveTo(t, s + u)
      .arcTo(t + c, s + c, t + u, s, u)
      .lineTo(l - u, s)
      .arcTo(l - c, s + c, l, s + u, u)
      .lineTo(l, h - u)
      .arcTo(l - c, h - c, t + n - u, h, u)
      .lineTo(t + u, h)
      .arcTo(t + c, h - c, t, h - u, u)
      .closePath()
  }
  chamferRect(t, s, n, i, r, o) {
    if (r <= 0) return this.rect(t, s, n, i)
    const a = Math.min(r, Math.min(n, i) / 2),
      l = t + n,
      h = s + i,
      c = [
        t + a,
        s,
        l - a,
        s,
        l,
        s + a,
        l,
        h - a,
        l - a,
        h,
        t + a,
        h,
        t,
        h - a,
        t,
        s + a,
      ]
    for (let u = c.length - 1; u >= 2; u -= 2)
      c[u] === c[u - 2] && c[u - 1] === c[u - 3] && c.splice(u - 1, 2)
    return this.poly(c, !0, o)
  }
  ellipse(t, s, n, i, r) {
    return this.drawShape(new Qa(t, s, n, i), r), this
  }
  roundRect(t, s, n, i, r, o) {
    return this.drawShape(new Ja(t, s, n, i, r), o), this
  }
  drawShape(t, s) {
    return (
      this.endPoly(),
      this.shapePrimitives.push({ shape: t, transform: s }),
      this
    )
  }
  startPoly(t, s) {
    let n = this._currentPoly
    return (
      n && this.endPoly(),
      (n = new oi()),
      n.points.push(t, s),
      (this._currentPoly = n),
      this
    )
  }
  endPoly(t = !1) {
    const s = this._currentPoly
    return (
      s &&
        s.points.length > 2 &&
        ((s.closePath = t), this.shapePrimitives.push({ shape: s })),
      (this._currentPoly = null),
      this
    )
  }
  _ensurePoly(t = !0) {
    if (!this._currentPoly && ((this._currentPoly = new oi()), t)) {
      const s = this.shapePrimitives[this.shapePrimitives.length - 1]
      if (s) {
        let n = s.shape.x,
          i = s.shape.y
        if (!s.transform.isIdentity()) {
          const r = s.transform,
            o = n
          ;(n = r.a * n + r.c * i + r.tx), (i = r.b * o + r.d * i + r.ty)
        }
        this._currentPoly.points.push(n, i)
      } else this._currentPoly.points.push(0, 0)
    }
  }
  buildPath() {
    const t = this._graphicsPath2D
    ;(this.shapePrimitives.length = 0), (this._currentPoly = null)
    for (let s = 0; s < t.instructions.length; s++) {
      const n = t.instructions[s]
      this[n.action](...n.data)
    }
    this.finish()
  }
  get bounds() {
    const t = this._bounds
    t.clear()
    const s = this.shapePrimitives
    for (let n = 0; n < s.length; n++) {
      const i = s[n],
        r = i.shape.getBounds(h2)
      i.transform ? t.addRect(r, i.transform) : t.addRect(r)
    }
    return t
  }
}
class Tn {
  constructor(t) {
    ;(this.instructions = []),
      (this.uid = Gt('graphicsPath')),
      (this._dirty = !0),
      typeof t == 'string'
        ? vv(t, this)
        : (this.instructions = (t == null ? void 0 : t.slice()) ?? [])
  }
  get shapePath() {
    return (
      this._shapePath || (this._shapePath = new u2(this)),
      this._dirty && ((this._dirty = !1), this._shapePath.buildPath()),
      this._shapePath
    )
  }
  addPath(t, s) {
    return (
      (t = t.clone()),
      this.instructions.push({ action: 'addPath', data: [t, s] }),
      (this._dirty = !0),
      this
    )
  }
  arc(...t) {
    return (
      this.instructions.push({ action: 'arc', data: t }),
      (this._dirty = !0),
      this
    )
  }
  arcTo(...t) {
    return (
      this.instructions.push({ action: 'arcTo', data: t }),
      (this._dirty = !0),
      this
    )
  }
  arcToSvg(...t) {
    return (
      this.instructions.push({ action: 'arcToSvg', data: t }),
      (this._dirty = !0),
      this
    )
  }
  bezierCurveTo(...t) {
    return (
      this.instructions.push({ action: 'bezierCurveTo', data: t }),
      (this._dirty = !0),
      this
    )
  }
  bezierCurveToShort(t, s, n, i, r) {
    const o = this.instructions[this.instructions.length - 1],
      a = this.getLastPoint(qt.shared)
    let l = 0,
      h = 0
    if (!o || o.action !== 'bezierCurveTo') (l = a.x), (h = a.y)
    else {
      ;(l = o.data[2]), (h = o.data[3])
      const c = a.x,
        u = a.y
      ;(l = c + (c - l)), (h = u + (u - h))
    }
    return (
      this.instructions.push({
        action: 'bezierCurveTo',
        data: [l, h, t, s, n, i, r],
      }),
      (this._dirty = !0),
      this
    )
  }
  closePath() {
    return (
      this.instructions.push({ action: 'closePath', data: [] }),
      (this._dirty = !0),
      this
    )
  }
  ellipse(...t) {
    return (
      this.instructions.push({ action: 'ellipse', data: t }),
      (this._dirty = !0),
      this
    )
  }
  lineTo(...t) {
    return (
      this.instructions.push({ action: 'lineTo', data: t }),
      (this._dirty = !0),
      this
    )
  }
  moveTo(...t) {
    return this.instructions.push({ action: 'moveTo', data: t }), this
  }
  quadraticCurveTo(...t) {
    return (
      this.instructions.push({ action: 'quadraticCurveTo', data: t }),
      (this._dirty = !0),
      this
    )
  }
  quadraticCurveToShort(t, s, n) {
    const i = this.instructions[this.instructions.length - 1],
      r = this.getLastPoint(qt.shared)
    let o = 0,
      a = 0
    if (!i || i.action !== 'quadraticCurveTo') (o = r.x), (a = r.y)
    else {
      ;(o = i.data[0]), (a = i.data[1])
      const l = r.x,
        h = r.y
      ;(o = l + (l - o)), (a = h + (h - a))
    }
    return (
      this.instructions.push({
        action: 'quadraticCurveTo',
        data: [o, a, t, s, n],
      }),
      (this._dirty = !0),
      this
    )
  }
  rect(t, s, n, i, r) {
    return (
      this.instructions.push({ action: 'rect', data: [t, s, n, i, r] }),
      (this._dirty = !0),
      this
    )
  }
  circle(t, s, n, i) {
    return (
      this.instructions.push({ action: 'circle', data: [t, s, n, i] }),
      (this._dirty = !0),
      this
    )
  }
  roundRect(...t) {
    return (
      this.instructions.push({ action: 'roundRect', data: t }),
      (this._dirty = !0),
      this
    )
  }
  poly(...t) {
    return (
      this.instructions.push({ action: 'poly', data: t }),
      (this._dirty = !0),
      this
    )
  }
  regularPoly(...t) {
    return (
      this.instructions.push({ action: 'regularPoly', data: t }),
      (this._dirty = !0),
      this
    )
  }
  roundPoly(...t) {
    return (
      this.instructions.push({ action: 'roundPoly', data: t }),
      (this._dirty = !0),
      this
    )
  }
  roundShape(...t) {
    return (
      this.instructions.push({ action: 'roundShape', data: t }),
      (this._dirty = !0),
      this
    )
  }
  filletRect(...t) {
    return (
      this.instructions.push({ action: 'filletRect', data: t }),
      (this._dirty = !0),
      this
    )
  }
  chamferRect(...t) {
    return (
      this.instructions.push({ action: 'chamferRect', data: t }),
      (this._dirty = !0),
      this
    )
  }
  star(t, s, n, i, r, o, a) {
    r = r || i / 2
    const l = (-1 * Math.PI) / 2 + o,
      h = n * 2,
      c = (Math.PI * 2) / h,
      u = []
    for (let d = 0; d < h; d++) {
      const f = d % 2 ? r : i,
        p = d * c + l
      u.push(t + f * Math.cos(p), s + f * Math.sin(p))
    }
    return this.poly(u, !0, a), this
  }
  clone(t = !1) {
    const s = new Tn()
    if (!t) s.instructions = this.instructions.slice()
    else
      for (let n = 0; n < this.instructions.length; n++) {
        const i = this.instructions[n]
        s.instructions.push({ action: i.action, data: i.data.slice() })
      }
    return s
  }
  clear() {
    return (this.instructions.length = 0), (this._dirty = !0), this
  }
  transform(t) {
    if (t.isIdentity()) return this
    const s = t.a,
      n = t.b,
      i = t.c,
      r = t.d,
      o = t.tx,
      a = t.ty
    let l = 0,
      h = 0,
      c = 0,
      u = 0,
      d = 0,
      f = 0,
      p = 0,
      g = 0
    for (let m = 0; m < this.instructions.length; m++) {
      const b = this.instructions[m],
        y = b.data
      switch (b.action) {
        case 'moveTo':
        case 'lineTo':
          ;(l = y[0]),
            (h = y[1]),
            (y[0] = s * l + i * h + o),
            (y[1] = n * l + r * h + a)
          break
        case 'bezierCurveTo':
          ;(c = y[0]),
            (u = y[1]),
            (d = y[2]),
            (f = y[3]),
            (l = y[4]),
            (h = y[5]),
            (y[0] = s * c + i * u + o),
            (y[1] = n * c + r * u + a),
            (y[2] = s * d + i * f + o),
            (y[3] = n * d + r * f + a),
            (y[4] = s * l + i * h + o),
            (y[5] = n * l + r * h + a)
          break
        case 'quadraticCurveTo':
          ;(c = y[0]),
            (u = y[1]),
            (l = y[2]),
            (h = y[3]),
            (y[0] = s * c + i * u + o),
            (y[1] = n * c + r * u + a),
            (y[2] = s * l + i * h + o),
            (y[3] = n * l + r * h + a)
          break
        case 'arcToSvg':
          ;(l = y[5]),
            (h = y[6]),
            (p = y[0]),
            (g = y[1]),
            (y[0] = s * p + i * g),
            (y[1] = n * p + r * g),
            (y[5] = s * l + i * h + o),
            (y[6] = n * l + r * h + a)
          break
        case 'circle':
          y[4] = jn(y[3], t)
          break
        case 'rect':
          y[4] = jn(y[4], t)
          break
        case 'ellipse':
          y[8] = jn(y[8], t)
          break
        case 'roundRect':
          y[5] = jn(y[5], t)
          break
        case 'addPath':
          y[0].transform(t)
          break
        case 'poly':
          y[2] = jn(y[2], t)
          break
        default:
          Wt('unknown transform action', b.action)
          break
      }
    }
    return (this._dirty = !0), this
  }
  get bounds() {
    return this.shapePath.bounds
  }
  getLastPoint(t) {
    let s = this.instructions.length - 1,
      n = this.instructions[s]
    if (!n) return (t.x = 0), (t.y = 0), t
    for (; n.action === 'closePath'; ) {
      if ((s--, s < 0)) return (t.x = 0), (t.y = 0), t
      n = this.instructions[s]
    }
    switch (n.action) {
      case 'moveTo':
      case 'lineTo':
        ;(t.x = n.data[0]), (t.y = n.data[1])
        break
      case 'quadraticCurveTo':
        ;(t.x = n.data[2]), (t.y = n.data[3])
        break
      case 'bezierCurveTo':
        ;(t.x = n.data[4]), (t.y = n.data[5])
        break
      case 'arc':
      case 'arcToSvg':
        ;(t.x = n.data[5]), (t.y = n.data[6])
        break
      case 'addPath':
        n.data[0].getLastPoint(t)
        break
    }
    return t
  }
}
function jn(e, t) {
  return e ? e.prepend(t) : t.clone()
}
function d2(e, t) {
  if (typeof e == 'string') {
    const n = document.createElement('div')
    ;(n.innerHTML = e.trim()), (e = n.querySelector('svg'))
  }
  const s = { context: t, path: new Tn() }
  return Pf(e, s, null, null), t
}
function Pf(e, t, s, n) {
  const i = e.children,
    { fillStyle: r, strokeStyle: o } = f2(e)
  r && s ? (s = { ...s, ...r }) : r && (s = r),
    o && n ? (n = { ...n, ...o }) : o && (n = o),
    (t.context.fillStyle = s),
    (t.context.strokeStyle = n)
  let a, l, h, c, u, d, f, p, g, m, b, y, v, w, M, k, E
  switch (e.nodeName.toLowerCase()) {
    case 'path':
      ;(w = e.getAttribute('d')),
        (M = new Tn(w)),
        t.context.path(M),
        s && t.context.fill(),
        n && t.context.stroke()
      break
    case 'circle':
      ;(f = Nt(e, 'cx', 0)),
        (p = Nt(e, 'cy', 0)),
        (g = Nt(e, 'r', 0)),
        t.context.ellipse(f, p, g, g),
        s && t.context.fill(),
        n && t.context.stroke()
      break
    case 'rect':
      ;(a = Nt(e, 'x', 0)),
        (l = Nt(e, 'y', 0)),
        (k = Nt(e, 'width', 0)),
        (E = Nt(e, 'height', 0)),
        (m = Nt(e, 'rx', 0)),
        (b = Nt(e, 'ry', 0)),
        m || b
          ? t.context.roundRect(a, l, k, E, m || b)
          : t.context.rect(a, l, k, E),
        s && t.context.fill(),
        n && t.context.stroke()
      break
    case 'ellipse':
      ;(f = Nt(e, 'cx', 0)),
        (p = Nt(e, 'cy', 0)),
        (m = Nt(e, 'rx', 0)),
        (b = Nt(e, 'ry', 0)),
        t.context.beginPath(),
        t.context.ellipse(f, p, m, b),
        s && t.context.fill(),
        n && t.context.stroke()
      break
    case 'line':
      ;(h = Nt(e, 'x1', 0)),
        (c = Nt(e, 'y1', 0)),
        (u = Nt(e, 'x2', 0)),
        (d = Nt(e, 'y2', 0)),
        t.context.beginPath(),
        t.context.moveTo(h, c),
        t.context.lineTo(u, d),
        n && t.context.stroke()
      break
    case 'polygon':
      ;(v = e.getAttribute('points')),
        (y = v.match(/\d+/g).map((C) => parseInt(C, 10))),
        t.context.poly(y, !0),
        s && t.context.fill(),
        n && t.context.stroke()
      break
    case 'polyline':
      ;(v = e.getAttribute('points')),
        (y = v.match(/\d+/g).map((C) => parseInt(C, 10))),
        t.context.poly(y, !1),
        n && t.context.stroke()
      break
    case 'g':
    case 'svg':
      break
    default: {
      console.info(`[SVG parser] <${e.nodeName}> elements unsupported`)
      break
    }
  }
  for (let C = 0; C < i.length; C++) Pf(i[C], t, s, n)
}
function Nt(e, t, s) {
  const n = e.getAttribute(t)
  return n ? Number(n) : s
}
function f2(e) {
  const t = e.getAttribute('style'),
    s = {},
    n = {}
  let i = !1,
    r = !1
  if (t) {
    const o = t.split(';')
    for (let a = 0; a < o.length; a++) {
      const l = o[a],
        [h, c] = l.split(':')
      switch (h) {
        case 'stroke':
          c !== 'none' &&
            ((s.color = le.shared.setValue(c).toNumber()), (r = !0))
          break
        case 'stroke-width':
          s.width = Number(c)
          break
        case 'fill':
          c !== 'none' &&
            ((i = !0), (n.color = le.shared.setValue(c).toNumber()))
          break
        case 'fill-opacity':
          n.alpha = Number(c)
          break
        case 'stroke-opacity':
          s.alpha = Number(c)
          break
        case 'opacity':
          ;(n.alpha = Number(c)), (s.alpha = Number(c))
          break
      }
    }
  } else {
    const o = e.getAttribute('stroke')
    o &&
      o !== 'none' &&
      ((r = !0),
      (s.color = le.shared.setValue(o).toNumber()),
      (s.width = Nt(e, 'stroke-width', 1)))
    const a = e.getAttribute('fill')
    a &&
      a !== 'none' &&
      ((i = !0), (n.color = le.shared.setValue(a).toNumber()))
  }
  return { strokeStyle: r ? s : null, fillStyle: i ? n : null }
}
const Tf = class na {
  constructor(t, s, n, i) {
    ;(this.uid = Gt('fillGradient')),
      (this.type = 'linear'),
      (this.gradientStops = []),
      (this.x0 = t),
      (this.y0 = s),
      (this.x1 = n),
      (this.y1 = i)
  }
  addColorStop(t, s) {
    return (
      this.gradientStops.push({
        offset: t,
        color: le.shared.setValue(s).toHex(),
      }),
      this
    )
  }
  buildLinearGradient() {
    const t = na.defaultTextureSize,
      { gradientStops: s } = this,
      n = jt.get().createCanvas()
    ;(n.width = t), (n.height = t)
    const i = n.getContext('2d'),
      r = i.createLinearGradient(0, 0, na.defaultTextureSize, 1)
    for (let g = 0; g < s.length; g++) {
      const m = s[g]
      r.addColorStop(m.offset, m.color)
    }
    ;(i.fillStyle = r),
      i.fillRect(0, 0, t, t),
      (this.texture = new Et({
        source: new Ei({
          resource: n,
          addressModeU: 'clamp-to-edge',
          addressModeV: 'repeat',
        }),
      }))
    const { x0: o, y0: a, x1: l, y1: h } = this,
      c = new St(),
      u = l - o,
      d = h - a,
      f = Math.sqrt(u * u + d * d),
      p = Math.atan2(d, u)
    c.translate(-o, -a),
      c.scale(1 / t, 1 / t),
      c.rotate(-p),
      c.scale(256 / f, 1),
      (this.transform = c)
  }
}
Tf.defaultTextureSize = 256
let Mf = Tf
const yh = {
  repeat: { addressModeU: 'repeat', addressModeV: 'repeat' },
  'repeat-x': { addressModeU: 'repeat', addressModeV: 'clamp-to-edge' },
  'repeat-y': { addressModeU: 'clamp-to-edge', addressModeV: 'repeat' },
  'no-repeat': { addressModeU: 'clamp-to-edge', addressModeV: 'clamp-to-edge' },
}
class p2 {
  constructor(t, s) {
    ;(this.uid = Gt('fillPattern')),
      (this.transform = new St()),
      (this.texture = t),
      this.transform.scale(1 / t.frame.width, 1 / t.frame.height),
      s &&
        ((t.source.style.addressModeU = yh[s].addressModeU),
        (t.source.style.addressModeV = yh[s].addressModeV))
  }
  setTransform(t) {
    const s = this.texture
    this.transform.copyFrom(t),
      this.transform.invert(),
      this.transform.scale(1 / s.frame.width, 1 / s.frame.height)
  }
}
function ps(e, t) {
  var o
  if (e == null) return null
  let s, n
  if (
    (e != null && e.fill
      ? ((n = e.fill), (s = { ...t, ...e }))
      : ((n = e), (s = t)),
    le.isColorLike(n))
  ) {
    const a = le.shared.setValue(n ?? 0)
    return {
      ...s,
      color: a.toNumber(),
      alpha: a.alpha === 1 ? s.alpha : a.alpha,
      texture: Et.WHITE,
    }
  } else if (n instanceof p2) {
    const a = n
    return {
      ...s,
      color: 16777215,
      texture: a.texture,
      matrix: a.transform,
      fill: s.fill ?? null,
    }
  } else if (n instanceof Mf) {
    const a = n
    return (
      a.buildLinearGradient(),
      { ...s, color: 16777215, texture: a.texture, matrix: a.transform }
    )
  }
  const i = { ...t, ...e }
  if (i.texture) {
    if (i.texture !== Et.WHITE) {
      const l = ((o = i.matrix) == null ? void 0 : o.invert()) || new St()
      l.scale(1 / i.texture.frame.width, 1 / i.texture.frame.height),
        (i.matrix = l)
    }
    const a = i.texture.source.style
    a.addressMode === 'clamp-to-edge' && (a.addressMode = 'repeat')
  }
  const r = le.shared.setValue(i.color)
  return (
    (i.alpha *= r.alpha),
    (i.color = r.toNumber()),
    (i.matrix = i.matrix ? i.matrix.clone() : null),
    i
  )
}
const m2 = new qt(),
  xh = new St(),
  sl = class Ue extends ss {
    constructor() {
      super(...arguments),
        (this.uid = Gt('graphicsContext')),
        (this.dirty = !0),
        (this.batchMode = 'auto'),
        (this.instructions = []),
        (this._activePath = new Tn()),
        (this._transform = new St()),
        (this._fillStyle = { ...Ue.defaultFillStyle }),
        (this._strokeStyle = { ...Ue.defaultStrokeStyle }),
        (this._stateStack = []),
        (this._tick = 0),
        (this._bounds = new je()),
        (this._boundsDirty = !0)
    }
    clone() {
      const t = new Ue()
      return (
        (t.batchMode = this.batchMode),
        (t.instructions = this.instructions.slice()),
        (t._activePath = this._activePath.clone()),
        (t._transform = this._transform.clone()),
        (t._fillStyle = { ...this._fillStyle }),
        (t._strokeStyle = { ...this._strokeStyle }),
        (t._stateStack = this._stateStack.slice()),
        (t._bounds = this._bounds.clone()),
        (t._boundsDirty = !0),
        t
      )
    }
    get fillStyle() {
      return this._fillStyle
    }
    set fillStyle(t) {
      this._fillStyle = ps(t, Ue.defaultFillStyle)
    }
    get strokeStyle() {
      return this._strokeStyle
    }
    set strokeStyle(t) {
      this._strokeStyle = ps(t, Ue.defaultStrokeStyle)
    }
    setFillStyle(t) {
      return (this._fillStyle = ps(t, Ue.defaultFillStyle)), this
    }
    setStrokeStyle(t) {
      return (this._strokeStyle = ps(t, Ue.defaultStrokeStyle)), this
    }
    texture(t, s, n, i, r, o) {
      return (
        this.instructions.push({
          action: 'texture',
          data: {
            image: t,
            dx: n || 0,
            dy: i || 0,
            dw: r || t.frame.width,
            dh: o || t.frame.height,
            transform: this._transform.clone(),
            alpha: this._fillStyle.alpha,
            style: s ? le.shared.setValue(s).toNumber() : 16777215,
          },
        }),
        this.onUpdate(),
        this
      )
    }
    beginPath() {
      return (this._activePath = new Tn()), this
    }
    fill(t, s) {
      let n
      const i = this.instructions[this.instructions.length - 1]
      return (
        this._tick === 0 && i && i.action === 'stroke'
          ? (n = i.data.path)
          : (n = this._activePath.clone()),
        n
          ? (t != null &&
              (s !== void 0 &&
                typeof t == 'number' &&
                (_e(
                  ge,
                  'GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead',
                ),
                (t = { color: t, alpha: s })),
              (this._fillStyle = ps(t, Ue.defaultFillStyle))),
            this.instructions.push({
              action: 'fill',
              data: { style: this.fillStyle, path: n },
            }),
            this.onUpdate(),
            this._initNextPathLocation(),
            (this._tick = 0),
            this)
          : this
      )
    }
    _initNextPathLocation() {
      const { x: t, y: s } = this._activePath.getLastPoint(qt.shared)
      this._activePath.clear(), this._activePath.moveTo(t, s)
    }
    stroke(t) {
      let s
      const n = this.instructions[this.instructions.length - 1]
      return (
        this._tick === 0 && n && n.action === 'fill'
          ? (s = n.data.path)
          : (s = this._activePath.clone()),
        s
          ? (t != null && (this._strokeStyle = ps(t, Ue.defaultStrokeStyle)),
            this.instructions.push({
              action: 'stroke',
              data: { style: this.strokeStyle, path: s },
            }),
            this.onUpdate(),
            this._initNextPathLocation(),
            (this._tick = 0),
            this)
          : this
      )
    }
    cut() {
      for (let t = 0; t < 2; t++) {
        const s = this.instructions[this.instructions.length - 1 - t],
          n = this._activePath.clone()
        if (s && (s.action === 'stroke' || s.action === 'fill'))
          if (s.data.hole) s.data.hole.addPath(n)
          else {
            s.data.hole = n
            break
          }
      }
      return this._initNextPathLocation(), this
    }
    arc(t, s, n, i, r, o) {
      this._tick++
      const a = this._transform
      return (
        this._activePath.arc(
          a.a * t + a.c * s + a.tx,
          a.b * t + a.d * s + a.ty,
          n,
          i,
          r,
          o,
        ),
        this
      )
    }
    arcTo(t, s, n, i, r) {
      this._tick++
      const o = this._transform
      return (
        this._activePath.arcTo(
          o.a * t + o.c * s + o.tx,
          o.b * t + o.d * s + o.ty,
          o.a * n + o.c * i + o.tx,
          o.b * n + o.d * i + o.ty,
          r,
        ),
        this
      )
    }
    arcToSvg(t, s, n, i, r, o, a) {
      this._tick++
      const l = this._transform
      return (
        this._activePath.arcToSvg(
          t,
          s,
          n,
          i,
          r,
          l.a * o + l.c * a + l.tx,
          l.b * o + l.d * a + l.ty,
        ),
        this
      )
    }
    bezierCurveTo(t, s, n, i, r, o, a) {
      this._tick++
      const l = this._transform
      return (
        this._activePath.bezierCurveTo(
          l.a * t + l.c * s + l.tx,
          l.b * t + l.d * s + l.ty,
          l.a * n + l.c * i + l.tx,
          l.b * n + l.d * i + l.ty,
          l.a * r + l.c * o + l.tx,
          l.b * r + l.d * o + l.ty,
          a,
        ),
        this
      )
    }
    closePath() {
      var t
      return this._tick++, (t = this._activePath) == null || t.closePath(), this
    }
    ellipse(t, s, n, i) {
      return (
        this._tick++,
        this._activePath.ellipse(t, s, n, i, this._transform.clone()),
        this
      )
    }
    circle(t, s, n) {
      return (
        this._tick++,
        this._activePath.circle(t, s, n, this._transform.clone()),
        this
      )
    }
    path(t) {
      return (
        this._tick++, this._activePath.addPath(t, this._transform.clone()), this
      )
    }
    lineTo(t, s) {
      this._tick++
      const n = this._transform
      return (
        this._activePath.lineTo(
          n.a * t + n.c * s + n.tx,
          n.b * t + n.d * s + n.ty,
        ),
        this
      )
    }
    moveTo(t, s) {
      this._tick++
      const n = this._transform,
        i = this._activePath.instructions,
        r = n.a * t + n.c * s + n.tx,
        o = n.b * t + n.d * s + n.ty
      return i.length === 1 && i[0].action === 'moveTo'
        ? ((i[0].data[0] = r), (i[0].data[1] = o), this)
        : (this._activePath.moveTo(r, o), this)
    }
    quadraticCurveTo(t, s, n, i, r) {
      this._tick++
      const o = this._transform
      return (
        this._activePath.quadraticCurveTo(
          o.a * t + o.c * s + o.tx,
          o.b * t + o.d * s + o.ty,
          o.a * n + o.c * i + o.tx,
          o.b * n + o.d * i + o.ty,
          r,
        ),
        this
      )
    }
    rect(t, s, n, i) {
      return (
        this._tick++,
        this._activePath.rect(t, s, n, i, this._transform.clone()),
        this
      )
    }
    roundRect(t, s, n, i, r) {
      return (
        this._tick++,
        this._activePath.roundRect(t, s, n, i, r, this._transform.clone()),
        this
      )
    }
    poly(t, s) {
      return (
        this._tick++, this._activePath.poly(t, s, this._transform.clone()), this
      )
    }
    regularPoly(t, s, n, i, r = 0, o) {
      return this._tick++, this._activePath.regularPoly(t, s, n, i, r, o), this
    }
    roundPoly(t, s, n, i, r, o) {
      return this._tick++, this._activePath.roundPoly(t, s, n, i, r, o), this
    }
    roundShape(t, s, n, i) {
      return this._tick++, this._activePath.roundShape(t, s, n, i), this
    }
    filletRect(t, s, n, i, r) {
      return this._tick++, this._activePath.filletRect(t, s, n, i, r), this
    }
    chamferRect(t, s, n, i, r, o) {
      return this._tick++, this._activePath.chamferRect(t, s, n, i, r, o), this
    }
    star(t, s, n, i, r = 0, o = 0) {
      return (
        this._tick++,
        this._activePath.star(t, s, n, i, r, o, this._transform.clone()),
        this
      )
    }
    svg(t) {
      return this._tick++, d2(t, this), this
    }
    restore() {
      const t = this._stateStack.pop()
      return (
        t &&
          ((this._transform = t.transform),
          (this._fillStyle = t.fillStyle),
          (this._strokeStyle = t.strokeStyle)),
        this
      )
    }
    save() {
      return (
        this._stateStack.push({
          transform: this._transform.clone(),
          fillStyle: { ...this._fillStyle },
          strokeStyle: { ...this._strokeStyle },
        }),
        this
      )
    }
    getTransform() {
      return this._transform
    }
    resetTransform() {
      return this._transform.identity(), this
    }
    rotate(t) {
      return this._transform.rotate(t), this
    }
    scale(t, s = t) {
      return this._transform.scale(t, s), this
    }
    setTransform(t, s, n, i, r, o) {
      return t instanceof St
        ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this)
        : (this._transform.set(t, s, n, i, r, o), this)
    }
    transform(t, s, n, i, r, o) {
      return t instanceof St
        ? (this._transform.append(t), this)
        : (xh.set(t, s, n, i, r, o), this._transform.append(xh), this)
    }
    translate(t, s = t) {
      return this._transform.translate(t, s), this
    }
    clear() {
      return (
        (this.instructions.length = 0),
        this.resetTransform(),
        this.onUpdate(),
        this
      )
    }
    onUpdate() {
      this.dirty ||
        (this.emit('update', this, 16),
        (this.dirty = !0),
        (this._boundsDirty = !0))
    }
    get bounds() {
      if (!this._boundsDirty) return this._bounds
      const t = this._bounds
      t.clear()
      for (let s = 0; s < this.instructions.length; s++) {
        const n = this.instructions[s],
          i = n.action
        if (i === 'fill') {
          const r = n.data
          t.addBounds(r.path.bounds)
        } else if (i === 'texture') {
          const r = n.data
          t.addFrame(r.dx, r.dy, r.dx + r.dw, r.dy + r.dh, r.transform)
        }
        if (i === 'stroke') {
          const r = n.data,
            o = r.style.width / 2,
            a = r.path.bounds
          t.addFrame(a.minX - o, a.minY - o, a.maxX + o, a.maxY + o)
        }
      }
      return t
    }
    containsPoint(t) {
      var i
      if (!this.bounds.containsPoint(t.x, t.y)) return !1
      const s = this.instructions
      let n = !1
      for (let r = 0; r < s.length; r++) {
        const o = s[r],
          a = o.data,
          l = a.path
        if (!o.action || !l) continue
        const h = a.style,
          c = l.shapePath.shapePrimitives
        for (let u = 0; u < c.length; u++) {
          const d = c[u].shape
          if (!h || !d) continue
          const f = c[u].transform,
            p = f ? f.applyInverse(t, m2) : t
          o.action === 'fill'
            ? (n = d.contains(p.x, p.y))
            : (n = d.strokeContains(p.x, p.y, h.width))
          const g = a.hole
          if (g) {
            const m = (i = g.shapePath) == null ? void 0 : i.shapePrimitives
            if (m)
              for (let b = 0; b < m.length; b++)
                m[b].shape.contains(p.x, p.y) && (n = !1)
          }
          if (n) return !0
        }
      }
      return n
    }
    destroy(t = !1) {
      if (
        ((this._stateStack.length = 0),
        (this._transform = null),
        this.emit('destroy', this),
        this.removeAllListeners(),
        typeof t == 'boolean' ? t : t == null ? void 0 : t.texture)
      ) {
        const n =
          typeof t == 'boolean' ? t : t == null ? void 0 : t.textureSource
        this._fillStyle.texture && this._fillStyle.texture.destroy(n),
          this._strokeStyle.texture && this._strokeStyle.texture.destroy(n)
      }
      ;(this._fillStyle = null),
        (this._strokeStyle = null),
        (this.instructions = null),
        (this._activePath = null),
        (this._bounds = null),
        (this._stateStack = null),
        (this.customShader = null),
        (this._transform = null)
    }
  }
sl.defaultFillStyle = {
  color: 16777215,
  alpha: 1,
  texture: Et.WHITE,
  matrix: null,
  fill: null,
}
sl.defaultStrokeStyle = {
  width: 1,
  color: 16777215,
  alpha: 1,
  alignment: 0.5,
  miterLimit: 10,
  cap: 'butt',
  join: 'miter',
  texture: Et.WHITE,
  matrix: null,
  fill: null,
}
let ia = sl
function nl(e, t = 1) {
  var n
  const s = (n = kn.RETINA_PREFIX) == null ? void 0 : n.exec(e)
  return s ? parseFloat(s[1]) : t
}
function il(e, t, s) {
  ;(e.label = s), (e._sourceOrigin = s)
  const n = new Et({ source: e, label: s }),
    i = () => {
      delete t.promiseCache[s], se.has(s) && se.remove(s)
    }
  return (
    n.source.once('destroy', () => {
      t.promiseCache[s] &&
        (Wt(
          '[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource.',
        ),
        i())
    }),
    n.once('destroy', () => {
      e.destroyed ||
        (Wt(
          '[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.',
        ),
        i())
    }),
    n
  )
}
const g2 = '.svg',
  _2 = 'image/svg+xml',
  y2 = {
    extension: { type: ot.LoadParser, priority: tn.Low },
    name: 'loadSVG',
    config: { crossOrigin: 'anonymous', parseAsGraphicsContext: !1 },
    test(e) {
      return Ln(e, _2) || Bn(e, g2)
    },
    async load(e, t, s) {
      return t.data.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext
        ? b2(e)
        : x2(e, t, s, this.config.crossOrigin)
    },
    unload(e) {
      e.destroy(!0)
    },
  }
async function x2(e, t, s, n) {
  var m, b, y
  const r = await (await jt.get().fetch(e)).blob(),
    o = URL.createObjectURL(r),
    a = new Image()
  ;(a.src = o), (a.crossOrigin = n), await a.decode(), URL.revokeObjectURL(o)
  const l = document.createElement('canvas'),
    h = l.getContext('2d'),
    c = ((m = t.data) == null ? void 0 : m.resolution) || nl(e),
    u = ((b = t.data) == null ? void 0 : b.width) ?? a.width,
    d = ((y = t.data) == null ? void 0 : y.height) ?? a.height
  ;(l.width = u * c), (l.height = d * c), h.drawImage(a, 0, 0, u * c, d * c)
  const { parseAsGraphicsContext: f, ...p } = t.data,
    g = new Ei({
      resource: l,
      alphaMode: 'premultiply-alpha-on-upload',
      resolution: c,
      ...p,
    })
  return il(g, s, e)
}
async function b2(e) {
  const s = await (await jt.get().fetch(e)).text(),
    n = new ia()
  return n.svg(s), n
}
const v2 = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`
let gn = null,
  ra = class {
    constructor() {
      gn ||
        (gn = URL.createObjectURL(
          new Blob([v2], { type: 'application/javascript' }),
        )),
        (this.worker = new Worker(gn))
    }
  }
ra.revokeObjectURL = function () {
  gn && (URL.revokeObjectURL(gn), (gn = null))
}
const w2 = `(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`
let _n = null
class If {
  constructor() {
    _n ||
      (_n = URL.createObjectURL(
        new Blob([w2], { type: 'application/javascript' }),
      )),
      (this.worker = new Worker(_n))
  }
}
If.revokeObjectURL = function () {
  _n && (URL.revokeObjectURL(_n), (_n = null))
}
let bh = 0,
  _o
class A2 {
  constructor() {
    ;(this._initialized = !1),
      (this._createdWorkers = 0),
      (this._workerPool = []),
      (this._queue = []),
      (this._resolveHash = {})
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0
      ? this._isImageBitmapSupported
      : ((this._isImageBitmapSupported = new Promise((t) => {
          const { worker: s } = new ra()
          s.addEventListener('message', (n) => {
            s.terminate(), ra.revokeObjectURL(), t(n.data)
          })
        })),
        this._isImageBitmapSupported)
  }
  loadImageBitmap(t) {
    return this._run('loadImageBitmap', [t])
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0)
  }
  _getWorker() {
    _o === void 0 && (_o = navigator.hardwareConcurrency || 4)
    let t = this._workerPool.pop()
    return (
      !t &&
        this._createdWorkers < _o &&
        (this._createdWorkers++,
        (t = new If().worker),
        t.addEventListener('message', (s) => {
          this._complete(s.data), this._returnWorker(s.target), this._next()
        })),
      t
    )
  }
  _returnWorker(t) {
    this._workerPool.push(t)
  }
  _complete(t) {
    t.error !== void 0
      ? this._resolveHash[t.uuid].reject(t.error)
      : this._resolveHash[t.uuid].resolve(t.data),
      (this._resolveHash[t.uuid] = null)
  }
  async _run(t, s) {
    await this._initWorkers()
    const n = new Promise((i, r) => {
      this._queue.push({ id: t, arguments: s, resolve: i, reject: r })
    })
    return this._next(), n
  }
  _next() {
    if (!this._queue.length) return
    const t = this._getWorker()
    if (!t) return
    const s = this._queue.pop(),
      n = s.id
    ;(this._resolveHash[bh] = { resolve: s.resolve, reject: s.reject }),
      t.postMessage({ data: s.arguments, uuid: bh++, id: n })
  }
}
const vh = new A2(),
  S2 = ['.jpeg', '.jpg', '.png', '.webp', '.avif'],
  C2 = ['image/jpeg', 'image/png', 'image/webp', 'image/avif']
async function E2(e) {
  const t = await jt.get().fetch(e)
  if (!t.ok)
    throw new Error(
      `[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`,
    )
  const s = await t.blob()
  return await createImageBitmap(s)
}
const Rf = {
    name: 'loadTextures',
    extension: { type: ot.LoadParser, priority: tn.High },
    config: {
      preferWorkers: !0,
      preferCreateImageBitmap: !0,
      crossOrigin: 'anonymous',
    },
    test(e) {
      return Ln(e, C2) || Bn(e, S2)
    },
    async load(e, t, s) {
      var r
      let n = null
      globalThis.createImageBitmap && this.config.preferCreateImageBitmap
        ? this.config.preferWorkers && (await vh.isImageBitmapSupported())
          ? (n = await vh.loadImageBitmap(e))
          : (n = await E2(e))
        : (n = await new Promise((o) => {
            ;(n = new Image()),
              (n.crossOrigin = this.config.crossOrigin),
              (n.src = e),
              n.complete
                ? o(n)
                : (n.onload = () => {
                    o(n)
                  })
          }))
      const i = new Ei({
        resource: n,
        alphaMode: 'premultiply-alpha-on-upload',
        resolution: ((r = t.data) == null ? void 0 : r.resolution) || nl(e),
        ...t.data,
      })
      return il(i, s, e)
    },
    unload(e) {
      e.destroy(!0)
    },
  },
  kf = ['.mp4', '.m4v', '.webm', '.ogg', '.ogv', '.h264', '.avi', '.mov'],
  P2 = kf.map((e) => `video/${e.substring(1)}`)
function T2(e, t, s) {
  s === void 0 && !t.startsWith('data:')
    ? (e.crossOrigin = I2(t))
    : s !== !1 && (e.crossOrigin = typeof s == 'string' ? s : 'anonymous')
}
function M2(e) {
  return new Promise((t, s) => {
    e.addEventListener('canplaythrough', n),
      e.addEventListener('error', i),
      e.load()
    function n() {
      r(), t()
    }
    function i(o) {
      r(), s(o)
    }
    function r() {
      e.removeEventListener('canplaythrough', n),
        e.removeEventListener('error', i)
    }
  })
}
function I2(e, t = globalThis.location) {
  if (e.startsWith('data:')) return ''
  t = t || globalThis.location
  const s = new URL(e, document.baseURI)
  return s.hostname !== t.hostname ||
    s.port !== t.port ||
    s.protocol !== t.protocol
    ? 'anonymous'
    : ''
}
const R2 = {
    name: 'loadVideo',
    extension: { type: ot.LoadParser },
    config: null,
    test(e) {
      const t = Ln(e, P2),
        s = Bn(e, kf)
      return t || s
    },
    async load(e, t, s) {
      var l, h
      const n = {
          ...Qi.defaultOptions,
          resolution: ((l = t.data) == null ? void 0 : l.resolution) || nl(e),
          alphaMode:
            ((h = t.data) == null ? void 0 : h.alphaMode) || (await tf()),
          ...t.data,
        },
        i = document.createElement('video'),
        r = {
          preload: n.autoLoad !== !1 ? 'auto' : void 0,
          'webkit-playsinline': n.playsinline !== !1 ? '' : void 0,
          playsinline: n.playsinline !== !1 ? '' : void 0,
          muted: n.muted === !0 ? '' : void 0,
          loop: n.loop === !0 ? '' : void 0,
          autoplay: n.autoPlay !== !1 ? '' : void 0,
        }
      Object.keys(r).forEach((c) => {
        const u = r[c]
        u !== void 0 && i.setAttribute(c, u)
      }),
        n.muted === !0 && (i.muted = !0),
        T2(i, e, n.crossorigin)
      const o = document.createElement('source')
      let a
      if (e.startsWith('data:')) a = e.slice(5, e.indexOf(';'))
      else if (!e.startsWith('blob:')) {
        const c = e
          .split('?')[0]
          .slice(e.lastIndexOf('.') + 1)
          .toLowerCase()
        a = Qi.MIME_TYPES[c] || `video/${c}`
      }
      return (
        (o.src = e),
        a && (o.type = a),
        new Promise((c) => {
          const u = async () => {
            const d = new Qi({ ...n, resource: i })
            i.removeEventListener('canplay', u),
              t.data.preload && (await M2(i)),
              c(il(d, s, e))
          }
          i.addEventListener('canplay', u), i.appendChild(o)
        })
      )
    },
    unload(e) {
      e.destroy(!0)
    },
  },
  Lf = {
    extension: ot.ResolveParser,
    test: Rf.test,
    parse: (e) => {
      var t
      return {
        resolution: parseFloat(
          ((t = kn.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) ?? '1',
        ),
        format: e.split('.').pop(),
        src: e,
      }
    },
  },
  k2 = {
    extension: ot.ResolveParser,
    test: (e) => kn.RETINA_PREFIX.test(e) && e.endsWith('.json'),
    parse: Lf.parse,
  }
class L2 {
  constructor() {
    ;(this._detections = []),
      (this._initialized = !1),
      (this.resolver = new kn()),
      (this.loader = new tv()),
      (this.cache = se),
      (this._backgroundLoader = new Wb(this.loader)),
      (this._backgroundLoader.active = !0),
      this.reset()
  }
  async init(t = {}) {
    var r, o
    if (this._initialized) {
      Wt(
        '[Assets]AssetManager already initialized, did you load before calling this Assets.init()?',
      )
      return
    }
    if (
      ((this._initialized = !0),
      t.defaultSearchParams &&
        this.resolver.setDefaultSearchParams(t.defaultSearchParams),
      t.basePath && (this.resolver.basePath = t.basePath),
      t.bundleIdentifier &&
        this.resolver.setBundleIdentifier(t.bundleIdentifier),
      t.manifest)
    ) {
      let a = t.manifest
      typeof a == 'string' && (a = await this.load(a)),
        this.resolver.addManifest(a)
    }
    const s = ((r = t.texturePreference) == null ? void 0 : r.resolution) ?? 1,
      n = typeof s == 'number' ? [s] : s,
      i = await this._detectFormats({
        preferredFormats: (o = t.texturePreference) == null ? void 0 : o.format,
        skipDetections: t.skipDetections,
        detections: this._detections,
      })
    this.resolver.prefer({ params: { format: i, resolution: n } }),
      t.preferences && this.setPreferences(t.preferences)
  }
  add(t) {
    this.resolver.add(t)
  }
  async load(t, s) {
    this._initialized || (await this.init())
    const n = dr(t),
      i = ke(t).map((a) => {
        if (typeof a != 'string') {
          const l = this.resolver.getAlias(a)
          return (
            l.some((h) => !this.resolver.hasKey(h)) && this.add(a),
            Array.isArray(l) ? l[0] : l
          )
        }
        return this.resolver.hasKey(a) || this.add({ alias: a, src: a }), a
      }),
      r = this.resolver.resolve(i),
      o = await this._mapLoadToResolve(r, s)
    return n ? o[i[0]] : o
  }
  addBundle(t, s) {
    this.resolver.addBundle(t, s)
  }
  async loadBundle(t, s) {
    this._initialized || (await this.init())
    let n = !1
    typeof t == 'string' && ((n = !0), (t = [t]))
    const i = this.resolver.resolveBundle(t),
      r = {},
      o = Object.keys(i)
    let a = 0,
      l = 0
    const h = () => {
        s == null || s(++a / l)
      },
      c = o.map((u) => {
        const d = i[u]
        return (
          (l += Object.keys(d).length),
          this._mapLoadToResolve(d, h).then((f) => {
            r[u] = f
          })
        )
      })
    return await Promise.all(c), n ? r[t[0]] : r
  }
  async backgroundLoad(t) {
    this._initialized || (await this.init()), typeof t == 'string' && (t = [t])
    const s = this.resolver.resolve(t)
    this._backgroundLoader.add(Object.values(s))
  }
  async backgroundLoadBundle(t) {
    this._initialized || (await this.init()), typeof t == 'string' && (t = [t])
    const s = this.resolver.resolveBundle(t)
    Object.values(s).forEach((n) => {
      this._backgroundLoader.add(Object.values(n))
    })
  }
  reset() {
    this.resolver.reset(),
      this.loader.reset(),
      this.cache.reset(),
      (this._initialized = !1)
  }
  get(t) {
    if (typeof t == 'string') return se.get(t)
    const s = {}
    for (let n = 0; n < t.length; n++) s[n] = se.get(t[n])
    return s
  }
  async _mapLoadToResolve(t, s) {
    const n = [...new Set(Object.values(t))]
    this._backgroundLoader.active = !1
    const i = await this.loader.load(n, s)
    this._backgroundLoader.active = !0
    const r = {}
    return (
      n.forEach((o) => {
        const a = i[o.src],
          l = [o.src]
        o.alias && l.push(...o.alias),
          l.forEach((h) => {
            r[h] = a
          }),
          se.set(l, a)
      }),
      r
    )
  }
  async unload(t) {
    this._initialized || (await this.init())
    const s = ke(t).map((i) => (typeof i != 'string' ? i.src : i)),
      n = this.resolver.resolve(s)
    await this._unloadFromResolved(n)
  }
  async unloadBundle(t) {
    this._initialized || (await this.init()), (t = ke(t))
    const s = this.resolver.resolveBundle(t),
      n = Object.keys(s).map((i) => this._unloadFromResolved(s[i]))
    await Promise.all(n)
  }
  async _unloadFromResolved(t) {
    const s = Object.values(t)
    s.forEach((n) => {
      se.remove(n.src)
    }),
      await this.loader.unload(s)
  }
  async _detectFormats(t) {
    let s = []
    t.preferredFormats &&
      (s = Array.isArray(t.preferredFormats)
        ? t.preferredFormats
        : [t.preferredFormats])
    for (const n of t.detections)
      t.skipDetections || (await n.test())
        ? (s = await n.add(s))
        : t.skipDetections || (s = await n.remove(s))
    return (s = s.filter((n, i) => s.indexOf(n) === i)), s
  }
  get detections() {
    return this._detections
  }
  setPreferences(t) {
    this.loader.parsers.forEach((s) => {
      s.config &&
        Object.keys(s.config)
          .filter((n) => n in t)
          .forEach((n) => {
            s.config[n] = t[n]
          })
    })
  }
}
const Zn = new L2()
Pe.handleByList(ot.LoadParser, Zn.loader.parsers)
  .handleByList(ot.ResolveParser, Zn.resolver.parsers)
  .handleByList(ot.CacheParser, Zn.cache.parsers)
  .handleByList(ot.DetectionParser, Zn.detections)
Pe.add(jb, Xb, Yb, Jb, qb, Zb, Qb, nv, ov, pv, y2, Rf, R2, Lf, k2)
const wh = {
  loader: ot.LoadParser,
  resolver: ot.ResolveParser,
  cache: ot.CacheParser,
  detection: ot.DetectionParser,
}
Pe.handle(
  ot.Asset,
  (e) => {
    const t = e.ref
    Object.entries(wh)
      .filter(([s]) => !!t[s])
      .forEach(([s, n]) =>
        Pe.add(Object.assign(t[s], { extension: t[s].extension ?? n })),
      )
  },
  (e) => {
    const t = e.ref
    Object.keys(wh)
      .filter((s) => !!t[s])
      .forEach((s) => Pe.remove(t[s]))
  },
)
class B2 extends Yt {
  constructor(t, s) {
    const {
      text: n,
      resolution: i,
      style: r,
      anchor: o,
      width: a,
      height: l,
      roundPixels: h,
      ...c
    } = t
    super({ ...c }),
      (this.batched = !0),
      (this.resolution = null),
      (this._didTextUpdate = !0),
      (this._roundPixels = 0),
      (this._bounds = new je()),
      (this._boundsDirty = !0),
      (this._styleClass = s),
      (this.text = n ?? ''),
      (this.style = r),
      (this.resolution = i ?? null),
      (this.allowChildren = !1),
      (this._anchor = new oe({
        _onUpdate: () => {
          this.onViewUpdate()
        },
      })),
      o && (this.anchor = o),
      (this.roundPixels = h ?? !1),
      a && (this.width = a),
      l && (this.height = l)
  }
  get anchor() {
    return this._anchor
  }
  set anchor(t) {
    typeof t == 'number' ? this._anchor.set(t) : this._anchor.copyFrom(t)
  }
  get roundPixels() {
    return !!this._roundPixels
  }
  set roundPixels(t) {
    this._roundPixels = t ? 1 : 0
  }
  set text(t) {
    ;(t = t.toString()),
      this._text !== t && ((this._text = t), this.onViewUpdate())
  }
  get text() {
    return this._text
  }
  get style() {
    return this._style
  }
  set style(t) {
    var s
    ;(t = t || {}),
      (s = this._style) == null || s.off('update', this.onViewUpdate, this),
      t instanceof this._styleClass
        ? (this._style = t)
        : (this._style = new this._styleClass(t)),
      this._style.on('update', this.onViewUpdate, this),
      this.onViewUpdate()
  }
  get bounds() {
    return (
      this._boundsDirty && (this._updateBounds(), (this._boundsDirty = !1)),
      this._bounds
    )
  }
  get width() {
    return Math.abs(this.scale.x) * this.bounds.width
  }
  set width(t) {
    this._setWidth(t, this.bounds.width)
  }
  get height() {
    return Math.abs(this.scale.y) * this.bounds.height
  }
  set height(t) {
    this._setHeight(t, this.bounds.height)
  }
  getSize(t) {
    return (
      t || (t = {}),
      (t.width = Math.abs(this.scale.x) * this.bounds.width),
      (t.height = Math.abs(this.scale.y) * this.bounds.height),
      t
    )
  }
  setSize(t, s) {
    let n, i
    typeof t != 'object'
      ? ((n = t), (i = s ?? t))
      : ((n = t.width), (i = t.height ?? t.width)),
      n !== void 0 && this._setWidth(n, this.bounds.width),
      i !== void 0 && this._setHeight(i, this.bounds.height)
  }
  addBounds(t) {
    const s = this.bounds
    t.addFrame(s.minX, s.minY, s.maxX, s.maxY)
  }
  containsPoint(t) {
    const s = this.bounds.maxX,
      n = this.bounds.maxY,
      i = -s * this.anchor.x
    let r = 0
    return (
      t.x >= i &&
      t.x <= i + s &&
      ((r = -n * this.anchor.y), t.y >= r && t.y <= r + n)
    )
  }
  onViewUpdate() {
    ;(this._didChangeId += 4096),
      (this._boundsDirty = !0),
      !this.didViewUpdate &&
        ((this.didViewUpdate = !0),
        (this._didTextUpdate = !0),
        this.renderGroup && this.renderGroup.onChildViewUpdate(this))
  }
  _getKey() {
    return `${this.text}:${this._style.styleKey}`
  }
  destroy(t = !1) {
    super.destroy(t),
      (this.owner = null),
      (this._bounds = null),
      (this._anchor = null),
      (typeof t == 'boolean' ? t : t != null && t.style) &&
        this._style.destroy(t),
      (this._style = null),
      (this._text = null)
  }
}
function O2(e, t) {
  let s = e[0] ?? {}
  return (
    (typeof s == 'string' || e[1]) &&
      (_e(ge, `use new ${t}({ text: "hi!", style }) instead`),
      (s = { text: s, style: e[1] })),
    s
  )
}
const F2 = [
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
]
function $2(e) {
  const t = typeof e.fontSize == 'number' ? `${e.fontSize}px` : e.fontSize
  let s = e.fontFamily
  Array.isArray(e.fontFamily) || (s = e.fontFamily.split(','))
  for (let n = s.length - 1; n >= 0; n--) {
    let i = s[n].trim()
    !/([\"\'])[^\'\"]+\1/.test(i) && !F2.includes(i) && (i = `"${i}"`),
      (s[n] = i)
  }
  return `${e.fontStyle} ${e.fontVariant} ${e.fontWeight} ${t} ${s.join(',')}`
}
const yo = { willReadFrequently: !0 },
  Ne = class j {
    static get experimentalLetterSpacingSupported() {
      let t = j._experimentalLetterSpacingSupported
      if (t !== void 0) {
        const s = jt.get().getCanvasRenderingContext2D().prototype
        t = j._experimentalLetterSpacingSupported =
          'letterSpacing' in s || 'textLetterSpacing' in s
      }
      return t
    }
    constructor(t, s, n, i, r, o, a, l, h) {
      ;(this.text = t),
        (this.style = s),
        (this.width = n),
        (this.height = i),
        (this.lines = r),
        (this.lineWidths = o),
        (this.lineHeight = a),
        (this.maxLineWidth = l),
        (this.fontProperties = h)
    }
    static measureText(t = ' ', s, n = j._canvas, i = s.wordWrap) {
      var y
      const r = `${t}:${s.styleKey}`
      if (j._measurementCache[r]) return j._measurementCache[r]
      const o = $2(s),
        a = j.measureFont(o)
      a.fontSize === 0 && ((a.fontSize = s.fontSize), (a.ascent = s.fontSize))
      const l = j.__context
      l.font = o
      const c = (i ? j._wordWrap(t, s, n) : t).split(/(?:\r\n|\r|\n)/),
        u = new Array(c.length)
      let d = 0
      for (let v = 0; v < c.length; v++) {
        const w = j._measureText(c[v], s.letterSpacing, l)
        ;(u[v] = w), (d = Math.max(d, w))
      }
      const f = ((y = s._stroke) == null ? void 0 : y.width) || 0
      let p = d + f
      s.dropShadow && (p += s.dropShadow.distance)
      const g = s.lineHeight || a.fontSize + f
      let m = Math.max(g, a.fontSize + f * 2) + (c.length - 1) * (g + s.leading)
      return (
        s.dropShadow && (m += s.dropShadow.distance),
        new j(t, s, p, m, c, u, g + s.leading, d, a)
      )
    }
    static _measureText(t, s, n) {
      let i = !1
      j.experimentalLetterSpacingSupported &&
        (j.experimentalLetterSpacing
          ? ((n.letterSpacing = `${s}px`),
            (n.textLetterSpacing = `${s}px`),
            (i = !0))
          : ((n.letterSpacing = '0px'), (n.textLetterSpacing = '0px')))
      let r = n.measureText(t).width
      return (
        r > 0 &&
          (i ? (r -= s) : (r += (j.graphemeSegmenter(t).length - 1) * s)),
        r
      )
    }
    static _wordWrap(t, s, n = j._canvas) {
      const i = n.getContext('2d', yo)
      let r = 0,
        o = '',
        a = ''
      const l = Object.create(null),
        { letterSpacing: h, whiteSpace: c } = s,
        u = j._collapseSpaces(c),
        d = j._collapseNewlines(c)
      let f = !u
      const p = s.wordWrapWidth + h,
        g = j._tokenize(t)
      for (let m = 0; m < g.length; m++) {
        let b = g[m]
        if (j._isNewline(b)) {
          if (!d) {
            ;(a += j._addLine(o)), (f = !u), (o = ''), (r = 0)
            continue
          }
          b = ' '
        }
        if (u) {
          const v = j.isBreakingSpace(b),
            w = j.isBreakingSpace(o[o.length - 1])
          if (v && w) continue
        }
        const y = j._getFromCache(b, h, l, i)
        if (y > p)
          if (
            (o !== '' && ((a += j._addLine(o)), (o = ''), (r = 0)),
            j.canBreakWords(b, s.breakWords))
          ) {
            const v = j.wordWrapSplit(b)
            for (let w = 0; w < v.length; w++) {
              let M = v[w],
                k = M,
                E = 1
              for (; v[w + E]; ) {
                const S = v[w + E]
                if (!j.canBreakChars(k, S, b, w, s.breakWords)) M += S
                else break
                ;(k = S), E++
              }
              w += E - 1
              const C = j._getFromCache(M, h, l, i)
              C + r > p && ((a += j._addLine(o)), (f = !1), (o = ''), (r = 0)),
                (o += M),
                (r += C)
            }
          } else {
            o.length > 0 && ((a += j._addLine(o)), (o = ''), (r = 0))
            const v = m === g.length - 1
            ;(a += j._addLine(b, !v)), (f = !1), (o = ''), (r = 0)
          }
        else
          y + r > p && ((f = !1), (a += j._addLine(o)), (o = ''), (r = 0)),
            (o.length > 0 || !j.isBreakingSpace(b) || f) && ((o += b), (r += y))
      }
      return (a += j._addLine(o, !1)), a
    }
    static _addLine(t, s = !0) {
      return (
        (t = j._trimRight(t)),
        (t = s
          ? `${t}
`
          : t),
        t
      )
    }
    static _getFromCache(t, s, n, i) {
      let r = n[t]
      return (
        typeof r != 'number' && ((r = j._measureText(t, s, i) + s), (n[t] = r)),
        r
      )
    }
    static _collapseSpaces(t) {
      return t === 'normal' || t === 'pre-line'
    }
    static _collapseNewlines(t) {
      return t === 'normal'
    }
    static _trimRight(t) {
      if (typeof t != 'string') return ''
      for (let s = t.length - 1; s >= 0; s--) {
        const n = t[s]
        if (!j.isBreakingSpace(n)) break
        t = t.slice(0, -1)
      }
      return t
    }
    static _isNewline(t) {
      return typeof t != 'string' ? !1 : j._newlines.includes(t.charCodeAt(0))
    }
    static isBreakingSpace(t, s) {
      return typeof t != 'string'
        ? !1
        : j._breakingSpaces.includes(t.charCodeAt(0))
    }
    static _tokenize(t) {
      const s = []
      let n = ''
      if (typeof t != 'string') return s
      for (let i = 0; i < t.length; i++) {
        const r = t[i],
          o = t[i + 1]
        if (j.isBreakingSpace(r, o) || j._isNewline(r)) {
          n !== '' && (s.push(n), (n = '')), s.push(r)
          continue
        }
        n += r
      }
      return n !== '' && s.push(n), s
    }
    static canBreakWords(t, s) {
      return s
    }
    static canBreakChars(t, s, n, i, r) {
      return !0
    }
    static wordWrapSplit(t) {
      return j.graphemeSegmenter(t)
    }
    static measureFont(t) {
      if (j._fonts[t]) return j._fonts[t]
      const s = j._context
      s.font = t
      const n = s.measureText(j.METRICS_STRING + j.BASELINE_SYMBOL),
        i = {
          ascent: n.actualBoundingBoxAscent,
          descent: n.actualBoundingBoxDescent,
          fontSize: n.actualBoundingBoxAscent + n.actualBoundingBoxDescent,
        }
      return (j._fonts[t] = i), i
    }
    static clearMetrics(t = '') {
      t ? delete j._fonts[t] : (j._fonts = {})
    }
    static get _canvas() {
      if (!j.__canvas) {
        let t
        try {
          const s = new OffscreenCanvas(0, 0),
            n = s.getContext('2d', yo)
          if (n != null && n.measureText) return (j.__canvas = s), s
          t = jt.get().createCanvas()
        } catch {
          t = jt.get().createCanvas()
        }
        ;(t.width = t.height = 10), (j.__canvas = t)
      }
      return j.__canvas
    }
    static get _context() {
      return (
        j.__context || (j.__context = j._canvas.getContext('2d', yo)),
        j.__context
      )
    }
  }
Ne.METRICS_STRING = '|ÉqÅ'
Ne.BASELINE_SYMBOL = 'M'
Ne.BASELINE_MULTIPLIER = 1.4
Ne.HEIGHT_MULTIPLIER = 2
Ne.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == 'function') {
    const e = new Intl.Segmenter()
    return (t) => [...e.segment(t)].map((s) => s.segment)
  }
  return (e) => [...e]
})()
Ne.experimentalLetterSpacing = !1
Ne._fonts = {}
Ne._newlines = [10, 13]
Ne._breakingSpaces = [
  9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
  12288,
]
Ne._measurementCache = {}
let N2 = Ne
const Ah = [
  '_fontFamily',
  '_fontStyle',
  '_fontSize',
  '_fontVariant',
  '_fontWeight',
  '_breakWords',
  '_align',
  '_leading',
  '_letterSpacing',
  '_lineHeight',
  '_textBaseline',
  '_whiteSpace',
  '_wordWrap',
  '_wordWrapWidth',
  '_padding',
  '_cssOverrides',
  '_trim',
]
function D2(e) {
  const t = []
  let s = 0
  for (let n = 0; n < Ah.length; n++) {
    const i = Ah[n]
    t[s++] = e[i]
  }
  return (s = Bf(e._fill, t, s)), (s = z2(e._stroke, t, s)), t.join('-')
}
function Bf(e, t, s) {
  var n
  return (
    e &&
      ((t[s++] = e.color),
      (t[s++] = e.alpha),
      (t[s++] = (n = e.fill) == null ? void 0 : n.uid)),
    s
  )
}
function z2(e, t, s) {
  return (
    e &&
      ((s = Bf(e, t, s)),
      (t[s++] = e.width),
      (t[s++] = e.alignment),
      (t[s++] = e.cap),
      (t[s++] = e.join),
      (t[s++] = e.miterLimit)),
    s
  )
}
const rl = class on extends ss {
  constructor(t = {}) {
    super(), V2(t)
    const s = { ...on.defaultTextStyle, ...t }
    for (const n in s) {
      const i = n
      this[i] = s[n]
    }
    this.update()
  }
  get align() {
    return this._align
  }
  set align(t) {
    ;(this._align = t), this.update()
  }
  get breakWords() {
    return this._breakWords
  }
  set breakWords(t) {
    ;(this._breakWords = t), this.update()
  }
  get dropShadow() {
    return this._dropShadow
  }
  set dropShadow(t) {
    t !== null && typeof t == 'object'
      ? (this._dropShadow = { ...on.defaultDropShadow, ...t })
      : (this._dropShadow = t ? { ...on.defaultDropShadow } : null),
      this.update()
  }
  get fontFamily() {
    return this._fontFamily
  }
  set fontFamily(t) {
    ;(this._fontFamily = t), this.update()
  }
  get fontSize() {
    return this._fontSize
  }
  set fontSize(t) {
    typeof t == 'string'
      ? (this._fontSize = parseInt(t, 10))
      : (this._fontSize = t),
      this.update()
  }
  get fontStyle() {
    return this._fontStyle
  }
  set fontStyle(t) {
    ;(this._fontStyle = t), this.update()
  }
  get fontVariant() {
    return this._fontVariant
  }
  set fontVariant(t) {
    ;(this._fontVariant = t), this.update()
  }
  get fontWeight() {
    return this._fontWeight
  }
  set fontWeight(t) {
    ;(this._fontWeight = t), this.update()
  }
  get leading() {
    return this._leading
  }
  set leading(t) {
    ;(this._leading = t), this.update()
  }
  get letterSpacing() {
    return this._letterSpacing
  }
  set letterSpacing(t) {
    ;(this._letterSpacing = t), this.update()
  }
  get lineHeight() {
    return this._lineHeight
  }
  set lineHeight(t) {
    ;(this._lineHeight = t), this.update()
  }
  get padding() {
    return this._padding
  }
  set padding(t) {
    ;(this._padding = t), this.update()
  }
  get trim() {
    return this._trim
  }
  set trim(t) {
    ;(this._trim = t), this.update()
  }
  get textBaseline() {
    return this._textBaseline
  }
  set textBaseline(t) {
    ;(this._textBaseline = t), this.update()
  }
  get whiteSpace() {
    return this._whiteSpace
  }
  set whiteSpace(t) {
    ;(this._whiteSpace = t), this.update()
  }
  get wordWrap() {
    return this._wordWrap
  }
  set wordWrap(t) {
    ;(this._wordWrap = t), this.update()
  }
  get wordWrapWidth() {
    return this._wordWrapWidth
  }
  set wordWrapWidth(t) {
    ;(this._wordWrapWidth = t), this.update()
  }
  get fill() {
    return this._originalFill
  }
  set fill(t) {
    t !== this._originalFill &&
      ((this._originalFill = t),
      (this._fill = ps(t === 0 ? 'black' : t, ia.defaultFillStyle)),
      this.update())
  }
  get stroke() {
    return this._originalStroke
  }
  set stroke(t) {
    t !== this._originalStroke &&
      ((this._originalStroke = t),
      (this._stroke = ps(t, ia.defaultStrokeStyle)),
      this.update())
  }
  _generateKey() {
    return (this._styleKey = D2(this)), this._styleKey
  }
  update() {
    ;(this._styleKey = null), this.emit('update', this)
  }
  reset() {
    const t = on.defaultTextStyle
    for (const s in t) this[s] = t[s]
  }
  get styleKey() {
    return this._styleKey || this._generateKey()
  }
  clone() {
    return new on({
      align: this.align,
      breakWords: this.breakWords,
      dropShadow: this.dropShadow,
      fill: this._fill,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontVariant: this.fontVariant,
      fontWeight: this.fontWeight,
      leading: this.leading,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      padding: this.padding,
      stroke: this._stroke,
      textBaseline: this.textBaseline,
      whiteSpace: this.whiteSpace,
      wordWrap: this.wordWrap,
      wordWrapWidth: this.wordWrapWidth,
    })
  }
  destroy(t = !1) {
    var n, i, r, o
    if (
      (this.removeAllListeners(),
      typeof t == 'boolean' ? t : t == null ? void 0 : t.texture)
    ) {
      const a = typeof t == 'boolean' ? t : t == null ? void 0 : t.textureSource
      ;(n = this._fill) != null && n.texture && this._fill.texture.destroy(a),
        (i = this._originalFill) != null &&
          i.texture &&
          this._originalFill.texture.destroy(a),
        (r = this._stroke) != null &&
          r.texture &&
          this._stroke.texture.destroy(a),
        (o = this._originalStroke) != null &&
          o.texture &&
          this._originalStroke.texture.destroy(a)
    }
    ;(this._fill = null),
      (this._stroke = null),
      (this.dropShadow = null),
      (this._originalStroke = null),
      (this._originalFill = null)
  }
}
rl.defaultDropShadow = {
  alpha: 1,
  angle: Math.PI / 6,
  blur: 0,
  color: 'black',
  distance: 5,
}
rl.defaultTextStyle = {
  align: 'left',
  breakWords: !1,
  dropShadow: null,
  fill: 'black',
  fontFamily: 'Arial',
  fontSize: 26,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  padding: 0,
  stroke: null,
  textBaseline: 'alphabetic',
  trim: !1,
  whiteSpace: 'pre',
  wordWrap: !1,
  wordWrapWidth: 100,
}
let ol = rl
function V2(e) {
  const t = e
  if (typeof t.dropShadow == 'boolean' && t.dropShadow) {
    const s = ol.defaultDropShadow
    e.dropShadow = {
      alpha: t.dropShadowAlpha ?? s.alpha,
      angle: t.dropShadowAngle ?? s.angle,
      blur: t.dropShadowBlur ?? s.blur,
      color: t.dropShadowColor ?? s.color,
      distance: t.dropShadowDistance ?? s.distance,
    }
  }
  if (t.strokeThickness !== void 0) {
    _e(ge, 'strokeThickness is now a part of stroke')
    const s = t.stroke
    e.stroke = { color: s, width: t.strokeThickness }
  }
  if (Array.isArray(t.fill)) {
    _e(ge, 'gradient fill is now a fill pattern: `new FillGradient(...)`')
    const s = new Mf(0, 0, 0, e.fontSize * 1.7),
      n = t.fill.map((i) => le.shared.setValue(i).toNumber())
    n.forEach((i, r) => {
      const o = t.fillGradientStops[r] ?? r / n.length
      s.addColorStop(o, i)
    }),
      (e.fill = { fill: s })
  }
}
class U2 extends B2 {
  constructor(...t) {
    const s = O2(t, 'Text')
    super(s, ol), (this.renderPipeId = 'text')
  }
  _updateBounds() {
    const t = this._bounds,
      s = this._style.padding,
      n = this._anchor,
      i = N2.measureText(this._text, this._style),
      { width: r, height: o } = i
    ;(t.minX = -n._x * r - s),
      (t.maxX = t.minX + r),
      (t.minY = -n._y * o - s),
      (t.maxY = t.minY + o)
  }
}
Pe.add(vx, wx)
class H2 {
  constructor() {
    Pt(this, 'app')
    Pt(this, 'isInited')
    Pt(this, 'resizeQueue')
    Pt(this, 'background')
    Pt(this, 'backgroundSprite')
    ;(this.app = new pf()), (this.isInited = !1), (this.resizeQueue = new Map())
  }
  async init(t) {
    this.isInited || (await this.app.init(t), (this.isInited = !0))
  }
  resize() {
    this.isInited &&
      (this.app.resize(),
      this.resizeQueue.forEach((t) =>
        t(this.app.screen.width, this.app.screen.height),
      ))
  }
  addChild(t, s) {
    this.app.stage.addChild(t), s && this.resizeQueue.set(t, s)
  }
  removeChild(t) {
    this.app.stage.removeChild(t),
      this.resizeQueue.has(t) && this.resizeQueue.delete(t)
  }
  async loadBackground(t) {
    this.background = new Yt()
    const s = await Zn.load(t)
    ;(this.backgroundSprite = new As(s)),
      this.background.addChild(this.backgroundSprite),
      this.addChild(this.background, this.resizeBackground.bind(this))
  }
  resizeBackground(t, s) {
    this.background.visible &&
      ((this.background.scale = s / this.backgroundSprite.height),
      (this.background.x = t / 2 - this.background.width / 2),
      (this.background.y = s / 2 - this.background.height / 2))
  }
}
const te = new H2()
class G2 {
  constructor() {
    Pt(this, 'container')
    Pt(this, 'isLoaded')
    Pt(this, 'videoTexture')
    Pt(this, 'videoSprite')
    Pt(this, 'videoResource')
    Pt(this, 'texts', new Set())
    ;(this.container = new Yt()), (this.isLoaded = !1)
  }
  async loadVideo(t) {
    ;(this.isLoaded = !1),
      (this.videoTexture = Et.from(t)),
      (this.videoTexture.source.autoPlay = !1),
      (this.videoTexture.source.preload = !0),
      (this.videoResource = this.videoTexture.source.resource),
      (this.videoSprite = new As(this.videoTexture)),
      this.container.removeChildren(),
      this.texts.clear(),
      this.container.addChild(this.videoSprite),
      this.container.setChildIndex(this.videoSprite, 0),
      (this.isLoaded = !0)
  }
  resizeVideo(t, s) {
    this.isLoaded &&
      ((this.container.scale = (s * 0.8) / this.videoSprite.height),
      (this.container.x = t / 2 - this.container.width / 2),
      (this.container.y = s / 2 - this.container.height / 2))
  }
  cropVideo(t, s, n, i) {
    this.texts.size !== 0 &&
      this.texts.forEach((r) => {
        ;(r.x = 0), (r.y = 0)
      }),
      (this.videoTexture.frame.x = t),
      (this.videoTexture.frame.y = s),
      (this.videoTexture.frame.width = n),
      (this.videoTexture.frame.height = i),
      (this.videoTexture.noFrame = !1),
      this.videoTexture.updateUvs(),
      this.container.removeChild(this.videoSprite),
      (this.videoSprite = new As(this.videoTexture)),
      this.container.addChild(this.videoSprite),
      this.container.setChildIndex(this.videoSprite, 0)
  }
  addText(t, s) {
    const n = new ol(s),
      i = new U2({ text: t, style: n })
    return this.container.addChild(i), this.texts.add(i), this.moveText(i), i
  }
  deleteText(t) {
    this.container.removeChild(t), this.texts.delete(t)
  }
  moveText(t) {
    t.interactive = !0
    let s = !1
    ;(t.onmousedown = () => {
      ;(s = !0), (this.container.interactive = !0)
    }),
      (this.container.onmousemove = (n) => {
        if (!s) return
        const i = t.x + n.movementX,
          r = t.y + n.movementY,
          o = this.videoSprite.width - t.width,
          a = this.videoSprite.height - t.height
        i < 0 || i > o || r < 0 || r > a ? (s = !1) : ((t.x = i), (t.y = r))
      }),
      (this.container.onmouseup = () => {
        ;(s = !1), (this.container.interactive = !1)
      })
  }
}
const Ae = new G2()
function W2(e) {
  return {
    all: (e = e || new Map()),
    on: function (t, s) {
      var n = e.get(t)
      n ? n.push(s) : e.set(t, [s])
    },
    off: function (t, s) {
      var n = e.get(t)
      n && (s ? n.splice(n.indexOf(s) >>> 0, 1) : e.set(t, []))
    },
    emit: function (t, s) {
      var n = e.get(t)
      n &&
        n.slice().map(function (i) {
          i(s)
        }),
        (n = e.get('*')) &&
          n.slice().map(function (i) {
            i(t, s)
          })
    },
  }
}
const We = W2()
const j2 = st({
  __name: 'Play',
  setup(e) {
    const { playerStore: t, videoCreate: s } = Ci(),
      n = ht(),
      i = ht(),
      r = ht(0),
      o = ht(0)
    return (
      yx(n, { box: 'content-box' }, (a) => {
        const l = Math.floor(a.contentRect.height),
          h = Math.floor(a.contentRect.width)
        2 * l <= h
          ? ((r.value = l), (o.value = 2 * l))
          : ((o.value = h), (r.value = Math.floor(h / 2))),
          te.resize()
      }),
      Te(async () => {
        await te.init({ background: '#212123', resizeTo: i.value }),
          i.value.appendChild(te.app.canvas),
          await te.loadBackground('./no-video.png'),
          te.resizeBackground(te.app.screen.width, te.app.screen.height),
          te.addChild(Ae.container, Ae.resizeVideo.bind(Ae)),
          te.app.canvas.addEventListener('webglcontextlost', (a) => {
            a.preventDefault(),
              console.log('WebGL context lost'),
              Ga({
                type: 'info',
                message: '第一次加载视频失败，刷新浏览器重试即可',
              })
          })
      }),
      We.on('videoCrop', ({ x: a, y: l, w: h, h: c }) => {
        Ae.cropVideo(a, l, h, c),
          Ae.resizeVideo(te.app.screen.width, te.app.screen.height)
      }),
      We.on('videoRecorded', async (a) => {
        ;(te.background.visible = !1),
          await s(t.videoSrc),
          Ae.loadVideo(t.videoRef),
          Ae.resizeVideo(te.app.screen.width, te.app.screen.height),
          We.emit('videoLoaded', a)
      }),
      (a, l) => (
        J(),
        ft(
          'div',
          { ref_key: 'outerBox', ref: n, class: 'outer-box' },
          [
            nt(
              'div',
              {
                ref_key: 'videoBox',
                ref: i,
                class: 'work-area',
                style: me({ '--height': F(r) + 'px', '--width': F(o) + 'px' }),
              },
              null,
              4,
            ),
          ],
          512,
        )
      )
    )
  },
})
const Y2 = Xe(j2, [['__scopeId', 'data-v-cfa32df3']]),
  X2 = { class: 'video-box' },
  K2 = { class: 'options' },
  q2 = { class: 'play' },
  Z2 = st({
    __name: 'index',
    setup(e) {
      return (t, s) => {
        const n = Op('router-view')
        return (
          J(),
          ft('div', X2, [
            nt('div', K2, [
              ct(n, null, {
                default: Xt(({ Component: i }) => [
                  (J(), pe(Gp, null, [(J(), pe(au(i)))], 1024)),
                ]),
                _: 1,
              }),
            ]),
            nt('div', q2, [ct(Y2)]),
          ])
        )
      }
    },
  })
const Q2 = Xe(Z2, [['__scopeId', 'data-v-b0717cb4']]),
  oa = [
    { timeGap: 2, spaceGap: 100 },
    { timeGap: 1, spaceGap: 100 },
    { timeGap: 1, spaceGap: 200 },
  ],
  J2 = 0,
  tw = oa.length - 1,
  On = Td('track', () => {
    const e = Js(),
      t = ht(1),
      s = Z(() => oa[t.value].timeGap),
      n = Z(() => oa[t.value].spaceGap),
      i = Z(() => n.value * (e.duration / s.value + 2)),
      r = Z(() => n.value * (e.duration / s.value))
    function o() {
      e.playing || (t.value - 1 >= J2 && --t.value)
    }
    function a() {
      e.playing || (t.value + 1 <= tw && ++t.value)
    }
    return {
      scaleLevel: t,
      timeGap: s,
      spaceGap: n,
      canvasWidth: i,
      trackWidth: r,
      reduceScaleLevel: o,
      addScaleLevel: a,
    }
  })
function aa(e) {
  const t = e.toString().split('.'),
    s = Number(t[0]),
    n = t[1] ? t[1] : '0',
    i = Math.floor(s / 60),
    r = s % 60,
    o = i.toString().padStart(2, '0'),
    a = r.toString().padStart(2, '0'),
    l = n.padEnd(2, '0')
  return o + ':' + a + '.' + l
}
const ew = { class: 'control-box' },
  sw = { class: 'left-box' },
  nw = { class: 'center-box' },
  iw = { class: 'right-box' },
  rw = ['value'],
  ow = st({
    __name: 'Control',
    setup(e) {
      const t = On(),
        { playerStore: s, videoPlay: n, videoPause: i } = Ci()
      return (r, o) => {
        const a = dd
        return (
          J(),
          ft('div', ew, [
            nt('div', sw, [
              ct(a, {
                'icon-class': 'back',
                onClick: o[0] || (o[0] = () => F(We).emit('videoClipReset')),
              }),
            ]),
            nt('div', nw, [
              nt('span', null, yn(F(aa)(F(s).currentTime)), 1),
              bn(
                ct(a, { 'icon-class': 'play', onClick: F(n) }, null, 8, [
                  'onClick',
                ]),
                [[vn, !F(s).playing]],
              ),
              bn(
                ct(a, { 'icon-class': 'pause', onClick: F(i) }, null, 8, [
                  'onClick',
                ]),
                [[vn, F(s).playing]],
              ),
              nt('span', null, yn(F(aa)(F(s).duration)), 1),
            ]),
            nt('div', iw, [
              ct(
                a,
                { 'icon-class': 'reduce-btn', onClick: F(t).reduceScaleLevel },
                null,
                8,
                ['onClick'],
              ),
              nt('progress', { max: '3', value: F(t).scaleLevel }, null, 8, rw),
              ct(
                a,
                { 'icon-class': 'add-btn', onClick: F(t).addScaleLevel },
                null,
                8,
                ['onClick'],
              ),
            ]),
          ])
        )
      }
    },
  })
const aw = Xe(ow, [['__scopeId', 'data-v-bbc7558d']])
function al() {
  const e = Js(),
    t = On()
  function s(i) {
    if (e.duration === 0) return 0
    const r = i / (e.duration * t.spaceGap)
    return Number((r * e.duration).toFixed(2))
  }
  function n(i) {
    if (e.duration === 0) return 0
    const r = i / e.duration
    return Math.floor(r * t.trackWidth)
  }
  return { getCurrentTimefromOffsetX: s, getOffsetXfromCurrentTime: n }
}
const lw = { class: 'timeline-box' },
  cw = ['width'],
  hw = st({
    __name: 'TimeLine',
    setup(e) {
      const t = Js(),
        s = On(),
        { getCurrentTimefromOffsetX: n } = al(),
        { videoSkip: i } = Ci(),
        r = ht()
      let o
      We.on('videoLoaded', () => {
        l(o, t.duration, s.timeGap, s.spaceGap)
      }),
        Zt(
          () => s.scaleLevel,
          () => {
            qs(() => {
              l(o, t.duration, s.timeGap, s.spaceGap)
            })
          },
        ),
        Te(() => {
          ;(o = r.value.getContext('2d')),
            r.value.addEventListener('mousedown', a)
        })
      function a(h) {
        h.offsetX > s.trackWidth || i(n(h.offsetX))
      }
      function l(h, c, u, d) {
        const f = Math.ceil(c / u)
        for (let p = 0; p <= f; ++p) h.moveTo(p * d, 15), h.lineTo(p * d, 20)
        ;(h.lineWidth = 1),
          (h.strokeStyle = 'rgba(180, 195, 211)'),
          h.stroke(),
          (h.fillStyle = '#b4c3d3'),
          (h.textBaseline = 'top')
        for (let p = 0; p <= f; ++p) h.fillText(aa(p * u), p * d, 1)
      }
      return (h, c) => (
        J(),
        ft('div', lw, [
          nt(
            'canvas',
            {
              ref_key: 'timeLineRef',
              ref: r,
              width: F(s).canvasWidth,
              height: '20',
            },
            null,
            8,
            cw,
          ),
        ])
      )
    },
  })
const uw = Xe(hw, [['__scopeId', 'data-v-b583a8d3']]),
  dw = st({
    __name: 'TimeStripe',
    setup(e) {
      const t = On(),
        s = Js(),
        { getOffsetXfromCurrentTime: n } = al(),
        { videoPauseByAuto: i } = Ci(),
        r = ht(0),
        o = Z(() => 3 + r.value),
        a = ht(!0),
        l = Z(() => t.spaceGap / (t.timeGap * 1e3))
      We.on('videoClipOpen', () => {
        a.value = !1
      }),
        Zt(
          () => s.currentTime,
          (c) => {
            s.playing || ((r.value = n(c)), a.value || (a.value = !0))
          },
        ),
        Zt(
          () => t.scaleLevel,
          () => {
            r.value = n(s.currentTime)
          },
        ),
        Zt(
          () => s.playing,
          (c) => {
            c && h()
          },
        )
      function h() {
        const c = n(s.endTime)
        r.value >= c && (r.value = n(s.startTime))
        const u = r.value
        let d,
          f,
          p = !1
        function g(m) {
          d === void 0 && (d = m)
          const b = m - d
          if (f !== m) {
            const y = l.value * b
            ;(r.value = u + y > c ? c : u + y), s.playing || (p = !0)
          }
          r.value == c ? i() : ((f = m), p || window.requestAnimationFrame(g))
        }
        window.requestAnimationFrame(g)
      }
      return (c, u) =>
        bn(
          (J(),
          ft(
            'div',
            {
              ref: 'timeStripeRef',
              class: 'time-stripe',
              style: me({ '--left': `${F(o)}px` }),
            },
            null,
            4,
          )),
          [[vn, F(a)]],
        )
    },
  })
const fw = Xe(dw, [['__scopeId', 'data-v-398ccdb8']]),
  pw = { class: 'wrap' },
  mw = st({
    __name: 'wrap',
    props: {
      wrapWidth: { default: 0 },
      clipLeft: { default: 0 },
      clipRight: { default: 0 },
    },
    emits: [
      'clipOpen',
      'clipLeftChange',
      'clipRightChange',
      'update:clipLeft',
      'update:clipRight',
    ],
    setup(e, { emit: t }) {
      const s = e,
        n = t,
        i = ht(),
        r = ht()
      let o = !1,
        a = !1,
        l = !1
      Te(() => {
        c(), u(), h()
      })
      function h() {
        window.addEventListener('mouseup', () => {
          o && n('clipLeftChange', s.clipLeft),
            a && n('clipRightChange', s.clipRight),
            (o = a = !1),
            (l = !1)
        })
      }
      function c() {
        function d() {
          ;(l = !0), (o = !0), (a = !1), n('clipOpen')
        }
        function f(p) {
          if (!l) return
          let g = s.clipLeft + p.movementX
          g < 0 ||
            g + s.clipRight > s.wrapWidth - 100 ||
            n('update:clipLeft', g)
        }
        i.value.addEventListener('mousedown', d),
          i.value.addEventListener('mousemove', f)
      }
      function u() {
        function d() {
          ;(l = !0), (o = !1), (a = !0), n('clipOpen')
        }
        function f(p) {
          if (!l) return
          let g = s.clipRight - p.movementX
          g < 0 ||
            g + s.clipLeft > s.wrapWidth - 100 ||
            n('update:clipRight', g)
        }
        r.value.addEventListener('mousedown', d),
          r.value.addEventListener('mousemove', f)
      }
      return (d, f) => (
        J(),
        ft(
          'div',
          { class: 'wrap-box', style: me({ width: d.wrapWidth + 'px' }) },
          [
            nt('div', pw, [
              nt(
                'div',
                {
                  class: 'select-box',
                  style: me({
                    left: d.clipLeft + 'px',
                    right: d.clipRight + 'px',
                  }),
                },
                [
                  nt(
                    'div',
                    { ref_key: 'leftRef', ref: i, class: 'select-left' },
                    null,
                    512,
                  ),
                  nt(
                    'div',
                    { ref_key: 'rightRef', ref: r, class: 'select-right' },
                    null,
                    512,
                  ),
                ],
                4,
              ),
              ye(d.$slots, 'default', {}, void 0, !0),
              nt(
                'div',
                {
                  class: 'shadow',
                  style: me({
                    '--left': d.clipLeft + 'px',
                    '--right': d.wrapWidth - d.clipRight + 'px',
                  }),
                },
                null,
                4,
              ),
            ]),
          ],
          4,
        )
      )
    },
  })
const gw = Xe(mw, [['__scopeId', 'data-v-68dd4332']]),
  _w = st({
    __name: 'KeyFrameWrap',
    setup(e) {
      const t = On(),
        s = Js(),
        { getCurrentTimefromOffsetX: n, getOffsetXfromCurrentTime: i } = al(),
        { videoSkip: r } = Ci(),
        o = ht(0),
        a = ht(0)
      function l() {
        const u = n(o.value)
        s.changeStartTime(u), r(u)
      }
      function h() {
        const u = n(t.trackWidth - a.value)
        s.changeEndTime(u), r(u)
      }
      function c() {
        ;(o.value = i(s.startTime)), (a.value = t.trackWidth - i(s.endTime))
      }
      return (
        We.on('videoLoaded', () => {
          c()
        }),
        We.on('videoClipReset', () => {
          s.changeStartTime(0),
            s.changeEndTime(s.duration),
            (o.value = 0),
            (a.value = 0)
        }),
        Zt(
          () => t.scaleLevel,
          () => {
            c()
          },
        ),
        (u, d) => (
          J(),
          pe(
            gw,
            {
              'clip-left': F(o),
              'onUpdate:clipLeft':
                d[0] || (d[0] = (f) => (It(o) ? (o.value = f) : null)),
              'clip-right': F(a),
              'onUpdate:clipRight':
                d[1] || (d[1] = (f) => (It(a) ? (a.value = f) : null)),
              'wrap-width': F(t).trackWidth,
              onClipLeftChange: l,
              onClipRightChange: h,
              onClipOpen: d[2] || (d[2] = () => F(We).emit('videoClipOpen')),
            },
            { default: Xt(() => [ye(u.$slots, 'default')]), _: 3 },
            8,
            ['clip-left', 'clip-right', 'wrap-width'],
          )
        )
      )
    },
  })
var Ct
;(function (e) {
  ;(e.LOAD = 'LOAD'),
    (e.EXEC = 'EXEC'),
    (e.WRITE_FILE = 'WRITE_FILE'),
    (e.READ_FILE = 'READ_FILE'),
    (e.DELETE_FILE = 'DELETE_FILE'),
    (e.RENAME = 'RENAME'),
    (e.CREATE_DIR = 'CREATE_DIR'),
    (e.LIST_DIR = 'LIST_DIR'),
    (e.DELETE_DIR = 'DELETE_DIR'),
    (e.ERROR = 'ERROR'),
    (e.DOWNLOAD = 'DOWNLOAD'),
    (e.PROGRESS = 'PROGRESS'),
    (e.LOG = 'LOG'),
    (e.MOUNT = 'MOUNT'),
    (e.UNMOUNT = 'UNMOUNT')
})(Ct || (Ct = {}))
const yw = (() => {
    let e = 0
    return () => e++
  })(),
  xw = new Error('ffmpeg is not loaded, call `await ffmpeg.load()` first'),
  bw = new Error('called FFmpeg.terminate()')
var de, _s, Ze, Vs, Us, fr, re
class vw {
  constructor() {
    ns(this, de, null)
    ns(this, _s, {})
    ns(this, Ze, {})
    ns(this, Vs, [])
    ns(this, Us, [])
    Pt(this, 'loaded', !1)
    ns(this, fr, () => {
      dt(this, de) &&
        (dt(this, de).onmessage = ({ data: { id: t, type: s, data: n } }) => {
          switch (s) {
            case Ct.LOAD:
              ;(this.loaded = !0), dt(this, _s)[t](n)
              break
            case Ct.MOUNT:
            case Ct.UNMOUNT:
            case Ct.EXEC:
            case Ct.WRITE_FILE:
            case Ct.READ_FILE:
            case Ct.DELETE_FILE:
            case Ct.RENAME:
            case Ct.CREATE_DIR:
            case Ct.LIST_DIR:
            case Ct.DELETE_DIR:
              dt(this, _s)[t](n)
              break
            case Ct.LOG:
              dt(this, Vs).forEach((i) => i(n))
              break
            case Ct.PROGRESS:
              dt(this, Us).forEach((i) => i(n))
              break
            case Ct.ERROR:
              dt(this, Ze)[t](n)
              break
          }
          delete dt(this, _s)[t], delete dt(this, Ze)[t]
        })
    })
    ns(this, re, ({ type: t, data: s }, n = [], i) =>
      dt(this, de)
        ? new Promise((r, o) => {
            const a = yw()
            dt(this, de) &&
              dt(this, de).postMessage({ id: a, type: t, data: s }, n),
              (dt(this, _s)[a] = r),
              (dt(this, Ze)[a] = o),
              i == null ||
                i.addEventListener(
                  'abort',
                  () => {
                    o(
                      new DOMException(
                        `Message # ${a} was aborted`,
                        'AbortError',
                      ),
                    )
                  },
                  { once: !0 },
                )
          })
        : Promise.reject(xw),
    )
    Pt(
      this,
      'load',
      (t = {}, { signal: s } = {}) => (
        dt(this, de) ||
          ($n(
            this,
            de,
            new Worker(
              new URL(
                '' +
                  new URL('../assets/worker-69ad9351.js', import.meta.url).href,
                self.location,
              ),
              { type: 'module' },
            ),
          ),
          dt(this, fr).call(this)),
        dt(this, re).call(this, { type: Ct.LOAD, data: t }, void 0, s)
      ),
    )
    Pt(this, 'exec', (t, s = -1, { signal: n } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.EXEC, data: { args: t, timeout: s } },
        void 0,
        n,
      ),
    )
    Pt(this, 'terminate', () => {
      const t = Object.keys(dt(this, Ze))
      for (const s of t)
        dt(this, Ze)[s](bw), delete dt(this, Ze)[s], delete dt(this, _s)[s]
      dt(this, de) &&
        (dt(this, de).terminate(), $n(this, de, null), (this.loaded = !1))
    })
    Pt(this, 'writeFile', (t, s, { signal: n } = {}) => {
      const i = []
      return (
        s instanceof Uint8Array && i.push(s.buffer),
        dt(this, re).call(
          this,
          { type: Ct.WRITE_FILE, data: { path: t, data: s } },
          i,
          n,
        )
      )
    })
    Pt(this, 'mount', (t, s, n) => {
      const i = []
      return dt(this, re).call(
        this,
        { type: Ct.MOUNT, data: { fsType: t, options: s, mountPoint: n } },
        i,
      )
    })
    Pt(this, 'unmount', (t) => {
      const s = []
      return dt(this, re).call(
        this,
        { type: Ct.UNMOUNT, data: { mountPoint: t } },
        s,
      )
    })
    Pt(this, 'readFile', (t, s = 'binary', { signal: n } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.READ_FILE, data: { path: t, encoding: s } },
        void 0,
        n,
      ),
    )
    Pt(this, 'deleteFile', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.DELETE_FILE, data: { path: t } },
        void 0,
        s,
      ),
    )
    Pt(this, 'rename', (t, s, { signal: n } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.RENAME, data: { oldPath: t, newPath: s } },
        void 0,
        n,
      ),
    )
    Pt(this, 'createDir', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.CREATE_DIR, data: { path: t } },
        void 0,
        s,
      ),
    )
    Pt(this, 'listDir', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.LIST_DIR, data: { path: t } },
        void 0,
        s,
      ),
    )
    Pt(this, 'deleteDir', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Ct.DELETE_DIR, data: { path: t } },
        void 0,
        s,
      ),
    )
  }
  on(t, s) {
    t === 'log'
      ? dt(this, Vs).push(s)
      : t === 'progress' && dt(this, Us).push(s)
  }
  off(t, s) {
    t === 'log'
      ? $n(
          this,
          Vs,
          dt(this, Vs).filter((n) => n !== s),
        )
      : t === 'progress' &&
        $n(
          this,
          Us,
          dt(this, Us).filter((n) => n !== s),
        )
  }
}
;(de = new WeakMap()),
  (_s = new WeakMap()),
  (Ze = new WeakMap()),
  (Vs = new WeakMap()),
  (Us = new WeakMap()),
  (fr = new WeakMap()),
  (re = new WeakMap())
const ww = new Error('failed to get response body reader'),
  Aw = new Error('failed to complete download'),
  Sw = 'Content-Length',
  Cw = (e) =>
    new Promise((t, s) => {
      const n = new FileReader()
      ;(n.onload = () => {
        const { result: i } = n
        i instanceof ArrayBuffer ? t(new Uint8Array(i)) : t(new Uint8Array())
      }),
        (n.onerror = (i) => {
          var r, o
          s(
            Error(
              `File could not be read! Code=${
                ((o =
                  (r = i == null ? void 0 : i.target) == null
                    ? void 0
                    : r.error) == null
                  ? void 0
                  : o.code) || -1
              }`,
            ),
          )
        }),
        n.readAsArrayBuffer(e)
    }),
  Of = async (e) => {
    let t
    if (typeof e == 'string')
      /data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)
        ? (t = atob(e.split(',')[1])
            .split('')
            .map((s) => s.charCodeAt(0)))
        : (t = await (await fetch(e)).arrayBuffer())
    else if (e instanceof URL) t = await (await fetch(e)).arrayBuffer()
    else if (e instanceof File || e instanceof Blob) t = await Cw(e)
    else return new Uint8Array()
    return new Uint8Array(t)
  },
  Ew = async (e, t) => {
    var i
    const s = await fetch(e)
    let n
    try {
      const r = parseInt(s.headers.get(Sw) || '-1'),
        o = (i = s.body) == null ? void 0 : i.getReader()
      if (!o) throw ww
      const a = []
      let l = 0
      for (;;) {
        const { done: u, value: d } = await o.read(),
          f = d ? d.length : 0
        if (u) {
          if (r != -1 && r !== l) throw Aw
          t && t({ url: e, total: r, received: l, delta: f, done: u })
          break
        }
        a.push(d),
          (l += f),
          t && t({ url: e, total: r, received: l, delta: f, done: u })
      }
      const h = new Uint8Array(l)
      let c = 0
      for (const u of a) h.set(u, c), (c += u.length)
      n = h.buffer
    } catch (r) {
      console.log('failed to send download progress event: ', r),
        (n = await s.arrayBuffer()),
        t &&
          t({
            url: e,
            total: n.byteLength,
            received: n.byteLength,
            delta: 0,
            done: !0,
          })
    }
    return n
  },
  Sh = async (e, t, s = !1, n) => {
    const i = s ? await Ew(e, n) : await (await fetch(e)).arrayBuffer(),
      r = new Blob([i], { type: t })
    return URL.createObjectURL(r)
  }
function Pw() {
  async function e(s, n, i) {
    const r = {
      videosrc: '',
      videoclip: { start: 0, end: 0 },
      videocrop: { x: 0, y: 0, w: 0, h: 0 },
      texts: [],
    }
    return (
      (r.videosrc = s),
      (r.videoclip.start = n),
      (r.videoclip.end = i),
      (r.videocrop.x = Ae.videoTexture.frame.x),
      (r.videocrop.y = Ae.videoTexture.frame.y),
      (r.videocrop.w = Ae.videoTexture.frame.width),
      (r.videocrop.h = Ae.videoTexture.frame.height),
      await t(r),
      r
    )
  }
  async function t(s) {
    for (const n of Ae.texts) {
      const i = await te.app.renderer.extract.base64(n)
      s.texts.push({ dataurl: i, pos: { x: n.x, y: n.y } })
    }
  }
  return { createGIFJson: e }
}
const Oe = new vw()
let la = !1
const Ji = 'key'
async function Tw() {
  const e = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'
  return (
    (la = await Oe.load({
      coreURL: await Sh(`${e}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await Sh(`${e}/ffmpeg-core.wasm`, 'application/wasm'),
    })),
    await Oe.createDir(Ji),
    la
  )
}
async function Ch(e) {
  if (!la) throw new Error('先初始化FFmpeg')
  const t = 'video.mp4',
    s = await Of(e)
  return await Oe.writeFile(t, s), t
}
async function Mw(e, t, s, n, i, r, o) {
  const a = 'crop.gif'
  return (
    await Oe.exec([
      '-ss',
      `${t}`,
      '-t',
      `${s - t}`,
      '-i',
      e,
      '-vf',
      `crop=${n}:${i}:${r}:${o}`,
      a,
    ]),
    a
  )
}
async function Iw(e, t, s, n) {
  const i = 'text.gif',
    r = 'logo.png',
    o = await Of(t)
  return (
    await Oe.writeFile(r, o),
    await Oe.exec([
      '-i',
      e,
      '-i',
      r,
      '-filter_complex',
      `overlay=${s}:${n}`,
      i,
    ]),
    i
  )
}
async function Rw(e, t, s) {
  return await Oe.exec(['-i', e, '-s', `${t}x${s}`, 'small.gif']), 'small.gif'
}
function Ff() {
  const e = Js(),
    { createGIFJson: t } = Pw()
  async function s(i, r) {
    const o = await t(e.videoSrc, e.startTime, e.endTime),
      a = await Ch(o.videosrc)
        .then((h) =>
          Mw(
            h,
            o.videoclip.start,
            o.videoclip.end,
            o.videocrop.w,
            o.videocrop.h,
            o.videocrop.x,
            o.videocrop.y,
          ),
        )
        .then((h) =>
          o.texts.length
            ? Iw(h, o.texts[0].dataurl, o.texts[0].pos.x, o.texts[0].pos.y)
            : h,
        )
        .then((h) => Rw(h, i, r)),
      l = await Oe.readFile(a, 'binary')
    return URL.createObjectURL(new Blob([l], { type: 'image/gif' }))
  }
  async function n() {
    const i = await Ch(e.videoSrc)
    await Oe.exec([
      '-i',
      i,
      '-vf',
      'fps=1/0.5',
      '-s',
      '100x50',
      `${Ji}/frame-%02d.jpeg`,
    ])
    const r = await Oe.listDir(Ji),
      o = []
    for (let a = 2; a < r.length; ++a) {
      const l = await Oe.readFile(`${Ji}/${r[a].name}`, 'binary')
      o.push(new Blob([l], { type: 'image/jpeg' }))
    }
    return o
  }
  return { initFFmpeg: Tw, videoToGIF: s, extractKeyFrame: n }
}
const kw = ['width'],
  Lw = st({
    __name: 'KeyFrame',
    setup(e) {
      const t = On(),
        { extractKeyFrame: s } = Ff(),
        n = ht()
      let i,
        r = []
      Te(() => {
        i = n.value.getContext('2d')
      }),
        We.on('videoLoaded', async (l) => {
          await o(), a(), l.close()
        }),
        Zt(
          () => t.scaleLevel,
          () => {
            a()
          },
        )
      async function o() {
        r = await s()
          .then((l) => l)
          .catch(
            (l) => (
              Ga({ message: '关键帧预览图生成失败', type: 'error' }),
              console.log(l),
              []
            ),
          )
      }
      async function a() {
        if (r.length === 0) return
        const l = (t.timeGap * 2) / (t.spaceGap / 100),
          h = 100 / l
        for (let c = 0; c < r.length; c = c + l) {
          const u = await createImageBitmap(r[c])
          i.drawImage(u, c * h, 0),
            c + l >= r.length &&
              c * h + 100 < t.trackWidth &&
              i.drawImage(u, c * h + 100, 0)
        }
      }
      return (l, h) => (
        J(),
        pe(_w, null, {
          default: Xt(() => [
            nt(
              'canvas',
              {
                ref_key: 'keyFrameRef',
                ref: n,
                width: F(t).trackWidth,
                height: '50',
              },
              null,
              8,
              kw,
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  Bw = { class: 'footer-wrapper' },
  Ow = { class: 'panel-box' },
  Fw = st({
    __name: 'index',
    emits: ['changeFooterHeight'],
    setup(e, { emit: t }) {
      const s = ht()
      let n = !1
      const i = t
      Te(() => {
        r(), o()
      })
      function r() {
        function a() {
          n = !0
        }
        s.value.addEventListener('mousedown', a)
      }
      function o() {
        function a(h) {
          n &&
            (h.clientY < 350 ||
              window.innerHeight - h.clientY < 250 ||
              i('changeFooterHeight', window.innerHeight - h.clientY))
        }
        function l() {
          n = !1
        }
        document.addEventListener('mousemove', a),
          document.addEventListener('mouseup', l)
      }
      return (a, l) => (
        J(),
        ft('div', Bw, [
          nt(
            'div',
            { ref_key: 'controlLine', ref: s, class: 'control-line' },
            null,
            512,
          ),
          ct(aw),
          nt('div', Ow, [ct(uw), ct(fw), ct(Lw)]),
        ])
      )
    },
  })
const $w = Xe(Fw, [['__scopeId', 'data-v-3aeb657c']]),
  Nw = st({
    __name: 'index',
    setup(e) {
      const t = ht(250)
      function s(n) {
        t.value = n
      }
      return (n, i) => {
        const r = dy,
          o = hy,
          a = fy,
          l = uy,
          h = cy
        return (
          J(),
          pe(
            h,
            { class: 'common-box' },
            {
              default: Xt(() => [
                ct(
                  r,
                  { class: 'header-box' },
                  { default: Xt(() => [ct(zy)]), _: 1 },
                ),
                ct(h, null, {
                  default: Xt(() => [
                    ct(
                      o,
                      { class: 'aside-box' },
                      { default: Xt(() => [ct(cx)]), _: 1 },
                    ),
                    ct(
                      h,
                      { class: 'right-box' },
                      {
                        default: Xt(() => [
                          ct(
                            a,
                            { class: 'main-box' },
                            { default: Xt(() => [ct(Q2)]), _: 1 },
                          ),
                          ct(
                            l,
                            {
                              class: 'footer-box',
                              style: me({ '--heigth': F(t) + 'px' }),
                            },
                            {
                              default: Xt(() => [
                                ct($w, { onChangeFooterHeight: s }),
                              ]),
                              _: 1,
                            },
                            8,
                            ['style'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  })
const Dw = Xe(Nw, [['__scopeId', 'data-v-ecd257fd']])
const zw = st({
    __name: 'App',
    setup(e) {
      const { initFFmpeg: t } = Ff()
      return (
        Te(() => {
          const s = yy.service({
            lock: !0,
            text: '需要一段时间初始化网站资源，请耐心等候(如果加载时间超过5分钟，请刷新重试)',
            background: 'rgba(0, 0, 0, 0.7)',
          })
          t()
            .finally(() => s.close())
            .catch(() => {
              Ga({ message: 'ffmpeg无法加载', type: 'error' })
            })
        }),
        (s, n) => (J(), pe(Dw))
      )
    },
  }),
  Vw = [
    { path: '/', redirect: '/record' },
    {
      name: 'Record',
      path: '/record',
      component: () =>
        ys(
          () => import('./index-16d12677.js'),
          [
            './index-16d12677.js',
            '..\\assets\\index-caef88e8.css',
            '..\\assets\\button-e76b79e2.css',
          ],
          import.meta.url,
        ),
    },
    {
      name: 'Cut',
      path: '/cut',
      component: () =>
        ys(
          () => import('./index-30060055.js'),
          [
            './index-30060055.js',
            './el-overlay-916ac1d4.js',
            './focus-trap-3713deb7.js',
            '..\\assets\\el-overlay-49152403.css',
            '..\\assets\\index-3ed7b2af.css',
            '..\\assets\\button-e76b79e2.css',
          ],
          import.meta.url,
        ),
    },
    {
      name: 'Editor',
      path: '/editor',
      component: () =>
        ys(
          () => import('./index-44a05e2f.js'),
          [
            './index-44a05e2f.js',
            './el-input-bf79855d.js',
            './focus-trap-3713deb7.js',
            '..\\assets\\el-input-961013f5.css',
            '..\\assets\\index-78880f65.css',
            '..\\assets\\button-e76b79e2.css',
          ],
          import.meta.url,
        ),
    },
    {
      name: 'Download',
      path: '/download',
      component: () =>
        ys(
          () => import('./index-f1632885.js'),
          [
            './index-f1632885.js',
            './el-overlay-916ac1d4.js',
            './focus-trap-3713deb7.js',
            '..\\assets\\el-overlay-49152403.css',
            './el-input-bf79855d.js',
            '..\\assets\\el-input-961013f5.css',
            '..\\assets\\index-648ecfd5.css',
            '..\\assets\\button-e76b79e2.css',
          ],
          import.meta.url,
        ),
    },
  ],
  Uw = tx({ history: g1(), routes: Vw }),
  Hw = hx()
function Gw(e) {
  e.use(Hw)
}
if (typeof window < 'u') {
  let e = function () {
    var t = document.body,
      s = document.getElementById('__svg__icons__dom__')
    s ||
      ((s = document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
      (s.style.position = 'absolute'),
      (s.style.width = '0'),
      (s.style.height = '0'),
      (s.id = '__svg__icons__dom__'),
      s.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
      s.setAttribute('xmlns:link', 'http://www.w3.org/1999/xlink')),
      (s.innerHTML =
        '<symbol class="icon" viewBox="0 0 1024 1024"   id="icon-add-btn"><path d="M482.669714 541.330286h-205.336381v-58.660572h205.336381v-205.336381h58.660572v205.336381h205.336381v58.660572h-205.336381v205.336381h-58.660572v-205.336381z" p-id="8242" /><path d="M512 938.666667c235.641905 0 426.666667-191.024762 426.666667-426.666667S747.641905 85.333333 512 85.333333 85.333333 276.358095 85.333333 512 276.358095 938.666667 512 938.666667z m0-58.660572c-203.239619 0-368.006095-164.766476-368.006095-368.006095 0-203.239619 164.766476-368.006095 368.006095-368.006095 203.239619 0 368.006095 164.766476 368.006095 368.006095 0 203.239619-164.766476 368.006095-368.006095 368.006095z" p-id="8243" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-back"><path d="M405.942857 160.597333l-191.414857 191.390477 191.390476 191.414857 41.496381-41.472-123.270095-123.270096h305.200762a207.993905 207.993905 0 0 1 0 416.012191H128V853.333333h501.345524c147.260952 0 266.654476-119.393524 266.654476-266.678857 0-147.260952-119.393524-266.654476-266.678857-266.654476H329.48419l117.930667-117.930667-41.496381-41.472z" p-id="8084" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-cut"><path d="M928 704l-160 0L768 288c0-19.2-12.8-32-32-32L320 256 320 96c0-19.2-12.8-32-32-32S256 76.8 256 96l0 160L96 256C76.8 256 64 268.8 64 288s12.8 32 32 32l160 0 0 416c0 19.2 12.8 32 32 32l416 0 0 160c0 19.2 12.8 32 32 32s32-12.8 32-32l0-160 160 0c19.2 0 32-12.8 32-32S947.2 704 928 704zM320 704 320 320l384 0 0 384L320 704z" p-id="47280" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-delete"><path d="M362.666667 122.660571h298.666666v58.684953h-298.666666V122.63619zM149.333333 240.006095h725.333334v58.660572H149.333333V240.006095zM296.789333 866.011429L263.996952 341.333333h58.782477l31.012571 496.006096h316.416L701.220571 341.333333h58.758096l-32.768 524.678096a31.98781 31.98781 0 0 1-31.939048 29.988571H328.728381a31.98781 31.98781 0 0 1-31.939048-29.988571z" p-id="7923" /><path d="M432.006095 341.333333h58.660572v362.666667h-58.660572V341.333333zM591.993905 341.333333h-58.660572v362.666667h58.660572V341.333333z" p-id="7924" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-download"><path d="M482.669714 526.506667V128h58.660572v398.506667l99.254857-99.230477 41.496381 41.44762L512 638.829714l-170.081524-170.057143 41.496381-41.496381 99.230476 99.254858z" p-id="7940" /><path d="M298.666667 341.333333H159.98781c-17.65181 0-31.98781 14.336-31.98781 32.012191v512c0 17.65181 14.336 31.98781 32.01219 31.987809h704c17.65181 0 31.98781-14.336 31.98781-32.01219v-512c0-17.65181-14.336-31.98781-32.01219-31.98781H725.333333v58.660572h112.006096V858.697143H186.660571V399.993905h112.006096V341.333333z" p-id="7941" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-editor-text"><path d="M666.672762 207.993905h-210.651429v629.345524h98.645334v58.660571h-256v-58.660571h98.669714V207.969524h-210.651429v69.339428H128v-128h597.333333v128h-58.660571V207.993905z" p-id="9839" /><path d="M917.333333 538.672762h-298.666666V597.333333h298.666666v-58.660571zM917.333333 688.006095h-298.666666v58.660572h298.666666v-58.660572zM618.666667 837.339429h298.666666v58.660571h-298.666666v-58.660571z" p-id="9840" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-move"><path d="M510.7 896.2c-15.3 0-28.7-11.3-31.4-26.6-0.7-4-0.6-7.9 0.1-11.7 1.7-43.3 0.6-444.5-0.6-710.7-0.1-17.5 14-31.7 31.5-31.8h0.1c17.4 0 31.6 14.1 31.7 31.5 0 0 0.8 179.3 1.3 358.7 0.2 89.7 0.3 179.4 0.2 246.8-0.3 141-0.3 141-30.2 143.7-0.9 0.1-1.8 0.1-2.7 0.1z" p-id="8363" /><path d="M330.2 538.2h-65.5c-141-0.3-141-0.3-143.7-30.2-1.5-16.4 10.3-31.3 26.5-34.1 4-0.7 8-0.6 11.7 0.1 43.3 1.8 444.4 0.6 710.7-0.6h0.1c17.4 0 31.6 14.1 31.7 31.5 0.1 17.5-14 31.7-31.5 31.8 0 0-179.3 0.8-358.7 1.3-63 0.1-126 0.2-181.3 0.2zM614.8 250c-8.1 0-16.2-3.1-22.4-9.3L512 160.4l-80.4 80.4c-12.4 12.4-32.4 12.4-44.8 0-12.4-12.4-12.4-32.4 0-44.8L489.6 93.2c12.4-12.4 32.4-12.4 44.8 0L637.2 196c12.4 12.4 12.4 32.4 0 44.8-6.2 6.1-14.3 9.2-22.4 9.2zM512 920.5c-8.1 0-16.2-3.1-22.4-9.3L386.8 808.4c-12.4-12.4-12.4-32.4 0-44.8 12.4-12.4 32.4-12.4 44.8 0L512 844l80.4-80.4c12.4-12.4 32.4-12.4 44.8 0 12.4 12.4 12.4 32.4 0 44.8L534.4 911.2c-6.2 6.2-14.3 9.3-22.4 9.3z" p-id="8364" /><path d="M795.8 636.6c-8.1 0-16.2-3.1-22.4-9.3-12.4-12.4-12.4-32.4 0-44.8l80.4-80.4-80.4-80.4c-12.4-12.4-12.4-32.4 0-44.8 12.4-12.4 32.4-12.4 44.8 0L921 479.8c12.4 12.4 12.4 32.4 0 44.8L818.2 627.4c-6.2 6.1-14.3 9.2-22.4 9.2zM228.2 636.6c-8.1 0-16.2-3.1-22.4-9.3L103 524.6c-12.4-12.4-12.4-32.4 0-44.8L205.8 377c12.4-12.4 32.4-12.4 44.8 0 12.4 12.4 12.4 32.4 0 44.8l-80.4 80.4 80.4 80.4c12.4 12.4 12.4 32.4 0 44.8-6.2 6.1-14.3 9.2-22.4 9.2z" p-id="8365" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-pause"><path d="M405.333333 362.666667h58.660572V682.666667h-58.660572V362.666667zM618.666667 362.666667h-58.660572V682.666667h58.660572V362.666667z" p-id="8781" /><path d="M512 938.666667c235.641905 0 426.666667-191.024762 426.666667-426.666667S747.641905 85.333333 512 85.333333 85.333333 276.358095 85.333333 512 276.358095 938.666667 512 938.666667z m0-58.660572c-203.239619 0-368.006095-164.766476-368.006095-368.006095 0-203.239619 164.766476-368.006095 368.006095-368.006095 203.239619 0 368.006095 164.766476 368.006095 368.006095 0 203.239619-164.766476 368.006095-368.006095 368.006095z" p-id="8782" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-play"><path d="M680.057905 484.62019c20.601905 12.434286 20.601905 42.300952 0 54.75962l-242.176 146.480761c-21.308952 12.897524-48.542476-2.462476-48.542476-27.379809V365.519238a31.98781 31.98781 0 0 1 48.566857-27.379809l242.151619 146.480761z m-232.057905-71.801904v198.363428L611.986286 512l-163.986286-99.181714z" p-id="8598" /><path d="M938.666667 512c0 235.641905-191.024762 426.666667-426.666667 426.666667S85.333333 747.641905 85.333333 512 276.358095 85.333333 512 85.333333 938.666667 276.358095 938.666667 512z m-58.660572 0c0-203.239619-164.766476-368.006095-368.006095-368.006095-203.239619 0-368.006095 164.766476-368.006095 368.006095 0 203.239619 164.766476 368.006095 368.006095 368.006095 203.239619 0 368.006095-164.766476 368.006095-368.006095z" p-id="8599" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-record"><path d="M341.918476 426.081524L427.885714 512l-85.942857 85.918476 41.496381 41.496381L510.780952 512l-127.390476-127.414857-41.496381 41.496381z" p-id="7746" /><path d="M768 800.01219v-148.601904l123.075048 68.681143A31.98781 31.98781 0 0 0 938.666667 692.175238V331.849143a31.98781 31.98781 0 0 0-47.591619-27.940572L768 372.589714V223.98781c0-17.65181-14.336-31.98781-32.01219-31.98781H117.345524c-17.65181 0-31.98781 14.336-31.98781 32.01219v575.97562c0 17.67619 14.336 32.01219 32.012191 32.01219h618.666666c17.65181 0 31.98781-14.336 31.98781-32.01219zM143.993905 250.63619h565.345524V773.36381H143.993905V250.63619z m736.01219 396.068572L768 584.216381v-144.432762l112.006095-62.512762v269.458286z" p-id="7747" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-reduce-btn"><path d="M277.333333 541.330286h469.333334v-58.660572h-469.333334v58.660572z" p-id="8403" /><path d="M938.666667 512c0 235.641905-191.024762 426.666667-426.666667 426.666667S85.333333 747.641905 85.333333 512 276.358095 85.333333 512 85.333333 938.666667 276.358095 938.666667 512z m-58.660572 0c0-203.239619-164.766476-368.006095-368.006095-368.006095-203.239619 0-368.006095 164.766476-368.006095 368.006095 0 203.239619 164.766476 368.006095 368.006095 368.006095 203.239619 0 368.006095-164.766476 368.006095-368.006095z" p-id="8404" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-selected"><path d="M196.510476 491.739429l-51.687619 51.785142 240.103619 239.445334 494.128762-488.789334-51.443809-51.98019-442.465524 437.686857z" p-id="7554" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-split"><path d="M475.672381 528.822857l-102.570667 140.361143a138.678857 138.678857 0 1 0 38.546286 46.689524L512 578.56l100.327619 137.313524a138.678857 138.678857 0 1 0 38.546286-46.689524l-392.533334-537.161143-47.347809 34.620953L475.672381 528.822857z m-107.666286 249.831619a79.993905 79.993905 0 1 1-160.01219 0 79.993905 79.993905 0 0 1 160.01219 0z m448 0a79.993905 79.993905 0 1 1-160.01219 0 79.993905 79.993905 0 0 1 160.01219 0z" p-id="57198" /><path d="M574.756571 492.690286l-36.327619-49.737143 227.230477-310.930286 47.347809 34.620953-238.250667 326.046476z" p-id="57199" /></symbol>'),
      t.insertBefore(s, t.lastChild)
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', e)
    : e()
}
const ll = Fu(zw)
Gw(ll)
ll.use(Uw)
ll.mount('#app')
export {
  Vn as $,
  Zs as A,
  Ta as B,
  M_ as C,
  jt as D,
  yy as E,
  ee as F,
  Ps as G,
  mn as H,
  qs as I,
  wt as J,
  Wx as K,
  ot as L,
  _f as M,
  ss as N,
  Wt as O,
  qt as P,
  Pe as Q,
  Yt as R,
  it as S,
  Vi as T,
  Yo as U,
  Yw as V,
  a_ as W,
  Es as X,
  xp as Y,
  e6 as Z,
  Xe as _,
  ct as a,
  Gt as a$,
  pc as a0,
  Bh as a1,
  ar as a2,
  ne as a3,
  Va as a4,
  lr as a5,
  gs as a6,
  E_ as a7,
  F_ as a8,
  Bt as a9,
  tm as aA,
  Ff as aB,
  Ma as aC,
  Ae as aD,
  Mv as aE,
  hh as aF,
  kv as aG,
  ae as aH,
  bi as aI,
  bb as aJ,
  cf as aK,
  Qd as aL,
  Ts as aM,
  St as aN,
  Et as aO,
  df as aP,
  Sr as aQ,
  x_ as aR,
  jw as aS,
  Ir as aT,
  r_ as aU,
  mt as aV,
  Qw as aW,
  s6 as aX,
  Wu as aY,
  Zw as aZ,
  f6 as a_,
  yn as aa,
  pe as ab,
  au as ac,
  yc as ad,
  Oi as ae,
  l6 as af,
  t6 as ag,
  D_ as ah,
  nd as ai,
  Zi as aj,
  xg as ak,
  sm as al,
  bn as am,
  Iu as an,
  Xw as ao,
  vn as ap,
  Ai as aq,
  qw as ar,
  Ua as as,
  h6 as at,
  mi as au,
  tt as av,
  qi as aw,
  bp as ax,
  In as ay,
  Zh as az,
  Ga as b,
  Lx as b0,
  Lv as b1,
  Tv as b2,
  je as b3,
  Re as b4,
  zd as b5,
  Yx as b6,
  As as b7,
  wb as b8,
  Ht as b9,
  ts as bA,
  Ee as bB,
  an as bC,
  Jw as bD,
  va as bE,
  jp as bF,
  i_ as bG,
  mu as bH,
  r6 as bI,
  n6 as bJ,
  o6 as bK,
  Pn as bL,
  ia as bM,
  p2 as bN,
  Mf as bO,
  $2 as bP,
  N2 as bQ,
  Ei as bR,
  se as bS,
  ol as bT,
  D2 as bU,
  wf as bV,
  tn as bW,
  Ye as bX,
  ih as bY,
  Bx as bZ,
  Sf as b_,
  zb as ba,
  sh as bb,
  ob as bc,
  co as bd,
  le as be,
  Ud as bf,
  _e as bg,
  ge as bh,
  Cv as bi,
  Na as bj,
  Vu as bk,
  $a as bl,
  n_ as bm,
  qu as bn,
  Oa as bo,
  Xp as bp,
  u6 as bq,
  R_ as br,
  Kw as bs,
  c6 as bt,
  a6 as bu,
  i6 as bv,
  Sg as bw,
  p_ as bx,
  cg as by,
  xt as bz,
  ft as c,
  st as d,
  We as e,
  d6 as f,
  Mu as g,
  Z as h,
  Zt as i,
  Te as j,
  ye as k,
  nt as l,
  me as m,
  p6 as n,
  J as o,
  F as p,
  dd as q,
  ht as r,
  iu as s,
  ru as t,
  Js as u,
  It as v,
  Xt as w,
  N_ as x,
  Cs as y,
  Vt as z,
}
