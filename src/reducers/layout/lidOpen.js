// Action types
import { LID_OPEN } from 'actions/layout/lidOpen'


const lidOpen = (state = false, action) => {
  switch (action.type) {
    case LID_OPEN:
      return true

    default:
      return state
  }
}

export default lidOpen

