import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Cloudinary URL Optimization pipeline specifically scaled for leadership portrait dimensions
const getOptimizedPortraitUrl = (url, isMobile = false) => {
  if (isMobile) {
    return url.replace('/upload/', '/upload/f_auto,q_65,w_340,c_scale/');
  }
  return url.replace('/upload/', '/upload/f_auto,q_75,w_420,c_scale/');
};

// 1. Executive Leadership Team (With Pictures)
const coreLeaders = [
  {
    name: "Maqsood Ahmad",
    role: "Founder & Managing Director",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/WhatsApp_Image_2026-04-25_at_6.56.34_PM_mwk38u_aqvmfb.webp",
    linkedin: "https://www.linkedin.com/in/maqsood-ahmad-business-advisor/",
    bio: "The visionary behind Expert Opinions. With over 15 years of deep expertise in business development and the digital ecosystem, he drives the agency's global vision and strategic growth."
  },
  {
    name: "Abdur Rehman",
    role: "Chief Executive Officer (CEO) / COO",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783636196/ChatGPT_Image_Jul_9_2026_03_28_14_PM_z1mjqq.png",
    linkedin: "#",
    bio: "The operational backbone of the agency. He manages daily agency updates, client communications, and complex troubleshooting with relentless performance execution."
  },
  {
    name: "Ahsan Ali",
    role: "Head of Digital Marketing",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783636372/ahsanblackandwhite_pgqd6p.jpg",
    linkedin: "#",
    bio: "The strategic mind behind our market presence. He tracks shifting trends, builds high-converting campaigns, and designs the growth frameworks that help clients scale."
  },
  {
    name: "Muhammad Owais",
    role: "Chief Technology Officer & Project Director",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784153809/ChatGPT_Image_Jul_15_2026_03_08_48_PM_prsqlj.png",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
    bio: "He oversees technical projects, solves complex tech challenges, and ensures every solution is delivered with quality and innovation. He is also the Founder of AIVISTY, a media network agency."
  },
  {
    name: "Hamza Faizan",
    role: "Senior Amazon Account Manager",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784148155/Gemini_Generated_Image_h3em8dh3em8dh3em_cgqk3s.png",
    linkedin: "#",
    bio: "Directs complete store management frameworks, custom A10 search engine scaling pipelines, and organic revenue scaling paths. All active e-commerce client accounts are managed by him."
  },
  {
    name: "Hamza Nisar",
    role: "Senior Amazon Account Builder",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1784148154/Gemini_Generated_Image_g628zjg628zjg628_x0bch6.png",
    linkedin: "#",
    bio: "Responsible for building e-commerce stores from zero to high/advanced levels. Specializes in store setup, inventory planning, and strategic inventory management."
  },
];



