import React from 'react';
import Torno from '../../img/Torno.jpg';
import style from './Factory.module.css';

function Factory() {
    return (
        <div className={style.section}>
            <div className={style.imageContainer}>
                <img className={style.img} src={Torno} alt='Torno' />
                <div className={style.textContainer}>
                    <h1 className={style.title}>Fabricação de peças técnicas.</h1>
                    <h1 className={style.text}>Sob demanda específica!</h1>
                </div>
            </div>
        </div>
    );
}

export default Factory;
