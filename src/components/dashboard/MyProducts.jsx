/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";

const MyProducts = () => {
  const userData = useUserData();
  const userEmail = userData?.email;

  // State to store all products and the filtered products
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://bookshop-server-theta.vercel.app/allproducts"
        );
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (allProducts.length > 0 && userEmail) {
      const filtered = allProducts.filter(
        (product) => product.sellerEmail === userEmail
      );
      setFilteredProducts(filtered);
    }
  }, [allProducts, userEmail]);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-xs w-full rounded-md shadow-lg overflow-hidden group"
          >
            <div className="relative">
              <img
                className="w-full h-64 object-scale-down group-hover:scale-105 transition-transform duration-300 ease-in-out"
                src={product?.imageUrl || "/placeholder.jpg"}
                alt={product?.title || "Product image"}
              />
            </div>
            <div className="bg-white p-4">
              <h2 className="text-xl font-semibold text-gray-800 truncate">
                {product?.title || "No Title Available"}
              </h2>
              <h3 className="text-md text-gray-600">
                {product?.brand || "No Brand"}
              </h3>
              <p className="text-lg text-red-600 font-semibold">
                ${product?.price || "0.00"}
              </p>
              <h4 className="text-sm text-gray-500">
                {product?.category || "No Category"}
              </h4>
              <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                {product?.description || "No description available"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No products available for this user.</p>
      )}
    </div>
  );
};

export default MyProducts;
