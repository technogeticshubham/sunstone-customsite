import React from "react";

const Header = (props) => {
  console.log("Header", props);
  return (
    <div className="nav-container">
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>

        <li className="nav-item nav-item-dropdown">
          <a className="dropdown-trigger" href="#">
            Settings
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-menu-item">
              <a href="#">Dropdown Item 1</a>
            </li>
            <li className="dropdown-menu-item">
              <a href="#">Dropdown Item 2</a>
            </li>
            <li className="dropdown-menu-item">
              <a href="#">Dropdown Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
