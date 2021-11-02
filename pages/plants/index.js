import React from "react"
import Plants from "../../components/species-selectors/Plants"

const plants = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  return (
    <div>
      <Plants itemsPerPage={4} items={items} />
    </div>
  )
}

export default plants
