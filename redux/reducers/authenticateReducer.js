import * as types from "../types"
const initialState = {
  authentication_state : false,

}
export const authenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_STATE:
      return {
        ...state,
        authentication_state: action.payload,
      }
    default:
      return state
  }
}

export {initialState};