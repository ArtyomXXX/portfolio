import React from 'react';
import img from '../../Images/3dCharacter.png'
import styles from './Contact.module.scss';

function Contact() {
    return (
        <footer className="section" id="contact">
            <div className="container">
                <div className={styles["contact"]}>
                    <div className={styles["contact__inner"]}>
                        {/* Desktop версия ________________________________________*/}
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
                                    <li><a href="https://drive.google.com/file/d/1sAL44cZgE3wSlguGXtpxU-kbDHN9WtwD/view?usp=sharing" target="_blank" rel="noreferrer">Посмотреть сохранённую копию</a></li>
                                </ul>
                            </ul>
                        </div>
                        {/* Мобильная версия ________________________________________*/}
                        <div className={styles["contact__item--mobile"]}>
                            <div>
                                <h2>Контакты для связи:</h2>
                                <p><span>Телефон:&nbsp;&nbsp;</span><a href="tel:+79284467650">+7(928)446-76-50</a></p>
                                <p><span>Телеграмм:&nbsp;&nbsp;</span><a href="https://t.me/Anbu5656" target="_blank" rel="noreferrer">https://t.me/Anbu5656</a></p>
                                <p><span>Email:&nbsp;&nbsp;</span><a href="mailto:ambartsumyanartyomxxx@gmail.com&&cc=ambartsumyanartyomxxx@gmail.com?" target="_blank" rel="noreferrer">ambartsumyanartyomxxx@gmail.com</a></p>
                            </div>
                            <div>
                                <h2>Моё резюме:</h2>
                                <p><a href="https://sochi.hh.ru/resume/3fcd4e4aff0bac53fb0039ed1f6a384f6b5346" target="_blank" rel="noreferrer">Перейти на HeadHunter</a></p>
                                <p><a href="https://drive.google.com/file/d/1sAL44cZgE3wSlguGXtpxU-kbDHN9WtwD/view?usp=sharing" target="_blank" rel="noreferrer">Посмотреть сохранённую копию</a></p>
                            </div>
                        </div>
                        {/* Мобильная версия под ширину экрана 280px ________________________________________*/}
                        <div className={styles["contact__item--mobile-second"]}>
                            <div>
                                <h2>Контакты для связи:</h2>
                                <p><span>Тел:&nbsp;&nbsp;</span><a href="tel:+79284467650">+7(928)446-76-50</a></p>
                                <p><span>ТГ:&nbsp;&nbsp;</span><a href="https://t.me/Anbu5656" target="_blank" rel="noreferrer">https://t.me/Anbu5656</a></p>
                                <p>Gmail:&nbsp;&nbsp;<a href="mailto:ambartsumyanartyomxxx@gmail.com&&cc=ambartsumyanartyomxxx@gmail.com?" target="_blank" rel="noreferrer">ссылка</a></p>
                            </div>
                            <div>
                                <h2>Моё резюме:</h2>
                                <p><a href="https://sochi.hh.ru/resume/3fcd4e4aff0bac53fb0039ed1f6a384f6b5346" target="_blank" rel="noreferrer">Перейти на HeadHunter</a></p>
                                <p><a href="https://drive.google.com/file/d/1sAL44cZgE3wSlguGXtpxU-kbDHN9WtwD/view?usp=sharing" target="_blank" rel="noreferrer">Посмотреть сохранённую копию</a></p>
                            </div>
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