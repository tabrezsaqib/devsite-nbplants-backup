/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";


const contact = () => {
  return (
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
          overflow:scoll;
          margin:0;
            padding-top: 57%;
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
  )
}

export default contact;
