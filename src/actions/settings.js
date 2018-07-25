export const SWITCH_LOCALE = 'SWITCH_LOCALE'
export const SWITCH_THEME = 'SWITCH_THEME'


export const switchLocale = locale => ({
  type: SWITCH_LOCALE,
  payload: { locale }
})

export const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: { theme }
})

