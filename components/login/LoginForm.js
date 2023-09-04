import { useState } from "react"

const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" })

  const submitHandler = (e) => {
    e.preventDefault()
    login(details)
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h2 className="text-center mt-4">Please login as Admin</h2>
          <div className="form-section">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                {/* <label htmlFor="username">Username</label> */}
                <input
                  type="text"
                  className="form-control mb-3"
                  aria-describedby="username"
                  placeholder="Username"
                  onChange={(e) =>
                    setDetails({ ...details, username: e.target.value })
                  }
                  value={details.username}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>

      <style jsx>{`
        .form-section {
          margin-top: 60px;
          padding: 30px;
          border: 1px solid #e0e1e3;
          margin-bottom: 60px;
        }
      `}</style>
    </>
  )
}

export default LoginForm
