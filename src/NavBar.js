import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src="/logo.svg" alt="Little Lemon Logo" />
        </div>
        <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login/signUp">Login/Sign Up</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
  );
}
export default NavBar;