/* eslint-disable @next/next/no-img-element */
import React from "react"

const Ferns = () => {
  return (
    <div className="block">
      <img src="../images/fern.png" alt="fern plant icon" />
      <h4>Fern/Fern Ally</h4>
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

export default Ferns
