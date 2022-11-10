import React from "react";
import '../CartWidget/CartWidget.css'
import {NavLink} from 'react-router-dom';

function CartWidget() {
    return (
        <NavLink className="CartWidget" to='/Cart'>
        <img className="carritoIcono" src="https://cdn-icons-png.flaticon.com/512/107/107831.png"></img>
        </NavLink>
    )
}

export default CartWidget;