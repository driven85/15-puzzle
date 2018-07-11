// Libs
import React from 'react'
import classNames from 'classnames'

// Icons
import SettingsSVG from 'icons/SettingsSVG'

// CSS
import './SettingsButton.sass'


// TODO: set the width & height via props
const SettingsButton = ({ bright, onClick }) => (
  <div 
    className="settings-button"
    onClick={onClick}
  >
    <SettingsSVG className={classNames({ bright, drab: !bright })} />
  </div>
)

export default SettingsButton

