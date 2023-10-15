/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/families.module.css"
import ReactHtmlParser from "react-html-parser"

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import ListPlantSpecies from "../components/main/ListPlantSpecies";


const plantFamilyDetails = () => {
  const isLoading= false;
  const currentItems= [
    {
        "id": 7231,
        "slug": "lonicera-canadensis",
        "type": "plants_db",
        "title": "Lonicera canadensis",
        "acf": {
            "plantsnb_id": "4205",
            "plant_family": "<em>Caprifoliaceae</em>",
            "common_name": "Canada Fly-honeysuckle",
            "synonyms_english": "American Fly-honeysuckle",
            "french": "Chèvrefeuille du Canada",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S5, Secure"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Coniferous or mixed woodlands",
                "height": "30-90 cm",
                "bloom_time": "May",
                "flower_colour": [
                    "green to brown",
                    "yellow"
                ],
                "inflorescence": [
                    "doesn't apply"
                ],
                "petal_symmetry": [
                    "bilateral"
                ],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "smooth"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Edges of leaves",
                "fruit_type": [
                    "berry"
                ],
                "fruit_length": "6-8 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous shrub with very slender branches.</p>\n<p>Leaves light green on top, lighter beneath; widest below the middle, edges finely hair.</p>\n<p>Branchlets solid; pith white.</p>\n<p>Flowers paired, yellow to light-green, bell-shaped with five deep lobes and dangle below the branches on long stalks. Flower stalks and bracts are smooth. Berries red.</p>\n<p>&nbsp;</p>\n",
            "varieties": "",
            "synonyms_french": "",
            "hidden_note": "",
            "unique_characteristics": "<ul>\n<li>Pair of dangling yellow to green flowers under the branches</li>\n<li>Very slender branches</li>\n<li>Red berries</li>\n<li>Hairy leaf edges</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 6905,
                    "title": "Lonicera canadensis bud Ayers Lake NB 17 May 2014 187 Jim Goltz4",
                    "caption": "Credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/09185742/Lonicera-canadensis-bud-Ayers-Lake-NB-17-May-2014-187-Jim-Goltz4-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7249,
                    "title": "Lonicera canadensis early fruit Green Lake NB 31 May 2023 2871 Jim Goltz",
                    "caption": "Credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz.jpg 1500w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/23004906/Lonicera-canadensis-early-fruit-Green-Lake-NB-31-May-2023-2871-Jim-Goltz.jpg 1500w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5485,
                    "title": "Lonicera canadensis-Gaspereau R NB ACCDC Sean Blaney 2017-05-20",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161601/Lonicera-canadensis-Gaspereau-R-NB-ACCDC-Sean-Blaney-2017-05-20-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5481,
                    "title": "Lonicera canadensis Becaguimec Stream NB 21 May 2018 P5210122_JGoltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-scaled.jpg",
                    "thumbnail_image_url": "https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-150x150.jpg",
                    "large_srcset": "https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-1024x768.jpg 1024w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-300x225.jpg 300w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-768x576.jpg 768w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-1536x1152.jpg 1536w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-2048x1536.jpg 2048w",
                    "medium_srcset": "https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-300x225.jpg 300w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-1024x768.jpg 1024w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-768x576.jpg 768w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-1536x1152.jpg 1536w, https://devsite-nbplants.api-v2.newbrunswickplants.ca/wp-content/uploads/2023/01/Lonicera-canadensis-Becaguimec-Stream-NB-21-May-2018-P5210122_JGoltz-2048x1536.jpg 2048w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5483,
                    "title": "Lonicera canadensis_fr_Caledonia Gorge NB ACCDC Sean Blaney 2020-07-04",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161407/Lonicera-canadensis_fr_Caledonia-Gorge-NB-ACCDC-Sean-Blaney-2020-07-04-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5484,
                    "title": "Lonicera canadensis_Hemaris diffinis_Sphingidae_Lepidoptera_Breau Ck NB2 ACCDC Sean Blaney 2020-05-24",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161505/Lonicera-canadensis_Hemaris-diffinis_Sphingidae_Lepidoptera_Breau-Ck-NB2-ACCDC-Sean-Blaney-2020-05-24-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5482,
                    "title": "Lonicera canadensis_Britton and Brown",
                    "caption": "Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1008x1024.png 1008w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-295x300.png 295w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-768x780.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1512x1536.png 1512w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-2016x2048.png 2016w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1568x1593.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-295x300.png 295w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1008x1024.png 1008w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-768x780.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1512x1536.png 1512w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-2016x2048.png 2016w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1568x1593.png 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6300,
                    "title": "Lonicera canadensis",
                    "caption": "Credit: FBGA Woodland Fern Trail brochure 1992",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis.png 782w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-300x300.png 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-150x150.png 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-768x767.png 768w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-300x300.png 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-150x150.png 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis-768x767.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/15140020/Lonicera-canadensis.png 782w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/31161305/Lonicera-canadensis_Britton-and-Brown-1568x1593.png",
            "caption": "Britton & Brown, 1913"
        }
    },
    {
        "id": 7232,
        "slug": "lonicera-xylosteum",
        "type": "plants_db",
        "title": "Lonicera xylosteum",
        "acf": {
            "plantsnb_id": "4231",
            "plant_family": "<em>Caprifoliaceae</em>",
            "common_name": "Dwarf Honeysuckle",
            "synonyms_english": "European Fly-honeysuckle",
            "french": "Chèvrefeuille à balais ",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "introduced"
            ],
            "conservation_rank": [
                "SNA, not applicable, non-native species not suitable for conservation activities"
            ],
            "characteristics": {
                "invasive": "Yes",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Open woods, clearings, thickets",
                "height": "1.8-3 m",
                "bloom_time": "May",
                "flower_colour": [
                    "white",
                    "yellow"
                ],
                "inflorescence": [],
                "petal_symmetry": [
                    "bilateral"
                ],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "hairy"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "oval",
                    "rounded"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Branches, leaves",
                "fruit_type": [
                    "berry"
                ],
                "fruit_length": "6 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous shrub.</p>\n<p>Flowers in pairs, white, fading to yellow. Upper lip relatively shallowly lobed; filaments completely hairy. Red flower base remains after petals have dropped. Berries red.</p>\n<p>Leaves egg-shaped and hairy.</p>\n<p>Branches hairy, hollow; pith brown. Buds long-pointed, narrowly conical.</p>\n<p>Native to Eurasia; invasive in North America.</p>\n",
            "varieties": "",
            "synonyms_french": "Camérisier à balais, Camérisier, Chèvrefeuille des haies",
            "hidden_note": "",
            "unique_characteristics": "<ul>\n<li>Egg-shaped leaves</li>\n<li>Hollow and hairy stems</li>\n<li>Red flower base remains after petals have dropped</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 7286,
                    "title": "Lonicera xylosteum Sackville NB3 ACCDC Sean Blaney 2018-09-06",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123101/Lonicera-xylosteum-Sackville-NB3-ACCDC-Sean-Blaney-2018-09-06.jpg 2000w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7287,
                    "title": "Lonicera xylosteum Sackville NB4 ACCDC Sean Blaney 2018-09-06",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27123123/Lonicera-xylosteum-Sackville-NB4-ACCDC-Sean-Blaney-2018-09-06.jpg 2000w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142513/Lonicera-xylosteum_Britton-and-Brown-1568x1790.png",
            "caption": "Credit: Britton & Brown, 1913"
        }
    },
    {
        "id": 7233,
        "slug": "lonicera-morrowii",
        "type": "plants_db",
        "title": "Lonicera morrowii",
        "acf": {
            "plantsnb_id": "4220",
            "plant_family": "<em>Caprifoliaceae</em>",
            "common_name": "Morrow's Honeysuckle",
            "synonyms_english": "Asian Fly-Honeysuckle",
            "french": "Chèvrefeuille de Morrow",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "introduced"
            ],
            "conservation_rank": [
                "SNA, not applicable, non-native species not suitable for conservation activities"
            ],
            "characteristics": {
                "invasive": "yes",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Roadsides, banks, shores, forest edges extending into forests",
                "height": "1.8-2.5 m",
                "bloom_time": "Late May - early June",
                "flower_colour": [
                    "white"
                ],
                "inflorescence": [],
                "petal_symmetry": [
                    "bilateral"
                ],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "hairy"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Flowers, stems, underside of leaves",
                "fruit_type": [
                    "berry"
                ],
                "fruit_length": "6-8 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>White flowers, fading to yellow, nearly regular, hairy, with a pouch-like base (saccate). Filaments hairy only at base; edges of sepals hairy; flower stems densely hairy. Fruit red.</p>\n<p>Leaves narrowly ovate to oblong or triangular-lanceolate. Underside of leaves densely hairy.</p>\n<p>Twigs hairy and hollow; pith brown. Buds obtuse, ovate.</p>\n",
            "varieties": "",
            "synonyms_french": "",
            "hidden_note": "",
            "unique_characteristics": "<ul>\n<li>Hairy white (fading to yellow) flowers</li>\n<li>Hairy leaves, stems, and bracts</li>\n<li>Twigs hollow</li>\n<li>Bracts longer than those of <span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Showy fly-honeysuckle&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}\">Showy Fly-honeysuckle</span> (<em>Lonicera x bella</em>)</li>\n<li>Flower stalk shorter than those of Tartarian Honeysuckle (<em>Lonicera tatarica</em>)</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 6195,
                    "title": "Lonicera morrowii_Dieppe NB2 ACCDC Sean Blaney 2020-06-03",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6197,
                    "title": "Lonicera morrowii_Sackville NB ACCDC Sean Blaney",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161347/Lonicera-morrowii_Sackville-NB-ACCDC-Sean-Blaney.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6196,
                    "title": "Lonicera morrowii_Dieppe NB3 ACCDC Sean Blaney 2020-06-03",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161327/Lonicera-morrowii_Dieppe-NB3-ACCDC-Sean-Blaney-2020-06-03.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7283,
                    "title": "Lonicera morrowii 20220602_AFlemming 20",
                    "caption": "Credit: Andrea Flemming",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-862x1024.jpg 862w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-253x300.jpg 253w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-768x912.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-1293x1536.jpg 1293w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20.jpg 1496w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-253x300.jpg 253w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-862x1024.jpg 862w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-768x912.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20-1293x1536.jpg 1293w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27104924/Lonicera-morrowii-20220602_AFlemming-20.jpg 1496w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5612,
                    "title": "Lonicera morrowii_Britton and Brown",
                    "caption": "Credit: Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-982x1024.png 982w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-288x300.png 288w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-768x801.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-1473x1536.png 1473w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-1964x2048.png 1964w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-1568x1635.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-288x300.png 288w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-982x1024.png 982w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-768x801.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-1473x1536.png 1473w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-1964x2048.png 1964w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141249/Lonicera-morrowii_Britton-and-Brown-1568x1635.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14161307/Lonicera-morrowii_Dieppe-NB2-ACCDC-Sean-Blaney-2020-06-03-1568x1176.jpg",
            "caption": "Credit: Sean Blaney, ACCDC"
        }
    },
    {
        "id": 7234,
        "slug": "lonicera-tatarica",
        "type": "plants_db",
        "title": "Lonicera tatarica",
        "acf": {
            "plantsnb_id": "4226",
            "plant_family": "<em>Caprifoliaceae</em>",
            "common_name": "Tatarian Honeysuckle",
            "synonyms_english": "Tartarian Honeysuckle",
            "french": "Chèvrefeuille de Tartarie",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "introduced"
            ],
            "conservation_rank": [
                "SNA, not applicable, non-native species not suitable for conservation activities"
            ],
            "characteristics": {
                "invasive": "yes",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Open woods and fields, roadsides, disturbed areas, aggressively escaped from cultivation",
                "height": "1.5-4 m",
                "bloom_time": "May-June",
                "flower_colour": [
                    "pink to red"
                ],
                "inflorescence": [
                    "doesn't apply"
                ],
                "petal_symmetry": [
                    "bilateral"
                ],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "smooth"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "",
                "fruit_type": [
                    "berry"
                ],
                "fruit_length": "6-8 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub; invasive. Paired flowers pink or white flowers on flower stalks 15-20 mm long. Leaves oval and smooth. Branches smooth and hollow; pith brown. Native to Eurasia; invasive in New Brunswick. Hybridizes with other honeysuckles, especially Morrow's Honeysuckle (Lonicera morrowii).&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Deciduous shrub. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub; invasive. Paired flowers pink or white flowers on flower stalks 15-20 mm long. Leaves oval and smooth. Branches smooth and hollow; pith brown. Native to Eurasia; invasive in New Brunswick. Hybridizes with other honeysuckles, especially Morrow's Honeysuckle (Lonicera morrowii).&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Paired flowers pink flowers on flower stalks 15-20 mm long. Flowers are occasionally white. Berries red. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub; invasive. Paired flowers pink or white flowers on flower stalks 15-20 mm long. Leaves oval and smooth. Branches smooth and hollow; pith brown. Native to Eurasia; invasive in New Brunswick. Hybridizes with other honeysuckles, especially Morrow's Honeysuckle (Lonicera morrowii).&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Leaves oval and smooth. Branches smooth and hollow; pith brown. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub; invasive. Paired flowers pink or white flowers on flower stalks 15-20 mm long. Leaves oval and smooth. Branches smooth and hollow; pith brown. Native to Eurasia; invasive in New Brunswick. Hybridizes with other honeysuckles, especially Morrow's Honeysuckle (Lonicera morrowii).&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Native to Eurasia; invasive in New Brunswick. Hybridizes with other honeysuckles, especially Morrow&#8217;s Honeysuckle (<em>Lonicera morrowii</em>).</span></p>\n",
            "varieties": "",
            "synonyms_french": "",
            "hidden_note": "",
            "unique_characteristics": "<ul>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Highly invasive Pink or white flowers Hollow shoots&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}\">Pink flowers </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Highly invasive Pink or white flowers Hollow shoots&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}\">Hollow branches<br />\n</span></li>\n<li>Hairless leaves, stems, stalks</li>\n<li>Highly invasive</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 7246,
                    "title": "Lonicera tatarica_Castalia Grand Manan NB 2021-07-12 ACCDC Sean Blaney",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/20145833/Lonicera-tatarica_Castalia-Grand-Manan-NB-2021-07-12-ACCDC-Sean-Blaney.jpg 2000w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5615,
                    "title": "Lonicera tatarica_Britton and Brown",
                    "caption": "Credit: Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1024x997.png 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-300x292.png 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-768x748.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1536x1496.png 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-2048x1995.png 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1568x1527.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-300x292.png 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1024x997.png 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-768x748.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1536x1496.png 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-2048x1995.png 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1568x1527.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141855/Lonicera-tatarica_Britton-and-Brown-1568x1527.png",
            "caption": "Credit: Britton & Brown, 1913"
        }
    },
    {
        "id": 7235,
        "slug": "lonicera-villosa",
        "type": "plants_db",
        "title": "Lonicera villosa",
        "acf": {
            "plantsnb_id": "4228",
            "plant_family": "<em>Caprifoliaceae</em>",
            "common_name": "Mountain Fly-honeysuckle",
            "synonyms_english": "Velvet Honeysuckle",
            "french": "Chèvrefeuille velu",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S5, Secure"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial",
                    "wetlands"
                ],
                "habitat_description": "Peaty or rocky barrens, swamps and bogs",
                "height": "1-1.5 m",
                "bloom_time": "Mid-May - mid-June",
                "flower_colour": [
                    "white",
                    "yellow"
                ],
                "inflorescence": [],
                "petal_symmetry": [
                    "bilateral"
                ],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Branches (when young), leaves, especially edges and underside",
                "fruit_type": [
                    "berry"
                ],
                "fruit_length": "8 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous shrub.</p>\n<p>Pale yellow to creamy white flowers. Flower stalks and bracts are hairy. Bracts at least as long as ovary; petals nearly regular. Ovaries completely fused so each pair of flowers forms one deep blue berry.</p>\n<p>Leaves widest at or above middle; dark green and sparsely hairy above, underside paler with more soft hairs. Leaf edges are hairy. Leaves and flowers emerge at the same time.</p>\n<p>Branches solid; pith white. Young branches are hairy; older branches grey and peeling. Clonal colonies created when branches ouch the ground and root.</p>\n",
            "varieties": "",
            "synonyms_french": "",
            "hidden_note": "",
            "unique_characteristics": "<ul>\n<li>Deep blue berries</li>\n<li>Flowers similar to, but smaller than flowers of Canada Fly-honeysuckle (Lonicera canadensis)</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 4144,
                    "title": "Lonicera villosa_Ward NB2 ACCDC Sean Blaney 2021-05-18",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052206/Lonicera-villosa_Ward-NB2-ACCDC-Sean-Blaney-2021-05-18-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6344,
                    "title": "Lonicera villosa_Ruisseau Chenière_NB (3) 2012-07-25 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214611/Lonicera-villosa_Ruisseau-Cheniere_NB-3-2012-07-25-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6802,
                    "title": "Lonicera villosa Antinouri Lake NB 29 May 2016 9127 Jim Goltz",
                    "caption": "Credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03225148/Lonicera-villosa-Antinouri-Lake-NB-29-May-2016-9127-Jim-Goltz-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4146,
                    "title": "Lonicera villosa_Ward NB4 ACCDC Sean Blaney 2021-05-18",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-scaled.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052202/Lonicera-villosa_Ward-NB4-ACCDC-Sean-Blaney-2021-05-18-scaled.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7285,
                    "title": "Lonicera villosa_Ruisseau Chenière_NB (2) 2012-07-25 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-1024x1024.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-300x300.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-150x150.jpg 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-768x767.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-1536x1534.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-1568x1566.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle.jpg 1707w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-300x300.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-1024x1024.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-150x150.jpg 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-768x767.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-1536x1534.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle-1568x1566.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/27120122/Lonicera-villosa_Ruisseau-Cheniere_NB-2-2012-07-25-ACCDC-David-Mazerolle.jpg 1707w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6343,
                    "title": "Lonicera villosa_Plymouth_NB 2014-06039 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-1024x1024.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-300x300.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-150x150.jpg 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-768x768.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle.jpg 1353w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-300x300.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-1024x1024.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-150x150.jpg 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle-768x768.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214525/Lonicera-villosa_Plymouth_NB-2014-06039-ACCDC-David-Mazerolle.jpg 1353w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6345,
                    "title": "Lonicera villosa_Troaks Mountain_NB 2009-07-21 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214657/Lonicera-villosa_Troaks-Mountain_NB-2009-07-21-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5616,
                    "title": "Lonicera villosa_Britton and Brown",
                    "caption": "Credit: Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-910x1024.png 910w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-267x300.png 267w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-768x864.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1365x1536.png 1365w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1820x2048.png 1820w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1568x1764.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-267x300.png 267w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-910x1024.png 910w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-768x864.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1365x1536.png 1365w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1820x2048.png 1820w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1568x1764.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06142112/Lonicera-villosa_Britton-and-Brown-1568x1764.png",
            "caption": "Credit: Britton & Brown, 1913"
        }
    },
    {
        "id": 7236,
        "slug": "lonicera-oblongifolia",
        "type": "plants_db",
        "title": "Lonicera oblongifolia",
        "acf": {
            "plantsnb_id": "4221",
            "plant_family": "<em>Caprifoliaceae</em>",
            "common_name": "Swamp Fly-honeysuckle",
            "synonyms_english": "",
            "french": "Chèvrefeuille à feuilles oblongues",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S3, Vulnerable"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial",
                    "wetlands"
                ],
                "habitat_description": "Calcium-rich fens",
                "height": ".5-1.5 m (occasionally taller)",
                "bloom_time": "June",
                "flower_colour": [
                    "green to brown",
                    "yellow"
                ],
                "inflorescence": [],
                "petal_symmetry": [
                    "bilateral"
                ],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "smooth"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "lance",
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Underside of leaves",
                "fruit_type": [
                    "berry"
                ],
                "fruit_length": "8 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous shrub.</p>\n<p>Yellow-green flowers; petals strongly two-lipped; ovaries separate above middle. Bracts minute or none. Berries deep red.</p>\n<p>Leaves dark green, oblong, widest at or above middle. Leaves finely hairy underneath, but not on the edges; leaves open before flowers.</p>\n<p>Branches solid; pith white. Twigs smooth.</p>\n",
            "varieties": "",
            "synonyms_french": "",
            "hidden_note": "Xylosteum oblongifolium",
            "unique_characteristics": "<ul>\n<li>Find in swamps and bogs</li>\n<li>Oblong leaves (<em>oblongifolia</em>)</li>\n<li>Distinguish from Mountain Fly-honeysuckle (<em>Lonicera villosa</em>) and Canada Fly-honeysuckle (<a href=\"https://devsite-nbplants.api-v2.newbrunswickplants.ca/plants_db/lonicera-canadensis/\"><em>Lonicera canadensis</em></a>) by:\n<ul>\n<li>downy hairs on the underside of leaves</li>\n<li>lack of hairs on the leaf edges</li>\n</ul>\n</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 7280,
                    "title": "Lonicera oblongifolia Andersonville NB 16 June 2018 P6160050 Jim Goltz",
                    "caption": "Credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225754/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160050-Jim-Goltz.jpg 2000w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4142,
                    "title": "Lonicera oblongifolia-Mud Bk NB2 ACCDC Sean Blaney 2008-07-22",
                    "caption": "Credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052209/Lonicera-oblongifolia-Mud-Bk-NB2-ACCDC-Sean-Blaney-2008-07-22--1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6340,
                    "title": "Lonicera oblongifolia_St Francis River_NB (3) 2013-07-09 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214216/Lonicera-oblongifolia_St-Francis-River_NB-3-2013-07-09-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7279,
                    "title": "Lonicera oblongifolia Andersonville NB 16 June 2018 P6160048 Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-769x1024.jpg 769w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-768x1023.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-1153x1536.jpg 1153w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz.jpg 1501w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-769x1024.jpg 769w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-768x1023.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz-1153x1536.jpg 1153w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225735/Lonicera-oblongifolia-Andersonville-NB-16-June-2018-P6160048-Jim-Goltz.jpg 1501w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7281,
                    "title": "Lonicera oblongifolia_Second Lake_Green River_NB (3) 2013-07-25 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225844/Lonicera-oblongifolia_Second-Lake_Green-River_NB-3-2013-07-25-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7282,
                    "title": "Lonicera oblongifolia_Williamstown Lake_NB (5) 2014-07-10 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-1024x1024.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-300x300.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-150x150.jpg 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-768x768.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-1536x1536.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-1568x1567.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle.jpg 1832w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-300x300.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-1024x1024.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-150x150.jpg 150w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-768x768.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-1536x1536.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle-1568x1567.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/06/26225916/Lonicera-oblongifolia_Williamstown-Lake_NB-5-2014-07-10-ACCDC-David-Mazerolle.jpg 1832w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6341,
                    "title": "Lonicera oblongifolia_St Francis River_NB (4) 2013-07-09 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-1024x1007.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-300x295.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-768x756.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-1536x1511.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-1568x1542.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle.jpg 1906w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-300x295.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-1024x1007.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-768x756.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-1536x1511.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle-1568x1542.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214247/Lonicera-oblongifolia_St-Francis-River_NB-4-2013-07-09-ACCDC-David-Mazerolle.jpg 1906w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6339,
                    "title": "Lonicera oblongifolia habitat_St Francis River_NB 2013-07-09 ACCDC David Mazerolle",
                    "caption": "Credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/18214132/Lonicera-oblongifolia-habitat_St-Francis-River_NB-2013-07-09-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5613,
                    "title": "Lonicera oblongifolia_Britton and Brown",
                    "caption": "Credit: Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1024x998.png 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-300x292.png 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-768x748.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1536x1497.png 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-2048x1996.png 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1568x1528.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-300x292.png 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1024x998.png 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-768x748.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1536x1497.png 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-2048x1996.png 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1568x1528.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06141438/Lonicera-oblongifolia_Britton-and-Brown-1568x1528.png",
            "caption": "Credit: Britton & Brown, 1913"
        }
    },
    {
        "id": 7166,
        "slug": "fagus-grandifolia",
        "type": "plants_db",
        "title": "Fagus grandifolia",
        "acf": {
            "plantsnb_id": "5957",
            "plant_family": "<em>Fagaceae</em>",
            "common_name": "American Beech",
            "synonyms_english": "",
            "french": "Hêtre à grandes feuilles",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S3 (Vulnerable), S4 (Apparently Secure)"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Hardwood forests",
                "height": "Up to 25 m, 100 cm diameter",
                "bloom_time": "May",
                "flower_colour": [],
                "inflorescence": [],
                "petal_symmetry": [],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "alternate"
                ],
                "leaf_blade_edges": [
                    "teethed"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "",
                "fruit_type": [
                    "nut"
                ],
                "fruit_length": "18-22 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": "<p>Bears eat the nuts.</p>\n"
            },
            "description": "<p>Tree up to 25 m tall; 30-100 cm diameter. Live up to 200 years. Broad crown; short trunk.</p>\n<p>Sharply-toothed leaves narrowly oval with long-pointed tip, 7-12 cm long. Straight, parallel veins, 9-14 per side, each vein ends in a tooth. In fall, leaves turn brown; most stay on the tree all winter.</p>\n<p>Pollen flowers in ball-like clusters at the end of long hanging stalks; seed flowers in small clusters of 2-4 toward the shoot tip. Flowers appear at same time as the leaves. Mature fruit a 3-sided nut enclosed in a soft, spiny reddish-brown husk; 1-2 seeds per nut. Mature and shed in autumn.</p>\n<p>Terminal bud long; lateral buds off-set above a leaf scar creating zigzag twigs. On basal part of twig very small, inconspicuous and stalkless. Bud scales in 4 rows; tips brownish-grey.<br />\nTwigs light brown and crooked. Bark thin, smooth; light bluish-grey, often mottled, darkens with age. Due to Beech bark disease, most beech in New Brunswick develop cankers on the bark as they age.</p>\n",
            "varieties": "",
            "synonyms_french": "<span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Hêtre américain, Hêtre d'Amérique&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}\">Hêtre américain, Hêtre d'Amérique</span>",
            "hidden_note": "",
            "unique_characteristics": "<ul>\n<li>Brown leaves stay on branches all winter</li>\n<li>Cankers on bark of most older trees</li>\n<li>Winter buds resemble slender cigars</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 6964,
                    "title": "Fagus grandifolia_20220517_Andrea Flemming Meduxnekeag37",
                    "caption": "Photo credit: Andrea Flemming",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-771x1024.jpg 771w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-226x300.jpg 226w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-768x1020.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-1157x1536.jpg 1157w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37.jpg 1506w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-226x300.jpg 226w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-771x1024.jpg 771w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-768x1020.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37-1157x1536.jpg 1157w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/15000146/Fagus-grandifolia_20220517_Andrea-Flemming-Meduxnekeag37.jpg 1506w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6416,
                    "title": "Fagus grandifolia woods_Mill Bk_NB 2013-07-07 David Mazerolle ACCDC",
                    "caption": "Photo credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013638/Fagus-grandifolia-woods_Mill-Bk_NB-2013-07-07-David-Mazerolle-ACCDC-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6166,
                    "title": "Fagus grandifolia Odell Park Fredericton NB 4 December 2016 JGoltz 6046",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-1024x730.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-300x214.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-768x547.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-1536x1094.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-1568x1117.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-300x214.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-1024x730.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-768x547.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-1536x1094.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046-1568x1117.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160153/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-IMG_6046.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6417,
                    "title": "Fagus grandifolia_Centreville_NB 2016-09-30 David Mazerolle ACCDC",
                    "caption": "Photo credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/20013725/Fagus-grandifolia_Centreville_NB-2016-09-30-David-Mazerolle-ACCDC-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6882,
                    "title": "Fagus grandifolia Chamcook Mountain NB 8 June 2019 IMG_1922 Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-scaled.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/07134434/Fagus-grandifolia-Chamcook-Mountain-NB-8-June-2019-IMG_1922-Jim-Goltz-scaled.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6169,
                    "title": "Fagus grandifolia with canker Odell Park Fredericton NB 4 December 2016 IMG_6045",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160456/Fagus-grandifolia-with-canker-Odella-Park-Fredericton-NB-4-December-2016-IMG_6045.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6167,
                    "title": "Fagus grandifolia Odell Park Fredericton NB 4 December 2016 JGoltz IMG_6036",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/14160253/Fagus-grandifolia-Odell-Park-Fredericton-NB-4-December-2016-JGoltz-IMG_6036.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5630,
                    "title": "Fagus grandifolia_Britton and Brown",
                    "caption": "Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-969x1024.png 969w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-284x300.png 284w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-768x812.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1453x1536.png 1453w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1938x2048.png 1938w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1568x1657.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-284x300.png 284w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-969x1024.png 969w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-768x812.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1453x1536.png 1453w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1938x2048.png 1938w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1568x1657.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/06230431/Fagus-grandifolia_Britton-and-Brown-1568x1657.png",
            "caption": "Britton & Brown, 1913"
        }
    },
    {
        "id": 6785,
        "slug": "aronia-melanocarpa",
        "type": "plants_db",
        "title": "Aronia melanocarpa",
        "acf": {
            "plantsnb_id": "8637",
            "plant_family": "<em>Rosaceae</em>",
            "common_name": "Black Chokeberry",
            "synonyms_english": "",
            "french": "Aronie à fruits noirs",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S5, Secure"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial",
                    "wetlands"
                ],
                "habitat_description": "Wetlands, low areas of old fields, wet thickets",
                "height": "Up to 3 m, usually shorter",
                "bloom_time": "June",
                "flower_colour": [
                    "white"
                ],
                "inflorescence": [
                    "cyme"
                ],
                "petal_symmetry": [
                    "radial"
                ],
                "number_flowers": "",
                "number_petals": "5",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "smooth"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "alternate"
                ],
                "leaf_blade_edges": [
                    "teethed"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Leaves, young branches, and stalks usually smooth, but may have some hairs.",
                "fruit_type": [
                    "stone"
                ],
                "fruit_length": "5-8 mm",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous shrub up to 3 m tall, usually shorter; up to 1 m wide. Plant spreads by suckers.</p>\n<p>Dark green, glossy leaves 3-7 cm long, oval to spoon-shaped with a blunt tip and gradually tapering base. Upper leaf surface dark green and shiny; underside paler. Fall colour orange to purple-red.</p>\n<p>Twigs reddish brown and smooth.</p>\n<p>Buds reddish-brown, terminal buds narrow and pointed. White flowers in small flat-topped cymes. Stamens usually deep pink. Fruit black, ripe in September-October, very astringent.</p>\n",
            "varieties": "",
            "synonyms_french": "<span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Aronia gueules-noires, Aronia noir, Aronie à fruit noir, Gueules noires&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:0,&quot;12&quot;:0}\">Aronia gueules-noires, Aronia noir, Aronie à fruit noir, Gueules noires</span>",
            "hidden_note": "Aronia nigra, Photinia melanocarpa",
            "unique_characteristics": "<ul>\n<li>Flowers small, white, with deep pink stamens</li>\n<li>Leaves smooth or very few hairs</li>\n<li>Black berries</li>\n</ul>\n",
            "image_url": [
                {
                    "id": 7074,
                    "title": "Aronia melanocarpa Bald Hill NB 23 August 2015 P8230056 Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz-.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz-.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz--1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/20231212/Aronia-melanocarpa-Bald-Hill-NB-23-August-2015-P8230056-Jim-Goltz-.jpg 2000w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6986,
                    "title": "Aronia melanocarpa_Little Salmon R_Walton Glen Gorge NB ACCDC Sean Blaney",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000340/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB-ACCDC-Sean-Blaney-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6988,
                    "title": "Aronia melanocarpa-Scotchtown NB ACCDC Sean Blaney 2009-08-20",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000526/Aronia-melanocarpa-Scotchtown-NB-ACCDC-Sean-Blaney-2009-08-20-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6987,
                    "title": "Aronia melanocarpa_Little Salmon R_Walton Glen Gorge NB2 ACCDC Sean Blaney",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/17000432/Aronia-melanocarpa_Little-Salmon-R_Walton-Glen-Gorge-NB2-ACCDC-Sean-Blaney-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7178,
                    "title": "Aronia melanocarpa Cigar Falls NB 28 May 2016 P5280052 Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz-1568x1176.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/12182948/Aronia-melanocarpa-Cigar-Falls-NB-28-May-2016-P5280052-Jim-Goltz.jpg 2000w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6090,
                    "title": "Aronia melanocarpa_Britton and Brown",
                    "caption": "Credit: Britton and Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-760x1024.png 760w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-223x300.png 223w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-768x1035.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1140x1536.png 1140w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1519x2048.png 1519w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1568x2113.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-223x300.png 223w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-760x1024.png 760w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-768x1035.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1140x1536.png 1140w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1519x2048.png 1519w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1568x2113.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/13003022/Aronia-melanocarpa_Britton-and-Brown-1568x2113.png",
            "caption": "Credit: Britton and Brown, 1913"
        }
    },
    {
        "id": 6786,
        "slug": "endotropis-alnifolia",
        "type": "plants_db",
        "title": "Endotropis alnifolia",
        "acf": {
            "plantsnb_id": "30391",
            "plant_family": "<em>Rhamnaceae</em>",
            "common_name": "Alder-leaved Buckthorn",
            "synonyms_english": "American Alder-Buckthorn, Dwarf Buckthorn, Swamp Buckthorn",
            "french": "Nerprun à feuilles d'aulne",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S5, Secure"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial",
                    "wetlands"
                ],
                "habitat_description": "Swamps, edges of bogs, calcium-rich areas",
                "height": "1 m",
                "bloom_time": "Mid-May - Mid-June",
                "flower_colour": [
                    "green to brown",
                    "yellow"
                ],
                "inflorescence": [],
                "petal_symmetry": [],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "alternate"
                ],
                "leaf_blade_edges": [
                    "teethed"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "",
                "fruit_type": [
                    "stone"
                ],
                "fruit_length": "",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous shrub up to 1 m tall.</p>\n<p>Leaves with up to 7 pairs of lateral veins, alternate, teethed. Upper side of leaves a bit shiny.</p>\n<p>Bark green to red, becomes grey with age. No spines. Buds scaly.</p>\n<p>Small flowers greenish-yellow, short-stalked, star-shaped: solitary or in small clusters in leaf axils. Berries red to purple-black, ripen in August, poisonous.</p>\n",
            "varieties": "",
            "synonyms_french": "<span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Nerprun des marécages&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:1},&quot;11&quot;:0,&quot;12&quot;:0}\">Nerprun des marécages</span>",
            "hidden_note": "Rhamnus alnifolia, Alder-leaved Buckthorn",
            "unique_characteristics": "<ol>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Leaves alternate No thorns Fruit larger than Common Buckthorn (Rhamnus cathartica) Maximum height 1 m Flowers greenish-yellow&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\" data-sheets-textstyleruns=\"{&quot;1&quot;:0}{&quot;1&quot;:63,&quot;2&quot;:{&quot;6&quot;:1}}{&quot;1&quot;:81}\">Leaves alternate </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Leaves alternate No thorns Fruit larger than Common Buckthorn (Rhamnus cathartica) Maximum height 1 m Flowers greenish-yellow&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\" data-sheets-textstyleruns=\"{&quot;1&quot;:0}{&quot;1&quot;:63,&quot;2&quot;:{&quot;6&quot;:1}}{&quot;1&quot;:81}\">No thorns </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Leaves alternate No thorns Fruit larger than Common Buckthorn (Rhamnus cathartica) Maximum height 1 m Flowers greenish-yellow&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\" data-sheets-textstyleruns=\"{&quot;1&quot;:0}{&quot;1&quot;:63,&quot;2&quot;:{&quot;6&quot;:1}}{&quot;1&quot;:81}\">Fruit larger than Common Buckthorn (<em>Rhamnus cathartica</em>) </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Leaves alternate No thorns Fruit larger than Common Buckthorn (Rhamnus cathartica) Maximum height 1 m Flowers greenish-yellow&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\" data-sheets-textstyleruns=\"{&quot;1&quot;:0}{&quot;1&quot;:63,&quot;2&quot;:{&quot;6&quot;:1}}{&quot;1&quot;:81}\">Maximum height 1 m </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Leaves alternate No thorns Fruit larger than Common Buckthorn (Rhamnus cathartica) Maximum height 1 m Flowers greenish-yellow&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\" data-sheets-textstyleruns=\"{&quot;1&quot;:0}{&quot;1&quot;:63,&quot;2&quot;:{&quot;6&quot;:1}}{&quot;1&quot;:81}\">Flowers greenish-yellow</span></li>\n</ol>\n",
            "image_url": [
                {
                    "id": 6741,
                    "title": "Endotropis alnifolia_Monument Bk_NB (4) 2009-06-30 ACCDC David Mazerolle",
                    "caption": "Photo credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6740,
                    "title": "Endotropis alnifolia_Monument Bk_NB (2) 2009-06-30 ACCDC David Mazerolle",
                    "caption": "Photo credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192214/Endotropis-alnifolia_Monument-Bk_NB-2-2009-06-30-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6739,
                    "title": "Endotropis alnifolia_Coles Island_NB (3) 2014-06-15 ACCDC David Mazerolle",
                    "caption": "Photo credit: David Mazerolle, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192126/Endotropis-alnifolia_Coles-Island_NB-3-2014-06-15-ACCDC-David-Mazerolle-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/21192300/Endotropis-alnifolia_Monument-Bk_NB-4-2009-06-30-ACCDC-David-Mazerolle-1568x1176.jpg",
            "caption": "Photo credit: David Mazerolle, ACCDC"
        }
    },
    {
        "id": 6787,
        "slug": "rhamnus-cathartica",
        "type": "plants_db",
        "title": "Rhamnus cathartica",
        "acf": {
            "plantsnb_id": "8597",
            "plant_family": "<em>Rhamnaceae</em>",
            "common_name": "European Buckthorn",
            "synonyms_english": "Common Buckthorn, Purging Buckthorn",
            "french": "Nerprun cathartique",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "introduced"
            ],
            "conservation_rank": [
                "SNA, not applicable, non-native species not suitable for conservation activities"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Hedgerows, open woods",
                "height": "Up to 6 m",
                "bloom_time": "Late May - Early June",
                "flower_colour": [
                    "green to brown",
                    "yellow"
                ],
                "inflorescence": [
                    "cluster"
                ],
                "petal_symmetry": [],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "opposite"
                ],
                "leaf_blade_edges": [
                    "teethed"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "",
                "fruit_type": [
                    "stone"
                ],
                "fruit_length": "",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub or small tree to 6 m tall, occasionally up to 20 m. Leaves with 2-3 pairs of lateral veins, clustered near ends of twigs. Leaves short-stalked with finely-teethed edges. Leaves often get rust infection early summer. Fall colour yellow. Bark of small stems has white horizontal lines (lenticels); mature trunks dark, rough, ridged, and scaly. Branches and twigs usually end in a thorn; rough from leaf scars. Twigs reddish brown and waxy. Buds reddish brown, oval, pointed and scaled. Flower petals yellowish or greenish. Fruit black, round stones that persist into winter. Native to Eurasia; invasive.&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Deciduous shrub or small tree to 6 m tall, occasionally up to 20 m. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub or small tree to 6 m tall, occasionally up to 20 m. Leaves with 2-3 pairs of lateral veins, clustered near ends of twigs. Leaves short-stalked with finely-teethed edges. Leaves often get rust infection early summer. Fall colour yellow. Bark of small stems has white horizontal lines (lenticels); mature trunks dark, rough, ridged, and scaly. Branches and twigs usually end in a thorn; rough from leaf scars. Twigs reddish brown and waxy. Buds reddish brown, oval, pointed and scaled. Flower petals yellowish or greenish. Fruit black, round stones that persist into winter. Native to Eurasia; invasive.&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Leaves with 2-3 pairs of lateral veins, clustered near ends of twigs. Leaves short-stalked with finely-teethed edges. Leaves often get rust infection early summer. Fall colour yellow. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub or small tree to 6 m tall, occasionally up to 20 m. Leaves with 2-3 pairs of lateral veins, clustered near ends of twigs. Leaves short-stalked with finely-teethed edges. Leaves often get rust infection early summer. Fall colour yellow. Bark of small stems has white horizontal lines (lenticels); mature trunks dark, rough, ridged, and scaly. Branches and twigs usually end in a thorn; rough from leaf scars. Twigs reddish brown and waxy. Buds reddish brown, oval, pointed and scaled. Flower petals yellowish or greenish. Fruit black, round stones that persist into winter. Native to Eurasia; invasive.&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Bark of small stems has white horizontal lines (lenticels); mature trunks dark, rough, ridged, and scaly. Branches and twigs usually end in a thorn; rough from leaf scars. Twigs reddish brown and waxy. Buds reddish brown, oval, pointed and scaled. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub or small tree to 6 m tall, occasionally up to 20 m. Leaves with 2-3 pairs of lateral veins, clustered near ends of twigs. Leaves short-stalked with finely-teethed edges. Leaves often get rust infection early summer. Fall colour yellow. Bark of small stems has white horizontal lines (lenticels); mature trunks dark, rough, ridged, and scaly. Branches and twigs usually end in a thorn; rough from leaf scars. Twigs reddish brown and waxy. Buds reddish brown, oval, pointed and scaled. Flower petals yellowish or greenish. Fruit black, round stones that persist into winter. Native to Eurasia; invasive.&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Flower petals yellowish or greenish. Fruit black, round stones that persist into winter. </span></p>\n<p><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Deciduous shrub or small tree to 6 m tall, occasionally up to 20 m. Leaves with 2-3 pairs of lateral veins, clustered near ends of twigs. Leaves short-stalked with finely-teethed edges. Leaves often get rust infection early summer. Fall colour yellow. Bark of small stems has white horizontal lines (lenticels); mature trunks dark, rough, ridged, and scaly. Branches and twigs usually end in a thorn; rough from leaf scars. Twigs reddish brown and waxy. Buds reddish brown, oval, pointed and scaled. Flower petals yellowish or greenish. Fruit black, round stones that persist into winter. Native to Eurasia; invasive.&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Native to Eurasia; invasive.</span></p>\n",
            "varieties": "",
            "synonyms_french": "<span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Nerprun commun, Nerprun purgatif&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:0,&quot;12&quot;:0}\">Nerprun commun, Nerprun purgatif</span>",
            "hidden_note": "Rhamnus catharticus",
            "unique_characteristics": "<ol>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Usually have thorns at end of twigs Toothed leaves rounder than other buckthorns Black fruit clusters persist into winter&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Usually have thorns at end of twigs </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Usually have thorns at end of twigs Toothed leaves rounder than other buckthorns Black fruit clusters persist into winter&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Toothed leaves rounder than other buckthorns </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Usually have thorns at end of twigs Toothed leaves rounder than other buckthorns Black fruit clusters persist into winter&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}\">Black fruit clusters persist into winter</span></li>\n</ol>\n",
            "image_url": [
                {
                    "id": 7928,
                    "title": "Rhamnus cathartica-leaves Hovey Hill NB 31 May 2023 R0026884 Jim Goltz",
                    "caption": "Credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz.jpg 2000w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004810/Rhamnus-cathartica-leaves-Hovey-Hill-NB-31-May-2023-R0026884-Jim-Goltz.jpg 2000w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 7927,
                    "title": "Rhamnus cathartica Fredericton NB 27 June 2010 156 Jim Goltz",
                    "caption": "Credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz.jpg 1875w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/08/16004756/Rhamnus-cathartica-Fredericton-NB-27-June-2010-156-Jim-Goltz.jpg 1875w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6006,
                    "title": "Rhamnus cathartica Fredericton Botanic Garden NB 29 January 2023 R0023649 _Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz.jpg 1875w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001331/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023649-_Jim-Goltz.jpg 1875w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6005,
                    "title": "Rhamnus cathartica Fredericton Botanic Garden NB 29 January 2023 R0023618 _Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-768x1023.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-1153x1536.jpg 1153w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-1537x2048.jpg 1537w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-1568x2090.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz.jpg 1876w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-768x1023.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-1153x1536.jpg 1153w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-1537x2048.jpg 1537w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz-1568x2090.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001236/Rhamnus-cathartica-Fredericton-Botanic-Garden-NB-29-January-2023-R0023618-_Jim-Goltz.jpg 1876w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 6007,
                    "title": "Rhamnus cathartica_Britton and Brown",
                    "caption": "Credit: Britton and Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-971x1024.png 971w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-284x300.png 284w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-768x810.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1457x1536.png 1457w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1942x2048.png 1942w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1568x1653.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-284x300.png 284w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-971x1024.png 971w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-768x810.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1457x1536.png 1457w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1942x2048.png 1942w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1568x1653.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/11001416/Rhamnus-cathartica_Britton-and-Brown-1568x1653.png",
            "caption": "Credit: Britton and Brown, 1913"
        }
    },
    {
        "id": 6788,
        "slug": "frangula-alnus",
        "type": "plants_db",
        "title": "Frangula alnus",
        "acf": {
            "plantsnb_id": "8593",
            "plant_family": "<em>Rhamnaceae</em>",
            "common_name": "Glossy Buckthorn",
            "synonyms_english": "Alder Buckthorn, European Alder Buckthorn, Glossy False Buckthorn",
            "french": "Nerprun bourdaine",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "introduced"
            ],
            "conservation_rank": [
                "SNA, not applicable, non-native species not suitable for conservation activities"
            ],
            "characteristics": {
                "invasive": "Yes",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Roadsides, forest edges, open woodlands",
                "height": "Up to 7 m",
                "bloom_time": "June",
                "flower_colour": [],
                "inflorescence": [],
                "petal_symmetry": [],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "alternate"
                ],
                "leaf_blade_edges": [
                    "smooth"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Buds, Twigs, Underside of leaves",
                "fruit_type": [
                    "stone"
                ],
                "fruit_length": "",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous tree or shrub up to 7 m tall.</p>\n<p>Oval leaves widest at tip with 7-8 pairs of prominent veins, edges without teeth, but often wavy. Top side of leaf shiny (glossy), underside paler with hairs along the veins. Fall colour yellow. Pale green flowers in clusters in the leaf axils. Berries red then black when ripe, stay on plants well into the winter.</p>\n<p>Bark dark brown with pale, raised horizontal marks (lenticels). Twigs hairy. Buds tan, covered in fine hairs. No thorns.</p>\n<p>Invasive plant, native to Eurasia.</p>\n",
            "varieties": "",
            "synonyms_french": "<span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Aulne noir, Bourdaine, Bourgène&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:1},&quot;11&quot;:0,&quot;12&quot;:0}\">Aulne noir, Bourdaine, Bourgène</span>",
            "hidden_note": "Rhamnus frangula",
            "unique_characteristics": "<ol>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Glossy leaves with deep veins and wavy edges Black berries cluster in the leaf axils, remain on the plant through the winter&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\">Glossy leaves with deep veins and wavy edges </span></li>\n<li><span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Glossy leaves with deep veins and wavy edges Black berries cluster in the leaf axils, remain on the plant through the winter&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:9091,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16370588},&quot;10&quot;:2,&quot;11&quot;:4,&quot;12&quot;:0,&quot;16&quot;:14}\">Black berries cluster in the leaf axils, remain on the plant through the winter</span></li>\n</ol>\n",
            "image_url": [
                {
                    "id": 4092,
                    "title": "Frangula alnus_Big Salmon R NB ACCDC Sean Blaney 2020-06-27",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052327/Frangula-alnus_Big-Salmon-R-NB-ACCDC-Sean-Blaney-2020-06-27-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4096,
                    "title": "Frangula alnus-Up Blackville NB ACCDC Sean Blaney 2007-08-14",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052321/Frangula-alnus-Up-Blackville-NB-ACCDC-Sean-Blaney-2007-08-14-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4093,
                    "title": "Frangula alnus_Dieppe NB ACCDC Sean Blaney 2020-06-03",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-scaled.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052325/Frangula-alnus_Dieppe-NB-ACCDC-Sean-Blaney-2020-06-03-scaled.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4095,
                    "title": "Frangula alnus-Puccinia coronata-Parlee Beach NB ACCDC Sean Blaney 2017-06-20",
                    "caption": "Photo credit: Sean Blaney, ACCDC\n",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-768x576.jpg 768w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052323/Frangula-alnus-Puccinia-coronata-Parlee-Beach-NB-ACCDC-Sean-Blaney-2017-06-20-768x576.jpg 768w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4094,
                    "title": "Frangula alnus-Pucccinia coronata-Parlee Beach NB4 ACCDC Sean Blaney 2017-06-20",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-1536x1152.jpg 1536w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052324/Frangula-alnus-Pucccinia-coronata-Parlee-Beach-NB4-ACCDC-Sean-Blaney-2017-06-20-1536x1152.jpg 1536w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4884,
                    "title": "Frangula alnus_Britton and Brown",
                    "caption": "Credit: Britton and Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-923x1024.png 923w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-271x300.png 271w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-768x852.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1385x1536.png 1385w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1847x2048.png 1847w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1568x1739.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-271x300.png 271w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-923x1024.png 923w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-768x852.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1385x1536.png 1385w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1847x2048.png 1847w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1568x1739.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/01/11205027/Frangula-alnus_Britton-and-Brown-1568x1739.png",
            "caption": "Credit: Britton and Brown, 1913"
        }
    },
    {
        "id": 6789,
        "slug": "populus-balsamifera",
        "type": "plants_db",
        "title": "Populus balsamifera",
        "acf": {
            "plantsnb_id": "9044",
            "plant_family": "<em>Salicaceae</em>",
            "common_name": "Balsam Poplar",
            "synonyms_english": "Balm of Gilead, Black Poplar, Cottonwood, Eastern Balsam Poplar, Hackmatack, Tacamahac",
            "french": "Peuplier baumier",
            "wolastoqey": "",
            "migmaq": "",
            "plant_type": "Woody",
            "type": [
                "native"
            ],
            "conservation_rank": [
                "S5, Secure"
            ],
            "characteristics": {
                "invasive": "",
                "habitat": [
                    "terrestrial"
                ],
                "habitat_description": "Forests, fields, shores of rivers and lakes, disturbed sites",
                "height": "Up to 25 m",
                "bloom_time": "",
                "flower_colour": [
                    "pink to red"
                ],
                "inflorescence": [],
                "petal_symmetry": [],
                "number_flowers": "",
                "number_petals": "",
                "number_rays": "",
                "lip_shape": [],
                "lip_description": "",
                "nectar_spur": "",
                "stipule_shape": "",
                "flower_description": "",
                "stems": [
                    "smooth"
                ],
                "growth_form": [],
                "leaf_type": [
                    "simple"
                ],
                "leaf_arrangement": [
                    "alternate"
                ],
                "leaf_blade_edges": [
                    "teethed"
                ],
                "leaf_shape": [
                    "oval"
                ],
                "leaf_number": "",
                "leaf_divisions": [],
                "leaf_duration": [
                    "deciduous"
                ],
                "leaves_per_node": "",
                "leaf_description": "",
                "position_of_hairs": "Leaf stalk, Twigs",
                "fruit_type": [
                    "capsule"
                ],
                "fruit_length": "",
                "fruit_color": [],
                "seed_dispersal": "",
                "spore_location": [],
                "spore_under_leaf": [],
                "spore_shape": [],
                "spore_covering": [],
                "spore_description": "",
                "uses": "",
                "wildlife_benefits": ""
            },
            "description": "<p>Deciduous tree up to 25 m tall, 50 cm diameter. Maximum age 70 years. Crown narrow, somewhat columnar, or open with a few stout ascending branches.</p>\n<p>Leaves 7-12 cm long, broadly oval with long, drawn-out tip. Base usually rounded, sometimes wedge-shaped or slightly heart-shaped. Warty glands may be present at the base. Upper surface dark green; underside silvery green, usually stained with orange resin blotches. Edges finely toothed with many short, rounded teeth that turn inward. Edges sometimes partially smooth. Leaf stalk green, hairy, approximately the same length as the leaf blade. Leaf scars small, triangular.</p>\n<p>Bark smooth, greenish-brown, often red-tinged, when young; with age becomes grey with flat-topped ridges with irregular v-shaped furrows. Furrows mostly at the bottom part of the trunk. Twigs bright reddish-brown turning dark orange then grey. Markings (lenticels) large, sparse.</p>\n<p>Buds orange-borwn, up to 25 mm long, with scales. Terminal bud round or slightly angled. Very resinous, fragrant. Side buds parallel to the twig. Pollen catkins 7-10 cm long, seed catkins 6-8 cm long in flower, 10-13 cm long when mature. Seed capsules 6-7 mm long, hairless, seeds 2 mm..</p>\n",
            "varieties": "",
            "synonyms_french": "<span data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Baumier, Liard, Peuplier, Peuplier balsamifère, Peuplier tacamahacca&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:1},&quot;11&quot;:0,&quot;12&quot;:0}\">Baumier, Liard, Peuplier, Peuplier balsamifère, Peuplier tacamahacca</span>",
            "hidden_note": "",
            "unique_characteristics": "",
            "image_url": [
                {
                    "id": 6810,
                    "title": "Populus balsamifera Antinouri Lake NB 29 May 2016 9065 Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz.jpg 1875w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/03/03230623/Populus-balsamifera-Antinouri-Lake-NB-29-May-2016-9065-Jim-Goltz.jpg 1875w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4193,
                    "title": "Populus balsamifera-Sackville NB ACCDC Sean Blaney 2009-06-14",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-scaled.jpg 1920w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-225x300.jpg 225w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-768x1024.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1152x1536.jpg 1152w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1536x2048.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1568x2091.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052056/Populus-balsamifera-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-scaled.jpg 1920w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5994,
                    "title": "Populus balsamifera Boiestown NB 20 August 2017 6087_Jim Goltz",
                    "caption": "Photo credit: Jim Goltz",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/10202905/Populus-balsamifera-Boiestown-NB-20-August-2017-6087_Jim-Goltz-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4191,
                    "title": "Populus balsamifera-lf underside-Sackville NB ACCDC Sean Blaney 2009-06-14",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-808x1024.jpg 808w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-237x300.jpg 237w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-768x973.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1212x1536.jpg 1212w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1616x2048.jpg 1616w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1568x1987.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-scaled.jpg 2020w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-237x300.jpg 237w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-808x1024.jpg 808w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-768x973.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1212x1536.jpg 1212w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1616x2048.jpg 1616w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-1568x1987.jpg 1568w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052100/Populus-balsamifera-lf-underside-Sackville-NB-ACCDC-Sean-Blaney-2009-06-14-scaled.jpg 2020w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 4192,
                    "title": "Populus balsamifera-rich swamp-North R-Lewis Mtn NB2 ACCDC Sean Blaney 2017-07-19 ACCDC Sean Blaney 2017-07-19",
                    "caption": "Photo credit: Sean Blaney, ACCDC",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-scaled.jpg",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-150x150.jpg",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-1568x1176.jpg 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-300x225.jpg 300w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-1024x768.jpg 1024w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-768x576.jpg 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-1536x1152.jpg 1536w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-2048x1536.jpg 2048w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2022/11/05052058/Populus-balsamifera-rich-swamp-North-R-Lewis-Mtn-NB2-ACCDC-Sean-Blaney-2017-07-19-ACCDC-Sean-Blaney-2017-07-19-1568x1176.jpg 1568w",
                    "url": "",
                    "target": ""
                },
                {
                    "id": 5572,
                    "title": "Populus balsamifera_Britton and Brown",
                    "caption": "Credit: Britton & Brown, 1913",
                    "full_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown.png",
                    "thumbnail_image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-150x150.png",
                    "large_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-931x1024.png 931w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-273x300.png 273w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-768x844.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1397x1536.png 1397w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1863x2048.png 1863w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1568x1724.png 1568w",
                    "medium_srcset": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-273x300.png 273w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-931x1024.png 931w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-768x844.png 768w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1397x1536.png 1397w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1863x2048.png 1863w, https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1568x1724.png 1568w",
                    "url": "",
                    "target": ""
                }
            ]
        },
        "featured_image": {
            "image_url": "https://wp-newbrunswickplants.s3.us-east-2.amazonaws.com/2023/02/03161005/Populus-balsamifera_Britton-and-Brown-1568x1724.png",
            "caption": "Credit: Britton & Brown, 1913"
        }
    }
];
const activeFilterList=currentItems
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ margin: '10px' }}>
        <div className="d-flex flex-column mt-2">
          <div className="d-flex">
            <h2 className="heading">
              <strong>Caprifoliaceae</strong>
            </h2>
            <h4 className="align-self-center pt-2">
              <strong>
                <i>
                  &nbsp;&nbsp;
                  Caprifoliaceae
                </i>
              </strong>
            </h4>
          </div>
        </div>
        <div className="d-flex flex-column">
          <p>
            <strong>Description: &nbsp;</strong>
          </p>
          <div className="rtc-content">
            {ReactHtmlParser("Deciduous shrub.Yellow-green flowers; petals strongly two-lipped;<br></br> ovaries separate above middle. Bracts minute or none.<br></br> Berries deep red.Leaves dark green, oblong, widest at or above middle. <br></br>Leaves finely hairy underneath, but not on the edges; leaves open before flowers.<br></br>Branches solid; pith white. Twigs smooth.")}
          </div>
        </div>
        <div className="grid-container">
          <ListPlantSpecies filteredList={currentItems} isLoading={isLoading} activeFilterList={currentItems}/>
        </div>
      </div>
      <style jsx>{`
        .heading {
          font-size: 2rem;
          color: #0e9d47;
        }
        .rtc-content {
          background-color: #f6f7f9;
          padding: 15px 20px;
          border-radius: 10px;
          font-size: 15px;
        }`}</style>
      <Footer />
    </>
  )
}

export default plantFamilyDetails;