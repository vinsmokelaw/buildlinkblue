import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/image1.png';
import './our-services.css';
import { ArrowUpRight } from 'lucide-react';

const OurServices = ({
  showHeading = true,
  showDescription = true,
  showButton = true,
}) => {
  return (
    <section className="our-services container">
      {showHeading && (
        <span className="section-title">Our Services</span>
      )}

      {showDescription && (
        <p>
          Buildlink Zimbabwe connects you with verified professionals for all your construction, plumbing, and electrical needs. Whether it’s a quick repair or a major project, our platform helps you find, compare, and hire the right experts for quality and reliability.
        </p>
      )}

      <div className="row">
        <div className="col-md-4">
          <img src={img1} alt="Construction service" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img2} alt="Plumbing service" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img3} alt="Electrical service" className="img-fluid" />
        </div>
      </div>

      {showButton && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="con-btn">
            <span className="con-text">View All</span>
            <span className="arrow-box">
              <ArrowUpRight className="arrow-icon" />
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default OurServices;
