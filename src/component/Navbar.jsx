import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
            <img src="/assets/logo.png" alt="" height="65" width="400"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NavLink className="btn btn-outline-none" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="btn btn-outline-none" to="/products">Products</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="btn btn-outline-none" to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="btn btn-outline-none" to="/contact">Contact</NavLink>
                    </li>
                    </ul>
                    <div className="buttons">
                        <NavLink to="/signin" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i>Login</NavLink>
                        <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i>Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})</NavLink>
                    </div>
            </div>
        </div>
        </nav>
        </div>
        </>
    );
}

export default Navbar;