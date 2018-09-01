import test from 'tape'
import { Storage } from './Storage'
import sinon from 'sinon'


global.localStorage = {
  _storage: {
    '15-PUZZLE-1.0.0': JSON.stringify({ a: 123, b: 456 })
  },
  getItem: function(key) {
    return this._storage[key]
  },
  setItem: function(key, value) {
    this._storage[key] = value.toString()
  }
}

// TODO: add more spies

test('Storage.get', t => {
  const getItem = sinon.spy(localStorage, 'getItem')

  const a = Storage.get('a')
  const b = Storage.get('b')

  t.equal(getItem.callCount, 2, 
    'Should call localStorage.getItem 2 times')
  t.equal(a, 123,
    'Should get a value correctly')
  t.equal(b, 456,
    'Should get a value correctly')

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

  t.end()
})

test('Storage.remove', t => {
  Storage.remove('b')

  const b = Storage.get('b')

  t.equal(b, undefined,
    'Should remove a value correctly')

  t.end()
})

