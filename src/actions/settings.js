// Themes
import themes from 'css/themes.json'

// Helpers
import { playSound } from 'helpers/sound'

// Sounds
import { clickSound } from 'sounds'


export const SWITCH_LOCALE = 'SWITCH_LOCALE'
export const SWITCH_THEME = 'SWITCH_THEME'
export const TOGGLE_REMEMBER_SETTINGS = 'TOGGLE_REMEMBER_SETTINGS'
export const TOGGLE_SOUND = 'TOGGLE_SOUND'


const switchLocale = locale => ({
  type: SWITCH_LOCALE,
  payload: { locale }
})

const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: { theme }
})

const toggleRememberSettings = remember => ({
  type: TOGGLE_REMEMBER_SETTINGS,
  payload: { remember }
})

const toggleSound = sound => ({
  type: TOGGLE_SOUND,
  payload: { sound }
})

export const switchGameLocale = locale => (dispatch, getState) => {
  const { settings: { sound } } = getState()

  sound && playSound(clickSound)
  dispatch(switchLocale(locale))
}

export const switchGameTheme = theme => (dispatch, getState) => {
  const { settings: { sound } } = getState()

  sound && playSound(clickSound)
  dispatch(switchTheme(theme))

  Object.entries(themes[theme]).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value)
  })
}

export const toggleGameRememberSettings = remember => (dispatch, getState) => {
  const { settings: { sound } } = getState()

  sound && playSound(clickSound)
  dispatch(toggleRememberSettings(remember))
}

export const toggleGameSound = soundValue => (dispatch, getState) => {
  const { settings: { sound } } = getState()

  sound && playSound(clickSound)
  dispatch(toggleSound(soundValue))
}

