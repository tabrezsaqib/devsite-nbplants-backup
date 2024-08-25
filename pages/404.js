/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";
import Alert from '@mui/material/Alert';
import { AlertTitle } from "@mui/material";


const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | New Brunswick</title>
      </Head>
      <Navbar />
      <Alert severity="error" style={{
        width: '80%',
        margin: '5% 0 0 10%'
      }} >
        <AlertTitle>Page Not Found </AlertTitle>
        The requested URL was not found. Please check back again later.
      </Alert>
      <Footer isFixed={true} />
    </>
  )
}

export default PageNotFound;

