import React from 'react';
import './Experience.css';
import houseImg from '../assets/Group 4.png';
import { Settings, ArrowUpRight } from 'lucide-react';

const Experience = ({ showButton = true }) => {
  return (
    <section className="experience-section">
      <div className="experience-container">

        <div className="experience-left">
          <div className="grouped-image">
            <img src={houseImg} alt="Experience Visual" />
            <div className="experience-number">
              <span className="highlight">15+</span>
              <span className="years-text" style={{ fontSize: '16px' }}>Years of Experience</span>
            </div>
          </div>
        </div>

        <div className="experience-right">
          <section className="why-choose-us">
            <h4>
              <Settings size={20} style={{ marginRight: '10px' }} />
              Why Choose Us?
            </h4>
            <h2>
              Your <span>Trusted</span> Source for Skilled <span>Professionals!</span>
            </h2>
            <p>
              We aim to simplify the process of finding trustworthy professionals by
              providing a user-friendly marketplace that prioritizes quality and credibility.
            </p>

            <div className="features-list">
              {[
                'Verified Professionals',
                'User-Friendly Experience',
                'Transparent Reviews',
                'Geolocation Services',
              ].map((feature, idx) => (
                <div className="feature-item" key={idx}>
                  <Settings size={20} style={{ marginRight: '10px', color: '#FEB300' }} />
                  {feature}
                </div>
              ))}
            </div>

            {/* Only show the button if showButton is true */}
            {showButton && (
              <button className="learnm-btn">
  <span className="learnm-text">Learn More</span>
  <span className="learnm-arrow-box">
    <ArrowUpRight className="learnm-arrow-icon" />
  </span>
</button>

            )}
            
          </section>
        </div>

      </div>
    </section>
  );
};

export default Experience;
