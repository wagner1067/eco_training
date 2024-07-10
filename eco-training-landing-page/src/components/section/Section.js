import React from "react";
import Esteira from "../../img/Esteira.png"; 
import style from './Section.module.css';

function Section() {
  return (
    <div className={style.section}>
      <div className={style.imageContainer}>
        <img className={style.img} src={Esteira} alt="Esteira" />
        <div className={style.textContainer}>
          <h1 className={style.title}>Bem-vindo a esta empresa.</h1>
          <p className={style.text}>
            Você encontrará a melhor linha de<br />
            equipamento profissional para que sua<br />
            academia precisa de forma rápida e fácil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
