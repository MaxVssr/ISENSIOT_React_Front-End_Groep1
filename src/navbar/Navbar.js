import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation u-z-2" id="navbar">
      <a className="home-logo u-z-3" href="/">
        Woonkwaliteit Net
      </a>
      <div className="navigation-icon u-z-3">
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
      <ul className="navigation__menu u-z-2">
        <li className="navigation__menu__item">
          <a className="navigation__menu__link" href="/">
            Home
          </a>
        </li>
        <li className="navigation__menu__item">
          <a className="navigation__menu__link" href="#charts">
            Charts
          </a>
        </li>
        <li className="navigation__menu__item">
          <a className="navigation__menu__link" href="mailto:help@ssnwk.com">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
