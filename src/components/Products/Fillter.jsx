/* eslint-disable react/prop-types */
import { FaFilter } from "react-icons/fa";

const Fillter = ({
  setBrand, // Fix capitalization for consistency
  setCategory,
  handleReset,
  uniqueBrand,
  uniqueCategory,
}) => {
  return (
    <div className="bg-gray-200 h-full min-h-screen">
      <div className="flex items-center gap-1 p-4">
        <FaFilter />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div className="mt-8 flex flex-col gap-2 items-center">
        {/* Brand Filter */}
        <div>
          <select
            className="p-[11px] w-40 border border-black rounded-md"
            onChange={(e) => setBrand(e.target.value)} // Set brand onChange
          >
            <option value="">Brands</option>
            {uniqueBrand.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        
        {/* Category Filter */}
        <div>
          <select
            className="p-[11px] w-40 border border-black rounded-md"
            onChange={(e) => setCategory(e.target.value)} // Set category onChange
          >
            <option value="">Category</option>
            {uniqueCategory.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset Button */}
      <button onClick={handleReset} className="btn mt-4 w-full">
        Reset
      </button>
    </div>
  );
};

export default Fillter;
