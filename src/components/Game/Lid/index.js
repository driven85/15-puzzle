// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import { FormattedMessage } from 'react-intl'

// CSS
import './styles.sass'


const mapStateToProps = ({ 
  layout: { lid },
  settings: { locale }
}) => ({
  lid,
  locale
})

const Lid = ({ lid }) => (
  <Transition
    in={lid}
    timeout={{
      enter: 100,
      exit: 1500
    }}
    unmountOnExit
  >
    {state => (
      <React.Fragment>
        <div className={classNames('lid back', state)} />
        <div className={classNames('lid front', state)}>
          <label>
            <FormattedMessage id="lid.label" />
          </label>
        </div>
      </React.Fragment>
    )}
  </Transition>
)

Lid.propTypes = {
  lid: PropTypes.bool.isRequired,
  locale: PropTypes.string
}

export default connect(mapStateToProps)(Lid)

