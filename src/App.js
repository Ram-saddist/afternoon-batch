import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home/Home'
import NotFound from './NotFound'
import DoctorInfo from './Doctor/DoctorInfo'
import PatientsInfo from './Patient/PatientsInfo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctor" element={<DoctorInfo/>}/>
          <Route path="/patient" element={<PatientsInfo/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
