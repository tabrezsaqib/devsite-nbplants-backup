import * as types from "../types"
export const authenticateAction = (response) => async (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION_STATE,
    payload: response,
  })
}