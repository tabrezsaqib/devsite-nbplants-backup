/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
// import * as api from "../generics/api";
import axios from "axios";
import styles from "../styles/families.module.css"
import ReactHtmlParser from "react-html-parser"
// import { useRouter } from 'next/router'
import { connect } from "react-redux"

// const SEARCH_URL = process.env.SEARCH_URL

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import ListPlantSpecies from "../components/main/ListPlantSpecies";


const plantFamilyDetails = ({ plantFamily }) => {
  // const [plantFamily, setPlantFamily] = useState([]);
  // const router = useRouter()
  // useEffect(() => {
  //   if(router.query.keyword){
  //   fetchDetails();
  //   }
  // }, [router])

  // const fetchDetails = async () => {
  //   const response = await api.get(
  //     `${SEARCH_URL}search?keyword=${router.query.keyword}&per_page=50`
  //   )
  //   console.log(response.data)
  //   response.data.shift();
  //   setPlantFamily(response.data.length > 0 ? response.data : [])
  // }


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
            <p>
              <strong>Description: &nbsp;</strong>
            </p>
            <div className="rtc-content">
              {ReactHtmlParser(plantFamily[0].acf.family_description)}
            </div>
          </div>
          <div >
            <ListPlantSpecies filteredList={plantFamily} isLoading={isLoading} />
          </div>
          <div className="site-in-progress">
            Site in progress. Not all species yet available.
          </div>
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