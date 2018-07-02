// Libs
import React from 'react'

// CSS
import './styles.sass'


const Dialog = ({ width, height, children }) => (
  <div className="dialog">
    <div className="backdrop">
      <div 
        className="content"
        style={{ width, height }}
      >
        {children} 
      </div>
    </div>
  </div>
)

export default Dialog

