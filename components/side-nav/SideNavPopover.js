import React from "react"
import ReactHtmlParser from "react-html-parser"

const SideNavPopover = ({ triggerPopUp, popoverData }) => {
  return (
    <div>
      <h5
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => triggerPopUp("leaf-arrangement")}>
        <i className="bi bi-info-circle-fill" />
      </h5>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {popoverData[0].acf.glossary_name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {ReactHtmlParser(popoverData[0].acf.description)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNavPopover
