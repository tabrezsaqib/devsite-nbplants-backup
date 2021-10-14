/* eslint-disable @next/next/no-img-element */
import React from "react"

const PlantSpeciesDetails = ({ plant_details }) => {
  return (
    <div className="m-4">
      {plant_details.length !== 0 ? (
        <div className="row" key={plant_details.id}>
          <div className="col-lg-4">
            <div className="d-flex flex-wrap">
              {plant_details.acf.image_preview.map((item, index) => (
                <div key={index} className="img-container">
                  <img src={item.thumbnail_image_url} alt="plant image" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            <h2>
              <strong>{`${plant_details.acf.genus} ${plant_details.acf["species"]}`}</strong>
            </h2>
            <h4>{plant_details.acf.common_name}</h4>
            <hr />
            <h4>Characteristics</h4>
            <div className="d-flex">
              <p>
                <strong>Habitat: &nbsp;</strong>
              </p>
              {plant_details.acf.characteristics.habitat.map((item, index) => (
                <p key={index}>{item} &nbsp;</p>
              ))}
            </div>
            <div className="d-flex">
              <p>
                <strong>Flower Petal Colour: &nbsp;</strong>
              </p>
              {plant_details.acf.characteristics.flower_petal_colour.map(
                (item, index) => (
                  <div key={index}>
                    <p>{item} &nbsp;</p>
                  </div>
                )
              )}
            </div>
            <div className="d-flex">
              <p>
                <strong>Leaf Type: &nbsp;</strong>
              </p>
              {plant_details.acf.characteristics.leaf_type.map(
                (item, index) => (
                  <div key={index}>
                    <p>{item} &nbsp;</p>
                  </div>
                )
              )}
            </div>
            <div className="d-flex">
              <p>
                <strong>Leaf Arrangement: &nbsp;</strong>
              </p>
              {plant_details.acf.characteristics.leaf_arrangement.map(
                (item, index) => (
                  <div key={index}>
                    <p>{item} &nbsp;</p>
                  </div>
                )
              )}
            </div>
            <div className="d-flex">
              <p>
                <strong>Leaf Blage Edges: &nbsp;</strong>
              </p>
              {plant_details.acf.characteristics.leaf_blade_edges.map(
                (item, index) => (
                  <div key={index}>
                    <p>{item} &nbsp;</p>
                  </div>
                )
              )}
            </div>
            <p>{plant_details.acf.note}</p>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="loader d-flex align-items-center">
              <img src="../../images/loading.gif" alt="loader" />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .img-container {
          border-radius: 12px;
          margin: 5px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .loader {
          height: 300px;
          img {
            width: 80px;
          }
        }
      `}</style>
    </div>
  )
}

export default PlantSpeciesDetails
