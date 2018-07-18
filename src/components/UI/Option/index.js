// Libs
import React, { Component } from 'react'

// CSS
import './styles.sass'


const Option = ({ children, icon, value }) => (
  <div 
    className="option"
    data-value={value}
  >
    <span className="icon">{icon}</span>
    {children}
  </div>
)

export default Option

