/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Router from "next/router"
import { useDispatch } from "react-redux"
import { togglePagination } from "../../redux/actions/paginationAction"
import styles from "../../styles/Global.module.scss"
import footerStyle from "../../styles/Footer.module.css"

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
    <section className={footerStyle.footer}>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-1">
            <div className="footer-brief">
              <a href="/">
                <img
                  src="../../images/logo-dark.png"
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
                <span className={footerStyle.partnershipTagline}>
                  Your Environmental Trust Fund at Work
                </span>
              </div>
              <div>
                <p className={footerStyle.logoHeader}>
                  <strong>In Partnership with</strong>
                </p>
                <div className={footerStyle.logoContainer}>
                  <a href="http://accdc.com//" target="_blank" rel="noreferrer">
                    <img className={footerStyle.footerLogo} src="../../images/logoACCDC2014.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-around">
            <div
              className={[styles.footer_media_query, footerStyle.footerNav].join(" ")}>
              <ul className={[footerStyle.footerList, "d-flex flex-column flex-wrap"].join(" ")}>
                <li className={footerStyle.footerListItem}>
                  <a className={footerStyle.footerLink} href="/">Home</a>
                </li>
                <li className={footerStyle.footerListItem} onClick={refresh}>
                  <a className={footerStyle.footerLink}>Species</a>
                </li>
                <li className={footerStyle.footerListItem}>
                  <a className={footerStyle.footerLink} href="/glossary">Glossary</a>
                </li>
                <li className={footerStyle.footerListItem}>
                  <a className={footerStyle.footerLink} href="/contact">Contact Us</a>
                </li>
                <li className={footerStyle.footerListItem}>
                  <a className={footerStyle.footerLink} href="/families">Plant Families</a>
                </li>
                <li className={footerStyle.footerListItem}>
                  <a className={footerStyle.footerLink} href="/resources">Resources</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
