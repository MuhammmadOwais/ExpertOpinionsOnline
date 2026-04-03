import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Quote } from 'lucide-react';
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
      <div className="relative min-h-[80vh] md:h-[75vh] flex items-center justify-center bg-gray-900 overflow-hidden px-4 py-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774954768/pexels-cowomen-1058097-2041637_vd0180.jpg" 
            alt="Our Story Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-gray-900"></div>
        
        {/* Responsive Glass Container */}
        <div className="relative z-10 text-center w-full max-w-5xl bg-black/40 backdrop-blur-md p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl">

          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 leading-tight"
          >
            Expert Solutions, <br className="sm:hidden" />
            <span className="text-purple-500 relative inline-block mt-2 sm:mt-0">
              for digital growth.
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-purple-600 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
            </span>
          </motion.h1>

          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
          >
            <a href="/contact" className="inline-block bg-purple-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-black text-base md:text-lg hover:bg-purple-500 transition-all shadow-xl shadow-purple-900/40 transform hover:scale-105 active:scale-95">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* 2. The Narrative */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          <motion.div {...fadeInLeft} className="md:col-span-4 md:sticky md:top-32">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 border-l-8 border-purple-600 pl-6 leading-tight">
              How it all <br className="hidden md:block" /> <span className="text-purple-600 font-light italic">actually</span> started.
            </h2>
            <div className="w-20 h-1 bg-purple-100 mt-6 ml-8 rounded-full hidden md:block"></div>
          </motion.div>
          
          <motion.div {...fadeInRight} className="md:col-span-8 space-y-6 md:space-y-8 text-gray-700 text-lg md:text-xl leading-relaxed">
            <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-black first-letter:text-purple-600 first-letter:mr-3 first-letter:float-left">
              Let’s be honest. **Expert Opinions Online** wasn’t born in a high-tech boardroom with a million-dollar investment. It was born with a laptop, a very uncomfortable chair, and the simple observation that the digital gap for businesses is very real.
            </p>
            
            <p>
              We watched brilliant entrepreneurs struggle with Amazon SEO, and brilliant startups get lost in the maze of the MERN stack. So, we stopped being just another agency and started being **partners**.
            </p>
            
            <div className="bg-purple-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-l-4 border-purple-600 shadow-sm italic text-gray-800 text-base md:text-lg">
              "Our story isn’t about rapid growth. It’s about the sleepless nights we spent fixing a client’s Shopify bug. Or the 'Aha!' moment when we finally figured out the tricky Google algorithm."
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50/80 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Mission Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-purple-50 relative group overflow-hidden"
          >
            <div className="absolute -top-2 -right-2 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
              <Quote size={24} className="md:w-8 md:h-8 transform -scale-x-100" />
            </div>

            <div className="flex items-center gap-4 md:gap-6 mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 text-purple-700 rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner">
                <Target size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">Our Mission</h3>
            </div>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-purple-200">
              To demystify technology for businesses. We don’t just deliver a service; we enable our clients to be empowered as business owners. Our mission is to deliver high-end SEO, AI, and development solutions that not only scale, make sense, and, more importantly, deliver profitability to our clients.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gray-950 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-white relative group overflow-hidden border border-white/5"
          >
            <div className="absolute -top-2 -right-2 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:-rotate-12">
              <Quote size={24} className="md:w-8 md:h-8 transform -scale-x-100" />
            </div>

            <div className="flex items-center gap-4 md:gap-6 mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-900/50 text-purple-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner border border-purple-800/50">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white">Our Vision</h3>
            </div>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-purple-900">
              Our vision is to set a benchmark for digital integrity on a global scale. We envision a world where every business, irrespective of their scale, has access to 'Expert Opinions' that can help them turn their local presence into a global legacy with the power of Generative AI and full-stack technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Latest <span className="text-purple-600">Insights</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">Stay updated with our latest thoughts and industry trends.</p>
        </div>
        <div className="w-full px-4 md:px-0">
          <Insights />
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.h2 
          {...fadeInLeft}
          className="text-3xl md:text-5xl font-black text-gray-950 mb-12 md:mb-16"
        >
          The Values We <span className="text-purple-600">Live By</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            { icon: <Heart className="text-red-500" />, title: "Radical Honesty", desc: "If a strategy won't work, we'll tell you upfront. We value your money.", delay: 0 },
            { icon: <Zap className="text-purple-500" />, title: "Relentless Innovation", desc: "From n8n to Generative AI, we stay at the bleeding edge.", delay: 0.1 },
            { icon: <Target className="text-purple-600" />, title: "Outcome Obsession", desc: "Code is just text if it doesn't bring results. We care about ROI.", delay: 0.2 }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: val.delay }}
              className="p-8 md:p-12 border border-gray-100 rounded-[2rem] hover:border-purple-200 hover:bg-purple-50/30 transition-all group shadow-sm"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform inline-block p-4 md:p-6 bg-gray-50 rounded-2xl md:rounded-3xl group-hover:bg-white shadow-inner">
                {val.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{val.title}</h4>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-purple-700 to-indigo-900 text-white relative overflow-hidden px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
            Ready to start your chapter with us?
          </h2>
          <p className="text-purple-100 text-lg md:text-xl mb-10 md:mb-12 opacity-90 max-w-2xl mx-auto font-light">
            Our story is still being written, and we’d love for your business to be the next highlight.
          </p>
          <a href="/contact" className="inline-block bg-white text-purple-700 px-10 md:px-16 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1">
            Let's Make History
          </a>
        </div>
        
        {/* Glows */}
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 blur-[80px] md:blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-purple-500/20 blur-[80px] md:blur-[100px] rounded-full"></div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default OurStory;