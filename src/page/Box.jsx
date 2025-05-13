import React, { useEffect, useRef, useState } from "react";
import '../style/Box.css';
import { Link } from "react-router-dom";

const Box = () => {
    const sideNavbar = useRef(null);
    const toggleSide = () => {
        if (sideNavbar.current) {
            sideNavbar.current.classList.toggle("active_side");
        }
    };

    return (
        <>
            <div className="ham_button" onClick={toggleSide}>
                <h1>☰</h1>
            </div>

            <div className="side_navbar" ref={sideNavbar}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div ref={sideNavbar} className="side_navbar">
                <div className="side_nav">
                    <h1>Muhammadqodir {'{ 007 }'}</h1>
                    <i className="fa-solid fa-xmark" onClick={toggleSide}></i>
                </div>
                <div className="side_chiziq"></div>
                <ul>
                    <li><a href="#projects" onClick={() => scrollToSection('projects')}>Loyihalarim</a></li>
                    <li><a href="#stack-title">Men nima bilan ishlayman</a></li>
                    <li><a href="#footer">Aloqa</a></li>
                    <li><Link to={'/contact'}>Bog'lanish</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Box;
