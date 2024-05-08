import React from 'react';
import PropTypes from 'prop-types';

function Service({ title, icon, text }) {
    return (
        <div className="service">
            <span className="material-icons-sharp">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

Service.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
};

export default Service;
