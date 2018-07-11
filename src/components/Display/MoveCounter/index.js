// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

// Icons
import MovesSvg from 'icons/MovesSvg'

// CSS
import './styles.sass'

// Helpers
import { paddedNumber } from 'helpers/display'

const mapStateToProps = ({ 
  display: { moves },
  layout: { lid } 
}) => ({
  lid,
  moves
})

const MoveCounter = ({ lid, moves }) => (
  <div className={classNames('move-counter', { on: !lid })}>
    <MovesSvg className={classNames({ off: lid, on: !lid })} />
    <div>{paddedNumber(moves)}</div>
  </div>
)

MoveCounter.propTypes = {
  lid: PropTypes.bool,
  moves: PropTypes.number
}

export default connect(mapStateToProps)(MoveCounter)

