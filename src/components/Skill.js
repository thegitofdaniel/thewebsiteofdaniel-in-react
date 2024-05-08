import React, { useState } from 'react';
import ProgressList from './ProgressList';
import PropTypes from 'prop-types';

function Skill({ title, icon, items }) {
    const [showItems, setShowItems] = useState(false);

    const toggleItems = () => {
        setShowItems((prev) => !prev);
    };

    return (
        <div className="skill">
            <div className="head" onClick={toggleItems}>
                <div className="left">
                    <span className="material-icons-sharp">{icon}</span>
                    <h4>{title}</h4>
                </div>
                <div className="right">
                    <span className="material-icons-sharp">expand_more</span>
                </div>
            </div>
            <div className={`items ${showItems ? 'show-items' : ''}`}>
                <ProgressList items={items} />
            </div>
        </div>
    );
}

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Skill;
