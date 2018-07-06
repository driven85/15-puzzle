// Libs
import React from 'react'
import PropTypes from 'prop-types'

// CSS
import './styles.sass'


const Loader = ({ width, height }) => (
  <div 
    className="loader"
    style={{ width, height }}
  >
    <div className="spinner" />
  </div>
)

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Loader

