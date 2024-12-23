/* eslint-disable react/prop-types */

import axios from "axios";
import useUserData from "../hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({ product, isInWishlist, setLatesData}) => {
  const userData = useUserData();
  const userEmail = userData.email;

  if (!product) {
    return (
      <div className="w-full h-64 flex justify-center items-center bg-gray-200">
        <p>Product data is missing</p>
      </div>
    );
  }

  const handleWishlist = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        "https://bookshop-server-theta.vercel.app/wishlist/add",
        { userEmail: userEmail, productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(
          "Error adding to wishlist:",
          error.response ? error.response.data : error.message
        );
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleRemoveWishlist = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        "https://bookshop-server-theta.vercel.app/wishlist/remove",
        { userEmail: userEmail, productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product remove wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setLatesData((prev) => !prev)
          
        }
      })
      .catch((error) => {
        console.error(
          "Error adding to wishlist:",
          error.response ? error.response.data : error.message
        );
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  


  // Safeguard: Ensure product.description is a string before calling slice
  const description = product?.description || ""; // Default to an empty string if undefined
  const shortDescription =
    description.length < 50 ? description : `${description.slice(0, 50)}...`;

  return (
    <div className="max-w-xs w-full rounded-md shadow-lg overflow-hidden group">
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
          {shortDescription}
        </p>
        <div className="mt-4">
          {isInWishlist ? (
            <button
            onClick={handleRemoveWishlist}
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Remove From Wishlist
            </button>
          ) : (
            <button
              onClick={handleWishlist}
              className="btn btn-warning"
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
