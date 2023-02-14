import React from 'react';

class Header extends React.Component {
    
    render () {
        // const {navToggle,} = this.state;
        // const {name, text} = showData;

        return (
             <>
               <div className="page">
                <header className="header">
                    <div className="container">
                         <div className="header-inner">
                          <div className="header-brand"><a href='/'>A.Artyom</a></div>
                          <div className="nav-toggle">
                             <span className="nav-toggle__item"></span>
                          </div>
                                <ul className="nav">
                                    <div className="menu__burger-bg fs"></div>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">About me</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Skills</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Portfolio</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Contact</a>
                                    </li>
                                </ul>
                         </div>
                    </div>
                </header>
               </div>
             </>
        );
    }
}

export default Header;