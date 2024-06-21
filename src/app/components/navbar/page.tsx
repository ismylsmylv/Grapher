import React from "react";
import "./style.scss";
type Props = {};
const navs = ["Home", "Services", "Portfolio", "About", "Article", "Contact"];
function Navbar({}: Props) {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="navs">
          {navs.map((nav) => (
            <div className="nav" key={nav}>
              {nav}
            </div>
          ))}
        </div>
        <div className="account">
          <button className="login">login</button>
          <button className="signup">sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
