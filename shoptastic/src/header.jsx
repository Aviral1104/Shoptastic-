import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm, cartItemsCount }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold ml-2">Shoptastic!!</Link>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to="/cart" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


