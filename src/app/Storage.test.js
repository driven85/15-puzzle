import test from 'tape'
import { Storage, SettingsStorage } from './Storage'
import sinon from 'sinon'
import VERSION from '../version'


const storageKey = '15-PUZZLE-' + VERSION

global.localStorage = {
  _storage: {},

  getItem: function(key) {
    return this._storage[key]
  },

  setItem: function(key, value) {
    this._storage[key] = value.toString()
  },

  clear: function() {
    this._storage = {}
  }
}

const initLocalStorage = value =>
  global.localStorage._storage[storageKey] = JSON.stringify(value)

const resetLocalStorage = () =>
  global.localStorage._storage[storageKey] = {}

// TODO: add more spies
test('Storage.get', t => {
  initLocalStorage({ a: 123, b: 456 })

  const getItem = sinon.spy(localStorage, 'getItem')
  const a = Storage.get('a')
  const b = Storage.get('b')

  t.equal(getItem.callCount, 2, 
    'Should call localStorage.getItem 2 times')
  t.equal(a, 123,
    'Should get a value correctly')
  t.equal(b, 456,
    'Should get a value correctly')

  resetLocalStorage()
  t.end()
})

test('Storage.set', t => {
  const setItem = sinon.spy(localStorage, 'setItem')

  Storage.set('c', 78)
  Storage.set('d', 9)
  const c = Storage.get('c')
  const d = Storage.get('d')

  t.equal(setItem.callCount, 2,
    'Should call localStorage.setItem 2 times')
  t.equal(c, 78,
    'Should set a value correctly')
  t.equal(d, 9,
    'Should set a value correctly')

  resetLocalStorage()
  t.end()
})

test('Storage.remove', t => {
  initLocalStorage({ a: 123 })

  Storage.remove('a')

  const a = Storage.get('a')

  t.equal(a, undefined,
    'Should remove a value correctly')

  resetLocalStorage()
  t.end()
})

test('SettingsStorage.getSetting', t => {
  const get = sinon.spy(SettingsStorage, 'get')
  let sound = SettingsStorage.getSetting('sound')

  t.ok(get.calledWith('settings'), 
    'Should call the get method with \'settings\' as an argument'
  )

  t.equal(sound, undefined,
    'Should return undefined if there is no setting'
  )

  initLocalStorage({ settings: { sound: 'loud' } })

  sound = SettingsStorage.getSetting('sound')

  t.equal(sound, 'loud',
    'Should retrieve a setting from the storage correctly')

  get.restore()
  resetLocalStorage()
  t.end()
})

test('SettingsStorage.setSetting', t => {
  SettingsStorage.setSetting('locale', 'en')
  let locale = SettingsStorage.getSetting('locale')

  t.equal(locale, 'en',
    'Should save a setting in the storage correctly')

  SettingsStorage.setSetting('locale', 'ru')
  locale = SettingsStorage.getSetting('locale')

  t.equal(locale, 'ru',
    'Should save a setting in the storage correctly')

  resetLocalStorage() 
  t.end()
})

test('SettingsStorage.setAllSettings', t => {
  const set = sinon.spy(SettingsStorage, 'set')
  const settings = { locale: 'ru', sound: true }

  SettingsStorage.setAllSettings(settings)

  t.ok(set.calledWith('settings', settings),
    'Should call the set method with correct arguments'
  )

  resetLocalStorage()
  t.end()
})

test('SettingsStorage.getAllSettings', t => {
  const get = sinon.spy(SettingsStorage, 'get')  
  const settings = { locale: 'ru', sound: true }

  let sets = SettingsStorage.getAllSettings()

  t.ok(get.calledWith('settings'),
    'Should call the get method with correct arguments')

  t.deepEqual(sets, {},
    'Should return an empty object if there are no settings set')

  initLocalStorage({ settings })
  sets = SettingsStorage.getAllSettings()

  t.deepEqual(sets, settings,
    'Should retrieve settings from the storage correctly')

  resetLocalStorage()
  t.end()
})

test('SettingsStorage.removeSettings', t => {
  const remove = sinon.spy(SettingsStorage, 'remove')   

  SettingsStorage.resetSettings()
  t.ok(remove.calledWith('settings'),
    'Should call the remove method with \'settings\' as an argument'
  )

  t.end()
})

