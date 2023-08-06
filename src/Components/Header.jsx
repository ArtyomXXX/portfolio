import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
    const [navBar, setNavBar] = useState(false);

   const changeBackground = () => {
    if (window.scrollY >= 10) {
        setNavBar(true);
    } else {
        setNavBar(false);
    }
   };

   window.addEventListener('scroll', changeBackground);

    return (
        <header className={navBar ? "header active" : "header"}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">A.Artyom</div>
                    <nav className="nav">
                        <Link className="nav__link" to="about" spy={true} offset={50} smooth={true} duration={100}><nobr>Обо мне</nobr></Link>
                        <Link className="nav__link" to="skills" spy={true} offset={50} smooth={true} duration={100}>Навыки</Link>
                        <Link className="nav__link" to="portfolio" spy={true} offset={50} smooth={true} duration={100}>Портфолио</Link>
                        <Link className="nav__link" to="contact" spy={true} offset={50} smooth={true} duration={100}>Контакты</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;