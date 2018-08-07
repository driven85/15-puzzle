import { 
  SWITCH_LOCALE, 
  SWITCH_THEME,
  TOGGLE_SOUND
} from 'actions/settings'


const initialState = {
  locale: 'en',
  sound: false,
  theme: 'pink-grey'
}

// TODO: refactor
const settings = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LOCALE:
      const { locale } = action.payload

      return { ...state, locale }

    case SWITCH_THEME:
      const { theme } = action.payload

      return { ...state, theme }

    case TOGGLE_SOUND:
      const { sound } = action.payload

      return { ...state, sound }

    default:
      return state
  }
}

export default settings

