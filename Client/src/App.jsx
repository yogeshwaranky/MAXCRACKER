import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";

import HomePage from './Pages/HomePage.jsx';

function App() {
  return (
   
    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<HomePage />} />
            
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  );
}

export default App;