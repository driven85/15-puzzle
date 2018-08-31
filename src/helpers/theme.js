export const applyTheme = theme => {
  Object.entries(theme).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value)
  })
}

