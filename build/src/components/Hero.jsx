import React from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Get <span style={{ color: 'orange' }}>Quality</span> Service from <span style={{ color: 'orange' }}>Verified</span> Experts!</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>"Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting—contact us today for a free consultation!".</p>
       <button className="connect-btn">
        <span className="connect-text">connect</span>
  <span style={{ color: 'orange' }} className="arrow-box">
    <ArrowRight size={16} color="black" strokeWidth={2} className="arrow-icon" />
  </span>
</button>

      </div>
    </section>
  );
};

export default Hero;
