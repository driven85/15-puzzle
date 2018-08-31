const Storage = function() {
  function set(key, value) {
    if (localStorage) {
      localStorage.setItem(key, value)
    }
  }

  function get(key) {
    if (localStorage) {
      return localStorage.getItem(key)
    }
  }

  function remove(key) {
    if (localStorage) {
      localStorage.removeItem(key)
    }
  }

  return { get, set, remove }
}()

export const SettingsStorage = function(storage) {
  const _version = '1.0.0'
  const _settingsKey = `15-puzzle-${_version}`

  const _loadFromStorage = () => {
    const json = storage.get(_settingsKey)

    return json ? JSON.parse(json) : null // TODO: wrap in try/catch
  }

  storage.getSetting = function(name) {
    const settings = _loadFromStorage()

    return settings?.[name]
  }

  storage.setSetting = function(name, value) {
    const settings = _loadFromStorage() || {}

    settings[name] = value
    this.set(_settingsKey, JSON.stringify(settings))
  }

  storage.loadSettings = function(defaults = {}) {
    const settings = _loadFromStorage()

    return { ...defaults, ...settings }
  }

  storage.resetSettings = function() {
    this.remove(_settingsKey)
  }

  return storage
}(Storage)

