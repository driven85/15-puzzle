// Libs
import React from 'react'
import classNames from 'classnames'

// Icons
import SettingsSvg from 'icons/SettingsSvg'

// CSS
import './styles.sass'


// TODO: set the width & height via props
const SettingsButton = ({ bright, onClick }) => (
  <div 
    className="settings-button"
    onClick={onClick}
  >
    <SettingsSvg className={classNames({ bright, drab: !bright })} />
  </div>
)

export default SettingsButton

