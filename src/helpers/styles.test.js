import test from 'tape'
import { getStyle } from './styles'


const xsHeaderStyle = { fontSize: 16, padding: 10 }
const xsMainStyle = { fontSize: 16, margin: 10 }
const xsFooterStyle = { fontSize: 16 }
const smHeaderStyle = { fontSize: 20 }
const mdHeaderStyle = { fontSize: 32, padding: 20 }
const mdMainStyle = { fontSize: 20 }
const lgFooterStyle = { fontSize: 20 }

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

test('getStyle', t => {
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

