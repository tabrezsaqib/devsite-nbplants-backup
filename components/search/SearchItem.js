/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as api from "../../generics/api"

const SearchItem = ({ plant }) => {
  return (
    <>
      <div className="content-box">
        <div className="img-container">
          <img
            src={
              plant.acf.image_url !== undefined && plant.acf.gallery_view_image
                ? plant.acf.gallery_view_image.sizes.medium
                : "../images/no_result_found.png"
            }
            alt=""
          />
        </div>
        <div className="description">
          <h4 className="heading mt-3">{plant.title.rendered}</h4>
          <div className="d-flex flex-column">
            <span>
              <strong>Common name:</strong> {plant.acf.common_name}
            </span>
            <div className="d-flex flex-wrap tags">
              {plant.acf.characteristics.habitat.map((val, index) => (
                <span key={index}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.leaf_type.map((val, index) => (
                <span key={index}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.leaf_arrangement.map((val, index) => (
                <span key={index}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.leaf_blade_edges.map((val, index) => (
                <span key={index}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                </span>
              ))}
              {plant.acf.characteristics.flower_colour.map((val, index) => (
                <span key={index}>
                  {api.capitalizeFirstLetter(val)}, &nbsp;
                  {val !==
                  plant.acf.characteristics.flower_colour.slice(-1).pop()
                    ? ","
                    : ""}
                  &nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content-box {
          width: 220px;
          height: auto;
          margin: 10px;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .heading {
          font-weight: 900;
        }
        .img-container {
          overflow: hidden;
          width: 100%;
          height: 230px;
          border-radius: 15px;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .hidden {
          display: none;
        }
        .tags {
          span {
            color: #84878e;
            font-size: 12.5px;
          }
        }
      `}</style>
    </>
  )
}

export default SearchItem
