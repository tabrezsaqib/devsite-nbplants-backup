import * as types from "../types"
import * as api from "../../generics/api"
const API_URL = process.env.API_URL

export const fetchAllPlantPosts = (page) => async (dispatch) => {
  const response = await api.get(`${API_URL}plants?per_page=3&page=${page + 1}`)

  dispatch({
    type: types.GET_ALL_PLANTS,
    payload: response.data,
  })
  dispatch({
    type: types.IS_LOADING,
    payload: false,
  })
}

export const fetchNonWoodyPlantPosts = (page, type) => async (dispatch) => {
  const response = await api.get(
    `${API_URL}plants?plant_type=${type}&per_page=3&page=${page + 1}`
  )
  dispatch({
    type: types.GET_NONWOODY_PLANTS,
    payload: response.data,
  })
  dispatch({
    type: types.IS_LOADING,
    payload: false,
  })
}

export const fetchWoodyPlantPosts = (page, type) => async (dispatch) => {
  const response = await api.get(
    `${API_URL}plants?plant_type=${type}&per_page=3&page=${page + 1}`
  )
  dispatch({
    type: types.GET_WOODY_PLANTS,
    payload: response.data,
  })
  dispatch({
    type: types.IS_LOADING,
    payload: false,
  })
}

export const fetchPlantPost = (id) => async (dispatch) => {
  console.log(id)
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
  console.log(response)
  dispatch({
    type: types.GET_SEARCH_RESULTS,
    payload: response.data,
  })
}

export const getAllPlantsCount = () => async (dispatch) => {
  const response = await api.get(`${API_URL}plants`)
  dispatch({
    type: types.GET_ALL_PLANTS_COUNT,
    payload: response.data.length,
  })
}

export const getAllNonWoodyPlantsCount = (type) => async (dispatch) => {
  const response = await api.get(`${API_URL}plants?plant_type=${type}`)
  dispatch({
    type: types.GET_ALL_NONWOODY_PLANTS_COUNT,
    payload: response.data.length,
  })
}

export const getAllWoodyPlantsCount = (type) => async (dispatch) => {
  const response = await api.get(`${API_URL}plants?plant_type=${type}`)
  dispatch({
    type: types.GET_ALL_NONWOODY_PLANTS_COUNT,
    payload: response.data.length,
  })
}
