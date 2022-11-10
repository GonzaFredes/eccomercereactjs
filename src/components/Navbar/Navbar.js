import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

export const NavBar = () => {
    return (
        <div className="container-navBar">
            <nav className="nav">
                <div className="brand">
                    <NavLink to='/'><img src={logo} className='Logo-img'></img></NavLink>
                </div>
                <ul className="navList">
                    <li> <NavLink className="navLink" to='/'>Home</NavLink> </li>
                    <li> <NavLink className="navLink" to='/categoria/remeras'>Remeras</NavLink> </li>
                    <li> <NavLink className="navLink" to='/categoria/calzado'>Calzado</NavLink> </li>
                    <li> <NavLink className="navLink" to='/todo'>Todos los productos</NavLink> </li>
                    <div>
                        <CartWidget />
                    </div>
                </ul>
            </nav>
        </div>
    )
};
