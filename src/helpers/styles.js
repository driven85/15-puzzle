export const deepMerge = (a, b) => {
  const result = { ...a }

  Object.entries(b).forEach(([key, value]) => {
    result[key] = value instanceof Object
      ? deepMerge(a[key], value)
      : value
  })

  return result
}

export const getStyle = (styles, layout, element) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg']
  let style = {}

  for (const bp of breakpoints) {
    if (element) {
      const bpStyle = styles[bp] && styles[bp][element] || style // TODO: .?
      style = { ...style, ...bpStyle }
    } else {
      if (styles[bp])
        style = deepMerge(style, styles[bp])
    }

    if (bp === layout) break
  }

  return style
}

