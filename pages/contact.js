/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";


import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";


const contact = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div>
      <div className="contactPageContainer">
        <iframe 
        className="contactPageContent"
        src="https://api-v2.newbrunswickplants.ca/contact-us/">
        </iframe>
      </div>
      <style jsx>
      {`
        .contactPageContainer{
         position: relative;
       overflow:hidden;
       margin:0;
         padding-top: 100%;
        }
        .contactPageContent{
          position: absolute;
          top:0;
          border: 0;
          margin:0;
          left:0;
          width: 100%;
          height:100%;
        }
        
        @media screen and (min-width: 1200px){
          .contactPageContainer{
            position: relative;
            margin:0;
            padding-top: 30%;
           }
           .contactPageContent{
             position: absolute;
             top:0;
             border: 0;
             margin:0;
             left:0;
             width: 100%;
             height:100%;
             
           }
          }
      `}
    </style>
    </div>
    <Footer />
    </>
  )
}

export default contact;