import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function Testimonials() {
    return (
        <section class="testimonials">
            <h1>Testimonials</h1>
            <div class="container swiper">
                <div class="carousel swipper-wrapper">
                    <div class="testimonial swipper-slider">
                        <div class="head">
                            <div class="profile-area">
                                <div class="avatar">
                                    <img src="./images/feed-3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <h4>Name</h4>
                                    <small>Role (Company)</small>
                                </div>
                            </div>
                            <div class="stars">
                                <span class="material-icons-sharp">star_rate</span>
                                <span class="material-icons-sharp">star_rate</span>
                                <span class="material-icons-sharp">star_rate</span>
                                <span class="material-icons-sharp">star_rate</span>
                                <span class="material-icons-sharp">star_rate</span>
                            </div>
                        </div>
                        <p>XXX</p>
                    </div>
                    <div class="swipper-scrollbar">
                        <div class="swiper-scrollbar-drag"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
