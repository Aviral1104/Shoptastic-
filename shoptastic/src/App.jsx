import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Content from './content';
import CartPage from './CartPage';
import Hero from './Hero';
import Footer from './Footer';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop', image: '/laptop.jpeg' },
  { id: 2, name: 'Smartphone', price: 499.99, description: 'Latest model smartphone', image: '/Smartphone.jpeg' },
  { id: 3, name: 'Headphones', price: 99.99, description: 'Noise-cancelling headphones', image: '/Headphones.jpeg' },
  { id: 4, name: 'Smartwatch', price: 199.99, description: 'Fitness tracking smartwatch', image: '/Smartwatch.jpeg' },
  { id: 5, name: 'Tablet', price: 299.99, description: 'Lightweight and powerful tablet', image: '/Tablet.jpeg' },
  { id: 6, name: 'Camera', price: 599.99, description: 'Professional DSLR camera', image: '/Camera.jpeg' },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} cartItemsCount={cart.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="container mx-auto px-4 py-8">
                  <Content searchTerm={searchTerm} addToCart={addToCart} products={products} />
                </div>
              </>
            } />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;