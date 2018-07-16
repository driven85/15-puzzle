export const TOGGLE_LID = 'TOGGLE_LID'
export const SET_LOADER = 'SET_LOADER'
export const START_CLICKED = 'START_CLICKED'
export const SET_SOLVED = 'SET_SOLVED'
export const SHAKE_TILE = 'SHAKE_TILE'
export const ENABLE_RESET = 'ENABLE_RESET'
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS'
export const SET_START_DISABLED = 'SET_START_DISABLED'
export const TOGGLE_CHEATING_WARNING = 'TOGGLE_CHEATING_WARNING'


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

export const setStartDisabled = disabled => ({
  type: SET_START_DISABLED,
  payload: { disabled }
})

export const toggleCheatingWarning = toggle => ({
  type: TOGGLE_CHEATING_WARNING,
  payload: { toggle }
})

