/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import * as api from "../../generics/api";
import ReactHtmlParser from "react-html-parser"
import { useRouter } from 'next/router'
import ListPlantSpecies from '../main/ListPlantSpecies'
import styles from "../../styles/SearchResults.module.css"

const SEARCH_URL = process.env.SEARCH_URL

const ConservationRankDetails = ({ plant_id }) => {
    const [plantFamily, setPlantFamily] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        async function fetch() {
            if (!router.isReady) return
            if (router.query.keyword) {
                fetchDetails(router.query.keyword);
            }
        }
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, router.isReady, router.query.keyword])

    const fetchDetails = async (char) => {
        const response = await api.get(`${SEARCH_URL}search?keyword=${char}&per_page=50`)
        setLoading(false)
        const filtered = response.data.filter((res) => { console.log(res.acf.conservation_rank); if (res.acf.conservation_rank) return res.acf.conservation_rank.includes(char) })
        setPlantFamily(filtered)
    }

    return (
        <>
            {isLoading ? (
                <div className={[styles.imgContainer, "d-flex", 'center-align'].join(" ")}>
                    <img className={styles.imgContent} src="../../images/loading.gif" alt="loader" />
                </div>) :
                <div style={{ margin: '10px' }}>
                    <>
                        <div className="d-flex flex-column mt-2">
                            <div className="d-flex">
                                <h2 className="heading">
                                    <i>{api.capitalizeFirstLetter(router.query.keyword)}</i>
                                </h2>
                            </div>
                        </div> </>

                    <ListPlantSpecies filteredList={plantFamily} isLoading={isLoading} />
                    <div className="site-in-progress">
                        Site in progress. Not all species yet available.
                    </div>
                </div>}
            <style jsx>{`
        .heading {
          font-size: 2rem;
          color: #0e9d47;
        }
        .site-in-progress{
          margin-top: 30px;
          margin-bottom:50px;
          text-align: center;
          font-size: 20px;
        }
        .center-align{
            margin-left: 50%;
        }
        .rtc-content {
          background-color: #f6f7f9;
          padding: 15px 20px;
          border-radius: 10px;
          font-size: 15px;
        }`}</style>
        </>
    )
}

export default ConservationRankDetails