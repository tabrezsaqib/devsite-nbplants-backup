/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import * as api from "../../generics/api"
import PlantItem from "./PlantItem"

const PlantSpecies = ({ plant }) => {
  const router = useRouter()
  return (
    <>
      {router.pathname == `/plants` &&
      router.query.type == `non-woody` &&
      plant.acf.plant_type == "non-woody" ? (
        <PlantItem plant={plant} />
      ) : router.pathname == "/plants" &&
        router.query.type == `woody` &&
        plant.acf.plant_type == "woody" ? (
        <PlantItem plant={plant} />
      ) : router.query.type == "all" ? (
        <PlantItem plant={plant} />
      ) : (
        <div
          className={
            plant.acf.plant_type == "non-woody" ||
            plant.acf.plant_type == "woody"
              ? "hidden"
              : "content-box"
          }>
          <div className="info-section d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column text-center">
              <img src="../images/no_result_found.png" alt="" />
              <h3>Oops! No data found!</h3>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .content-box {
          width: 220px;
          height: auto;
          margin: 10px;
          overflow: hidden;
          margin-bottom: 40px;
        }

        .img-container {
          overflow: hidden;
          width: 100%;
          height: 230px;
          border-radius: 15px;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .hidden {
          display: none;
        }
      `}</style>
    </>
  )
}

export default PlantSpecies
