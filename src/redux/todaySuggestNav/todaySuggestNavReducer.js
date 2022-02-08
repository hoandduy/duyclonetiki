const { CHANGE_OPTION } = require("./todaySuggestNavTypes");

const initialState = {
  currentChoice: 1
}

const todaySuggestReducer = ( state=initialState, action ) => {
  switch(action.type) {
    case CHANGE_OPTION:
      return {
        ...state,
        currentChoice: action.payload
      }

      default: return state
  }
} 

export default todaySuggestReducer