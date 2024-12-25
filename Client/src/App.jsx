import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";



import Home from './Pages/Home/Home.page.jsx';
import Product from './Pages/Product/Product.page.jsx';
import Order from './Pages/Order/Order.page.jsx';
import FacebookLogin from './Pages/Facebook/Facebook.login.jsx';




function App() {
  return (
   
    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/Order" element={<Order/>} />
            <Route path="/FacebookLogin" element={<FacebookLogin/>} />
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  );
}

export default App;