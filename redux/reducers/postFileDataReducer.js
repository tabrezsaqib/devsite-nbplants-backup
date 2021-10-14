import * as types from "../types"
const initialState = {
  plants_list: [],
}
export const postFileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_JSONDATA:
      return {
        ...state,
        plants_list: action.payload,
      }
    default:
      return state
  }
}
