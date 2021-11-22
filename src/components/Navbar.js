import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const htmlElement = document.querySelector("html");

        toggle ? 
        htmlElement.style.overflowY = "hidden"
        :
        htmlElement.style.overflowY = "scroll"
    })

    return(
        <nav className="navbar">
            <div className="navbar-logo" ><img src="/images/ArcDesign.png"/></div>
            <div className={toggle ? "navbar-toggle toggle-on" : "navbar-toggle"} onClick={() => setToggle(!toggle)}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>

            <div className={toggle ? "navbar-menu toggle-on" : "navbar-menu" } onClick={(e) => {if(e.target.id !== "nav-menu") setToggle(false)}}>
                <ul className="menu nav-font" id="nav-menu" >
                    <li className="menu-item" ><Link to="/">Home</Link></li>
                    <li className="menu-item" ><Link to="/portfolio">Portfolio</Link></li>
                    <li className="menu-item" ><Link to="/about">About</Link></li>
                    <li className="menu-item" ><Link to="/news">News</Link></li>
                    <li className="menu-item" ><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            
        </nav>
    )
};

export default Navbar;