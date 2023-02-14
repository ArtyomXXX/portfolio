import React, {Component} from 'react';

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
                                    <div className="project-item">
                                        <div className="project-header">
                                            <h1>Project Name</h1>
                                        </div>

                                        <div className="project-description">
                                            <p>There is nothing here yet</p>
                                        </div>
                                        
                                        <div className="project-footer">
                                            <a className="project-btn" href='/'>See Live</a>
                                            <a className="project-btn" href='/'>Source Code</a>
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
                                            <a className="project-btn" href='/'>See Live</a>
                                            <a className="project-btn" href='/'>Source Code</a>
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
                                            <a className="project-btn" href='/'>See Live</a>
                                            <a className="project-btn" href='/'>Source Code</a>
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