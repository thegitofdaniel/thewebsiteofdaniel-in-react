import React from 'react';
import daniel_ruiz_portrait from './../../images/daniel-ruiz-portrait-square-zoom.jpg';
import Socials from './../Socials';
import downloadCV from './../../functions/downloadCV';

function Landing() {
    return (
        <section class="landing">
            <div class="container">
                <Socials />
                <div class="info">
                    <h1>Senior Consultant in Data &amp; AI</h1>
                    <h3>Hi, I'm Daniel Ruiz</h3>
                    <p>
                        As a Machine Learning Engineer, my passion lies in harnessing technology to
                        create tangible value and solve real-world challenges. I have led companies
                        in their digital transformation, end-to-end from project inception to
                        execution and hand-off. Join me in exploring the curious fields of AIML and
                        MLOPS, where complex problems meet cutting-edge solutions.
                    </p>
                    <a class="btn btn-primary" href="#contact">
                        Let's Talk
                    </a>
                    <a class="btn btn-primary" onClick={downloadCV}>
                        <i class="uil uil-download-alt"></i>
                        Download CV
                    </a>
                </div>

                <div class="profile-area">
                    <div class="outer-circle">
                        <span class="material-symbols-outlined">design_services</span>
                        <span class="material-symbols-outlined">payments</span>
                        <span class="material-symbols-outlined">code</span>
                        <span class="material-symbols-outlined">subscriptions</span>
                    </div>

                    <div class="inner-circle">
                        <img src={daniel_ruiz_portrait} alt="Daniel Ruiz Portrait" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
