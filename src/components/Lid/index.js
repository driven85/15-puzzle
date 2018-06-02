// Libs
import React from 'react'
import { connect } from 'react-redux'

// CSS
import './styles.sass'

// Actions
import { lidOpen } from 'actions/layout/lidOpen'


const mapStateToProps = ({ layout: { lidOpen } }) => ({
  lidOpen
})

const mapDispatchToProps = dispatch => ({
  onOpen: (e) => dispatch(lidOpen())
})

const Lid = ({ lidOpen, onOpen }) => {
  const klass = lidOpen ? 'open' : ''

  return (
    <React.Fragment>
      <div className={`lid back ${klass}`}></div>
      <div className={`lid front ${klass}`}>
        <span 
          className="play"
          onClick={onOpen}
        >
          Play!
        </span>
      </div>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Lid)

