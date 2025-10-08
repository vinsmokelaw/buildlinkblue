import React from 'react';
import './AboutImages.css';


import about1 from '../assets/Group 15.png';
import about2 from '../assets/Group 16.png';
import about3 from '../assets/Group 20.png';

const AboutImages = () => {
  return (
    <section className="about-images-section container">
      <div className="row">
        <div className="col-md-4 image-box">
          <img src={about1} alt="About 1" className="img-fluid" />
        </div>
        <div className="col-md-4 image-box">
          <img src={about2} alt="About 2" className="img-fluid" />
        </div>
        <div className="col-md-4 image-box">
          <img src={about3} alt="About 3" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default AboutImages;
