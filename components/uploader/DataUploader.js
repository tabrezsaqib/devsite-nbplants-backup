import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { FileUploader } from "react-drag-drop-files"
import { postFileData } from "../../redux/actions/postFileDataAction"

const DataUploader = ({}) => {
  const dispatch = useDispatch()
  const fileTypes = ["JSON"]
  const [file, setFile] = useState(null)
  const handleChange = (file) => {
    const fileReader = new FileReader()
    fileReader.readAsText(file)
    fileReader.onload = () => {
      const posts = JSON.parse(fileReader.result)
      for (let post of posts) {
        setFile(file)
        dispatch(postFileData(post))
      }
    }
    toast.success("Data uploaded successfully")

    // const post = {
    //   title: "Arethusa bulbosa",
    //   status: "publish",
    //   fields: {
    //     family: "Orchidaceae",
    //     genus: "Cypripedium",
    //     species: "reginae",
    //     common_name: "Showy Lady's-Slipper",
    //     french_common_name: "Cypripède Royal",
    //     plant_type: "non-woody",
    //     habitat: ["wetlands"],
    //     leaf_type: ["simple"],
    //     leaf_arrangement: ["alternate"],
    //     leaf_blade_edges: ["entire"],
    //     flower_petal_colour: ["pink to red", "white"],
    //     bloom_time: "",
    //     armature: "",
    //     bark_texture: "",
    //     growth_form: "",
    //     deciduous_or_coniferous: "",
    //     leaves_per_node: "",
    //     leaf_divisions: "",
    //     spore_bearing_leaflets: "",
    //     native_or_introduced_or_invasive: "native",
    //     rank: "",
    //     image_preview: [""],
    //     new_brunswick_county: ["carleton county"],
    //     note: "Showy lady's slipper is rare in four of the five New England states in which it occurs. It grows in fens and swamps dominated by northern white-cedar (Thuja occidentalis). There have been reports that a small European skipper (a non-native butterfly) becomes trapped in the labellum of this orchid, thus blocking it and preventing pollination by native bees. It is speculated that this may cause a decline of the orchid by decreasing reproduction; however, this has not been confirmed.",
    //   },
    // }
    // for (let post in posts) {
    // }
    // dispatch(postFileData(post))
  }

  return (
    <>
      <div className="d-flex dropzone flex-column mb-4">
        <>
          <FileUploader
            handleChange={handleChange}
            classes="d-flex align-self-center"
            name="file"
            types={fileTypes}
          />
          <p>
            {file ? (
              `File name: ${file.name}`
            ) : (
              <h5 className="text-center mt-3">No files uploaded yet</h5>
            )}
          </p>
        </>
      </div>
      <style jsx>{`
        .dropzone {
          margin: 20px auto;
          width: 800px;
          height: 500px;
          background-color: #f8f9fa;
          border: 1px solid #e0e1e3;
        }
        :global(.hyiOnG) {
          width: 100% !important;
          margin-top: 20px !important;
          max-width: 700px !important;
        }
      `}</style>
    </>
  )
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(DataUploader)
