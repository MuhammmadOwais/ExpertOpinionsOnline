import React, { useEffect, useState } from 'react';
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

  // Optimized Hero & Section Images
  const heroImage = isMobile
    ? 'https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_65,w_600,c_scale/v1779162797/pexels-cowomen-1058097-2041637_vd0180_2_qrn8uq.webp'
    : 'https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_65,w_1440,c_scale/v1779162797/pexels-cowomen-1058097-2041637_vd0180_2_qrn8uq.webp';

  // Editorial Contextual Assets (Clean, high-end office/architecture photography equivalents)
  const phase1Image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
  const phase2Image = 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80';

  const domains = [
    { title: 'Artificial Intelligence', copy: 'Training custom ML models, deploying autonomous workflows, and architectural systems integration.' },
    { title: 'Full-Stack Engineering', copy: 'High-performance web architecture, enterprise systems, and custom native application ecosystems.' },
    { title: 'Cybersecurity Operations', copy: 'Rigorous vulnerability assessments, advanced authentication protocols, and secure infrastructure hardening.' },
    { title: 'Creative Design', copy: 'Minimalist, conversion-led user experience blueprints and bespoke interactive digital environments.' },
    { title: 'Elite eCommerce', copy: 'Data-driven marketplace positioning, strategic asset optimization, and scaling commercial revenue engines.' },
  ];

  return (
    <div className="bg-white font-poppins text-black w-full overflow-x-hidden antialiased">
      
      {/* 1. Hero Section - Minimalist Immersive Style */}
      <div className="relative min-h-[60vh] md:min-h-screen w-full flex items-center justify-start bg-black overflow-hidden px-6 sm:px-12 md:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Our Story Background"
            width={isMobile ? '600' : '1440'}
            height={isMobile ? '400' : '900'}
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-5xl py-12 md:py-20">
          <p className="text-purple-500 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4 md:mb-6">
            Scale Your Business Digitally
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 md:mb-8 leading-[1.05]">
            Expert Solutions, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-500">
              for digital growth.
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mb-8 md:mb-12 leading-relaxed font-light">
            Unlock your brand's full potential with our bespoke digital strategies. We specialize in turning operational complexity into seamless long-term growth.
          </p>
          <div>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-none font-medium text-base tracking-wide transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Narrative Section */}
      <section className="w-full px-6 sm:px-12 md:px-24 py-12 md:py-36 bg-white">
        <div className="w-full">
          
          {/* Section Introduction */}
          <div className="mb-12 md:mb-24 max-w-4xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-700 block mb-3">
              Our Identity
            </span>
            <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-black leading-tight mb-4 md:mb-8">
              From global commerce engine rooms to a sovereign software house.
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-normal max-w-3xl">
              Every revolutionary venture begins with an architectural problem demanding an honest blueprint. Ours was the industry-wide deficit of transparency and raw technical precision in the digital services sector. Closing that gap became our foundational standard.
            </p>
          </div>

          {/* Phase 01 — Genesis */}
          <div className="grid lg:grid-cols-12 gap-6 md:gap-12 py-8 md:py-16 border-t border-black/10 items-center">
            <div className="lg:col-span-4 space-y-2 md:space-y-4">
              <span className="text-xs md:text-sm font-mono text-gray-400 block">01 / GENESIS</span>
              <h3 className="text-xl md:text-3xl font-bold text-black tracking-tight">
                A decade inside global commerce
              </h3>
              <div className="pt-2">
                <img 
                  src={phase1Image} 
                  alt="Global Commerce Operations" 
                  className="w-full h-48 md:h-64 object-cover grayscale border border-black/5" 
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Before Expert Opinions took form as a multi-disciplinary software house, our founding team spent over ten years operating within the global eCommerce landscape engineering, optimizing, and managing complex market operations from the ground up. We did not merely study the digital marketplace; we built within it.
              </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Along this path, we realized businesses were routinely falling short not from a lack of internal ambition, but from a clear absence of honest, deeply scientific technical leadership. Expert Opinions was engineered to override this paradigm with complete mathematical transparency.
              </p>
              <div className="pt-4 border-l-2 border-purple-700 pl-4 md:pl-6 my-4 md:my-8">
                <p className="text-base md:text-xl text-black font-medium italic leading-relaxed">
                  "Success in the digital world comes down to two clear rules: uncompromised integrity of data and logical foresight. Build a resilient technical baseline, and sustained market expansion scales naturally."
                </p>
                <span className="block mt-2 text-[10px] md:text-xs tracking-widest font-mono text-gray-400 uppercase">
                  — Maqsood Ahmad, Founder Expert Opinions
                </span>
              </div>
            </div>
          </div>

          {/* Phase 02 — Expansion */}
          <div className="grid lg:grid-cols-12 gap-6 md:gap-12 py-8 md:py-16 border-t border-black/10 items-center">
            <div className="lg:col-span-4 lg:order-last space-y-2 md:space-y-4">
              <span className="text-xs md:text-sm font-mono text-gray-400 block">02 / EXPANSION</span>
              <h3 className="text-xl md:text-3xl font-bold text-black tracking-tight">
                Breaking architectural boundaries
              </h3>
              <div className="pt-2">
                <img 
                  src={phase2Image} 
                  alt="Systems Engineering Infrastructure" 
                  className="w-full h-48 md:h-64 object-cover grayscale border border-black/5" 
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                As our operational footprint scaled internationally, our partners' operational mandates evolved. The requirements quickly shifted toward custom automated ecosystems, fault-tolerant legacy databases, secure cross-platform portals, and native product designs. Isolated third-party tools were no longer viable.
              </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                We made a targeted transition from a specialized consultancy into an integrated development ecosystem. We integrated elite computational talent systems architects, software engineers, and digital design purists establishing standalone units dedicated to machine intelligence, hardened security, and structural automation.
              </p>
              <div className="pt-4 border-l-2 border-purple-700 pl-4 md:pl-6 my-4 md:my-8">
                <p className="text-base md:text-xl text-black font-medium italic leading-relaxed">
                  "Software architectures should never be static tools layered onto an organization. They are the core engine of corporate reality. We do not just deploy code; we configure scalable operational futures."
                </p>
                <span className="block mt-2 text-[10px] md:text-xs tracking-widest font-mono text-gray-400 uppercase">
                  — Muhammad Owais,CTO Expert Opinions
                </span>
              </div>
            </div>
          </div>

          {/* Phase 03 — Today */}
          <div className="grid lg:grid-cols-12 gap-6 md:gap-12 py-8 md:py-16 border-t border-black/10">
            <div className="lg:col-span-4">
              <span className="text-xs md:text-sm font-mono text-gray-400 block mb-1 md:mb-2">03 / CURRENT CAPABILITIES</span>
              <h3 className="text-xl md:text-3xl font-bold text-black tracking-tight">
                The integrated software house
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-4 leading-relaxed">
                Today, Expert Opinions manages digital architecture for an international client portfolio across five corporate focus areas.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12">
                {domains.map((d, idx) => (
                  <div key={idx} className="border-t border-gray-100 pt-4 md:pt-6">
                    <h4 className="text-black font-bold text-base md:text-lg mb-2 tracking-tight">{d.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{d.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Creed Section */}
      <section className="w-full px-6 sm:px-12 md:px-24 py-16 md:py-32 bg-black text-white">
        <div className="w-full max-w-4xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-500 block mb-3">
            Our Creed
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4 md:mb-8">
            Engineering sustainable corporate legacies.
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed font-light mb-8 md:mb-12 max-w-2xl">
            No predictive guesswork. No artificial shortcuts. No compromised operational benchmarks. Partnering with Expert Opinions means acquiring an extended engineering infrastructure dedicated to transforming structural code into systemic corporate advantage.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base border-b-2 border-purple-500 pb-1 hover:text-purple-400 hover:border-purple-400 transition-all duration-200"
          >
            Initiate Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>


    </div>
  );
};

export default OurStory;