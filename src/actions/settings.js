import themes from 'css/themes.json'

export const SWITCH_LOCALE = 'SWITCH_LOCALE'
export const SWITCH_THEME = 'SWITCH_THEME'
export const TOGGLE_SOUND = 'TOGGLE_SOUND'


export const switchLocale = locale => ({
  type: SWITCH_LOCALE,
  payload: { locale }
})

const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: { theme }
})

export const toggleSound = sound => ({
  type: TOGGLE_SOUND,
  payload: { sound }
})

export const switchGameTheme = theme => dispatch => {
  dispatch(switchTheme(theme))

  Object.entries(themes[theme]).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value)
  })
}

