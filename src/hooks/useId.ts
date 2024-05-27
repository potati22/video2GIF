const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export function useId(namespace: string) {
  return `${namespace}-${
    defaultIdInjection.prefix
  }-${defaultIdInjection.current++}`
}
