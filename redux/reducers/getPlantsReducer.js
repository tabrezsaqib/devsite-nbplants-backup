import * as types from "../types"
const initialState = {
  all_plants: [],
  woody_plants: [],
  nonwoody_plants: [],
  plant_details: [],
  search_results: [],
  isLoading: true,
}
export const getPlantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PLANTS:
      return {
        ...state,
        all_plants: action.payload,
      }
    case types.GET_NONWOODY_PLANTS:
      return {
        ...state,
        nonwoody_plants: action.payload,
      }
    case types.GET_WOODY_PLANTS:
      return {
        ...state,
        woody_plants: action.payload,
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
