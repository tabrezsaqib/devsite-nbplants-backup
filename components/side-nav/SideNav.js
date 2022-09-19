import { useState, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import * as options from "../../data/sideNavListDataArray"
import * as localStore from "../../generics/localStore"
import SideNavContent from "./SideNavContent"

import {
  toggleHabitatData,
  toggleFlowerPetalColorData,
  toggleLeafBladeEdgesData,
  toggleLeafTypeData,
  toggleLeafArrangementData,
  toggleLipShape,
  toggleFruits,
  toggleInflorescence,
  toggleLeafShapeData,
  toggleNative,
  toggleStemsData,
  togglePetalSymmetry,
} from "../../redux/actions/toggleSelectorAction"
import {
  getPopoverData,
  triggerToolTip,
} from "../../redux/actions/getPlantsAction"
import {
  selectorFilterData,
  activeFilterData,
} from "../../redux/actions/selectorFilterAction"
import { resetPageCount } from "../../redux/actions/paginationAction"
const SideNav = ({
  habitat,
  flower_petal_colour,
  lip_shape,
  fruits,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
  new_brunswick_county,
  activeFilterList,
  native_or_introduced_or_invasive,
  leaf_shape,
  stems,
  petal_symmetry,
  inflorescence,
  isLoading,
  popoverData,
  popoverStatus,
}) => {
  const dispatch = useDispatch()
  const [activeFilter, setActiveFilter] = useState()

  useEffect(() => {
    setActiveFilter(localStore.getActiveFilter())
  }, [activeFilter])

  const handleOnChange = (position, option) => {
    switch (option) {
      case "habitat":
        const updatedHabitat = habitat.map((item, index) =>
          index === position ? !item : item
        )
        // dispatch(dispatch({ type: "TOGGLE_HABITAT", payload: updatedHabitat }))
        dispatch(toggleHabitatData(updatedHabitat))
        break
      case "flower_petal_colour":
        const updatedFlowerPetalColor = flower_petal_colour.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleFlowerPetalColorData(updatedFlowerPetalColor))
        break
      case "lip_shape":
        const updatedLipShape = lip_shape.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLipShape(updatedLipShape))
        break

      case "fruits":
        const updatedFruits = fruits.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleFruits(updatedFruits))
        break
      case "leaf_arrangement":
        const updatedLeafArrangement = leaf_arrangement.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafArrangementData(updatedLeafArrangement))
        break
      case "leaf_blade_edges":
        const updatedLeafBladeEdges = leaf_blade_edges.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafBladeEdgesData(updatedLeafBladeEdges))
        break
      case "leaf_shape":
        const updatedLeafShape = leaf_shape.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafShapeData(updatedLeafShape))
        break
      case "leaf_type":
        const updatedLeafType = leaf_type.map(
          (item, index) => (index === position ? !item : item) //if index === position then !item i.e. true, otherwise false, since initially item is false...
        )
        dispatch(toggleLeafTypeData(updatedLeafType))
        break
      // case "new_brunswick_county":
      //   const updatedCounty = new_brunswick_county.map((item, index) =>
      //     index === position ? !item : item
      //   )
      //   dispatch(toggleCountyData(updatedCounty))
      //   break

      case "stems":
        const updatedStems = stems.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleStemsData(updatedStems))
        break
      case "native_or_introduced_or_invasive":
        const updatedNative = native_or_introduced_or_invasive.map(
          (item, index) => (index === position ? !item : item)
        )
        dispatch(toggleNative(updatedNative))
        break
      case "petal_symmetry":
        const updatedPetalSymmetry = petal_symmetry.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(togglePetalSymmetry(updatedPetalSymmetry))
        break
      case "inflorescence":
        const updatedInflorescence = inflorescence.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleInflorescence(updatedInflorescence))
        break
      default:
        break
    }
  }

  const onSelectorChange = (filter) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
    if (activeFilterList.includes(filter)) {
      const filterIndex = activeFilterList.indexOf(filter)
      const newFilter = [...activeFilterList]
      newFilter.splice(filterIndex, 1) //Remove one element from the newFilter i.e array.splice(index, how many items)
      dispatch(selectorFilterData(filter))
      dispatch(activeFilterData(newFilter))
      dispatch(resetPageCount(true))
    } else {
      dispatch(selectorFilterData(filter))
      dispatch(activeFilterData([...activeFilterList, filter]))
      dispatch(resetPageCount(true))
    }
  }

  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <div className={isLoading == true ? "disable-sidebar" : "options"}>
        <SideNavContent
          options={options}
          habitat={habitat}
          flower_petal_colour={flower_petal_colour}
          lip_shape={lip_shape}
          leaf_blade_edges={leaf_blade_edges}
          fruits={fruits}
          leaf_type={leaf_type}
          leaf_arrangement={leaf_arrangement}
          new_brunswick_county={new_brunswick_county}
          native_or_introduced_or_invasive={native_or_introduced_or_invasive}
          leaf_shape={leaf_shape}
          stems={stems}
          petal_symmetry={petal_symmetry}
          inflorescence={inflorescence}
          onSelectorChange={onSelectorChange}
          handleOnChange={handleOnChange}
          popoverData={popoverData}
          getPopoverData={getPopoverData}
          triggerToolTip={triggerToolTip}
          popoverStatus={popoverStatus}
        />
      </div>
      <style jsx>{`
        .sidebar {
          background-color: #ffffff;
          border: 1px solid #e0e1e3;
          border-radius: 10px;
          padding: 10px 12px;
          margin-top: 15px;
          height: auto;
          margin-bottom: 25px;
          padding-bottom: 25px;
        }
        .disable-sidebar {
          filter: grayscale(100%);
          opacity: 0.4;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    habitat: state.selector.habitat,
    flower_petal_colour: state.selector.flower_petal_colour,
    fruits: state.selector.fruits,
    lip_shape: state.selector.lip_shape,
    leaf_blade_edges: state.selector.leaf_blade_edges,
    leaf_type: state.selector.leaf_type,
    leaf_arrangement: state.selector.leaf_arrangement,
    // new_brunswick_county: state.selector.new_brunswick_county,
    native_or_introduced_or_invasive:
      state.selector.native_or_introduced_or_invasive,
    leaf_shape: state.selector.leaf_shape,
    stems: state.selector.stems,
    petal_symmetry: state.selector.petal_symmetry,
    inflorescence: state.selector.inflorescence,
    activeFilterList: state.selector.activeFilterList,
    isLoading: state.post.isLoading,
    popoverData: state.post.popoverData,
    popoverStatus: state.post.popoverStatus,
  }
}

export default connect(mapStateToProps)(SideNav)
