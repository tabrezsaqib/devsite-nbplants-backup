import React from "react"
import Link from "next/link"
import NonWoodyPlantSelector from "../species-selectors/NonWoodyPlantSelector"
import WoodyPlantSelector from "../species-selectors/WoodyPlantSelector"

const SpeciesOption = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="selection-blocks d-flex align-items-center justify-content-evenly">
        <Link href={{ pathname: "/plants", query: { type: "woody" } }}>
          <a className="disabled">
            <WoodyPlantSelector />
          </a>
        </Link>
        <Link href={{ pathname: "/plants", query: { type: "Non-woody" } }}>
          <a>
            <NonWoodyPlantSelector />
          </a>
        </Link>
      </div>
      <style jsx>{`
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
