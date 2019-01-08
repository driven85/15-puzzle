// Libs
import React, { PureComponent } from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


class Tile extends PureComponent {
  render() {
    const { bright, number, shake, onClick } = this.props

    return (
      <div 
        className={classNames('tile', { bright, shake })}
        onClick={onClick}
      >
        {number}
      </div>
    )
  }
}

export default Tile

