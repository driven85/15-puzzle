import test from 'tape'
import { getStyle } from './styles'


const xsHeaderStyle = { fontSize: 16 }
const xsMainStyle = { fontSize: 16 }
const xsFooterStyle = { fontSize: 16 }
const smHeaderStyle = { fontSize: 20 }
const mdHeaderStyle = { fontSize: 32 }
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

test('getStyle', t => {
  t.equal(getStyle(styles, 'xs', 'header'), xsHeaderStyle,
    'xs header style should be retrieved correctly'
  )
 
  t.equal(getStyle(styles, 'xs', 'main'), xsMainStyle,
    'xs main style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'xs', 'footer'), xsFooterStyle,
    'xs footer style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'sm', 'header'), smHeaderStyle,
    'sm header style should be retrieved correctly'
  )
 
  t.equal(getStyle(styles, 'sm', 'main'), xsMainStyle,
    'sm main style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'sm', 'footer'), xsFooterStyle,
    'sm footer style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'md', 'header'), mdHeaderStyle,
    'md header style should be retrieved correctly'
  )
 
  t.equal(getStyle(styles, 'md', 'main'), mdMainStyle,
    'md main style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'md', 'footer'), xsFooterStyle,
    'md footer style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'lg', 'header'), mdHeaderStyle,
    'lg header style should be retrieved correctly'
  )
 
  t.equal(getStyle(styles, 'lg', 'main'), mdMainStyle,
    'lg main style should be retrieved correctly'
  )

  t.equal(getStyle(styles, 'lg', 'footer'), lgFooterStyle,
    'lg footer style should be retrieved correctly'
  )

  t.equal(Object.keys(getStyle(styles, 'md', 'section')).length, 0,
    'Should return an empty object for an element with no styles set'
  )

  t.end()
})

