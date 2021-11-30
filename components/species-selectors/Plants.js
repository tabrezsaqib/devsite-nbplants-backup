import { useState, useEffect, useRef } from "react"
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import ReactPaginate from "react-paginate"
import * as localStore from "../../generics/localStore"
import {
  fetchAllPlantPosts,
  fetchNonWoodyPlantPosts,
  fetchWoodyPlantPosts,
  getAllPlantsCount,
  getAllNonWoodyPlantsCount,
  getAllWoodyPlantsCount,
} from "../../redux/actions/getPlantsAction"
import {
  setItemOffset,
  setPageCount,
} from "../../redux/actions/paginationAction"
import { resetPageCount } from "../../redux/actions/paginationAction"
import ListPlantSpecies from "../main/ListPlantSpecies"
import SideNav from "../side-nav/SideNav"
import * as options from "../../data/sideNavListDataArray"

const Plants = ({
  all_plants,
  nonwoody_plants,
  woody_plants,
  isLoading,
  itemsPerPage,
  activeFilterList,
  habitat,
  flower_petal_colour,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
  itemOffset,
  pageCount,
  resetCount,
  all_plants_count,
  woody_plants_count,
  nonwoody_plants_count,
}) => {
  const dispatch = useDispatch()

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([])
  const [currentPage, setCurrentPage] = useState(false)
  const [pageClick, setPageClick] = useState(false)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  // const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0)

  const router = useRouter()
  let filteredList = useRef(new Array())
  let currentSelectedPage = useRef(0)

  const filterPlantsTypeData = (plant_data) => {
    if (activeFilterList.length === 0) {
      return (filteredList.current = plant_data)
    } else {
      const filterKeys = Object.keys(options)
      return (filteredList.current = plant_data.filter((item) => {
        return filterKeys.some((key) => {
          return item.acf.characteristics[key].some((element) => {
            return activeFilterList.includes(element)
          })
        })
      }))
    }
  }

  const paginationEngine = () => {
    console.log("Filtered items: ", filteredList.current)
    const endOffset = itemOffset + itemsPerPage
    // setCurrentItems(filteredList.current.slice(itemOffset, endOffset))
    setCurrentItems(filteredList.current)
    dispatch(
      setPageCount(
        Math.ceil(
          (nonwoody_plants_count || all_plants_count || woody_plants_count) /
            itemsPerPage
        )
      )
    )
    const newOffset =
      (resetCount == true
        ? 0
        : currentPage == true && currentSelectedPage.current * itemsPerPage) %
      (nonwoody_plants_count || all_plants_count || woody_plants_count)
    dispatch(setItemOffset(newOffset))
  }

  // Invoke when user click to request another page.
  const handlePageClick = async (event) => {
    setCurrentPage(true)
    setPageClick(true)
    dispatch(resetPageCount(false))
    await fetchPlantsData(event.selected)

    currentSelectedPage.current = event.selected
    localStore.setCurrentPage(event.selected)
    const newOffset =
      (event.selected * itemsPerPage) %
      (nonwoody_plants_count || all_plants_count || woody_plants_count)
    dispatch(setItemOffset(newOffset))
  }

  const fetchPlantsData = async (page) => {
    if (router.query.type == "all") {
      await dispatch(fetchAllPlantPosts(page))
      await filterPlantsTypeData(all_plants)
      await paginationEngine()
    }

    if (router.query.type == "woody") {
      await dispatch(fetchWoodyPlantPosts(page, router.query.type))
      await filterPlantsTypeData(woody_plants)
      await paginationEngine()
    }
    if (router.query.type == "non-woody") {
      await dispatch(fetchNonWoodyPlantPosts(page, router.query.type))
      await filterPlantsTypeData(nonwoody_plants)
      await paginationEngine()
    }
  }
  useEffect(() => {
    let plants
    if (router.query.type == "all") {
      if (pageClick == false) {
        dispatch(
          fetchAllPlantPosts(
            parseInt(
              localStore.getCurrentPage() == undefined
                ? 0
                : localStore.getCurrentPage()
            )
          )
        )
      }

      filterPlantsTypeData(all_plants)
      dispatch(getAllPlantsCount())

      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())
      const newOffset = (currentPageNumber * itemsPerPage) % all_plants_count
      dispatch(setItemOffset(newOffset))
    }
    if (router.query.type == "woody") {
      if (pageClick == false) {
        // dispatch(fetchAllPlantPosts(parseInt(currentPageNumber)))
        dispatch(
          fetchWoodyPlantPosts(
            parseInt(
              localStore.getCurrentPage() == undefined
                ? 0
                : localStore.getCurrentPage()
            ),
            router.query.type
          )
        )
      }

      filterPlantsTypeData(woody_plants)
      dispatch(getAllWoodyPlantsCount(router.query.type))
      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())
      const newOffset =
        (currentPageNumber * itemsPerPage) %
        // filteredList.current.length
        woody_plants_count
      dispatch(setItemOffset(newOffset))
    }

    if (router.query.type == "non-woody") {
      if (pageClick == false) {
        // dispatch(fetchAllPlantPosts(parseInt(currentPageNumber)))
        dispatch(
          fetchNonWoodyPlantPosts(
            parseInt(
              localStore.getCurrentPage() == undefined
                ? 0
                : localStore.getCurrentPage()
            ),
            router.query.type
          )
        )
      }
      filterPlantsTypeData(nonwoody_plants)
      dispatch(getAllNonWoodyPlantsCount(router.query.type))
      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())

      const newOffset =
        (currentPageNumber * itemsPerPage) %
        // filteredList.current.length
        nonwoody_plants_count
      dispatch(setItemOffset(newOffset))
    }
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
    router,
    activeFilterList,
    localStore,
    currentPageNumber,
    currentPage,
    pageClick,
    resetCount,
    all_plants_count,
    woody_plants_count,
    nonwoody_plants_count,
  ])
  // console.log("Active list", activeFilterList)
  // console.log("Filter list", filteredList.current)
  console.log("Non woody plants outside: ", nonwoody_plants_count)

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
            forcePage={currentPageNumber - 0}
            // forcePage={currentPageNumber - 0}
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
    all_plants: state.post.all_plants,
    woody_plants: state.post.woody_plants,
    nonwoody_plants: state.post.nonwoody_plants,
    isLoading: state.post.isLoading,
    activeFilterList: state.selector.activeFilterList,
    habitat: state.selector.habitat,
    flower_petal_colour: state.selector.flower_petal_colour,
    leaf_blade_edges: state.selector.leaf_blade_edges,
    leaf_type: state.selector.leaf_type,
    leaf_arrangement: state.selector.leaf_arrangement,
    itemOffset: state.pagination.itemOffset,
    pageCount: state.pagination.pageCount,
    resetCount: state.pagination.resetCount,
    all_plants_count: state.post.all_plants_count,
    nonwoody_plants_count: state.post.nonwoody_plants_count,
    woody_plants_count: state.post.woody_plants_count,
  }
}

export default connect(mapStateToProps)(Plants)
