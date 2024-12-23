import React, { useInsertionEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setSizes,
  setPriceRange,
  setRatings,
  setSleeveLength,
  resetFilters,
} from "../../store/filterSlice";

const FilterBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filter visibility on mobile
  const dispatch = useDispatch();

  // Retrieving filters from Redux state
  const filters = useSelector((state) => state.filter);

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .price-range-label { font-weight: bold; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const checkfilter = () => {
    
  };

  // Filter Handlers
  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    const newSizes = filters.sizes.includes(selectedSize)
      ? filters.sizes.filter((size) => size !== selectedSize)
      : [...filters.sizes, selectedSize];
    dispatch(setSizes(newSizes));
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    const newPriceRange =
      selectedPrice === "100,Infinity"
        ? [100, Infinity]
        : selectedPrice.split(",").map(Number);
    dispatch(setPriceRange(newPriceRange));
  };

  const handleRatingChange = (event) => {
    dispatch(setRatings(event.target.value));
  };

  const handleSleeveLengthChange = (event) => {
    dispatch(setSleeveLength(event.target.value));
  };

  // Reset Filters
  const resetFilterValues = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      {/* Filter Button for small screens */}
      <div className="block md:hidden p-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="border px-3 py-1 "
        >
          Filter
        </button>
      </div>

      {/* Filter Bar for mobile (slides in) */}
      <motion.div
        initial={{ x: "-100%" }} // Start off-screen for mobile
        animate={{ x: isFilterOpen ? 0 : "-100%" }} // Slide in on click for mobile
        transition={{ duration: 0.4 }}
        className="fixed top-[8.2%] left-0 w-64 h-full opacity-90 bg-gray-100 z-auto p-6 shadow-lg md:hidden"
      >
        <div className="md:hidden flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Filter</h3>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="text-gray-600 text-sm "
          >
            Close
          </button>
        </div>

        {/* Filter options (for mobile) */}
        <div className="w-full text-sm">
          {/* Filter by Size */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Size</h4>
            <div className="flex flex-col space-y-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={size}
                    checked={filters.sizes.includes(size)}
                    onChange={handleSizeChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Price */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Price</h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: "0 - 25", value: "0,25" },
                { label: "25 - 50", value: "25,50" },
                { label: "50 - 75", value: "50,75" },
                { label: "75 - 100", value: "75,100" },
                { label: "100+", value: "100,Infinity" },
              ].map(({ label, value }) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={value}
                    checked={filters.priceRange.join(",") === value}
                    onChange={handlePriceChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Customer Ratings */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Customer Ratings</h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: "4 Stars & Up", value: "4" },
                { label: "3 Stars & Up", value: "3" },
                { label: "2 Stars & Up", value: "2" },
                { label: "1 Star & Up", value: "1" },
              ].map(({ label, value }) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={value}
                    checked={filters.ratings === value}
                    onChange={handleRatingChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Sleeve Length */}
          {/* <div className="mb-4">
            <h4 className="font-semibold mb-2">Sleeve Length</h4>
            <div className="flex flex-col space-y-2">
              {["Short Sleeve", "Long Sleeve", "Sleeveless"].map((length) => (
                <label key={length} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={length}
                    checked={filters.sleeveLength === length}
                    onChange={handleSleeveLengthChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{length}</span>
                </label>
              ))}
            </div>
          </div> */}

          {/* Reset Filters Button */}
          <div className="mt-4">
            <button
              onClick={resetFilterValues}
              className="bg-gray-100 p-2 rounded-lg hover:bg-red-300 transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </motion.div>


      {/* Filter Bar visible on larger screens */}
      <div className="hidden md:block w-[100%] h-full  p-6">
        <h2 className="font-extrabold tracking-wider mb-6">Filters</h2>
        <div className="w-full text-sm">
          {/* Apply the same logic for larger screens */}
          {/* Filter by Size */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Size</h4>
            <div className="flex flex-col space-y-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    onClick={() => checkfilter()}
                    type="checkbox"
                    value={size}
                    checked={filters.sizes.includes(size)}
                    onChange={handleSizeChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Price */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Price</h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: "0 - 25", value: "0,25" },
                { label: "25 - 50", value: "25,50" },
                { label: "50 - 75", value: "50,75" },
                { label: "75 - 100", value: "75,100" },
                { label: "100+", value: "100,Infinity" },
              ].map(({ label, value }) => (
                <label
                  key={value}
                  className="flex items-center space-x-2

"
                >
                  <input
                    type="radio"
                    value={value}
                    checked={filters.priceRange.join(",") === value}
                    onChange={handlePriceChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Customer Ratings */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Customer Ratings</h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: "4 Stars & Up", value: "4" },
                { label: "3 Stars & Up", value: "3" },
                { label: "2 Stars & Up", value: "2" },
                { label: "1 Star & Up", value: "1" },
              ].map(({ label, value }) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={value}
                    checked={filters.ratings === value}
                    onChange={handleRatingChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Sleeve Length */}
          {/* <div className="mb-4">
            <h4 className="font-semibold mb-2">Sleeve Length</h4>
            <div className="flex flex-col space-y-2">
              {["Short Sleeve", "Long Sleeve", "Sleeveless"].map((length) => (
                <label key={length} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={length}
                    checked={filters.sleeveLength === length}
                    onChange={handleSleeveLengthChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span>{length}</span>
                </label>
              ))}
            </div>
          </div> */}

          {/* Reset Filters Button */}
          <div className="mt-10">
            <button
              onClick={resetFilterValues}
              className="bg-gray-100 p-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
