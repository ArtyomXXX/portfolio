import React from 'react';
import styles from './Skills.module.scss';
import {SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiGithub, SiBootstrap, SiCplusplus} from 'react-icons/si';
import {FaSass, FaGitAlt} from 'react-icons/fa';

function Skills() {
        return (
            <section className="section section-skills" id="skills">
                <div className="container">
                    <div className="section__header">
                        <h1 className="section__title">Technology Skills</h1>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles["skills__item"]}>
                            <SiHtml5 /><span>HTML</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiCss3 /><span>CSS</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <FaSass /><span>SASS</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiJavascript /><span>JavaScript</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiTypescript /><span>TypeScript</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiReact /><span>React</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiBootstrap /><span>Bootstrap</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiCplusplus /><span>C++</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <FaGitAlt /><span>Git</span>
                        </div>

                        <div className={styles["skills__item"]}>
                            <SiGithub /><span>GitHub</span>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Skills;