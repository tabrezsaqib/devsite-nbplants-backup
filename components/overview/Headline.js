import React from "react"

const Headline = () => {
  return (
    <div className="mb-4">
      <h2>Discover Native and Naturalized Plants of New Brunswick</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
