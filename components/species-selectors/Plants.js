import { useState, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import ReactPaginate from "react-paginate"
import {
  fetchPlantPosts,
  toggleLoader,
} from "../../redux/actions/getPlantsAction"
import ListPlantSpecies from "../main/ListPlantSpecies"
import SideNav from "../side-nav/SideNav"

const Plants = ({ plants_list, isLoading, itemsPerPage }) => {
  const dispatch = useDispatch()
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(plants_list.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(plants_list.length / itemsPerPage))

    dispatch(fetchPlantPosts()).then(() => {
      dispatch(toggleLoader(false))
    })
  }, [dispatch, itemOffset, itemsPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % plants_list.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }
  console.log("Current Items: ", currentItems)
  console.log("Plant List: ", plants_list)
  return (
    <div className="row">
      <div className="col-2">
        <SideNav />
      </div>
      <div className="col-10">
        {/* <h4>Non Woody Plants..</h4> */}
        <div className="grid-container">
          <ListPlantSpecies plants_list={currentItems} isLoading={isLoading} />
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
  }
}

export default connect(mapStateToProps)(Plants)
