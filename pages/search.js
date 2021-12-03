const API_URL = process.env.API_URL
import SearchResults from "../components/search/SearchResults"

const search = ({ plants }) => {
  return (
    <div className="pt-4">
      <SearchResults itemsPerPage={1} search_bar_active={true} />
    </div>
  )
}

export default search
export async function getStaticProps() {
  const res = await fetch(`https://jsonkeeper.com/b/VTOT`)
  const results = await res.json()
  return {
    props: {
      plants: results,
    },
    revalidate: 1,
  }
}
