/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Router from "next/router"
import SearchForm from "../search/SearchForm"
import { useDispatch } from "react-redux"
import { togglePagination } from "../../redux/actions/paginationAction"
import React, {Component} from "react"

const Navbar = () => {
  const dispatch = useDispatch()
  const refresh = () => {
    localStorage.setItem("route", "all")
    dispatch(togglePagination(true))
    Router.push({
      pathname: "/plants",
      query: { type: "all" },
    }).then(() => {
      Router.reload()
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="logo-container">
              <img
                src="../../images/logo.png"
                alt="new brunswick plants logo"
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarScroll">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={refresh}>
                <a className="nav-link">Species</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" tabIndex="-1">
                  About
                </a>
              </li>
            </ul>
            <SearchForm />
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          border-bottom: 1px solid #e0e1e3;
          background-color: #ffffff !important;
          padding-top: 0px !important;
          padding-bottom: 0px !important;
        }
        .logo-container {
          overflow: hidden;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .nav-item:hover {
          cursor: pointer;
        }
        .navbar-nav {
          margin-right: 20px;
        }
      `}</style>
    </div>
  )
}

export default Navbar
