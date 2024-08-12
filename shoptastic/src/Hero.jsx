import React from 'react';
import { useHref } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 text-white pt-16">
      <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Welcome to TechShop</h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up">Explore cutting-edge technology and the newest gadgets on the market.</p>
        <button className="btn btn-secondary hover-lift" onClick={useHref}>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;