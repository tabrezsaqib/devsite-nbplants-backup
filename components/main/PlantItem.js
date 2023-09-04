/* eslint-disable @next/next/no-img-element */
import * as api from "../../generics/api"
import styles from "../../styles/PlantItem.module.css"

const PlantItem = ({ plant }) => {
  return (
    <>
      <div
        className={
          (plant.acf.plant_type == "Non-woody" ||
            plant.acf.plant_type == "Woody" ||
            plant.acf.plant_type == "Fern") &&
            [styles.contentBox, "content-box" ].join(" ")
        }>
        <div className={[styles.imgContainer,"img-container"].join(" ")}>
          <img
            className="imgContent"
            src={
              Object.hasOwn(plant.acf, "image_url") == true
                ? plant.acf.image_url.length > 0
                  ? plant.acf.image_url[0].full_image_url
                  : plant.acf.image_url.full_image_url
                : "../images/no_result_found.png"
            }
            alt=""
          />
        </div>
        <div className={styles.description}>
          <h4 className="heading mt-3">{plant.acf.common_name}</h4>
          <div className="d-flex flex-column">
            <span>
              <i>{`${plant.title}`}</i>
            </span>
            <div
            className={[styles.tagsContainer, "d-flex", "flex-wrap", "tags"].join(" ")}>
              {plant.acf.characteristics.habitat.map((val, index) => (
                <span key={index} className={styles.spanContent} >
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.leaf_type.map((val, index) => (
                <span key={index} className={styles.spanContent}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.leaf_arrangement.map((val, index) => (
                <span key={index} className={styles.spanContent}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.leaf_blade_edges.map((val, index) => (
                <span key={index} className={styles.spanContent}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.flower_colour.map((val, index) => (
                <span key={index} className={styles.spanContent}>
                  {api.capitalizeFirstLetter(val)}
                  {val !==
                  plant.acf.characteristics.flower_colour.slice(-1).pop()
                    ? ","
                    : ""}
                  &nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlantItem
