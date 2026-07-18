import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PORTFOLIOS = [
  {
    category: "Core Engineering & Product",
    items: [
      { name: "Enterprise Web Application Engineering", href: "/services/enterprise-web-application-engineering" },
      { name: "Cross-Platform Mobile Development", href: "/services/cross-platform-native-mobile-development" },
      { name: "Full-Cycle SaaS Product Engineering", href: "/services/full-cycle-saas-product-engineering" },
      { name: "Headless Commerce Architectures", href: "/services/headless-commerce-custom-ecommerce-architecture" }
    ]
  },
  {
    category: "AI & Automation",
    items: [
      { name: "Agentic AI & Workflow Orchestration", href: "/services/agentic-ai-autonomous-workflow-orchestration" },
      { name: "Custom LLM Fine-Tuning & RAG", href: "/services/custom-llm-fine-tuning-rag-frameworks" },
      { name: "Computer Vision & Spatial Analytics", href: "/services/computer-vision-spatial-analytics" },
      { name: "Predictive Data Science & Analytics", href: "/services/predictive-data-science-advanced-analytics" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Cloud Architecture & IaC", href: "/services/cloud-architecture-infrastructure-as-code" },
      { name: "Enterprise DevOps & CI/CD", href: "/services/enterprise-devops-cicd-orchestration" },
      { name: "Serverless Modernization", href: "/services/serverless-modernization-microservices" },
      { name: "High-Scale API Design & Integration", href: "/services/high-scale-api-design-integration-ecosystems" }
    ]
  },
  {
    category: "Cybersecurity & Web3",
    items: [
      { name: "VAPT & Infrastructure Audits", href: "/services/vapt" },
      { name: "Zero-Trust & Cryptographics", href: "/services/zero-trust-architecture-cryptographic-implementation" },
      { name: "Smart Contracts & Web3", href: "/services/smart-contracts-decentralized-protocols-web3" }
    ]
  },
  {
    category: "Design & Immersive",
    items: [
      { name: "Figma UI/UX Design Systems", href: "/services/figma-ui-ux-design-systems" },
      { name: "Spatial Computing AR/VR Apps", href: "/services/spatial-computing-spatial-app-development" },
      { name: "IoT Solutions Architecture", href: "/services/iot-solutions-architecture" }
    ]
  },
  {
    category: "Modern Growth & Marketing",
    items: [
      { name: "GEO & AEO AI Optimization", href: "/services/geo-aeo-generative-engine-optimization" },
      { name: "Growth Hacking Funnels", href: "/services/growth-hacking-programmatic-funnel-engineering" },
      { name: "Brand Strategy & Digital Identity", href: "/services/brand-strategy-digital-identity-systems" }
    ]
  }
];

const NAV = {
  about: [
    { name: 'Our Story', href: '/about/our-story' },
  ],
};

const SOCIAL = {
  instagram: 'https://www.instagram.com/inside.eo/',
  facebook: 'https://www.facebook.com/expertopinions.net',
  linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Expert%20Opinions&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A135095876&position=0',
};

/* ─── Icons ───────────────────────────────────────────────── */
const ChevronDown = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MenuIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const CloseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* ─── Desktop Mega-Menu Dropdown ──────────────────────────── */
const ServicesDropdown = ({ label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(null);

  const handleOpen = () => { clearTimeout(timerRef.current); setOpen(true); };
  const handleClose = () => { timerRef.current = setTimeout(() => setOpen(false), 120); };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div ref={ref} className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <button
        className={`header-nav-link group ${open ? 'active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(v => !v)}
      >
        {label}
        <ChevronDown className={`chevron ${open ? 'rotated' : ''}`} />
      </button>

      {open && (
        <div className="mega-menu" role="menu" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
          <div className="mega-menu-header">
            <p className="mega-menu-tag">What we do</p>
            <h3 className="mega-menu-title">Digital Solutions, End-to-End</h3>
          </div>
          <div className="mega-menu-grid">
            <div className="mega-menu-col flex flex-col gap-6">
              <div>
                <p className="col-label">{PORTFOLIOS[0].category}</p>
                {PORTFOLIOS[0].items.map(s => <ServiceItem key={s.name} item={s} onClose={() => setOpen(false)} />)}
              </div>
              <div>
                <p className="col-label">{PORTFOLIOS[3].category}</p>
                {PORTFOLIOS[3].items.map(s => <ServiceItem key={s.name} item={s} onClose={() => setOpen(false)} />)}
              </div>
            </div>

            <div className="mega-menu-col flex flex-col gap-6">
              <div>
                <p className="col-label">{PORTFOLIOS[1].category}</p>
                {PORTFOLIOS[1].items.map(s => <ServiceItem key={s.name} item={s} onClose={() => setOpen(false)} />)}
              </div>
              <div>
                <p className="col-label">{PORTFOLIOS[4].category}</p>
                {PORTFOLIOS[4].items.map(s => <ServiceItem key={s.name} item={s} onClose={() => setOpen(false)} />)}
              </div>
            </div>

            <div className="mega-menu-col flex flex-col gap-6 justify-between">
              <div>
                <p className="col-label">{PORTFOLIOS[2].category}</p>
                {PORTFOLIOS[2].items.map(s => <ServiceItem key={s.name} item={s} onClose={() => setOpen(false)} />)}
              </div>
              <div>
                <p className="col-label">{PORTFOLIOS[5].category}</p>
                {PORTFOLIOS[5].items.map(s => <ServiceItem key={s.name} item={s} onClose={() => setOpen(false)} />)}
              </div>
              <div className="mega-cta mt-2">
                <p>Not sure where to start?</p>
                <Link to="/contact" className="mega-cta-link" onClick={() => setOpen(false)}>
                  Book a free consultation <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ServiceItem = ({ item, onClose }) => (
  <Link to={item.href} role="menuitem" className="service-item animate-fadeIn" onClick={onClose}>
    <span className="service-text">
      <span className="service-name">{item.name}</span>
    </span>
  </Link>
);

/* ─── Desktop Simple Dropdown ─────────────────────────────── */
const SimpleDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(null);

  const handleOpen = () => { clearTimeout(timerRef.current); setOpen(true); };
  const handleClose = () => { timerRef.current = setTimeout(() => setOpen(false), 120); };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div ref={ref} className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <button
        className={`header-nav-link group ${open ? 'active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(v => !v)}
      >
        {label}
        <ChevronDown className={`chevron ${open ? 'rotated' : ''}`} />
      </button>

      {open && (
        <div className="simple-menu" role="menu" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
          {items.map(item => (
            <Link key={item.name} to={item.href} role="menuitem" className="simple-item" onClick={() => setOpen(false)}>
              <span className="simple-item-name">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Mobile Accordion ────────────────────────────────────── */
const MobileSection = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-section">
      <button className="mobile-section-btn" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{label}</span>
        <ChevronDown className={`chevron ${open ? 'rotated' : ''}`} />
      </button>
      {open && <div className="mobile-section-body">{children}</div>}
    </div>
  );
};

/* ─── Main Header ─────────────────────────────────────────── */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation?.() ?? { pathname: '/' };

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => { closeMenu(); }, [location.pathname, closeMenu]);

  return (
    <>


      <style>{`
        /* ─── Fonts ─── */
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        /* ─── Tokens ─── */
        :root {
          --hdr-bg: #050508;
          --hdr-border: rgba(255,255,255,0.07);
          --hdr-border-scroll: rgba(139,92,246,0.18);
          --hdr-h: 68px;
          --accent: #8b5cf6;
          --accent-soft: rgba(139,92,246,0.12);
          --accent-glow: rgba(139,92,246,0.3);
          --text-primary: #f0eeff;
          --text-secondary: #9b99b8;
          --text-muted: #5f5d78;
          --surface: #0d0c14;
          --surface-hover: rgba(255,255,255,0.04);
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --radius-sm: 6px;
          --radius-md: 10px;
          --radius-lg: 16px;
          --ease: cubic-bezier(0.22, 0.68, 0, 1.2);
          --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ─── Header Shell ─── */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: var(--hdr-h);
          display: flex;
          align-items: center;
          background: var(--hdr-bg);
          border-bottom: 1px solid var(--hdr-border);
          transition: border-color 0.3s, box-shadow 0.3s;
          font-family: var(--font-body);
        }
        .site-header.scrolled {
          border-color: var(--hdr-border-scroll);
          box-shadow: 0 0 0 0, 0 8px 40px rgba(0,0,0,0.6);
        }
        .hdr-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* ─── Logo ─── */
        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          margin-right: 40px;
        }
        .logo-img { height: 36px; width: auto; object-fit: contain; display: block; }

        /* ─── Desktop Nav ─── */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2px;
          flex: 1;
        }
        @media (min-width: 1024px) { .desktop-nav { display: flex; } }

        .header-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 13px;
          border-radius: var(--radius-sm);
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .header-nav-link:hover,
        .header-nav-link.active { color: var(--text-primary); background: var(--surface-hover); }
        .header-nav-link.current { color: var(--accent); }

        .chevron {
          transition: transform 0.22s var(--ease-out), color 0.2s;
          color: var(--text-muted);
          flex-shrink: 0;
        }
        .chevron.rotated { transform: rotate(180deg); color: var(--accent); }

        /* ─── Mega-Menu ─── */
        .mega-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.08);
          padding: 24px;
          z-index: 200;
          animation: menuIn 0.18s var(--ease-out);
        }
        @keyframes menuIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .mega-menu-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mega-menu-tag {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent);
          margin: 0;
        }
        .mega-menu-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px 20px;
        }

        .col-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin: 0 0 6px 8px;
        }

        /* ─── Service Item ─── */
        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 10px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background 0.15s;
          cursor: pointer;
        }
        .service-item:hover { background: rgba(139,92,246,0.08); }
        .service-icon { font-size: 15px; flex-shrink: 0; margin-top: 1px; }
        .service-text { display: flex; flex-direction: column; gap: 1px; }
        .service-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.3;
        }
        .service-desc {
          font-size: 11.5px;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* ─── Mega CTA ─── */
        .mega-cta {
          margin-top: 14px;
          padding: 12px;
          background: rgba(139,92,246,0.07);
          border: 1px solid rgba(139,92,246,0.18);
          border-radius: var(--radius-md);
        }
        .mega-cta p {
          font-size: 11.5px;
          color: var(--text-secondary);
          margin: 0 0 5px;
        }
        .mega-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12.5px;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          transition: gap 0.15s;
        }
        .mega-cta-link:hover { gap: 8px; }

        /* ─── Simple Dropdown ─── */
        .simple-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          width: 220px;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-md);
          box-shadow: 0 16px 50px rgba(0,0,0,0.6);
          padding: 6px;
          z-index: 200;
          animation: simpleIn 0.15s var(--ease-out);
        }
        @keyframes simpleIn {
          from { opacity: 0; transform: translateY(-5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .simple-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 9px 11px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background 0.14s;
        }
        .simple-item:hover { background: var(--surface-hover); }
        .simple-item-name { font-size: 13.5px; font-weight: 500; color: var(--text-primary); }
        .simple-item-desc { font-size: 11.5px; color: var(--text-muted); }

        /* ─── Right Controls ─── */
        .hdr-right {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: auto;
          flex-shrink: 0;
        }

        .social-row {
          display: none;
          align-items: center;
          gap: 2px;
        }
        @media (min-width: 1024px) { .social-row { display: flex; } }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .social-btn:hover { color: var(--text-primary); background: var(--surface-hover); }

        /* ─── CTA Button ─── */
        .cta-btn {
          display: none;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          background: var(--accent);
          color: #fff;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) { .cta-btn { display: inline-flex; } }
        .cta-btn:hover {
          background: #7c3aed;
          box-shadow: 0 0 28px var(--accent-glow);
          transform: translateY(-1px);
        }
        .cta-btn:active { transform: translateY(0); }

        /* ─── Mobile Toggle (Left) ─── */
        .mobile-toggle-left {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255,255,255,0.1);
          background: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
          margin-right: 12px;
        }
        @media (min-width: 1024px) { .mobile-toggle-left { display: none; } }
        .mobile-toggle-left:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.2); background: var(--surface-hover); }

        /* ─── Mobile CTA (small, always visible) ─── */
        .mobile-cta-mini {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          background: var(--accent-soft);
          color: var(--accent);
          border: 1px solid rgba(139,92,246,0.3);
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
        }
        @media (min-width: 1024px) { .mobile-cta-mini { display: none; } }
        .mobile-cta-mini:hover { background: rgba(139,92,246,0.2); }

        /* ─── Overlay ─── */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 150;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          transition: opacity 0.28s;
        }
        .drawer-overlay.hidden { opacity: 0; pointer-events: none; }

        /* ─── Mobile Drawer ─── */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          z-index: 200;
          width: min(85vw, 320px);
          background: var(--hdr-bg);
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s var(--ease-out);
        }
        .mobile-drawer.closed { transform: translateX(-100%); }

        /* ─── Drawer Head ─── */
        .drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .drawer-logo { height: 30px; width: auto; }

        .drawer-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255,255,255,0.09);
          background: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
        }
        .drawer-close-btn:hover { color: var(--text-primary); }

        /* ─── Drawer Body ─── */
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 10px 0;
        }
        .drawer-body::-webkit-scrollbar { width: 0; }

        .drawer-link {
          display: block;
          padding: 11px 22px;
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
          border-radius: 0;
        }
        .drawer-link:hover { color: var(--text-primary); background: rgba(255,255,255,0.03); }

        /* ─── Mobile Accordion ─── */
        .mobile-section { border-bottom: 1px solid rgba(255,255,255,0.04); }
        .mobile-section-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 11px 22px;
          background: none;
          border: none;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          cursor: pointer;
          text-align: left;
          transition: color 0.15s;
        }
        .mobile-section-btn:hover { color: var(--text-primary); }

        .mobile-section-body {
          padding: 4px 0 10px 36px;
          border-left: 1px solid rgba(139,92,246,0.18);
          margin: 0 0 0 22px;
        }

        .mobile-service-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px 8px 0;
          font-size: 13px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .mobile-service-link:hover { color: var(--text-primary); }
        .mobile-service-icon { font-size: 14px; flex-shrink: 0; }

        /* ─── Drawer Footer ─── */
        .drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
          background: var(--hdr-bg);
        }
        .drawer-socials {
          display: flex;
          gap: 8px;
        }
        .drawer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex: 1;
          padding: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-size: 12px;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .drawer-social-btn:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.16); }

        .drawer-cta {
          display: block;
          width: 100%;
          text-align: center;
          padding: 13px;
          background: var(--accent);
          color: #fff;
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          border-radius: var(--radius-sm);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .drawer-cta:hover { background: #7c3aed; box-shadow: 0 0 24px var(--accent-glow); }

        /* ─── Divider strip in drawer ─── */
        .drawer-divider {
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-muted);
          padding: 14px 22px 4px;
        }
      `}</style>

      <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="hdr-inner">

          {/* Mobile Toggle (Left) */}
          <button
            className="mobile-toggle-left"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Logo */}
          <Link to="/" aria-label="Expert Opinions — Home" className="logo-link">
            <img
              src="https://res.cloudinary.com/dawp1fcci/image/upload/v1779164562/logo_1_mqrgws.webp"
              alt="Expert Opinions"
              className="logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link to="/" className="header-nav-link">Home</Link>
            <SimpleDropdown label="About" items={NAV.about} />
            <ServicesDropdown label="Services" />
            <Link to="/blog" className="header-nav-link">Blog</Link>
          </nav>

          {/* Right Controls */}
          <div className="hdr-right">
            <div className="social-row" aria-label="Follow us">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>

            <Link to="/contact" className="mobile-cta-mini">Get In Touch</Link>
            <Link to="/contact" className="cta-btn">
              Get In Touch <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </header>

      {/* Responsive Amazon SPN Banner Ribbon below Navigation Bar */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900/90 to-purple-950 border-b border-purple-500/30 py-1.5 px-4 text-center relative z-[90]">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-1.5 text-[9px] sm:text-[10px] md:text-xs font-sans text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shrink-0"></span>
          <span className="font-bold uppercase tracking-wider text-purple-200 shrink-0">Official Partner:</span>
          <span className="font-medium tracking-wide">Verified Amazon SPN Platform</span>
          <span className="text-white/25 shrink-0">|</span>
          <a
            href="https://sellercentral.amazon.com/tsba/provider-details/Account%20Management/a9ae60e9-9c17-438b-ae8f-500812fea693?ref_=sc_spn_blst_bdt-a9ae60e9&localeSelection=en_US&sellFrom=US&sellIn=US"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200 font-bold underline transition-colors inline-flex items-center gap-0.5 shrink-0"
          >
            Verify Listing
            <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`drawer-overlay${menuOpen ? '' : ' hidden'}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        className={`mobile-drawer${menuOpen ? '' : ' closed'}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal={menuOpen}
      >
        <div className="drawer-head">
          <Link to="/" onClick={closeMenu} aria-label="Home">
            <img
              src="https://res.cloudinary.com/dawp1fcci/image/upload/v1774695409/Expert_Opinion_Fevicon_sqwaxb.webp"
              alt="Expert Opinions"
              className="drawer-logo"
            />
          </Link>
          <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close menu">
            <CloseIcon size={16} />
          </button>
        </div>

        <nav className="drawer-body" aria-label="Mobile navigation">
          <Link to="/" onClick={closeMenu} className="drawer-link">Home</Link>

          <MobileSection label="About">
            {NAV.about.map(item => (
              <Link key={item.name} to={item.href} onClick={closeMenu} className="mobile-service-link">
                {item.name}
              </Link>
            ))}
          </MobileSection>

          {PORTFOLIOS.map(p => (
            <MobileSection key={p.category} label={p.category}>
              {p.items.map(s => (
                <Link key={s.name} to={s.href} onClick={closeMenu} className="mobile-service-link">
                  {s.name}
                </Link>
              ))}
            </MobileSection>
          ))}

          <Link to="/blog" onClick={closeMenu} className="drawer-link">Blog</Link>
        </nav>

        <div className="drawer-footer">
          <div className="drawer-socials">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="Facebook">
              <FacebookIcon size={14} />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="Instagram">
              <InstagramIcon size={14} />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="LinkedIn">
              <LinkedInIcon size={14} />
            </a>
          </div>
          <Link to="/contact" onClick={closeMenu} className="drawer-cta">
            Let's Talk Business →
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Header;