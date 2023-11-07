/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/families.module.css"
import ReactHtmlParser from "react-html-parser"
import { connect } from "react-redux"


import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import ListPlantSpecies from "../components/main/ListPlantSpecies";


const plantFamilyDetails = ({ plantFamily }) => {
  const isLoading = false;
  return (
    <>
      <Header />
      <Navbar />
      {plantFamily.length > 0 ?
        <div style={{ margin: '10px' }}>
          <div className="d-flex flex-column mt-2">
            <div className="d-flex">
              <h2 className="heading">
                <i>{ReactHtmlParser(plantFamily[0].acf.plant_family)}</i>
              </h2>
              <h4 className="align-self-center pt-2">
                <strong>
                  &nbsp;&nbsp;
                  {plantFamily[0].acf.family_english && plantFamily[0].acf.family_english}
                </strong>
              </h4>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="rtc-content">
              {ReactHtmlParser(plantFamily[0].acf.family_description)}
            </div>
          </div>
          <div className="grid-container">
            <ListPlantSpecies filteredList={plantFamily} isLoading={isLoading} />
          </div>
          <p>Site in progress. Not all species yet available.</p>
        </div> : ''}
      <style jsx>{`
        .heading {
          font-size: 2rem;
          color: #0e9d47;
        }
        .site-in-progress{
          margin-top: 30px;
          margin-bottom:50px;
          text-align: center;
          font-size: 20px;
        }
        .rtc-content {
          background-color: #f6f7f9;
          padding: 15px 20px;
          border-radius: 10px;
          font-size: 15px;
        }`}</style>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    plantFamily: state.post.plantFamily,
  }
}
export default connect(mapStateToProps)(plantFamilyDetails)