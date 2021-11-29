import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <h1>Kasino</h1>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/game">Game</Link>
            </li>
            </ul>
        </nav>
      </div>
    );
}

export default Header;