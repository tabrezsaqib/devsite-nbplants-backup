/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser"
import { useRouter } from 'next/router'

import * as api from "../generics/api"
const API_URL = process.env.API_URL

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import ListPlantSpecies from "../components/main/ListPlantSpecies";



const PlantFamilies = () => {
    const [plantFamily, setPlantFamily] = useState({});
    useEffect(() => {
        fetchDetails();
    }, [])

    const fetchDetails = async () => {
        const response = await api.get(`${API_URL}plants_db`)
        const a = Object.groupBy(response.data, data => (data.acf.plant_family));
        console.log(a)
        setPlantFamily(a);
    }


    const isLoading = false;
    return (
        <>
            <Header />
            <Navbar />
            {Object.keys(plantFamily).length > 0 &&
                <div style={{ margin: '10px' }}>
                   <h2 style={{textAlign:'center', marginBottom:'20px'}}>Families</h2>
                    <div style={{ width: "50%", alignItems: 'center', margin: '10px 25%' }}>
                        <table className="table table-striped">
                            <thead >
                                <tr>
                                    <th scope="col">Families</th>
                                    <th scope="col">English Common Name</th>
                                </tr>
                            </thead>
                            <tbody>

                                {Object.keys(plantFamily).map((family, i) => (
                                    <tr key={i}>
                                        <td><div className="familyLink">{plantFamily[family][0]['acf']['plant_family']}</div></td>
                                        <td>{plantFamily[family][0]['acf']['family_english']}</td>
                                    </tr>))
                                }</tbody>
                        </table>
                    </div>
                </div>}
            <style jsx>{`
        .familyLink {
            color: #0e9d47;
            font-style: italic;
            font-weight:bold;
        }
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
            border-color: #f0f0f0;
            border-style: solid;
            border-width: 2px;
        }
        .table>:not(:last-child)>:last-child>*{
            border-bottom-color: #f0f0f0;
        }`}</style>
            <Footer />
        </>
    )
}

export default PlantFamilies