import React from "react";
import Logo from "../../img/Logo.png";
import style from "./About.module.css";

function About() {
    return (
        <div className={style.container}>
            <img className={style.logo} src={Logo} alt="Logo" />
            <div className={style.content}>
                <h1 className={style.title}>Sobre</h1>
                <p className={style.text}>
                    Há mais de 12 anos no mercado, amamos o que fazemos e isso <br />
                    fica evidente. Temos hoje a mesma paixão que tínhamos<br />
                    quando começamos, se não for ainda maior.
                </p>
                <button className={style.button}>Contate-nos</button>
            </div>
        </div>
    );
}

export default About;
