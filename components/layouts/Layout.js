// import Footer from "./Footer"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
