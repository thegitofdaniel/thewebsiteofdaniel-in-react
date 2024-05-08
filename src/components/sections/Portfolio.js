import React from 'react';
import pypi_interesting from './../../images/pypi-interesting.png';
import retirement_in_italy from './../../images/retirement-in-italy.png';
import the_website_of_daniel from './../../images/thewebsiteofdaniel.png';

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                <div className="projects">
                    <div className="project">
                        <div className="thumbnail">
                            <img src={pypi_interesting} alt="PyPI Interesting" />
                        </div>
                        <h2>interesting</h2>
                        <p>
                            The interesting Python package is a specialized toolkit for dealing with
                            Brazilian fixed income titles. It provides functionalities to build,
                            analyze, visualize, and valuate various types of fixed income
                            instruments and portfolios made thereof.
                        </p>
                        <div className="action">
                            <a href="https://github.com/thegitofdaniel/interesting">
                                Github
                            </a>
                            <a href="https://pypi.org/project/interesting">
                                PyPi
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="thumbnail">
                            <img src={retirement_in_italy} alt="Retirement in Italy" />
                        </div>
                        <h2>Streamlit App with Fiscal Benefit Map</h2>
                        <p>
                            Streamlit is a very power data visualization tool, that expedites
                            building apps with minimal infrastructure requirements. In this project,
                            I use Streamlit to graphically identify which Italian municipalities
                            offer fiscal benefits for incoming retirees. This project leverages
                            knowledge of Technology, Data, Fiscal Optimization, and Italy.
                        </p>
                        <div className="action">
                            <a href="https://github.com/thegitofdaniel/retirement_in_italy">
                                Github
                            </a>
                            <a href="https://thegitofdaniel.github.io/retirement_in_italy">
                                Web Deployment
                            </a>
                            <a href="https://retirementinitaly.streamlit.app/">
                                Streamlit Deployment
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="thumbnail">
                            <img src={the_website_of_daniel} alt="The Website of Daniel" />
                        </div>
                        <h2>My Website</h2>
                        <p>
                            Yes, this website is available on my GitHub. It has been built from
                            open-sourced templates. You may copy it too, as long as you keep the
                            license.
                        </p>
                        <div className="action">
                            <a href="https://github.com/thegitofdaniel/thewebsiteofdaniel">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
