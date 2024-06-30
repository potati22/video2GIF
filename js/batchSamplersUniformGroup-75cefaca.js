import { M as e } from './index-f246c644.js'
import { U as o } from './colorToUniform-74a8c3f8.js'
const t = new Int32Array(e)
for (let r = 0; r < e; r++) t[r] = r
const i = new o(
  { uTextures: { value: t, type: 'i32', size: e } },
  { isStatic: !0 },
)
export { i as b }
