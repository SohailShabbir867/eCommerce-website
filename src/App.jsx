import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Price from './pages/Price.jsx'
import PaymentPage from './pages/Payment.jsx'
import Deals from './components/Deals.jsx'
import About from './pages/About.jsx'

import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /> {/* ✅ Navbar is shown on all pages */}
      <Routes>
        <Route path="/home" element={<Home count={count} setCount={setCount} />} />
        <Route path="/about" element={<About count={count} setCount={setCount} />} />
        <Route path="/products" element={<Products count={count} setCount={setCount} />} />
        <Route path="/deals" element={<Deals count={count} setCount={setCount} />} />
        <Route path="/price" element={<Price count={count} setCount={setCount} />} />
        <Route path="/payment" element={<PaymentPage count={count} setCount={setCount} />} />
      </Routes>
    </>
  )
}

export default App
