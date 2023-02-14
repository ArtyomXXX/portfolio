import React, {Component} from 'react';
// import {SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiBootstrap, SiCplusplus, SiJquery} from 'react-icons/si';
// import {FaSass, FaGitAlt} from 'react-icons/fa';

class Skills extends Component {
    render() {
        return (
            <>
              <section className="section section-skills">
                  <div className="container">
                        <div className="section-header">
                            <h1 className="section-title">Technology Skills</h1>
                        </div>

                        <div className="skills">
                            {/* <div className="skills-item">
                                <SiHtml5 /><span>HTML5</span>
                            </div>

                            <div className="skills-item">
                                <SiCss3 /><span>CSS3</span>
                            </div>

                            <div className="skills-item">
                                <FaSass /><span>SASS</span>
                            </div>

                            <div className="skills-item">
                                <SiReact /><span>React</span>
                            </div>

                            <div className="skills-item">
                                <SiJavascript /><span>JavaScript</span>
                            </div>

                            <div className="skills-item">
                                <SiBootstrap /><span>Bootstrap</span>
                            </div>

                            <div className="skills-item">
                                <SiJquery /><span>JQuery</span>
                            </div>

                            <div className="skills-item">
                                <SiCplusplus /><span>C++</span>
                            </div>

                            <div className="skills-item">
                                <SiGithub /><span>GitHub</span>
                            </div>
                            
                            <div className="skills-item">
                                <FaGitAlt /><span>Git</span>
                            </div> */}
                        </div>
                  </div>
              </section>
            </>
        );
    }
}

export default Skills;