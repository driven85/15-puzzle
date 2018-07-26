import themes from 'css/themes.json'

export const SWITCH_LOCALE = 'SWITCH_LOCALE'
export const SWITCH_THEME = 'SWITCH_THEME'


export const switchLocale = locale => ({
  type: SWITCH_LOCALE,
  payload: { locale }
})

const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: { theme }
})

export const switchGameTheme = theme => dispatch => {
  dispatch(switchTheme(theme))

  Object.entries(themes[theme]).forEach(color => {
    document.documentElement.style.setProperty(color[0], color[1])
  })
}

