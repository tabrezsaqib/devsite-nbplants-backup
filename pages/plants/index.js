import React from "react"
import Plants from "../../components/species-selectors/Plants"

const plants = () => {
  return (
    <div>
      <Plants itemsPerPage={10} />
    </div>
  )
}

export default plants
