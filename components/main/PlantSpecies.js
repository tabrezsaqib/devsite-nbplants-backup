/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import * as api from "../../generics/api"
import PlantItem from "./PlantItem"
import styles from "../../styles/PlantSpecies.module.css"

const PlantSpecies = ({ plant }) => {
  // console.log("Plant Species: ", plant)
  const router = useRouter()
  return (
    <>
      {router.pathname == `/plants` && router.query.type == `Non-woody` ? (
        <>
          {/* {console.log("Non Woody: ", plant)} */}
          <PlantItem plant={plant} />
        </>
      ) : router.pathname == `/plants` && router.query.type == `Fern` ? (
        <>
          {/* {console.log("Non Woody: ", plant)} */}
          <PlantItem plant={plant} />
        </>
      ) : router.pathname == "/plants" && router.query.type == `Woody` ? (
        <>
          <PlantItem plant={plant} />
        </>
      ) : router.query.type == "all" ? (
        <PlantItem plant={plant} />
      ) : (
        <div
          className={
            plant.acf.plant_type == "Non-woody" ||
            plant.acf.plant_type == "Woody" ||
            plant.acf.plant_type == "Fern"
              ? styles.hidden
              : styles.contentBox
          }>
          <div className="info-section d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column text-center">
              <img className={styles.imgContent} src="../images/no_result_found.png" alt="" />
              <h3>Oops! No data found!</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlantSpecies
