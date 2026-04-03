import React from 'react';
import Hero from '../components/Hero';
import LogoSlider from '../components/LogoSlider'; // 1. Check karein import sahi hai
import ServicesSection from '../components/ServicesSection';
import Insights from '../components/Insights';
import Achievements from '../components/Achievements';
import Leadership from '../components/Leadership';
import ContactForm from '../components/ContactForm';
const Home = () => {
  return (
    <main>
      <Hero />
      <LogoSlider /> {/* 2. Ye line Hero ke foran baad honi chahiye */}
      {/* Thora sa gap margin ke liye mt-10 ya 20 use kar sakte hain */}
      <div className="mt-10">
        <ServicesSection />
      </div>
      <Insights />
      <Achievements />
      <Leadership />
      <ContactForm />
    </main>
  );
};

export default Home;