import {
  L as b,
  U as mt,
  T as xe,
  bL as J,
  aN as G,
  bi as ke,
  aJ as Ue,
  O as E,
  aO as U,
  P as _t,
  b3 as Ae,
  R as bt,
  bM as L,
  bg as w,
  bh as S,
  aI as Z,
  aH as D,
  be as I,
  bN as yt,
  bO as Tt,
  N as wt,
  bP as ie,
  bQ as H,
  b9 as K,
  bR as St,
  bS as k,
  bT as $,
  bU as vt,
  b4 as B,
  bV as Ct,
  D as X,
  bW as Mt,
  bX as ee,
  bY as Pt,
  M as me,
  bZ as ne,
  n as _e,
  Q as F,
  b_ as Bt,
} from './index-2989de58.js'
import {
  U as Y,
  T as A,
  R as oe,
  S as Ge,
  i as le,
  b as ze,
  c as He,
  j as Ie,
  e as Ft,
  r as Oe,
  o as Rt,
  n as We,
  a as kt,
  g as Ut,
  k as At,
  m as Gt,
  B as De,
} from './colorToUniform-f839a808.js'
import { C as O } from './CanvasPool-3a305dd3.js'
import { b as zt } from './batchSamplersUniformGroup-913fcf01.js'
class Le {
  static init(e) {
    Object.defineProperty(this, 'resizeTo', {
      set(t) {
        globalThis.removeEventListener('resize', this.queueResize),
          (this._resizeTo = t),
          t &&
            (globalThis.addEventListener('resize', this.queueResize),
            this.resize())
      },
      get() {
        return this._resizeTo
      },
    }),
      (this.queueResize = () => {
        this._resizeTo &&
          (this._cancelResize(),
          (this._resizeId = requestAnimationFrame(() => this.resize())))
      }),
      (this._cancelResize = () => {
        this._resizeId &&
          (cancelAnimationFrame(this._resizeId), (this._resizeId = null))
      }),
      (this.resize = () => {
        if (!this._resizeTo) return
        this._cancelResize()
        let t, r
        if (this._resizeTo === globalThis.window)
          (t = globalThis.innerWidth), (r = globalThis.innerHeight)
        else {
          const { clientWidth: s, clientHeight: n } = this._resizeTo
          ;(t = s), (r = n)
        }
        this.renderer.resize(t, r), this.render()
      }),
      (this._resizeId = null),
      (this._resizeTo = null),
      (this.resizeTo = e.resizeTo || null)
  }
  static destroy() {
    globalThis.removeEventListener('resize', this.queueResize),
      this._cancelResize(),
      (this._cancelResize = null),
      (this.queueResize = null),
      (this.resizeTo = null),
      (this.resize = null)
  }
}
Le.extension = b.Application
class Ee {
  static init(e) {
    ;(e = Object.assign({ autoStart: !0, sharedTicker: !1 }, e)),
      Object.defineProperty(this, 'ticker', {
        set(t) {
          this._ticker && this._ticker.remove(this.render, this),
            (this._ticker = t),
            t && t.add(this.render, this, mt.LOW)
        },
        get() {
          return this._ticker
        },
      }),
      (this.stop = () => {
        this._ticker.stop()
      }),
      (this.start = () => {
        this._ticker.start()
      }),
      (this._ticker = null),
      (this.ticker = e.sharedTicker ? xe.shared : new xe()),
      e.autoStart && this.start()
  }
  static destroy() {
    if (this._ticker) {
      const e = this._ticker
      ;(this.ticker = null), e.destroy()
    }
  }
}
Ee.extension = b.Application
class $e {
  constructor(e) {
    this._renderer = e
  }
  push(e, t, r) {
    this._renderer.renderPipes.batch.break(r),
      r.add({
        renderPipeId: 'filter',
        canBundle: !1,
        action: 'pushFilter',
        container: t,
        filterEffect: e,
      })
  }
  pop(e, t, r) {
    this._renderer.renderPipes.batch.break(r),
      r.add({ renderPipeId: 'filter', action: 'popFilter', canBundle: !1 })
  }
  execute(e) {
    e.action === 'pushFilter'
      ? this._renderer.filter.push(e)
      : e.action === 'popFilter' && this._renderer.filter.pop()
  }
  destroy() {
    this._renderer = null
  }
}
$e.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'filter',
}
const Ht = new G()
function It(i, e) {
  return (
    e.clear(),
    Xe(i, e),
    e.isValid || e.set(0, 0, 0, 0),
    i.isRenderGroupRoot
      ? e.applyMatrix(i.renderGroup.localTransform)
      : e.applyMatrix(i.renderGroup.worldTransform),
    e
  )
}
function Xe(i, e) {
  if (i.localDisplayStatus !== 7 || !i.measurable) return
  const t = !!i.effects.length
  let r = e
  if (((i.isRenderGroupRoot || t) && (r = J.get().clear()), i.boundsArea))
    e.addRect(i.boundsArea, i.worldTransform)
  else {
    if (i.renderPipeId) {
      const n = i.bounds
      r.addFrame(n.minX, n.minY, n.maxX, n.maxY, i.groupTransform)
    }
    const s = i.children
    for (let n = 0; n < s.length; n++) Xe(s[n], r)
  }
  if (t) {
    let s = !1
    for (let n = 0; n < i.effects.length; n++)
      i.effects[n].addBounds &&
        (s || ((s = !0), r.applyMatrix(i.renderGroup.worldTransform)),
        i.effects[n].addBounds(r, !0))
    s &&
      (r.applyMatrix(i.renderGroup.worldTransform.copyTo(Ht).invert()),
      e.addBounds(r, i.relativeGroupTransform)),
      e.addBounds(r),
      J.return(r)
  } else
    i.isRenderGroupRoot &&
      (e.addBounds(r, i.relativeGroupTransform), J.return(r))
}
function Ot(i, e) {
  e.clear()
  const t = e.matrix
  for (let r = 0; r < i.length; r++) {
    const s = i[r]
    s.globalDisplayStatus < 7 || ((e.matrix = s.worldTransform), s.addBounds(e))
  }
  return (e.matrix = t), e
}
const Wt = new ke({
  attributes: {
    aPosition: {
      buffer: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      location: 0,
      format: 'float32x2',
      stride: 2 * 4,
      offset: 0,
    },
  },
  indexBuffer: new Uint32Array([0, 1, 2, 0, 2, 3]),
})
class Ye {
  constructor(e) {
    ;(this._filterStackIndex = 0),
      (this._filterStack = []),
      (this._filterGlobalUniforms = new Y({
        uInputSize: { value: new Float32Array(4), type: 'vec4<f32>' },
        uInputPixel: { value: new Float32Array(4), type: 'vec4<f32>' },
        uInputClamp: { value: new Float32Array(4), type: 'vec4<f32>' },
        uOutputFrame: { value: new Float32Array(4), type: 'vec4<f32>' },
        uGlobalFrame: { value: new Float32Array(4), type: 'vec4<f32>' },
        uOutputTexture: { value: new Float32Array(4), type: 'vec4<f32>' },
      })),
      (this._globalFilterBindGroup = new Ue({})),
      (this.renderer = e)
  }
  get activeBackTexture() {
    var e
    return (e = this._activeFilterData) == null ? void 0 : e.backTexture
  }
  push(e) {
    var f
    const t = this.renderer,
      r = e.filterEffect.filters
    this._filterStack[this._filterStackIndex] ||
      (this._filterStack[this._filterStackIndex] = this._getFilterData())
    const s = this._filterStack[this._filterStackIndex]
    if ((this._filterStackIndex++, r.length === 0)) {
      s.skip = !0
      return
    }
    const n = s.bounds
    e.renderables
      ? Ot(e.renderables, n)
      : e.filterEffect.filterArea
      ? (n.clear(),
        n.addRect(e.filterEffect.filterArea),
        n.applyMatrix(e.container.worldTransform))
      : It(e.container, n)
    const a = t.renderTarget.rootRenderTarget.colorTexture.source
    let o = a._resolution,
      l = 0,
      h = a.antialias,
      c = !1,
      d = !1
    for (let p = 0; p < r.length; p++) {
      const g = r[p]
      if (
        ((o = Math.min(o, g.resolution)),
        (l += g.padding),
        g.antialias !== 'inherit' &&
          (g.antialias === 'on' ? (h = !0) : (h = !1)),
        !!!(g.compatibleRenderers & t.type))
      ) {
        d = !1
        break
      }
      if (
        g.blendRequired &&
        !(((f = t.backBuffer) == null ? void 0 : f.useBackBuffer) ?? !0)
      ) {
        E(
          'Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options.',
        ),
          (d = !1)
        break
      }
      ;(d = g.enabled || d), (c = c || g.blendRequired)
    }
    if (!d) {
      s.skip = !0
      return
    }
    const u = t.renderTarget.rootViewPort
    if (
      (n
        .scale(o)
        .fitBounds(0, u.width, 0, u.height)
        .scale(1 / o)
        .pad(l)
        .ceil(),
      !n.isPositive)
    ) {
      s.skip = !0
      return
    }
    ;(s.skip = !1),
      (s.bounds = n),
      (s.blendRequired = c),
      (s.container = e.container),
      (s.filterEffect = e.filterEffect),
      (s.previousRenderSurface = t.renderTarget.renderSurface),
      (s.inputTexture = A.getOptimalTexture(n.width, n.height, o, h)),
      t.renderTarget.bind(s.inputTexture, !0),
      t.globalUniforms.push({ offset: n })
  }
  pop() {
    const e = this.renderer
    this._filterStackIndex--
    const t = this._filterStack[this._filterStackIndex]
    if (t.skip) return
    this._activeFilterData = t
    const r = t.inputTexture,
      s = t.bounds
    let n = U.EMPTY
    if ((e.renderTarget.finishRenderPass(), t.blendRequired)) {
      const o =
          this._filterStackIndex > 0
            ? this._filterStack[this._filterStackIndex - 1].bounds
            : null,
        l = e.renderTarget.getRenderTarget(t.previousRenderSurface)
      n = this.getBackTexture(l, s, o)
    }
    t.backTexture = n
    const a = t.filterEffect.filters
    if (
      (this._globalFilterBindGroup.setResource(r.source.style, 2),
      this._globalFilterBindGroup.setResource(n.source, 3),
      e.globalUniforms.pop(),
      a.length === 1)
    )
      a[0].apply(this, r, t.previousRenderSurface, !1), A.returnTexture(r)
    else {
      let o = t.inputTexture,
        l = A.getOptimalTexture(s.width, s.height, o.source._resolution, !1),
        h = 0
      for (h = 0; h < a.length - 1; ++h) {
        a[h].apply(this, o, l, !0)
        const d = o
        ;(o = l), (l = d)
      }
      a[h].apply(this, o, t.previousRenderSurface, !1),
        A.returnTexture(o),
        A.returnTexture(l)
    }
    t.blendRequired && A.returnTexture(n)
  }
  getBackTexture(e, t, r) {
    const s = e.colorTexture.source._resolution,
      n = A.getOptimalTexture(t.width, t.height, s, !1)
    let a = t.minX,
      o = t.minY
    r && ((a -= r.minX), (o -= r.minY)),
      (a = Math.floor(a * s)),
      (o = Math.floor(o * s))
    const l = Math.ceil(t.width * s),
      h = Math.ceil(t.height * s)
    return (
      this.renderer.renderTarget.copyToTexture(
        e,
        n,
        { x: a, y: o },
        { width: l, height: h },
        { x: 0, y: 0 },
      ),
      n
    )
  }
  applyFilter(e, t, r, s) {
    const n = this.renderer,
      a = this._filterStack[this._filterStackIndex],
      o = a.bounds,
      l = _t.shared,
      c = a.previousRenderSurface === r
    let d =
        this.renderer.renderTarget.rootRenderTarget.colorTexture.source
          ._resolution,
      u = this._filterStackIndex - 1
    for (; u > 0 && this._filterStack[u].skip; ) --u
    u > 0 && (d = this._filterStack[u].inputTexture.source._resolution)
    const f = this._filterGlobalUniforms,
      p = f.uniforms,
      g = p.uOutputFrame,
      x = p.uInputSize,
      m = p.uInputPixel,
      _ = p.uInputClamp,
      y = p.uGlobalFrame,
      T = p.uOutputTexture
    if (c) {
      let C = this._filterStackIndex
      for (; C > 0; ) {
        C--
        const M = this._filterStack[this._filterStackIndex - 1]
        if (!M.skip) {
          ;(l.x = M.bounds.minX), (l.y = M.bounds.minY)
          break
        }
      }
      ;(g[0] = o.minX - l.x), (g[1] = o.minY - l.y)
    } else (g[0] = 0), (g[1] = 0)
    ;(g[2] = t.frame.width),
      (g[3] = t.frame.height),
      (x[0] = t.source.width),
      (x[1] = t.source.height),
      (x[2] = 1 / x[0]),
      (x[3] = 1 / x[1]),
      (m[0] = t.source.pixelWidth),
      (m[1] = t.source.pixelHeight),
      (m[2] = 1 / m[0]),
      (m[3] = 1 / m[1]),
      (_[0] = 0.5 * m[2]),
      (_[1] = 0.5 * m[3]),
      (_[2] = t.frame.width * x[2] - 0.5 * m[2]),
      (_[3] = t.frame.height * x[3] - 0.5 * m[3])
    const v = this.renderer.renderTarget.rootRenderTarget.colorTexture
    ;(y[0] = l.x * d),
      (y[1] = l.y * d),
      (y[2] = v.source.width * d),
      (y[3] = v.source.height * d)
    const R = this.renderer.renderTarget.getRenderTarget(r)
    if (
      (n.renderTarget.bind(r, !!s),
      r instanceof U
        ? ((T[0] = r.frame.width), (T[1] = r.frame.height))
        : ((T[0] = R.width), (T[1] = R.height)),
      (T[2] = R.isRoot ? -1 : 1),
      f.update(),
      n.renderPipes.uniformBatch)
    ) {
      const C = n.renderPipes.uniformBatch.getUboResource(f)
      this._globalFilterBindGroup.setResource(C, 0)
    } else this._globalFilterBindGroup.setResource(f, 0)
    this._globalFilterBindGroup.setResource(t.source, 1),
      this._globalFilterBindGroup.setResource(t.source.style, 2),
      (e.groups[0] = this._globalFilterBindGroup),
      n.encoder.draw({
        geometry: Wt,
        shader: e,
        state: e._state,
        topology: 'triangle-list',
      }),
      n.type === oe.WEBGL && n.renderTarget.finishRenderPass()
  }
  _getFilterData() {
    return {
      skip: !1,
      inputTexture: null,
      bounds: new Ae(),
      container: null,
      filterEffect: null,
      blendRequired: !1,
      previousRenderSurface: null,
    }
  }
  calculateSpriteMatrix(e, t) {
    const r = this._activeFilterData,
      s = e.set(
        r.inputTexture._source.width,
        0,
        0,
        r.inputTexture._source.height,
        r.bounds.minX,
        r.bounds.minY,
      ),
      n = t.worldTransform.copyTo(G.shared)
    return (
      n.invert(),
      s.prepend(n),
      s.scale(1 / t.texture.frame.width, 1 / t.texture.frame.height),
      s.translate(t.anchor.x, t.anchor.y),
      s
    )
  }
}
Ye.extension = { type: [b.WebGLSystem, b.WebGPUSystem], name: 'filter' }
class N extends bt {
  constructor(e) {
    e instanceof L && (e = { context: e })
    const { context: t, roundPixels: r, ...s } = e || {}
    super({ label: 'Graphics', ...s }),
      (this.canBundle = !0),
      (this.renderPipeId = 'graphics'),
      (this._roundPixels = 0),
      t ? (this._context = t) : (this._context = this._ownedContext = new L()),
      this._context.on('update', this.onViewUpdate, this),
      (this.allowChildren = !1),
      (this.roundPixels = r ?? !1)
  }
  set context(e) {
    e !== this._context &&
      (this._context.off('update', this.onViewUpdate, this),
      (this._context = e),
      this._context.on('update', this.onViewUpdate, this),
      this.onViewUpdate())
  }
  get context() {
    return this._context
  }
  get bounds() {
    return this._context.bounds
  }
  addBounds(e) {
    e.addBounds(this._context.bounds)
  }
  containsPoint(e) {
    return this._context.containsPoint(e)
  }
  get roundPixels() {
    return !!this._roundPixels
  }
  set roundPixels(e) {
    this._roundPixels = e ? 1 : 0
  }
  onViewUpdate() {
    ;(this._didChangeId += 4096),
      (this._didGraphicsUpdate = !0),
      !this.didViewUpdate &&
        ((this.didViewUpdate = !0),
        this.renderGroup && this.renderGroup.onChildViewUpdate(this))
  }
  destroy(e) {
    this._ownedContext && !e
      ? this._ownedContext.destroy(e)
      : (e === !0 || (e == null ? void 0 : e.context) === !0) &&
        this._context.destroy(e),
      (this._ownedContext = null),
      (this._context = null),
      super.destroy(e)
  }
  _callContextMethod(e, t) {
    return this.context[e](...t), this
  }
  setFillStyle(...e) {
    return this._callContextMethod('setFillStyle', e)
  }
  setStrokeStyle(...e) {
    return this._callContextMethod('setStrokeStyle', e)
  }
  fill(...e) {
    return this._callContextMethod('fill', e)
  }
  stroke(...e) {
    return this._callContextMethod('stroke', e)
  }
  texture(...e) {
    return this._callContextMethod('texture', e)
  }
  beginPath() {
    return this._callContextMethod('beginPath', [])
  }
  cut() {
    return this._callContextMethod('cut', [])
  }
  arc(...e) {
    return this._callContextMethod('arc', e)
  }
  arcTo(...e) {
    return this._callContextMethod('arcTo', e)
  }
  arcToSvg(...e) {
    return this._callContextMethod('arcToSvg', e)
  }
  bezierCurveTo(...e) {
    return this._callContextMethod('bezierCurveTo', e)
  }
  closePath() {
    return this._callContextMethod('closePath', [])
  }
  ellipse(...e) {
    return this._callContextMethod('ellipse', e)
  }
  circle(...e) {
    return this._callContextMethod('circle', e)
  }
  path(...e) {
    return this._callContextMethod('path', e)
  }
  lineTo(...e) {
    return this._callContextMethod('lineTo', e)
  }
  moveTo(...e) {
    return this._callContextMethod('moveTo', e)
  }
  quadraticCurveTo(...e) {
    return this._callContextMethod('quadraticCurveTo', e)
  }
  rect(...e) {
    return this._callContextMethod('rect', e)
  }
  roundRect(...e) {
    return this._callContextMethod('roundRect', e)
  }
  poly(...e) {
    return this._callContextMethod('poly', e)
  }
  regularPoly(...e) {
    return this._callContextMethod('regularPoly', e)
  }
  roundPoly(...e) {
    return this._callContextMethod('roundPoly', e)
  }
  roundShape(...e) {
    return this._callContextMethod('roundShape', e)
  }
  filletRect(...e) {
    return this._callContextMethod('filletRect', e)
  }
  chamferRect(...e) {
    return this._callContextMethod('chamferRect', e)
  }
  star(...e) {
    return this._callContextMethod('star', e)
  }
  svg(...e) {
    return this._callContextMethod('svg', e)
  }
  restore(...e) {
    return this._callContextMethod('restore', e)
  }
  save() {
    return this._callContextMethod('save', [])
  }
  getTransform() {
    return this.context.getTransform()
  }
  resetTransform() {
    return this._callContextMethod('resetTransform', [])
  }
  rotateTransform(...e) {
    return this._callContextMethod('rotate', e)
  }
  scaleTransform(...e) {
    return this._callContextMethod('scale', e)
  }
  setTransform(...e) {
    return this._callContextMethod('setTransform', e)
  }
  transform(...e) {
    return this._callContextMethod('transform', e)
  }
  translateTransform(...e) {
    return this._callContextMethod('translate', e)
  }
  clear() {
    return this._callContextMethod('clear', [])
  }
  get fillStyle() {
    return this._context.fillStyle
  }
  set fillStyle(e) {
    this._context.fillStyle = e
  }
  get strokeStyle() {
    return this._context.strokeStyle
  }
  set strokeStyle(e) {
    this._context.strokeStyle = e
  }
  clone(e = !1) {
    return e
      ? new N(this._context.clone())
      : ((this._ownedContext = null), new N(this._context))
  }
  lineStyle(e, t, r) {
    w(
      S,
      'Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.',
    )
    const s = {}
    return (
      e && (s.width = e),
      t && (s.color = t),
      r && (s.alpha = r),
      (this.context.strokeStyle = s),
      this
    )
  }
  beginFill(e, t) {
    w(
      S,
      'Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.',
    )
    const r = {}
    return (
      e && (r.color = e), t && (r.alpha = t), (this.context.fillStyle = r), this
    )
  }
  endFill() {
    w(
      S,
      'Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.',
    ),
      this.context.fill()
    const e = this.context.strokeStyle
    return (
      (e.width !== L.defaultStrokeStyle.width ||
        e.color !== L.defaultStrokeStyle.color ||
        e.alpha !== L.defaultStrokeStyle.alpha) &&
        this.context.stroke(),
      this
    )
  }
  drawCircle(...e) {
    return (
      w(S, 'Graphics#drawCircle has been renamed to Graphics#circle'),
      this._callContextMethod('circle', e)
    )
  }
  drawEllipse(...e) {
    return (
      w(S, 'Graphics#drawEllipse has been renamed to Graphics#ellipse'),
      this._callContextMethod('ellipse', e)
    )
  }
  drawPolygon(...e) {
    return (
      w(S, 'Graphics#drawPolygon has been renamed to Graphics#poly'),
      this._callContextMethod('poly', e)
    )
  }
  drawRect(...e) {
    return (
      w(S, 'Graphics#drawRect has been renamed to Graphics#rect'),
      this._callContextMethod('rect', e)
    )
  }
  drawRoundedRect(...e) {
    return (
      w(S, 'Graphics#drawRoundedRect has been renamed to Graphics#roundRect'),
      this._callContextMethod('roundRect', e)
    )
  }
  drawStar(...e) {
    return (
      w(S, 'Graphics#drawStar has been renamed to Graphics#star'),
      this._callContextMethod('star', e)
    )
  }
}
const Ve = class je extends ke {
  constructor(...e) {
    let t = e[0] ?? {}
    t instanceof Float32Array &&
      (w(S, 'use new MeshGeometry({ positions, uvs, indices }) instead'),
      (t = { positions: t, uvs: e[1], indices: e[2] })),
      (t = { ...je.defaultOptions, ...t })
    const r = t.positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      s = t.uvs || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      n = t.indices || new Uint32Array([0, 1, 2, 0, 2, 3]),
      a = t.shrinkBuffersToFit,
      o = new Z({
        data: r,
        label: 'attribute-mesh-positions',
        shrinkToFit: a,
        usage: D.VERTEX | D.COPY_DST,
      }),
      l = new Z({
        data: s,
        label: 'attribute-mesh-uvs',
        shrinkToFit: a,
        usage: D.VERTEX | D.COPY_DST,
      }),
      h = new Z({
        data: n,
        label: 'index-mesh-buffer',
        shrinkToFit: a,
        usage: D.INDEX | D.COPY_DST,
      })
    super({
      attributes: {
        aPosition: { buffer: o, format: 'float32x2', stride: 2 * 4, offset: 0 },
        aUV: { buffer: l, format: 'float32x2', stride: 2 * 4, offset: 0 },
      },
      indexBuffer: h,
      topology: t.topology,
    }),
      (this.batchMode = 'auto')
  }
  get positions() {
    return this.attributes.aPosition.buffer.data
  }
  set positions(e) {
    this.attributes.aPosition.buffer.data = e
  }
  get uvs() {
    return this.attributes.aUV.buffer.data
  }
  set uvs(e) {
    this.attributes.aUV.buffer.data = e
  }
  get indices() {
    return this.indexBuffer.data
  }
  set indices(e) {
    this.indexBuffer.data = e
  }
}
Ve.defaultOptions = { topology: 'triangle-list', shrinkBuffersToFit: !1 }
let ce = Ve
function q(i, e) {
  if (i.texture === U.WHITE && !i.fill)
    return I.shared.setValue(i.color).toHex()
  if (i.fill) {
    if (i.fill instanceof yt) {
      const t = i.fill,
        r = e.createPattern(t.texture.source.resource, 'repeat'),
        s = t.transform.copyTo(G.shared)
      return (
        s.scale(t.texture.frame.width, t.texture.frame.height),
        r.setTransform(s),
        r
      )
    } else if (i.fill instanceof Tt) {
      const t = i.fill
      if (t.type === 'linear') {
        const r = e.createLinearGradient(t.x0, t.y0, t.x1, t.y1)
        return (
          t.gradientStops.forEach((s) => {
            r.addColorStop(s.offset, I.shared.setValue(s.color).toHex())
          }),
          r
        )
      }
    }
  } else {
    const t = e.createPattern(i.texture.source.resource, 'repeat'),
      r = i.matrix.copyTo(G.shared)
    return (
      r.scale(i.texture.frame.width, i.texture.frame.height),
      t.setTransform(r),
      t
    )
  }
  return E('FillStyle not recognised', i), 'red'
}
class Ke extends wt {
  constructor() {
    super(...arguments),
      (this.chars = Object.create(null)),
      (this.lineHeight = 0),
      (this.fontFamily = ''),
      (this.fontMetrics = { fontSize: 0, ascent: 0, descent: 0 }),
      (this.baseLineOffset = 0),
      (this.distanceField = { type: 'none', range: 0 }),
      (this.pages = []),
      (this.baseMeasurementFontSize = 100),
      (this.baseRenderedFontSize = 100)
  }
  get font() {
    return (
      w(
        S,
        'BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead.',
      ),
      this.fontFamily
    )
  }
  get pageTextures() {
    return (
      w(
        S,
        'BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.',
      ),
      this.pages
    )
  }
  get size() {
    return (
      w(
        S,
        'BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead.',
      ),
      this.fontMetrics.fontSize
    )
  }
  get distanceFieldRange() {
    return (
      w(
        S,
        'BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead.',
      ),
      this.distanceField.range
    )
  }
  get distanceFieldType() {
    return (
      w(
        S,
        'BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead.',
      ),
      this.distanceField.type
    )
  }
  destroy(e = !1) {
    this.emit('destroy', this), this.removeAllListeners()
    for (const t in this.chars) this.chars[t].texture.destroy()
    ;(this.chars = null),
      e &&
        (this.pages.forEach((t) => t.texture.destroy(!0)), (this.pages = null))
  }
}
function Ne(i) {
  if (i === '') return []
  typeof i == 'string' && (i = [i])
  const e = []
  for (let t = 0, r = i.length; t < r; t++) {
    const s = i[t]
    if (Array.isArray(s)) {
      if (s.length !== 2)
        throw new Error(
          `[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`,
        )
      if (s[0].length === 0 || s[1].length === 0)
        throw new Error('[BitmapFont]: Invalid character delimiter.')
      const n = s[0].charCodeAt(0),
        a = s[1].charCodeAt(0)
      if (a < n) throw new Error('[BitmapFont]: Invalid character range.')
      for (let o = n, l = a; o <= l; o++) e.push(String.fromCharCode(o))
    } else e.push(...Array.from(s))
  }
  if (e.length === 0)
    throw new Error('[BitmapFont]: Empty set when resolving characters.')
  return e
}
class be extends Ke {
  constructor(e) {
    super(),
      (this.resolution = 1),
      (this.pages = []),
      (this._padding = 4),
      (this._measureCache = Object.create(null)),
      (this._currentChars = []),
      (this._currentX = 0),
      (this._currentY = 0),
      (this._currentPageIndex = -1),
      (this._skipKerning = !1)
    const t = e,
      r = t.style.clone()
    t.overrideFill &&
      ((r._fill.color = 16777215),
      (r._fill.alpha = 1),
      (r._fill.texture = U.WHITE),
      (r._fill.fill = null))
    const s = r.fontSize
    r.fontSize = this.baseMeasurementFontSize
    const n = ie(r)
    t.overrideSize
      ? r._stroke && (r._stroke.width *= this.baseRenderedFontSize / s)
      : (r.fontSize = this.baseRenderedFontSize = s),
      (this._style = r),
      (this._skipKerning = t.skipKerning ?? !1),
      (this.resolution = t.resolution ?? 1),
      (this._padding = t.padding ?? 4),
      (this.fontMetrics = H.measureFont(n)),
      (this.lineHeight =
        r.lineHeight || this.fontMetrics.fontSize || r.fontSize)
  }
  ensureCharacters(e) {
    var g, x
    const t = Ne(e)
      .filter((m) => !this._currentChars.includes(m))
      .filter((m, _, y) => y.indexOf(m) === _)
    if (!t.length) return
    this._currentChars = [...this._currentChars, ...t]
    let r
    this._currentPageIndex === -1
      ? (r = this._nextPage())
      : (r = this.pages[this._currentPageIndex])
    let { canvas: s, context: n } = r.canvasAndContext,
      a = r.texture.source
    const o = this._style
    let l = this._currentX,
      h = this._currentY
    const c = this.baseRenderedFontSize / this.baseMeasurementFontSize,
      d = this._padding * c,
      u = o.fontStyle === 'italic' ? 2 : 1
    let f = 0,
      p = !1
    for (let m = 0; m < t.length; m++) {
      const _ = t[m],
        y = H.measureText(_, o, s, !1)
      y.lineHeight = y.height
      const T = u * y.width * c,
        v = y.height * c,
        R = T + d * 2,
        C = v + d * 2
      if (
        ((p = !1),
        _ !==
          `
` &&
          _ !== '\r' &&
          _ !== '	' &&
          _ !== ' ' &&
          ((p = !0), (f = Math.ceil(Math.max(C, f)))),
        l + R > 512 && ((h += f), (f = C), (l = 0), h + f > 512))
      ) {
        a.update()
        const z = this._nextPage()
        ;(s = z.canvasAndContext.canvas),
          (n = z.canvasAndContext.context),
          (a = z.texture.source),
          (h = 0)
      }
      const M =
        T / c -
        (((g = o.dropShadow) == null ? void 0 : g.distance) ?? 0) -
        (((x = o._stroke) == null ? void 0 : x.width) ?? 0)
      if (
        ((this.chars[_] = {
          id: _.codePointAt(0),
          xOffset: -this._padding,
          yOffset: -this._padding,
          xAdvance: M,
          kerning: {},
        }),
        p)
      ) {
        this._drawGlyph(n, y, l + d, h + d, c, o)
        const z = a.width * c,
          W = a.height * c,
          Q = new K(
            (l / z) * a.width,
            (h / W) * a.height,
            (R / z) * a.width,
            (C / W) * a.height,
          )
        ;(this.chars[_].texture = new U({ source: a, frame: Q })),
          (l += Math.ceil(R))
      }
    }
    a.update(),
      (this._currentX = l),
      (this._currentY = h),
      this._skipKerning && this._applyKerning(t, n)
  }
  get pageTextures() {
    return (
      w(
        S,
        'BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.',
      ),
      this.pages
    )
  }
  _applyKerning(e, t) {
    const r = this._measureCache
    for (let s = 0; s < e.length; s++) {
      const n = e[s]
      for (let a = 0; a < this._currentChars.length; a++) {
        const o = this._currentChars[a]
        let l = r[n]
        l || (l = r[n] = t.measureText(n).width)
        let h = r[o]
        h || (h = r[o] = t.measureText(o).width)
        let c = t.measureText(n + o).width,
          d = c - (l + h)
        d && (this.chars[n].kerning[o] = d),
          (c = t.measureText(n + o).width),
          (d = c - (l + h)),
          d && (this.chars[o].kerning[n] = d)
      }
    }
  }
  _nextPage() {
    this._currentPageIndex++
    const e = this.resolution,
      t = O.getOptimalCanvasAndContext(512, 512, e)
    this._setupContext(t.context, this._style, e)
    const r = e * (this.baseRenderedFontSize / this.baseMeasurementFontSize),
      s = new U({
        source: new St({
          resource: t.canvas,
          resolution: r,
          alphaMode: 'premultiply-alpha-on-upload',
        }),
      }),
      n = { canvasAndContext: t, texture: s }
    return (this.pages[this._currentPageIndex] = n), n
  }
  _setupContext(e, t, r) {
    ;(t.fontSize = this.baseRenderedFontSize),
      e.scale(r, r),
      (e.font = ie(t)),
      (t.fontSize = this.baseMeasurementFontSize),
      (e.textBaseline = t.textBaseline)
    const s = t._stroke,
      n = (s == null ? void 0 : s.width) ?? 0
    if (
      (s &&
        ((e.lineWidth = n),
        (e.lineJoin = s.join),
        (e.miterLimit = s.miterLimit),
        (e.strokeStyle = q(s, e))),
      t._fill && (e.fillStyle = q(t._fill, e)),
      t.dropShadow)
    ) {
      const a = t.dropShadow,
        o = I.shared.setValue(a.color).toArray(),
        l = a.blur * r,
        h = a.distance * r
      ;(e.shadowColor = `rgba(${o[0] * 255},${o[1] * 255},${o[2] * 255},${
        a.alpha
      })`),
        (e.shadowBlur = l),
        (e.shadowOffsetX = Math.cos(a.angle) * h),
        (e.shadowOffsetY = Math.sin(a.angle) * h)
    } else
      (e.shadowColor = 'black'),
        (e.shadowBlur = 0),
        (e.shadowOffsetX = 0),
        (e.shadowOffsetY = 0)
  }
  _drawGlyph(e, t, r, s, n, a) {
    const o = t.text,
      l = t.fontProperties,
      h = a._stroke,
      c = ((h == null ? void 0 : h.width) ?? 0) * n,
      d = r + c / 2,
      u = s - c / 2,
      f = l.descent * n,
      p = t.lineHeight * n
    a.stroke && c && e.strokeText(o, d, u + p - f),
      a._fill && e.fillText(o, d, u + p - f)
  }
  destroy() {
    super.destroy()
    for (let e = 0; e < this.pages.length; e++) {
      const { canvasAndContext: t, texture: r } = this.pages[e]
      O.returnCanvasAndContext(t), r.destroy(!0)
    }
    this.pages = null
  }
}
function qe(i, e, t) {
  const r = {
    width: 0,
    height: 0,
    offsetY: 0,
    scale: e.fontSize / t.baseMeasurementFontSize,
    lines: [
      {
        width: 0,
        charPositions: [],
        spaceWidth: 0,
        spacesIndex: [],
        chars: [],
      },
    ],
  }
  r.offsetY = t.baseLineOffset
  let s = r.lines[0],
    n = null,
    a = !0
  const o = {
      spaceWord: !1,
      width: 0,
      start: 0,
      index: 0,
      positions: [],
      chars: [],
    },
    l = (f) => {
      const p = s.width
      for (let g = 0; g < o.index; g++) {
        const x = f.positions[g]
        s.chars.push(f.chars[g]), s.charPositions.push(x + p)
      }
      ;(s.width += f.width),
        (a = !1),
        (o.width = 0),
        (o.index = 0),
        (o.chars.length = 0)
    },
    h = () => {
      let f = s.chars.length - 1,
        p = s.chars[f]
      for (; p === ' '; ) (s.width -= t.chars[p].xAdvance), (p = s.chars[--f])
      ;(r.width = Math.max(r.width, s.width)),
        (s = {
          width: 0,
          charPositions: [],
          chars: [],
          spaceWidth: 0,
          spacesIndex: [],
        }),
        (a = !0),
        r.lines.push(s),
        (r.height += t.lineHeight)
    },
    c = t.baseMeasurementFontSize / e.fontSize,
    d = e.letterSpacing * c,
    u = e.wordWrapWidth * c
  for (let f = 0; f < i.length + 1; f++) {
    let p
    const g = f === i.length
    g || (p = i[f])
    const x = t.chars[p] || t.chars[' ']
    if (
      /(?:\s)/.test(p) ||
      p === '\r' ||
      p ===
        `
` ||
      g
    ) {
      if (
        (!a && e.wordWrap && s.width + o.width - d > u
          ? (h(), l(o), g || s.charPositions.push(0))
          : ((o.start = s.width), l(o), g || s.charPositions.push(0)),
        p === '\r' ||
          p ===
            `
`)
      )
        s.width !== 0 && h()
      else if (!g) {
        const T = x.xAdvance + (x.kerning[n] || 0) + d
        ;(s.width += T),
          (s.spaceWidth = T),
          s.spacesIndex.push(s.charPositions.length),
          s.chars.push(p)
      }
    } else {
      const y = x.kerning[n] || 0,
        T = x.xAdvance + y + d
      ;(o.positions[o.index++] = o.width + y), o.chars.push(p), (o.width += T)
    }
    n = p
  }
  return (
    h(),
    e.align === 'center'
      ? Dt(r)
      : e.align === 'right'
      ? Lt(r)
      : e.align === 'justify' && Et(r),
    r
  )
}
function Dt(i) {
  for (let e = 0; e < i.lines.length; e++) {
    const t = i.lines[e],
      r = i.width / 2 - t.width / 2
    for (let s = 0; s < t.charPositions.length; s++) t.charPositions[s] += r
  }
}
function Lt(i) {
  for (let e = 0; e < i.lines.length; e++) {
    const t = i.lines[e],
      r = i.width - t.width
    for (let s = 0; s < t.charPositions.length; s++) t.charPositions[s] += r
  }
}
function Et(i) {
  const e = i.width
  for (let t = 0; t < i.lines.length; t++) {
    const r = i.lines[t]
    let s = 0,
      n = r.spacesIndex[s++],
      a = 0
    const o = r.spacesIndex.length,
      h = (e - r.width) / o
    for (let c = 0; c < r.charPositions.length; c++)
      c === n && ((n = r.spacesIndex[s++]), (a += h)), (r.charPositions[c] += a)
  }
}
class $t {
  constructor() {
    ;(this.ALPHA = [['a', 'z'], ['A', 'Z'], ' ']),
      (this.NUMERIC = [['0', '9']]),
      (this.ALPHANUMERIC = [['a', 'z'], ['A', 'Z'], ['0', '9'], ' ']),
      (this.ASCII = [[' ', '~']]),
      (this.defaultOptions = {
        chars: this.ALPHANUMERIC,
        resolution: 1,
        padding: 4,
        skipKerning: !1,
      })
  }
  getFont(e, t) {
    var a
    let r = `${t.fontFamily}-bitmap`,
      s = !0
    if ((t._fill.fill && ((r += t._fill.fill.uid), (s = !1)), !k.has(r))) {
      const o = new be({
        style: t,
        overrideFill: s,
        overrideSize: !0,
        ...this.defaultOptions,
      })
      o.once('destroy', () => k.remove(r)), k.set(r, o)
    }
    const n = k.get(r)
    return (a = n.ensureCharacters) == null || a.call(n, e), n
  }
  getLayout(e, t) {
    const r = this.getFont(e, t)
    return qe(e.split(''), t, r)
  }
  measureText(e, t) {
    return this.getLayout(e, t)
  }
  install(...e) {
    var h, c, d, u
    let t = e[0]
    typeof t == 'string' &&
      ((t = {
        name: t,
        style: e[1],
        chars: (h = e[2]) == null ? void 0 : h.chars,
        resolution: (c = e[2]) == null ? void 0 : c.resolution,
        padding: (d = e[2]) == null ? void 0 : d.padding,
        skipKerning: (u = e[2]) == null ? void 0 : u.skipKerning,
      }),
      w(
        S,
        'BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})',
      ))
    const r = t == null ? void 0 : t.name
    if (!r) throw new Error('[BitmapFontManager] Property `name` is required.')
    t = { ...this.defaultOptions, ...t }
    const s = t.style,
      n = s instanceof $ ? s : new $(s),
      a = n._fill.fill !== null && n._fill.fill !== void 0,
      o = new be({
        style: n,
        overrideFill: a,
        skipKerning: t.skipKerning,
        padding: t.padding,
        resolution: t.resolution,
        overrideSize: !1,
      }),
      l = Ne(t.chars)
    return (
      o.ensureCharacters(l.join('')),
      k.set(`${r}-bitmap`, o),
      o.once('destroy', () => k.remove(`${r}-bitmap`)),
      o
    )
  }
  uninstall(e) {
    const t = `${e}-bitmap`,
      r = k.get(t)
    r && (k.remove(t), r.destroy())
  }
}
const ae = new $t()
function Xt(i) {
  const e = i._stroke,
    t = i._fill,
    s = [
      `div { ${[
        `color: ${I.shared.setValue(t.color).toHex()}`,
        `font-size: ${i.fontSize}px`,
        `font-family: ${i.fontFamily}`,
        `font-weight: ${i.fontWeight}`,
        `font-style: ${i.fontStyle}`,
        `font-variant: ${i.fontVariant}`,
        `letter-spacing: ${i.letterSpacing}px`,
        `text-align: ${i.align}`,
        `padding: ${i.padding}px`,
        `white-space: ${
          i.whiteSpace === 'pre' && i.wordWrap ? 'pre-wrap' : i.whiteSpace
        }`,
        ...(i.lineHeight ? [`line-height: ${i.lineHeight}px`] : []),
        ...(i.wordWrap
          ? [
              `word-wrap: ${i.breakWords ? 'break-all' : 'break-word'}`,
              `max-width: ${i.wordWrapWidth}px`,
            ]
          : []),
        ...(e ? [Je(e)] : []),
        ...(i.dropShadow ? [Qe(i.dropShadow)] : []),
        ...i.cssOverrides,
      ].join(';')} }`,
    ]
  return Yt(i.tagStyles, s), s.join(' ')
}
function Qe(i) {
  const e = I.shared.setValue(i.color).setAlpha(i.alpha).toHexa(),
    t = Math.round(Math.cos(i.angle) * i.distance),
    r = Math.round(Math.sin(i.angle) * i.distance),
    s = `${t}px ${r}px`
  return i.blur > 0
    ? `text-shadow: ${s} ${i.blur}px ${e}`
    : `text-shadow: ${s} ${e}`
}
function Je(i) {
  return [
    `-webkit-text-stroke-width: ${i.width}px`,
    `-webkit-text-stroke-color: ${I.shared.setValue(i.color).toHex()}`,
    `text-stroke-width: ${i.width}px`,
    `text-stroke-color: ${I.shared.setValue(i.color).toHex()}`,
    'paint-order: stroke',
  ].join(';')
}
const ye = {
    fontSize: 'font-size: {{VALUE}}px',
    fontFamily: 'font-family: {{VALUE}}',
    fontWeight: 'font-weight: {{VALUE}}',
    fontStyle: 'font-style: {{VALUE}}',
    fontVariant: 'font-variant: {{VALUE}}',
    letterSpacing: 'letter-spacing: {{VALUE}}px',
    align: 'text-align: {{VALUE}}',
    padding: 'padding: {{VALUE}}px',
    whiteSpace: 'white-space: {{VALUE}}',
    lineHeight: 'line-height: {{VALUE}}px',
    wordWrapWidth: 'max-width: {{VALUE}}px',
  },
  Te = {
    fill: (i) => `color: ${I.shared.setValue(i).toHex()}`,
    breakWords: (i) => `word-wrap: ${i ? 'break-all' : 'break-word'}`,
    stroke: Je,
    dropShadow: Qe,
  }
