/* eslint-disable @next/next/no-img-element */
import React from "react"
import styles from "../../styles/NonWoodyPlantSelector.module.css"

const NonWoodyPlantSelector = () => {
  return (
    <div className={styles.block}>
      <img className={styles.imgContent} src="../images/non-woody-icon.png" alt="nonwoody plant icon" />
      <h4 className={styles.h4Content}>Non-woody Plants <span>(not Fern or Grass)</span></h4>
      <p>In progress</p>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}

export default NonWoodyPlantSelector
