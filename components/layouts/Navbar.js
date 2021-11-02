/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import logo from "../../public/images/logo.png"

import SearchForm from "../search/SearchForm"

const Navbar = () => {
  const router = useRouter()
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="logo-container">
              <Image src={logo} alt="new brunswick plants logo" />
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link
                  href={{
                    pathname: "/plants",
                    query: { type: "all" },
                  }}>
                  <a className="nav-link">Species</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" tabIndex="-1">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact" tabIndex="-1">
                  Contact Us
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
        .navbar-nav {
          margin-right: 20px;
        }
      `}</style>
    </div>
  )
}

export default Navbar