function Yt(i, e) {
  for (const t in i) {
    const r = i[t],
      s = []
    for (const n in r)
      Te[n]
        ? s.push(Te[n](r[n]))
        : ye[n] && s.push(ye[n].replace('{{VALUE}}', r[n]))
    e.push(`${t} { ${s.join(';')} }`)
  }
}
class he extends $ {
  constructor(e = {}) {
    super(e),
      (this._cssOverrides = []),
      this.cssOverrides ?? (this.cssOverrides = e.cssOverrides),
      (this.tagStyles = e.tagStyles ?? {})
  }
  set cssOverrides(e) {
    ;(this._cssOverrides = e instanceof Array ? e : [e]), this.update()
  }
  get cssOverrides() {
    return this._cssOverrides
  }
  _generateKey() {
    return (
      (this._styleKey = vt(this) + this._cssOverrides.join('-')), this._styleKey
    )
  }
  update() {
    ;(this._cssStyle = null), super.update()
  }
  clone() {
    return new he({
      align: this.align,
      breakWords: this.breakWords,
      dropShadow: this.dropShadow,
      fill: this._fill,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontVariant: this.fontVariant,
      fontWeight: this.fontWeight,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      padding: this.padding,
      stroke: this._stroke,
      whiteSpace: this.whiteSpace,
      wordWrap: this.wordWrap,
      wordWrapWidth: this.wordWrapWidth,
      cssOverrides: this.cssOverrides,
    })
  }
  get cssStyle() {
    return this._cssStyle || (this._cssStyle = Xt(this)), this._cssStyle
  }
  addOverride(...e) {
    const t = e.filter((r) => !this.cssOverrides.includes(r))
    t.length > 0 && (this.cssOverrides.push(...t), this.update())
  }
  removeOverride(...e) {
    const t = e.filter((r) => this.cssOverrides.includes(r))
    t.length > 0 &&
      ((this.cssOverrides = this.cssOverrides.filter((r) => !t.includes(r))),
      this.update())
  }
  set fill(e) {
    typeof e != 'string' &&
      typeof e != 'number' &&
      E('[HTMLTextStyle] only color fill is not supported by HTMLText'),
      (super.fill = e)
  }
  set stroke(e) {
    e &&
      typeof e != 'string' &&
      typeof e != 'number' &&
      E('[HTMLTextStyle] only color stroke is not supported by HTMLText'),
      (super.stroke = e)
  }
}
const we = 'http://www.w3.org/2000/svg',
  Se = 'http://www.w3.org/1999/xhtml'
