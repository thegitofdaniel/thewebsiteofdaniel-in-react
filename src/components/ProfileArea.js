import React from 'react';
import daniel_ruiz_portrait from './../images/daniel-ruiz-portrait-square-zoom.jpg';

function ProfileArea() {
    return (
        <div className="profile-area">
            <div className="outer-circle">
                <span className="material-symbols-outlined">design_services</span>
                <span className="material-symbols-outlined">payments</span>
                <span className="material-symbols-outlined">code</span>
                <span className="material-symbols-outlined">subscriptions</span>
            </div>

            <div className="inner-circle">
                <img src={daniel_ruiz_portrait} alt="Daniel Ruiz Portrait" />
            </div>
        </div>
    );
}

export default ProfileArea;
