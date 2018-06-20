export const TOGGLE_LID = 'TOGGLE_LID'
export const SET_LOADER = 'SET_LOADER'
export const START_CLICKED = 'START_CLICKED'


export const toggleLid = () => ({
  type: TOGGLE_LID
})

export const setLoader = loader => ({
  type: SET_LOADER,
  payload: { loader }
})

export const startClicked = clicked => ({
  type: START_CLICKED,
  payload: { clicked }
})

