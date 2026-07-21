import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, BarChart3, Globe, ArrowRight, Search, } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Insights from '../components/Insights';
import { updateSEO } from '../utils/seo';

const NEW_SERVICES_DATA = {
  // 💻 Core Engineering & Product Development
  "enterprise-web-application-engineering": {
    title: "Enterprise Web Application Engineering",
    subtitle: "Scalable, secure, and ultra-fast web apps using MERN Stack, Next.js, and TypeScript.",
    category: "Core Engineering & Product Development",
    desc: "Scalable, secure, aur ultra-fast web apps using MERN Stack, Next.js, aur TypeScript jo heavy, production-grade traffic handle kar sakein. We design reliable database schemas, robust server-side APIs, and responsive frontends that deliver exceptional loading speeds.",
    bullets: ["Scalable MERN & Next.js setups", "High-throughput API layer engineering", "Production-grade traffic load balancing", "TypeScript type-safe system design"]
  },
  "cross-platform-native-mobile-development": {
    title: "Cross-Platform & Native Mobile Development",
    subtitle: "High-performance mobile apps built using Flutter and Kotlin/Swift.",
    category: "Core Engineering & Product Development",
    desc: "High-performance mobile apps building using Flutter aur Kotlin/Swift, with offline persistence aur native hardware integrations. Our mobile builds focus on fluid layouts, high framerates, and battery efficiency.",
    bullets: ["Flutter single-codebase velocity", "Native Swift & Kotlin bindings", "Offline local database state synchronization", "Sensors and native hardware integration"]
  },
  "full-cycle-saas-product-engineering": {
    title: "Full-Cycle SaaS Product Engineering",
    subtitle: "Multi-tenant SaaS architectures, user management, and multi-region deployments.",
    category: "Core Engineering & Product Development",
    desc: "Multi-tenant SaaS architecture build karna, including multi-tier subscription billing, user management, aur multi-region deployments. We help you scale from MVP to multi-million subscriber infrastructures.",
    bullets: ["Multi-tenant architectural isolation", "Multi-tier subscription billing integrations", "Dynamic workspace & user permissions", "Multi-region secure cloud deployment protocols"]
  },
  "headless-commerce-custom-ecommerce-architecture": {
    title: "Headless Commerce & Custom E-Commerce",
    subtitle: "Traditional setups se hat kar, decoupled architectures par ultra-fast global e-commerce systems.",
    category: "Core Engineering & Product Development",
    desc: "Traditional setups se hat kar, decoupled architectures par ultra-fast global e-commerce systems build karna (using Shopify Hydrogen, Next.js, or custom backends) to maximize conversions and organic search rankings.",
    bullets: ["Decoupled Shopify Hydrogen frontends", "Ultra-fast global page speeds & SEO rankings", "Custom transaction & checkout systems engineering", "Highly secure checkout gateway integrations"]
  },

  // 🤖 Next-Gen AI & Automation
  "agentic-ai-autonomous-workflow-orchestration": {
    title: "Agentic AI & Autonomous Workflow Orchestration",
    subtitle: "Multi-step business logic, decision-making, and automated business agents.",
    category: "Next-Gen AI & Automation (Deep Tech)",
    desc: "Aise intelligent AI agents design karna jo multi-step business logic, decision-making, aur automated tasks (like HR, Sales, Support) khud run karein with minimal human supervision.",
    bullets: ["Autonomous AI agent design", "Multi-step logic workflow orchestration", "Automated customer support & HR agents", "Semantic routing and tool use optimization"]
  },
  "custom-llm-fine-tuning-rag-frameworks": {
    title: "Custom LLM Fine-Tuning & RAG Frameworks",
    subtitle: "Retrieval-Augmented Generation (RAG) and model tuning on private enterprise data.",
    category: "Next-Gen AI & Automation (Deep Tech)",
    desc: "Private enterprise data par open-source models (Llama, Mistral) ko train aur optimize karna using Retrieval-Augmented Generation (RAG) for secure, hallucination-free outputs.",
    bullets: ["Private database RAG framework engineering", "Llama & Mistral custom fine-tuning", "Secure offline model hosting architectures", "Hallucination mitigation and vector searches"]
  },
  "computer-vision-spatial-analytics": {
    title: "Computer Vision & Spatial Analytics",
    subtitle: "Real-time object detection, video analytics, and spatial tracking platforms.",
    category: "Next-Gen AI & Automation (Deep Tech)",
    desc: "Real-time object detection, video/sports analytics platforms, aur intelligent camera-based tracking systems designed to extract insights from raw video feeds.",
    bullets: ["Real-time object detection pipelines", "Sports and video analytics engines", "Intelligent camera tracking deployments", "Edge AI and low-latency classification models"]
  },
  "predictive-data-science-advanced-analytics": {
    title: "Predictive Data Science & Advanced Analytics",
    subtitle: "Machine learning algorithms to predict business growth and customer churn.",
    category: "Next-Gen AI & Automation (Deep Tech)",
    desc: "Machine learning algorithms ke zariye massive data sets ko analyze karna takay business growth aur customer churn ko predict kiya ja sake, turning raw data into strategic foresight.",
    bullets: ["Advanced analytics pipeline setups", "Machine learning churn prediction models", "Automated cohort retention analysis", "Data warehouse reporting integrations"]
  },

  // 🌐 Cloud, DevOps & Infrastructure
  "cloud-architecture-infrastructure-as-code": {
    title: "Cloud Architecture & Infrastructure as Code (IaC)",
    subtitle: "Automated, secure, and auto-scaling cloud infra with Terraform.",
    category: "Cloud, DevOps & Infrastructure",
    desc: "AWS, GCP, aur Azure par Terraform aur CloudFormation ke zariye automated, secure, aur auto-scaling cloud infra khara karna, ensuring maximum reliability and minimal manual maintenance.",
    bullets: ["Terraform and CloudFormation IaC", "AWS, GCP, & Azure architecture designs", "Auto-scaling infrastructure models", "High-security cloud VPC configurations"]
  },
  "enterprise-devops-cicd-orchestration": {
    title: "Enterprise DevOps & CI/CD Orchestration",
    subtitle: "Zero-downtime containerized deployments using Docker and Kubernetes.",
    category: "Cloud, DevOps & Infrastructure",
    desc: "Docker, Kubernetes, aur automated pipelines ke sath zero-downtime, continuous deployment setups manage karna. Eliminate release friction and guarantee high availability.",
    bullets: ["Docker & Kubernetes container orchestration", "Zero-downtime continuous deployment pipelines", "Automated deployment verification testing", "Advanced cluster governance and load routing"]
  },
  "serverless-modernization-microservices": {
    title: "Serverless Modernization & Microservices",
    subtitle: "Decouple legacy monolithic software systems into fast, cost-effective serverless microservices.",
    category: "Cloud, DevOps & Infrastructure",
    desc: "Monolithic software systems ko break kar ke fast, cost-effective microservices aur serverless architectures par convert karna, reducing computing costs and improving scaling capacity.",
    bullets: ["Monolith decomposition strategies", "Fast AWS Lambda & serverless engineering", "Microservices communication protocols", "Cost-effective server resource provisioning"]
  },
  "high-scale-api-design-integration-ecosystems": {
    title: "High-Scale API Design & Integration Ecosystems",
    subtitle: "GraphQL, REST, and gRPC high-throughput secure API layers.",
    category: "Cloud, DevOps & Infrastructure",
    desc: "Systems ke darmiyan secure, high-throughput custom API layers build karna (GraphQL, REST, gRPC) to ensure high-performance, real-time data communication.",
    bullets: ["GraphQL & gRPC high-throughput setups", "RESTful secure enterprise APIs", "API gateway routing & rate-limiting policies", "Ecosystem integration architectures"]
  },

  "vapt": {
    title: "VAPT (Vulnerability Assessment & Penetration Testing)",
    subtitle: "White-hat hacking, infrastructure auditing, and vulnerability patching.",
    category: "Advanced Cybersecurity & Blockchain (Web3)",
    desc: "Elite white-hat hacking, deep infrastructure security auditing, aur code-level vulnerability patching. Keep your systems safe from zero-days and leaks.",
    bullets: ["Elite white-hat vulnerability scans", "Infrastructure security audit checks", "Code-level vulnerability patching", "OWASP top 10 pentesting models"]
  },
  "zero-trust-architecture-cryptographic-implementation": {
    title: "Zero-Trust Architecture & Cryptographic Implementation",
    subtitle: "Decentralized identity (IAM), advanced OAuth, and bulletproof data encryption.",
    category: "Advanced Cybersecurity & Blockchain (Web3)",
    desc: "Systems mein decentralized identity (IAM), advanced OAuth setups, aur bulletproof data encryption layers deploy karna. Never trust, always verify.",
    bullets: ["Decentralized Identity & Access Management", "OAuth and single sign-on (SSO) deployments", "Bulletproof database encryption layers", "Access logging and risk scoring engines"]
  },
  "smart-contracts-decentralized-protocols-web3": {
    title: "Smart Contracts & Decentralized Protocols (Web3)",
    subtitle: "Gas-optimized EVM dApps built on Solana, Ethereum, or custom chains.",
    category: "Advanced Cybersecurity & Blockchain (Web3)",
    desc: "Ethereum, Solana, ya custom EVM chains par gas-optimized smart contracts likhna aur dApps build karna. Enable trustless decentralized web protocols.",
    bullets: ["Gas-optimized Solidity contract design", "Solana Rust contract programming", "dApp frontend Web3 integrations", "Smart contract unit audit pipelines"]
  },

  // 🎨 Design & Immersive Experiences
  "figma-ui-ux-design-systems": {
    title: "Enterprise UI/UX Design Systems",
    subtitle: "Scalable Figma design tokens, high-contrast dark/light setups, and high-fidelity wireframes.",
    category: "Design & Immersive Experiences",
    desc: "Complex software platforms ke liye scalable design systems, wireframes, aur premium high-contrast dark/light interfaces build karna on Figma.",
    bullets: ["Figma design token systems creation", "High-contrast dark/light UI interfaces", "Complex data dashboards design", "Interactive user flows & high-fidelity wireframes"]
  },
  "spatial-computing-spatial-app-development": {
    title: "Spatial Computing & Spatial App Development",
    subtitle: "AR/VR environments for Apple Vision Pro, Meta Quest, and 3D interactive spaces.",
    category: "Design & Immersive Experiences",
    desc: "Apple Vision Pro, Meta Quest, aur AR/VR environments ke liye immersive, next-gen apps aur interactive 3D spaces design karna.",
    bullets: ["Apple Vision Pro app designing", "Meta Quest 3D immersive interfaces", "AR/VR interactive environments", "Unity/Unreal engine integration support"]
  },
  "iot-solutions-architecture": {
    title: "IoT Solutions Architecture",
    subtitle: "Smart hardware networks, firmware engineering, and cloud-connected IoT dashboards.",
    category: "Design & Immersive Experiences",
    desc: "Smart hardware networks, firmware development, aur cloud-connected IoT dashboards engineering, connecting your software to physical device telemetry.",
    bullets: ["Smart hardware network architectures", "Firmware engineering & updates", "Cloud-connected IoT dashboard panels", "Real-time sensor telemetry flows"]
  },

  // 📈 Modern Growth & Cognitive Marketing
  "geo-aeo-generative-engine-optimization": {
    title: "GEO & AEO (Generative Engine Optimization)",
    subtitle: "Optimizing websites so that AI engines (ChatGPT, Gemini, Perplexity) recommend your brand.",
    category: "Modern Growth & Cognitive Marketing",
    desc: "Websites ko optimize karna takay AI engines (ChatGPT, Gemini, Perplexity) searches ke waqt aapke brand ko recommend karein, staying ahead of legacy search algorithms.",
    bullets: ["AI engine mention optimization", "Gemini & ChatGPT search citation planning", "Structured schemas and semantic context", "Perplexity search recommendation indexing"]
  },
  "growth-hacking-programmatic-funnel-engineering": {
    title: "Growth Hacking & Programmatic Funnel Engineering",
    subtitle: "Data-driven multi-channel programmatic funnels and automated lead generation.",
    category: "Modern Growth & Cognitive Marketing",
    desc: "Data-driven user acquisition, multi-channel lead generation automation, aur algorithmic marketing funnels to accelerate lead flow and organic customer acquisition.",
    bullets: ["Data-driven user acquisition funnels", "Multi-channel lead generation automation", "Algorithmic email & CRM setup rules", "Analytics-driven conversion optimization"]
  },
  "brand-strategy-digital-identity-systems": {
    title: "Brand Strategy & Digital Identity Systems",
    subtitle: "Corporate brand design, premium brand books, marketing videos, and motion graphics.",
    category: "Modern Growth & Cognitive Marketing",
    desc: "Global businesses ke liye complete corporate design, premium brand books, marketing video production, aur high-end motion graphics assets that command authority.",
    bullets: ["Corporate designs and typography rulebooks", "Premium brand identity style guidelines", "Marketing video planning & production", "High-end 2D/3D motion graphics assets"]
  }
};

