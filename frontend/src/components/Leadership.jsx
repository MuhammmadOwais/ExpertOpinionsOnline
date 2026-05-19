import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Cloudinary URL Optimization pipeline specifically scaled for leadership portrait dimensions
const getOptimizedPortraitUrl = (url, isMobile = false) => {
  if (isMobile) {
    return url.replace('/upload/', '/upload/f_auto,q_65,w_340,c_scale/');
  }
  return url.replace('/upload/', '/upload/f_auto,q_75,w_420,c_scale/');
};

const leaders = [
  {
    name: "Maqsood Ahmed",
    role: "Founder & Head of E-Commerce",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/WhatsApp_Image_2026-04-25_at_6.56.34_PM_mwk38u_aqvmfb.webp",
    linkedin: "https://www.linkedin.com/in/maqsood-ahmad-business-advisor/",
  },
  {
    name: "Abdur Rehman",
    role: "CEO & Head of SEO",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/Gemini_Generated_Image_ofddeoofddeoofdd_m9xzll_1_1_nbwycr.webp",
    linkedin: "#",
  },
  {
    name: "Ahsan Ali",
    role: "Head of Digital Marketing",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/WhatsApp_Image_2026-04-24_at_2.22.39_PM_tmsxbi_bwhy5g.webp",
    linkedin: "#",
  },
  {
    name: "Muhammad Owais",
    role: "Head of Development & Management",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/retouch_2026042503474735.jpg_qjn2k4_1_1_m4vdad.webp",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
  },
];

/* ─── Card Component (Hover & Framer Motion Completely Removed) ── */
const LeaderCard = ({ leader, index, isMobileView }) => {
  const finalSrc = getOptimizedPortraitUrl(leader.img, isMobileView);

  return (
    <div className="ldr-card">
      {/* Photo Wrapper */}
      <div className="ldr-card__photo-wrap bg-gray-100">
        <img
          src={finalSrc}
          alt={leader.name}
          width="420"
          height="525"
          // Eager loading first image for instant paint, lazy for the rest
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="ldr-card__photo"
        />
        <div className="ldr-card__overlay" aria-hidden="true" />
        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="ldr-card__linkedin"
          aria-label={`${leader.name} on LinkedIn`}
          onClick={(e) => leader.linkedin === '#' && e.preventDefault()}
        >
          <FaLinkedin size={16} />
        </a>
        <span className="ldr-card__num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Info Blocks */}
      <div className="ldr-card__info bg-white">
        <p className="ldr-card__role">{leader.role}</p>
        <h3 className="ldr-card__name">{leader.name}</h3>
      </div>
    </div>
  );
};

