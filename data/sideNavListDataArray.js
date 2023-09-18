let param
if (typeof window !== "undefined") {
  // browser code
  let searchParams = new URLSearchParams(window.location.search)
  param = searchParams.get("type")
}

let plant_type = ["Fern", "Non-woody", "Woody", "Grass-like"]
const type = ["native", "introduced", "hybrid"]
const habitat = ["aquatic", "terrestrial", "wetlands"]
const flower_colour = [
  "blue to purple",
  "green to brown",
  "orange",
  "pink to red",
  "white",
  "yellow to orange",
  "don't know",
]

const leaf_arrangement = ["alternate", "basal", "opposite", "no leaves"]
const leaf_blade_edges = ["lobed", "smooth (Entire)", "toothed", "no leaves"]

let leaf_shape = [
  "arrow",
  "fern-like",
  "heart",
  "kidney-shaped",
  "lance",
  "linear",
  "maple-like",
  "needles",
  "oval",
  "rounded",
  "scales",
  "spoon",
]

const leaf_type = ["compound", "needles/Scales", "simple", "no leaves"]
const petal_symmetry = ["bilateral", "radial"]

const inflorescence = [
  "catkin",
  "composite",
  "cluster",
  "cyme",
  "panicle",
  "raceme",
  "spike",
  "solitary flower",
  "umbel",
  "whorl",
  "doesn't apply",
]

const stems = ["hairy", "scales", "smooth", "thorns or prickles", "no stem"]

const lip_shape = ["pouch", "not pouch-like"]
// const native_or_introduced_or_invasive = ["Native", "Introduced", "Invasive"]
const fruit_type = [
  "achene",
  "berry",
  "capsule",
  "catkin",
  "cone",
  "fruit with wings",
  "grain",
  "nut",
  "pod",
  "spore",
  "stone",
  "other"
  
]

const leaf_duration = ["deciduous", "evergreen"]
const leaf_divisions = ["0", "1", "2", "3"]
const spore_shape = ["irregular", "kidney", "oblong", "oval", "round"]
const spore_location = ["separate stalk", "tip of plant", "underside of leaf", "other"]
// const new_brunswick_county = [
//   "albert county",
//   "carleton county",
//   "charlotte county",
//   "gloucester county",
//   "kent county",
//   "kings county",
//   "madawaska county",
//   "northumberland county",
//   "queens county",
//   "restigouche county",
//   "saint john county",
//   "sunbary county",
//   "victoria county",
//   "york county",
//   "westmorland county",
// ]
if (param !== "Fern") {
  let index = leaf_shape.indexOf("rounded")
  if (index !== -1) {
    leaf_shape.splice(index, 1)
  }
}
if (param !== "Woody") {
  let removeItems = ["maple-like", "scales", "needles"]
  const newArray = leaf_shape.filter((v) => !removeItems.includes(v))
  leaf_shape = newArray
}
if (param === "Grass-like") {
  let removeItems = ["catkin", "composite", "cyme", "solitary flower", "umbel", "whorl"]
  const newArray = inflorescence.filter((v) => !removeItems.includes(v))
  inflorescence = newArray
}
export {
  plant_type,
  type,
  habitat,
  flower_colour,
  inflorescence,
  lip_shape,
  leaf_arrangement,
  leaf_blade_edges,
  leaf_shape,
  leaf_type,
  // native_or_introduced_or_invasive,
  stems,
  fruit_type,
  petal_symmetry,
  leaf_duration,
  leaf_divisions,
  spore_shape,
  spore_location,
}
