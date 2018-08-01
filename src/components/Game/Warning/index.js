// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Dialog from 'components/UI/Dialog'

// CSS
import './styles.sass'

// Styles
import styles from './styles'

// Helpers
import { getStyle } from 'helpers/styles'

// Actions
import { toggleCheatingWarning } from 'actions/layout'

// Context
import { MediaQueryContext } from 'components/MediaQuery/context.js'


const mapStateToProps = ({ 
  layout: { cheatingWarning }
}) => ({
  show: cheatingWarning
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleCheatingWarning(false))
})

const Warning = ({ show, onClose }) => (
  <MediaQueryContext.Consumer>
    {({ layout }) =>
      <Dialog
        bright
        className="warning"
        contentStyle={getStyle(styles, layout, 'content')}
        show={show}
        onClose={onClose}
      >
        Warning!
      </Dialog>
    }
  </MediaQueryContext.Consumer>
)

export default connect(mapStateToProps, mapDispatchToProps)(Warning)

