import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import {
  fetchPlantPosts,
  searchPlantPosts,
} from "../../redux/actions/getPlantsAction"
import SearchFormValidate from "./SearchFormValidate"

const SearchForm = () => {
  const dispatch = useDispatch()
  const submitSearchQuery = (value) => {
    dispatch(searchPlantPosts(value))
    dispatch(fetchPlantPosts)
  }
  return (
    <div>
      <SearchFormValidate
        submitSearchQuery={submitSearchQuery}
        fetchPlantPosts={fetchPlantPosts}
      />
    </div>
  )
}

export default SearchForm
