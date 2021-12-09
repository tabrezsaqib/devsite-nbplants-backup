import React from "react"
import Plants from "../../components/species-selectors/Plants"

const plants = () => {
  return (
    <div>
      <Plants itemsPerPage={5} />
    </div>
  )
}

export default plants
