// Libs
import React, { Component } from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Option = ({ children, icon, selected, value }) => (
  <div 
    className={classNames('option', { selected })}
    data-value={value}
  >
    <span className="icon">{icon}</span>
    {children}
  </div>
)

export default Option

