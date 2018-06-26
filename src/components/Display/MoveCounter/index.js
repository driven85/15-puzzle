// Libs
import React from 'react'
import { connect } from 'react-redux'

// Images
import MovesIcon from 'images/moves.svg'

// CSS
import './styles.sass'

// Helpers
import { paddedNumber } from 'helpers/display'

const mapStateToProps = ({ display: { moves } }) => ({
  moves
})

const MoveCounter = ({ moves }) => (
  <div className="move-counter">
    <img src={MovesIcon} />
    <div>{paddedNumber(moves)}</div>
  </div>
)

export default connect(mapStateToProps)(MoveCounter)

