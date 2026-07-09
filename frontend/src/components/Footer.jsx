import React from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const SERVICES = [
  { name: 'Enterprise Web Apps', href: '/services/enterprise-web-application-engineering' },
  { name: 'Cross-Platform Mobile', href: '/services/cross-platform-native-mobile-development' },
  { name: 'SaaS Product Engineering', href: '/services/full-cycle-saas-product-engineering' },
  { name: 'Headless Commerce Solutions', href: '/services/headless-commerce-custom-ecommerce-architecture' },
  { name: 'Agentic AI & Workflows', href: '/services/agentic-ai-autonomous-workflow-orchestration' },
  { name: 'LLM Fine-Tuning & RAG', href: '/services/custom-llm-fine-tuning-rag-frameworks' },
  { name: 'Computer Vision Systems', href: '/services/computer-vision-spatial-analytics' },
  { name: 'Predictive Data Analytics', href: '/services/predictive-data-science-advanced-analytics' },
  { name: 'Cloud Architecture & IaC', href: '/services/cloud-architecture-infrastructure-as-code' },
  { name: 'Enterprise DevOps & CI/CD', href: '/services/enterprise-devops-cicd-orchestration' },
  { name: 'Serverless Modernization', href: '/services/serverless-modernization-microservices' },
  { name: 'High-Scale API Design', href: '/services/high-scale-api-design-integration-ecosystems' },
  { name: 'VAPT & Penetration Testing', href: '/services/vapt' },
  { name: 'Zero-Trust Architecture', href: '/services/zero-trust-architecture-cryptographic-implementation' },
  { name: 'Smart Contracts & Web3', href: '/services/smart-contracts-decentralized-protocols-web3' },
  { name: 'Figma UI/UX Design Systems', href: '/services/figma-ui-ux-design-systems' },
  { name: 'Spatial Computing AR/VR', href: '/services/spatial-computing-spatial-app-development' },
  { name: 'IoT Solutions Architecture', href: '/services/iot-solutions-architecture' },
  { name: 'GEO & AEO AI Optimization', href: '/services/geo-aeo-generative-engine-optimization' },
  { name: 'Growth Hacking Funnels', href: '/services/growth-hacking-programmatic-funnel-engineering' },
  { name: 'Brand Strategy & Identity', href: '/services/brand-strategy-digital-identity-systems' }
];

