import React from 'react';
import style from './Header.module.css';
import { FaInstagram, FaWhatsappSquare, FaFacebookSquare } from "react-icons/fa";
import Logo from "../../img/Logo.png";
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <div className={style.navbar}>
            <div className="logo">
                <img src={Logo} alt="Logo Eco Training" />
            </div>
            <ul className={style.links}>
                <li><Nav.Link href='#about'>Sobre</Nav.Link></li>
                <li><Nav.Link href="#contact">Contate-nos</Nav.Link></li>
            </ul>
            <ul className={style.social_icons}>
                <li><a href="https://www.facebook.com/simuladordeescada" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=554535227220&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a></li>
                <li><a href="https://www.instagram.com/simulador_de_escada" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
        </div>
    );
}

export default Header;

