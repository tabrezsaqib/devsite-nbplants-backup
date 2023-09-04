import { useState, useEffect, useRef } from "react"
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import ReactPaginate from "react-paginate"
import * as localStore from "../../generics/localStore"
import {
  fetchAllPlantPosts,
  fetchNonWoodyPlantPosts,
  fetchWoodyPlantPosts,
  fetchFernPosts,
  fetchGrassLikePosts,
  getAllPlantsCount,
  getAllNonWoodyPlantsCount,
  getAllWoodyPlantsCount,
  getPopoverData,
} from "../../redux/actions/getPlantsAction"
import {
  setItemOffset,
  setPageCount,
} from "../../redux/actions/paginationAction"
import { resetPageCount } from "../../redux/actions/paginationAction"
import ListPlantSpecies from "../main/ListPlantSpecies"
import SideNav from "../side-nav/SideNav"
import * as options from "../../data/sideNavListDataArray"
import styles from "../../styles/Global.module.scss"

const Plants = ({
  all_plants,
  nonwoody_plants,
  woody_plants,
  ferns,
  grass_like_plants,
  isLoading,
  itemsPerPage,
  activeFilterList,
  itemOffset,
  pageCount,
  toggle_pagination,
  // all_plants_count,
  // woody_plants_count,
  // nonwoody_plants_count,
  resetCount,
}) => {
  const dispatch = useDispatch()

  const [sidebarVisibility, setSidebarVisibility] = useState(false)

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([])
  const [currentPage, setCurrentPage] = useState(false)

  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  const router = useRouter()
  let filteredList = useRef(new Array())
  let currentSelectedPage = useRef(0)

  //Sidebar Selector filtering
  const filterPlantsTypeData = (plant_data) => {
    try {
      if (activeFilterList.length === 0) {
        return (filteredList.current = plant_data)
      } else {
        const filterKeys = Object.keys(options)
        return (filteredList.current = plant_data.filter((item) => {
          return activeFilterList.every(function (element) {
            return filterKeys.some((key) => {
              if (key == "plant_type" || key == "type") {
                return item.acf[key].includes(element)
              }

              return item.acf.characteristics[key].includes(element)
            })
          })
        }))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const paginationEngine = () => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(filteredList.current.slice(itemOffset, endOffset))
    dispatch(
      setPageCount(Math.ceil(filteredList.current.length / itemsPerPage))
    )
    const newOffset =
      (resetCount == true
        ? 0
        : currentPage == true && currentSelectedPage.current * itemsPerPage) %
      filteredList.current.length

    dispatch(setItemOffset(newOffset))
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
    setCurrentPage(true)
    dispatch(resetPageCount(false))
    currentSelectedPage.current = event.selected
    localStore.setCurrentPage(event.selected)
    const newOffset =
      (event.selected * itemsPerPage) % filteredList.current.length
    dispatch(setItemOffset(newOffset))
  }

  useEffect(() => {
    if (router.query.type == "all") {
      dispatch(fetchAllPlantPosts(router.query.type))

      filterPlantsTypeData(all_plants)
      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())
      const newOffset =
        (resetCount == true ? 0 : currentPageNumber * itemsPerPage) %
        filteredList.current.length
      dispatch(setItemOffset(newOffset))
    }
    if (router.query.type == "Woody") {
      dispatch(fetchWoodyPlantPosts(router.query.type))
      filterPlantsTypeData(woody_plants)
      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())
      const newOffset =
        (resetCount == true ? 0 : currentPageNumber * itemsPerPage) %
        filteredList.current.length
      dispatch(setItemOffset(newOffset))
    }

    if (router.query.type == "Non-woody") {
      dispatch(fetchNonWoodyPlantPosts(router.query.type))
      filterPlantsTypeData(nonwoody_plants)
      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())

      const newOffset =
        (resetCount == true ? 0 : currentPageNumber * itemsPerPage) %
        filteredList.current.length
      dispatch(setItemOffset(newOffset))
    }

    if (router.query.type == "Fern") {
      dispatch(fetchFernPosts(router.query.type))
      filterPlantsTypeData(ferns)
      paginationEngine()
      let localStoreValue = localStore.getCurrentPage()
      localStoreValue && setCurrentPageNumber(localStore.getCurrentPage())

      const newOffset =
        (resetCount == true ? 0 : currentPageNumber * itemsPerPage) %
        filteredList.current.length
      dispatch(setItemOffset(newOffset))
    }
  }, [
    dispatch,
    itemOffset,
    itemsPerPage,
    isLoading,
    router,
    activeFilterList,
    localStore,
    currentPageNumber,
    currentPage,
    // pageClick,
    // all_plants_count,
    // woody_plants_count,
    // nonwoody_plants_count,
    resetCount,
  ])

  const toggleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility)
  }

  const dropDownValues = [20, 50, 100]

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value)
    itemsPerPage = newItemsPerPage
    paginationEngine(itemsPerPage)
  }

  return (
    <div className="row">
      <div className="col-lg-3 col-sm-12">
        <div className={styles.sidebar_view_media}>
          <a
            className="d-flex back-arrow"
            onClick={() => toggleSidebarVisibility()}>
            <h4>
              <i
                className={
                  !sidebarVisibility
                    ? "bi bi-toggle-off align-self-center"
                    : "bi bi-toggle-on"
                }></i>
              <span>&nbsp;View Filters</span>
            </h4>
          </a>
          <div className={!sidebarVisibility && styles.toggle_sidebar_view}>
            <SideNav />
          </div>
        </div>
      </div>
      <div
        className={
          filteredList.current.length == 0
            ? [styles.error_bg_media_query, "error-bg col-lg-9"].join(" ")
            : "col-lg-9 col-sm-12"
        }>
        {/* <h4>Non Woody Plants..</h4> */}
        <div className="grid-container">
          {isLoading === true ? ""
          : 
          <div 
        // className="d-flex flex-row justify-content-center align-items-center align-self-center"
        
        >
              <span className="itemsLabel">Content Per Page:</span>
              <select 
              className="displayDropdown"
              onChange={handleItemsPerPageChange}>
                {dropDownValues.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
          </div>
          }
          <ListPlantSpecies filteredList={currentItems} isLoading={isLoading} />
            <ReactPaginate
              className={toggle_pagination === true ? "hide" : ""}
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              forcePage={resetCount == true ? 0 : currentPageNumber - 0}
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
      <style jsx>{`
        .hide {
          display: none;
        }
        .error-bg {
          background-color: #ffffff;
          margin-top: 16px;
          margin-bottom: 27px;
          border: 1px solid #e0e1e3;
          border-radius: 15px;
        }
        .itemsLabel{
          color: #333333;
          background: #ffffff;
          margin: 0px 0px 0px 0px;
          padding: 6px 12px;
        }
        .displayDropDown{
          color: #333333;
          background: #ffffff;
          margin: 0px 0px 0px 0px;
          padding: 6px 12px;
          fontSize: 16px;
          border: 1px solid #dee2e6;
          borderRadius: 0.25rem;
          option:hover::after{
            background: #1D9D47;
            color: #ffffff;
          }
          option:hover{
            cursor:pointer;
          }
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    all_plants: state.post.all_plants,
    woody_plants: state.post.woody_plants,
    nonwoody_plants: state.post.nonwoody_plants,
    ferns: state.post.ferns,
    grass_like_plants: state.post.grass_like_plants,
    isLoading: state.post.isLoading,
    activeFilterList: state.selector.activeFilterList,
    itemOffset: state.pagination.itemOffset,
    pageCount: state.pagination.pageCount,
    toggle_pagination: state.pagination.toggle_pagination,
    // all_plants_count: state.post.all_plants_count,
    // nonwoody_plants_count: state.post.nonwoody_plants_count,
    // woody_plants_count: state.post.woody_plants_count,
    resetCount: state.pagination.resetCount,
    popoverData: state.post.popoverData,
  }
}

export default connect(mapStateToProps)(Plants)
