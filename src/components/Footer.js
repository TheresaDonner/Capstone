import React from 'react'
import logo from "../images/logo.svg"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="main-footer">

            <div className="container">
                <Link to="/">
                    <img src={logo} alt="Beach Resort" />
                </Link>
                <ul className="list">
                    <li>123 Anystreet</li>
                    <li>Anytown, Anystate 12345</li>
                    <li>Phone:555-555-5555 | Toll Free: 1-800-555-5555</li>
                    <li>RESERVATIONS@BEACHRESORT.COM</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;