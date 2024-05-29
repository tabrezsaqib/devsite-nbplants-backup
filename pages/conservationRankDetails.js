import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import ConservationRankDetails from "../components/conservation-rank/conservationRankDetails";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';


const ConservationRankDetailsPage = () => {
  const router = useRouter()
  const [capitalizedKeyword, setCapitalizedKeyword] = useState('');
  console.log(router.query.keyword);

  useEffect(() => {
    if (router.query.keyword) {
      const keyword = router.query.keyword;
      const capitalizedFirst = keyword.charAt(0).toUpperCase() + keyword.slice(1);
      const capitalized = capitalizedFirst.replace(/(:\s*\w)/g, match => match.toUpperCase());
      if (capitalized.search('sna') >= 0 || capitalized.search('Sna') >= 0) {
        setCapitalizedKeyword(capitalized.replace(/sna/ig, 'SNA'))
    } else {
      setCapitalizedKeyword(capitalized);
    }
    }
    
  }, [router.query.keyword]);

  return (
    <>
      <Head>
        <title>{router.query.keyword === 'Invasive'? 'Invasive Species' : capitalizedKeyword} | NB Plants</title>
      </Head>
      <Navbar />
      <ConservationRankDetails />
      <Footer />
    </>
  )
}
export default ConservationRankDetailsPage