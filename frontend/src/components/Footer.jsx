import React from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

/* ─── Data ─── */
const SERVICES = [
  { name: 'SEO', href: '/services/seo' },
  { name: 'Local SEO', href: '/services/local-seo' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Content Writing', href: '/services/content-writing' },
  { name: 'Blogging', href: '/services/blogging' },
  { name: 'Shopify Development', href: '/services/shopify-development' },
  { name: 'Website Development', href: '/services/web-development' },
  { name: 'Mobile App Dev', href: '/services/mobile-app-dev' },
  { name: 'Amazon Management', href: '/services/amazon-account-management' },
  { name: 'DevOps', href: '/services/devops' },
  { name: 'Generative AI', href: '/services/generative-ai' },
  { name: 'n8n Automation', href: '/services/n8n-automation' },
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
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com/company/expert-opinions',
};

/* ─── Icons ─── */
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.42 12 19.79 19.79 0 0 1 1.17 3.38 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
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
        grid-template-columns: 1.6fr 2fr 0.9fr;
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

      @media (max-width: 900px) {
        .ft-cta-strip { padding: 24px 24px; }
        .ft-main {
          grid-template-columns: 1fr 1fr;
          padding: 36px 24px 28px;
          gap: 32px;
        }
        .ft-brand-col { grid-column: 1 / -1; }
        .ft-bottom { padding: 16px 24px; }
      }

      @media (max-width: 560px) {
        .ft-cta-strip { flex-direction: column; align-items: flex-start; }
        .ft-main { grid-template-columns: 1fr; gap: 28px; }
        .ft-brand-col { grid-column: auto; }
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
              src="https://res.cloudinary.com/dawp1fcci/image/upload/f_auto,q_80,w_180,c_scale/v1774948117/Gemini_Generated_Image_c0yhgdc0yhgdc0yh_dg0tky.png"
              alt="Expert Opinions"
              
              // FIXED STRUCTURE: Native scaling hardcoded bounds prevent layout shift warnings
              width="145"
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

      </div>

      {/* ── Bottom Bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © {currentYear} Expert Opinions. All rights reserved. <strong>#BuildingAtTheSpeedOfAI</strong>
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