import React from 'react';
import MOGO from '../Images/MoGo.jpg';
import Conquest from '../Images/Conquest.jpeg';
import GithubSearch from '../Images/GithubSearch.jpeg';
import Comments from '../Images/Comments.jpeg';

function Portfolio() {
        return (
            <section className="section section-portfolio" id="portfolio">
                <div className="container">
                    <div className="section__header">
                        <h1 className="section__title">Портфолио</h1>
                    </div>
                    <div className="portfolio">
                            <div className="project">
                                <div className="project__content">
                                    <h2 className="project__title">MOGO</h2>
                                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript + JQuery</p>
                                    <p className="project__description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis iaculis est,
                                        vitae tincidunt augue. Morbi gravida dolor est, placerat porta arcu porta ut.
                                        Interdumet malesuada fames ac ante ipsum primis in faucibus. Aenean dictum laoreet elit,
                                        aliquet finibus sem luctus vel. Morbi dignissim ante quis leo interdum, eu bibendum lorem efficitur.
                                        Nunc pulvinar eros vitae purus maximus accumsan. Vestibulum quis lorem et arcu eleifend volutpat.
                                    </p>
                                    
                                    <div>
                                        <a href="https://artyomxxx.github.io/MOGO/" className="deploy-btn" target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/MOGO" className="source-btn" target="blank">Перейти в GitHub</a>
                                    </div>
                                </div>

                                <div className="project__content">
                                    <img className="project__img" src={MOGO} alt=""/>
                                </div>
                            </div>

                            <div className="project">
                                <div className="project__content">
                                    <h2 className="project__title">Лэндинг Conquest</h2>
                                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript + Gulp</p>
                                    <p className="project__description">
                                        Описание проекта: Проект реализован на чистом JavaScript и представляет собой
                                        Landing Page с простым дизайном. В проекте, помимо классической адаптивной верстки,
                                        реализован слайдер и ряд других интерактивных элементов.
                                    </p>
                                    <div>
                                        <a href="https://artyomxxx.github.io/Conquest/" className="deploy-btn" target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/Conquest" className="source-btn" target="blank">Перейти в GitHub</a>
                                    </div>
                                </div>

                                <div className="project__content">
                                    <img className="project__img" src={Conquest} alt="" />
                                </div>
                            </div>

                            <div className="project">
                                <div className="project__content">
                                    <h1 className="project__title">Страница <nobr>с комментариями</nobr></h1>
                                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript</p>
                                    <p className="project__description">
                                        Описание проекта: Проект представляет собой страницу блога с возможностью комментирования,
                                        реализовнную на чистом JavaScript. Поля формы содержат базовую валидацию вводимых значений.
                                        Также предусмотрено преобразование введённых пользователем данных с целью приведения
                                        к унифицированному виду для последующего хранения в базе данных. Более подробное описание
                                        проекта и всего содержащегося в нём функционала представлено в файле Readme в репозитории.
                                    </p>
                                    <div>
                                        <a href="https://artyomxxx.github.io/Comments/" className="deploy-btn" target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/Comments" className="source-btn" target="blank">Перейти в GitHub</a>
                                    </div>
                                </div>

                                <div className="project__content">
                                    <img className="project__img" src={Comments} alt="" />
                                </div>
                            </div>
                            
                            <div className="project">
                                <div className="project__content">
                                    <h1 className="project__title">Страница поиска репозиториев GitHub</h1>
                                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript</p>
                                    <p className="project__description">There is nothing here yet</p>
                                    
                                    <div>
                                        <a href="https://artyomxxx.github.io/Github-repos-search/" className="deploy-btn" target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/Github-repos-search" className="source-btn" target="blank">Перейти в GitHub</a>
                                    </div>
                                </div>

                                <div className="project__content">
                                    <img className="project__img" src={GithubSearch} alt="" />
                                </div>
                            </div>
                        </div>  
                    </div>
            </section>
        );
    }

export default Portfolio;