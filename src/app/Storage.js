export const Storage = function() {
  // TODO: define the version globally
  const _version = '1.0.0'
  const _storageKey = `15-PUZZLE-${_version}`

  function _loadFromStorage() {
    if (localStorage) {
      const json = localStorage.getItem(_storageKey)

      return json ? JSON.parse(json) : {} // TODO: wrap in try/catch
    } else {
      return null
    }
  }

  function _saveToStorage(value) {
    localStorage.setItem(_storageKey, JSON.stringify(value))
  }

  function set(key, value) {
    const data = _loadFromStorage()

    if (data) {
      data[key] = value
      _saveToStorage(data)
    }
  }

  function get(key) {
    const data = _loadFromStorage()

    return data?.[key]
  }

  function remove(key) {
    const data = _loadFromStorage()

    if (data) {
      delete data[key]
      _saveToStorage(data)
    }
  }

  return { get, set, remove }
}()

export const SettingsStorage = function(storage) {
  storage.getSetting = function(name) {
    const settings = this.get('settings')

    return settings?.[name]
  }

  storage.setSetting = function(name, value) {
    const settings = this.get('settings') || {}

    settings[name] = value
    this.set('settings', settings)
  }

  storage.setAllSettings = function(settings) {
    this.set('settings', settings)
  }

  storage.getAllSettings = function() {
    return (this.get('settings') || {})
  }

  storage.resetSettings = function() {
    this.remove('settings')
  }

  return storage
}(Storage)

