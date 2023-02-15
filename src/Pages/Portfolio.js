import React, {Component} from 'react';
import MOGO from '../Images/MoGo-img.jpg';

class Portfolio extends Component {
    render() {
        return (
            <>
                <section className="section section-portfolio">
                   <div className="container">
                        <div className="section-header">
                                <h1 className="section-title">Last works</h1>
                        </div>
                        <div className="portfolio">
                                <div className="project">
                                    <div className="project-item project-filled ">
                                        <div className="project-header">
                                            <h1>MOGO</h1>
                                        </div>

                                        <div className="project-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis iaculis est, vitae tincidunt augue. Morbi gravida dolor est, placerat porta arcu porta ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean dictum laoreet elit, aliquet finibus sem luctus vel. Morbi dignissim ante quis leo interdum, eu bibendum lorem efficitur. Nunc pulvinar eros vitae purus maximus accumsan. Vestibulum quis lorem et arcu eleifend volutpat.</p>
                                        </div>
                                        
                                        <div className="project-footer">
                                            <a href="https://artyomxxx.github.io/MOGO/" className="project-btn" target="blank">See Live</a>
                                            <a href="https://github.com/ArtyomXXX/MOGO" className="source" target="blank">Source Code</a>
                                        </div>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-box project__box-MOGO"><img className="project__box-img" src={MOGO} alt="..."/></div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="project-item">
                                        <div className="project-header">
                                            <h1>Project Name</h1>
                                        </div>

                                        <div className="project-description">
                                            <p>There is nothing here yet</p>
                                        </div>
                                        
                                        <div className="project-footer">
                                            <a href="/" className="project-btn" target="blank">See Live</a>
                                            <a href="/" className="source" target="blank">Source Code</a>
                                        </div>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-box">600x300</div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="project-item">
                                        <div className="project-header">
                                            <h1>Project Name</h1>
                                        </div>

                                        <div className="project-description">
                                            <p>There is nothing here yet</p>
                                        </div>
                                        
                                        <div className="project-footer">
                                            <a href="/" className="project-btn" target="blank">See Live</a>
                                            <a href="/" className="source" target="blank">Source Code</a>
                                        </div>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-box">600x300</div>
                                    </div>
                                </div>
                            </div>   
                     </div>
                </section>
            </>
        );
    }
}

export default Portfolio;