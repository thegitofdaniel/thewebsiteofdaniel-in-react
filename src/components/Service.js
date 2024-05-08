import React from 'react';

function Service({ title, icon, text }) {
    return (
        <div className="service">
            <span className="material-icons-sharp">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Service;
