/* eslint-disable @next/next/no-img-element */
import React from "react"

const NonWoodyPlantSelector = () => {
  return (
    <div className="block">
      <img src="../images/non-woody-icon.png" alt="nonwoody plant icon" />
      <h4>NonWoody Plants</h4>
      <span>
        <strong>Orchids</strong> and <strong>Violets</strong> <br></br>Others in
        Progress
      </span>
      <style jsx>{`
        .block {
          border: 1px solid #e0e1e3;
          border-radius: 25px;
          background-color: #ffffff;
          padding: 30px 20px;
          height: 300px;
          h4 {
            font-size: 18px;
            font-weight: bold;
          }
          span {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default NonWoodyPlantSelector
