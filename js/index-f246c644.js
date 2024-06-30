var Rf = Object.defineProperty
var kf = (e, t, s) =>
  t in e
    ? Rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (e[t] = s)
var xt = (e, t, s) => (kf(e, typeof t != 'symbol' ? t + '' : t, s), s),
  cl = (e, t, s) => {
    if (!t.has(e)) throw TypeError('Cannot ' + s)
  }
var dt = (e, t, s) => (
    cl(e, t, 'read from private field'), s ? s.call(e) : t.get(e)
  ),
  is = (e, t, s) => {
    if (t.has(e))
      throw TypeError('Cannot add the same private member more than once')
    t instanceof WeakSet ? t.add(e) : t.set(e, s)
  },
  On = (e, t, s, n) => (
    cl(e, t, 'write to private field'), n ? n.call(e, s) : t.set(e, s), s
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
 **/ function aa(e, t) {
  const s = new Set(e.split(','))
  return t ? (n) => s.has(n.toLowerCase()) : (n) => s.has(n)
}
const Tt = {},
  an = [],
  se = () => {},
  Lf = () => !1,
  dr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  la = (e) => e.startsWith('onUpdate:'),
  Ft = Object.assign,
  ca = (e, t) => {
    const s = e.indexOf(t)
    s > -1 && e.splice(s, 1)
  },
  Bf = Object.prototype.hasOwnProperty,
  mt = (e, t) => Bf.call(e, t),
  Z = Array.isArray,
  ln = (e) => bi(e) === '[object Map]',
  wh = (e) => bi(e) === '[object Set]',
  Of = (e) => bi(e) === '[object RegExp]',
  it = (e) => typeof e == 'function',
  At = (e) => typeof e == 'string',
  Pn = (e) => typeof e == 'symbol',
  bt = (e) => e !== null && typeof e == 'object',
  Ah = (e) => (bt(e) || it(e)) && it(e.then) && it(e.catch),
  Sh = Object.prototype.toString,
  bi = (e) => Sh.call(e),
  Ff = (e) => bi(e).slice(8, -1),
  Ch = (e) => bi(e) === '[object Object]',
  ha = (e) =>
    At(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  qn = aa(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  fr = (e) => {
    const t = Object.create(null)
    return (s) => t[s] || (t[s] = e(s))
  },
  $f = /-(\w)/g,
  Pe = fr((e) => e.replace($f, (t, s) => (s ? s.toUpperCase() : ''))),
  Nf = /\B([A-Z])/g,
  ts = fr((e) => e.replace(Nf, '-$1').toLowerCase()),
  pr = fr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Fr = fr((e) => (e ? `on${pr(e)}` : '')),
  Ge = (e, t) => !Object.is(e, t),
  cn = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t)
  },
  Zi = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s })
  },
  yo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Df = (e) => {
    const t = At(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let hl
const ua = () =>
  hl ||
  (hl =
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
  if (Z(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        i = At(n) ? Hf(n) : me(n)
      if (i) for (const r in i) t[r] = i[r]
    }
    return t
  } else if (At(e) || bt(e)) return e
}
const zf = /;(?![^(]*\))/g,
  Vf = /:([^]+)/,
  Uf = /\/\*[^]*?\*\//g
function Hf(e) {
  const t = {}
  return (
    e
      .replace(Uf, '')
      .split(zf)
      .forEach((s) => {
        if (s) {
          const n = s.split(Vf)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function Bt(e) {
  let t = ''
  if (At(e)) t = e
  else if (Z(e))
    for (let s = 0; s < e.length; s++) {
      const n = Bt(e[s])
      n && (t += n + ' ')
    }
  else if (bt(e)) for (const s in e) e[s] && (t += s + ' ')
  return t.trim()
}
const Gf =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Wf = aa(Gf)
function Eh(e) {
  return !!e || e === ''
}
const gn = (e) =>
    At(e)
      ? e
      : e == null
      ? ''
      : Z(e) || (bt(e) && (e.toString === Sh || !it(e.toString)))
      ? JSON.stringify(e, Ph, 2)
      : String(e),
  Ph = (e, t) =>
    t && t.__v_isRef
      ? Ph(e, t.value)
      : ln(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (s, [n, i], r) => ((s[$r(n, r) + ' =>'] = i), s),
            {},
          ),
        }
      : wh(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((s) => $r(s)) }
      : Pn(t)
      ? $r(t)
      : bt(t) && !Z(t) && !Ch(t)
      ? String(t)
      : t,
  $r = (e, t = '') => {
    var s
    return Pn(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  }
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let fe
class Th {
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
function Mh(e) {
  return new Th(e)
}
function jf(e, t = fe) {
  t && t.active && t.effects.push(e)
}
function da() {
  return fe
}
function Ih(e) {
  fe && fe.cleanups.push(e)
}
let Us
class fa {
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
      jf(this, i)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), Ys()
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t]
        if (s.computed && (Yf(s.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Xs()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = bs,
      s = Us
    try {
      return (bs = !0), (Us = this), this._runnings++, ul(this), this.fn()
    } finally {
      dl(this), this._runnings--, (Us = s), (bs = t)
    }
  }
  stop() {
    var t
    this.active &&
      (ul(this),
      dl(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function Yf(e) {
  return e.value
}
function ul(e) {
  e._trackId++, (e._depsLength = 0)
}
function dl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Rh(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Rh(e, t) {
  const s = e.get(t)
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let bs = !0,
  xo = 0
const kh = []
function Ys() {
  kh.push(bs), (bs = !1)
}
function Xs() {
  const e = kh.pop()
  bs = e === void 0 ? !0 : e
}
function pa() {
  xo++
}
function ma() {
  for (xo--; !xo && bo.length; ) bo.shift()()
}
function Lh(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const n = e.deps[e._depsLength]
    n !== t ? (n && Rh(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const bo = []
function Bh(e, t, s) {
  pa()
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
          ((n._shouldSchedule = !1), n.scheduler && bo.push(n.scheduler)))
  }
  ma()
}
const Oh = (e, t) => {
    const s = new Map()
    return (s.cleanup = e), (s.computed = t), s
  },
  Qi = new WeakMap(),
  Hs = Symbol(''),
  vo = Symbol('')
function ce(e, t, s) {
  if (bs && Us) {
    let n = Qi.get(e)
    n || Qi.set(e, (n = new Map()))
    let i = n.get(s)
    i || n.set(s, (i = Oh(() => n.delete(s)))), Lh(Us, i)
  }
}
function Ze(e, t, s, n, i, r) {
  const o = Qi.get(e)
  if (!o) return
  let a = []
  if (t === 'clear') a = [...o.values()]
  else if (s === 'length' && Z(e)) {
    const l = Number(n)
    o.forEach((h, c) => {
      ;(c === 'length' || (!Pn(c) && c >= l)) && a.push(h)
    })
  } else
    switch ((s !== void 0 && a.push(o.get(s)), t)) {
      case 'add':
        Z(e)
          ? ha(s) && a.push(o.get('length'))
          : (a.push(o.get(Hs)), ln(e) && a.push(o.get(vo)))
        break
      case 'delete':
        Z(e) || (a.push(o.get(Hs)), ln(e) && a.push(o.get(vo)))
        break
      case 'set':
        ln(e) && a.push(o.get(Hs))
        break
    }
  pa()
  for (const l of a) l && Bh(l, 4)
  ma()
}
function Xf(e, t) {
  var s
  return (s = Qi.get(e)) == null ? void 0 : s.get(t)
}
const Kf = aa('__proto__,__v_isRef,__isVue'),
  Fh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Pn),
  ),
  fl = qf()
function qf() {
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
        Ys(), pa()
        const n = gt(this)[t].apply(this, s)
        return ma(), Xs(), n
      }
    }),
    e
  )
}
function Zf(e) {
  const t = gt(this)
  return ce(t, 'has', e), t.hasOwnProperty(e)
}
class $h {
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
      return n === (i ? (r ? hp : Vh) : r ? zh : Dh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0
    const o = Z(t)
    if (!i) {
      if (o && mt(fl, s)) return Reflect.get(fl, s, n)
      if (s === 'hasOwnProperty') return Zf
    }
    const a = Reflect.get(t, s, n)
    return (Pn(s) ? Fh.has(s) : Kf(s)) || (i || ce(t, 'get', s), r)
      ? a
      : It(a)
      ? o && ha(s)
        ? a
        : a.value
      : bt(a)
      ? i
        ? xa(a)
        : Tn(a)
      : a
  }
}
class Nh extends $h {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, s, n, i) {
    let r = t[s]
    if (!this._shallow) {
      const l = _n(r)
      if (
        (!Ji(n) && !_n(n) && ((r = gt(r)), (n = gt(n))),
        !Z(t) && It(r) && !It(n))
      )
        return l ? !1 : ((r.value = n), !0)
    }
    const o = Z(t) && ha(s) ? Number(s) < t.length : mt(t, s),
      a = Reflect.set(t, s, n, i)
    return (
      t === gt(i) && (o ? Ge(n, r) && Ze(t, 'set', s, n) : Ze(t, 'add', s, n)),
      a
    )
  }
  deleteProperty(t, s) {
    const n = mt(t, s)
    t[s]
    const i = Reflect.deleteProperty(t, s)
    return i && n && Ze(t, 'delete', s, void 0), i
  }
  has(t, s) {
    const n = Reflect.has(t, s)
    return (!Pn(s) || !Fh.has(s)) && ce(t, 'has', s), n
  }
  ownKeys(t) {
    return ce(t, 'iterate', Z(t) ? 'length' : Hs), Reflect.ownKeys(t)
  }
}
class Qf extends $h {
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
const Jf = new Nh(),
  tp = new Qf(),
  ep = new Nh(!0),
  ga = (e) => e,
  mr = (e) => Reflect.getPrototypeOf(e)
function Ei(e, t, s = !1, n = !1) {
  e = e.__v_raw
  const i = gt(e),
    r = gt(t)
  s || (Ge(t, r) && ce(i, 'get', t), ce(i, 'get', r))
  const { has: o } = mr(i),
    a = n ? ga : s ? va : ai
  if (o.call(i, t)) return a(e.get(t))
  if (o.call(i, r)) return a(e.get(r))
  e !== i && e.get(t)
}
function Pi(e, t = !1) {
  const s = this.__v_raw,
    n = gt(s),
    i = gt(e)
  return (
    t || (Ge(e, i) && ce(n, 'has', e), ce(n, 'has', i)),
    e === i ? s.has(e) : s.has(e) || s.has(i)
  )
}
function Ti(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ce(gt(e), 'iterate', Hs), Reflect.get(e, 'size', e)
  )
}
function pl(e) {
  e = gt(e)
  const t = gt(this)
  return mr(t).has.call(t, e) || (t.add(e), Ze(t, 'add', e, e)), this
}
function ml(e, t) {
  t = gt(t)
  const s = gt(this),
    { has: n, get: i } = mr(s)
  let r = n.call(s, e)
  r || ((e = gt(e)), (r = n.call(s, e)))
  const o = i.call(s, e)
  return (
    s.set(e, t), r ? Ge(t, o) && Ze(s, 'set', e, t) : Ze(s, 'add', e, t), this
  )
}
function gl(e) {
  const t = gt(this),
    { has: s, get: n } = mr(t)
  let i = s.call(t, e)
  i || ((e = gt(e)), (i = s.call(t, e))), n && n.call(t, e)
  const r = t.delete(e)
  return i && Ze(t, 'delete', e, void 0), r
}
function _l() {
  const e = gt(this),
    t = e.size !== 0,
    s = e.clear()
  return t && Ze(e, 'clear', void 0, void 0), s
}
function Mi(e, t) {
  return function (n, i) {
    const r = this,
      o = r.__v_raw,
      a = gt(o),
      l = t ? ga : e ? va : ai
    return (
      !e && ce(a, 'iterate', Hs), o.forEach((h, c) => n.call(i, l(h), l(c), r))
    )
  }
}
function Ii(e, t, s) {
  return function (...n) {
    const i = this.__v_raw,
      r = gt(i),
      o = ln(r),
      a = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      h = i[e](...n),
      c = s ? ga : t ? va : ai
    return (
      !t && ce(r, 'iterate', l ? vo : Hs),
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
function rs(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function sp() {
  const e = {
      get(r) {
        return Ei(this, r)
      },
      get size() {
        return Ti(this)
      },
      has: Pi,
      add: pl,
      set: ml,
      delete: gl,
      clear: _l,
      forEach: Mi(!1, !1),
    },
    t = {
      get(r) {
        return Ei(this, r, !1, !0)
      },
      get size() {
        return Ti(this)
      },
      has: Pi,
      add: pl,
      set: ml,
      delete: gl,
      clear: _l,
      forEach: Mi(!1, !0),
    },
    s = {
      get(r) {
        return Ei(this, r, !0)
      },
      get size() {
        return Ti(this, !0)
      },
      has(r) {
        return Pi.call(this, r, !0)
      },
      add: rs('add'),
      set: rs('set'),
      delete: rs('delete'),
      clear: rs('clear'),
      forEach: Mi(!0, !1),
    },
    n = {
      get(r) {
        return Ei(this, r, !0, !0)
      },
      get size() {
        return Ti(this, !0)
      },
      has(r) {
        return Pi.call(this, r, !0)
      },
      add: rs('add'),
      set: rs('set'),
      delete: rs('delete'),
      clear: rs('clear'),
      forEach: Mi(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      ;(e[r] = Ii(r, !1, !1)),
        (s[r] = Ii(r, !0, !1)),
        (t[r] = Ii(r, !1, !0)),
        (n[r] = Ii(r, !0, !0))
    }),
    [e, s, t, n]
  )
}
const [np, ip, rp, op] = sp()
function _a(e, t) {
  const s = t ? (e ? op : rp) : e ? ip : np
  return (n, i, r) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
      ? e
      : i === '__v_raw'
      ? n
      : Reflect.get(mt(s, i) && i in n ? s : n, i, r)
}
const ap = { get: _a(!1, !1) },
  lp = { get: _a(!1, !0) },
  cp = { get: _a(!0, !1) },
  Dh = new WeakMap(),
  zh = new WeakMap(),
  Vh = new WeakMap(),
  hp = new WeakMap()
function up(e) {
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
function dp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : up(Ff(e))
}
function Tn(e) {
  return _n(e) ? e : ba(e, !1, Jf, ap, Dh)
}
function ya(e) {
  return ba(e, !1, ep, lp, zh)
}
function xa(e) {
  return ba(e, !0, tp, cp, Vh)
}
function ba(e, t, s, n, i) {
  if (!bt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = i.get(e)
  if (r) return r
  const o = dp(e)
  if (o === 0) return e
  const a = new Proxy(e, o === 2 ? n : s)
  return i.set(e, a), a
}
function vs(e) {
  return _n(e) ? vs(e.__v_raw) : !!(e && e.__v_isReactive)
}
function _n(e) {
  return !!(e && e.__v_isReadonly)
}
function Ji(e) {
  return !!(e && e.__v_isShallow)
}
function Uh(e) {
  return vs(e) || _n(e)
}
function gt(e) {
  const t = e && e.__v_raw
  return t ? gt(t) : e
}
function gr(e) {
  return Object.isExtensible(e) && Zi(e, '__v_skip', !0), e
}
const ai = (e) => (bt(e) ? Tn(e) : e),
  va = (e) => (bt(e) ? xa(e) : e)
class Hh {
  constructor(t, s, n, i) {
    ;(this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new fa(
        () => t(this._value),
        () => Zn(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = n)
  }
  get value() {
    const t = gt(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Ge(t._value, (t._value = t.effect.run())) &&
        Zn(t, 4),
      wa(t),
      t.effect._dirtyLevel >= 2 && Zn(t, 2),
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
function fp(e, t, s = !1) {
  let n, i
  const r = it(e)
  return (
    r ? ((n = e), (i = se)) : ((n = e.get), (i = e.set)),
    new Hh(n, i, r || !i, s)
  )
}
function wa(e) {
  var t
  bs &&
    Us &&
    ((e = gt(e)),
    Lh(
      Us,
      (t = e.dep) != null
        ? t
        : (e.dep = Oh(() => (e.dep = void 0), e instanceof Hh ? e : void 0)),
    ))
}
function Zn(e, t = 4, s) {
  e = gt(e)
  const n = e.dep
  n && Bh(n, t)
}
function It(e) {
  return !!(e && e.__v_isRef === !0)
}
function ht(e) {
  return Gh(e, !1)
}
function pp(e) {
  return Gh(e, !0)
}
function Gh(e, t) {
  return It(e) ? e : new mp(e, t)
}
class mp {
  constructor(t, s) {
    ;(this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : gt(t)),
      (this._value = s ? t : ai(t))
  }
  get value() {
    return wa(this), this._value
  }
  set value(t) {
    const s = this.__v_isShallow || Ji(t) || _n(t)
    ;(t = s ? t : gt(t)),
      Ge(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = s ? t : ai(t)), Zn(this, 4))
  }
}
function F(e) {
  return It(e) ? e.value : e
}
const gp = {
  get: (e, t, s) => F(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t]
    return It(i) && !It(s) ? ((i.value = s), !0) : Reflect.set(e, t, s, n)
  },
}
function Wh(e) {
  return vs(e) ? e : new Proxy(e, gp)
}
class _p {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: s, set: n } = t(
      () => wa(this),
      () => Zn(this),
    )
    ;(this._get = s), (this._set = n)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function yp(e) {
  return new _p(e)
}
function jh(e) {
  const t = Z(e) ? new Array(e.length) : {}
  for (const s in e) t[s] = Yh(e, s)
  return t
}
class xp {
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
    return Xf(gt(this._object), this._key)
  }
}
class bp {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function zw(e, t, s) {
  return It(e)
    ? e
    : it(e)
    ? new bp(e)
    : bt(e) && arguments.length > 1
    ? Yh(e, t, s)
    : ht(e)
}
function Yh(e, t, s) {
  const n = e[t]
  return It(n) ? n : new xp(e, t, s)
}
/**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ws(e, t, s, n) {
  let i
  try {
    i = n ? e(...n) : e()
  } catch (r) {
    _r(r, t, s)
  }
  return i
}
function Se(e, t, s, n) {
  if (it(e)) {
    const r = ws(e, t, s, n)
    return (
      r &&
        Ah(r) &&
        r.catch((o) => {
          _r(o, t, s)
        }),
      r
    )
  }
  const i = []
  for (let r = 0; r < e.length; r++) i.push(Se(e[r], t, s, n))
  return i
}
function _r(e, t, s, n = !0) {
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
      ws(l, null, 10, [e, o, a])
      return
    }
  }
  vp(e, s, i, n)
}
function vp(e, t, s, n = !0) {
  console.error(e)
}
let li = !1,
  wo = !1
const Kt = []
let Ue = 0
const hn = []
let hs = null,
  Ns = 0
const Xh = Promise.resolve()
let Aa = null
function Ks(e) {
  const t = Aa || Xh
  return e ? t.then(this ? e.bind(this) : e) : t
}
function wp(e) {
  let t = Ue + 1,
    s = Kt.length
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      i = Kt[n],
      r = ci(i)
    r < e || (r === e && i.pre) ? (t = n + 1) : (s = n)
  }
  return t
}
function Sa(e) {
  ;(!Kt.length || !Kt.includes(e, li && e.allowRecurse ? Ue + 1 : Ue)) &&
    (e.id == null ? Kt.push(e) : Kt.splice(wp(e.id), 0, e), Kh())
}
function Kh() {
  !li && !wo && ((wo = !0), (Aa = Xh.then(Zh)))
}
function Ap(e) {
  const t = Kt.indexOf(e)
  t > Ue && Kt.splice(t, 1)
}
function Sp(e) {
  Z(e)
    ? hn.push(...e)
    : (!hs || !hs.includes(e, e.allowRecurse ? Ns + 1 : Ns)) && hn.push(e),
    Kh()
}
function yl(e, t, s = li ? Ue + 1 : 0) {
  for (; s < Kt.length; s++) {
    const n = Kt[s]
    if (n && n.pre) {
      if (e && n.id !== e.uid) continue
      Kt.splice(s, 1), s--, n()
    }
  }
}
function qh(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort((s, n) => ci(s) - ci(n))
    if (((hn.length = 0), hs)) {
      hs.push(...t)
      return
    }
    for (hs = t, Ns = 0; Ns < hs.length; Ns++) hs[Ns]()
    ;(hs = null), (Ns = 0)
  }
}
const ci = (e) => (e.id == null ? 1 / 0 : e.id),
  Cp = (e, t) => {
    const s = ci(e) - ci(t)
    if (s === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return s
  }
function Zh(e) {
  ;(wo = !1), (li = !0), Kt.sort(Cp)
  const t = se
  try {
    for (Ue = 0; Ue < Kt.length; Ue++) {
      const s = Kt[Ue]
      s && s.active !== !1 && ws(s, null, 14)
    }
  } finally {
    ;(Ue = 0),
      (Kt.length = 0),
      qh(),
      (li = !1),
      (Aa = null),
      (Kt.length || hn.length) && Zh()
  }
}
function Ep(e, t, ...s) {
  if (e.isUnmounted) return
  const n = e.vnode.props || Tt
  let i = s
  const r = t.startsWith('update:'),
    o = r && t.slice(7)
  if (o && o in n) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: u, trim: d } = n[c] || Tt
    d && (i = s.map((f) => (At(f) ? f.trim() : f))), u && (i = s.map(yo))
  }
  let a,
    l = n[(a = Fr(t))] || n[(a = Fr(Pe(t)))]
  !l && r && (l = n[(a = Fr(ts(t)))]), l && Se(l, e, 6, i)
  const h = n[a + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Se(h, e, 6, i)
  }
}
function Qh(e, t, s = !1) {
  const n = t.emitsCache,
    i = n.get(e)
  if (i !== void 0) return i
  const r = e.emits
  let o = {},
    a = !1
  if (!it(e)) {
    const l = (h) => {
      const c = Qh(h, t, !0)
      c && ((a = !0), Ft(o, c))
    }
    !s && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !r && !a
    ? (bt(e) && n.set(e, null), null)
    : (Z(r) ? r.forEach((l) => (o[l] = null)) : Ft(o, r),
      bt(e) && n.set(e, o),
      o)
}
function yr(e, t) {
  return !e || !dr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, ts(t)) || mt(e, t))
}
let Ot = null,
  xr = null
function tr(e) {
  const t = Ot
  return (Ot = e), (xr = (e && e.type.__scopeId) || null), t
}
function Jh(e) {
  xr = e
}
function tu() {
  xr = null
}
function Xt(e, t = Ot, s) {
  if (!t || e._n) return e
  const n = (...i) => {
    n._d && Rl(-1)
    const r = tr(t)
    let o
    try {
      o = e(...i)
    } finally {
      tr(r), n._d && Rl(1)
    }
    return o
  }
  return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function Nr(e) {
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
  let m, x
  const y = tr(e)
  try {
    if (s.shapeFlag & 4) {
      const w = i || n,
        M = w
      ;(m = Ve(c.call(M, w, u, r, f, d, p))), (x = l)
    } else {
      const w = t
      ;(m = Ve(
        w.length > 1 ? w(r, { attrs: l, slots: a, emit: h }) : w(r, null),
      )),
        (x = t.props ? l : Pp(l))
    }
  } catch (w) {
    ;(ti.length = 0), _r(w, e, 1), (m = ct(Ce))
  }
  let v = m
  if (x && g !== !1) {
    const w = Object.keys(x),
      { shapeFlag: M } = v
    w.length && M & 7 && (o && w.some(la) && (x = Tp(x, o)), (v = Je(v, x)))
  }
  return (
    s.dirs && ((v = Je(v)), (v.dirs = v.dirs ? v.dirs.concat(s.dirs) : s.dirs)),
    s.transition && (v.transition = s.transition),
    (m = v),
    tr(y),
    m
  )
}
const Pp = (e) => {
    let t
    for (const s in e)
      (s === 'class' || s === 'style' || dr(s)) && ((t || (t = {}))[s] = e[s])
    return t
  },
  Tp = (e, t) => {
    const s = {}
    for (const n in e) (!la(n) || !(n.slice(9) in t)) && (s[n] = e[n])
    return s
  }
function Mp(e, t, s) {
  const { props: n, children: i, component: r } = e,
    { props: o, children: a, patchFlag: l } = t,
    h = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (s && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return n ? xl(n, o, h) : !!o
    if (l & 8) {
      const c = t.dynamicProps
      for (let u = 0; u < c.length; u++) {
        const d = c[u]
        if (o[d] !== n[d] && !yr(h, d)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : n === o
      ? !1
      : n
      ? o
        ? xl(n, o, h)
        : !0
      : !!o
  return !1
}
function xl(e, t, s) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let i = 0; i < n.length; i++) {
    const r = n[i]
    if (t[r] !== e[r] && !yr(s, r)) return !0
  }
  return !1
}
function Ip({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = s), (t = t.parent)
    else break
  }
}
const Ca = 'components'
function Rp(e, t) {
  return nu(Ca, e, !0, t) || e
}
const eu = Symbol.for('v-ndc')
function su(e) {
  return At(e) ? nu(Ca, e, !1) || e : e || eu
}
function nu(e, t, s = !0, n = !1) {
  const i = Ot || zt
  if (i) {
    const r = i.type
    if (e === Ca) {
      const a = Ro(r, !1)
      if (a && (a === t || a === Pe(t) || a === pr(Pe(t)))) return r
    }
    const o = bl(i[e] || r[e], t) || bl(i.appContext[e], t)
    return !o && n ? r : o
  }
}
function bl(e, t) {
  return e && (e[t] || e[Pe(t)] || e[pr(Pe(t))])
}
const iu = (e) => e.__isSuspense
function kp(e, t) {
  t && t.pendingBranch
    ? Z(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Sp(e)
}
const Lp = Symbol.for('v-scx'),
  Bp = () => Vt(Lp)
function Vw(e, t) {
  return br(e, null, t)
}
function Op(e, t) {
  return br(e, null, { flush: 'sync' })
}
const Ri = {}
function Zt(e, t, s) {
  return br(e, t, s)
}
function br(
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
    h = (k) => (n === !0 ? k : Ds(k, n === !1 ? 1 : void 0))
  let c,
    u = !1,
    d = !1
  if (
    (It(e)
      ? ((c = () => e.value), (u = Ji(e)))
      : vs(e)
      ? ((c = () => h(e)), (u = !0))
      : Z(e)
      ? ((d = !0),
        (u = e.some((k) => vs(k) || Ji(k))),
        (c = () =>
          e.map((k) => {
            if (It(k)) return k.value
            if (vs(k)) return h(k)
            if (it(k)) return ws(k, l, 2)
          })))
      : it(e)
      ? t
        ? (c = () => ws(e, l, 2))
        : (c = () => (f && f(), Se(e, l, 3, [p])))
      : (c = se),
    t && n)
  ) {
    const k = c
    c = () => Ds(k())
  }
  let f,
    p = (k) => {
      f = v.onStop = () => {
        ws(k, l, 4), (f = v.onStop = void 0)
      }
    },
    g
  if (Cr)
    if (
      ((p = se),
      t ? s && Se(t, l, 3, [c(), d ? [] : void 0, p]) : c(),
      i === 'sync')
    ) {
      const k = Bp()
      g = k.__watcherHandles || (k.__watcherHandles = [])
    } else return se
  let m = d ? new Array(e.length).fill(Ri) : Ri
  const x = () => {
    if (!(!v.active || !v.dirty))
      if (t) {
        const k = v.run()
        ;(n || u || (d ? k.some((E, C) => Ge(E, m[C])) : Ge(k, m))) &&
          (f && f(),
          Se(t, l, 3, [k, m === Ri ? void 0 : d && m[0] === Ri ? [] : m, p]),
          (m = k))
      } else v.run()
  }
  x.allowRecurse = !!t
  let y
  i === 'sync'
    ? (y = x)
    : i === 'post'
    ? (y = () => Ut(x, l && l.suspense))
    : ((x.pre = !0), l && (x.id = l.uid), (y = () => Sa(x)))
  const v = new fa(c, se, y),
    w = da(),
    M = () => {
      v.stop(), w && ca(w.effects, v)
    }
  return (
    t
      ? s
        ? x()
        : (m = v.run())
      : i === 'post'
      ? Ut(v.run.bind(v), l && l.suspense)
      : v.run(),
    g && g.push(M),
    M
  )
}
function Fp(e, t, s) {
  const n = this.proxy,
    i = At(e) ? (e.includes('.') ? ru(n, e) : () => n[e]) : e.bind(n, n)
  let r
  it(t) ? (r = t) : ((r = t.handler), (s = t))
  const o = vi(this),
    a = br(i, r.bind(n), s)
  return o(), a
}
function ru(e, t) {
  const s = t.split('.')
  return () => {
    let n = e
    for (let i = 0; i < s.length && n; i++) n = n[s[i]]
    return n
  }
}
function Ds(e, t, s = 0, n) {
  if (!bt(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (s >= t) return e
    s++
  }
  if (((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), It(e))) Ds(e.value, t, s, n)
  else if (Z(e)) for (let i = 0; i < e.length; i++) Ds(e[i], t, s, n)
  else if (wh(e) || ln(e))
    e.forEach((i) => {
      Ds(i, t, s, n)
    })
  else if (Ch(e)) for (const i in e) Ds(e[i], t, s, n)
  return e
}
function yn(e, t) {
  if (Ot === null) return e
  const s = Er(Ot) || Ot.proxy,
    n = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [r, o, a, l = Tt] = t[i]
    r &&
      (it(r) && (r = { mounted: r, updated: r }),
      r.deep && Ds(o),
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
function Ps(e, t, s, n) {
  const i = e.dirs,
    r = t && t.dirs
  for (let o = 0; o < i.length; o++) {
    const a = i[o]
    r && (a.oldValue = r[o].value)
    let l = a.dir[n]
    l && (Ys(), Se(l, s, 8, [e.el, a, e, t]), Xs())
  }
}
const us = Symbol('_leaveCb'),
  ki = Symbol('_enterCb')
function $p() {
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
    Ea(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const ve = [Function, Array],
  ou = {
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
  Np = {
    name: 'BaseTransition',
    props: ou,
    setup(e, { slots: t }) {
      const s = ss(),
        n = $p()
      let i
      return () => {
        const r = t.default && lu(t.default(), !0)
        if (!r || !r.length) return
        let o = r[0]
        if (r.length > 1) {
          for (const g of r)
            if (g.type !== Ce) {
              o = g
              break
            }
        }
        const a = gt(e),
          { mode: l } = a
        if (n.isLeaving) return Dr(o)
        const h = vl(o)
        if (!h) return Dr(o)
        const c = Ao(h, a, n, s)
        er(h, c)
        const u = s.subTree,
          d = u && vl(u)
        let f = !1
        const { getTransitionKey: p } = h.type
        if (p) {
          const g = p()
          i === void 0 ? (i = g) : g !== i && ((i = g), (f = !0))
        }
        if (d && d.type !== Ce && (!gs(h, d) || f)) {
          const g = Ao(d, a, n, s)
          if ((er(d, g), l === 'out-in'))
            return (
              (n.isLeaving = !0),
              (g.afterLeave = () => {
                ;(n.isLeaving = !1),
                  s.update.active !== !1 && ((s.effect.dirty = !0), s.update())
              }),
              Dr(o)
            )
          l === 'in-out' &&
            h.type !== Ce &&
            (g.delayLeave = (m, x, y) => {
              const v = au(n, d)
              ;(v[String(d.key)] = d),
                (m[us] = () => {
                  x(), (m[us] = void 0), delete c.delayedLeave
                }),
                (c.delayedLeave = y)
            })
        }
        return o
      }
    },
  },
  Dp = Np
function au(e, t) {
  const { leavingVNodes: s } = e
  let n = s.get(t.type)
  return n || ((n = Object.create(null)), s.set(t.type, n)), n
}
function Ao(e, t, s, n) {
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
      onAfterAppear: x,
      onAppearCancelled: y,
    } = t,
    v = String(e.key),
    w = au(s, e),
    M = (C, S) => {
      C && Se(C, n, 9, S)
    },
    k = (C, S) => {
      const P = S[1]
      M(C, S),
        Z(C) ? C.every((Y) => Y.length <= 1) && P() : C.length <= 1 && P()
    },
    E = {
      mode: r,
      persisted: o,
      beforeEnter(C) {
        let S = a
        if (!s.isMounted)
          if (i) S = g || a
          else return
        C[us] && C[us](!0)
        const P = w[v]
        P && gs(e, P) && P.el[us] && P.el[us](), M(S, [C])
      },
      enter(C) {
        let S = l,
          P = h,
          Y = c
        if (!s.isMounted)
          if (i) (S = m || l), (P = x || h), (Y = y || c)
          else return
        let V = !1
        const D = (C[ki] = (G) => {
          V ||
            ((V = !0),
            G ? M(Y, [C]) : M(P, [C]),
            E.delayedLeave && E.delayedLeave(),
            (C[ki] = void 0))
        })
        S ? k(S, [C, D]) : D()
      },
      leave(C, S) {
        const P = String(e.key)
        if ((C[ki] && C[ki](!0), s.isUnmounting)) return S()
        M(u, [C])
        let Y = !1
        const V = (C[us] = (D) => {
          Y ||
            ((Y = !0),
            S(),
            D ? M(p, [C]) : M(f, [C]),
            (C[us] = void 0),
            w[P] === e && delete w[P])
        })
        ;(w[P] = e), d ? k(d, [C, V]) : V()
      },
      clone(C) {
        return Ao(C, t, s, n)
      },
    }
  return E
}
function Dr(e) {
  if (vr(e)) return (e = Je(e)), (e.children = null), e
}
function vl(e) {
  return vr(e) ? (e.children ? e.children[0] : void 0) : e
}
function er(e, t) {
  e.shapeFlag & 6 && e.component
    ? er(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function lu(e, t = !1, s) {
  let n = [],
    i = 0
  for (let r = 0; r < e.length; r++) {
    let o = e[r]
    const a = s == null ? o.key : String(s) + String(o.key != null ? o.key : r)
    o.type === te
      ? (o.patchFlag & 128 && i++, (n = n.concat(lu(o.children, t, a))))
      : (t || o.type !== Ce) && n.push(a != null ? Je(o, { key: a }) : o)
  }
  if (i > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2
  return n
}
/*! #__NO_SIDE_EFFECTS__ */ function st(e, t) {
  return it(e) ? (() => Ft({ name: e.name }, t, { setup: e }))() : e
}
const un = (e) => !!e.type.__asyncLoader,
  vr = (e) => e.type.__isKeepAlive,
  zp = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const s = ss(),
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
            ;(E.isDeactivated = !1), E.a && cn(E.a)
            const C = y.props && y.props.onVnodeMounted
            C && we(C, E.parent, y)
          }, a)
      }),
        (n.deactivate = (y) => {
          const v = y.component
          h(y, d, null, 1, a),
            Ut(() => {
              v.da && cn(v.da)
              const w = y.props && y.props.onVnodeUnmounted
              w && we(w, v.parent, y), (v.isDeactivated = !0)
            }, a)
        })
      function f(y) {
        zr(y), c(y, s, a, !0)
      }
      function p(y) {
        i.forEach((v, w) => {
          const M = Ro(v.type)
          M && (!y || !y(M)) && g(w)
        })
      }
      function g(y) {
        const v = i.get(y)
        !o || !gs(v, o) ? f(v) : o && zr(o), i.delete(y), r.delete(y)
      }
      Zt(
        () => [e.include, e.exclude],
        ([y, v]) => {
          y && p((w) => Wn(y, w)), v && p((w) => !Wn(v, w))
        },
        { flush: 'post', deep: !0 },
      )
      let m = null
      const x = () => {
        m != null && i.set(m, Vr(s.subTree))
      }
      return (
        Te(x),
        hu(x),
        Ea(() => {
          i.forEach((y) => {
            const { subTree: v, suspense: w } = s,
              M = Vr(v)
            if (y.type === M.type && y.key === M.key) {
              zr(M)
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
          if (!Gs(v) || (!(v.shapeFlag & 4) && !(v.shapeFlag & 128)))
            return (o = null), v
          let w = Vr(v)
          const M = w.type,
            k = Ro(un(w) ? w.type.__asyncResolved || {} : M),
            { include: E, exclude: C, max: S } = e
          if ((E && (!k || !Wn(E, k))) || (C && k && Wn(C, k)))
            return (o = w), v
          const P = w.key == null ? M : w.key,
            Y = i.get(P)
          return (
            w.el && ((w = Je(w)), v.shapeFlag & 128 && (v.ssContent = w)),
            (m = P),
            Y
              ? ((w.el = Y.el),
                (w.component = Y.component),
                w.transition && er(w, w.transition),
                (w.shapeFlag |= 512),
                r.delete(P),
                r.add(P))
              : (r.add(P),
                S && r.size > parseInt(S, 10) && g(r.values().next().value)),
            (w.shapeFlag |= 256),
            (o = w),
            iu(v.type) ? v : w
          )
        }
      )
    },
  },
  Vp = zp
function Wn(e, t) {
  return Z(e)
    ? e.some((s) => Wn(s, t))
    : At(e)
    ? e.split(',').includes(t)
    : Of(e)
    ? e.test(t)
    : !1
}
function Up(e, t) {
  cu(e, 'a', t)
}
function Hp(e, t) {
  cu(e, 'da', t)
}
function cu(e, t, s = zt) {
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
  if ((wr(t, n, s), s)) {
    let i = s.parent
    for (; i && i.parent; ) vr(i.parent.vnode) && Gp(n, t, s, i), (i = i.parent)
  }
}
function Gp(e, t, s, n) {
  const i = wr(t, e, n, !0)
  Pa(() => {
    ca(n[t], i)
  }, s)
}
function zr(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function Vr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function wr(e, t, s = zt, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          if (s.isUnmounted) return
          Ys()
          const a = vi(s),
            l = Se(t, s, e, o)
          return a(), Xs(), l
        })
    return n ? i.unshift(r) : i.push(r), r
  }
}
const es =
    (e) =>
    (t, s = zt) =>
      (!Cr || e === 'sp') && wr(e, (...n) => t(...n), s),
  Wp = es('bm'),
  Te = es('m'),
  jp = es('bu'),
  hu = es('u'),
  Ea = es('bum'),
  Pa = es('um'),
  Yp = es('sp'),
  Xp = es('rtg'),
  Kp = es('rtc')
function qp(e, t = zt) {
  wr('ec', e, t)
}
function Zp(e, t, s, n) {
  let i
  const r = s && s[n]
  if (Z(e) || At(e)) {
    i = new Array(e.length)
    for (let o = 0, a = e.length; o < a; o++)
      i[o] = t(e[o], o, void 0, r && r[o])
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o])
  } else if (bt(e))
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
function Uw(e, t) {
  for (let s = 0; s < t.length; s++) {
    const n = t[s]
    if (Z(n)) for (let i = 0; i < n.length; i++) e[n[i].name] = n[i].fn
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
  if (Ot.isCE || (Ot.parent && un(Ot.parent) && Ot.parent.isCE))
    return t !== 'default' && (s.name = t), ct('slot', s, n && n())
  let r = e[t]
  r && r._c && (r._d = !1), tt()
  const o = r && uu(r(s)),
    a = pe(
      te,
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
function uu(e) {
  return e.some((t) =>
    Gs(t) ? !(t.type === Ce || (t.type === te && !uu(t.children))) : !0,
  )
    ? e
    : null
}
const So = (e) => (e ? (Eu(e) ? Er(e) || e.proxy : So(e.parent)) : null),
  Qn = Ft(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => So(e.parent),
    $root: (e) => So(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ta(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Sa(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => Fp.bind(e),
  }),
  Ur = (e, t) => e !== Tt && !e.__isScriptSetup && mt(e, t),
  Qp = {
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
          if (Ur(n, t)) return (o[t] = 1), n[t]
          if (i !== Tt && mt(i, t)) return (o[t] = 2), i[t]
          if ((h = e.propsOptions[0]) && mt(h, t)) return (o[t] = 3), r[t]
          if (s !== Tt && mt(s, t)) return (o[t] = 4), s[t]
          Co && (o[t] = 0)
        }
      }
      const c = Qn[t]
      let u, d
      if (c) return t === '$attrs' && ce(e, 'get', t), c(e)
      if ((u = a.__cssModules) && (u = u[t])) return u
      if (s !== Tt && mt(s, t)) return (o[t] = 4), s[t]
      if (((d = l.config.globalProperties), mt(d, t))) return d[t]
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: i, ctx: r } = e
      return Ur(i, t)
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
        Ur(t, o) ||
        ((a = r[0]) && mt(a, o)) ||
        mt(n, o) ||
        mt(Qn, o) ||
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
function Jp() {
  return du().slots
}
function Hw() {
  return du().attrs
}
function du() {
  const e = ss()
  return e.setupContext || (e.setupContext = Tu(e))
}
function sr(e) {
  return Z(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e
}
function Gw(e, t) {
  return !e || !t ? e || t : Z(e) && Z(t) ? e.concat(t) : Ft({}, sr(e), sr(t))
}
let Co = !0
function tm(e) {
  const t = Ta(e),
    s = e.proxy,
    n = e.ctx
  ;(Co = !1), t.beforeCreate && wl(t.beforeCreate, e, 'bc')
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
    beforeDestroy: x,
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
  if ((h && em(h, n, null), o))
    for (const lt in o) {
      const _t = o[lt]
      it(_t) && (n[lt] = _t.bind(s))
    }
  if (i) {
    const lt = i.call(s, s)
    bt(lt) && (e.data = Tn(lt))
  }
  if (((Co = !0), r))
    for (const lt in r) {
      const _t = r[lt],
        K = it(_t) ? _t.bind(s, s) : it(_t.get) ? _t.get.bind(s, s) : se,
        et = !it(_t) && it(_t.set) ? _t.set.bind(s) : se,
        xe = Q({ get: K, set: et })
      Object.defineProperty(n, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (at) => (xe.value = at),
      })
    }
  if (a) for (const lt in a) fu(a[lt], n, s, lt)
  if (l) {
    const lt = it(l) ? l.call(s) : l
    Reflect.ownKeys(lt).forEach((_t) => {
      fn(_t, lt[_t])
    })
  }
  c && wl(c, e, 'c')
  function X(lt, _t) {
    Z(_t) ? _t.forEach((K) => lt(K.bind(s))) : _t && lt(_t.bind(s))
  }
  if (
    (X(Wp, u),
    X(Te, d),
    X(jp, f),
    X(hu, p),
    X(Up, g),
    X(Hp, m),
    X(qp, C),
    X(Kp, k),
    X(Xp, E),
    X(Ea, y),
    X(Pa, w),
    X(Yp, S),
    Z(P))
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
  M && e.render === se && (e.render = M),
    Y != null && (e.inheritAttrs = Y),
    V && (e.components = V),
    D && (e.directives = D)
}
function em(e, t, s = se) {
  Z(e) && (e = Eo(e))
  for (const n in e) {
    const i = e[n]
    let r
    bt(i)
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
function wl(e, t, s) {
  Se(Z(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function fu(e, t, s, n) {
  const i = n.includes('.') ? ru(s, n) : () => s[n]
  if (At(e)) {
    const r = t[e]
    it(r) && Zt(i, r)
  } else if (it(e)) Zt(i, e.bind(s))
  else if (bt(e))
    if (Z(e)) e.forEach((r) => fu(r, t, s, n))
    else {
      const r = it(e.handler) ? e.handler.bind(s) : t[e.handler]
      it(r) && Zt(i, r, e)
    }
}
function Ta(e) {
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
      : ((l = {}), i.length && i.forEach((h) => nr(l, h, o, !0)), nr(l, t, o)),
    bt(t) && r.set(t, l),
    l
  )
}
function nr(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t
  r && nr(e, r, s, !0), i && i.forEach((o) => nr(e, o, s, !0))
  for (const o in t)
    if (!(n && o === 'expose')) {
      const a = sm[o] || (s && s[o])
      e[o] = a ? a(e[o], t[o]) : t[o]
    }
  return e
}
const sm = {
  data: Al,
  props: Sl,
  emits: Sl,
  methods: jn,
  computed: jn,
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
  components: jn,
  directives: jn,
  watch: im,
  provide: Al,
  inject: nm,
}
function Al(e, t) {
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
function nm(e, t) {
  return jn(Eo(e), Eo(t))
}
function Eo(e) {
  if (Z(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s]
    return t
  }
  return e
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function jn(e, t) {
  return e ? Ft(Object.create(null), e, t) : t
}
function Sl(e, t) {
  return e
    ? Z(e) && Z(t)
      ? [...new Set([...e, ...t])]
      : Ft(Object.create(null), sr(e), sr(t ?? {}))
    : t
}
function im(e, t) {
  if (!e) return t
  if (!t) return e
  const s = Ft(Object.create(null), e)
  for (const n in t) s[n] = Jt(e[n], t[n])
  return s
}
function pu() {
  return {
    app: null,
    config: {
      isNativeTag: Lf,
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
let rm = 0
function om(e, t) {
  return function (n, i = null) {
    it(n) || (n = Ft({}, n)), i != null && !bt(i) && (i = null)
    const r = pu(),
      o = new WeakSet()
    let a = !1
    const l = (r.app = {
      _uid: rm++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Rm,
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
            Er(d.component) || d.component.proxy
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
        const c = dn
        dn = l
        try {
          return h()
        } finally {
          dn = c
        }
      },
    })
    return l
  }
}
let dn = null
function fn(e, t) {
  if (zt) {
    let s = zt.provides
    const n = zt.parent && zt.parent.provides
    n === s && (s = zt.provides = Object.create(n)), (s[e] = t)
  }
}
function Vt(e, t, s = !1) {
  const n = zt || Ot
  if (n || dn) {
    const i = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : dn._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return s && it(t) ? t.call(n && n.proxy) : t
  }
}
function am() {
  return !!(zt || Ot || dn)
}
function lm(e, t, s, n = !1) {
  const i = {},
    r = {}
  Zi(r, Sr, 1), (e.propsDefaults = Object.create(null)), mu(e, t, i, r)
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0)
  s ? (e.props = n ? i : ya(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r)
}
function cm(e, t, s, n) {
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
        if (yr(e.emitsOptions, d)) continue
        const f = t[d]
        if (l)
          if (mt(r, d)) f !== r[d] && ((r[d] = f), (h = !0))
          else {
            const p = Pe(d)
            i[p] = Po(l, a, p, f, e, !1)
          }
        else f !== r[d] && ((r[d] = f), (h = !0))
      }
    }
  } else {
    mu(e, t, i, r) && (h = !0)
    let c
    for (const u in a)
      (!t || (!mt(t, u) && ((c = ts(u)) === u || !mt(t, c)))) &&
        (l
          ? s &&
            (s[u] !== void 0 || s[c] !== void 0) &&
            (i[u] = Po(l, a, u, void 0, e, !0))
          : delete i[u])
    if (r !== a) for (const u in r) (!t || !mt(t, u)) && (delete r[u], (h = !0))
  }
  h && Ze(e, 'set', '$attrs')
}
function mu(e, t, s, n) {
  const [i, r] = e.propsOptions
  let o = !1,
    a
  if (t)
    for (let l in t) {
      if (qn(l)) continue
      const h = t[l]
      let c
      i && mt(i, (c = Pe(l)))
        ? !r || !r.includes(c)
          ? (s[c] = h)
          : ((a || (a = {}))[c] = h)
        : yr(e.emitsOptions, l) ||
          ((!(l in n) || h !== n[l]) && ((n[l] = h), (o = !0)))
    }
  if (r) {
    const l = gt(s),
      h = a || Tt
    for (let c = 0; c < r.length; c++) {
      const u = r[c]
      s[u] = Po(i, l, u, h[u], e, !mt(h, u))
    }
  }
  return o
}
function Po(e, t, s, n, i, r) {
  const o = e[s]
  if (o != null) {
    const a = mt(o, 'default')
    if (a && n === void 0) {
      const l = o.default
      if (o.type !== Function && !o.skipFactory && it(l)) {
        const { propsDefaults: h } = i
        if (s in h) n = h[s]
        else {
          const c = vi(i)
          ;(n = h[s] = l.call(null, t)), c()
        }
      } else n = l
    }
    o[0] && (r && !a ? (n = !1) : o[1] && (n === '' || n === ts(s)) && (n = !0))
  }
  return n
}
function gu(e, t, s = !1) {
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
      const [d, f] = gu(u, t, !0)
      Ft(o, d), f && a.push(...f)
    }
    !s && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!r && !l) return bt(e) && n.set(e, an), an
  if (Z(r))
    for (let c = 0; c < r.length; c++) {
      const u = Pe(r[c])
      Cl(u) && (o[u] = Tt)
    }
  else if (r)
    for (const c in r) {
      const u = Pe(c)
      if (Cl(u)) {
        const d = r[c],
          f = (o[u] = Z(d) || it(d) ? { type: d } : Ft({}, d))
        if (f) {
          const p = Tl(Boolean, f.type),
            g = Tl(String, f.type)
          ;(f[0] = p > -1),
            (f[1] = g < 0 || p < g),
            (p > -1 || mt(f, 'default')) && a.push(u)
        }
      }
    }
  const h = [o, a]
  return bt(e) && n.set(e, h), h
}
function Cl(e) {
  return e[0] !== '$' && !qn(e)
}
function El(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function Pl(e, t) {
  return El(e) === El(t)
}
function Tl(e, t) {
  return Z(t) ? t.findIndex((s) => Pl(s, e)) : it(t) && Pl(t, e) ? 0 : -1
}
const _u = (e) => e[0] === '_' || e === '$stable',
  Ma = (e) => (Z(e) ? e.map(Ve) : [Ve(e)]),
  hm = (e, t, s) => {
    if (t._n) return t
    const n = Xt((...i) => Ma(t(...i)), s)
    return (n._c = !1), n
  },
  yu = (e, t, s) => {
    const n = e._ctx
    for (const i in e) {
      if (_u(i)) continue
      const r = e[i]
      if (it(r)) t[i] = hm(i, r, n)
      else if (r != null) {
        const o = Ma(r)
        t[i] = () => o
      }
    }
  },
  xu = (e, t) => {
    const s = Ma(t)
    e.slots.default = () => s
  },
  um = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? ((e.slots = gt(t)), Zi(t, '_', s)) : yu(t, (e.slots = {}))
    } else (e.slots = {}), t && xu(e, t)
    Zi(e.slots, Sr, 1)
  },
  dm = (e, t, s) => {
    const { vnode: n, slots: i } = e
    let r = !0,
      o = Tt
    if (n.shapeFlag & 32) {
      const a = t._
      a
        ? s && a === 1
          ? (r = !1)
          : (Ft(i, t), !s && a === 1 && delete i._)
        : ((r = !t.$stable), yu(t, i)),
        (o = t)
    } else t && (xu(e, t), (o = { default: 1 }))
    if (r) for (const a in i) !_u(a) && o[a] == null && delete i[a]
  }
function To(e, t, s, n, i = !1) {
  if (Z(e)) {
    e.forEach((d, f) => To(d, t && (Z(t) ? t[f] : t), s, n, i))
    return
  }
  if (un(n) && !i) return
  const r = n.shapeFlag & 4 ? Er(n.component) || n.component.proxy : n.el,
    o = i ? null : r,
    { i: a, r: l } = e,
    h = t && t.r,
    c = a.refs === Tt ? (a.refs = {}) : a.refs,
    u = a.setupState
  if (
    (h != null &&
      h !== l &&
      (At(h)
        ? ((c[h] = null), mt(u, h) && (u[h] = null))
        : It(h) && (h.value = null)),
    it(l))
  )
    ws(l, a, 12, [o, c])
  else {
    const d = At(l),
      f = It(l)
    if (d || f) {
      const p = () => {
        if (e.f) {
          const g = d ? (mt(u, l) ? u[l] : c[l]) : l.value
          i
            ? Z(g) && ca(g, r)
            : Z(g)
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
function fm() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != 'boolean' &&
    (ua().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1)
}
const Ut = kp
function pm(e) {
  return mm(e)
}
function mm(e, t) {
  fm()
  const s = ua()
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
      setScopeId: f = se,
      insertStaticContent: p,
    } = e,
    g = (
      _,
      b,
      A,
      I = null,
      T = null,
      B = null,
      z = void 0,
      O = null,
      $ = !!b.dynamicChildren,
    ) => {
      if (_ === b) return
      _ && !gs(_, b) && ((I = R(_)), at(_, T, B, !0), (_ = null)),
        b.patchFlag === -2 && (($ = !1), (b.dynamicChildren = null))
      const { type: L, ref: H, shapeFlag: J } = b
      switch (L) {
        case Ar:
          m(_, b, A, I)
          break
        case Ce:
          x(_, b, A, I)
          break
        case Gr:
          _ == null && y(b, A, I, z)
          break
        case te:
          V(_, b, A, I, T, B, z, O, $)
          break
        default:
          J & 1
            ? M(_, b, A, I, T, B, z, O, $)
            : J & 6
            ? D(_, b, A, I, T, B, z, O, $)
            : (J & 64 || J & 128) && L.process(_, b, A, I, T, B, z, O, $, W)
      }
      H != null && T && To(H, _ && _.ref, B, b || _, !b)
    },
    m = (_, b, A, I) => {
      if (_ == null) n((b.el = a(b.children)), A, I)
      else {
        const T = (b.el = _.el)
        b.children !== _.children && h(T, b.children)
      }
    },
    x = (_, b, A, I) => {
      _ == null ? n((b.el = l(b.children || '')), A, I) : (b.el = _.el)
    },
    y = (_, b, A, I) => {
      ;[_.el, _.anchor] = p(_.children, b, A, I, _.el, _.anchor)
    },
    v = ({ el: _, anchor: b }, A, I) => {
      let T
      for (; _ && _ !== b; ) (T = d(_)), n(_, A, I), (_ = T)
      n(b, A, I)
    },
    w = ({ el: _, anchor: b }) => {
      let A
      for (; _ && _ !== b; ) (A = d(_)), i(_), (_ = A)
      i(b)
    },
    M = (_, b, A, I, T, B, z, O, $) => {
      b.type === 'svg' ? (z = 'svg') : b.type === 'math' && (z = 'mathml'),
        _ == null ? k(b, A, I, T, B, z, O, $) : S(_, b, T, B, z, O, $)
    },
    k = (_, b, A, I, T, B, z, O) => {
      let $, L
      const { props: H, shapeFlag: J, transition: q, dirs: rt } = _
      if (
        (($ = _.el = o(_.type, B, H && H.is, H)),
        J & 8
          ? c($, _.children)
          : J & 16 && C(_.children, $, null, I, T, Hr(_, B), z, O),
        rt && Ps(_, null, I, 'created'),
        E($, _, _.scopeId, z, I),
        H)
      ) {
        for (const St in H)
          St !== 'value' &&
            !qn(St) &&
            r($, St, null, H[St], B, _.children, I, T, Lt)
        'value' in H && r($, 'value', null, H.value, B),
          (L = H.onVnodeBeforeMount) && we(L, I, _)
      }
      rt && Ps(_, null, I, 'beforeMount')
      const pt = gm(T, q)
      pt && q.beforeEnter($),
        n($, b, A),
        ((L = H && H.onVnodeMounted) || pt || rt) &&
          Ut(() => {
            L && we(L, I, _), pt && q.enter($), rt && Ps(_, null, I, 'mounted')
          }, T)
    },
    E = (_, b, A, I, T) => {
      if ((A && f(_, A), I)) for (let B = 0; B < I.length; B++) f(_, I[B])
      if (T) {
        let B = T.subTree
        if (b === B) {
          const z = T.vnode
          E(_, z, z.scopeId, z.slotScopeIds, T.parent)
        }
      }
    },
    C = (_, b, A, I, T, B, z, O, $ = 0) => {
      for (let L = $; L < _.length; L++) {
        const H = (_[L] = O ? ds(_[L]) : Ve(_[L]))
        g(null, H, b, A, I, T, B, z, O)
      }
    },
    S = (_, b, A, I, T, B, z) => {
      const O = (b.el = _.el)
      let { patchFlag: $, dynamicChildren: L, dirs: H } = b
      $ |= _.patchFlag & 16
      const J = _.props || Tt,
        q = b.props || Tt
      let rt
      if (
        (A && Ts(A, !1),
        (rt = q.onVnodeBeforeUpdate) && we(rt, A, b, _),
        H && Ps(b, _, A, 'beforeUpdate'),
        A && Ts(A, !0),
        L
          ? P(_.dynamicChildren, L, O, A, I, Hr(b, T), B)
          : z || _t(_, b, O, null, A, I, Hr(b, T), B, !1),
        $ > 0)
      ) {
        if ($ & 16) Y(O, b, J, q, A, I, T)
        else if (
          ($ & 2 && J.class !== q.class && r(O, 'class', null, q.class, T),
          $ & 4 && r(O, 'style', J.style, q.style, T),
          $ & 8)
        ) {
          const pt = b.dynamicProps
          for (let St = 0; St < pt.length; St++) {
            const Mt = pt[St],
              $t = J[Mt],
              Me = q[Mt]
            ;(Me !== $t || Mt === 'value') &&
              r(O, Mt, $t, Me, T, _.children, A, I, Lt)
          }
        }
        $ & 1 && _.children !== b.children && c(O, b.children)
      } else !z && L == null && Y(O, b, J, q, A, I, T)
      ;((rt = q.onVnodeUpdated) || H) &&
        Ut(() => {
          rt && we(rt, A, b, _), H && Ps(b, _, A, 'updated')
        }, I)
    },
    P = (_, b, A, I, T, B, z) => {
      for (let O = 0; O < b.length; O++) {
        const $ = _[O],
          L = b[O],
          H =
            $.el && ($.type === te || !gs($, L) || $.shapeFlag & 70)
              ? u($.el)
              : A
        g($, L, H, null, I, T, B, z, !0)
      }
    },
    Y = (_, b, A, I, T, B, z) => {
      if (A !== I) {
        if (A !== Tt)
          for (const O in A)
            !qn(O) && !(O in I) && r(_, O, A[O], null, z, b.children, T, B, Lt)
        for (const O in I) {
          if (qn(O)) continue
          const $ = I[O],
            L = A[O]
          $ !== L && O !== 'value' && r(_, O, L, $, z, b.children, T, B, Lt)
        }
        'value' in I && r(_, 'value', A.value, I.value, z)
      }
    },
    V = (_, b, A, I, T, B, z, O, $) => {
      const L = (b.el = _ ? _.el : a('')),
        H = (b.anchor = _ ? _.anchor : a(''))
      let { patchFlag: J, dynamicChildren: q, slotScopeIds: rt } = b
      rt && (O = O ? O.concat(rt) : rt),
        _ == null
          ? (n(L, A, I), n(H, A, I), C(b.children || [], A, H, T, B, z, O, $))
          : J > 0 && J & 64 && q && _.dynamicChildren
          ? (P(_.dynamicChildren, q, A, T, B, z, O),
            (b.key != null || (T && b === T.subTree)) && Ia(_, b, !0))
          : _t(_, b, A, H, T, B, z, O, $)
    },
    D = (_, b, A, I, T, B, z, O, $) => {
      ;(b.slotScopeIds = O),
        _ == null
          ? b.shapeFlag & 512
            ? T.ctx.activate(b, A, I, z, $)
            : G(b, A, I, T, B, z, $)
          : ut(_, b, $)
    },
    G = (_, b, A, I, T, B, z) => {
      const O = (_.component = Em(_, I, T))
      if ((vr(_) && (O.ctx.renderer = W), Pm(O), O.asyncDep)) {
        if ((T && T.registerDep(O, X), !_.el)) {
          const $ = (O.subTree = ct(Ce))
          x(null, $, b, A)
        }
      } else X(O, _, b, A, T, B, z)
    },
    ut = (_, b, A) => {
      const I = (b.component = _.component)
      if (Mp(_, b, A))
        if (I.asyncDep && !I.asyncResolved) {
          lt(I, b, A)
          return
        } else (I.next = b), Ap(I.update), (I.effect.dirty = !0), I.update()
      else (b.el = _.el), (I.vnode = b)
    },
    X = (_, b, A, I, T, B, z) => {
      const O = () => {
          if (_.isMounted) {
            let { next: H, bu: J, u: q, parent: rt, vnode: pt } = _
            {
              const Js = bu(_)
              if (Js) {
                H && ((H.el = pt.el), lt(_, H, z)),
                  Js.asyncDep.then(() => {
                    _.isUnmounted || O()
                  })
                return
              }
            }
            let St = H,
              Mt
            Ts(_, !1),
              H ? ((H.el = pt.el), lt(_, H, z)) : (H = pt),
              J && cn(J),
              (Mt = H.props && H.props.onVnodeBeforeUpdate) &&
                we(Mt, rt, H, pt),
              Ts(_, !0)
            const $t = Nr(_),
              Me = _.subTree
            ;(_.subTree = $t),
              g(Me, $t, u(Me.el), R(Me), _, T, B),
              (H.el = $t.el),
              St === null && Ip(_, $t.el),
              q && Ut(q, T),
              (Mt = H.props && H.props.onVnodeUpdated) &&
                Ut(() => we(Mt, rt, H, pt), T)
          } else {
            let H
            const { el: J, props: q } = b,
              { bm: rt, m: pt, parent: St } = _,
              Mt = un(b)
            if (
              (Ts(_, !1),
              rt && cn(rt),
              !Mt && (H = q && q.onVnodeBeforeMount) && we(H, St, b),
              Ts(_, !0),
              J && vt)
            ) {
              const $t = () => {
                ;(_.subTree = Nr(_)), vt(J, _.subTree, _, T, null)
              }
              Mt
                ? b.type.__asyncLoader().then(() => !_.isUnmounted && $t())
                : $t()
            } else {
              const $t = (_.subTree = Nr(_))
              g(null, $t, A, I, _, T, B), (b.el = $t.el)
            }
            if ((pt && Ut(pt, T), !Mt && (H = q && q.onVnodeMounted))) {
              const $t = b
              Ut(() => we(H, St, $t), T)
            }
            ;(b.shapeFlag & 256 ||
              (St && un(St.vnode) && St.vnode.shapeFlag & 256)) &&
              _.a &&
              Ut(_.a, T),
              (_.isMounted = !0),
              (b = A = I = null)
          }
        },
        $ = (_.effect = new fa(O, se, () => Sa(L), _.scope)),
        L = (_.update = () => {
          $.dirty && $.run()
        })
      ;(L.id = _.uid), Ts(_, !0), L()
    },
    lt = (_, b, A) => {
      b.component = _
      const I = _.vnode.props
      ;(_.vnode = b),
        (_.next = null),
        cm(_, b.props, I, A),
        dm(_, b.children, A),
        Ys(),
        yl(_),
        Xs()
    },
    _t = (_, b, A, I, T, B, z, O, $ = !1) => {
      const L = _ && _.children,
        H = _ ? _.shapeFlag : 0,
        J = b.children,
        { patchFlag: q, shapeFlag: rt } = b
      if (q > 0) {
        if (q & 128) {
          et(L, J, A, I, T, B, z, O, $)
          return
        } else if (q & 256) {
          K(L, J, A, I, T, B, z, O, $)
          return
        }
      }
      rt & 8
        ? (H & 16 && Lt(L, T, B), J !== L && c(A, J))
        : H & 16
        ? rt & 16
          ? et(L, J, A, I, T, B, z, O, $)
          : Lt(L, T, B, !0)
        : (H & 8 && c(A, ''), rt & 16 && C(J, A, I, T, B, z, O, $))
    },
    K = (_, b, A, I, T, B, z, O, $) => {
      ;(_ = _ || an), (b = b || an)
      const L = _.length,
        H = b.length,
        J = Math.min(L, H)
      let q
      for (q = 0; q < J; q++) {
        const rt = (b[q] = $ ? ds(b[q]) : Ve(b[q]))
        g(_[q], rt, A, null, T, B, z, O, $)
      }
      L > H ? Lt(_, T, B, !0, !1, J) : C(b, A, I, T, B, z, O, $, J)
    },
    et = (_, b, A, I, T, B, z, O, $) => {
      let L = 0
      const H = b.length
      let J = _.length - 1,
        q = H - 1
      for (; L <= J && L <= q; ) {
        const rt = _[L],
          pt = (b[L] = $ ? ds(b[L]) : Ve(b[L]))
        if (gs(rt, pt)) g(rt, pt, A, null, T, B, z, O, $)
        else break
        L++
      }
      for (; L <= J && L <= q; ) {
        const rt = _[J],
          pt = (b[q] = $ ? ds(b[q]) : Ve(b[q]))
        if (gs(rt, pt)) g(rt, pt, A, null, T, B, z, O, $)
        else break
        J--, q--
      }
      if (L > J) {
        if (L <= q) {
          const rt = q + 1,
            pt = rt < H ? b[rt].el : I
          for (; L <= q; )
            g(null, (b[L] = $ ? ds(b[L]) : Ve(b[L])), A, pt, T, B, z, O, $), L++
        }
      } else if (L > q) for (; L <= J; ) at(_[L], T, B, !0), L++
      else {
        const rt = L,
          pt = L,
          St = new Map()
        for (L = pt; L <= q; L++) {
          const he = (b[L] = $ ? ds(b[L]) : Ve(b[L]))
          he.key != null && St.set(he.key, L)
        }
        let Mt,
          $t = 0
        const Me = q - pt + 1
        let Js = !1,
          ol = 0
        const Bn = new Array(Me)
        for (L = 0; L < Me; L++) Bn[L] = 0
        for (L = rt; L <= J; L++) {
          const he = _[L]
          if ($t >= Me) {
            at(he, T, B, !0)
            continue
          }
          let Ne
          if (he.key != null) Ne = St.get(he.key)
          else
            for (Mt = pt; Mt <= q; Mt++)
              if (Bn[Mt - pt] === 0 && gs(he, b[Mt])) {
                Ne = Mt
                break
              }
          Ne === void 0
            ? at(he, T, B, !0)
            : ((Bn[Ne - pt] = L + 1),
              Ne >= ol ? (ol = Ne) : (Js = !0),
              g(he, b[Ne], A, null, T, B, z, O, $),
              $t++)
        }
        const al = Js ? _m(Bn) : an
        for (Mt = al.length - 1, L = Me - 1; L >= 0; L--) {
          const he = pt + L,
            Ne = b[he],
            ll = he + 1 < H ? b[he + 1].el : I
          Bn[L] === 0
            ? g(null, Ne, A, ll, T, B, z, O, $)
            : Js && (Mt < 0 || L !== al[Mt] ? xe(Ne, A, ll, 2) : Mt--)
        }
      }
    },
    xe = (_, b, A, I, T = null) => {
      const { el: B, type: z, transition: O, children: $, shapeFlag: L } = _
      if (L & 6) {
        xe(_.component.subTree, b, A, I)
        return
      }
      if (L & 128) {
        _.suspense.move(b, A, I)
        return
      }
      if (L & 64) {
        z.move(_, b, A, W)
        return
      }
      if (z === te) {
        n(B, b, A)
        for (let J = 0; J < $.length; J++) xe($[J], b, A, I)
        n(_.anchor, b, A)
        return
      }
      if (z === Gr) {
        v(_, b, A)
        return
      }
      if (I !== 2 && L & 1 && O)
        if (I === 0) O.beforeEnter(B), n(B, b, A), Ut(() => O.enter(B), T)
        else {
          const { leave: J, delayLeave: q, afterLeave: rt } = O,
            pt = () => n(B, b, A),
            St = () => {
              J(B, () => {
                pt(), rt && rt()
              })
            }
          q ? q(B, pt, St) : St()
        }
      else n(B, b, A)
    },
    at = (_, b, A, I = !1, T = !1) => {
      const {
        type: B,
        props: z,
        ref: O,
        children: $,
        dynamicChildren: L,
        shapeFlag: H,
        patchFlag: J,
        dirs: q,
      } = _
      if ((O != null && To(O, null, A, _, !0), H & 256)) {
        b.ctx.deactivate(_)
        return
      }
      const rt = H & 1 && q,
        pt = !un(_)
      let St
      if ((pt && (St = z && z.onVnodeBeforeUnmount) && we(St, b, _), H & 6))
        $e(_.component, A, I)
      else {
        if (H & 128) {
          _.suspense.unmount(A, I)
          return
        }
        rt && Ps(_, null, b, 'beforeUnmount'),
          H & 64
            ? _.type.remove(_, b, A, T, W, I)
            : L && (B !== te || (J > 0 && J & 64))
            ? Lt(L, b, A, !1, !0)
            : ((B === te && J & 384) || (!T && H & 16)) && Lt($, b, A),
          I && Qt(_)
      }
      ;((pt && (St = z && z.onVnodeUnmounted)) || rt) &&
        Ut(() => {
          St && we(St, b, _), rt && Ps(_, null, b, 'unmounted')
        }, A)
    },
    Qt = (_) => {
      const { type: b, el: A, anchor: I, transition: T } = _
      if (b === te) {
        be(A, I)
        return
      }
      if (b === Gr) {
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
    be = (_, b) => {
      let A
      for (; _ !== b; ) (A = d(_)), i(_), (_ = A)
      i(b)
    },
    $e = (_, b, A) => {
      const { bum: I, scope: T, update: B, subTree: z, um: O } = _
      I && cn(I),
        T.stop(),
        B && ((B.active = !1), at(z, _, b, A)),
        O && Ut(O, b),
        Ut(() => {
          _.isUnmounted = !0
        }, b),
        b &&
          b.pendingBranch &&
          !b.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === b.pendingId &&
          (b.deps--, b.deps === 0 && b.resolve())
    },
    Lt = (_, b, A, I = !1, T = !1, B = 0) => {
      for (let z = B; z < _.length; z++) at(_[z], b, A, I, T)
    },
    R = (_) =>
      _.shapeFlag & 6
        ? R(_.component.subTree)
        : _.shapeFlag & 128
        ? _.suspense.next()
        : d(_.anchor || _.el)
  let U = !1
  const N = (_, b, A) => {
      _ == null
        ? b._vnode && at(b._vnode, null, null, !0)
        : g(b._vnode || null, _, b, null, null, null, A),
        U || ((U = !0), yl(), qh(), (U = !1)),
        (b._vnode = _)
    },
    W = { p: g, um: at, m: xe, r: Qt, mt: G, mc: C, pc: _t, pbc: P, n: R, o: e }
  let yt, vt
  return (
    t && ([yt, vt] = t(W)), { render: N, hydrate: yt, createApp: om(N, yt) }
  )
}
function Hr({ type: e, props: t }, s) {
  return (s === 'svg' && e === 'foreignObject') ||
    (s === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : s
}
function Ts({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s
}
function gm(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ia(e, t, s = !1) {
  const n = e.children,
    i = t.children
  if (Z(n) && Z(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r]
      let a = i[r]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = ds(i[r])), (a.el = o.el)),
        s || Ia(o, a)),
        a.type === Ar && (a.el = o.el)
    }
}
function _m(e) {
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
function bu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : bu(t)
}
const ym = (e) => e.__isTeleport,
  Jn = (e) => e && (e.disabled || e.disabled === ''),
  Ml = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Il = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Mo = (e, t) => {
    const s = e && e.to
    return At(s) ? (t ? t(s) : null) : s
  },
  xm = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, s, n, i, r, o, a, l, h) {
      const {
          mc: c,
          pc: u,
          pbc: d,
          o: { insert: f, querySelector: p, createText: g, createComment: m },
        } = h,
        x = Jn(t.props)
      let { shapeFlag: y, children: v, dynamicChildren: w } = t
      if (e == null) {
        const M = (t.el = g('')),
          k = (t.anchor = g(''))
        f(M, s, n), f(k, s, n)
        const E = (t.target = Mo(t.props, p)),
          C = (t.targetAnchor = g(''))
        E &&
          (f(C, E),
          o === 'svg' || Ml(E)
            ? (o = 'svg')
            : (o === 'mathml' || Il(E)) && (o = 'mathml'))
        const S = (P, Y) => {
          y & 16 && c(v, P, Y, i, r, o, a, l)
        }
        x ? S(s, k) : E && S(E, C)
      } else {
        t.el = e.el
        const M = (t.anchor = e.anchor),
          k = (t.target = e.target),
          E = (t.targetAnchor = e.targetAnchor),
          C = Jn(e.props),
          S = C ? s : k,
          P = C ? M : E
        if (
          (o === 'svg' || Ml(k)
            ? (o = 'svg')
            : (o === 'mathml' || Il(k)) && (o = 'mathml'),
          w
            ? (d(e.dynamicChildren, w, S, i, r, o, a), Ia(e, t, !0))
            : l || u(e, t, S, P, i, r, o, a, !1),
          x)
        )
          C
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Li(t, s, M, h, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Y = (t.target = Mo(t.props, p))
          Y && Li(t, Y, null, h, 0)
        } else C && Li(t, k, E, h, 1)
      }
      vu(t)
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
        const f = o || !Jn(d)
        for (let p = 0; p < l.length; p++) {
          const g = l[p]
          i(g, t, s, f, !!g.dynamicChildren)
        }
      }
    },
    move: Li,
    hydrate: bm,
  }
function Li(e, t, s, { o: { insert: n }, m: i }, r = 2) {
  r === 0 && n(e.targetAnchor, t, s)
  const { el: o, anchor: a, shapeFlag: l, children: h, props: c } = e,
    u = r === 2
  if ((u && n(o, t, s), (!u || Jn(c)) && l & 16))
    for (let d = 0; d < h.length; d++) i(h[d], t, s, 2)
  u && n(a, t, s)
}
function bm(
  e,
  t,
  s,
  n,
  i,
  r,
  { o: { nextSibling: o, parentNode: a, querySelector: l } },
  h,
) {
  const c = (t.target = Mo(t.props, l))
  if (c) {
    const u = c._lpa || c.firstChild
    if (t.shapeFlag & 16)
      if (Jn(t.props))
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
    vu(t)
  }
  return t.anchor && o(t.anchor)
}
const Ww = xm
function vu(e) {
  const t = e.ctx
  if (t && t.ut) {
    let s = e.children[0].el
    for (; s && s !== e.targetAnchor; )
      s.nodeType === 1 && s.setAttribute('data-v-owner', t.uid),
        (s = s.nextSibling)
    t.ut()
  }
}
const te = Symbol.for('v-fgt'),
  Ar = Symbol.for('v-txt'),
  Ce = Symbol.for('v-cmt'),
  Gr = Symbol.for('v-stc'),
  ti = []
let Le = null
function tt(e = !1) {
  ti.push((Le = e ? null : []))
}
function vm() {
  ti.pop(), (Le = ti[ti.length - 1] || null)
}
let hi = 1
function Rl(e) {
  hi += e
}
function wu(e) {
  return (
    (e.dynamicChildren = hi > 0 ? Le || an : null),
    vm(),
    hi > 0 && Le && Le.push(e),
    e
  )
}
function ft(e, t, s, n, i, r) {
  return wu(nt(e, t, s, n, i, r, !0))
}
function pe(e, t, s, n, i) {
  return wu(ct(e, t, s, n, i, !0))
}
function Gs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function gs(e, t) {
  return e.type === t.type && e.key === t.key
}
const Sr = '__vInternal',
  Au = ({ key: e }) => e ?? null,
  Yi = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? At(e) || It(e) || it(e)
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
  r = e === te ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Au(t),
    ref: t && Yi(t),
    scopeId: xr,
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
      ? (Ra(l, s), r & 128 && e.normalize(l))
      : s && (l.shapeFlag |= At(s) ? 8 : 16),
    hi > 0 &&
      !o &&
      Le &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      Le.push(l),
    l
  )
}
const ct = wm
function wm(e, t = null, s = null, n = 0, i = null, r = !1) {
  if (((!e || e === eu) && (e = Ce), Gs(e))) {
    const a = Je(e, t, !0)
    return (
      s && Ra(a, s),
      hi > 0 &&
        !r &&
        Le &&
        (a.shapeFlag & 6 ? (Le[Le.indexOf(e)] = a) : Le.push(a)),
      (a.patchFlag |= -2),
      a
    )
  }
  if ((Im(e) && (e = e.__vccOpts), t)) {
    t = Am(t)
    let { class: a, style: l } = t
    a && !At(a) && (t.class = Bt(a)),
      bt(l) && (Uh(l) && !Z(l) && (l = Ft({}, l)), (t.style = me(l)))
  }
  const o = At(e) ? 1 : iu(e) ? 128 : ym(e) ? 64 : bt(e) ? 4 : it(e) ? 2 : 0
  return nt(e, t, s, n, i, o, r, !0)
}
function Am(e) {
  return e ? (Uh(e) || Sr in e ? Ft({}, e) : e) : null
}
function Je(e, t, s = !1) {
  const { props: n, ref: i, patchFlag: r, children: o } = e,
    a = t ? Cu(n || {}, t) : n
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Au(a),
    ref:
      t && t.ref ? (s && i ? (Z(i) ? i.concat(Yi(t)) : [i, Yi(t)]) : Yi(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== te ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Su(e = ' ', t = 0) {
  return ct(Ar, null, e, t)
}
function Bi(e = '', t = !1) {
  return t ? (tt(), pe(Ce, null, e)) : ct(Ce, null, e)
}
function Ve(e) {
  return e == null || typeof e == 'boolean'
    ? ct(Ce)
    : Z(e)
    ? ct(te, null, e.slice())
    : typeof e == 'object'
    ? ds(e)
    : ct(Ar, null, String(e))
}
function ds(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Je(e)
}
function Ra(e, t) {
  let s = 0
  const { shapeFlag: n } = e
  if (t == null) t = null
  else if (Z(t)) s = 16
  else if (typeof t == 'object')
    if (n & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), Ra(e, i()), i._c && (i._d = !0))
      return
    } else {
      s = 32
      const i = t._
      !i && !(Sr in t)
        ? (t._ctx = Ot)
        : i === 3 &&
          Ot &&
          (Ot.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    it(t)
      ? ((t = { default: t, _ctx: Ot }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [Su(t)])) : (s = 8))
  ;(e.children = t), (e.shapeFlag |= s)
}
function Cu(...e) {
  const t = {}
  for (let s = 0; s < e.length; s++) {
    const n = e[s]
    for (const i in n)
      if (i === 'class')
        t.class !== n.class && (t.class = Bt([t.class, n.class]))
      else if (i === 'style') t.style = me([t.style, n.style])
      else if (dr(i)) {
        const r = t[i],
          o = n[i]
        o &&
          r !== o &&
          !(Z(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o)
      } else i !== '' && (t[i] = n[i])
  }
  return t
}
function we(e, t, s, n = null) {
  Se(e, t, 7, [s, n])
}
const Sm = pu()
let Cm = 0
function Em(e, t, s) {
  const n = e.type,
    i = (t ? t.appContext : e.appContext) || Sm,
    r = {
      uid: Cm++,
      vnode: e,
      type: n,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Th(!0),
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
      propsOptions: gu(n, i),
      emitsOptions: Qh(n, i),
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
    (r.emit = Ep.bind(null, r)),
    e.ce && e.ce(r),
    r
  )
}
let zt = null
const ss = () => zt || Ot
let ir, Io
{
  const e = ua(),
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
  ;(ir = t('__VUE_INSTANCE_SETTERS__', (s) => (zt = s))),
    (Io = t('__VUE_SSR_SETTERS__', (s) => (Cr = s)))
}
const vi = (e) => {
    const t = zt
    return (
      ir(e),
      e.scope.on(),
      () => {
        e.scope.off(), ir(t)
      }
    )
  },
  kl = () => {
    zt && zt.scope.off(), ir(null)
  }
function Eu(e) {
  return e.vnode.shapeFlag & 4
}
let Cr = !1
function Pm(e, t = !1) {
  t && Io(t)
  const { props: s, children: n } = e.vnode,
    i = Eu(e)
  lm(e, s, i, t), um(e, n)
  const r = i ? Tm(e, t) : void 0
  return t && Io(!1), r
}
function Tm(e, t) {
  const s = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = gr(new Proxy(e.ctx, Qp)))
  const { setup: n } = s
  if (n) {
    const i = (e.setupContext = n.length > 1 ? Tu(e) : null),
      r = vi(e)
    Ys()
    const o = ws(n, e, 0, [e.props, i])
    if ((Xs(), r(), Ah(o))) {
      if ((o.then(kl, kl), t))
        return o
          .then((a) => {
            Ll(e, a, t)
          })
          .catch((a) => {
            _r(a, e, 0)
          })
      e.asyncDep = o
    } else Ll(e, o, t)
  } else Pu(e, t)
}
function Ll(e, t, s) {
  it(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : bt(t) && (e.setupState = Wh(t)),
    Pu(e, s)
}
let Bl
function Pu(e, t, s) {
  const n = e.type
  if (!e.render) {
    if (!t && Bl && !n.render) {
      const i = n.template || Ta(e).template
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = n,
          h = Ft(Ft({ isCustomElement: r, delimiters: a }, o), l)
        n.render = Bl(i, h)
      }
    }
    e.render = n.render || se
  }
  {
    const i = vi(e)
    Ys()
    try {
      tm(e)
    } finally {
      Xs(), i()
    }
  }
}
function Mm(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return ce(e, 'get', '$attrs'), t[s]
      },
    }))
  )
}
function Tu(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  return {
    get attrs() {
      return Mm(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Er(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Wh(gr(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s]
          if (s in Qn) return Qn[s](e)
        },
        has(t, s) {
          return s in t || s in Qn
        },
      }))
    )
}
function Ro(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Im(e) {
  return it(e) && '__vccOpts' in e
}
const Q = (e, t) => fp(e, t, Cr)
function jw(e, t, s = Tt) {
  const n = ss(),
    i = Pe(t),
    r = ts(t),
    o = yp((l, h) => {
      let c
      return (
        Op(() => {
          const u = e[t]
          Ge(c, u) && ((c = u), h())
        }),
        {
          get() {
            return l(), s.get ? s.get(c) : c
          },
          set(u) {
            const d = n.vnode.props
            !(
              d &&
              (t in d || i in d || r in d) &&
              (`onUpdate:${t}` in d ||
                `onUpdate:${i}` in d ||
                `onUpdate:${r}` in d)
            ) &&
              Ge(u, c) &&
              ((c = u), h()),
              n.emit(`update:${t}`, s.set ? s.set(u) : u)
          },
        }
      )
    }),
    a = t === 'modelValue' ? 'modelModifiers' : `${t}Modifiers`
  return (
    (o[Symbol.iterator] = () => {
      let l = 0
      return {
        next() {
          return l < 2
            ? { value: l++ ? e[a] || {} : o, done: !1 }
            : { done: !0 }
        },
      }
    }),
    o
  )
}
function _s(e, t, s) {
  const n = arguments.length
  return n === 2
    ? bt(t) && !Z(t)
      ? Gs(t)
        ? ct(e, null, [t])
        : ct(e, t)
      : ct(e, null, t)
    : (n > 3
        ? (s = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Gs(s) && (s = [s]),
      ct(e, t, s))
}
const Rm = '3.4.18',
  km = se
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Lm = 'http://www.w3.org/2000/svg',
  Bm = 'http://www.w3.org/1998/Math/MathML',
  fs = typeof document < 'u' ? document : null,
  Ol = fs && fs.createElement('template'),
  Om = {
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
          ? fs.createElementNS(Lm, e)
          : t === 'mathml'
          ? fs.createElementNS(Bm, e)
          : fs.createElement(e, s ? { is: s } : void 0)
      return (
        e === 'select' &&
          n &&
          n.multiple != null &&
          i.setAttribute('multiple', n.multiple),
        i
      )
    },
    createText: (e) => fs.createTextNode(e),
    createComment: (e) => fs.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => fs.querySelector(e),
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
        Ol.innerHTML =
          n === 'svg'
            ? `<svg>${e}</svg>`
            : n === 'mathml'
            ? `<math>${e}</math>`
            : e
        const a = Ol.content
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
  os = 'transition',
  Fn = 'animation',
  ui = Symbol('_vtc'),
  wi = (e, { slots: t }) => _s(Dp, Fm(e), t)
wi.displayName = 'Transition'
const Mu = {
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
wi.props = Ft({}, ou, Mu)
const Ms = (e, t = []) => {
    Z(e) ? e.forEach((s) => s(...t)) : e && e(...t)
  },
  Fl = (e) => (e ? (Z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Fm(e) {
  const t = {}
  for (const V in e) V in Mu || (t[V] = e[V])
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
    p = $m(i),
    g = p && p[0],
    m = p && p[1],
    {
      onBeforeEnter: x,
      onEnter: y,
      onEnterCancelled: v,
      onLeave: w,
      onLeaveCancelled: M,
      onBeforeAppear: k = x,
      onAppear: E = y,
      onAppearCancelled: C = v,
    } = t,
    S = (V, D, G) => {
      Is(V, D ? c : a), Is(V, D ? h : o), G && G()
    },
    P = (V, D) => {
      ;(V._isLeaving = !1), Is(V, u), Is(V, f), Is(V, d), D && D()
    },
    Y = (V) => (D, G) => {
      const ut = V ? E : y,
        X = () => S(D, V, G)
      Ms(ut, [D, X]),
        $l(() => {
          Is(D, V ? l : r), as(D, V ? c : a), Fl(ut) || Nl(D, n, g, X)
        })
    }
  return Ft(t, {
    onBeforeEnter(V) {
      Ms(x, [V]), as(V, r), as(V, o)
    },
    onBeforeAppear(V) {
      Ms(k, [V]), as(V, l), as(V, h)
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(V, D) {
      V._isLeaving = !0
      const G = () => P(V, D)
      as(V, u),
        zm(),
        as(V, d),
        $l(() => {
          V._isLeaving && (Is(V, u), as(V, f), Fl(w) || Nl(V, n, m, G))
        }),
        Ms(w, [V, G])
    },
    onEnterCancelled(V) {
      S(V, !1), Ms(v, [V])
    },
    onAppearCancelled(V) {
      S(V, !0), Ms(C, [V])
    },
    onLeaveCancelled(V) {
      P(V), Ms(M, [V])
    },
  })
}
function $m(e) {
  if (e == null) return null
  if (bt(e)) return [Wr(e.enter), Wr(e.leave)]
  {
    const t = Wr(e)
    return [t, t]
  }
}
function Wr(e) {
  return Df(e)
}
function as(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)),
    (e[ui] || (e[ui] = new Set())).add(t)
}
function Is(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n))
  const s = e[ui]
  s && (s.delete(t), s.size || (e[ui] = void 0))
}
function $l(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Nm = 0
function Nl(e, t, s, n) {
  const i = (e._endId = ++Nm),
    r = () => {
      i === e._endId && n()
    }
  if (s) return setTimeout(r, s)
  const { type: o, timeout: a, propCount: l } = Dm(e, t)
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
function Dm(e, t) {
  const s = window.getComputedStyle(e),
    n = (p) => (s[p] || '').split(', '),
    i = n(`${os}Delay`),
    r = n(`${os}Duration`),
    o = Dl(i, r),
    a = n(`${Fn}Delay`),
    l = n(`${Fn}Duration`),
    h = Dl(a, l)
  let c = null,
    u = 0,
    d = 0
  t === os
    ? o > 0 && ((c = os), (u = o), (d = r.length))
    : t === Fn
    ? h > 0 && ((c = Fn), (u = h), (d = l.length))
    : ((u = Math.max(o, h)),
      (c = u > 0 ? (o > h ? os : Fn) : null),
      (d = c ? (c === os ? r.length : l.length) : 0))
  const f =
    c === os && /\b(transform|all)(,|$)/.test(n(`${os}Property`).toString())
  return { type: c, timeout: u, propCount: d, hasTransform: f }
}
function Dl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((s, n) => zl(s) + zl(e[n])))
}
function zl(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function zm() {
  return document.body.offsetHeight
}
function Vm(e, t, s) {
  const n = e[ui]
  n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : s
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const di = Symbol('_vod'),
  xn = {
    beforeMount(e, { value: t }, { transition: s }) {
      ;(e[di] = e.style.display === 'none' ? '' : e.style.display),
        s && t ? s.beforeEnter(e) : $n(e, t)
    },
    mounted(e, { value: t }, { transition: s }) {
      s && t && s.enter(e)
    },
    updated(e, { value: t, oldValue: s }, { transition: n }) {
      ;(!t == !s && e.style.display === e[di]) ||
        (n
          ? t
            ? (n.beforeEnter(e), $n(e, !0), n.enter(e))
            : n.leave(e, () => {
                $n(e, !1)
              })
          : $n(e, t))
    },
    beforeUnmount(e, { value: t }) {
      $n(e, t)
    },
  }
function $n(e, t) {
  e.style.display = t ? e[di] : 'none'
}
const Um = Symbol(''),
  Hm = /(^|;)\s*display\s*:/
function Gm(e, t, s) {
  const n = e.style,
    i = At(s),
    r = n.display
  let o = !1
  if (s && !i) {
    if (t && !At(t)) for (const a in t) s[a] == null && ko(n, a, '')
    for (const a in s) a === 'display' && (o = !0), ko(n, a, s[a])
  } else if (i) {
    if (t !== s) {
      const a = n[Um]
      a && (s += ';' + a), (n.cssText = s), (o = Hm.test(s))
    }
  } else t && e.removeAttribute('style')
  di in e && ((e[di] = o ? n.display : ''), (n.display = r))
}
const Vl = /\s*!important$/
function ko(e, t, s) {
  if (Z(s)) s.forEach((n) => ko(e, t, n))
  else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s)
  else {
    const n = Wm(e, t)
    Vl.test(s)
      ? e.setProperty(ts(n), s.replace(Vl, ''), 'important')
      : (e[n] = s)
  }
}
const Ul = ['Webkit', 'Moz', 'ms'],
  jr = {}
function Wm(e, t) {
  const s = jr[t]
  if (s) return s
  let n = Pe(t)
  if (n !== 'filter' && n in e) return (jr[t] = n)
  n = pr(n)
  for (let i = 0; i < Ul.length; i++) {
    const r = Ul[i] + n
    if (r in e) return (jr[t] = r)
  }
  return t
}
const Hl = 'http://www.w3.org/1999/xlink'
function jm(e, t, s, n, i) {
  if (n && t.startsWith('xlink:'))
    s == null
      ? e.removeAttributeNS(Hl, t.slice(6, t.length))
      : e.setAttributeNS(Hl, t, s)
  else {
    const r = Wf(t)
    s == null || (r && !Eh(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? '' : s)
  }
}
function Ym(e, t, s, n, i, r, o) {
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
      ? (s = Eh(s))
      : s == null && h === 'string'
      ? ((s = ''), (l = !0))
      : h === 'number' && ((s = 0), (l = !0))
  }
  try {
    e[t] = s
  } catch {}
  l && e.removeAttribute(t)
}
function en(e, t, s, n) {
  e.addEventListener(t, s, n)
}
function Xm(e, t, s, n) {
  e.removeEventListener(t, s, n)
}
const Gl = Symbol('_vei')
function Km(e, t, s, n, i = null) {
  const r = e[Gl] || (e[Gl] = {}),
    o = r[t]
  if (n && o) o.value = n
  else {
    const [a, l] = qm(t)
    if (n) {
      const h = (r[t] = Jm(n, i))
      en(e, a, h, l)
    } else o && (Xm(e, a, o, l), (r[t] = void 0))
  }
}
const Wl = /(?:Once|Passive|Capture)$/
function qm(e) {
  let t
  if (Wl.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Wl)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : ts(e.slice(2)), t]
}
let Yr = 0
const Zm = Promise.resolve(),
  Qm = () => Yr || (Zm.then(() => (Yr = 0)), (Yr = Date.now()))
function Jm(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= s.attached) return
    Se(tg(n, s.value), t, 5, [n])
  }
  return (s.value = e), (s.attached = Qm()), s
}
function tg(e, t) {
  if (Z(t)) {
    const s = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0)
      }),
      t.map((n) => (i) => !i._stopped && n && n(i))
    )
  } else return t
}
const jl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  eg = (e, t, s, n, i, r, o, a, l) => {
    const h = i === 'svg'
    t === 'class'
      ? Vm(e, n, h)
      : t === 'style'
      ? Gm(e, s, n)
      : dr(t)
      ? la(t) || Km(e, t, s, n, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : sg(e, t, n, h)
        )
      ? Ym(e, t, n, r, o, a, l)
      : (t === 'true-value'
          ? (e._trueValue = n)
          : t === 'false-value' && (e._falseValue = n),
        jm(e, t, n, h))
  }
function sg(e, t, s, n) {
  if (n)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && jl(t) && it(s))
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
  return jl(t) && At(s) ? !1 : t in e
}
const Yl = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return Z(t) ? (s) => cn(t, s) : t
}
function ng(e) {
  e.target.composing = !0
}
function Xl(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Xr = Symbol('_assign'),
  Yw = {
    created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
      e[Xr] = Yl(i)
      const r = n || (i.props && i.props.type === 'number')
      en(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return
        let a = e.value
        s && (a = a.trim()), r && (a = yo(a)), e[Xr](a)
      }),
        s &&
          en(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (en(e, 'compositionstart', ng),
          en(e, 'compositionend', Xl),
          en(e, 'change', Xl))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: s, trim: n, number: i } },
      r,
    ) {
      if (((e[Xr] = Yl(r)), e.composing)) return
      const o = i || e.type === 'number' ? yo(e.value) : e.value,
        a = t ?? ''
      o !== a &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (s || (n && e.value.trim() === a))) ||
          (e.value = a))
    },
  },
  ig = ['ctrl', 'shift', 'alt', 'meta'],
  rg = {
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
    exact: (e, t) => ig.some((s) => e[`${s}Key`] && !t.includes(s)),
  },
  og = (e, t) => {
    const s = e._withMods || (e._withMods = {}),
      n = t.join('.')
    return (
      s[n] ||
      (s[n] = (i, ...r) => {
        for (let o = 0; o < t.length; o++) {
          const a = rg[t[o]]
          if (a && a(i, t)) return
        }
        return e(i, ...r)
      })
    )
  },
  ag = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Xw = (e, t) => {
    const s = e._withKeys || (e._withKeys = {}),
      n = t.join('.')
    return (
      s[n] ||
      (s[n] = (i) => {
        if (!('key' in i)) return
        const r = ts(i.key)
        if (t.some((o) => o === r || ag[o] === r)) return e(i)
      })
    )
  },
  lg = Ft({ patchProp: eg }, Om)
let Kl
function Iu() {
  return Kl || (Kl = pm(lg))
}
const ql = (...e) => {
    Iu().render(...e)
  },
  Ru = (...e) => {
    const t = Iu().createApp(...e),
      { mount: s } = t
    return (
      (t.mount = (n) => {
        const i = hg(n)
        if (!i) return
        const r = t._component
        !it(r) && !r.render && !r.template && (r.template = i.innerHTML),
          (i.innerHTML = '')
        const o = s(i, !1, cg(i))
        return (
          i instanceof Element &&
            (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  }
function cg(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function hg(e) {
  return At(e) ? document.querySelector(e) : e
}
var ug = !1,
  Zl
const qs = typeof window < 'u',
  dg = (e) => typeof e == 'string',
  ku = () => {},
  fg =
    qs &&
    ((Zl = window == null ? void 0 : window.navigator) == null
      ? void 0
      : Zl.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent)
function ka(e) {
  return typeof e == 'function' ? e() : F(e)
}
function pg(e) {
  return e
}
function La(e) {
  return da() ? (Ih(e), !0) : !1
}
function mg(e, t = !0) {
  ss() ? Te(e) : t ? e() : Ks(e)
}
function gg(e, t, s = {}) {
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
      }, ka(t)))
  }
  return (
    n && ((i.value = !0), qs && l()),
    La(a),
    { isPending: xa(i), start: l, stop: a }
  )
}
function rn(e) {
  var t
  const s = ka(e)
  return (t = s == null ? void 0 : s.$el) != null ? t : s
}
const Ba = qs ? window : void 0
function Xi(...e) {
  let t, s, n, i
  if (
    (dg(e[0]) || Array.isArray(e[0])
      ? (([s, n, i] = e), (t = Ba))
      : ([t, s, n, i] = e),
    !t)
  )
    return ku
  Array.isArray(s) || (s = [s]), Array.isArray(n) || (n = [n])
  const r = [],
    o = () => {
      r.forEach((c) => c()), (r.length = 0)
    },
    a = (c, u, d, f) => (
      c.addEventListener(u, d, f), () => c.removeEventListener(u, d, f)
    ),
    l = Zt(
      () => [rn(t), ka(i)],
      ([c, u]) => {
        o(), c && r.push(...s.flatMap((d) => n.map((f) => a(c, d, f, u))))
      },
      { immediate: !0, flush: 'post' },
    ),
    h = () => {
      l(), o()
    }
  return La(h), h
}
let Ql = !1
function Kw(e, t, s = {}) {
  const {
    window: n = Ba,
    ignore: i = [],
    capture: r = !0,
    detectIframe: o = !1,
  } = s
  if (!n) return
  fg &&
    !Ql &&
    ((Ql = !0),
    Array.from(n.document.body.children).forEach((d) =>
      d.addEventListener('click', ku),
    ))
  let a = !0
  const l = (d) =>
      i.some((f) => {
        if (typeof f == 'string')
          return Array.from(n.document.querySelectorAll(f)).some(
            (p) => p === d.target || d.composedPath().includes(p),
          )
        {
          const p = rn(f)
          return p && (d.target === p || d.composedPath().includes(p))
        }
      }),
    c = [
      Xi(
        n,
        'click',
        (d) => {
          const f = rn(e)
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
      Xi(
        n,
        'pointerdown',
        (d) => {
          const f = rn(e)
          f && (a = !d.composedPath().includes(f) && !l(d))
        },
        { passive: !0 },
      ),
      o &&
        Xi(n, 'blur', (d) => {
          var f
          const p = rn(e)
          ;((f = n.document.activeElement) == null ? void 0 : f.tagName) ===
            'IFRAME' &&
            !(p != null && p.contains(n.document.activeElement)) &&
            t(d)
        }),
    ].filter(Boolean)
  return () => c.forEach((d) => d())
}
function _g(e, t = !1) {
  const s = ht(),
    n = () => (s.value = !!e())
  return n(), mg(n, t), s
}
const Jl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  tc = '__vueuse_ssr_handlers__'
Jl[tc] = Jl[tc] || {}
var ec = Object.getOwnPropertySymbols,
  yg = Object.prototype.hasOwnProperty,
  xg = Object.prototype.propertyIsEnumerable,
  bg = (e, t) => {
    var s = {}
    for (var n in e) yg.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n])
    if (e != null && ec)
      for (var n of ec(e)) t.indexOf(n) < 0 && xg.call(e, n) && (s[n] = e[n])
    return s
  }
function vg(e, t, s = {}) {
  const n = s,
    { window: i = Ba } = n,
    r = bg(n, ['window'])
  let o
  const a = _g(() => i && 'ResizeObserver' in i),
    l = () => {
      o && (o.disconnect(), (o = void 0))
    },
    h = Zt(
      () => rn(e),
      (u) => {
        l(), a.value && i && u && ((o = new ResizeObserver(t)), o.observe(u, r))
      },
      { immediate: !0, flush: 'post' },
    ),
    c = () => {
      l(), h()
    }
  return La(c), { isSupported: a, stop: c }
}
var sc
;(function (e) {
  ;(e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE')
})(sc || (sc = {}))
var wg = Object.defineProperty,
  nc = Object.getOwnPropertySymbols,
  Ag = Object.prototype.hasOwnProperty,
  Sg = Object.prototype.propertyIsEnumerable,
  ic = (e, t, s) =>
    t in e
      ? wg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Cg = (e, t) => {
    for (var s in t || (t = {})) Ag.call(t, s) && ic(e, s, t[s])
    if (nc) for (var s of nc(t)) Sg.call(t, s) && ic(e, s, t[s])
    return e
  }
const Eg = {
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
Cg({ linear: pg }, Eg)
var Pg =
  typeof global == 'object' && global && global.Object === Object && global
const Tg = Pg
var Mg = typeof self == 'object' && self && self.Object === Object && self,
  Ig = Tg || Mg || Function('return this')()
const Oa = Ig
var Rg = Oa.Symbol
const bn = Rg
var Lu = Object.prototype,
  kg = Lu.hasOwnProperty,
  Lg = Lu.toString,
  Nn = bn ? bn.toStringTag : void 0
function Bg(e) {
  var t = kg.call(e, Nn),
    s = e[Nn]
  try {
    e[Nn] = void 0
    var n = !0
  } catch {}
  var i = Lg.call(e)
  return n && (t ? (e[Nn] = s) : delete e[Nn]), i
}
var Og = Object.prototype,
  Fg = Og.toString
function $g(e) {
  return Fg.call(e)
}
var Ng = '[object Null]',
  Dg = '[object Undefined]',
  rc = bn ? bn.toStringTag : void 0
function Bu(e) {
  return e == null
    ? e === void 0
      ? Dg
      : Ng
    : rc && rc in Object(e)
    ? Bg(e)
    : $g(e)
}
function zg(e) {
  return e != null && typeof e == 'object'
}
var Vg = '[object Symbol]'
function Fa(e) {
  return typeof e == 'symbol' || (zg(e) && Bu(e) == Vg)
}
function Ug(e, t) {
  for (var s = -1, n = e == null ? 0 : e.length, i = Array(n); ++s < n; )
    i[s] = t(e[s], s, e)
  return i
}
var Hg = Array.isArray
const $a = Hg
var Gg = 1 / 0,
  oc = bn ? bn.prototype : void 0,
  ac = oc ? oc.toString : void 0
function Ou(e) {
  if (typeof e == 'string') return e
  if ($a(e)) return Ug(e, Ou) + ''
  if (Fa(e)) return ac ? ac.call(e) : ''
  var t = e + ''
  return t == '0' && 1 / e == -Gg ? '-0' : t
}
function Fu(e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var Wg = '[object AsyncFunction]',
  jg = '[object Function]',
  Yg = '[object GeneratorFunction]',
  Xg = '[object Proxy]'
function Kg(e) {
  if (!Fu(e)) return !1
  var t = Bu(e)
  return t == jg || t == Yg || t == Wg || t == Xg
}
var qg = Oa['__core-js_shared__']
const Kr = qg
var lc = (function () {
  var e = /[^.]+$/.exec((Kr && Kr.keys && Kr.keys.IE_PROTO) || '')
  return e ? 'Symbol(src)_1.' + e : ''
})()
function Zg(e) {
  return !!lc && lc in e
}
var Qg = Function.prototype,
  Jg = Qg.toString
function t0(e) {
  if (e != null) {
    try {
      return Jg.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var e0 = /[\\^$.*+?()[\]{}|]/g,
  s0 = /^\[object .+?Constructor\]$/,
  n0 = Function.prototype,
  i0 = Object.prototype,
  r0 = n0.toString,
  o0 = i0.hasOwnProperty,
  a0 = RegExp(
    '^' +
      r0
        .call(o0)
        .replace(e0, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  )
function l0(e) {
  if (!Fu(e) || Zg(e)) return !1
  var t = Kg(e) ? a0 : s0
  return t.test(t0(e))
}
function c0(e, t) {
  return e == null ? void 0 : e[t]
}
function $u(e, t) {
  var s = c0(e, t)
  return l0(s) ? s : void 0
}
function h0(e, t) {
  return e === t || (e !== e && t !== t)
}
var u0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  d0 = /^\w*$/
function f0(e, t) {
  if ($a(e)) return !1
  var s = typeof e
  return s == 'number' || s == 'symbol' || s == 'boolean' || e == null || Fa(e)
    ? !0
    : d0.test(e) || !u0.test(e) || (t != null && e in Object(t))
}
var p0 = $u(Object, 'create')
const fi = p0
function m0() {
  ;(this.__data__ = fi ? fi(null) : {}), (this.size = 0)
}
function g0(e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var _0 = '__lodash_hash_undefined__',
  y0 = Object.prototype,
  x0 = y0.hasOwnProperty
function b0(e) {
  var t = this.__data__
  if (fi) {
    var s = t[e]
    return s === _0 ? void 0 : s
  }
  return x0.call(t, e) ? t[e] : void 0
}
var v0 = Object.prototype,
  w0 = v0.hasOwnProperty
function A0(e) {
  var t = this.__data__
  return fi ? t[e] !== void 0 : w0.call(t, e)
}
var S0 = '__lodash_hash_undefined__'
function C0(e, t) {
  var s = this.__data__
  return (
    (this.size += this.has(e) ? 0 : 1),
    (s[e] = fi && t === void 0 ? S0 : t),
    this
  )
}
function Ws(e) {
  var t = -1,
    s = e == null ? 0 : e.length
  for (this.clear(); ++t < s; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Ws.prototype.clear = m0
Ws.prototype.delete = g0
Ws.prototype.get = b0
Ws.prototype.has = A0
Ws.prototype.set = C0
function E0() {
  ;(this.__data__ = []), (this.size = 0)
}
function Pr(e, t) {
  for (var s = e.length; s--; ) if (h0(e[s][0], t)) return s
  return -1
}
var P0 = Array.prototype,
  T0 = P0.splice
function M0(e) {
  var t = this.__data__,
    s = Pr(t, e)
  if (s < 0) return !1
  var n = t.length - 1
  return s == n ? t.pop() : T0.call(t, s, 1), --this.size, !0
}
function I0(e) {
  var t = this.__data__,
    s = Pr(t, e)
  return s < 0 ? void 0 : t[s][1]
}
function R0(e) {
  return Pr(this.__data__, e) > -1
}
function k0(e, t) {
  var s = this.__data__,
    n = Pr(s, e)
  return n < 0 ? (++this.size, s.push([e, t])) : (s[n][1] = t), this
}
function Mn(e) {
  var t = -1,
    s = e == null ? 0 : e.length
  for (this.clear(); ++t < s; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Mn.prototype.clear = E0
Mn.prototype.delete = M0
Mn.prototype.get = I0
Mn.prototype.has = R0
Mn.prototype.set = k0
var L0 = $u(Oa, 'Map')
const B0 = L0
function O0() {
  ;(this.size = 0),
    (this.__data__ = {
      hash: new Ws(),
      map: new (B0 || Mn)(),
      string: new Ws(),
    })
}
function F0(e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null
}
function Tr(e, t) {
  var s = e.__data__
  return F0(t) ? s[typeof t == 'string' ? 'string' : 'hash'] : s.map
}
function $0(e) {
  var t = Tr(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
function N0(e) {
  return Tr(this, e).get(e)
}
function D0(e) {
  return Tr(this, e).has(e)
}
function z0(e, t) {
  var s = Tr(this, e),
    n = s.size
  return s.set(e, t), (this.size += s.size == n ? 0 : 1), this
}
function Zs(e) {
  var t = -1,
    s = e == null ? 0 : e.length
  for (this.clear(); ++t < s; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Zs.prototype.clear = O0
Zs.prototype.delete = $0
Zs.prototype.get = N0
Zs.prototype.has = D0
Zs.prototype.set = z0
var V0 = 'Expected a function'
function Na(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(V0)
  var s = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      r = s.cache
    if (r.has(i)) return r.get(i)
    var o = e.apply(this, n)
    return (s.cache = r.set(i, o) || r), o
  }
  return (s.cache = new (Na.Cache || Zs)()), s
}
Na.Cache = Zs
var U0 = 500
function H0(e) {
  var t = Na(e, function (n) {
      return s.size === U0 && s.clear(), n
    }),
    s = t.cache
  return t
}
var G0 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  W0 = /\\(\\)?/g,
  j0 = H0(function (e) {
    var t = []
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(G0, function (s, n, i, r) {
        t.push(i ? r.replace(W0, '$1') : n || s)
      }),
      t
    )
  })
const Y0 = j0
function X0(e) {
  return e == null ? '' : Ou(e)
}
function K0(e, t) {
  return $a(e) ? e : f0(e, t) ? [e] : Y0(X0(e))
}
var q0 = 1 / 0
function Z0(e) {
  if (typeof e == 'string' || Fa(e)) return e
  var t = e + ''
  return t == '0' && 1 / e == -q0 ? '-0' : t
}
function Q0(e, t) {
  t = K0(t, e)
  for (var s = 0, n = t.length; e != null && s < n; ) e = e[Z0(t[s++])]
  return s && s == n ? e : void 0
}
function J0(e, t, s) {
  var n = e == null ? void 0 : Q0(e, t)
  return n === void 0 ? s : n
}
function t_(e) {
  for (var t = -1, s = e == null ? 0 : e.length, n = {}; ++t < s; ) {
    var i = e[t]
    n[i[0]] = i[1]
  }
  return n
}
const e_ = (e) => e === void 0,
  qw = (e) => typeof e == 'boolean',
  pi = (e) => typeof e == 'number',
  s_ = (e) => (typeof Element > 'u' ? !1 : e instanceof Element),
  n_ = (e) => (At(e) ? !Number.isNaN(Number(e)) : !1),
  cc = (e) => Object.keys(e),
  Nu = (e = '') => e.split(' ').filter((t) => !!t.trim()),
  Zw = (e, t) => {
    if (!e || !t) return !1
    if (t.includes(' ')) throw new Error('className should not contain space.')
    return e.classList.contains(t)
  },
  hc = (e, t) => {
    !e || !t.trim() || e.classList.add(...Nu(t))
  },
  rr = (e, t) => {
    !e || !t.trim() || e.classList.remove(...Nu(t))
  },
  Dn = (e, t) => {
    var s
    if (!qs || !e || !t) return ''
    let n = Pe(t)
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
function i_(e, t = 'px') {
  if (!e) return ''
  if (pi(e) || n_(e)) return `${e}${t}`
  if (At(e)) return e
}
/*! Element Plus Icons Vue v2.3.1 */ var r_ = st({
    name: 'ArrowDown',
    __name: 'arrow-down',
    setup(e) {
      return (t, s) => (
        tt(),
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
  Qw = r_,
  o_ = st({
    name: 'ArrowUp',
    __name: 'arrow-up',
    setup(e) {
      return (t, s) => (
        tt(),
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
  Jw = o_,
  a_ = st({
    name: 'CircleCheck',
    __name: 'circle-check',
    setup(e) {
      return (t, s) => (
        tt(),
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
  l_ = a_,
  c_ = st({
    name: 'CircleCloseFilled',
    __name: 'circle-close-filled',
    setup(e) {
      return (t, s) => (
        tt(),
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
  Du = c_,
  h_ = st({
    name: 'CircleClose',
    __name: 'circle-close',
    setup(e) {
      return (t, s) => (
        tt(),
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
  u_ = h_,
  d_ = st({
    name: 'Close',
    __name: 'close',
    setup(e) {
      return (t, s) => (
        tt(),
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
  zu = d_,
  f_ = st({
    name: 'Hide',
    __name: 'hide',
    setup(e) {
      return (t, s) => (
        tt(),
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
  t6 = f_,
  p_ = st({
    name: 'InfoFilled',
    __name: 'info-filled',
    setup(e) {
      return (t, s) => (
        tt(),
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
  Vu = p_,
  m_ = st({
    name: 'Loading',
    __name: 'loading',
    setup(e) {
      return (t, s) => (
        tt(),
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
  g_ = m_,
  __ = st({
    name: 'Minus',
    __name: 'minus',
    setup(e) {
      return (t, s) => (
        tt(),
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
  e6 = __,
  y_ = st({
    name: 'Plus',
    __name: 'plus',
    setup(e) {
      return (t, s) => (
        tt(),
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
  s6 = y_,
  x_ = st({
    name: 'SuccessFilled',
    __name: 'success-filled',
    setup(e) {
      return (t, s) => (
        tt(),
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
  Uu = x_,
  b_ = st({
    name: 'View',
    __name: 'view',
    setup(e) {
      return (t, s) => (
        tt(),
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
  n6 = b_,
  v_ = st({
    name: 'WarningFilled',
    __name: 'warning-filled',
    setup(e) {
      return (t, s) => (
        tt(),
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
  Hu = v_
const Gu = '__epPropKey',
  or = (e) => e,
  w_ = (e) => bt(e) && !!e[Gu],
  Wu = (e, t) => {
    if (!bt(e) || w_(e)) return e
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
                  km(
                    `Invalid prop: validation failed${
                      t ? ` for prop "${t}"` : ''
                    }. Expected one of [${d}], got value ${JSON.stringify(h)}.`,
                  )
                }
                return c
              }
            : void 0,
        [Gu]: !0,
      }
    return mt(e, 'default') && (l.default = i), l
  },
  Da = (e) => t_(Object.entries(e).map(([t, s]) => [t, Wu(s, t)])),
  A_ = or([String, Object, Function]),
  i6 = { Close: zu },
  S_ = {
    Close: zu,
    SuccessFilled: Uu,
    InfoFilled: Vu,
    WarningFilled: Hu,
    CircleCloseFilled: Du,
  },
  uc = { success: Uu, warning: Hu, error: Du, info: Vu },
  r6 = { validating: g_, success: l_, error: u_ },
  za = (e, t) => {
    if (
      ((e.install = (s) => {
        for (const n of [e, ...Object.values(t ?? {})]) s.component(n.name, n)
      }),
      t)
    )
      for (const [s, n] of Object.entries(t)) e[s] = n
    return e
  },
  C_ = (e, t) => (
    (e.install = (s) => {
      ;(e._context = s._context), (s.config.globalProperties[t] = e)
    }),
    e
  ),
  Mr = (e) => ((e.install = se), e),
  E_ = {
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
  P_ = ['', 'default', 'small', 'large'],
  T_ = (e) => e
var M_ = {
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
const I_ = (e) => (t, s) => R_(t, s, F(e)),
  R_ = (e, t, s) =>
    J0(s, e, e).replace(/\{(\w+)\}/g, (n, i) => {
      var r
      return `${(r = t == null ? void 0 : t[i]) != null ? r : `{${i}}`}`
    }),
  k_ = (e) => {
    const t = Q(() => F(e).name),
      s = It(e) ? e : ht(e)
    return { lang: t, locale: s, t: I_(e) }
  },
  ju = Symbol('localeContextKey'),
  L_ = (e) => {
    const t = e || Vt(ju, ht())
    return k_(Q(() => t.value || M_))
  },
  Ki = 'el',
  B_ = 'is-',
  Rs = (e, t, s, n, i) => {
    let r = `${e}-${t}`
    return s && (r += `-${s}`), n && (r += `__${n}`), i && (r += `--${i}`), r
  },
  Yu = Symbol('namespaceContextKey'),
  O_ = (e) => {
    const t = e || (ss() ? Vt(Yu, ht(Ki)) : ht(Ki))
    return Q(() => F(t) || Ki)
  },
  Ss = (e, t) => {
    const s = O_(t)
    return {
      namespace: s,
      b: (g = '') => Rs(s.value, e, g, '', ''),
      e: (g) => (g ? Rs(s.value, e, '', g, '') : ''),
      m: (g) => (g ? Rs(s.value, e, '', '', g) : ''),
      be: (g, m) => (g && m ? Rs(s.value, e, g, m, '') : ''),
      em: (g, m) => (g && m ? Rs(s.value, e, '', g, m) : ''),
      bm: (g, m) => (g && m ? Rs(s.value, e, g, '', m) : ''),
      bem: (g, m, x) => (g && m && x ? Rs(s.value, e, g, m, x) : ''),
      is: (g, ...m) => {
        const x = m.length >= 1 ? m[0] : !0
        return g && x ? `${B_}${g}` : ''
      },
      cssVar: (g) => {
        const m = {}
        for (const x in g) g[x] && (m[`--${s.value}-${x}`] = g[x])
        return m
      },
      cssVarName: (g) => `--${s.value}-${g}`,
      cssVarBlock: (g) => {
        const m = {}
        for (const x in g) g[x] && (m[`--${s.value}-${e}-${x}`] = g[x])
        return m
      },
      cssVarBlockName: (g) => `--${s.value}-${e}-${g}`,
    }
  },
  dc = ht(0),
  Xu = 2e3,
  Ku = Symbol('zIndexContextKey'),
  F_ = (e) => {
    const t = e || (ss() ? Vt(Ku, void 0) : void 0),
      s = Q(() => {
        const r = F(t)
        return pi(r) ? r : Xu
      }),
      n = Q(() => s.value + dc.value)
    return {
      initialZIndex: s,
      currentZIndex: n,
      nextZIndex: () => (dc.value++, n.value),
    }
  },
  o6 = Wu({ type: String, values: P_, required: !1 }),
  qu = Symbol('size'),
  a6 = () => {
    const e = Vt(qu, {})
    return Q(() => F(e.size) || '')
  },
  Zu = Symbol(),
  ar = ht()
function Qu(e, t = void 0) {
  const s = ss() ? Vt(Zu, ar) : ar
  return e
    ? Q(() => {
        var n, i
        return (i = (n = s.value) == null ? void 0 : n[e]) != null ? i : t
      })
    : s
}
function Ju(e, t) {
  const s = Qu(),
    n = Ss(
      e,
      Q(() => {
        var a
        return ((a = s.value) == null ? void 0 : a.namespace) || Ki
      }),
    ),
    i = L_(
      Q(() => {
        var a
        return (a = s.value) == null ? void 0 : a.locale
      }),
    ),
    r = F_(
      Q(() => {
        var a
        return ((a = s.value) == null ? void 0 : a.zIndex) || Xu
      }),
    ),
    o = Q(() => {
      var a
      return F(t) || ((a = s.value) == null ? void 0 : a.size) || ''
    })
  return $_(Q(() => F(s) || {})), { ns: n, locale: i, zIndex: r, size: o }
}
const $_ = (e, t, s = !1) => {
    var n
    const i = !!ss(),
      r = i ? Qu() : void 0,
      o = (n = t == null ? void 0 : t.provide) != null ? n : i ? fn : void 0
    if (!o) return
    const a = Q(() => {
      const l = F(e)
      return r != null && r.value ? N_(r.value, l) : l
    })
    return (
      o(Zu, a),
      o(
        ju,
        Q(() => a.value.locale),
      ),
      o(
        Yu,
        Q(() => a.value.namespace),
      ),
      o(
        Ku,
        Q(() => a.value.zIndex),
      ),
      o(qu, { size: Q(() => a.value.size || '') }),
      (s || !ar.value) && (ar.value = a.value),
      a
    )
  },
  N_ = (e, t) => {
    var s
    const n = [...new Set([...cc(e), ...cc(t)])],
      i = {}
    for (const r of n) i[r] = (s = t[r]) != null ? s : e[r]
    return i
  },
  fc = {}
var Cs = (e, t) => {
  const s = e.__vccOpts || e
  for (const [n, i] of t) s[n] = i
  return s
}
const D_ = Da({
    size: { type: or([Number, String]) },
    color: { type: String },
  }),
  z_ = st({ name: 'ElIcon', inheritAttrs: !1 }),
  V_ = st({
    ...z_,
    props: D_,
    setup(e) {
      const t = e,
        s = Ss('icon'),
        n = Q(() => {
          const { size: i, color: r } = t
          return !i && !r
            ? {}
            : { fontSize: e_(i) ? void 0 : i_(i), '--color': r }
        })
      return (i, r) => (
        tt(),
        ft(
          'i',
          Cu({ class: F(s).b(), style: F(n) }, i.$attrs),
          [ye(i.$slots, 'default')],
          16,
        )
      )
    },
  })
var U_ = Cs(V_, [['__file', 'icon.vue']])
const pc = za(U_),
  H_ = Da({
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
  G_ = ['textContent'],
  W_ = st({ name: 'ElBadge' }),
  j_ = st({
    ...W_,
    props: H_,
    setup(e, { expose: t }) {
      const s = e,
        n = Ss('badge'),
        i = Q(() =>
          s.isDot
            ? ''
            : pi(s.value) && pi(s.max)
            ? s.max < s.value
              ? `${s.max}+`
              : `${s.value}`
            : `${s.value}`,
        )
      return (
        t({ content: i }),
        (r, o) => (
          tt(),
          ft(
            'div',
            { class: Bt(F(n).b()) },
            [
              ye(r.$slots, 'default'),
              ct(
                wi,
                {
                  name: `${F(n).namespace.value}-zoom-in-center`,
                  persisted: '',
                },
                {
                  default: Xt(() => [
                    yn(
                      nt(
                        'sup',
                        {
                          class: Bt([
                            F(n).e('content'),
                            F(n).em('content', r.type),
                            F(n).is('fixed', !!r.$slots.default),
                            F(n).is('dot', r.isDot),
                          ]),
                          textContent: gn(F(i)),
                        },
                        null,
                        10,
                        G_,
                      ),
                      [[xn, !r.hidden && (F(i) || r.isDot)]],
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
var Y_ = Cs(j_, [['__file', 'badge.vue']])
const X_ = za(Y_)
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
const K_ = st({ name: 'ElContainer' }),
  q_ = st({
    ...K_,
    props: { direction: { type: String } },
    setup(e) {
      const t = e,
        s = Jp(),
        n = Ss('container'),
        i = Q(() =>
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
        tt(),
        ft(
          'section',
          { class: Bt([F(n).b(), F(n).is('vertical', F(i))]) },
          [ye(r.$slots, 'default')],
          2,
        )
      )
    },
  })
var Z_ = Cs(q_, [['__file', 'container.vue']])
const Q_ = st({ name: 'ElAside' }),
  J_ = st({
    ...Q_,
    props: { width: { type: String, default: null } },
    setup(e) {
      const t = e,
        s = Ss('aside'),
        n = Q(() => (t.width ? s.cssVarBlock({ width: t.width }) : {}))
      return (i, r) => (
        tt(),
        ft(
          'aside',
          { class: Bt(F(s).b()), style: me(F(n)) },
          [ye(i.$slots, 'default')],
          6,
        )
      )
    },
  })
var td = Cs(J_, [['__file', 'aside.vue']])
const ty = st({ name: 'ElFooter' }),
  ey = st({
    ...ty,
    props: { height: { type: String, default: null } },
    setup(e) {
      const t = e,
        s = Ss('footer'),
        n = Q(() => (t.height ? s.cssVarBlock({ height: t.height }) : {}))
      return (i, r) => (
        tt(),
        ft(
          'footer',
          { class: Bt(F(s).b()), style: me(F(n)) },
          [ye(i.$slots, 'default')],
          6,
        )
      )
    },
  })
var ed = Cs(ey, [['__file', 'footer.vue']])
const sy = st({ name: 'ElHeader' }),
  ny = st({
    ...sy,
    props: { height: { type: String, default: null } },
    setup(e) {
      const t = e,
        s = Ss('header'),
        n = Q(() => (t.height ? s.cssVarBlock({ height: t.height }) : {}))
      return (i, r) => (
        tt(),
        ft(
          'header',
          { class: Bt(F(s).b()), style: me(F(n)) },
          [ye(i.$slots, 'default')],
          6,
        )
      )
    },
  })
var sd = Cs(ny, [['__file', 'header.vue']])
const iy = st({ name: 'ElMain' }),
  ry = st({
    ...iy,
    setup(e) {
      const t = Ss('main')
      return (s, n) => (
        tt(), ft('main', { class: Bt(F(t).b()) }, [ye(s.$slots, 'default')], 2)
      )
    },
  })
var nd = Cs(ry, [['__file', 'main.vue']])
const oy = za(Z_, { Aside: td, Footer: ed, Header: sd, Main: nd }),
  ay = Mr(td),
  ly = Mr(ed),
  cy = Mr(sd),
  hy = Mr(nd)
function uy(e) {
  let t
  const s = ht(!1),
    n = Tn({ ...e, originalPosition: '', originalOverflow: '', visible: !1 })
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
          : (rr(d, f.bm('parent', 'relative')),
            d.removeAttribute('loading-number')),
        rr(d, f.bm('parent', 'hidden'))
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
  const c = Ru(
      st({
        name: 'ElLoading',
        setup(d, { expose: f }) {
          const { ns: p, zIndex: g } = Ju('loading')
          return (
            f({ ns: p, zIndex: g }),
            () => {
              const m = n.spinner || n.svg,
                x = _s(
                  'svg',
                  {
                    class: 'circular',
                    viewBox: n.svgViewBox ? n.svgViewBox : '0 0 50 50',
                    ...(m ? { innerHTML: m } : {}),
                  },
                  [
                    _s('circle', {
                      class: 'path',
                      cx: '25',
                      cy: '25',
                      r: '20',
                      fill: 'none',
                    }),
                  ],
                ),
                y = n.text ? _s('p', { class: p.b('text') }, [n.text]) : void 0
              return _s(
                wi,
                { name: p.b('fade'), onAfterLeave: l },
                {
                  default: Xt(() => [
                    yn(
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
                        [_s('div', { class: p.b('spinner') }, [x, y])],
                      ),
                      [[xn, n.visible]],
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
    ...jh(n),
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
let Oi
const Lo = function (e = {}) {
    if (!qs) return
    const t = dy(e)
    if (t.fullscreen && Oi) return Oi
    const s = uy({
      ...t,
      closed: () => {
        var i
        ;(i = t.closed) == null || i.call(t), t.fullscreen && (Oi = void 0)
      },
    })
    fy(t, t.parent, s),
      mc(t, t.parent, s),
      (t.parent.vLoadingAddClassList = () => mc(t, t.parent, s))
    let n = t.parent.getAttribute('loading-number')
    return (
      n ? (n = `${Number.parseInt(n) + 1}`) : (n = '1'),
      t.parent.setAttribute('loading-number', n),
      t.parent.appendChild(s.$el),
      Ks(() => (s.visible.value = t.visible)),
      t.fullscreen && (Oi = s),
      s
    )
  },
  dy = (e) => {
    var t, s, n, i
    let r
    return (
      At(e.target)
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
  fy = async (e, t, s) => {
    const { nextZIndex: n } = s.vm.zIndex || s.vm._.exposed.zIndex,
      i = {}
    if (e.fullscreen)
      (s.originalPosition.value = Dn(document.body, 'position')),
        (s.originalOverflow.value = Dn(document.body, 'overflow')),
        (i.zIndex = n())
    else if (e.parent === document.body) {
      ;(s.originalPosition.value = Dn(document.body, 'position')), await Ks()
      for (const r of ['top', 'left']) {
        const o = r === 'top' ? 'scrollTop' : 'scrollLeft'
        i[r] = `${
          e.target.getBoundingClientRect()[r] +
          document.body[o] +
          document.documentElement[o] -
          Number.parseInt(Dn(document.body, `margin-${r}`), 10)
        }px`
      }
      for (const r of ['height', 'width'])
        i[r] = `${e.target.getBoundingClientRect()[r]}px`
    } else s.originalPosition.value = Dn(t, 'position')
    for (const [r, o] of Object.entries(i)) s.$el.style[r] = o
  },
  mc = (e, t, s) => {
    const n = s.vm.ns || s.vm._.exposed.ns
    ;['absolute', 'fixed', 'sticky'].includes(s.originalPosition.value)
      ? rr(t, n.bm('parent', 'relative'))
      : hc(t, n.bm('parent', 'relative')),
      e.fullscreen && e.lock
        ? hc(t, n.bm('parent', 'hidden'))
        : rr(t, n.bm('parent', 'hidden'))
  },
  Bo = Symbol('ElLoading'),
  gc = (e, t) => {
    var s, n, i, r
    const o = t.instance,
      a = (d) => (bt(t.value) ? t.value[d] : void 0),
      l = (d) => {
        const f = (At(d) && (o == null ? void 0 : o[d])) || d
        return f && ht(f)
      },
      h = (d) => l(a(d) || e.getAttribute(`element-loading-${ts(d)}`)),
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
    e[Bo] = { options: u, instance: Lo(u) }
  },
  py = (e, t) => {
    for (const s of Object.keys(t)) It(t[s]) && (t[s].value = e[s])
  },
  _c = {
    mounted(e, t) {
      t.value && gc(e, t)
    },
    updated(e, t) {
      const s = e[Bo]
      t.oldValue !== t.value &&
        (t.value && !t.oldValue
          ? gc(e, t)
          : t.value && t.oldValue
          ? bt(t.value) && py(t.value, s.options)
          : s == null || s.instance.close())
    },
    unmounted(e) {
      var t
      ;(t = e[Bo]) == null || t.instance.close()
    },
  },
  my = {
    install(e) {
      e.directive('loading', _c), (e.config.globalProperties.$loading = Lo)
    },
    directive: _c,
    service: Lo,
  },
  id = ['success', 'info', 'warning', 'error'],
  ie = T_({
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
    appendTo: qs ? document.body : void 0,
  }),
  gy = Da({
    customClass: { type: String, default: ie.customClass },
    center: { type: Boolean, default: ie.center },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: ie.dangerouslyUseHTMLString,
    },
    duration: { type: Number, default: ie.duration },
    icon: { type: A_, default: ie.icon },
    id: { type: String, default: ie.id },
    message: { type: or([String, Object, Function]), default: ie.message },
    onClose: { type: or(Function), required: !1 },
    showClose: { type: Boolean, default: ie.showClose },
    type: { type: String, values: id, default: ie.type },
    offset: { type: Number, default: ie.offset },
    zIndex: { type: Number, default: ie.zIndex },
    grouping: { type: Boolean, default: ie.grouping },
    repeatNum: { type: Number, default: ie.repeatNum },
  }),
  _y = { destroy: () => !0 },
  Be = ya([]),
  yy = (e) => {
    const t = Be.findIndex((i) => i.id === e),
      s = Be[t]
    let n
    return t > 0 && (n = Be[t - 1]), { current: s, prev: n }
  },
  xy = (e) => {
    const { prev: t } = yy(e)
    return t ? t.vm.exposed.bottom.value : 0
  },
  by = (e, t) => (Be.findIndex((n) => n.id === e) > 0 ? 20 : t),
  vy = ['id'],
  wy = ['innerHTML'],
  Ay = st({ name: 'ElMessage' }),
  Sy = st({
    ...Ay,
    props: gy,
    emits: _y,
    setup(e, { expose: t }) {
      const s = e,
        { Close: n } = S_,
        { ns: i, zIndex: r } = Ju('message'),
        { currentZIndex: o, nextZIndex: a } = r,
        l = ht(),
        h = ht(!1),
        c = ht(0)
      let u
      const d = Q(() =>
          s.type ? (s.type === 'error' ? 'danger' : s.type) : 'info',
        ),
        f = Q(() => {
          const E = s.type
          return { [i.bm('icon', E)]: E && uc[E] }
        }),
        p = Q(() => s.icon || uc[s.type] || ''),
        g = Q(() => xy(s.id)),
        m = Q(() => by(s.id, s.offset) + g.value),
        x = Q(() => c.value + m.value),
        y = Q(() => ({ top: `${m.value}px`, zIndex: o.value }))
      function v() {
        s.duration !== 0 &&
          ({ stop: u } = gg(() => {
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
        E === E_.esc && M()
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
        Xi(document, 'keydown', k),
        vg(l, () => {
          c.value = l.value.getBoundingClientRect().height
        }),
        t({ visible: h, bottom: x, close: M }),
        (E, C) => (
          tt(),
          pe(
            wi,
            {
              name: F(i).b('fade'),
              onBeforeLeave: E.onClose,
              onAfterLeave: C[0] || (C[0] = (S) => E.$emit('destroy')),
              persisted: '',
            },
            {
              default: Xt(() => [
                yn(
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
                        ? (tt(),
                          pe(
                            F(X_),
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
                        : Bi('v-if', !0),
                      F(p)
                        ? (tt(),
                          pe(
                            F(pc),
                            { key: 1, class: Bt([F(i).e('icon'), F(f)]) },
                            { default: Xt(() => [(tt(), pe(su(F(p))))]), _: 1 },
                            8,
                            ['class'],
                          ))
                        : Bi('v-if', !0),
                      ye(E.$slots, 'default', {}, () => [
                        E.dangerouslyUseHTMLString
                          ? (tt(),
                            ft(
                              te,
                              { key: 1 },
                              [
                                Bi(
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
                                  wy,
                                ),
                              ],
                              2112,
                            ))
                          : (tt(),
                            ft(
                              'p',
                              { key: 0, class: Bt(F(i).e('content')) },
                              gn(E.message),
                              3,
                            )),
                      ]),
                      E.showClose
                        ? (tt(),
                          pe(
                            F(pc),
                            {
                              key: 2,
                              class: Bt(F(i).e('closeBtn')),
                              onClick: og(M, ['stop']),
                            },
                            { default: Xt(() => [ct(F(n))]), _: 1 },
                            8,
                            ['class', 'onClick'],
                          ))
                        : Bi('v-if', !0),
                    ],
                    46,
                    vy,
                  ),
                  [[xn, h.value]],
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
var Cy = Cs(Sy, [['__file', 'message.vue']])
let Ey = 1
const rd = (e) => {
    const t = !e || At(e) || Gs(e) || it(e) ? { message: e } : e,
      s = { ...ie, ...t }
    if (!s.appendTo) s.appendTo = document.body
    else if (At(s.appendTo)) {
      let n = document.querySelector(s.appendTo)
      s_(n) || (n = document.body), (s.appendTo = n)
    }
    return s
  },
  Py = (e) => {
    const t = Be.indexOf(e)
    if (t === -1) return
    Be.splice(t, 1)
    const { handler: s } = e
    s.close()
  },
  Ty = ({ appendTo: e, ...t }, s) => {
    const n = `message_${Ey++}`,
      i = t.onClose,
      r = document.createElement('div'),
      o = {
        ...t,
        id: n,
        onClose: () => {
          i == null || i(), Py(c)
        },
        onDestroy: () => {
          ql(null, r)
        },
      },
      a = ct(
        Cy,
        o,
        it(o.message) || Gs(o.message)
          ? { default: it(o.message) ? o.message : () => o.message }
          : null,
      )
    ;(a.appContext = s || vn._context),
      ql(a, r),
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
  vn = (e = {}, t) => {
    if (!qs) return { close: () => {} }
    if (pi(fc.max) && Be.length >= fc.max) return { close: () => {} }
    const s = rd(e)
    if (s.grouping && Be.length) {
      const i = Be.find(({ vnode: r }) => {
        var o
        return ((o = r.props) == null ? void 0 : o.message) === s.message
      })
      if (i) return (i.props.repeatNum += 1), (i.props.type = s.type), i.handler
    }
    const n = Ty(s, t)
    return Be.push(n), n.handler
  }
id.forEach((e) => {
  vn[e] = (t = {}, s) => {
    const n = rd(t)
    return vn({ ...n, type: e }, s)
  }
})
function My(e) {
  for (const t of Be) (!e || e === t.props.type) && t.handler.close()
}
vn.closeAll = My
vn._context = null
const Ua = C_(vn, '$message')
const Iy = '' + new URL('../assets/logo-4800e564.png', import.meta.url).href
const Ye = (e, t) => {
    const s = e.__vccOpts || e
    for (const [n, i] of t) s[n] = i
    return s
  },
  Ry = {},
  od = (e) => (Jh('data-v-6dc9eed8'), (e = e()), tu(), e),
  ky = { class: 'img-box' },
  Ly = od(() => nt('img', { src: Iy }, null, -1)),
  By = od(() => nt('div', null, 'hamseung', -1)),
  Oy = [Ly, By]
function Fy(e, t) {
  return tt(), ft('div', ky, Oy)
}
const $y = Ye(Ry, [
    ['render', Fy],
    ['__scopeId', 'data-v-6dc9eed8'],
  ]),
  Ai = (e, t) => {
    if (
      ((e.install = (s) => {
        for (const n of [e, ...Object.values(t ?? {})]) s.component(n.name, n)
      }),
      t)
    )
      for (const [s, n] of Object.entries(t)) e[s] = n
    return e
  },
  Ny = st({
    name: 'PotButton',
    __name: 'button',
    props: { type: { default: void 0 } },
    setup(e) {
      const t = e,
        s = Q(() => ({ [`pot-button--${t.type}`]: t.type })),
        n = Q(() =>
          t.type
            ? t.type.replace(t.type.charAt(0), t.type.charAt(0).toUpperCase())
            : 'Default',
        )
      return (i, r) => (
        tt(),
        ft(
          'button',
          { ref: 'buttonRef', class: Bt(['pot-button', s.value]) },
          [ye(i.$slots, 'default', {}, () => [Su(gn(n.value), 1)])],
          2,
        )
      )
    },
  }),
  l6 = Ai(Ny),
  Dy = { class: 'pot-icon' },
  zy = ['xlink:href'],
  Vy = st({
    name: 'PotIcon',
    __name: 'icon',
    props: { iconClass: { default: '' } },
    setup(e) {
      const t = e,
        s = Q(() => `#icon-${t.iconClass}`)
      return (n, i) => (
        tt(), ft('svg', Dy, [nt('use', { 'xlink:href': s.value }, null, 8, zy)])
      )
    },
  }),
  ad = Ai(Vy),
  ld = Symbol('radio-group')
function Uy(e, t) {
  const s = Vt(e, t)
  if (!s) throw new Error('该组件的上游组件需注入正确的值')
  return s
}
const Hy = ['name', 'value'],
  Gy = st({
    name: 'PotRadio',
    __name: 'radio',
    props: { value: { default: '' } },
    setup(e) {
      const t = e,
        s = Uy(ld)
      function n(i) {
        const r = i.target
        s.changeRadioValue(r.value)
      }
      return (i, r) => (
        tt(),
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
              Hy,
            ),
            ye(i.$slots, 'default'),
          ],
          2,
        )
      )
    },
  }),
  yc = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function Wy(e) {
  return `${e}-${yc.prefix}-${yc.current++}`
}
const jy = { class: 'pot-radio-group' },
  Yy = st({
    name: 'PotRadioGroup',
    __name: 'radio-group',
    props: { modelValue: { default: '' } },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const s = e,
        n = t,
        i = Q(() => s.modelValue)
      return (
        fn(ld, {
          name: Wy('radio-group-name'),
          changeRadioValue: (r) => {
            n('update:modelValue', r)
          },
          checkedValue: i,
        }),
        (r, o) => (tt(), ft('div', jy, [ye(r.$slots, 'default')]))
      )
    },
  })
Ai(Gy)
Ai(Yy)
const Xy = st({
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
        tt(),
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
  c6 = Ai(Xy)
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const sn = typeof window < 'u'
function Ky(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const wt = Object.assign
function qr(e, t) {
  const s = {}
  for (const n in t) {
    const i = t[n]
    s[n] = Oe(i) ? i.map(e) : e(i)
  }
  return s
}
const ei = () => {},
  Oe = Array.isArray,
  qy = /\/$/,
  Zy = (e) => e.replace(qy, '')
function Zr(e, t, s = '/') {
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
    (n = e1(n ?? t, s)),
    { fullPath: n + (r && '?') + r + o, path: n, query: i, hash: o }
  )
}
function Qy(e, t) {
  const s = t.query ? e(t.query) : ''
  return t.path + (s && '?') + s + (t.hash || '')
}
function xc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Jy(e, t, s) {
  const n = t.matched.length - 1,
    i = s.matched.length - 1
  return (
    n > -1 &&
    n === i &&
    wn(t.matched[n], s.matched[i]) &&
    cd(t.params, s.params) &&
    e(t.query) === e(s.query) &&
    t.hash === s.hash
  )
}
function wn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function cd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const s in e) if (!t1(e[s], t[s])) return !1
  return !0
}
function t1(e, t) {
  return Oe(e) ? bc(e, t) : Oe(t) ? bc(t, e) : e === t
}
function bc(e, t) {
  return Oe(t)
    ? e.length === t.length && e.every((s, n) => s === t[n])
    : e.length === 1 && e[0] === t
}
function e1(e, t) {
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
var mi
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(mi || (mi = {}))
var si
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(si || (si = {}))
function s1(e) {
  if (!e)
    if (sn) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Zy(e)
}
const n1 = /^[^#]+#/
function i1(e, t) {
  return e.replace(n1, '#') + t
}
function r1(e, t) {
  const s = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0),
  }
}
const Ir = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function o1(e) {
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
    t = r1(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function vc(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Oo = new Map()
function a1(e, t) {
  Oo.set(e, t)
}
function l1(e) {
  const t = Oo.get(e)
  return Oo.delete(e), t
}
let c1 = () => location.protocol + '//' + location.host
function hd(e, t) {
  const { pathname: s, search: n, hash: i } = t,
    r = e.indexOf('#')
  if (r > -1) {
    let a = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = i.slice(a)
    return l[0] !== '/' && (l = '/' + l), xc(l, '')
  }
  return xc(s, e) + n + i
}
function h1(e, t, s, n) {
  let i = [],
    r = [],
    o = null
  const a = ({ state: d }) => {
    const f = hd(e, location),
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
    i.forEach((x) => {
      x(s.value, p, {
        delta: m,
        type: mi.pop,
        direction: m ? (m > 0 ? si.forward : si.back) : si.unknown,
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
    d.state && d.replaceState(wt({}, d.state, { scroll: Ir() }), '')
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
function wc(e, t, s, n = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: i ? Ir() : null,
  }
}
function u1(e) {
  const { history: t, location: s } = window,
    n = { value: hd(e, s) },
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
          : c1() + e + l
    try {
      t[c ? 'replaceState' : 'pushState'](h, '', d), (i.value = h)
    } catch (f) {
      console.error(f), s[c ? 'replace' : 'assign'](d)
    }
  }
  function o(l, h) {
    const c = wt({}, t.state, wc(i.value.back, l, i.value.forward, !0), h, {
      position: i.value.position,
    })
    r(l, c, !0), (n.value = l)
  }
  function a(l, h) {
    const c = wt({}, i.value, t.state, { forward: l, scroll: Ir() })
    r(c.current, c, !0)
    const u = wt({}, wc(n.value, l, null), { position: c.position + 1 }, h)
    r(l, u, !1), (n.value = l)
  }
  return { location: n, state: i, push: a, replace: o }
}
function d1(e) {
  e = s1(e)
  const t = u1(e),
    s = h1(e, t.state, t.location, t.replace)
  function n(r, o = !0) {
    o || s.pauseListeners(), history.go(r)
  }
  const i = wt(
    { location: '', base: e, go: n, createHref: i1.bind(null, e) },
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
function f1(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    d1(e)
  )
}
function p1(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function ud(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const ls = {
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
  dd = Symbol('')
var Ac
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Ac || (Ac = {}))
function An(e, t) {
  return wt(new Error(), { type: e, [dd]: !0 }, t)
}
function Xe(e, t) {
  return e instanceof Error && dd in e && (t == null || !!(e.type & t))
}
const Sc = '[^/]+?',
  m1 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  g1 = /[.+*?^${}()[\]/\\]/g
function _1(e, t) {
  const s = wt({}, m1, t),
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
        u || (i += '/'), (i += d.value.replace(g1, '\\$&')), (f += 40)
      else if (d.type === 1) {
        const { value: p, repeatable: g, optional: m, regexp: x } = d
        r.push({ name: p, repeatable: g, optional: m })
        const y = x || Sc
        if (y !== Sc) {
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
            x = p in h ? h[p] : ''
          if (Oe(x) && !g)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const y = Oe(x) ? x.join('/') : x
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
function y1(e, t) {
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
function x1(e, t) {
  let s = 0
  const n = e.score,
    i = t.score
  for (; s < n.length && s < i.length; ) {
    const r = y1(n[s], i[s])
    if (r) return r
    s++
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (Cc(n)) return 1
    if (Cc(i)) return -1
  }
  return i.length - n.length
}
function Cc(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const b1 = { type: 0, value: '' },
  v1 = /[a-zA-Z0-9_]/
function w1(e) {
  if (!e) return [[]]
  if (e === '/') return [[b1]]
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
          : v1.test(l)
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
function A1(e, t, s) {
  const n = _1(w1(e.path), s),
    i = wt(n, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function S1(e, t) {
  const s = [],
    n = new Map()
  t = Tc({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(c) {
    return n.get(c)
  }
  function r(c, u, d) {
    const f = !d,
      p = C1(c)
    p.aliasOf = d && d.record
    const g = Tc(t, c),
      m = [p]
    if ('alias' in c) {
      const v = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const w of v)
        m.push(
          wt({}, p, {
            components: d ? d.record.components : p.components,
            path: w,
            aliasOf: d ? d.record : p,
          }),
        )
    }
    let x, y
    for (const v of m) {
      const { path: w } = v
      if (u && w[0] !== '/') {
        const M = u.record.path,
          k = M[M.length - 1] === '/' ? '' : '/'
        v.path = u.record.path + (w && k + w)
      }
      if (
        ((x = A1(v, u, g)),
        d
          ? d.alias.push(x)
          : ((y = y || x),
            y !== x && y.alias.push(x),
            f && c.name && !Pc(x) && o(c.name)),
        p.children)
      ) {
        const M = p.children
        for (let k = 0; k < M.length; k++) r(M[k], x, d && d.children[k])
      }
      ;(d = d || x),
        ((x.record.components && Object.keys(x.record.components).length) ||
          x.record.name ||
          x.record.redirect) &&
          l(x)
    }
    return y
      ? () => {
          o(y)
        }
      : ei
  }
  function o(c) {
    if (ud(c)) {
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
      x1(c, s[u]) >= 0 &&
      (c.record.path !== s[u].record.path || !fd(c, s[u]));

    )
      u++
    s.splice(u, 0, c), c.record.name && !Pc(c) && n.set(c.record.name, c)
  }
  function h(c, u) {
    let d,
      f = {},
      p,
      g
    if ('name' in c && c.name) {
      if (((d = n.get(c.name)), !d)) throw An(1, { location: c })
      ;(g = d.record.name),
        (f = wt(
          Ec(
            u.params,
            d.keys.filter((y) => !y.optional).map((y) => y.name),
          ),
          c.params &&
            Ec(
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
        throw An(1, { location: c, currentLocation: u })
      ;(g = d.record.name),
        (f = wt({}, u.params, c.params)),
        (p = d.stringify(f))
    }
    const m = []
    let x = d
    for (; x; ) m.unshift(x.record), (x = x.parent)
    return { name: g, path: p, params: f, matched: m, meta: P1(m) }
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
function Ec(e, t) {
  const s = {}
  for (const n of t) n in e && (s[n] = e[n])
  return s
}
function C1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: E1(e),
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
function E1(e) {
  const t = {},
    s = e.props || !1
  if ('component' in e) t.default = s
  else for (const n in e.components) t[n] = typeof s == 'object' ? s[n] : s
  return t
}
function Pc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function P1(e) {
  return e.reduce((t, s) => wt(t, s.meta), {})
}
function Tc(e, t) {
  const s = {}
  for (const n in e) s[n] = n in t ? t[n] : e[n]
  return s
}
function fd(e, t) {
  return t.children.some((s) => s === e || fd(e, s))
}
const pd = /#/g,
  T1 = /&/g,
  M1 = /\//g,
  I1 = /=/g,
  R1 = /\?/g,
  md = /\+/g,
  k1 = /%5B/g,
  L1 = /%5D/g,
  gd = /%5E/g,
  B1 = /%60/g,
  _d = /%7B/g,
  O1 = /%7C/g,
  yd = /%7D/g,
  F1 = /%20/g
function Ha(e) {
  return encodeURI('' + e)
    .replace(O1, '|')
    .replace(k1, '[')
    .replace(L1, ']')
}
function $1(e) {
  return Ha(e).replace(_d, '{').replace(yd, '}').replace(gd, '^')
}
function Fo(e) {
  return Ha(e)
    .replace(md, '%2B')
    .replace(F1, '+')
    .replace(pd, '%23')
    .replace(T1, '%26')
    .replace(B1, '`')
    .replace(_d, '{')
    .replace(yd, '}')
    .replace(gd, '^')
}
function N1(e) {
  return Fo(e).replace(I1, '%3D')
}
function D1(e) {
  return Ha(e).replace(pd, '%23').replace(R1, '%3F')
}
function z1(e) {
  return e == null ? '' : D1(e).replace(M1, '%2F')
}
function lr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function V1(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < n.length; ++i) {
    const r = n[i].replace(md, ' '),
      o = r.indexOf('='),
      a = lr(o < 0 ? r : r.slice(0, o)),
      l = o < 0 ? null : lr(r.slice(o + 1))
    if (a in t) {
      let h = t[a]
      Oe(h) || (h = t[a] = [h]), h.push(l)
    } else t[a] = l
  }
  return t
}
function Mc(e) {
  let t = ''
  for (let s in e) {
    const n = e[s]
    if (((s = N1(s)), n == null)) {
      n !== void 0 && (t += (t.length ? '&' : '') + s)
      continue
    }
    ;(Oe(n) ? n.map((r) => r && Fo(r)) : [n && Fo(n)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? '&' : '') + s), r != null && (t += '=' + r))
    })
  }
  return t
}
function U1(e) {
  const t = {}
  for (const s in e) {
    const n = e[s]
    n !== void 0 &&
      (t[s] = Oe(n)
        ? n.map((i) => (i == null ? null : '' + i))
        : n == null
        ? n
        : '' + n)
  }
  return t
}
const H1 = Symbol(''),
  Ic = Symbol(''),
  Rr = Symbol(''),
  Ga = Symbol(''),
  $o = Symbol('')
function zn() {
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
function ps(e, t, s, n, i) {
  const r = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || [])
  return () =>
    new Promise((o, a) => {
      const l = (u) => {
          u === !1
            ? a(An(4, { from: s, to: t }))
            : u instanceof Error
            ? a(u)
            : p1(u)
            ? a(An(2, { from: t, to: u }))
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
function Qr(e, t, s, n) {
  const i = []
  for (const r of e)
    for (const o in r.components) {
      let a = r.components[o]
      if (!(t !== 'beforeRouteEnter' && !r.instances[o]))
        if (G1(a)) {
          const h = (a.__vccOpts || a)[t]
          h && i.push(ps(h, s, n, r, o))
        } else {
          let l = a()
          i.push(() =>
            l.then((h) => {
              if (!h)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${r.path}"`),
                )
              const c = Ky(h) ? h.default : h
              r.components[o] = c
              const d = (c.__vccOpts || c)[t]
              return d && ps(d, s, n, r, o)()
            }),
          )
        }
    }
  return i
}
function G1(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function Rc(e) {
  const t = Vt(Rr),
    s = Vt(Ga),
    n = Q(() => t.resolve(F(e.to))),
    i = Q(() => {
      const { matched: l } = n.value,
        { length: h } = l,
        c = l[h - 1],
        u = s.matched
      if (!c || !u.length) return -1
      const d = u.findIndex(wn.bind(null, c))
      if (d > -1) return d
      const f = kc(l[h - 2])
      return h > 1 && kc(c) === f && u[u.length - 1].path !== f
        ? u.findIndex(wn.bind(null, l[h - 2]))
        : d
    }),
    r = Q(() => i.value > -1 && X1(s.params, n.value.params)),
    o = Q(
      () =>
        i.value > -1 &&
        i.value === s.matched.length - 1 &&
        cd(s.params, n.value.params),
    )
  function a(l = {}) {
    return Y1(l)
      ? t[F(e.replace) ? 'replace' : 'push'](F(e.to)).catch(ei)
      : Promise.resolve()
  }
  return {
    route: n,
    href: Q(() => n.value.href),
    isActive: r,
    isExactActive: o,
    navigate: a,
  }
}
const W1 = st({
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
    useLink: Rc,
    setup(e, { slots: t }) {
      const s = Tn(Rc(e)),
        { options: n } = Vt(Rr),
        i = Q(() => ({
          [Lc(e.activeClass, n.linkActiveClass, 'router-link-active')]:
            s.isActive,
          [Lc(
            e.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active',
          )]: s.isExactActive,
        }))
      return () => {
        const r = t.default && t.default(s)
        return e.custom
          ? r
          : _s(
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
  j1 = W1
function Y1(e) {
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
function X1(e, t) {
  for (const s in t) {
    const n = t[s],
      i = e[s]
    if (typeof n == 'string') {
      if (n !== i) return !1
    } else if (!Oe(i) || i.length !== n.length || n.some((r, o) => r !== i[o]))
      return !1
  }
  return !0
}
function kc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Lc = (e, t, s) => e ?? t ?? s,
  K1 = st({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: s }) {
      const n = Vt($o),
        i = Q(() => e.route || n.value),
        r = Vt(Ic, 0),
        o = Q(() => {
          let h = F(r)
          const { matched: c } = i.value
          let u
          for (; (u = c[h]) && !u.components; ) h++
          return h
        }),
        a = Q(() => i.value.matched[o.value])
      fn(
        Ic,
        Q(() => o.value + 1),
      ),
        fn(H1, a),
        fn($o, i)
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
                (!f || !wn(c, f) || !d) &&
                (c.enterCallbacks[u] || []).forEach((g) => g(h))
          },
          { flush: 'post' },
        ),
        () => {
          const h = i.value,
            c = e.name,
            u = a.value,
            d = u && u.components[c]
          if (!d) return Bc(s.default, { Component: d, route: h })
          const f = u.props[c],
            p = f
              ? f === !0
                ? h.params
                : typeof f == 'function'
                ? f(h)
                : f
              : null,
            m = _s(
              d,
              wt({}, p, t, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (u.instances[c] = null)
                },
                ref: l,
              }),
            )
          return Bc(s.default, { Component: m, route: h }) || m
        }
      )
    },
  })
function Bc(e, t) {
  if (!e) return null
  const s = e(t)
  return s.length === 1 ? s[0] : s
}
const q1 = K1
function Z1(e) {
  const t = S1(e.routes, e),
    s = e.parseQuery || V1,
    n = e.stringifyQuery || Mc,
    i = e.history,
    r = zn(),
    o = zn(),
    a = zn(),
    l = pp(ls)
  let h = ls
  sn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const c = qr.bind(null, (R) => '' + R),
    u = qr.bind(null, z1),
    d = qr.bind(null, lr)
  function f(R, U) {
    let N, W
    return (
      ud(R) ? ((N = t.getRecordMatcher(R)), (W = U)) : (W = R), t.addRoute(W, N)
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
  function x(R, U) {
    if (((U = wt({}, U || l.value)), typeof R == 'string')) {
      const b = Zr(s, R, U.path),
        A = t.resolve({ path: b.path }, U),
        I = i.createHref(b.fullPath)
      return wt(b, A, {
        params: d(A.params),
        hash: lr(b.hash),
        redirectedFrom: void 0,
        href: I,
      })
    }
    let N
    if ('path' in R) N = wt({}, R, { path: Zr(s, R.path, U.path).path })
    else {
      const b = wt({}, R.params)
      for (const A in b) b[A] == null && delete b[A]
      ;(N = wt({}, R, { params: u(b) })), (U.params = u(U.params))
    }
    const W = t.resolve(N, U),
      yt = R.hash || ''
    W.params = c(d(W.params))
    const vt = Qy(n, wt({}, R, { hash: $1(yt), path: W.path })),
      _ = i.createHref(vt)
    return wt(
      { fullPath: vt, hash: yt, query: n === Mc ? U1(R.query) : R.query || {} },
      W,
      { redirectedFrom: void 0, href: _ },
    )
  }
  function y(R) {
    return typeof R == 'string' ? Zr(s, R, l.value.path) : wt({}, R)
  }
  function v(R, U) {
    if (h !== R) return An(8, { from: U, to: R })
  }
  function w(R) {
    return E(R)
  }
  function M(R) {
    return w(wt(y(R), { replace: !0 }))
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
        wt(
          { query: R.query, hash: R.hash, params: 'path' in W ? {} : R.params },
          W,
        )
      )
    }
  }
  function E(R, U) {
    const N = (h = x(R)),
      W = l.value,
      yt = R.state,
      vt = R.force,
      _ = R.replace === !0,
      b = k(N)
    if (b)
      return E(
        wt(y(b), {
          state: typeof b == 'object' ? wt({}, yt, b.state) : yt,
          force: vt,
          replace: _,
        }),
        U || N,
      )
    const A = N
    A.redirectedFrom = U
    let I
    return (
      !vt &&
        Jy(n, W, N) &&
        ((I = An(16, { to: A, from: W })), xe(W, W, !0, !1)),
      (I ? Promise.resolve(I) : P(A, W))
        .catch((T) => (Xe(T) ? (Xe(T, 2) ? T : et(T)) : _t(T, A, W)))
        .then((T) => {
          if (T) {
            if (Xe(T, 2))
              return E(
                wt({ replace: _ }, y(T.to), {
                  state: typeof T.to == 'object' ? wt({}, yt, T.to.state) : yt,
                  force: vt,
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
    const [W, yt, vt] = Q1(R, U)
    N = Qr(W.reverse(), 'beforeRouteLeave', R, U)
    for (const b of W)
      b.leaveGuards.forEach((A) => {
        N.push(ps(A, R, U))
      })
    const _ = C.bind(null, R, U)
    return (
      N.push(_),
      Lt(N)
        .then(() => {
          N = []
          for (const b of r.list()) N.push(ps(b, R, U))
          return N.push(_), Lt(N)
        })
        .then(() => {
          N = Qr(yt, 'beforeRouteUpdate', R, U)
          for (const b of yt)
            b.updateGuards.forEach((A) => {
              N.push(ps(A, R, U))
            })
          return N.push(_), Lt(N)
        })
        .then(() => {
          N = []
          for (const b of vt)
            if (b.beforeEnter)
              if (Oe(b.beforeEnter))
                for (const A of b.beforeEnter) N.push(ps(A, R, U))
              else N.push(ps(b.beforeEnter, R, U))
          return N.push(_), Lt(N)
        })
        .then(
          () => (
            R.matched.forEach((b) => (b.enterCallbacks = {})),
            (N = Qr(vt, 'beforeRouteEnter', R, U)),
            N.push(_),
            Lt(N)
          ),
        )
        .then(() => {
          N = []
          for (const b of o.list()) N.push(ps(b, R, U))
          return N.push(_), Lt(N)
        })
        .catch((b) => (Xe(b, 8) ? b : Promise.reject(b)))
    )
  }
  function Y(R, U, N) {
    a.list().forEach((W) => S(() => W(R, U, N)))
  }
  function V(R, U, N, W, yt) {
    const vt = v(R, U)
    if (vt) return vt
    const _ = U === ls,
      b = sn ? history.state : {}
    N &&
      (W || _
        ? i.replace(R.fullPath, wt({ scroll: _ && b && b.scroll }, yt))
        : i.push(R.fullPath, yt)),
      (l.value = R),
      xe(R, U, N, _),
      et()
  }
  let D
  function G() {
    D ||
      (D = i.listen((R, U, N) => {
        if (!$e.listening) return
        const W = x(R),
          yt = k(W)
        if (yt) {
          E(wt(yt, { replace: !0 }), W).catch(ei)
          return
        }
        h = W
        const vt = l.value
        sn && a1(vc(vt.fullPath, N.delta), Ir()),
          P(W, vt)
            .catch((_) =>
              Xe(_, 12)
                ? _
                : Xe(_, 2)
                ? (E(_.to, W)
                    .then((b) => {
                      Xe(b, 20) && !N.delta && N.type === mi.pop && i.go(-1, !1)
                    })
                    .catch(ei),
                  Promise.reject())
                : (N.delta && i.go(-N.delta, !1), _t(_, W, vt)),
            )
            .then((_) => {
              ;(_ = _ || V(W, vt, !1)),
                _ &&
                  (N.delta && !Xe(_, 8)
                    ? i.go(-N.delta, !1)
                    : N.type === mi.pop && Xe(_, 20) && i.go(-1, !1)),
                Y(W, vt, _)
            })
            .catch(ei)
      }))
  }
  let ut = zn(),
    X = zn(),
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
    return lt && l.value !== ls
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
    if (!sn || !yt) return Promise.resolve()
    const vt =
      (!N && l1(vc(R.fullPath, 0))) ||
      ((W || !N) && history.state && history.state.scroll) ||
      null
    return Ks()
      .then(() => yt(R, U, vt))
      .then((_) => _ && o1(_))
      .catch((_) => _t(_, R, U))
  }
  const at = (R) => i.go(R)
  let Qt
  const be = new Set(),
    $e = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: p,
      hasRoute: m,
      getRoutes: g,
      resolve: x,
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
        R.component('RouterLink', j1),
          R.component('RouterView', q1),
          (R.config.globalProperties.$router = U),
          Object.defineProperty(R.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => F(l),
          }),
          sn &&
            !Qt &&
            l.value === ls &&
            ((Qt = !0), w(i.location).catch((yt) => {}))
        const N = {}
        for (const yt in ls)
          Object.defineProperty(N, yt, {
            get: () => l.value[yt],
            enumerable: !0,
          })
        R.provide(Rr, U), R.provide(Ga, ya(N)), R.provide($o, l)
        const W = R.unmount
        be.add(R),
          (R.unmount = function () {
            be.delete(R),
              be.size < 1 &&
                ((h = ls),
                D && D(),
                (D = null),
                (l.value = ls),
                (Qt = !1),
                (lt = !1)),
              W()
          })
      },
    }
  function Lt(R) {
    return R.reduce((U, N) => U.then(() => S(N)), Promise.resolve())
  }
  return $e
}
function Q1(e, t) {
  const s = [],
    n = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < r; o++) {
    const a = t.matched[o]
    a && (e.matched.find((h) => wn(h, a)) ? n.push(a) : s.push(a))
    const l = e.matched[o]
    l && (t.matched.find((h) => wn(h, l)) || i.push(l))
  }
  return [s, n, i]
}
function J1() {
  return Vt(Rr)
}
function tx() {
  return Vt(Ga)
}
const ex = (e) => (Jh('data-v-763cd14c'), (e = e()), tu(), e),
  sx = { class: 'menu' },
  nx = ['onClick'],
  ix = ex(() => nt('div', { class: 'placeholder' }, null, -1)),
  rx = st({
    __name: 'index',
    setup(e) {
      const t = J1(),
        s = tx(),
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
        const l = ad
        return (
          tt(),
          ft(
            te,
            null,
            [
              nt('div', sx, [
                (tt(),
                ft(
                  te,
                  null,
                  Zp(i, (h) =>
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
                        nt('span', null, gn(h.title), 1),
                      ],
                      10,
                      nx,
                    ),
                  ),
                  64,
                )),
              ]),
              ix,
            ],
            64,
          )
        )
      }
    },
  })
const ox = Ye(rx, [['__scopeId', 'data-v-763cd14c']])
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let xd
const kr = (e) => (xd = e),
  bd = Symbol()
function No(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  )
}
var ni
;(function (e) {
  ;(e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function')
})(ni || (ni = {}))
function ax() {
  const e = Mh(!0),
    t = e.run(() => ht({}))
  let s = [],
    n = []
  const i = gr({
    install(r) {
      kr(i),
        (i._a = r),
        r.provide(bd, i),
        (r.config.globalProperties.$pinia = i),
        n.forEach((o) => s.push(o)),
        (n = [])
    },
    use(r) {
      return !this._a && !ug ? n.push(r) : s.push(r), this
    },
    _p: s,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return i
}
const vd = () => {}
function Oc(e, t, s, n = vd) {
  e.push(t)
  const i = () => {
    const r = e.indexOf(t)
    r > -1 && (e.splice(r, 1), n())
  }
  return !s && da() && Ih(i), i
}
function tn(e, ...t) {
  e.slice().forEach((s) => {
    s(...t)
  })
}
const lx = (e) => e()
function Do(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((s, n) => e.set(n, s)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const s in t) {
    if (!t.hasOwnProperty(s)) continue
    const n = t[s],
      i = e[s]
    No(i) && No(n) && e.hasOwnProperty(s) && !It(n) && !vs(n)
      ? (e[s] = Do(i, n))
      : (e[s] = n)
  }
  return e
}
const cx = Symbol()
function hx(e) {
  return !No(e) || !e.hasOwnProperty(cx)
}
const { assign: cs } = Object
function ux(e) {
  return !!(It(e) && e.effect)
}
function dx(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t,
    a = s.state.value[e]
  let l
  function h() {
    a || (s.state.value[e] = i ? i() : {})
    const c = jh(s.state.value[e])
    return cs(
      c,
      r,
      Object.keys(o || {}).reduce(
        (u, d) => (
          (u[d] = gr(
            Q(() => {
              kr(s)
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
  return (l = wd(e, h, t, s, n, !0)), l
}
function wd(e, t, s = {}, n, i, r) {
  let o
  const a = cs({ actions: {} }, s),
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
          (S = { type: ni.patchFunction, storeId: e, events: f }))
        : (Do(n.state.value[e], C),
          (S = { type: ni.patchObject, payload: C, storeId: e, events: f }))
    const P = (g = Symbol())
    Ks().then(() => {
      g === P && (h = !0)
    }),
      (c = !0),
      tn(u, S, n.state.value[e])
  }
  const x = r
    ? function () {
        const { state: S } = s,
          P = S ? S() : {}
        this.$patch((Y) => {
          cs(Y, P)
        })
      }
    : vd
  function y() {
    o.stop(), (u = []), (d = []), n._s.delete(e)
  }
  function v(C, S) {
    return function () {
      kr(n)
      const P = Array.from(arguments),
        Y = [],
        V = []
      function D(X) {
        Y.push(X)
      }
      function G(X) {
        V.push(X)
      }
      tn(d, { args: P, name: C, store: M, after: D, onError: G })
      let ut
      try {
        ut = S.apply(this && this.$id === e ? this : M, P)
      } catch (X) {
        throw (tn(V, X), X)
      }
      return ut instanceof Promise
        ? ut
            .then((X) => (tn(Y, X), X))
            .catch((X) => (tn(V, X), Promise.reject(X)))
        : (tn(Y, ut), ut)
    }
  }
  const w = {
      _p: n,
      $id: e,
      $onAction: Oc.bind(null, d),
      $patch: m,
      $reset: x,
      $subscribe(C, S = {}) {
        const P = Oc(u, C, S.detached, () => Y()),
          Y = o.run(() =>
            Zt(
              () => n.state.value[e],
              (V) => {
                ;(S.flush === 'sync' ? c : h) &&
                  C({ storeId: e, type: ni.direct, events: f }, V)
              },
              cs({}, l, S),
            ),
          )
        return P
      },
      $dispose: y,
    },
    M = Tn(w)
  n._s.set(e, M)
  const E = ((n._a && n._a.runWithContext) || lx)(() =>
    n._e.run(() => (o = Mh()).run(t)),
  )
  for (const C in E) {
    const S = E[C]
    if ((It(S) && !ux(S)) || vs(S))
      r ||
        (p && hx(S) && (It(S) ? (S.value = p[C]) : Do(S, p[C])),
        (n.state.value[e][C] = S))
    else if (typeof S == 'function') {
      const P = v(C, S)
      ;(E[C] = P), (a.actions[C] = S)
    }
  }
  return (
    cs(M, E),
    cs(gt(M), E),
    Object.defineProperty(M, '$state', {
      get: () => n.state.value[e],
      set: (C) => {
        m((S) => {
          cs(S, C)
        })
      },
    }),
    n._p.forEach((C) => {
      cs(
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
function Ad(e, t, s) {
  let n, i
  const r = typeof t == 'function'
  typeof e == 'string' ? ((n = e), (i = r ? s : t)) : ((i = e), (n = e.id))
  function o(a, l) {
    const h = am()
    return (
      (a = a || (h ? Vt(bd, null) : null)),
      a && kr(a),
      (a = xd),
      a._s.has(n) || (r ? wd(n, t, i, a) : dx(n, i, a)),
      a._s.get(n)
    )
  }
  return (o.$id = n), o
}
const In = Ad('player', () => {
    const e = ht(null),
      t = ht(''),
      s = ht(0),
      n = ht(0),
      i = ht(0),
      r = ht(0),
      o = ht(!1)
    function a(x) {
      t.value = x
    }
    function l(x) {
      i.value = x
    }
    function h(x) {
      r.value = x
    }
    function c() {
      ;(s.value = Number(e.value.duration.toFixed(2))),
        (n.value = 0),
        (i.value = 0),
        (r.value = s.value),
        (o.value = !1)
    }
    async function u() {
      return new Promise((x) => {
        const y = document.createElement('video')
        ;(e.value = y),
          (y.oncanplaythrough = () => {
            ;(y.oncanplaythrough = null),
              y.duration === 1 / 0
                ? ((y.ontimeupdate = () => {
                    ;(y.ontimeupdate = d), (y.currentTime = 0), c(), x(!0)
                  }),
                  (y.currentTime = 1e101))
                : ((y.ontimeupdate = d), c(), x(!0))
          }),
          (y.muted = !0),
          (y.autoplay = !0),
          (y.src = t.value)
      })
    }
    function d() {
      const x = Number(e.value.currentTime.toFixed(2))
      n.value = x
    }
    function f() {
      n.value >= r.value && (e.value.currentTime = i.value),
        (o.value = !0),
        e.value.play()
    }
    function p() {
      ;(o.value = !1), e.value.pause()
    }
    function g() {
      ;(o.value = !1), e.value.pause(), (e.value.currentTime = r.value)
    }
    function m(x) {
      e.value.currentTime = x
    }
    return {
      videoRef: e,
      videoSrc: t,
      duration: s,
      currentTime: n,
      startTime: i,
      endTime: r,
      playing: o,
      changeVideoSrc: a,
      changeEndTime: h,
      changeStartTime: l,
      videoCreate: u,
      videoPause: p,
      videoPauseByAuto: g,
      videoPlay: f,
      videoSkip: m,
    }
  }),
  Fc = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function fx(e) {
  return `${e}-${Fc.prefix}-${Fc.current++}`
}
function px(e, t = 500) {
  let s = null
  return function (...n) {
    s ||
      (s = setTimeout(() => {
        e.apply(this, n), (s = null)
      }, t))
  }
}
const zo = 'gro-key',
  Sd = {},
  $c = new ResizeObserver((e) => {
    for (const t of e) {
      const s = t.target.getAttribute(zo)
      Sd[s](t)
    }
  })
function mx(e, t, s, n = 0) {
  let i
  Te(() => {
    i = F(e)
    const r = fx(zo)
    i.setAttribute(zo, r),
      n !== 0 && (s = px(s, n)),
      (Sd[r] = s),
      $c.observe(i, t)
  }),
    Pa(() => {
      $c.unobserve(i)
    })
}
const gx = 'modulepreload',
  _x = function (e, t) {
    return new URL(e, t).href
  },
  Nc = {},
  xs = function (t, s, n) {
    if (!s || s.length === 0) return t()
    const i = document.getElementsByTagName('link')
    return Promise.all(
      s.map((r) => {
        if (((r = _x(r, n)), r in Nc)) return
        Nc[r] = !0
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
          ((h.rel = o ? 'stylesheet' : gx),
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
const Vo = (e) => {
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
  Fi = (e, t) => Vo(e).priority ?? t,
  Ee = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...e) {
      return (
        e.map(Vo).forEach((t) => {
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
        e.map(Vo).forEach((t) => {
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
            t.sort((r, o) => Fi(o.value, s) - Fi(r.value, s)))
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
            (t.push(n.ref), t.sort((i, r) => Fi(r, s) - Fi(i, s)))
        },
        (n) => {
          const i = t.indexOf(n.ref)
          i !== -1 && t.splice(i, 1)
        },
      )
    },
  },
  yx = {
    extension: { type: ot.Environment, name: 'browser', priority: -1 },
    test: () => !0,
    load: async () => {
      await xs(
        () => import('./browserAll-431c75d9.js'),
        [
          './browserAll-431c75d9.js',
          './init-3d28dcdd.js',
          './colorToUniform-74a8c3f8.js',
          './CanvasPool-93ca5665.js',
          './batchSamplersUniformGroup-75cefaca.js',
        ],
        import.meta.url,
      )
    },
  },
  xx = {
    extension: { type: ot.Environment, name: 'webworker', priority: 0 },
    test: () => typeof self < 'u' && self.WorkerGlobalScope !== void 0,
    load: async () => {
      await xs(
        () => import('./webworkerAll-f8077738.js'),
        [
          './webworkerAll-f8077738.js',
          './init-3d28dcdd.js',
          './colorToUniform-74a8c3f8.js',
          './CanvasPool-93ca5665.js',
          './batchSamplersUniformGroup-75cefaca.js',
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
var Cd = { exports: {} }
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
        x = arguments.length,
        y,
        v
      if (m.fn) {
        switch ((m.once && this.removeListener(h, m.fn, void 0, !0), x)) {
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
        for (v = 1, y = new Array(x - 1); v < x; v++) y[v - 1] = arguments[v]
        m.fn.apply(m.context, y)
      } else {
        var w = m.length,
          M
        for (v = 0; v < w; v++)
          switch (
            (m[v].once && this.removeListener(h, m[v].fn, void 0, !0), x)
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
                for (M = 1, y = new Array(x - 1); M < x; M++)
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
        for (var g = 0, m = [], x = p.length; g < x; g++)
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
})(Cd)
var bx = Cd.exports
const ns = Va(bx),
  vx = Math.PI * 2,
  wx = 180 / Math.PI,
  Ax = Math.PI / 180
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
    return (Jr.x = 0), (Jr.y = 0), Jr
  }
}
const Jr = new qt()
class Ct {
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
      h < 1e-5 || Math.abs(vx - h) < 1e-5
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
    const t = new Ct()
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
    return Cx.identity()
  }
  static get shared() {
    return Sx.identity()
  }
}
const Sx = new Ct(),
  Cx = new Ct(),
  Bs = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  Os = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  Fs = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  $s = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  Uo = [],
  Ed = [],
  $i = Math.sign
function Ex() {
  for (let e = 0; e < 16; e++) {
    const t = []
    Uo.push(t)
    for (let s = 0; s < 16; s++) {
      const n = $i(Bs[e] * Bs[s] + Fs[e] * Os[s]),
        i = $i(Os[e] * Bs[s] + $s[e] * Os[s]),
        r = $i(Bs[e] * Fs[s] + Fs[e] * $s[s]),
        o = $i(Os[e] * Fs[s] + $s[e] * $s[s])
      for (let a = 0; a < 16; a++)
        if (Bs[a] === n && Os[a] === i && Fs[a] === r && $s[a] === o) {
          t.push(a)
          break
        }
    }
  }
  for (let e = 0; e < 16; e++) {
    const t = new Ct()
    t.set(Bs[e], Os[e], Fs[e], $s[e], 0, 0), Ed.push(t)
  }
}
Ex()
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
    uX: (e) => Bs[e],
    uY: (e) => Os[e],
    vX: (e) => Fs[e],
    vY: (e) => $s[e],
    inv: (e) => (e & 8 ? e & 15 : -e & 7),
    add: (e, t) => Uo[e][t],
    sub: (e, t) => Uo[e][Rt.inv(t)],
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
      const i = Ed[Rt.inv(t)]
      ;(i.tx = s), (i.ty = n), e.append(i)
    },
  },
  Ni = [new qt(), new qt(), new qt(), new qt()]
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
    const a = Ni[0].set(t.left, t.top),
      l = Ni[1].set(t.left, t.bottom),
      h = Ni[2].set(t.right, t.top),
      c = Ni[3].set(t.right, t.bottom)
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
      x = d * i + f * o
    if (
      Math.max(p, g, m, x) <= d * a.x + f * a.y ||
      Math.min(p, g, m, x) >= d * c.x + f * c.y
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
const to = { default: -1 }
function Gt(e = 'default') {
  return to[e] === void 0 && (to[e] = -1), ++to[e]
}
const Dc = {},
  ge = '8.0.0'
function _e(e, t, s = 3) {
  if (Dc[t]) return
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
    (Dc[t] = !0)
}
const Pd = () => {}
function h6(e) {
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
function zc(e) {
  return !(e & (e - 1)) && !!e
}
function Px(e) {
  const t = {}
  for (const s in e) e[s] !== void 0 && (t[s] = e[s])
  return t
}
const Vc = Object.create(null)
function Tx(e) {
  const t = Vc[e]
  return t === void 0 && (Vc[e] = Gt('resource')), t
}
const Td = class Md extends ns {
  constructor(t = {}) {
    super(),
      (this._resourceType = 'textureSampler'),
      (this._touched = 0),
      (this._maxAnisotropy = 1),
      (this.destroyed = !1),
      (t = { ...Md.defaultOptions, ...t }),
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
    return (this._sharedResourceId = Tx(t)), this._resourceId
  }
  destroy() {
    ;(this.destroyed = !0),
      this.emit('destroy', this),
      this.emit('change', this),
      this.removeAllListeners()
  }
}
Td.defaultOptions = { addressMode: 'clamp-to-edge', scaleMode: 'linear' }
let Mx = Td
const Id = class Rd extends ns {
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
      (t = { ...Rd.defaultOptions, ...t }),
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
      (this.style = new Mx(Px(t))),
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
    this.isPowerOfTwo = zc(this.pixelWidth) && zc(this.pixelHeight)
  }
  static test(t) {
    throw new Error('Unimplemented')
  }
}
Id.defaultOptions = {
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
let Es = Id
class Wa extends Es {
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
Wa.extension = ot.TextureSource
const Uc = new Ct()
class Ix {
  constructor(t, s) {
    ;(this.mapCoord = new Ct()),
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
      (Uc.set(
        n.width / i.width,
        0,
        0,
        n.height / i.height,
        -i.x / i.width,
        -i.y / i.height,
      ),
      this.mapCoord.append(Uc))
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
class Pt extends ns {
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
      (this.source = (t == null ? void 0 : t.source) ?? new Es()),
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
      this._textureMatrix || (this._textureMatrix = new Ix(this)),
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
Pt.EMPTY = new Pt({ label: 'EMPTY', source: new Es({ label: 'EMPTY' }) })
Pt.EMPTY.destroy = Pd
Pt.WHITE = new Pt({
  source: new Wa({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: 'premultiply-alpha-on-upload',
    label: 'WHITE',
  }),
  label: 'WHITE',
})
Pt.WHITE.destroy = Pd
function Rx(e, t, s, n) {
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
var kx = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  Ke = function (e) {
    return typeof e == 'string' ? e.length > 0 : typeof e == 'number'
  },
  Dt = function (e, t, s) {
    return (
      t === void 0 && (t = 0),
      s === void 0 && (s = Math.pow(10, t)),
      Math.round(s * e) / s + 0
    )
  },
  Ae = function (e, t, s) {
    return (
      t === void 0 && (t = 0),
      s === void 0 && (s = 1),
      e > s ? s : e > t ? e : t
    )
  },
  kd = function (e) {
    return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360
  },
  Hc = function (e) {
    return {
      r: Ae(e.r, 0, 255),
      g: Ae(e.g, 0, 255),
      b: Ae(e.b, 0, 255),
      a: Ae(e.a),
    }
  },
  eo = function (e) {
    return { r: Dt(e.r), g: Dt(e.g), b: Dt(e.b), a: Dt(e.a, 3) }
  },
  Lx = /^#([0-9a-f]{3,8})$/i,
  Di = function (e) {
    var t = e.toString(16)
    return t.length < 2 ? '0' + t : t
  },
  Ld = function (e) {
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
  Bd = function (e) {
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
  Gc = function (e) {
    return { h: kd(e.h), s: Ae(e.s, 0, 100), l: Ae(e.l, 0, 100), a: Ae(e.a) }
  },
  Wc = function (e) {
    return { h: Dt(e.h), s: Dt(e.s), l: Dt(e.l), a: Dt(e.a, 3) }
  },
  jc = function (e) {
    return Bd(
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
  ii = function (e) {
    return {
      h: (t = Ld(e)).h,
      s:
        (i = ((200 - (s = t.s)) * (n = t.v)) / 100) > 0 && i < 200
          ? ((s * n) / 100 / (i <= 100 ? i : 200 - i)) * 100
          : 0,
      l: i / 2,
      a: t.a,
    }
    var t, s, n, i
  },
  Bx =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Ox =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Fx =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  $x =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Ho = {
    string: [
      [
        function (e) {
          var t = Lx.exec(e)
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
          var t = Fx.exec(e) || $x.exec(e)
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : Hc({
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
          var t = Bx.exec(e) || Ox.exec(e)
          if (!t) return null
          var s,
            n,
            i = Gc({
              h:
                ((s = t[1]),
                (n = t[2]),
                n === void 0 && (n = 'deg'),
                Number(s) * (kx[n] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            })
          return jc(i)
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
          return Ke(t) && Ke(s) && Ke(n)
            ? Hc({ r: Number(t), g: Number(s), b: Number(n), a: Number(r) })
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
          if (!Ke(t) || !Ke(s) || !Ke(n)) return null
          var o = Gc({ h: Number(t), s: Number(s), l: Number(n), a: Number(r) })
          return jc(o)
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
          if (!Ke(t) || !Ke(s) || !Ke(n)) return null
          var o = (function (a) {
            return {
              h: kd(a.h),
              s: Ae(a.s, 0, 100),
              v: Ae(a.v, 0, 100),
              a: Ae(a.a),
            }
          })({ h: Number(t), s: Number(s), v: Number(n), a: Number(r) })
          return Bd(o)
        },
        'hsv',
      ],
    ],
  },
  Yc = function (e, t) {
    for (var s = 0; s < t.length; s++) {
      var n = t[s][0](e)
      if (n) return [n, t[s][1]]
    }
    return [null, void 0]
  },
  Nx = function (e) {
    return typeof e == 'string'
      ? Yc(e.trim(), Ho.string)
      : typeof e == 'object' && e !== null
      ? Yc(e, Ho.object)
      : [null, void 0]
  },
  so = function (e, t) {
    var s = ii(e)
    return { h: s.h, s: Ae(s.s + 100 * t, 0, 100), l: s.l, a: s.a }
  },
  no = function (e) {
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255
  },
  Xc = function (e, t) {
    var s = ii(e)
    return { h: s.h, s: s.s, l: Ae(s.l + 100 * t, 0, 100), a: s.a }
  },
  Go = (function () {
    function e(t) {
      ;(this.parsed = Nx(t)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 })
    }
    return (
      (e.prototype.isValid = function () {
        return this.parsed !== null
      }),
      (e.prototype.brightness = function () {
        return Dt(no(this.rgba), 2)
      }),
      (e.prototype.isDark = function () {
        return no(this.rgba) < 0.5
      }),
      (e.prototype.isLight = function () {
        return no(this.rgba) >= 0.5
      }),
      (e.prototype.toHex = function () {
        return (
          (t = eo(this.rgba)),
          (s = t.r),
          (n = t.g),
          (i = t.b),
          (o = (r = t.a) < 1 ? Di(Dt(255 * r)) : ''),
          '#' + Di(s) + Di(n) + Di(i) + o
        )
        var t, s, n, i, r, o
      }),
      (e.prototype.toRgb = function () {
        return eo(this.rgba)
      }),
      (e.prototype.toRgbString = function () {
        return (
          (t = eo(this.rgba)),
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
        return Wc(ii(this.rgba))
      }),
      (e.prototype.toHslString = function () {
        return (
          (t = Wc(ii(this.rgba))),
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
          (t = Ld(this.rgba)),
          { h: Dt(t.h), s: Dt(t.s), v: Dt(t.v), a: Dt(t.a, 3) }
        )
        var t
      }),
      (e.prototype.invert = function () {
        return De({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a,
        })
        var t
      }),
      (e.prototype.saturate = function (t) {
        return t === void 0 && (t = 0.1), De(so(this.rgba, t))
      }),
      (e.prototype.desaturate = function (t) {
        return t === void 0 && (t = 0.1), De(so(this.rgba, -t))
      }),
      (e.prototype.grayscale = function () {
        return De(so(this.rgba, -1))
      }),
      (e.prototype.lighten = function (t) {
        return t === void 0 && (t = 0.1), De(Xc(this.rgba, t))
      }),
      (e.prototype.darken = function (t) {
        return t === void 0 && (t = 0.1), De(Xc(this.rgba, -t))
      }),
      (e.prototype.rotate = function (t) {
        return t === void 0 && (t = 15), this.hue(this.hue() + t)
      }),
      (e.prototype.alpha = function (t) {
        return typeof t == 'number'
          ? De({ r: (s = this.rgba).r, g: s.g, b: s.b, a: t })
          : Dt(this.rgba.a, 3)
        var s
      }),
      (e.prototype.hue = function (t) {
        var s = ii(this.rgba)
        return typeof t == 'number'
          ? De({ h: t, s: s.s, l: s.l, a: s.a })
          : Dt(s.h)
      }),
      (e.prototype.isEqual = function (t) {
        return this.toHex() === De(t).toHex()
      }),
      e
    )
  })(),
  De = function (e) {
    return e instanceof Go ? e : new Go(e)
  },
  Kc = [],
  Dx = function (e) {
    e.forEach(function (t) {
      Kc.indexOf(t) < 0 && (t(Go, Ho), Kc.push(t))
    })
  }
function zx(e, t) {
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
Dx([zx])
const Sn = class Yn {
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
    if (t instanceof Yn)
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
    const [s, n, i, r] = Yn._temp.setValue(t)._components
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
        const a = Yn.HEX_PATTERN.exec(t)
        a && (t = `#${a[2]}`)
      }
      const o = De(t)
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
      t instanceof Yn ||
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
Sn.shared = new Sn()
Sn._temp = new Sn()
Sn.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i
let le = Sn
const Vx = { cullArea: null, cullable: !1, cullableChildren: !0 }
function Ux(e, t, s) {
  const n = e.length
  let i
  if (t >= n || s === 0) return
  s = t + s > n ? n - t : s
  const r = n - s
  for (i = t; i < r; ++i) e[i] = e[i + s]
  e.length = r
}
const Hx = {
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
      Ux(this.children, e, s)
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
class Gx {
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
class ja {
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
class Wx {
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
      this._poolsByClass.has(t) || this._poolsByClass.set(t, new ja(t)),
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
const Re = new Wx()
class jx {
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
const Wo = new jx()
Ee.handleByList(ot.MaskEffect, Wo._effectClasses)
const Yx = {
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
            Wo.returnMaskEffect(this._mask.effect),
            (this._mask.effect = null)),
          (this._mask.mask = e),
          e == null))
      )
        return
      const t = Wo.getMaskEffect(e)
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
          const n = Re.get(Gx)
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
  Xx = {
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
  qc = new Ct()
class We {
  constructor(t = 1 / 0, s = 1 / 0, n = -1 / 0, i = -1 / 0) {
    ;(this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.matrix = qc),
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
      (this.matrix = qc),
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
      x = a * t + h * s + u
    m < d && (d = m),
      x < f && (f = x),
      m > p && (p = m),
      x > g && (g = x),
      (m = o * n + l * s + c),
      (x = a * n + h * s + u),
      m < d && (d = m),
      x < f && (f = x),
      m > p && (p = m),
      x > g && (g = x),
      (m = o * t + l * i + c),
      (x = a * t + h * i + u),
      m < d && (d = m),
      x < f && (f = x),
      m > p && (p = m),
      x > g && (g = x),
      (m = o * n + l * i + c),
      (x = a * n + h * i + u),
      m < d && (d = m),
      x < f && (f = x),
      m > p && (p = m),
      x > g && (g = x),
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
    return new We(this.minX, this.minY, this.maxX, this.maxY)
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
        x = t[g + 1],
        y = h * m + u * x + f,
        v = c * m + d * x + p
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
const Qe = new ja(Ct),
  Cn = new ja(We)
function Od(e, t, s) {
  s.clear()
  let n, i
  return (
    e.parent
      ? t
        ? (n = e.parent.worldTransform)
        : ((i = Qe.get().identity()), (n = cr(e, i)))
      : (n = Ct.IDENTITY),
    Fd(e, s, n, t),
    i && Qe.return(i),
    s.isValid || s.set(0, 0, 0, 0),
    s
  )
}
function Fd(e, t, s, n) {
  var a, l
  if (!e.visible || !e.measurable) return
  let i
  n
    ? (i = e.worldTransform)
    : (e.updateLocalTransform(),
      (i = Qe.get()),
      i.appendFrom(e.localTransform, s))
  const r = t,
    o = !!e.effects.length
  if ((o && (t = Cn.get().clear()), e.boundsArea)) t.addRect(e.boundsArea, i)
  else {
    e.addBounds && ((t.matrix = i), e.addBounds(t))
    for (let h = 0; h < e.children.length; h++) Fd(e.children[h], t, i, n)
  }
  if (o) {
    for (let h = 0; h < e.effects.length; h++)
      (l = (a = e.effects[h]).addBounds) == null || l.call(a, t)
    r.addBounds(t, Ct.IDENTITY), Cn.return(t)
  }
  n || Qe.return(i)
}
function cr(e, t) {
  const s = e.parent
  return (
    s && (cr(s, t), s.updateLocalTransform(), t.append(s.localTransform)), t
  )
}
let io = 0
const Zc = 500
function Wt(...e) {
  io !== Zc &&
    (io++,
    io === Zc
      ? console.warn(
          'PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.',
        )
      : console.warn('PixiJS Warning: ', ...e))
}
function $d(e, t, s) {
  return (
    t.clear(),
    s || (s = Ct.IDENTITY),
    Nd(e, t, s, e, !0),
    t.isValid || t.set(0, 0, 0, 0),
    t
  )
}
function Nd(e, t, s, n, i) {
  var l, h
  let r
  if (i) (r = Qe.get()), (r = s.copyTo(r))
  else {
    if (!e.visible || !e.measurable) return
    e.updateLocalTransform()
    const c = e.localTransform
    ;(r = Qe.get()), r.appendFrom(c, s)
  }
  const o = t,
    a = !!e.effects.length
  if ((a && (t = Cn.get().clear()), e.boundsArea)) t.addRect(e.boundsArea, r)
  else {
    e.renderPipeId && ((t.matrix = r), e.addBounds(t))
    const c = e.children
    for (let u = 0; u < c.length; u++) Nd(c[u], t, r, n, !1)
  }
  if (a) {
    for (let c = 0; c < e.effects.length; c++)
      (h = (l = e.effects[c]).addLocalBounds) == null || h.call(l, t, n)
    o.addBounds(t, Ct.IDENTITY), Cn.return(t)
  }
  Qe.return(r)
}
function Dd(e, t) {
  const s = e.children
  for (let n = 0; n < s.length; n++) {
    const i = s[n],
      r = ((i.uid & 255) << 24) | (i._didChangeId & 16777215)
    t.data[t.index] !== r && ((t.data[t.index] = r), (t.didChange = !0)),
      t.index++,
      i.children.length && Dd(i, t)
  }
  return t.didChange
}
const Kx = new Ct(),
  qx = {
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
          localBounds: new We(),
        })
      const e = this._localBoundsCacheData
      return (
        (e.index = 1),
        (e.didChange = !1),
        e.data[0] !== this._didChangeId >> 12 &&
          ((e.didChange = !0), (e.data[0] = this._didChangeId >> 12)),
        Dd(this, e),
        e.didChange && $d(this, e.localBounds, Kx),
        e.localBounds
      )
    },
    getBounds(e, t) {
      return Od(this, e, t || new We())
    },
  },
  Zx = {
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
  Qx = {
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
      this.sortDirty && ((this.sortDirty = !1), this.children.sort(Jx))
    },
  }
function Jx(e, t) {
  return e._zIndex - t._zIndex
}
const tb = {
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
      const n = cr(this, new Ct())
      return n.append(this.localTransform), n.apply(e, t)
    }
    return this.worldTransform.apply(e, t)
  },
  toLocal(e, t, s, n) {
    if ((t && (e = t.toGlobal(e, s, n)), !n)) {
      this.updateLocalTransform()
      const i = cr(this, new Ct())
      return i.append(this.localTransform), i.applyInverse(e, s)
    }
    return this.worldTransform.applyInverse(e, s)
  },
}
class zd {
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
class eb {
  constructor(t) {
    ;(this.renderPipeId = 'renderGroup'),
      (this.root = null),
      (this.canBundle = !1),
      (this.renderGroupParent = null),
      (this.renderGroupChildren = []),
      (this._children = []),
      (this.worldTransform = new Ct()),
      (this.worldColorAlpha = 4294967295),
      (this.worldColor = 16777215),
      (this.worldAlpha = 1),
      (this.childrenToUpdate = Object.create(null)),
      (this.updateTick = 0),
      (this.childrenRenderablesToUpdate = { list: [], index: 0 }),
      (this.structureDidChange = !0),
      (this.instructionSet = new zd()),
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
function sb(e, t, s = {}) {
  for (const n in t) !s[n] && t[n] !== void 0 && (e[n] = t[n])
}
const ro = new oe(null),
  oo = new oe(null),
  ao = new oe(null, 1, 1),
  Qc = 1,
  nb = 2,
  lo = 4
class Yt extends ns {
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
      (this.localTransform = new Ct()),
      (this.relativeGroupTransform = new Ct()),
      (this.groupTransform = this.relativeGroupTransform),
      (this.destroyed = !1),
      (this._position = new oe(this, 0, 0)),
      (this._scale = ao),
      (this._pivot = oo),
      (this._skew = ro),
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
      sb(this, t, { children: !0, parent: !0, effects: !0 }),
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
    if ((t && t.removeChild(this), (this.renderGroup = new eb(this)), t)) {
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
    this._updateIsSimple(), (this.groupTransform = Ct.IDENTITY)
  }
  _updateIsSimple() {
    this.isSimple = !this.isRenderGroupRoot && this.effects.length === 0
  }
  get worldTransform() {
    return (
      this._worldTransform || (this._worldTransform = new Ct()),
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
    return this.rotation * wx
  }
  set angle(t) {
    this.rotation = t * Ax
  }
  get pivot() {
    return this._pivot === oo && (this._pivot = new oe(this, 0, 0)), this._pivot
  }
  set pivot(t) {
    this._pivot === oo && (this._pivot = new oe(this, 0, 0)),
      typeof t == 'number' ? this._pivot.set(t) : this._pivot.copyFrom(t)
  }
  get skew() {
    return this._skew === ro && (this._skew = new oe(this, 0, 0)), this._skew
  }
  set skew(t) {
    this._skew === ro && (this._skew = new oe(this, 0, 0)),
      this._skew.copyFrom(t)
  }
  get scale() {
    return this._scale === ao && (this._scale = new oe(this, 1, 1)), this._scale
  }
  set scale(t) {
    this._scale === ao && (this._scale = new oe(this, 0, 0)),
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
      ((this.localAlpha = t), (this._updateFlags |= Qc), this._onUpdate())
  }
  get alpha() {
    return this.localAlpha
  }
  set tint(t) {
    const n = le.shared.setValue(t ?? 16777215).toBgrNumber()
    n !== this.localColor &&
      ((this.localColor = n), (this._updateFlags |= Qc), this._onUpdate())
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
      (this._updateFlags |= nb),
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
      (this._updateFlags |= lo),
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
      (this._updateFlags |= lo),
      (this.localDisplayStatus ^= 4),
      this._onUpdate())
  }
  get renderable() {
    return !!(this.localDisplayStatus & 1)
  }
  set renderable(t) {
    const s = t ? 1 : 0
    ;(this.localDisplayStatus & 1) !== s &&
      ((this._updateFlags |= lo),
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
Yt.mixin(Hx)
Yt.mixin(tb)
Yt.mixin(Zx)
Yt.mixin(qx)
Yt.mixin(Yx)
Yt.mixin(Xx)
Yt.mixin(Qx)
Yt.mixin(Vx)
class As extends Yt {
  constructor(t = Pt.EMPTY) {
    t instanceof Pt && (t = { texture: t })
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
    return t instanceof Pt ? new As(t) : new As(Pt.from(t, s))
  }
  set texture(t) {
    t || (t = Pt.EMPTY)
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
    Rx(this._bounds, this._anchor, this._texture, 0)
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
const ib = new We()
function Vd(e, t, s) {
  const n = ib
  ;(e.measurable = !0), Od(e, s, n), t.addBoundsMask(n), (e.measurable = !1)
}
function Ud(e, t, s) {
  const n = Cn.get()
  e.measurable = !0
  const i = Qe.get().identity(),
    r = Hd(e, s, i)
  $d(e, n, r),
    (e.measurable = !1),
    t.addBoundsMask(n),
    Qe.return(i),
    Cn.return(n)
}
function Hd(e, t, s) {
  return e
    ? (e !== t &&
        (Hd(e.parent, t, s),
        e.updateLocalTransform(),
        s.append(e.localTransform)),
      s)
    : (Wt('Mask bounds, renderable is not inside the root container'), s)
}
class Gd {
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
    Vd(this.mask, t, s)
  }
  addLocalBounds(t, s) {
    Ud(this.mask, t, s)
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
Gd.extension = ot.MaskEffect
class Wd {
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
Wd.extension = ot.MaskEffect
class jd {
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
    Vd(this.mask, t, s)
  }
  addLocalBounds(t, s) {
    Ud(this.mask, t, s)
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
jd.extension = ot.MaskEffect
const rb = {
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
let Jc = rb
const jt = {
  get() {
    return Jc
  },
  set(e) {
    Jc = e
  },
}
class Yd extends Es {
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
Yd.extension = ot.TextureSource
class Si extends Es {
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
Si.extension = ot.TextureSource
var jo = ((e) => (
  (e[(e.INTERACTION = 50)] = 'INTERACTION'),
  (e[(e.HIGH = 25)] = 'HIGH'),
  (e[(e.NORMAL = 0)] = 'NORMAL'),
  (e[(e.LOW = -25)] = 'LOW'),
  (e[(e.UTILITY = -50)] = 'UTILITY'),
  e
))(jo || {})
class co {
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
const Xd = class ue {
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
      (this._head = new co(null, null, 1 / 0)),
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
  add(t, s, n = jo.NORMAL) {
    return this._addListener(new co(t, s, n))
  }
  addOnce(t, s, n = jo.NORMAL) {
    return this._addListener(new co(t, s, n, !0))
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
Xd.targetFPMS = 0.06
let zi = Xd,
  ho
async function Kd() {
  return (
    ho ??
      (ho = (async () => {
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
    ho
  )
}
const Lr = class qd extends Es {
  constructor(t) {
    super(t),
      (this.isReady = !1),
      (this.uploadMethodId = 'video'),
      (t = { ...qd.defaultOptions, ...t }),
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
        const t = zi.shared.elapsedMS * this.resource.playbackRate
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
      (this.alphaMode = await Kd()),
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
            (zi.shared.remove(this.updateFrame, this),
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
            (zi.shared.add(this.updateFrame, this),
            (this._isConnectedToTicker = !0),
            (this._msToNextUpdate = 0)))
      : (this._videoFrameRequestCallbackHandle !== null &&
          (this.resource.cancelVideoFrameCallback(
            this._videoFrameRequestCallbackHandle,
          ),
          (this._videoFrameRequestCallbackHandle = null)),
        this._isConnectedToTicker &&
          (zi.shared.remove(this.updateFrame, this),
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
Lr.extension = ot.TextureSource
Lr.defaultOptions = {
  ...Es.defaultOptions,
  autoLoad: !0,
  autoPlay: !0,
  updateFPS: 0,
  crossorigin: !0,
  loop: !1,
  muted: !0,
  playsinline: !0,
  preload: !1,
}
Lr.MIME_TYPES = { ogv: 'video/ogg', mov: 'video/quicktime', m4v: 'video/mp4' }
let qi = Lr
const ke = (e, t, s = !1) => (
  Array.isArray(e) || (e = [e]),
  t ? e.map((n) => (typeof n == 'string' || s ? t(n) : n)) : e
)
class ob {
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
const ee = new ob(),
  Yo = []
Ee.handleByList(ot.TextureSource, Yo)
function ab(e = {}) {
  const t = e && e.resource,
    s = t ? e.resource : e,
    n = t ? e : { resource: e }
  for (let i = 0; i < Yo.length; i++) {
    const r = Yo[i]
    if (r.test(s)) return new r(n)
  }
  throw new Error(`Could not find a source type for resource: ${n.resource}`)
}
function lb(e = {}, t = !1) {
  const s = e && e.resource,
    n = s ? e.resource : e,
    i = s ? e : { resource: e }
  if (!t && ee.has(n)) return ee.get(n)
  const r = new Pt({ source: ab(i) })
  return (
    r.on('destroy', () => {
      ee.has(n) && ee.remove(n)
    }),
    t || ee.set(n, r),
    r
  )
}
function cb(e, t = !1) {
  return typeof e == 'string'
    ? ee.get(e)
    : e instanceof Es
    ? new Pt({ source: e })
    : lb(e, t)
}
Pt.from = cb
Ee.add(Gd, Wd, jd, qi, Si, Yd, Wa)
var Qs = ((e) => (
  (e[(e.Low = 0)] = 'Low'),
  (e[(e.Normal = 1)] = 'Normal'),
  (e[(e.High = 2)] = 'High'),
  e
))(Qs || {})
function Ie(e) {
  if (typeof e != 'string')
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)
}
function Vn(e) {
  return e.split('?')[0].split('#')[0]
}
function hb(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function ub(e, t, s) {
  return e.replace(new RegExp(hb(t), 'g'), s)
}
function db(e, t) {
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
const je = {
  toPosix(e) {
    return ub(e, '\\', '/')
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
    const n = Vn(this.toPosix(t ?? jt.get().getBaseUrl())),
      i = Vn(this.toPosix(s ?? this.rootname(n)))
    return (
      (e = this.toPosix(e)),
      e.startsWith('/')
        ? je.join(i, e.slice(1))
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
    return (e = db(e, !1)), e.length > 0 && n && (e += '/'), s ? `/${e}` : t + e
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
    Ie(e), t && Ie(t), (e = Vn(this.toPosix(e)))
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
    Ie(e), (e = Vn(this.toPosix(e)))
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
    e = Vn(this.toPosix(e))
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
function Zd(e, t, s, n, i) {
  const r = t[s]
  for (let o = 0; o < r.length; o++) {
    const a = r[o]
    s < t.length - 1
      ? Zd(e.replace(n[s], a), t, s + 1, n, i)
      : i.push(e.replace(n[s], a))
  }
}
function fb(e) {
  const t = /\{(.*?)\}/g,
    s = e.match(t),
    n = []
  if (s) {
    const i = []
    s.forEach((r) => {
      const o = r.substring(1, r.length - 1).split(',')
      i.push(o)
    }),
      Zd(e, i, 0, s, n)
  } else n.push(e)
  return n
}
const hr = (e) => !Array.isArray(e)
class Rn {
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
            typeof f == 'string' ? fb(f) : Array.isArray(f) ? f : [f],
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
                const x = this._parsers[m]
                if (x.test(p)) {
                  g = x.parse(p)
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
    const s = hr(t)
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
    const s = hr(t)
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
        (t.src = je.toAbsolute(t.src, this._basePath, this._rootPath)),
      (t.alias = n ?? t.alias ?? [t.src]),
      (t.src = this._appendDefaultSearchParams(t.src)),
      (t.data = { ...(i || {}), ...t.data }),
      (t.loadParser = r ?? t.loadParser),
      (t.format = o ?? t.format ?? pb(t.src)),
      t
    )
  }
}
Rn.RETINA_PREFIX = /@([0-9\.]+)x/
function pb(e) {
  return e.split('.').pop().split('?').shift().split('#').shift()
}
const th = (e, t) => {
    const s = t.split('?')[1]
    return s && (e += `?${s}`), e
  },
  Qd = class Xn {
    constructor(t, s) {
      ;(this.linkedSheets = []),
        (this._texture = t instanceof Pt ? t : null),
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
          this._frameKeys.length <= Xn.BATCH_SIZE
            ? (this._processFrames(0),
              this._processAnimations(),
              this._parseComplete())
            : this._nextBatch()
      })
    }
    _processFrames(t) {
      let s = t
      const n = Xn.BATCH_SIZE
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
            (this.textures[i] = new Pt({
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
      this._processFrames(this._batchIndex * Xn.BATCH_SIZE),
        this._batchIndex++,
        setTimeout(() => {
          this._batchIndex * Xn.BATCH_SIZE < this._frameKeys.length
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
Qd.BATCH_SIZE = 1e3
let eh = Qd
const mb = [
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
function Jd(e, t, s) {
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
    const i = je.dirname(e[0])
    t.linkedSheets.forEach((r, o) => {
      const a = Jd([`${i}/${t.data.meta.related_multi_packs[o]}`], r, !0)
      Object.assign(n, a)
    })
  }
  return n
}
const gb = {
  extension: ot.Asset,
  cache: {
    test: (e) => e instanceof eh,
    getCacheableAssets: (e, t) => Jd(e, t, !1),
  },
  resolver: {
    test: (e) => {
      const s = e.split('?')[0].split('.'),
        n = s.pop(),
        i = s.pop()
      return n === 'json' && mb.includes(i)
    },
    parse: (e) => {
      var s
      const t = e.split('.')
      return {
        resolution: parseFloat(
          ((s = Rn.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) ?? '1',
        ),
        format: t[t.length - 2],
        src: e,
      }
    },
  },
  loader: {
    name: 'spritesheetLoader',
    extension: { type: ot.LoadParser, priority: Qs.Normal },
    async testParse(e, t) {
      return je.extname(t.src).toLowerCase() === '.json' && !!e.frames
    },
    async parse(e, t, s) {
      var h, c
      const { texture: n, imageFilename: i } =
        (t == null ? void 0 : t.data) ?? {}
      let r = je.dirname(t.src)
      r && r.lastIndexOf('/') !== r.length - 1 && (r += '/')
      let o
      if (n instanceof Pt) o = n
      else {
        const u = th(r + (i ?? e.meta.image), t.src)
        o = (await s.load([u]))[u]
      }
      const a = new eh(o.source, e)
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
            ((p = th(p, t.src)),
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
Ee.add(gb)
class _b {
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
const Xo = []
Ee.handleByNamedList(ot.Environment, Xo)
async function yb(e) {
  if (e)
    for (let t = 0; t < Xo.length; t++) {
      const s = Xo[t]
      if (s.value.test()) {
        await s.value.load()
        return
      }
    }
}
let Un
function xb() {
  if (typeof Un == 'boolean') return Un
  try {
    Un =
      new Function(
        'param1',
        'param2',
        'param3',
        'return param1[param2] === param3;',
      )({ a: 'b' }, 'a', 'b') === !0
  } catch {
    Un = !1
  }
  return Un
}
var Ya = { exports: {} }
Ya.exports = Br
Ya.exports.default = Br
function Br(e, t, s) {
  s = s || 2
  var n = t && t.length,
    i = n ? t[0] * s : e.length,
    r = tf(e, 0, i, s, !0),
    o = []
  if (!r || r.next === r.prev) return o
  var a, l, h, c, u, d, f
  if ((n && (r = Sb(e, t, r, s)), e.length > 80 * s)) {
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
  return gi(r, o, s, a, l, f, 0), o
}
function tf(e, t, s, n, i) {
  var r, o
  if (i === Zo(e, t, s, n) > 0)
    for (r = t; r < s; r += n) o = sh(r, e[r], e[r + 1], o)
  else for (r = s - n; r >= t; r -= n) o = sh(r, e[r], e[r + 1], o)
  return o && Or(o, o.next) && (yi(o), (o = o.next)), o
}
function js(e, t) {
  if (!e) return e
  t || (t = e)
  var s = e,
    n
  do
    if (
      ((n = !1), !s.steiner && (Or(s, s.next) || kt(s.prev, s, s.next) === 0))
    ) {
      if ((yi(s), (s = t = s.prev), s === s.next)) break
      n = !0
    } else s = s.next
  while (n || s !== t)
  return t
}
function gi(e, t, s, n, i, r, o) {
  if (e) {
    !o && r && Mb(e, n, i, r)
    for (var a = e, l, h; e.prev !== e.next; ) {
      if (((l = e.prev), (h = e.next), r ? vb(e, n, i, r) : bb(e))) {
        t.push((l.i / s) | 0),
          t.push((e.i / s) | 0),
          t.push((h.i / s) | 0),
          yi(e),
          (e = h.next),
          (a = h.next)
        continue
      }
      if (((e = h), e === a)) {
        o
          ? o === 1
            ? ((e = wb(js(e), t, s)), gi(e, t, s, n, i, r, 2))
            : o === 2 && Ab(e, t, s, n, i, r)
          : gi(js(e), t, s, n, i, r, 1)
        break
      }
    }
  }
}
function bb(e) {
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
      on(i, a, r, l, o, h, p.x, p.y) &&
      kt(p.prev, p, p.next) >= 0
    )
      return !1
    p = p.next
  }
  return !0
}
function vb(e, t, s, n) {
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
      x = Ko(f, p, t, s, n),
      y = Ko(g, m, t, s, n),
      v = e.prevZ,
      w = e.nextZ;
    v && v.z >= x && w && w.z <= y;

  ) {
    if (
      (v.x >= f &&
        v.x <= g &&
        v.y >= p &&
        v.y <= m &&
        v !== i &&
        v !== o &&
        on(a, c, l, u, h, d, v.x, v.y) &&
        kt(v.prev, v, v.next) >= 0) ||
      ((v = v.prevZ),
      w.x >= f &&
        w.x <= g &&
        w.y >= p &&
        w.y <= m &&
        w !== i &&
        w !== o &&
        on(a, c, l, u, h, d, w.x, w.y) &&
        kt(w.prev, w, w.next) >= 0)
    )
      return !1
    w = w.nextZ
  }
  for (; v && v.z >= x; ) {
    if (
      v.x >= f &&
      v.x <= g &&
      v.y >= p &&
      v.y <= m &&
      v !== i &&
      v !== o &&
      on(a, c, l, u, h, d, v.x, v.y) &&
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
      on(a, c, l, u, h, d, w.x, w.y) &&
      kt(w.prev, w, w.next) >= 0
    )
      return !1
    w = w.nextZ
  }
  return !0
}
function wb(e, t, s) {
  var n = e
  do {
    var i = n.prev,
      r = n.next.next
    !Or(i, r) &&
      ef(i, n, n.next, r) &&
      _i(i, r) &&
      _i(r, i) &&
      (t.push((i.i / s) | 0),
      t.push((n.i / s) | 0),
      t.push((r.i / s) | 0),
      yi(n),
      yi(n.next),
      (n = e = r)),
      (n = n.next)
  } while (n !== e)
  return js(n)
}
function Ab(e, t, s, n, i, r) {
  var o = e
  do {
    for (var a = o.next.next; a !== o.prev; ) {
      if (o.i !== a.i && kb(o, a)) {
        var l = sf(o, a)
        ;(o = js(o, o.next)),
          (l = js(l, l.next)),
          gi(o, t, s, n, i, r, 0),
          gi(l, t, s, n, i, r, 0)
        return
      }
      a = a.next
    }
    o = o.next
  } while (o !== e)
}
function Sb(e, t, s, n) {
  var i = [],
    r,
    o,
    a,
    l,
    h
  for (r = 0, o = t.length; r < o; r++)
    (a = t[r] * n),
      (l = r < o - 1 ? t[r + 1] * n : e.length),
      (h = tf(e, a, l, n, !1)),
      h === h.next && (h.steiner = !0),
      i.push(Rb(h))
  for (i.sort(Cb), r = 0; r < i.length; r++) s = Eb(i[r], s)
  return s
}
function Cb(e, t) {
  return e.x - t.x
}
function Eb(e, t) {
  var s = Pb(e, t)
  if (!s) return t
  var n = sf(s, e)
  return js(n, n.next), js(s, s.next)
}
function Pb(e, t) {
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
      on(i < c ? n : r, i, h, c, i < c ? r : n, i, s.x, s.y) &&
      ((d = Math.abs(i - s.y) / (n - s.x)),
      _i(s, e) &&
        (d < u || (d === u && (s.x > o.x || (s.x === o.x && Tb(o, s))))) &&
        ((o = s), (u = d))),
      (s = s.next)
  while (s !== l)
  return o
}
function Tb(e, t) {
  return kt(e.prev, e, t.prev) < 0 && kt(t.next, e, e.next) < 0
}
function Mb(e, t, s, n) {
  var i = e
  do
    i.z === 0 && (i.z = Ko(i.x, i.y, t, s, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next)
  while (i !== e)
  ;(i.prevZ.nextZ = null), (i.prevZ = null), Ib(i)
}
function Ib(e) {
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
function Ko(e, t, s, n, i) {
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
function Rb(e) {
  var t = e,
    s = e
  do (t.x < s.x || (t.x === s.x && t.y < s.y)) && (s = t), (t = t.next)
  while (t !== e)
  return s
}
function on(e, t, s, n, i, r, o, a) {
  return (
    (i - o) * (t - a) >= (e - o) * (r - a) &&
    (e - o) * (n - a) >= (s - o) * (t - a) &&
    (s - o) * (r - a) >= (i - o) * (n - a)
  )
}
function kb(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !Lb(e, t) &&
    ((_i(e, t) &&
      _i(t, e) &&
      Bb(e, t) &&
      (kt(e.prev, e, t.prev) || kt(e, t.prev, t))) ||
      (Or(e, t) && kt(e.prev, e, e.next) > 0 && kt(t.prev, t, t.next) > 0))
  )
}
function kt(e, t, s) {
  return (t.y - e.y) * (s.x - t.x) - (t.x - e.x) * (s.y - t.y)
}
function Or(e, t) {
  return e.x === t.x && e.y === t.y
}
function ef(e, t, s, n) {
  var i = Ui(kt(e, t, s)),
    r = Ui(kt(e, t, n)),
    o = Ui(kt(s, n, e)),
    a = Ui(kt(s, n, t))
  return !!(
    (i !== r && o !== a) ||
    (i === 0 && Vi(e, s, t)) ||
    (r === 0 && Vi(e, n, t)) ||
    (o === 0 && Vi(s, e, n)) ||
    (a === 0 && Vi(s, t, n))
  )
}
function Vi(e, t, s) {
  return (
    t.x <= Math.max(e.x, s.x) &&
    t.x >= Math.min(e.x, s.x) &&
    t.y <= Math.max(e.y, s.y) &&
    t.y >= Math.min(e.y, s.y)
  )
}
function Ui(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0
}
function Lb(e, t) {
  var s = e
  do {
    if (
      s.i !== e.i &&
      s.next.i !== e.i &&
      s.i !== t.i &&
      s.next.i !== t.i &&
      ef(s, s.next, e, t)
    )
      return !0
    s = s.next
  } while (s !== e)
  return !1
}
function _i(e, t) {
  return kt(e.prev, e, e.next) < 0
    ? kt(e, t, e.next) >= 0 && kt(e, e.prev, t) >= 0
    : kt(e, t, e.prev) < 0 || kt(e, e.next, t) < 0
}
function Bb(e, t) {
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
function sf(e, t) {
  var s = new qo(e.i, e.x, e.y),
    n = new qo(t.i, t.x, t.y),
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
function sh(e, t, s, n) {
  var i = new qo(e, t, s)
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  )
}
function yi(e) {
  ;(e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ)
}
function qo(e, t, s) {
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
Br.deviation = function (e, t, s, n) {
  var i = t && t.length,
    r = i ? t[0] * s : e.length,
    o = Math.abs(Zo(e, 0, r, s))
  if (i)
    for (var a = 0, l = t.length; a < l; a++) {
      var h = t[a] * s,
        c = a < l - 1 ? t[a + 1] * s : e.length
      o -= Math.abs(Zo(e, h, c, s))
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
function Zo(e, t, s, n) {
  for (var i = 0, r = t, o = s - n; r < s; r += n)
    (i += (e[o] - e[r]) * (e[r + 1] + e[o + 1])), (o = r)
  return i
}
Br.flatten = function (e) {
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
var Ob = Ya.exports
const Fb = Va(Ob)
var nf = ((e) => (
  (e[(e.NONE = 0)] = 'NONE'),
  (e[(e.COLOR = 16384)] = 'COLOR'),
  (e[(e.STENCIL = 1024)] = 'STENCIL'),
  (e[(e.DEPTH = 256)] = 'DEPTH'),
  (e[(e.COLOR_DEPTH = 16640)] = 'COLOR_DEPTH'),
  (e[(e.COLOR_STENCIL = 17408)] = 'COLOR_STENCIL'),
  (e[(e.DEPTH_STENCIL = 1280)] = 'DEPTH_STENCIL'),
  (e[(e.ALL = 17664)] = 'ALL'),
  e
))(nf || {})
class $b {
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
const Nb = [
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
  rf = class of extends ns {
    constructor(t) {
      super(),
        (this.runners = Object.create(null)),
        (this.renderPipes = Object.create(null)),
        (this._initOptions = {}),
        (this._systemsHash = Object.create(null)),
        (this.type = t.type),
        (this.name = t.name)
      const s = [...Nb, ...(t.runners ?? [])]
      this._addRunners(...s),
        this._addSystems(t.systems),
        this._addPipes(t.renderPipes, t.renderPipeAdaptors),
        this._unsafeEvalCheck()
    }
    async init(t = {}) {
      for (const s in this._systemsHash)
        t = { ...this._systemsHash[s].constructor.defaultOptions, ...t }
      ;(t = { ...of.defaultOptions, ...t }),
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
        t.clear ?? (t.clear = nf.ALL)
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
        this.runners[s] = new $b(s)
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
      if (!xb())
        throw new Error(
          'Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.',
        )
    }
  }
rf.defaultOptions = {
  resolution: 1,
  failIfMajorPerformanceCaveat: !1,
  roundPixels: !1,
}
let af = rf,
  Hi
function Db(e) {
  return (
    Hi !== void 0 ||
      (Hi = (() => {
        var s
        const t = {
          stencil: !0,
          failIfMajorPerformanceCaveat:
            e ?? af.defaultOptions.failIfMajorPerformanceCaveat,
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
    Hi
  )
}
let Gi
async function zb(e = {}) {
  return (
    Gi !== void 0 ||
      (Gi = await (async () => {
        if (!jt.get().getNavigator().gpu) return !1
        try {
          return (
            await (await navigator.gpu.requestAdapter(e)).requestDevice(), !0
          )
        } catch {
          return !1
        }
      })()),
    Gi
  )
}
const nh = ['webgl', 'webgpu', 'canvas']
async function Vb(e) {
  let t = []
  e.preference
    ? (t.push(e.preference),
      nh.forEach((r) => {
        r !== e.preference && t.push(r)
      }))
    : (t = nh.slice())
  let s
  await yb(e.manageImports ?? !0)
  let n = {}
  for (let r = 0; r < t.length; r++) {
    const o = t[r]
    if (o === 'webgpu' && (await zb())) {
      const { WebGPURenderer: a } = await xs(
        () => import('./WebGPURenderer-d34140c1.js'),
        [
          './WebGPURenderer-d34140c1.js',
          './colorToUniform-74a8c3f8.js',
          './SharedSystems-809b6875.js',
          './CanvasPool-93ca5665.js',
        ],
        import.meta.url,
      )
      ;(s = a), (n = { ...e, ...e.webgpu })
      break
    } else if (
      o === 'webgl' &&
      Db(
        e.failIfMajorPerformanceCaveat ??
          af.defaultOptions.failIfMajorPerformanceCaveat,
      )
    ) {
      const { WebGLRenderer: a } = await xs(
        () => import('./WebGLRenderer-3a5931d0.js'),
        [
          './WebGLRenderer-3a5931d0.js',
          './colorToUniform-74a8c3f8.js',
          './batchSamplersUniformGroup-75cefaca.js',
          './SharedSystems-809b6875.js',
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
const lf = class Qo {
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
      (this.renderer = await Vb(t)),
      Qo._plugins.forEach((s) => {
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
    const n = Qo._plugins.slice(0)
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
lf._plugins = []
let cf = lf
Ee.handleByList(ot.Application, cf._plugins)
class Ub {
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
const Hb = {
  extension: ot.CacheParser,
  test: (e) => Array.isArray(e) && e.every((t) => t instanceof Pt),
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
async function hf(e) {
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
const Gb = {
    extension: { type: ot.DetectionParser, priority: 1 },
    test: async () =>
      hf(
        'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
      ),
    add: async (e) => [...e, 'avif'],
    remove: async (e) => e.filter((t) => t !== 'avif'),
  },
  ih = ['png', 'jpg', 'jpeg'],
  Wb = {
    extension: { type: ot.DetectionParser, priority: -1 },
    test: () => Promise.resolve(!0),
    add: async (e) => [...e, ...ih],
    remove: async (e) => e.filter((t) => !ih.includes(t)),
  },
  jb =
    'WorkerGlobalScope' in globalThis &&
    globalThis instanceof globalThis.WorkerGlobalScope
function Xa(e) {
  return jb ? !1 : document.createElement('video').canPlayType(e) !== ''
}
const Yb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () => Xa('video/mp4'),
    add: async (e) => [...e, 'mp4', 'm4v'],
    remove: async (e) => e.filter((t) => t !== 'mp4' && t !== 'm4v'),
  },
  Xb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () => Xa('video/ogg'),
    add: async (e) => [...e, 'ogv'],
    remove: async (e) => e.filter((t) => t !== 'ogv'),
  },
  Kb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () => Xa('video/webm'),
    add: async (e) => [...e, 'webm'],
    remove: async (e) => e.filter((t) => t !== 'webm'),
  },
  qb = {
    extension: { type: ot.DetectionParser, priority: 0 },
    test: async () =>
      hf(
        'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
      ),
    add: async (e) => [...e, 'webp'],
    remove: async (e) => e.filter((t) => t !== 'webp'),
  }
class Zb {
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
      r = hr(t),
      o = ke(t, (h) => ({ alias: [h], src: h })),
      a = o.length,
      l = o.map(async (h) => {
        const c = je.toAbsolute(h.src)
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
      const r = je.toAbsolute(i.src),
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
function kn(e, t) {
  if (Array.isArray(t)) {
    for (const s of t) if (e.startsWith(`data:${s}`)) return !0
    return !1
  }
  return e.startsWith(`data:${t}`)
}
function Ln(e, t) {
  const s = e.split('?')[0],
    n = je.extname(s).toLowerCase()
  return Array.isArray(t) ? t.includes(n) : n === t
}
const Qb = '.json',
  Jb = 'application/json',
  tv = {
    extension: { type: ot.LoadParser, priority: Qs.Low },
    name: 'loadJson',
    test(e) {
      return kn(e, Jb) || Ln(e, Qb)
    },
    async load(e) {
      return await (await jt.get().fetch(e)).json()
    },
  },
  ev = '.txt',
  sv = 'text/plain',
  nv = {
    name: 'loadTxt',
    extension: { type: ot.LoadParser, priority: Qs.Low },
    test(e) {
      return kn(e, sv) || Ln(e, ev)
    },
    async load(e) {
      return await (await jt.get().fetch(e)).text()
    },
  },
  iv = [
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
  rv = ['.ttf', '.otf', '.woff', '.woff2'],
  ov = ['font/ttf', 'font/otf', 'font/woff', 'font/woff2'],
  av = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i
function lv(e) {
  const t = je.extname(e),
    i = je
      .basename(e, t)
      .replace(/(-|_)/g, ' ')
      .toLowerCase()
      .split(' ')
      .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
  let r = i.length > 0
  for (const a of i)
    if (!a.match(av)) {
      r = !1
      break
    }
  let o = i.join(' ')
  return r || (o = `"${o.replace(/[\\"]/g, '\\$&')}"`), o
}
const cv = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/
function hv(e) {
  return cv.test(e) ? e : encodeURI(e)
}
const uv = {
  extension: { type: ot.LoadParser, priority: Qs.Low },
  name: 'loadWebFont',
  test(e) {
    return kn(e, ov) || Ln(e, rv)
  },
  async load(e, t) {
    var n, i, r
    const s = jt.get().getFontFaceSet()
    if (s) {
      const o = [],
        a = ((n = t.data) == null ? void 0 : n.family) ?? lv(e),
        l = ((r = (i = t.data) == null ? void 0 : i.weights) == null
          ? void 0
          : r.filter((c) => iv.includes(c))) ?? ['normal'],
        h = t.data ?? {}
      for (let c = 0; c < l.length; c++) {
        const u = l[c],
          d = new FontFace(a, `url(${hv(e)})`, { ...h, weight: u })
        await d.load(), s.add(d), o.push(d)
      }
      return (
        ee.set(`${a}-and-url`, { url: e, fontFaces: o }),
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
      ee.remove(t.family), jt.get().getFontFaceSet().delete(t)
    })
  },
}
var dv = pv,
  uo = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
  fv = /([astvzqmhlc])([^astvzqmhlc]*)/gi
function pv(e) {
  var t = []
  return (
    e.replace(fv, function (s, n, i) {
      var r = n.toLowerCase()
      for (
        i = gv(i),
          r == 'm' &&
            i.length > 2 &&
            (t.push([n].concat(i.splice(0, 2))),
            (r = 'l'),
            (n = n == 'm' ? 'l' : 'L'));
        ;

      ) {
        if (i.length == uo[r]) return i.unshift(n), t.push(i)
        if (i.length < uo[r]) throw new Error('malformed path data')
        t.push([n].concat(i.splice(0, uo[r])))
      }
    }),
    t
  )
}
var mv = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi
function gv(e) {
  var t = e.match(mv)
  return t ? t.map(Number) : []
}
const _v = Va(dv)
function yv(e, t) {
  const s = _v(e),
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
class Ka {
  constructor(t = 0, s = 0, n = 0) {
    ;(this.type = 'circle'), (this.x = t), (this.y = s), (this.radius = n)
  }
  clone() {
    return new Ka(this.x, this.y, this.radius)
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
class qa {
  constructor(t = 0, s = 0, n = 0, i = 0) {
    ;(this.type = 'ellipse'),
      (this.x = t),
      (this.y = s),
      (this.halfWidth = n),
      (this.halfHeight = i)
  }
  clone() {
    return new qa(this.x, this.y, this.halfWidth, this.halfHeight)
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
function xv(e, t, s, n, i, r) {
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
class ri {
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
      s = new ri(t)
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
      if (xv(t, s, h, c, u, d) <= r) return !0
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
const Wi = (e, t, s, n, i, r) => {
  const o = e - s,
    a = t - n,
    l = Math.sqrt(o * o + a * a)
  return l >= i - r && l <= i + r
}
class Za {
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
    return new Za(this.x, this.y, this.width, this.height, this.radius)
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
      : (t < c && s < u && Wi(t, s, c, u, l, h)) ||
          (t > p - l && s < u && Wi(t, s, p - l, u, l, h)) ||
          (t > p - l && s > g - l && Wi(t, s, p - l, g - l, l, h)) ||
          (t < c && s > g - l && Wi(t, s, c, g - l, l, h))
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
class xi extends ns {
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
function uf(e, t) {
  if (!(e instanceof xi)) {
    let s = t ? ae.INDEX : ae.VERTEX
    e instanceof Array &&
      (t
        ? ((e = new Uint32Array(e)), (s = ae.INDEX | ae.COPY_DST))
        : ((e = new Float32Array(e)), (s = ae.VERTEX | ae.COPY_DST))),
      (e = new xi({
        data: e,
        label: t ? 'index-mesh-buffer' : 'vertex-mesh-buffer',
        usage: s,
      }))
  }
  return e
}
function bv(e, t, s) {
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
function vv(e) {
  return (
    (e instanceof xi || Array.isArray(e) || e.BYTES_PER_ELEMENT) &&
      (e = { buffer: e }),
    (e.buffer = uf(e.buffer, !1)),
    e
  )
}
class wv extends ns {
  constructor(t) {
    const { attributes: s, indexBuffer: n, topology: i } = t
    super(),
      (this.uid = Gt('geometry')),
      (this._layoutKey = 0),
      (this.instanceCount = 1),
      (this._bounds = new We()),
      (this._boundsDirty = !0),
      (this.attributes = s),
      (this.buffers = []),
      (this.instanceCount = t.instanceCount || 1)
    for (const r in s) {
      const o = (s[r] = vv(s[r]))
      this.buffers.indexOf(o.buffer) === -1 &&
        (this.buffers.push(o.buffer),
        o.buffer.on('update', this.onBufferUpdate, this),
        o.buffer.on('change', this.onBufferUpdate, this))
    }
    n && ((this.indexBuffer = uf(n, !0)), this.buffers.push(this.indexBuffer)),
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
      ? ((this._boundsDirty = !1), bv(this, 'aPosition', this._bounds))
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
const Av = new Float32Array(1),
  Sv = new Uint32Array(1)
class Cv extends wv {
  constructor() {
    const s = new xi({
        data: Av,
        label: 'attribute-batch-buffer',
        usage: ae.VERTEX | ae.COPY_DST,
        shrinkToFit: !1,
      }),
      n = new xi({
        data: Sv,
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
const df = 16,
  ff = {}
function Ev(e, t) {
  let s = 0
  for (let n = 0; n < t; n++) s = (s * 31 + e[n].uid) >>> 0
  return ff[s] || Pv(e, s)
}
function Pv(e, t) {
  const s = {}
  let n = 0
  for (let r = 0; r < df; r++) {
    const o = r < e.length ? e[r] : Pt.EMPTY.source
    ;(s[n++] = o.source), (s[n++] = o.style)
  }
  const i = new _b(s)
  return (ff[t] = i), i
}
class rh {
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
function oh(e, t) {
  const s = (e.byteLength / 8) | 0,
    n = new Float64Array(e, 0, s)
  new Float64Array(t, 0, s).set(n)
  const r = e.byteLength - s * 8
  if (r > 0) {
    const o = new Uint8Array(e, s * 8, r)
    new Uint8Array(t, s * 8, r).set(o)
  }
}
const Tv = { normal: 'normal-npm', add: 'add-npm', screen: 'screen-npm' }
var Mv = ((e) => (
  (e[(e.DISABLED = 0)] = 'DISABLED'),
  (e[(e.RENDERING_MASK_ADD = 1)] = 'RENDERING_MASK_ADD'),
  (e[(e.MASK_ACTIVE = 2)] = 'MASK_ACTIVE'),
  (e[(e.RENDERING_MASK_REMOVE = 3)] = 'RENDERING_MASK_REMOVE'),
  (e[(e.NONE = 4)] = 'NONE'),
  e
))(Mv || {})
function ah(e, t) {
  return (t.alphaMode === 'no-premultiply-alpha' && Tv[e]) || e
}
class lh {
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
class ch {
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
let Hn = 0
const pf = class mf {
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
      (t = { ...mf.defaultOptions, ...t })
    const { vertexSize: s, indexSize: n } = t
    ;(this.attributeBuffer = new rh(s * this._vertexSize * 4)),
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
    let n = this._textureBatchPool[this._textureBatchPoolIndex++] || new lh()
    if ((n.clear(), !s[this.elementStart])) return
    const i = s[this.elementStart]
    let r = ah(i.blendMode, i.texture._source)
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
      d = this._batchPool[this._batchPoolIndex++] || new ch()
    for (let f = this.elementStart; f < this.elementSize; ++f) {
      const p = s[f]
      s[f] = null
      const m = p.texture._source,
        x = ah(p.blendMode, m),
        y = r !== x
      if (m._batchTick === Hn && !y) {
        ;(p.textureId = m._textureBindLocation),
          (h += p.indexSize),
          p.packAttributes(o, a, p.location, p.textureId),
          p.packIndex(l, p.indexStart, p.location / this._vertexSize),
          (p.batch = d)
        continue
      }
      ;(m._batchTick = Hn),
        (n.count >= df || y) &&
          (this._finishBatch(d, c, h - c, n, r, t, u),
          (u = 'renderBatch'),
          (c = h),
          (r = x),
          (n =
            this._textureBatchPool[this._textureBatchPoolIndex++] || new lh()),
          n.clear(),
          (d = this._batchPool[this._batchPoolIndex++] || new ch()),
          ++Hn),
        (p.textureId = m._textureBindLocation = n.count),
        (n.ids[m.uid] = n.count),
        (n.textures[n.count++] = m),
        (p.batch = d),
        (h += p.indexSize),
        p.packAttributes(o, a, p.location, p.textureId),
        p.packIndex(l, p.indexStart, p.location / this._vertexSize)
    }
    n.count > 0 && (this._finishBatch(d, c, h - c, n, r, t, u), (c = h), ++Hn),
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
      ++Hn,
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
      n = new rh(s)
    oh(this.attributeBuffer.rawBinaryData, n.rawBinaryData),
      (this.attributeBuffer = n)
  }
  _resizeIndexBuffer(t) {
    const s = this.indexBuffer
    let n = Math.max(t, s.length * 1.5)
    n += n % 2
    const i = n > 65535 ? new Uint32Array(n) : new Uint16Array(n)
    if (i.BYTES_PER_ELEMENT !== s.BYTES_PER_ELEMENT)
      for (let r = 0; r < s.length; r++) i[r] = s[r]
    else oh(s.buffer, i.buffer)
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
pf.defaultOptions = { vertexSize: 4, indexSize: 6 }
let Iv = pf
function Rv(e, t, s, n, i, r, o, a = null) {
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
function kv(e, t, s, n) {
  let i = 0
  for (t *= s; i < n; ) (e[t] = 0), (e[t + 1] = 0), (t += s), i++
}
function gf(e, t, s, n, i) {
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
function Lv(e, t) {
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
class _f {
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
      const f = Lv(d, o.groupColor) + ((this.alpha * o.groupAlpha * 255) << 24),
        p = o.groupTransform,
        g = (i << 16) | (this.roundPixels & 65535),
        m = p.a,
        x = p.b,
        y = p.c,
        v = p.d,
        w = p.tx,
        M = p.ty
      for (let k = h; k < c; k += 2) {
        const E = a[k],
          C = a[k + 1]
        ;(t[n] = m * E + y * C + w),
          (t[n + 1] = x * E + v * C + M),
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
const fo = {
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
        x = s - p,
        y = n + g
      if (((t[c++] = m), (t[c++] = y), (t[--u] = y), (t[--u] = x), r)) {
        const w = n - g
        ;(t[d++] = x), (t[d++] = w), (t[--f] = w), (t[--f] = m)
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
      ;(p = i), (g = r + a), (m = s + p), (x = s - p), (y = n + g)
      const v = n - g
      return (
        (t[c++] = m),
        (t[c++] = y),
        (t[--f] = v),
        (t[--f] = m),
        i && ((t[c++] = x), (t[c++] = y), (t[--f] = v), (t[--f] = x)),
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
  Bv = 1e-4,
  hh = 1e-4
function Ov(e) {
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
function uh(e, t, s, n, i, r, o, a) {
  const l = e - s * i,
    h = t - n * i,
    c = e + s * r,
    u = t + n * r
  let d, f
  o ? ((d = n), (f = -s)) : ((d = -n), (f = s))
  const p = l + d,
    g = h + f,
    m = c + d,
    x = u + f
  return a.push(p, g), a.push(m, x), 2
}
function ks(e, t, s, n, i, r, o, a) {
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
    x = f / m
  if (((d += x), a)) {
    o.push(e, t), o.push(s, n)
    for (let y = 1, v = d; y < m; y++, v += x)
      o.push(e, t), o.push(e + Math.sin(v) * g, t + Math.cos(v) * g)
    o.push(e, t), o.push(i, r)
  } else {
    o.push(s, n), o.push(e, t)
    for (let y = 1, v = d; y < m; y++, v += x)
      o.push(e + Math.sin(v) * g, t + Math.cos(v) * g), o.push(e, t)
    o.push(i, r), o.push(e, t)
  }
  return m * 2
}
function Fv(e, t, s, n, i, r, o, a, l) {
  const h = Bv
  if (e.length === 0) return
  const c = t
  let u = c.alignment
  if (t.alignment !== 0.5) {
    let at = Ov(e)
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
    x = e.length / 2
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
          ks(
            E - D * (K - et) * 0.5,
            C - G * (K - et) * 0.5,
            E - D * K,
            C - G * K,
            E + D * et,
            C + G * et,
            m,
            !0,
          ) + 2)
      : c.cap === 'square' && (y += uh(E, C, D, G, K, et, !0, m))),
    m.push(E - D * K, C - G * K),
    m.push(E + D * et, C + G * et)
  for (let at = 1; at < x - 1; ++at) {
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
      $e = S - Y,
      Lt = V - P,
      R = Qt * $e + be * Lt,
      U = be * $e - Lt * Qt,
      N = U < 0
    if (Math.abs(U) < 0.001 * Math.abs(R)) {
      m.push(S - D * K, P - G * K),
        m.push(S + D * et, P + G * et),
        R >= 0 &&
          (c.join === 'round'
            ? (y +=
                ks(S, P, S - D * K, P - G * K, S - ut * K, P - X * K, m, !1) +
                4)
            : (y += 2),
          m.push(S - ut * et, P - X * et),
          m.push(S + ut * K, P + X * K))
      continue
    }
    const W = (-D + E) * (-G + P) - (-D + S) * (-G + C),
      yt = (-ut + Y) * (-X + P) - (-ut + S) * (-X + V),
      vt = (Qt * yt - $e * W) / U,
      _ = (Lt * W - be * yt) / U,
      b = (vt - S) * (vt - S) + (_ - P) * (_ - P),
      A = S + (vt - S) * K,
      I = P + (_ - P) * K,
      T = S - (vt - S) * et,
      B = P - (_ - P) * et,
      z = Math.min(Qt * Qt + be * be, $e * $e + Lt * Lt),
      O = N ? K : et,
      $ = z + O * O * M
    b <= $
      ? c.join === 'bevel' || b / M > k
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
              ks(S, P, S + D * et, P + G * et, S + ut * et, P + X * et, m, !0) +
              4),
            m.push(A, I),
            m.push(S + ut * et, P + X * et))
          : (m.push(S - D * K, P - G * K),
            m.push(T, B),
            (y +=
              ks(S, P, S - D * K, P - G * K, S - ut * K, P - X * K, m, !1) + 4),
            m.push(S - ut * K, P - X * K),
            m.push(T, B))
        : (m.push(A, I), m.push(T, B))
      : (m.push(S - D * K, P - G * K),
        m.push(S + D * et, P + G * et),
        c.join === 'round'
          ? N
            ? (y +=
                ks(
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
                ks(S, P, S - D * K, P - G * K, S - ut * K, P - X * K, m, !1) +
                2)
          : c.join === 'miter' &&
            b / M <= k &&
            (N ? (m.push(T, B), m.push(T, B)) : (m.push(A, I), m.push(A, I)),
            (y += 2)),
        m.push(S - ut * K, P - X * K),
        m.push(S + ut * et, P + X * et),
        (y += 2))
  }
  ;(E = e[(x - 2) * 2]),
    (C = e[(x - 2) * 2 + 1]),
    (S = e[(x - 1) * 2]),
    (P = e[(x - 1) * 2 + 1]),
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
            ks(
              S - D * (K - et) * 0.5,
              P - G * (K - et) * 0.5,
              S - D * K,
              P - G * K,
              S + D * et,
              P + G * et,
              m,
              !1,
            ) + 2)
        : c.cap === 'square' && (y += uh(S, P, D, G, K, et, !1, m)))
  const xe = hh * hh
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
function yf(e, t, s, n, i, r, o) {
  const a = Fb(e, t, 2)
  if (!a) return
  for (let h = 0; h < a.length; h += 3)
    (r[o++] = a[h] + i), (r[o++] = a[h + 1] + i), (r[o++] = a[h + 2] + i)
  let l = i * n
  for (let h = 0; h < e.length; h += 2)
    (s[l] = e[h]), (s[l + 1] = e[h + 1]), (l += n)
}
const $v = [],
  Nv = {
    build(e, t) {
      for (let s = 0; s < e.points.length; s++) t[s] = e.points[s]
      return t
    },
    triangulate(e, t, s, n, i, r) {
      yf(e, $v, t, s, n, i, r)
    },
  },
  Dv = {
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
  zv = {
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
  Qa = {
    rectangle: Dv,
    polygon: Nv,
    triangle: zv,
    circle: fo,
    ellipse: fo,
    roundedRectangle: fo,
  },
  Vv = new Ht()
function Uv(e, t) {
  const { geometryData: s, batches: n } = t
  ;(n.length = 0),
    (s.indices.length = 0),
    (s.vertices.length = 0),
    (s.uvs.length = 0)
  for (let i = 0; i < e.instructions.length; i++) {
    const r = e.instructions[i]
    if (r.action === 'texture') Hv(r.data, n, s)
    else if (r.action === 'fill' || r.action === 'stroke') {
      const o = r.action === 'stroke',
        a = r.data.path.shapePath,
        l = r.data.style,
        h = r.data.hole
      o && h && dh(h.shapePath, l, null, !0, n, s), dh(a, l, h, o, n, s)
    }
  }
}
function Hv(e, t, s) {
  const { vertices: n, uvs: i, indices: r } = s,
    o = r.length,
    a = n.length / 2,
    l = [],
    h = Qa.rectangle,
    c = Vv,
    u = e.image
  ;(c.x = e.dx), (c.y = e.dy), (c.width = e.dw), (c.height = e.dh)
  const d = e.transform
  h.build(c, l), d && gf(l, d), h.triangulate(l, n, 2, a, r, o)
  const f = u.uvs
  i.push(f.x0, f.y0, f.x1, f.y1, f.x3, f.y3, f.x2, f.y2)
  const p = Re.get(_f)
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
function dh(e, t, s, n, i, r) {
  const { vertices: o, uvs: a, indices: l } = r,
    h = e.shapePrimitives.length - 1
  e.shapePrimitives.forEach(({ shape: c, transform: u }, d) => {
    const f = l.length,
      p = o.length / 2,
      g = [],
      m = Qa[c.type]
    if ((m.build(c, g), u && gf(g, u), n)) {
      const w = c.closePath ?? !0
      Fv(g, t, !1, w, o, 2, p, l)
    } else if (s && h === d) {
      h !== 0 &&
        console.warn('[Pixi Graphics] only the last shape have be cut out')
      const w = [],
        M = g.slice()
      Gv(s.shapePath).forEach((E) => {
        w.push(M.length / 2), M.push(...E)
      }),
        yf(M, w, o, 2, p, l, f)
    } else m.triangulate(g, o, 2, p, l, f)
    const x = a.length / 2,
      y = t.texture
    if (y !== Pt.WHITE) {
      const w = t.matrix
      u && w.append(u.clone().invert()),
        Rv(o, 2, p, a, x, 2, o.length / 2 - p, w)
    } else kv(a, x, 2, o.length / 2 - p)
    const v = Re.get(_f)
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
function Gv(e) {
  if (!e) return []
  const t = e.shapePrimitives,
    s = []
  for (let n = 0; n < t.length; n++) {
    const i = t[n].shape,
      r = []
    Qa[i.type].build(i, r), s.push(r)
  }
  return s
}
class Wv {
  constructor() {
    ;(this.batches = []),
      (this.geometryData = { vertices: [], uvs: [], indices: [] })
  }
}
class jv {
  constructor() {
    ;(this.geometry = new Cv()), (this.instructions = new zd())
  }
  init() {
    this.instructions.reset()
  }
}
const Ja = class Jo {
  constructor() {
    ;(this._activeBatchers = []),
      (this._gpuContextHash = {}),
      (this._graphicsDataContextHash = Object.create(null)),
      (this._needsContextNeedsRebuild = [])
  }
  init(t) {
    Jo.defaultOptions.bezierSmoothness =
      (t == null ? void 0 : t.bezierSmoothness) ??
      Jo.defaultOptions.bezierSmoothness
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
        Uv(t, s)
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
    const s = Re.get(jv),
      { batches: n, geometryData: i } = this._gpuContextHash[t.uid],
      r = i.vertices.length,
      o = i.indices.length
    for (let c = 0; c < n.length; c++) n[c].applyTransform = !1
    const a = Re.get(Iv)
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
      u.bindGroup = Ev(u.textures.textures, u.textures.count)
    }
    return (this._graphicsDataContextHash[t.uid] = s), s
  }
  _initContext(t) {
    const s = new Wv()
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
Ja.extension = {
  type: [ot.WebGLSystem, ot.WebGPUSystem, ot.CanvasSystem],
  name: 'graphicsContext',
}
Ja.defaultOptions = { bezierSmoothness: 0.5 }
let xf = Ja
const Yv = 8,
  ji = 11920929e-14,
  Xv = 1
function bf(e, t, s, n, i, r, o, a, l, h) {
  const u = Math.min(0.99, Math.max(0, h ?? xf.defaultOptions.bezierSmoothness))
  let d = (Xv - u) / 1
  return (d *= d), Kv(t, s, n, i, r, o, a, l, e, d), e
}
function Kv(e, t, s, n, i, r, o, a, l, h) {
  ta(e, t, s, n, i, r, o, a, l, h, 0), l.push(o, a)
}
function ta(e, t, s, n, i, r, o, a, l, h, c) {
  if (c > Yv) return
  const u = (e + s) / 2,
    d = (t + n) / 2,
    f = (s + i) / 2,
    p = (n + r) / 2,
    g = (i + o) / 2,
    m = (r + a) / 2,
    x = (u + f) / 2,
    y = (d + p) / 2,
    v = (f + g) / 2,
    w = (p + m) / 2,
    M = (x + v) / 2,
    k = (y + w) / 2
  if (c > 0) {
    let E = o - e,
      C = a - t
    const S = Math.abs((s - o) * C - (n - a) * E),
      P = Math.abs((i - o) * C - (r - a) * E)
    if (S > ji && P > ji) {
      if ((S + P) * (S + P) <= h * (E * E + C * C)) {
        l.push(M, k)
        return
      }
    } else if (S > ji) {
      if (S * S <= h * (E * E + C * C)) {
        l.push(M, k)
        return
      }
    } else if (P > ji) {
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
  ta(e, t, u, d, x, y, M, k, l, h, c + 1),
    ta(M, k, v, w, g, m, o, a, l, h, c + 1)
}
const qv = 8,
  Zv = 11920929e-14,
  Qv = 1
function Jv(e, t, s, n, i, r, o, a) {
  const h = Math.min(0.99, Math.max(0, a ?? xf.defaultOptions.bezierSmoothness))
  let c = (Qv - h) / 1
  return (c *= c), t2(t, s, n, i, r, o, e, c), e
}
function t2(e, t, s, n, i, r, o, a) {
  ea(o, e, t, s, n, i, r, a, 0), o.push(i, r)
}
function ea(e, t, s, n, i, r, o, a, l) {
  if (l > qv) return
  const h = (t + n) / 2,
    c = (s + i) / 2,
    u = (n + r) / 2,
    d = (i + o) / 2,
    f = (h + u) / 2,
    p = (c + d) / 2
  let g = r - t,
    m = o - s
  const x = Math.abs((n - r) * m - (i - o) * g)
  if (x > Zv) {
    if (x * x <= a * (g * g + m * m)) {
      e.push(f, p)
      return
    }
  } else if (
    ((g = f - (t + r) / 2), (m = p - (s + o) / 2), g * g + m * m <= a)
  ) {
    e.push(f, p)
    return
  }
  ea(e, t, s, h, c, f, p, a, l + 1), ea(e, f, p, u, d, r, o, a, l + 1)
}
function vf(e, t, s, n, i, r, o, a) {
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
function e2(e, t, s, n, i, r) {
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
    x = (r * Math.sqrt(p)) / d,
    y = (m * g) / f,
    v = (x * g) / p,
    w = m * u + x * h,
    M = m * c + x * l,
    k = h * (x + y),
    E = l * (x + y),
    C = u * (m + v),
    S = c * (m + v),
    P = Math.atan2(E - M, k - w),
    Y = Math.atan2(S - M, C - w)
  vf(e, w + t, M + s, r, P, Y, h * c > u * l)
}
const oi = Math.PI * 2,
  po = { centerX: 0, centerY: 0, ang1: 0, ang2: 0 },
  mo = ({ x: e, y: t }, s, n, i, r, o, a, l) => {
    ;(e *= s), (t *= n)
    const h = i * e - r * t,
      c = r * e + i * t
    return (l.x = h + o), (l.y = c + a), l
  }
function s2(e, t) {
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
const fh = (e, t, s, n) => {
    const i = e * n - t * s < 0 ? -1 : 1
    let r = e * s + t * n
    return r > 1 && (r = 1), r < -1 && (r = -1), i * Math.acos(r)
  },
  n2 = (e, t, s, n, i, r, o, a, l, h, c, u, d) => {
    const f = Math.pow(i, 2),
      p = Math.pow(r, 2),
      g = Math.pow(c, 2),
      m = Math.pow(u, 2)
    let x = f * p - f * m - p * g
    x < 0 && (x = 0),
      (x /= f * m + p * g),
      (x = Math.sqrt(x) * (o === a ? -1 : 1))
    const y = ((x * i) / r) * u,
      v = ((x * -r) / i) * c,
      w = h * y - l * v + (e + s) / 2,
      M = l * y + h * v + (t + n) / 2,
      k = (c - y) / i,
      E = (u - v) / r,
      C = (-c - y) / i,
      S = (-u - v) / r,
      P = fh(1, 0, k, E)
    let Y = fh(k, E, C, S)
    a === 0 && Y > 0 && (Y -= oi),
      a === 1 && Y < 0 && (Y += oi),
      (d.centerX = w),
      (d.centerY = M),
      (d.ang1 = P),
      (d.ang2 = Y)
  }
function i2(e, t, s, n, i, r, o, a = 0, l = 0, h = 0) {
  if (r === 0 || o === 0) return
  const c = Math.sin((a * oi) / 360),
    u = Math.cos((a * oi) / 360),
    d = (u * (t - n)) / 2 + (c * (s - i)) / 2,
    f = (-c * (t - n)) / 2 + (u * (s - i)) / 2
  if (d === 0 && f === 0) return
  ;(r = Math.abs(r)), (o = Math.abs(o))
  const p = Math.pow(d, 2) / Math.pow(r, 2) + Math.pow(f, 2) / Math.pow(o, 2)
  p > 1 && ((r *= Math.sqrt(p)), (o *= Math.sqrt(p))),
    n2(t, s, n, i, r, o, l, h, c, u, d, f, po)
  let { ang1: g, ang2: m } = po
  const { centerX: x, centerY: y } = po
  let v = Math.abs(m) / (oi / 4)
  Math.abs(1 - v) < 1e-7 && (v = 1)
  const w = Math.max(Math.ceil(v), 1)
  m /= w
  let M = e[e.length - 2],
    k = e[e.length - 1]
  const E = { x: 0, y: 0 }
  for (let C = 0; C < w; C++) {
    const S = s2(g, m),
      { x: P, y: Y } = mo(S[0], r, o, u, c, x, y, E),
      { x: V, y: D } = mo(S[1], r, o, u, c, x, y, E),
      { x: G, y: ut } = mo(S[2], r, o, u, c, x, y, E)
    bf(e, M, k, P, Y, V, D, G, ut), (M = G), (k = ut), (g += m)
  }
}
function r2(e, t, s) {
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
      x = Math.abs((Math.cos(g) * l) / Math.sin(g))
    x > Math.min(c.len / 2, u.len / 2)
      ? ((x = Math.min(c.len / 2, u.len / 2)),
        (m = Math.abs((x * Math.sin(g)) / Math.cos(g))))
      : (m = l)
    const y = a.x + u.nx * x + -u.ny * m * f,
      v = a.y + u.ny * x + u.nx * m * f,
      w = Math.atan2(c.ny, c.nx) + (Math.PI / 2) * f,
      M = Math.atan2(u.ny, u.nx) - (Math.PI / 2) * f
    o === 0 && e.moveTo(y + Math.cos(w) * m, v + Math.sin(w) * m),
      e.arc(y, v, m, w, M, p),
      (r = a)
  }
}
function o2(e, t, s, n) {
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
const a2 = new Ht()
class l2 {
  constructor(t) {
    ;(this.shapePrimitives = []),
      (this._currentPoly = null),
      (this._bounds = new We()),
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
    return vf(a, t, s, n, i, r, o), this
  }
  arcTo(t, s, n, i, r) {
    this._ensurePoly()
    const o = this._currentPoly.points
    return e2(o, t, s, n, i, r), this
  }
  arcToSvg(t, s, n, i, r, o, a) {
    const l = this._currentPoly.points
    return (
      i2(
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
      bf(this._currentPoly.points, l.lastX, l.lastY, t, s, n, i, r, o, a), this
    )
  }
  quadraticCurveTo(t, s, n, i, r) {
    this._ensurePoly()
    const o = this._currentPoly
    return Jv(this._currentPoly.points, o.lastX, o.lastY, t, s, n, i, r), this
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
    return this.drawShape(new Ka(t, s, n), i), this
  }
  poly(t, s, n) {
    const i = new ri(t)
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
        x = f - Math.PI - u,
        y = p + r * Math.cos(m),
        v = g + r * Math.sin(m),
        w = p + r * Math.cos(x),
        M = g + r * Math.sin(x)
      d === 0 ? this.moveTo(y, v) : this.lineTo(y, v),
        this.quadraticCurveTo(p, g, w, M, a)
    }
    return this.closePath()
  }
  roundShape(t, s, n = !1, i) {
    return t.length < 3
      ? this
      : (n ? o2(this, t, s, i) : r2(this, t, s), this.closePath())
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
    return this.drawShape(new qa(t, s, n, i), r), this
  }
  roundRect(t, s, n, i, r, o) {
    return this.drawShape(new Za(t, s, n, i, r), o), this
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
      (n = new ri()),
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
    if (!this._currentPoly && ((this._currentPoly = new ri()), t)) {
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
        r = i.shape.getBounds(a2)
      i.transform ? t.addRect(r, i.transform) : t.addRect(r)
    }
    return t
  }
}
class En {
  constructor(t) {
    ;(this.instructions = []),
      (this.uid = Gt('graphicsPath')),
      (this._dirty = !0),
      typeof t == 'string'
        ? yv(t, this)
        : (this.instructions = (t == null ? void 0 : t.slice()) ?? [])
  }
  get shapePath() {
    return (
      this._shapePath || (this._shapePath = new l2(this)),
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
    const s = new En()
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
      const x = this.instructions[m],
        y = x.data
      switch (x.action) {
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
          y[4] = Gn(y[3], t)
          break
        case 'rect':
          y[4] = Gn(y[4], t)
          break
        case 'ellipse':
          y[8] = Gn(y[8], t)
          break
        case 'roundRect':
          y[5] = Gn(y[5], t)
          break
        case 'addPath':
          y[0].transform(t)
          break
        case 'poly':
          y[2] = Gn(y[2], t)
          break
        default:
          Wt('unknown transform action', x.action)
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
function Gn(e, t) {
  return e ? e.prepend(t) : t.clone()
}
function c2(e, t) {
  if (typeof e == 'string') {
    const n = document.createElement('div')
    ;(n.innerHTML = e.trim()), (e = n.querySelector('svg'))
  }
  const s = { context: t, path: new En() }
  return wf(e, s, null, null), t
}
function wf(e, t, s, n) {
  const i = e.children,
    { fillStyle: r, strokeStyle: o } = h2(e)
  r && s ? (s = { ...s, ...r }) : r && (s = r),
    o && n ? (n = { ...n, ...o }) : o && (n = o),
    (t.context.fillStyle = s),
    (t.context.strokeStyle = n)
  let a, l, h, c, u, d, f, p, g, m, x, y, v, w, M, k, E
  switch (e.nodeName.toLowerCase()) {
    case 'path':
      ;(w = e.getAttribute('d')),
        (M = new En(w)),
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
        (x = Nt(e, 'ry', 0)),
        m || x
          ? t.context.roundRect(a, l, k, E, m || x)
          : t.context.rect(a, l, k, E),
        s && t.context.fill(),
        n && t.context.stroke()
      break
    case 'ellipse':
      ;(f = Nt(e, 'cx', 0)),
        (p = Nt(e, 'cy', 0)),
        (m = Nt(e, 'rx', 0)),
        (x = Nt(e, 'ry', 0)),
        t.context.beginPath(),
        t.context.ellipse(f, p, m, x),
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
  for (let C = 0; C < i.length; C++) wf(i[C], t, s, n)
}
function Nt(e, t, s) {
  const n = e.getAttribute(t)
  return n ? Number(n) : s
}
function h2(e) {
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
const Af = class sa {
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
    const t = sa.defaultTextureSize,
      { gradientStops: s } = this,
      n = jt.get().createCanvas()
    ;(n.width = t), (n.height = t)
    const i = n.getContext('2d'),
      r = i.createLinearGradient(0, 0, sa.defaultTextureSize, 1)
    for (let g = 0; g < s.length; g++) {
      const m = s[g]
      r.addColorStop(m.offset, m.color)
    }
    ;(i.fillStyle = r),
      i.fillRect(0, 0, t, t),
      (this.texture = new Pt({
        source: new Si({
          resource: n,
          addressModeU: 'clamp-to-edge',
          addressModeV: 'repeat',
        }),
      }))
    const { x0: o, y0: a, x1: l, y1: h } = this,
      c = new Ct(),
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
Af.defaultTextureSize = 256
let Sf = Af
const ph = {
  repeat: { addressModeU: 'repeat', addressModeV: 'repeat' },
  'repeat-x': { addressModeU: 'repeat', addressModeV: 'clamp-to-edge' },
  'repeat-y': { addressModeU: 'clamp-to-edge', addressModeV: 'repeat' },
  'no-repeat': { addressModeU: 'clamp-to-edge', addressModeV: 'clamp-to-edge' },
}
class u2 {
  constructor(t, s) {
    ;(this.uid = Gt('fillPattern')),
      (this.transform = new Ct()),
      (this.texture = t),
      this.transform.scale(1 / t.frame.width, 1 / t.frame.height),
      s &&
        ((t.source.style.addressModeU = ph[s].addressModeU),
        (t.source.style.addressModeV = ph[s].addressModeV))
  }
  setTransform(t) {
    const s = this.texture
    this.transform.copyFrom(t),
      this.transform.invert(),
      this.transform.scale(1 / s.frame.width, 1 / s.frame.height)
  }
}
function ms(e, t) {
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
      texture: Pt.WHITE,
    }
  } else if (n instanceof u2) {
    const a = n
    return {
      ...s,
      color: 16777215,
      texture: a.texture,
      matrix: a.transform,
      fill: s.fill ?? null,
    }
  } else if (n instanceof Sf) {
    const a = n
    return (
      a.buildLinearGradient(),
      { ...s, color: 16777215, texture: a.texture, matrix: a.transform }
    )
  }
  const i = { ...t, ...e }
  if (i.texture) {
    if (i.texture !== Pt.WHITE) {
      const l = ((o = i.matrix) == null ? void 0 : o.invert()) || new Ct()
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
const d2 = new qt(),
  mh = new Ct(),
  tl = class ze extends ns {
    constructor() {
      super(...arguments),
        (this.uid = Gt('graphicsContext')),
        (this.dirty = !0),
        (this.batchMode = 'auto'),
        (this.instructions = []),
        (this._activePath = new En()),
        (this._transform = new Ct()),
        (this._fillStyle = { ...ze.defaultFillStyle }),
        (this._strokeStyle = { ...ze.defaultStrokeStyle }),
        (this._stateStack = []),
        (this._tick = 0),
        (this._bounds = new We()),
        (this._boundsDirty = !0)
    }
    clone() {
      const t = new ze()
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
      this._fillStyle = ms(t, ze.defaultFillStyle)
    }
    get strokeStyle() {
      return this._strokeStyle
    }
    set strokeStyle(t) {
      this._strokeStyle = ms(t, ze.defaultStrokeStyle)
    }
    setFillStyle(t) {
      return (this._fillStyle = ms(t, ze.defaultFillStyle)), this
    }
    setStrokeStyle(t) {
      return (this._strokeStyle = ms(t, ze.defaultStrokeStyle)), this
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
      return (this._activePath = new En()), this
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
              (this._fillStyle = ms(t, ze.defaultFillStyle))),
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
          ? (t != null && (this._strokeStyle = ms(t, ze.defaultStrokeStyle)),
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
      return this._tick++, c2(t, this), this
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
      return t instanceof Ct
        ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this)
        : (this._transform.set(t, s, n, i, r, o), this)
    }
    transform(t, s, n, i, r, o) {
      return t instanceof Ct
        ? (this._transform.append(t), this)
        : (mh.set(t, s, n, i, r, o), this._transform.append(mh), this)
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
            p = f ? f.applyInverse(t, d2) : t
          o.action === 'fill'
            ? (n = d.contains(p.x, p.y))
            : (n = d.strokeContains(p.x, p.y, h.width))
          const g = a.hole
          if (g) {
            const m = (i = g.shapePath) == null ? void 0 : i.shapePrimitives
            if (m)
              for (let x = 0; x < m.length; x++)
                m[x].shape.contains(p.x, p.y) && (n = !1)
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
tl.defaultFillStyle = {
  color: 16777215,
  alpha: 1,
  texture: Pt.WHITE,
  matrix: null,
  fill: null,
}
tl.defaultStrokeStyle = {
  width: 1,
  color: 16777215,
  alpha: 1,
  alignment: 0.5,
  miterLimit: 10,
  cap: 'butt',
  join: 'miter',
  texture: Pt.WHITE,
  matrix: null,
  fill: null,
}
let na = tl
function el(e, t = 1) {
  var n
  const s = (n = Rn.RETINA_PREFIX) == null ? void 0 : n.exec(e)
  return s ? parseFloat(s[1]) : t
}
function sl(e, t, s) {
  ;(e.label = s), (e._sourceOrigin = s)
  const n = new Pt({ source: e, label: s }),
    i = () => {
      delete t.promiseCache[s], ee.has(s) && ee.remove(s)
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
const f2 = '.svg',
  p2 = 'image/svg+xml',
  m2 = {
    extension: { type: ot.LoadParser, priority: Qs.Low },
    name: 'loadSVG',
    config: { crossOrigin: 'anonymous', parseAsGraphicsContext: !1 },
    test(e) {
      return kn(e, p2) || Ln(e, f2)
    },
    async load(e, t, s) {
      return t.data.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext
        ? _2(e)
        : g2(e, t, s, this.config.crossOrigin)
    },
    unload(e) {
      e.destroy(!0)
    },
  }
async function g2(e, t, s, n) {
  var m, x, y
  const r = await (await jt.get().fetch(e)).blob(),
    o = URL.createObjectURL(r),
    a = new Image()
  ;(a.src = o), (a.crossOrigin = n), await a.decode(), URL.revokeObjectURL(o)
  const l = document.createElement('canvas'),
    h = l.getContext('2d'),
    c = ((m = t.data) == null ? void 0 : m.resolution) || el(e),
    u = ((x = t.data) == null ? void 0 : x.width) ?? a.width,
    d = ((y = t.data) == null ? void 0 : y.height) ?? a.height
  ;(l.width = u * c), (l.height = d * c), h.drawImage(a, 0, 0, u * c, d * c)
  const { parseAsGraphicsContext: f, ...p } = t.data,
    g = new Si({
      resource: l,
      alphaMode: 'premultiply-alpha-on-upload',
      resolution: c,
      ...p,
    })
  return sl(g, s, e)
}
async function _2(e) {
  const s = await (await jt.get().fetch(e)).text(),
    n = new na()
  return n.svg(s), n
}
const y2 = `(function () {
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
let pn = null,
  ia = class {
    constructor() {
      pn ||
        (pn = URL.createObjectURL(
          new Blob([y2], { type: 'application/javascript' }),
        )),
        (this.worker = new Worker(pn))
    }
  }
ia.revokeObjectURL = function () {
  pn && (URL.revokeObjectURL(pn), (pn = null))
}
const x2 = `(function () {
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
let mn = null
class Cf {
  constructor() {
    mn ||
      (mn = URL.createObjectURL(
        new Blob([x2], { type: 'application/javascript' }),
      )),
      (this.worker = new Worker(mn))
  }
}
Cf.revokeObjectURL = function () {
  mn && (URL.revokeObjectURL(mn), (mn = null))
}
let gh = 0,
  go
class b2 {
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
          const { worker: s } = new ia()
          s.addEventListener('message', (n) => {
            s.terminate(), ia.revokeObjectURL(), t(n.data)
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
    go === void 0 && (go = navigator.hardwareConcurrency || 4)
    let t = this._workerPool.pop()
    return (
      !t &&
        this._createdWorkers < go &&
        (this._createdWorkers++,
        (t = new Cf().worker),
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
    ;(this._resolveHash[gh] = { resolve: s.resolve, reject: s.reject }),
      t.postMessage({ data: s.arguments, uuid: gh++, id: n })
  }
}
const _h = new b2(),
  v2 = ['.jpeg', '.jpg', '.png', '.webp', '.avif'],
  w2 = ['image/jpeg', 'image/png', 'image/webp', 'image/avif']
async function A2(e) {
  const t = await jt.get().fetch(e)
  if (!t.ok)
    throw new Error(
      `[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`,
    )
  const s = await t.blob()
  return await createImageBitmap(s)
}
const Ef = {
    name: 'loadTextures',
    extension: { type: ot.LoadParser, priority: Qs.High },
    config: {
      preferWorkers: !0,
      preferCreateImageBitmap: !0,
      crossOrigin: 'anonymous',
    },
    test(e) {
      return kn(e, w2) || Ln(e, v2)
    },
    async load(e, t, s) {
      var r
      let n = null
      globalThis.createImageBitmap && this.config.preferCreateImageBitmap
        ? this.config.preferWorkers && (await _h.isImageBitmapSupported())
          ? (n = await _h.loadImageBitmap(e))
          : (n = await A2(e))
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
      const i = new Si({
        resource: n,
        alphaMode: 'premultiply-alpha-on-upload',
        resolution: ((r = t.data) == null ? void 0 : r.resolution) || el(e),
        ...t.data,
      })
      return sl(i, s, e)
    },
    unload(e) {
      e.destroy(!0)
    },
  },
  Pf = ['.mp4', '.m4v', '.webm', '.ogg', '.ogv', '.h264', '.avi', '.mov'],
  S2 = Pf.map((e) => `video/${e.substring(1)}`)
function C2(e, t, s) {
  s === void 0 && !t.startsWith('data:')
    ? (e.crossOrigin = P2(t))
    : s !== !1 && (e.crossOrigin = typeof s == 'string' ? s : 'anonymous')
}
function E2(e) {
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
function P2(e, t = globalThis.location) {
  if (e.startsWith('data:')) return ''
  t = t || globalThis.location
  const s = new URL(e, document.baseURI)
  return s.hostname !== t.hostname ||
    s.port !== t.port ||
    s.protocol !== t.protocol
    ? 'anonymous'
    : ''
}
const T2 = {
    name: 'loadVideo',
    extension: { type: ot.LoadParser },
    config: null,
    test(e) {
      const t = kn(e, S2),
        s = Ln(e, Pf)
      return t || s
    },
    async load(e, t, s) {
      var l, h
      const n = {
          ...qi.defaultOptions,
          resolution: ((l = t.data) == null ? void 0 : l.resolution) || el(e),
          alphaMode:
            ((h = t.data) == null ? void 0 : h.alphaMode) || (await Kd()),
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
        C2(i, e, n.crossorigin)
      const o = document.createElement('source')
      let a
      if (e.startsWith('data:')) a = e.slice(5, e.indexOf(';'))
      else if (!e.startsWith('blob:')) {
        const c = e
          .split('?')[0]
          .slice(e.lastIndexOf('.') + 1)
          .toLowerCase()
        a = qi.MIME_TYPES[c] || `video/${c}`
      }
      return (
        (o.src = e),
        a && (o.type = a),
        new Promise((c) => {
          const u = async () => {
            const d = new qi({ ...n, resource: i })
            i.removeEventListener('canplay', u),
              t.data.preload && (await E2(i)),
              c(sl(d, s, e))
          }
          i.addEventListener('canplay', u), i.appendChild(o)
        })
      )
    },
    unload(e) {
      e.destroy(!0)
    },
  },
  Tf = {
    extension: ot.ResolveParser,
    test: Ef.test,
    parse: (e) => {
      var t
      return {
        resolution: parseFloat(
          ((t = Rn.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) ?? '1',
        ),
        format: e.split('.').pop(),
        src: e,
      }
    },
  },
  M2 = {
    extension: ot.ResolveParser,
    test: (e) => Rn.RETINA_PREFIX.test(e) && e.endsWith('.json'),
    parse: Tf.parse,
  }
class I2 {
  constructor() {
    ;(this._detections = []),
      (this._initialized = !1),
      (this.resolver = new Rn()),
      (this.loader = new Zb()),
      (this.cache = ee),
      (this._backgroundLoader = new Ub(this.loader)),
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
    const n = hr(t),
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
    if (typeof t == 'string') return ee.get(t)
    const s = {}
    for (let n = 0; n < t.length; n++) s[n] = ee.get(t[n])
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
          ee.set(l, a)
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
      ee.remove(n.src)
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
const Kn = new I2()
Ee.handleByList(ot.LoadParser, Kn.loader.parsers)
  .handleByList(ot.ResolveParser, Kn.resolver.parsers)
  .handleByList(ot.CacheParser, Kn.cache.parsers)
  .handleByList(ot.DetectionParser, Kn.detections)
Ee.add(Hb, Wb, Gb, qb, Yb, Xb, Kb, tv, nv, uv, m2, Ef, T2, Tf, M2)
const yh = {
  loader: ot.LoadParser,
  resolver: ot.ResolveParser,
  cache: ot.CacheParser,
  detection: ot.DetectionParser,
}
Ee.handle(
  ot.Asset,
  (e) => {
    const t = e.ref
    Object.entries(yh)
      .filter(([s]) => !!t[s])
      .forEach(([s, n]) =>
        Ee.add(Object.assign(t[s], { extension: t[s].extension ?? n })),
      )
  },
  (e) => {
    const t = e.ref
    Object.keys(yh)
      .filter((s) => !!t[s])
      .forEach((s) => Ee.remove(t[s]))
  },
)
class R2 extends Yt {
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
      (this._bounds = new We()),
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
function k2(e, t) {
  let s = e[0] ?? {}
  return (
    (typeof s == 'string' || e[1]) &&
      (_e(ge, `use new ${t}({ text: "hi!", style }) instead`),
      (s = { text: s, style: e[1] })),
    s
  )
}
const L2 = [
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
]
function B2(e) {
  const t = typeof e.fontSize == 'number' ? `${e.fontSize}px` : e.fontSize
  let s = e.fontFamily
  Array.isArray(e.fontFamily) || (s = e.fontFamily.split(','))
  for (let n = s.length - 1; n >= 0; n--) {
    let i = s[n].trim()
    !/([\"\'])[^\'\"]+\1/.test(i) && !L2.includes(i) && (i = `"${i}"`),
      (s[n] = i)
  }
  return `${e.fontStyle} ${e.fontVariant} ${e.fontWeight} ${t} ${s.join(',')}`
}
const _o = { willReadFrequently: !0 },
  Fe = class j {
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
      const o = B2(s),
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
      const i = n.getContext('2d', _o)
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
        let x = g[m]
        if (j._isNewline(x)) {
          if (!d) {
            ;(a += j._addLine(o)), (f = !u), (o = ''), (r = 0)
            continue
          }
          x = ' '
        }
        if (u) {
          const v = j.isBreakingSpace(x),
            w = j.isBreakingSpace(o[o.length - 1])
          if (v && w) continue
        }
        const y = j._getFromCache(x, h, l, i)
        if (y > p)
          if (
            (o !== '' && ((a += j._addLine(o)), (o = ''), (r = 0)),
            j.canBreakWords(x, s.breakWords))
          ) {
            const v = j.wordWrapSplit(x)
            for (let w = 0; w < v.length; w++) {
              let M = v[w],
                k = M,
                E = 1
              for (; v[w + E]; ) {
                const S = v[w + E]
                if (!j.canBreakChars(k, S, x, w, s.breakWords)) M += S
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
            ;(a += j._addLine(x, !v)), (f = !1), (o = ''), (r = 0)
          }
        else
          y + r > p && ((f = !1), (a += j._addLine(o)), (o = ''), (r = 0)),
            (o.length > 0 || !j.isBreakingSpace(x) || f) && ((o += x), (r += y))
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
            n = s.getContext('2d', _o)
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
        j.__context || (j.__context = j._canvas.getContext('2d', _o)),
        j.__context
      )
    }
  }
Fe.METRICS_STRING = '|ÉqÅ'
Fe.BASELINE_SYMBOL = 'M'
Fe.BASELINE_MULTIPLIER = 1.4
Fe.HEIGHT_MULTIPLIER = 2
Fe.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == 'function') {
    const e = new Intl.Segmenter()
    return (t) => [...e.segment(t)].map((s) => s.segment)
  }
  return (e) => [...e]
})()
Fe.experimentalLetterSpacing = !1
Fe._fonts = {}
Fe._newlines = [10, 13]
Fe._breakingSpaces = [
  9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
  12288,
]
Fe._measurementCache = {}
let O2 = Fe
const xh = [
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
function F2(e) {
  const t = []
  let s = 0
  for (let n = 0; n < xh.length; n++) {
    const i = xh[n]
    t[s++] = e[i]
  }
  return (s = Mf(e._fill, t, s)), (s = $2(e._stroke, t, s)), t.join('-')
}
function Mf(e, t, s) {
  var n
  return (
    e &&
      ((t[s++] = e.color),
      (t[s++] = e.alpha),
      (t[s++] = (n = e.fill) == null ? void 0 : n.uid)),
    s
  )
}
function $2(e, t, s) {
  return (
    e &&
      ((s = Mf(e, t, s)),
      (t[s++] = e.width),
      (t[s++] = e.alignment),
      (t[s++] = e.cap),
      (t[s++] = e.join),
      (t[s++] = e.miterLimit)),
    s
  )
}
const nl = class nn extends ns {
  constructor(t = {}) {
    super(), N2(t)
    const s = { ...nn.defaultTextStyle, ...t }
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
      ? (this._dropShadow = { ...nn.defaultDropShadow, ...t })
      : (this._dropShadow = t ? { ...nn.defaultDropShadow } : null),
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
      (this._fill = ms(t === 0 ? 'black' : t, na.defaultFillStyle)),
      this.update())
  }
  get stroke() {
    return this._originalStroke
  }
  set stroke(t) {
    t !== this._originalStroke &&
      ((this._originalStroke = t),
      (this._stroke = ms(t, na.defaultStrokeStyle)),
      this.update())
  }
  _generateKey() {
    return (this._styleKey = F2(this)), this._styleKey
  }
  update() {
    ;(this._styleKey = null), this.emit('update', this)
  }
  reset() {
    const t = nn.defaultTextStyle
    for (const s in t) this[s] = t[s]
  }
  get styleKey() {
    return this._styleKey || this._generateKey()
  }
  clone() {
    return new nn({
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
nl.defaultDropShadow = {
  alpha: 1,
  angle: Math.PI / 6,
  blur: 0,
  color: 'black',
  distance: 5,
}
nl.defaultTextStyle = {
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
let il = nl
function N2(e) {
  const t = e
  if (typeof t.dropShadow == 'boolean' && t.dropShadow) {
    const s = il.defaultDropShadow
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
    const s = new Sf(0, 0, 0, e.fontSize * 1.7),
      n = t.fill.map((i) => le.shared.setValue(i).toNumber())
    n.forEach((i, r) => {
      const o = t.fillGradientStops[r] ?? r / n.length
      s.addColorStop(o, i)
    }),
      (e.fill = { fill: s })
  }
}
class D2 extends R2 {
  constructor(...t) {
    const s = k2(t, 'Text')
    super(s, il), (this.renderPipeId = 'text')
  }
  _updateBounds() {
    const t = this._bounds,
      s = this._style.padding,
      n = this._anchor,
      i = O2.measureText(this._text, this._style),
      { width: r, height: o } = i
    ;(t.minX = -n._x * r - s),
      (t.maxX = t.minX + r),
      (t.minY = -n._y * o - s),
      (t.maxY = t.minY + o)
  }
}
Ee.add(yx, xx)
class z2 {
  constructor() {
    xt(this, 'app')
    xt(this, 'isInited')
    xt(this, 'resizeQueue')
    xt(this, 'background')
    xt(this, 'backgroundSprite')
    ;(this.app = new cf()), (this.isInited = !1), (this.resizeQueue = new Map())
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
    const s = await Kn.load(t)
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
const ne = new z2()
class V2 {
  constructor() {
    xt(this, 'container')
    xt(this, 'isLoaded')
    xt(this, 'videoTexture')
    xt(this, 'videoSprite')
    xt(this, 'videoResource')
    xt(this, 'texts', new Set())
    ;(this.container = new Yt()), (this.isLoaded = !1)
  }
  async loadVideo(t) {
    ;(this.isLoaded = !1),
      (this.videoTexture = Pt.from(t)),
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
    const n = new il(s),
      i = new D2({ text: t, style: n })
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
const Ls = new V2()
function U2(e) {
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
const He = U2()
const H2 = st({
  __name: 'Play',
  setup(e) {
    const t = In(),
      s = ht(),
      n = ht(),
      i = ht(0),
      r = ht(0)
    return (
      mx(s, { box: 'content-box' }, (o) => {
        const a = Math.floor(o.contentRect.height),
          l = Math.floor(o.contentRect.width)
        2 * a <= l
          ? ((i.value = a), (r.value = 2 * a))
          : ((r.value = l), (i.value = Math.floor(l / 2))),
          ne.resize()
      }),
      Te(async () => {
        await ne.init({ background: '#212123', resizeTo: n.value }),
          n.value.appendChild(ne.app.canvas),
          await ne.loadBackground('./no-video.png'),
          ne.resizeBackground(ne.app.screen.width, ne.app.screen.height),
          ne.addChild(Ls.container, Ls.resizeVideo.bind(Ls)),
          ne.app.canvas.addEventListener('webglcontextlost', (o) => {
            o.preventDefault(),
              console.log('WebGL context lost'),
              Ua({
                type: 'info',
                message: '第一次加载视频失败，刷新浏览器重试即可',
              })
          })
      }),
      He.on('videoCrop', ({ x: o, y: a, w: l, h }) => {
        Ls.cropVideo(o, a, l, h),
          Ls.resizeVideo(ne.app.screen.width, ne.app.screen.height)
      }),
      He.on('videoRecorded', async (o) => {
        ;(ne.background.visible = !1),
          await t.videoCreate(),
          Ls.loadVideo(t.videoRef),
          Ls.resizeVideo(ne.app.screen.width, ne.app.screen.height),
          He.emit('videoLoaded', o)
      }),
      (o, a) => (
        tt(),
        ft(
          'div',
          { ref_key: 'outerBox', ref: s, class: 'outer-box' },
          [
            nt(
              'div',
              {
                ref_key: 'videoBox',
                ref: n,
                class: 'work-area',
                style: me({ '--height': F(i) + 'px', '--width': F(r) + 'px' }),
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
const G2 = Ye(H2, [['__scopeId', 'data-v-3409ad5e']]),
  W2 = { class: 'video-box' },
  j2 = { class: 'options' },
  Y2 = { class: 'play' },
  X2 = st({
    __name: 'index',
    setup(e) {
      return (t, s) => {
        const n = Rp('router-view')
        return (
          tt(),
          ft('div', W2, [
            nt('div', j2, [
              ct(n, null, {
                default: Xt(({ Component: i }) => [
                  (tt(), pe(Vp, null, [(tt(), pe(su(i)))], 1024)),
                ]),
                _: 1,
              }),
            ]),
            nt('div', Y2, [ct(G2)]),
          ])
        )
      }
    },
  })
const K2 = Ye(X2, [['__scopeId', 'data-v-b0717cb4']]),
  ra = [
    { timeGap: 2, spaceGap: 100 },
    { timeGap: 1, spaceGap: 100 },
    { timeGap: 1, spaceGap: 200 },
  ],
  q2 = 0,
  Z2 = ra.length - 1,
  Ci = Ad('track', () => {
    const e = In(),
      t = ht(1),
      s = Q(() => ra[t.value].timeGap),
      n = Q(() => ra[t.value].spaceGap),
      i = Q(() => n.value * (e.duration / s.value + 2)),
      r = Q(() => n.value * (e.duration / s.value))
    function o() {
      e.playing || (t.value - 1 >= q2 && --t.value)
    }
    function a() {
      e.playing || (t.value + 1 <= Z2 && ++t.value)
    }
    function l(c) {
      if (e.duration === 0) return 0
      const u = c / r.value
      return Number((u * e.duration).toFixed(2))
    }
    function h(c) {
      if (e.duration === 0) return 0
      const u = c / e.duration
      return Math.floor(u * r.value)
    }
    return {
      scaleLevel: t,
      timeGap: s,
      spaceGap: n,
      canvasWidth: i,
      trackWidth: r,
      reduceScaleLevel: o,
      addScaleLevel: a,
      getCurrentTimefromOffsetX: l,
      getOffsetXfromCurrentTime: h,
    }
  })
function oa(e) {
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
const Q2 = { class: 'control-box' },
  J2 = { class: 'left-box' },
  tw = { class: 'center-box' },
  ew = { class: 'right-box' },
  sw = ['value'],
  nw = st({
    __name: 'Control',
    setup(e) {
      const t = Ci(),
        s = In()
      return (n, i) => {
        const r = ad
        return (
          tt(),
          ft('div', Q2, [
            nt('div', J2, [
              ct(r, {
                'icon-class': 'back',
                onClick: i[0] || (i[0] = () => F(He).emit('videoClipReset')),
              }),
            ]),
            nt('div', tw, [
              nt('span', null, gn(F(oa)(F(s).currentTime)), 1),
              yn(
                ct(
                  r,
                  { 'icon-class': 'play', onClick: F(s).videoPlay },
                  null,
                  8,
                  ['onClick'],
                ),
                [[xn, !F(s).playing]],
              ),
              yn(
                ct(
                  r,
                  { 'icon-class': 'pause', onClick: F(s).videoPause },
                  null,
                  8,
                  ['onClick'],
                ),
                [[xn, F(s).playing]],
              ),
              nt('span', null, gn(F(oa)(F(s).duration)), 1),
            ]),
            nt('div', ew, [
              ct(
                r,
                { 'icon-class': 'reduce-btn', onClick: F(t).reduceScaleLevel },
                null,
                8,
                ['onClick'],
              ),
              nt('progress', { max: '3', value: F(t).scaleLevel }, null, 8, sw),
              ct(
                r,
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
const iw = Ye(nw, [['__scopeId', 'data-v-0d87d339']]),
  rw = { class: 'timeline-box' },
  ow = ['width'],
  aw = st({
    __name: 'TimeLine',
    setup(e) {
      const t = In(),
        s = Ci(),
        n = ht()
      let i
      He.on('videoLoaded', () => {
        o(i, t.duration, s.timeGap, s.spaceGap)
      }),
        Zt(
          () => s.scaleLevel,
          () => {
            Ks(() => {
              o(i, t.duration, s.timeGap, s.spaceGap)
            })
          },
        ),
        Te(() => {
          ;(i = n.value.getContext('2d')),
            n.value.addEventListener('mousedown', r)
        })
      function r(a) {
        a.offsetX > s.trackWidth ||
          t.videoSkip(s.getCurrentTimefromOffsetX(a.offsetX))
      }
      function o(a, l, h, c) {
        const u = Math.ceil(l / h)
        for (let d = 0; d <= u; ++d) a.moveTo(d * c, 15), a.lineTo(d * c, 20)
        ;(a.lineWidth = 1),
          (a.strokeStyle = 'rgba(180, 195, 211)'),
          a.stroke(),
          (a.fillStyle = '#b4c3d3'),
          (a.textBaseline = 'top')
        for (let d = 0; d <= u; ++d) a.fillText(oa(d * h), d * c, 1)
      }
      return (a, l) => (
        tt(),
        ft('div', rw, [
          nt(
            'canvas',
            {
              ref_key: 'timeLineRef',
              ref: n,
              width: F(s).canvasWidth,
              height: '20',
            },
            null,
            8,
            ow,
          ),
        ])
      )
    },
  })
const lw = Ye(aw, [['__scopeId', 'data-v-e270524d']]),
  cw = st({
    __name: 'TimeStripe',
    setup(e) {
      const t = Ci(),
        s = In(),
        n = ht(0),
        i = Q(() => 3 + n.value),
        r = ht(!0),
        o = Q(() => t.spaceGap / (t.timeGap * 1e3))
      He.on('videoClipOpen', () => {
        r.value = !1
      }),
        Zt(
          () => s.currentTime,
          (l) => {
            s.playing ||
              ((n.value = t.getOffsetXfromCurrentTime(l)),
              r.value || (r.value = !0))
          },
        ),
        Zt(
          () => t.scaleLevel,
          () => {
            n.value = t.getOffsetXfromCurrentTime(s.currentTime)
          },
        ),
        Zt(
          () => s.playing,
          (l) => {
            l && a()
          },
        )
      function a() {
        const l = t.getOffsetXfromCurrentTime(s.endTime)
        n.value >= l && (n.value = t.getOffsetXfromCurrentTime(s.startTime))
        const h = n.value
        let c,
          u,
          d = !1
        function f(p) {
          c === void 0 && (c = p)
          const g = p - c
          if (u !== p) {
            const m = o.value * g
            ;(n.value = h + m > l ? l : h + m), s.playing || (d = !0)
          }
          n.value == l
            ? s.videoPauseByAuto()
            : ((u = p), d || window.requestAnimationFrame(f))
        }
        window.requestAnimationFrame(f)
      }
      return (l, h) =>
        yn(
          (tt(),
          ft(
            'div',
            {
              ref: 'timeStripeRef',
              class: 'time-stripe',
              style: me({ '--left': `${F(i)}px` }),
            },
            null,
            4,
          )),
          [[xn, F(r)]],
        )
    },
  })
const hw = Ye(cw, [['__scopeId', 'data-v-15d479d1']]),
  uw = { class: 'wrap' },
  dw = st({
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
        tt(),
        ft(
          'div',
          { class: 'wrap-box', style: me({ width: d.wrapWidth + 'px' }) },
          [
            nt('div', uw, [
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
const fw = Ye(dw, [['__scopeId', 'data-v-68dd4332']]),
  pw = st({
    __name: 'KeyFrameWrap',
    setup(e) {
      const t = Ci(),
        s = In(),
        n = ht(0),
        i = ht(0)
      function r() {
        const l = t.getCurrentTimefromOffsetX(n.value)
        s.changeStartTime(l), s.videoSkip(l)
      }
      function o() {
        const l = t.getCurrentTimefromOffsetX(t.trackWidth - i.value)
        s.changeEndTime(l), s.videoSkip(l)
      }
      function a() {
        ;(n.value = t.getOffsetXfromCurrentTime(s.startTime)),
          (i.value = t.trackWidth - t.getOffsetXfromCurrentTime(s.endTime))
      }
      return (
        He.on('videoLoaded', () => {
          a()
        }),
        He.on('videoClipReset', () => {
          s.changeStartTime(0),
            s.changeEndTime(s.duration),
            (n.value = 0),
            (i.value = 0)
        }),
        Zt(
          () => t.scaleLevel,
          () => {
            a()
          },
        ),
        (l, h) => (
          tt(),
          pe(
            fw,
            {
              'clip-left': F(n),
              'onUpdate:clipLeft':
                h[0] || (h[0] = (c) => (It(n) ? (n.value = c) : null)),
              'clip-right': F(i),
              'onUpdate:clipRight':
                h[1] || (h[1] = (c) => (It(i) ? (i.value = c) : null)),
              'wrap-width': F(t).trackWidth,
              onClipLeftChange: r,
              onClipRightChange: o,
              onClipOpen: h[2] || (h[2] = () => F(He).emit('videoClipOpen')),
            },
            { default: Xt(() => [ye(l.$slots, 'default')]), _: 3 },
            8,
            ['clip-left', 'clip-right', 'wrap-width'],
          )
        )
      )
    },
  })
var Et
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
})(Et || (Et = {}))
const mw = (() => {
    let e = 0
    return () => e++
  })(),
  gw = new Error('ffmpeg is not loaded, call `await ffmpeg.load()` first'),
  _w = new Error('called FFmpeg.terminate()')
var de, ys, qe, zs, Vs, ur, re
class yw {
  constructor() {
    is(this, de, null)
    is(this, ys, {})
    is(this, qe, {})
    is(this, zs, [])
    is(this, Vs, [])
    xt(this, 'loaded', !1)
    is(this, ur, () => {
      dt(this, de) &&
        (dt(this, de).onmessage = ({ data: { id: t, type: s, data: n } }) => {
          switch (s) {
            case Et.LOAD:
              ;(this.loaded = !0), dt(this, ys)[t](n)
              break
            case Et.MOUNT:
            case Et.UNMOUNT:
            case Et.EXEC:
            case Et.WRITE_FILE:
            case Et.READ_FILE:
            case Et.DELETE_FILE:
            case Et.RENAME:
            case Et.CREATE_DIR:
            case Et.LIST_DIR:
            case Et.DELETE_DIR:
              dt(this, ys)[t](n)
              break
            case Et.LOG:
              dt(this, zs).forEach((i) => i(n))
              break
            case Et.PROGRESS:
              dt(this, Vs).forEach((i) => i(n))
              break
            case Et.ERROR:
              dt(this, qe)[t](n)
              break
          }
          delete dt(this, ys)[t], delete dt(this, qe)[t]
        })
    })
    is(this, re, ({ type: t, data: s }, n = [], i) =>
      dt(this, de)
        ? new Promise((r, o) => {
            const a = mw()
            dt(this, de) &&
              dt(this, de).postMessage({ id: a, type: t, data: s }, n),
              (dt(this, ys)[a] = r),
              (dt(this, qe)[a] = o),
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
        : Promise.reject(gw),
    )
    xt(
      this,
      'load',
      (t = {}, { signal: s } = {}) => (
        dt(this, de) ||
          (On(
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
          dt(this, ur).call(this)),
        dt(this, re).call(this, { type: Et.LOAD, data: t }, void 0, s)
      ),
    )
    xt(this, 'exec', (t, s = -1, { signal: n } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.EXEC, data: { args: t, timeout: s } },
        void 0,
        n,
      ),
    )
    xt(this, 'terminate', () => {
      const t = Object.keys(dt(this, qe))
      for (const s of t)
        dt(this, qe)[s](_w), delete dt(this, qe)[s], delete dt(this, ys)[s]
      dt(this, de) &&
        (dt(this, de).terminate(), On(this, de, null), (this.loaded = !1))
    })
    xt(this, 'writeFile', (t, s, { signal: n } = {}) => {
      const i = []
      return (
        s instanceof Uint8Array && i.push(s.buffer),
        dt(this, re).call(
          this,
          { type: Et.WRITE_FILE, data: { path: t, data: s } },
          i,
          n,
        )
      )
    })
    xt(this, 'mount', (t, s, n) => {
      const i = []
      return dt(this, re).call(
        this,
        { type: Et.MOUNT, data: { fsType: t, options: s, mountPoint: n } },
        i,
      )
    })
    xt(this, 'unmount', (t) => {
      const s = []
      return dt(this, re).call(
        this,
        { type: Et.UNMOUNT, data: { mountPoint: t } },
        s,
      )
    })
    xt(this, 'readFile', (t, s = 'binary', { signal: n } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.READ_FILE, data: { path: t, encoding: s } },
        void 0,
        n,
      ),
    )
    xt(this, 'deleteFile', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.DELETE_FILE, data: { path: t } },
        void 0,
        s,
      ),
    )
    xt(this, 'rename', (t, s, { signal: n } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.RENAME, data: { oldPath: t, newPath: s } },
        void 0,
        n,
      ),
    )
    xt(this, 'createDir', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.CREATE_DIR, data: { path: t } },
        void 0,
        s,
      ),
    )
    xt(this, 'listDir', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.LIST_DIR, data: { path: t } },
        void 0,
        s,
      ),
    )
    xt(this, 'deleteDir', (t, { signal: s } = {}) =>
      dt(this, re).call(
        this,
        { type: Et.DELETE_DIR, data: { path: t } },
        void 0,
        s,
      ),
    )
  }
  on(t, s) {
    t === 'log'
      ? dt(this, zs).push(s)
      : t === 'progress' && dt(this, Vs).push(s)
  }
  off(t, s) {
    t === 'log'
      ? On(
          this,
          zs,
          dt(this, zs).filter((n) => n !== s),
        )
      : t === 'progress' &&
        On(
          this,
          Vs,
          dt(this, Vs).filter((n) => n !== s),
        )
  }
}
;(de = new WeakMap()),
  (ys = new WeakMap()),
  (qe = new WeakMap()),
  (zs = new WeakMap()),
  (Vs = new WeakMap()),
  (ur = new WeakMap()),
  (re = new WeakMap())
const xw = new Error('failed to get response body reader'),
  bw = new Error('failed to complete download'),
  vw = 'Content-Length',
  ww = (e) =>
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
  bh = async (e) => {
    let t
    if (typeof e == 'string')
      /data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)
        ? (t = atob(e.split(',')[1])
            .split('')
            .map((s) => s.charCodeAt(0)))
        : (t = await (await fetch(e)).arrayBuffer())
    else if (e instanceof URL) t = await (await fetch(e)).arrayBuffer()
    else if (e instanceof File || e instanceof Blob) t = await ww(e)
    else return new Uint8Array()
    return new Uint8Array(t)
  },
  Aw = async (e, t) => {
    var i
    const s = await fetch(e)
    let n
    try {
      const r = parseInt(s.headers.get(vw) || '-1'),
        o = (i = s.body) == null ? void 0 : i.getReader()
      if (!o) throw xw
      const a = []
      let l = 0
      for (;;) {
        const { done: u, value: d } = await o.read(),
          f = d ? d.length : 0
        if (u) {
          if (r != -1 && r !== l) throw bw
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
  vh = async (e, t, s = !1, n) => {
    const i = s ? await Aw(e, n) : await (await fetch(e)).arrayBuffer(),
      r = new Blob([i], { type: t })
    return URL.createObjectURL(r)
  }
class Sw {
  genKeyFrame(t, s) {
    return ['-i', t, '-vf', 'fps=1/0.5', '-s', '100x50', `${s}/frame-%02d.jpeg`]
  }
  videoToGIF(t, s, n, i, r, o, a, l) {
    return [
      '-ss',
      `${s}`,
      '-t',
      `${n - s}`,
      '-i',
      t,
      '-vf',
      `crop=${i}:${r}:${o}:${a}`,
      l,
    ]
  }
  watermarkInGIF(t, s, n, i, r) {
    return ['-i', t, '-i', s, '-filter_complex', `overlay=${n}:${i}`, r]
  }
  resizeGIF(t, s, n, i) {
    return ['-i', t, '-s', `${s}x${n}`, i]
  }
}
class Cw {
  constructor() {
    xt(this, 'ffmpeg')
    xt(this, 'isInited')
    xt(this, 'isVideoWrited')
    xt(this, 'nameConfig', {
      keyFrameFolder: 'key',
      videoName: 'video.mp4',
      gif1: 'crop.gif',
      gif2: 'watermark.gif',
      gif3: 'resize.gif',
    })
    xt(this, 'baseCommand', new Sw())
    ;(this.ffmpeg = new yw()), (this.isInited = !1), (this.isVideoWrited = !1)
  }
  async init() {
    const t = 'https://potati22.github.io/video2GIF'
    this.isInited = await this.ffmpeg.load({
      coreURL: await vh(`${t}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await vh(`${t}/ffmpeg-core.wasm`, 'application/wasm'),
    })
  }
  async writeVideo(t) {
    if (!this.isInited) throw new Error('先初始化FFmpeg')
    const s = await bh(t)
    await this.ffmpeg.writeFile(this.nameConfig.videoName, s),
      (this.isVideoWrited = !0)
  }
  async genKeyFrame() {
    if (!this.isVideoWrited) throw new Error('先读取Video')
    const t = this.nameConfig.keyFrameFolder,
      s = this.baseCommand.genKeyFrame(this.nameConfig.videoName, t)
    await this.ffmpeg.createDir(t), await this.ffmpeg.exec(s)
    const n = await this.ffmpeg.listDir(t),
      i = []
    for (let r = 2; r < n.length; ++r) {
      const o = await this.ffmpeg.readFile(`${t}/${n[r].name}`, 'binary')
      i.push(new Blob([o], { type: 'image/jpeg' }))
    }
    return i
  }
  async videoToGIF(t, s, n, i, r, o) {
    if (!this.isVideoWrited) throw new Error('先读取Video')
    const a = this.baseCommand.videoToGIF(
      this.nameConfig.videoName,
      t,
      s,
      n,
      i,
      r,
      o,
      this.nameConfig.gif1,
    )
    return await this.ffmpeg.exec(a), this.nameConfig.gif1
  }
  async watermarkInGIF(t, s, n, i) {
    const r = 'logo.png',
      o = await bh(s)
    await this.ffmpeg.writeFile(r, o)
    const a = this.baseCommand.watermarkInGIF(t, r, n, i, this.nameConfig.gif2)
    return await this.ffmpeg.exec(a), this.nameConfig.gif2
  }
  async resizeGIF(t, s, n) {
    const i = this.baseCommand.resizeGIF(t, s, n, this.nameConfig.gif3)
    return await this.ffmpeg.exec(i), this.nameConfig.gif3
  }
  async readGIF(t) {
    const s = await this.ffmpeg.readFile(t, 'binary')
    return URL.createObjectURL(new Blob([s], { type: 'image/gif' }))
  }
}
const If = new Cw(),
  Ew = ['width'],
  Pw = st({
    __name: 'KeyFrame',
    setup(e) {
      const t = Ci(),
        s = ht()
      let n,
        i = []
      Te(() => {
        n = s.value.getContext('2d')
      }),
        He.on('videoLoaded', async (a) => {
          await r(), o(), a.close()
        }),
        Zt(
          () => t.scaleLevel,
          () => {
            o()
          },
        )
      async function r() {
        i = await If.genKeyFrame()
          .then((a) => a)
          .catch(
            (a) => (
              Ua({ message: '关键帧预览图生成失败', type: 'error' }),
              console.log(a),
              []
            ),
          )
      }
      async function o() {
        if (i.length === 0) return
        const a = (t.timeGap * 2) / (t.spaceGap / 100),
          l = 100 / a
        for (let h = 0; h < i.length; h = h + a) {
          const c = await createImageBitmap(i[h])
          n.drawImage(c, h * l, 0),
            h + a >= i.length &&
              h * l + 100 < t.trackWidth &&
              n.drawImage(c, h * l + 100, 0)
        }
      }
      return (a, l) => (
        tt(),
        pe(pw, null, {
          default: Xt(() => [
            nt(
              'canvas',
              {
                ref_key: 'keyFrameRef',
                ref: s,
                width: F(t).trackWidth,
                height: '50',
              },
              null,
              8,
              Ew,
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  Tw = { class: 'footer-wrapper' },
  Mw = { class: 'panel-box' },
  Iw = st({
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
        tt(),
        ft('div', Tw, [
          nt(
            'div',
            { ref_key: 'controlLine', ref: s, class: 'control-line' },
            null,
            512,
          ),
          ct(iw),
          nt('div', Mw, [ct(lw), ct(hw), ct(Pw)]),
        ])
      )
    },
  })
const Rw = Ye(Iw, [['__scopeId', 'data-v-3aeb657c']]),
  kw = st({
    __name: 'index',
    setup(e) {
      const t = ht(250)
      function s(n) {
        t.value = n
      }
      return (n, i) => {
        const r = cy,
          o = ay,
          a = hy,
          l = ly,
          h = oy
        return (
          tt(),
          pe(
            h,
            { class: 'common-box' },
            {
              default: Xt(() => [
                ct(
                  r,
                  { class: 'header-box' },
                  { default: Xt(() => [ct($y)]), _: 1 },
                ),
                ct(h, null, {
                  default: Xt(() => [
                    ct(
                      o,
                      { class: 'aside-box' },
                      { default: Xt(() => [ct(ox)]), _: 1 },
                    ),
                    ct(
                      h,
                      { class: 'right-box' },
                      {
                        default: Xt(() => [
                          ct(
                            a,
                            { class: 'main-box' },
                            { default: Xt(() => [ct(K2)]), _: 1 },
                          ),
                          ct(
                            l,
                            {
                              class: 'footer-box',
                              style: me({ '--heigth': F(t) + 'px' }),
                            },
                            {
                              default: Xt(() => [
                                ct(Rw, { onChangeFooterHeight: s }),
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
const Lw = Ye(kw, [['__scopeId', 'data-v-ecd257fd']])
const Bw = st({
    __name: 'App',
    setup(e) {
      return (
        Te(() => {
          const t = my.service({
            lock: !0,
            text: '需要一段时间初始化网站资源，请耐心等候(如果加载时间超过5分钟，请刷新重试)',
            background: 'rgba(0, 0, 0, 0.7)',
          })
          If.init()
            .finally(() => t.close())
            .catch(() => {
              Ua({ message: 'ffmpeg无法加载', type: 'error' })
            })
        }),
        (t, s) => (tt(), pe(Lw))
      )
    },
  }),
  Ow = [
    { path: '/', redirect: '/record' },
    {
      name: 'Record',
      path: '/record',
      component: () =>
        xs(
          () => import('./index-c10cd080.js'),
          [
            './index-c10cd080.js',
            '..\\assets\\index-08c4522e.css',
            '..\\assets\\button-e76b79e2.css',
          ],
          import.meta.url,
        ),
    },
    {
      name: 'Cut',
      path: '/cut',
      component: () =>
        xs(
          () => import('./index-0835a243.js'),
          [
            './index-0835a243.js',
            './el-overlay-9d7012cf.js',
            './focus-trap-c8be6e9c.js',
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
        xs(
          () => import('./index-6d17580a.js'),
          [
            './index-6d17580a.js',
            './el-input-bb203cd7.js',
            './focus-trap-c8be6e9c.js',
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
        xs(
          () => import('./index-e650e66a.js'),
          [
            './index-e650e66a.js',
            './el-overlay-9d7012cf.js',
            './focus-trap-c8be6e9c.js',
            '..\\assets\\el-overlay-49152403.css',
            './el-input-bb203cd7.js',
            '..\\assets\\el-input-961013f5.css',
            '..\\assets\\index-350a53d7.css',
            '..\\assets\\button-e76b79e2.css',
          ],
          import.meta.url,
        ),
    },
  ],
  Fw = Z1({ history: f1(), routes: Ow }),
  $w = ax()
function Nw(e) {
  e.use($w)
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
const rl = Ru(Bw)
Nw(rl)
rl.use(Fw)
rl.mount('#app')
window.addEventListener('beforeunload', (e) => {
  e.preventDefault()
})
export {
  Zw as $,
  Vt as A,
  qs as B,
  Ea as C,
  jt as D,
  my as E,
  te as F,
  E_ as G,
  Cs as H,
  fn as I,
  Ks as J,
  At as K,
  Ux as L,
  df as M,
  ot as N,
  ns as O,
  qt as P,
  Wt as Q,
  Ee as R,
  Yt as S,
  zi as T,
  jo as U,
  it as V,
  Vw as W,
  i_ as X,
  Ss as Y,
  fp as Z,
  Ye as _,
  ct as a,
  zu as a$,
  Dn as a0,
  hc as a1,
  Ih as a2,
  rr as a3,
  se as a4,
  Da as a5,
  or as a6,
  _s as a7,
  A_ as a8,
  L_ as a9,
  jh as aA,
  Zp as aB,
  Gw as aC,
  jw as aD,
  Ls as aE,
  ne as aF,
  Pa as aG,
  Ev as aH,
  oh as aI,
  Mv as aJ,
  ae as aK,
  xi as aL,
  _b as aM,
  nf as aN,
  Yd as aO,
  Es as aP,
  Ct as aQ,
  Pt as aR,
  af as aS,
  Ar as aT,
  g_ as aU,
  zw as aV,
  Mr as aW,
  s_ as aX,
  mt as aY,
  Xw as aZ,
  Qw as a_,
  Bt as aa,
  gn as ab,
  pe as ac,
  su as ad,
  pc as ae,
  Bi as af,
  i6 as ag,
  qw as ah,
  F_ as ai,
  Qu as aj,
  Ki as ak,
  gg as al,
  Jp as am,
  yn as an,
  Cu as ao,
  Uw as ap,
  xn as aq,
  wi as ar,
  Ww as as,
  za as at,
  o6 as au,
  pi as av,
  Z as aw,
  Xi as ax,
  pp as ay,
  Tn as az,
  Ua as b,
  th as b$,
  Yw as b0,
  c6 as b1,
  Gt as b2,
  Ix as b3,
  Iv as b4,
  Cv as b5,
  We as b6,
  Re as b7,
  Od as b8,
  Gx as b9,
  u_ as bA,
  og as bB,
  bt as bC,
  Je as bD,
  Ce as bE,
  rn as bF,
  Kw as bG,
  xa as bH,
  Hp as bI,
  e_ as bJ,
  hu as bK,
  e6 as bL,
  Jw as bM,
  s6 as bN,
  Cn as bO,
  na as bP,
  u2 as bQ,
  Sf as bR,
  B2 as bS,
  O2 as bT,
  Si as bU,
  ee as bV,
  il as bW,
  F2 as bX,
  _f as bY,
  Qs as bZ,
  je as b_,
  As as ba,
  xb as bb,
  Ht as bc,
  $b as bd,
  Qc as be,
  nb as bf,
  lo as bg,
  le as bh,
  $d as bi,
  _e as bj,
  ge as bk,
  wv as bl,
  Fa as bm,
  Fu as bn,
  Oa as bo,
  t_ as bp,
  Wu as bq,
  La as br,
  Wp as bs,
  a6 as bt,
  T_ as bu,
  Hw as bv,
  r6 as bw,
  n6 as bx,
  t6 as by,
  vg as bz,
  ft as c,
  Rx as c0,
  xf as c1,
  st as d,
  He as e,
  If as f,
  l6 as g,
  Su as h,
  Q as i,
  Zt as j,
  Te as k,
  ye as l,
  nt as m,
  h6 as n,
  tt as o,
  me as p,
  F as q,
  ht as r,
  ad as s,
  Jh as t,
  In as u,
  tu as v,
  Xt as w,
  It as x,
  O_ as y,
  ss as z,
}
