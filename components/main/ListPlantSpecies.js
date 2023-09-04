/* eslint-disable @next/next/no-img-element */
import { connect, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Link from "next/link"
import PlantSpecies from "./PlantSpecies"
import * as options from "../../data/sideNavListDataArray"
import styles from "../../styles/Global.module.scss"
import loaderStyles from "../../styles/Loader.module.scss"
import LoaderThumbnail from "./LoaderThumbnail"
import ListPlantSpeciesStyles from "../../styles/ListPlantSpecies.module.css"

const ListPlantSpecies = ({
  plants_list,
  activeFilterList,
  isLoading,
  filteredList,
}) => {
  // let filteredList
  const router = useRouter()
  const loaderDataCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className="d-flex flex-wrap">
      {filteredList.length > 0 ? (
        filteredList.map((data, index) => {
          return (
            <div
              key={data.id}
              className={[
                "box-container",
                styles.box_container_media_query,
                ListPlantSpeciesStyles.boxContainer,
              ].join(" ")}>
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
        <div className="d-flex flex-wrap">
          {loaderDataCount.map((data, index) => (
            <div key={index} className={[loaderStyles.loader_box].join(" ")}>
              <LoaderThumbnail />
            </div>
          ))}
        </div>
      ) : (
        filteredList.length == 0 &&
        activeFilterList.length > 0 && (
          <div
          className={[ListPlantSpeciesStyles.infoSection, "info-section", "d-flex", "align-items-center", "justify-content-center" ].join(" ")}>
            <div className="d-flex flex-column text-center">
              <img className={styles.imgContent} src="../../images/no_result_found.png" alt="" />
              <h3>Oops! No data found!</h3>
            </div>
          </div>
        )
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeFilterList: state.selector.activeFilterList,
  }
}

export default connect(mapStateToProps)(ListPlantSpecies)
