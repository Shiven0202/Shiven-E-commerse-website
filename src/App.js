import React, { useState, useEffect } from 'react';

import Home from './Components/Home'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Product from './Components/Product';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in when the app loads
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Product />} />
      {/* other routes */}
      <Route path='/Products' element={<Products/>}/>
      <Route path="/cart" element={<Cart />} /> {/* Add this route for Cart */}
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/Register' element={<Register/>}/>
    </Routes>
   

    </>
  );
}

export default App;
