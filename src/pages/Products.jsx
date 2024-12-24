import { useEffect, useState } from "react";
import axios from "axios";
import Fillter from "../components/Products/Fillter";
import SearchBar from "../components/SearchBar";
import Loading from "./Loading";
import ShortByPrice from "../components/ShortByPrice";
import ProductCard from "../components/ProductCard";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [category, setCategory] = useState("");
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch products from the server
    axios
      .get(
        `http://localhost:5000/allproducts?title=${search}&page=${page}&limit=9&sort=${sort}&category=${category}`
      )
      .then((res) => {
        if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalProducts / 9)); // Calculate total pages
        } else {
          console.error(
            "Expected an array of products, but received:",
            res.data
          );
          setProducts([]); // Clear products in case of wrong data format
        }
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading in case of error
      });
  }, [search, sort, category, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setSort("asc");
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPages(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-10 text-2xl font-semibold text-center">All Products</h1>

      <div className="lg:flex justify-around items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch} />
        <ShortByPrice setSort={setSort} />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          {/* Filter Component */}
          <Fillter
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueCategory={uniqueCategory}
          />
        </div>
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full items-center text-center">
                  <h1 className="text-3xl font-bold">No Product found</h1>
                </div>
              ) : (
                <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.isArray(products) &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              )}
            </>
          )}
          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 my-8">
            <button
              className="btn p-4"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <p>
              page {page} of {totalPages}
            </p>
            <button
              className="btn p-4"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
