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
              <h4>
                <strong>Resources</strong>
              </h4>
              <p>
                Elliman, Ted & New England Wild Flower Society. 2016.{" "}
                <em>Wildflowers of New England</em>. Portland, OR: Timber Press.
              </p>
              <p>
                Haines, Arthur. Illustrated by Elizabeth Farnsworth and Gordon
                Morrison. 2011.{" "}
                <em>
                  New England Wild FLower Society’s Flora Novae Angliae: A
                  Manual for the Identification of Native and Naturalized Higher
                  Vascular Plants of New England
                </em>
                . New Haven, CT: New England Wildflower Society and Yale
                University Press.
              </p>
              <p>
                Hinds, Harold R. 2000. <em>Flora of New Brunswick</em> 2nd
                edition. Fredericton, NB: Robinson & Greenwood.
              </p>
              <p>
                Hinds, Harold R. 1983.{" "}
                <em>The Rare Vascular Plants of New Brunswick</em>. Fredericton,
                NB: Connell Memorial Herbarium.
              </p>
              <p>
                Moyle, John B. and Evelyn W. Moyle. 1977.{" "}
                <em>
                  Northland Wild Flowers: A Guide for the Minnesota Region
                </em>
                . Minneapolis, MN: University of Minnesota Press.
              </p>
              <p>
                Scoggan, H. J. 1978. <em>The Flora of Canada</em>. Ottawa, ON:
                National Museums of Canada.
              </p>
              <p>
                Young, C. Mary. 2015.{" "}
                <em>
                  Nature's Bounty: Four Centuries of Plant Exploration in New
                  Brunswick
                </em>
                . Fredericton, NB: UNB Libraries, University of New Brunswick.
              </p>

              <h4>
                <strong>
                  <i className="bi bi-link-45deg"></i>&nbsp;Web Resources
                </strong>
              </h4>
              <p>
                <a
                  href="http://accdc.com//"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Atlantic Canada Conservation Data Centre
                </a>
              </p>
              <p>
                <a
                  href="http://www.canadensys.net/"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Canadensys
                </a>
              </p>
              <p>
                <a
                  href="https://unbherbarium.lib.unb.ca/page/connell-memorial-herbarium"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Connell Memorial Herbarium, University of New Brunswick
                </a>
              </p>
              <p>
                <a
                  href="http://www.efloras.org/flora_page.aspx?flora_id=1"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Flora of North America
                </a>
                , eFloras.org.
              </p>
              <p>
                <a
                  href="https://gobotany.nativeplanttrust.org/"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Go Botany
                </a>
                , Native Plant Society.
              </p>
              <p>
                <a
                  href="https://goorchids.northamericanorchidcenter.org/"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Go Orchids
                </a>
                , North American Orchid Conservation Center.
              </p>
              <p>
                <a
                  href="http://www.illinoiswildflowers.info"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Illinois Wildflowers
                </a>
              </p>
              <p>
                <a
                  href="https://www.maine.gov/dacf/mnap/features/rare_plants/index.htm"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Rare Plants in Maine
                </a>{" "}
                and{" "}
                <a
                  href="https://www.maine.gov/dacf/mnap/features/invasive_plants/invasives.htm"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Invasive Plants in Maine
                </a>
                , Maine Natural Areas Program, Maine Department of Agriculture,
                Conservation & Forestry
              </p>
              <p>
                <a
                  href="http://www.missouribotanicalgarden.org/plantfinder/plantfindersearch.aspx"
                  className="links"
                  target="_blank"
                  rel="noreferrer">
                  Missouri Botanic Garden Plant Finder
                </a>
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
