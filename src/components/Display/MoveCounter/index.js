// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'


const mapStateToProps = ({ display: { moves } }) => ({
  moves
})

const MoveCounter = ({ moves }) => (
  <div className="move-counter">
    {moves}
  </div>
)

export default connect(mapStateToProps)(MoveCounter)

