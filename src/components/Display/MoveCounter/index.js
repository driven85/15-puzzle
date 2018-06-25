// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Helpers
import { paddedNumber } from 'helpers/display'

const mapStateToProps = ({ display: { moves } }) => ({
  moves
})

const MoveCounter = ({ moves }) => (
  <div className="move-counter">
    {paddedNumber(moves)}
  </div>
)

export default connect(mapStateToProps)(MoveCounter)

