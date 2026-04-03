import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { id: 1, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698238/JD_2_pe6fx2.webp", url: "https://www.jdphones.co.uk/" },
  { id: 2, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/aivisty_logo_hqwfvj.webp", url: "https://aivisty.com" },
  { id: 3, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698238/Myrtle-Enterprise_jzyp0g.webp", url: "https://myrtlent.com/" },
  { id: 4, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/rustcoffee_gsyfzt.webp", url: "https://rustcoffee.co.uk/" },
  { id: 5, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/RizMercantile_zldts2.webp", url: "https://rizmercantile.com/" },
  { id: 6, img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774698237/erainmercantile_b6slzg.webp", url: "https://erainmercantile.com/" },
];

const LogoSlider = () => {
  // Infinite scroll ke liye logos ko double kar dete hain
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-12 border-b border-gray-50 overflow-hidden">


      <div className="relative flex overflow-hidden group">
        {/* Scrolling Container */}
        <motion.div
          className="flex space-x-16 items-center"
          animate={{
            x: ["0%", "-50%"], // Left to Right movement logic
          }}
          transition={{
            ease: "linear",
            duration: 20, // Speed control (jitna zyada, utna slow)
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <a 
              key={index} 
              href={logo.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={logo.img}
                alt="Brand Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;