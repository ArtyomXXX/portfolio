import React from 'react';
import styles from './About.module.scss';
import Photo from './photo.jpg';

function About() {
    return (
        <section className="section section-about" id="about">
            <div className="container">
                <div className="section__header">
                    <h1 className="section__title">About Me</h1>
                </div>
                <div className={styles.about}>
                    <div className={styles["about__box"]}>
                            <img className={styles["about__box-img"]} src={Photo} alt="man" />
                    </div>
                    <div className={styles["about__content"]}>
                            Я начинающий Frontend-разработчик без коммерческого опыта работы.
                            <br />
                            <br />
                            <span style={{fontSize:"25px"}}>Qualities: </span>
                            <br />
                            <br />
                            <span style={{fontSize:"25px"}}>Образование:</span> бакалавр
                            <br />
                            РАУ - Российско-Армянский Университет
                            <br />
                            Факультет: Прикладная математика и информатика
                            <br />
                            <br />
                            <span style={{fontSize:"25px"}}>Хобби:</span> музыка, книги, спорт.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;