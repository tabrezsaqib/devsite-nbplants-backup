import { useDispatch } from "react-redux"
import {
  fetchPlantPost,
  searchPlantPosts,
} from "../../redux/actions/getPlantsAction"
import SearchFormValidate from "./SearchFormValidate"

const SearchForm = () => {
  const dispatch = useDispatch()
  const submitSearchQuery = (value) => {
    dispatch(searchPlantPosts(value))
    // dispatch(fetchPlantPost)
  }
  return (
    <div>
      <SearchFormValidate
        submitSearchQuery={submitSearchQuery}
        // fetchPlantPosts={fetchPlantPost}
      />
    </div>
  )
}

export default SearchForm
