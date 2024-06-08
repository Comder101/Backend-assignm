import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import AdminLogin from './components/forms/AdminLogin';
import SideBar from './components/SideBar';

import Checkout from "./components/forms/Items/Checkout";

import CartComp from "./components/forms/Items/CartComp";
import ItemComp from "./components/forms/Items/ItemComp";



function App() {
  return (
    <div className='flex font-poppins'>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard/*" element={<AuthenticatedRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

function AuthenticatedRoutes() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="itemcomp" element={<ItemComp />} />
        <Route path="cartcomp" element={<CartComp />} />
        <Route path="checkout" element={<Checkout />} /> 
      </Routes>
    </>
  );
}

export default App;
