/* eslint-disable @next/next/no-img-element */
import React from "react"

const WoodyPlantSelector = () => {
  return (
    <div className="block">
      <img src="../images/woody-plant-icon.png" alt="woody plant icon" />
      <h4>Woody Plants</h4>

      <style jsx>{`
        .block {
          padding: 30px 20px;
          height: 300px;
          img {
            border-radius: 50%;
            border: 2px solid #333333;
          }
          h4 {
            padding-top: 15px;
            font-size: 18px;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  )
}

export default WoodyPlantSelector
