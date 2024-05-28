import React from 'react';
import downloadCV from './../functions/downloadCV';

function Info() {
    return (
        <div className="info">
            <h1>Senior Consultant in Data &amp; AI</h1>
            <h3>Hi, I&apos;m Daniel Ruiz</h3>
            <p>
                As a Machine Learning Engineer, my passion lies in harnessing technology to
                create tangible value and solve real-world challenges. I have led companies
                in their digital transformation, end-to-end from project inception to
                execution and hand-off. Join me in exploring the curious fields of AIML and
                MLOPS, where complex problems meet cutting-edge solutions.
            </p>
            <a className="btn btn-primary" href="#contact">
                Let&apos;s Talk
            </a>
            <a className="btn btn-primary" onClick={downloadCV}>
                <i className="uil uil-download-alt"></i>
                Download CV
            </a>
        </div>
    );
}

export default Info;