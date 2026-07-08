import React, { useEffect, useState } from 'react';
import {
  TrendingUp, ShoppingCart, Code,
  Smartphone, Cpu, ShieldCheck, ArrowUpRight,
  Layers, Users, CheckCircle2, ChevronRight
} from 'lucide-react';
// ADD THIS IMPORT FOR THE LINKEDIN ICON:
import { FaLinkedin } from 'react-icons/fa';

// Executive Core Four Structured Data Matrix
const CORE_LEADERS = [
  {
    id: "maqsood",
    name: "Maqsood Ahmad",
    role: "Founder & Managing Director",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/WhatsApp_Image_2026-04-25_at_6.56.34_PM_mwk38u_aqvmfb.webp",
    linkedin: "https://www.linkedin.com/in/maqsood-ahmad-business-advisor/",
    bio: "The visionary behind Expert Opinions. With over 15 years of deep expertise in business development and the digital ecosystem, he drives the agency's global vision and strategic growth."
  },
  {
    id: "abdur",
    name: "Abdur Rehman",
    role: "Chief Executive Officer (CEO) / COO",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/Gemini_Generated_Image_ofddeoofddeoofdd_m9xzll_1_1_nbwycr.webp",
    linkedin: "#",
    bio: "The operational backbone of the agency. He manages daily agency updates, client communications, and complex troubleshooting. From solving high-stakes client issues to ensuring seamless maintenance, he keeps the ecosystem running smoothly."
  },
  {
    id: "ahsan",
    name: "Ahsan Ali",
    role: "Head of Digital Marketing",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/WhatsApp_Image_2026-04-24_at_2.22.39_PM_tmsxbi_bwhy5g.webp",
    linkedin: "#",
    bio: "The strategic mind behind our market presence. He tracks shifting market trends, builds high-converting campaigns, and designs the growth frameworks that help our clients dominate their industries."
  },
  {
    id: "owais",
    name: "Muhammad Owais",
    role: "Chief Technology Officer & Project Director",
    img: "https://res.cloudinary.com/dawp1fcci/image/upload/v1779159593/retouch_2026042503474735.jpg_qjn2k4_1_1_m4vdad.webp",
    linkedin: "https://www.linkedin.com/in/owaiskhubaisi/",
    bio: "A seasoned computer scientist leading our technical frontiers. He handles project scoping, budget allocation, timelines, and overall agency management. With deep experience in web development and cybersecurity, he ensures modern-day projects are executed with elite precision."
  }
];

