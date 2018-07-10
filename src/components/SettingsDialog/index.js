// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Dialog from 'components/UI/Dialog'

// CSS
import './styles.sass'

// Actions
import { toggleSettings } from 'actions/layout'
import { switchLocale } from 'actions/settings'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'


const dialogSizes = {
  'xs': { width: 300, height: 300 },
  'sm': { width: 300, height: 300 },
  'md': { width: 500, height: 350 },
  'lg': { width: 600, height: 450 }
}

const mapStateToProps = ({ 
  layout: { settings },
  settings: { locale }
}) => ({
  show: settings,
  locale
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSettings()),
  onLocaleChange: (e) => dispatch(switchLocale(e.target.value))
})

const SettingsDialog = ({
  locale,
  show, 
  onClose, 
  onLocaleChange 
}) => (
  <MediaQueryContext.Consumer>
    {({ layout }) =>
      <Dialog
        width={dialogSizes[layout].width}
        height={dialogSizes[layout].height}
        show={show} 
        onClose={onClose} 
      >
        <select 
          value={locale}
          onChange={onLocaleChange}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </Dialog>
    }
  </MediaQueryContext.Consumer>
)

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDialog)

