import React from 'react';
import ProfileArea from './../ProfileArea';
import Socials from './../Socials';
import Info from './../Info';

function Landing() {
    return (
        <section className="landing">
            <div className="container">
                <Socials />
                <Info />
                <ProfileArea />
            </div>
        </section>
    );
}

export default Landing;
