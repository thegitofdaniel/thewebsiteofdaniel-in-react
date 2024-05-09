import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: "Let's Talk", href: '#contact' }
];

function SectionsList({ displayStyle }) {
    const [activeItem, setActiveItem] = useState('Home');

    const makeActive = (item) => {
        setActiveItem(item);
    };

    return (
        <ul style={displayStyle ? { display: displayStyle } : {}}>
            {navItems.map((item) => (
                <li key={item.name} onClick={() => makeActive(item.name)}>
                    <Link to={item.href} className={activeItem === item.name ? 'active' : ''}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

SectionsList.propTypes = {
    displayStyle: PropTypes.string.isRequired
};

export default SectionsList;
