import React from "react";
// import resume from "../../images/resume.pdf";
import "../../style.css";

export default function Footer() {
  return (
    <>
      <footer className="footer text-center" style={{ padding: "20px 20px" }}>
        <div id="go-top">
          <a className="smoothscroll" href="#homepage">
            <i className="fa fa-chevron-circle-up up-arrow"></i>
          </a>
        </div>

        <div className="container mb-3">
          <a
            href="https://www.linkedin.com/in/fraser-clarke-a425081b9/"
            className="btn  icons"
          >
            <i
              class="fab fa-linkedin "
              style={{ fontSize: 30, color: "#E8E8E8", marginRight: "30px" }}
            ></i>
          </a>
          <a
            href="https://github.com/FraserClarke"
            className="btn  icons"
          >
            <i
              class="fab fa-github"
              style={{ fontSize: 30, color: "#E8E8E8", marginRight: "30px" }}
            ></i>
          </a>
          <a
            href="mailto:clarkefraser1@gmail.com"
            className="btn icons"
          >
            <i
              class="fa fa-envelope "
              style={{ fontSize: 30, color: "#E8E8E8", marginRight: "30px" }}
            ></i>
          </a>
          {/* <a
            href={resume}
            className="btn  icons"
            title="Resume"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 30, color: "#E8E8E8" }}
          >
            <i className="fas fa-file-pdf"></i>
          </a> */}

          <br />
          {/* <p
            className="copyright mt-2 text-center"
            style={{ color: "#a6a6a6", marginRight: "30px", marginTop: "15px" }}
          >
            
          </p> */}
        </div>
      </footer>
    </>
  );
}
