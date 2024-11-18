import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="form">
      <h2>Get In Touch!</h2>
      <p>Let's Collaborate and Create Something Amazing Together</p>
      <form action="https://formspree.io/f/mrbzzzrg" method="POST">
        <input type="text" name="name" placeholder="Your Name" className="input-field" />
        <input type="text" name="email" placeholder="Your Email" className="input-field" />
        <textarea name="message" placeholder="Your Message" className="input-field" />
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
