/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";

const SearchBar = ({handleSearch}) => {
  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2" >
      <input
        type="text"
        placeholder="Search Products"
        name="search"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
      >
        <IoSearch />
      </button>
    </form>
  );
};
export default SearchBar;
