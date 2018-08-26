// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import Loader from 'components/UI/Loader'

// CSS
import './styles.sass'


const mapStateToProps = ({ layout: { loader } }) => ({
  show: loader
})

const GameLoader = ({ show, ...props }) =>
  show && <Loader {...props} />

GameLoader.propTypes = {
  show: PropTypes.bool
}

export default connect(mapStateToProps)(GameLoader)

