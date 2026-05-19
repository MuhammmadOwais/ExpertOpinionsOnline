import React, { useEffect, useState } from 'react';
import { Target, ShieldCheck, Lightbulb, TrendingUp } from 'lucide-react';
import ContactForm from '../components/ContactForm'; 
import Insights from '../components/Insights';

const OurStory = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // CLOUDINARY HYPER-OPTIMIZATION: Hero asset dynamic scaling setup
  const heroImage = isMobile 
    ? "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_65,w_600,c_scale/v1779162797/pexels-cowomen-1058097-2041637_vd0180_2_qrn8uq.webp"
    : "https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_65,w_1440,c_scale/v1779162797/pexels-cowomen-1058097-2041637_vd0180_2_qrn8uq.webp";

  return (
    <div className="bg-white font-poppins text-gray-900 overflow-x-hidden">
      
      {/* 1. Hero Section - Performance Tuned */}
      {/* PERFORMANCE FIX: Mobile par h-[50vh] ya min-h-[60vh] kardi hai aur desktop par h-screen, jisse layout load fast hoga */}
      <div className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden px-4 py-16 md:py-24">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Our Story Background" 
            
            // Explicit hardcoded tags block CLS engine triggers completely
            width={isMobile ? "600" : "1440"}
            height={isMobile ? "400" : "900"}
            
            // Critical LCP boost rule
            fetchpriority="high"
            loading="eager"
            decoding="async"
            
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/60 via-black/85 to-gray-950/95"></div>
        
        {/* Content Container (Animations & glassmorphism calculating parameters completely stripped) */}
        <div className="relative z-20 text-center w-full max-w-5xl p-6 sm:p-12 md:p-20 rounded-[2.5rem]">
          
          <p className="text-purple-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4">
            Scale Your Business Digitally
          </p>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-6 md:mb-8 leading-[1.1]">
            Expert Solutions, <br />
            <span className="relative inline-block text-white">
              <span className="relative z-10">for digital growth.</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-80"></span>
            </span>
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light">
            Unlock your brand's full potential with our bespoke digital strategies. We specialize in turning complexity into seamless growth.
          </p>

          <div>
            <a href="/contact" className="inline-block relative group">
              <span className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 md:px-14 py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. The Narrative Section (Pure Static Clean Flow) */}
      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side: Header Area */}
          <div className="lg:col-span-5 h-fit">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-purple-600"></span>
              <h2 className="text-xs font-bold tracking-[0.3em] text-purple-600 uppercase">
                Our Origin Story
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              From a <span className="text-purple-600">Laptop</span> to a Digital Powerhouse.
            </h3>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                Let’s face it. <span className="text-slate-900 font-semibold underline decoration-purple-500/30 decoration-4 underline-offset-4">Expert Opinions</span> was not created in an innovative tech incubator. 
              </p>
            </div>

            <p className="text-base md:text-lg text-slate-600 leading-[1.8]">
              We witnessed something obvious but overlooked: the business digital divide is very much alive. As everyone else was selling “packages,” we noticed geniuses having trouble with
              <span className="text-slate-900 font-medium italic"> Amazon SEO</span> and startups wandering around the 
              <span className="text-slate-900 font-medium italic"> MERN stack</span>.
            </p>

            <div className="bg-purple-50/50 border-l-4 border-purple-600 p-6 md:p-8 rounded-r-2xl">
              <p className="text-slate-800 italic text-base md:text-lg leading-relaxed">
                "Our story doesn’t have anything to do with fast growth. It’s all about those sleepless nights working on a Shopify bug and the “Eureka” moments that make a difference in our partners' lives."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-purple-300"></div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">The Mission</span>
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-600 leading-[1.8]">
              Rather than joining another pack, we decided to follow a different track. We decided to become Partners in your growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="relative py-24 bg-[#050505] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-24 md:gap-32">
            
            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Target size={14} /> Our Purpose
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1]">
                  Demystifying <span className="text-purple-500">Technology</span> for the Modern Enterprise.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 pt-2 md:pt-4">
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                  We do more than provide services; we engineer empowerment. By combining our top-of-the-line SEO expertise with Generative AI and full-stack development, we engineer scalable engines that convert technical challenges into profits.
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/50 to-transparent" />
              </div>
            </div>

            {/* Vision Section */}
            <div className="relative">
              <div className="relative bg-black border border-white/10 rounded-3xl p-6 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-purple-500 mb-4">The Vision</h3>
                    <p className="text-xl md:text-3xl font-medium text-white leading-snug">
                      Setting the global benchmark for <span className="italic text-gray-500">digital integrity</span> and AI-driven growth.
                    </p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                      Our dream for the future is that every enterprise, big or small, adopts "Expert Opinions" to grow from a regional company to a global empire through the use of advanced technologies.
                    </p>
                    <div className="flex gap-8">
                      <div>
                        <div className="text-2xl font-bold text-white">Global</div>
                        <div className="text-xs text-gray-500 uppercase">Scale</div>
                      </div>
                      <div className="w-[1px] bg-gray-800" />
                      <div>
                        <div className="text-2xl font-bold text-white">Ethical</div>
                        <div className="text-xs text-gray-500 uppercase">AI Integration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values (Clean cut tiles - hover scales completely removed) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-950">
              The Values We <span className="text-purple-600">Live By.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck size={28} />, title: "Strategic Integrity", desc: "We prioritize ROI over billables. No fluff, just results.", color: "text-indigo-600", bg: "bg-indigo-50" },
              { icon: <Lightbulb size={28} />, title: "Adaptive Tech", desc: "We stay at the bleeding edge of AI to keep you ahead.", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: <TrendingUp size={28} />, title: "Outcome Focused", desc: "Success is measured in growth, not just code.", color: "text-blue-600", bg: "bg-blue-50" }
            ].map((val, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50">
                <div className={`mb-6 w-14 h-14 rounded-2xl ${val.bg} ${val.color} flex items-center justify-center`}>
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 md:py-16 bg-white w-full">
        <Insights />
      </section>

      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 contain-intrinsic-size">
        <ContactForm />
      </div>

    </div>
  );
};

export default OurStory;