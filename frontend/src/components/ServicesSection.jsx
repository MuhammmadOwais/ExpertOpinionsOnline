import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

// Cloudinary URL Optimization pipeline built for core grid density
const getOptimizedServiceUrl = (url, isMobile = false) => {
  if (isMobile) {
    return url.replace('/upload/', '/upload/f_auto,q_65,w_320,c_scale/');
  }
  return url.replace('/upload/', '/upload/f_auto,q_75,w_450,c_scale/'); // Squished to 450px for faster layout painting
};

const allServices = [
  { name: 'SEO', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/SEO_Optimization_zat9to_lugqth.webp', slug: 'seo' },
  { name: 'Amazon Account Management', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Amazon_Optimization_and_Management_wicum8_adznot.webp', slug: 'amazon-account-management' },
  { name: 'Shopify Development', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/Shopify_Store_development_and_optimization_cxi3lp_kjwicc.webp', slug: 'shopify-development' },
  { name: 'Digital Marketing', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Digital_Marketing_Strategy_n283jq_xt8el1.webp', slug: 'digital-marketing' },
  { name: 'Content Writing', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/Content_Writing_and_SEO_Content_Production_wlqhqh_mezhzn.webp', slug: 'content-writing' },
  { name: 'Local SEO Services', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Local_SEO_Services_qvg8qn_yfobvg.webp', slug: 'local-seo' },
  { name: 'Full Stack Development', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/website_development_by_wordpress_and_mern_stack_gxpczc_wm39yo.webp', slug: 'web-development' },
  { name: 'Mobile App Dev', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/Mobile_Application_Development_rkueq7_zhouy0.webp', slug: 'mobile-app-dev' },
  { name: 'DevOps', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Devops_ylm5az_qzvl6x.webp', slug: 'devops' },
  { name: 'Generative AI', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/Genrative_AI_d937jp_ienmyz.webp', slug: 'generative-ai' },
  { name: 'n8n Automation', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/n8n_yknrgj_p8i2k0.webp', slug: 'n8n-automation' },
  { name: 'Blogging Services', img: 'https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/bloging_yrfxxt_pjwvmn.webp', slug: 'bloging' },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 overflow-hidden bg-white contain-intrinsic-size">
      
      {/* Background Glow - GPU Layer Isolation */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-50 md:opacity-90 transform-gpu"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(147, 51, 234, 0.35) 0%, rgba(168, 85, 247, 0.15) 40%, rgba(255, 255, 255, 0) 75%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <p className="text-purple-600 font-bold tracking-widest uppercase text-[10px] md:text-sm mb-2">Our Services</p>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-900 font-poppins tracking-tight leading-tight">
            Transform Your <span className="text-purple-600">Business</span>
          </h2>
        </div>

        {/* CRITICAL FIX: Pure CSS expansion track. Hum JavaScript rendering block ke bajaye 
          saari 12 services ko map karenge, lakin jo hidden hain unpar Tailwind classes se 
          smooth transition, opacity, aur height scale apply karenge. 
          Isse loop structure break nahi hoga aur smoothness absolute makkhan hogi!
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 transition-all duration-500 ease-in-out">
          {allServices.map((service, index) => {
            const finalCardImg = getOptimizedServiceUrl(service.img, isMobile);
            const isHidden = !showAll && index >= 4;

            return (
              <div 
                key={service.slug} 
                className={`w-full transform-gpu transition-all duration-500 ease-in-out ${
                  isHidden 
                    ? 'opacity-0 scale-95 max-h-0 pointer-events-none overflow-hidden hidden md:block lg:opacity-0 lg:max-h-0' 
                    : 'opacity-100 scale-100 max-h-[500px]'
                }`}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="group relative block aspect-square overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-900 shadow-md transition-all active:scale-98 md:hover:shadow-purple-300/20"
                >
                  {/* Background Image */}
                  <img 
                    src={finalCardImg} 
                    alt={service.name} 
                    
                    // Fixed aspect properties to lock cumulative layout shift
                    width="450"
                    height="450"
                    
                    // Native performance hooks: Eager load first row, lazy load expanded ones
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    
                    className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-105 opacity-50 md:opacity-60 pointer-events-none"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:group-hover:from-purple-900/80 transition-all duration-300"></div>
                  
                  {/* Service Text */}
                  <div className="absolute bottom-0 p-3 md:p-8 w-full">
                    <h3 className="text-sm md:text-2xl font-extrabold text-white font-poppins leading-tight">
                      {service.name}
                    </h3>
                    <div className="w-6 h-0.5 md:w-8 md:h-1 bg-purple-500 mt-2 transform origin-left scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 md:px-10 md:py-4 rounded-full font-black text-[10px] md:text-sm uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all duration-300 active:scale-95 shadow-md"
          >
            {showAll ? 'View Less' : 'View More'}
            <div className={`transition-transform duration-300 ${showAll ? 'rotate-180 animate-none' : 'animate-bounce'}`}>
              <ArrowDown size={16} className="md:w-5 md:h-5" strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;