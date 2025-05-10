import React, { useEffect, useRef, useState } from "react";
import '../style/Box.css';
import { Link } from "react-router-dom";

const Box = () => {
    const sideNavbar = useRef(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
    const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown ochiq yoki yopiqligini boshqarish

    const toggleSide = () => {
        if (sideNavbar.current) {
            sideNavbar.current.classList.toggle("active_side");
        }
    };

    const applyTheme = (selectedTheme) => {
        document.body.classList.remove("dark-mode", "light-mode");

        if (selectedTheme === "dark") {
            document.body.style.background = "black";
            document.body.style.color = "white";
        } else if (selectedTheme === "light") {
            document.body.style.background = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.background = "#0d1117";
            document.body.style.color = "white";
        }
    };

    useEffect(() => {
        applyTheme(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    return (
        <>
                    <div className="ham_button" onClick={toggleSide}>
                <h1>☰</h1>
            </div>

            {/* Sidebar menyu */}
            <div className="side_navbar" ref={sideNavbar}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* Theme Selector */}
            <div className="side_right">
                <div className="custom-select">
                    <button className="select-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <i className={`fa-solid ${theme === "dark" ? "fa-sun" : theme === "system" ? "fa-laptop" : "fa-moon"}`}></i>
                    </button>
                    {dropdownOpen && (
                        <div className="select-dropdown">
                            <div onClick={() => { setTheme("light"); setDropdownOpen(false); }}>
                                <i className="fa-solid fa-moon"></i> Light Mode
                            </div>
                            <div onClick={() => { setTheme("dark"); setDropdownOpen(false); }}>
                                <i className="fa-solid fa-sun"></i> Dark Mode
                            </div>
                            <div onClick={() => { setTheme("system"); setDropdownOpen(false); }}>
                                <i className="fa-solid fa-laptop"></i> System Mode
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div ref={sideNavbar} className="side_navbar">
                <ul>
                    <li><Link to="/"> Bosh sahifa</Link></li>
                    <li><a href="#projects">Loyihalarim</a></li>
                    <li><a href="#stack-title"> Men nima bilan ishlayman</a></li>
                    <li><Link to="/contact"> Bog'lanish</Link></li>
                </ul>

                <div className="side_mode">
                    <div className="custom-select">
                        <button className="select-btn">
                            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : theme === "system" ? "fa-laptop" : "fa-moon"}`}></i>
                        </button>
                        <div className="select-dropdown">
                            <div onClick={() => setTheme("light")}>
                                <i className="fa-solid fa-moon"></i> Light Mode
                            </div>
                            <div onClick={() => setTheme("dark")}>
                                <i className="fa-solid fa-sun"></i> Dark Mode
                            </div>
                            <div onClick={() => setTheme("system")}>
                                <i className="fa-solid fa-laptop"></i> System Mode
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Box;
