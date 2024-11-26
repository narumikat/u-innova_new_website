import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav
            id="navbarExample"
            className="navbar navbar-expand-lg fixed-top navbar-dark"
            aria-label="Main navigation"
        >
            <div className="container">
                <Link className="navbar-brand logo-image" to="/">
                    <img src={logo} alt="U-Innova Logo"/>
                </Link>

                <button
                    className="navbar-toggler p-0 border-0"
                    type="button"
                    id="navbarSideCollapse"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="navbar-collapse offcanvas-collapse"
                    id="navbarsExampleDefault"
                >
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                onClick={() => {
                                    const target = document.getElementById('home-top');
                                    target.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                onClick={() => {
                                    const target = document.getElementById('about');
                                    target.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                onClick={() => {
                                    const target = document.getElementById('portfolio');
                                    target.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                Portfolio
                            </a>
                        </li>
                    </ul>

                    <span className="nav-item social-icons">
            <span className="fa-stack">
              <a target="_blank" href="https://www.facebook.com/uinnova.studio">
                <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x"/>
              </a>
            </span>
            <span className="fa-stack">
              <a
                  target="_blank"
                  href="https://www.instagram.com/uinnova_studio"
              >
                <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x"/>
              </a>
            </span>
            <span className="fa-stack">
              <a target="_blank" href="https://wa.me/+818066557091">
                <FontAwesomeIcon icon={faWhatsapp} className="fa-stack-1x"/>
              </a>
            </span>
          </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
