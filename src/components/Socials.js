import React from 'react';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/econometrics/',
        title: 'Visit my LinkedIn profile',
        iconClass: 'uil uil-linkedin'
    },
    {
        href: 'https://github.com/thegitofdaniel',
        title: 'Visit my GitHub profile',
        iconClass: 'uil uil-github'
    },
    {
        href: 'https://medium.com/@theblogofdaniel',
        title: 'Visit my Medium profile',
        iconClass: 'uil uil-medium-m'
    }
];

function Socials() {
    return (
        <div className="socials">
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} title={link.title}>
                    <i className={link.iconClass}></i>
                </a>
            ))}
        </div>
    );
}

export default Socials;
