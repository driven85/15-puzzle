// Libs
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// CSS
import './styles.sass'


const Loader = ({ className, width, height }) => (
  <div 
    className={classNames('loader', className)}
    style={{ width, height }}
  >
    <div className="spinner" />
  </div>
)

Loader.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Loader

