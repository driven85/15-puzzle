// Storage
import { SettingsStorage } from 'app/Storage'

// Themes
import themes from 'css/themes.json'

// Helpers
import { applyTheme } from 'helpers/theme'
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
  const { settings: { rememberSettings, sound } } = getState()

  sound && playSound(clickSound)
  dispatch(switchLocale(locale))
  rememberSettings && SettingsStorage.setSetting('locale', locale)
}

export const switchGameTheme = theme => (dispatch, getState) => {
  const { settings: { rememberSettings, sound } } = getState()

  sound && playSound(clickSound)
  dispatch(switchTheme(theme))
  applyTheme(themes[theme])
  rememberSettings && SettingsStorage.setSetting('theme', theme)
}

export const toggleGameRememberSettings = remember => (dispatch, getState) => {
  const { settings: { sound } } = getState()

  sound && playSound(clickSound)
  dispatch(toggleRememberSettings(remember))
  remember && SettingsStorage.setSetting('rememberSettings', remember)
  !remember && SettingsStorage.resetSettings()
}

export const toggleGameSound = soundValue => (dispatch, getState) => {
  const { settings: { rememberSettings, sound } } = getState()

  sound && playSound(clickSound)
  dispatch(toggleSound(soundValue))
  rememberSettings && SettingsStorage.setSetting('sound', soundValue)
}

