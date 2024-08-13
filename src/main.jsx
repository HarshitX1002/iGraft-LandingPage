import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      basename="/iGraft-landingpage/"></BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </React.StrictMode>,
)
