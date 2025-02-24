import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (

        <nav>

            <ul>

                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">Chi Siamo</NavLink></li>
                <li><NavLink to="/articles" activeClassName="active">Articoli</NavLink></li>

            </ul>

        </nav>

    );

}

export default Navbar;