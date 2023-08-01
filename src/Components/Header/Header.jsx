import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

function Header() {
    // const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={scrolled ? "active" : ""}>
            <header className={styles["header"]}>
                <div className="container">
                    <div className={styles["header__inner"]}>
                        <div className={styles["header__brand"]}><a href="/">A.Artyom</a></div>
                        <div className={styles["nav-toggle"]}>
                            <span className={styles["nav-toggle__item"]}></span>
                        </div>
                            <ul className={styles["nav"]}>
                                <li className={styles["nav__item"]}>
                                    <a className={styles["nav__link"]} href="#about">Обо мне</a>
                                </li>

                                <li className={styles["nav__item"]}>
                                    <a className={styles["nav__link"]} href="#skills">Навыки</a>
                                </li>

                                <li className={styles["nav__item"]}>
                                    <a className={styles["nav__link"]} href="#portfolio">Портфолио</a>
                                </li>

                                <li className={styles["nav__item"]}>
                                    <a className={styles["nav__link"]} href="#contact">Контакты</a>
                                </li>
                            </ul>
                            {/* <div className={styles["menu__burger-bg fs"]}></div> */}
                        </div>
                </div>
            </header>
        </div >
    );
}

export default Header;