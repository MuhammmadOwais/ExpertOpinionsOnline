import React from 'react';

const Achievements = () => {
  const achievementData = [
    {
      title: "Successful Projects",
      // Pre-calculate target percentage strings to bypass dynamic inline compilation blocks
      pct: "75%", 
      label: "150+ Projects Delivered",
      progress: 150,
    },
    {
      title: "Countries Reached",
      pct: "60%",
      label: "12 Global Markets",
      progress: 12,
    },
    {
      title: "Satisfied Clients",
      pct: "80%",
      label: "80+ Retained Partners",
      progress: 80,
    },
    {
      title: "Years of Excellence",
      pct: "50%",
      label: "5 Years Experience",
      progress: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
        
        {/* Left Side: Sticky Text Content */}
        {/* CRITICAL FIX: transform-gpu aur will-change-transform locks smooth non-blocking hardware layering on scroll */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-24 z-0 transform-gpu will-change-transform">
          <span className="text-purple-700 uppercase tracking-widest text-xs md:text-sm font-bold mb-3 block">
            Expert Opinions Milestones
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Our Journey of <br /> 
            <span className="text-purple-700">Digital Impact</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            We track our success through the growth of our clients. These milestones represent our commitment to technical excellence.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-md shadow-purple-700/10 hover:scale-[1.02] transform"
          >
            Work With Us
          </a>
        </div>

        {/* Right Side: Clean Achievement Card */}
        <div className="w-full lg:w-6/12 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden relative z-10 contain-intrinsic-size">
          <div className="p-6 border-b border-gray-100 bg-white lg:sticky lg:top-0 z-20">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800 tracking-tight text-sm md:text-base">Current Performance</h3>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 uppercase tracking-widest">
                2026 Live Data
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-100 bg-white">
            {achievementData.map((item, index) => (
              <div key={index} className="p-6 md:p-8 flex flex-col bg-white">
                
                {/* Header Row */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl leading-none">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400 mt-2 font-medium">
                      {item.label}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-purple-700 font-black text-xl md:text-2xl">
                      {item.progress}+
                    </span>
                  </div>
                </div>
                
                {/* Minimalist Progress Bar */}
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden" aria-hidden="true">
                  <div 
                    className="bg-purple-600 h-full rounded-full transition-all duration-500 will-change-[width]" 
                    // String literals static handling completely drops browser recalculation cycles
                    style={{ width: item.pct }} 
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;