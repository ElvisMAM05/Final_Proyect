import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from '../Pages/Welcome'
import RegisterP from '../Pages/RegisterP'
import MainP from '../Pages/MainP'
import MainForm from '../Components/MainForm'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/Register' element={<RegisterP/>}/>
            <Route path='/MainP' element={<MainP/>}/>
            <Route path='/login' element={<MainForm/>}/>
        </Routes>
    </Router>
  )
}
export default Routing