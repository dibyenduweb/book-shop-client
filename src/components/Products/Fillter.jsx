/* eslint-disable react/prop-types */
import { FaFilter } from "react-icons/fa";

const Fillter = ({
  setCategory,
  handleReset,
  uniqueCategory,
}) => {
  return (
    <div className="bg-gray-200 h-full min-h-screen">
      <div className="flex items-center gap-1 p-4">
        <FaFilter />
        <h2 className="text-xl sm:text-2xl font-semibold">Filters</h2>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:gap-6 items-center px-4 sm:px-8">
        {/* Category Filter */}
        <div className="w-full sm:w-64">
          <select
            className="p-[11px] w-full border border-black rounded-md"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            {uniqueCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset Button */}
      <div className="px-4 sm:px-8 mt-4">
        <button
          onClick={handleReset}
          className="w-full sm:w-auto sm:px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Fillter;
