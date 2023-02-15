import React, {Component} from 'react';
// import MyPhoto from '../Images/2023-02-15 01.21.26.jpg'

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
                                 I am a beginner Frontend developer with no commercial experience. 
                                 I am developing websites and web applications.
                                 <br />
                                 <br />
                                 <span style={{fontSize:"25px"}}>Qualities: </span>
                                 Purposeful and highly motivated, able to adapt to new conditions. 
                                 Thanks to my personal qualities, such as communication skills and reliability, 
                                 I can work well in a team. I am organized, responsible, attentive to details, 
                                 which, in my opinion, contributes to the successful management of duties.
                                 <br />
                                 <br />
                                 <span style={{fontSize:"25px"}}>Education: </span>
                                 Bachelor
                                 <br />
                                 RAU - Russian-Armenian University
                                 <br />
                                 Faculty: Applied Mathematics and Informatics
                                 <br />
                                 <br />
                                 <span style={{fontSize:"25px"}}>Hobby: </span> Music, Books, Sports.
                            </div>
                        </div>
                   </div>
              </section>
            </>
        );
    }
}

export default About;