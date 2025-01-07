
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;


