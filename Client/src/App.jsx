import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";

import HomePage from './Pages/HomePage.jsx';
import Invoice from './Pages/Invoice.jsx';
import Contact from './Pages/Contact.page.jsx';


function App() {
  return (
   
    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  );
}

export default App;