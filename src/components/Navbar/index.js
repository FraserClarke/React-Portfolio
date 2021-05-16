import React from "react";
import "../../style.css";

export default function Nav() {
  return (
    <section id="homepage">
      <div className="container-fluid navbarColor ">
        <nav>
          <ul className="navbar nav justify-content-center fixed-top navbar-dark navbarColor ">
            <li className="nav-item">
              <a className="nav-link li-list" href="#homepage">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link li-list" href="#aboutme">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link li-list" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
