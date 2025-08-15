import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="category-filter">
    {categories.map(cat => (
      <button
        key={cat}
        className={cat === selected ? "active" : ""}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </button>
    ))}
    <button
      className={selected === "All" ? "active" : ""}
      onClick={() => onSelect("All")}
    >
      All
    </button>
  </div>
);

export default CategoryFilter;
