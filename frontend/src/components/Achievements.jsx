import React from 'react';

const Achievements = () => {
  const achievementData = [
    {
      title: "Successful Projects",
      progress: 150,
      total: 200,
      label: "150+ Projects Delivered",
    },
    {
      title: "Countries Reached",
      progress: 12,
      total: 20,
      label: "12 Global Markets",
    },
    {
      title: "Satisfied Clients",
      progress: 80,
      total: 100,
      label: "80+ Retained Partners",
    },
    {
      title: "Years of Excellence",
      progress: 5,
      total: 10,
      label: "5 Years Experience",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
        
        {/* Left Side: Sticky Text Content */}
        <div className="w-full lg:w-5/12 sticky top-20 z-0">
          <span className="text-purple-700 uppercase tracking-widest text-xs md:text-sm font-bold mb-4 block">
            Expert Opinions Milestones
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Our Journey of <br /> 
            <span className="text-purple-700">Digital Impact</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            We track our success through the growth of our clients. These milestones represent our commitment to technical excellence.
          </p>
          <a 
            href="contact" 
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg mb-12 lg:mb-0"
          >
            Work With Us
          </a>
        </div>

        {/* Right Side: Clean Achievement Card (No Icons/Emojis) */}
        <div className="w-full lg:w-6/12 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative z-10">
          <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-20">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800 tracking-tight">Current Performance</h3>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 uppercase tracking-widest">
                2026 Live Data
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-100 bg-white">
            {achievementData.map((item, index) => (
              <div key={index} className="p-8 md:p-10 flex flex-col bg-white">
                
                {/* Header Row */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-2xl leading-none">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-2 font-medium">
                      {item.label}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-purple-700 font-black text-xl md:text-3xl">
                      {item.progress}+
                    </span>
                  </div>
                </div>
                
                {/* Minimalist Progress Bar */}
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-purple-600 h-full rounded-full" 
                    style={{ width: `${(item.progress / item.total) * 100}%` }}
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