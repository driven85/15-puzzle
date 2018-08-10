// Libs
import React from 'react'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'

// Helpers
import { getStyle } from 'helpers/styles'


const withStyles = (Component, styles) => {
  class WithStyles extends React.Component {
    render() {
      return (
        <MediaQueryContext.Consumer>
          {({ layout }) =>
            <Component
              styles={getStyle(styles, layout)}
              {...this.props} 
            />
          }
        </MediaQueryContext.Consumer>
      )
    }
  }

  const displayName = Component.displayName || Component.name || 'Component'
  WithStyles.displayName = `withStyles(${displayName})`

  return WithStyles
}

export default withStyles

