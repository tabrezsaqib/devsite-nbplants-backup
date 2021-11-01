/* eslint-disable @next/next/no-img-element */
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Link from "next/link"
import PlantSpecies from "./PlantSpecies"
import * as options from "../../data/sideNavListDataArray"

const ListPlantSpecies = ({ plants_list, activeFilterList, isLoading }) => {
  let filteredList
  const router = useRouter()
  if (activeFilterList.length === 0) {
    filteredList = plants_list
  } else {
    const filterKeys = Object.keys(options)
    filteredList = plants_list.filter((item) => {
      if (router.query.type == item.acf.plant_type) {
        console.log("Inside")
        return filterKeys.some((key) => {
          return item.acf.characteristics[key].some((element) => {
            return activeFilterList.includes(element)
          })
        })
      }
    })
  }

  console.log("Active list", activeFilterList)
  console.log("Filter list", filteredList)
  console.log(router.query.type)
  return (
    <div className="d-flex flex-wrap">
      {filteredList.length > 0 &&
      (router.query.type == "non-woody" || "woody" || "all") ? (
        filteredList.map((data, index) => {
          return (
            router.query.type == data.acf.plant_type && (
              <div key={data.id}>
                <Link
                  href={{
                    pathname: `/plants/${data.id}`,
                    query: { type: data.acf.plant_type },
                  }}>
                  <a>
                    <PlantSpecies plant={data} />
                  </a>
                </Link>
              </div>
            )
          )
        })
      ) : isLoading ? (
        <div className="d-flex align-items-center img-container">
          <img src="../../images/loading.gif" alt="loader" />
        </div>
      ) : (
        <div className="info-section d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column text-center">
            <img src="../../images/no_result_found.png" alt="" />
            <h3>Oops! No data found!</h3>
          </div>
        </div>
      )}
      <style jsx>{`
        .info-section {
          height: 100%;
          width: 100%;
        }
        .img-container {
          img {
            position: absolute;
            top: 50%;
            left: 58%;
            width: 80px;
          }
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeFilterList: state.selector.activeFilterList,
  }
}

export default connect(mapStateToProps)(ListPlantSpecies)
