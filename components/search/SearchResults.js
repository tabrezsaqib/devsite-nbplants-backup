/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { searchPlantPosts } from "../../redux/actions/getPlantsAction"
import SeachItem from "./SeachItem"

const SearchResults = ({ search_results, plants_list }) => {
  const [hasSearchKeyword, setHasSearchKeyWord] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (!router.isReady) return
    if (router.query.keyword) {
      setLoading(false)
      setHasSearchKeyWord(true)
      dispatch(searchPlantPosts(router.query.keyword))
    }
    setLoading(false)
  }, [dispatch, router.isReady, router.query.keyword])

  return (
    <>
      <span className="breadcrumb">
        {hasSearchKeyword
          ? `${search_results.length} results found for ${router.query.keyword}`
          : `${plants_list.length} results found`}
      </span>
      <div
        className={
          isLoading
            ? "d-flex justify-content-center flex-wrap"
            : "d-flex flex-wrap"
        }>
        {isLoading ? (
          <div className="d-flex align-items-center img-container">
            <img src="../../images/loading.gif" alt="loader" />
          </div>
        ) : search_results.length > 0 && hasSearchKeyword == true ? (
          search_results.map((plant, index) => (
            <div key={index}>
              <Link
                href={{
                  pathname: `/plants/${plant.id}`,
                  query: { type: plant.acf.plant_type },
                }}>
                <a>
                  <SeachItem plant={plant} />
                </a>
              </Link>
            </div>
          ))
        ) : (
          plants_list.length > 0 &&
          hasSearchKeyword == false &&
          plants_list.map((plant, index) => (
            <div key={index}>
              <Link
                href={{
                  pathname: `/plants/${plant.id}`,
                  query: { type: plant.acf.plant_type },
                }}>
                <a>
                  <SeachItem plant={plant} />
                </a>
              </Link>
            </div>
          ))
        )}
        <style jsx>{`
          .img-container {
            padding-top: 20%;
            padding-bottom: 20%;
            img {
              width: 80px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    search_results: state.post.search_results,
  }
}
export default connect(mapStateToProps)(SearchResults)
