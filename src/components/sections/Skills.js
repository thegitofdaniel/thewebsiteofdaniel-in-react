import React from 'react';
import Skill from './../Skill';

const skillCategories = [
    {
        title: 'Data Science',
        icon: 'model_training',
        items: [
            ['Econometrics', 100],
            ['Time-Series Analysis', 100],
            ['Machine Learning', 100],
            ['Classification Models', 100],
            ['Regression Analysis', 100],
            ['Forecasting', 100],
            ['Bayesian Methods', 100],
            ['Support Vector Machines (SVM)', 100],
            ['Dimensionality Reduction', 100],
            ['Feature Engineering', 100],
            ['Model Validation and Evaluation', 100],
            ['Anomaly Detection', 100],
            ['Hyperparameter Tuning', 100],
            ['Deep Learning', 90],
            ['Natural Language Processing (NLP)', 90],
            ['Ensemble Methods', 90],
            ['Computer Vision', 80],
            ['Reinforcement Learning', 80],
            ['Explainable AI (XAI)', 80],
            ['Transfer Learning', 80]
        ]
    },
    {
        title: 'MLOPS',
        icon: 'diversity_3',
        items: [
            ['Continuous Integration and Continuous Deployment (CI/CD) for ML', 100],
            ['Model Versioning and Management', 100],
            ['Automated Model Testing and Validation', 100],
            ['Azure Machine Learning', 100],
            ['Databricks', 100],
            ['Model Monitoring', 100],
            ['Model Experimentation and Tracking (Mlflow)', 100],
            ['Deployment', 100],
            ['ML Infrastructure and Resource Management (IaaC)', 100],
            ['Agile and Scrum', 100]
        ]
    },
    {
        title: 'Finance',
        icon: 'payments',
        items: [
            ['ESG Integration in Investment Analysis', 100],
            ['Corporate Finance Fundamentals', 100],
            ['Valuation Techniques and Models', 100],
            ['Fixed Income Securities Analysis', 100],
            ['Credit Risk Assessment and Management', 100],
            ['Interest Rate Risk Management', 100],
            ['Bond Pricing and Yield Analysis', 100],
            ['Portfolio Management Strategies for Fixed Income', 100],
            ['Financial Markets and Instruments Research', 100],
            ['Capital Structure and Funding Strategies', 100],
            ['Regulatory Compliance and Reporting in Finance', 100]
        ]
    }
];

function Skills() {
    return (
        <section className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
                {skillCategories.map((category, index) => (
                    <Skill
                        key={index}
                        title={category.title}
                        icon={category.icon}
                        items={category.items}
                    />
                ))}
            </div>
        </section>
    );
}

export default Skills;
