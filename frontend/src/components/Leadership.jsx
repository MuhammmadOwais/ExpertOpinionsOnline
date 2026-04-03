import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const leaders = [
  {
    name: "Maqsood Ahmed",
    role: "Founder & Head of E-Commerce",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_auto,w_800/v1774871001/Maqsood_Ahmad_ewxr6a.jpg", 
    linkedin: "https://www.linkedin.com/in/maqsood-ahmad-business-advisor/",
    expertise: ["E-Commerce", "Amazon Strategy"],
  },
  {
    name: "Abdur Rehman",
    role: "CEO & Head of SEO",
    img: "https://via.placeholder.com/400x500?text=Abdur+Rehman", 
    linkedin: "#",
    expertise: ["SEO Strategy", "Growth Hacking"],
  },
  {
    name: "Ahsan Ali",
    role: "Head of Digital Marketing",
    img: "https://via.placeholder.com/400x500?text=Ahsan+Ali",
    linkedin: "#",
    expertise: ["Digital Strategy", "Brand Management"],
  },
  {
    name: "Muhammad Owais",
    role: "Head of Technology Department",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774960689/Gemini_Generated_Image_8nygoa8nygoa8nyg_tccmtz.png",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
    expertise: ["Web Development", "Tech Innovation"],
  },
];

const Leadership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 2;
    }
    return 2;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(2);
  
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(leaders.length / itemsPerPage);
  const currentLeaders = leaders.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 font-poppins relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-60 h-60 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-60 h-60 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section - Compact */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 font-bold text-xs uppercase tracking-wider mb-2 inline-block border-l-3 border-purple-600 pl-3">
              Executive Team
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mt-2">
              Our Global
              <span className="relative inline-block ml-2">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Leadership
                </span>
                <svg className="absolute bottom-0 left-0 w-full h-1.5 -z-0" viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3 Q 50 6, 100 3 T 200 3" stroke="#9333EA" fill="none" strokeWidth="1.5" strokeDasharray="2 2"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-xs md:text-sm">
              Meet the visionaries driving innovation and excellence
            </p>
          </motion.div>
        </div>
        
        {/* Slider Container */}
        <div className="relative px-6 md:px-8">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:shadow-lg transition-all hover:bg-purple-600 group"
              >
                <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-gray-700 group-hover:text-white transition-colors" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:shadow-lg transition-all hover:bg-purple-600 group"
              >
                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-700 group-hover:text-white transition-colors" />
              </button>
            </>
          )}
          
          {/* Slider Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={`grid gap-3 md:gap-4 ${
                  itemsPerPage === 1 
                    ? 'grid-cols-1' 
                    : 'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {currentLeaders.map((leader, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    {/* Card - Smaller Size */}
                    <div className="relative bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      
                      {/* Image Container - Smaller Square */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-square">
                        <img 
                          src={leader.img} 
                          alt={leader.name} 
                          className="w-full h-full object-cover object-top transition-transform duration-400 group-hover:scale-105"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        
                        {/* LinkedIn Icon - Smaller */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                          <a 
                            href={leader.linkedin} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-white rounded-full shadow-sm hover:bg-purple-600 transition-all duration-300"
                          >
                            <FaLinkedin size={12} className="md:text-xs text-gray-700 hover:text-white transition-colors" />
                          </a>
                        </div>
                      </div>
                      
                      {/* Content Section - Compact */}
                      <div className="p-2.5 md:p-3 bg-white">
                        <h3 className="text-xs md:text-sm lg:text-base font-bold text-gray-900 leading-tight mb-0.5">
                          {leader.name.split(' ').map((word, i) => (
                            <span key={i} className={i === 1 ? "text-purple-600" : ""}>
                              {word}{i === 0 ? ' ' : ''}
                            </span>
                          ))}
                        </h3>
                        
                        <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 mb-2 line-clamp-2 min-h-[28px] md:min-h-[32px] leading-relaxed">
                          {leader.role}
                        </p>
                        
                        {/* Expertise Tags - Smaller */}
                        <div className="flex flex-wrap gap-1 mt-1.5 pt-1.5 border-t border-gray-100">
                          {leader.expertise.map((skill, i) => (
                            <span key={i} className="text-[8px] md:text-[10px] px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-50 text-gray-600 rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Dots Indicator - Smaller */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1.5 mt-6 md:mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-5 bg-purple-600'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Leadership;