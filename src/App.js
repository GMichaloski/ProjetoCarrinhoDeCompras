import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import ShoppingCart from './Routes/ShoppingCart';
import cartStorage from './Services/cartStorage';

export default function App() {
  cartStorage();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
