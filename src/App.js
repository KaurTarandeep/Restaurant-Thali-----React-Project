import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Thali from "./Component/Thali"
import Checkout from "./Component/Checkout"
import Home from "./Component/Home"


export default function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thali" element={<Thali />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}