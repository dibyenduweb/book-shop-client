
import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import axios from "axios";
import ProductCard from "../../ProductCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userData = useUserData();
  const [latesData, setLatesData] =useState(true)
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!userData._id) {
        console.log("User data is missing.");
        setError("User data is missing.");
        setLoading(false);
        return;
      }

      if (!token) {
        console.log("No token found.");
        setError("No token found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/wishlist/${userData._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
    
        if (response.data) {
          setWishlist(response.data); // Store wishlist data
        } else {
          setError("No data received.");
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setError("Error fetching wishlist.");
      } finally {
        setLoading(false);
      }
    };

    if (userData._id && token) {
      fetchWishlist();
    }
  }, [userData._id, token, latesData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <div>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {wishlist.map((product) => (
              <ProductCard key={product._id} product={product} isInWishlist
              setLatesData={setLatesData} latesData={setLatesData}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h1>No Products in your wishlist</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
