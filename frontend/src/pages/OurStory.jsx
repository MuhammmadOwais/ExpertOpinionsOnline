import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Quote, ShieldCheck, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm'; 
import Insights from '../components/Insights';

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 }
  };

  return (
    <div className="bg-white font-poppins text-gray-900 overflow-x-hidden">
      
      {/* 1. Hero Section - Purple Glassmorphism Style */}
<div className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden px-4 py-24">
      
      {/* 1. Background Image Layer (Full Screen & Parallax effect hint) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774954768/pexels-cowomen-1058097-2041637_vd0180.jpg" 
          alt="Our Story Background" 
          className="w-full h-full object-cover scale-105" // Slightly scaled for potential parallax later
        />
      </div>
      
      {/* 2. Professional Gradient Overlay (radial for focus) */}
      {/* This makes corners dark and center clearer */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/60 via-black/85 to-gray-950/95"></div>
      
      {/* 3. Subtle Animated Background Element */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] z-10 animate-pulse"></div>

      {/* 4. Content Container (Centered with refined Glassmorphism) */}
      <div className="relative z-20 text-center w-full max-w-5xl bg-white/[0.01] backdrop-blur-[6px] p-8 sm:p-12 md:p-20 rounded-[2.5rem] border border-white/5 shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)]">
        
        {/* Small Eyebrow Text (Optional but professional) */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4"
        >
          Scale Your Business Digitally
        </motion.p>
        
        {/* Main Heading (Expert Solutions...) */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-[1.1]"
        >
          Expert Solutions, <br />
          <span className="relative inline-block text-white">
            <span className="relative z-10">for digital growth.</span>
            {/* Elegant Gradient Underline Highlight */}
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-[1px] opacity-80"></span>
            {/* Text Glow */}
            <span className="absolute inset-0 text-purple-500 blur-md opacity-40 z-0">for digital growth.</span>
          </span>
        </motion.h1>

        {/* Description Text (Newly Added for depth) */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Unlock your brand's full potential with our bespoke digital strategies. We specialize in turning complexity into seamless growth.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="/contact" className="inline-block relative group">
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
            
            <span className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-bold text-lg hover:from-purple-500 hover:to-indigo-500 transition-all shadow-2xl shadow-purple-900/40 transform hover:scale-105 active:scale-95">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>

      </div>
    </div>
{/* 2. The Narrative - Professional Version */}
<section className="py-24 md:py-40 px-6 max-w-7xl mx-auto bg-white overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
    
    {/* Left Side: Sticky Header Area */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-5 lg:sticky lg:top-32 h-fit"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[2px] w-12 bg-purple-600"></span>
        <h2 className="text-xs font-bold tracking-[0.3em] text-purple-600 uppercase">
          Our Origin Story
        </h2>
      </div>
      
      <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
        From a <span className="text-purple-600">Laptop</span> to a Digital Powerhouse.
      </h3>

    </motion.div>

    {/* Right Side: Narrative Content */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:col-span-7 space-y-10"
    >
      <div className="relative">
        {/* Subtle decorative quote mark */}
        <span className="absolute -top-10 -left-6 text-[120px] text-slate-50 font-serif leading-none select-none -z-10">“</span>
        
        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-normal">
          Let’s face it. <span className="text-slate-900 font-semibold underline decoration-purple-500/30 decoration-4 underline-offset-4">Expert Opinions</span> was not created in an innovative tech incubator. 
        </p>
      </div>

      <p className="text-lg text-slate-600 leading-[1.8]">
We witnessed something obvious but overlooked: the business digital divide is very much alive. As everyone else was selling “packages,” we noticed geniuses having trouble with
        <span className="text-slate-900 font-medium italic"> Amazon SEO</span> and startups wandering around the 
        <span className="text-slate-900 font-medium italic"> MERN stack</span>.
      </p>

      <div className="bg-purple-50/50 border-l-4 border-purple-600 p-8 rounded-r-2xl shadow-sm">
        <p className="text-slate-800 italic text-lg md:text-xl leading-relaxed">
"Our story doesn’t have anything to do with fast growth. It’s all about those sleepless nights working on a Shopify bug and the “Eureka” moments that make a difference in our partners' lives."        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-px w-8 bg-purple-300"></div>
          <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">The Mission</span>
        </div>
      </div>

      <p className="text-lg text-slate-600 leading-[1.8]">
Rather than joining another pack, we decided to follow a different track. We decided to becomePartners in your growth journey.
      </p>
    </motion.div>
  </div>
</section>

      {/* 3. Mission & Vision */}
<section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Abstract Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* Mission Section - Editorial Style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Target size={14} /> Our Purpose
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                Demystifying <span className="text-purple-500">Technology</span> for the Modern Enterprise.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 pt-4">
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
We do more than provide services; we engineer empowerment. By combining our top-of-the-line SEO expertise with Generative AI and full-stack development, we engineer scalable engines that convert technical challenges into profits.              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>
          </div>

          {/* Vision Section - Dark Glassmorphism Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 rounded-3xl p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-purple-500 mb-4">The Vision</h3>
                  <p className="text-2xl md:text-4xl font-medium text-white leading-snug">
                    Setting the global benchmark for <span className="italic text-gray-500">digital integrity</span> and AI-driven growth.
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
Our dream for the future is that every enterprise, big or small, adopts "Expert Opinions" to grow from a regional company to a global empire through the use of advanced technologies.                  </p>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-3xl font-bold text-white">Global</div>
                      <div className="text-sm text-gray-500 uppercase">Scale</div>
                    </div>
                    <div className="w-[1px] bg-gray-800" />
                    <div>
                      <div className="text-3xl font-bold text-white">Ethical</div>
                      <div className="text-sm text-gray-500 uppercase">AI Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



      {/* 4. Core Values */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black text-slate-950">
        The Values We <span className="text-purple-600">Live By.</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: <ShieldCheck size={32} />, title: "Strategic Integrity", desc: "We prioritize ROI over billables. No fluff, just results.", color: "text-indigo-600", bg: "bg-indigo-50" },
        { icon: <Lightbulb size={32} />, title: "Adaptive Tech", desc: "We stay at the bleeding edge of AI to keep you ahead.", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: <TrendingUp size={32} />, title: "Outcome Focused", desc: "Success is measured in growth, not just code.", color: "text-blue-600", bg: "bg-blue-50" }
      ].map((val, i) => (
        <div key={i} className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
          <div className={`mb-8 w-16 h-16 rounded-2xl ${val.bg} ${val.color} flex items-center justify-center`}>
            {val.icon}
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4">{val.title}</h4>
          <p className="text-slate-500 leading-relaxed">{val.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Insights Section */}
      <section className="py-16 md:py-20 bg-white w-full">
        <Insights />
 
      </section>
      {/* 5. Final CTA */}


      <div className="max-w-5xl mx-auto px-6 py-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default OurStory;