/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/families.module.css"
import ReactHtmlParser from "react-html-parser"

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import ListPlantSpecies from "../components/main/ListPlantSpecies";


const PlantFamilyDetails = ({plant_family_details}) => {
  const isLoading= false;
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ margin: '10px' }}>
        <div className="d-flex flex-column mt-2">
          <div className="d-flex">
            <h2 className="heading">
              <i>{ReactHtmlParser(plant_family_details[0].acf.plant_family)}</i>
            </h2>
            <h4 className="align-self-center pt-2">
              <strong>
                  &nbsp;&nbsp;
                  {plant_family_details[0].acf.family_english && plant_family_details[0].acf.family_english}
              </strong>
            </h4>
          </div>
        </div>
        <div className="d-flex flex-column">
          <p>
            <strong>Description: &nbsp;</strong>
          </p>
          <div className="rtc-content">
            {ReactHtmlParser("Deciduous shrub.Yellow-green flowers; petals strongly two-lipped;<br></br> ovaries separate above middle. Bracts minute or none.<br></br> Berries deep red.Leaves dark green, oblong, widest at or above middle. <br></br>Leaves finely hairy underneath, but not on the edges; leaves open before flowers.<br></br>Branches solid; pith white. Twigs smooth.")}
          </div>
        </div>
        <div className="grid-container">
          <ListPlantSpecies filteredList={plant_family_details} isLoading={isLoading} />
        </div>
      </div>
      <style jsx>{`
        .heading {
          font-size: 2rem;
          color: #0e9d47;
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

export default PlantFamilyDetails;