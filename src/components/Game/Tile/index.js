// Libs
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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

Tile.propTypes = {
  bright: PropTypes.bool,
  number: PropTypes.number.isRequired,
  shake: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Tile

