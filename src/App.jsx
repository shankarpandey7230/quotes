import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

import './index.css';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
