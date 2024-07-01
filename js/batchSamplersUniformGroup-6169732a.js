import { M as e } from './index-1a4f7b41.js'
import { U as o } from './colorToUniform-64c7363a.js'
const t = new Int32Array(e)
for (let r = 0; r < e; r++) t[r] = r
const i = new o(
  { uTextures: { value: t, type: 'i32', size: e } },
  { isStatic: !0 },
)
export { i as b }
