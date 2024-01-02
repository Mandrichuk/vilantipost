import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/client/home/Home';
import Form from "./components/client/form/Form";

function App() {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />

        </Routes>    
    </BrowserRouter>
  );
}

export default App;