const initialState = 
  [...Array.from(new Array(15), (val, ind) => ind + 1), 0]

const tiles = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default tiles

