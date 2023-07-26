/* eslint-disable @next/next/no-img-element */
import React from "react"

const NonWoodyPlantSelector = () => {
  return (
    <div className="block">
      <img src="../images/non-woody-icon.png" alt="nonwoody plant icon" />
      <h4>Non-woody Plants <span>(not Fern or Grass)</span></h4>
      {/* <span>
        <strong>Orchids</strong> and <strong>Violets</strong> <br></br>Others in
        Progress
      </span> */}
      <p>In progress</p>
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
          span {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default NonWoodyPlantSelector
