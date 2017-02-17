const initialState = {
          north: false,
          northEast: false,
          east: false,
          southEast: false,
          south: false,
          southWest: false,
          west: false,
          northWest: false
        }

const mapAspectFilterReducer = ( state = initialState, action) => {
  switch(action.type) {
    case "CHANGE_FILTER": 
      let direction = action.direction
      let toggledState = !state[direction]
      let newState = {}
      newState[direction] = toggledState
      return Object.assign({}, state, newState);
    case "UPDATE_ALL":
      return action.serverState;
    default:
      return state;
  }
}

export default mapAspectFilterReducer