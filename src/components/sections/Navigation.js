import React from 'react';
import useScrollShadow from './../../functions/useScrollShadow';
import MenuButton from './../MenuButton';

function Navigation() {
    useScrollShadow('nav', 'show-box-shadow');

    return (
        <nav>
            <div className="container">
                <a href="#">
                    <h3>Daniel Ruiz</h3>
                </a>
                <MenuButton />
            </div>
        </nav>
    );
}

export default Navigation;
