import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollShadow from './../../functions/useScrollShadow';
import MenuButton from './../MenuButton';

function Navigation() {
    useScrollShadow('nav', 'show-box-shadow');
    const location = useLocation();

    return (
        <nav>
            <div className="container">
                <Link to={location.pathname}>
                    <h3>Daniel Ruiz</h3>
                </Link>
                <MenuButton />
            </div>
        </nav>
    );
}

export default Navigation;
