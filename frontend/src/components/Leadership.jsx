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
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783636713/ChatGPT_Image_Jul_9_2026_03_09_55_PM_o8dtsn.png",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
    bio: "A seasoned computer scientist leading our technical frontiers. He handles project scoping, budget allocation, timelines, and overall modern architecture with elite precision."
  },
];

// 2. Department Heads & Technical Leads (Text-Only Structural Layout)
const technicalLeads = [
  {
    name: "Hamza Faizan",
    role: "Head of eCommerce & Amazon SEO",
    linkedin: "https://www.linkedin.com/in/hamza-faizan-6a6b42336?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    bio: "Directs complete store development frameworks, custom A10 search engine scaling pipelines, and organic revenue scaling paths."
  },
  {
    name: "Abdul Hanan",
    role: "Head of Artificial Intelligence",
    linkedin: "#",
    bio: "Specializes in building complex AI automation pipelines, advanced machine learning architectures, and autonomous AI bots."
  },
  {
    name: "Zaid Amjad",
    role: "Senior Lead, Web & Mobile Apps",
    linkedin: "#",
    bio: "Oversights high-performance application architectures, state frameworks, and clean modular deployment patterns."
  },
  {
    name: "Waleed Sarfraz",
    role: "Head of UI/UX & Game Dev",
    bio: "Transforms complex logic paradigms into smooth user interfaces, structural visual asset guidelines, and interactive experiences."
  },
  {
    name: "Hamdan Aleem",
    role: "Senior Cybersecurity Engineer",
    linkedin: "#",
    bio: "Our technical guardian. Manages deep network penetration testing, critical vulnerability scanning, and secure container structures."
  },

];

/* ─── Premium Core Card ── */
const LeaderCard = ({ leader, index, isMobileView }) => {
  const finalSrc = getOptimizedPortraitUrl(leader.img, isMobileView);

  return (
    <div className="ldr-card">
      <div className="ldr-card__photo-wrap bg-gray-100">
        <img
          src={finalSrc}
          alt={leader.name}
          width="420"
          height="525"
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

      <div className="ldr-card__info bg-white">
        <p className="ldr-card__role">{leader.role}</p>
        <h3 className="ldr-card__name">{leader.name}</h3>
        <p className="ldr-card__bio">{leader.bio}</p>
      </div>
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
          <p className="ldr-desc">
            Our principal steering team targets global operational standards, guiding cross-functional technologies and high-tier client ecosystems across multiple continents.
          </p>
        </div>

        {/* Desktop Rendering Grid Framework */}
        <div className="ldr-grid" role="list">
          {coreLeaders.map((l, i) => (
            <div key={`desktop-ldr-${i}`} role="listitem">
              <LeaderCard leader={l} index={i} isMobileView={isMobile} />
            </div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <MobileSlider isMobileView={isMobile} />

        <hr className="ldr-divider" />

        {/* Section 2: Department Heads & Technical Leads */}
        <div className="tech-header">
          <div className="ldr-eyebrow-row">
            <span className="ldr-eyebrow-line" aria-hidden="true" />
            <span className="ldr-eyebrow">Technical Frontlines</span>
          </div>
          <h3 className="tech-heading">Department Heads & Tech Leads</h3>
        </div>

        <div className="tech-grid">
          {technicalLeads.map((lead, i) => (
            <div key={`tech-lead-${i}`} className="tech-card">
              <div className="tech-card__header">
                <div>
                  <h4 className="tech-card__name">{lead.name}</h4>
                  <p className="tech-card__role">{lead.role}</p>
                </div>
                {lead.linkedin !== '#' && (
                  <a
                    href={lead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-card__link"
                    aria-label={`${lead.name} LinkedIn Profile`}
                  >
                    <FaLinkedin size={15} />
                  </a>
                )}
              </div>
              <p className="tech-card__bio">{lead.bio}</p>
            </div>
          ))}
        </div>

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