class Ze {
  constructor() {
    ;(this.svgRoot = document.createElementNS(we, 'svg')),
      (this.foreignObject = document.createElementNS(we, 'foreignObject')),
      (this.domElement = document.createElementNS(Se, 'div')),
      (this.styleElement = document.createElementNS(Se, 'style')),
      (this.image = new Image())
    const {
      foreignObject: e,
      svgRoot: t,
      styleElement: r,
      domElement: s,
    } = this
    e.setAttribute('width', '10000'),
      e.setAttribute('height', '10000'),
      (e.style.overflow = 'hidden'),
      t.appendChild(e),
      e.appendChild(r),
      e.appendChild(s)
  }
}
let ve
function Vt(i, e, t, r) {
  r = r || ve || (ve = new Ze())
  const { domElement: s, styleElement: n, svgRoot: a } = r
  ;(s.innerHTML = `<style>${e.cssStyle}</style><div>${i}</div>`),
    s.setAttribute(
      'style',
      'transform-origin: top left; display: inline-block',
    ),
    t && (n.textContent = t),
    document.body.appendChild(a)
  const o = s.getBoundingClientRect()
  a.remove()
  const l = H.measureFont(e.fontStyle).descent
  return { width: o.width, height: o.height + l }
}
class et {
  constructor(e, t) {
    ;(this.state = Ge.for2d()),
      (this._graphicsBatchesHash = Object.create(null)),
      (this.renderer = e),
      (this._adaptor = t),
      this._adaptor.init()
  }
  validateRenderable(e) {
    const t = e.context,
      r = !!this._graphicsBatchesHash[e.uid],
      s = this.renderer.graphicsContext.updateGpuContext(t)
    return !!(s.isBatchable || r !== s.isBatchable)
  }
  addRenderable(e, t) {
    const r = this.renderer.graphicsContext.updateGpuContext(e.context)
    e._didGraphicsUpdate && ((e._didGraphicsUpdate = !1), this._rebuild(e)),
      r.isBatchable
        ? this._addToBatcher(e, t)
        : (this.renderer.renderPipes.batch.break(t), t.add(e))
  }
  updateRenderable(e) {
    const t = this._graphicsBatchesHash[e.uid]
    if (t)
      for (let r = 0; r < t.length; r++) {
        const s = t[r]
        s.batcher.updateElement(s)
      }
  }
  destroyRenderable(e) {
    this._graphicsBatchesHash[e.uid] && this._removeBatchForRenderable(e.uid)
  }
  execute(e) {
    if (!e.isRenderable) return
    const t = this.renderer,
      r = e.context
    if (!t.graphicsContext.getGpuContext(r).batches.length) return
    const n = r.customShader || this._adaptor.shader
    this.state.blendMode = e.groupBlendMode
    const a = n.resources.localUniforms.uniforms
    ;(a.uTransformMatrix = e.groupTransform),
      (a.uRound = t._roundPixels | e._roundPixels),
      le(e.groupColorAlpha, a.uColor, 0),
      this._adaptor.execute(this, e)
  }
  _rebuild(e) {
    const t = !!this._graphicsBatchesHash[e.uid],
      r = this.renderer.graphicsContext.updateGpuContext(e.context)
    t && this._removeBatchForRenderable(e.uid),
      r.isBatchable && this._initBatchesForRenderable(e),
      (e.batched = r.isBatchable)
  }
  _addToBatcher(e, t) {
    const r = this.renderer.renderPipes.batch,
      s = this._getBatchesForRenderable(e)
    for (let n = 0; n < s.length; n++) {
      const a = s[n]
      r.addToBatch(a, t)
    }
  }
  _getBatchesForRenderable(e) {
    return this._graphicsBatchesHash[e.uid] || this._initBatchesForRenderable(e)
  }
  _initBatchesForRenderable(e) {
    const t = e.context,
      r = this.renderer.graphicsContext.getGpuContext(t),
      s = this.renderer._roundPixels | e._roundPixels,
      n = r.batches.map((a) => {
        const o = B.get(Ct)
        return a.copyTo(o), (o.renderable = e), (o.roundPixels = s), o
      })
    return (
      (this._graphicsBatchesHash[e.uid] = n),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      n
    )
  }
  _removeBatchForRenderable(e) {
    this._graphicsBatchesHash[e].forEach((t) => {
      B.return(t)
    }),
      (this._graphicsBatchesHash[e] = null)
  }
  destroy() {
    ;(this.renderer = null),
      this._adaptor.destroy(),
      (this._adaptor = null),
      (this.state = null)
    for (const e in this._graphicsBatchesHash) this._removeBatchForRenderable(e)
    this._graphicsBatchesHash = null
  }
}
et.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'graphics',
}
const tt = class rt extends ce {
  constructor(...e) {
    super({})
    let t = e[0] ?? {}
    typeof t == 'number' &&
      (w(
        S,
        'PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead',
      ),
      (t = { width: t, height: e[1], verticesX: e[2], verticesY: e[3] })),
      this.build(t)
  }
  build(e) {
    ;(e = { ...rt.defaultOptions, ...e }),
      (this.verticesX = this.verticesX ?? e.verticesX),
      (this.verticesY = this.verticesY ?? e.verticesY),
      (this.width = this.width ?? e.width),
      (this.height = this.height ?? e.height)
    const t = this.verticesX * this.verticesY,
      r = [],
      s = [],
      n = [],
      a = this.verticesX - 1,
      o = this.verticesY - 1,
      l = this.width / a,
      h = this.height / o
    for (let d = 0; d < t; d++) {
      const u = d % this.verticesX,
        f = (d / this.verticesX) | 0
      r.push(u * l, f * h), s.push(u / a, f / o)
    }
    const c = a * o
    for (let d = 0; d < c; d++) {
      const u = d % a,
        f = (d / a) | 0,
        p = f * this.verticesX + u,
        g = f * this.verticesX + u + 1,
        x = (f + 1) * this.verticesX + u,
        m = (f + 1) * this.verticesX + u + 1
      n.push(p, g, x, g, m, x)
    }
    ;(this.buffers[0].data = new Float32Array(r)),
      (this.buffers[1].data = new Float32Array(s)),
      (this.indexBuffer.data = new Uint32Array(n)),
      this.buffers[0].update(),
      this.buffers[1].update(),
      this.indexBuffer.update()
  }
}
tt.defaultOptions = { width: 100, height: 100, verticesX: 10, verticesY: 10 }
let jt = tt
class de {
  constructor() {
    ;(this.batcher = null),
      (this.batch = null),
      (this.roundPixels = 0),
      (this._uvUpdateId = -1),
      (this._textureMatrixUpdateId = -1)
  }
  get blendMode() {
    return this.mesh.groupBlendMode
  }
  reset() {
    ;(this.mesh = null),
      (this.texture = null),
      (this.batcher = null),
      (this.batch = null)
  }
  packIndex(e, t, r) {
    const s = this.geometry.indices
    for (let n = 0; n < s.length; n++) e[t++] = s[n] + r
  }
  packAttributes(e, t, r, s) {
    const n = this.mesh,
      a = this.geometry,
      o = n.groupTransform,
      l = (s << 16) | (this.roundPixels & 65535),
      h = o.a,
      c = o.b,
      d = o.c,
      u = o.d,
      f = o.tx,
      p = o.ty,
      g = a.positions,
      x = a.getBuffer('aUV'),
      m = x.data
    let _ = m
    const y = this.texture.textureMatrix
    y.isSimple ||
      ((_ = this._transformedUvs),
      (this._textureMatrixUpdateId !== y._updateID ||
        this._uvUpdateId !== x._updateID) &&
        ((!_ || _.length < m.length) &&
          (_ = this._transformedUvs = new Float32Array(m.length)),
        (this._textureMatrixUpdateId = y._updateID),
        (this._uvUpdateId = x._updateID),
        y.multiplyUvs(m, _)))
    const T = n.groupColorAlpha
    for (let v = 0; v < g.length; v += 2) {
      const R = g[v],
        C = g[v + 1]
      ;(e[r] = h * R + d * C + f),
        (e[r + 1] = c * R + u * C + p),
        (e[r + 2] = _[v]),
        (e[r + 3] = _[v + 1]),
        (t[r + 4] = T),
        (t[r + 5] = l),
        (r += 6)
    }
  }
  get vertexSize() {
    return this.geometry.positions.length / 2
  }
  get indexSize() {
    return this.geometry.indices.length
  }
}
class st {
  constructor(e, t) {
    ;(this.localUniforms = new Y({
      uTransformMatrix: { value: new G(), type: 'mat3x3<f32>' },
      uColor: { value: new Float32Array([1, 1, 1, 1]), type: 'vec4<f32>' },
      uRound: { value: 0, type: 'f32' },
    })),
      (this.localUniformsBindGroup = new Ue({ 0: this.localUniforms })),
      (this._meshDataHash = Object.create(null)),
      (this._gpuBatchableMeshHash = Object.create(null)),
      (this.renderer = e),
      (this._adaptor = t),
      this._adaptor.init()
  }
  validateRenderable(e) {
    const t = this._getMeshData(e),
      r = t.batched,
      s = e.batched
    if (((t.batched = s), r !== s)) return !0
    if (s) {
      const n = e._geometry
      if (
        n.indices.length !== t.indexSize ||
        n.positions.length !== t.vertexSize
      )
        return (
          (t.indexSize = n.indices.length),
          (t.vertexSize = n.positions.length),
          !0
        )
      const a = this._getBatchableMesh(e),
        o = e.texture
      if (a.texture._source !== o._source && a.texture._source !== o._source)
        return !a.batcher.checkAndUpdateTexture(a, o)
    }
    return !1
  }
  addRenderable(e, t) {
    const r = this.renderer.renderPipes.batch,
      { batched: s } = this._getMeshData(e)
    if (s) {
      const n = this._getBatchableMesh(e)
      ;(n.texture = e._texture), (n.geometry = e._geometry), r.addToBatch(n)
    } else r.break(t), t.add({ renderPipeId: 'mesh', mesh: e })
  }
  updateRenderable(e) {
    if (e.batched) {
      const t = this._gpuBatchableMeshHash[e.uid]
      ;(t.texture = e._texture),
        (t.geometry = e._geometry),
        t.batcher.updateElement(t)
    }
  }
  destroyRenderable(e) {
    this._meshDataHash[e.uid] = null
    const t = this._gpuBatchableMeshHash[e.uid]
    t && (B.return(t), (this._gpuBatchableMeshHash[e.uid] = null))
  }
  execute({ mesh: e }) {
    if (!e.isRenderable) return
    e.state.blendMode = e.groupBlendMode
    const t = this.localUniforms
    ;(t.uniforms.uTransformMatrix = e.groupTransform),
      (t.uniforms.uRound = this.renderer._roundPixels | e._roundPixels),
      t.update(),
      le(e.groupColorAlpha, t.uniforms.uColor, 0),
      this._adaptor.execute(this, e)
  }
  _getMeshData(e) {
    return this._meshDataHash[e.uid] || this._initMeshData(e)
  }
  _initMeshData(e) {
    var t, r
    return (
      (this._meshDataHash[e.uid] = {
        batched: e.batched,
        indexSize: (t = e._geometry.indices) == null ? void 0 : t.length,
        vertexSize: (r = e._geometry.positions) == null ? void 0 : r.length,
      }),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      this._meshDataHash[e.uid]
    )
  }
  _getBatchableMesh(e) {
    return this._gpuBatchableMeshHash[e.uid] || this._initBatchableMesh(e)
  }
  _initBatchableMesh(e) {
    const t = B.get(de)
    return (
      (t.mesh = e),
      (t.texture = e._texture),
      (t.roundPixels = this.renderer._roundPixels | e._roundPixels),
      (this._gpuBatchableMeshHash[e.uid] = t),
      (t.mesh = e),
      t
    )
  }
  destroy() {
    for (const e in this._gpuBatchableMeshHash)
      this._gpuBatchableMeshHash[e] && B.return(this._gpuBatchableMeshHash[e])
    ;(this._gpuBatchableMeshHash = null),
      (this._meshDataHash = null),
      (this.localUniforms = null),
      (this.localUniformsBindGroup = null),
      this._adaptor.destroy(),
      (this._adaptor = null),
      (this.renderer = null)
  }
}
st.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'mesh',
}
const it = class nt extends jt {
  constructor(e = {}) {
    ;(e = { ...nt.defaultOptions, ...e }),
      super({ width: e.width, height: e.height, verticesX: 4, verticesY: 4 }),
      this.update(e)
  }
  update(e) {
    ;(this.width = e.width ?? this.width),
      (this.height = e.height ?? this.height),
      (this._originalWidth = e.originalWidth ?? this._originalWidth),
      (this._originalHeight = e.originalHeight ?? this._originalHeight),
      (this._leftWidth = e.leftWidth ?? this._leftWidth),
      (this._rightWidth = e.rightWidth ?? this._rightWidth),
      (this._topHeight = e.topHeight ?? this._topHeight),
      (this._bottomHeight = e.bottomHeight ?? this._bottomHeight),
      this.updateUvs(),
      this.updatePositions()
  }
  updatePositions() {
    const e = this.positions,
      t = this._leftWidth + this._rightWidth,
      r = this.width > t ? 1 : this.width / t,
      s = this._topHeight + this._bottomHeight,
      n = this.height > s ? 1 : this.height / s,
      a = Math.min(r, n)
    ;(e[9] = e[11] = e[13] = e[15] = this._topHeight * a),
      (e[17] = e[19] = e[21] = e[23] = this.height - this._bottomHeight * a),
      (e[25] = e[27] = e[29] = e[31] = this.height),
      (e[2] = e[10] = e[18] = e[26] = this._leftWidth * a),
      (e[4] = e[12] = e[20] = e[28] = this.width - this._rightWidth * a),
      (e[6] = e[14] = e[22] = e[30] = this.width),
      this.getBuffer('aPosition').update()
  }
  updateUvs() {
    const e = this.uvs
    ;(e[0] = e[8] = e[16] = e[24] = 0),
      (e[1] = e[3] = e[5] = e[7] = 0),
      (e[6] = e[14] = e[22] = e[30] = 1),
      (e[25] = e[27] = e[29] = e[31] = 1)
    const t = 1 / this._originalWidth,
      r = 1 / this._originalHeight
    ;(e[2] = e[10] = e[18] = e[26] = t * this._leftWidth),
      (e[9] = e[11] = e[13] = e[15] = r * this._topHeight),
      (e[4] = e[12] = e[20] = e[28] = 1 - t * this._rightWidth),
      (e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight),
      this.getBuffer('aUV').update()
  }
}
it.defaultOptions = {
  width: 100,
  height: 100,
  leftWidth: 10,
  topHeight: 10,
  rightWidth: 10,
  bottomHeight: 10,
  originalWidth: 100,
  originalHeight: 100,
}
let Kt = it
class at {
  constructor(e) {
    ;(this._gpuSpriteHash = Object.create(null)), (this._renderer = e)
  }
  addRenderable(e, t) {
    const r = this._getGpuSprite(e)
    e._didSpriteUpdate && this._updateBatchableSprite(e, r),
      this._renderer.renderPipes.batch.addToBatch(r)
  }
  updateRenderable(e) {
    const t = this._gpuSpriteHash[e.uid]
    e._didSpriteUpdate && this._updateBatchableSprite(e, t),
      t.batcher.updateElement(t)
  }
  validateRenderable(e) {
    const t = e._texture,
      r = this._getGpuSprite(e)
    return r.texture._source !== t._source
      ? !r.batcher.checkAndUpdateTexture(r, t)
      : !1
  }
  destroyRenderable(e) {
    const t = this._gpuSpriteHash[e.uid]
    B.return(t), (this._gpuSpriteHash[e.uid] = null)
  }
  _updateBatchableSprite(e, t) {
    ;(e._didSpriteUpdate = !1), t.geometry.update(e), (t.texture = e._texture)
  }
  _getGpuSprite(e) {
    return this._gpuSpriteHash[e.uid] || this._initGPUSprite(e)
  }
  _initGPUSprite(e) {
    const t = new de()
    return (
      (t.geometry = new Kt()),
      (t.mesh = e),
      (t.texture = e._texture),
      (t.roundPixels = this._renderer._roundPixels | e._roundPixels),
      (this._gpuSpriteHash[e.uid] = t),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      t
    )
  }
  destroy() {
    for (const e in this._gpuSpriteHash)
      this._gpuSpriteHash[e].geometry.destroy()
    ;(this._gpuSpriteHash = null), (this._renderer = null)
  }
}
at.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'nineSliceSprite',
}
const Nt = {
    name: 'tiling-bit',
    vertex: {
      header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
      main: `
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `,
    },
    fragment: {
      header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
      main: `

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `,
    },
  },
  qt = {
    name: 'tiling-bit',
    vertex: {
      header: `
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,
      main: `
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `,
    },
    fragment: {
      header: `
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,
      main: `

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `,
    },
  }
