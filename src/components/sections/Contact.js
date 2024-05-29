import React from 'react';
import ContactForm from './../ContactForm';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="overlay">
                <div className="container">
                    <h1>Let&apos;s Talk</h1>
                    <p>I will get back to you as soon as possible.</p>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
