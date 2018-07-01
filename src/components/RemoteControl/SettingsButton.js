// Libs
import React from 'react'

// Images
import SettingsBright from 'images/settings-bright.svg'
import SettingsDrab from 'images/settings-drab.svg'

// CSS
import './SettingsButton.sass'


// TODO: set the width & height via props

const SettingsButton = ({ bright, onClick }) => (
  <div 
    className="settings-button"
    onClick={onClick}
  >
    {bright
      ? <img src={SettingsBright} />
      : <img src={SettingsDrab} />
    }
  </div>
)

export default SettingsButton

