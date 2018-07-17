// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

// Components
import { Transition } from 'react-transition-group'
import { FormattedHTMLMessage } from 'react-intl'

// CSS
import './styles.sass'


const mapStateToProps = ({ 
  layout: { solved },
  settings: { locale }
}) => ({
  show: solved,
  locale
})

const Congrats = ({ show }) => (
  <Transition
    in={show}
    timeout={{
      enter: 100,
      exit: 800
    }}
    unmountOnExit
  >
    {state => 
      <div className={classNames('congrats', state)}>
        <label>
          <FormattedHTMLMessage id="congrats.message" />
        </label>
      </div>
    }
  </Transition>
)

Congrats.propTypes = {
  show: PropTypes.bool
}

export default connect(mapStateToProps)(Congrats)

