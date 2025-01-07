import React from "react";
import "../assets/css/style.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokemon..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};


export default SearchBar;