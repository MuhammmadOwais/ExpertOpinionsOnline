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

  // New colors derived from the provided image (image_0.png)
  const colors = {
    bgNav: 'bg-[#0a0a0d]',
    borderNav: 'border-b border-[#252a35]',
    navText: 'text-[#ffffff]',
    navTextActive: 'text-[#a811da]', // Magenta/Purple from image text
    navTextHover: 'hover:text-[#8a3ffc]', // Highlight purple
    dropdownBg: 'bg-[#0f0f12]',
    dropdownBorder: 'border border-[#252a35]',
    mobileGradientAura: 'bg-gradient-radial from-[#8a3ffc]/30 via-[#4d0091]/10 to-transparent', // Purple aura
  };

  return (
    <nav className={`${colors.bgNav} sticky top-0 z-50 shadow-sm ${colors.borderNav} font-poppins`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774948117/Gemini_Generated_Image_c0yhgdc0yhgdc0yh_dg0tky.png" 
              alt="Expert Opinions Online" 
              className="h-12 w-auto brightness-110" // Make logo clearer on dark bg
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${colors.navText} ${colors.navTextHover}`}>Home</Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className={`flex items-center font-medium py-7 transition-colors ${colors.navText} ${colors.navTextHover}`}>
                About <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className={`absolute hidden group-hover:block w-48 ${colors.dropdownBg} ${colors.dropdownBorder} shadow-xl mt-0 p-2 rounded-lg`}>
                {navigation.about.map((item) => (
                  <Link key={item.name} to={item.href} className={`block p-2 hover:bg-[#a811da]/10 rounded text-sm transition-colors ${colors.navText} ${colors.navTextActive} ${colors.navTextHover}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown (Large) */}
            <div className="relative group">
              <button className={`flex items-center font-medium py-7 transition-colors ${colors.navText} ${colors.navTextHover}`}>
                Services <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className={`absolute left-[-150px] hidden group-hover:grid grid-cols-2 w-[550px] ${colors.dropdownBg} ${colors.dropdownBorder} shadow-xl mt-0 p-6 rounded-xl`}>
                {navigation.services.map((item) => (
                  <Link key={item.name} to={item.href} className={`p-3 hover:bg-[#a811da]/10 rounded-md text-[14px] transition-all flex items-center group ${colors.navText} ${colors.navTextActive} ${colors.navTextHover}`}>
                    <span className="w-1.5 h-1.5 bg-[#a811da] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blog" className={`font-medium transition-colors ${colors.navText} ${colors.navTextHover}`}>Blog</Link>
            
            {/* Using the Magenta/Purple for the button border and text */}
            <Link to="/contact" className={`border-2 border-[#a811da] text-[#a811da] px-6 py-2 rounded-full font-semibold hover:bg-[#a811da] hover:text-white transition-all transform hover:scale-105 active:scale-95`}>
              Let's Talk Business
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${colors.navText} ${colors.navTextHover} p-2 focus:outline-none`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMenu}></div>
        
        {/* Mobile menu container uses the dark background from the image */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm ${colors.dropdownBg} p-6 shadow-2xl flex flex-col transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Add the specific purple gradient aura from image_0.png as a background element */}
          <div className={`absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full ${colors.mobileGradientAura} opacity-50 blur-3xl pointer-events-none`}></div>
          
          <div className="flex justify-between items-center mb-8 relative z-10">
            <img src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774695409/Expert_Opinion_Fevicon_sqwaxb.webp" className="h-10 w-10 brightness-125" alt="favicon" />
            <button onClick={closeMenu} className={`p-2 ${colors.navText} hover:text-white`}><X size={28} /></button>
          </div>

          <div className="space-y-6 overflow-y-auto flex-1 pr-2 custom-scrollbar relative z-10">
            <Link to="/" onClick={closeMenu} className={`block text-xl font-bold ${colors.navText} border-b ${colors.borderNav} pb-2`}>Home</Link>
            
            <div>
              {/* Headings also use the active Magenta color */}
              <h3 className={`text-[#a811da] text-xs font-black tracking-widest mb-4 uppercase`}>OUR SERVICES</h3>
              <div className="grid grid-cols-1 gap-3">
                {navigation.services.map((item) => (
                  <Link key={item.name} to={item.href} onClick={closeMenu} className={`text-[15px] font-medium py-1 transition-colors ${colors.navText} ${colors.navTextActive} ${colors.navTextHover}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-[#a811da] text-xs font-black tracking-widest mb-4 uppercase`}>COMPANY</h3>
              <div className="grid grid-cols-1 gap-3">
                {navigation.about.map((item) => (
                  <Link key={item.name} to={item.href} onClick={closeMenu} className={`text-[15px] font-medium py-1 transition-colors ${colors.navText} ${colors.navTextActive} ${colors.navTextHover}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blog" onClick={closeMenu} className={`block text-xl font-bold ${colors.navText} border-b ${colors.borderNav} pb-2`}>Blog</Link>
          </div>

          <div className="mt-auto pt-6 relative z-10">
            {/* Using the Magenta color for the button background */}
            <Link to="/contact" onClick={closeMenu} className={`block w-full text-center bg-[#a811da] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#a811da]/20`}>
              Let's Talk Business
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;