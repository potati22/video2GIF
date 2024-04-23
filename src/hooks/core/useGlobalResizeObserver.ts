import { useId } from './useId'

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
) {
  let element: Element

  onMounted(() => {
    element = unref(elRef)
    const elementKey = useId(namespace)
    element.setAttribute(namespace, elementKey)
    elementCbs[elementKey] = callback
    observer.observe(element, options)
  })

  onUnmounted(() => {
    observer.unobserve(element)
  })
}
