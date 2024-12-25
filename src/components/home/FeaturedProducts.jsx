/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://bookshop-server-theta.vercel.app/allproducts");
        const data = await response.json();

        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error(
            "Error: The response does not contain a 'products' array"
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
          products.slice(0, 4).map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-64 object-scale-down rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-green-600">
                  ₹{product.price}
                </span>
                <span className="text-sm text-gray-500">
                  Stock: {product.stock}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/product">
          <button className="btn btn-warning text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
