import React from 'react';
import Navbar from './components/navbar';
import OurServices from './components/our-services';
import Job from './components/job';
import { ArrowUpRight } from 'lucide-react';
import './handyman.css';
import img from './assets/handyman.jpg';

const Handyman = () => {
  return (
    <div>
      <section className="handyman">
        <div className="handyman-content">
          <div className="floating-box">
            <h2>Handyman Services</h2>
          </div>

          <h1>
            "Your <span style={{ color: 'orange' }}>Solution</span> for every{" "}
            <span style={{ color: 'orange' }}>Fix!"</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            "At BuildLink, our handyman services are designed to tackle all your repair and maintenance needs. From quick fixes to complex projects, our experienced team is ready to help you with efficiency and expertise. Trust us to keep your space in top shape -- contact us today!"
          </p>
        </div>
      </section>

      <section className="handyman-section">
        <div className="handyman-services">
          <h4>Find your Handyman</h4>

          {/* Just show one OurServices component now */}
          <OurServices showHeading={false} showDescription={false} showButton={false} />
           <OurServices showHeading={false} showDescription={false} showButton={false} />
        </div>
      </section>

      <Job />
    </div>
  );
};

export default Handyman;