let te, re
class Qt extends ze {
  constructor() {
    te ?? (te = He({ name: 'tiling-sprite-shader', bits: [Ft, Nt, Oe] })),
      re ?? (re = Ie({ name: 'tiling-sprite-shader', bits: [Rt, qt, We] }))
    const e = new Y({
      uMapCoord: { value: new G(), type: 'mat3x3<f32>' },
      uClampFrame: { value: new Float32Array([0, 0, 1, 1]), type: 'vec4<f32>' },
      uClampOffset: { value: new Float32Array([0, 0]), type: 'vec2<f32>' },
      uTextureTransform: { value: new G(), type: 'mat3x3<f32>' },
      uSizeAnchor: {
        value: new Float32Array([100, 100, 0.5, 0.5]),
        type: 'vec4<f32>',
      },
    })
    super({
      glProgram: re,
      gpuProgram: te,
      resources: {
        localUniforms: new Y({
          uTransformMatrix: { value: new G(), type: 'mat3x3<f32>' },
          uColor: { value: new Float32Array([1, 1, 1, 1]), type: 'vec4<f32>' },
          uRound: { value: 0, type: 'f32' },
        }),
        tilingUniforms: e,
        uTexture: U.EMPTY.source,
        uSampler: U.EMPTY.source.style,
      },
    })
  }
  updateUniforms(e, t, r, s, n, a) {
    const o = this.resources.tilingUniforms,
      l = a.width,
      h = a.height,
      c = a.textureMatrix,
      d = o.uniforms.uTextureTransform
    d.set(
      (r.a * l) / e,
      (r.b * l) / t,
      (r.c * h) / e,
      (r.d * h) / t,
      r.tx / e,
      r.ty / t,
    ),
      d.invert(),
      (o.uniforms.uMapCoord = c.mapCoord),
      (o.uniforms.uClampFrame = c.uClampFrame),
      (o.uniforms.uClampOffset = c.uClampOffset),
      (o.uniforms.uTextureTransform = d),
      (o.uniforms.uSizeAnchor[0] = e),
      (o.uniforms.uSizeAnchor[1] = t),
      (o.uniforms.uSizeAnchor[2] = s),
      (o.uniforms.uSizeAnchor[3] = n),
      a &&
        ((this.resources.uTexture = a.source),
        (this.resources.uSampler = a.source.style))
  }
}
class Jt extends ce {
  constructor() {
    super({
      positions: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      indices: new Uint32Array([0, 1, 2, 0, 2, 3]),
    })
  }
}
function Zt(i, e) {
  const t = i.anchor.x,
    r = i.anchor.y
  ;(e[0] = -t * i.width),
    (e[1] = -r * i.height),
    (e[2] = (1 - t) * i.width),
    (e[3] = -r * i.height),
    (e[4] = (1 - t) * i.width),
    (e[5] = (1 - r) * i.height),
    (e[6] = -t * i.width),
    (e[7] = (1 - r) * i.height)
}
function er(i, e, t, r) {
  let s = 0
  const n = i.length / (e || 2),
    a = r.a,
    o = r.b,
    l = r.c,
    h = r.d,
    c = r.tx,
    d = r.ty
  for (t *= e; s < n; ) {
    const u = i[t],
      f = i[t + 1]
    ;(i[t] = a * u + l * f + c), (i[t + 1] = o * u + h * f + d), (t += e), s++
  }
}
function tr(i, e) {
  const t = i.texture,
    r = t.frame.width,
    s = t.frame.height
  let n = 0,
    a = 0
  i._applyAnchorToTexture && ((n = i.anchor.x), (a = i.anchor.y)),
    (e[0] = e[6] = -n),
    (e[2] = e[4] = 1 - n),
    (e[1] = e[3] = -a),
    (e[5] = e[7] = 1 - a)
  const o = G.shared
  o.copyFrom(i._tileTransform.matrix),
    (o.tx /= i.width),
    (o.ty /= i.height),
    o.invert(),
    o.scale(i.width / r, i.height / s),
    er(e, 2, 0, o)
}
const V = new Jt()
class ot {
  constructor(e) {
    ;(this._tilingSpriteDataHash = Object.create(null)), (this._renderer = e)
  }
  validateRenderable(e) {
    const t = this._getTilingSpriteData(e),
      r = t.canBatch
    this._updateCanBatch(e)
    const s = t.canBatch
    if (s && s === r) {
      const { batchableMesh: n } = t
      if (n.texture._source !== e.texture._source)
        return !n.batcher.checkAndUpdateTexture(n, e.texture)
    }
    return r !== s
  }
  addRenderable(e, t) {
    const r = this._renderer.renderPipes.batch
    this._updateCanBatch(e)
    const s = this._getTilingSpriteData(e),
      { geometry: n, canBatch: a } = s
    if (a) {
      s.batchableMesh || (s.batchableMesh = new de())
      const o = s.batchableMesh
      e._didTilingSpriteUpdate &&
        ((e._didTilingSpriteUpdate = !1),
        this._updateBatchableMesh(e),
        (o.geometry = n),
        (o.mesh = e),
        (o.texture = e._texture)),
        (o.roundPixels = this._renderer._roundPixels | e._roundPixels),
        r.addToBatch(o)
    } else
      r.break(t),
        s.shader || (s.shader = new Qt()),
        this.updateRenderable(e),
        t.add(e)
  }
  execute(e) {
    const { shader: t } = this._tilingSpriteDataHash[e.uid]
    t.groups[0] = this._renderer.globalUniforms.bindGroup
    const r = t.resources.localUniforms.uniforms
    ;(r.uTransformMatrix = e.groupTransform),
      (r.uRound = this._renderer._roundPixels | e._roundPixels),
      le(e.groupColorAlpha, r.uColor, 0),
      this._renderer.encoder.draw({
        geometry: V,
        shader: t,
        state: Ge.default2d,
      })
  }
  updateRenderable(e) {
    const t = this._getTilingSpriteData(e),
      { canBatch: r } = t
    if (r) {
      const { batchableMesh: s } = t
      e._didTilingSpriteUpdate && this._updateBatchableMesh(e),
        s.batcher.updateElement(s)
    } else if (e._didTilingSpriteUpdate) {
      const { shader: s } = t
      s.updateUniforms(
        e.width,
        e.height,
        e._tileTransform.matrix,
        e.anchor.x,
        e.anchor.y,
        e.texture,
      )
    }
    e._didTilingSpriteUpdate = !1
  }
  destroyRenderable(e) {
    var r
    const t = this._getTilingSpriteData(e)
    ;(t.batchableMesh = null),
      (r = t.shader) == null || r.destroy(),
      (this._tilingSpriteDataHash[e.uid] = null)
  }
  _getTilingSpriteData(e) {
    return this._tilingSpriteDataHash[e.uid] || this._initTilingSpriteData(e)
  }
  _initTilingSpriteData(e) {
    const t = new ce({
      indices: V.indices,
      positions: V.positions.slice(),
      uvs: V.uvs.slice(),
    })
    return (
      (this._tilingSpriteDataHash[e.uid] = {
        canBatch: !0,
        renderable: e,
        geometry: t,
      }),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      this._tilingSpriteDataHash[e.uid]
    )
  }
  _updateBatchableMesh(e) {
    const t = this._getTilingSpriteData(e),
      { geometry: r } = t,
      s = e.texture.source.style
    s.addressMode !== 'repeat' && ((s.addressMode = 'repeat'), s.update()),
      tr(e, r.uvs),
      Zt(e, r.positions)
  }
  destroy() {
    for (const e in this._tilingSpriteDataHash)
      this.destroyRenderable(this._tilingSpriteDataHash[e].renderable)
    ;(this._tilingSpriteDataHash = null), (this._renderer = null)
  }
  _updateCanBatch(e) {
    const t = this._getTilingSpriteData(e),
      r = e.texture
    let s = !0
    return (
      this._renderer.type === oe.WEBGL &&
        (s = this._renderer.context.supports.nonPowOf2wrapping),
      (t.canBatch = r.textureMatrix.isSimple && (s || r.source.isPowerOfTwo)),
      t.canBatch
    )
  }
}
ot.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'tilingSprite',
}
const se = {
    test(i) {
      return typeof i == 'string' && i.startsWith('info face=')
    },
    parse(i) {
      const e = i.match(/^[a-z]+\s+.+$/gm),
        t = {
          info: [],
          common: [],
          page: [],
          char: [],
          chars: [],
          kerning: [],
          kernings: [],
          distanceField: [],
        }
      for (const d in e) {
        const u = e[d].match(/^[a-z]+/gm)[0],
          f = e[d].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
          p = {}
        for (const g in f) {
          const x = f[g].split('='),
            m = x[0],
            _ = x[1].replace(/"/gm, ''),
            y = parseFloat(_),
            T = isNaN(y) ? _ : y
          p[m] = T
        }
        t[u].push(p)
      }
      const r = {
          chars: {},
          pages: [],
          lineHeight: 0,
          fontSize: 0,
          fontFamily: '',
          distanceField: null,
          baseLineOffset: 0,
        },
        [s] = t.info,
        [n] = t.common,
        [a] = t.distanceField ?? []
      a &&
        (r.distanceField = {
          range: parseInt(a.distanceRange, 10),
          type: a.fieldType,
        }),
        (r.fontSize = parseInt(s.size, 10)),
        (r.fontFamily = s.face),
        (r.lineHeight = parseInt(n.lineHeight, 10))
      const o = t.page
      for (let d = 0; d < o.length; d++)
        r.pages.push({ id: parseInt(o[d].id, 10) || 0, file: o[d].file })
      const l = {}
      r.baseLineOffset = r.lineHeight - parseInt(n.base, 10)
      const h = t.char
      for (let d = 0; d < h.length; d++) {
        const u = h[d],
          f = parseInt(u.id, 10)
        let p = u.letter ?? u.char ?? String.fromCharCode(f)
        p === 'space' && (p = ' '),
          (l[f] = p),
          (r.chars[p] = {
            id: f,
            page: parseInt(u.page, 10) || 0,
            x: parseInt(u.x, 10),
            y: parseInt(u.y, 10),
            width: parseInt(u.width, 10),
            height: parseInt(u.height, 10),
            xOffset: parseInt(u.xoffset, 10),
            yOffset: parseInt(u.yoffset, 10),
            xAdvance: parseInt(u.xadvance, 10),
            kerning: {},
          })
      }
      const c = t.kerning || []
      for (let d = 0; d < c.length; d++) {
        const u = parseInt(c[d].first, 10),
          f = parseInt(c[d].second, 10),
          p = parseInt(c[d].amount, 10)
        r.chars[l[f]].kerning[l[u]] = p
      }
      return r
    },
  },
  Ce = {
    test(i) {
      const e = i
      return (
        typeof e != 'string' &&
        'getElementsByTagName' in e &&
        e.getElementsByTagName('page').length &&
        e.getElementsByTagName('info')[0].getAttribute('face') !== null
      )
    },
    parse(i) {
      const e = {
          chars: {},
          pages: [],
          lineHeight: 0,
          fontSize: 0,
          fontFamily: '',
          distanceField: null,
          baseLineOffset: 0,
        },
        t = i.getElementsByTagName('info')[0],
        r = i.getElementsByTagName('common')[0],
        s = i.getElementsByTagName('distanceField')[0]
      s &&
        (e.distanceField = {
          type: s.getAttribute('fieldType'),
          range: parseInt(s.getAttribute('distanceRange'), 10),
        })
      const n = i.getElementsByTagName('page'),
        a = i.getElementsByTagName('char'),
        o = i.getElementsByTagName('kerning')
      ;(e.fontSize = parseInt(t.getAttribute('size'), 10)),
        (e.fontFamily = t.getAttribute('face')),
        (e.lineHeight = parseInt(r.getAttribute('lineHeight'), 10))
      for (let h = 0; h < n.length; h++)
        e.pages.push({
          id: parseInt(n[h].getAttribute('id'), 10) || 0,
          file: n[h].getAttribute('file'),
        })
      const l = {}
      e.baseLineOffset = e.lineHeight - parseInt(r.getAttribute('base'), 10)
      for (let h = 0; h < a.length; h++) {
        const c = a[h],
          d = parseInt(c.getAttribute('id'), 10)
        let u =
          c.getAttribute('letter') ??
          c.getAttribute('char') ??
          String.fromCharCode(d)
        u === 'space' && (u = ' '),
          (l[d] = u),
          (e.chars[u] = {
            id: d,
            page: parseInt(c.getAttribute('page'), 10) || 0,
            x: parseInt(c.getAttribute('x'), 10),
            y: parseInt(c.getAttribute('y'), 10),
            width: parseInt(c.getAttribute('width'), 10),
            height: parseInt(c.getAttribute('height'), 10),
            xOffset: parseInt(c.getAttribute('xoffset'), 10),
            yOffset: parseInt(c.getAttribute('yoffset'), 10),
            xAdvance: parseInt(c.getAttribute('xadvance'), 10),
            kerning: {},
          })
      }
      for (let h = 0; h < o.length; h++) {
        const c = parseInt(o[h].getAttribute('first'), 10),
          d = parseInt(o[h].getAttribute('second'), 10),
          u = parseInt(o[h].getAttribute('amount'), 10)
        e.chars[l[d]].kerning[l[c]] = u
      }
      return e
    },
  },
  Me = {
    test(i) {
      return typeof i == 'string' && i.includes('<font>')
        ? Ce.test(X.get().parseXML(i))
        : !1
    },
    parse(i) {
      return Ce.parse(X.get().parseXML(i))
    },
  }
class lt extends Ke {
  constructor(e, t) {
    super()
    const { textures: r, data: s } = e
    Object.keys(s.pages).forEach((n) => {
      const a = s.pages[parseInt(n, 10)],
        o = r[a.id]
      this.pages.push({ texture: o })
    }),
      Object.keys(s.chars).forEach((n) => {
        const a = s.chars[n],
          { frame: o, source: l } = r[a.page],
          h = new K(a.x + o.x, a.y + o.y, a.width, a.height),
          c = new U({ source: l, frame: h })
        this.chars[n] = {
          id: n.codePointAt(0),
          xOffset: a.xOffset,
          yOffset: a.yOffset,
          xAdvance: a.xAdvance,
          kerning: a.kerning ?? {},
          texture: c,
        }
      }),
      (this.baseRenderedFontSize = s.fontSize),
      (this.baseMeasurementFontSize = s.fontSize),
      (this.fontMetrics = { ascent: 0, descent: 0, fontSize: s.fontSize }),
      (this.baseLineOffset = s.baseLineOffset),
      (this.lineHeight = s.lineHeight),
      (this.fontFamily = s.fontFamily),
      (this.distanceField = s.distanceField ?? { type: 'none', range: 0 }),
      (this.url = t)
  }
  destroy() {
    super.destroy()
    for (let e = 0; e < this.pages.length; e++) {
      const { texture: t } = this.pages[e]
      t.destroy(!0)
    }
    this.pages = null
  }
  static install(e) {
    ae.install(e)
  }
  static uninstall(e) {
    ae.uninstall(e)
  }
}
const rr = ['.xml', '.fnt'],
  sr = {
    extension: b.CacheParser,
    test: (i) => i instanceof lt,
    getCacheableAssets(i, e) {
      const t = {}
      return (
        i.forEach((r) => {
          t[r] = e
        }),
        (t[`${e.fontFamily}-bitmap`] = e),
        t
      )
    },
  },
  ir = {
    extension: { type: b.LoadParser, priority: Mt.Normal },
    test(i) {
      return rr.includes(ee.extname(i).toLowerCase())
    },
    async testParse(i) {
      return se.test(i) || Me.test(i)
    },
    async parse(i, e, t) {
      const r = se.test(i) ? se.parse(i) : Me.parse(i),
        { src: s } = e,
        { pages: n } = r,
        a = []
      for (let c = 0; c < n.length; ++c) {
        const d = n[c].file
        let u = ee.join(ee.dirname(s), d)
        ;(u = Pt(u, s)), a.push(u)
      }
      const o = await t.load(a),
        l = a.map((c) => o[c])
      return new lt({ data: r, textures: l }, s)
    },
    async load(i, e) {
      return await (await X.get().fetch(i)).text()
    },
    async unload(i, e, t) {
      await Promise.all(
        i.pages.map((r) => t.unload(r.texture.source._sourceOrigin)),
      ),
        i.destroy()
    },
  },
  nr = {
    name: 'local-uniform-msdf-bit',
    vertex: {
      header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
      main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
      end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `,
    },
    fragment: {
      header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,
      main: ` 
            outColor = vColor * calculateMSDFAlpha(outColor, localUniforms.uDistance);
        `,
    },
  },
  ar = {
    name: 'local-uniform-msdf-bit',
    vertex: {
      header: `
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
      main: `
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,
      end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `,
    },
    fragment: {
      header: `
            uniform float uDistance;
         `,
      main: ` 
            outColor = vColor * calculateMSDFAlpha(outColor, uDistance);
        `,
    },
  },
  or = {
    name: 'msdf-bit',
    fragment: {
      header: `
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `,
    },
  },
  lr = {
    name: 'msdf-bit',
    fragment: {
      header: `
            float calculateMSDFAlpha(vec4 msdfColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `,
    },
  }
class cr extends ze {
  constructor() {
    const e = new Y({
        uColor: { value: new Float32Array([1, 1, 1, 1]), type: 'vec4<f32>' },
        uTransformMatrix: { value: new G(), type: 'mat3x3<f32>' },
        uDistance: { value: 4, type: 'f32' },
        uRound: { value: 0, type: 'f32' },
      }),
      t = He({ name: 'sdf-shader', bits: [kt, Ut(me), nr, or, Oe] }),
      r = Ie({ name: 'sdf-shader', bits: [At, Gt(me), ar, lr, We] })
    super({
      glProgram: r,
      gpuProgram: t,
      resources: { localUniforms: e, batchSamplers: zt },
    })
  }
}
class ct {
  constructor(e) {
    ;(this._gpuBitmapText = {}), (this._renderer = e)
  }
  validateRenderable(e) {
    const t = this._getGpuBitmapText(e)
    return (
      e._didTextUpdate && ((e._didTextUpdate = !1), this._updateContext(e, t)),
      this._renderer.renderPipes.graphics.validateRenderable(t)
    )
  }
  addRenderable(e, t) {
    const r = this._getGpuBitmapText(e)
    Pe(e, r),
      e._didTextUpdate && ((e._didTextUpdate = !1), this._updateContext(e, r)),
      this._renderer.renderPipes.graphics.addRenderable(r, t),
      r.context.customShader && this._updateDistanceField(e)
  }
  destroyRenderable(e) {
    this._destroyRenderableByUid(e.uid)
  }
  _destroyRenderableByUid(e) {
    B.return(this._gpuBitmapText[e]), (this._gpuBitmapText[e] = null)
  }
  updateRenderable(e) {
    const t = this._getGpuBitmapText(e)
    Pe(e, t),
      this._renderer.renderPipes.graphics.updateRenderable(t),
      t.context.customShader && this._updateDistanceField(e)
  }
  _updateContext(e, t) {
    var f
    const { context: r } = t,
      s = ae.getFont(e.text, e._style)
    r.clear(),
      s.distanceField.type !== 'none' &&
        (r.customShader ||
          (this._sdfShader || (this._sdfShader = new cr()),
          (r.customShader = this._sdfShader)))
    const n = Array.from(e.text),
      a = e._style
    let o = (((f = a._stroke) == null ? void 0 : f.width) || 0) / 2
    o += s.baseLineOffset
    const l = qe(n, a, s)
    let h = 0
    const c = a.padding,
      d = l.scale
    r.translate(
      -e._anchor._x * l.width - c,
      -e._anchor._y * (l.height + l.offsetY) - c,
    ).scale(d, d)
    const u = a._fill.color
    for (let p = 0; p < l.lines.length; p++) {
      const g = l.lines[p]
      for (let x = 0; x < g.charPositions.length; x++) {
        const m = n[h++],
          _ = s.chars[m]
        _ != null &&
          _.texture &&
          r.texture(
            _.texture,
            u || 'black',
            Math.round(g.charPositions[x] + _.xOffset),
            Math.round(o + _.yOffset),
          )
      }
      o += s.lineHeight
    }
  }
  _getGpuBitmapText(e) {
    return this._gpuBitmapText[e.uid] || this.initGpuText(e)
  }
  initGpuText(e) {
    const t = B.get(N)
    return (
      (this._gpuBitmapText[e.uid] = t),
      this._updateContext(e, t),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      this._gpuBitmapText[e.uid]
    )
  }
  _updateDistanceField(e) {
    const t = this._getGpuBitmapText(e).context,
      r = e._style.fontFamily,
      s = k.get(`${r}-bitmap`),
      { a: n, b: a, c: o, d: l } = e.groupTransform,
      h = Math.sqrt(n * n + a * a),
      c = Math.sqrt(o * o + l * l),
      d = (Math.abs(h) + Math.abs(c)) / 2,
      u = s.baseRenderedFontSize / e._style.fontSize,
      f = e.resolution ?? this._renderer.resolution,
      p = d * s.distanceField.range * (1 / u) * f
    t.customShader.resources.localUniforms.uniforms.uDistance = p
  }
  destroy() {
    var e
    for (const t in this._gpuBitmapText) this._destroyRenderableByUid(t)
    ;(this._gpuBitmapText = null),
      (e = this._sdfShader) == null || e.destroy(!0),
      (this._sdfShader = null),
      (this._renderer = null)
  }
}
ct.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'bitmapText',
}
function Pe(i, e) {
  ;(e.groupTransform = i.groupTransform),
    (e.groupColorAlpha = i.groupColorAlpha),
    (e.groupColor = i.groupColor),
    (e.groupBlendMode = i.groupBlendMode),
    (e.globalDisplayStatus = i.globalDisplayStatus),
    (e.groupTransform = i.groupTransform),
    (e.localDisplayStatus = i.localDisplayStatus),
    (e.groupAlpha = i.groupAlpha),
    (e._roundPixels = i._roundPixels)
}
class ht {
  constructor(e) {
    ;(this._gpuText = Object.create(null)), (this._renderer = e)
  }
  validateRenderable(e) {
    const t = this._getGpuText(e),
      r = e._getKey()
    return t.textureNeedsUploading
      ? ((t.textureNeedsUploading = !1), !0)
      : t.currentKey !== r
  }
  addRenderable(e) {
    const r = this._getGpuText(e).batchableSprite
    e._didTextUpdate && this._updateText(e),
      this._renderer.renderPipes.batch.addToBatch(r)
  }
  updateRenderable(e) {
    const r = this._getGpuText(e).batchableSprite
    e._didTextUpdate && this._updateText(e), r.batcher.updateElement(r)
  }
  destroyRenderable(e) {
    this._destroyRenderableById(e.uid)
  }
  _destroyRenderableById(e) {
    const t = this._gpuText[e]
    this._renderer.htmlText.decreaseReferenceCount(t.currentKey),
      B.return(t.batchableSprite),
      (this._gpuText[e] = null)
  }
  _updateText(e) {
    const t = e._getKey(),
      r = this._getGpuText(e),
      s = r.batchableSprite
    r.currentKey !== t &&
      this._updateGpuText(e).catch((a) => {
        console.error(a)
      }),
      (e._didTextUpdate = !1)
    const n = e._style.padding
    ne(s.bounds, e._anchor, s.texture, n)
  }
  async _updateGpuText(e) {
    e._didTextUpdate = !1
    const t = this._getGpuText(e)
    if (t.generatingTexture) return
    const r = e._getKey()
    this._renderer.htmlText.decreaseReferenceCount(t.currentKey),
      (t.generatingTexture = !0),
      (t.currentKey = r)
    const s = e.resolution ?? this._renderer.resolution,
      n = await this._renderer.htmlText.getManagedTexture(
        e.text,
        s,
        e._style,
        e._getKey(),
      ),
      a = t.batchableSprite
    ;(a.texture = t.texture = n),
      (t.generatingTexture = !1),
      (t.textureNeedsUploading = !0),
      e.onViewUpdate()
    const o = e._style.padding
    ne(a.bounds, e._anchor, a.texture, o)
  }
  _getGpuText(e) {
    return this._gpuText[e.uid] || this.initGpuText(e)
  }
  initGpuText(e) {
    const t = {
        texture: U.EMPTY,
        currentKey: '--',
        batchableSprite: B.get(De),
        textureNeedsUploading: !1,
        generatingTexture: !1,
      },
      r = t.batchableSprite
    return (
      (r.renderable = e),
      (r.texture = U.EMPTY),
      (r.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
      (r.roundPixels = this._renderer._roundPixels | e._roundPixels),
      (this._gpuText[e.uid] = t),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      t
    )
  }
  destroy() {
    for (const e in this._gpuText) this._destroyRenderableById(e)
    ;(this._gpuText = null), (this._renderer = null)
  }
}
ht.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'htmlText',
}
function hr() {
  const { userAgent: i } = X.get().getNavigator()
  return /^((?!chrome|android).)*safari/i.test(i)
}
const dr = new Ae()
function dt(i, e, t, r) {
  const s = dr
  ;(s.minX = 0),
    (s.minY = 0),
    (s.maxX = (i.width / r) | 0),
    (s.maxY = (i.height / r) | 0)
  const n = A.getOptimalTexture(s.width, s.height, r, !1)
  return (
    (n.source.uploadMethodId = 'image'),
    (n.source.resource = i),
    (n.source.alphaMode = 'premultiply-alpha-on-upload'),
    (n.frame.width = e / r),
    (n.frame.height = t / r),
    n.source.emit('update', n.source),
    n.updateUvs(),
    n
  )
}
function ur(i, e) {
  const t = e.fontFamily,
    r = [],
    s = {},
    n = /font-family:([^;"\s]+)/g,
    a = i.match(n)
  function o(l) {
    s[l] || (r.push(l), (s[l] = !0))
  }
  if (Array.isArray(t)) for (let l = 0; l < t.length; l++) o(t[l])
  else o(t)
  a &&
    a.forEach((l) => {
      const h = l.split(':')[1].trim()
      o(h)
    })
  for (const l in e.tagStyles) {
    const h = e.tagStyles[l].fontFamily
    o(h)
  }
  return r
}
async function fr(i) {
  const t = await (await X.get().fetch(i)).blob(),
    r = new FileReader()
  return await new Promise((n, a) => {
    ;(r.onloadend = () => n(r.result)), (r.onerror = a), r.readAsDataURL(t)
  })
}
async function Be(i, e) {
  const t = await fr(e)
  return `@font-face {
        font-family: "${i.fontFamily}";
        src: url('${t}');
        font-weight: ${i.fontWeight};
        font-style: ${i.fontStyle};
    }`
}
const j = new Map()
async function pr(i, e, t) {
  const r = i
    .filter((s) => k.has(`${s}-and-url`))
    .map((s, n) => {
      if (!j.has(s)) {
        const { url: a } = k.get(`${s}-and-url`)
        n === 0
          ? j.set(s, Be(e, a))
          : j.set(
              s,
              Be(
                {
                  fontWeight: t.fontWeight,
                  fontStyle: t.fontStyle,
                  fontFamily: s,
                },
                a,
              ),
            )
      }
      return j.get(s)
    })
  return (await Promise.all(r)).join(`
`)
}
function gr(i, e, t, r, s) {
  const { domElement: n, styleElement: a, svgRoot: o } = s
  ;(n.innerHTML = `<style>${e.cssStyle}</style><div>${i}</div>`),
    n.setAttribute(
      'style',
      `transform: scale(${t});transform-origin: top left; display: inline-block`,
    ),
    (a.textContent = r)
  const { width: l, height: h } = s.image
  return (
    o.setAttribute('width', l.toString()),
    o.setAttribute('height', h.toString()),
    new XMLSerializer().serializeToString(o)
  )
}
function xr(i, e) {
  const t = O.getOptimalCanvasAndContext(i.width, i.height, e),
    { context: r } = t
  return (
    r.clearRect(0, 0, i.width, i.height),
    r.drawImage(i, 0, 0),
    O.returnCanvasAndContext(t),
    t.canvas
  )
}
function mr(i, e, t) {
  return new Promise(async (r) => {
    t && (await new Promise((s) => setTimeout(s, 100))),
      (i.onload = () => {
        r()
      }),
      (i.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`),
      (i.crossOrigin = 'anonymous')
  })
}
class ue {
  constructor(e) {
    ;(this._activeTextures = {}),
      (this._renderer = e),
      (this._createCanvas = e.type === oe.WEBGPU)
  }
  getTexture(e) {
    return this._buildTexturePromise(e.text, e.resolution, e.style)
  }
  getManagedTexture(e, t, r, s) {
    if (this._activeTextures[s])
      return this._increaseReferenceCount(s), this._activeTextures[s].promise
    const n = this._buildTexturePromise(e, t, r).then(
      (a) => ((this._activeTextures[s].texture = a), a),
    )
    return (
      (this._activeTextures[s] = { texture: null, promise: n, usageCount: 1 }),
      n
    )
  }
  async _buildTexturePromise(e, t, r) {
    const s = B.get(Ze),
      n = ur(e, r),
      a = await pr(n, r, he.defaultTextStyle),
      o = Vt(e, r, a, s),
      l = Math.ceil(Math.ceil(Math.max(1, o.width) + r.padding * 2) * t),
      h = Math.ceil(Math.ceil(Math.max(1, o.height) + r.padding * 2) * t),
      c = s.image
    ;(c.width = l | 0), (c.height = h | 0)
    const d = gr(e, r, t, a, s)
    await mr(c, d, hr() && n.length > 0)
    let u = c
    this._createCanvas && (u = xr(c, t))
    const f = dt(u, c.width, c.height, t)
    return (
      this._createCanvas && this._renderer.texture.initSource(f.source),
      B.return(s),
      f
    )
  }
  _increaseReferenceCount(e) {
    this._activeTextures[e].usageCount++
  }
  decreaseReferenceCount(e) {
    const t = this._activeTextures[e]
    t &&
      (t.usageCount--,
      t.usageCount === 0 &&
        (t.texture
          ? this._cleanUp(t)
          : t.promise
              .then((r) => {
                ;(t.texture = r), this._cleanUp(t)
              })
              .catch(() => {
                E('HTMLTextSystem: Failed to clean texture')
              }),
        (this._activeTextures[e] = null)))
  }
  _cleanUp(e) {
    A.returnTexture(e.texture),
      (e.texture.source.resource = null),
      (e.texture.source.uploadMethodId = 'unknown')
  }
  getReferenceCount(e) {
    return this._activeTextures[e].usageCount
  }
  destroy() {
    this._activeTextures = null
  }
}
ue.extension = {
  type: [b.WebGLSystem, b.WebGPUSystem, b.CanvasSystem],
  name: 'htmlText',
}
ue.defaultFontOptions = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 'normal',
}
class ut {
  constructor(e) {
    ;(this._gpuText = Object.create(null)), (this._renderer = e)
  }
  validateRenderable(e) {
    const t = this._getGpuText(e),
      r = e._getKey()
    if (t.currentKey !== r) {
      const s = e.resolution ?? this._renderer.resolution,
        { width: n, height: a } = this._renderer.canvasText.getTextureSize(
          e.text,
          s,
          e._style,
        )
      return !(
        this._renderer.canvasText.getReferenceCount(t.currentKey) === 1 &&
        n === t.texture._source.width &&
        a === t.texture._source.height
      )
    }
    return !1
  }
  addRenderable(e, t) {
    const s = this._getGpuText(e).batchableSprite
    e._didTextUpdate && this._updateText(e),
      this._renderer.renderPipes.batch.addToBatch(s)
  }
  updateRenderable(e) {
    const r = this._getGpuText(e).batchableSprite
    e._didTextUpdate && this._updateText(e), r.batcher.updateElement(r)
  }
  destroyRenderable(e) {
    this._destroyRenderableById(e.uid)
  }
  _destroyRenderableById(e) {
    const t = this._gpuText[e]
    this._renderer.canvasText.decreaseReferenceCount(t.currentKey),
      B.return(t.batchableSprite),
      (this._gpuText[e] = null)
  }
  _updateText(e) {
    const t = e._getKey(),
      r = this._getGpuText(e),
      s = r.batchableSprite
    r.currentKey !== t && this._updateGpuText(e), (e._didTextUpdate = !1)
    const n = e._style.padding
    ne(s.bounds, e._anchor, s.texture, n)
  }
  _updateGpuText(e) {
    const t = this._getGpuText(e),
      r = t.batchableSprite
    t.texture && this._renderer.canvasText.decreaseReferenceCount(t.currentKey),
      (t.texture = r.texture = this._renderer.canvasText.getManagedTexture(e)),
      (t.currentKey = e._getKey()),
      (r.texture = t.texture)
  }
  _getGpuText(e) {
    return this._gpuText[e.uid] || this.initGpuText(e)
  }
  initGpuText(e) {
    const t = { texture: null, currentKey: '--', batchableSprite: B.get(De) }
    return (
      (t.batchableSprite.renderable = e),
      (t.batchableSprite.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
      (t.batchableSprite.roundPixels =
        this._renderer._roundPixels | e._roundPixels),
      (this._gpuText[e.uid] = t),
      this._updateText(e),
      e.on('destroyed', () => {
        this.destroyRenderable(e)
      }),
      t
    )
  }
  destroy() {
    for (const e in this._gpuText) this._destroyRenderableById(e)
    ;(this._gpuText = null), (this._renderer = null)
  }
}
ut.extension = {
  type: [b.WebGLPipes, b.WebGPUPipes, b.CanvasPipes],
  name: 'text',
}
function Fe(i, e, t) {
  for (let r = 0, s = 4 * t * e; r < e; ++r, s += 4)
    if (i[s + 3] !== 0) return !1
  return !0
}
function Re(i, e, t, r, s) {
  const n = 4 * e
  for (let a = r, o = r * n + 4 * t; a <= s; ++a, o += n)
    if (i[o + 3] !== 0) return !1
  return !0
}
function _r(i, e = 1) {
  const { width: t, height: r } = i,
    s = i.getContext('2d', { willReadFrequently: !0 })
  if (s === null) throw new TypeError('Failed to get canvas 2D context')
  const a = s.getImageData(0, 0, t, r).data
  let o = 0,
    l = 0,
    h = t - 1,
    c = r - 1
  for (; l < r && Fe(a, t, l); ) ++l
  if (l === r) return K.EMPTY
  for (; Fe(a, t, c); ) --c
  for (; Re(a, t, o, l, c); ) ++o
  for (; Re(a, t, h, l, c); ) --h
  return ++h, ++c, new K(o / e, l / e, (h - o) / e, (c - l) / e)
}
class ft {
  constructor(e) {
    ;(this._activeTextures = {}), (this._renderer = e)
  }
  getTextureSize(e, t, r) {
    const s = H.measureText(e || ' ', r)
    let n = Math.ceil(Math.ceil(Math.max(1, s.width) + r.padding * 2) * t),
      a = Math.ceil(Math.ceil(Math.max(1, s.height) + r.padding * 2) * t)
    return (
      (n = Math.ceil(n - 1e-6)),
      (a = Math.ceil(a - 1e-6)),
      (n = _e(n)),
      (a = _e(a)),
      { width: n, height: a }
    )
  }
  getTexture(e, t, r, s) {
    typeof e == 'string' &&
      (w(
        '8.0.0',
        'CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments',
      ),
      (e = { text: e, style: r, resolution: t })),
      e.style instanceof $ || (e.style = new $(e.style))
    const { texture: n, canvasAndContext: a } = this.createTextureAndCanvas(e)
    return (
      this._renderer.texture.initSource(n._source),
      O.returnCanvasAndContext(a),
      n
    )
  }
  createTextureAndCanvas(e) {
    const { text: t, style: r } = e,
      s = e.resolution ?? this._renderer.resolution,
      n = H.measureText(t || ' ', r),
      a = Math.ceil(Math.ceil(Math.max(1, n.width) + r.padding * 2) * s),
      o = Math.ceil(Math.ceil(Math.max(1, n.height) + r.padding * 2) * s),
      l = O.getOptimalCanvasAndContext(a, o),
      { canvas: h } = l
    this.renderTextToCanvas(t, r, s, l)
    const c = dt(h, a, o, s)
    if (r.trim) {
      const d = _r(h, s)
      c.frame.copyFrom(d), c.updateUvs()
    }
    return { texture: c, canvasAndContext: l }
  }
  getManagedTexture(e) {
    const t = e._getKey()
    if (this._activeTextures[t])
      return this._increaseReferenceCount(t), this._activeTextures[t].texture
    const { texture: r, canvasAndContext: s } = this.createTextureAndCanvas(e)
    return (
      (this._activeTextures[t] = {
        canvasAndContext: s,
        texture: r,
        usageCount: 1,
      }),
      r
    )
  }
  _increaseReferenceCount(e) {
    this._activeTextures[e].usageCount++
  }
  decreaseReferenceCount(e) {
    const t = this._activeTextures[e]
    if ((t.usageCount--, t.usageCount === 0)) {
      O.returnCanvasAndContext(t.canvasAndContext), A.returnTexture(t.texture)
      const r = t.texture.source
      ;(r.resource = null),
        (r.uploadMethodId = 'unknown'),
        (r.alphaMode = 'no-premultiply-alpha'),
        (this._activeTextures[e] = null)
    }
  }
  getReferenceCount(e) {
    return this._activeTextures[e].usageCount
  }
  renderTextToCanvas(e, t, r, s) {
    var y, T, v, R, C
    const { canvas: n, context: a } = s,
      o = ie(t),
      l = H.measureText(e || ' ', t),
      h = l.lines,
      c = l.lineHeight,
      d = l.lineWidths,
      u = l.maxLineWidth,
      f = l.fontProperties,
      p = n.height
    a.resetTransform(), a.scale(r, r)
    const g = t.padding * 2
    if (
      (a.clearRect(0, 0, l.width + 4 + g, l.height + 4 + g),
      (y = t._stroke) != null && y.width)
    ) {
      const M = t._stroke
      ;(a.lineWidth = M.width),
        (a.miterLimit = M.miterLimit),
        (a.lineJoin = M.join),
        (a.lineCap = M.cap)
    }
    a.font = o
    let x, m
    const _ = t.dropShadow ? 2 : 1
    for (let M = 0; M < _; ++M) {
      const z = t.dropShadow && M === 0,
        W = z ? Math.ceil(Math.max(1, p) + t.padding * 2) : 0,
        Q = W * r
      if (z) {
        ;(a.fillStyle = 'black'), (a.strokeStyle = 'black')
        const P = t.dropShadow,
          pt = P.color,
          gt = P.alpha
        a.shadowColor = I.shared.setValue(pt).setAlpha(gt).toRgbaString()
        const xt = P.blur * r,
          ge = P.distance * r
        ;(a.shadowBlur = xt),
          (a.shadowOffsetX = Math.cos(P.angle) * ge),
          (a.shadowOffsetY = Math.sin(P.angle) * ge + Q)
      } else
        (a.globalAlpha = ((T = t._fill) == null ? void 0 : T.alpha) ?? 1),
          (a.fillStyle = t._fill ? q(t._fill, a) : null),
          (v = t._stroke) != null &&
            v.width &&
            (a.strokeStyle = q(t._stroke, a)),
          (a.shadowColor = 'black')
      let fe = (c - f.fontSize) / 2
      c - f.fontSize < 0 && (fe = 0)
      const pe = ((R = t._stroke) == null ? void 0 : R.width) ?? 0
      for (let P = 0; P < h.length; P++)
        (x = pe / 2),
          (m = pe / 2 + P * c + f.ascent + fe),
          t.align === 'right'
            ? (x += u - d[P])
            : t.align === 'center' && (x += (u - d[P]) / 2),
          (C = t._stroke) != null &&
            C.width &&
            this._drawLetterSpacing(
              h[P],
              t,
              s,
              x + t.padding,
              m + t.padding - W,
              !0,
            ),
          t._fill !== void 0 &&
            this._drawLetterSpacing(
              h[P],
              t,
              s,
              x + t.padding,
              m + t.padding - W,
            )
    }
  }
  _drawLetterSpacing(e, t, r, s, n, a = !1) {
    const { context: o } = r,
      l = t.letterSpacing
    let h = !1
    if (
      (H.experimentalLetterSpacingSupported &&
        (H.experimentalLetterSpacing
          ? ((o.letterSpacing = `${l}px`),
            (o.textLetterSpacing = `${l}px`),
            (h = !0))
          : ((o.letterSpacing = '0px'), (o.textLetterSpacing = '0px'))),
      l === 0 || h)
    ) {
      a ? o.strokeText(e, s, n) : o.fillText(e, s, n)
      return
    }
    let c = s
    const d = H.graphemeSegmenter(e)
    let u = o.measureText(e).width,
      f = 0
    for (let p = 0; p < d.length; ++p) {
      const g = d[p]
      a ? o.strokeText(g, c, n) : o.fillText(g, c, n)
      let x = ''
      for (let m = p + 1; m < d.length; ++m) x += d[m]
      ;(f = o.measureText(x).width), (c += u - f + l), (u = f)
    }
  }
  destroy() {
    this._activeTextures = null
  }
}
ft.extension = {
  type: [b.WebGLSystem, b.WebGPUSystem, b.CanvasSystem],
  name: 'canvasText',
}
F.add(Le)
F.add(Ee)
F.add(et)
F.add(Bt)
F.add(st)
F.add(ft)
F.add(ut)
F.add(ct, ir, sr)
F.add(ue)
F.add(ht)
F.add(ot)
F.add(at)
F.add(Ye)
F.add($e)
