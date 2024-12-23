import React from "react";

const SortBar = ({ currentSort, onSortChange }) => {
  return (
    <div className="p-4">
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="price_low">Price: Low to High</option>
        <option value="price_high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortBar;