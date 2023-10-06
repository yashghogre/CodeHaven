import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

function Footer() {
  return (
    <div>
      <div className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              {/* content add kr skte hai yha*/}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Code Haven</h1>
          <h2>Contact</h2>
          <address>
            Billo bagge Billiada Ki Karegi<br />
            <a className="footer__btn" href="mailto:codehavenonyt@gmail.com">Email Us</a>
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Developers</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Frontend</a>
              </li>
              <li>
                <a href="#">Backend</a>
              </li>
              <li>
                <a href="#">UI/UX</a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>
            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Software Design</a>
              </li>
              <li>
                <a href="#">Automation</a>
              </li>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; Code Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
