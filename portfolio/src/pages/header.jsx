import React from "react";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark rounded shadow mb-3"
        data-spy="affix"
        data-offset-top="0"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Page Header -->  */}
      <header className="header" id="home">
        <div className="container">
          <div className="infos">
            <h6 className="subtitle">hello,I'm</h6>
            <h6 className="title">Sarthak Kesarwani</h6>

            <div className="buttons pt-3">
              <button className="btn btn-dark rounded">
                <a
                  href="https://drive.google.com/file/d/1fU7t-aCV4UahCKFUITkAvDZ3SNi5TaLr/view?usp=sharing"
                  target="_blank"
                >
                  Click to visit on my resume..
                </a>
              </button>
            </div>

            <div className="socials mt-4">
              <a
                className="social-item"
                href="https://www.instagram.com/cool_srthkgnsh/"
              >
                <i className="ti-instagram"></i>
              </a>
              {/* <a className="social-item" href="SetInnerHTML">
                  <i className="ti-gmail"></i>
                </a> */}
              <a className="social-item" href="github.com/srthkksrwni">
                <i className="ti-github"></i>
              </a>
              <a className="social-item" href="linkedin.com/in/sarthak8858">
                <i className="ti-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="img-holder">
            <img src="/assets/imgs/mannn.jpg.jpg" alt="" />
          </div>
        </div>

        {/* <!-- Header-widget --> */}
        <div className="widget">
          <div className="widget-item">
            <h2>2</h2>
            <p>Project Completed</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
