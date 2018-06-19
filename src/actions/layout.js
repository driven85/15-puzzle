export const LID_OPEN = 'LID_OPEN'
export const SET_LOADER = 'SET_LOADER'
export const START_CLICKED = 'START_CLICKED'


export const lidOpen = () => ({
  type: LID_OPEN
})

export const setLoader = loader => ({
  type: SET_LOADER,
  payload: { loader }
})

export const startClicked = clicked => ({
  type: START_CLICKED,
  payload: { clicked }
})

