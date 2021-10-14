import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import {
  fetchPlantPosts,
  toggleLoader,
} from "../../redux/actions/getPlantsAction"
import ListPlantSpecies from "../main/ListPlantSpecies"
import SideNav from "../side-nav/SideNav"

const Plants = ({ plants_list, isLoading }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlantPosts()).then(() => {
      dispatch(toggleLoader(false))
    })
  }, [dispatch])

  return (
    <div className="row">
      <div className="col-lg-3">
        <SideNav />
      </div>
      <div className="col-lg-9">
        {/* <h4>Non Woody Plants..</h4> */}
        <div className="grid-container">
          <ListPlantSpecies plants_list={plants_list} isLoading={isLoading} />
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
