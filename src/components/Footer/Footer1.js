import React from "react";
import "../Footer/Footer.css";
import img1 from "../images/logo.png";

const Footer1 = () => {
  return (
    <footer class="footer" style={{ marginTop: "50px" }}>
      <div>
        <section class="">
          <br />
          <div class="row" style={{ marginLeft: "0px" }}>
            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
              {/* <img className="logo-image"
                                src={img1}
                                alt="Canvas Logo"
                                style={{ height: "90px", width: "100px", marginLeft: "700px" }}
                            /> */}
              <h5
                class="text"
                style={{
                  marginLeft: "160px",
                  marginRight: "300px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                About Us
              </h5>

              <ul class="list-unstyled mb-0">
                <p
                  style={{
                    marginLeft: "100px",
                    marginRight: "300px",
                    textAlign: "justify",
                  }}
                >
                  This locator is our best effort to map independent pharmacies
                  and is intended as a guide for patients. If you know of a
                  location that is missing or an error, please contact us at
                  PharmacyLocator@gmail.com
                </p>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5
                class="text"
                style={{
                  marginLeft: "50px",
                  marginRight: "100px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Telephone : +251967890345
                  </a>
                  <br />
                  <a style={{ marginLeft: "72px" }}> :+251923456789</a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Email : PharmacyLocator@gmail.com
                  </a>
                  <br />
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5
                class="text"
                style={{
                  marginLeft: "100px",
                  marginRight: "50px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {" "}
                Other Links
              </h5>

              <div
                class="list-unstyled mb-0"
                style={{
                  marginLeft: "110px",
                  marginRight: "50px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <i style={{ marginRight: "10px" }} class="fab fa-facebook-f" />

                <i style={{ marginRight: "10px" }} class="fab fa-twitter" />

                <i style={{ marginRight: "10px" }} class="fab fa-instagram" />
                <i style={{ marginRight: "10px" }} class="fab fa-linkedin-in" />
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    </footer>
  );
};

export default Footer1;