const COMPANY = [
  { name: 'Our Story', href: '/about/our-story' },
  { name: 'Our Team', href: '/about/our-team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const LEGAL = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

const CONTACT = [
  { label: 'Email', value: 'Support@expertopinions.net', href: 'mailto:Support@expertopinions.net' },
  { label: 'Phone', value: '+1 307 227 3735', href: 'tel:+13072273735' },
  { label: 'Address', value: '1908 Thomes Ave STE 12337, Cheyenne, WY 82001', href: 'https://maps.app.goo.gl/9q3tdhePSXAcKFVGA' },
];

const SOCIAL = {
  instagram: 'https://www.instagram.com/inside.eo/',
  facebook: 'https://www.facebook.com/profile.php?id=61553381223569',
  linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Expert%20Opinions&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A135095876&position=0',
};

/* ─── Icons ─── */
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.42 12 19.79 19.79 0 0 1 1.17 3.38 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const contactIconMap = { Email: <MailIcon />, Phone: <PhoneIcon />, Address: <PinIcon /> };

const Footer = () => (
  <>
    <style>{`
      /* FIXED: Performance-killing external @import URL call completely removed. 
         Fonts are now safely expected from main app configurations. 
      */
      :root {
        --ft-bg: #050508;
        --ft-surface: #0d0c14;
        --ft-border: rgba(255,255,255,0.06);
        --ft-accent: #8b5cf6;
        --ft-accent-soft: rgba(139,92,246,0.12);
        --ft-text: #f0eeff;
        --ft-muted: #6b6988;
        --ft-secondary: #9b99b8;
        --font-display: 'Syne', sans-serif;
        --font-body: 'DM Sans', sans-serif;
        --radius: 8px;
      }

      .site-footer {
        background: var(--ft-bg);
        border-top: 1px solid var(--ft-border);
        font-family: var(--font-body);
        color: var(--ft-secondary);
        position: relative;
        overflow: hidden;
      }

      .ft-glow {
        position: absolute;
        bottom: -80px;
        right: -80px;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
      }

      .ft-cta-strip {
        border-bottom: 1px solid var(--ft-border);
        padding: 32px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
      }
      .ft-cta-text {
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 700;
        color: var(--ft-text);
        margin: 0;
      }
      .ft-cta-text span { color: var(--ft-accent); }
      .ft-cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 11px 22px;
        background: var(--ft-accent);
        color: #fff;
        font-family: var(--font-display);
        font-size: 13px;
        font-weight: 700;
        border-radius: var(--radius);
        text-decoration: none;
        letter-spacing: 0.02em;
        transition: background 0.2s, box-shadow 0.2s;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .ft-cta-btn:hover { background: #7c3aed; box-shadow: 0 0 28px rgba(139,92,246,0.4); }

      .ft-main {
        max-width: 1280px;
        margin: 0 auto;
        padding: 44px 40px 36px;
        display: grid;
        grid-template-columns: 1.5fr 1.8fr 0.8fr 1.2fr;
        gap: 48px;
        position: relative;
        z-index: 1;
      }

      .ft-logo { height: 34px; width: 90px; display: block; margin-bottom: 14px; object-contain: scale-down; }
      .ft-tagline { font-size: 13px; color: var(--ft-muted); line-height: 1.65; margin: 0 0 20px; max-width: 240px; }

      .ft-contact-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
      .ft-contact-item a {
        display: flex;
        align-items: flex-start;
        gap: 9px;
        color: var(--ft-muted);
        text-decoration: none;
        font-size: 12.5px;
        line-height: 1.5;
        transition: color 0.2s;
      }
      .ft-contact-item a:hover { color: var(--ft-text); }
      .ft-contact-icon {
        flex-shrink: 0;
        margin-top: 2px;
        color: var(--ft-accent);
      }

      .ft-socials { display: flex; gap: 8px; margin-top: 18px; }
      .ft-social-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: var(--radius);
        border: 1px solid rgba(255,255,255,0.09);
        color: var(--ft-muted);
        text-decoration: none;
        transition: color 0.2s, border-color 0.2s, background 0.2s;
      }
      .ft-social-btn:hover { color: var(--ft-text); border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); }

      .ft-col-label {
        font-family: var(--font-display);
        font-size: 10.5px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--ft-muted);
        margin: 0 0 14px;
      }

      .ft-services-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px 16px;
      }
      .ft-link {
        display: block;
        font-size: 13px;
        color: var(--ft-muted);
        text-decoration: none;
        padding: 4px 0;
        transition: color 0.15s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ft-link:hover { color: var(--ft-text); }

      .ft-company-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }

      .ft-bottom {
        border-top: 1px solid var(--ft-border);
        padding: 18px 40px;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
      }
      .ft-copy { font-size: 12px; color: var(--ft-muted); margin: 0; }
      .ft-copy strong { color: var(--ft-accent); font-weight: 600; }
      .ft-legal { display: flex; gap: 20px; }
      .ft-legal a { font-size: 12px; color: var(--ft-muted); text-decoration: none; transition: color 0.15s; }
      .ft-legal a:hover { color: var(--ft-text); }

      .ft-group-row {
        display: contents;
      }

      @media (max-width: 900px) {
        .ft-cta-strip { padding: 24px 24px; }
        .ft-main {
          grid-template-columns: 1fr 1fr;
          padding: 36px 24px 28px;
          gap: 32px;
        }
        .ft-brand-col { grid-column: 1 / -1; }
        .ft-group-row {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 40px;
          width: 100%;
        }
        .ft-badge-col { display: block; width: auto; }
        .ft-bottom { padding: 16px 24px; }
      }

      @media (max-width: 560px) {
        .ft-cta-strip { flex-direction: column; align-items: flex-start; }
        .ft-main { grid-template-columns: 1fr; gap: 28px; }
        .ft-brand-col { grid-column: auto; }
        .ft-group-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 32px;
          width: 100%;
        }
        .ft-badge-col { display: block; width: auto; }
        .ft-services-grid { grid-template-columns: 1fr 1fr; }
        .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
      }
    `}</style>

    <footer className="site-footer" role="contentinfo">
      <div className="ft-glow" aria-hidden="true" />

      {/* ── Main Grid ── */}
      <div className="ft-main">

        {/* Brand + Contact */}
        <div className="ft-brand-col">
          <Link to="/" aria-label="Expert Opinions — Home">
            <img
              src="https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_180,c_scale/v1779164562/logo_1_mqrgws.webp"
              alt="Expert Opinions"

              // FIXED STRUCTURE: Native scaling hardcoded bounds prevent layout shift warnings
              width="100"
              height="34"
              loading="lazy"
              decoding="async"
              className="ft-logo"
            />
          </Link>
          <p className="ft-tagline">Your trusted partner for expert digital solutions.</p>

          <ul className="ft-contact-list">
            {CONTACT.map(item => (
              <li key={item.label} className="ft-contact-item">
                <a href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="ft-contact-icon">{contactIconMap[item.label]}</span>
                  <span>{item.value}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="ft-socials">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="ft-social-btn" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="ft-social-btn" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="ft-social-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Services — 2-col grid */}
        <div>
          <p className="ft-col-label">Services</p>
          <div className="ft-services-grid">
            {SERVICES.map(s => (
              <Link key={s.name} to={s.href} className="ft-link">{s.name}</Link>
            ))}
          </div>
        </div>

        {/* Company + SPN Badge Row (aligned side-by-side on mobile/tablet) */}
        <div className="ft-group-row">
          {/* Company */}
          <div>
            <p className="ft-col-label">Company</p>
            <ul className="ft-company-list">
              {COMPANY.map(c => (
                <li key={c.name}>
                  <Link to={c.href} className="ft-link">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Amazon SPN Partner Column */}
          <div className="ft-badge-col flex flex-col items-center md:items-end justify-start text-center md:text-right">
            <p className="hidden md:block ft-col-label">SPN Verified</p>
            <a
              href="https://sellercentral.amazon.com/tsba/provider-details/Account%20Management/a9ae60e9-9c17-438b-ae8f-500812fea693?ref_=sc_spn_blst_bdt-a9ae60e9&localeSelection=en_US&sellFrom=US&sellIn=US"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center md:items-end gap-3 p-0 md:p-5 rounded-2xl bg-transparent md:bg-white/[0.02] border-0 md:border md:border-purple-500/20 shadow-none md:shadow-[0_0_20px_rgba(139,92,246,0.03)] md:relative md:overflow-hidden group w-fit md:w-full max-w-[320px] md:max-w-[280px]"
            >
              {/* Background Accent Glow */}
              <div className="hidden md:block absolute -top-10 -right-10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl pointer-events-none group-hover:bg-purple-500/15 transition-colors"></div>

              <div className="bg-white py-2 px-4 rounded-xl border border-white/10 flex items-center justify-center shrink-0 shadow-md w-fit max-w-[220px] md:max-w-none mx-auto md:mr-0">
                <img
                  src="https://res.cloudinary.com/dawp1fcci/image/upload/v1783556410/ChatGPT_Image_Jul_8_2026_04_30_48_PM_lfcsrw.png"
                  alt="Official Amazon SPN Partner Badge"
                  className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="hidden md:flex flex-col text-center md:text-right w-full">
                <span className="text-[10px] text-purple-400 font-extrabold uppercase tracking-wider leading-none mb-1 flex items-center justify-center md:justify-end gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                  Official SPN Partner
                </span>
                <span className="text-xs font-bold text-white leading-tight">Amazon Service Provider Network</span>
              </div>

              <p className="hidden md:block text-[11px] text-gray-400 leading-normal m-0 text-center md:text-right w-full">
                Verified E-commerce growth, Amazon SEO, and store listing advisory specialists.
              </p>

              <span className="hidden md:flex mt-1 items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold tracking-wide transition-all transform hover:scale-[1.02] shadow-md shadow-purple-500/10 w-full text-center">
                <span>View Directory</span>
                <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © {currentYear} Expert Opinions. All rights reserved. <span className="mx-2 text-white/15">|</span> <strong>Official Amazon Service Provider Network Partner</strong>
        </p>
        <nav className="ft-legal" aria-label="Legal">
          {LEGAL.map(l => (
            <Link key={l.name} to={l.href}>{l.name}</Link>
          ))}
        </nav>
      </div>
    </footer>
  </>
);

export default Footer;