import React from "react";
import Search from "./Search.js";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="search-area col-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}
export default Nav;