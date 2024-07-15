import React, { useState, useEffect } from "react";
import Esteira from "../../img/Esteira.png";
import Escada from "../../img/Escada.jpg";
import Jumpy from "../../img/Jumpy.png";
import style from './Section.module.css';

const images = [Esteira, Escada, Jumpy];

function Section() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.section}>
      <div className={style.imageContainer}>
        <img
          className={style.img}
          src={images[currentImageIndex]}
          alt="Rotating Images"
          style={{ opacity: fade ? 1 : 0 }}
        />
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
