type FnType = (...args: unknown[]) => void

export function useThrottle(fn: FnType, ms: number = 500): FnType {
  let timer: NodeJS.Timeout | null = null

  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, ms)
  }
}
