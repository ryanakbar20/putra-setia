import React from 'react';

export default function HeaderCustom({ onClick, theme }) {
  switch (theme) {
    case 'dark':
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark dark">
          <div className="container">
            <a class="navbar-brand" href="#">
              <div className="brand-text-icon">
                Putra <span>Setia.</span>
              </div>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto d-flex flex-row ">
                <li class="nav-item active mr-5">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item active mr-5">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item active mr-5">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item active">
                  <div
                    onClick={onClick}
                    className="nav-link btn btn-primary btn-sm"
                  >
                    Mode
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );

    default:
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark light">
          <div className="container">
            <a class="navbar-brand" href="#">
              <div className="brand-text-icon">
                Putra <span>Setia.</span>
              </div>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto d-flex flex-row ">
                <li class="nav-item active mr-5">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item active mr-5">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item active mr-5">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item active">
                  <div
                    onClick={onClick}
                    className="nav-link btn btn-primary btn-sm"
                  >
                    Mode
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}
