import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Hero from './components/Hero';
import ExperienceSection from './components/Experience';
import OurServices from './components/our-services';
import Testimonials from './components/testimonials';
import MeetourTeam from './components/meet';
import Job from './components/job';
import AboutUs from './AboutUs';
import Handyman from './handyman';
import Companies from './Companies';
import Login from './pages/log in';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
        {/* Login page is now the root route */}
        <Route path="/" element={<Login />} />

        {/* Home route is now /home */}
        <Route path="/home" element={
          <>
            <Hero />
            <ExperienceSection />
            <OurServices />
            <Testimonials />
            <MeetourTeam />
            <Job />
          </>
        } />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/handyman" element={<Handyman />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
