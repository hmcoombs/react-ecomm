import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="nav2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Products/:id">Detail page</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/Checkout">Checkout</NavLink>
      </nav>
    </header>
  );
};
export default NavBar;
