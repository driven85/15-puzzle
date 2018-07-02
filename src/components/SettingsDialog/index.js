// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Dialog from 'components/UI/Dialog'

// CSS
import './styles.sass'

// Actions
import { toggleSettings } from 'actions/layout'


const mapStateToProps = ({ layout: { settings } }) => ({
  show: settings
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(toggleSettings())
})

const SettingsDialog = ({ show, onClose }) =>
  <Dialog show={show} onClose={onClose} />

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDialog)

