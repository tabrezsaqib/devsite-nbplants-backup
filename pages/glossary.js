/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from  "../styles/glossary.module.css"

import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";

function Glossary  () {

  return (
    <>
      <Head>
          <title>Glossary | New Brunswick Plants</title>
      </Head>
      <Navbar />
      <div>
        <div  className={styles.glossaryPageContainer}>
        
          <iframe 
          className={styles.glossaryPageContent}
          src="https://devsite-nbplants.api-v2.newbrunswickplants.ca/glossary/">
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Glossary;