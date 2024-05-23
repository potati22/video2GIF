import {
  a4 as Ve,
  a5 as ne,
  at as xe,
  au as be,
  av as Me,
  r as M,
  j as Fe,
  aw as Re,
  I as de,
  h as f,
  ax as Ue,
  z as Xe,
  i as ue,
  C as $e,
  d as le,
  X as we,
  ay as Te,
  az as ye,
  o as P,
  c as X,
  a as G,
  w as H,
  l as k,
  aa as oe,
  p as l,
  a9 as Y,
  m as ee,
  G as Ne,
  J as Ee,
  a6 as Ye,
  a8 as Ae,
  H as Ke,
  ab as ce,
  ae as ie,
  F as se,
  aA as me,
  as as We,
  aB as Oe,
  aC as je,
  v as _e,
  aD as ve,
  b as Be,
  f as Ge,
  g as fe,
  E as He,
  s as Je,
  t as qe,
  _ as Qe,
} from './index-2989de58.js'
import { E as Ze } from './el-overlay-916ac1d4.js'
import {
  E as Pe,
  u as De,
  d as pe,
  a as el,
  b as ll,
  c as tl,
  e as al,
} from './el-input-bf79855d.js'
/* empty css               */ import {
  U as re,
  I as he,
  C as Ie,
  t as nl,
  d as Ce,
} from './focus-trap-3713deb7.js'
const ze = Symbol('sliderContextKey'),
  ol = Ve({
    modelValue: { type: ne([Number, Array]), default: 0 },
    id: { type: String, default: void 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    showInput: Boolean,
    showInputControls: { type: Boolean, default: !0 },
    size: xe,
    inputSize: xe,
    showStops: Boolean,
    showTooltip: { type: Boolean, default: !0 },
    formatTooltip: { type: ne(Function), default: void 0 },
    disabled: Boolean,
    range: Boolean,
    vertical: Boolean,
    height: String,
    debounce: { type: Number, default: 300 },
    label: { type: String, default: void 0 },
    rangeStartLabel: { type: String, default: void 0 },
    rangeEndLabel: { type: String, default: void 0 },
    formatValueText: { type: ne(Function), default: void 0 },
    tooltipClass: { type: String, default: void 0 },
    placement: { type: String, values: Pe, default: 'top' },
    marks: { type: ne(Object) },
    validateEvent: { type: Boolean, default: !0 },
  }),
  ge = (e) => be(e) || (Me(e) && e.every(be)),
  sl = { [re]: ge, [he]: ge, [Ie]: ge },
  rl = (e, t, s) => {
    const a = M()
    return (
      Fe(async () => {
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
          Re(window, 'resize', s),
          await de(),
          s()
      }),
      { sliderWrapper: a }
    )
  },
  il = (e) =>
    f(() =>
      e.marks
        ? Object.keys(e.marks)
            .map(Number.parseFloat)
            .sort((s, a) => s - a)
            .filter((s) => s <= e.max && s >= e.min)
            .map((s) => ({
              point: s,
              position: ((s - e.min) * 100) / (e.max - e.min),
              mark: e.marks[s],
            }))
        : [],
    ),
  ul = (e, t, s) => {
    const { form: a, formItem: i } = De(),
      c = Ue(),
      u = M(),
      g = M(),
      b = { firstButton: u, secondButton: g },
      r = f(() => e.disabled || (a == null ? void 0 : a.disabled) || !1),
      v = f(() => Math.min(t.firstValue, t.secondValue)),
      n = f(() => Math.max(t.firstValue, t.secondValue)),
      E = f(() =>
        e.range
          ? `${(100 * (n.value - v.value)) / (e.max - e.min)}%`
          : `${(100 * (t.firstValue - e.min)) / (e.max - e.min)}%`,
      ),
      B = f(() =>
        e.range ? `${(100 * (v.value - e.min)) / (e.max - e.min)}%` : '0%',
      ),
      p = f(() => (e.vertical ? { height: e.height } : {})),
      S = f(() =>
        e.vertical
          ? { height: E.value, bottom: B.value }
          : { width: E.value, left: B.value },
      ),
      _ = () => {
        c.value &&
          (t.sliderSize = c.value[`client${e.vertical ? 'Height' : 'Width'}`])
      },
      I = (m) => {
        const h = e.min + (m * (e.max - e.min)) / 100
        if (!e.range) return u
        let T
        return (
          Math.abs(v.value - h) < Math.abs(n.value - h)
            ? (T =
                t.firstValue < t.secondValue ? 'firstButton' : 'secondButton')
            : (T =
                t.firstValue > t.secondValue ? 'firstButton' : 'secondButton'),
          b[T]
        )
      },
      x = (m) => {
        const h = I(m)
        return h.value.setPosition(m), h
      },
      C = (m) => {
        ;(t.firstValue = m), y(e.range ? [v.value, n.value] : m)
      },
      L = (m) => {
        ;(t.secondValue = m), e.range && y([v.value, n.value])
      },
      y = (m) => {
        s(re, m), s(he, m)
      },
      w = async () => {
        await de(), s(Ie, e.range ? [v.value, n.value] : e.modelValue)
      },
      J = (m) => {
        var h, T, Q, Z, D, j
        if (r.value || t.dragging) return
        _()
        let $ = 0
        if (e.vertical) {
          const z =
            (Q =
              (T = (h = m.touches) == null ? void 0 : h.item(0)) == null
                ? void 0
                : T.clientY) != null
              ? Q
              : m.clientY
          $ =
            ((c.value.getBoundingClientRect().bottom - z) / t.sliderSize) * 100
        } else {
          const z =
              (j =
                (D = (Z = m.touches) == null ? void 0 : Z.item(0)) == null
                  ? void 0
                  : D.clientX) != null
                ? j
                : m.clientX,
            F = c.value.getBoundingClientRect().left
          $ = ((z - F) / t.sliderSize) * 100
        }
        if (!($ < 0 || $ > 100)) return x($)
      }
    return {
      elFormItem: i,
      slider: c,
      firstButton: u,
      secondButton: g,
      sliderDisabled: r,
      minValue: v,
      maxValue: n,
      runwayStyle: p,
      barStyle: S,
      resetSize: _,
      setPosition: x,
      emitChange: w,
      onSliderWrapperPrevent: (m) => {
        var h, T
        ;(((h = b.firstButton.value) != null && h.dragging) ||
          ((T = b.secondButton.value) != null && T.dragging)) &&
          m.preventDefault()
      },
      onSliderClick: (m) => {
        J(m) && w()
      },
      onSliderDown: async (m) => {
        const h = J(m)
        h && (await de(), h.value.onButtonDown(m))
      },
      setFirstValue: C,
      setSecondValue: L,
    }
  },
  {
    left: dl,
    down: cl,
    right: ml,
    up: vl,
    home: fl,
    end: gl,
    pageUp: bl,
    pageDown: yl,
  } = $e,
  Vl = (e, t, s) => {
    const a = M(),
      i = M(!1),
      c = f(() => t.value instanceof Function),
      u = f(() => (c.value && t.value(e.modelValue)) || e.modelValue),
      g = pe(() => {
        s.value && (i.value = !0)
      }, 50),
      b = pe(() => {
        s.value && (i.value = !1)
      }, 50)
    return {
      tooltip: a,
      tooltipVisible: i,
      formatValue: u,
      displayTooltip: g,
      hideTooltip: b,
    }
  },
  wl = (e, t, s) => {
    const {
        disabled: a,
        min: i,
        max: c,
        step: u,
        showTooltip: g,
        precision: b,
        sliderSize: r,
        formatTooltip: v,
        emitChange: n,
        resetSize: E,
        updateDragging: B,
      } = Xe(ze),
      {
        tooltip: p,
        tooltipVisible: S,
        formatValue: _,
        displayTooltip: I,
        hideTooltip: x,
      } = Vl(e, v, g),
      C = M(),
      L = f(() => `${((e.modelValue - i.value) / (c.value - i.value)) * 100}%`),
      y = f(() => (e.vertical ? { bottom: L.value } : { left: L.value })),
      w = () => {
        ;(t.hovering = !0), I()
      },
      J = () => {
        ;(t.hovering = !1), t.dragging || x()
      },
      q = (o) => {
        a.value ||
          (o.preventDefault(),
          $(o),
          window.addEventListener('mousemove', z),
          window.addEventListener('touchmove', z),
          window.addEventListener('mouseup', F),
          window.addEventListener('touchend', F),
          window.addEventListener('contextmenu', F),
          C.value.focus())
      },
      A = (o) => {
        a.value ||
          ((t.newPosition =
            Number.parseFloat(L.value) + (o / (c.value - i.value)) * 100),
          K(t.newPosition),
          n())
      },
      O = () => {
        A(-u.value)
      },
      m = () => {
        A(u.value)
      },
      h = () => {
        A(-u.value * 4)
      },
      T = () => {
        A(u.value * 4)
      },
      Q = () => {
        a.value || (K(0), n())
      },
      Z = () => {
        a.value || (K(100), n())
      },
      D = (o) => {
        let V = !0
        ;[dl, cl].includes(o.key)
          ? O()
          : [ml, vl].includes(o.key)
          ? m()
          : o.key === fl
          ? Q()
          : o.key === gl
          ? Z()
          : o.key === yl
          ? h()
          : o.key === bl
          ? T()
          : (V = !1),
          V && o.preventDefault()
      },
      j = (o) => {
        let V, R
        return (
          o.type.startsWith('touch')
            ? ((R = o.touches[0].clientY), (V = o.touches[0].clientX))
            : ((R = o.clientY), (V = o.clientX)),
          { clientX: V, clientY: R }
        )
      },
      $ = (o) => {
        ;(t.dragging = !0), (t.isClick = !0)
        const { clientX: V, clientY: R } = j(o)
        e.vertical ? (t.startY = R) : (t.startX = V),
          (t.startPosition = Number.parseFloat(L.value)),
          (t.newPosition = t.startPosition)
      },
      z = (o) => {
        if (t.dragging) {
          ;(t.isClick = !1), I(), E()
          let V
          const { clientX: R, clientY: W } = j(o)
          e.vertical
            ? ((t.currentY = W),
              (V = ((t.startY - t.currentY) / r.value) * 100))
            : ((t.currentX = R),
              (V = ((t.currentX - t.startX) / r.value) * 100)),
            (t.newPosition = t.startPosition + V),
            K(t.newPosition)
        }
      },
      F = () => {
        t.dragging &&
          (setTimeout(() => {
            ;(t.dragging = !1),
              t.hovering || x(),
              t.isClick || K(t.newPosition),
              n()
          }, 0),
          window.removeEventListener('mousemove', z),
          window.removeEventListener('touchmove', z),
          window.removeEventListener('mouseup', F),
          window.removeEventListener('touchend', F),
          window.removeEventListener('contextmenu', F))
      },
      K = async (o) => {
        if (o === null || Number.isNaN(+o)) return
        o < 0 ? (o = 0) : o > 100 && (o = 100)
        const V = 100 / ((c.value - i.value) / u.value)
        let W = Math.round(o / V) * V * (c.value - i.value) * 0.01 + i.value
        ;(W = Number.parseFloat(W.toFixed(b.value))),
          W !== e.modelValue && s(re, W),
          !t.dragging &&
            e.modelValue !== t.oldValue &&
            (t.oldValue = e.modelValue),
          await de(),
          t.dragging && I(),
          p.value.updatePopper()
      }
    return (
      ue(
        () => t.dragging,
        (o) => {
          B(o)
        },
      ),
      {
        disabled: a,
        button: C,
        tooltip: p,
        tooltipVisible: S,
        showTooltip: g,
        wrapperStyle: y,
        formatValue: _,
        handleMouseEnter: w,
        handleMouseLeave: J,
        onButtonDown: q,
        onKeyDown: D,
        setPosition: K,
      }
    )
  },
  hl = (e, t, s, a) => ({
    stops: f(() => {
      if (!e.showStops || e.min > e.max) return []
      if (e.step === 0) return []
      const u = (e.max - e.min) / e.step,
        g = (100 * e.step) / (e.max - e.min),
        b = Array.from({ length: u - 1 }).map((r, v) => (v + 1) * g)
      return e.range
        ? b.filter(
            (r) =>
              r < (100 * (s.value - e.min)) / (e.max - e.min) ||
              r > (100 * (a.value - e.min)) / (e.max - e.min),
          )
        : b.filter((r) => r > (100 * (t.firstValue - e.min)) / (e.max - e.min))
    }),
    getStopStyle: (u) => (e.vertical ? { bottom: `${u}%` } : { left: `${u}%` }),
  }),
  Sl = (e, t, s, a, i, c) => {
    const u = (r) => {
        i(re, r), i(he, r)
      },
      g = () =>
        e.range
          ? ![s.value, a.value].every((r, v) => r === t.oldValue[v])
          : e.modelValue !== t.oldValue,
      b = () => {
        var r, v
        e.min > e.max && nl('Slider', 'min should not be greater than max.')
        const n = e.modelValue
        e.range && Array.isArray(n)
          ? n[1] < e.min
            ? u([e.min, e.min])
            : n[0] > e.max
            ? u([e.max, e.max])
            : n[0] < e.min
            ? u([e.min, n[1]])
            : n[1] > e.max
            ? u([n[0], e.max])
            : ((t.firstValue = n[0]),
              (t.secondValue = n[1]),
              g() &&
                (e.validateEvent &&
                  ((r = c == null ? void 0 : c.validate) == null ||
                    r.call(c, 'change').catch((E) => Ce())),
                (t.oldValue = n.slice())))
          : !e.range &&
            typeof n == 'number' &&
            !Number.isNaN(n) &&
            (n < e.min
              ? u(e.min)
              : n > e.max
              ? u(e.max)
              : ((t.firstValue = n),
                g() &&
                  (e.validateEvent &&
                    ((v = c == null ? void 0 : c.validate) == null ||
                      v.call(c, 'change').catch((E) => Ce())),
                  (t.oldValue = n))))
      }
    b(),
      ue(
        () => t.dragging,
        (r) => {
          r || b()
        },
      ),
      ue(
        () => e.modelValue,
        (r, v) => {
          t.dragging ||
            (Array.isArray(r) &&
              Array.isArray(v) &&
              r.every((n, E) => n === v[E]) &&
              t.firstValue === r[0] &&
              t.secondValue === r[1]) ||
            b()
        },
        { deep: !0 },
      ),
      ue(
        () => [e.min, e.max],
        () => {
          b()
        },
      )
  },
  kl = Ve({
    modelValue: { type: Number, default: 0 },
    vertical: Boolean,
    tooltipClass: String,
    placement: { type: String, values: Pe, default: 'top' },
  }),
  xl = { [re]: (e) => be(e) },
  El = ['tabindex'],
  _l = le({ name: 'ElSliderButton' }),
  Bl = le({
    ..._l,
    props: kl,
    emits: xl,
    setup(e, { expose: t, emit: s }) {
      const a = e,
        i = we('slider'),
        c = Te({
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
          disabled: u,
          button: g,
          tooltip: b,
          showTooltip: r,
          tooltipVisible: v,
          wrapperStyle: n,
          formatValue: E,
          handleMouseEnter: B,
          handleMouseLeave: p,
          onButtonDown: S,
          onKeyDown: _,
          setPosition: I,
        } = wl(a, c, s),
        { hovering: x, dragging: C } = ye(c)
      return (
        t({
          onButtonDown: S,
          onKeyDown: _,
          setPosition: I,
          hovering: x,
          dragging: C,
        }),
        (L, y) => (
          P(),
          X(
            'div',
            {
              ref_key: 'button',
              ref: g,
              class: Y([
                l(i).e('button-wrapper'),
                { hover: l(x), dragging: l(C) },
              ]),
              style: ee(l(n)),
              tabindex: l(u) ? -1 : 0,
              onMouseenter: y[0] || (y[0] = (...w) => l(B) && l(B)(...w)),
              onMouseleave: y[1] || (y[1] = (...w) => l(p) && l(p)(...w)),
              onMousedown: y[2] || (y[2] = (...w) => l(S) && l(S)(...w)),
              onTouchstart: y[3] || (y[3] = (...w) => l(S) && l(S)(...w)),
              onFocus: y[4] || (y[4] = (...w) => l(B) && l(B)(...w)),
              onBlur: y[5] || (y[5] = (...w) => l(p) && l(p)(...w)),
              onKeydown: y[6] || (y[6] = (...w) => l(_) && l(_)(...w)),
            },
            [
              G(
                l(el),
                {
                  ref_key: 'tooltip',
                  ref: b,
                  visible: l(v),
                  placement: L.placement,
                  'fallback-placements': ['top', 'bottom', 'right', 'left'],
                  'stop-popper-mouse-event': !1,
                  'popper-class': L.tooltipClass,
                  disabled: !l(r),
                  persistent: '',
                },
                {
                  content: H(() => [k('span', null, oe(l(E)), 1)]),
                  default: H(() => [
                    k(
                      'div',
                      {
                        class: Y([
                          l(i).e('button'),
                          { hover: l(x), dragging: l(C) },
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
            El,
          )
        )
      )
    },
  })
var Le = Ne(Bl, [['__file', 'button.vue']])
const pl = Ve({ mark: { type: ne([String, Object]), default: void 0 } })
var Cl = le({
  name: 'ElSliderMarker',
  props: pl,
  setup(e) {
    const t = we('slider'),
      s = f(() => (Ee(e.mark) ? e.mark : e.mark.label)),
      a = f(() => (Ee(e.mark) ? void 0 : e.mark.style))
    return () =>
      Ye('div', { class: t.e('marks-text'), style: a.value }, s.value)
  },
})
const Ll = ['id', 'role', 'aria-label', 'aria-labelledby'],
  Tl = { key: 1 },
  Nl = le({ name: 'ElSlider' }),
  Pl = le({
    ...Nl,
    props: ol,
    emits: sl,
    setup(e, { expose: t, emit: s }) {
      const a = e,
        i = we('slider'),
        { t: c } = Ae(),
        u = Te({
          firstValue: 0,
          secondValue: 0,
          oldValue: 0,
          dragging: !1,
          sliderSize: 1,
        }),
        {
          elFormItem: g,
          slider: b,
          firstButton: r,
          secondButton: v,
          sliderDisabled: n,
          minValue: E,
          maxValue: B,
          runwayStyle: p,
          barStyle: S,
          resetSize: _,
          emitChange: I,
          onSliderWrapperPrevent: x,
          onSliderClick: C,
          onSliderDown: L,
          setFirstValue: y,
          setSecondValue: w,
        } = ul(a, u, s),
        { stops: J, getStopStyle: q } = hl(a, u, E, B),
        { inputId: A, isLabeledByFormItem: O } = ll(a, { formItemContext: g }),
        m = tl(),
        h = f(() => a.inputSize || m.value),
        T = f(
          () =>
            a.label || c('el.slider.defaultLabel', { min: a.min, max: a.max }),
        ),
        Q = f(() =>
          a.range
            ? a.rangeStartLabel || c('el.slider.defaultRangeStartLabel')
            : T.value,
        ),
        Z = f(() =>
          a.formatValueText ? a.formatValueText(o.value) : `${o.value}`,
        ),
        D = f(() => a.rangeEndLabel || c('el.slider.defaultRangeEndLabel')),
        j = f(() =>
          a.formatValueText ? a.formatValueText(V.value) : `${V.value}`,
        ),
        $ = f(() => [
          i.b(),
          i.m(m.value),
          i.is('vertical', a.vertical),
          { [i.m('with-input')]: a.showInput },
        ]),
        z = il(a)
      Sl(a, u, E, B, s, g)
      const F = f(() => {
          const d = [a.min, a.max, a.step].map((U) => {
            const te = `${U}`.split('.')[1]
            return te ? te.length : 0
          })
          return Math.max.apply(null, d)
        }),
        { sliderWrapper: K } = rl(a, u, _),
        { firstValue: o, secondValue: V, sliderSize: R } = ye(u),
        W = (d) => {
          u.dragging = d
        }
      return (
        Ke(ze, {
          ...ye(a),
          sliderSize: R,
          disabled: n,
          precision: F,
          emitChange: I,
          resetSize: _,
          updateDragging: W,
        }),
        t({ onSliderClick: C }),
        (d, U) => {
          var te, ke
          return (
            P(),
            X(
              'div',
              {
                id: d.range ? l(A) : void 0,
                ref_key: 'sliderWrapper',
                ref: K,
                class: Y(l($)),
                role: d.range ? 'group' : void 0,
                'aria-label': d.range && !l(O) ? l(T) : void 0,
                'aria-labelledby':
                  d.range && l(O)
                    ? (te = l(g)) == null
                      ? void 0
                      : te.labelId
                    : void 0,
                onTouchstart: U[2] || (U[2] = (...N) => l(x) && l(x)(...N)),
                onTouchmove: U[3] || (U[3] = (...N) => l(x) && l(x)(...N)),
              },
              [
                k(
                  'div',
                  {
                    ref_key: 'slider',
                    ref: b,
                    class: Y([
                      l(i).e('runway'),
                      { 'show-input': d.showInput && !d.range },
                      l(i).is('disabled', l(n)),
                    ]),
                    style: ee(l(p)),
                    onMousedown: U[0] || (U[0] = (...N) => l(L) && l(L)(...N)),
                    onTouchstart: U[1] || (U[1] = (...N) => l(L) && l(L)(...N)),
                  },
                  [
                    k(
                      'div',
                      { class: Y(l(i).e('bar')), style: ee(l(S)) },
                      null,
                      6,
                    ),
                    G(
                      Le,
                      {
                        id: d.range ? void 0 : l(A),
                        ref_key: 'firstButton',
                        ref: r,
                        'model-value': l(o),
                        vertical: d.vertical,
                        'tooltip-class': d.tooltipClass,
                        placement: d.placement,
                        role: 'slider',
                        'aria-label': d.range || !l(O) ? l(Q) : void 0,
                        'aria-labelledby':
                          !d.range && l(O)
                            ? (ke = l(g)) == null
                              ? void 0
                              : ke.labelId
                            : void 0,
                        'aria-valuemin': d.min,
                        'aria-valuemax': d.range ? l(V) : d.max,
                        'aria-valuenow': l(o),
                        'aria-valuetext': l(Z),
                        'aria-orientation': d.vertical
                          ? 'vertical'
                          : 'horizontal',
                        'aria-disabled': l(n),
                        'onUpdate:modelValue': l(y),
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
                    d.range
                      ? (P(),
                        ce(
                          Le,
                          {
                            key: 0,
                            ref_key: 'secondButton',
                            ref: v,
                            'model-value': l(V),
                            vertical: d.vertical,
                            'tooltip-class': d.tooltipClass,
                            placement: d.placement,
                            role: 'slider',
                            'aria-label': l(D),
                            'aria-valuemin': l(o),
                            'aria-valuemax': d.max,
                            'aria-valuenow': l(V),
                            'aria-valuetext': l(j),
                            'aria-orientation': d.vertical
                              ? 'vertical'
                              : 'horizontal',
                            'aria-disabled': l(n),
                            'onUpdate:modelValue': l(w),
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
                      : ie('v-if', !0),
                    d.showStops
                      ? (P(),
                        X('div', Tl, [
                          (P(!0),
                          X(
                            se,
                            null,
                            me(
                              l(J),
                              (N, ae) => (
                                P(),
                                X(
                                  'div',
                                  {
                                    key: ae,
                                    class: Y(l(i).e('stop')),
                                    style: ee(l(q)(N)),
                                  },
                                  null,
                                  6,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : ie('v-if', !0),
                    l(z).length > 0
                      ? (P(),
                        X(
                          se,
                          { key: 2 },
                          [
                            k('div', null, [
                              (P(!0),
                              X(
                                se,
                                null,
                                me(
                                  l(z),
                                  (N, ae) => (
                                    P(),
                                    X(
                                      'div',
                                      {
                                        key: ae,
                                        style: ee(l(q)(N.position)),
                                        class: Y([
                                          l(i).e('stop'),
                                          l(i).e('marks-stop'),
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
                            k(
                              'div',
                              { class: Y(l(i).e('marks')) },
                              [
                                (P(!0),
                                X(
                                  se,
                                  null,
                                  me(
                                    l(z),
                                    (N, ae) => (
                                      P(),
                                      ce(
                                        l(Cl),
                                        {
                                          key: ae,
                                          mark: N.mark,
                                          style: ee(l(q)(N.position)),
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
                      : ie('v-if', !0),
                  ],
                  38,
                ),
                d.showInput && !d.range
                  ? (P(),
                    ce(
                      l(al),
                      {
                        key: 0,
                        ref: 'input',
                        'model-value': l(o),
                        class: Y(l(i).e('input')),
                        step: d.step,
                        disabled: l(n),
                        controls: d.showInputControls,
                        min: d.min,
                        max: d.max,
                        debounce: d.debounce,
                        size: l(h),
                        'onUpdate:modelValue': l(y),
                        onChange: l(I),
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
                  : ie('v-if', !0),
              ],
              42,
              Ll,
            )
          )
        }
      )
    },
  })
var Il = Ne(Pl, [['__file', 'slider.vue']])
const zl = We(Il)
const Se = (e) => (Je('data-v-82ecad0d'), (e = e()), qe(), e),
  Ml = { class: 'row' },
  Fl = ['href'],
  Rl = { class: 'gif-box' },
  Ul = { class: 'gif-row' },
  Xl = Se(() => k('span', { class: 'text' }, '调整尺寸：', -1)),
  $l = { class: 'gif-row' },
  Yl = Se(() => k('span', { class: 'text' }, '原始尺寸：', -1)),
  Al = { class: 'gif-row' },
  Kl = Se(() => k('span', { class: 'text' }, '最终尺寸：', -1)),
  Wl = le({
    __name: 'index',
    setup(e) {
      const { videoToGIF: t } = Oe(),
        s = M(!1),
        a = M(100)
      let i = M(0),
        c = M(0)
      const u = f(() => ((150 / c.value) * 100) << 0),
        g = f(() => (i.value * (a.value / 100)) << 0),
        b = f(() => (c.value * (a.value / 100)) << 0),
        r = M(''),
        v = M()
      je(() => {
        r.value && URL.revokeObjectURL(r.value)
      })
      async function n() {
        if (!ve.isLoaded) {
          Be({ message: '工作区没有视频资源', type: 'warning' })
          return
        }
        ;(i.value = ve.videoTexture.frame.width),
          (c.value = ve.videoTexture.frame.height),
          (s.value = !0)
      }
      async function E() {
        ;(s.value = !1), r.value && URL.revokeObjectURL(r.value)
        const p = He.service({
          lock: !0,
          text: '🏃‍♀️Loading...',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
          r.value = await t(g.value, b.value)
        } catch (S) {
          Be({ message: 'ffmpeg错误了', type: 'error' }), console.log(S)
          return
        } finally {
          p.close()
        }
        setTimeout(() => {
          v.value.click()
        }, 0)
      }
      function B() {
        s.value = !1
      }
      return (p, S) => {
        const _ = Ge,
          I = zl,
          x = Ze
        return (
          P(),
          X(
            se,
            null,
            [
              k('div', Ml, [
                G(
                  _,
                  { class: 'btn', onClick: n },
                  { default: H(() => [fe('导出GIF')]), _: 1 },
                ),
                k(
                  'a',
                  {
                    ref_key: 'gifDownloadRef',
                    ref: v,
                    href: l(r),
                    download: 'name.gif',
                    style: { display: 'none' },
                  },
                  null,
                  8,
                  Fl,
                ),
              ]),
              G(
                x,
                {
                  modelValue: l(s),
                  'onUpdate:modelValue':
                    S[1] || (S[1] = (C) => (_e(s) ? (s.value = C) : null)),
                  width: '500',
                  title: '调整GIF',
                  'close-on-click-modal': !1,
                  'show-close': !1,
                },
                {
                  footer: H(() => [
                    k('div', null, [
                      G(
                        _,
                        {
                          type: 'yellow',
                          style: { 'margin-right': '20px' },
                          onClick: E,
                        },
                        { default: H(() => [fe('确定')]), _: 1 },
                      ),
                      G(
                        _,
                        { onClick: B },
                        { default: H(() => [fe('取消')]), _: 1 },
                      ),
                    ]),
                  ]),
                  default: H(() => [
                    k('div', Rl, [
                      k('div', Ul, [
                        Xl,
                        G(
                          I,
                          {
                            modelValue: l(a),
                            'onUpdate:modelValue':
                              S[0] ||
                              (S[0] = (C) => (_e(a) ? (a.value = C) : null)),
                            step: 10,
                            min: l(u),
                            max: 100,
                          },
                          null,
                          8,
                          ['modelValue', 'min'],
                        ),
                      ]),
                      k('div', $l, [
                        Yl,
                        k('span', null, oe(l(i)) + ' X ' + oe(l(c)), 1),
                      ]),
                      k('div', Al, [
                        Kl,
                        k('span', null, oe(l(g)) + ' X ' + oe(l(b)), 1),
                      ]),
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
const ql = Qe(Wl, [['__scopeId', 'data-v-82ecad0d']])
export { ql as default }
