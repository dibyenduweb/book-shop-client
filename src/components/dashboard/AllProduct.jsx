/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Loading from "../../pages/Loading";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://bookshop-server-theta.vercel.app/allproducts");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `https://bookshop-server-theta.vercel.app/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
        alert("Product deleted successfully.");
      } else {
        alert("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-center mb-6">All Products</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
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
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-warning px-4 py-2 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
