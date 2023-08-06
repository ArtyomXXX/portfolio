import React from 'react';
import Photo from '../Images/photo.jpg';
import { Link } from 'react-scroll';

function About() {
    return (
        <section className="section section-about" id="about">
            <div className="container">
                <div className="section__header">
                    <h1 className="section__title">Обо мне</h1>
                </div>
                <div className="about">
                    <div className="about__img">
                            <img src={Photo} alt="" />
                    </div>
                    <div className="about__content">
                            <h1>Амбарцумян Артём</h1>
                            <h2>Junior Frontend-разработчик</h2>
                            <br />
                            <p><span>Образование:</span> Бакалавр</p>
                            <p>РАУ - Российско-Армянский Университет</p>
                            <p>Факультет: Прикладная математика и информатика</p>
                            <br />
                            <div className="resume">
                                <Link className="resume__link" to="contact" smooth={true} duration={100}>&#8594; РЕЗЮМЕ &#8592;</Link>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;