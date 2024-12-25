/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../pages/Loading";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true); 
  console.log(user);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://bookshop-server-theta.vercel.app/allproducts");
        const data = await response.json();

        if (Array.isArray(data.products)) {
          const filteredProducts = data.products.filter(
            (product) => product.sellerEmail === user.email
          );
          setProducts(filteredProducts);
        } else {
          console.error("Error: The response does not contain a 'products' array");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchProducts(); 
    }
  }, [user]);

  const handleEdit = (productId) => {
    console.log("Edit product with ID:", productId);
   
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`https://bookshop-server-theta.vercel.app/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
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
      <h1 className="text-2xl font-semibold text-center mb-6">My Products</h1>
      
      {/* Show loader while data is being fetched */}
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
                  <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                </div>

                {/* Edit and Delete Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="btn btn-warning text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-primary text-white px-4 py-2 rounded-md"
                  >
                    Delete
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

export default MyProducts;
