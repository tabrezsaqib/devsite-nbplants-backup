/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */

import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser"

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../../styles/SearchResults.module.css"
import { DialogContent, DialogActions, Button, Divider, Stack, IconButton } from "@mui/material";
import { Close, Print } from "@mui/icons-material";

function PlantListModal({ openModal, handleModal }) {
    const [isLoading, setLoading] = useState(false)
    const { filteredPlantList } = useSelector(state => state.post)

   

    return (
        <>
            <Dialog onClose={handleModal} open={openModal} maxWidth="md">
                <DialogTitle>
                    <Stack direction="row" justifyContent="space-between">
                        <div>
                            Plant List
                        </div>
                        <div>
                            <Button  sx={{displayPrint: 'none'}} color="success"  variant="contained" endIcon={<Print />} onClick={() => { window.print() }}>
                                Print
                            </Button>
                            <IconButton sx={{ ml: '10px',displayPrint: 'none' }} aria-label="close" onClick={handleModal}>
                                <Close />
                            </IconButton>
                        </div>
                    </Stack></DialogTitle>
                <DialogContent>
                    {isLoading ? (
                        <div className={[styles.imgContainer, "d-flex", 'center-align'].join(" ")}>
                            <img className={styles.imgContent} src="../../images/loading.gif" alt="loader" />
                        </div>) :
                        filteredPlantList.length > 0 &&
                        <div style={{ margin: '10px' }}>

                            <div className="row " >
                                {filteredPlantList.map((family, i) => (
                                    <>  <div key={i} className="listOfPlants  col-sm-12 col-md-6  col-lg-6 ">
                                        <Link legacyBehavior
                                            href={{
                                                pathname: `/plants/${family.slug}`,
                                                query: { type: family.acf.plant_type },
                                            }}>
                                            <a className="familyLink">  {ReactHtmlParser(family.acf.common_name)}</a>
                                        </Link> /
                                        <Link legacyBehavior
                                            href={{
                                                pathname: `/plants/${family.slug}`,
                                                query: { type: family.acf.plant_type },
                                            }}>
                                            <a className="familyLink">  {ReactHtmlParser(family.acf.latin)}</a>
                                        </Link>

                                    </div></>))
                                }</div>
                        </div>}
                </DialogContent>

                <Divider></Divider>
                <DialogActions>
                    <Button sx={{ color: '#0e9d47' ,displayPrint: 'none'}} onClick={handleModal}>Close</Button>
                </DialogActions>
            </Dialog>
            <style jsx>{`
            .familyLink {
                color: #0e9d47;
                font-style: italic;
                font-weight:bold;
                margin-right: 8px;
                cursor: pointer
            }
            .center-align{
                margin-left: 50%;
            }
            .listOfPlants{
                text-align:center;
                margin: 10px 0;
            }`
            }</style>
        </>
    )
}

export default PlantListModal