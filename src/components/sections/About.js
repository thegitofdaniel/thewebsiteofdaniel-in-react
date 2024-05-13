import React, { useEffect, useState } from 'react';
import dalle_upward_arrow from './../../images/dalle-upward-arrow.png';

const paragraph1 = (
    <p>
        I have developed awesome projects to clients in Brazil, Canada, Germany, Mexico, The
        Netherlands, and Switzerland. By assessing the root cause of their challenges and choosing
        the best technology, I&apos;ve unlocked value and positive change. I&apos;ve made a tangible
        impact on both my clients&apos; success and the broader landscape of innovation. It&apos;s a
        journey fueled by passion and purpose, and I&apos;m excited to continue making strides in
        this ever-evolving field.
    </p>
);

const paragraph2 = (
    <p>
        Since 2020, I&apos;ve played a pivotal role in building greenfield Data Platforms to enable
        large-caps on AIML and maximize the value derived from data. My contributions include
        developing models for Energy and Gas consumption using Azure Machine Learning, utilizing
        state-of-the-art algorithms to input missing data, establishing MLOPS processes for model
        deployment, implementing robust data pipelines, and introducing agile methodologies to
        strengthen team collaboration.
    </p>
);

const paragraph3 = (
    <p>
        In addition to my core responsibilities, I&apos;ve also been actively involved in fostering
        a culture of continuous learning and innovation within the teams I&apos;ve worked with. This
        has included organizing knowledge-sharing sessions, conducting workshops on emerging
        technologies and best practices, and mentoring junior team members to help them grow their
        skills and expertise in data science and machine learning. Furthermore, I&apos;ve been
        instrumental in fostering strong cross-functional relationships between data science,
        engineering, and business stakeholders, ensuring alignment of objectives and effective
        communication channels throughout project life-cycles. By championing a collaborative and
        growth-oriented environment, I&apos;ve helped foster a sense of ownership and accountability
        among team members, resulting in greater efficiency and success in achieving our project
        goals.
    </p>
);

function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const toggleContent = () => {
            setIsExpanded((prev) => !prev);
        };

        const readMore = document.querySelector('.read-more');
        readMore.addEventListener('click', toggleContent);

        return () => {
            readMore.removeEventListener('click', toggleContent);
        };
    }, []);

    return (
        <section className="about" id="about">
            <h1>About</h1>
            <div className="container">
                <div className="flex-container">
                    <div className="flex-item">
                        <img src={dalle_upward_arrow} alt="Upward Arrow" />
                    </div>
                </div>
                <div className="flex-container">
                    <div className="flex-item">
                        <div className="info">
                            {paragraph1}
                            <div
                                className={`read-more-content ${isExpanded ? 'show-content' : ''}`}
                            >
                                {paragraph2}
                                {paragraph3}
                            </div>
                            <a className="read-more">{isExpanded ? 'Show Less' : 'Show More'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
