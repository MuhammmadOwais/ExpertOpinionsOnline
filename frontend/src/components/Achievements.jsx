import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: "Successful Projects", value: 150 },
    { label: "Countries Reached", value: 12 },
    { label: "Satisfied Clients", value: 80 },
    { label: "Years of Excellence", value: 5 },
  ];

  return (
    <section ref={ref} className="py-20 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-left">
          <span className="text-purple-600 uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            Innovation Meets Excellence
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
            Expert Opinions <br /> 
            <span className="text-purple-700">Milestones</span>
          </h2>
          <p className="text-gray-600 text-lg mb-4 max-w-md">
            We empower brands with cutting-edge digital solutions and strategic marketing expertise.
          </p>
          <p className="text-gray-600 text-lg mb-10 max-w-md">
            Our journey is defined by the success of our clients and our commitment to quality.
          </p>
          
          <a 
            href="#contact" 
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(126,34,206,0.3)]"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Side Stats */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-16 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start group">
              <h3 className="text-5xl md:text-7xl font-black text-purple-700 mb-2 transition-transform duration-300 group-hover:scale-110">
                <Counter end={stat.value} shouldStart={inView} />+
              </h3>
              <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight text-center lg:text-left">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end, shouldStart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const duration = 2000; 
    const totalFrames = duration / 16;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, shouldStart]); 
  
  return <span>{count.toLocaleString()}</span>;
};

export default Achievements;