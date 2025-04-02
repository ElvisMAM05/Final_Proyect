import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from '../Pages/Welcome'

import MainP from '../Pages/MainP'
import MainForm from '../Components/MainForm'
import Admi from '../Pages/Admi'


function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
       
            <Route path='/MainP' element={<MainP/>}/>
            <Route path='/login' element={<MainForm/>}/>
            <Route path='Admins' element={<Admi/>}/>
            
        </Routes>
    </Router>
  )
}
export default Routing