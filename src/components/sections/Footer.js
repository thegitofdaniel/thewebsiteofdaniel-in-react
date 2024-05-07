import React from 'react';
import SectionsList from './../SectionsList';
import Socials from './../Socials';

function Footer() {
    return (
        <footer>
            <div class="container">
                <a href="#">
                    <h3>Daniel Ruiz</h3>
                </a>
                <SectionsList />
                <Socials />
            </div>
            <div class="copyright">Copyright &copy; Daniel Ruiz</div>
        </footer>
    );
}

export default Footer;
