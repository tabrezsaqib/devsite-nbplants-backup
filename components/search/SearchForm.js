import { useDispatch } from "react-redux"
import Router from "next/router"
import {
  fetchPlantPost,
  searchPlantPosts,
} from "../../redux/actions/getPlantsAction"
import SearchFormValidate from "./SearchFormValidate"

const SearchForm = () => {
  const dispatch = useDispatch()
  const submitSearchQuery = (value) => {
    Router.push({
      pathname: "/search",
      query: { keyword: value },
    }).then(() => {
      Router.reload()
      dispatch(searchPlantPosts(value))
    })

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
