import * as types from "../types"
import * as api from "../../generics/api"
const API_URL = process.env.API_URL
const SEARCH_URL = process.env.SEARCH_URL

export const fetchAllPlantPosts = () => async (dispatch) => {
  try {
    const response = await api.get(`${API_URL}plants_db`)
    dispatch({
      type: types.GET_ALL_PLANTS,
      payload: response.data,
    })
    dispatch({
      type: types.IS_LOADING,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: types.IS_ERROR,
    })
  }
}

export const setLoader = () => async (dispatch) => {
  dispatch({
    type: types.IS_LOADING,
    payload: true,
  })
}

export const fetchNonWoodyPlantPosts = (type) => async (dispatch) => {
  try {
    const response = await api.get(`${API_URL}plants_db?plant_type=${type}`)
    dispatch({
      type: types.GET_NONWOODY_PLANTS,
      payload: response.data,
    })
    dispatch({
      type: types.IS_LOADING,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: types.IS_ERROR,
    })
  }
}

export const fetchWoodyPlantPosts = (type) => async (dispatch) => {
  try {
    const response = await api.get(`${API_URL}plants_db?plant_type=${type}`)
    dispatch({
      type: types.GET_WOODY_PLANTS,
      payload: response.data,
    })
    dispatch({
      type: types.IS_LOADING,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: types.IS_ERROR,
    })
  }
}

export const fetchFernPosts = (type) => async (dispatch) => {
  try {
    const response = await api.get(`${API_URL}plants_db?plant_type=${type}`)
    dispatch({
      type: types.GET_FERNS_DATA,
      payload: response.data,
    })
    dispatch({
      type: types.IS_LOADING,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: types.IS_ERROR,
    })
  }
}

export const fetchGrassLikePosts = (type) => async (dispatch) => {
  try {
    const response = await api.get(`${API_URL}plants_db?plant_type=${type}`)
    dispatch({
      type: types.GET_GRASS_LIKE_PLANTS,
      payload: response.data,
    })
    dispatch({
      type: types.IS_LOADING,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: types.IS_ERROR,
    })
  }
}

export const fetchPlantPost = (id) => async (dispatch) => {
  try {
    const response = await api.get(`${API_URL}plants_db/${id}`)
    dispatch({
      type: types.GET_PLANT,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: types.IS_ERROR,
    })
  }
}

export const toggleLoader = (option) => async (dispatch) => {
  dispatch({
    type: types.IS_LOADING,
    payload: option,
  })
}

// export const searchPlantPosts = (slug) => async (dispatch) => {
//   const response = await api.get(`${API_URL}plants_db?common_name=${slug}`)
//   const new_response = await api.get(`${API_URL}plants_db?search=${slug}`)

//   console.log()
//   if (response.data.length !== 0) {
//     dispatch({
//       type: types.GET_SEARCH_RESULTS,
//       payload: response.data,
//     })
//   }
//   if (new_response.data.length !== 0) {
//     dispatch({
//       type: types.GET_SEARCH_RESULTS,
//       payload: new_response.data,
//     })
//   }
// }

export const getPopoverData = (key) => async (dispatch) => {
  const response = await api.get(`${API_URL}glossaries/${key}`)
  dispatch({
    type: types.GET_POPOVER_DATA,
    payload: response.data,
  })
}

export const triggerToolTip = (status) => async (dispatch) => {
  dispatch({
    type: types.TRIGGER_TOOLTIP_POPUP,
    payload: status,
  })
}

export const setPlantFamilyDetails = (data) => async (dispatch) => {
  dispatch({
    type: types.PLANT_FAMILY_DETAILS,
    payload: data,
  })
}

export const setFilteredPlantList = (data) => async (dispatch) => {
  dispatch({
    type: types.FILTERED_PLANT_LIST,
    payload: data,
  })
}

export const searchByKeyword = (slug) => async (dispatch) => {
  const response = await api.get(`${API_URL}plants_db_search?plant_type=${slug}`);
  /// const filtered = response.data.filter((res) => res.acf.plantsnb_id === char.replace(/\s+/g, ""))
  // const filteredRes = response.data.filter((data) => data.acf.common_name && (data.acf.family_english.indexOf(slug) !== -1))
  try {
    if (response == null) {
      dispatch({
        type: types.GET_SEARCH_RESULTS,
        payload: response.data,
      })
    } else {
      let sorted = response.data.sort((a, b) => a.acf.latin.localeCompare(b.acf.latin))
      dispatch({
        type: types.GET_SEARCH_RESULTS,
        payload: sorted,
      })
    }
  } catch (error) {
    dispatch({
      type: types.IS_ERROR_SEARCH,
    })
  }
}
export const setSearchPagination = (data) => async (dispatch) => {
  dispatch({
    type: types.SEARCH_PAGINATION,
    payload: data,
  })
}
export const setConservationPagination = (data) => async (dispatch) => {
  dispatch({
    type: types.CONSERVATION_PAGINATION,
    payload: data,
  })
}
export const setPlantsPagination = (data) => async (dispatch) => {
  dispatch({
    type: types.PLANTS_PAGINATION,
    payload: data,
  })
}

// export const getAllPlantsCount = () => async (dispatch) => {
//   const response = await api.get(`${API_URL}plants_db`)
//   console.log(response)
//   dispatch({
//     type: types.GET_ALL_PLANTS_COUNT,
//     payload: response.headers["x-wp-total"],
//   })
// }

// export const getAllNonWoodyPlantsCount = (type) => async (dispatch) => {
//   const response = await api.get(`${API_URL}plants?plant_type=${type}`)
//   dispatch({
//     type: types.GET_ALL_NONWOODY_PLANTS_COUNT,
//     payload: response.data.length,
//   })
// }

// export const getAllWoodyPlantsCount = (type) => async (dispatch) => {
//   const response = await api.get(`${API_URL}plants?plant_type=${type}`)
//   dispatch({
//     type: types.GET_ALL_NONWOODY_PLANTS_COUNT,
//     payload: response.data.length,
//   })
// }