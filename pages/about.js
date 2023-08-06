/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";



const about = () => {
  return (
    <div>
      <div className="aboutPageContainer">
        <iframe 
        className="aboutPageContent"
        src="https://api-v2.newbrunswickplants.ca/elementor-7299/">
        </iframe>
      </div>
      <style jsx>
      {`
        .aboutPageContainer{
         position: relative;
       overflow:hidden;
       margin:0;
         padding-top: 100%;
        }
        .aboutPageContent{
          position: absolute;
          top:0;
          border: 0;
          margin:0;
          left:0;
          width: 100%;
          height:100%;
          
        }
        @media screen and (min-width: 1200px){
          .aboutPageContainer{
            position: relative;
          overflow:scoll;
          margin:0;
            padding-top: 57%;
           }
           .aboutPageContent{
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
  )
}

export default about;