/* ─── Premium Core Card ── */
const LeaderCard = ({ leader, index, isMobileView }) => {
  const finalSrc = getOptimizedPortraitUrl(leader.img, isMobileView);

  return (
    <div className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md hover:shadow-2xl hover:border-purple-500/40 transition-all duration-500 select-none">

      {/* Portrait Image */}
      <img
        src={finalSrc}
        alt={leader.name}
        width="420"
        height="525"
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />

      {/* Floating Card Top - Number and LinkedIn */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <span className="text-[10px] font-black text-white/50 tracking-wider font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
        {leader.linkedin !== '#' && (
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white flex items-center justify-center transition-all duration-300 transform scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100 cursor-pointer"
            aria-label={`${leader.name} on LinkedIn`}
          >
            <FaLinkedin size={14} />
          </a>
        )}
      </div>

      {/* Text Info Section (Overlayed at Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col justify-end transition-all duration-300">
        {/* Role Tag */}
        <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1.5 block">
          {leader.role}
        </span>

        {/* Leader Name */}
        <h3 className="text-base md:text-lg font-black text-white leading-tight mb-2">
          {leader.name}
        </h3>

        {/* Bio description - Slides up and fades in on desktop hover, always shown on mobile slider */}
        <p className={`text-[11px] md:text-[12px] text-slate-300 leading-relaxed transition-all duration-300 transform-gpu
          ${isMobileView
            ? 'opacity-100 max-h-[80px]'
            : 'opacity-0 max-h-0 -translate-y-2 group-hover:opacity-100 group-hover:max-h-[120px] group-hover:translate-y-0'
          } overflow-hidden`}
        >
          {leader.bio}
        </p>
      </div>

      {/* Subtle Purple Accent Glow Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
    </div>
  );
};

/* ─── Mobile Slider for Core Four ── */
const MobileSlider = ({ isMobileView }) => {
  const [idx, setIdx] = useState(0);

  const go = (step) => {
    setIdx((p) => (p + step + coreLeaders.length) % coreLeaders.length);
  };

  return (
    <div className="ldr-mobile">
      <div className="ldr-mobile__stage overflow-hidden rounded-2xl">
        <div className="ldr-mobile__card">
          <LeaderCard leader={coreLeaders[idx]} index={idx} isMobileView={isMobileView} />
        </div>
      </div>

      <div className="ldr-mobile__controls mt-4">
        <button onClick={() => go(-1)} className="ldr-nav-btn" aria-label="Previous leader">
          <FaArrowLeft size={12} />
        </button>
        <div className="ldr-mobile__dots" role="tablist" aria-label="Leader indicators">
          {coreLeaders.map((_, i) => (
            <button
              key={`dot-${i}`}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Go to teammate slide ${i + 1}`}
              className={`ldr-dot${i === idx ? ' ldr-dot--active' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
        <button onClick={() => go(1)} className="ldr-nav-btn" aria-label="Next leader">
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

/* ─── Main Advanced Leadership Section ── */
const Leadership = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextDesktop = () => {
    if (startIndex < coreLeaders.length - 4) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prevDesktop = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <section className="ldr-section font-poppins relative overflow-hidden" aria-labelledby="ldr-heading">
      <div className="ldr-orb ldr-orb--1" aria-hidden="true" />
      <div className="ldr-orb ldr-orb--2" aria-hidden="true" />

      <div className="ldr-container">

        {/* Section 1: Executive Core Four */}
        <div className="ldr-header">
          <div className="ldr-header__left">
            <div className="ldr-eyebrow-row">
              <span className="ldr-eyebrow-line" aria-hidden="true" />
              <span className="ldr-eyebrow">Executive Leadership</span>
            </div>
            <h2 id="ldr-heading" className="ldr-heading">
              The Core Minds Driving<br />
              <span className="ldr-heading__accent">Elite Innovation</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <p className="ldr-desc">
              Our principal steering team targets global operational standards, guiding cross-functional technologies and high-tier client ecosystems across multiple continents.
            </p>
            {/* Desktop Navigation Controls */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0 self-end">
              <button
                onClick={prevDesktop}
                disabled={startIndex === 0}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${startIndex === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer shadow-sm'
                  }`}
                aria-label="Previous Leaders"
              >
                <FaArrowLeft size={13} />
              </button>
              <button
                onClick={nextDesktop}
                disabled={startIndex >= coreLeaders.length - 4}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${startIndex >= coreLeaders.length - 4
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer shadow-sm'
                  }`}
                aria-label="Next Leaders"
              >
                <FaArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Rendering Grid Framework (With Slider) */}
        <div className="hidden md:block w-full overflow-hidden py-2" role="list">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${startIndex * 25}% - ${startIndex * 5}px))`,
            }}
          >
            {coreLeaders.map((l, i) => (
              <div
                key={`desktop-ldr-${i}`}
                role="listitem"
                className="w-[calc(25%-15px)] shrink-0 transition-all duration-300"
              >
                <LeaderCard leader={l} index={i} isMobileView={isMobile} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View Slider */}
        <MobileSlider isMobileView={isMobile} />



      </div>

      <style>{`
        .ldr-section{position:relative;background:#fafafa;padding:5rem 0;overflow:hidden;}
        .ldr-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);}
        .ldr-orb--1{width:380px;height:380px;top:-80px;right:-60px;background:rgba(124,58,237,.06);}
        .ldr-orb--2{width:280px;height:280px;bottom:-40px;left:-40px;background:rgba(109,40,217,.04);}
        .ldr-container{max-width:1200px;margin:0 auto;padding:0 1.25rem;}
        @media(min-width:640px){.ldr-container{padding:0 1.75rem}}
        @media(min-width:1024px){.ldr-container{padding:0 2.5rem}}
        
        .ldr-header{display:flex;flex-direction:column;gap:1.25rem;margin-bottom:2.5rem;}
        @media(min-width:768px){.ldr-header{flex-direction:row;align-items:flex-end;justify-content:space-between;gap:2rem}}
        .ldr-eyebrow-row{display:flex;align-items:center;gap:.6rem;margin-bottom:.4rem;}
        .ldr-eyebrow-line{display:inline-block;width:24px;height:2px;background:#7c3aed;flex-shrink:0;}
        .ldr-eyebrow{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#7c3aed;}
        .ldr-heading{font-size:clamp(1.65rem,3.5vw,2.4rem);font-weight:800;color:#0f0f0f;line-height:1.2;margin:0;}
        .ldr-heading__accent{color:#7c3aed;}
        .ldr-desc{font-size:.85rem;color:#6b7280;line-height:1.7;margin:0;max-width:440px;border-left:2px solid #ede9fe;padding-left:1rem;flex-shrink:0;}
        
        .ldr-grid{display:none;grid-template-columns:repeat(4,1fr);gap:1.25rem;}
        @media(min-width:768px){.ldr-grid{display:grid;grid-template-columns:repeat(2,1fr);}}
        @media(min-width:1024px){.ldr-grid{grid-template-columns:repeat(4,1fr)}}
        
        .ldr-card{display:flex;flex-direction:column;border-radius:.9rem;overflow:hidden;background:#fff;border:1px solid rgba(124,58,237,.06);box-shadow:0 4px 20px rgba(0,0,0,0.015);}
        .ldr-card__photo-wrap{position:relative;width:100%;aspect-ratio:4/5;overflow:hidden;background:#f3f4f6;}
        .ldr-card__photo{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}
        .ldr-card__overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(15,15,25,.65) 0%,rgba(15,15,25,.05) 40%,transparent 100%);pointer-events:none;}
        .ldr-card__linkedin{position:absolute;top:.75rem;right:.75rem;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.25);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.2);z-index:3;transition:background .2s;}
        .ldr-card__linkedin:hover{background:#7c3aed;}
        .ldr-card__num{position:absolute;top:.75rem;left:.85rem;font-size:.65rem;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.05em;}
        .ldr-card__info{padding:1rem;display:flex;flex-direction:column;flex-grow:1;}
        .ldr-card__role{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#7c3aed;margin:0 0 .25rem;}
        .ldr-card__name{font-size:.95rem;font-weight:700;color:#111827;margin:0 0 .4rem;line-height:1.2;}
        .ldr-card__bio{font-size:.78rem;color:#6b7280;line-height:1.5;margin:0;}
        
        .ldr-mobile{display:flex;flex-direction:column;gap:1.25rem;}
        @media(min-width:768px){.ldr-mobile{display:none}}
        .ldr-mobile__stage{position:relative;}
        .ldr-mobile__controls{display:flex;align-items:center;justify-content:center;gap:1rem;}
        .ldr-nav-btn{width:38px;height:38px;border-radius:50%;border:1.5px solid #ede9fe;background:#fff;display:flex;align-items:center;justify-content:center;color:#7c3aed;cursor:pointer;transition:background .2s;}
        .ldr-nav-btn:hover{background:#7c3aed;color:#fff;border-color:#7c3aed;}
        .ldr-mobile__dots{display:flex;align-items:center;gap:.4rem;}
        .ldr-dot{width:6px;height:6px;border-radius:50%;border:none;background:#d8b4fe;cursor:pointer;padding:0;}
        .ldr-dot--active{background:#7c3aed;}

        .ldr-divider{border:none;height:1px;background:#e5e7eb;margin:4rem 0 3.5rem 0;}

        /* Tech Leads Specific Custom Layout Styles */
        .tech-header{margin-bottom:1.75rem;}
        .tech-heading{font-size:1.35rem;font-weight:800;color:#111827;margin:0;}
        .tech-grid{display:grid;grid-template-columns:1fr;gap:1rem;}
        @media(min-width:640px){.tech-grid{grid-template-columns:repeat(2,1fr);}}
        @media(min-width:1024px){.tech-grid{grid-template-columns:repeat(3,1fr);}}
        
        .tech-card{background:#fff;border:1px solid #f0edf7;border-radius:.75rem;padding:1.15rem;box-shadow:0 2px 12px rgba(0,0,0,0.01);display:flex;flex-direction:column;justify-content:space-between;}
        .tech-card__header{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;margin-bottom:.5rem;}
        .tech-card__name{font-size:.9rem;font-weight:700;color:#1f2937;margin:0;}
        .tech-card__role{font-size:.72rem;font-weight:600;color:#7c3aed;margin:0;}
        .tech-card__link{color:#9ca3af;transition:color .2s;padding-top:2px;}
        .tech-card__link:hover{color:#7c3aed;}
        .tech-card__bio{font-size:.78rem;color:#6b7280;line-height:1.5;margin:0;}
      `}</style>
    </section>
  );
};

export default Leadership;