/* eslint-disable @next/next/no-img-element */
import React, {useLayoutEffect, useEffect, useRef, useState, Component, ReactPropTypes } from "react";
import axios from "axios";
import * as ReactDOM  from 'react-dom';

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";


function Glossary  () {

  const [bodyHeight, setbodyHeight] = useState(0);
  const elementRef = useRef();

  return (
    <>
    <Header />
    <Navbar />
    <div >
       <div  className="glossaryPageContainer">
      
        <iframe 
        className="glossaryPageContent"
        src="https://api-v2.newbrunswickplants.ca/glossary/"
frameBorder="0"
        >
        </iframe>
      </div>
      <style jsx>
      {`
        .glossaryPageContainer{
         position: relative;
         overflow:hidden;
         margin:0;
         height:100%;
         padding-top: 100vh;
        }
        .glossaryPageContent{
          position: absolute;
          top:0;
          border: 0;
          margin:0;
          left:0;
          width: 105%;
          height:100%;
        }
        @media screen and (min-width: 1200px){
          .glossaryPageContainer{
            padding-top: 4200px;  
           }
           .glossaryPageContent{
             position: absolute;
             width: 100%;
             height:  4200px;
             top:0;
             border: 0;
             margin:0;
             left:0;
           }
          }
      `}
    </style>
    </div>
    <Footer />
    </>
  )
}

export default Glossary;