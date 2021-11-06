import { useState, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import ReactPaginate from "react-paginate"
import {
  fetchPlantPosts,
  toggleLoader,
} from "../../redux/actions/getPlantsAction"
import ListPlantSpecies from "../main/ListPlantSpecies"
import SideNav from "../side-nav/SideNav"
import * as options from "../../data/sideNavListDataArray"

const Plants = ({
  plants_list,
  isLoading,
  itemsPerPage,
  activeFilterList,
  habitat,
  flower_petal_colour,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
}) => {
  const dispatch = useDispatch()

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  let filteredList
  const router = useRouter()
  if (activeFilterList.length === 0) {
    filteredList = plants_list
  } else {
    const filterKeys = Object.keys(options)
    filteredList = plants_list.filter((item) => {
      if (
        router.query.type == item.acf.plant_type ||
        router.query.type == "all"
      ) {
        return filterKeys.some((key) => {
          return item.acf.characteristics[key].some((element) => {
            return activeFilterList.includes(element)
          })
        })
      }
    })
  }
  useEffect(() => {
    // Fetch items from another resources.
    dispatch(fetchPlantPosts()).then(() => {
      dispatch(toggleLoader(false))
    })
    paginationEngine()
  }, [
    dispatch,
    itemOffset,
    itemsPerPage,
    isLoading,
    habitat,
    flower_petal_colour,
    leaf_blade_edges,
    leaf_type,
    leaf_arrangement,
  ])

  const paginationEngine = () => {
    const endOffset = itemOffset + itemsPerPage
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(filteredList.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(filteredList.length / itemsPerPage))
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredList.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // )
    setItemOffset(newOffset)
  }

  console.log("Active list", activeFilterList)
  console.log("Filter list", filteredList)
  return (
    <div className="row">
      <div className="col-2">
        <SideNav />
      </div>
      <div className="col-10">
        {/* <h4>Non Woody Plants..</h4> */}
        <div className="grid-container">
          <ListPlantSpecies filteredList={currentItems} isLoading={isLoading} />
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    plants_list: state.post.plants_list,
    isLoading: state.post.isLoading,
    activeFilterList: state.selector.activeFilterList,
    habitat: state.selector.habitat,
    flower_petal_colour: state.selector.flower_petal_colour,
    leaf_blade_edges: state.selector.leaf_blade_edges,
    leaf_type: state.selector.leaf_type,
    leaf_arrangement: state.selector.leaf_arrangement,
  }
}

export default connect(mapStateToProps)(Plants)
