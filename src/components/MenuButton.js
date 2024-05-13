import React, { useState, useEffect } from 'react';
import SectionsList from './SectionsList';

function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [displayStyle, setDisplayStyle] = useState(determineDisplayStyle(isOpen));

    function determineDisplayStyle(isOpen) {
        if (window.innerWidth <= 650) {
            return isOpen ? 'inline-block' : 'none';
        } else {
            return 'flex';
        }
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 650) {
                setIsOpen(false);
            }
            setDisplayStyle(determineDisplayStyle(isOpen));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    const id = isOpen ? 'close-btn' : 'menu-btn';
    const icon = isOpen ? 'close' : 'menu';

    return (
        <React.Fragment>
            <SectionsList displayStyle={displayStyle} />
            <button onClick={() => setIsOpen(!isOpen)} id={id}>
                <span className="material-symbols-sharp">{icon}</span>
            </button>
        </React.Fragment>
    );
}

export default MenuButton;
