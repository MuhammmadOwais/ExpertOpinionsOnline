import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
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
    company: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Our Team', href: '/about/our-team' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact Us', href: '/contact' },
    ],
    contact: [
      { icon: Mail, value: 'Support@expertopinions.net', href: 'mailto:Support@expertopinions.net' },
      { icon: Phone, value: '+1 307 227 3735', href: 'tel:+13072273735' },
      { icon: MapPin, value: '1908 Thomes Ave STE 12337, Cheyenne, WY 82001, USA', href: 'https://maps.app.goo.gl/9q3tdhePSXAcKFVGA' },
    ]
  };

  return (
    <footer className="relative bg-[#101010] text-white pt-24 pb-12 font-poppins overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 1. Logo & Contact Info */}
          <div className="lg:col-span-2 text-left">
            <Link to="/">
              <img 
                src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774948117/Gemini_Generated_Image_c0yhgdc0yhgdc0yh_dg0tky.png" 
                alt="Expert Opinions" 
                className="h-16 w-auto mb-6"
              />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              Your trusted partner for expert digital solutions.
            </p>
            
            <div className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <a key={index} href={item.href} className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
                  <div className="p-2.5 bg-gray-800 rounded-lg text-purple-600">
                    <item.icon size={18} />
                  </div>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services Links */}
          <div className="text-left pt-6">
            <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-widest text-sm">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Links */}
          <div className="text-left pt-6">
            <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-widest text-sm">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Expert Opinions. All rights reserved. <span className="text-purple-600 font-bold">#BuildingAtTheSpeedOfAI</span>
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Main Neon Purple Circle Effect */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none -z-0 opacity-80 shadow-[0_0_120px_60px_rgba(124,58,237,0.8)]"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(124, 58, 237, 0) 70%)'
        }}
      ></div>
      
      {/* Inner Core of the Neon Circle */}
      <div 
        className="absolute bottom-[-5%] right-[-5%] w-[250px] h-[250px] rounded-full blur-[60px] pointer-events-none -z-0 opacity-100 shadow-[0_0_80px_40px_rgba(168,85,247,1)]"
        style={{
          background: 'rgba(255, 255, 255, 0.9)'
        }}
      ></div>

    </footer>
  );
};

export default Footer;