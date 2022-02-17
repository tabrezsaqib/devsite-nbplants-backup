/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Router from "next/router"
import { useDispatch } from "react-redux"
import { togglePagination } from "../../redux/actions/paginationAction"

const Footer = () => {
  const dispatch = useDispatch()
  const refresh = () => {
    dispatch(togglePagination(true))
    Router.push({
      pathname: "/plants",
      query: { type: "all" },
    }).then(() => {
      Router.reload()
    })
  }
  return (
    <section className="footer">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-1">
            <div className="footer-brief">
              <a href="/">
                <img
                  src="../images/logo-dark.png"
                  alt="newbrunswick plants logo"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sponsor d-flex justify-content-between align-items-start mb-4">
              <div className="logo-container">
                <a
                  href="https://www.frederictonbotanicgarden.com/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="../../images/botanic-garden-dark.png"
                    height="47"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="d-flex flex-column align-items-center text-center">
                <div className="logo-container">
                  <a
                    href="https://www2.gnb.ca/content/gnb/en/services/services_renderer.13136.Environmental_Trust_Fund.html"
                    target="_blank"
                    rel="noreferrer">
                    <img src="../../images/nb-logo.png" alt="logo" />
                  </a>
                </div>
                <span className="partnership-tagline">
                  Your Environmental Trust Fund at Work
                </span>
              </div>
              <div>
                <p className="logo-header">
                  <strong>In Partnership with</strong>
                </p>
                <div className="logo-container">
                  <a href="http://accdc.com//" target="_blank" rel="noreferrer">
                    <img src="../../images/logoACCDC2014.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-around">
            <div className="footer-nav">
              <ul className="d-flex flex-column flex-wrap">
                <li>
                  <a href="/">Home</a>
                </li>
                <li onClick={refresh}>
                  <a>Species</a>
                </li>
                <li>
                  <a href="/glossary">Glossary</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/resources">Resources</a>
                </li>
              </ul>
            </div>
            {/* <div className="social-links">
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
            </div> */}
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
            font-size: 15px;
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
            width: auto;
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
        .logo-header {
          margin-bottom: 0px;
          font-size: 12px;
        }
        .partnership-tagline {
          margin-top: 5px;
          width: 150px;
          font-size: 12px;
          font-weight: 700;
        }
      `}</style>
    </section>
  )
}

export default Footer
