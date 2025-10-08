// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ExperienceSection from '../components/Experience';
import OurServices from '../components/our-services';
import Testimonials from '../components/testimonials';
import MeetourTeam from '../components/meet';
import Job from '../components/job';

const Home = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <OurServices />
      <Testimonials />
      <MeetourTeam />
      <Job />
    </>
  );
};

export default Home;
