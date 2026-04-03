import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697443/hs3_qy6eqt.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697443/hs1_ebejfb.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697443/hs4_tcpbpw.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697446/hs2_eqkhtt.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697444/hs5_wjicpe.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697447/hs8_i5zwff.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697449/hs6_askciu.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697448/hs9_lwu6nk.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697451/hs7_q89amh.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1774697451/hs10_dhqzmj.webp"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Hero Content - Aligned Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center h-full pt-20">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-left"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight font-poppins">
            Building at the <br />
            <span className="text-purple-500">Speed of AI</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            Expert Opinions Online empower global brands with advanced 
            SEO strategies, MERN stack solutions, and E-commerce management.
          </p>

          <div className="mt-10">
            <Link 
              to="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 inline-block shadow-lg shadow-purple-500/30"
            >
              Let's Talk Business
            </Link>
          </div>
        </motion.div>

        {/* Featured Section - Fixed for Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24 border-t border-white/10 pt-8"
        >
          <p className="text-purple-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-6">Trusted Partners:</p>

          <div className="flex flex-wrap items-center gap-6 md:gap-16">

            {/* Aivisty */}
            <a href="https://aivisty.com" target="_blank" rel="noreferrer" 
               className="transition-all hover:brightness-125 flex items-center justify-center h-12 md:h-16 w-32 md:w-48">
              <img 
                src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/aivisty_logo_hqwfvj.webp" 
                alt="Aivisty" 
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
              />
            </a>

            {/* Myrtle-Enterprise */}
            <a href="https://myrtlent.com/" target="_blank" rel="noreferrer" 
               className="transition-all hover:brightness-125 flex items-center justify-center h-12 md:h-16 w-32 md:w-48">
              <img 
                src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774698238/Myrtle-Enterprise_jzyp0g.webp" 
                alt="Myrtent" 
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
              />
            </a>

            {/* Erain Mercantile */}
            <a href="https://erainmercantile.com/" target="_blank" rel="noreferrer" 
               className="transition-all hover:brightness-125 flex items-center justify-center h-12 md:h-16 w-32 md:w-48">
              <img 
                src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/erainmercantile_b6slzg.webp" 
                alt="Erain" 
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
              />
            </a>

          </div>
        </motion.div>
      </div>
      
      {/* Sidebar Badge - Hidden on small mobile */}
      <div className="absolute right-0 top-1/2 -rotate-90 translate-x-12 z-20 hidden lg:block">
        <div className="bg-purple-600 text-white px-6 py-2 rounded-t-xl text-xs font-black tracking-widest uppercase">
          Expert Opinions Online
        </div>
      </div>
    </div>
  );
};

export default Hero;