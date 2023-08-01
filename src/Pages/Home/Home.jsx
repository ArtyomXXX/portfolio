import React from 'react';
import styles from './Home.module.scss';
import Home_bg_video from '../../Home-bg_video.mp4';
// import ScrollUp from '../../Components/ButtonScrollUp/ScrollUp';

function Home() {
    return (
        <main className={styles.home} id="home">
            <div className={styles.holder}>
                    <video autoPlay loop muted className={styles.video}>
                        <source type="video/mp4" preload="auto" src={Home_bg_video}/>
                    </video>
                    <div className={styles["home__content"]}>
                        <h1 className={styles["home__title"]}>My name is Ambartsumyan Artyom</h1>
                        <h1 className={styles["home__subtitle"]}>I'm a Frontend Developer.</h1>
                    </div>
                    {/* <ScrollUp /> */}
            </div>
        </main>
    );
}

export default Home;