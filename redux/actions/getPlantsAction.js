import * as types from "../types"
import * as api from "../../generics/api"
const API_URL = process.env.API_URL

export const fetchPlantPosts = () => async (dispatch) => {
  const response = await api.get(`${API_URL}plants`)
  dispatch({
    type: types.GET_PLANTS,
    payload: response.data,
  })
}

export const fetchPlantPost = (id) => async (dispatch) => {
  const response = await api.get(`${API_URL}plants/${id}`)
  dispatch({
    type: types.GET_PLANT,
    payload: response.data,
  })
}

export const toggleLoader = (option) => async (dispatch) => {
  dispatch({
    type: types.IS_LOADING,
    payload: option,
  })
}

export const searchPlantPosts = (slug) => async (dispatch) => {
  const response = await api.get(`${API_URL}plants?search=${slug}`)
  dispatch({
    type: types.GET_SEARCH_RESULTS,
    payload: response.data,
  })
}
