import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Mobile aur Desktop ke liye alag responsive optimization limits
const getOptimizedUrl = (url, isMobile = false) => {
  if (isMobile) {
    return url.replace('/upload/', '/upload/f_auto,q_65,w_800,c_scale/');
  }
  return url.replace('/upload/', '/upload/f_auto,q_75,w_1400,c_scale/');
};

const rawImages = [
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1779151959/6_2_mrvmbx.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1779151959/3_2_morvoa.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1779151959/2_2_j3wooa.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1779151959/5_2_tqacyk.webp",
  "https://res.cloudinary.com/dawp1fcci/image/upload/v1779151959/1_2_dduv7b.webp"
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Saari compressed images ko page load hote hi pre-render memory cache mein phek do
    rawImages.forEach((img) => {
      const u = getOptimizedUrl(img, window.innerWidth < 768);
      const i = new Image();
      i.src = u;
    });

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rawImages.length);
    }, 5000); 
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative h-[75vh] md:h-screen w-full overflow-hidden flex items-center bg-black">
      
      {/* BACKGROUND MULTI-LAYER FIXED SLIDER */}
      <div className="absolute inset-0 z-0 bg-black">
        {rawImages.map((imgUrl, imgIndex) => {
          const optimizedImg = getOptimizedUrl(imgUrl, isMobile);
          const isActive = imgIndex === index;

          return (
            <motion.img
              key={imgUrl}
              src={optimizedImg}
              
              // CRITICAL ACCURACY FIX: Pehli image par fetch priority high (No Lazy load here to save LCP)
              // Baaki images background memory se handle ho rhi hain
              fetchpriority={imgIndex === 0 ? "high" : "low"}
              loading={imgIndex === 0 ? "eager" : "lazy"} 
              
              // Standard Explicit Layout Aspects to fix warnings completely
              width={isMobile ? 800 : 1400}
              height={isMobile ? 600 : 900}
              
              className="absolute inset-0 w-full h-full object-cover"
              alt={`Expert Opinions Portfolio Bg ${imgIndex + 1}`}
              
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
              style={{
                zIndex: isActive ? 1 : 0,
              }}
            />
          );
        })}

        {/* Cinematic dark tint overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[0.5px] z-[2]"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center h-full pt-12 md:pt-20">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl text-left"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight font-poppins">
            Building at the <br />
            <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Speed of AI</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            Expert Opinions empower global brands with advanced 
            SEO strategies, MERN stack solutions, and E-commerce management.
          </p>

          <div className="mt-6 md:mt-10">
            <Link 
              to="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold transition-all transform hover:scale-105 inline-block shadow-lg shadow-purple-500/30"
            >
              Let's Talk Business
            </Link>
          </div>
        </motion.div>

        {/* TRUSTED PARTNERS SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-12 md:mt-24 border-t border-white/10 pt-6 md:pt-8"
        >
          <p className="text-purple-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6">Trusted Partners:</p>

          <div className="flex flex-wrap items-center gap-6 md:gap-16">
            {/* Aivisty */}
            <a href="https://aivisty.com" target="_blank" rel="noreferrer" 
               className="transition-all hover:brightness-125 flex items-center justify-center h-10 md:h-16 w-28 md:w-48">
              <img 
                src="https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_180/v1774698237/aivisty_logo_hqwfvj.webp" 
                alt="Aivisty" 
                width="180"
                height="50"
                loading="lazy" // Safe below fold lazy load
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
              />
            </a>

            {/* Myrtle-Enterprise */}
            <a href="https://myrtlent.com/" target="_blank" rel="noreferrer" 
               className="transition-all hover:brightness-125 flex items-center justify-center h-10 md:h-16 w-28 md:w-48">
              <img 
                src="https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_180/v1774698238/Myrtle-Enterprise_jzyp0g.webp" 
                alt="Myrtent" 
                width="180"
                height="50"
                loading="lazy" // Safe below fold lazy load
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;