// Operational Matrix Configurations
const DEPARTMENTS = [
  {
    id: "mktg",
    title: "Marketing & Growth",
    subtitle: "Brand Velocity & Conversion Engine",
    icon: <TrendingUp size={20} />,
    head: { name: "Ahsan Ali", role: "Head of Digital Marketing" },
    members: ["Usman Sheikh", "Zaeem Niaz", "Maham Hussain", "Mishaim Hussain", "Alizah Batool", "Umer Farooq", "Hadi Khan"],
    services: ["SEO Optimization", "Local SEO", "Digital Marketing", "Content Writing"],
    tagline: "Dominating search landscapes and building high-converting customer acquisition funnels."
  },
  {
    id: "ecom",
    title: "E-Commerce Architecture",
    subtitle: "Global Marketplace Dominance",
    icon: <ShoppingCart size={20} />,
    head: { name: "Maqsood Ahmad", role: "Founder & Managing Director" },
    members: ["Hamza Faizan", "Muhammad Faizan", "Muhammad Ali", "Ali Ahmad", "Sana Hussain", "Zainab Bibi", "Bilal Siddique"],
    services: ["Amazon Optimization", "Shopify Development", "E-Commerce Strategy", "A10 Algorithm SEO"],
    tagline: "Engineering end-to-end store ecosystems optimized for complex product indexing and high velocity sales."
  },
  {
    id: "dev",
    title: "Development & Engineering",
    subtitle: "High-Performance Modern Web Applications",
    icon: <Code size={20} />,
    head: { name: "Muhammad Owais", role: "Chief Technology Officer (CTO)" },
    members: ["Zaid Amjad", "Faizan Shahid", "Rayyan Taha", "Waleed Sarfraz", "Fatimah Sheikh", "Hassan Abbasi", "Muhammad Anees", "Muhammad Rashid", "Aleeza Dilawar", "Mustafa Imran"],
    services: ["Full Stack Development", "MERN Stack Solutions", "WordPress Systems", "UI/UX Architecture"],
    tagline: "Building lightweight, scalable, and secure full-stack software assets using contemporary frameworks."
  },
  {
    id: "ai",
    title: "Mobile & Autonomous AI",
    subtitle: "Next-Gen Machine Learning Pipelines",
    icon: <Smartphone size={20} />,
    head: { name: "Abdul Hanan", role: "Head of Artificial Intelligence" },
    members: ["Muhammad Fahad", "Zeeshan Haider", "Ayesha Noor"],
    services: ["Mobile App Development", "Generative AI Integration", "Autonomous AI Agents"],
    tagline: "Deploying intelligent autonomous agents, complex prompt middleware, and cross-platform native apps."
  },
  {
    id: "devops",
    title: "DevOps & Cloud Automation",
    subtitle: "Zero-Downtime Pipeline Engineering",
    icon: <Cpu size={20} />,
    head: { name: "Muhammad Owais", role: "Project Director" },
    members: ["Owais Chaudhary", "Arsalan Raza", "Kamran Asif"],
    services: ["DevOps & CI/CD Pipelines", "n8n & Zapier Automation", "Cloud Infrastructure Planning"],
    tagline: "Abstracting server infrastructure into fluid, automated workflows and containerized pipelines."
  },
  {
    id: "cyber",
    title: "Cyber Security Operations",
    subtitle: "Bulletproof Infrastructure Defense",
    icon: <ShieldCheck size={20} />,
    head: { name: "Hamdan Aleem", role: "Senior Cybersecurity Engineer" },
    members: ["Saad Rehman", "Tayyab Iqbal"],
    services: ["Security Audits", "System Penetration Testing", "Secure Infrastructure Deployment"],
    tagline: "Enforcing modern cryptographic protocols, continuous threat intelligence, and extreme vulnerability mitigation."
  }
];

const STATS_DATA = [
  { number: "06", label: "Specialized Depts", desc: "Integrated digital divisions" },
  { number: "35+", label: "Active Engineers", desc: "Vetted subject specialists" },
  { number: "15+", label: "Years Core Leadership", desc: "Strategic industry insight" },
  { number: "500+", label: "Ecosystems Delivered", desc: "Global production assets" }
];

