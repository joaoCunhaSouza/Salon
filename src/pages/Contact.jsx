import React from 'react';
import Container from '../container';
import './Contact.css';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="contact-background">
      <Container>
        <div className="contact-content">
          <h1 className="contact-title"><strong>Contact Jaque's Beauty Salon</strong></h1>
          <p className="contact-description">
            We would love to hear from you! Whether you have a question, need more information, or want to book an appointment, feel free to reach out to us.
          </p>

          <h2>Get In Touch</h2>
          <p>
            You can contact us through the following methods:
          </p>

          <ul>
            <li><strong>Email:</strong> info@jaquesbeautysalon.com</li>
            <li><strong>Phone:</strong> +55 48 99999-9999</li>
            <li><strong>Address:</strong> Rua da Beleza, 123, Florianópolis, SC</li>
          </ul>

          <h2>Opening Hours</h2>
          <p>
            Monday to Friday: 9:00 AM - 7:00 PM <br />
            Saturday: 9:00 AM - 4:00 PM <br />
            Sunday: Closed
          </p>

          
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </Container>
    </div>
  );
}
