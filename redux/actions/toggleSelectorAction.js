import * as types from "../types"
import * as localStore from "../../generics/localStore"

export const toggleHabitatData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_HABITAT,
    payload: option,
  })
}
export const toggleFlowerPetalColorData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_FLOWER_PETAL_COLOR,
    payload: option,
  })
}
export const toggleLeafBladeEdgesData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_LEAF_BLADE_EDGES,
    payload: option,
  })
}
export const toggleLeafTypeData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_LEAF_TYPE,
    payload: option,
  })
}
export const toggleLeafArrangementData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_LEAF_ARRANGEMENT,
    payload: option,
  })
}
// export const toggleCountyData = (option) => async (dispatch) => {
//   dispatch({
//     type: types.TOGGLE_COUNTY,
//     payload: option,
//   })
// }

export const toggleInflorescence = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_INFLORESCENCE,
    payload: option,
  })
}
export const toggleLeafShapeData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_SHAPE,
    payload: option,
  })
}
export const toggleNative = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_NATIVE,
    payload: option,
  })
}
export const toggleStemsData = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_STEMS,
    payload: option,
  })
}
export const togglePetalSymmetry = (option) => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_PETAL_SYMMETRY,
    payload: option,
  })
}