/* ─── Mobile Slider ── */
const MobileSlider = ({ isMobileView }) => {
  const [idx, setIdx] = useState(0);

  const go = (step) => {
    setIdx((p) => (p + step + leaders.length) % leaders.length);
  };

  return (
    <div className="ldr-mobile">
      <div className="ldr-mobile__stage overflow-hidden rounded-2xl">
        <div className="ldr-mobile__card">
          <LeaderCard leader={leaders[idx]} index={idx} isMobileView={isMobileView} />
        </div>
      </div>

      {/* Slider Controls Navigation */}
      <div className="ldr-mobile__controls mt-4">
        <button onClick={() => go(-1)} className="ldr-nav-btn" aria-label="Previous leader">
          <FaArrowLeft size={12} />
        </button>
        <div className="ldr-mobile__dots" role="tablist" aria-label="Leader indicators">
          {leaders.map((_, i) => (
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

/* ─── Main Leadership Section ── */
const Leadership = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="ldr-section font-poppins relative overflow-hidden" aria-labelledby="ldr-heading">
      {/* Background static vector placeholders (Animations removed for fast rendering) */}
      <div className="ldr-orb ldr-orb--1" aria-hidden="true" />
      <div className="ldr-orb ldr-orb--2" aria-hidden="true" />

      <div className="ldr-container">
        {/* Header Block */}
        <div className="ldr-header">
          <div className="ldr-header__left">
            <div className="ldr-eyebrow-row">
              <span className="ldr-eyebrow-line" aria-hidden="true" />
              <span className="ldr-eyebrow">Executive Leadership</span>
            </div>
            <h2 id="ldr-heading" className="ldr-heading">
              The Minds Driving<br />
              <span className="ldr-heading__accent">Global Impact</span>
            </h2>
          </div>
          <p className="ldr-desc">
            Our leadership brings decades of combined expertise across e-commerce, SEO, digital marketing,
            and full-stack development — steering world-class solutions for clients across four continents.
          </p>
        </div>

        {/* Desktop Rendering Grid Framework */}
        <div className="ldr-grid" role="list">
          {leaders.map((l, i) => (
            <div key={`desktop-ldr-${i}`} role="listitem">
              <LeaderCard leader={l} index={i} isMobileView={isMobile} />
            </div>
          ))}
        </div>

        {/* Mobile Dynamic Optimized Rails */}
        <MobileSlider isMobileView={isMobile} />
      </div>

      <style>{`
        .ldr-section{position:relative;background:#fafafa;padding:4rem 0 5rem;overflow:hidden;}
        .ldr-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);}
        .ldr-orb--1{width:380px;height:380px;top:-80px;right:-60px;background:rgba(124,58,237,.06);}
        .ldr-orb--2{width:280px;height:280px;bottom:-40px;left:-40px;background:rgba(109,40,217,.04);}
        .ldr-container{max-width:1200px;margin:0 auto;padding:0 1.25rem;}
        @media(min-width:640px){.ldr-container{padding:0 1.75rem}}
        @media(min-width:1024px){.ldr-container{padding:0 2.5rem}}
        .ldr-header{display:flex;flex-direction:column;gap:1.25rem;margin-bottom:2.5rem;}
        @media(min-width:768px){.ldr-header{flex-direction:row;align-items:flex-end;justify-content:space-between;gap:2rem}}
        .ldr-eyebrow-row{display:flex;align-items:center;gap:.6rem;margin-bottom:.6rem;}
        .ldr-eyebrow-line{display:inline-block;width:32px;height:2px;background:#7c3aed;flex-shrink:0;}
        .ldr-eyebrow{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#7c3aed;}
        .ldr-heading{font-size:clamp(1.65rem,3.5vw,2.6rem);font-weight:800;color:#0f0f0f;line-height:1.18;margin:0;}
        .ldr-heading__accent{color:#7c3aed;}
        .ldr-desc{font-size:.875rem;color:#6b7280;line-height:1.75;margin:0;max-width:420px;border-left:2px solid #ede9fe;padding-left:1rem;flex-shrink:0;}
        @media(min-width:768px){.ldr-desc{align-self:flex-end}}
        .ldr-grid{display:none;grid-template-columns:repeat(4,1fr);gap:1.25rem;}
        @media(min-width:768px){.ldr-grid{display:grid;grid-template-columns:repeat(2,1fr);}}
        @media(min-width:1024px){.ldr-grid{grid-template-columns:repeat(4,1fr)}}
        
        /* FIXED: Hover animations and scale shifts removed to completely prevent frame drops and repaints */
        .ldr-card{display:flex;flex-direction:column;gap:0;border-radius:.9rem;overflow:hidden;background:#fff;border:1px solid rgba(124,58,237,.08);box-shadow:0 4px 20px rgba(0,0,0,0.02);}
        .ldr-card__photo-wrap{position:relative;width:100%;aspect-ratio:4/5;overflow:hidden;background:#f3f4f6;}
        .ldr-card__photo{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}
        .ldr-card__overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,0,30,.8) 0%,rgba(10,0,30,.1) 50%,transparent 100%);pointer-events:none;}
        .ldr-card__linkedin{position:absolute;top:.75rem;right:.75rem;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.2);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.2.5);z-index:3;transition:background .2s;}
        .ldr-card__linkedin:hover{background:#7c3aed;}
        .ldr-card__num{position:absolute;top:.75rem;left:.85rem;font-size:.65rem;font-weight:700;color:rgba(255,255,255,.6);letter-spacing:.05em;}
        .ldr-card__info{padding:.85rem 1rem .9rem;}
        .ldr-card__role{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#7c3aed;margin:0 0 .2rem;}
        .ldr-card__name{font-size:.95rem;font-weight:700;color:#111827;margin:0;line-height:1.3;}
        
        .ldr-mobile{display:flex;flex-direction:column;gap:1.25rem;}
        @media(min-width:768px){.ldr-mobile{display:none}}
        .ldr-mobile__stage{position:relative;}
        .ldr-mobile__card{width:100%;}
        .ldr-mobile__controls{display:flex;align-items:center;justify-content:center;gap:1rem;}
        .ldr-nav-btn{width:40px;height:40px;border-radius:50%;border:1.5px solid #ede9fe;background:#fff;display:flex;align-items:center;justify-content:center;color:#7c3aed;cursor:pointer;transition:background .2s,border-color .2s,color .2s;}
        .ldr-nav-btn:hover{background:#7c3aed;border-color:#7c3aed;color:#fff;}
        .ldr-mobile__dots{display:flex;align-items:center;gap:.5rem;}
        .ldr-dot{width:6px;height:6px;border-radius:50%;border:none;background:#d8b4fe;cursor:pointer;padding:0;transition:background .2s;}
        .ldr-dot--active{background:#7c3aed;}
      `}</style>
    </section>
  );
};

export default Leadership;