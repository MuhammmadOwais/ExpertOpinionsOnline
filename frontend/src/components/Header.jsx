import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = {
    services: [
      { name: 'SEO Optimization', href: '/services/seo-optimization' },
      { name: 'Amazon Optimization', href: '/services/amazon-management' },
      { name: 'Shopify Development', href: '/services/shopify-development' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'Content Writing', href: '/services/content-writing' },
      { name: 'Local SEO', href: '/services/local-seo' },
      { name: 'Website Development', href: '/services/web-development' },
      { name: 'Mobile App Dev', href: '/services/mobile-app-dev' },
      { name: 'DevOps', href: '/services/devops' },
      { name: 'Generative AI', href: '/services/generative-ai' },
      { name: 'n8n Automation', href: '/services/n8n-automation' },
      { name: 'Bloging', href: '/services/bloging' },
    ],
    about: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Our Team', href: '/about/our-team' },
    ]
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774695410/Expert_OpinionLogo_koc4fx.webp" 
              alt="Expert Opinions Online" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">Home</Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 group-hover:text-purple-700 font-medium py-7">
                About <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white border border-gray-100 shadow-xl mt-0 p-2 rounded-lg">
                {navigation.about.map((item) => (
                  <Link key={item.name} to={item.href} className="block p-2 hover:bg-purple-50 hover:text-purple-700 rounded text-sm transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown (Large) */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 group-hover:text-purple-700 font-medium py-7">
                Services <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-[-150px] hidden group-hover:grid grid-cols-2 w-[550px] bg-white border border-gray-100 shadow-xl mt-0 p-6 rounded-xl">
                {navigation.services.map((item) => (
                  <Link key={item.name} to={item.href} className="p-3 hover:bg-purple-50 hover:text-purple-700 rounded-md text-[14px] transition-all flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blog" className="text-gray-800 hover:text-purple-700 font-medium transition-colors">Blog</Link>
            
            <Link to="/contact" className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
              Let's Talk Business
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 p-2 focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMenu}></div>
        
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl flex flex-col transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <img src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774695409/Expert_Opinion_Fevicon_sqwaxb.webp" className="h-10 w-10" alt="favicon" />
            <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-black"><X size={28} /></button>
          </div>

          <div className="space-y-6 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            <Link to="/" onClick={closeMenu} className="block text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Home</Link>
            
            <div>
              <h3 className="text-purple-700 text-xs font-black tracking-widest mb-4 uppercase">OUR SERVICES</h3>
              <div className="grid grid-cols-1 gap-3">
                {navigation.services.map((item) => (
                  <Link key={item.name} to={item.href} onClick={closeMenu} className="text-[15px] text-gray-600 hover:text-purple-700 font-medium py-1 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-purple-700 text-xs font-black tracking-widest mb-4 uppercase">COMPANY</h3>
              <div className="grid grid-cols-1 gap-3">
                {navigation.about.map((item) => (
                  <Link key={item.name} to={item.href} onClick={closeMenu} className="text-[15px] text-gray-600 hover:text-purple-700 font-medium py-1 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blog" onClick={closeMenu} className="block text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Blog</Link>
          </div>

          <div className="mt-auto pt-6">
            <Link to="/contact" onClick={closeMenu} className="block w-full text-center bg-purple-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-200">
              Let's Talk Business
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;