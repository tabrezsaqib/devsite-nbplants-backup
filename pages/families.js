/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";


const families = () => {
  return (
    <div>
      <div className="familiesPageContainer">
        <iframe 
        className="familiesPageContent"
        src="https://api-v2.newbrunswickplants.ca/plant-families/">
        </iframe>
      </div>
      <style jsx>
      {`
        .familiesPageContainer{
         position: relative;
         overflow:hidden;
         margin:0;
         padding-top: 100vh;
        }
        .familiesPageContent{
          position: absolute;
          top:0;
          border: 0;
          margin:0;
          left:0;
          width: 100%;
          height:100%;
        }
        @media screen and (min-width: 1200px){
          .familiesPageContainer{
           }
           .familiesPageContent{
             position: absolute;
             width: 100vw;
             height: 100vh;
             box-sizing:border-box;
             top:0;
             border: 0;
             margin:0;
             left:0;
           }
          }
      `}
    </style>
    </div>
  )
}

export default families;