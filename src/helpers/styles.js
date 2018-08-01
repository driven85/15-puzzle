export const getStyle = (styles, layout, element) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg']
  let style = {}

  for (const bp of breakpoints) {
    style = styles[bp] && styles[bp][element] || style // TODO: .?
    if (bp === layout) break
  }

  return style
}

// TODO: implement merging

