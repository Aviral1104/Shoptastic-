import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <ShoppingCart className="text-purple-600 mr-2" size={24} />
        <h2 className="text-2xl font-bold text-purple-600">Shopping Cart</h2>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 bg-gray-100 p-3 rounded">
              <span className="text-gray-800">{item.name} - ${item.price.toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item)}
                className="btn btn-secondary text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="font-bold mt-4 text-xl text-purple-600">
            Total: ${total.toFixed(2)}
          </div>
          <button className="btn btn-primary w-full mt-6">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;