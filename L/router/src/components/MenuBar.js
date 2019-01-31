import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

//Custom lại Menu Link(Thay thế cho thằng NavLink)
const MenuLink = ({ label, to, activeWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={active}>
            <Link to={to} className="my-link">
              {" "}
              {label}{" "}
            </Link>{" "}
          </li>
        );
      }}
    />
  );
};
class MenuBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <MenuLink label="Trang chủ" to="/" activeWhenExact={true} />{" "}
          <MenuLink label="Giới thiệu" to="/about" activeWhenExact={false} />{" "}
          <MenuLink label="Liên hệ" to="/contact" activeWhenExact={false} />{" "}
        </ul>{" "}
      </nav>
    );
  }
}

export default MenuBar;
