import React from 'react';

const projects = [
    {
        thumbnail: require('./../../images/pypi-interesting.png'),
        altText: 'PyPI Interesting',
        title: 'interesting',
        description: `The interesting Python package is a specialized toolkit for dealing with
            Brazilian fixed income titles. It provides functionalities to build,
            analyze, visualize, and valuate various types of fixed income
            instruments and portfolios made thereof.`,
        actions: [
            { href: 'https://github.com/thegitofdaniel/interesting', text: 'Github' },
            { href: 'https://pypi.org/project/interesting', text: 'PyPi' }
        ]
    },
    {
        thumbnail: require('./../../images/retirement-in-italy.png'),
        altText: 'Retirement in Italy',
        title: 'Streamlit App with Fiscal Benefit Map',
        description: `Streamlit is a very power data visualization tool, that expedites
            building apps with minimal infrastructure requirements. In this project,
            I use Streamlit to graphically identify which Italian municipalities
            offer fiscal benefits for incoming retirees. This project leverages
            knowledge of Technology, Data, Fiscal Optimization, and Italy.`,
        actions: [
            { href: 'https://github.com/thegitofdaniel/retirement_in_italy', text: 'Github' },
            { href: 'https://thegitofdaniel.github.io/retirement_in_italy', text: 'Web Deployment' },
            { href: 'https://retirementinitaly.streamlit.app/', text: 'Streamlit Deployment' }
        ]
    },
    {
        thumbnail: require('./../../images/thewebsiteofdaniel.png'),
        altText: 'The Website of Daniel',
        title: 'My Website',
        description: `Yes, this website is available on my GitHub. It has been built from
            open-sourced templates. You may copy it too, as long as you keep the
            license.`,
        actions: [
            { href: 'https://github.com/thegitofdaniel/thewebsiteofdaniel', text: 'Github' }
        ]
    }
];

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                <div className="projects">
                    {projects.map((project, index) => (
                        <div className="project" key={index}>
                            <div className="thumbnail">
                                <img src={project.thumbnail} alt={project.altText} />
                            </div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="action">
                                {project.actions.map((action, idx) => (
                                    <a key={idx} href={action.href}>
                                        {action.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
