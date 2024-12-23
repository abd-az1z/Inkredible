import React from "react";

const FilterBar = ({ category, size, minPrice, maxPrice, onFilterChange }) => {
  return (
    <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          value={category}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Size</h3>
        <select
          value={size}
          onChange={(e) => onFilterChange("size", e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => onFilterChange("minPrice", e.target.value)}
          className="w-1/2 p-2 border rounded mr-2"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => onFilterChange("maxPrice", e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default FilterBar;