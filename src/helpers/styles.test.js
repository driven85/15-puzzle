import test from 'tape'
import { deepMerge, getStyle } from './styles'


test('deepMerge', t => {
  let a, b

  a = { a: 1, b: { c: 2, d: 3 }, e: 5 }
  b = { b: { c: 1 }, d: 4 }
  t.deepEqual(
    deepMerge(a, b),
    { a: 1, b: { c: 1, d: 3 }, d: 4, e: 5 },
    'Should merge correctly'
  )

  a = { a: 'hello', b: { c: 'yep', d: { e: true, f: false } } }
  b = { b: { d: { f: null, g: [1, 2, 3] } } }
  t.deepEqual(
    deepMerge(a, b),
    { a: 'hello', b: { c: 'yep', d: { e: true, f: null, g: [1, 2, 3] } } },
    'Should merge correctly'
  )

  a = { a: { b: { c: 1, d: '2', e: ['yep', 5, true, false] } } }
  b = { a: { b: { e: [1, 2, 3] } } }
  t.deepEqual(
    deepMerge(a, b),
    { a: { b: { c: 1, d: '2', e: [1, 2, 3, false] } } },
    'Should merge correctly'
  )

  t.end()
})

const xsHeaderStyle = { fontSize: 16, padding: 10 }
const xsMainStyle = { fontSize: 16, margin: 10 }
const xsFooterStyle = { fontSize: 16, margin: 15 }
const smHeaderStyle = { fontSize: 20 }
const mdHeaderStyle = { fontSize: 32, padding: 20, margin: 15 }
const mdMainStyle = { fontSize: 20 }
const lgFooterStyle = { fontSize: 20, padding: 10 }

const styles = {
  'xs': {
    header: xsHeaderStyle,
    main: xsMainStyle,
    footer: xsFooterStyle
  },
  'sm': {
    header: smHeaderStyle
  },
  'md': {
    header: mdHeaderStyle,
    main: mdMainStyle
  },
  'lg': {
    footer: lgFooterStyle
  }
}

const missingStyles = {
  'xs': {
    header: xsHeaderStyle
  }
}

test('getStyle for element', t => {
  t.equal(
    getStyle(styles, 'xs', 'header').fontSize, 
    xsHeaderStyle.fontSize,
    'xs header fontSize should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'xs', 'header').padding, 
    xsHeaderStyle.padding,
    'xs header padding should be retrieved correctly'
  )
 
  t.equal(
    getStyle(styles, 'xs', 'main').fontSize,
    xsMainStyle.fontSize,
    'xs main style should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'xs', 'footer').fontSize, 
    xsFooterStyle.fontSize,
    'xs footer style should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'sm', 'header').fontSize, 
    smHeaderStyle.fontSize,
    'sm header fontSize should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'sm', 'header').padding,
    xsHeaderStyle.padding,
    'sm header padding should be retrieved correctly'
  )
 
  t.equal(
    getStyle(styles, 'sm', 'main').fontSize, 
    xsMainStyle.fontSize,
    'sm main style should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'sm', 'footer').fontSize, 
    xsFooterStyle.fontSize,
    'sm footer style should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'md', 'header').fontSize,
    mdHeaderStyle.fontSize,
    'md header fontSize should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'md', 'header').padding,
    mdHeaderStyle.padding,
    'md header padding should be retrieved correctly'
  )
 
  t.equal(
    getStyle(styles, 'md', 'main').fontSize,
    mdMainStyle.fontSize,
    'md main style should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'md', 'footer').fontSize, 
    xsFooterStyle.fontSize,
    'md footer style should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'lg', 'header').fontSize,
    mdHeaderStyle.fontSize,
    'lg header fontSize should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'lg', 'header').padding,
    mdHeaderStyle.padding,
    'lg header padding should be retrieved correctly'
  )
 
  t.equal(
    getStyle(styles, 'lg', 'main').fontSize, 
    mdMainStyle.fontSize,
    'lg main fontStyle should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'lg', 'main').margin, 
    xsMainStyle.margin,
    'lg main margin should be retrieved correctly'
  )

  t.equal(
    getStyle(styles, 'lg', 'footer').fontSize,
    lgFooterStyle.fontSize,
    'lg footer style should be retrieved correctly'
  )

  t.equal(Object.keys(getStyle(styles, 'md', 'section')).length, 0,
    'Should return an empty object for an element with no styles set'
  )

  t.equal(
    getStyle(missingStyles, 'md', 'header').fontSize,
    xsHeaderStyle.fontSize,
    'Should work correctly if styles for some breakpoints are missing'
  )

  t.end()
})

test('getStyle for layout', t => {
  t.deepEqual(
    getStyle(styles, 'xs'),
    {
      header: xsHeaderStyle,
      main: xsMainStyle,
      footer: xsFooterStyle
    },
    'Should retrieve xs styles correctly'
  )

  t.deepEqual(
    getStyle(styles, 'sm'),
    {
      header: { fontSize: 20, padding: 10 },
      main: xsMainStyle,
      footer: xsFooterStyle
    },
    'Should retrieve sm styles correctly'
  )

  t.deepEqual(
    getStyle(styles, 'md'),
    {
      header: mdHeaderStyle,
      main: { fontSize: 20, margin: 10 },
      footer: xsFooterStyle
    },
    'Should retrieve md styles correctly'
  )

  t.deepEqual(
    getStyle(styles, 'lg'),
    {
      header: mdHeaderStyle,
      main: { fontSize: 20, margin: 10 },
      footer: { fontSize: 20, margin: 15, padding: 10 }
    },
    'Should retrieve lg styles correctly'
  )

  t.end()
})

