import { combineReducers } from "redux"
import overLayReducer from "./overLay/overLayReducer"
import todaySuggestReducer from "./todaySuggestNav/todaySuggestNavReducer"
import modalReducer from "./modal/modalReducer"

const rootReducer = combineReducers({
  todayNav: todaySuggestReducer,
  overLay: overLayReducer,
  modal: modalReducer
})

export default rootReducer