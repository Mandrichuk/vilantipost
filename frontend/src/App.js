import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/client/home/Home';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_51OQ6tgHJ7Lg8p1yn8ItZcWpblIjGUeZdeWDUdVAaFIezfSvSwj9dZQGW2QhkcpO9Uw9MPddzVsJHy7p0ZUADKSxt0056k3Kv9H");

function App() {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <Routes>

            <Route path="/" element={<Home />} />

        </Routes>    
      </Elements>
    </BrowserRouter>
  );
}

export default App;