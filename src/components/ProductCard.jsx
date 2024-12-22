/* eslint-disable react/prop-types */

import axios from "axios";
import useUserData from "../hooks/useUserData";

const ProductCard = ({ product }) => {
  const userData = useUserData();
  const userEmail = userData.email
  console.log(userEmail);

  if (!product) {
    return (
      <div className="w-full h-64 flex justify-center items-center bg-gray-200">
        <p>Product data is missing</p>
      </div>
    );
  }

const handleWishlist =() =>{
  axios.patch('http://localhost:5000/wishlist/add',{userEmail:userEmail,productId:product._id})
}

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
          {product?.description?.length < 50
            ? product?.description
            : `${product?.description.slice(0, 50)}...`}
        </p>

        <div className="mt-4" >
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
