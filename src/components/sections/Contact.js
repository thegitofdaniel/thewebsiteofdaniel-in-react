import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import ContactForm from './../ContactForm';

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
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
