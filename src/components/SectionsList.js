import React, { useState } from 'react';

function SectionsList({ displayStyle, navItems }) {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <ul style={{ display: displayStyle }}>
            {navItems.map((item) => (
                <li key={item.name} onClick={() => handleItemClick(item.name)}>
                    <a href={item.href} className={activeItem === item.name ? 'active' : ''}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

SectionsList.defaultProps = {
    navItems: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: "Let's Talk", href: '#contact' }
    ]
};

export default SectionsList;
