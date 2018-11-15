import React from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_content">
      <Link to="/">
        <div className="nav_logo"> Shanelle's Gym</div>
      </Link>
      <div className="nav_links">
        <Link to="/pricing">
          <div>Pricing</div>
        </Link>
        <Link to="/store">
          <div>Shop</div>
        </Link>
        <Link to="/calculator">
          <div>Macro Calculator</div>
        </Link>
      </div>
      <div className="nav_login">Login</div>
    </div>
  );
};

export default Header;
