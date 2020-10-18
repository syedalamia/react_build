import React from "react";
import "../css/style.css";
import "../css/media.css";

//all images in header
import logo from "../images/nav_logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="main_logo">
            <a class="navbar-brand" href="index.html">
              <img src={logo} alt={"logo"} />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active ">
                <a class="nav-link orange" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Project
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pages
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li class="nav-item search_logo">
                <a class="nav-link" href="#">
                  <ion-icon name="search-outline"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
