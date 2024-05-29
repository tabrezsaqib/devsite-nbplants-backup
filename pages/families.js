/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/families.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";


const families = () => {
  return (
    <>
      <Head>
          <title>Families | NB Plants</title>
      </Head>
      <Navbar />
      <div>
        <div className={styles.familiesPageContainer}>
          <iframe 
          className={styles.familiesPageContent}
          src="https://devsite-nbplants.api-v2.newbrunswickplants.ca/plant-families/">
          </iframe>
        </div>
        <style jsx>
        {`
          
        `}
      </style>
      </div>
      <Footer />
    </>
  )
}

export default families;