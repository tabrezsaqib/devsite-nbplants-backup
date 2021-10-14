import * as types from "../types"
import * as api from "../../generics/api"
const API_URL = process.env.API_URL

export const postFileData = (data) => async (dispatch) => {
  const response = await api.post(`${API_URL}plants`, data)
  console.log(response)
  dispatch({
    type: types.POST_JSONDATA,
    payload: response,
  })
}
