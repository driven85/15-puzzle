// Libs
import React, { Component } from 'react'

// Context
import { MediaQueryContext } from './context.js'


class MediaQuery extends Component {
  state = { layout: 'xs' }

  checkMediaQuery = () => {
    let layout = 'xs'

    for (const bp of Object.keys(MediaQuery.breakpoints)) {
      if (window.matchMedia(`(min-width: ${bp}px)`).matches) {
        layout = MediaQuery.breakpoints[bp]
      }  
    }

    this.setState({ layout })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkMediaQuery)
    this.checkMediaQuery()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkMediaQuery)
  }

  render() {
    const { children } = this.props
    const { layout } = this.state

    return (
      <MediaQueryContext.Provider value={{ layout }}>
        {children}
      </MediaQueryContext.Provider>
    )
  }
}

MediaQuery.breakpoints = { 520: 'sm', 768: 'md', 1024: 'lg' }

export default MediaQuery

