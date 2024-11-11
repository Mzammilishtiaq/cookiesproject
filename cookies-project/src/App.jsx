import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Logout from './Pages/Logout';
import GoogleReviews from './Pages/Reviews';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reviews" element={<GoogleReviews />} />
      <Route path="/" element={<Login />} /> {/* Default to Login */}
    </Routes>
  )
}

export default App
