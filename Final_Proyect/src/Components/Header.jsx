import '../Styles/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="header">
      <nav className="nav-bar">
        <h1 className="logo">Reciclonick</h1>
        <ul className="nav-links">
          <li><Link to="MainP">Servicios</Link></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#registro">Registro</a></li>
          <li><a href="#ubicaciones">Ubicaciones</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
