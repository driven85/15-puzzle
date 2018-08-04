// Libs
import React from 'react'
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

export default Checkbox

