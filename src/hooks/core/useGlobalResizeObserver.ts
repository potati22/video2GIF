import { useId } from './useId'
import { useThrottle } from './useThrottle'

const namespace = 'gro-key'
const elementCbs = {}

const observer: ResizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const targetKey = entry.target.getAttribute(namespace)
    elementCbs[targetKey](entry)
  }
})

export function useGlobalResizeObserver(
  elRef: Ref<Element>,
  options: ResizeObserverOptions,
  callback: (entry: ResizeObserverEntry) => void,
  isThrottle: number = 0,
) {
  let element: Element

  onMounted(() => {
    element = unref(elRef)
    const elementKey = useId(namespace)
    element.setAttribute(namespace, elementKey)

    if (isThrottle !== 0) callback = useThrottle(callback, isThrottle)
    elementCbs[elementKey] = callback

    observer.observe(element, options)
  })

  onUnmounted(() => {
    observer.unobserve(element)
  })
}
