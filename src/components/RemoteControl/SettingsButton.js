// Libs
import React from 'react'

// Images
import Settings from 'images/settings.svg'

// CSS
import './SettingsButton.sass'


// TODO: set the width & height via props

const SettingsButton = () => (
  <div className="settings-button">
    <img src={Settings} />
  </div>
)

export default SettingsButton

