import { SettingsStorage } from 'app/Storage'


export const defaultSettings = {
  locale: 'en',
  rememberSettings: false,
  sound: false,
  theme: 'pink-grey'
}

const loadSettings = () => ({
  ...defaultSettings,
  ...SettingsStorage.getAllSettings(defaultSettings)
})

export default loadSettings

