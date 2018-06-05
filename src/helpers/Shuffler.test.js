import test from 'tape'
import Shuffler from './Shuffler'


test('Shuffler.prototype._getMovableTiles', t => {
  let shuffler
   
  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.deepEqual(
    shuffler._getMovableTiles(),
    [12, 15],
    'Should get movable tiles correctly'
  )

  shuffler = new Shuffler([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    shuffler._getMovableTiles(),
    [1, 4],
    'Should get movable tiles correctly'
  )

  shuffler = new Shuffler([1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    shuffler._getMovableTiles(),
    [3, 7],
    'Should get movable tiles correctly'
  )

  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    shuffler._getMovableTiles(),
    [4, 7, 11],
    'Should get movable tiles correctly'
  )

  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    shuffler._getMovableTiles(),
    [5, 9, 12],
    'Should get movable tiles correctly'
  )

  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11, 12, 13, 14, 15])
  t.deepEqual(
    shuffler._getMovableTiles(),
    [7, 10, 11, 14],
    'Should get movable tiles correctly'
  )

  t.end()
})

test('Shuffler.prototype._moveTile', t => {
  let shuffler

  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.deepEqual(
    shuffler._moveTile(15),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15],
    'Should move a tile correctly'
  )

  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.deepEqual(
    shuffler._moveTile(12),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 13, 14, 15, 12],
    'Should move a tile correctly'
  )

  shuffler = new Shuffler([1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    shuffler._moveTile(10),
    [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 0, 11, 12, 13, 14, 15],
    'Should move a tile correctly'
  )

  t.end()
})

test('Shuffler.prototype.shuffle', t => {
  t.fail('TODO: should be solvable') 

  t.end()
})

