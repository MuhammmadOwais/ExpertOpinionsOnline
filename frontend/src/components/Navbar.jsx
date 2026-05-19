import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logoUrl = "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_180,c_scale/v1779164562/logo_1_mqrgws.webp";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transform-gpu">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Block */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={logoUrl} 
            alt="Expert Opinions" 
            
            // CRITICAL CLS FIX: Hardcoded dimensional footprints stop header layout jumps completely
            width="150"
            height="44"
            
            // Priority allocation for structural LCP rendering pass
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="h-11 w-auto object-contain pointer-events-none" 
          />
        </Link>

        {/* Navigation Links Framework */}
        <div className="hidden md:flex space-x-8 items-center font-poppins text-sm font-semibold">
          <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Services</Link>
          <Link to="/blog" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Blog</Link>
          
          {/* Action CTA Button */}
          <Link 
            to="/contact" 
            className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-200 hover:bg-purple-700 shadow-md shadow-purple-600/10 active:scale-98"
          >
            Let's Talk
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;