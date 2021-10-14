/* eslint-disable @next/next/no-img-element */
import React from "react"

const NonWoodyPlantSelector = () => {
  return (
    <div className="block">
      <img src="../images/non-woody-icon.png" alt="non-woody plant icon" />
      <h4>Non-Woody Plants</h4>
      <style jsx>{`
        .block {
          border: 1px solid #e0e1e3;
          border-radius: 25px;
          padding: 30px 20px;
          h4 {
            font-size: 18px;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  )
}

export default NonWoodyPlantSelector
