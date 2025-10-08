import React from 'react';
import { ArrowDown } from 'lucide-react';

import ExperienceSection from './components/Experience';
import AboutImages from './components/Aboutimages';
import MeetTeam from './components/MeetTeam';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <section className="about">
  <div className="top-left-label">
    <div className="solid-shape">
      <span className="label-text">
        Get to <span style={{ color: 'orange' }}>know</span> us
      </span>
    </div>
  </div>


        <div className="about-us-content">
          <h1>
            "Your <span style={{ color: 'orange' }}>Trusted</span> Partner in{" "}
            <span style={{ color: 'orange' }}>Quality</span> Construction"
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            "At BuildLink we are passionate about transforming spaces and
            delivering quality craftsmanship. With a commitment to excellence and
            customer satisfaction, our journey began with a vision to provide
            reliable handyman services. Let us help you build your dreams!"
          </p>

          {/* Arrow on bottom right */}
          <div className="arrow-bottom-right">
             <div className="neon-circle"></div>
            <ArrowDown  className="arrow-icon" size={32} strokeWidth={2.5} color="#feb300" />
          </div>
        </div>
      </section>

      <AboutImages />

      <ExperienceSection  showButton={false} />

     
      <MeetTeam />
    </div>
  );
};

export default AboutUs;
