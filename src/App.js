import React from 'react';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import ShoppingCart from './Routes/ShoppingCart';
import CartList from './Components/CartList';

export const shoppingCart = new CartList();
export default function App() {
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
