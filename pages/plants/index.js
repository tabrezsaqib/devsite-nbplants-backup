import React from "react"
import Plants from "../../components/species-selectors/Plants"
import Navbar from "../../components/layouts/Navbar"
import Footer from "../../components/layouts/Footer"
import Head from "next/head"

import { useRouter } from "next/router"

const plants = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{router.query.type == "all"? 'Species | NB Plants' : router.query.type + ' | NB Plants'}</title>
      </Head>
      <Navbar />
      <div>
        <Plants itemsPerPage={12} />
      </div>
      <Footer />
    </>
  )
}

export default plants;
