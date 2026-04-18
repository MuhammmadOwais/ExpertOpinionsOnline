import React, { useState } from 'react';
import { FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    img: "https://via.placeholder.com/400x500?text=Abdur+Rehman",
    linkedin: "#",
  },
  {
    name: "Ahsan Ali",
    role: "Head of Digital Marketing",
    img: "https://via.placeholder.com/400x500?text=Ahsan+Ali",
    linkedin: "#",
  },
  {
    name: "Muhammad Owais",
    role: "Head of Development and Management",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1775860640/Gemini_Generated_Image_1l7gbt1l7gbt1l7g_kdugok.png",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
  },
];

const Leadership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section className="py-6 md:py-10 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Content (Takes 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block border-l-4 border-purple-600 pl-4">
              <span className="text-purple-600 font-bold text-xs uppercase tracking-[0.2em]">
                Executive Team
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Our Global <br />
              <span className="text-purple-600">Leadership</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              The success of every venture is attributed to hard-working specialists. Our management spans decades of digital transformation and technology innovation to help your company go global.
            </p>
            <div className="pt-2">
              <p className="italic text-gray-400 text-sm border-t border-gray-100 pt-4 inline-block">
                "Driving innovation through strategic excellence."
              </p>
            </div>
          </div>

          {/* Right Side: Compact Slider (Takes 5 columns on desktop) */}
          <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:mx-0">
            <div className="relative group">
              {/* Image Container - Square Edges, Compact Size */}
              <div className="bg-gray-100 aspect-[4/5] relative overflow-hidden border border-gray-100">
                <img
                  src={leaders[currentIndex].img}
                  alt={leaders[currentIndex].name}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
                        {leaders[currentIndex].name}
                      </h3>
                      <p className="text-purple-600 text-xs font-semibold tracking-wide">
                        {leaders[currentIndex].role}
                      </p>
                    </div>
                    <a
                      href={leaders[currentIndex].linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation Controls Below Image */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white transition-all"
                    aria-label="Previous"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white transition-all"
                    aria-label="Next"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">
                  <span className="text-gray-900">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="mx-2">/</span>
                  <span>{String(leaders.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;