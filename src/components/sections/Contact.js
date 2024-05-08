import React from 'react';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="overlay">
                <div className="container">
                    <h1>Let's Talk</h1>
                    <p>I will get back to you as soon as possible.</p>
                    <form action="https://formspree.io/f/xoqgwwlw" method="POST">
                        <input type="text" name="Name" placeholder="Name" required="" />
                        <input type="email" name="Email" placeholder="Email" required="" />
                        <textarea name="Message" placeholder="Message" required=""></textarea>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
