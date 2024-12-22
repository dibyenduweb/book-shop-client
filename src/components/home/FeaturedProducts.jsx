import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]); // Store products
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch products from the server
    axios
      .get("http://localhost:5000/allproducts")
      .then((response) => {
        console.log("API Response:", response.data); // Log the full response
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);  // Update state with the 'products' array
        } else {
          console.error("Unexpected data format");
        }
        setLoading(false);  // Set loading to false after receiving response
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);  // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Log products state to verify if it's populated correctly
  useEffect(() => {
    console.log("Products State Updated:", products); // Log the products state
  }, [products]);

  const featuredProducts = products.slice(0, 4); // Get the first 4 products

  return (
    <div className="lg:flex items-center justify-between gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <div>Loading...</div>
        ) : featuredProducts.length > 0 ? (
          featuredProducts.map((product) => {
            console.log("Rendering product:", product);  // Log product data
            return (
              <div
                key={product._id} // Assuming _id is correct, or change to product.id if that's the correct field
                className="card w-full bg-base-200 shadow-md p-4"
              >
                <img
                  src={product.imageUrl}  // Ensure product.imageUrl exists
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg text-gray-600">${product.price}</p>
              </div>
            );
          })
        ) : (
          <div>No products available</div>
        )}
      </div>

      {/* View All Products Button */}
      <div className="mt-4">
        <Link to="/product">
          <button className="btn btn-warning">View All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
