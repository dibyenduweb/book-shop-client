/* eslint-disable react/prop-types */
const ShortByPrice = ({ setSort }) => {
  return (
    <div>
      <h1 className="text-lg sm:text-xl">ShortByPrice</h1>
      <select
        className="p-[11px] max-w-full sm:max-w-md w-full sm:w-40 border border-black rounded-md"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};
export default ShortByPrice;
