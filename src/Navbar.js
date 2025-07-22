// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Or Link for basic links

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink> {/* `end` ensures only exact match for '/' */}
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;