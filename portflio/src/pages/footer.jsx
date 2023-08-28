import React from "react";

function Footer() {
  return (
    <>
      <footer className="page-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p>
                Copyright{" "}
                <script>document.write(new Date().getFullYear())</script> &copy;{" "}
                <a href="http://www.devcrud.com" target="_blank">
                  2023
                </a> || Designed by SARTHAK KESARWANI
              </p>
            </div>
            <div className="col-sm-6">
              <div className="socials">
                <a className="social-item" href="https://www.instagram.com/cool_srthkgnsh/" target="_blank">
                  <i className="ti-instagram"></i>
                </a>
                <a className="social-item" href="linkedin.com/in/sarthak8858" target="_blank">
                  <i className="ti-linkedin"></i>
                </a>
                <a className="social-item" href="github.com/srthkksrwni" target="_blank">
                  <i className="ti-github"></i>
                </a>
                <a className="social-item" href="SetInnerHTML">
                  <i className="ti-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
