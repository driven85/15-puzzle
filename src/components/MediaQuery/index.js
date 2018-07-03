// Libs
import React from 'react'

// Context
import { MediaQueryContext } from './context.js'


class MediaQuery extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="media-query">
        <MediaQueryContext.Provider>
          {children}
        </MediaQueryContext.Provider>
      </div>
    )
  }
}

export default MediaQuery

