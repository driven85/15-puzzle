// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

// Components
import Dialog from 'components/UI/Dialog'

// CSS
import './styles.sass'

// Styles
import styles from './styles'

// HOC
import withStyles from 'hoc/withStyles'

// Actions
import { toggleCheatingWarning } from 'actions/layout'


const mapStateToProps = ({ 
  layout: { cheatingWarning }
}) => ({
  show: cheatingWarning
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleCheatingWarning(false))
})

const Warning = ({ show, styles, onClose }) => (
  <Dialog
    bright
    className="warning"
    contentStyle={styles.content}
    mainStyle={styles.main}
    modal
    show={show}
    onClose={onClose}
  >
    <div className="message">
      <FormattedMessage id="warning.message" />
    </div>
    <button onClick={onClose}>
      <FormattedMessage id="warning.button" />
    </button>
  </Dialog>
)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withStyles(Warning, styles))

