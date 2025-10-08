import React, { useState } from 'react';
import './Companies.css';
import badgeImage from './assets/Group 29.png'; 
import serviceImage from './assets/Group 27.png';
import whyAkImage from './assets/Rectangle 61.png';
import gallery1 from './assets/Gallery 1.jpg';
import gallery2 from './assets/Gallery 2.jpg';
import gallery3 from './assets/Gallery 3.jpg';

const Companies = () => {
  // State to track selected filters
  const [selectedEmployment, setSelectedEmployment] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);

  // Toggle functions
  const toggleEmployment = (option) => {
    setSelectedEmployment(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const toggleExperience = (option) => {
    setSelectedExperience(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  return (
    <>
      <section className="companies-hero-container">
        <div className="companies-hero-box">
          <img src={badgeImage} alt="Badge" className="hero-badge" />
        </div>
      </section>

      <section className="companies-text-section">
        <div className="companies-text">
          <h3>About AK Construction</h3>
          <p>
           AK Construction is a leading contracting company with over 15 years of experience dedicated to delivering high-quality construction services. Our team of skilled professionals specializes in residential and commercial projects, ensuring each build meets the highest standards of quality and craftsmanship.
          </p>
        </div>
      </section>

      {/* 🔥 SINGLE IMAGE SERVICE SECTION */}
      <section className="single-service-section">
        <div className="single-service-content">
          <div className="single-service-text">
            <h2>Our services?</h2>
            <p>
              <span style={{color: 'orange'}}>General Contracting:</span> Comprehensive management of your construction projects from start to finish.
              <br />
              <span style={{color: 'orange'}}>Renovations and Remodeling:</span> Transforming spaces to meet your vision and needs.
              <br />
              <span style={{color: 'orange'}}>New Construction:</span> Building homes and commercial spaces tailored to your specifications.
            </p>
          </div>
          <div className="single-service-image">
            <img src={serviceImage} alt="Our Service" />
          </div>
        </div>
      </section>

      <section className="why-ak-section">
        <div className="why-ak-content">
          <div className="why-ak-image">
           <img src={whyAkImage} alt="Construction Crew" />
          </div>
          <div className="why-ak-text">
            <h2>Why Choose AK Construction?</h2>
            <p>
              <span style={{color: 'orange'}}>Expert Team:</span> Our skilled contractors bring expertise and dedication to every project.
              <br />
              <span style={{color: 'orange'}}>Commitment to Quality:</span> We use only the best materials and practices to ensure lasting results.
              <br />
              <span style={{color: 'orange'}}>Customer Satisfaction:</span> Your vision is our priority; we work closely with you to bring it to life.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-header">
          <h2>Project Gallery</h2>
          <p>Some highlights from our recent work</p>
        </div>
        <div className="gallery-grid">
          <img src={gallery3} alt="Gallery 1" />
          <img src={gallery2} alt="Gallery 2" />
          <img src={gallery1} alt="Gallery 3" />
        </div>
      </section>

      {/* Post Job Section */}
      <section className="post-job-section">
        <div className="post-job-wrapper">
          {/* Left Side: Form */}
          <div className="post-job-left">
            <h2>You Have a Job for Us? Post it <span style={{color: 'orange'}}>Here!</span></h2>
            <h3>Add job information</h3>
            <p>“Let’s fill out the job information”.</p>
            <form className="post-job-form">
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" placeholder="e.g. Plumbing Repair" required />
              </div>

              <div className="form-group">
                <label htmlFor="category">Job Category</label>
                <select id="category" required>
                  <option value="">Select a category</option>
                  <option value="construction">Construction</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="painting">Painting</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="e.g. Borrowdale, Harare" required />
              </div>

              <button type="submit" className="submit-btn">Post Job</button>
            </form>
          </div>

          {/* Right Side: Filters */}
          <div className="post-job-right">
            <div className="job-filters">
              <div className="job-filter-group">
                <h4>Employment Type</h4>
                {['Contract', 'Full-Time', 'Part-Time'].map(option => (
                  <div
                    key={option}
                    className={`job-filter-option ${selectedEmployment.includes(option) ? 'selected' : ''}`}
                    onClick={() => toggleEmployment(option)}
                  >
                    <span className="checkbox-box">
                      {selectedEmployment.includes(option) && <span className="checkmark">&#10003;</span>}
                    </span>
                    {option}
                  </div>
                ))}
              </div>

              <div className="job-filter-group">
                <h4>Experience Level</h4>
                {['0–3 years', '3–5 years', '5–7 years', '7–10 years', '10+ years'].map(option => (
                  <div
                    key={option}
                    className={`job-filter-option ${selectedExperience.includes(option) ? 'selected' : ''}`}
                    onClick={() => toggleExperience(option)}
                  >
                    <span className="checkbox-box">
                      {selectedExperience.includes(option) && <span className="checkmark">&#10003;</span>}
                    </span>
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