const FallbackServicePage = ({ slug }) => {
  const service = NEW_SERVICES_DATA[slug];
  if (!service) return null;

  return (
    <div className="bg-[#050508] text-white min-h-screen overflow-x-hidden font-sans pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 border-b border-purple-500/10 bg-gradient-to-b from-[#0d0c14] to-[#050508]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex-1">
            <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase block mb-4">{service.category}</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
              {service.subtitle}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/20">
              Consult an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Service Overview & Strategic Value</h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
              {service.desc}
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-white">Core Competencies & Scope</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span>
                    <span className="text-sm text-gray-300 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-white/[0.02] border border-purple-500/15 rounded-2xl p-8 h-fit shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-white">Why Expert Opinions?</h3>
            <ul className="space-y-4">
              {[
                "100% Client-aligned engineering roadmaps.",
                "Zero-overhead execution & agile delivery.",
                "Advisory led by enterprise architects.",
                "Predictable schedules & weekly updates."
              ].map((text, idx) => (
                <li key={idx} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const service = NEW_SERVICES_DATA[slug];
    if (service) {
      updateSEO(
        service.title,
        `${service.subtitle} In-depth details, execution frameworks, and technical architecture reviews from Expert Opinions.`
      );
    }
  }, [slug]);

  // --- SERVICES DATA REPOSITORY ---
  const servicesData = {
    "enterprise-web-application-engineering": {
      title: "Enterprise Web Application Engineering",
      subtitle: "Architecting for High-Velocity Business",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783622301/Enterprise_Web_Application_Engineering_ahxlus.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Full-Stack Engineering Hero --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35 grayscale-[20%]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783622301/Enterprise_Web_Application_Engineering_ahxlus.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Core Engineering & Product Development
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Enterprise Web <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Application Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed mb-8">
                  Architecting the digital nervous system of your business. We engineer resilient, production-grade systems designed to handle high concurrency, strict security, and real-time complexity.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Initiate Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Enterprise Web Application Engineering
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Core Engineering & Product Development: Architecting the digital nervous system of your business. We engineer resilient, production-grade systems designed to handle high concurrency, strict security, and real-time complexity.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. High-Velocity Architectures
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              When applications reach enterprise scale, traditional development paradigms shatter. If your system is not engineered from day one to handle high-concurrency traffic, complex data state synchronization, and absolute identity isolation, it becomes an expensive legacy liability.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              At Expert Opinions, we don't just write code; we engineer resilient, production-grade enterprise software systems designed to survive real traffic, rigorous security audits, and continuous business evolution. Security, observability, and sub-second performance are not treated as "Phase 2" additions. They are built directly into the foundational runtime layers.
            </p>

            {/* --- Section 3 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. The 2026 Enterprise Layers
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Layer 01 // UI Layer (Type Safety & Frontend):</strong> We eliminate runtime errors at scale by enforcing TypeScript across the entire lifecycle. Utilizing Next.js 15 and React 19, server-first design architectures shift computations to edge layers to achieve sub-second browser paints.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Layer 02 // API Gateway (High-Throughput Backends):</strong> We architect APIs using a Modular Monolith pattern with explicit, clean module boundaries (billing, identity, reporting). Node.js runtimes powered by NestJS or Fastify ensure seamless handling of high-concurrency connection pools.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Layer 03 // Storage & Cache (Airtight Data Hygiene):</strong> Strict data access controls are designed directly into the database schema, ensuring tenant isolation is completely airtight. We pair PostgreSQL for relational integrity with Redis for lightning-fast caching.
            </p>

            {/* --- Section 4 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Operational Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Metric / Objective</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Interaction to Next Paint (INP)</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">≤ 200 ms</td>
                    <td className="p-4 text-sm text-slate-600">Eliminates UI lag during complex form entry.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Largest Contentful Paint (LCP)</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">≤ 2.5 s</td>
                    <td className="p-4 text-sm text-slate-600">Maximizes user retention and processing speed.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Global Edge Latency</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">≤ 50 ms</td>
                    <td className="p-4 text-sm text-slate-600">Ensures uniform performance for distributed global teams.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Security Standards</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">OWASP Top 10 Align</td>
                    <td className="p-4 text-sm text-slate-600">Zero-trust authentication via phish-resistant MFA.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Systems Engineering Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Static Analysis:</strong> Automated linting, end-to-end type validation, and dependency vulnerability scans run on every single commit.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Quality Gates:</strong> Rigorous test suites map out mission-critical business logic alongside WCAG accessibility testing.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Canary Deploy:</strong> Zero-downtime updates are routed through parallel blue-green environments to ensure seamless transition.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Real-Time Observability:</strong> Comprehensive error tracking and distributed tracing identify potential bottlenecks before they affect operations.
            </p>

            {/* --- Section 6 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Technical Transformation
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop wrestling with legacy liabilities and fragile tech stacks. Partner with an engineering team that translates system architecture into concrete business velocity.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Stack Consultation →
            </Link>

          </div>
        </div>
      )
    },
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
          <section style={{ position: 'relative', minHeight: '100vh', background: '#0D0C0A', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>

            {/* BG image */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Amazon_Optimization_and_Management_wicum8_adznot.webp')`,
              backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15,
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(108deg,#0D0C0A 42%,rgba(13,12,10,0.72) 68%,rgba(13,12,10,0.15) 100%)' }} />

            {/* Vertical rule lines */}
            <div className="hidden lg:block" style={{ position: 'absolute', top: 0, left: '72px', width: '1px', height: '100%', background: 'rgba(255,255,255,0.04)' }} />
            <div className="hidden lg:block" style={{ position: 'absolute', top: 0, right: '72px', width: '1px', height: '100%', background: 'rgba(255,255,255,0.04)' }} />

            {/* Upper text grid */}
            <div className="am-hero-grid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', padding: 'clamp(120px,14vw,160px) clamp(24px,6vw,72px) 0' }}>
              <div>
                <span className="am-tag" style={{ display: 'block', marginBottom: '28px' }}>Amazon Management &amp; Optimization</span>
                <h1 className="am-display" style={{ fontSize: 'clamp(50px,6.8vw,92px)', fontWeight: 700, color: '#fff', lineHeight: 0.97, letterSpacing: '-1.5px' }}>
                  Your Amazon.<br />
                  <em style={{ color: '#E8501A', fontStyle: 'italic' }}>Fully Managed.</em><br />
                  Fully Optimized.
                </h1>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '4px' }}>
                <p style={{ fontSize: '17px', fontWeight: 300, color: 'rgba(255,255,255,0.4)', lineHeight: 1.85, maxWidth: '400px', marginBottom: '44px' }}>
                  Everyday, most Amazon sellers are losing out on opportunities. Not anymore! We will help you get your share of profits with professional planning, management, and measurable results.            </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="am-btn-primary">Start With a Free Audit</Link>
                  <a href="#services" className="am-btn-ghost">See Our Services <span style={{ fontSize: '20px', lineHeight: 1 }}>↓</span></a>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="am-stat-bar" style={{
              position: 'relative', zIndex: 2,
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              margin: '72px clamp(24px,6vw,72px) 0',
            }}>
              {[
                { num: '+218%', label: 'Average revenue growth' },
                { num: '−42%', label: 'ACOS reduction in 90 days' },
                { num: '3.8×', label: 'Average ROAS improvement' },
                { num: '94%', label: 'Long-term client retention' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '30px 26px 36px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <div className="am-bebas" style={{ fontSize: 'clamp(32px,3.5vw,46px)', color: '#E8501A', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                  <div style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════
          MARQUEE
      ══════════════════════════════ */}
          <div style={{ background: '#E8501A', overflow: 'hidden', padding: '15px 0' }}>
            <div className="am-marquee-track">
              {[...Array(2)].map((_, rep) =>
                ['Listing Optimization', 'PPC Management', 'Account Protection', 'Inventory Forecasting', 'A+ Content', 'Brand Store Build', 'Review Strategy', 'FBA Consulting', 'Competitor Analysis', 'Analytics & Reporting']
                  .map((item, i) => (
                    <span key={`${rep}-${i}`} className="am-bebas" style={{ fontSize: '14px', color: '#fff', padding: '0 32px', opacity: i % 2 === 0 ? 1 : 0.55, whiteSpace: 'nowrap', letterSpacing: '0.14em' }}>
                      {item} &nbsp;·
                    </span>
                  ))
              )}
            </div>
          </div>

          {/* ══════════════════════════════
          INTRO STATEMENT
      ══════════════════════════════ */}
          <section style={{ padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,72px)', borderBottom: '1px solid #ECEAE6' }}>
            <div className="am-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '88px', alignItems: 'center' }}>
              <div>
                <span className="am-divider" />
                <h2 className="am-display" style={{ fontSize: 'clamp(30px,4vw,56px)', fontWeight: 700, lineHeight: 1.08, color: '#111', letterSpacing: '-0.8px' }}>
                  Amazon is the world's most competitive marketplace.{' '}
                  <em style={{ color: '#E8501A', fontStyle: 'italic' }}>You need more than luck.</em>
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontSize: '17px', fontWeight: 300, color: '#7a746d', lineHeight: 1.9 }}>
                  In an environment with many sellers chasing after the same customers, the distinction between a successful business and a dormant one rests on having an effective strategy, implementation, and constant optimisation.            </p>
                <p style={{ fontSize: '17px', fontWeight: 300, color: '#7a746d', lineHeight: 1.9 }}>
                  Expert Opinions doesn’t just provide tips, we take full responsibility for your entire Amazon listing and keep working until you see positive changes.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════
          SERVICES
      ══════════════════════════════ */}
          <section id="services" style={{ padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,72px)' }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '72px' }}>
              <div>
                <span className="am-tag" style={{ display: 'block', marginBottom: '14px' }}>Our Services</span>
                <h2 className="am-display" style={{ fontSize: 'clamp(32px,4.5vw,62px)', fontWeight: 700, color: '#111', lineHeight: 1.0, letterSpacing: '-1.5px' }}>
                  Everything your Amazon<br />business needs to grow
                </h2>
              </div>
              <p style={{ fontSize: '15px', fontWeight: 300, color: '#9A9088', maxWidth: '300px', lineHeight: 1.75 }}>
                Six core services, one unified strategy. Each engineered to move your numbers.
              </p>
            </div>

            {/* Service Rows */}
            {[
              {
                num: '01', title: 'Listing Optimization',
                what: 'Product listing is the shop window of your online store. If the title of your product listing is poorly optimized, lacks bullet points or has a weak backend, A9 algorithm hides it from consumers, who scroll by. We optimize every bit of it through comprehensive keyword research, competitive gap analysis and professional copywriting to ensure that your product listing ranks better, converts more clicks into sales.',
                whyTitle: 'Rank on page one. Convert browsers into buyers.',
                why: "Most sellers don’t realize that their product listings are losing them business every single day. A properly optimized product listing helps boost your conversion rates by two times without adding even a single extra penny to your marketing budget.",
                tags: ['Keyword Research', 'Title & Bullet Copywriting', 'Backend SEO', 'Search Term Indexing'],
              },
              {
                num: '02', title: 'PPC & Sponsored Ads Management',
                what: "Amazon PPC is one of the most technically difficult paid channels within e-commerce. Bad campaign structuring, broad match wastage, and reactive bidding could eat away at your profits. We design, set up, and continually optimize all aspects of your ad campaigns: Sponsored Products, Sponsored Brands, and Sponsored Display. This will ensure your ACOS is lowered and your budget is optimized to the fullest extent.",
                whyTitle: 'Stop burning ad spend. Start generating real returns.',
                why: "In less than 60 days, we have grown companies from 80% ACOS to below 18%. Our process relies on multilayered campaign structure, meticulous negative keyword control, and weekly bidding strategies. You get complete visibility into your budget and exactly what it does for you.",
                tags: ['Campaign Architecture', 'Bid Optimisation', 'Negative Keyword Management', 'ROAS Maximisation'],
              },
              {
                num: '03', title: 'Account Health & Brand Protection',
                what: "The legal environment of Amazon is always changing. All it takes is one suppression notice, intellectual property infringement notice, or performance issue to shut down your business in seconds. We track every aspect of your Amazon account day and night – metrics, listings, review speed – and mitigate any risks that may arise.",
                whyTitle: 'Sleep well knowing your account is fully protected.',
                why: "Any successful brand faces threats from brand hijackers, counterfeiters, or listing suspensions at some point in time. With regular monitoring of your Amazon account, handling of all Intellectual Property notices and listing suppressions, and communication with Seller Support, we ensure your reputation remains untarnished.",
                tags: ['Performance Monitoring', 'Policy Compliance', 'Hijacker Removal', 'Review Management'],
              },
              {
                num: '04', title: 'Inventory & FBA Management',
                what: "Lack of stock results in the loss of your organic ranking. An excess of stock ties up your money in long-term storage costs. Proper FBA fulfillment calls for accurate demand forecasting, timely reorder planning, and knowledge of IPI policies. Leave all the logistics to us so that your supply chain is no bottleneck to your business.",
                whyTitle: 'Never lose rank to a stockout again.',
                why: "An out-of-stock product will lose its BSR ranking; recovering it may take you months. Our forecasting algorithm considers all seasonal and Amazon inventory restrictions to ensure that you always have sufficient but not excessive amounts of inventory at all times.",
                tags: ['Demand Forecasting', 'Reorder Planning', 'FBA Reconciliation', 'IPI Score Management'],
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
            ].map((s, i) => (
              <div key={i} className="am-svc-row">
                {/* Number spine */}
                <div className="am-svc-num-col">
                  <span className="am-svc-num-text">{s.num}</span>
                </div>
                {/* What it is */}
                <div className="am-svc-body">
                  <h3 className="am-display" style={{ fontSize: 'clamp(22px,2.2vw,30px)', fontWeight: 700, color: '#111', marginBottom: '18px', lineHeight: 1.15, letterSpacing: '-0.3px' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: 300, color: '#7a746d', lineHeight: 1.9, maxWidth: '520px' }}>{s.what}</p>
                </div>
                {/* Why it matters */}
                <div className="am-svc-panel">
                  <div>
                    <span className="am-tag" style={{ display: 'block', marginBottom: '14px' }}>Why it matters for you</span>
                    <h4 className="am-display" style={{ fontSize: 'clamp(17px,1.6vw,21px)', fontWeight: 600, color: '#111', marginBottom: '14px', lineHeight: 1.3, letterSpacing: '-0.2px' }}>
                      {s.whyTitle}
                    </h4>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: '#7a746d', lineHeight: 1.9 }}>{s.why}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.tags.map((t, j) => <span key={j} className="am-tag-pill">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ══════════════════════════════
          WHY EXPERT OPINIONS — dark
      ══════════════════════════════ */}
          <section style={{ background: '#0D0C0A', padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,72px)' }}>
            <div className="am-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'flex-start' }}>

              <div>
                <span className="am-tag" style={{ display: 'block', marginBottom: '22px' }}>Why Expert Opinions</span>
                <h2 className="am-display" style={{ fontSize: 'clamp(32px,4vw,60px)', fontWeight: 700, color: '#fff', lineHeight: 1.03, letterSpacing: '-1.2px', marginBottom: '28px' }}>
                  We’re not just managing.<br />
                  We’re <em style={{ color: '#E8501A', fontStyle: 'italic' }}>developing</em> your brand.
                </h2>
                <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.38)', lineHeight: 1.9, marginBottom: '48px', maxWidth: '380px' }}>
                  Agencies provide you with a set-up document and go MIA. We’re down in the trenches with you – measuring, optimizing, and moving forward every week, without you asking us to.
                </p>
                <Link to="/contact" className="am-btn-primary">Schedule Your Free Strategy Session</Link>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, paddingTop: '8px' }}>
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
                      <p style={{ fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: '5px', lineHeight: 1.4 }}>{item.t}</p>
                      <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.36)', lineHeight: 1.8 }}>{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════
          PROCESS
      ══════════════════════════════ */}
          <section style={{ background: '#F8F5F1', padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,72px)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px', marginBottom: '64px' }}>
              <div>
                <span className="am-tag" style={{ display: 'block', marginBottom: '14px' }}>How It Works</span>
                <h2 className="am-display" style={{ fontSize: 'clamp(30px,4vw,54px)', fontWeight: 700, color: '#111', lineHeight: 1.0, letterSpacing: '-1.2px' }}>
                  From first audit to<br />sustained growth
                </h2>
              </div>
              <span className="am-divider" style={{ marginBottom: '8px' }} />
            </div>
            <div className="am-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: '#E8E4DF', gap: '1px' }}>
              {[
                {
                  num: '01',
                  title: 'Free Audit',
                  desc: 'Our team will conduct a thorough analysis of your listings, ad design, account health, competition and pricing strategy to understand every potential and every pitfall of your existing strategy.'
                },
                {
                  num: '02',
                  title: 'Unique Plan',
                  desc: 'Together, we develop a customized 90 day plan that is focused on achieving your objectives, your margins and your competitive position. There are no cookie cutter plans here.'
                },
                {
                  num: '03',
                  title: 'Total Execution',
                  desc: 'We handle all the work – listing copy, campaign setup, A+ pages, inventory planning – and start delivering you results right away, not in 2-3 months down the road.'
                },
                {
                  num: '04',
                  title: 'Grow & Measure',
                  desc: "Monthly strategy meetings, a performance dashboard and ongoing optimization mean steady growth. You won’t find us resting on our laurels after success."
                },
              ].map((p, i) => (
                <div key={i} className="am-proc-card">
                  <div className="am-bebas" style={{ fontSize: '52px', color: '#E0DBD4', lineHeight: 1, marginBottom: '28px' }}>{p.num}</div>
                  <h4 className="am-display" style={{ fontSize: '22px', fontWeight: 600, color: '#111', marginBottom: '14px', lineHeight: 1.2 }}>{p.title}</h4>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: '#7a746d', lineHeight: 1.85 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════
          TESTIMONIAL
      ══════════════════════════════ */}
          <section style={{ padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,72px)', borderTop: '1px solid #ECEAE6', borderBottom: '1px solid #ECEAE6' }}>
            <div style={{ maxWidth: '840px' }}>
              <span className="am-display" style={{ fontSize: '120px', lineHeight: 0.55, color: '#E8501A', display: 'block', marginBottom: '28px', fontStyle: 'italic', fontWeight: 600 }}>"</span>
              <p className="am-display" style={{ fontSize: 'clamp(22px,3.2vw,40px)', fontWeight: 600, color: '#111', lineHeight: 1.25, marginBottom: '40px', letterSpacing: '-0.5px' }}>
                Expert Opinions took our Amazon store from barely breaking even to our single largest revenue channel in under six months. The difference in their approach — compared to every other agency we had worked with — was night and day.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div style={{ width: '44px', height: '44px', background: '#E8501A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="am-bebas" style={{ fontSize: '15px', color: '#fff', letterSpacing: '0.06em' }}>MA</span>
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 500, color: '#111', marginBottom: '2px' }}>Maqsood Ahmad</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: '#9A9088' }}>Founder, Expert Opinions</p>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
          <section style={{ background: '#E8501A', padding: 'clamp(80px,12vw,140px) clamp(24px,6vw,72px)' }}>
            <div className="am-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <h2 className="am-display" style={{ fontSize: 'clamp(36px,5.5vw,80px)', fontWeight: 700, color: '#fff', lineHeight: 0.95, letterSpacing: '-2.5px' }}>
                Ready to take Amazon seriously?
              </h2>
              <div>
                <p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.68)', lineHeight: 1.85, marginBottom: '40px' }}>
                  Book a free 30-minute strategy call. We'll audit your current setup, identify your biggest opportunities and lay out exactly how we would grow your account — with zero obligation and no sales pressure.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="am-btn-dark">Book My Free Audit</Link>
                  <span style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>No commitment required</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    },
    "cloud-architecture-infrastructure-as-code": {
      title: "Cloud Architecture & IaC",
      subtitle: "Designing Resilient, Software-Defined Cloud Foundations",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783625106/Cloud_Architecture_IaC_njw1sg.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783625106/Cloud_Architecture_IaC_njw1sg.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Cloud, DevOps &amp; Infrastructure
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Cloud Architecture <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Services &amp; IaC
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Architecting secure, multi-cloud platforms using declaratively versioned infrastructure systems that ensure environment repeatability.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Cloud Foundations
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Software-Defined Cloud Environments
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern enterprise ecosystem, treating the cloud as a mere virtual data center for lift and shift migrations is a fundamentally obsolete approach. When cloud networks are configured manually through web consoles, consistency fragments.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              The resulting system becomes plagued by configuration drift, hidden security vulnerabilities, and unpredictable billing spikes. True cloud velocity requires transitioning to entirely software-defined environments, where your entire global infrastructure is versioned, tested, and automatically provisioned through code.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We architect high-availability, multi-cloud foundations and build automated Infrastructure as Code pipelines designed for absolute repeatability. An enterprise cloud topology must protect core business data while allowing product teams to deploy application features seamlessly by separating foundational base infrastructure from fluid application services.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Infrastructure Systems
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Multi-Account Landing Zones (Landing Zone Governance):</strong> Establishing isolated AWS or Azure Landing Zones for production, staging, and logs. This contains Dev blast radiuses and ensures development compromises never cross over into customer environments. Enforced via IAM boundaries and Zero Trust principles.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Declarative Systems as Code (Immutable Provisioning):</strong> Defining networks, clusters (Kubernetes), and databases using Terraform, OpenTofu, or Pulumi. Safe-by-default modular blueprints pre-configure VPC subnets, transit peering routes, customer encryption keys, and immutable logging layers.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Operational Benchmarks &amp; Resilience
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Operational Metric</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Business Resilience Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Recovery Time Objective</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">15 minutes or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees rapid system restoration after a region-wide cloud outage.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Recovery Point Objective</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">1 minute or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Minimizes transaction data loss via continuous, multi-region replication.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Environment Replication Speed</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">10 minutes or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Allows immediate creation of identical staging stacks via automated code pipelines.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 FinOps Cloud Waste Target</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">5% or less Idle Expenditure</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Automatically tears down non-production resources, optimizing cloud cost efficiency.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. GitOps Automated Delivery Pipeline
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Version Control:</strong> Network routing, firewalls, and cluster resources are written as declarative specs in Git repositories.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Static Policy Scan:</strong> Pull requests trigger linters (Checkov, TFLint, Open Policy Agent) to block public storage or bad configurations.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. State Execution:</strong> Senior code approvals trigger CI/CD jobs that compile states and execute target cloud updates synchronously.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Drift Self-Healing:</strong> Observability loops query running services and automatically alert or override manual panel revisions.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Build Your Infrastructure
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop letting manual deployment mistakes, opaque billing, and fragile legacy cloud architectures limit your engineering potential. Partner with our team to configure high-availability, software-defined ecosystems.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Infrastructure Assessment →
            </Link>

          </div>
        </div>
      )
    },
    "enterprise-devops-cicd-orchestration": {
      title: "Enterprise DevOps & CI/CD",
      subtitle: "Engineering High-Velocity Delivery Engines",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Devops_ylm5az_qzvl6x.webp",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1779160565/Devops_ylm5az_qzvl6x.webp')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Cloud, DevOps &amp; Infrastructure
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Enterprise DevOps <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; CI/CD Pipelines
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering production-grade CI/CD pipelines and deployment architectures designed to eliminate release friction and sustain zero-downtime delivery.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Engineer Your Delivery Pipelines
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Continuous Delivery Pipelines
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In an era where market dynamics shift overnight, software delivery speed is a core driver of business competitiveness. Yet, in many enterprise environments, the path from a developer’s machine to live production remains a fragile, manual, and high risk process.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Fragmented build pipelines, manual verification bottlenecks, and siloed QA testing slow down releases and introduce unpredictable production failures. True engineering velocity requires treating code deployment as a highly disciplined, fully automated science, where software updates move through predictable, self healing validation gates seamlessly.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              An enterprise-ready release pipeline doesn't just copy files to a server. It acts as an automated quality gatekeeper, ensuring that every line of code meets strict performance, testing, and security criteria. We shift quality and security left, integrating linting, SAST audits, and container signing directly into our declarative deployment definitions.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Operational Automation Offerings
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Deeply Optimized Integration (High-Performance Parallel CI):</strong> Eliminating long developer build queues by engineering deeply optimized CI pipelines using GitHub Actions, GitLab CI, or Argo Workflows. Multi-stage caching, parallel container builds, and matrix testing strategies split test suites across isolated concurrences.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Progressive CD Execution (Zero-Downtime Releases):</strong> Implementing progressive delivery frameworks and declarative GitOps deployments (ArgoCD, Flux) on Kubernetes. Blue-Green and Canary strategies roll out new configurations to traffic subsets while automated smoke tests evaluate live health.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. DORA Metrics &amp; Performance Indicators
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Quantitative Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Operational Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Deployment Frequency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">On-Demand (Multiple Daily)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Maximizes product feature velocity and rapidly adapts to customer feedback.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Lead Time for Changes</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">1 hour or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Accelerates time to market from an approved pull request to live production code.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Change Failure Rate</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">5% or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Dramatically reduces deployment bugs, ensuring system stability.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Mean Time to Restore</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">15 minutes or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Minimizes operational downtime via instant, automated rollback systems.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. DevSecOps Automated Delivery Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Security Scan:</strong> Automated static scanning tools (SonarQube, Snyk) parse codebase on submission to flag vulnerabilities.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Composition Audit:</strong> Pipelines evaluate third-party open-source dependencies to validate license compliance and block known exploits.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Signed Containers:</strong> Successful code compiles wrap inside minimal Docker images cryptographically signed using Cosign.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Observability Logs:</strong> Containers run with automated OpenTelemetry hooks, monitoring database connections and API latencies instantly.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Accelerate Your Releases
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop tolerating manual release procedures and fragile systems that break under load. Partner with our DevOps engineering team to build premium, production-grade DevOps infrastructures and sustain continuous growth.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Launch Pipeline Consultation →
            </Link>

          </div>
        </div>
      )
    },
    "serverless-modernization-microservices": {
      title: "Serverless Modernization & Microservices",
      subtitle: "Engineering Scalable, Event-Driven Architectures",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783625569/Serverless_Modernization_Microservices_f7eqgj.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783625569/Serverless_Modernization_Microservices_f7eqgj.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Cloud, DevOps &amp; Infrastructure
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Serverless Modernization <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Microservices
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Decomposing monolithic technical debt into modular container clusters and event-driven serverless computing structures that scale dynamically.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Modernize Your Architecture
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Decoupled Serverless Topologies
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern enterprise software landscape, relying on monolithic, tightly coupled server frameworks introduces massive operational overhead. When computing logic, user authentication, data processing, and payment lifecycles are bundled into a single, massive codebase, scaling a specific resource intensive component requires scaling the entire ecosystem.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              This leads to bloated cloud infrastructure bills, slow deployment velocity, and increased system fragility. True enterprise agility demands a shift toward microservices and serverless architectures, breaking down application complexity into hyper specialized, independent, and event driven computing units that scale dynamically to exactly match user demand.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Moving to a modern system topology means replacing a singular, fragile application database boundary with a distributed, event driven network of self contained services. By separating concerns at the database level and isolating business logic into individual container modules or ephemeral cloud triggers, we contain runtime failures completely.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Modernization Framework Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Containerized Microservices (High-Isolation Containers):</strong> Engineering modular microservices using Docker containerized runtimes for stateful, long-running processes or complex domain logic. Orchestrated inside Kubernetes (EKS/GKE) or AWS Fargate with dedicated data tiers and REST, gRPC, or GraphQL APIs.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Event-Driven Cloud Functions (Event-Driven Serverless Compute):</strong> Implementing serverless compute nodes (AWS Lambda, Cloud Functions, Azure Functions) to manage unpredictable tasks, processing pipelines, or transaction events. Shifting workflows dynamically down to zero to eliminate idle server charges.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Uptime, Latency &amp; Architectural Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Technical Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Production Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Operational Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Serverless Cold Start Latency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">150 ms or less (via Provisioned Concurrency)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees instant user responsiveness even during sudden traffic surges.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Inter-Service Communication</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">20 ms or less (via optimized gRPC protocols)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Prevents microservice network lag from slowing down complex multi-service queries.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Distributed Trace Coverage</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">100% Opentelemetry Instrumentation</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Allows instantaneous error tracking and isolation across complex API paths.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Infrastructure Scalability</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Auto-scales from 0 to 10,000+ concurrent executions</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Safely manages hyper-growth events and flash sales without infrastructure modifications.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Asynchronous Messaging Lifecycle Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Decoupled Ingestion:</strong> API Gateway captures requests and instantly writes structured payloads to high-throughput message brokers like Apache Kafka or SQS.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Async Processing:</strong> The gateway responds immediately to the UI client, while backend microservices execute business computing logic concurrently.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Failure Isolation:</strong> Downstream API timeouts isolate transactions automatically into specialized Dead Letter Queues (DLQ) without blocking.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Observability Mapping:</strong> Distributed trace headers map transactions across lambda functions, queue brokers, and container instances live.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Modernize Your Codebase
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop burning capital maintaining over-provisioned cloud servers. Partner with an engineering team that knows how to decompose complex monolithic structures, reduce technical debt, and engineer cost-optimized architectures.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Decompose Your Legacy Monolith →
            </Link>

          </div>
        </div>
      )
    },
    "high-scale-api-design-integration-ecosystems": {
      title: "High-Scale API Design & Integration",
      subtitle: "Engineering High-Throughput, Low-Latency Data Gateways",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783625732/High-Scale_API_Design_Integration_bljh7h.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783625732/High-Scale_API_Design_Integration_bljh7h.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Cloud, DevOps &amp; Infrastructure
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  High-Scale API Design <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Data Gateways
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering high-throughput data pipelines, rate-limited edge gateways, and low-latency protocol boundaries optimized for millions of requests.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Engineer Your API Gateways
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. High-Throughput Data Gateways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In a connected enterprise ecosystem, Application Programming Interfaces (APIs) are no longer just internal technical connectors. They are the primary digital pipelines driving your business. As organizations expand, their APIs face compounding operational strain.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Processing millions of daily requests, synchronizing real time data across third party networks, and supporting internal engineering teams requires a platform that balances performance with absolute reliability. When APIs are built without strict architectural planning, high traffic spikes expose structural flaws, causing cascading database timeouts, thread exhaustion, and costly operational downtime.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Building a reliable API infrastructure requires protecting your backend data stores from direct, unthrottled consumer traffic. We implement a decoupled multi-layer gateway architecture that intercepts, validates, and optimizes every request at the network edge before it ever reaches your internal application logic, ensuring premium sub-100ms P99 latency.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Integration Framework Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Secure Edge Integration (Unified Gateway Traffic):</strong> Securing internal services by deploying production API Gateways (Kong, AWS API Gateway, Apigee). This layer handles cross-cutting concerns (JWT, OAuth2, TLS termination, CORS) independent of your core business logic, preserving compute resources.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Protocol Adaptation Layer (High-Performance Protocols):</strong> Designing communication models best suited to workloads: predicting RESTful compression endpoints for client devices; GraphQL graphs to eliminate data over-fetching; and ultra-low latency gRPC over HTTP/2 for microservice serialization.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Throughput, Uptime &amp; Engineering Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Performance Metric</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Production Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Core Business Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 API Response Time (p99)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">100 ms or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees instant application load times and data processing.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Throughput Capacity</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">10000+ Requests Per Second</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Maintains absolute system stability during viral user growth or flash sales.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Global Cache Hit Rate</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">75% or higher via Distributed Redis</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Protects core databases from redundant, expensive read operations.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Uptime SLA Boundary</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">99.99% Availability</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Minimizes unexpected operational disruptions across your business.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Traffic Protection &amp; Integration Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Rate Limiting:</strong> Gateways enforce distributed token-bucket rate limits based on IP or API key to prevent brute force surges.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Memory Caching:</strong> Incoming requests for stagnant records are answered directly from high-performance Redis cache pools, bypassing database tiers.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Circuit Breakers:</strong> Downstream API disruptions trigger circuit patterns instantly, delivering graceful fallbacks and monitoring third-party recovery.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. OpenAPI Spec:</strong> Build pipelines automatically generate versioned OpenAPI declarations to give engineering groups clean testing mock interfaces.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Integrate Your System
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop dealing with fragile internal linkages, slow loading endpoints, and integration architectures that fracture during high traffic surges. Partner with our team to configure high-scale, production-grade API architectures and scale smoothly.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request API Gateway Audit →
            </Link>

          </div>
        </div>
      )
    },
    "vapt": {
      title: "VAPT & Penetration Testing",
      subtitle: "Offensive Security & Vulnerability Fortification",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783625884/VAPT_Penetration_Testing_kyl5fs.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783625884/VAPT_Penetration_Testing_kyl5fs.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Advanced Cybersecurity &amp; Web3
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  VAPT &amp; Offensive <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Security Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Systematically uncovering hidden threat vectors, simulating real-world attack campaigns, and hardening enterprise networks against breaches.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Schedule Security Audit
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Vulnerability Fortification &amp; Offensive Framework
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In a highly weaponized digital threat landscape, security cannot be treated as a passive, check the box compliance item. Legacy software architectures and modern cloud native infrastructures alike are subjected to continuous, automated probing by adversarial actors looking for a single configuration rift, unpatched dependency, or logical flaw.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Relying entirely on basic perimeter firewalls or passive anti virus suites creates a dangerous illusion of security. True cyber resilience requires proactive, aggressive defense verification, executing deep Vulnerability Assessment and Penetration Testing to systematically discover, exploit, and remediate structural weaknesses before real world adversaries can exploit them.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              True security verification requires looking past surface level software errors. We combine automated structural scanning with deep, human-led creative exploitation to evaluate your entire technological footprint from the perspective of an advanced persistent threat, delivering airtight code patches and secure infrastructure fortification layers.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Defensive Engagements
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Vulnerability Discovery (Spectrum Assessments):</strong> Establishing network boundaries by deploying advanced scanning systems. We continuously audit container repositories, cloud routing, and software packages against CVE registers to flag exposures before deployment.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Creative Manual Intrusion (Targeted Penetration Testing):</strong> Manual deep dives mimicking modern persistent threats. We execute injection payloads, check broken object permissions, audit tenant boundaries, and attempt multi-factor bypasses to validate core business logic.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Risk Classification &amp; Security Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Technical Control</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Assessment Methodology</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Enterprise Strategic Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Testing Standards</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">OWASP SAMM / PTES / NIST SP 800-115</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees universally respected testing metrics that satisfy rigorous enterprise audits.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Exploitation Range</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">White Box, Gray Box, &amp; Black Box Testing</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Simulates everything from blind external threats to malicious insider actor models.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Vulnerability Scoring</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">CVSS v3.1 / v4.0 Standardized Matrix</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Quantifies risks using exact mathematical scoring to prioritize remediation budgets.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Compliance Proof</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Attestation of Compliance Deliverables</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Provides verified documentation necessary to close major enterprise sales and insurance reviews.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Continuous Pentesting &amp; Remediation Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. OSINT Reconnaissance:</strong> Mapping your public enterprise footprint using OSINT to target exposed credentials, git leaks, and configuration boundaries.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Threat Modeling:</strong> Running targeted network scanners and fuzzers to measure logic reactions under high anomaly volumes.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Deep Exploitation:</strong> Executing custom exploits to extract non-destructive Proof of Concepts (PoC) illustrating business logic vulnerabilities.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Verification Patch:</strong> Providing actionable code patches and firewall rules, followed by a second audit to verify complete closure.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Secure Your Footprint
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop waiting for a data breach to tell you where your security architecture is broken. Partner with our offensive security team to actively protect your client records, uncover underlying threat vectors, and systematically fortify your enterprise workflows.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Vulnerability Assessment →
            </Link>

          </div>
        </div>
      )
    },
    "zero-trust-architecture-cryptographic-implementation": {
      title: "Zero-Trust & Cryptographics",
      subtitle: "Architecting Fortified, Verifiable Enterprise Defenses",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783626092/Zero-Trust_Cryptographics_gip8pw.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783626092/Zero-Trust_Cryptographics_gip8pw.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Advanced Cybersecurity &amp; Web3
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Zero-Trust Architecture <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Cryptographic Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Eliminating implicit trust through dynamic contextual authentication, micro-segmented routing, and mathematical data encryption.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Zero Trust Foundations
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Cryptographic Defense Models
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern enterprise security paradigm, the traditional perimeter based defense model, often described as a castle and moat approach, is entirely obsolete. With the rise of distributed cloud environments, remote workforces, and interconnected third party APIs, there is no longer a distinct internal network to trust.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Assuming that an entity is safe simply because it sits behind a corporate firewall creates a massive operational vulnerability. If an intruder crosses that single threshold, they gain unhindered lateral access to sensitive internal systems. True cyber resilience requires transitioning to a strict Zero Trust Architecture backed by rigorous Cryptographic Engineering, where the baseline assumption is that every request, user, and device is hostile until explicitly verified and cryptographically authenticated.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Building a resilient Zero Trust ecosystem requires integrating security checks into every transaction, data shift, and user interaction. We secure application execution pipelines by isolating inbound requests behind dynamic access controls and strict mutual TLS cryptographic channels to fully protect your corporate intellectual property.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Cryptographic Isolation Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Adaptive Verification (Contextual Authentication):</strong> Completely eliminating static credentials by deploying phish-resistant identity layers (FIDO2 / WebAuthn). Contextual risks (posture, location, network patterns) are evaluated continuously, maintaining user sessions with micro token expirations.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Micro Segmentation (Cryptographic Isolation):</strong> Securing data endpoints through strict partitions. Service-to-service networks authenticate via mutual TLS (mTLS) protocols. Storage layers employ envelope encryption bound to Key Management Services (KMS) with hardware rotations.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Control, Compliance &amp; Security Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Security Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Production Implementation Target</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Compliance Alignment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Network Cryptography</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">TLS 1.3 / AES 256 GCM / ChaCha20-Poly1305</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Establishes elite, high-performance symmetric encryption channels.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Access Methodology</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Attribute-Based Access Control (ABAC)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Enforces true least-privilege access based on real-time parameters.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Data At-Rest Security</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">FIPS 140-3 Validated Hardware Security Modules</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Meets strict enterprise procurement and national defense compliance marks.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Regulatory Readiness</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">HIPAA / FedRAMP High / GDPR Alignment</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees audit-ready data lineage and cryptographic access logs.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Continuous Trust Verification Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Device Attestation:</strong> Gateways assess client device posture (firewalls, patch levels, disk encryption) before granting temporary access tokens automatically.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Just-in-Time Access:</strong> Privileged permissions assign dynamically on a JIT basis and auto-revoke upon target operational task execution.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Cryptographic Tags:</strong> Critical database updates are digitally signed, ensuring an immutable, tamper-evident corporate audit ledger.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Dynamic Segments:</strong> SIEM loops monitor data consumption patterns and trigger instant quarantine cuts if lateral anomalies are detected across network boundaries.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Build Your Defense
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop relying on outdated perimeter security networks that fail catastrophically when credentials leak. Secure your corporate secrets, configure mathematical cryptographic isolation, and deploy verified zero-trust frameworks today.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Zero Trust Blueprint →
            </Link>

          </div>
        </div>
      )
    },
    "smart-contracts-decentralized-protocols-web3": {
      title: "Smart Contracts & Protocols (Web3)",
      subtitle: "Architecting Immutable, Enterprise-Grade Web3 Infrastructure",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783626292/Smart_Contracts_Protocols_Web3_eatt6x.jpg",
      content: (
        <div className="text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[20%]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783626292/Smart_Contracts_Protocols_Web3_eatt6x.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Advanced Cybersecurity &amp; Web3
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Smart Contracts <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Protocol Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering secure decentralized protocols, EVM &amp; Rust contract configurations, and multi-sig timelocked upgrade strategies.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Initiate Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Immutable Infrastructure &amp; Security Risks
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the Web3 ecosystem, software deployment introduces a radical shift in engineering risk. Code is immutable, execution is public, and live economic capital is bound directly to your logic. Unlike traditional web applications where bugs are patched post-launch via server hotfixes, a single logical flaw, access control oversight, or price oracle vulnerability in a deployed smart contract can lead to the instantaneous, irreversible loss of millions of dollars in protocol assets.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              According to recent Web3 threat assessments, decentralized systems lose hundreds of millions annually, not because blockchain security fails, but because the underlying smart contract protocols are structurally flawed. At Expert Opinions, we don’t just write smart contracts. We engineer rigorous, production-grade Web3 protocols designed to survive hostile mempool front-running, pass top-tier audits, and enforce absolute economic integrity.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. The Protocol Security Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Building a bulletproof decentralized network requires moving far beyond simple code scripting. We implement an end-to-end engineering pipeline that treats smart contract security as a rigorous, mathematical science; from compilation validations to mainnet proxies.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Phase 01 // Static Analysis:</strong> Solidity and Rust codebases run through Slither and Semgrep scanning pipelines to catch basic modifiers or low-level vulnerabilities.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Phase 02 // Invariant Fuzzing:</strong> Foundry toolchains perform invariant property tests, bombarding public interfaces with millions of random input parameters.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Phase 03 // Fork Simulations:</strong> Deploying code locally against RPC forks (Anvil, Hardhat) to check live protocol integrations (Uniswap, Aave, Chainlink).
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Phase 04 // Deterministic Verification:</strong> Repeatable deployment runs compile and verify bytecodes directly on Etherscan/Solscan for user transparency.
            </p>

            {/* --- Section 3 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Core Web3 Offerings
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // EVM &amp; Solana Optimization:</strong> Developing protocols across dominant networks. Solidity for EVM compatible setups (Base, Arbitrum, Optimism) and Rust via Anchor for Solana. Strictly implementing Checks-Effects-Interactions (CEI) to neutralize reentrancy vectors and packing variables natively.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Protocol Governance:</strong> Isolating administrative operations by integrating strict Role-Based Access Control backed by OpenZeppelin. Upgrades and critical calls require multi-sig signer consensus paired with a mandatory 48-hour Timelock Controller.
            </p>

            {/* --- Section 4 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. System Benchmarks &amp; Guardrails
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Vulnerability Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Guardrail</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Economic Protection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Access Control Bugs</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">Multi-Sig Signer Sets + UUPS Proxies</td>
                    <td className="p-4 text-sm text-slate-600">Prevents unauthorized initialization or contract hijacking.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Price Oracle Manipulation</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">Multi-Source Feeds (Chainlink + TWAP)</td>
                    <td className="p-4 text-sm text-slate-600">Neutralizes spot price skewing and flash loan attacks.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Arithmetic / Logic Errors</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">Invariant Testing &amp; OZ Libraries</td>
                    <td className="p-4 text-sm text-slate-600">Eliminates rounding vulnerabilities and calculation exploits.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Reentrancy Violations</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">NonReentrant State Guards (CEI)</td>
                    <td className="p-4 text-sm text-slate-600">Blocks recursive token draining withdrawal loops permanently.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )
    },
    "figma-ui-ux-design-systems": {
      title: "Enterprise UI/UX Design Systems",
      subtitle: "Engineering Digital Consistency and Product Velocity",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783626503/Enterprise_UIUX_Design_Systems_t5mkrf.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783626503/Enterprise_UIUX_Design_Systems_t5mkrf.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Design &amp; Immersive Experiences
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Enterprise UI/UX <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Design Systems
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering centralized visual tokens, Figma variant libraries, and accessible web component systems that accelerate development velocity.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Design System
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Digital Consistency &amp; Velocity
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In a sprawling enterprise software environment, design is no longer just about aesthetics. It is a critical driver of engineering efficiency and brand authority. When digital platforms expand across multiple sub brands, internal tools, and customer facing portals, a fragmented user interface invariably emerges.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Product teams end up reinventing the wheel for basic components like buttons, modals, and tables, which introduces massive code duplication, inconsistent user experiences, and visual chaos. True organizational agility requires moving beyond static UI kits into the realm of a unified Enterprise Design System: a centralized, code backed visual language that connects design tokens, component libraries, and accessibility guidelines into a single source of truth.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We bridge the gap between creative intent and front-end code libraries, ensuring perfect consistency across sub-brands. A production ready enterprise design system functions as a synchronized bridge between creative visual tokens, auto-layout figma primitives, and production React UI components to accelerate your overall development timelines.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Creative Foundation Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Theme &amp; Typography Scales (Semantic Design Tokens):</strong> Establishing a centralized token variables database (spacing scales, responsive grid scopes, animation curves, and font rules). This enables style adjustments across platforms without manual code modification.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Engineering Handoff Assets (Code-Synced Components):</strong> Ensuring all Figma variants correspond perfectly to production-ready front-end components. Leveraging React 19, Next.js 15, and Tailwind CSS to export responsive modules documented interactively using Storybook dashboards.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. UX Standards &amp; Design Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Performance Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Target</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Accessibility Compliance</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">WCAG 2.2 AA / AAA Standards</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Insulates your organization from legal risk while welcoming all users.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Component Layout Shift</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">0.1 or less Cumulative Layout Shift</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Eliminates visual stutter, maximizing Core Web Vitals performance.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Feature Velocity Spike</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Up to 40% reduction in dev timelines</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Drastically shortens time to market for new tools and modules.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Global Package Size</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Highly optimized, tree-shakeable UI code</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Minimizes bundle sizes, delivering blazing-fast page transitions.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Design to Production GitOps Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Figma Automation:</strong> Design changes and token updates are exported automatically from Figma files into raw JSON formatting.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Theme Compilation:</strong> Continuous Integration runners compile exported JSON files into target formats for web, native mobile, and docs.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Visual Testing:</strong> Automated regression tests capture components under variable display widths, flagging design changes immediately.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Storybook Releases:</strong> Verified updates publish directly to Storybook, delivering copy-paste component patterns to engineering rosters.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Accelerate Your Product Momentum
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop letting inconsistent layouts and slow front-end cycles hold back your product momentum. Partner with an engineering team that bridges the gap between design and code to eliminate duplication, ensure flawless luxury aesthetics, and accelerate product timelines safely.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Design System Audit →
            </Link>

          </div>
        </div>
      )
    },
    "spatial-computing-spatial-app-development": {
      title: "Spatial Computing & AR/VR Apps",
      subtitle: "Engineering Immersive Enterprise Experiences",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783626687/Spatial_Computing_ARVR_Apps_erdbvn.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783626687/Spatial_Computing_ARVR_Apps_erdbvn.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Design &amp; Immersive Experiences
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Spatial Computing <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; AR/VR Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering high-performance Extended Reality ecosystems, persistent spatial map anchors, and CAD-to-mesh optimization pipelines.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Immersive Solutions
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Extended Reality Ecosystems
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              The boundary between digital data and the physical world has permanently dissolved. Flat interfaces are no longer the absolute limit of software architecture. In an increasingly interconnected enterprise environment, relying entirely on 2D screens to visualize complex three dimensional assets, execute immersive industrial training, or coordinate remote technical operations introduces a massive cognitive gap.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              True operational transformation requires moving past surface level interactions into Spatial Computing, building native Extended Reality applications that overlay intelligent, context aware data structures directly onto physical spaces. At Expert Opinions, we engineer production grade Augmented, Virtual, and Mixed Reality ecosystems designed to integrate seamlessly into your enterprise workflows, unlocking new dimensions of human efficiency and industrial precision.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Building a highly performant spatial environment requires blending low latency hardware tracking with robust data structures. Our spatial rendering architecture decouples native OpenXR device graphics rendering from real-time spatial LiDAR coordinates and remote gRPC application updates to blend low-latency tracking with cloud systems, ensuring virtual elements sit convincingly in physical reality.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Spatial Pathway Frameworks
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Device Adaptation (Immersive Core Frameworks):</strong> Developing spatial engines natively optimized for Apple Vision Pro, Meta Quest 3/Pro, and enterprise AR glasses. Unity, Unreal Engine 5, and OpenXR C++ runtimes guarantee materials, dynamic lighting, and physical shadows compile natively.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Environment Anchoring (Spatial SLAM &amp; Occlusion):</strong> Deploying Simultaneous Localization and Mapping (SLAM) and real-time LiDAR pipelines. This ensures pixel-perfect occlusion boundaries and coordinates persistent world anchors across multi-user collaborative workspace sessions.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Lag, Latency &amp; Performance Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Technical Performance Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Production Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Core Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Motion to Photon Latency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">20 ms or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Completely prevents motion discomfort, ensuring continuous user comfort.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Target Frame Refresh Rate</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">90 Hz or higher (Native 120 Hz where supported)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Delivers perfectly fluid visual tracking, eliminating micro stutters.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Spatial Asset Polygons</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Highly optimized custom 3D mesh layers</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Prevents hardware thermal throttling during extended operations.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Cloud Synchronization</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Sub 50ms real time spatial updates</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Powers fluid, lag-free collaborative sessions for distributed teams.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Spatial Software Lifecycle &amp; Pipelines
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. CAD Mesh Decimation:</strong> Ingesting heavy industrial Revit/SolidWorks files and running decimation scripts to compress assets into lightweight spatial models.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Interaction Design:</strong> Scripting hands gestures, gaze tracking vectors, and spatial audio cues to ensure natural object feedback on interaction.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Active Twin Sync:</strong> Linking visual 3D entities directly to running ERP structures, IoT sensor logs, or database triggers via gRPC pipelines.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. MDM Distribution:</strong> Packaging applications with enterprise-signed profiles and deploying updates directly to headsets using MDM profiles.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Command Your Environment
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop looking at complex enterprise data through a keyhole. Partner with an engineering team that knows how to translate rendering into business metrics. Contact us to explore your dynamic spatial tracking potential and build high-performance ecosystems.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Spatial Computing Audit →
            </Link>

          </div>
        </div>
      )
    },
    "iot-solutions-architecture": {
      title: "IoT Solutions Architecture",
      subtitle: "Engineering Highly Resilient, Connected Device Ecosystems",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783626874/IoT_Solutions_Architecture_wolkmj.jpg",
      content: (
        <div className="text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[20%]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783626874/IoT_Solutions_Architecture_wolkmj.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Design &amp; Immersive Experiences
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  IoT Solutions <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Architecture
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering secure hardware edge layers, real-time message brokers, time-series storage grids, and secure over-the-air firmware updates.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Initiate Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Connected Device Ecosystems
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In a modern enterprise footprint, the physical and digital operations of a business must move in perfect lockstep. Relying on isolated physical assets, manual equipment inspections, or disconnected facility systems introduces major operational blind spots.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              When telemetry data is trapped inside silos, businesses are forced to remain reactive, discovering machinery faults, supply chain delays, or building inefficiencies only after they impact operations. True physical-digital convergence requires a sophisticated IoT Solutions Architecture: an end-to-end network capable of securely ingesting millions of telemetry data points, processing heavy workloads at the network edge, and converting raw hardware signals into automated corporate strategies. At Expert Opinions, we engineer highly resilient, enterprise-grade Internet of Things ecosystems designed to bridge hardware and software.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. The Distributed IoT Stack &amp; Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              An enterprise IoT network must capture, transmit, and analyze complex hardware data under varying network conditions. Our architecture routes edge signals through secure local translation layers into cloud event brokers, feeding time-series logs dynamically.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Phase 01 // Crypto Provisioning:</strong> Every hardware device is provisioned with unique X.509 keys, ensuring mutual TLS device verification natively.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Phase 02 // Edge Compute &amp; Protocol Broker:</strong> Modbus, BACnet, and OPC UA field environments are bridged natively with lightweight, high-reliability MQTT or AMQP pipelines. Gateways locally filter telemetry logs to minimize cloud storage footprint.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Phase 03 // Stream Brokerage &amp; Ingestion Gateway:</strong> Ingesting signals utilizing Apache Kafka, AWS IoT Core, or Azure IoT Hub. Ingestion queues parse active signals, cross-referencing equipment records against ML anomalies in real time.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Phase 04 // High Frequency Time-Series Storage:</strong> Telemetry streams are structured dynamically into TimescaleDB, InfluxDB, or AWS Timestream logs. Firmware updates are published securely via throttled OTA deployment waves.
            </p>

            {/* --- Section 3 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Core IoT Offerings
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Edge &amp; Protocol Translation:</strong> Developing smart edge compute layers to interface with diverse industrial configurations. Bridging Modbus, BACnet, and OPC UA field environments natively with lightweight, high-reliability MQTT or AMQP data pipelines.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Stream Processing &amp; Time-Series Ingestion:</strong> Building robust telemetry pipelines utilizing Apache Kafka, AWS IoT Core, or Azure IoT Hub. Telemetry blocks are structured dynamically into TimescaleDB, InfluxDB, or AWS Timestream repositories without affecting active runs.
            </p>

            {/* --- Section 4 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. System Benchmarks &amp; Guardrails
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Technical Control Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Production Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Operational Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Data Ingestion Capacity</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">50,000+ Telemetry Messages / Second</td>
                    <td className="p-4 text-sm text-slate-600">Accommodates sprawling, enterprise-wide sensor deployments effortlessly.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Edge Decision Latency</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">≤ 10 ms (Local Execution Loops)</td>
                    <td className="p-4 text-sm text-slate-600">Triggers emergency safety shut-offs instantly without waiting for cloud returns.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">Device Connection Security</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">X.509 Cryptographic Authentication</td>
                    <td className="p-4 text-sm text-slate-600">Blocks unauthorized rogue hardware from accessing your internal enterprise networks.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium">System Data Availability</td>
                    <td className="p-4 text-sm text-slate-900 font-semibold">99.99% Continuous Pipeline Uptime</td>
                    <td className="p-4 text-sm text-slate-600">Guarantees critical industrial logging remains active through localized buffering.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )
    },
    "geo-aeo-generative-engine-optimization": {
      title: "GEO & AEO (Generative Optimization)",
      subtitle: "Dominating the AI-Driven Search Era",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783627125/GEO_AEO_Generative_Optimization_iiqf1i.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783627125/GEO_AEO_Generative_Optimization_iiqf1i.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Modern Growth &amp; Cognitive Marketing
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Generative Engine <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Optimization (GEO)
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Structuring enterprise knowledge schema, refining RAG content density, and anchoring brand footprint across Gemini, ChatGPT, and Perplexity.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Secure Your AI Citations
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Answer Engine Visibility
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern digital landscape, the traditional search engine optimization playbook is undergoing a radical paradigm shift. The days of optimizing exclusively for blue hyperlink search results are quickly fading. Today, decision makers, enterprise clients, and consumers bypass traditional search indexing altogether, relying instead on AI driven search models like OpenAI Search, Google Gemini, Perplexity, and Anthropic Claude.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              To remain visible, brands must transition from traditional index ranking to Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), the science of engineering your digital footprint so that AI models synthesize, prioritize, and cite your brand as the definitive authority in conversational responses.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Unlike standard web scrapers that rank pages based purely on keyword density, generative engines analyze complex context and authority signals. We secure authoritative placement inside generative response architectures by passing target queries through RAG-optimized indexing layers that write crisp definitions directly into model generation feeds.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Generative Optimization Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Entity Linked Metadata (Knowledge Graph Mesh):</strong> Restructuring web content with semantic JSON-LD schemas to expose entity nodes to crawlers. Ensuring search models map the relationships between your products, executive personnel, and services cleanly.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Citation Engineering (Information Density):</strong> Tuning articles and docs using Linguistic Alignment strategies. Restructuring pages to highlight concise definitions, tables, and data blocks that are premium candidates for RAG ingestion by LLM search engines.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Conversational Volume &amp; Generative Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Quantitative Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Target Optimization Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Market Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 AI Citation Share</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">25% share or higher of category prompt returns</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees your brand is consistently listed as a primary source by top LLMs.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Schema Coverage Ratio</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">100% validation across all core entity layers</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Prevents parsing errors, ensuring crawlers map your brand assets accurately.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Sentiment Bias Vector</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Strongly Positive / Neutral Domain Profile</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Insulates your company from negative brand descriptions in conversational summaries.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 RAG Ingestion Speed</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Sub 24-hour content mapping</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Ensures your latest real-time product updates or news releases are instantly picked up by AI engines.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Continuous GEO Optimization Pipeline
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Prompt Simulation:</strong> Automated test scripts query model runtimes (Gemini, ChatGPT, Claude) with commercial keywords to baseline brand presence.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Linguistic Tuning:</strong> Technical pages are tuned with highly dense terminology, case study figures, and direct summaries for RAG context pools.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Entity Linkage:</strong> Reinforcing core off-platform links by verifying business registries, press releases, and media files to build global crawler trust.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Drift Calibration:</strong> Our citation monitoring dashboards run continuously, flagging model search variations to prompt dynamic schema overrides.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Secure Your Visibility
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop burning marketing capital on yesterday’s search engine algorithms. Partner with a veteran optimization team to secure visibility today. At Expert Opinions, we structure your enterprise data layer to maximize citation frequency and translate organic summaries into market velocity.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request GEO Strategy Audit →
            </Link>

          </div>
        </div>
      )
    },
    "growth-hacking-programmatic-funnel-engineering": {
      title: "Growth Hacking & Programmatic Funnels",
      subtitle: "Engineering High-Velocity, Automated Growth Engines",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783627361/Growth_Hacking_Programmatic_Funnels_vicybf.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783627361/Growth_Hacking_Programmatic_Funnels_vicybf.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Modern Growth &amp; Cognitive Marketing
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Programmatic Funnels <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Growth Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering real-time edge personalization, automated behavioral tracking, and self-healing multi-variant conversion pipelines.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Growth Engine
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. High-Velocity Growth Engines
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In a hyper competitive enterprise landscape, traditional marketing is hitting a wall of diminishing returns. Relying on manual campaign adjustments, fragmented marketing tools, and static landing pages creates operational drag and causes customer acquisition costs to skyrocket.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              True market expansion requires moving past slow, conventional customer acquisition methods into the era of Programmatic Growth Engineering. This demands building highly automated, data driven systems that combine software engineering, machine learning, and dynamic landing page generation to scale your conversion pipelines exponentially.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We replace static, generic layouts with highly responsive dynamic application funnels that adjust smoothly to user intent signals. Our routing middleware captures incoming intent logs, processes dynamic layouts at the edge, and triggers downstream CRM integrations seamlessly to optimize user acquisition.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Growth Pipeline Offerings
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // High Speed Edge SSR (Dynamic Personalization):</strong> Developing hyper-personalization routers using Next.js 15 and React 19. Global edge middleware intercepts request metadata (industry, geography, company scale) to serve custom content blocks instantly without load lag.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Analytical Instrumentation (Automated Data Pipelines):</strong> Building robust clickstream telemetry using Segment, Mixpanel, and custom tracers. Telemetry logs record mouse scrolls, video playbacks, and inputs to compute real-time lead scores inside Salesforce or HubSpot.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Pipeline Velocity &amp; Growth Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Performance Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Production Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Financial Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Page Load Speed (LCP)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">1.2 seconds or less</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Maximizes traffic conversion rates and significantly lowers your ad spend waste.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Funnel Replication Multiplier</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">1,000+ unique dynamic pages</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Scales organic long tail search and targeted ad landing footprints seamlessly.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Data Synchronization Delay</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">500 ms or less (Real time CRM Sync)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Enables sales groups to engage premium leads instantly within peak interest windows.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Infrastructure Scalability</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Auto scales up to 100,000+ active users</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Ensures stable, high performance interactions during major viral traffic spikes.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Continuous Programmatic Testing &amp; Optimization
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Intent Extraction:</strong> Our engine maps real-time B2B search trend data to flag high-intent industry verticals and buyer groups automatically.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Multi-Variant Generation:</strong> Pipelines automatically output and launch dozens of responsive variations of landing layouts to run concurrently.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Intelligent Routing:</strong> Edge CDN routers distribute incoming ad clicks across variations, logging user behavior and engagement metrics dynamically.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Conversion Healing:</strong> As behavioral analytics data identifies high-performing designs, the platform auto-routes traffic to the winning model, optimizing ad spend expenditure.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Engineer Exponential Growth
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop settling for static templates, fragmented marketing tools, and unpredictable conversion loops. Partner with a veteran growth engineering team to build highly automated, data-driven systems and scale your conversion footprint predictably.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Funnel Audit →
            </Link>

          </div>
        </div>
      )
    },
    "brand-strategy-digital-identity-systems": {
      title: "Brand Strategy & Digital Identity",
      subtitle: "Engineering Modern Corporate Trust and Market Presence",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783627623/Brand_Strategy_Digital_Identity_qp0zze.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783627623/Brand_Strategy_Digital_Identity_qp0zze.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Modern Growth &amp; Cognitive Marketing
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Brand Strategy <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Digital Identity Systems
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering cohesive corporate narratives, luxurious typography frameworks, high-contrast layouts, and cross-channel brand guidelines.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Brand Identity
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Corporate Trust &amp; Presence
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In a highly crowded, digital first enterprise economy, a brand is far more than an isolated logo asset, a clever tagline, or a generic color palette. Your digital identity is the primary interface through which your enterprise establishes market authority, commands premium pricing, and projects trust to prospective tier one clients.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              When an organization’s visual and strategic assets are disjointed, inconsistent across platforms, or lack a premium aesthetic, it creates immediate friction in the sales pipeline. True market dominance requires engineering a cohesive Brand Strategy and Digital Identity, a deeply researched corporate narrative and high contrast visual system that aligns perfectly across every physical and digital touchpoint.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We approach brand construction as a highly structured engineering process, transforming core values into precise visual systems. We structure core corporate positioning assets and typography scales into comprehensive visual guides to ensure absolute cross-platform alignment, projecting a luxury corporate presence that anchors instant visual trust.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Branding Pipeline Offerings
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Competitive Audits (Branding &amp; Positioning):</strong> Executing deep competitive differentiation reviews and ideal buyer profiling. We translate raw industrial specifications into high-impact value statements that align cleanly with premium client buyer patterns.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Contemporary Design (Premium Architecture):</strong> Building premium visual frameworks that utilize high contrast structural elements. Deliberate typography scales and clean accent tokens are configured to anchor visual trust across domain properties.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Consistency Metrics &amp; Brand Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Quality Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Target Benchmark</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Operational Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Visual Inconsistency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Zero Variation Across Assets</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Eradicates brand fragmentation, building long term institutional trust.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Cross Platform Delivery</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">100% Asset Standardization</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees layouts look uniformly premium across LinkedIn, websites, and print.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Digital Optimization</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">SVG vector standards &amp; lossless compression</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Ensures rapid page load speeds while preserving perfect image crispness.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Trademark Viability</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Thorough global clearance checks</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Safeguards your branding investments from sudden legal complications.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. The Enterprise Identity Rollout Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Competitive Auditing:</strong> Analyzing industry rivals and auditing existing marketing assets to establish a unique position in the market.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Language Architecture:</strong> Constructing typography libraries, grid variables, and color schemes to establish a luxuriously consistent look.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. High-Fidelity Assets:</strong> Generating high-resolution digital files, including presentation slide decks, SVG formats, and LinkedIn banners.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Multi-Channel Sync:</strong> Deploying branding tokens across internal portals, client-facing screens, and social channels simultaneously.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Elevate Your Authority
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop letting fragmented social profiles or inconsistent messaging compromise your sales pipelines. Partner with an engineering team that translates core visual systems into corporate narratives, command market presence, and secure absolute cross-channel authority today.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Launch Brand Consultation →
            </Link>

          </div>
        </div>
      )
    },
    "cross-platform-native-mobile-development": {
      title: "Cross-Platform & Native Mobile Engineering",
      subtitle: "Building High-Performance Mobile Ecosystems",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783622936/Cross-Platform_Native_Mobile_Engineering_Building_High-Performance_Mobile_Ecosystems_ioqqte.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783622936/Cross-Platform_Native_Mobile_Engineering_Building_High-Performance_Mobile_Ecosystems_ioqqte.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Core Engineering & Product Development
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Mobile <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Ecosystems
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-xl font-light leading-relaxed mb-8">
                  Architecting high-performance native and cross-platform mobile solutions that prioritize fluid user experience, offline-first reliability, and strict enterprise security.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Discuss Your Mobile Strategy
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Direct Customer Connectivity Without Compromise
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In today’s digital world, a mobile app is way more than just a checklist of features. It’s the direct connection between your brand and your audience. When you're operating at an enterprise scale, there is simply no room for mistakes.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              If an app lags, drains memory, or drops data during a spotty network connection, users will delete it in seconds. People expect a fast, smooth, and seamless experience, whether they are on iOS or Android.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              At Expert Opinions, we don’t just build apps. We engineer resilient, highly optimized mobile solutions that handle complex business logic flawlessly on every single device. Reliability execution is built straight into the core architecture.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Native vs. Cross-Platform Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Native Platform Swift & Kotlin (Uncompromising Native):</strong> When you need uncompromising execution, deep hardware integration, and platform-specific design, we build custom applications using Native Swift for iOS and Kotlin for Android. This allows you to leverage core operating systems to their absolute limits.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Hybrid Flutter & React Native (Cross-Platform Efficiency):</strong> When speed to market and cross-platform efficiency are your top priorities, we deploy high-performance React Native and Flutter frameworks to maintain a single codebase without sacrificing native look and feel, saving development overheads, code maintenance, and time.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Operational Resilience
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 w-1/3">System Capability</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Business & Technical Utility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Offline-First Sync</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Local SQLite/Realm database state sync ensures data remains intact during network drops and syncs immediately online.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Lightweight Layouts</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Highly optimized API connection configurations decrease payloads, preserving user bandwidth and network latency.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Airtight App Security</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Biometric credentials (FaceID & Fingerprint scans), secured runtime keys, and end-to-end payload encryption.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Rigid Automated Release Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Automated Testing:</strong> Every single code update undergoes automated UI regression suites, security sweeps, and type validation checks.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Profiling:</strong> Meticulous memory leaks profiling, CPU thread governance, and runtime network traffic testing.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Beta Staging:</strong> Beta rollouts to TestFlight and Google Play Testing, monitoring real-time crash reports and telemetry.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Store Release:</strong> Gradual rollouts directly to storefronts with real-time analytics to ensure absolute runtime stability.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Scale Your Mobile Operations
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop settling for generic user interfaces, sluggish response rates, or systems that buckle under load. Partner with our engineering team to build a high-performance ecosystem.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Initiate Technical Consultation →
            </Link>

          </div>
        </div>
      )
    },
    "full-cycle-saas-product-engineering": {
      title: "Full-Cycle SaaS Product Engineering",
      subtitle: "From Concept to Multi-Tenant Market Leader",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783623207/Full-Cycle_SaaS_Product_Engineering_yffzqn.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783623207/Full-Cycle_SaaS_Product_Engineering_yffzqn.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Core Engineering & Product Development
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  SaaS Product <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Engineering
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-xl font-light leading-relaxed mb-8">
                  Architecting multi-tenant subscription-ready SaaS systems that combine sub-second page performance, robust database isolation, and auto-scaling cloud resources.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Engineer Your SaaS Platform
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Building the Infrastructure for Continuous Scale
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern software world, launching a successful Software as a Service platform requires far more than just building a functional tool. True SaaS engineering demands building an entire business engine.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              It means designing an architecture that can seamlessly handle automated subscription lifecycles, complex multi-tenant data structures, self-service user onboarding, and unpredictable spikes in usage, all while maintaining ironclad security and absolute uptime.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We don’t just write software. We partner with you to engineer scalable, multi-tenant SaaS products built from day one to handle rapid user adoption and sustain long-term business growth. Enterprise value is directly baked into the foundation runtime layers.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. SaaS Modern Architecture Layers
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Layer 01 // Frontend Interface (Next.js & React System):</strong> Delivering instantaneous page updates and smooth, interactive dashboard layouts designed to lock in high client retention from the first load.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Layer 02 // API Gateway (TypeScript Connection Hub):</strong> Constructing highly resilient, asynchronous backend API flows leveraging Node.js and TypeScript to handle massive concurrent traffic pools seamlessly.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Layer 03 // Database Tier (PostgreSQL & Redis Isolation):</strong> Airtight multi-tenant database designs preventing runtime data crossover. Your customers' private data remains completely isolated at the query layer.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Business Core Functions & Compliance
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 w-1/3">Feature Segment</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Implementation Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Subscription Lifecycle</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Integrating Stripe or Paddle to automate seat-based tiers, metered logs, and recurring charge mechanisms.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Cost Optimization</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Containerizing configurations via Docker to ensure systems consume hosting resources dynamically without wastage.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Airtight Access Control</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Enforcing Role-Based Access Control (RBAC), Single Sign-On (SSO), and TLS payload transit encryption.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Continuous Feature Lifecycle Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Automated QA:</strong> Automated test suites, accessibility validations, and code checks execute automatically on every single branch update.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Feature Flags:</strong> SaaS updates run behind runtime feature flags, allowing incremental activation for subsets of users.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Zero Downtime:</strong> Rolling deploy actions transition server traffic seamlessly without interrupting active enterprise clients.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Active Logs:</strong> Observability agents track database connections, telemetry metrics, and application performance live.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Scale Your SaaS Operations
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop wrestling with legacy structures that slow down your software release cycles. Partner with a team built for high-performance SaaS engineering.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Launch SaaS Consultation →
            </Link>

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
                    <span className="text-blue-600 font-mono font-bold text-sm block mb-6">0{i + 1}.</span>
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
    "agentic-ai-autonomous-workflow-orchestration": {
      title: "Agentic AI & Autonomous Workflows",
      subtitle: "Engineering Next-Generation Enterprise Automation",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783623943/Agentic_AI_Autonomous_Workflows_ntlzgj.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783623943/Agentic_AI_Autonomous_Workflows_ntlzgj.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Autonomous Systems Engineering
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Agentic AI & <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Autonomous Workflows
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering production-grade Agentic AI architectures designed to handle complex, high-ambiguity enterprise operations securely and predictably.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Design Your Agentic System
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Beyond Monolithic Bots
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the current enterprise landscape, traditional automation is hitting a hard ceiling. Standard rule-based systems and basic chatbots are fundamentally rigid. They rely entirely on pre-defined if-this-then-that paths.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              The moment they encounter an unexpected data format, a broken API, or an ambiguous customer edge case, the system halts, demanding human intervention. True operational scalability requires moving past simple reactive tools into the era of Agentic AI.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We build autonomous software systems that can independently perceive context, reason through multi-step objectives, orchestrate their own tool calling, and self-correct when errors arise. This self-correction loop is engineered directly into our foundation architecture layers.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Structurally Autonomous Agents
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              An enterprise-ready AI Agent does not just generate text responses. It acts as an independent execution engine within a tightly bounded cloud infrastructure.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              When given a high-level goal, our systems break down the objective into an optimized sequence of tasks. The agent evaluates its environment, determines which precise internal API, database query, or third-party enterprise tool is required, executes the action, and then meticulously analyzes the return payload to plan its next operational phase through an continuous Observe, Think, and Act execution flow.
            </p>

            {/* --- Section 3 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Modular Multi-Agent Ecosystems
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              To achieve this level of reliability, we develop multi-agent ecosystems using robust orchestration frameworks like LangGraph and CrewAI. Instead of relying on a single, monolithic model that struggles with task confusion, we deploy fleets of hyper-specialized, deterministic agents working in parallel.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              For example, in an enterprise supply chain workflow, one agent is exclusively tasked with extracting and validating unstructured vendor invoice data. A second independent agent audits those figures against long-term contract terms in your ERP system. A third agent manages localized exceptions, logging anomalies directly into internal channels. This isolated modularity ensures that each component behaves with maximum precision.
            </p>

            {/* --- Section 4 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. System Connectivity & Operational Core
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Operational Core</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Execution</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Business Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Enterprise Integration</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Unified Model Context Protocol (MCP) servers connected to SAP, Salesforce, and custom SQL databases.</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Eliminates manual data copying and closes multi-system data gaps seamlessly.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Context Retention</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Hybrid long-term memory structures pairing vector search (RAG) with local state filesystems.</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Agents maintain perfect operational intent and historical context across long-running tasks.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Error Self-Correction</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Automated exception handling loops that intercept 5xx server errors or invalid API responses.</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Systems diagnose unexpected anomalies and rewrite tool-calling arguments autonomously.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Agent Governance & Security Guardrails
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Isolated Run:</strong> Dynamic operations run inside secure, sandboxed execution layers, separated from core network structures.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Access Control:</strong> Role-Based Access Control linked to Identity Providers ensures agents only query allowed data.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Hard Human Gates:</strong> Critical communications or financial transactions route through human-in-the-loop gates for authorization.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Immutable Tracing:</strong> Observability dashboards capture complete tracing loops, tracking every thought process, decision, and tool call.
            </p>

            {/* --- Section 6 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Take Command of Your Operations
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop managing software silos. Transition to a unified, autonomous infrastructure. Request a technical consultation to explore your automation potential.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Initiate Architecture Audit →
            </Link>

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
                    <div className="text-purple-500 font-mono text-xl tracking-tighter italic">0{i + 1} //</div>
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
                    <div className="text-xs font-bold text-purple-600 mb-4 font-mono">STEP_0{i + 1}</div>
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
    "headless-commerce-custom-ecommerce-architecture": {
      title: "Headless Commerce & Custom E-Commerce",
      subtitle: "Engineering High-Conversion, Scalable Retail Engines",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783623582/Headless_Commerce_Custom_E-Commerce_sgrmmq.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[20%]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783623582/Headless_Commerce_Custom_E-Commerce_sgrmmq.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Core Engineering & Product Development
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Headless Commerce & <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Custom E-Commerce
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Architecting digital storefronts built on decoupled, headless architecture to achieve blazing fast page speeds, design autonomy, and infinite scalability.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Commerce Engine
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. High-Conversion Retail Engines
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern digital retail landscape, generic e-commerce templates and rigid storefront platforms are no longer enough to stay competitive. When an e-commerce business grows, traditional monolithic setups often become major bottlenecks.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              A slow loading page, an inflexible checkout system, or a store that struggles to sync inventory across multiple channels can directly result in abandoned carts and lost revenue. Modern digital retail requires extreme speed, complete design freedom, and an infrastructure capable of handling massive traffic spikes.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We engineer high performance Headless Commerce systems and custom e-commerce architectures designed to decouple your front end customer experience from back end business logic. This ensures your decoupled systems sustain continuous operations flawlessly.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. The Headless Advantage Architecture
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Storefront UI (Next.js & React Frontend):</strong> Ultra-fast frontend storefront systems treating your shop as a high-speed web application, reducing latency to fractions of a second to directly drive conversion.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 02 // Commerce Engine (Powerful Headless Backends):</strong> Connecting to platforms like Shopify Plus or custom APIs, allowing your team to update catalogs and layouts without risking checkout or database stability.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 03 // Back-Office Sync (Centralized Integrations):</strong> Deep, real-time sync with third-party ERP, CRM, and Inventory Management systems to coordinate stock levels and shipping status instantly.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Strategic Commercial Impact
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 w-1/3">Growth Lever</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Commercial Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Sub-Second Page Load</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Direct correlation between instantaneous transitions and decreased checkout bounce rates.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Design Autonomy</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Full separation from restrictive templates, unlocking custom-tailored user experience paths.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Global Retail Core</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Centralized multi-currency routing, localized payment gateways, and highly secure checkout flows.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Flash Sale Reliability Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. End-to-End Tests:</strong> Automated test suites validate critical user paths (cart logic, checkouts, discount code applications) on every commit.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Zero Downtime:</strong> System deployments roll out continuously using blue-green routing, ensuring the store remains online 24/7.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Elastic Scaling:</strong> Decoupled cloud infrastructure auto-scales dynamically to sustain massive visitor surges during flash sales.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Edge Analytics:</strong> Distributed monitoring systems track transaction latencies, API payloads, and database connection pools.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Scale Your E-Commerce Empire
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop letting rigid monolithic limitations hold back your organic conversions. Partner with an engineering team built for headless execution.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Commerce Audit →
            </Link>

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
    "custom-llm-fine-tuning-rag-frameworks": {
      title: "Custom LLM Fine-Tuning & RAG",
      subtitle: "Engineering Domain-Specific Enterprise Intelligence",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783624426/custom_llm_fine-tuning_rag_turpun.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783624426/custom_llm_fine-tuning_rag_turpun.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Autonomous Systems Engineering
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Custom LLM & <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    RAG Frameworks
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Architecting secure, domain-expert AI systems that speak your company's language with Retrieval-Augmented Generation (RAG) and parameter-efficient fine-tuning.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your LLM Layer
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Domain-Specific Intelligence
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Off-the-shelf, frontier Large Language Models are incredibly capable, but they suffer from two major flaws when dropped into an enterprise environment. They lack access to your private, real-time corporate data, and they frequently hallucinate when asked to solve highly specialized domain problems.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Expecting a generic cloud model to accurately interpret your proprietary codebases, complex financial portfolios, or nuanced legal contracts without proper engineering is a recipe for operational failure. To transform artificial intelligence into a reliable corporate asset, your infrastructure must be augmented with custom-tailored intelligence layers.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              Maximizing the ROI of enterprise AI requires deploying the correct optimization tool for the specific technical challenge. We don't believe in a one-size-fits-all approach. Instead, we analyze your data structures to determine when to connect external knowledge via RAG, when to modify model behavior via Fine-Tuning, or when to merge both into a unified system to ensure absolute accuracy.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Tailored Optimization Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Retrieval Augmented Generation (Dynamic RAG Engines):</strong> For applications requiring access to dynamic data like support logs or product indexes. We deploy vector databases (Pinecone, pgvector) with Hybrid Search (BM25 + Semantic Embeddings) to deliver source-cited, auditable responses with zero hallucinations.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Parameter-Efficient Fine-Tuning (Deep Model Training):</strong> When training models on specialized domain terminologies, strict JSON schemas, or corporate brand voice. Parameter-efficient fine-tuning (LoRA, QLoRA) on private infrastructure matching enterprise APIs enforces specialized formats at a fraction of token costs.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Performance Vectors & Operational Impact
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Technical Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Implementation</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Operational Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Advanced Chunking</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Dynamic Semantic Chunking based on document layout and structural shifts.</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Prevents broken context windows and ensures critical data sentences are never cut in half.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Reranking Layers</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Integration of advanced cross-encoder reranking models (like Cohere or BGE Reranker).</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Filters out irrelevant data chunks, passing only the top elite context snippets to optimize model accuracy.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Latency Optimization</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Vector database indexing (HNSW) paired with local GPU caching layers.</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Delivers end-to-end question-to-answer retrieval speeds in under 250 ms.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Data Privacy & SecOps</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">On-premise or sandboxed VPC deployments with strict document-level Access Control Lists.</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees that sensitive data (like HR records) is only accessible by authorized user roles.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Rigid Data Governance & Private Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Sovereign Infra:</strong> RAG and fine-tuning pipelines operate entirely within your secure AWS VPC, Google Cloud, Azure, or on-premise hardware.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Zero Leakage:</strong> Your corporate data is never transmitted to external providers or used to train public base models, preserving full intellectual property.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Data Lineage:</strong> Compliance tools track exactly which document block, section, or database row was utilized to construct any given AI response.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Active Indexing:</strong> Pipelines continuously refresh vector indexes and chunk vectors to reflect document updates automatically.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Initiate AI Integration
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Discuss how custom Retrieval-Augmented Generation (RAG) and Fine-Tuning loops can be structured to solve your specific business challenges. Turn artificial intelligence into a scalable operational asset.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request LLM Consultation →
            </Link>

          </div>
        </div>
      )
    },
    "computer-vision-spatial-analytics": {
      title: "Computer Vision & Spatial Analytics",
      subtitle: "Engineering Intelligent Visual Intelligence Systems",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783624652/Computer_Vision_Spatial_Analytics_Engineering_oqbqsg.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783624652/Computer_Vision_Spatial_Analytics_Engineering_oqbqsg.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Autonomous Systems Engineering
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Computer Vision & <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Spatial Analytics
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering production-grade Computer Vision pipelines that transform passive video feeds into actionable, real-time spatial data.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Vision Pipelines
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Intelligent Visual Ecosystems
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In an increasingly visual and physical business world, massive streams of raw video data, from security networks, manufacturing lines, drone feeds, and warehouse cameras, go largely underutilized.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              Traditional video monitoring relies on passive recording or basic motion detection, both of which are notoriously reactive and prone to costly false alarms. True operational optimization requires converting these passive visual feeds into actionable, real-time spatial data.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We design pipelines capable of independently detecting, tracking, classifying, and analyzing objects, patterns, and behaviors with absolute precision. Building a reliable, enterprise-grade vision system requires optimizing a highly complex pipeline, ensuring that data moves seamlessly from hardware capture to cloud or edge analytics without introducing processing lag.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Intelligent Tracking & Detection Capabilities
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Detection & Segmentation (High-Speed Object Detection):</strong> Eliminating processing lag using custom model architectures like YOLOv10 or Faster R-CNN. We isolate and categorize target items simultaneously, detecting structural defects on conveyor lines or monitoring safety gear protocols on heavy industrial sites.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Behavior & Tracking (Multi-Object Tracking):</strong> Implementing DeepSORT or ByteTrack algorithms to maintain unique object IDs across continuous frames, even under visual overlap. Mapping these onto blueprints calculates dwell times, zone violations, and spatial bottlenecks dynamically.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Performance Vectors & Operational Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Metric / Objective</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Target</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Operational Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Inference Latency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">30 ms or less (at Edge)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Enables real-time safety shut-offs on heavy machinery.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Model Accuracy (mAP)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">95% or higher mean Average Precision</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Prevents costly false alarms and ensures strict quality control.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Video Stream Density</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">30+ FPS Concurrency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Guarantees fluid, frame-by-frame analysis of high-speed assets.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Hardware Efficiency</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">NVIDIA TensorRT / ONNX Runtime</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Maximizes hardware performance, cutting down operational cloud compute costs.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Edge-to-Cloud Distributed Workflow
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Edge Acceleration:</strong> Models compile to run on edge hardware (NVIDIA Jetson, gateway devices), enabling sub-second local decisions.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Stream Privacy:</strong> Automated real-time blur layers obscure faces and license plates directly at ingestion to keep pipelines compliant.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Metadata Streaming:</strong> Edge gates stream lightweight metadata payloads via Apache Kafka rather than streaming heavy raw video files.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Spatial Panels:</strong> Structured telemetry data feeds central reactive corporate control panels, plotting heatmaps, alert lists, and trends.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Scale Your Spatial Intelligence
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop letting valuable video data sit unanalyzed on closed-circuit recording drives. Partner with our engineering team to build active visual intelligence and scale your spatial operations.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Initiate Vision Consultation →
            </Link>

          </div>
        </div>
      )
    },
    "predictive-data-science-advanced-analytics": {
      title: "Predictive Data Science & Analytics",
      subtitle: "Transforming Raw Enterprise Data into Foresight",
      heroImage: "https://res.cloudinary.com/dawp1fcci/image/upload/v1783624812/Predictive_Data_Science_Analytics_fhg1mz.jpg",
      content: (
        <div className="w-full text-slate-800 bg-white font-sans overflow-x-hidden">

          {/* --- Executive Hero Section --- */}
          <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center bg-slate-950 mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dawp1fcci/image/upload/v1783624812/Predictive_Data_Science_Analytics_fhg1mz.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
              <div className="border-l-2 border-purple-600 pl-8 py-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400 mb-4">
                  Autonomous Systems Engineering
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                  Predictive Data Science <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    &amp; Analytics
                  </span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
                  Engineering end-to-end predictive pipelines and machine learning frameworks that turn complex enterprise data lakes into proactive business models.
                </p>
                <Link to="/contact" className="inline-block bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Architect Your Data Engine
                </Link>
              </div>
            </div>
          </section>

          {/* --- Main Content Body (Image style simple paragraphs) --- */}
          <div className="max-w-4xl mx-auto px-6 pb-24">

            {/* --- Section 1 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Reactive vs Predictive Execution
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              In the modern enterprise, data is abundant, but actionable foresight is rare. Most organizations remain trapped in a reactive cycle, relying on descriptive analytics and historical reports to understand what happened last quarter.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              While looking backward tells you where your business has been, it cannot tell you where it is going. True market leadership requires moving from historical reporting to predictive execution, leveraging advanced statistical modeling, machine learning, and real-time data pipelines to anticipate shifts before inefficiencies impact your bottom line.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              We don't just build dashboards. We engineer proactive pipelines and custom ML layers that turn multi-structured corporate datasets into clear, automated business outcomes. This operational data engine ensures data moves seamlessly from hardware capture to cloud or edge without latency.
            </p>

            {/* --- Section 2 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Core Analytical Pathways
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>Path 01 // Data Engineering &amp; Hygiene (Automated Pipeline Design):</strong> Constructing automated ETL pipelines that clean and aggregate raw data from CRM, ERP, and warehouses like Snowflake or BigQuery. Features stores ensure training streams and live workflows synchronize, entirely eliminating data leakage.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>Path 02 // Statistical Modeling &amp; ML (Precision Forecasting Layers):</strong> Deploying specialized mathematical time-series architectures to capture seasonal demand fluctuations. For customer retention, high-precision classification models identify early friction signals to protect core revenue segments.
            </p>

            {/* --- Section 3 (Table) --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Performance Vectors &amp; Operational Benchmarks
            </h2>
            <div className="w-full overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Quantitative Vector</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Engineering Target</th>
                    <th className="p-4 text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">Strategic Business Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">01 Model Forecast Accuracy</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">90% or higher Precision / Recall</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Eliminates over-stocking and minimizes supply chain waste.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">02 Data Pipeline Throughput</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Sub-second streaming updates</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Drives instantaneous pricing updates and fraud detection.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">03 Model Drift Detection</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Automated statistical monitoring</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Flags performance dips, triggering automatic retraining loops.</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-900 font-medium italic">04 Explainable AI (XAI)</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">SHAP / LIME Integration</td>
                    <td className="p-4 text-sm text-slate-600 leading-relaxed">Translates complex model decisions into human-readable rationales.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Section 4 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. MLOps Closed-Loop Deployment Lifecycle
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>01. Automated Training:</strong> Pipelines evaluate new data, executing grid searches and hyperparameter optimizations dynamically without manual rewrites.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>02. Shadow Deploy:</strong> Validated model iterations run in shadow environments, processing live production logs in parallel with zero runtime risk.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-4 max-w-none">
              <strong>03. Microservice API:</strong> Validated models deploy as containerized microservices to deliver lightning-fast predictions to apps and dashboards.
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-none">
              <strong>04. Telemetry Observability:</strong> ML tracking monitors actively record confidence scores, execution latencies, and underlying distribution drift.
            </p>

            {/* --- Section 5 --- */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Turn Insight into Velocity
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-6 max-w-none">
              Stop managing your enterprise through the rearview mirror. Partner with an engineering team built to insulate operations from market volatility and translate analytical matrices into concrete business velocity.
            </p>
            <Link to="/contact" className="inline-block font-bold text-purple-600 underline hover:text-purple-800 tracking-wide text-sm">
              Request Predictive Audit →
            </Link>

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
                    <span className="text-xs font-bold text-purple-500">STEP {i + 1}</span>
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
    if (NEW_SERVICES_DATA[slug]) {
      return (
        <div className="bg-[#050508]">
          <FallbackServicePage slug={slug} />
          <ContactForm />
        </div>
      );
    }
    return <div className="pt-40 text-center text-xl font-poppins text-gray-800">Service Not Found</div>;
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