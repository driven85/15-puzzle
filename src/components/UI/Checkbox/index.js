// Libs
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Checkbox = ({ 
  bright, 
  checked, 
  checkmarkStyle,
  className,
  label, 
  style,
  onChange 
}) => (
  <label 
    className={classNames('checkbox', className, { bright })}
    style={style}
  >
    {label}
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={e => onChange(e.target.checked)}
    />
    <span 
      className="checkmark"
      style={checkmarkStyle}
    />
  </label>
)

Checkbox.propTypes = {
  bright: PropTypes.bool,
  checked: PropTypes.bool,
  checkmarkStyle: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func
}

export default Checkbox

