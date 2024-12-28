import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useState } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";

import Home from './Pages/Home/Home.page.jsx';
import Product from './Pages/Product/Product.page.jsx';
import Order from './Pages/Order/Order.page.jsx';
import FacebookLogin from './Pages/Facebook/Facebook.login.jsx';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <AppProviders>
      <Applayout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product cart={cart} setCart={setCart} />} />
            <Route path="/Order" element={<Order cart={cart} setCart={setCart} />} />
            <Route path="/FacebookLogin" element={<FacebookLogin />} />
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  );
}

export default App;
