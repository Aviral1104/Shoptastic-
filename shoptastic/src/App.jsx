import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Content from './content';
import CartPage from './CartPage';
import Hero from './Hero';
import Footer from './Footer';

const products = [
  { id: 1, name: 'Laptop', price: 99999, description: 'High-performance laptop', image: '/laptop.jpeg' },
  { id: 2, name: 'Smartphone', price: 49999, description: 'Latest model smartphone', image: '/Smartphone.jpeg' },
  { id: 3, name: 'Headphones', price: 9999, description: 'Noise-cancelling headphones', image: '/Headphones.jpeg' },
  { id: 4, name: 'Smartwatch', price: 19999, description: 'Fitness tracking smartwatch', image: '/Smartwatch.jpeg' },
  { id: 5, name: 'Tablet', price: 29999, description: 'Lightweight and powerful tablet', image: '/Tablet.jpeg' },
  { id: 6, name: 'Camera', price: 59999, description: 'Professional DSLR camera', image: '/Camera.jpeg' },
  { id: 7, name: 'Monitor', price: 25999, description: 'High Resolution 144 Hz responsive display', image: '/monitor.jpeg' },
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
