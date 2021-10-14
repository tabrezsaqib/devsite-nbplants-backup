import Router from "next/router"
import { useEffect, useState } from "react"
import DataUploader from "../uploader/DataUploader"
import AuthService from "../../generics/authService"

const Admin = () => {
  const [mounted, setMounted] = useState(false)
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  useEffect(() => {
    setMounted(true)
    if (!isLoggedIn) {
      Router.push("/login")
    }
  }, [isLoggedIn]) //This array is a dependency array, which runs this effect will only when the values in the array changes. So, if there is any item in the array, it will make the DOM re-render based on the item in the array...

  const onLogOut = () => {
    auth.logOut()
    Router.push("/login")
  }

  return (
    mounted && (
      <div>
        <h4>Drag and drop your files here...</h4>
        {isLoggedIn == true && (
          <div>
            <DataUploader />
            <button className="btn btn-success" onClick={onLogOut}>
              Log out
            </button>
          </div>
        )}
      </div>
    )
  )
}

export default Admin
