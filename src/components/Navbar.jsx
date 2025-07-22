import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <nav className="navbar">

            <NavLink to="/" className="logo-link">
                <img src="/emily.svg" alt="Website Logo" className="logo" />
            </NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/recipes" className="nav-link">Recipes</NavLink>
            <NavLink to="/stories" className="nav-link">Stories</NavLink>

        </nav>
        
    )
}

export default Navbar
