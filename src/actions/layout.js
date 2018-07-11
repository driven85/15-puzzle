export const TOGGLE_LID = 'TOGGLE_LID'
export const SET_LOADER = 'SET_LOADER'
export const START_CLICKED = 'START_CLICKED'
export const SET_SOLVED = 'SET_SOLVED'
export const RESET = 'RESET'
export const SHAKE_TILE = 'SHAKE_TILE'
export const ENABLE_RESET = 'ENABLE_RESET'
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS'


export const toggleLid = () => ({
  type: TOGGLE_LID
})

export const setLoader = loader => ({
  type: SET_LOADER,
  payload: { loader }
})

export const startClicked = () => ({
  type: START_CLICKED
})

export const setSolved = () => ({
  type: SET_SOLVED
})

export const reset = () => ({
  type: RESET
})

export const shakeTile = tile => ({
  type: SHAKE_TILE,
  payload: { tile }
})

export const enableReset = () => ({
  type: ENABLE_RESET
})

export const toggleSettings = settings => ({
  type: TOGGLE_SETTINGS,
  payload: { settings }
})

