import React from "react"

const contact = () => {
  return (
    <div>
      <section className="banner d-flex justify-content-center align-items-center">
        <h2>Contact Us</h2>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-3">
            <h4>Address:</h4>
            <p>10 Cameron Court Fredericton, NB E3B 2R9 Canada ​</p>
            <h4>Email us on:</h4>
            <p>fredbotanicgarden@gmail.com</p>
            <h4>Phone:</h4>
            <p>(506) 452-9269</p>
          </div>
          <div className="col-lg-4">
            <h4 className="mb-4">Find us on</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.8070367246105!2d-66.67872978458186!3d45.95513827910983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4227cd8729fe7%3A0xf068c80e42c8400!2s10%20Cameron%20Ct%2C%20Fredericton%2C%20NB%20E3B%202R9!5e0!3m2!1sen!2sca!4v1634010918508!5m2!1sen!2sca"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="col-lg-5">
            <h4 className="mb-4">Send us a message</h4>
            <form action="">
              <div className="form-group mb-3">
                <label htmlFor="firstname">
                  <i className="bi bi-person-fill" />
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">
                  <i className="bi bi-envelope-fill" />
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">
                  <i className="bi bi-chat-square-dots-fill" />
                </label>
                <textarea
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 20px 10px;
          margin: 40px 20px;
          margin-bottom: 50px;
          h2 {
            font-weight: 900;
          }
          h4 {
            font-size: 18px;
            font-weight: 900;
          }
        }
        .banner {
          background-image: url("../images/acer-saccharum-wb-clevine.jpeg");
          box-shadow: inset 0 0 0 2000px rgba(53, 61, 61, 0.4);
          background-position: center;
          background-size: cover;
          height: 140px;
          margin: 30px 0px;
          h2 {
            color: #ffffff;
            font-weight: 900;
          }
        }
        .btn-primary {
          background: #0e9d47;
          border: 1px solid #0e9d47 !important;
        }
        .form-control {
          padding-left: 40px;
        }
        textarea.form-control {
          padding-left: 40px;
          padding-top: 10px;
        }
        input.form-control {
          height: 50px;
        }
        .form-group {
          position: relative;
          label {
            position: absolute;
            left: 16px;
            top: 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default contact
