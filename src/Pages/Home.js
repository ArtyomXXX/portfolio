import React, {Component} from 'react';
import Home_bg_video from '../Home-bg_video.mp4';

class Home extends Component {
    render () {
        return (
             <>
               <div className="page">
                      <main className="home">
                        <div className="holder">
                              <video autoPlay loop muted className="video">
                                  <source type="video/mp4" preload="auto" src={Home_bg_video}/>
                              </video>
                              <div className="home-content">
                                  <h1 className="home-title">My name is Ambartsumyan Artyom</h1>
                                  <h1 className="home-subtitle">I'm a Frontend Developer.</h1>
                            </div>
                        </div>
                      </main>
               </div>
             </>
        );
    }
}

export default Home;