import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import OurStory from './pages/OurStory';
import OurTeam from './pages/OurTeam';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import ServiceDetail from './pages/ServiceDetail';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-poppins selection:bg-purple-600 selection:text-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Placeholders */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={< BlogPostDetail />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;