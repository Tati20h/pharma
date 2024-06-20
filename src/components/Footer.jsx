import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h1 className="footer-newsletter__header">Contact us</h1>

          <div className="footer-newsletter__icons">
            <a href="https://www.linkedin.com/company/fda/">
              <LinkedInIcon fontSize="large" color="black" />
            </a>
            <a href="https://www.facebook.com/FDA">
              <FacebookRoundedIcon fontSize="large" color="black" />
            </a>
            <a href="https://x.com/US_FDA">
              <XIcon fontSize="large" color="black" />
            </a>
            <a href="https://instagram.com/FDA">
              <InstagramIcon fontSize="large" color="black" />
            </a>
          </div>
        </div>

        <div className="footer-body">
          <div className="footer-body__content">
            <p>
              Do not rely on openFDA to make decisions regarding medical care.
              While we make every effort to ensure that data is accurate, you
              should assume all results are un validated. We may limit or
              otherwise restrict your access to the API in line with our Terms
              of Service.
            </p>
          </div>
          <nav className="footer-body__nav">
            <ul className="footer-body__nav-list">
              <li className="footer-body__nav-item">
                Services
                <ul className="footer-body__nav-sublist">
                  <li className="footer-body__nav-subitem">
                    <p className="footer-body__nav-link">Marketing</p>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <p className="footer-body__nav-link">Design</p>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <p className="footer-body__nav-link">App Development</p>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <p className="footer-body__nav-link">Web development</p>
                  </li>
                </ul>
              </li>
              <li className="footer-body__nav-item">
                About
                <ul className="footer-body__nav-sublist">
                  <li className="footer-body__nav-subitem">
                    <a
                      href="https://www.fda.gov/"
                      className="footer-body__nav-link"
                    >
                      About
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a
                      href="https://www.fda.gov/about-fda/jobs-and-training-fda"
                      className="footer-body__nav-link"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a
                      href="https://www.fda.gov/about-fda/transparency/fda-basics"
                      className="footer-body__nav-link"
                    >
                      FDA Basics
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a
                      href="https://www.fda.gov/about-fda/transparency"
                      className="footer-body__nav-link"
                    >
                      Transparency
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-body__nav-item">
                Support
                <ul className="footer-body__nav-sublist">
                  <li className="footer-body__nav-subitem">
                    <a
                      href="https://open.fda.gov/terms/"
                      className="footer-body__nav-link"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a
                      href="https://open.fda.gov/license/"
                      className="footer-body__nav-link"
                    >
                      license
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <p className="footer-body__nav-link">Live chat</p>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-attribute">
          <p>&copy; Company 2024. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
