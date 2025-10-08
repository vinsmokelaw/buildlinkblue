import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import tinasheImg from '../assets/12.jpeg';
import chidoImg from '../assets/1.jpeg';
import blessingImg from '../assets/24.jpeg';
import { ArrowUpRight } from 'lucide-react';

const testimonialsData = [
  {
    name: "Tafadzwa C.",
    review: "I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!",
    image: tinasheImg,
  },
  {
    name: "Anna K.",
    review: "Excellent plumbing work! Buildlink helped me find a skilled professional. Will use again.",
    image: chidoImg,
  },
  {
    name: "Mary J.",
    review: "The platform is so easy to use. I found an expert builder who delivered high-quality work.",
    image: blessingImg,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials container">
      <div className="row">
        <div className="col-md-5">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            See what our satisfied customers have to say about our services.
          </p>
          <div className="highlighted-testimonial">
            <p className="highlighted-text">
              “Buildlink Zimbabwe has redefined our experience in finding trusted professionals.
              Homeowners and businesses alike appreciate the seamless connection to reliable experts,
              transforming projects into reality with confidence and ease.”
            </p>
          </div>
        </div>

        <div className="col-md-7 d-flex flex-column align-items-center testimonial-slider">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-header">
                <img src={item.image} alt={item.name} className="testimonial-avatar" />
                <h5 className="testimonial-name">{item.name}</h5>
              </div>
              <p className="testimonial-text">“{item.review}”</p>
            </div>
          ))}
        <div className="btn-container">
      <button className="btnOutline">
        <span className="btnOutline_text">Learn More</span>
        <span className="btnOutline_arrowBox">
          <ArrowUpRight />
        </span>
      </button>
    </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonials;
