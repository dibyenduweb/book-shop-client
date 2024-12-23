import React, { useState } from "react";

const Cart = () => {
  // Example cart data, each item includes product details and quantity
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "The Great Gatsby",
      image: "https://via.placeholder.com/150",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "1984 by George Orwell",
      image: "https://via.placeholder.com/150",
      price: 12.99,
      quantity: 2,
    },
    {
      id: 3,
      name: "To Kill a Mockingbird",
      image: "https://via.placeholder.com/150",
      price: 14.99,
      quantity: 1,
    },
  ]);

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Your Cart</h1>
        <p className="mt-4 text-lg text-gray-600">
          Review the items in your cart.
        </p>
      </section>

      {/* Cart Items Section */}
      <section className="space-y-6">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                  className="bg-gray-300 text-black px-2 py-1 rounded-full hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-lg">{product.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                  className="bg-gray-300 text-black px-2 py-1 rounded-full hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              {/* Remove from Cart Button */}
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-lg text-gray-500">
            Your cart is empty.
          </div>
        )}
      </section>

      {/* Cart Summary */}
      <section className="mt-8 text-right">
        <h2 className="text-xl font-semibold text-gray-800">
          Total: ${getTotalPrice().toFixed(2)}
        </h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Proceed to Checkout
        </button>
      </section>
    </div>
  );
};

export default Cart;
