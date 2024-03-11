const a = '0.12.1',
  f = `https://unpkg.com/@ffmpeg/core@${a}/dist/umd/ffmpeg-core.js`
var o
;(function (r) {
  ;(r.LOAD = 'LOAD'),
    (r.EXEC = 'EXEC'),
    (r.WRITE_FILE = 'WRITE_FILE'),
    (r.READ_FILE = 'READ_FILE'),
    (r.DELETE_FILE = 'DELETE_FILE'),
    (r.RENAME = 'RENAME'),
    (r.CREATE_DIR = 'CREATE_DIR'),
    (r.LIST_DIR = 'LIST_DIR'),
    (r.DELETE_DIR = 'DELETE_DIR'),
    (r.ERROR = 'ERROR'),
    (r.DOWNLOAD = 'DOWNLOAD'),
    (r.PROGRESS = 'PROGRESS'),
    (r.LOG = 'LOG'),
    (r.MOUNT = 'MOUNT'),
    (r.UNMOUNT = 'UNMOUNT')
})(o || (o = {}))
const u = new Error('unknown message type'),
  l = new Error('ffmpeg is not loaded, call `await ffmpeg.load()` first'),
  O = new Error('failed to import ffmpeg-core.js')
let s
const D = async ({ coreURL: r = f, wasmURL: n, workerURL: e }) => {
    const E = !s,
      t = r,
      c = n || r.replace(/.js$/g, '.wasm'),
      i = e || r.replace(/.js$/g, '.worker.js')
    try {
      importScripts(t)
    } catch {
      if (
        ((self.createFFmpegCore = (await import(t)).default),
        !self.createFFmpegCore)
      )
        throw O
    }
    return (
      (s = await self.createFFmpegCore({
        mainScriptUrlOrBlob: `${t}#${btoa(
          JSON.stringify({ wasmURL: c, workerURL: i }),
        )}`,
      })),
      s.setLogger((R) => self.postMessage({ type: o.LOG, data: R })),
      s.setProgress((R) => self.postMessage({ type: o.PROGRESS, data: R })),
      E
    )
  },
  L = ({ args: r, timeout: n = -1 }) => {
    s.setTimeout(n), s.exec(...r)
    const e = s.ret
    return s.reset(), e
  },
  m = ({ path: r, data: n }) => (s.FS.writeFile(r, n), !0),
  S = ({ path: r, encoding: n }) => s.FS.readFile(r, { encoding: n }),
  I = ({ path: r }) => (s.FS.unlink(r), !0),
  N = ({ oldPath: r, newPath: n }) => (s.FS.rename(r, n), !0),
  A = ({ path: r }) => (s.FS.mkdir(r), !0),
  w = ({ path: r }) => {
    const n = s.FS.readdir(r),
      e = []
    for (const E of n) {
      const t = s.FS.stat(`${r}/${E}`),
        c = s.FS.isDir(t.mode)
      e.push({ name: E, isDir: c })
    }
    return e
  },
  k = ({ path: r }) => (s.FS.rmdir(r), !0),
  U = ({ fsType: r, options: n, mountPoint: e }) => {
    let E = r,
      t = s.FS.filesystems[E]
    return t ? (s.FS.mount(t, n, e), !0) : !1
  },
  b = ({ mountPoint: r }) => (s.FS.unmount(r), !0)
self.onmessage = async ({ data: { id: r, type: n, data: e } }) => {
  const E = []
  let t
  try {
    if (n !== o.LOAD && !s) throw l
    switch (n) {
      case o.LOAD:
        t = await D(e)
        break
      case o.EXEC:
        t = L(e)
        break
      case o.WRITE_FILE:
        t = m(e)
        break
      case o.READ_FILE:
        t = S(e)
        break
      case o.DELETE_FILE:
        t = I(e)
        break
      case o.RENAME:
        t = N(e)
        break
      case o.CREATE_DIR:
        t = A(e)
        break
      case o.LIST_DIR:
        t = w(e)
        break
      case o.DELETE_DIR:
        t = k(e)
        break
      case o.MOUNT:
        t = U(e)
        break
      case o.UNMOUNT:
        t = b(e)
        break
      default:
        throw u
    }
  } catch (c) {
    self.postMessage({ id: r, type: o.ERROR, data: c.toString() })
    return
  }
  t instanceof Uint8Array && E.push(t.buffer),
    self.postMessage({ id: r, type: n, data: t }, E)
}
