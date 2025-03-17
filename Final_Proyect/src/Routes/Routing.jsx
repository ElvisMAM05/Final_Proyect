import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from '../Pages/Welcome'
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
        </Routes>
    </Router>
  )
}
export default Routing