import React from 'react';
import Container from '../container';
import './Contact.css';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="contact-background">
      <Container>
        <div className="contact-content">
          <h1 className="contact-title"><strong className='Letras'> Contact Jaque's Beauty Salon</strong></h1>
          <p className="contact-description">
            We would love to hear from you! Whether you have a question, need more information, or want to book an appointment, feel free to reach out to us.
          </p>

          <h2>Get In Touch</h2>
          <p>
            You can contact us through the following methods:
          </p>

          <ul>
            <li><strong>Email:</strong> jaquesbeautysalon@gmail.com</li>
            <li><strong>Phone:</strong> +55 48 99999-9999</li>
            <li><strong>Address:</strong> Rua da Beleza, 123, Florianópolis, SC</li>
          </ul>

          <h2>Opening Hours</h2>
          <p>
            Monday to Friday: 9:00 AM - 7:00 PM <br />
            Saturday: 9:00 AM - 4:00 PM <br />
            Sunday: Closed
          </p>

          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>

            <button type="submit" className="contact-submit">Send Message</button>
          </form>

          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </Container>
    </div>
  );
}
