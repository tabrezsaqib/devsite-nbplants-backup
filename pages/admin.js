import Admin from "../components/main/Admin"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const admin = () => {
  return (
    <>
      <ToastContainer />
      <Admin />
    </>
  )
}

export default admin
