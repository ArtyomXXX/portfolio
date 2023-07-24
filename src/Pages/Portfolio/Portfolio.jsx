import React from 'react';
import MOGO from '../../Images/MoGo.jpg';
import Conquest from '../../Images/Conquest.jpeg';
import GithubSearch from '../../Images/GithubSearch.jpeg';
import Comments from '../../Images/Comments.jpeg';
import styles from './Portfolio.module.scss';

function Portfolio() {
        return (
            <section className="section section-portfolio" id="portfolio">
                <div className="container">
                    <div className="section__header">
                        <h1 className="section__title">Last works</h1>
                    </div>
                    <div className={styles.portfolio}>
                            <div className={styles.project}>
                                <div className={styles["project__content"]}>
                                    <h2 className={styles["project__title"]}>MOGO</h2>
                                    <p className={styles["project__stack"]}>Стек технологий: HTML5 + SCSS + JavaScript + JQuery</p>
                                    <p className={styles["project__description"]}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis iaculis est,
                                        vitae tincidunt augue. Morbi gravida dolor est, placerat porta arcu porta ut.
                                        Interdumet malesuada fames ac ante ipsum primis in faucibus. Aenean dictum laoreet elit,
                                        aliquet finibus sem luctus vel. Morbi dignissim ante quis leo interdum, eu bibendum lorem efficitur.
                                        Nunc pulvinar eros vitae purus maximus accumsan. Vestibulum quis lorem et arcu eleifend volutpat.
                                    </p>
                                    
                                    <div>
                                        <a href="https://artyomxxx.github.io/MOGO/" className={styles["deploy-btn"]} target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/MOGO" className={styles["source-btn"]} target="blank">Перейти в репозиторий GitHub</a>
                                    </div>
                                </div>

                                <div className={styles["project__content"]}>
                                    <img className={styles["project__img"]} src={MOGO} alt=""/>
                                </div>
                            </div>

                            <div className={styles["project"]}>
                                <div className={styles["project__content"]}>
                                    <h2 className={styles["project__title"]}>Лэндинг Conquest</h2>
                                    <p className={styles["project__stack"]}>Стек технологий: HTML5 + SCSS + JavaScript + Gulp</p>
                                    <p className={styles["project__description"]}>
                                        Описание проекта: Проект реализован на чистом JavaScript и представляет собой
                                        Landing Page с простым дизайном. В проекте, помимо классической адаптивной верстки,
                                        реализован слайдер и ряд других интерактивных элементов.
                                    </p>
                                    <div>
                                        <a href="https://artyomxxx.github.io/Conquest/" className={styles["deploy-btn"]} target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/Conquest" className={styles["source-btn"]} target="blank">Перейти в репозиторий GitHub</a>
                                    </div>
                                </div>

                                <div className={styles["project__content"]}>
                                    <img className={styles["project__img"]} src={Conquest} alt="" />
                                </div>
                            </div>

                            <div className={styles["project"]}>
                                <div className={styles["project__content"]}>
                                    <h1 className={styles["project__title"]}>Страница с комментариями</h1>
                                    <p className={styles["project__stack"]}>Стек технологий: HTML5 + SCSS + JavaScript</p>
                                    <p className={styles["project__description"]}>
                                        Описание проекта: Проект представляет собой страницу блога с возможностью комментирования,
                                        реализовнную на чистом JavaScript. Поля формы содержат базовую валидацию вводимых значений.
                                        Также предусмотрено преобразование введённых пользователем данных с целью приведения
                                        к унифицированному виду для последующего хранения в базе данных. Более подробное описание
                                        проекта и всего содержащегося в нём функционала представлено в файле Readme в репозитории.
                                    </p>
                                    <div>
                                        <a href="https://artyomxxx.github.io/Comments/" className={styles["deploy-btn"]} target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/Comments" className={styles["source-btn"]} target="blank">Перейти в репозиторий GitHub</a>
                                    </div>
                                </div>

                                <div className={styles["project__content"]}>
                                    <img className={styles["project__img"]} src={Comments} alt="" />
                                </div>
                            </div>
                            <div className={styles["project"]}>
                                <div className={styles["project__content"]}>
                                    <h1 className={styles["project__title"]}>Страница поиска репозиториев GitHub</h1>
                                    <p className={styles["project__stack"]}>Стек технологий: HTML5 + SCSS + JavaScript</p>
                                    <p className={styles["project__description"]}>There is nothing here yet</p>
                                    
                                    <div>
                                        <a href="https://artyomxxx.github.io/Github-repos-search/" className={styles["deploy-btn"]} target="blank">Посмотреть</a>
                                        <a href="https://github.com/ArtyomXXX/Github-repos-search" className={styles["source-btn"]} target="blank">Перейти в репозиторий GitHub</a>
                                    </div>
                                </div>

                                <div className={styles["project__content"]}>
                                    <img className={styles["project__img"]} src={GithubSearch} alt="" />
                                </div>
                            </div>
                        </div>  
                    </div>
            </section>
        );
    }

export default Portfolio;