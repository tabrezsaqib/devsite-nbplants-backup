const API_URL = process.env.API_URL
import SearchResults from "../components/search/SearchResults"

const search = () => {
  return (
    <div className="pt-4">
      <SearchResults itemsPerPage={10} />
    </div>
  )
}

export default search
