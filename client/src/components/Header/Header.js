import React from 'react';
import './style.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <h1>Kasino</h1>
        <nav>
            <ul>
            <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/game" activeClassName="active">Game</NavLink>
            </li>
            </ul>
        </nav>
      </div>
    );
}

export default Header;