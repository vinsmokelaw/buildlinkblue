import React from 'react';
import './meet.css';
import teamGroup from '../assets/image.png';
import { ArrowUpRight } from 'lucide-react';

const Meet = () => {
  return (
    <section className="meet-team container">
      <div className="row align-items-center">
        {/* Left - Image */}
        <div className="col-md-5">
          <div className="team-image-wrapper">
            <img src={teamGroup} alt="Our Team" className="img-fluid team-image" />
          </div>
        </div>

        {/* Right - Text */}
        <div className="col-md-7">
          <div className="team-text">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-description">
              At Buildlink Zimbabwe, our dedicated team is committed to connecting you with the <span style={{color: 'orange'}}>best</span> professionals in the industry. With diverse backgrounds in construction, technology, and <span style={{color: 'orange'}}>customer service</span>, we work tirelessly to ensure a seamless experience for our users. Each member brings expertise and passion, making it our mission to foster <span style={{color:'orange'}}>trust</span> and <span style={{color:'orange'}}>reliability</span> in every connection. Together, we’re building a community that prioritizes quality and service.
            </p>

            {/* 👇 Button goes inside the text block */}
            <button className="btnOutline mt-3">
              <span className="btnOutline_text">Learn More</span>
              <span className="btnOutline_iconBox">
                <ArrowUpRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
