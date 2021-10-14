import { combineReducers } from "redux"
import { getPlantsReducer } from "./getPlantsReducer"
import { loginReducer } from "./loginReducer"
import { postFileDataReducer } from "./postFileDataReducer"
import { selectorsReducer } from "./selectorsReducer"

export default combineReducers({
  post: getPlantsReducer,
  user: loginReducer,
  json_data: postFileDataReducer,
  selector: selectorsReducer,
})
