import Headline from "../components/overview/Headline"
import SpeciesOption from "../components/overview/SpeciesOption"
import "bootstrap-icons/font/bootstrap-icons.css"
export default function Home() {
  return (
    <div className="main d-flex align-items-center">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="d-flex flex-column text-center">
            <Headline />
            <SpeciesOption />
          </div>
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
        }
      `}</style>
    </div>
  )
}
