/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react"
import * as api from "../../generics/api"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { useRouter } from "next/router"
import Router from "next/router"
import ReactHtmlParser from "react-html-parser"
import styles from "../../styles/Global.module.scss"
import BrokenPageAlert from "../../generics/brokenPageAlert";
import Grid from '@mui/material/Grid';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import SilderImg from "./SliderImg"

import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import { useSelector, useDispatch } from "react-redux"
import {
  getPopoverData,
  triggerToolTip,
} from "../../redux/actions/getPlantsAction"
import FamilyDetails from "../families/familyDetails"
import { Stack } from "@mui/material"
import CustomizedTooltips from "../side-nav/Tooltip"
import "yet-another-react-lightbox/plugins/captions.css";


import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const PlantSpeciesDetails = ({ plant_details }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch()
  const { popoverData } = useSelector(state => state.post)

  useEffect(() => {
    return () => {
      router.beforePopState(() => true);
    };
  }, [router])

  const cancelToolTip = (status) => {
    dispatch(triggerToolTip(status))
  }

  const slideShow = (index) => {
    setOpen(true)
    setSlideIndex(index)
  }

  const loadPlantFamily = async (param) => {
    if (param) {
      Router.push({
        pathname: "/plantFamilyDetails",
        query: { keyword: param },
      }).then(() => {
      })
    }
  }

  const formatCase = (data) => {
    if (data.search('sna') >= 0 || data.search('Sna') >= 0) {
      return data.replace(/sna/ig,'SNA')  
    }else{
      return data
    }
  }

  const capitalizeAfterColon = (inputString) => {
    return inputString.replace(/(:\s*\w)/g, match => match.toUpperCase());
  }

  const slides = (imgArr) => {
    return imgArr?.map((img) => {
      return {
        'src': img.full_image_url,
        title: img.title,
        description: img.caption.replace('|', '\n\n')
      }
    })
  }

  return (
    <>
    <Navbar />
    <div className="mt-3">
      {plant_details? (
        <div className="row" key={plant_details.id}>
          <div className="col-lg-3" style={{borderRight: '1px solid #e0e1e3'}}> 
            <div className="side-bar">
              <div className={styles.intro_media_mobile}>
                <div className="d-flex justify-content-between d-print-none">
                  <span>&nbsp;</span>
                  <a className="d-flex back-arrow" onClick={() => router.back()}>
                    <h4>
                      <i className="bi bi-arrow-left"></i>
                    </h4>
                    <p>&nbsp;Back to Search</p>
                  </a>
                </div>
              
              </div>
              <div className="d-none d-lg-block">
                <div className="d-flex flex-wrap">
                {Object.keys(plant_details.acf).includes("image_url") &&
                plant_details.acf.image_url !== undefined &&
                plant_details.acf.image_url.length > 0 ? (
                  plant_details.acf.image_url.slice(0, 6).map((item, index) => (
                    <div
                      key={index}
                      className={[
                        styles.img_container_media,
                        "img-container img-tabs",
                      ].join(" ")}
                      onClick={() => slideShow(index)}>
                      <img src={item.full_image_url} alt="plant image" onContextMenu={(e)=>e.preventDefault()} />
                    </div>
                  ))
                ) : (
                  <div className="d-flex flex-column text-center stock-img-container">
                    <img src="../../images/no_result_found.png" alt="" onContextMenu={(e)=>e.preventDefault()} />
                    <span>Oops! No images found!</span>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-end mt-2">
                {Object.keys(plant_details.acf).includes("image_url") &&
                  plant_details.acf.image_url.length !== 0 &&
                  plant_details.acf.image_url.length > 6 && (
                    <a
                      className="view-more d-print-none"
                      onClick={() => slideShow(6)}>
                      View more
                    </a>
                  )}

                  <Lightbox
                   styles={{ root: { "--yarl__slide_captions_container_background": "#0000" } }}
                      index={slideIndex}
                      open={open}
                      close={() => setOpen(false)}
                      slides={slides(plant_details.acf.image_url)}
                      render={{ slide: SilderImg }}
                      plugins={[Captions, Fullscreen, Zoom, Thumbnails]}
                      captions={{ descriptionTextAlign: 'end' }}

                    />
              </div>
              <div
                className={
                  plant_details.acf.unique_characteristics !== ""
                    ? "unique-characteristics"
                    : "hide"
                }>
                <p>
                  <strong>Unique Characteristics</strong>
                </p>
                <div className="row">
                  <div className="col-sm-10 col-md-10 col-lg-12 col-xl-6">
                    <div className="unique-characteristics">
                      {ReactHtmlParser(
                        plant_details.acf.unique_characteristics
                      )}
                    </div>
                  </div>
                  <div className="col-sm-2 col-md-2 col-lg-12 col-xl-6">
                    <div
                      className={
                        plant_details.featured_image.image_url !== false || plant_details.featured_image.image_url !== null
                          ? "featured-image"
                          : "featured-image disable-pointer-events"
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#featured-image">
                      {plant_details.featured_image.image_url == false || plant_details.featured_image.image_url == null ? (
                        <div className="d-flex flex-column text-center stock-img-container">
                          <img src="../../images/no_result_found.png" alt="" onContextMenu={(e)=>e.preventDefault()} />
                          <span>Oops! No images found!</span>
                        </div>
                      ) : (
                        <img
                          src={plant_details.featured_image.image_url}
                          alt="plant image" onContextMenu={(e)=>e.preventDefault()}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
                  {plant_details.acf.distribution_map_id ? <>
                    <div className="row">
                    <div className="col-md-3 col-lg-4">  <strong>Distribution </strong></div>
                    <div className="col-md-3  col-lg-8">
                    <span style={{float:'right', fontSize:'12px' , display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                      Source: AC CDC, 2023
                        <span style={{ float: 'right', fontSize: '12px', textAlign:'right' }}>
                        <div><span className="grey-dot"></span>
                          Recent (&gt;= 2000)</div>
                          <div> <span className="green-dot"></span>
                          Historic (&lt; 2000)</div>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-12 col-xl-12">
                      <div
                        className={
                          plant_details.acf.distribution_map_id !== ''
                            ? "featured-image"
                            : "featured-image disable-pointer-events"
                        }
                        data-bs-toggle="modal"
                        data-bs-target="#distribution-map">
                           {plant_details.acf.distribution_map_id == '' ? (
                          <div className="d-flex flex-column text-center stock-img-container">
                            <img src="../../images/no_result_found.png" alt="" onContextMenu={(e)=>e.preventDefault()}/>
                            <span>Oops! No images found!</span>
                          </div>
                        ) : (
                          <img
                            src={`../../images/maps/${plant_details.acf.distribution_map_id}.png`}
                            alt="Distribution map" onContextMenu={(e)=>e.preventDefault()}
                          />
                        )}
                      </div>
                    </div>
                  </div></>:""}
              </div>
              {plant_details.acf.similar_species &&
                    <div className="d-none d-lg-block">
                      <br></br>
                      <p><strong>Explore Similar Plants</strong></p>
                      <FamilyDetails plant_id={plant_details.acf.similar_species} />
                      {/* <ListPlantSpecies filteredList={plantFamily} isLoading={isLoading} /> */}
                    </div>
              }
              <div className="d-flex align-self-center">
                  <div
                    style={{ zIndex: '10600' }}
                    className="modal fade"
                    id="sideNavPopUp12"
                    role="dialog"
                    tabIndex="-1"
                    aria-labelledby="sideNavPopUpLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="sideNavPopUpLabel">
                            {
                              popoverData.length > 0 &&
                              popoverData[0].acf.glossary_name}
                          </h5>
                          <button
                            type="button"
                            onClick={() => cancelToolTip(false)}
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          {
                            popoverData.length > 0 &&
                            ReactHtmlParser(popoverData[0].acf.description)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div
                className="modal fade"
                id="featured-image"
                style={{ zIndex: '10600' }}
                tabIndex="-1"
                aria-labelledby="featured-image-label"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body" style={{ margin: "0 auto" }}>
                      <div className="modal-image-container">
                        {plant_details.featured_image.image_url == null ? (
                            <div className="d-flex flex-column text-center stock-img-container">
                              <img
                                src="../../images/no_result_found.png"
                                alt="" onContextMenu={(e) => e.preventDefault()}
                              />
                              {/* <h3>Oops! No images found!</h3> */}
                            </div>
                          ) : (
                            <div>
                              <img
                                src={plant_details.featured_image.image_url}
                                alt="plant image" onContextMenu={(e) => e.preventDefault()}
                              />
                              <p className="img-caption">
                                {plant_details.featured_image.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div
                  className="modal fade"
                  id="distribution-map"
                  style={{ zIndex: '10600' }}
                  tabIndex="-1"
                  aria-labelledby="distribution-map-label"
                  aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body" style={{ margin: "0 auto" }}>
                        <div className="modal-image-container">
                          {plant_details.acf.distribution_map_id === '' ? (
                            <div className="d-flex flex-column text-center stock-img-container">
                              <img
                                src="../../images/no_result_found.png"
                                alt="" onContextMenu={(e)=>e.preventDefault()}
                              />
                              {/* <h3>Oops! No images found!</h3> */}
                            </div>
                          ) : (
                            <div>
                              <img
                                src={`../../images/maps/${plant_details.acf.distribution_map_id}.png`}
                                alt="Distribution map" onContextMenu={(e)=>e.preventDefault()}
                              />
                              <p className="img-caption">
                               <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>Source: </span>AC CDC, 2023
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
            </div>
          </div>
          <div className="col-lg-9">
            <div
              className={[
                styles.content_section_media_query,
                "content-section",
              ].join(" ")}>
              <div className={styles.intro_media_desktop}>
                <div className="d-flex justify-content-between d-print-none">
                  <span>&nbsp;</span>
                  <a className="d-flex back-arrow" onClick={() => router.back()}>
                    <h4>
                      <i className="bi bi-arrow-left"></i>
                    </h4>
                    <p>&nbsp;Back to Search</p>
                  </a>
                </div>
                <div className="d-flex flex-column mt-2">
                  <div className="d-flex">
                    <h2 className="heading">
                      <strong>{plant_details.acf.common_name}</strong>
                    </h2>
                    <h4 className="align-self-center pt-2">
                      <strong>
                        <i>
                          &nbsp;&nbsp;
                          {plant_details.title}
                        </i>
                      </strong>
                    </h4>
                    {plant_details.acf.characteristics.invasive && <CustomizedTooltips name="invasive"/>}
                  </div>
                  {plant_details.acf.synonyms_english && (
                    <div className="d-flex">
                      <p>
                        <strong>Alternate Names: &nbsp;</strong>
                      </p>
                      {ReactHtmlParser(plant_details.acf.synonyms_english)}
                    </div>
                  )}
                </div>
              </div>
                {plant_details.acf.wolastoqey && (
                  <div className="d-flex">
                    <p>
                      <strong>Wolastoqey: &nbsp;</strong>
                    </p>
                    <p>{ReactHtmlParser(plant_details.acf.wolastoqey)}</p>
                  </div>
                )}
                {plant_details.acf.migmaq && (
                  <div className="d-flex">
                    <p>
                      <strong>Mi&apos;gmaq: &nbsp;</strong>
                    </p>
                    <p>{ReactHtmlParser(plant_details.acf.migmaq)}</p>
                  </div>
                )}
              {plant_details.acf.plant_family && (
                <div className="d-flex label-value-section">
                  <p>
                    <strong>Plant Family: &nbsp;</strong>
                  </p>
                  <span className="familyLink" onClick={() => loadPlantFamily(plant_details.acf.plant_family)}> {ReactHtmlParser(plant_details.acf.plant_family)}</span>
                  {plant_details.acf.family_english?<span>&#x3B;&nbsp;</span> : ""}
                  {plant_details.acf.family_english && (
                    <div className="d-flex">
                      <span className="familyEnglish" onClick={() => loadPlantFamily(plant_details.acf.plant_family)}> {ReactHtmlParser(plant_details.acf.family_english)}</span>
                    </div>
                  )}
                </div>
              )}
              <div className="mb-3">
                {plant_details.acf.description && (
                  <div className="d-flex flex-column">
                    <div className="rtc-content">
                      {ReactHtmlParser(plant_details.acf.description)}
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex label-value-section mt-2">
                {plant_details.acf.plant_type && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Plant Type: &nbsp;</strong>
                      {api.capitalizeFirstLetter(plant_details.acf.plant_type)}
                    </p>
                  </div>
                )}
              </div>
              <div className="d-flex label-value-section">
                {plant_details.acf.type.length !== 0 &&
                    plant_details.acf.type.map((item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Type: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    ))}
              </div>
              {/* <h4>
                <strong>Characteristics</strong>
              </h4>
              <hr /> */}

              <div className="d-flex flex-column">
              {plant_details.acf.conservation_rank ?
                      plant_details.acf.conservation_rank.length !== 0 && (
                        <div className="d-flex">
                          <p>
                            <strong>Conservation Rank: &nbsp;</strong>
                          </p>
                          {plant_details.acf.conservation_rank.map(
                            (item, index) => (
                              <div className="d-flex" key={index}>
                                <p>
                                  {api.capitalizeFirstLetter(formatCase(capitalizeAfterColon(item)))}
                                  {item !==
                                    plant_details.acf.conservation_rank
                                      .slice(-1)
                                      .pop() ? (
                                    <span>, &nbsp;</span>
                                  ) : (
                                    ""
                                  )}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      ) : ''}
                {plant_details.acf.characteristics.invasive && (
                  <div className="d-flex label-value-section">
                    <p style={{ color: 'red' }}>
                      <strong style={{ color: 'red' }}>Invasive: &nbsp;</strong>
                      {plant_details.acf.characteristics.invasive}
                    </p>
                  </div>
                )}
                <div className="d-flex">
                    {plant_details.acf.characteristics.habitat ?
                      plant_details.acf.characteristics.habitat.length !== 0 ?
                        <div className="d-flex">
                          <p>
                            <strong>Habitat: &nbsp;</strong>
                          </p>
                          {plant_details.acf.characteristics.habitat.map(
                            (item, index) => (
                              <div className="d-flex" key={index}>
                                <p>
                                  {api.capitalizeFirstLetter(item)}
                                  {item !==
                                    plant_details.acf.characteristics.habitat
                                      .slice(-1)
                                      .pop() ? (
                                    <span>, &nbsp;</span>
                                  ) : (
                                    ""
                                  )}
                                </p>
                              </div>
                            )
                          )}

                          {plant_details.acf.characteristics.habitat_description && (
                            <div className="d-flex">
                              <span>&#x3B;&nbsp;</span>
                              {plant_details.acf.characteristics.habitat_description}
                            </div>
                          )}
                        </div> :
                        <div className="d-flex">
                          <p>
                            <strong>Habitat: &nbsp;</strong>
                          </p>
                          {plant_details.acf.characteristics.habitat_description && (
                            <div className="d-flex">
                              {plant_details.acf.characteristics.habitat_description}
                            </div>
                          )
                          }
                        </div>
                      :
                      <div className="d-flex">
                        <p>
                          <strong>Habitat: &nbsp;</strong>
                        </p>
                        {plant_details.acf.characteristics.habitat_description && (
                          <div className="d-flex">
                            {plant_details.acf.characteristics.habitat_description}
                          </div>
                        )
                        }
                      </div>
                    }
                  </div>
                  {plant_details.acf.characteristics.cycle && 
                  plant_details.acf.characteristics.cycle.length !== 0  ?
                      plant_details.acf.characteristics.cycle !== 0 && (
                        <div className="d-flex">
                          <p>
                            <strong>Life Cycle: &nbsp;</strong>
                          </p>
                          {plant_details.acf.characteristics.cycle.map(
                            (item, index) => (
                              <div className="d-flex" key={index}>
                                <p>
                                  {api.capitalizeFirstLetter(item)}
                                  {item !==
                                    plant_details.acf.characteristics.cycle
                                      .slice(-1)
                                      .pop() ? (
                                    <span>, &nbsp;</span>
                                  ) : (
                                    ""
                                  )}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      ) : ''}
                {plant_details.acf.characteristics.growth_form
                          .length !== 0 && (
                            <div className="d-flex label-value-section">
                              <p>
                                <strong>Growth Form: &nbsp;</strong>
                              </p>
                              {plant_details.acf.characteristics.growth_form.map(
                                (item, index) => (
                                  <div className="d-flex" key={index}>
                                    <p>
                                      {api.capitalizeFirstLetter(item)}
                                      {index + 1 === plant_details.acf.characteristics.growth_form.length ? '' : ","} &nbsp;
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                )}
                {plant_details.acf.characteristics.height && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Size: &nbsp;</strong>
                      {plant_details.acf.characteristics.height}
                    </p>
                  </div>
                )}
                {/* FLOWERS */}
                {(router.query.type !== "Fern" && (plant_details.acf.characteristics.bloom_time || 
                 plant_details.acf.characteristics.flower_colour.length !== 0 || plant_details.acf.characteristics.inflorescence.length !== 0 ||
                 plant_details.acf.characteristics.number_flowers || plant_details.acf.characteristics.number_petals ||
                 plant_details.acf.characteristics.petal_symmetry.length !== 0 || plant_details.acf.characteristics.lip_shape.length !== 0 ||
                 plant_details.acf.characteristics.lip_description  || plant_details.acf.characteristics.nectar_spur ||
                 plant_details.acf.characteristics.flower_description || plant_details.acf.characteristics.stipule_shape || 
                 plant_details.acf.characteristics.stems.length !== 0 
                 ))
                && (
                  <div className="accordion mb-3" id="accordion1">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          <strong>Flowers</strong>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordion1">
                        <div className="accordion-body">
                          <Grid container spacing={2}>
                            {plant_details.acf.characteristics.bloom_time && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Bloom Time: &nbsp;</strong>
                                  {plant_details.acf.characteristics.bloom_time}
                              </Grid>
                            )}

                            {plant_details.acf.characteristics.flower_colour
                              .length !== 0 && (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Flower Colour: &nbsp;</strong>
                                {plant_details.acf.characteristics.flower_colour.map(
                                  (item, index) => (
                                    <>
                                        {api.capitalizeFirstLetter(item)}
                                        {item !==
                                        plant_details.acf.characteristics.flower_colour
                                          .slice(-1)
                                          .pop() ? (
                                          <span>, &nbsp;</span>
                                        ) : (
                                          ""
                                        )}
                                      </>
                                  )
                                )}
                              </Grid>
                            )}
                            {plant_details.acf.characteristics.inflorescence
                                  .length !== 0 &&
                                  plant_details.acf.characteristics.inflorescence.map(
                                    (item, index) => (
                                      <Grid item xs={12} sm={12} md={6} lg={6} >
                                          <strong>
                                            Flower Arrangement: &nbsp;
                                          </strong>
                                            {api.capitalizeFirstLetter(item)}
                                      </Grid>
                                    )
                              )}
                              {plant_details.acf.characteristics
                                .petal_symmetry !== 0 &&
                                plant_details.acf.characteristics.petal_symmetry.map(
                                  (item, index) => (
                                    <Grid item xs={12} sm={12} md={6} lg={6} >
                                        <strong>Petal Symmetry: &nbsp;</strong>
                                          {api.capitalizeFirstLetter(item)}
                                          &nbsp;
                                    </Grid>
                                  )
                              )}
                            {plant_details.acf.characteristics
                              .number_flowers && (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Number Flowers: &nbsp;</strong>
                                  {
                                    plant_details.acf.characteristics
                                      .number_flowers
                                  }
                                </Grid>
                            )}
                            {plant_details.acf.characteristics
                              .number_rays && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Number Rays: &nbsp;</strong>
                                  {
                                    plant_details.acf.characteristics
                                      .number_rays
                                  }
                              </Grid>
                            )}
                            {plant_details.acf.characteristics
                              .number_petals && (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Number Petals: &nbsp;</strong>
                                  {
                                    plant_details.acf.characteristics
                                      .number_petals
                                  }
                                </Grid>
                            )}
                            {plant_details.acf.characteristics.lip_shape
                              .length !== 0 &&
                              plant_details.acf.characteristics.lip_shape.map(
                                (item, index) => (
                                  <Grid item xs={12} sm={12} md={6} lg={6} >
                                      <strong>Lip Shape: &nbsp;</strong>
                                        {api.capitalizeFirstLetter(item)}
                                        &nbsp;
                                  </Grid>
                                )
                              )}
                            {plant_details.acf.characteristics
                              .lip_description && (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Lip Description: &nbsp;</strong>
                                  {
                                    plant_details.acf.characteristics
                                      .lip_description
                                  }
                                </Grid>
                            )}
                            {plant_details.acf.characteristics.nectar_spur && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Nectar Spur: &nbsp;</strong>
                                {plant_details.acf.characteristics.nectar_spur}
                              </Grid>
                            )}
                            {plant_details.acf.characteristics.stipule_shape && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                  <strong>Stipule Shape: &nbsp;</strong>
                                {api.capitalizeFirstLetter(plant_details.acf.characteristics.stipule_shape)}
                              </Grid>
                            )}
                              {plant_details.acf.characteristics.flower_description && (
                                 <Grid item xs={12} sm={12} md={12} lg={12} >
                                    <strong>Flower Description: &nbsp;</strong>
                                  <div className="rtc-content">
                                    {ReactHtmlParser(plant_details.acf.characteristics.flower_description)}
                                  </div>
                                 </Grid>
                            )}
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* LEAVES */}
                { ( plant_details.acf.characteristics.leaf_duration.length !== 0 || plant_details.acf.characteristics.leaf_type.length !== 0 ||
                  plant_details.acf.characteristics.leaf_arrangement.length !== 0 || plant_details.acf.characteristics.leaf_blade_edges.length !== 0 ||
                  plant_details.acf.characteristics.leaf_shape.length !== 0 || plant_details.acf.characteristics.leaf_number || 
                  plant_details.acf.characteristics.leaflet_divisions.length !==0  || plant_details.acf.characteristics.leaves_per_node || 
                  plant_details.acf.characteristics.leaf_description) &&
                <div className="accordion mb-3" id="accordion2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        // aria-expanded="true"
                        aria-controls="collapseTwo">
                        <strong>Leaves</strong>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion2">
                      <div className="accordion-body">
                        <Grid container spacing={2}>
                          {plant_details.acf.characteristics.leaf_duration
                            .length !== 0 &&
                            plant_details.acf.characteristics.leaf_duration.map(
                              (item, index) => (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                    <strong>Leaf Duration: &nbsp;</strong>
                                      {api.capitalizeFirstLetter(item)}
                                </Grid>
                              )
                            )}
                          {plant_details.acf.characteristics.leaf_type
                            .length !== 0 &&
                            plant_details.acf.characteristics.leaf_type.map(
                              (item, index) => (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                    <strong>Leaf Type: &nbsp;</strong>
                                      {api.capitalizeFirstLetter(item)}
                                </Grid>
                              )
                            )}
                          {plant_details.acf.characteristics.leaf_arrangement
                            .length !== 0 &&
                            plant_details.acf.characteristics.leaf_arrangement.map(
                              (item, index) => (
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                    <strong>Leaf Arrangement: &nbsp;</strong>
                                      {api.capitalizeFirstLetter(item)}
                                </Grid>
                              )
                            )}

                          {plant_details.acf.characteristics.leaf_blade_edges
                            .length !== 0 && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                <strong>Leaf Edge: &nbsp;</strong>
                              {plant_details.acf.characteristics.leaf_blade_edges.map(
                                (item, index) => (
                                  <>
                                      {api.capitalizeFirstLetter(item)}
                                      {item !==
                                      plant_details.acf.characteristics.leaf_blade_edges
                                        .slice(-1)
                                        .pop() ? (
                                        <span>, &nbsp;</span>
                                      ) : (
                                        ""
                                      )}
                                  </>
                                )
                              )}
                            </Grid>
                          )}

                          {plant_details.acf.characteristics.leaf_shape
                            .length !== 0 && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                <strong>Leaf Shape: &nbsp;</strong>
                              {plant_details.acf.characteristics.leaf_shape.map(
                                (item, index) => (
                                  <>
                                      {api.capitalizeFirstLetter(item)}
                                      {item !==
                                      plant_details.acf.characteristics.leaf_shape
                                        .slice(-1)
                                        .pop() ? (
                                        <span>, &nbsp;</span>
                                      ) : (
                                        ""
                                      )}
                                  </>
                                )
                              )}
                              </Grid>
                          )}

                          {plant_details.acf.characteristics.leaf_number && (
                             <Grid item xs={12} sm={12} md={6} lg={6} >
                                <strong>Leaf Number: &nbsp;</strong>
                              {plant_details.acf.characteristics.leaf_number}
                             </Grid>
                          )}
                          {plant_details.acf.characteristics.leaflet_divisions
                            .length !== 0 && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                <strong>Leaflet Divisions: &nbsp;</strong>
                              {plant_details.acf.characteristics.leaflet_divisions.map(
                                (item, index) => (
                                    <>
                                      {api.capitalizeFirstLetter(item)}
                                      {item !==
                                      plant_details.acf.characteristics.leaflet_divisions
                                        .slice(-1)
                                        .pop() ? (
                                        <span>, &nbsp;</span>
                                      ) : (
                                        ""
                                      )}
                                    </>
                                )
                              )}
                            </Grid>
                          )}
                          {plant_details.acf.characteristics
                            .leaves_per_node && (
                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                <strong>Leaves Per Node: &nbsp;</strong>
                              {
                                plant_details.acf.characteristics
                                  .leaves_per_node
                              }
                            </Grid>
                          )}
                            {plant_details.acf.characteristics.leaf_description && (
                               <Grid item xs={12} sm={12} md={12} lg={12} >
                                  <strong>Leaves Description: &nbsp;</strong>
                                <div className="rtc-content">
                                  {ReactHtmlParser(plant_details.acf.characteristics.leaf_description)}
                                </div>
                              </Grid>
                            )}
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>}

            {/* FRUITS */}
            {(router.query.type !== "Fern" && (plant_details.acf.characteristics.fruit_type.length !== 0 || plant_details.acf.characteristics.fruit_length ||
                  plant_details.acf.characteristics.fruit_color.length !== 0 || plant_details.acf.characteristics.seed_dispersal) )&& (
                              <div className="accordion mb-3" id="accordion3">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseThree"
                                      aria-expanded="true"
                                      aria-controls="collapseThree">
                                      <strong>Fruits</strong>
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseThree"
                                    className="accordion-collapse show"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordion3">
                                    <div className="accordion-body">
                                    <Grid container spacing={2}>
                                        {plant_details.acf.characteristics.fruit_type
                                          .length !== 0 &&
                                          plant_details.acf.characteristics.fruit_type.map(
                                            (item, index) => (
                                              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                                                  <strong>Fruit Type: &nbsp;</strong>
                                                    {api.capitalizeFirstLetter(item)} &nbsp;
                                              </Grid>
                                            )
                                          )}
                                        {plant_details.acf.characteristics.fruit_length && (
                                          <Grid item xs={12} sm={12} md={6} lg={6} >
                                              <strong>Fruit Size: &nbsp;</strong>
                                            {api.capitalizeFirstLetter(
                                              plant_details.acf.characteristics.fruit_length
                                            )}
                                          </Grid>
                                        )}
                                        {plant_details.acf.characteristics.fruit_color
                                            .length !== 0 && (
                                              <Grid item xs={12} sm={12} md={6} lg={6} >
                                                  <strong>Fruit Colour: &nbsp;</strong>
                                                {plant_details.acf.characteristics.fruit_color.map(
                                                  (item, index) => (
                                                    <>
                                                        {api.capitalizeFirstLetter(item)}
                                                        {item !==
                                                          plant_details.acf.characteristics.fruit_color
                                                            .slice(-1)
                                                            .pop() ? (
                                                          <span>, &nbsp;</span>
                                                        ) : (
                                                          ""
                                                        )}
                                                    </>
                                                  )
                                                )}
                                              </Grid>
                                            )}
                                          {plant_details.acf.characteristics.seed_dispersal && (
                                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                                <strong>Seed Dispersal: &nbsp;</strong>
                                              {api.capitalizeFirstLetter(
                                                plant_details.acf.characteristics.seed_dispersal 
                                              )}
                                            </Grid>
                                          )}
                                      </Grid>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                {/* SPORES */}
                {(router.query.type == "Fern" &&(plant_details.acf.characteristics.spore_description || plant_details.acf.characteristics.spore_location.length !== 0 ||
                  plant_details.acf.characteristics.spore_shape.length !== 0 ||  plant_details.acf.characteristics.spore_covering.length !== 0  ||
                  plant_details.acf.characteristics.spore_under_leaf.length !== 0 ) ) && (
                  <div className="accordion mb-3" id="accordion3">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          // aria-expanded="true"
                          aria-controls="collapseThree">
                          <strong>Spores</strong>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordion3">
                        <div className="accordion-body">
                          <Grid container spacing={2}>
                            {plant_details.acf.characteristics.spore_location
                              .length !== 0 &&
                              plant_details.acf.characteristics.spore_location.map(
                                (item, index) => (
                                  <Grid item xs={12} sm={12} md={6} lg={6} >
                                      <strong>Spore Location: &nbsp;</strong>
                                        {api.capitalizeFirstLetter(item)}
                                        &nbsp;
                                  </Grid>
                                )
                              )}
                            {plant_details.acf.characteristics.spore_shape
                              .length !== 0 &&
                              plant_details.acf.characteristics.spore_shape.map(
                                (item, index) => (
                                  <Grid item xs={12} sm={12} md={6} lg={6} >
                                      <strong>Spore Shape: &nbsp;</strong>
                                        {api.capitalizeFirstLetter(item)}
                                        &nbsp;
                                  </Grid>
                                )
                              )}
                            {plant_details.acf.characteristics.spore_covering
                                .length !== 0 &&
                                plant_details.acf.characteristics.spore_covering.map(
                                  (item, index) => (
                                    <Grid item xs={12} sm={12} md={6} lg={6} >
                                        <strong>Spore Covering: &nbsp;</strong>
                                          {api.capitalizeFirstLetter(item)}
                                    </Grid>
                                  )
                                )}
                                 {plant_details.acf.characteristics.spore_under_leaf
                                .length !== 0 &&
                                plant_details.acf.characteristics.spore_under_leaf.map(
                                  (item, index) => (
                                    <Grid item xs={12} sm={12} md={6} lg={6} >
                                        <strong>Spore Position: &nbsp;</strong>
                                          {api.capitalizeFirstLetter(item)}
                                    </Grid>
                                  )
                                )}
                              {plant_details.acf.characteristics.spore_description && (
                                 <Grid item xs={12} sm={12} md={12} lg={12} >
                                    <strong>Spore Description: &nbsp;</strong>
                                  <div className="rtc-content">
                                    {ReactHtmlParser(plant_details.acf.characteristics.spore_description)}
                                  </div>
                                 </Grid>
                              )}
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {plant_details.acf.characteristics.stems
                              .length !== 0 && (
                              <div className="d-flex label-value-section">
                                <p>
                                  <strong>Stems and/or Twigs: &nbsp;</strong>
                                </p>
                                {plant_details.acf.characteristics.stems.map(
                                  (item, index) => (
                                    <div className="d-flex" key={index}>
                                      <p>
                                        {api.capitalizeFirstLetter(item)}
                                        {index + 1 === plant_details.acf.characteristics.stems.length ? '' : ","} &nbsp;
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                )}

                {plant_details.acf.characteristics.position_of_hairs && (
                  <div className="d-flex">
                    <p>
                      <strong>Position of Hairs: &nbsp;</strong>
                      {plant_details.acf.characteristics.position_of_hairs}
                    </p>
                  </div>
                )}
                {plant_details.acf.varieties && (
                <div>
                  <p>
                    <strong>Varieties, Subspecies, and Hybrids: &nbsp;</strong>
                  </p>
                  <div className="d-flex flex-column">
                    <div className="rtc-content">
                      {ReactHtmlParser(plant_details.acf.varieties)}
                    </div>
                  </div>
                </div>
               )}
              </div>
            </div>
            <div className="d-lg-none d-xl-none d-sm-block d-md-block">
            <div>

                  <div className="d-flex flex-wrap">
                    {Object.keys(plant_details.acf).includes("image_url") &&
                      plant_details.acf.image_url !== undefined &&
                      plant_details.acf.image_url.length > 0 ? (
                      plant_details.acf.image_url.slice(0, 6).map((item, index) => (
                        <div
                          key={index}
                          className={[
                            styles.img_container_media,
                            "img-container img-tabs",
                          ].join(" ")}
                          data-bs-target="#exampleModal"
                          onClick={() => slideShow(index)}>
                          <img src={item.full_image_url} alt="plant image" onContextMenu={(e) => e.preventDefault()} />
                        </div>
                      ))
                    ) : (
                      <div className="d-flex flex-column text-center stock-img-container">
                        <img src="../../images/no_result_found.png" alt="" onContextMenu={(e) => e.preventDefault()} />
                        <span>Oops! No images found!</span>
                      </div>
                    )}
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    {Object.keys(plant_details.acf).includes("image_url") &&
                      plant_details.acf.image_url.length !== 0 &&
                      plant_details.acf.image_url.length > 6 && (
                        <a
                          className="view-more d-print-none"
                          onClick={() => slideShow(slideIndex)}>
                          View more
                        </a>
                      )}
                  </div>
                  <div
                    className={
                      plant_details.acf.unique_characteristics !== ""
                        ? "unique-characteristics"
                        : "hide"
                    }>
                    <p>
                      <strong>Unique Characteristics</strong>
                    </p>
                    <div className="row">
                      <div className="col-sm-10 col-md-10 col-lg-12 col-xl-6">
                        <div className="unique-characteristics">
                          {ReactHtmlParser(
                            plant_details.acf.unique_characteristics
                          )}
                        </div>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-12 col-xl-6">
                        <div
                          className={
                            plant_details.featured_image.image_url !== false || plant_details.featured_image.image_url !== null
                              ? "featured-image"
                              : "featured-image disable-pointer-events"
                          }
                          data-bs-toggle="modal"
                          data-bs-target="#featured-image">
                          {plant_details.featured_image.image_url == false || plant_details.featured_image.image_url == null ? (
                            <div className="d-flex flex-column text-center stock-img-container">
                              <img src="../../images/no_result_found.png" alt="" onContextMenu={(e) => e.preventDefault()} />
                              <span>Oops! No images found!</span>
                            </div>
                          ) : (
                            <img
                              src={plant_details.featured_image.image_url}
                              alt="plant image" onContextMenu={(e) => e.preventDefault()}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
            {plant_details.acf.distribution_map_id ? <>
                    <div className="row">
                    <div className="col-md-3 col-lg-4">  <strong>Distribution </strong></div>
                    <div className="col-md-3  col-lg-8">
                    <span style={{float:'right', fontSize:'12px' , display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                      Source: AC CDC, 2023
                        <span style={{ float: 'right', fontSize: '12px', textAlign:'right' }}>
                        <div><span className="grey-dot"></span>
                          Recent (&gt;= 2000)</div>
                          <div> <span className="green-dot"></span>
                          Historic (&lt; 2000)</div>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-12 col-xl-12">
                      <div
                        className={
                          plant_details.acf.distribution_map_id !== ''
                            ? "featured-image"
                            : "featured-image disable-pointer-events"
                        }
                        data-bs-toggle="modal"
                        data-bs-target="#distribution-map">
                           {plant_details.acf.distribution_map_id == '' ? (
                          <div className="d-flex flex-column text-center stock-img-container">
                            <img src="../../images/no_result_found.png" alt="" onContextMenu={(e)=>e.preventDefault()}/>
                            <span>Oops! No images found!</span>
                          </div>
                        ) : (
                          <img
                            src={`../../images/maps/${plant_details.acf.distribution_map_id}.png`}
                            alt="Distribution map" onContextMenu={(e)=>e.preventDefault()}
                          />
                        )}
                      </div>
                    </div>
                  </div></>:""}
            </div>
            {plant_details.acf.similar_species &&
                    <div className="d-lg-none d-xl-none d-sm-block d-md-block">
                      <br></br>
                      <p><strong>Explore Similar Plants</strong></p>
                      <FamilyDetails plant_id={plant_details.acf.similar_species} />
                      {/* <ListPlantSpecies filteredList={plantFamily} isLoading={isLoading} /> */}
                    </div>
              }
          </div>
        </div>
      ) : (
        <div style={{ margin: '5% 0 20% 0', padding: '0 5%' }}> <BrokenPageAlert /> </div>
      )}
      <style jsx>{`
         .heading {
          font-size: 2rem;
          color: #0e9d47;
        }
        .content-section {
          background-color: #ffffff;
          margin: 15px 0px;
        }
        .img-container {
          border-radius: 12px;
          margin: 2px;
          overflow: hidden;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .featured-img-container {
          border-radius: 12px;
          margin: 5px;
          width: 410px;
          height: 250px;
          overflow: hidden;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .loader {
          height: 300px;
          img {
            width: 80px;
          }
        }
        .label-value-section {
          /* Large screens (1405px upwards) */
          @media only screen and (min-width: 1405px) {
            width: 50%;
          }
          /*Retina MacBook pro*/
          @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
            only screen and (min-device-pixel-ratio: 1.5) {
            width: 50%;
          }

          /* iPhones media query 2436x1125px at 458ppi */
          @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
            width: 100%;
          }

          /* Smartphones in portrait mode (0-479px) */
          @media only screen and (max-width: 479px) {
            width: 100%;
          }

          /* ----------- iPad Pro ----------- */
          /* Portrait and Landscape */
          @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
            width: 100%;
          }
        }
        .each-slide > div {
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          height: 75vh;
        }

        .each-slide span {
          padding: 20px;
          font-size: 20px;
          background: #efefef;
          text-align: center;
        }
        .img-tabs:hover {
          cursor: pointer;
        }
        .hide {
          display: none;
        }
        .stock-img-container {
          width: 100%;
          border: 1px solid #e0e1e3;
          border-radius: 8px;

          img {
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
        .familyLink{
          color: #0e9d47;
          font-style: italic;
          font-weight: bold;
          cursor: pointer
        }
        .familyEnglish{
          color: #0e9d47;
          font-weight: bold;
          cursor: pointer
        }
        .slider {
          position: relative;
          h2[name="prev"]:hover,
          h2[name="next"]:hover {
            cursor: pointer;
          }
          h2[name="prev"] {
            position: absolute;
            left: 1%;
            top: 45%;
          }
          h2[name="next"] {
            position: absolute;
            right: 1%;
            top: 45%;
          }
        }
        .rtc-content {
          background-color: #f6f7f9;
          padding: 15px 20px;
          border-radius: 10px;
          font-size: 15px;
        }
        .desc-content {
          background-color: #f6f7f9;
          padding: 15px 20px;
          border-radius: 10px;
          margin-top: 8px;
          font-size: 15px;
        }
        .side-bar {
          background-color: #ffffff;
          padding: 12px 10px;
          border-radius: 10px;
        }
        .featured-image {
          overflow: hidden;
          img {
            border-radius: 10px;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .unique-characteristics {
          margin-left: 10px;
          font-size: 14px;
          :global(ol) {
            padding: 0px !important;
          }
        }
        .featured-image:hover {
          cursor: pointer;
        }
        .modal-image-container {
          img {
            width: 100%;
            height: 80vh;
          }
        }
        .accordion-button:not(.collapsed) {
          color: #1d9d47;
          background-color: #f8f9fa;
        }
        .accordion-button:not(.collapsed)::after {
          filter: invert(13%) sepia(68%) saturate(2891%) hue-rotate(346deg)
            brightness(104%) contrast(97%);
          -webkit-filter: invert(13%) sepia(68%) saturate(2891%)
            hue-rotate(346deg) brightness(104%) contrast(97%);
          -ms-filter: invert(13%) sepia(68%) saturate(2891%) hue-rotate(346deg)
            brightness(104%) contrast(97%);
        }
        .accordion-button {
          padding: 0.5rem 1.25rem;
          background-color: #f8f9fa;
        }
        .img-caption {
          margin: 0px;
          text-align: right;
        }
        .back-arrow {
          h4,
          p,
          h4:hover,
          p:hover {
            cursor: pointer;
            color: #167a37;
          }
        }
        .view-more {
          cursor: pointer;
          font-weight: bold;
          text-align: right;
          color: #0e9d47;
        }
        .grey-dot {
          height: 10px;
          width: 10px;
          background-color: grey;
          border-radius: 48%;
          display: inline-block;
          margin-right: 5px;
        }
        .green-dot {
          height: 10px;
          width: 10px;
          background-color: green;
          border-radius: 48%;
          display: inline-block;
          margin: 0 5px;
        }
      `}</style>
    </div>
    <Footer />
    </>
  )
}

export default PlantSpeciesDetails