import React from 'react';

// Custom hook for adding a shadow on scroll
const useScrollShadow = (selector, className) => {
    React.useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.toggle(className, window.scrollY > 0);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [selector, className]);
};

export default useScrollShadow;
