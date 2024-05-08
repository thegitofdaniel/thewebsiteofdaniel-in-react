import React from 'react';
import Service from './../Service';

const dataScienceText = `I development professional Machine Learning and Econometric models using the latest frameworks and technologies, and I am committed to generating a value-adding solution. The data and context should determine the complexity of the solution adopted.`;

const mlopsText = `I introduce Data &amp; AI teams to best practices of MLOPS, Software Engineering, and Agile. I help them work better together to deliver excellent data products faster through proven Ways of Working. I help teams master GitHub, Azure, and Databricks.`;

const financeText = `I coach selected companies and individuals on how to identify their financial goals, set a winning strategy to achieve them, and execute it with rigour and determination. I coach on financial well-being, fiscal and retirement planning, and investing. My approach is based on Quantitative Methods and Behavioral Economics.`;

function Services() {
    return (
        <section className="services" id="services">
            <h1>Services</h1>
            <div className="container">
                <Service title="Data Science" icon="model_training" text={dataScienceText} />
                <Service title="MLOPS" icon="diversity_3" text={mlopsText} />
                <Service title="Finance" icon="payments" text={financeText} />
            </div>
        </section>
    );
}

export default Services;
