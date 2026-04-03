import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const allServices = [
  { name: 'SEO Optimization', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/SEO_Optimization_zat9to.jpg', slug: 'seo-optimization' },
  { name: 'Amazon Optimization', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Amazon_Optimization_and_Management_wicum8.jpg', slug: 'amazon-management' },
  { name: 'Shopify Development', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/Shopify_Store_development_and_optimization_cxi3lp.jpg', slug: 'shopify-development' },
  { name: 'Digital Marketing', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Digital_Marketing_Strategy_n283jq.png', slug: 'digital-marketing' },
  { name: 'Content Writing', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Content_Writing_and_SEO_Content_Production_wlqhqh.jpg', slug: 'content-writing' },
  { name: 'Local SEO Services', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Local_SEO_Services_qvg8qn.png', slug: 'local-seo' },
  { name: 'Full Stack Development', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833509/website_development_by_wordpress_and_mern_stack_gxpczc.jpg', slug: 'mern-stack-development' },
  { name: 'Mobile App Dev', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833492/Mobile_Application_Development_rkueq7.jpg', slug: 'mobile-app-development' },
  { name: 'DevOps', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833489/Devops_ylm5az.jpg', slug: 'devops' },
  { name: 'Generative AI', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833491/Genrative_AI_d937jp.jpg', slug: 'generative-ai' },
  { name: 'n8n Automation', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833492/n8n_yknrgj.jpg', slug: 'n8n-automation' },
  { name: 'Blogging Services', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/bloging_yrfxxt.jpg', slug: 'blogging' },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? allServices : allServices.slice(0, 4);

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
      
      {/* 1. HIGH INTENSITY PURPLE GLOW */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(147, 51, 234, 0.45) 0%, rgba(168, 85, 247, 0.2) 40%, rgba(255, 255, 255, 0) 75%)`
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-purple-400/30 rounded-full blur-[100px] md:blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <p className="text-purple-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 font-poppins tracking-tight">
            Transform Your <span className="text-purple-600">Business</span>
          </h2>
        </div>

        {/* Services Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {displayedServices.map((service) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  // aspect-square makes it a perfect block
                  className="group relative block aspect-square overflow-hidden rounded-0.5xl md:rounded-[2rem] bg-gray-900 shadow-xl transition-all hover:shadow-purple-300/50"
                >
                  {/* Background Image */}
                  <img 
                    src={service.img} 
                    alt={service.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent group-hover:from-purple-900/90 transition-all duration-500"></div>
                  
                  {/* Service Text */}
                  <div className="absolute bottom-0 p-5 md:p-8 w-full">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white font-poppins leading-tight group-hover:translate-y-[-5px] transition-transform duration-300">
                      {service.name}
                    </h3>
                    <div className="w-8 h-1 bg-purple-500 mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <div className="mt-12 md:mt-20 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 border-2 border-purple-600 text-purple-600 px-8 py-3 md:px-10 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all duration-500 active:scale-95 shadow-lg"
          >
            {showAll ? 'View Less' : 'View More Services'}
            <motion.div
              animate={{ y: showAll ? -3 : 3 }}
              transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse" }}
            >
              <ArrowDown size={20} strokeWidth={3} />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;