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
              fetchPriority={imgIndex === 0 ? "high" : "low"}
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
          className="max-w-4xl text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight font-poppins text-center md:text-left">
            Your Trusted
            <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"> Partner</span>
          </h1>
          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed text-center md:text-left">
            We empower Brands with advanced
            SEO strategies, MERN stack solutions, and E-commerce management.
          </p>

          <div className="mt-6 md:mt-10 flex flex-row flex-nowrap gap-2 md:gap-4 items-center justify-center md:justify-start w-full">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-[10px] sm:text-sm md:text-lg font-bold transition-all transform hover:scale-105 inline-block shadow-lg shadow-purple-500/30 whitespace-nowrap"
            >
              Let's Talk Business
            </Link>
            <a
              href="https://www.upwork.com/freelancers/~015e347ad68c96da6f"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 hover:bg-purple-500/10 text-white px-3 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-[10px] sm:text-sm md:text-lg font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-1 md:gap-2 shadow-lg shadow-purple-500/20 whitespace-nowrap"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                className="w-3.5 h-3.5 md:w-5 md:h-5 fill-current text-purple-400"
              >
                <ellipse cx="184.5" cy="234.5" rx="57.5" ry="56.5" transform="translate(-546.174 -763.565) scale(4.34783)" />
                <path d="M345.516 181.708c-42.168 0-65.774 27.481-72.532 55.773-7.658-14.416-13.335-33.698-17.75-51.628H196.94v72.531c0 26.31-11.984 45.772-35.41 45.772-23.427 0-36.852-19.462-36.852-45.772l.27-72.531H91.34v72.531c0 21.174 6.848 40.366 19.372 54.061 12.884 14.146 30.454 21.534 50.817 21.534 40.545 0 68.837-31.085 68.837-75.595V209.64c4.235 16.038 14.326 46.853 33.608 73.884l-18.02 102.625h34.148l11.893-72.712c3.875 3.244 8.02 6.127 12.434 8.74 11.443 7.208 24.508 11.263 38.023 11.713 0 0 2.073.09 3.154.09 41.807 0 75.054-32.346 75.054-76.045 0-43.7-33.337-76.226-75.144-76.226m0 122.358c-25.86 0-42.979-20.003-47.754-27.752 6.127-49.015 24.057-64.512 47.754-64.512 23.426 0 41.626 18.741 41.626 46.132 0 27.39-18.2 46.132-41.626 46.132" fillRule="nonzero" />
              </svg>
              <span>Hire Us on Upwork</span>
            </a>
          </div>
        </motion.div>

        {/* TRUSTED PARTNERS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-12 md:mt-24 border-t border-white/10 pt-6 md:pt-8"
        >
          <p className="text-purple-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6"> Our Trusted Agencies:</p>

          <div className="flex flex-wrap items-center gap-6 md:gap-16">
            {/* Aivisty */}
            <a href="https://aivisty.com" target="_blank" rel="noreferrer"
              className="transition-all hover:brightness-125 flex items-center justify-center h-10 md:h-16">
              <img
                src="https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_250,e_trim/v1774698237/aivisty_logo_hqwfvj.webp"
                alt="Aivisty"
                loading="lazy"
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              />
            </a>

            {/* Rizz Mercantile-Enterprise */}
            <a href="https://rizmercantile.com/" target="_blank" rel="noreferrer"
              className="transition-all hover:brightness-125 flex items-center justify-center h-10 md:h-16">
              <img
                src="https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_250,e_trim/v1774698237/RizMercantile_zldts2.webp"
                alt="Rizz Mercantile"
                loading="lazy"
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;