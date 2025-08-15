import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search furniture..."
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label="Search furniture"
    />
  </div>
);

export default SearchBar;
