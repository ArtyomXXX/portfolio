import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <>
              <section className="section section-about">
                   <div className="container">
                   <div className="section-header">
                        <h1 className="section-title">About Me</h1>
                    </div>
                        <div className="about">
                            <div className="about-item about__box">
                                 <img className="about__box-img" alt="man" />
                            </div>
                            <div className="about-item about-content">
                                 Я начинающий Frontend разработчик без коммерческого опыта работы.
                                 Занимаюсь разработкой веб-сайтов и веб-приложений.
                                 <br />
                                 <br />
                                 <span style={{fontSize:"25px"}}>Качества: </span>
                                 Целеустремлённый и высокомотивированный, способный адаптироваться 
                                 к новым условиям. Благодаря моим личным качествам, таким как коммуникабельность и 
                                 надёжность, я могу хорошо работать в команде. Я организован, ответственен, 
                                 внимателен к деталям, что, на мой взгляд, способствует успешному управлению обязанностями.
                                 <br />
                                 <br />
                                 <span style={{fontSize:"25px"}}>Образование: </span>
                                 Бакалавр
                                 <br />
                                 РАУ - Российско-Армянский Университет
                                 <br />
                                 Факультет: Прикладной математики и информатики
                                 <br />
                                 <br />
                                 <span style={{fontSize:"25px"}}>Хобби: </span> Музыка, Книги, Спорт.
                            </div>
                        </div>
                   </div>
              </section>
            </>
        );
    }
}

export default About;