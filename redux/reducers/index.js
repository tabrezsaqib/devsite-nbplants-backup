import { combineReducers } from "redux"
import { getPlantsReducer } from "./getPlantsReducer"
import { loginReducer } from "./loginReducer"
import { selectorsReducer } from "./selectorsReducer"
import { paginationReducer } from "./paginationReducer"

export default combineReducers({
  post: getPlantsReducer,
  user: loginReducer,
  pagination: paginationReducer,
  selector: selectorsReducer,
})
