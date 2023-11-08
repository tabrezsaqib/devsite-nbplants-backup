/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser"
import { useRouter } from 'next/router'
import Link from "next/link";

import * as api from "../generics/api"
const API_URL = process.env.API_URL

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";

const PlantFamilies = () => {
    const [plantFamily, setPlantFamily] = useState({});
    const Router = useRouter()
    useEffect(() => {
        fetchDetails();
    }, [])

    const fetchDetails = async () => {
        const response = await api.get(`${API_URL}plants_db`)
        const a = Object.groupBy(response.data, data => (data.acf.plant_family));
        setPlantFamily(a);
    }

    const loadPlantFamily = async (param) => {
        Router.push({
            pathname: "/plantFamilyDetails",
            query: { keyword: param },
        }).then(() => {
            Router.reload()
        })
    }

    return (
        <>
            <Header />
            <Navbar />
            {Object.keys(plantFamily).length > 0 &&
                <div style={{ margin: '10px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Plant Families</h2>
                    {Object.keys(plantFamily).map((family, i) => (
                        <div key={i} className="listOfPlants">
                            <Link href="/plantFamilyDetails"
                                onClick={() => loadPlantFamily(plantFamily[family][0]['acf']['plant_family'])}>
                                <span className="familyLink">  {ReactHtmlParser(plantFamily[family][0]['acf']['plant_family'])}</span>
                            </Link>
                            /
                            <span className="familyEnglish">{plantFamily[family][0]['acf']['family_english'] ? plantFamily[family][0]['acf']['family_english'] : '-'}</span>
                        </div>))
                    }
                </div>}
            <style jsx>{`
        .familyLink {
            color: #0e9d47;
            font-style: italic;
            font-weight:bold;
            margin-right: 8px;
        }
        .listOfPlants{
            text-align:center;
            margin: 10px 0;
        }
        .familyEnglish{
            margin-left:8px;
        }`}</style>
            <Footer />
        </>
    )
}

export default PlantFamilies