import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const statsData = [
  {
    value: "150+",
    title: "Successful Projects",
    subtitle: "High-Velocity Software Architectures Deployed",
    metric: "99.99% Production Uptime SLA",
    highlights: [
      "Next.js 15 & NestJS Enterprise Web Architectures",
      "AWS & GCP Cloud-Native Serverless Orchestrations",
      "VAPT-Hardened & Compliant Stacks",
      "Custom Automated Design Token Pipelines"
    ],
    proof: "Active deployment across high-traffic commerce, financial tech, and enterprise portals."
  },
  {
    value: "12",
    title: "Countries Reached",
    subtitle: "Global Enterprise Market Presence",
    metric: "Global Latency Under 50ms",
    highlights: [
      "Multi-region edge routing structures",
      "Compliance under GDPR, SOC2, and CRA",
      "Localized CDN configurations with low latency",
      "Cross-border secure database replication"
    ],
    proof: "Powering platforms that adhere strictly to international data sovereignty and security regulations."
  },
  {
    value: "80+",
    title: "Satisfied Clients",
    subtitle: "Long-Term Retained Enterprise Partners",
    metric: "Net Promoter Score (NPS): 78",
    highlights: [
      "100% contract renewal rate with tier-one partners",
      "Dedicated senior solution architects assigned",
      "Continuous optimization audits and security VAPT",
      "Programmatic funnel engineering driving ROI"
    ],
    proof: "Trusted by security officers and product leaders to maintain high operational standards."
  },
  {
    value: "5+",
    title: "Years of Excellence",
    subtitle: "Leading Growth Engineering & Cloud Architectures",
    metric: "42% Client Revenue Growth (CAGR)",
    highlights: [
      "Pioneers of declarative IaC pipelines",
      "Production deployment of fleet-based AI agents",
      "Expert-level consultancies across fintech and retail",
      "Decoupled, headless modern architectures"
    ],
    proof: "Five years of defining enterprise-grade software standards and driving technological modernization."
  }
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white font-poppins relative border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">

          {/* Left Column: Heading and Brand Narrative */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between py-2">
            <div>
              <span className="text-purple-600 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 block">
                proven capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                Our Journey of <br />
                <span className="text-purple-600">Digital Impact</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We design, build, and deploy high-performance software ecosystems that scale. Our metrics reflect our unyielding commitment to engineering and operational excellence.
              </p>
            </div>

            {/* Call to action */}
            <div className="hidden lg:block mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:scale-[1.02] transform-gpu"
              >
                <span>Partner With Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Grid and Details */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 relative z-10">
            {/* Interactive 2x2 Grid (No Icons/Emojis) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {statsData.map((stat, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 bg-white ${isActive
                      ? 'border-purple-600 shadow-md'
                      : 'border-slate-200 hover:border-purple-300'
                      }`}
                  >
                    <div className="flex flex-col min-w-0">
                      <span className={`text-2xl md:text-3xl font-black tracking-tight leading-none mb-1 transition-colors ${isActive ? 'text-purple-600' : 'text-slate-900'
                        }`}>
                        {stat.value}
                      </span>
                      <span className="font-semibold text-[10px] md:text-xs text-slate-500 truncate">
                        {stat.title}
                      </span>
                    </div>

                    <div className={`hidden md:flex w-5 h-5 rounded-full border items-center justify-center transition-all ${isActive
                      ? 'bg-purple-600 border-purple-600 text-white'
                      : 'border-slate-200 text-slate-400'
                      }`}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Detail Card (No checkmarks/emojis) */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 min-h-[250px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full justify-between gap-5"
                >
                  <div>
                    <span className="text-[10px] font-black text-purple-600 tracking-[0.2em] uppercase block mb-1">
                      {statsData[activeIndex].subtitle}
                    </span>

                    <div className="inline-block bg-white border border-slate-200 text-slate-700 text-[10px] md:text-xs font-bold py-1 px-3 rounded-md mb-4">
                      {statsData[activeIndex].metric}
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {statsData[activeIndex].highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 leading-normal">
                          <span className="text-purple-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200/80 pt-4">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Technical Validation</span>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {statsData[activeIndex].proof}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Call to Action */}
            <div className="flex lg:hidden justify-center mt-2 w-full">
              <a
                href="/contact"
                className="w-full max-w-xs text-center bg-purple-600 hover:bg-purple-700 text-white py-3.5 rounded-full font-bold transition-all shadow-md"
              >
                Partner With Us
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;