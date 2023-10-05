import React from 'react';
import MOGO from '../Images/MoGo.jpg';
import Conquest from '../Images/Conquest.jpeg';
import GithubSearch from '../Images/GithubSearch.jpeg';
import Comments from '../Images/Comments.jpeg';
import Burgers from '../Images/Burgers.jpeg';

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
                    <h1 className="project__title">Burgers</h1>
                    <p className="project__stack">Стек: HTML5 + SCSS + TypeScript + angular</p>
                    {/* <p className="project__description">Описание проекта:</p> */}
                    <div className='t'>
                        <a href="https://artyomxxx.github.io/burgers/" className="deploy-btn" target="blank">Посмотреть</a>
                        <a href="https://github.com/ArtyomXXX/burgers" className="source-btn" target="blank">Перейти в GitHub</a>
                    </div>
                </div>
                <div className="project__content">
                    <img className="project__img" src={Burgers} alt="" />
                </div>
            </div>

            <div className="project">
                <div className="project__content">
                    <h2 className="project__title">MOGO</h2>
                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript + Gulp</p>
                    {/* <p className="project__description">
                        Описание проекта:
                    </p> */}
                    <div>
                        <a href="https://artyomxxx.github.io/MOGO/" className="deploy-btn" target="blank">Посмотреть</a>
                        <a href="https://github.com/ArtyomXXX/MOGO" className="source-btn" target="blank">Перейти в GitHub</a>
                    </div>
                </div>
                <div className="project__content">
                    <img className="project__img" src={MOGO} alt="" />
                </div>
            </div>

            <div className="project">
                <div className="project__content">
                    <h2 className="project__title">Conquest</h2>
                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript + Gulp</p>
                    <p className="project__description">
                        Описание проекта: Проект реализован на чистом JavaScript и представляет собой
                        Landing Page с простым дизайном.
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
                    <h1 className="project__title">Страница <nobr>с комментариями</nobr>
                    </h1>
                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript + prepros.config</p>
                    <p className="project__description">
                        Описание проекта: Проект представляет собой страницу блога с возможностью комментирования,
                        реализованную на чистом JavaScript.
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
                    <p className="project__stack">Стек: HTML5 + SCSS + JavaScript + prepros.config</p>
                    {/* <p className="project__description">
                        Описание проекта:
                    </p> */}
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