import test from 'tape'
import Puzzle from './Puzzle'


test('Puzzle.prototype.getMovableTiles', t => {
  let puzzle
   
  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.deepEqual(
    puzzle.getMovableTiles(),
    [12, 15],
    'Should get movable tiles correctly'
  )

  puzzle = new Puzzle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    puzzle.getMovableTiles(),
    [1, 4],
    'Should get movable tiles correctly'
  )

  puzzle = new Puzzle([1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    puzzle.getMovableTiles(),
    [3, 7],
    'Should get movable tiles correctly'
  )

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    puzzle.getMovableTiles(),
    [4, 7, 11],
    'Should get movable tiles correctly'
  )

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13, 14, 15])
  t.deepEqual(
    puzzle.getMovableTiles(),
    [5, 9, 12],
    'Should get movable tiles correctly'
  )

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11, 12, 13, 14, 15])
  t.deepEqual(
    puzzle.getMovableTiles(),
    [7, 10, 11, 14],
    'Should get movable tiles correctly'
  )

  t.end()
})

test('Puzzle.prototype.moveTile', t => {
  let puzzle

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.ok(puzzle.moveTile(15), 'Should move a tile')
  t.deepEqual(
    puzzle.currentState(),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15],
    'Should change the puzzle\'s state'
  )

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.ok(puzzle.moveTile(12), 'Should move a tile')
  t.deepEqual(
    puzzle.currentState(),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 13, 14, 15, 12],
    'Should change the puzzle\'s state'
  )

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  t.ok(puzzle.moveTile(10), 'Should move a tile')
  t.deepEqual(
    puzzle.currentState(),
    [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 0, 11, 12, 13, 14, 15],
    'Should change the puzzle\'s state'
  )

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.notOk(puzzle.moveTile(1), 'Should not be able to move an immovable tile')

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.notOk(puzzle.moveTile(7), 'Should not be able to move an immovable tile')

  t.end()
})

//test('Puzzle.prototype.shuffle', t => {
//  t.fail('TODO: should be solvable') 
//
//  t.end()
//})

// test('Puzzle.pickRandomTile', t => {
//   const tiles = [1, 2, 3, 4, 5]
// 
//   t.ok(tiles.includes(Puzzle.pickRandomTile(tiles)),
//     'Should pick a random tile correctly')
// 
//   t.end()
// })

test('Puzzle.isSolvable', t => {
  let puzzle

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.ok(puzzle.isSolvable(), 'Should be solvable')

  puzzle = new Puzzle([13, 2, 10, 3, 1, 12, 8, 4, 5, 0, 9, 6, 15, 14, 11, 7])
  t.ok(puzzle.isSolvable(), 'Should be solvable')

  puzzle = new Puzzle([6, 13, 7, 10, 8, 9, 11, 0, 15, 2, 12, 5, 14, 3, 1, 4])
  t.ok(puzzle.isSolvable(), 'Should be solvable')

  puzzle = new Puzzle([3, 9, 1, 15, 14, 11, 4, 6, 13, 0, 10, 12, 2, 7, 8, 5])
  t.notOk(puzzle.isSolvable(), 'Should be unsolvable')

  t.end()
})

