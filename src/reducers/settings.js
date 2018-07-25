import { SWITCH_LOCALE, SWITCH_THEME } from 'actions/settings'


const initialState = {
  locale: 'en',
  theme: 'red-grey'
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LOCALE:
      const { locale } = action.payload

      return { ...state, locale }

    case SWITCH_THEME:
      const { theme } = action.payload

      return { ...state, theme }

    default:
      return state
  }
}

export default settings

