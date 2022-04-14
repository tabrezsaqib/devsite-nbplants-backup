/* eslint-disable @next/next/no-img-element */
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Link from "next/link"
import PlantSpecies from "./PlantSpecies"
import * as options from "../../data/sideNavListDataArray"
import styles from "../../styles/Global.module.scss"

const ListPlantSpecies = ({
  plants_list,
  activeFilterList,
  isLoading,
  filteredList,
}) => {
  // let filteredList
  const router = useRouter()
  // if (activeFilterList.length === 0) {
  //   filteredList = plants_list
  // } else {
  //   const filterKeys = Object.keys(options)
  //   filteredList = plants_list.filter((item) => {
  //     if (
  //       router.query.type == item.acf.plant_type ||
  //       router.query.type == "all"
  //     ) {
  //       return filterKeys.some((key) => {
  //         return item.acf.characteristics[key].some((element) => {
  //           return activeFilterList.includes(element)
  //         })
  //       })
  //     }
  //   })
  // }

  // console.log("Active list", activeFilterList)

  return (
    <div className="d-flex flex-wrap">
      {filteredList.length > 0 && isLoading == false ? (
        filteredList.map((data, index) => {
          return (
            <div key={data.id} className="box-container">
              <Link
                href={{
                  pathname: `/plants/${data.slug}`,
                  query: { type: data.acf.plant_type },
                }}>
                <a className="thumbnails">
                  <PlantSpecies plant={data} />
                </a>
              </Link>
            </div>
          )
        })
      ) : isLoading == true ? (
        <div
          className={[
            styles.image_loader_media_query,
            "d-flex align-items-center img-container",
          ].join(" ")}>
          <img src="../../images/loading.gif" alt="loader" />
        </div>
      ) : (
        filteredList.length == 0 &&
        activeFilterList.length > 0 && (
          <div className="info-section d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column text-center">
              <img src="../../images/no_result_found.png" alt="" />
              <h3>Oops! No data found!</h3>
            </div>
          </div>
        )
      )}
      <style jsx>{`
        .box-container {
          background-color: #ffffff;
          margin: 10px 10px 20px;
          border-radius: 15px;
          border: 1px solid #e0e1e3;
          flex-grow: 1;
          width: 240px;
          max-width: 45%;
        }
        .info-section {
          height: 100%;
          width: 100%;
        }
        .img-container {
          img {
            top: 50%;
            left: 58%;
            width: 80px;
          }
        }
        :global(.thumbnails:hover) {
          color: #1d9d47 !important;
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
