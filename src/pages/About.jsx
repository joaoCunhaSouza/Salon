import React from 'react';
import Container from '../container';
import './About.css';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <div className="about-background">
        <Container>
          <div className="about-content">
            <h1 className="about-title"><strong className='Letra'>About Jaque's Beauty Salon</strong></h1>
            <p className="about-description">
              At Jaque's Beauty Salon, we are dedicated to bringing out your natural beauty with personalized beauty treatments. Our team of highly skilled professionals is committed to providing an exceptional experience that leaves you feeling refreshed, confident, and pampered.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To provide our clients with the highest level of beauty services using quality products and the latest techniques, creating a relaxing and rejuvenating atmosphere where beauty and wellness come together.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              To become the leading beauty salon in Florianópolis, known for our exceptional service, innovation, and commitment to customer satisfaction.
            </p>
            
            <h2>Our Values</h2>
            <ul>
              <li>Excellence: We strive for excellence in every service we offer.</li>
              <li>Customer Satisfaction: Your satisfaction is our priority.</li>
              <li>Innovation: We embrace the latest trends and technologies in beauty.</li>
              <li>Integrity: We operate with honesty and transparency.</li>
            </ul>

            <h2>Meet Our Experts</h2>
            <p>
              Our team consists of expert stylists, aestheticians, and beauty professionals who are passionate about their craft and dedicated to making you feel and look your best.
            </p>

            <Link to="/" className="back-link">Back to Home</Link>
          </div>
        </Container>
      </div>
    </>
  );
}
