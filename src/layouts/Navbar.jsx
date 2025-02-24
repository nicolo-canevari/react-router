import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (

        <nav>

            <ul>

                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Chi Siamo</NavLink></li>
                <li><NavLink to="/articles" className={({ isActive }) => (isActive ? 'active' : '')}>Articoli</NavLink></li>

            </ul>

        </nav>

    );

}

export default Navbar;