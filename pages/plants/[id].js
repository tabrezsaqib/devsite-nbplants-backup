import { useEffect } from "react"
import { useRouter } from "next/router"
import { connect, useDispatch } from "react-redux"
import { fetchPlantPost } from "../../redux/actions/getPlantsAction"
import PlantSpeciesDetails from "../../components/main/PlantSpeciesDetails"

const PlantsDetails = ({ plant_details }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) return
    dispatch(fetchPlantPost(router.query["id"]))
  }, [dispatch, router.isReady, router.query])

  return (
    <div>
      <PlantSpeciesDetails plant_details={plant_details} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    plant_details: state.post.plant_details,
  }
}

export default connect(mapStateToProps)(PlantsDetails)
