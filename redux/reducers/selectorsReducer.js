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
  // new_brunswick_county: new Array(options.new_brunswick_county.length).fill(
  //   false
  // ),
  native_or_introduced_or_invasive: new Array(
    options.native_or_introduced_or_invasive.length
  ).fill(false),
  leaf_shape: new Array(options.leaf_shape.length).fill(false),
  stems: new Array(options.stems.length).fill(false),
  petal_symmetry: new Array(options.petal_symmetry.length).fill(false),
  inflorescence: new Array(options.inflorescence.length).fill(false),
  selectorFilter: "none",
  activeFilterList: [],
  activeFilter: false,
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
    // case types.TOGGLE_COUNTY:
    //   return {
    //     ...state,
    //     new_brunswick_county: action.payload,
    //   }
    case types.TOGGLE_INFLORESCENCE:
      return {
        ...state,
        inflorescence: action.payload,
      }
    case types.TOGGLE_NATIVE:
      return {
        ...state,
        native_or_introduced_or_invasive: action.payload,
      }
    case types.TOGGLE_STEMS:
      return {
        ...state,
        stems: action.payload,
      }
    case types.TOGGLE_SHAPE:
      return {
        ...state,
        leaf_shape: action.payload,
      }
    case types.TOGGLE_PETAL_SYMMETRY:
      return {
        ...state,
        petal_symmetry: action.payload,
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
