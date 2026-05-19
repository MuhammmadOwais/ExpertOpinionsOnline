import React from 'react';
import { motion } from 'framer-motion';

// Cloudinary URL Optimization strictly structured for premium logo assets
const getOptimizedLogoUrl = (url) => {
  // Ultra-optimized for logo dimensions: 150px width limit brings network payload to near zero
  return url.replace('/upload/', '/upload/f_auto,q_75,w_150,c_scale/');
};

const logos = [
  { id: 1, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779153414/jd_b64gvi.jpg", url: "https://www.jdphones.co.uk/" },
  { id: 2, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779153806/aivisty_logo_y5497n.avif", url: "https://aivisty.com" },
  { id: 3, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779153414/Myrtle-Enterprise_jzyp0g_1_v14soa.jpg", url: "https://myrtlent.com/" },
  { id: 4, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/rustcoffee_gsyfzt.webp", url: "https://rustcoffee.co.uk/" },
  { id: 5, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779153754/thjcoohq04u8f7qqzp6s_slqtpo.webp", url: "https://rizmercantile.com/" },
];

const LogoSlider = () => {
  // CRITICAL SMOOTHNESS FIX: Triple cloning wraps the viewport perfectly to prevent loop skips
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="bg-white py-10 border-b border-gray-50 overflow-hidden w-full select-none">
      <div className="relative flex overflow-hidden group w-full">
        
        {/* Scrolling Container */}
        <motion.div
          className="flex space-x-16 items-center flex-nowrap will-change-transform transform-gpu"
          animate={{
            // Stays 100% seamless because we scroll one full set duration mathematically
            x: ["0%", "-33.33%"], 
          }}
          transition={{
            ease: "linear",
            duration: 35, // Speed halki aur elite tier cinematic kardi hai
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => {
            const optimizedLogo = getOptimizedLogoUrl(logo.img);

            return (
              <a 
                key={`logo-${logo.id}-${index}`}
                href={logo.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-[110px] md:w-[150px]"
              >
                <img
                  src={optimizedLogo}
                  alt="Trusted Client Partner Brand Logo"
                  
                  // Layout Aspect Protections
                  width="150"
                  height="60"
                  
                  // Non-blocking background thread specs
                  loading="lazy"
                  decoding="async"
                  
                  className="h-9 md:h-11 w-full object-contain pointer-events-none"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;