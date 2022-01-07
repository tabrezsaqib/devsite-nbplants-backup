/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react"
import * as api from "../../generics/api"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

const PlantSpeciesDetails = ({ plant_details }) => {
  const [slide, setSlide] = useState(false)
  const [slideIndex, setSlideIndex] = useState(null)
  const slideRef = useRef()

  const slideShow = (index) => {
    setSlide(true)
    setSlideIndex(index)
  }

  const back = () => {
    slideRef.current.goBack()
    setSlideIndex(0)
  }

  const next = () => {
    slideRef.current.goNext()
    setSlideIndex(0)
  }

  const properties = {
    autoplay: false,
    arrows: false,
  }
  console.log(plant_details)
  console.log(slideIndex)
  return (
    <div className="mt-3">
      {plant_details.length !== 0 ? (
        <div className="row" key={plant_details.id}>
          <div className="col-lg-3">
            <div className="d-flex flex-wrap">
              {plant_details.acf.image_url !== undefined &&
              plant_details.acf.image_url.length > 0 ? (
                plant_details.acf.image_url.map((item, index) => (
                  <div
                    key={index}
                    className="img-container img-tabs"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => slideShow(index)}>
                    <img src={item.thumbnail_image_url} alt="plant image" />
                  </div>
                ))
              ) : (
                <div className="d-flex flex-column text-center stock-img-container">
                  <img src="../../images/no_result_found.png" alt="" />
                  <h3>Oops! No images found!</h3>
                </div>
              )}
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
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
                  <div className="modal-body">
                    <div className={!slide ? "hide" : ""}>
                      <Slide ref={slideRef} easing="ease" {...properties}>
                        {plant_details.acf.image_url !== undefined &&
                          plant_details.acf.image_url.length > 0 &&
                          plant_details.acf.image_url.map((item, index) => (
                            <div className="each-slide" key={index}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    plant_details.acf.image_url[
                                      slideIndex || index
                                    ].full_image_url
                                  })`,
                                }}></div>
                            </div>
                          ))}
                      </Slide>
                      <button type="button" onClick={() => back()}>
                        Back
                      </button>
                      <button type="button" onClick={() => next()}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="d-flex flex-column mt-4">
              <p>
                <strong>Unique Characteristics: </strong>
              </p>
              <div className="d-flex flex-column text-center">
                <div className="featured-img-container">
                  <img
                    src={plant_details.better_featured_image.source_url}
                    alt="plant image"
                  />
                </div>
                <span>
                  <i>{plant_details.better_featured_image.caption}</i>
                </span>
              </div>
            </div> */}
          </div>
          <div className="col-lg-9">
            <div className="content-section">
              <div className="d-flex flex-column mt-2">
                <div className="d-flex">
                  <h2 className="heading">
                    <strong>{plant_details.acf.common_name}</strong>
                  </h2>
                  <h4 className="align-self-center pt-2">
                    <strong>
                      <i>
                        &nbsp;&nbsp;
                        {`${plant_details.acf.genus} ${plant_details.acf["species"]}`}
                      </i>
                    </strong>
                  </h4>
                </div>
                {plant_details.acf.synonyms_english && (
                  <div className="d-flex">
                    <p>
                      <strong>Alternate Names: &nbsp;</strong>
                    </p>
                    {api.capitalizeFirstLetter(
                      plant_details.acf.synonyms_english
                    )}
                  </div>
                )}
              </div>
              <hr />
              <h4 className="pb-3">
                <strong>Characteristics</strong>
              </h4>

              <div className="d-flex flex-wrap">
                {plant_details.acf.plant_type && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Plant Type: &nbsp;</strong>
                    </p>
                    {api.capitalizeFirstLetter(plant_details.acf.plant_type)}
                  </div>
                )}

                {plant_details.acf.family && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Plant Family: &nbsp;</strong>
                    </p>
                    {api.capitalizeFirstLetter(plant_details.acf.family)}
                  </div>
                )}

                {plant_details.acf.characteristics
                  .native_or_introduced_or_invasive && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Native or Introduced or Invasive: &nbsp;</strong>
                    </p>
                    {
                      plant_details.acf.characteristics
                        .native_or_introduced_or_invasive
                    }
                  </div>
                )}

                {plant_details.acf.characteristics.s_rank && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>S Rank: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.s_rank}
                  </div>
                )}
                {plant_details.acf.characteristics.habitat.length !== 0 &&
                  plant_details.acf.characteristics.habitat.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Habitat: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}
                {plant_details.acf.characteristics.habitat_description && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Habitat Description: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.habitat_description}
                  </div>
                )}

                {plant_details.acf.characteristics.leaf_type.length !== 0 &&
                  plant_details.acf.characteristics.leaf_type.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Leaf Type: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}
                {plant_details.acf.characteristics.leaf_arrangement.length !==
                  0 &&
                  plant_details.acf.characteristics.leaf_arrangement.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Leaf Arrangement: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.leaf_blade_edges.length !==
                  0 &&
                  plant_details.acf.characteristics.leaf_blade_edges.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Leaf Blade Edges: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.leaf_shape.length !== 0 &&
                  plant_details.acf.characteristics.leaf_shape.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Leaf Shape: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.leaf_number && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Leaf Number: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.leaf_number}
                  </div>
                )}

                {plant_details.acf.characteristics.stems.length !== 0 &&
                  plant_details.acf.characteristics.stems.map((item, index) => (
                    <div className="d-flex label-value-section" key={index}>
                      <p>
                        <strong>Type of Stems: &nbsp;</strong>
                      </p>
                      <div>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    </div>
                  ))}

                {plant_details.acf.characteristics.position_of_hairs && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Position of hairs: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.position_of_hairs}
                  </div>
                )}

                {plant_details.acf.characteristics.flower_petal_colour
                  .length !== 0 &&
                  plant_details.acf.characteristics.flower_petal_colour.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Flower Petal Colour: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.inflorescence.length !== 0 &&
                  plant_details.acf.characteristics.inflorescence.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Inflorescence: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.number_flowers && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Number Flowers: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.number_flowers}
                  </div>
                )}

                {plant_details.acf.characteristics.bloom_time && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Bloom Time: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.bloom_time}
                  </div>
                )}

                {plant_details.acf.characteristics.petal_symmetry !== 0 &&
                  plant_details.acf.characteristics.petal_symmetry.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Petal Symmetry: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.number_petals && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Number Petals: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.number_petals}
                  </div>
                )}

                {plant_details.acf.characteristics.stipule_shape.length !== 0 &&
                  plant_details.acf.characteristics.stipule_shape.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Stipule Shape: &nbsp;</strong>
                        </p>
                        <div>
                          <p>
                            {api.capitalizeFirstLetter(item)}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.stamen_number && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Stamen Number: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.stamen_number}
                  </div>
                )}

                {plant_details.acf.characteristics.labellum_lower_petal && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Labellum Description: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.labellum_lower_petal}
                  </div>
                )}

                {plant_details.acf.characteristics.nectar_spur && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Nectar Spur: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.nectar_spur}
                  </div>
                )}

                {plant_details.acf.characteristics.fusion && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Fusion: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.fusion}
                  </div>
                )}

                {plant_details.acf.characteristics.fruits.length !== 0 &&
                  plant_details.acf.characteristics.fruits.map(
                    (item, index) => (
                      <div className="d-flex label-value-section" key={index}>
                        <p>
                          <strong>Fruits: &nbsp;</strong>
                        </p>
                        <div>
                          <p>{api.capitalizeFirstLetter(item)} &nbsp;</p>
                        </div>
                      </div>
                    )
                  )}

                {plant_details.acf.characteristics.fruit_length && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Fruit Length: &nbsp;</strong>
                    </p>
                    {api.capitalizeFirstLetter(
                      plant_details.acf.characteristics.fruit_length
                    )}
                  </div>
                )}

                {plant_details.acf.characteristics.height && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Height: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.height}
                  </div>
                )}

                {plant_details.acf.characteristics.wildlife_benefits && (
                  <div className="d-flex label-value-section">
                    <p>
                      <strong>Wildlife Benefits: &nbsp;</strong>
                    </p>
                    {plant_details.acf.characteristics.wildlife_benefits}
                  </div>
                )}

                {/* <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Type: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_type.length !== 0 ? (
                  plant_details.acf.characteristics.leaf_type.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Arrangement: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_arrangement.length !==
                0 ? (
                  plant_details.acf.characteristics.leaf_arrangement.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Blage Edges: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_blage_edges !==
                undefined ? (
                  plant_details.acf.characteristics.leaf_arrangement.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Shape: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_shape.length !== 0 ? (
                  plant_details.acf.characteristics.leaf_shape.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Flower Petal Colour: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.flower_petal_colour
                  .length !== 0 ? (
                  plant_details.acf.characteristics.flower_petal_colour.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Native or Introduced or Invasive: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics
                  .native_or_introduced_or_invasive ? (
                  plant_details.acf.characteristics
                    .native_or_introduced_or_invasive
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Number: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_number ? (
                  plant_details.acf.characteristics.leaf_number
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Number Flowers: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.number_flowers ? (
                  plant_details.acf.characteristics.number_flowers
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Lip Shape: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.lip_shape ? (
                  plant_details.acf.characteristics.lip_shape
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Stipule Shape: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.stipule_shape.length !==
                0 ? (
                  plant_details.acf.characteristics.stipule_shape.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Position of hairs: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.positions_of_hairs !==
                undefined ? (
                  plant_details.acf.characteristics.positions_of_hairs.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Number Petals: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.number_petals ? (
                  plant_details.acf.characteristics.number_petals
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Inflorescence: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.inflorescence.length !==
                0 ? (
                  plant_details.acf.characteristics.inflorescence.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Stems: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.stems.length !== 0 ? (
                  plant_details.acf.characteristics.stems.map((item, index) => (
                    <div key={index}>
                      <p>
                        {api.capitalizeFirstLetter(item)}
                        &nbsp;
                      </p>
                    </div>
                  ))
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Stamen Number: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.stamen_number ? (
                  plant_details.acf.characteristics.stamen_number
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Armature: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.armature ? (
                  plant_details.acf.characteristics.armature
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Bark Texture: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.bark_texture ? (
                  plant_details.acf.characteristics.bark_texture
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Growth Form: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.growth_form ? (
                  plant_details.acf.characteristics.growth_form
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Deciduous or Coniferous: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.deciduos_or_coniferous ? (
                  plant_details.acf.characteristics.deciduos_or_coniferous
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaves per node: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaves_per_node ? (
                  plant_details.acf.characteristics.leaves_per_node
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Leaf Divisions: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.leaf_divisions ? (
                  plant_details.acf.characteristics.leaf_divisions
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Spore Bearing Leaflets: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.spore_bearing_leaflets ? (
                  plant_details.acf.characteristics.spore_bearing_leaflets
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Bloom Time: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.bloom_time ? (
                  plant_details.acf.characteristics.bloom_time
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Petal Symmetry: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.petal_symmetry !== 0 ? (
                  plant_details.acf.characteristics.petal_symmetry.map(
                    (item, index) => (
                      <div key={index}>
                        <p>
                          {api.capitalizeFirstLetter(item)}
                          &nbsp;
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Fusion: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.fusion ? (
                  plant_details.acf.characteristics.fusion
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Fruits: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.fruits.length !== 0 ? (
                  plant_details.acf.characteristics.fruits.map(
                    (item, index) => (
                      <div key={index}>
                        <p>{item} &nbsp;</p>
                      </div>
                    )
                  )
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Fruit Length: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.fruit_length ? (
                  plant_details.acf.characteristics.fruit_length
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>

              <div className="d-flex label-value-section">
                <p>
                  <strong>Height: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.height ? (
                  plant_details.acf.characteristics.height
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Labellum Lower Petal: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.labellum_lower_petal ? (
                  plant_details.acf.characteristics.labellum_lower_petal
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Necter Spur: &nbsp;</strong>
                </p>
                {plant_details.acf.characteristics.necter_spur ? (
                  plant_details.acf.characteristics.necter_spur
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div>
              <div className="d-flex label-value-section">
                <p>
                  <strong>Note: &nbsp;</strong>
                </p>
                &nbsp;&nbsp;
                {plant_details.acf.note ? (
                  plant_details.acf.note
                ) : (
                  <p>
                    <i>Not Available</i>
                  </p>
                )}
              </div> */}
              </div>
              <div>
                {plant_details.acf.note && (
                  <div className="d-flex">
                    <p>
                      <strong>Note: &nbsp;</strong>
                    </p>
                    &nbsp;&nbsp;{plant_details.acf.note}
                  </div>
                )}

                {plant_details.acf.others1_note && (
                  <div className="d-flex">
                    <p>
                      <strong>Others1 Note: &nbsp;</strong>
                    </p>
                    &nbsp;&nbsp;{plant_details.acf.others1_note}
                  </div>
                )}

                {plant_details.acf.others2_note && (
                  <div className="d-flex">
                    <p>
                      <strong>Others2 Note: &nbsp;</strong>
                    </p>
                    &nbsp;&nbsp;{plant_details.acf.others2_note}
                  </div>
                )}

                {plant_details.acf.others3_note && (
                  <div className="d-flex">
                    <p>
                      <strong>Others3 Note: &nbsp;</strong>
                    </p>
                    &nbsp;&nbsp;{plant_details.acf.others3_note}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="loader d-flex align-items-center">
              <img src="../../images/loading.gif" alt="loader" />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .heading {
          font-size: 2rem;
          color: #0e9d47;
        }
        .content-section {
          background-color: #ffffff;
          margin: 15px 0px;
          padding: 15px 30px;
          border-radius: 10px;
        }
        .img-container {
          border-radius: 12px;
          margin: 5px;
          width: 142px;
          height: 142px;
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
          width: 50%;
        }
        .each-slide > div {
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          height: 80vh;
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
          height: 250px;
          img {
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      `}</style>
    </div>
  )
}

export default PlantSpeciesDetails
