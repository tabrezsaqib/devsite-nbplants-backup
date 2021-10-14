/* eslint-disable @next/next/no-img-element */
import * as api from "../../generics/api"
import "bootstrap-icons/font/bootstrap-icons.css"

const SideNavContent = ({
  options,
  habitat,
  flower_petal_colour,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
  new_brunswick_county,
  onSelectorChange,
  handleOnChange,
}) => {
  const optionNames = [
    {
      key: "habitat",
      value: "Habitat",
    },
    {
      key: "flower_petal_colour",
      value: "Flower Petal Colour",
    },
    {
      key: "leaf_blade_edges",
      value: "Leaf Blade Edges",
    },
    {
      key: "leaf_type",
      value: "Leaf Type",
    },
    {
      key: "leaf_arrangement",
      value: "Leaf Arrangement",
    },
    {
      key: "new_brunswick_county",
      value: "New Brunswick County",
    },
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
  const option = optionNames.map((item) => {
    return (
      <div key={item.key}>
        <h6 className="selector-heading">
          <i className="bi bi-check2-square" />
          &nbsp;&nbsp;
          <strong>{item.value}</strong>
        </h6>
        <div className="d-flex flex-wrap">
          {options[item.key].map((data, index) => {
            id = id + 1
            return (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={data}
                  id={id}
                  onClick={(e) => onSelectorChange(data)}
                  checked={
                    item.key == "new_brunswick_county"
                      ? new_brunswick_county[index]
                      : item.key == "leaf_arrangement"
                      ? leaf_arrangement[index]
                      : item.key == "leaf_type"
                      ? leaf_type[index]
                      : item.key == "habitat"
                      ? habitat[index]
                      : item.key == "flower_petal_colour"
                      ? flower_petal_colour[index]
                      : item.key == "leaf_blade_edges"
                      ? leaf_blade_edges[index]
                      : false
                  }
                  onChange={(e) => handleOnChange(index, item.key)}
                />
                <label className="form-check-label" htmlFor={id}>
                  {colorValues.map((value, index) => (
                    <div key={index} className="color-value">
                      <img
                        src={value.color}
                        className={
                          data == value.label &&
                          item.key == "flower_petal_colour"
                            ? ""
                            : "hide"
                        }
                        width="15px"
                        alt="color values"
                      />
                    </div>
                  ))}
                  {item.key == "flower_petal_colour" ? (
                    <span>&nbsp;&nbsp;</span>
                  ) : (
                    <span></span>
                  )}
                  {api.capitalizeFirstLetter(data)}{" "}
                </label>
              </div>
            )
          })}
        </div>
        <hr
          className={item.key !== "new_brunswick_county" ? "separator" : "hide"}
        />
        <style jsx>{`
          .selector-heading {
            font-size: 13px;
            margin-top: 10px;
            font-weight: 900;
          }
          .form-check {
            width: 135px;
          }
          .form-check-label {
            font-size: 13px;
            img {
              margin-top: -3px;
            }
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
          .color-value {
            width: 14px;
            height: auto;
            float: left;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .separator {
            background-color: #979899;
          }
        `}</style>
      </div>
    )
  })
  return <>{option}</>
}

export default SideNavContent
