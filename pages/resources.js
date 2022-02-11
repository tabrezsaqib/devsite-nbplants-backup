/* eslint-disable @next/next/no-img-element */
import React from "react"

const about = () => {
  return (
    <div>
      <section className="banner d-flex justify-content-center align-items-center">
        <h2>Resources</h2>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="content">
              <h5 className="pt-3">
                <strong>
                  <i className="bi bi-link-45deg"></i>&nbsp;Resources
                </strong>
              </h5>
              <p>Revised Checklist of the Vascular Plants of Maine (1995)</p>
              <p>
                Elliman, Ted & New England Wild Flower Society. 2016.{" "}
                <cite>Wildflowers of New England</cite>. Portland, OR: Timber
                Press.
              </p>
              <p>
                Hinds, Harold R. 2000. <cite>Flora of New Brunswick</cite>. 2nd
                edition. Fredericton, NB: Robinson & Greenwood.{" "}
              </p>
              <p>
                Hinds, Harold R.{" "}
                <cite>The Rare Vascular Plants of New Brunswick</cite>.
                Fredericton: Connell Memorial Herbarium, 1983.
              </p>
              <p>
                Haines, Arthur. Illustrated by Elizabeth Farnsworth and Gordon
                Morrison. 2011.{" "}
                <cite>
                  New England Wild Flower Society’s Flora Novae Angliae: A
                  Manual for the Identification of Native and Naturalized Higher
                  Vascular Plants of New England
                </cite>
                . New Haven, CT: New England Wildflower Society and Yale
                University Press, 2011.
              </p>
            </div>
            <h5 className="pt-3">
              <strong>
                <i className="bi bi-link-45deg"></i>&nbsp;Web Resources
              </strong>
            </h5>
            <div className="content">
              <p>
                Go Botany (link to{" "}
                <a
                  href="https://gobotany.nativeplanttrust.org/"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  https://gobotany.nativeplanttrust.org/
                </a>{" "}
                )
              </p>
              <p>
                Go Orchids (link to
                <a
                  href="https://goorchids.northamericanorchidcenter.org/"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  https://goorchids.northamericanorchidcenter.org/
                </a>{" "}
                )
              </p>
              <p>
                Illinois Wildflowers (link to
                <a
                  href="https://www.illinoiswildflowers.info/"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  https://www.illinoiswildflowers.info/
                </a>{" "}
                )
              </p>

              <p>
                Maine Natural Areas Program, Maine Department of Agriculture,
                Conservation & Forestry <br />
                <a
                  href="https://www.maine.gov/dacf/mnap/features/index.htm"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  https://www.maine.gov/dacf/mnap/features/index.htm
                </a>{" "}
                : Rare Plants in Maine:
                <br />
                <a
                  href="https://www.maine.gov/dacf/mnap/features/rare_plants/index.htm"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  https://www.maine.gov/dacf/mnap/features/rare_plants/index.htm
                </a>{" "}
                , Invasive Plants in Maine:
                <br />
                <a
                  href="https://www.maine.gov/dacf/mnap/features/invasive_plants/invasives.htm"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  https://www.maine.gov/dacf/mnap/features/invasive_plants/invasives.htm
                </a>
                (November 2021)
              </p>

              <p>
                Missouri Botanic Garden Plant Finder (link to
                <a
                  href="http://www.missouribotanicalgarden.org/plantfinder/plantfindersearch.aspx"
                  target="_blank"
                  className="links"
                  rel="noreferrer">
                  http://www.missouribotanicalgarden.org/plantfinder/plantfindersearch.aspx
                </a>
                )
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </section>

      <style jsx>{`
        section {
          padding: 20px 10px;
          margin: 40px 20px;
          margin-bottom: 50px;
          h2 {
            font-weight: 900;
          }
        }
        .banner {
          background-image: url("../images/viola-adunca-fl-ahaines-b.jpeg");
          box-shadow: inset 0 0 0 2000px rgba(53, 61, 61, 0.4);
          background-position: center;
          background-size: cover;
          height: 140px;
          margin: 30px 0px;
          h2 {
            color: #ffffff;
            font-weight: 900;
          }
        }
        .img-container {
          overflow: hidden;
          width: 100%;
          height: 300px;
          border-radius: 12px;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .team-profile {
          padding: 15px;
          h4 {
            font-size: 18px;
            font-weight: 900;
          }
        }
        .links {
          color: #1d9d47;
        }
      `}</style>
    </div>
  )
}

export default about
