import React, { useState } from 'react';
import { useForm } from '@formspree/react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name.toLowerCase()]: value
        });
    };

    const [state, handleSubmit] = useForm("xoqgwwlw"); // Use your Formspree form ID here

    const handleFormSubmit = async (e) => {
        await handleSubmit(e);
        if (state.succeeded) {
            alert('Your form was submitted succesfully. I will get back to you as soon as possible.');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="overlay">
                <div className="container">
                    <h1>Let&apos;s Talk</h1>
                    <p>I will get back to you as soon as possible.</p>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="Message"
                            placeholder="Message"
                            autoComplete="off"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit" disabled={state.submitting} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
