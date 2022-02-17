import React from "react"

const Headline = () => {
  return (
    <div className="mb-4">
      <h2>Discover the Plants of New Brunswick</h2>
      <p>
        A pictorial guide to the orchids and violets of New Brunswick.
        <br />
        Additional plants will be added in future years.
      </p>
      <style jsx>{`
        h2 {
          font-weight: 900;
        }
        p {
          font-size: 18px;
          padding: 15px 35px;
        }
      `}</style>
    </div>
  )
}

export default Headline
