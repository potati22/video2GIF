import { M as e } from './index-2989de58.js'
import { U as o } from './colorToUniform-f839a808.js'
const t = new Int32Array(e)
for (let r = 0; r < e; r++) t[r] = r
const i = new o(
  { uTextures: { value: t, type: 'i32', size: e } },
  { isStatic: !0 },
)
export { i as b }
