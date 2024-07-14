import React, { useState } from "react";
import style from "./Form.module.css";
import { FaFacebookSquare, FaWhatsappSquare, FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_zefgh6b', 'template_74g5a6a', formData, 'jf4qeRLbYCXwzJX3T')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage('Mensagem enviada com sucesso!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                setStatusMessage('Falha no envio da mensagem. Por favor, tente novamente.');
            });
    };

    return (
        <div id="Form" className={style.contactContainer}>
            <div className={style.info}>
                <h1>Vamos conversar!</h1>
                <div className={style.hoursContainer}>
                    <p>Horário De Funcionamento</p>
                    <div className={style.hours}>
                        <p>Seg - Sex</p>
                        <p>9h às 18h</p>
                    </div>
                    <div className={style.hours}>
                        <p>Sáb - Dom</p>
                        <p>Fechado</p>
                    </div>
                </div>
                <p>(45)3522-7220</p>
                <p>stifabrica@gmail.com</p>
                <div className={style.socialIcons}>
                    <a className={style.icons} href="https://www.facebook.com/simuladordeescada" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare />
                    </a>
                    <a className={style.icons} href="https://api.whatsapp.com/send/?phone=554535227220&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <FaWhatsappSquare />
                    </a>
                    <a className={style.icons} href="https://www.instagram.com/simulador_de_escada" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required />
                    <textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Enviar</button>
                </form>
                {statusMessage && <p className={style.statusMessage}>{statusMessage}</p>}
            </div>
        </div>
    );
}

export default Form;
