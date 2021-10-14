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
            <div className="content text-center">
              <h2 className="mb-5">Who we are</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamc.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </section>
      <section className="text-center">
        <div className="row">
          <h2 className="mb-5">Our Team</h2>
          <div className="col-lg-3">
            <div className="img-container">
              <img src="../images/team/t3.jpeg" alt="team" />
            </div>
            <div className="team-profile">
              <h4>Anil Hitang</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-container">
              <img src="../images/team/team-1-1.jpeg" alt="team" />
            </div>
            <div className="team-profile">
              <h4>Anil Hitang</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-container">
              <img src="../images/team/team2.jpeg" alt="team" />
            </div>
            <div className="team-profile">
              <h4>Anil Hitang</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-container">
              <img src="../images/team/team5.jpeg" alt="team" />
            </div>
            <div className="team-profile">
              <h4>Anil Hitang</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
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
      `}</style>
    </div>
  )
}

export default about
