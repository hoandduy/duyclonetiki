import { BOOL_CHANGE } from "./overLayTypes";

const initState = false

const overLayReducer = (state=initState, action) => {
  switch(action.type) {
    case BOOL_CHANGE:
      return action.payload
    default: return state
  }
}

export default overLayReducer