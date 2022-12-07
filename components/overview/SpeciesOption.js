import React from "react"
import NonWoodyPlantSelector from "../species-selectors/NonWoodyPlantSelector"
import WoodyPlantSelector from "../species-selectors/WoodyPlantSelector"
import Router from "next/router"
import styles from "../../styles/Global.module.scss"
import Ferns from "../species-selectors/Ferns"
import GrassLike from "../species-selectors/GrassLike"

const SpeciesOption = () => {
  const optionSelector = (type) => {
    if (type == "Woody") {
      localStorage.setItem("route", "Woody")
      Router.push({
        pathname: "/plants",
        query: {
          type,
        },
      })
    }
    if (type == "Non-woody") {
      localStorage.setItem("route", "Non-woody")
      Router.push({
        pathname: "/plants",
        query: {
          type,
        },
      })
    }
    if (type == "Fern") {
      localStorage.setItem("route", "Fern")
      Router.push({
        pathname: "/plants",
        query: {
          type,
        },
      })
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div
        className={[
          styles.responsive_selection_blocks,
          "selection-blocks d-flex align-items-center justify-content-evenly",
        ].join(" ")}>
        <a onClick={() => optionSelector("Woody")}>
          <WoodyPlantSelector />
        </a>
        <a onClick={() => optionSelector("Non-woody")}>
          <NonWoodyPlantSelector />
        </a>
        <a onClick={() => optionSelector("Fern")}>
          <Ferns />
        </a>
        <a onClick={() => optionSelector("Non-woody")} className="disabled">
          <GrassLike />
        </a>
      </div>
      <style jsx>{`
        a:hover {
          cursor: pointer;
        }
        .disabled {
          pointer-events: none;
          opacity: 0.6;
          filter: alpha(opacity=50);
          zoom: 1;
          -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
          -moz-opacity: 0.5;
          -khtml-opacity: 0.5;
        }
      `}</style>
    </div>
  )
}

export default SpeciesOption
