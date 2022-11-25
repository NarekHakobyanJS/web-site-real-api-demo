import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navigation.css"
function Navigation() {
  return (
    <nav className='nav'>
        <NavLink to="/">Films</NavLink>

        <NavLink to="/auth">Auth</NavLink>
    </nav>
  )
}

export default Navigation