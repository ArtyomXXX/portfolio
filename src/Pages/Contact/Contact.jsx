import React from 'react';
import img from '../../Images/3dCharacter.png'
import styles from './Contact.module.scss';

function Contact() {
    return (
        <footer className="section" id="contact">
            <div className="container">
                <div className={styles["contact"]}>
                    <div className={styles["contact__inner"]}>
                        <div className={styles["contact__item"]}>
                            <ul>
                                <h2>Контакты для связи:</h2>
                                <ul>
                                    <li>Телефон:&nbsp;&nbsp;<a href="tel:+79284467650">+7(928)446-76-50</a></li>
                                    <li>Телеграмм:&nbsp;&nbsp;<a href="https://t.me/Anbu5656" target="_blank" rel="noreferrer">https://t.me/Anbu5656</a></li>
                                    <li>Email:&nbsp;&nbsp;<a href="mailto:ambartsumyanartyomxxx@gmail.com&&cc=ambartsumyanartyomxxx@gmail.com?" target="_blank" rel="noreferrer">ambartsumyanartyomxxx@gmail.com</a></li>
                                </ul>
                            </ul>
                            <ul>
                                <h2>Моё резюме:</h2>
                                <ul>
                                    <li><a href="https://sochi.hh.ru/resume/3fcd4e4aff0bac53fb0039ed1f6a384f6b5346" target="_blank" rel="noreferrer">Перейти на HeadHunter</a></li>
                                    <li><a href="/" target="_blank" rel="noreferrer">Посмотреть сохранённую копию</a></li>
                                </ul>
                            </ul>
                        </div>
                        <div className={styles["contact__item"]}>
                            <img src={img} alt=""/>
                        </div>
                    </div>
                    <p>Спасибо за уделённое время!</p>
                </div>
            </div>  
        </footer>
    );
}

export default Contact;