import test from 'tape'
import { formattedTime, paddedNumber } from './display'


test('formattedTime', t => {
  t.equal(formattedTime(30), '00:00:30',
    '30 seconds should be formatted correctly'
  )

  t.equal(formattedTime(60), '00:01:00',
    '60 seconds should be formatted correctly'
  )

  t.equal(formattedTime(99), '00:01:39',
    '39 seconds should be formatted correctly'
  )

  t.equal(formattedTime(365), '00:06:05',
    '365 seconds should be formatted correctly'
  )

  t.equal(formattedTime(3600), '01:00:00',
    '3600 seconds should be formatted correctly'
  )

  t.equal(formattedTime(83390), '23:09:50',
    '83390 seconds should be formatted correctly'
  )

  t.equal(formattedTime(216000), '60:00:00',
    '216000 seconds should be formatted correctly'
  )

  t.equal(formattedTime(356400), '99:00:00',
    '356400 seconds should be formatted correctly'
  )

  t.equal(formattedTime(360000), '00:00:00',
    '360000 seconds should be formatted correctly'
  )

  t.end()
})

test('paddedNumber', t => {
  t.equal(paddedNumber(0, 3), '000',
    '0 should be formatted correctly'
  )

  t.equal(paddedNumber(3, 3), '003',
    '3 should be formatted correctly'
  )

  t.equal(paddedNumber(23, 3), '023',
    '23 should be formatted correctly'
  )

  t.equal(paddedNumber(50, 3), '050',
    '50 should be formatted correctly'
  )

  t.equal(paddedNumber(278, 3), '278',
    '278 should be formatted correctly'
  )

  t.equal(paddedNumber(999, 3), '999',
    '999 should be formatted correctly'
  )

  t.equal(paddedNumber(1000, 3), '000',
    '1000 should be formatted correctly'
  )

  t.equal(paddedNumber(5, 2), '05',
    '5 should be formatted correctly'
  )

  t.equal(paddedNumber(33, 2), '33',
    '33 should be formatted correctly'
  )

  t.equal(paddedNumber(127, 2), '27',
    '27 should be formatted correctly'
  )

  t.equal(paddedNumber(99, 5), '00099',
    '99 should be formatted correctly'
  )

  t.end()
})

