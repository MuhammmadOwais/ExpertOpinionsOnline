import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Yeh import lazmi hai
import { FaLinkedin, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const leaders = [
  {
    name: "Maqsood Ahmed",
    role: "Founder & Head of E-Commerce",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_auto,w_800/v1774871001/Maqsood_Ahmad_ewxr6a.jpg",
    linkedin: "https://www.linkedin.com/in/maqsood-ahmad-business-advisor/",
  },
  {
    name: "Abdur Rehman",
    role: "CEO & Head of SEO",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1777069158/Gemini_Generated_Image_ofddeoofddeoofdd_m9xzll.png",
    linkedin: "#",
  },
  {
    name: "Ahsan Ali",
    role: "Head of Digital Marketing",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1777065916/WhatsApp_Image_2026-04-24_at_2.22.39_PM_tmsxbi.jpg",
    linkedin: "#",
  },
  {
    name: "Muhammad Owais",
    role: "Head of Development and Management",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1777141674/retouch_2026042503474735.jpg_qjn2k4.jpg",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
  },
];

const Leadership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIindex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "circOut" },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="py-20 bg-[#fafafa] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-purple-600"></span>
                <span className="text-purple-600 font-bold text-sm uppercase tracking-widest">
                  Executive Excellence
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Visionaries Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                  The Future.
                </span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg border-l-2 border-gray-100 pl-6">
              Our leadership team brings together decades of experience in global scaling and digital innovation.
            </p>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 pt-4">
              <div className="flex gap-3">
                <button onClick={prevSlide} className="group w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-600 transition-all">
                  <FaArrowLeft className="text-gray-400 group-hover:text-white" />
                </button>
                <button onClick={nextSlide} className="group w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-600 transition-all">
                  <FaArrowRight className="text-gray-400 group-hover:text-white" />
                </button>
              </div>
              <div className="text-sm font-bold">
                <span className="text-2xl text-purple-600">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-gray-300 text-xl mx-1">/</span>
                <span className="text-gray-400">{String(leaders.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Right Heavy Slider */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden bg-white">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <img
                    src={leaders[currentIndex].img}
                    alt={leaders[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <p className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-1">
                      {leaders[currentIndex].role}
                    </p>
                    <div className="flex justify-between items-end">
                      <h3 className="text-3xl font-bold">{leaders[currentIndex].name}</h3>
                      <a href={leaders[currentIndex].linkedin} className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/40 transition-all">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Nav */}
            <div className="flex lg:hidden justify-center items-center gap-8 mt-8">
              <button onClick={prevSlide} className="p-4 border rounded-full bg-white"><FaArrowLeft /></button>
              <span className="font-bold">{currentIndex + 1} / {leaders.length}</span>
              <button onClick={nextSlide} className="p-4 border rounded-full bg-white"><FaArrowRight /></button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;