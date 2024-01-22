import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


const app = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path = "/" element={<Login/>} />
                <Route path = "/" element={<Signup/>} />
                <Route path = "/" element={<Home/>} />
            </Routes>
        </Router>

    </div>
  )
}

export default app