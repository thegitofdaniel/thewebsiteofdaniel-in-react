import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function Testimonials() {
    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="container swiper">
                <div className="carousel swipper-wrapper">
                    <div className="testimonial swipper-slider">
                        <div className="head">
                            <div className="profile-area">
                                <div className="avatar">
                                    <img src="./images/feed-3.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <h4>Name</h4>
                                    <small>Role (Company)</small>
                                </div>
                            </div>
                            <div className="stars">
                                <span className="material-icons-sharp">star_rate</span>
                                <span className="material-icons-sharp">star_rate</span>
                                <span className="material-icons-sharp">star_rate</span>
                                <span className="material-icons-sharp">star_rate</span>
                                <span className="material-icons-sharp">star_rate</span>
                            </div>
                        </div>
                        <p>XXX</p>
                    </div>
                    <div className="swipper-scrollbar">
                        <div className="swiper-scrollbar-drag"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
