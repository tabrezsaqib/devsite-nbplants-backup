import * as types from "../types"
import * as options from "../../data/sideNavListDataArray"

const initialState = {
  habitat: new Array(options.habitat.length).fill(false),
  flower_petal_colour: new Array(options.flower_petal_colour.length).fill(
    false
  ),
  leaf_blade_edges: new Array(options.leaf_blade_edges.length).fill(false),
  leaf_type: new Array(options.leaf_type.length).fill(false),
  leaf_arrangement: new Array(options.leaf_arrangement.length).fill(false),
  new_brunswick_county: new Array(options.new_brunswick_county.length).fill(
    false
  ),
  selectorFilter: "none",
  activeFilterList: [],
}

export const selectorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_HABITAT:
      return {
        ...state,
        habitat: action.payload,
      }
    case types.TOGGLE_FLOWER_PETAL_COLOR:
      return {
        ...state,
        flower_petal_colour: action.payload,
      }
    case types.TOGGLE_LEAF_BLADE_EDGES:
      return {
        ...state,
        leaf_blade_edges: action.payload,
      }
    case types.TOGGLE_LEAF_TYPE:
      return {
        ...state,
        leaf_type: action.payload,
      }
    case types.TOGGLE_LEAF_ARRANGEMENT:
      return {
        ...state,
        leaf_arrangement: action.payload,
      }
    case types.TOGGLE_COUNTY:
      return {
        ...state,
        new_brunswick_county: action.payload,
      }
    case types.ACTIVE_SELECTOR_LIST:
      return {
        ...state,
        activeFilterList: action.payload,
      }
    case types.SELECTOR_FILTER:
      return {
        ...state,
        selectorFilter: action.payload,
      }
    default:
      return state
  }
}
