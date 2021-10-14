import React from "react"
import Link from "next/link"
import NonWoodyPlantSelector from "../species-selectors/NonWoodyPlantSelector"
import WoodyPlantSelector from "../species-selectors/WoodyPlantSelector"

const SpeciesOption = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="selection-blocks d-flex align-items-center justify-content-evenly">
        <Link href={{ pathname: "/plants", query: { type: "woody" } }}>
          <a>
            <WoodyPlantSelector />
          </a>
        </Link>
        <Link href={{ pathname: "/plants", query: { type: "non-woody" } }}>
          <a>
            <NonWoodyPlantSelector />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SpeciesOption
