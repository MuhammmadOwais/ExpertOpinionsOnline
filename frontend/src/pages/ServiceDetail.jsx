import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, BarChart3, Globe, ArrowRight, Search, } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Insights from '../components/Insights';
const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // --- SERVICES DATA REPOSITORY ---
  const servicesData = {
"amazon-account-management": {
  title: "Amazon Account Management",
  content: (
    <div className="overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif", color: '#111' }}>

      {/* ── GOOGLE FONTS + GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .am-display { font-family: 'Cormorant Garamond', serif; }
        .am-bebas   { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
        .am-tag {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #E8501A;
        }
        .am-btn-primary {
          display: inline-block; background: #E8501A; color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 16px 42px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .am-btn-primary:hover { background: #C43E12; transform: translateY(-1px); }
        .am-btn-dark {
          display: inline-block; background: #0D0C0A; color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 16px 42px; text-decoration: none;
          transition: background 0.2s;
        }
        .am-btn-dark:hover { background: #2a2520; }
        .am-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.45); font-size: 14px; font-weight: 300;
          text-decoration: none; transition: color 0.2s;
        }
        .am-btn-ghost:hover { color: #fff; }
        .am-divider { width: 44px; height: 2px; background: #E8501A; display: block; margin-bottom: 22px; }
        .am-tag-pill {
          border: 1px solid #DDD8D1; color: #8A8078;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 5px 13px; display: inline-block;
        }

        /* SERVICE ROWS */
        .am-svc-row {
          display: grid;
          grid-template-columns: 52px 1fr 400px;
          border-top: 1px solid #ECEAE6;
          align-items: stretch;
          transition: background 0.2s;
        }
        .am-svc-row:last-child { border-bottom: 1px solid #ECEAE6; }
        .am-svc-row:hover { background: #FDFCFA; }
        .am-svc-num-col {
          display: flex; align-items: center; justify-content: center;
          border-right: 1px solid #ECEAE6;
        }
        .am-svc-num-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px; letter-spacing: 0.12em;
          color: #D0CAC2;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          padding: 28px 0;
          transition: color 0.25s;
        }
        .am-svc-row:hover .am-svc-num-text { color: #E8501A; }
        .am-svc-body { padding: 44px 40px; }
        .am-svc-panel {
          background: #F8F5F1; padding: 44px 36px;
          border-left: 1px solid #ECEAE6;
          display: flex; flex-direction: column; justify-content: space-between; gap: 24px;
        }

        /* PROCESS CARDS */
        .am-proc-card {
          background: #fff; padding: 44px 36px;
          border-right: 1px solid #E8E4DF;
          position: relative; overflow: hidden;
        }
        .am-proc-card:last-child { border-right: none; }
        .am-proc-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: #E8501A;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .am-proc-card:hover::after { transform: scaleX(1); }

        /* CHECK LIST */
        .am-check-li {
          display: flex; align-items: flex-start; gap: 18px;
          padding: 22px 0; border-bottom: 1px solid rgba(255,255,255,0.055);
        }
        .am-check-li:last-child { border-bottom: none; }
        .am-check-box {
          width: 17px; height: 17px; border: 1.5px solid #E8501A;
          flex-shrink: 0; margin-top: 3px;
          display: flex; align-items: center; justify-content: center;
        }
        .am-check-box::after { content: ''; width: 7px; height: 7px; background: #E8501A; display: block; }

        /* MARQUEE */
        .am-marquee-track {
          display: flex; width: max-content;
          animation: amScroll 26s linear infinite;
        }
        @keyframes amScroll { 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); } }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .am-svc-row        { grid-template-columns: 1fr !important; }
          .am-svc-num-col    { display: none !important; }
          .am-svc-panel      { border-left: none !important; border-top: 1px solid #ECEAE6; }
          .am-hero-grid      { grid-template-columns: 1fr !important; }
          .am-two-col        { grid-template-columns: 1fr !important; gap: 40px !important; }
          .am-four-col       { grid-template-columns: 1fr 1fr !important; }
          .am-proc-card      { border-right: none; border-bottom: 1px solid #E8E4DF; }
          .am-proc-card:last-child { border-bottom: none; }
          .am-stat-bar       { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .am-four-col  { grid-template-columns: 1fr !important; }
          .am-stat-bar  { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{ position:'relative', minHeight:'100vh', background:'#0D0C0A', display:'flex', flexDirection:'column', justifyContent:'flex-end', overflow:'hidden' }}>

        {/* BG image */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Amazon_Optimization_and_Management_wicum8_adznot.webp')`,
          backgroundSize:'cover', backgroundPosition:'center', opacity:0.15,
        }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(108deg,#0D0C0A 42%,rgba(13,12,10,0.72) 68%,rgba(13,12,10,0.15) 100%)' }} />

        {/* Vertical rule lines */}
        <div className="hidden lg:block" style={{ position:'absolute', top:0, left:'72px', width:'1px', height:'100%', background:'rgba(255,255,255,0.04)' }} />
        <div className="hidden lg:block" style={{ position:'absolute', top:0, right:'72px', width:'1px', height:'100%', background:'rgba(255,255,255,0.04)' }} />

        {/* Upper text grid */}
        <div className="am-hero-grid" style={{ position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', padding:'clamp(120px,14vw,160px) clamp(24px,6vw,72px) 0' }}>
          <div>
            <span className="am-tag" style={{ display:'block', marginBottom:'28px' }}>Amazon Management &amp; Optimization</span>
            <h1 className="am-display" style={{ fontSize:'clamp(50px,6.8vw,92px)', fontWeight:700, color:'#fff', lineHeight:0.97, letterSpacing:'-1.5px' }}>
              Your Amazon.<br />
              <em style={{ color:'#E8501A', fontStyle:'italic' }}>Fully Managed.</em><br />
              Fully Optimized.
            </h1>
          </div>
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingBottom:'4px' }}>
            <p style={{ fontSize:'17px', fontWeight:300, color:'rgba(255,255,255,0.4)', lineHeight:1.85, maxWidth:'400px', marginBottom:'44px' }}>
              Everyday, most Amazon sellers are losing out on opportunities. Not anymore! We will help you get your share of profits with professional planning, management, and measurable results.            </p>
            <div style={{ display:'flex', alignItems:'center', gap:'28px', flexWrap:'wrap' }}>
              <Link to="/contact" className="am-btn-primary">Start With a Free Audit</Link>
              <a href="#services" className="am-btn-ghost">See Our Services <span style={{ fontSize:'20px', lineHeight:1 }}>↓</span></a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="am-stat-bar" style={{
          position:'relative', zIndex:2,
          display:'grid', gridTemplateColumns:'repeat(4,1fr)',
          borderTop:'1px solid rgba(255,255,255,0.07)',
          margin:'72px clamp(24px,6vw,72px) 0',
        }}>
          {[
            { num:'+218%', label:'Average revenue growth' },
            { num:'−42%',  label:'ACOS reduction in 90 days' },
            { num:'3.8×',  label:'Average ROAS improvement' },
            { num:'94%',   label:'Long-term client retention' },
          ].map((s,i) => (
            <div key={i} style={{ padding:'30px 26px 36px', borderLeft: i>0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <div className="am-bebas" style={{ fontSize:'clamp(32px,3.5vw,46px)', color:'#E8501A', lineHeight:1, marginBottom:'8px' }}>{s.num}</div>
              <div style={{ fontSize:'12px', fontWeight:300, color:'rgba(255,255,255,0.3)', letterSpacing:'0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          MARQUEE
      ══════════════════════════════ */}
      <div style={{ background:'#E8501A', overflow:'hidden', padding:'15px 0' }}>
        <div className="am-marquee-track">
          {[...Array(2)].map((_,rep) =>
            ['Listing Optimization','PPC Management','Account Protection','Inventory Forecasting','A+ Content','Brand Store Build','Review Strategy','FBA Consulting','Competitor Analysis','Analytics & Reporting']
            .map((item,i) => (
              <span key={`${rep}-${i}`} className="am-bebas" style={{ fontSize:'14px', color:'#fff', padding:'0 32px', opacity: i%2===0 ? 1 : 0.55, whiteSpace:'nowrap', letterSpacing:'0.14em' }}>
                {item} &nbsp;·
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════
          INTRO STATEMENT
      ══════════════════════════════ */}
      <section style={{ padding:'clamp(72px,10vw,120px) clamp(24px,6vw,72px)', borderBottom:'1px solid #ECEAE6' }}>
        <div className="am-two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'88px', alignItems:'center' }}>
          <div>
            <span className="am-divider" />
            <h2 className="am-display" style={{ fontSize:'clamp(30px,4vw,56px)', fontWeight:700, lineHeight:1.08, color:'#111', letterSpacing:'-0.8px' }}>
              Amazon is the world's most competitive marketplace.{' '}
              <em style={{ color:'#E8501A', fontStyle:'italic' }}>You need more than luck.</em>
            </h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
            <p style={{ fontSize:'17px', fontWeight:300, color:'#7a746d', lineHeight:1.9 }}>
              In an environment with many sellers chasing after the same customers, the distinction between a successful business and a dormant one rests on having an effective strategy, implementation, and constant optimisation.            </p>
            <p style={{ fontSize:'17px', fontWeight:300, color:'#7a746d', lineHeight:1.9 }}>
              Expert Opinions doesn’t just provide tips, we take full responsibility for your entire Amazon listing and keep working until you see positive changes.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES
      ══════════════════════════════ */}
      <section id="services" style={{ padding:'clamp(72px,10vw,120px) clamp(24px,6vw,72px)' }}>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:'24px', marginBottom:'72px' }}>
          <div>
            <span className="am-tag" style={{ display:'block', marginBottom:'14px' }}>Our Services</span>
            <h2 className="am-display" style={{ fontSize:'clamp(32px,4.5vw,62px)', fontWeight:700, color:'#111', lineHeight:1.0, letterSpacing:'-1.5px' }}>
              Everything your Amazon<br />business needs to grow
            </h2>
          </div>
          <p style={{ fontSize:'15px', fontWeight:300, color:'#9A9088', maxWidth:'300px', lineHeight:1.75 }}>
            Six core services, one unified strategy. Each engineered to move your numbers.
          </p>
        </div>

        {/* Service Rows */}
        {[
          {
            num:'01', title:'Listing Optimization',
            what:'Product listing is the shop window of your online store. If the title of your product listing is poorly optimized, lacks bullet points or has a weak backend, A9 algorithm hides it from consumers, who scroll by. We optimize every bit of it through comprehensive keyword research, competitive gap analysis and professional copywriting to ensure that your product listing ranks better, converts more clicks into sales.',
            whyTitle:'Rank on page one. Convert browsers into buyers.',
            why:"Most sellers don’t realize that their product listings are losing them business every single day. A properly optimized product listing helps boost your conversion rates by two times without adding even a single extra penny to your marketing budget.",
            tags:['Keyword Research','Title & Bullet Copywriting','Backend SEO','Search Term Indexing'],
          },
          {
            num:'02', title:'PPC & Sponsored Ads Management',
            what:"Amazon PPC is one of the most technically difficult paid channels within e-commerce. Bad campaign structuring, broad match wastage, and reactive bidding could eat away at your profits. We design, set up, and continually optimize all aspects of your ad campaigns: Sponsored Products, Sponsored Brands, and Sponsored Display. This will ensure your ACOS is lowered and your budget is optimized to the fullest extent.",
            whyTitle:'Stop burning ad spend. Start generating real returns.',
            why:"In less than 60 days, we have grown companies from 80% ACOS to below 18%. Our process relies on multilayered campaign structure, meticulous negative keyword control, and weekly bidding strategies. You get complete visibility into your budget and exactly what it does for you.",
            tags:['Campaign Architecture','Bid Optimisation','Negative Keyword Management','ROAS Maximisation'],
          },
          {
            num:'03', title:'Account Health & Brand Protection',
            what:"The legal environment of Amazon is always changing. All it takes is one suppression notice, intellectual property infringement notice, or performance issue to shut down your business in seconds. We track every aspect of your Amazon account day and night – metrics, listings, review speed – and mitigate any risks that may arise.",
            whyTitle:'Sleep well knowing your account is fully protected.',
            why:"Any successful brand faces threats from brand hijackers, counterfeiters, or listing suspensions at some point in time. With regular monitoring of your Amazon account, handling of all Intellectual Property notices and listing suppressions, and communication with Seller Support, we ensure your reputation remains untarnished.",
            tags:['Performance Monitoring','Policy Compliance','Hijacker Removal','Review Management'],
          },
          {
            num:'04', title:'Inventory & FBA Management',
            what:"Lack of stock results in the loss of your organic ranking. An excess of stock ties up your money in long-term storage costs. Proper FBA fulfillment calls for accurate demand forecasting, timely reorder planning, and knowledge of IPI policies. Leave all the logistics to us so that your supply chain is no bottleneck to your business.",
            whyTitle:'Never lose rank to a stockout again.',
            why:"An out-of-stock product will lose its BSR ranking; recovering it may take you months. Our forecasting algorithm considers all seasonal and Amazon inventory restrictions to ensure that you always have sufficient but not excessive amounts of inventory at all times.",
            tags:['Demand Forecasting','Reorder Planning','FBA Reconciliation','IPI Score Management'],
          },
          {
            num: '05',
            title: 'A+ Content & Brand Store',
            what: "Your potential customers can’t feel your product before purchase. Your images, comparisons, and brand-enhancing content will make up for that—doing all the hard work of convincing, addressing doubts, and turning potential customers into paying ones. We develop high-quality A+ Content and complete Brand Stores that transform your listings into brands.",
            whyTitle: 'Transform your listing into an exclusive brand destination.',
            why: "Product brands that use effective A+ Content have 8–15% higher conversion rates. An attractive Brand Store helps to secure return sales, cross-selling opportunities, and becomes the destination for off-Amazon traffic.",
            tags: ['A+ Module Design', 'Brand Store Build', 'Infographic Creation', 'Comparison Chart Strategy'],
          },
          {
            num: '06', 
            title: 'Analytics & Monthly Reporting',
            what: "At all times, you need to know the position of your business, not after one quarter, but weekly. Our structured monthly analysis includes metrics such as revenue trend, ads effectiveness, organic ranking change, conversion rates, and an action plan for the following month. Clear reporting, not complex Excel sheets.",
            whyTitle: 'Total visibility. No surprises. Total accountability.',
            why: "Unlike other companies that disappear after you board on with them, we ensure complete transparency throughout the entire process, with regular strategy sessions via video chat, a live performance dashboard, and only one contact person.",
            tags: ['Revenue & BSR Tracking', 'Ad Performance Reports', 'Monthly Strategy Calls', 'KPI Dashboard Access'],
          },
        ].map((s,i) => (
          <div key={i} className="am-svc-row">
            {/* Number spine */}
            <div className="am-svc-num-col">
              <span className="am-svc-num-text">{s.num}</span>
            </div>
            {/* What it is */}
            <div className="am-svc-body">
              <h3 className="am-display" style={{ fontSize:'clamp(22px,2.2vw,30px)', fontWeight:700, color:'#111', marginBottom:'18px', lineHeight:1.15, letterSpacing:'-0.3px' }}>
                {s.title}
              </h3>
              <p style={{ fontSize:'15px', fontWeight:300, color:'#7a746d', lineHeight:1.9, maxWidth:'520px' }}>{s.what}</p>
            </div>
            {/* Why it matters */}
            <div className="am-svc-panel">
              <div>
                <span className="am-tag" style={{ display:'block', marginBottom:'14px' }}>Why it matters for you</span>
                <h4 className="am-display" style={{ fontSize:'clamp(17px,1.6vw,21px)', fontWeight:600, color:'#111', marginBottom:'14px', lineHeight:1.3, letterSpacing:'-0.2px' }}>
                  {s.whyTitle}
                </h4>
                <p style={{ fontSize:'14px', fontWeight:300, color:'#7a746d', lineHeight:1.9 }}>{s.why}</p>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {s.tags.map((t,j) => <span key={j} className="am-tag-pill">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════
          WHY EXPERT OPINIONS — dark
      ══════════════════════════════ */}
      <section style={{ background:'#0D0C0A', padding:'clamp(72px,10vw,120px) clamp(24px,6vw,72px)' }}>
        <div className="am-two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'100px', alignItems:'flex-start' }}>

          <div>
            <span className="am-tag" style={{ display:'block', marginBottom:'22px' }}>Why Expert Opinions</span>
            <h2 className="am-display" style={{ fontSize:'clamp(32px,4vw,60px)', fontWeight:700, color:'#fff', lineHeight:1.03, letterSpacing:'-1.2px', marginBottom:'28px' }}>
              We’re not just managing.<br />
              We’re <em style={{ color:'#E8501A', fontStyle:'italic' }}>developing</em> your brand.
            </h2>
            <p style={{ fontSize:'16px', fontWeight:300, color:'rgba(255,255,255,0.38)', lineHeight:1.9, marginBottom:'48px', maxWidth:'380px' }}>
              Agencies provide you with a set-up document and go MIA. We’re down in the trenches with you – measuring, optimizing, and moving forward every week, without you asking us to.
            </p>
            <Link to="/contact" className="am-btn-primary">Schedule Your Free Strategy Session</Link>
          </div>

          <ul style={{ listStyle:'none', padding:0, margin:0, paddingTop:'8px' }}>
            {[
              { 
                t: '1 specialist for your account, not different people each time', 
                d: 'The one who audits your account is the one who manages it too, day in, day out. Not switching managers, no briefings required.' 
              },
              { 
                t: 'Implementation begins after week one', 
                d: 'Not spending three months on discovery projects. After auditing your account, we develop your strategy within 48 hours and start executing right away.' 
              },
              { 
                t: 'All decisions are data-driven', 
                d: 'It’s not a gut feeling that drives us. All modifications to your listing, all bid optimizations, and all shifts in strategy are based on Amazon data.' 
              },
              { 
                t: 'We approach your account the way we would our own', 
                d: "Growth in your bottom line is the sole KPI for us. We establish goals together and then work hard to meet them." 
              },
              { 
                t: 'Our clients stick around 94%', 
                d: "It’s not the result of a customer satisfaction survey – once you see the results of expert management, leaving feels wrong." 
              },
            ].map((item, i) => (
              <li key={i} className="am-check-li">
                <div className="am-check-box" />
                <div>
                  <p style={{ fontSize:'15px', fontWeight:500, color:'rgba(255,255,255,0.85)', marginBottom:'5px', lineHeight:1.4 }}>{item.t}</p>
                  <p style={{ fontSize:'14px', fontWeight:300, color:'rgba(255,255,255,0.36)', lineHeight:1.8 }}>{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════
          PROCESS
      ══════════════════════════════ */}
      <section style={{ background:'#F8F5F1', padding:'clamp(72px,10vw,120px) clamp(24px,6vw,72px)' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:'28px', marginBottom:'64px' }}>
          <div>
            <span className="am-tag" style={{ display:'block', marginBottom:'14px' }}>How It Works</span>
            <h2 className="am-display" style={{ fontSize:'clamp(30px,4vw,54px)', fontWeight:700, color:'#111', lineHeight:1.0, letterSpacing:'-1.2px' }}>
              From first audit to<br />sustained growth
            </h2>
          </div>
          <span className="am-divider" style={{ marginBottom:'8px' }} />
        </div>
        <div className="am-four-col" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', background:'#E8E4DF', gap:'1px' }}>
          {[
            { 
              num:'01', 
              title:'Free Audit', 
              desc:'Our team will conduct a thorough analysis of your listings, ad design, account health, competition and pricing strategy to understand every potential and every pitfall of your existing strategy.' 
            },
            { 
              num:'02', 
              title:'Unique Plan', 
              desc:'Together, we develop a customized 90 day plan that is focused on achieving your objectives, your margins and your competitive position. There are no cookie cutter plans here.' 
            },
            { 
              num:'03', 
              title:'Total Execution', 
              desc:'We handle all the work – listing copy, campaign setup, A+ pages, inventory planning – and start delivering you results right away, not in 2-3 months down the road.' 
            },
            { 
              num:'04', 
              title:'Grow & Measure', 
              desc:"Monthly strategy meetings, a performance dashboard and ongoing optimization mean steady growth. You won’t find us resting on our laurels after success." 
            },
          ].map((p,i) => (
            <div key={i} className="am-proc-card">
              <div className="am-bebas" style={{ fontSize:'52px', color:'#E0DBD4', lineHeight:1, marginBottom:'28px' }}>{p.num}</div>
              <h4 className="am-display" style={{ fontSize:'22px', fontWeight:600, color:'#111', marginBottom:'14px', lineHeight:1.2 }}>{p.title}</h4>
              <p style={{ fontSize:'14px', fontWeight:300, color:'#7a746d', lineHeight:1.85 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIAL
      ══════════════════════════════ */}
      <section style={{ padding:'clamp(72px,10vw,120px) clamp(24px,6vw,72px)', borderTop:'1px solid #ECEAE6', borderBottom:'1px solid #ECEAE6' }}>
        <div style={{ maxWidth:'840px' }}>
          <span className="am-display" style={{ fontSize:'120px', lineHeight:0.55, color:'#E8501A', display:'block', marginBottom:'28px', fontStyle:'italic', fontWeight:600 }}>"</span>
          <p className="am-display" style={{ fontSize:'clamp(22px,3.2vw,40px)', fontWeight:600, color:'#111', lineHeight:1.25, marginBottom:'40px', letterSpacing:'-0.5px' }}>
            Expert Opinions took our Amazon store from barely breaking even to our single largest revenue channel in under six months. The difference in their approach — compared to every other agency we had worked with — was night and day.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:'18px' }}>
            <div style={{ width:'44px', height:'44px', background:'#E8501A', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span className="am-bebas" style={{ fontSize:'15px', color:'#fff', letterSpacing:'0.06em' }}>MA</span>
            </div>
            <div>
              <p style={{ fontSize:'15px', fontWeight:500, color:'#111', marginBottom:'2px' }}>Maqsood Ahmad</p>
              <p style={{ fontSize:'13px', fontWeight:300, color:'#9A9088' }}>Founder, Expert Opinions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
      <section style={{ background:'#E8501A', padding:'clamp(80px,12vw,140px) clamp(24px,6vw,72px)' }}>
        <div className="am-two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
          <h2 className="am-display" style={{ fontSize:'clamp(36px,5.5vw,80px)', fontWeight:700, color:'#fff', lineHeight:0.95, letterSpacing:'-2.5px' }}>
            Ready to take Amazon seriously?
          </h2>
          <div>
            <p style={{ fontSize:'18px', fontWeight:300, color:'rgba(255,255,255,0.68)', lineHeight:1.85, marginBottom:'40px' }}>
              Book a free 30-minute strategy call. We'll audit your current setup, identify your biggest opportunities and lay out exactly how we would grow your account — with zero obligation and no sales pressure.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:'24px', flexWrap:'wrap' }}>
              <Link to="/contact" className="am-btn-dark">Book My Free Audit</Link>
              <span style={{ fontSize:'13px', fontWeight:300, color:'rgba(255,255,255,0.5)', letterSpacing:'0.04em' }}>No commitment required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
},
"devops": {
  title: "DevOps Solutions: Facilitating Business Agility through Intelligent Automation",
  subtitle: "Bridging the gap between development and operations for seamless delivery.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Devops_ylm5az_qzvl6x.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- Minimalist Hero Section --- */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Devops_ylm5az_qzvl6x.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl border-l border-purple-500/50 pl-8 py-4">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
              Operational Framework
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Engineering <span className="font-bold">Agile Ecosystems</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
              Eliminating friction between development and operations through architectural precision and automated governance.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-block bg-white text-slate-950 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300">
                Consult an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Executive Summary --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">The Modern Delivery Standard</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-6 font-light">
              In a high-velocity digital economy, system robustness is not an option it is a prerequisite. Our DevOps practice synchronizes workflows to ensure that speed never compromises stability.
            </p>
            <p className="text-lg leading-relaxed text-slate-500">
              At Expert Opinions, we architect the technical bridge between rapid software iteration and enterprise-grade reliability, allowing your organization to deploy with absolute certainty.
            </p>
          </div>
          <div className="lg:col-span-4 border border-slate-200 p-10 bg-slate-50 shadow-sm">
            <div className="text-4xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Uptime Target Architecture</div>
            <div className="h-[1px] w-full bg-slate-200 mb-6"></div>
            <p className="text-sm text-slate-500 leading-relaxed italic">
              "Automation is not just about tools; it is about creating a predictable environment for innovation."
            </p>
          </div>
        </section>

        {/* --- Philosophy & Strategy (Clean Grid) --- */}
        <section className="py-24 border-t border-slate-100 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-8">Systemic Philosophy</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Our approach transcends simple tool integration. We implement a cultural and technical shift that unifies IT operations and software engineering into a singular, high-performance unit.
                </p>
                <p>
                  By dismantling siloed structures, we establish continuous feedback loops. Applications are developed, tested, and provisioned through rigorous automated cycles, minimizing human intervention and maximizing output quality.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "Manual Constraint Mitigation", desc: "Replacing variable-prone manual steps with deterministic automated sequences." },
                { title: "DevSecOps Integration", desc: "Embedding security protocols directly into the CI/CD pipeline from inception." },
                { title: "Immutable Infrastructure", desc: "Leveraging IaC to maintain environment parity across development, staging, and production." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-purple-600 font-mono font-bold text-lg">0{i+1}.</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-wide">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Data-Driven Impact (Structured Table) --- */}
        <section className="py-20">
          <div className="mb-12">
            <h3 className="text-sm font-bold text-purple-600 uppercase tracking-[0.3em] mb-2">Performance Metrics</h3>
            <h2 className="text-3xl font-bold text-slate-900">Operational Advantages</h2>
          </div>
          
          <div className="border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200">Category</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200">Strategic Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Accelerated Release", "Transition from monthly release cycles to daily, on-demand deployments."],
                  ["Automated Quality Assurance", "End-to-end testing protocols that prevent regression and production defects."],
                  ["Infrastructure Scalability", "Cloud-native auto-scaling to manage fluctuating traffic without manual provisioning."],
                  ["Cost Optimization", "Reduction in operational overhead through intelligent resource allocation."]
                ].map(([benefit, impact]) => (
                  <tr key={benefit} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900 text-sm w-1/3">{benefit}</td>
                    <td className="p-6 text-slate-600 text-sm leading-relaxed">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Technical Toolstack (Dark Professional Section) --- */}
        <section className="bg-slate-900 text-white p-12 md:p-16 border-t border-white/10 mt-12">
          <h2 className="text-2xl font-light mb-12 uppercase tracking-[0.2em]">Core <span className="font-bold">Competencies</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {[
              { label: "Pipeline Engineering", content: "Architecture of Jenkins and GitHub Actions workflows." },
              { label: "Orchestration", content: "Management of containerized workloads via Kubernetes and Docker." },
              { label: "Environment Provisioning", content: "Terraform-driven Infrastructure as Code (IaC)." },
              { label: "Cloud Platforms", content: "Enterprise configuration for AWS, Azure, and GCP." },
              { label: "Observability", content: "Real-time telemetry using Prometheus and Grafana stacks." },
              { label: "Configuration Management", content: "Automated server state management through Ansible." }
            ].map((item, index) => (
              <div key={index} className="border-l border-slate-700 pl-6">
                <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">{item.label}</h5>
                <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-wider">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section (Clean & Direct) --- */}
        <section className="mt-32 py-20 border border-slate-200 text-center bg-slate-50">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready for Operational Maturity?</h3>
          <p className="max-w-xl mx-auto mb-10 text-slate-600 font-light leading-relaxed">
            Obsolete operational models are the primary bottleneck to growth. Engage our consultants to audit your current delivery pipeline.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-950 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-700 transition-all duration-300">
            Request Architecture Audit <ChevronRight size={18} />
          </Link>
        </section>
      </div>
    </div>
  )
},
"mobile-app-dev": {
  title: "Mobile Application Development: Creating High Performance Digital Experiences",
  subtitle: "Reaching the palm of your customers' hands with cutting-edge mobile solutions.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/Mobile_Application_Development_rkueq7_zhouy0.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- Executive Hero Section --- */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/Mobile_Application_Development_rkueq7_zhouy0.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl border-l-2 border-purple-600 pl-10 py-6">
            <p className="text-xs font-bold tracking-[0.5em] uppercase text-purple-500 mb-6">
              Engineering Mobility
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              High-Velocity <br /> 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Mobile Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-10">
              Architecting native and cross-platform experiences that prioritize performance, security, and seamless user interaction.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl">
              Consult our Lead Architect
            </Link>
          </div>
        </div>
      </section>

      {/* --- Strategic Overview --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-[0.4em] mb-6">The Strategic Imperative</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight">
              Beyond the Mobile Web: <br />Direct Customer Connectivity
            </h3>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                In an era where digital proximity defines market share, a robust mobile presence is no longer secondary, it is the primary touchpoint for consumer engagement.
              </p>
              <p>
                At Expert Opinions, we engineer specialized mobile solutions that integrate deeply with OS-level capabilities, ensuring your services are accessible, responsive, and secure at the point of need.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-900 p-12 text-white border-t-4 border-purple-600 shadow-2xl">
            <div className="text-5xl font-light mb-4">2026</div>
            <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-8 text-right">Technical Landscape Audit</div>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-8">
              "A mobile application is the only digital asset that lives on the user's most personal device, requiring a higher standard of engineering and trust."
            </p>
          </div>
        </section>

        {/* --- Methodology Grid (No Cards, Clean Borders) --- */}
        <section className="py-24 border-y border-slate-100 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { title: "Native Architecture", tag: "iOS / Android", desc: "For applications demanding peak hardware performance and zero-latency interactions." },
              { title: "Cross-Platform", tag: "Flutter / React Native", desc: "Unified codebases that deliver near-native performance with optimized development timelines." },
              { title: "Enterprise PWAs", tag: "Browser-Based", desc: "Scalable web-based applications that provide mobile-app utility without store friction." }
            ].map((tech, i) => (
              <div key={i} className={`p-12 ${i !== 2 ? 'md:border-r border-slate-100' : ''} hover:bg-slate-50 transition-colors group`}>
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-6 block">{tech.tag}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-6 uppercase">{tech.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Critical Mobile Advantages (Structured Table) --- */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Operational Resilience</h2>
              <p className="text-slate-500 font-light">Technical advantages designed for enterprise-grade scalability.</p>
            </div>
          </div>
          
          <div className="border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">System Capability</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Business Utility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Biometric Authentication", "Securing user data with enterprise-level face and fingerprint recognition."],
                  ["Offline-First Data Sync", "Ensuring functionality in low-connectivity environments with local storage."],
                  ["Edge Push Protocols", "Latency-free notification delivery for real-time customer engagement."],
                  ["Complex API Integration", "Seamless synchronization with existing ERP, CRM, and payment gateways."]
                ].map(([capability, utility]) => (
                  <tr key={capability} className="hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-bold text-slate-900 text-sm w-1/3">{capability}</td>
                    <td className="p-8 text-slate-600 text-sm leading-relaxed font-light">{utility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Development Lifecycle (Minimalist Stepper) --- */}
        <section className="bg-slate-50 p-16 md:p-24 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-20 text-center uppercase tracking-widest">Engineering Lifecycle</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discovery", desc: "Technical requirements gathering and UX mapping." },
              { step: "02", title: "Architecture", desc: "System design and technology stack finalization." },
              { step: "03", title: "Execution", desc: "Agile sprints with continuous integration cycles." },
              { step: "04", title: "Deployment", desc: "Store submission and post-launch monitoring." }
            ].map((proc, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-light text-slate-200 mb-6">{proc.step}</div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest border-t border-purple-600 pt-6">{proc.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Direct Call to Action --- */}
        <section className="mt-32 py-24 border-t-2 border-slate-900 text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter uppercase">Request Technical Consultation</h3>
          <p className="max-w-2xl mx-auto mb-12 text-slate-500 font-light text-lg">
            Transition your mobile strategy from a concept to a high-performance system. Contact our engineering team for a feasibility study.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-700 transition-all duration-300">
            Start Project Architecture <ChevronRight size={18} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"local-seo": {
  title: "Local Search Engine Optimization: Claim Your Digital Territory and Grow Your Business",
  subtitle: "Expert Opinions bridges the gap between your physical storefront and the digital world.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Local_SEO_Services_qvg8qn_yfobvg.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- High-Authority Hero Section --- */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale-[20%]"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Local_SEO_Services_qvg8qn_yfobvg.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl border-l border-blue-600 pl-10 py-4">
            <p className="text-xs font-bold tracking-[0.5em] uppercase text-blue-500 mb-6">
              Geographic Market Dominance
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-8">
              Establish Your <br /> 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Territory</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
              Bridging the critical gap between your physical operations and regional digital search intent through hyper-local precision.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl">
              Audit Your Local Presence
            </Link>
          </div>
        </div>
      </section>

      {/* --- Market Intelligence Section --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight uppercase">The Proximity Advantage</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-8 font-light italic">
              "In contemporary search dynamics, nearly 50% of global search intent is geographically bounded. Failing to appear in the 'Local Map Pack' is equivalent to forfeiting market share to immediate competitors."
            </p>
            <div className="h-[1px] w-24 bg-blue-600 mb-8"></div>
            <p className="text-lg leading-relaxed text-slate-500 font-light mb-6">
              Local Search Engine Optimization is a specialized technical discipline. Unlike global SEO, it focuses on hyper-local visibility, ensuring that your business dominates the specific neighborhood and city sectors where your customers live and work.
            </p>
          </div>
          <div className="lg:col-span-4 border border-slate-200 p-12 bg-slate-50">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Local Impact Factor</div>
            <div className="text-5xl font-bold text-blue-600 mb-2">24h</div>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Window in which most mobile local searchers visit a physical business location.
            </p>
          </div>
        </section>

        {/* --- Strategic Pillars (Structured Grid) --- */}
        <section className="py-24 border-y border-slate-100 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { title: "Mobile Dominance", desc: "Capturing high-intent users who search for immediate local solutions on mobile devices." },
              { title: "Intent Conversion", desc: "Targeting 'Near Me' search queries that signify immediate readiness to purchase." },
              { title: "Authority Index", desc: "Leveraging Google's recommendation algorithms to build regional brand trust." }
            ].map((item, i) => (
              <div key={i} className={`p-12 ${i !== 2 ? 'md:border-r border-slate-100' : ''} group hover:bg-slate-50 transition-colors`}>
                <span className="text-blue-600 font-mono font-bold text-sm block mb-6">0{i+1}.</span>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-widest">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Operational Framework (Technical List) --- */}
        <section className="py-32">
          <div className="max-w-3xl mb-16">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Implementation Framework</h3>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Technical Service Layers</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { t: "GMB Asset Optimization", d: "Strategic configuration of Google Business Profiles with metadata-optimized imagery and attribute management." },
              { t: "Geographic Keyword Mapping", d: "Identification of regional-specific search terminology and landmark-based keyword clusters." },
              { t: "NAP Data Synchronization", d: "Automated auditing to ensure Name, Address, and Phone consistency across the global citation ecosystem." },
              { t: "Reputation Governance", d: "Active management of review signals and sentiment analysis to increase local ranking authority." },
              { t: "Hyper-Local Content Deployment", d: "Architecting site content specifically tailored to municipal markers and community landmarks." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group">
                <div className="md:w-1/3">
                  <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide group-hover:text-blue-600 transition-colors">{item.t}</h4>
                </div>
                <div className="md:w-2/3 mt-2 md:mt-0">
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Strategic Outcomes (Dark Professional Section) --- */}
        <section className="bg-slate-900 text-white p-16 md:p-24 border-t-4 border-blue-600">
          <h3 className="text-2xl font-light mb-16 uppercase tracking-[0.3em]">Commercial <span className="font-bold">Advantages</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              { title: "Physical Traffic Scalability", impact: "Direct correlation between Map visibility and increased storefront footfall." },
              { title: "Resource Efficiency", impact: "Minimized ad-spend wastage by targeting strictly within your operational radius." },
              { title: "National Competitor Displacement", impact: "Technical strategies that allow local entities to outrank national conglomerates in regional SERPs." },
              { title: "Conversion Velocity", impact: "Immediate display of operational data (hours/contact) accelerating the point-of-sale." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{item.impact}</p>
                <div className="h-[1px] w-full bg-slate-800"></div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Executive CTA --- */}
        <section className="mt-32 py-24 border border-slate-200 text-center bg-slate-50 relative overflow-hidden">
          {/* Subtle Background Mark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-slate-100/50 select-none z-0">
            LOCAL
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter uppercase">Secure Your Local Monopoly</h3>
            <p className="max-w-2xl mx-auto mb-12 text-slate-500 font-light text-lg">
              Don't allow market fragmentation to diminish your regional reach. Deploy a precision-engineered Local SEO strategy to capture immediate demand.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-blue-600 transition-all duration-300">
              Initiate Market Audit <ChevronRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
},
"n8n-automation": {
  title: "Strategic Workflow Automation: Empowering Infrastructure through n8n",
  subtitle: "Expert Opinions engineers complex ecosystems where your software runs as a single entity.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/n8n_yknrgj_p8i2k0.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- Logical Hero Section --- */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/n8n_yknrgj_p8i2k0.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl border-l-2 border-purple-600 pl-10 py-6">
            <p className="text-xs font-bold tracking-[0.5em] uppercase text-purple-500 mb-6">
              Autonomous Systems Engineering
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              Unify Your <br /> 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Digital Ecosystem</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
              Architecting complex, logic-driven workflows that transform fragmented software into a singular, high-performance operational entity.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl">
              Design Your Logic Flow
            </Link>
          </div>
        </div>
      </section>

      {/* --- Executive Narrative --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight uppercase">Architectural Synchronization</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-8 font-light border-b border-slate-100 pb-12">
              Modern enterprises operate on a multitude of platforms. True efficiency is found not in the tools themselves, but in the seamless flow of information between them. We utilize n8n to engineer this connectivity.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-light">
              At Expert Opinions, we move beyond simple integrations. We build deep-logic ecosystems where your entire software stack operates with deterministic precision, eliminating manual friction and data fragmentation.
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-900 p-12 text-white border-t-4 border-purple-600 shadow-2xl">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">Core Engine</div>
            <div className="text-4xl font-light mb-4 tracking-tighter italic">Node-Based Intelligence</div>
            <p className="text-slate-400 text-sm leading-relaxed pt-6 border-t border-slate-800">
              n8n provides the logical depth required for enterprise-grade automation that "out-of-the-box" tools cannot sustain.
            </p>
          </div>
        </section>

        {/* --- Technical Advantages (Structured Grid) --- */}
        <section className="py-24 border-y border-slate-100 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { title: "Zero Data Silos", desc: "Native API connectivity ensuring absolute data mobility across your infrastructure." },
              { title: "Deterministic Logic", desc: "Advanced branching and error handling for mission-critical processes." },
              { title: "Privacy Sovereignty", desc: "Self-hosted foundations that keep your proprietary data within your own perimeter." },
              { title: "Elastic Cost Control", desc: "Decoupling automation volume from financial overhead. Scale without task-based penalties." }
            ].map((item, i) => (
              <div key={i} className={`p-10 ${i !== 3 ? 'lg:border-r border-slate-100' : ''} group hover:bg-slate-50 transition-colors`}>
                <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center font-mono text-xs mb-8">0{i+1}</div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Operational Impact (Standardized Table) --- */}
        <section className="py-32">
          <div className="max-w-3xl mb-16">
            <h3 className="text-xs font-bold text-purple-600 uppercase tracking-[0.4em] mb-4">Metric Analysis</h3>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Business Impact Analysis</h2>
          </div>
          
          <div className="border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Value Proposition</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Operational Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Time Recovery", "Redeploying human capital from repetitive data entry to high-value strategic functions."],
                  ["Data Integrity", "Eliminating human-induced variability through deterministic automated sequences."],
                  ["Scale Capacity", "Architecting systems that handle exponential lead or support volume without staff increases."],
                  ["AI-Agent Integration", "Connecting LLMs directly into operational flows for real-time intelligent interaction."]
                ].map(([benefit, impact]) => (
                  <tr key={benefit} className="hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-bold text-slate-900 text-sm w-1/3">{benefit}</td>
                    <td className="p-8 text-slate-600 text-sm leading-relaxed font-light">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Engineering Methodology --- */}
        <section className="bg-slate-50 p-16 md:p-24 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-20 text-center uppercase tracking-widest">Workflow Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "System Audit", desc: "Comprehensive mapping of manual bottlenecks and data fragmentation points." },
              { title: "Logic Mapping", desc: "Visual architecture of the node-based flow and conditional branching paths." },
              { title: "Optimization", desc: "Continuous node refinement to ensure maximum reliability and execution speed." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-black text-slate-200/50 mb-6 font-mono leading-none">{step.title[0]}</div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Executive CTA --- */}
        <section className="mt-32 py-24 border-t-2 border-slate-900 text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter uppercase italic">Take Command of Your Operations</h3>
          <p className="max-w-2xl mx-auto mb-12 text-slate-500 font-light text-lg">
            Stop managing software silos. Transition to a unified, autonomous infrastructure. Request a technical consultation to explore your automation potential.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-700 transition-all duration-300">
            Initiate Architecture Audit <ChevronRight size={18} />
          </Link>
        </section>
      </div>
    </div>
  )
},
"seo": {
  title: "Search Engine Optimization: Establish Organic Authority and Outperform Competitors",
  subtitle: "We don't just make tweaks; we engineer your website into a definitive industry presence.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/SEO_Optimization_zat9to_lugqth.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- Authority Hero Section --- */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[30%]"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/SEO_Optimization_zat9to_lugqth.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl border-l border-purple-600 pl-10 py-6">
            <p className="text-xs font-bold tracking-[0.5em] uppercase text-purple-500 mb-6">
              Search Systems Architecture
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              Organic <br /> 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Authority Engineering</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
              Beyond surface-level adjustments—we re-engineer your technical foundation and content ecosystem for sustainable market leadership.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl">
              Initiate Technical Audit
            </Link>
          </div>
        </div>
      </section>

      {/* --- Strategic Narrative --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight uppercase">The Visibility Standard</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-10 font-light border-b border-slate-100 pb-12">
              In the modern digital economy, search visibility is the definitive metric of industry relevance. Ranking on the first page is no longer a marketing goal—it is a technical prerequisite for corporate existence.
            </p>
            <div className="space-y-8">
              <h3 className="text-sm font-bold text-purple-600 uppercase tracking-widest">The Four Core Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { t: "Technical Infrastructure", d: "Optimizing core vitals, crawlability, and server-side performance for search engine compliance." },
                  { t: "Semantic Content Architecture", d: "Developing high-authority content ecosystems aligned with specific user search intent." },
                  { t: "Institutional Reputation", d: "Building off-page authority through strategic high-tier link acquisition and digital PR." },
                  { t: "Geographic Authority", d: "Dominating localized search results to capture immediate regional demand." }
                ].map((pillar, i) => (
                  <div key={i} className="border-l border-slate-200 pl-6 py-2">
                    <h4 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">{pillar.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider">{pillar.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-12 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Performance Metric</div>
            <div className="text-5xl font-light text-slate-900 mb-4 tracking-tighter">1st Page</div>
            <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
              The only position that commands 90% of user trust and commercial intent.
            </p>
            <div className="h-[1px] w-full bg-slate-200 mb-8"></div>
            <p className="text-xs text-slate-400 italic font-medium leading-relaxed uppercase tracking-widest">
              "SEO is a compounding asset; unlike paid media, its value increases as the system matures."
            </p>
          </div>
        </section>

        {/* --- Strategic Necessity (Dark Minimalist Section) --- */}
        <section className="bg-slate-900 text-white p-16 md:p-24 border-t-4 border-purple-600">
          <h2 className="text-2xl font-light mb-16 uppercase tracking-[0.3em]">Operational <span className="font-bold">Necessity</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "High-Intent Acquisition", desc: "Positioning your brand at the exact moment of search intent, outperforming passive social advertising." },
              { title: "Institutional Trust", desc: "Organic rankings function as a 3rd party endorsement, establishing you as the industry standard." },
              { title: "Sustainable Growth", desc: "Building a permanent digital asset that generates leads without continuous ad-spend scaling." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="text-purple-500 font-mono text-xl tracking-tighter italic">0{i+1} //</div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Professional Benefits (Standardized Table) --- */}
        <section className="py-32">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Commercial ROI Factors</h3>
          </div>
          
          <div className="border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Value Driver</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Strategic Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Cost-Per-Acquisition Optimization", "Achieving the lowest possible CAC in the digital marketing ecosystem over long-term cycles."],
                  ["User Experience Resilience", "Technical SEO directly improves site speed and navigation, decreasing bounce rates."],
                  ["Market Share Capture", "Scaling 24/7 lead generation across both domestic and international search sectors."],
                  ["Intelligence & Analytics", "Granular data insights into consumer behavior and evolving search terminology."]
                ].map(([benefit, impact]) => (
                  <tr key={benefit} className="hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-bold text-slate-900 text-sm w-1/3 italic border-r border-slate-50">{benefit}</td>
                    <td className="p-8 text-slate-600 text-sm leading-relaxed font-light">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Systematic Lifecycle --- */}
        <section className="bg-slate-50 p-16 md:p-24 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-20 text-center uppercase tracking-widest">Engineering Lifecycle</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { s: "Audit", d: "Structural analysis and competitive landscape mapping." },
              { s: "Keywords", d: "Intent-based terminology cluster development." },
              { s: "Content", d: "Authority-driven content ecosystem production." },
              { s: "Technical", d: "Core Web Vital resolution and schema deployment." },
              { s: "Reporting", d: "Performance telemetry and ranking transparency." }
            ].map((step, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-xs font-bold text-purple-600 mb-4 font-mono">STEP_0{i+1}</div>
                <h4 className="font-bold text-slate-900 mb-3 uppercase text-[10px] tracking-widest">{step.s}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Executive CTA --- */}
        <section className="mt-32 py-24 border-t-2 border-slate-900 text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter uppercase">Transform Search Visibility Into Revenue</h3>
          <p className="max-w-2xl mx-auto mb-12 text-slate-500 font-light text-lg">
            Cease the reliance on temporary ad-spend. Invest in a permanent organic asset. Request a comprehensive technical SEO audit to identify your growth bottlenecks.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-700 transition-all duration-300">
            Start Technical Audit <ChevronRight size={18} />
          </Link>
        </section>

      </div>
    </div>
  )
},
"shopify-development": {
  title: "Shopify Store Development: Transforming Your Digital Storefront into a Sales Engine",
  subtitle: "We build Shopify stores that don't just look amazing, but possess the finesse to succeed.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/Shopify_Store_development_and_optimization_cxi3lp_kjwicc.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- Retail Engineering Hero Section --- */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[20%]"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/Shopify_Store_development_and_optimization_cxi3lp_kjwicc.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl border-l-2 border-emerald-600 pl-10 py-4">
            <p className="text-xs font-bold tracking-[0.5em] uppercase text-emerald-500 mb-6">
              Enterprise Commerce Systems
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              High-Conversion <br /> 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Retail Ecosystems</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
              We architect Shopify environments that transcend aesthetic appeal engineering digital storefronts with the technical finesse required for high-volume commercial success.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-xl">
              Architect Your Store
            </Link>
          </div>
        </div>
      </section>

      {/* --- Strategic Overview --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight uppercase">Beyond the Digital Catalog</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-10 font-light border-b border-slate-100 pb-12 italic">
              "An e-commerce platform is an operational engine. Every interaction is a data point, and every second of latency is a lost transaction. We build for the culmination of the purchase."
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-light">
              At Expert Opinions, we specialize in the technical optimization of the Shopify framework. Whether launching a brand-new enterprise or re-engineering an existing storefront, we provide the architectural precision required to outperform the global marketplace.
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-12">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Performance Benchmark</div>
            <div className="text-5xl font-light text-slate-900 mb-4 tracking-tighter italic">90+</div>
            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
              Target Lighthouse Score for speed, accessibility, and SEO resilience.
            </p>
            <div className="h-[1px] w-full bg-slate-200"></div>
          </div>
        </section>

        {/* --- Technical Provisions (Structured Grid) --- */}
        <section className="py-24 border-y border-slate-100 mt-24">
          <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-[0.4em] mb-16 text-center">Core Technical Provisions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { t: "Custom Store Architecture", d: "Deep theme customization and payment gateway integration engineered for frictionless checkout cycles." },
              { t: "Performance Refinement", d: "Rigorous code audits to ensure sub-second loading times and total mobile responsiveness." },
              { t: "Conversion Optimization", d: "Data-driven UI/UX strategies designed to mitigate cart abandonment and maximize average order value." },
              { t: "Operational Automation", d: "Seamless 3rd party integration for ERP, inventory management, and automated marketing flows." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-slate-200 font-bold text-4xl leading-none">0{i+1}</span>
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 uppercase text-sm tracking-widest group-hover:text-emerald-600 transition-colors">{item.t}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Platform Advantages (Dark Minimalist Section) --- */}
        <section className="bg-slate-900 text-white p-16 md:p-24 border-t-4 border-emerald-600 mt-32">
          <h2 className="text-2xl font-light mb-16 uppercase tracking-[0.3em]">The Shopify <span className="font-bold">Advantage</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "PCI-Level Security", desc: "Enterprise-grade compliance ensuring total data integrity and consumer trust at every touchpoint." },
              { title: "Elastic Scalability", desc: "Systems designed to manage 10,000+ SKUs and flash-sale traffic without server-side friction." },
              { title: "Native Marketing Depth", desc: "Integrated SEO engines and social-commerce connectivity for immediate global reach." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                <div className="h-[1px] w-12 bg-emerald-900"></div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Operational Impact (Standardized Table) --- */}
        <section className="py-32">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Strategic Commercial Impact</h3>
          </div>
          
          <div className="border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Growth Lever</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Commercial Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Infrastructure Speed", "Direct correlation between sub-second loading and decreased bounce rates."],
                  ["Bespoke Brand Identity", "Elimination of generic templates in favor of high-fidelity brand storytelling."],
                  ["Data-Validated Design", "Deployment of UX changes based on heat-mapping and commerce analytics."],
                  ["Technical Governance", "Management of complex liquid code and API calls for total operational peace of mind."]
                ].map(([benefit, impact]) => (
                  <tr key={benefit} className="hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-bold text-slate-900 text-sm w-1/3 italic border-r border-slate-50">{benefit}</td>
                    <td className="p-8 text-slate-600 text-sm leading-relaxed font-light">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Executive CTA --- */}
        <section className="mt-32 py-24 border border-slate-900 text-center bg-white relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter uppercase">Scale Your E-commerce Empire</h3>
            <p className="max-w-2xl mx-auto mb-12 text-slate-500 font-light text-lg">
              Transition from a digital catalog to a high-performance commerce system. Contact our development team for a platform assessment and growth roadmap.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-emerald-700 transition-all duration-300 shadow-2xl">
              Initiate System Audit <ChevronRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
},
"web-development": {
  title: "Comprehensive Web Development: Achieving Digital Excellence",
  subtitle: "From strategic WordPress management to high-performance MERN stack engineering.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/website_development_by_wordpress_and_mern_stack_gxpczc_wm39yo.webp",
  content: (
    <div className="text-slate-800 bg-white font-sans overflow-x-hidden">
      
      {/* --- Full-Stack Engineering Hero --- */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[40%]"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160567/website_development_by_wordpress_and_mern_stack_gxpczc_wm39yo.webp')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl border-l-2 border-blue-600 pl-10 py-6">
            <p className="text-xs font-bold tracking-[0.5em] uppercase text-blue-500 mb-6">
              Full-Stack Architecture & Deployment
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              Digital <br /> 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Excellence Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
              Architecting the critical balance between operational flexibility and high-performance engineering through bespoke technical solutions.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl">
              Discuss Your Stack
            </Link>
          </div>
        </div>
      </section>

      {/* --- Strategic Narrative --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight uppercase">Performance vs. Flexibility</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-10 font-light border-b border-slate-100 pb-12 italic">
              "Digital excellence is not merely about presence; it is about the conscious selection of infrastructure. Your tech stack must evolve with your commercial objectives."
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-light">
              At Expert Opinions, we provide two distinct engineering pathways. Our capabilities range from strategic WordPress deployment for rapid content delivery to high-concurrency MERN stack applications for complex business logic.
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-900 p-12 text-white border-t-4 border-blue-600">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-8">Engineering Core</div>
            <div className="text-4xl font-light mb-4 tracking-tighter italic">24/7 Availability</div>
            <p className="text-slate-400 text-sm leading-relaxed pt-6 border-t border-slate-800 font-light">
              We build resilient systems that function as autonomous lead-generation engines for the global enterprise.
            </p>
          </div>
        </section>

        {/* --- Path 01: WordPress (Clean Corporate Style) --- */}
        <section className="py-24 border-y border-slate-100 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.4em]">Path 01 // CMS Architecture</h3>
              <h2 className="text-3xl font-bold text-slate-900 uppercase">WordPress <span className="font-light text-slate-400">Management</span></h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Leveraging the world’s most versatile CMS to achieve rapid market entry without sacrificing technical authority. Designed for enterprises that require full media autonomy.
              </p>
              <div className="space-y-6 pt-4">
                {[
                  { t: "Rapid Deployment", d: "Accelerated development cycles for corporate portals and digital publications." },
                  { t: "SEO Compliance", d: "Clean semantic markup optimized for organic search dominance." },
                  { t: "Intuitive Governance", d: "Self-managed content ecosystems requiring zero developer intervention." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 border-l border-slate-200 pl-6 group hover:border-blue-600 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-12 flex items-center justify-center border border-slate-100">
              <p className="text-slate-400 text-sm font-mono uppercase tracking-[0.2em] leading-relaxed text-center">
                // Optimized for <br /> 
                Corporate Portals <br /> 
                Media Outlets <br /> 
                Professional Portfolios
              </p>
            </div>
          </div>
        </section>

        {/* --- Path 02: MERN (Dark Tech Section) --- */}
        <section className="bg-slate-900 text-white p-16 md:p-24 border-t-4 border-slate-800 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white/5 p-12 border border-white/10">
               <div className="grid grid-cols-2 gap-8 text-[10px] font-mono text-blue-400 opacity-60">
                  <div>MONGODB</div>
                  <div>EXPRESS.JS</div>
                  <div>REACT.JS</div>
                  <div>NODE.JS</div>
               </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-[0.4em]">Path 02 // Application Engineering</h3>
              <h2 className="text-3xl font-bold text-white uppercase">MERN <span className="font-light text-slate-500">Stack Development</span></h2>
              <p className="text-slate-400 font-light leading-relaxed">
                High-performance JavaScript environments engineered for complex business logic, scalability, and sub-second interaction latency. Built for custom SaaS and data-heavy applications.
              </p>
              <div className="grid grid-cols-1 gap-8">
                 {[
                   { t: "Concurrency & Speed", d: "Single-page application (SPA) architecture for zero-reload user experiences." },
                   { t: "System Scalability", d: "Flexible NoSQL database integration designed for massive data ingestion." },
                   { t: "Unrestricted Customization", d: "Bespoke codebases free from third-party plugin dependencies." }
                 ].map((item, i) => (
                   <div key={i} className="space-y-2">
                     <h4 className="text-white font-bold uppercase text-xs tracking-widest">{item.t}</h4>
                     <p className="text-slate-500 text-xs leading-relaxed font-light uppercase tracking-widest">{item.d}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Strategic Impact Table --- */}
        <section className="py-32">
          <div className="mb-16">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Value Proposition</h3>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Systemic Resilience Factors</h2>
          </div>
          
          <div className="border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Engineering Pillar</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">Commercial Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Hardened Security", "Advanced encryption protocols to secure proprietary infrastructure and consumer data."],
                  ["Fluid Responsiveness", "Dynamic layout synchronization across mobile, tablet, and high-resolution desktop displays."],
                  ["Operational Continuity", "24/7 autonomous systems designed for lead generation and brand representation."]
                ].map(([benefit, impact]) => (
                  <tr key={benefit} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-8 font-bold text-slate-900 text-sm w-1/3 italic border-r border-slate-50">
                      <span className="text-[10px] text-blue-600 mr-3 font-mono">0{benefit[0]}</span>
                      {benefit}
                    </td>
                    <td className="p-8 text-slate-600 text-sm leading-relaxed font-light">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Executive CTA --- */}
        <section className="mt-32 py-24 border border-slate-900 text-center bg-slate-50 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter uppercase italic">Initiate Your Technical Transformation</h3>
            <p className="max-w-2xl mx-auto mb-12 text-slate-500 font-light text-lg">
              Choosing the correct path is critical. Whether you require the flexibility of a CMS or the power of a custom stack, our engineers are prepared to architect your success.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-blue-600 transition-all duration-300">
              Request Stack Consultation <ChevronRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
},
"generative-ai": {
  title: "Generative AI Services: Transforming Business with Machine Intelligence",
  subtitle: "Bridging the gap between AI potential and the real-world demands of your business.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/Genrative_AI_d937jp_ienmyz.webp",
  content: (
    <div className="bg-white text-slate-900 overflow-x-hidden font-poppins selection:bg-slate-900 selection:text-white">
      
      {/* --- Minimalist Hero Section --- */}
      <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 opacity-40 grayscale"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/Genrative_AI_d937jp_ienmyz.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' 
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-5xl">
            <p className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-8">
              Expert Opinions
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tighter mb-10">
              Machine <br /> Intelligence.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <p className="text-xl md:text-2xl text-slate-300 max-w-xl font-light leading-relaxed">
                We bridge the critical gap between artificial intelligence potential and the rigorous demands of modern enterprise.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Consult an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Editorial Body --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        
        {/* Section 01: Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Mission</h2>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <p className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-slate-900">
              Our specialized Generative AI services enable organizations to automate complex reasoning and deliver distinct user experiences.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              We focus on practical application. Beyond the hype, we build systems that generate high-value content, code, and insights tailored to your specific operational architecture.
            </p>
          </div>
        </section>

        {/* Section 02: Definition (Minimalist Grid) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-slate-100 pt-20 mb-40">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">Context</h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl font-bold mb-10 tracking-tight">Understanding Generative Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">Synthesis</p>
                <p className="text-slate-600 leading-relaxed">
                  Unlike traditional models limited to data retrieval, generative systems synthesize new information across text, code, and visual media.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">Responsiveness</p>
                <p className="text-slate-600 leading-relaxed">
                  Our integration team ensures these systems are not just intelligent, but highly responsive to the nuances of your business logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Strategic Necessity (The List) */}
        <section className="mb-40">
          <div className="mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-4">The Strategic Necessity</h2>
            <h3 className="text-5xl font-bold tracking-tighter">Operational Drivers</h3>
          </div>
          
          <div className="divide-y divide-slate-100">
            {[
              { t: "Personalization", d: "Delivering customized user engagement through individual data-driven recommendations." },
              { t: "Momentum", d: "Accelerating the production of technical assets and digital content without compromising precision." },
              { t: "Innovation", d: "Applying machine intelligence to solve architectural problems and prototype market-ready ideas." },
              { t: "Optimization", d: "Reallocating human capital by automating high-frequency, repetitive cognitive tasks." }
            ].map((item, i) => (
              <div key={i} className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-slate-50 transition-colors px-4">
                <span className="md:col-span-1 text-slate-300 font-mono text-sm">0{i+1}</span>
                <h4 className="md:col-span-4 text-2xl font-bold text-slate-900">{item.t}</h4>
                <p className="md:col-span-7 text-lg text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Advantages (Dark Minimalist) */}
        <section className="bg-slate-950 text-white p-12 md:p-24 mb-40">
          <div className="max-w-4xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-purple-500 mb-12">Primary Advantages</h2>
            <div className="space-y-20">
              {[
                { h: "Enhanced Operational Productivity", d: "Redirecting internal resources toward high-level strategy by automating routine workflows." },
                { h: "Constant Customer Engagement", d: "Sophisticated agents capable of handling complex multilingual queries with professional precision." },
                { h: "Accelerated Development", d: "Reducing the window between concept and deployment while maintaining technical documentation accuracy." },
                { h: "Search Intelligence", d: "Organic ranking growth through content that is semantically aligned with user intent." }
              ].map((adv, i) => (
                <div key={i} className="group">
                  <h4 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{adv.h}</h4>
                  <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">{adv.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: Capabilities (Text Based) */}
        <section className="text-center py-20 border-y border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-12">Core Capabilities</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Custom AI Assistants", "Automated Content Systems", "Data Entry Intelligence", "Strategic Web Integration"].map((tag, i) => (
              <span key={i} className="text-2xl font-bold text-slate-900 tracking-tight">
                {tag} <span className="text-purple-600 ml-4">/</span>
              </span>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-40 pb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">
            Initiate Integration.
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
            Discuss how Generative AI can be structured to solve your specific business challenges.
          </p>
          <Link to="/contact" className="inline-block bg-slate-950 text-white px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 transition-all">
            Get Started
          </Link>
        </section>

      </div>
    </div>
  )
},
"digital-marketing": {
  title: "Digital Marketing Strategy: A Thorough Plan for Business Growth",
  subtitle: "We don't just run campaigns; we create growth roadmaps that offer true value for the future.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Digital_Marketing_Strategy_n283jq.png",
  content: (
    <div className="bg-white text-slate-950 overflow-x-hidden font-poppins selection:bg-slate-950 selection:text-white">
      
      {/* --- Architect Hero Section --- */}
      <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 opacity-30 grayscale contrast-125"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1774833490/Digital_Marketing_Strategy_n283jq.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' 
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-5xl">
            <p className="text-purple-500 font-bold tracking-[0.4em] uppercase text-sm mb-8 border-l-2 border-purple-500 pl-4">
              Growth Architecture
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-10">
              Strategic <br /> Marketing.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10">
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-light leading-relaxed">
                We eliminate guesswork by engineering roadmaps that connect high-intent audiences with your brand's core value.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Secure Your Roadmap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Editorial Content Body --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        
        {/* Section 01: The Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Philosophy</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-slate-950">
              Online existence is common. Online authority is engineered.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              At Expert Opinions, we move beyond campaign execution. We architect growth strategies that serve as a specific roadmap, connecting your brand with the right people at the absolute peak of their intent.
            </p>
          </div>
        </section>

        {/* Section 02: Definitions (The Master Plan) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-slate-100 pt-24 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Framework</h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl font-bold mb-12 tracking-tight">Defining Digital Strategy</h3>
            <div className="space-y-10">
              <p className="text-2xl text-slate-900 leading-relaxed font-semibold italic border-l-4 border-slate-900 pl-8">
                It is the master plan that synchronizes Search Engine Optimization, Content Marketing, Paid Media, and Email Systems into one cohesive engine.
              </p>
              <p className="text-xl text-slate-500 leading-relaxed">
                A true strategy aligns measurable business objectives with the specific digital tactics required to dominate market share. We don't guess; we calculate.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03: Strategic Essentials (The Grid) */}
        <section className="mb-48">
          <div className="flex justify-between items-end mb-20 border-b border-slate-100 pb-10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-4">Core Essentials</h2>
              <h3 className="text-5xl font-bold tracking-tighter text-slate-950">Strategic Planning</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
            {[
              { n: "01", t: "Targeted Precision", d: "Budget optimization through identification of high-intent prospects and precise platform selection." },
              { n: "02", t: "Brand Consistency", d: "Unified messaging across all touchpoints to build equity and long-term recognition." },
              { n: "03", t: "Data Backed Decisions", d: "Eliminating subjective opinions by leveraging real-time performance analytics for ROI." },
              { n: "04", t: "Competitive Advantage", d: "Strategic differentiation through the analysis of industry shortcomings and market gaps." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <span className="text-sm font-bold text-purple-600 font-mono tracking-widest">{item.n} / ESSENTIAL</span>
                <h4 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">{item.t}</h4>
                <p className="text-lg text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Impact (Clean Monochrome Table) */}
        <section className="mb-48 bg-slate-50 p-10 md:p-20">
          <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-16 text-center">Business Impact</h3>
          <div className="divide-y divide-slate-200">
            {[
              { h: "Increased Profitability", d: "Acquisition cost reduction through optimized tracking and margin protection." },
              { h: "Scalable Frameworks", d: "Structural growth systems designed for market expansion and operational confidence." },
              { h: "Enhanced Conversion Rates", d: "Full-funnel optimization that transforms passive interest into confirmed revenue." },
              { h: "Industry Authority", d: "Positioning your brand as a recognized thought leader through digital foundation building." }
            ].map((row, i) => (
              <div key={i} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                <div className="md:col-span-5 font-bold text-2xl text-slate-900 group-hover:text-purple-600 transition-colors">{row.h}</div>
                <div className="md:col-span-7 text-lg text-slate-500 font-light leading-relaxed">{row.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 05: The Process (Dark Minimalist) */}
        <section className="bg-slate-950 text-white p-12 md:p-24 mb-48 overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px]"></div>
          <h2 className="text-4xl font-bold mb-20 tracking-tighter">The Strategic Process.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-800 pt-16">
            {[
              { h: "Discovery Audit", d: "Evaluation of digital footprint and competitor gap analysis." },
              { h: "Goal Alignment", d: "Defining measurable KPIs based on revenue requirements." },
              { h: "Channel Selection", d: "Deployment on high-impact platforms tailored to industry." },
              { h: "Optimization", d: "Continuous refinement for maximum ROI and sustained growth." }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <span className="text-xs font-bold text-purple-500">STEP {i+1}</span>
                <h4 className="text-lg font-bold uppercase tracking-widest">{step.h}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter text-slate-950">
            Lead the Market.
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
            Stop guessing your digital outcomes. Transition to a data-driven growth strategy with Expert Opinions.
          </p>
          <Link to="/contact" className="inline-block bg-slate-950 text-white px-20 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 transition-all">
            Get My Roadmap
          </Link>
        </section>

      </div>
    </div>
  )
},
"content-writing": {
  title: "Content Writing and SEO Content Production: Powering Digital Growth",
  subtitle: "Words that rank on Google and convert visitors into loyal customers.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/Content_Writing_and_SEO_Content_Production_wlqhqh_mezhzn.webp",
  content: (
    <div className="bg-white text-slate-950 overflow-x-hidden font-poppins selection:bg-slate-950 selection:text-white">
      
      {/* --- Authority Hero Section --- */}
      <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 opacity-40 grayscale contrast-125"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/Content_Writing_and_SEO_Content_Production_wlqhqh_mezhzn.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' 
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-5xl">
            <p className="text-purple-500 font-bold tracking-[0.4em] uppercase text-sm mb-8 border-l-2 border-purple-500 pl-4">
              Authority Copywriting
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-10">
              Words That <br /> Dominate.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10">
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-light leading-relaxed">
                We engineer high-performance editorial assets that satisfy search algorithms and capture human attention.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Editorial Content Body --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        
        {/* Section 01: The Narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Voice</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-slate-950">
              Content is no longer just text. It is your most powerful sales asset.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              At Expert Opinions, we produce editorial content designed for results. We bridge the gap between creative storytelling and technical SEO to ensure your brand's voice reaches the front page of global search results.
            </p>
          </div>
        </section>

        {/* Section 02: Analysis (The Framework) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-slate-100 pt-24 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Framework</h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl font-bold mb-12 tracking-tight uppercase">SEO Content Production</h3>
            <div className="space-y-16">
              <p className="text-2xl text-slate-900 leading-relaxed font-semibold italic border-l-4 border-slate-900 pl-8">
                A specialized process that synthesizes high-value information with search engine optimization to deliver authority and search visibility.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-950 uppercase tracking-widest text-xs">Keyword Research</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Identifying search patterns to ensure every sentence serves a strategic marketing objective.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-950 uppercase tracking-widest text-xs">Search Intent</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Aligning technical delivery with the user's psychological requirements for a solution.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-950 uppercase tracking-widest text-xs">Optimization</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Structural engineering through semantic headers and internal linking for machine readability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Professional Necessity (Full Width List) */}
        <section className="mb-48 border-y border-slate-100 py-24">
          <div className="mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-4">The Necessity</h2>
            <h3 className="text-5xl font-bold tracking-tighter text-slate-950 uppercase">Professional Standards</h3>
          </div>
          
          <div className="divide-y divide-slate-100">
            {[
              { n: "01", t: "Digital Visibility", d: "Optimizing high-value articles to ensure your brand is discovered by high-intent audiences." },
              { n: "02", t: "Industry Authority", d: "Deeply researched content that establishes trust and positions your brand as a market leader." },
              { n: "03", t: "Engagement Logic", d: "Writing for human retention to increase on-site time and optimize for conversion events." }
            ].map((item, i) => (
              <div key={i} className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                <span className="md:col-span-1 text-slate-200 font-mono text-3xl font-bold">{item.n}</span>
                <h4 className="md:col-span-4 text-2xl font-bold text-slate-950 uppercase tracking-tight group-hover:text-purple-600 transition-colors">{item.t}</h4>
                <p className="md:col-span-7 text-lg text-slate-500 font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Benefits (Full Width Dark) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px]"></div>
          
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-purple-500 mb-16">Tangible ROI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20 relative z-10">
            {[
              { h: "Rank Improvement", d: "Engineering content to reach the top of search engine results through technical and semantic precision." },
              { h: "Increased Traffic", d: "Generating organic growth without the recurring overhead of traditional paid media." },
              { h: "Brand Consistency", d: "Developing a unified brand voice across all digital platforms for a seamless reader experience." },
              { h: "Conversion Focus", d: "Directing passive traffic toward measurable business actions through strategic calls to action." }
            ].map((adv, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-3xl font-bold tracking-tight border-b border-slate-800 pb-4">{adv.h}</h4>
                <p className="text-xl text-slate-400 font-light leading-relaxed">{adv.d}</p>
              </div>
            ))}
          </div>

        {/* Section 05: Specializations (Grid) */}
        <section className="mb-48">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-16 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { t: "Blog Posts", d: "In-depth technical and lifestyle articles that build authority." },
              { t: "Website Copy", d: "Conversion-optimized service pages and landing page copy." },
              { t: "Product Descriptions", d: "Persuasive e-commerce narratives designed for revenue." },
              { t: "B2B Assets", d: "High-authority whitepapers for industry decision-makers." }
            ].map((item, i) => (
              <div key={i} className="space-y-4 border-l border-slate-100 pl-6">
                <h4 className="text-lg font-bold uppercase tracking-tight text-slate-950">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 bg-slate-50">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter text-slate-950">
            Words Are Power.
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
            Dominate search results and establish industry leadership today with our expert content production team.
          </p>
          <Link to="/contact" className="inline-block bg-slate-950 text-white px-20 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 transition-all">
            Get Started Today
          </Link>
        </section>

      </div>
    </div>
  )
},
"blogging": {
  title: "Blogging and Content Strategy: Building Authority Through Words",
  subtitle: "Expert Opinions creates a voice for your brand that helps you rise above the digital noise.",
  heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/bloging_yrfxxt_pjwvmn.webp",
  content: (
    <div className="bg-white text-slate-950 overflow-x-hidden font-poppins selection:bg-slate-950 selection:text-white">
      
      {/* --- Narrative Hero Section --- */}
      <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 opacity-40 grayscale"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160566/bloging_yrfxxt_pjwvmn.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' 
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-5xl">
            <p className="text-purple-500 font-bold tracking-[0.4em] uppercase text-sm mb-8 border-l-2 border-purple-500 pl-4">
              Brand Narrative
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-10">
              Write Your <br /> Success Story.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10">
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-light leading-relaxed">
                Expert Opinions engineers a professional voice for your brand, transforming digital noise into a coherent narrative of authority.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Consult a Strategist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Editorial Content Body --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        
        {/* Section 01: The Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Purpose</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-slate-950">
              A website is just a destination. A blog is the conversation that leads people there.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              To be noticed in a saturated market, you must offer distinct value. We are a professional blogging collective dedicated to more than just word counts. We architect relationships through strategic information delivery.
            </p>
          </div>
        </section>

        {/* Section 02: Strategic Move (The Framework) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-slate-100 pt-24 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">The Framework</h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl font-bold mb-12 tracking-tight uppercase">Modern Blogging Architecture</h3>
            <div className="space-y-10">
              <p className="text-2xl text-slate-900 leading-relaxed font-semibold italic border-l-4 border-slate-900 pl-8">
                Blogging for business is not an outlet for thoughts; it is a calculated strategic move to answer the precise queries of your high-intent audience.
              </p>
              <p className="text-xl text-slate-500 leading-relaxed">
                By providing clarity and transparency through long-form content, we facilitate the transition of a casual visitor into a lifelong customer. Trust is the primary currency of the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03: Evolution (Full Width List) */}
        <section className="mb-48 border-y border-slate-100 py-24">
          <div className="mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-4">The Impact</h2>
            <h3 className="text-5xl font-bold tracking-tighter text-slate-950 uppercase">Brand Evolution</h3>
          </div>
          
          <div className="divide-y divide-slate-100">
            {[
              { n: "01", t: "Organic Traffic Compounding", d: "Search engines prioritize informative, original content. Every strategic post serves as a long-term asset that continues to drive acquisition years after publication." },
              { n: "02", t: "Industry Leadership", d: "Demonstrating deep operational knowledge establishes immediate authority, providing your brand with high-value collateral for social and professional engagement." }
            ].map((item, i) => (
              <div key={i} className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                <span className="md:col-span-1 text-slate-200 font-mono text-4xl font-bold">{item.n}</span>
                <h4 className="md:col-span-4 text-3xl font-bold text-slate-950 uppercase tracking-tight group-hover:text-purple-600 transition-colors">{item.t}</h4>
                <p className="md:col-span-7 text-xl text-slate-500 font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: The Advantage (Full Width Dark) */}
        {/* --- Section starts here --- */}
{/* 1. Remove max-w-5xl from this outer section to make it hit the screen edges */}
<section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-950 text-white p-12 md:p-24 mb-48 overflow-hidden">
  
  {/* Light Effect */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px]"></div>
  
  {/* 2. Inner Wrapper: This keeps the text aligned with your other page content */}
  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
    
    <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-purple-500 mb-16">
      The Expert Advantage
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="space-y-6">
        <h4 className="text-3xl font-bold tracking-tight text-white uppercase italic">
          Strategic Offloading
        </h4>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          High-authority content requires significant intellectual capital and time. We manage the entire editorial lifecycle, allowing you to focus on core business operations.
        </p>
      </div>
      
      {/* Professional Border */}
      <div className="space-y-6 border-l border-slate-800 pl-10">
        <h4 className="text-3xl font-bold tracking-tight text-white uppercase italic">
          Tonal Precision
        </h4>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          Whether your brand requires a strictly academic tone or a peer-to-peer approach, our writers engineer content that mirrors your specific brand identity without compromise.
        </p>
      </div>
    </div>
    
  </div>
</section>

        {/* Final CTA */}
        <section className="text-center py-20 bg-slate-50">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter text-slate-950 uppercase">
            Start Your Story.
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
            A professional blog is the most effective tool for long-term growth. Partner with Expert Opinions to establish your digital voice.
          </p>
          <Link to="/contact" className="inline-block bg-slate-950 text-white px-20 py-6 font-bold uppercase tracking-widest text-sm hover:bg-purple-600 transition-all">
            Launch Your Brand Voice
          </Link>
        </section>

      </div>
    </div>
  )
},
  };

  const currentService = servicesData[slug];

  if (!currentService) {
    return <div className="pt-40 text-center text-xl font-poppins">Service Not Found</div>;
  }

  return (
    <div className="bg-white font-poppins">
      {/* Yahan se purana static hero section (grey box) remove kar diya hai 
          kyunki ab hmara hero section "content" ke andar hi define hai.
      */}
      
      <main className="w-full">
        {currentService.content}
      </main>
      <ContactForm />
    </div>
  );
};

export default ServiceDetail;