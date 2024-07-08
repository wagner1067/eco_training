import React from 'react';
import style from './Header.module.css';
import { FaInstagram, FaWhatsappSquare, FaFacebookSquare } from "react-icons/fa";
import Logo from "../../img/Logo.png";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className="logo">
                <img src={Logo} alt="Logo Eco Training" />
            </div>
            <ul className={style.links}>
                <li><Nav.Link href="#about">Sobre</Nav.Link></li>
                <li><Nav.Link href="#contact">Contate-nos</Nav.Link></li>
            </ul>
            <ul className={style.social_icons}>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                <li><a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
        </div>
    );
}

export default Navbar;

