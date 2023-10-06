import React from 'react';
import './Header.css'; // Import your CSS file

function Header() {
  return (
    <div>
      <div className="about">
        <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
          <span className="icon"></span>
        </a>
        <a className="bg_links social instagram" href="https://www.instagram.com/your_username" target="_blank">
          <span className="icon"></span>
        </a>
        <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>
      <nav className="mainNav">
        <div className="mainNav__logo">Code Haven</div>
        <div className="mainNav__links">
          <a href="" className="mainNav__link">About</a>
          <div className="dropdown">
            <a href="#" className="mainNav__link dropdown-toggle">Projects</a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Web Dev</a>
              <a href="#" className="dropdown-item">Project 2</a>
              <a href="#" className="dropdown-item">Project 3</a>
            </div>
          </div>
          <a href="" className="mainNav__link">Team</a>
          <a href="" className="mainNav__link">Contacts</a>
        </div>
        <div className="mainNav__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2" fill="#9197AE">
              <g data-name="menu-2">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <circle cx="4" cy="12" r="1" />
                <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
                <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
                <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
              </g>
            </g>
          </svg>
        </div>
      </nav>
      <header className="mainHeading">
        <div className="mainHeading__content">
          <article className="mainHeading__text">
            <p className="mainHeading__preTitle">Code Haven</p>
            <h2 className="mainHeading__title">Be Beyond the code!!</h2>
            <p className="mainHeading__description">
              Billo bage Billiyada Ki Karegi Bagge Bagge Billiada Ki Karegi.
              Kale cha libas ke shakin ne kudi dur dur jave mere kaale rang toh.
            </p>
            <button className="cta">Register Now</button>
          </article>

          <figure className="mainHeading__image">
            <img
              src="https://cse.noticebard.com/wp-content/uploads/sites/23/2023/03/Top-5-Coding-Challenge-in-April-2023.jpg"
              alt=""
            />
          </figure>
        </div>
      </header>
    </div>
  );
}

export default Header;
