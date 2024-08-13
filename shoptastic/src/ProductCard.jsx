import React from 'react';

const ProductCard = ({ product, addToCart }) => (
    <div className="card hover-lift animate-fade-in shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-green-500">₹{product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
            >
            Add to Cart
            </button>
        </div>
      </div>
    </div>
  );

export default ProductCard;
