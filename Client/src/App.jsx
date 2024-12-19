import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";



import Home from './Pages/Home/Home.page.jsx';
import Product from './Pages/Product/Product.Page.jsx';



function App() {
  return (
   
    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  );
}

export default App;