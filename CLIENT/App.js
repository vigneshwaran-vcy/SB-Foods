import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import Menu from './components/MenuPage';
import Orders from './components/OrderHistory';
import Cart from './components/Cart';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/your-endpoint') // Replace with your actual backend endpoint
      .then((response) => {
        // Handle the response if needed, e.g., updating state, logging data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Optionally set error if you plan to display it somewhere
      });
  }, []);

  return (
    <Router>
      <CartProvider> {/* Wrap your app in CartProvider */}
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/MenuPage" element={<Menu />} />
            <Route path="/OrderHistory" element={<Orders />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route */}
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
