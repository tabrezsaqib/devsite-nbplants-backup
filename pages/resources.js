/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";


const resources = () => {
  return (
    <div>
      <div className="resourcesPageContainer">
        <iframe 
        className="resourcesPageContent"
        src="https://api-v2.newbrunswickplants.ca/resources/">
        </iframe>
      </div>
      <style jsx>
      {`
        .resourcesPageContainer{
         position: relative;
         overflow:hidden;
         margin:0;
         padding-top: 100vh;
        }
        .resourcesPageContent{
          position: absolute;
          top:0;
          border: 0;
          margin:0;
          left:0;
          width: 100%;
          height:100%;
        }
        @media screen and (min-width: 1200px){
          .resourcesPageContainer{
           }
           .resourcesPageContent{
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

export default resources;


