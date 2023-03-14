/* eslint-disable @next/next/no-img-element */
import React from "react"

const about = () => {
  return (
    <div>
      <section className="banner d-flex justify-content-center align-items-center">
        <h2>About Us</h2>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="content">
              {/* <h2 className="mb-5">Who we are</h2> */}
              <p>
                The{" "}
                <a
                  href="https://nbplants.ca"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Plants of New Brunswick
                </a>{" "}
                is a digital resource that will, when completed, show the plants
                found in natural spaces in New Brunswick, both native and
                introduced. The project was started in 2021 by the{" "}
                <a
                  href="http://frederictonbotanicgarden.com"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Fredericton Botanic Garden Association
                </a>
                . The Plants of New Brunswick will continue to grow and will
                take at least five years to complete. It will depict
                characteristics of each species that are important for
                identification, including flowers, leaves, fruits, and other
                anatomic features. It will also supply ecological information
                about each plant species identified. Descriptive terms for a
                non-scientific audience are used.
              </p>
              <p>
                The first year focused on the orchids and violets of New
                Brunswick. During the second year, additiional species in fern,
                woody, and non-woody families were added which expanded the
                selection criteria. The current selector structure is still a
                work in progress and refinements will be made during subsequent
                phases of the project. As the site development continues, other
                native and introduced plants found in New Brunswick will be
                added, along with mapping data and a French-language site.
              </p>
              <p>
                This site is made possible through the financial support of the
                Province of New Brunswick’s{" "}
                <a
                  href="https://www2.gnb.ca/content/gnb/en/services/services_renderer.13136.Environmental_Trust_Fund.html"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Environmental Trust Fund
                </a>{" "}
                and generous in-kind content and expertise donations from the{" "}
                <a
                  href="http://accdc.com//"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Atlantic Canada Conservation Data Centre
                </a>
                , the{" "}
                <a
                  href="https://unbherbarium.lib.unb.ca/page/connell-memorial-herbarium"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Connell Herbarium
                </a>{" "}
                and Department of Biology at the{" "}
                <a
                  href="https://www.unb.ca/"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  University of New Brunswick
                </a>
                , and the{" "}
                <a
                  href="https://www.naturetrust.nb.ca/"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Nature Trust of New Brunswick
                </a>
                .
              </p>
              <p>
                <em>The Flora of New Brunswick</em> by Hal Hinds has been the
                critical resource to the plants of New Brunswick since the first
                edition was published in 1985 (2nd edition, 2000). Without his
                groundwork, this digital version would not have been possible.
                It is one of many{" "}
                <a
                  href="https://newbrunswickplants.ca/resources/"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  references
                </a>{" "}
                that have made this site possible.
              </p>
              <div className="d-flex flex-column align-items-center pt-3">
                <div>
                  <img src="../../images/nb-logo.png" alt="logo" />
                </div>
                <p className="pt-2" style={{ fontSize: "12px" }}>
                  Your Environmental Trust Fund at Work
                </p>
              </div>
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
