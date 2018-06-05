import test from 'tape'
import Puzzle, { initialState } from './Puzzle'


test('Puzzle.prototype.currentState', t => {
  let puzzle

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  t.deepEqual(
    puzzle.currentState(),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
    'Should return the puzzle\'s current state'
  )

  puzzle.moveTile(15)
  t.deepEqual(
    puzzle.currentState(),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15],
    'Should return the puzzle\'s current state'
  )

  puzzle.moveTile(11)
  t.deepEqual(
    puzzle.currentState(),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 12, 13, 14, 11, 15],
    'Should return the puzzle\'s current state'
  )

  t.end()
})

test('Puzzle.prototype.allStates', t => {
  let puzzle

  puzzle = new Puzzle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  puzzle.moveTile(15)
  puzzle.moveTile(11)
  t.deepEqual(
    puzzle.allStates(),
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 12, 13, 14, 11, 15]],
    'Should return all puzzle\'s states'
  )

  t.end()
})

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

test('Puzzle.prototype.isSolvable', t => {
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

test('Puzzle.prototype.reset', t => {
  let puzzle,
      randomState = [0, 1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14]

  puzzle = new Puzzle(randomState)
  t.deepEqual(
    puzzle.reset().currentState(),
    initialState,
    'Should reset the puzzle to the initial state'
  )

  t.deepEqual(
    puzzle.reset(randomState).currentState(),
    randomState,
    'Should reset the puzzle to a certain state'
  )

  t.end()
})

