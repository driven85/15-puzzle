// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import { toggleGameCheatingWarning } from 'actions/layout'


const mapStateToProps = ({ 
  layout: { cheatingWarning }
}) => ({
  show: cheatingWarning
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleGameCheatingWarning(false))
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

Warning.propTypes = {
  show: PropTypes.bool,
  styles: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withStyles(Warning, styles))

