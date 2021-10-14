/* eslint-disable @next/next/no-img-element */
import React from "react"

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-3">
            <div className="footer-brief">
              <img src="../images/logo-dark.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h5>Made Possible by</h5>
            <div className="sponsor d-flex justify-content-between">
              <div className="logo-container">
                <img
                  src="../images/botanic-garden-dark.png"
                  height="47"
                  alt="logo"
                />
              </div>
              <div className="logo-container">
                <img src="../images/nb-logo.png" alt="logo" />
              </div>
              <div className="logo-container">
                <img src="../images/ac-dc-logo.png" alt="logo" />
              </div>
              <div className="logo-container">
                <img src="../images/unb-logo.png" alt="logo" />
              </div>
              <div className="logo-container">
                <img
                  src="../images/nature-trust-logo.png"
                  height="67"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-between">
            <div className="footer-nav">
              <h5>Links</h5>
              <ul className="d-flex flex-column flex-wrap">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Participate</a>
                </li>
                <li>
                  <a href="#">Species</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-between">
                <h4>
                  <a href="#">
                    <i className="lni lni-facebook" />
                  </a>
                </h4>
                <h4>
                  <a href="#">
                    <i className="lni lni-instagram" />
                  </a>
                </h4>
                <h4>
                  <a href="#">
                    <i className="lni lni-twitter" />
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #f6f7f9;
          padding-top: 30px;
          border-top: 1px solid #e0e1e3;
          .footer-brief {
            p {
              font-size: 14px;
            }
          }
          h5 {
            font-size: 16px;
            font-weight: bold;
          }
          h4 {
            font-size: 18px;
            font-weight: bold;
          }
          .footer-nav {
            ul {
              list-style: none;
              padding: 0px;
              height: 75px;
              width: 200px;
              li a {
                font-size: 14px;
              }
            }
          }
          .logo-container {
            overflow: hidden;
            width: 110px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .social-links {
            h4 {
              padding-top: 5px;
            }
            a:first-of-type {
              padding-left: 0px;
            }
            a {
              padding: 0px 15px;
            }
          }
        }
      `}</style>
    </section>
  )
}

export default Footer
