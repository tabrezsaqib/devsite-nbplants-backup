import { useState, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import * as options from "../../data/sideNavListDataArray"
import SideNavContent from "./SideNavContent"

import {
  toggleHabitatData,
  toggleFlowerPetalColorData,
  toggleLeafBladeEdgesData,
  toggleLeafTypeData,
  toggleLeafArrangementData,
  toggleCountyData,
} from "../../redux/actions/toggleSelectorAction"

import {
  selectorFilterData,
  activeFilterData,
} from "../../redux/actions/selectorFilterAction"

const SideNav = ({
  habitat,
  flower_petal_colour,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
  new_brunswick_county,
  activeFilterList,
}) => {
  const dispatch = useDispatch()

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

      case "leaf_blade_edges":
        const updatedLeafBladeEdges = leaf_blade_edges.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafBladeEdgesData(updatedLeafBladeEdges))
        break
      case "leaf_type":
        const updatedLeafType = leaf_type.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafTypeData(updatedLeafType))
        break
      case "leaf_arrangement":
        const updatedLeafArrangement = leaf_arrangement.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafArrangementData(updatedLeafArrangement))
        break
      case "new_brunswick_county":
        const updatedCounty = new_brunswick_county.map(
          (item, index) => (index === position ? !item : item) //if index === position then !item i.e. true, otherwise false, since initially item is false...
        )
        dispatch(toggleCountyData(updatedCounty))
        break

      default:
        break
    }
  }

  const onSelectorChange = (filter) => {
    if (activeFilterList.includes(filter)) {
      const filterIndex = activeFilterList.indexOf(filter)
      const newFilter = [...activeFilterList]
      newFilter.splice(filterIndex, 1) //Remove one element from the newFilter i.e array.splice(index, how many items)
      dispatch(selectorFilterData(filter))
      dispatch(activeFilterData(newFilter))
    } else {
      dispatch(selectorFilterData(filter))
      dispatch(activeFilterData([...activeFilterList, filter]))
    }
  }
  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      {/* <div className="options">
        <h4 className="side-nav-heading">Plant Species: </h4>
        <span>Non-Woody</span>
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Native Range</h4>
        <span>New Brunswick</span>
      </div> */}
      {/* {console.log(habitat)}
      {console.log(flowerPetalColor)}
      {console.log(leafBladeEdges)}
      {console.log(leafType)}
      {console.log(leafArrangement)}
      {console.log(county)} */}
      {/* {console.log(selectorFilter)}
      {console.log(filterChecked)} */}
      <div className="options">
        <SideNavContent
          options={options}
          habitat={habitat}
          flower_petal_colour={flower_petal_colour}
          leaf_blade_edges={leaf_blade_edges}
          leaf_type={leaf_type}
          leaf_arrangement={leaf_arrangement}
          new_brunswick_county={new_brunswick_county}
          onSelectorChange={onSelectorChange}
          handleOnChange={handleOnChange}
        />
      </div>
      <style jsx>{`
        .sidebar {
          background-color: #f5f6f8;
          border-radius: 10px;
          border: 1px solid #e0e1e3;
          padding: 10px 17px;
          margin-top: 25px;
          height: auto;
          margin-bottom: 25px;
          padding-bottom: 25px;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    habitat: state.selector.habitat,
    flower_petal_colour: state.selector.flower_petal_colour,
    leaf_blade_edges: state.selector.leaf_blade_edges,
    leaf_type: state.selector.leaf_type,
    leaf_arrangement: state.selector.leaf_arrangement,
    new_brunswick_county: state.selector.new_brunswick_county,
    activeFilterList: state.selector.activeFilterList,
  }
}

export default connect(mapStateToProps)(SideNav)
