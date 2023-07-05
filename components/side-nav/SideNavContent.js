/* eslint-disable @next/next/no-img-element */

import * as api from "../../generics/api"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import SideNavPopover from "./SideNavPopover"
import React, {useState} from "react"

const SideNavContent = ({
  options,
  habitat,
  plant_type,
  type,
  flower_colour,
  lip_shape,
  fruit_type,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
  leaf_duration,
  leaf_divisions,
  spore_location,
  spore_shape,
  native_or_introduced_or_invasive,
  leaf_shape,
  petal_symmetry,
  inflorescence,
  stems,
  // new_brunswick_county,
  onSelectorChange,
  handleOnChange,
  popoverData,
  getPopoverData,
  popoverStatus,
  triggerToolTip,
}) => {
  const router = useRouter()
  const optionNames = [
    {
      key: "plant_type",
      group: router.query.type,
      value: "Plant Type",
    },
    {
      key: "type",
      group: "none",
      value: "Type",
    },
    {
      key: "habitat",
      group: "initial",
      value: "Habitat",
    },
    {
      key: "flower_colour",
      group: "flowers",
      value: "Flower Colour",
    },
    {
      key: "inflorescence",
      group: "flowers",
      value: "Flower Arrangement",
    },
    {
      key: "lip_shape",
      group: "flowers",
      value: "Lip Shape",
    },
    {
      key: "petal_symmetry",
      group: "flowers",
      value: "Petal Symmetry",
    },
    {
      key: "leaf_arrangement",
      group: "leaves",
      value: "Leaf Arrangement",
    },
    {
      key: "leaf_blade_edges",
      group: "leaves",
      value: "Leaf Blade Edges",
    },
    {
      key: "leaf_shape",
      group: "leaves",
      value: "Leaf Shape",
    },
    {
      key: "leaf_type",
      group: "leaves",
      value: "Leaf Type",
    },
    {
      key: "leaf_duration",
      group: router.query.type == "Woody" && "leaves",
      value: "Leaf Duration",
    },
    {
      key: "spore_location",
      group: router.query.type == "Fern" && "spores",
      value: "Spore Location",
    },
    {
      key: "spore_shape",
      group: router.query.type == "Fern" && "spores",
      value: "Spore Shape",
    },
    {
      key: "leaf_divisions",
      group:
        (router.query.type == "Woody" || router.query.type == "Fern") &&
        "leaves",
      value: "Leaflet Divisions",
    },
    {
      key: "stems",
      group: "none",
      value: "Stems and/or Twigs",
    },
    {
      key: "fruit_type",
      group: "none",
      value: "Fruit Type",
    },
    // {
    //   key: "native_or_introduced_or_invasive",
    //   group: "none",
    //   value: "Type",
    // },
  ]

  const colorValues = [
    {
      color: "../../images/gb.png",
      label: "green to brown",
    },
    {
      color: "../../images/bp.png",
      label: "blue to purple",
    },
    {
      color: "../../images/o.png",
      label: "orange",
    },
    {
      color: "../../images/y.png",
      label: "yellow",
    },
    {
      color: "../../images/w.png",
      label: "white",
    },
    {
      color: "../../images/pr.png",
      label: "pink to red",
    },
    {
      color: "../../images/dn.png",
      label: "don't know",
    },
    {
      color: "../../images/dn.png",
      label: "doesn't apply",
    },
  ]

  let id = 0
  const dispatch = useDispatch()
  const getOption = (key) => {
    const option = options[key].map((data, index) => {
      return (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            value={data}
            id={id}
            onClick={(e) => onSelectorChange(data)}
            checked={
              // item.key == "new_brunswick_county"
              //   ? new_brunswick_county[index]
              key == "leaf_arrangement"
                ? leaf_arrangement[index]
                : key == "leaf_type"
                ? leaf_type[index]
                : key == "habitat"
                ? habitat[index]
                : key == "plant_type"
                ? plant_type[index]
                : key == "type"
                ? type[index]
                : key == "flower_colour"
                ? flower_colour[index]
                : key == "lip_shape"
                ? lip_shape[index]
                : key == "fruit_type"
                ? fruit_type[index]
                : key == "leaf_duration"
                ? leaf_duration[index]
                : key == "leaf_divisions"
                ? leaf_divisions[index]
                : key == "leaf_blade_edges"
                ? leaf_blade_edges[index]
                : key == "spore_shape"
                ? spore_shape[index]
                : key == "spore_location"
                ? spore_location[index]
                : // : key == "native_or_introduced_or_invasive"
                // ? native_or_introduced_or_invasive[index]
                key == "leaf_shape"
                ? leaf_shape[index]
                : key == "stems"
                ? stems[index]
                : key == "petal_symmetry"
                ? petal_symmetry[index]
                : key == "inflorescence"
                ? inflorescence[index]
                : false
            }
            onChange={(e) => handleOnChange(index, key)}
          />
          <label className="form-check-label" htmlFor={id}>
            {colorValues.map((value, index) => (
              <div key={index} className="color-value">
                <img
                  src={value.color}
                  className={
                    data == value.label && key == "flower_colour" ? "" : "hide"
                  }
                  width="15px"
                  alt="color values"
                />
              </div>
            ))}
            {key == "flower_colour" ? <span>&nbsp;&nbsp;</span> : <span></span>}
            {api.capitalizeFirstLetter(data)}
          </label>
        </div>
      )
    })
    return option
  }

  const triggerPopUp = (key, status) => {
    dispatch(triggerToolTip(status))
    dispatch(getPopoverData(key, status))
  }
  return (
    <>
      <div>
        {optionNames.map((item) => (
          <div key={item.key}>
            {item.group == "all" && (
              <div>
                <h6 className="selector-heading">
                  <i className="bi bi-check2-square" />
                  &nbsp;&nbsp;
                  <strong>{item.value}</strong>
                </h6>
                <div className="d-flex flex-wrap">{getOption(item.key)}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        {optionNames.map((item) => (
          <div key={item.key}>
            {item.group == "initial" && (
              <div>
                <h6 className="selector-heading">
                  <i className="bi bi-check2-square" />
                  &nbsp;&nbsp;
                  <strong>{item.value}</strong>
                </h6>
                <div className="d-flex flex-wrap">{getOption(item.key)}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      {router.query.type !== "Fern" && (
        <div className="accordion mt-2 mb-2" id="accordion1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flowers"
                aria-expanded="true"
                aria-controls="flowers">
                Flowers
              </button>
            </h2>
            <div
              id="flowers"
              className="accordion-collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion1">
              <div className="accordion-body">
                <div>
                  {optionNames.map((item) => (
                    <div key={item.key}>
                      {item.group == "flowers" && (
                        <div>
                          <div className="d-flex">
                            <h6 className="selector-heading">
                              <i className="bi bi-check2-square" />
                              &nbsp;&nbsp;
                              <strong>{item.value}</strong>
                            </h6>
                            {(item.key == "inflorescence" ||
                              item.key == "petal_symmetry") && (
                              <SideNavPopover
                                triggerPopUp={() =>
                                  triggerPopUp(item.key, true)
                                }
                                popoverData={popoverData}
                                popoverStatus={popoverStatus}
                              />
                            )}
                          </div>
                          {item.key == "inflorescence" ? (
                            <div id="four-column" className="d-flex flex-wrap">
                              {getOption(item.key)}
                            </div>
                          ) : (
                            <div className="d-flex flex-wrap">
                              {getOption(item.key)}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="accordion mt-2 mb-2" id="accordion2">
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading2">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#leaves"
              aria-expanded="true"
              aria-controls="leaves">
              Leaves
            </button>
          </h2>
          <div
            id="leaves"
            className="accordion-collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordion2">
            <div className="accordion-body">
              <div>
                {optionNames.map((item) => (
                  <div key={item.key}>
                    {item.group == "leaves" && (
                      <div>
                        <h6 className="selector-heading">
                          <i className="bi bi-check2-square" />
                          &nbsp;&nbsp;
                          <strong>{item.value}</strong>
                        </h6>
                        <div className="d-flex flex-wrap">
                          {getOption(item.key)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {router.query.type == "Fern" && (
        <div className="accordion mt-2 mb-2" id="accordion2">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading3">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#spores"
                aria-expanded="true"
                aria-controls="spores">
                Spores
              </button>
            </h2>
            <div
              id="spores"
              className="accordion-collapse collapse"
              aria-labelledby="heading3"
              data-bs-parent="#accordion2">
              <div className="accordion-body">
                <div>
                  {optionNames.map((item) => (
                    <div key={item.key}>
                      {item.group == "spores" && (
                        <div>
                          <h6 className="selector-heading">
                            <i className="bi bi-check2-square" />
                            &nbsp;&nbsp;
                            <strong>{item.value}</strong>
                          </h6>
                          <div className="d-flex flex-wrap">
                            {getOption(item.key)}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {optionNames.map((item) => (
          <div key={item.key}>
            {item.group == "none" && (
              <div>
                <h6 className="selector-heading">
                  <i className="bi bi-check2-square" />
                  &nbsp;&nbsp;
                  <strong>{item.value}</strong>
                </h6>
                <div className="d-flex flex-wrap">{getOption(item.key)}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .selector-heading {
          font-size: 13px;
          margin: 5px 5px;
          font-weight: 900;
        }

        :global(.bi-check2-square::before) {
          font-weight: 600 !important;
        }
        :global(.form-check-input:hover) {
          cursor: pointer !important;
        }
        :global(.form-check-label:hover) {
          cursor: pointer !important;
        }
        .accordion-button:not(.collapsed) {
          color: #1d9d47;
          background-color: #f8f9fa;
        }
        .accordion-button:not(.collapsed)::after {
          filter: invert(13%) sepia(68%) saturate(2891%) hue-rotate(346deg)
            brightness(104%) contrast(97%);
          -webkit-filter: invert(13%) sepia(68%) saturate(2891%)
            hue-rotate(346deg) brightness(104%) contrast(97%);
          -ms-filter: invert(13%) sepia(68%) saturate(2891%) hue-rotate(346deg)
            brightness(104%) contrast(97%);
        }
        .accordion-button {
          padding: 0.5rem 1.25rem;
          background-color: #f8f9fa;
        }
        :global(.form-check-label) {
          pointer-events: none;
        }
      `}</style>
    </>
  )
}

export default SideNavContent
