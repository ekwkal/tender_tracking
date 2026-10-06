import React from 'react'

import TenderSubmission from './pages/TenderSubmission'
import Customer from './pages/Customer'
import TenderViewer from './pages/Tender_viewer'

import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello, World!</h1>} />
        <Route path="/tender-submission" element={<TenderSubmission />} />
        <Route path="/tender-viewer" element={<TenderViewer />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
