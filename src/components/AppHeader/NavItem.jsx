import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavItem = ({ header }) => {
  const location = useLocation();

  return (
    <div
      className={`header--heading ${
        location?.pathname == header?.url ? "header--bottomBorder" : ""
      }`}
    >
      <Link to={header?.url}>{header?.name}</Link>
    </div>
  );
};

export default NavItem;
