import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import ConservationRank from "../components/conservation-rank/conservationRank";
import Head from "next/head";


const ConservationRankPage = () => {
    return (
        <>
            <Head>
                <title>Conservation Rank | NB Plants</title>
            </Head>
            <Navbar />
            <ConservationRank/>
            <Footer isFixed={true} />
        </>
    )
}

export default ConservationRankPage