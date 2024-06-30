import {
  a5 as he,
  a6 as oe,
  au as ke,
  av as ye,
  aw as Ue,
  r as N,
  k as We,
  ax as Xe,
  J as fe,
  i as v,
  ay as Ge,
  A as Ye,
  j as ce,
  G as Ae,
  d as q,
  Y as Ve,
  az as Le,
  aA as be,
  o as I,
  c as U,
  a as J,
  w as j,
  m as x,
  ab as se,
  q as l,
  aa as X,
  p as le,
  H as Pe,
  K as _e,
  a7 as Ke,
  a9 as He,
  I as Oe,
  ac as me,
  af as ue,
  F as re,
  aB as ve,
  at as je,
  aC as Ee,
  aD as Je,
  h as we,
  x as Ne,
  g as Fe,
  t as qe,
  v as Qe,
  _ as Me,
  f as de,
  u as Ze,
  aE as K,
  aF as De,
  aG as et,
  b as Be,
  E as tt,
} from './index-f246c644.js'
/* empty css               */ import { E as lt } from './el-overlay-9d7012cf.js'
import {
  E as ze,
  u as at,
  d as Te,
  a as nt,
  b as ot,
  c as st,
  e as rt,
} from './el-input-bb203cd7.js'
import {
  U as ie,
  I as Se,
  C as Re,
  t as it,
  d as Ce,
} from './focus-trap-c8be6e9c.js'
const $e = Symbol('sliderContextKey'),
  ut = he({
    modelValue: { type: oe([Number, Array]), default: 0 },
    id: { type: String, default: void 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    showInput: Boolean,
    showInputControls: { type: Boolean, default: !0 },
    size: ke,
    inputSize: ke,
    showStops: Boolean,
    showTooltip: { type: Boolean, default: !0 },
    formatTooltip: { type: oe(Function), default: void 0 },
    disabled: Boolean,
    range: Boolean,
    vertical: Boolean,
    height: String,
    debounce: { type: Number, default: 300 },
    label: { type: String, default: void 0 },
    rangeStartLabel: { type: String, default: void 0 },
    rangeEndLabel: { type: String, default: void 0 },
    formatValueText: { type: oe(Function), default: void 0 },
    tooltipClass: { type: String, default: void 0 },
    placement: { type: String, values: ze, default: 'top' },
    marks: { type: oe(Object) },
    validateEvent: { type: Boolean, default: !0 },
  }),
  ge = (e) => ye(e) || (Ue(e) && e.every(ye)),
  dt = { [ie]: ge, [Se]: ge, [Re]: ge },
  ct = (e, t, n) => {
    const a = N()
    return (
      We(async () => {
        e.range
          ? (Array.isArray(e.modelValue)
              ? ((t.firstValue = Math.max(e.min, e.modelValue[0])),
                (t.secondValue = Math.min(e.max, e.modelValue[1])))
              : ((t.firstValue = e.min), (t.secondValue = e.max)),
            (t.oldValue = [t.firstValue, t.secondValue]))
          : (typeof e.modelValue != 'number' || Number.isNaN(e.modelValue)
              ? (t.firstValue = e.min)
              : (t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue))),
            (t.oldValue = t.firstValue)),
          Xe(window, 'resize', n),
          await fe(),
          n()
      }),
      { sliderWrapper: a }
    )
  },
  mt = (e) =>
    v(() =>
      e.marks
        ? Object.keys(e.marks)
            .map(Number.parseFloat)
            .sort((n, a) => n - a)
            .filter((n) => n <= e.max && n >= e.min)
            .map((n) => ({
              point: n,
              position: ((n - e.min) * 100) / (e.max - e.min),
              mark: e.marks[n],
            }))
        : [],
    ),
  ft = (e, t, n) => {
    const { form: a, formItem: o } = at(),
      u = Ge(),
      d = N(),
      y = N(),
      g = { firstButton: d, secondButton: y },
      i = v(() => e.disabled || (a == null ? void 0 : a.disabled) || !1),
      m = v(() => Math.min(t.firstValue, t.secondValue)),
      s = v(() => Math.max(t.firstValue, t.secondValue)),
      S = v(() =>
        e.range
          ? `${(100 * (s.value - m.value)) / (e.max - e.min)}%`
          : `${(100 * (t.firstValue - e.min)) / (e.max - e.min)}%`,
      ),
      k = v(() =>
        e.range ? `${(100 * (m.value - e.min)) / (e.max - e.min)}%` : '0%',
      ),
      _ = v(() => (e.vertical ? { height: e.height } : {})),
      L = v(() =>
        e.vertical
          ? { height: S.value, bottom: k.value }
          : { width: S.value, left: k.value },
      ),
      p = () => {
        u.value &&
          (t.sliderSize = u.value[`client${e.vertical ? 'Height' : 'Width'}`])
      },
      M = (f) => {
        const V = e.min + (f * (e.max - e.min)) / 100
        if (!e.range) return d
        let T
        return (
          Math.abs(m.value - V) < Math.abs(s.value - V)
            ? (T =
                t.firstValue < t.secondValue ? 'firstButton' : 'secondButton')
            : (T =
                t.firstValue > t.secondValue ? 'firstButton' : 'secondButton'),
          g[T]
        )
      },
      E = (f) => {
        const V = M(f)
        return V.value.setPosition(f), V
      },
      z = (f) => {
        ;(t.firstValue = f), b(e.range ? [m.value, s.value] : f)
      },
      B = (f) => {
        ;(t.secondValue = f), e.range && b([m.value, s.value])
      },
      b = (f) => {
        n(ie, f), n(Se, f)
      },
      h = async () => {
        await fe(), n(Re, e.range ? [m.value, s.value] : e.modelValue)
      },
      Q = (f) => {
        var V, T, D, ee, te, O
        if (i.value || t.dragging) return
        p()
        let W = 0
        if (e.vertical) {
          const P =
            (D =
              (T = (V = f.touches) == null ? void 0 : V.item(0)) == null
                ? void 0
                : T.clientY) != null
              ? D
              : f.clientY
          W =
            ((u.value.getBoundingClientRect().bottom - P) / t.sliderSize) * 100
        } else {
          const P =
              (O =
                (te = (ee = f.touches) == null ? void 0 : ee.item(0)) == null
                  ? void 0
                  : te.clientX) != null
                ? O
                : f.clientX,
            F = u.value.getBoundingClientRect().left
          W = ((P - F) / t.sliderSize) * 100
        }
        if (!(W < 0 || W > 100)) return E(W)
      }
    return {
      elFormItem: o,
      slider: u,
      firstButton: d,
      secondButton: y,
      sliderDisabled: i,
      minValue: m,
      maxValue: s,
      runwayStyle: _,
      barStyle: L,
      resetSize: p,
      setPosition: E,
      emitChange: h,
      onSliderWrapperPrevent: (f) => {
        var V, T
        ;(((V = g.firstButton.value) != null && V.dragging) ||
          ((T = g.secondButton.value) != null && T.dragging)) &&
          f.preventDefault()
      },
      onSliderClick: (f) => {
        Q(f) && h()
      },
      onSliderDown: async (f) => {
        const V = Q(f)
        V && (await fe(), V.value.onButtonDown(f))
      },
      setFirstValue: z,
      setSecondValue: B,
    }
  },
  {
    left: vt,
    down: gt,
    right: yt,
    up: bt,
    home: wt,
    end: ht,
    pageUp: Vt,
    pageDown: St,
  } = Ae,
  xt = (e, t, n) => {
    const a = N(),
      o = N(!1),
      u = v(() => t.value instanceof Function),
      d = v(() => (u.value && t.value(e.modelValue)) || e.modelValue),
      y = Te(() => {
        n.value && (o.value = !0)
      }, 50),
      g = Te(() => {
        n.value && (o.value = !1)
      }, 50)
    return {
      tooltip: a,
      tooltipVisible: o,
      formatValue: d,
      displayTooltip: y,
      hideTooltip: g,
    }
  },
  pt = (e, t, n) => {
    const {
        disabled: a,
        min: o,
        max: u,
        step: d,
        showTooltip: y,
        precision: g,
        sliderSize: i,
        formatTooltip: m,
        emitChange: s,
        resetSize: S,
        updateDragging: k,
      } = Ye($e),
      {
        tooltip: _,
        tooltipVisible: L,
        formatValue: p,
        displayTooltip: M,
        hideTooltip: E,
      } = xt(e, m, y),
      z = N(),
      B = v(() => `${((e.modelValue - o.value) / (u.value - o.value)) * 100}%`),
      b = v(() => (e.vertical ? { bottom: B.value } : { left: B.value })),
      h = () => {
        ;(t.hovering = !0), M()
      },
      Q = () => {
        ;(t.hovering = !1), t.dragging || E()
      },
      Z = (r) => {
        a.value ||
          (r.preventDefault(),
          W(r),
          window.addEventListener('mousemove', P),
          window.addEventListener('touchmove', P),
          window.addEventListener('mouseup', F),
          window.addEventListener('touchend', F),
          window.addEventListener('contextmenu', F),
          z.value.focus())
      },
      G = (r) => {
        a.value ||
          ((t.newPosition =
            Number.parseFloat(B.value) + (r / (u.value - o.value)) * 100),
          Y(t.newPosition),
          s())
      },
      H = () => {
        G(-d.value)
      },
      f = () => {
        G(d.value)
      },
      V = () => {
        G(-d.value * 4)
      },
      T = () => {
        G(d.value * 4)
      },
      D = () => {
        a.value || (Y(0), s())
      },
      ee = () => {
        a.value || (Y(100), s())
      },
      te = (r) => {
        let w = !0
        ;[vt, gt].includes(r.key)
          ? H()
          : [yt, bt].includes(r.key)
          ? f()
          : r.key === wt
          ? D()
          : r.key === ht
          ? ee()
          : r.key === St
          ? V()
          : r.key === Vt
          ? T()
          : (w = !1),
          w && r.preventDefault()
      },
      O = (r) => {
        let w, R
        return (
          r.type.startsWith('touch')
            ? ((R = r.touches[0].clientY), (w = r.touches[0].clientX))
            : ((R = r.clientY), (w = r.clientX)),
          { clientX: w, clientY: R }
        )
      },
      W = (r) => {
        ;(t.dragging = !0), (t.isClick = !0)
        const { clientX: w, clientY: R } = O(r)
        e.vertical ? (t.startY = R) : (t.startX = w),
          (t.startPosition = Number.parseFloat(B.value)),
          (t.newPosition = t.startPosition)
      },
      P = (r) => {
        if (t.dragging) {
          ;(t.isClick = !1), M(), S()
          let w
          const { clientX: R, clientY: A } = O(r)
          e.vertical
            ? ((t.currentY = A),
              (w = ((t.startY - t.currentY) / i.value) * 100))
            : ((t.currentX = R),
              (w = ((t.currentX - t.startX) / i.value) * 100)),
            (t.newPosition = t.startPosition + w),
            Y(t.newPosition)
        }
      },
      F = () => {
        t.dragging &&
          (setTimeout(() => {
            ;(t.dragging = !1),
              t.hovering || E(),
              t.isClick || Y(t.newPosition),
              s()
          }, 0),
          window.removeEventListener('mousemove', P),
          window.removeEventListener('touchmove', P),
          window.removeEventListener('mouseup', F),
          window.removeEventListener('touchend', F),
          window.removeEventListener('contextmenu', F))
      },
      Y = async (r) => {
        if (r === null || Number.isNaN(+r)) return
        r < 0 ? (r = 0) : r > 100 && (r = 100)
        const w = 100 / ((u.value - o.value) / d.value)
        let A = Math.round(r / w) * w * (u.value - o.value) * 0.01 + o.value
        ;(A = Number.parseFloat(A.toFixed(g.value))),
          A !== e.modelValue && n(ie, A),
          !t.dragging &&
            e.modelValue !== t.oldValue &&
            (t.oldValue = e.modelValue),
          await fe(),
          t.dragging && M(),
          _.value.updatePopper()
      }
    return (
      ce(
        () => t.dragging,
        (r) => {
          k(r)
        },
      ),
      {
        disabled: a,
        button: z,
        tooltip: _,
        tooltipVisible: L,
        showTooltip: y,
        wrapperStyle: b,
        formatValue: p,
        handleMouseEnter: h,
        handleMouseLeave: Q,
        onButtonDown: Z,
        onKeyDown: te,
        setPosition: Y,
      }
    )
  },
  kt = (e, t, n, a) => ({
    stops: v(() => {
      if (!e.showStops || e.min > e.max) return []
      if (e.step === 0) return []
      const d = (e.max - e.min) / e.step,
        y = (100 * e.step) / (e.max - e.min),
        g = Array.from({ length: d - 1 }).map((i, m) => (m + 1) * y)
      return e.range
        ? g.filter(
            (i) =>
              i < (100 * (n.value - e.min)) / (e.max - e.min) ||
              i > (100 * (a.value - e.min)) / (e.max - e.min),
          )
        : g.filter((i) => i > (100 * (t.firstValue - e.min)) / (e.max - e.min))
    }),
    getStopStyle: (d) => (e.vertical ? { bottom: `${d}%` } : { left: `${d}%` }),
  }),
  _t = (e, t, n, a, o, u) => {
    const d = (i) => {
        o(ie, i), o(Se, i)
      },
      y = () =>
        e.range
          ? ![n.value, a.value].every((i, m) => i === t.oldValue[m])
          : e.modelValue !== t.oldValue,
      g = () => {
        var i, m
        e.min > e.max && it('Slider', 'min should not be greater than max.')
        const s = e.modelValue
        e.range && Array.isArray(s)
          ? s[1] < e.min
            ? d([e.min, e.min])
            : s[0] > e.max
            ? d([e.max, e.max])
            : s[0] < e.min
            ? d([e.min, s[1]])
            : s[1] > e.max
            ? d([s[0], e.max])
            : ((t.firstValue = s[0]),
              (t.secondValue = s[1]),
              y() &&
                (e.validateEvent &&
                  ((i = u == null ? void 0 : u.validate) == null ||
                    i.call(u, 'change').catch((S) => Ce())),
                (t.oldValue = s.slice())))
          : !e.range &&
            typeof s == 'number' &&
            !Number.isNaN(s) &&
            (s < e.min
              ? d(e.min)
              : s > e.max
              ? d(e.max)
              : ((t.firstValue = s),
                y() &&
                  (e.validateEvent &&
                    ((m = u == null ? void 0 : u.validate) == null ||
                      m.call(u, 'change').catch((S) => Ce())),
                  (t.oldValue = s))))
      }
    g(),
      ce(
        () => t.dragging,
        (i) => {
          i || g()
        },
      ),
      ce(
        () => e.modelValue,
        (i, m) => {
          t.dragging ||
            (Array.isArray(i) &&
              Array.isArray(m) &&
              i.every((s, S) => s === m[S]) &&
              t.firstValue === i[0] &&
              t.secondValue === i[1]) ||
            g()
        },
        { deep: !0 },
      ),
      ce(
        () => [e.min, e.max],
        () => {
          g()
        },
      )
  },
  Et = he({
    modelValue: { type: Number, default: 0 },
    vertical: Boolean,
    tooltipClass: String,
    placement: { type: String, values: ze, default: 'top' },
  }),
  Bt = { [ie]: (e) => ye(e) },
  Tt = ['tabindex'],
  Ct = q({ name: 'ElSliderButton' }),
  It = q({
    ...Ct,
    props: Et,
    emits: Bt,
    setup(e, { expose: t, emit: n }) {
      const a = e,
        o = Ve('slider'),
        u = Le({
          hovering: !1,
          dragging: !1,
          isClick: !1,
          startX: 0,
          currentX: 0,
          startY: 0,
          currentY: 0,
          startPosition: 0,
          newPosition: 0,
          oldValue: a.modelValue,
        }),
        {
          disabled: d,
          button: y,
          tooltip: g,
          showTooltip: i,
          tooltipVisible: m,
          wrapperStyle: s,
          formatValue: S,
          handleMouseEnter: k,
          handleMouseLeave: _,
          onButtonDown: L,
          onKeyDown: p,
          setPosition: M,
        } = pt(a, u, n),
        { hovering: E, dragging: z } = be(u)
      return (
        t({
          onButtonDown: L,
          onKeyDown: p,
          setPosition: M,
          hovering: E,
          dragging: z,
        }),
        (B, b) => (
          I(),
          U(
            'div',
            {
              ref_key: 'button',
              ref: y,
              class: X([
                l(o).e('button-wrapper'),
                { hover: l(E), dragging: l(z) },
              ]),
              style: le(l(s)),
              tabindex: l(d) ? -1 : 0,
              onMouseenter: b[0] || (b[0] = (...h) => l(k) && l(k)(...h)),
              onMouseleave: b[1] || (b[1] = (...h) => l(_) && l(_)(...h)),
              onMousedown: b[2] || (b[2] = (...h) => l(L) && l(L)(...h)),
              onTouchstart: b[3] || (b[3] = (...h) => l(L) && l(L)(...h)),
              onFocus: b[4] || (b[4] = (...h) => l(k) && l(k)(...h)),
              onBlur: b[5] || (b[5] = (...h) => l(_) && l(_)(...h)),
              onKeydown: b[6] || (b[6] = (...h) => l(p) && l(p)(...h)),
            },
            [
              J(
                l(nt),
                {
                  ref_key: 'tooltip',
                  ref: g,
                  visible: l(m),
                  placement: B.placement,
                  'fallback-placements': ['top', 'bottom', 'right', 'left'],
                  'stop-popper-mouse-event': !1,
                  'popper-class': B.tooltipClass,
                  disabled: !l(i),
                  persistent: '',
                },
                {
                  content: j(() => [x('span', null, se(l(S)), 1)]),
                  default: j(() => [
                    x(
                      'div',
                      {
                        class: X([
                          l(o).e('button'),
                          { hover: l(E), dragging: l(z) },
                        ]),
                      },
                      null,
                      2,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['visible', 'placement', 'popper-class', 'disabled'],
              ),
            ],
            46,
            Tt,
          )
        )
      )
    },
  })
var Ie = Pe(It, [['__file', 'button.vue']])
const Lt = he({ mark: { type: oe([String, Object]), default: void 0 } })
var Pt = q({
  name: 'ElSliderMarker',
  props: Lt,
  setup(e) {
    const t = Ve('slider'),
      n = v(() => (_e(e.mark) ? e.mark : e.mark.label)),
      a = v(() => (_e(e.mark) ? void 0 : e.mark.style))
    return () =>
      Ke('div', { class: t.e('marks-text'), style: a.value }, n.value)
  },
})
const Nt = ['id', 'role', 'aria-label', 'aria-labelledby'],
  Ft = { key: 1 },
  Mt = q({ name: 'ElSlider' }),
  zt = q({
    ...Mt,
    props: ut,
    emits: dt,
    setup(e, { expose: t, emit: n }) {
      const a = e,
        o = Ve('slider'),
        { t: u } = He(),
        d = Le({
          firstValue: 0,
          secondValue: 0,
          oldValue: 0,
          dragging: !1,
          sliderSize: 1,
        }),
        {
          elFormItem: y,
          slider: g,
          firstButton: i,
          secondButton: m,
          sliderDisabled: s,
          minValue: S,
          maxValue: k,
          runwayStyle: _,
          barStyle: L,
          resetSize: p,
          emitChange: M,
          onSliderWrapperPrevent: E,
          onSliderClick: z,
          onSliderDown: B,
          setFirstValue: b,
          setSecondValue: h,
        } = ft(a, d, n),
        { stops: Q, getStopStyle: Z } = kt(a, d, S, k),
        { inputId: G, isLabeledByFormItem: H } = ot(a, { formItemContext: y }),
        f = st(),
        V = v(() => a.inputSize || f.value),
        T = v(
          () =>
            a.label || u('el.slider.defaultLabel', { min: a.min, max: a.max }),
        ),
        D = v(() =>
          a.range
            ? a.rangeStartLabel || u('el.slider.defaultRangeStartLabel')
            : T.value,
        ),
        ee = v(() =>
          a.formatValueText ? a.formatValueText(r.value) : `${r.value}`,
        ),
        te = v(() => a.rangeEndLabel || u('el.slider.defaultRangeEndLabel')),
        O = v(() =>
          a.formatValueText ? a.formatValueText(w.value) : `${w.value}`,
        ),
        W = v(() => [
          o.b(),
          o.m(f.value),
          o.is('vertical', a.vertical),
          { [o.m('with-input')]: a.showInput },
        ]),
        P = mt(a)
      _t(a, d, S, k, n, y)
      const F = v(() => {
          const c = [a.min, a.max, a.step].map(($) => {
            const ae = `${$}`.split('.')[1]
            return ae ? ae.length : 0
          })
          return Math.max.apply(null, c)
        }),
        { sliderWrapper: Y } = ct(a, d, p),
        { firstValue: r, secondValue: w, sliderSize: R } = be(d),
        A = (c) => {
          d.dragging = c
        }
      return (
        Oe($e, {
          ...be(a),
          sliderSize: R,
          disabled: s,
          precision: F,
          emitChange: M,
          resetSize: p,
          updateDragging: A,
        }),
        t({ onSliderClick: z }),
        (c, $) => {
          var ae, pe
          return (
            I(),
            U(
              'div',
              {
                id: c.range ? l(G) : void 0,
                ref_key: 'sliderWrapper',
                ref: Y,
                class: X(l(W)),
                role: c.range ? 'group' : void 0,
                'aria-label': c.range && !l(H) ? l(T) : void 0,
                'aria-labelledby':
                  c.range && l(H)
                    ? (ae = l(y)) == null
                      ? void 0
                      : ae.labelId
                    : void 0,
                onTouchstart: $[2] || ($[2] = (...C) => l(E) && l(E)(...C)),
                onTouchmove: $[3] || ($[3] = (...C) => l(E) && l(E)(...C)),
              },
              [
                x(
                  'div',
                  {
                    ref_key: 'slider',
                    ref: g,
                    class: X([
                      l(o).e('runway'),
                      { 'show-input': c.showInput && !c.range },
                      l(o).is('disabled', l(s)),
                    ]),
                    style: le(l(_)),
                    onMousedown: $[0] || ($[0] = (...C) => l(B) && l(B)(...C)),
                    onTouchstart: $[1] || ($[1] = (...C) => l(B) && l(B)(...C)),
                  },
                  [
                    x(
                      'div',
                      { class: X(l(o).e('bar')), style: le(l(L)) },
                      null,
                      6,
                    ),
                    J(
                      Ie,
                      {
                        id: c.range ? void 0 : l(G),
                        ref_key: 'firstButton',
                        ref: i,
                        'model-value': l(r),
                        vertical: c.vertical,
                        'tooltip-class': c.tooltipClass,
                        placement: c.placement,
                        role: 'slider',
                        'aria-label': c.range || !l(H) ? l(D) : void 0,
                        'aria-labelledby':
                          !c.range && l(H)
                            ? (pe = l(y)) == null
                              ? void 0
                              : pe.labelId
                            : void 0,
                        'aria-valuemin': c.min,
                        'aria-valuemax': c.range ? l(w) : c.max,
                        'aria-valuenow': l(r),
                        'aria-valuetext': l(ee),
                        'aria-orientation': c.vertical
                          ? 'vertical'
                          : 'horizontal',
                        'aria-disabled': l(s),
                        'onUpdate:modelValue': l(b),
                      },
                      null,
                      8,
                      [
                        'id',
                        'model-value',
                        'vertical',
                        'tooltip-class',
                        'placement',
                        'aria-label',
                        'aria-labelledby',
                        'aria-valuemin',
                        'aria-valuemax',
                        'aria-valuenow',
                        'aria-valuetext',
                        'aria-orientation',
                        'aria-disabled',
                        'onUpdate:modelValue',
                      ],
                    ),
                    c.range
                      ? (I(),
                        me(
                          Ie,
                          {
                            key: 0,
                            ref_key: 'secondButton',
                            ref: m,
                            'model-value': l(w),
                            vertical: c.vertical,
                            'tooltip-class': c.tooltipClass,
                            placement: c.placement,
                            role: 'slider',
                            'aria-label': l(te),
                            'aria-valuemin': l(r),
                            'aria-valuemax': c.max,
                            'aria-valuenow': l(w),
                            'aria-valuetext': l(O),
                            'aria-orientation': c.vertical
                              ? 'vertical'
                              : 'horizontal',
                            'aria-disabled': l(s),
                            'onUpdate:modelValue': l(h),
                          },
                          null,
                          8,
                          [
                            'model-value',
                            'vertical',
                            'tooltip-class',
                            'placement',
                            'aria-label',
                            'aria-valuemin',
                            'aria-valuemax',
                            'aria-valuenow',
                            'aria-valuetext',
                            'aria-orientation',
                            'aria-disabled',
                            'onUpdate:modelValue',
                          ],
                        ))
                      : ue('v-if', !0),
                    c.showStops
                      ? (I(),
                        U('div', Ft, [
                          (I(!0),
                          U(
                            re,
                            null,
                            ve(
                              l(Q),
                              (C, ne) => (
                                I(),
                                U(
                                  'div',
                                  {
                                    key: ne,
                                    class: X(l(o).e('stop')),
                                    style: le(l(Z)(C)),
                                  },
                                  null,
                                  6,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ue('v-if', !0),
                    l(P).length > 0
                      ? (I(),
                        U(
                          re,
                          { key: 2 },
                          [
                            x('div', null, [
                              (I(!0),
                              U(
                                re,
                                null,
                                ve(
                                  l(P),
                                  (C, ne) => (
                                    I(),
                                    U(
                                      'div',
                                      {
                                        key: ne,
                                        style: le(l(Z)(C.position)),
                                        class: X([
                                          l(o).e('stop'),
                                          l(o).e('marks-stop'),
                                        ]),
                                      },
                                      null,
                                      6,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                            x(
                              'div',
                              { class: X(l(o).e('marks')) },
                              [
                                (I(!0),
                                U(
                                  re,
                                  null,
                                  ve(
                                    l(P),
                                    (C, ne) => (
                                      I(),
                                      me(
                                        l(Pt),
                                        {
                                          key: ne,
                                          mark: C.mark,
                                          style: le(l(Z)(C.position)),
                                        },
                                        null,
                                        8,
                                        ['mark', 'style'],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ],
                              2,
                            ),
                          ],
                          64,
                        ))
                      : ue('v-if', !0),
                  ],
                  38,
                ),
                c.showInput && !c.range
                  ? (I(),
                    me(
                      l(rt),
                      {
                        key: 0,
                        ref: 'input',
                        'model-value': l(r),
                        class: X(l(o).e('input')),
                        step: c.step,
                        disabled: l(s),
                        controls: c.showInputControls,
                        min: c.min,
                        max: c.max,
                        debounce: c.debounce,
                        size: l(V),
                        'onUpdate:modelValue': l(b),
                        onChange: l(M),
                      },
                      null,
                      8,
                      [
                        'model-value',
                        'class',
                        'step',
                        'disabled',
                        'controls',
                        'min',
                        'max',
                        'debounce',
                        'size',
                        'onUpdate:modelValue',
                        'onChange',
                      ],
                    ))
                  : ue('v-if', !0),
              ],
              42,
              Nt,
            )
          )
        }
      )
    },
  })
var Rt = Pe(zt, [['__file', 'slider.vue']])
const $t = je(Rt)
const xe = (e) => (qe('data-v-b227da69'), (e = e()), Qe(), e),
  Ut = { class: 'gif-box' },
  Wt = { class: 'gif-row' },
  Xt = xe(() => x('span', { class: 'text' }, '调整尺寸：', -1)),
  Gt = { class: 'gif-row' },
  Yt = xe(() => x('span', { class: 'text' }, '原始尺寸：', -1)),
  At = { class: 'gif-row' },
  Kt = xe(() => x('span', { class: 'text' }, '最终尺寸：', -1)),
  Ht = q({
    __name: 'dialog',
    props: Ee(
      { originalW: { default: 0 }, originalH: { default: 0 } },
      { isDialogShow: { type: Boolean }, isDialogShowModifiers: {} },
    ),
    emits: Ee(['confirm', 'cancel'], ['update:isDialogShow']),
    setup(e, { emit: t }) {
      const n = e,
        a = t,
        o = Je(e, 'isDialogShow'),
        u = N(100),
        d = v(() => ((150 / n.originalH) * 100) << 0),
        y = v(() => (n.originalW * (u.value / 100)) << 0),
        g = v(() => (n.originalH * (u.value / 100)) << 0)
      function i() {
        a('confirm', y.value, g.value), (o.value = !1)
      }
      function m() {
        a('cancel'), (o.value = !1)
      }
      return (s, S) => {
        const k = $t,
          _ = Fe,
          L = lt
        return (
          I(),
          me(
            L,
            {
              modelValue: o.value,
              'onUpdate:modelValue': S[1] || (S[1] = (p) => (o.value = p)),
              width: '500',
              title: '调整GIF',
              'close-on-click-modal': !1,
              'show-close': !1,
            },
            {
              footer: j(() => [
                x('div', null, [
                  J(
                    _,
                    {
                      type: 'yellow',
                      style: { 'margin-right': '20px' },
                      onClick: i,
                    },
                    { default: j(() => [we('确定')]), _: 1 },
                  ),
                  J(
                    _,
                    { onClick: m },
                    { default: j(() => [we('取消')]), _: 1 },
                  ),
                ]),
              ]),
              default: j(() => [
                x('div', Ut, [
                  x('div', Wt, [
                    Xt,
                    J(
                      k,
                      {
                        modelValue: l(u),
                        'onUpdate:modelValue':
                          S[0] ||
                          (S[0] = (p) => (Ne(u) ? (u.value = p) : null)),
                        step: 10,
                        min: l(d),
                        max: 100,
                      },
                      null,
                      8,
                      ['modelValue', 'min'],
                    ),
                  ]),
                  x('div', Gt, [
                    Yt,
                    x(
                      'span',
                      null,
                      se(s.originalW) + ' X ' + se(s.originalH),
                      1,
                    ),
                  ]),
                  x('div', At, [
                    Kt,
                    x('span', null, se(l(y)) + ' X ' + se(l(g)), 1),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          )
        )
      }
    },
  })
const Ot = Me(Ht, [['__scopeId', 'data-v-b227da69']])
async function jt() {
  const e = Ze(),
    t = {}
  return (
    (t.videosrc = e.videoSrc),
    (t.videoclip = { start: e.startTime, end: e.endTime }),
    (t.videocrop = {
      x: K.videoTexture.frame.x,
      y: K.videoTexture.frame.y,
      w: K.videoTexture.frame.width,
      h: K.videoTexture.frame.height,
    }),
    (t.texts = await Jt()),
    t
  )
}
async function Jt() {
  const e = []
  for (const t of K.texts) {
    const n = await De.app.renderer.extract.base64(t)
    e.push({ dataurl: n, pos: { x: t.x, y: t.y } })
  }
  return e
}
async function qt(e, t) {
  const n = await jt()
  return await de
    .videoToGIF(
      n.videoclip.start,
      n.videoclip.end,
      n.videocrop.w,
      n.videocrop.h,
      n.videocrop.x,
      n.videocrop.y,
    )
    .then((o) =>
      n.texts.length == 0
        ? o
        : de.watermarkInGIF(
            o,
            n.texts[0].dataurl,
            n.texts[0].pos.x,
            n.texts[0].pos.y,
          ),
    )
    .then((o) => de.resizeGIF(o, e, t))
    .then((o) => de.readGIF(o))
}
const Qt = { class: 'row' },
  Zt = ['href'],
  Dt = q({
    __name: 'index',
    setup(e) {
      const t = N(!1)
      let n = N(0),
        a = N(0)
      const o = N(''),
        u = N()
      et(() => {
        o.value && URL.revokeObjectURL(o.value)
      })
      function d() {
        if (!K.isLoaded) {
          Be({ message: '工作区没有视频资源', type: 'warning' })
          return
        }
        ;(n.value = K.videoTexture.frame.width),
          (a.value = K.videoTexture.frame.height),
          (t.value = !0)
      }
      async function y(g, i) {
        o.value && URL.revokeObjectURL(o.value)
        const m = tt.service({
          lock: !0,
          text: '🏃‍♀️Loading...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
          o.value = await qt(g, i)
        } catch (s) {
          Be({ message: 'ffmpeg错误了', type: 'error' }), console.log(s)
          return
        } finally {
          m.close()
        }
        setTimeout(() => {
          u.value.click()
        }, 0)
      }
      return (g, i) => {
        const m = Fe
        return (
          I(),
          U(
            re,
            null,
            [
              x('div', Qt, [
                J(
                  m,
                  { class: 'btn', onClick: d },
                  { default: j(() => [we('导出GIF')]), _: 1 },
                ),
                x(
                  'a',
                  {
                    ref_key: 'gifDownloadRef',
                    ref: u,
                    href: l(o),
                    download: 'name.gif',
                    style: { display: 'none' },
                  },
                  null,
                  8,
                  Zt,
                ),
              ]),
              J(
                Ot,
                {
                  'is-dialog-show': l(t),
                  'onUpdate:isDialogShow':
                    i[0] || (i[0] = (s) => (Ne(t) ? (t.value = s) : null)),
                  'original-w': l(n),
                  'original-h': l(a),
                  onConfirm: y,
                },
                null,
                8,
                ['is-dialog-show', 'original-w', 'original-h'],
              ),
            ],
            64,
          )
        )
      }
    },
  })
const ol = Me(Dt, [['__scopeId', 'data-v-7403fbaa']])
export { ol as default }
