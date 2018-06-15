import { START_CLICKED } from 'actions/layout/start'


const startClicked = (state = false, action) => {
  switch (action.type) {
    case START_CLICKED:
      return action.payload.clicked

    default:
      return state
  }
}

export default startClicked

