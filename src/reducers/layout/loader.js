import { SET_LOADER } from 'actions/layout/loader'


const loader = (state = false, action) => {
  switch (action.type) {
    case SET_LOADER:
      return action.payload.loader

    default:
      return state
  }
}

export default loader

