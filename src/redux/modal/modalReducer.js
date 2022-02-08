import { TURN_ON } from "./modalTypes"

const initState = false

const modalReducer = (state=initState, action) => {
  switch(action.type) {
    case TURN_ON:
      return action.payload
    default: return state
  }
}

export default modalReducer