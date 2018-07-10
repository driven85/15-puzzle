import { SWITCH_LOCALE } from 'actions/settings'


const initialState = {
  locale: 'en'
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LOCALE:
      const { locale } = action.payload

      return { ...state, locale }

    default:
      return state
  }
}

export default settings

