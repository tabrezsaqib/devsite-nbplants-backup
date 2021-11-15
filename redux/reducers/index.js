import { combineReducers } from "redux"
import { getPlantsReducer } from "./getPlantsReducer"
import { loginReducer } from "./loginReducer"
import { postFileDataReducer } from "./postFileDataReducer"
import { selectorsReducer } from "./selectorsReducer"
import { paginationReducer } from "./paginationReducer"

export default combineReducers({
  post: getPlantsReducer,
  user: loginReducer,
  json_data: postFileDataReducer,
  pagination: paginationReducer,
  selector: selectorsReducer,
})
