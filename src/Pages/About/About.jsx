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
                    <div className={styles["about__img"]}>
                            <img src={Photo} alt="" />
                    </div>
                    <div className={styles["about__content"]}>
                            <h1>Амбарцумян Артём</h1>
                            <h2>Junior Frontend-разработчик</h2>
                            <br />
                            <p><span>Образование:</span> Бакалавр</p>
                            <p>РАУ - Российско-Армянский Университет</p>
                            <p>Факультет: Прикладная математика и информатика</p>
                            {/* <br />
                            <p><span>Хобби:</span> музыка, книги, спорт.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;