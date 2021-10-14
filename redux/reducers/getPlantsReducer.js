import * as types from "../types"
const initialState = {
  plants_list: [],
  plant_details: [],
  search_results: [],
  isLoading: true,
}
export const getPlantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLANTS:
      return {
        ...state,
        plants_list: action.payload,
      }
    case types.GET_PLANT:
      return {
        ...state,
        plant_details: action.payload,
      }
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case types.GET_SEARCH_RESULTS:
      return {
        ...state,
        search_results: action.payload,
      }
    default:
      return state
  }
}
