export const getStyle = (styles, layout, element) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg']
  let style = {}

  for (const bp of breakpoints) {
    const bpStyle = styles[bp] && styles[bp][element] || style // TODO: .?
    style = { ...style, ...bpStyle }

    if (bp === layout) break
  }

  return style
}