const OurTeam = () => {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].id);
  const [selectedLeader, setSelectedLeader] = useState(CORE_LEADERS[0].id);

  const currentDept = DEPARTMENTS.find(d => d.id === activeDept) || DEPARTMENTS[0];
  const activeLeaderInfo = CORE_LEADERS.find(l => l.id === selectedLeader) || CORE_LEADERS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allDeptAssets = currentDept.head
    ? [`${currentDept.head.name} (Lead)`, ...currentDept.members]
    : currentDept.members;

  return (
    <div className="bg-white text-slate-800 min-h-screen font-poppins antialiased selection:bg-purple-600 selection:text-white">

      {/* SECTION 1: HERO SECTION */}
      <div className="relative min-h-[50vh] flex items-center justify-start bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden px-6 lg:px-16 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.04),transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl relative z-10 mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-100/80 rounded-full text-purple-700 text-xs font-semibold tracking-wider uppercase mb-6">
            <Layers size={12} /> Expert Opinions Team
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Architecting the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Next Digital Frontier
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            We operate as a highly specialized team of software engineers, machine learning specialists, marketplace strategists, and cybersecurity experts.
          </p>
        </div>
      </div>

      {/* SECTION 2: EXECUTIVE LEADERSHIP PANEL */}
      <section className="py-24 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-slate-100 pb-8 mb-12 gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase mb-2">
                Executive Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Our Steering Committee
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md font-light leading-relaxed">
              Select an executive officer to read their profile, professional focus, and strategic agency background.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Portrait Selector Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {CORE_LEADERS.map((leader) => {
                const isCurrent = leader.id === selectedLeader;
                return (
                  <div
                    key={leader.id}
                    onClick={() => setSelectedLeader(leader.id)}
                    className={`group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 ${isCurrent
                      ? 'border-purple-600 ring-4 ring-purple-100 shadow-lg scale-[0.99]'
                      : 'border-slate-100 opacity-80 hover:opacity-100'
                      }`}
                  >
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top filter grayscale contrast-110 transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[10px] text-purple-300 font-bold tracking-wider uppercase mb-0.5">{leader.role}</p>
                      <h4 className="text-sm sm:text-base font-bold text-white truncate">{leader.name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Bios Display Panel */}
            <div className="lg:col-span-5 bg-slate-50/50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded border border-purple-100 font-semibold tracking-wider">
                      LEADER PROFILE
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-3">{activeLeaderInfo.name}</h3>
                    <p className="text-xs text-purple-600 font-semibold mt-0.5">{activeLeaderInfo.role}</p>
                  </div>
                  {activeLeaderInfo.linkedin !== '#' && (
                    <a
                      href={activeLeaderInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white border border-slate-200 hover:border-purple-200 hover:bg-purple-50 rounded-lg text-slate-500 hover:text-purple-600 transition-colors"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {activeLeaderInfo.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400 tracking-wider">
                EXECUTIVE ADVISORY BOARD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DEPARTMENTS DIRECTORY */}
      <section className="py-24 bg-slate-50/30 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-slate-200 pb-8 mb-12 gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase mb-2">
                Operational Framework
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Our Specialized Departments
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md font-light leading-relaxed">
              Explore our functional business units to see team structures, leadership direction, and specialized capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-5 space-y-3">
              {DEPARTMENTS.map((dept) => {
                const isSelected = dept.id === activeDept;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setActiveDept(dept.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group relative ${isSelected
                      ? 'bg-white border-purple-500 shadow-md text-slate-900'
                      : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50/50'
                      }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-1/4 w-[3px] h-1/2 bg-purple-600 rounded-r" />
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-colors ${isSelected ? 'bg-purple-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:text-purple-600 group-hover:bg-purple-50'
                        }`}>
                        {dept.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base tracking-tight">{dept.title}</h4>
                        <p className="text-xs text-slate-400 font-light truncate max-w-[240px] mt-0.5">{dept.subtitle}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${isSelected ? 'transform translate-x-1 text-purple-600' : 'opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5'
                      }`} />
                  </button>
                );
              })}
            </div>

            {/* Dynamic Details Console */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 min-h-[520px] flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/20 blur-3xl rounded-full pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                  <div>
                    <span className="text-[10px] font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-100/80">
                      DEPARTMENT FOCUS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-2">{currentDept.title}</h3>
                  </div>
                  {currentDept.head && (
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-slate-400 tracking-wider font-semibold uppercase">Department Lead</p>
                      <p className="text-sm font-bold text-purple-600">{currentDept.head.name}</p>
                      <p className="text-[11px] text-slate-500 font-light">{currentDept.head.role}</p>
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                  "{currentDept.tagline}"
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={14} className="text-purple-600" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Team Members ({allDeptAssets.length})
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                    {allDeptAssets.map((member, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-slate-50/50 border border-slate-100 rounded-lg p-2.5 text-xs text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full ${member.includes('(Lead)') ? 'bg-purple-600' : 'bg-emerald-500'}`} />
                        <span className="font-medium truncate">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 mt-auto">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">Core Capabilities</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentDept.services.map((service, idx) => (
                    <div key={idx} className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md text-xs font-medium">
                      <CheckCircle2 size={11} className="text-purple-600" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HIGH-END METRIC TILES */}
      <section className="py-16 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS_DATA.map((stat, i) => (
              <div key={i} className="bg-slate-50/50 border border-slate-100/80 p-6 rounded-xl hover:border-purple-200 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">{stat.number}</div>
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">{stat.label}</div>
                <p className="text-xs text-slate-500 font-light">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MINIMALIST CONTEXT CTA */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Join Our Team
              </h2>
              <p className="text-purple-100 text-sm sm:text-base font-light leading-relaxed mb-8">
                We are regularly scouting dedicated specialists to reinforce our engineering, AI automation, and eCommerce pipelines.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:Support@expertopinions.net"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-7 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors text-sm"
                >
                  <span>Submit Your Profile</span>
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-xs text-purple-200 font-mono">
                  Email: Support@expertopinions.net
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurTeam;